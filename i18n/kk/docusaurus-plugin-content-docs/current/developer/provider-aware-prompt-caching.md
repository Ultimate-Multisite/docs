---
title: Провайдерді ескеретін промпт кэштеу
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Провайдерді ескеретін Prompt Caching

Superdav AI Agent v1.12.0 әртүрлі LLM провайдерлері бойынша prompt-тарды кэштеу арқылы API шығындары мен кідірісті оңтайландыратын **провайдерді ескеретін prompt caching** мүмкіндігін енгізеді. Әр провайдердің кэштеу механизмдері мен конфигурациялары әртүрлі.

## Шолу

Prompt caching сізге мыналарға мүмкіндік береді:

- Үлкен, жиі қолданылатын prompt-тарды кэштеу
- Қайталанатын өңдеуді болдырмау арқылы API шығындарын азайту
- Кэштелген сұраулар үшін кідірісті жақсарту
- Кэштің өмірлік циклін айқын басқару

Әртүрлі провайдерлер кэштеуді әртүрлі жүзеге асырады:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL бар prompt caching
- **OpenRouter**: Провайдерге тән кэштеу
- **Vertex Anthropic**: Кэшті басқаруы бар prompt caching

## Google Gemini: cachedContents API

Google Gemini `cachedContents` API арқылы айқын кэш басқаруын ұсынады.

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

### Кэштелген prompt жасау

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

### Кэштелген prompt пайдалану

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Кэштің өмірлік циклі

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

### Gemini үшін үздік тәжірибелер

- **Тиісті TTL орнатыңыз**: Шығынды үнемдеу мен кэштің ескіруі арасындағы теңгерімді сақтаңыз
- **Жүйелік prompt-тарды кэштеңіз**: Сұраулар арасында бірдей жүйелік prompt-ты қайта пайдаланыңыз
- **Кэш қолданылуын бақылаңыз**: Қай кэштер ең көп қолданылатынын қадағалаңыз
- **Мерзімі өткен кэштерді тазалаңыз**: Пайдаланылмайтын кэштерді мерзімді түрде жойыңыз

## Azure OpenAI: Prompt Caching

Azure OpenAI автоматты TTL басқаруы бар prompt caching қолдайды.

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

### Кэштеуді қосу

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

### Кэш тақырыптары

Azure OpenAI кэшті басқару үшін HTTP тақырыптарын пайдаланады:

```
Cache-Control: max_age=3600
```

Қолдау көрсетілетін мәндер:

- `max_age=<seconds>`: Көрсетілген мерзімге кэштеу
- `no_cache`: Бұл сұрауды кэштемеу
- `no_store`: Кэштемеу және қайта пайдаланбау

### Кэш қолданылуын бақылау

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI үшін үздік тәжірибелер

- **Бірізді prompt-тарды пайдаланыңыз**: Бірдей prompt-тар кэштеуден пайда көреді
- **Ақылға қонымды TTL орнатыңыз**: Шығын мен жаңалық арасындағы теңгерімді сақтаңыз
- **Кэш метрикаларын бақылаңыз**: Кэш жасау мен hit-терін қадағалаңыз
- **Ұқсас сұрауларды топтаңыз**: Кэш hit-терін барынша арттыру үшін сұрауларды топтаңыз

## OpenRouter: Провайдерге тән кэштеу

OpenRouter негізгі провайдерлер (OpenAI, Anthropic және т.б.) арқылы кэштеуді қолдайды.

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

### OpenRouter кэштеуін пайдалану

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

### Провайдерге тән опциялар

Әртүрлі провайдерлердің кэштеу механизмдері әртүрлі:

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

### OpenRouter үшін үздік тәжірибелер

- **Провайдеріңіздің кэштеуін біліңіз**: Әр провайдердің механизмдері әртүрлі
- **Кэштеу әрекетін тексеріңіз**: Таңдалған провайдеріңізбен кэштеудің жұмыс істейтінін растаңыз
- **Шығындарды бақылаңыз**: Кэштеуден түскен үнемді қадағалаңыз
- **Бірізді модельдерді пайдаланыңыз**: Модельдерді ауыстыру кэш hit-терін бұзады

## Vertex Anthropic: Кэшті басқаруы бар Prompt Caching

Vertex Anthropic (Google Cloud) айқын кэш басқаруы бар prompt caching қолдайды.

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

### Vertex Anthropic кэштеуін пайдалану

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

### Кэшті басқару түрлері

- **ephemeral**: Сұрау ұзақтығына арналған кэш (әдепкі)
- **persistent**: Бірнеше сұрау бойынша кэш (қолдау көрсетілсе)

### Кэш қолданылуын бақылау

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic үшін үздік тәжірибелер

- **Эфемерлік кэштеуді пайдаланыңыз**: Бір сеанстық кэштеу үшін қолайлы
- **max_tokens мәнін дұрыс орнатыңыз**: Кэш өлшемі мен құн арасындағы тепе-теңдікті сақтаңыз
- **Кэш метрикаларын бақылаңыз**: Кэш тиімділігін қадағалаңыз
- **Өз жұмыс жүктемеңізбен сынаңыз**: Кэштеу сіздің қолдану жағдайыңызға пайда әкелетінін тексеріңіз

## Провайдерлер арасындағы кэштеу стратегиясы

### Бірыңғай конфигурация

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

### Провайдерді анықтау

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Резервтік стратегия

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

## Құнды оңтайландыру

### Үнемді есептеу

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

### Оңтайландыру кеңестері

- **Үлкен жүйелік prompt-тарды кэштеңіз**: Құнды ең көп үнемдеу
- **Контекстті қайта пайдаланыңыз**: Жиі қолданылатын контекст құжаттарын кэштеңіз
- **Сұрауларды топтаңыз**: Кэш сәйкестіктерін барынша көбейту үшін ұқсас сұрауларды біріктіріңіз
- **Кэш тиімділігін бақылаңыз**: Нақты үнемді қадағалаңыз
- **TTL мәнін реттеңіз**: Құн мен жаңалық арасындағы тепе-теңдікті сақтаңыз

## Ақаулықтарды жою

### Кэш қолданылмай жатыр

- Конфигурацияда кэштеу қосылғанын тексеріңіз
- Prompt-тар бірдей екенін тексеріңіз (кэштеу дәл сәйкестікті талап етеді)
- Кэштің мерзімі бітпегенін тексеріңіз
- Провайдерге тән кэш шектеулерін тексеріңіз

### Кэш жасау сәтсіз аяқталуда

- Кэш өлшемі провайдер шектеулерінің ішінде екенін тексеріңіз
- Кэшті басқару синтаксисі дұрыс екенін тексеріңіз
- Провайдер сіздің model үшін кэштеуді қолдайтынына көз жеткізіңіз
- Шектеулер үшін провайдер құжаттамасын қарап шығыңыз

### Күтпеген шығындар

- Кэш жасау мен кэштен оқу token-дарын бақылаңыз
- Кэш шынымен қолданылып жатқанын тексеріңіз
- Prompt өзгерістеріне байланысты кэш сәйкессіздіктерін тексеріңіз
- TTL немесе кэш стратегиясын реттеуді қарастырыңыз

## Провайдерлерді салыстыру

| Мүмкіндік | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Провайдерге тән | Кэшті басқару |
| TTL басқару | Айқын | Header-лер арқылы | Провайдерге тәуелді | Эфемерлік/тұрақты |
| Ең үлкен кэш өлшемі | 1M token | Провайдерге тәуелді | Провайдерге тәуелді | 1M token |
| Құнды азайту | 90% | 90% | Провайдерге тәуелді | 90% |
| Бақылау | Егжей-тегжейлі | Метрикалар арқылы | Провайдерге тәуелді | Қолданылу арқылы |

## Келесі қадамдар

1. **Провайдеріңізді таңдаңыз**: Қажеттіліктеріңізге қарай таңдаңыз
2. **Кэштеуді конфигурациялаңыз**: Провайдерге тән кэштеуді баптаңыз
3. **Кэштеуді сынаңыз**: Оның сіздің prompt-тарыңызбен жұмыс істейтінін тексеріңіз
4. **Қолданылуын бақылаңыз**: Кэш сәйкестіктерін және құн үнемін қадағалаңыз
5. **Оңтайландырыңыз**: Нәтижелерге сүйене отырып, TTL және кэш стратегиясын реттеңіз
