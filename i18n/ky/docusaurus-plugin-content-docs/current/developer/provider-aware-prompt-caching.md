---
title: Провайдерди эске алган промптту кэштөө
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Провайдерди эске алган Prompt Caching

Superdav AI Agent v1.12.0 **провайдерди эске алган prompt caching** мүмкүнчүлүгүн киргизет, ал ар башка LLM провайдерлеринин ортосунда prompt’торду кэштөө аркылуу API чыгымдарын жана кечигүүнү оптималдаштырат. Ар бир провайдердин кэштөө механизмдери жана конфигурациялары ар башка.

## Жалпы сереп

Prompt caching төмөнкүлөргө мүмкүндүк берет:

- Чоң, көп колдонулган prompt’торду кэштөө
- Кайталанма иштетүүдөн качуу аркылуу API чыгымдарын азайтуу
- Кэштелген сурамдар үчүн кечигүүнү жакшыртуу
- Кэштин жашоо циклин ачык башкаруу

Ар башка провайдерлер кэштөөнү ар башкача ишке ашырат:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL менен prompt caching
- **OpenRouter**: Провайдерге мүнөздүү кэштөө
- **Vertex Anthropic**: Кэшти башкаруу менен prompt caching

## Google Gemini: cachedContents API

Google Gemini `cachedContents` API аркылуу ачык кэш башкарууну камсыздайт.

### Конфигурация

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 hour in seconds
        'max_tokens' => 1000000, // Max tokens to cache
    ],
];
```

### Кэштелген Prompt түзүү

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'ttl' => 3600,
    ]
);

// Returns: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Кэштелген Prompt колдонуу

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Кэштин жашоо цикли

```php
// List cached contents
$caches = $gemini->list_cached_contents();

// Get cache details
$cache = $gemini->get_cached_content( 'abc123' );

// Extend cache TTL
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Extend to 2 hours
);

// Delete cache
$gemini->delete_cached_content( 'abc123' );
```

### Gemini үчүн мыкты тажрыйбалар

- **Ылайыктуу TTL коюңуз**: Чыгымды үнөмдөө менен кэштин эскирип калышынын ортосунда тең салмак сактаңыз
- **Системалык prompt’торду кэштеңиз**: Бир эле системалык prompt’ту сурамдар боюнча кайра колдонуңуз
- **Кэш колдонулушун көзөмөлдөңүз**: Кайсы кэштер эң көп колдонуларын байкаңыз
- **Мөөнөтү бүткөн кэштерди тазалаңыз**: Колдонулбаган кэштерди мезгил-мезгили менен өчүрүңүз

## Azure OpenAI: Prompt Caching

Azure OpenAI автоматтык TTL башкаруусу менен prompt caching’ди колдойт.

### Конфигурация

```php
$config = [
    'provider' => 'azure-openai',
    'model' => 'gpt-4-turbo',
    'api_version' => '2024-08-01-preview',
    'caching' => [
        'enabled' => true,
        'cache_control' => 'max_age=3600',
    ],
];
```

### Кэштөөнү иштетүү

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => 'max_age=3600',
    ]
);

// Response includes cache usage:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Кэш Header’лери

Azure OpenAI кэшти башкаруу үчүн HTTP header’лерин колдонот:

```
Cache-Control: max_age=3600
```

Колдоого алынган маанилер:

- `max_age=<seconds>`: Көрсөтүлгөн убакытка кэштөө
- `no_cache`: Бул сурамды кэштебөө
- `no_store`: Кэштебөө жана кайра колдонбоо

### Кэш колдонулушун көзөмөлдөө

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI үчүн мыкты тажрыйбалар

- **Туруктуу prompt’торду колдонуңуз**: Бирдей prompt’тор кэштөөдөн пайда көрөт
- **Акылга сыярлык TTL коюңуз**: Чыгым менен жаңылыктын ортосунда тең салмак сактаңыз
- **Кэш метрикаларын көзөмөлдөңүз**: Кэш түзүлүшүн жана дал келүүлөрүн байкаңыз
- **Окшош сурамдарды топтоп жөнөтүңүз**: Кэш дал келүүлөрүн көбөйтүү үчүн сурамдарды топтоңуз

## OpenRouter: Провайдерге мүнөздүү кэштөө

OpenRouter негизги провайдерлер (OpenAI, Anthropic ж.б.) аркылуу кэштөөнү колдойт.

### Конфигурация

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Use OpenAI's caching
    ],
];
```

### OpenRouter кэштөөсүн колдонуу

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Провайдерге мүнөздүү параметрлер

Ар башка провайдерлердин кэштөө механизмдери ар башка:

```php
// OpenAI-compatible caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-compatible caching
$response = $router->generate(
    [
        'model' => 'anthropic/claude-3-opus',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);
```

### OpenRouter үчүн мыкты тажрыйбалар

- **Провайдериңиздин кэштөөсүн билиңиз**: Ар бир провайдердин механизмдери ар башка
- **Кэштөө жүрүм-турумун текшериңиз**: Тандалган провайдериңиз менен кэштөө иштээрин ырастаңыз
- **Чыгымдарды көзөмөлдөңүз**: Кэштөөдөн түшкөн үнөмдү байкаңыз
- **Туруктуу моделдерди колдонуңуз**: Моделдерди алмаштыруу кэш дал келүүлөрүн үзөт

## Vertex Anthropic: Кэшти башкаруу менен Prompt Caching

Vertex Anthropic (Google Cloud) ачык кэш башкаруусу менен prompt caching’ди колдойт.

### Конфигурация

```php
$config = [
    'provider' => 'vertex-anthropic',
    'model' => 'claude-3-opus',
    'project_id' => 'your-gcp-project',
    'region' => 'us-central1',
    'caching' => [
        'enabled' => true,
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ],
];
```

### Vertex Anthropic кэшин колдонуу

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'You are a helpful assistant...',
        'context' => 'Large context document...',
        'prompt' => 'User question here',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Response includes cache metrics:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Кэшти башкаруу түрлөрү

- **ephemeral**: Сурамдын узактыгына кэштөө (демейки)
- **persistent**: Бир нече сурам боюнча кэштөө (эгер колдоого алынса)

### Кэш колдонулушун көзөмөлдөө

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic үчүн мыкты практикалар

- **Эфемердик кэштөөнү колдонуңуз**: Бир сессиялык кэштөө үчүн жакшы
- **max_tokens маанисин ылайыктуу коюңуз**: Кэш өлчөмү менен нарктын ортосунда тең салмак сактаңыз
- **Кэш метрикаларын көзөмөлдөңүз**: Кэштин натыйжалуулугун байкаңыз
- **Жумуш жүгүңүз менен сынаңыз**: Кэштөө сиздин колдонуу жагдайыңызга пайда алып келерин текшериңиз

## Провайдерлер аралык кэштөө стратегиясы

### Бирдиктүү конфигурация

```php
$config = [
    'caching' => [
        'enabled' => true,
        'default_ttl' => 3600,
        'providers' => [
            'google-gemini' => [
                'ttl' => 3600,
                'max_tokens' => 1000000,
            ],
            'azure-openai' => [
                'cache_control' => 'max_age=3600',
            ],
            'vertex-anthropic' => [
                'cache_control' => [
                    'type' => 'ephemeral',
                    'max_tokens' => 1000000,
                ],
            ],
        ],
    ],
];
```

### Провайдерди аныктоо

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Резервдик стратегия

```php
try {
    // Try caching with primary provider
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fall back to non-cached request
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Наркты оптималдаштыруу

### Үнөмдөөнү эсептөө

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typical pricing (varies by provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x cheaper
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x cheaper
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### Оптималдаштыруу кеңештери

- **Чоң системалык чакырыктарды кэштөө**: Эң чоң нарк үнөмдөөсү
- **Контекстти кайра колдонуңуз**: Көп колдонулган контекст документтерин кэштеңиз
- **Сурамдарды топтоңуз**: Кэш попаданиелерин көбөйтүү үчүн окшош сурамдарды бириктириңиз
- **Кэштин натыйжалуулугун көзөмөлдөңүз**: Чыныгы үнөмдөөнү байкаңыз
- **TTL тууралаңыз**: Нарк менен жаңылыктын ортосунда тең салмак сактаңыз

## Көйгөйлөрдү чечүү

### Кэш колдонулбай жатат

- Конфигурацияда кэштөө иштетилгенин текшериңиз
- Чакырыктар бирдей экенин текшериңиз (кэштөө так дал келүүнү талап кылат)
- Кэштин мөөнөтү өтө элек экенин текшериңиз
- Провайдерге тиешелүү кэш чектөөлөрүн текшериңиз

### Кэш түзүү ишке ашпай жатат

- Кэш өлчөмү провайдер чектеринен ашпаганын текшериңиз
- Кэшти башкаруу синтаксиси туура экенин текшериңиз
- Провайдер сиздин моделиңиз үчүн кэштөөнү колдой турганын камсыздаңыз
- Чектөөлөр боюнча провайдер документтерин карап чыгыңыз

### Күтүлбөгөн чыгымдар

- Кэш түзүү менен кэштен окуу токендерин көзөмөлдөңүз
- Кэш чынында колдонулуп жатканын текшериңиз
- Чакыруу өзгөрүүлөрүнөн улам кэш өткөрүп жиберүүлөрүн текшериңиз
- TTL же кэш стратегиясын тууралоону карап көрүңүз

## Провайдерлерди салыштыруу

| Өзгөчөлүк | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Кэш API | cachedContents | HTTP баш саптары | Провайдерге тиешелүү | Кэшти башкаруу |
| TTL башкаруу | Так | Баш саптар аркылуу | Провайдерге көз каранды | Ephemeral/persistent |
| Максималдуу кэш өлчөмү | 1M токен | Провайдерге көз каранды | Провайдерге көз каранды | 1M токен |
| Наркты азайтуу | 90% | 90% | Провайдерге көз каранды | 90% |
| Көзөмөлдөө | Деталдуу | Метрикалар аркылуу | Провайдерге көз каранды | Колдонуу аркылуу |

## Кийинки кадамдар

1. **Провайдериңизди тандаңыз**: Муктаждыктарыңызга жараша тандаңыз
2. **Кэштөөнү конфигурациялаңыз**: Провайдерге тиешелүү кэштөөнү орнотуңуз
3. **Кэштөөнү сынаңыз**: Ал чакырыктарыңыз менен иштей турганын текшериңиз
4. **Колдонулушун көзөмөлдөңүз**: Кэш попаданиелерин жана нарк үнөмдөөсүн байкаңыз
5. **Оптималдаштырыңыз**: Натыйжалардын негизинде TTL жана кэш стратегиясын тууралаңыз
