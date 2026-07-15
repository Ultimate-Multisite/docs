---
title: Кеширање на промптови свесно за провајдерот
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кеширање на промптови свесно за провајдерот

Superdav AI Agent v1.12.0 воведува **кеширање на промптови свесно за провајдерот**, кое ги оптимизира трошоците за API и латентноста преку кеширање промптови кај различни LLM провајдери. Секој провајдер има различни механизми и конфигурации за кеширање.

## Преглед {#overview}

Кеширањето на промптови ви овозможува да:

- Кеширате големи, често користени промптови
- Ги намалите трошоците за API преку избегнување непотребна повторна обработка
- Ја подобрите латентноста за кеширани барања
- Експлицитно управувате со животниот циклус на кешот

Различни провајдери го имплементираат кеширањето на различен начин:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Кеширање на промптови со TTL
- **OpenRouter**: Кеширање специфично за провајдер
- **Vertex Anthropic**: Кеширање на промптови со контрола на кеш

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini обезбедува експлицитно управување со кеш преку `cachedContents` API.

### Конфигурација {#configuration}

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

### Создавање кеширан промпт {#creating-a-cached-prompt}

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

### Користење кеширан промпт {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Животен циклус на кешот {#cache-lifecycle}

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

### Најдобри практики за Gemini {#best-practices-for-gemini}

- **Поставете соодветен TTL**: Балансирајте ги заштедите на трошоци наспроти застареноста на кешот
- **Кеширајте системски промптови**: Повторно користете го истиот системски промпт низ барањата
- **Следете ја употребата на кешот**: Следете кои кешови се користат најмногу
- **Исчистете ги истечените кешови**: Периодично бришете некористени кешови

## Azure OpenAI: Кеширање на промптови {#azure-openai-prompt-caching}

Azure OpenAI поддржува кеширање на промптови со автоматско управување со TTL.

### Конфигурација {#configuration-1}

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

### Овозможување кеширање {#enabling-caching}

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

### Заглавија за кеш {#cache-headers}

Azure OpenAI користи HTTP заглавија за контрола на кеш:

```
Cache-Control: max_age=3600
```

Поддржани вредности:

- `max_age=<seconds>`: Кеширај за наведеното времетраење
- `no_cache`: Не го кеширај ова барање
- `no_store`: Не кеширај и не користи повторно

### Следење на употребата на кешот {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Најдобри практики за Azure OpenAI {#best-practices-for-azure-openai}

- **Користете конзистентни промптови**: Идентични промптови имаат корист од кеширањето
- **Поставете разумен TTL**: Балансирајте ги трошоците наспроти свежината
- **Следете ги метриките за кеш**: Следете создавање кеш наспроти погодоците
- **Групирајте слични барања**: Групирајте барања за да ги максимизирате погодоците на кешот

## OpenRouter: Кеширање специфично за провајдер {#openrouter-provider-specific-caching}

OpenRouter поддржува кеширање преку основните провајдери (OpenAI, Anthropic, итн.).

### Конфигурација {#configuration-2}

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

### Користење OpenRouter кеширање {#using-openrouter-caching}

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

### Опции специфични за провајдер {#provider-specific-options}

Различни провајдери имаат различни механизми за кеширање:

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

### Најдобри практики за OpenRouter {#best-practices-for-openrouter}

- **Познавајте го кеширањето на вашиот провајдер**: Секој провајдер има различни механизми
- **Тестирајте го однесувањето на кеширањето**: Потврдете дека кеширањето работи со избраниот провајдер
- **Следете ги трошоците**: Следете ги заштедите од кеширањето
- **Користете конзистентни модели**: Менувањето модели ги прекинува погодоците на кешот

## Vertex Anthropic: Кеширање на промптови со контрола на кеш {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) поддржува кеширање на промптови со експлицитна контрола на кеш.

### Конфигурација {#configuration-3}

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

### Користење Vertex Anthropic кеширање {#using-vertex-anthropic-caching}

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

### Типови контрола на кеш {#cache-control-types}

- **ephemeral**: Кеш за времетраењето на барањето (стандардно)
- **persistent**: Кеш низ повеќе барања (ако е поддржано)

### Следење на користењето на кешот {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Најдобри практики за Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Користете ephemeral кеширање**: Добро за кеширање во една сесија
- **Поставете max_tokens соодветно**: Балансирајте ја големината на кешот наспроти трошокот
- **Следете ги метриките на кешот**: Следете ја ефективноста на кешот
- **Тестирајте со вашето работно оптоварување**: Потврдете дека кеширањето му користи на вашиот случај на употреба

## Стратегија за кеширање низ даватели {#cross-provider-caching-strategy}

### Унифицирана конфигурација {#unified-configuration}

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

### Откривање на давател {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Резервна стратегија {#fallback-strategy}

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

## Оптимизација на трошоци {#cost-optimization}

### Пресметајте заштеди {#calculate-savings}

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

### Совети за оптимизација {#optimization-tips}

- **Кеширајте големи системски промптови**: Најголеми заштеди на трошоци
- **Повторно користете контекст**: Кеширајте често користени контекстуални документи
- **Групирајте барања**: Групирајте слични барања за да ги максимизирате погодоците во кешот
- **Следете ја ефективноста на кешот**: Следете ги вистинските заштеди
- **Прилагодете TTL**: Балансирајте го трошокот наспроти свежината

## Решавање проблеми {#troubleshooting}

### Кешот не се користи {#cache-not-being-used}

- Проверете дали кеширањето е овозможено во конфигурацијата
- Проверете дали промптовите се идентични (кеширањето бара точно совпаѓање)
- Проверете дали кешот не истекол
- Проверете ги ограничувањата на кешот специфични за давателот

### Создавањето кеш не успева {#cache-creation-failing}

- Проверете дали големината на кешот е во рамките на ограничувањата на давателот
- Проверете дали синтаксата за контрола на кешот е точна
- Осигурајте се дека давателот поддржува кеширање за вашиот модел
- Прегледајте ја документацијата на давателот за ограничувања

### Неочекувани трошоци {#unexpected-costs}

- Следете го создавањето кеш наспроти токените за читање од кеш
- Проверете дали кешот навистина се користи
- Проверете за промашувања на кешот поради варијации во промптот
- Размислете за прилагодување на TTL или стратегијата за кеш

## Споредба на даватели {#provider-comparison}

| Функција | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Специфично за давателот | Контрола на кеш |
| TTL контрола | Експлицитна | Преку headers | Зависно од давателот | Ephemeral/persistent |
| Максимална големина на кеш | 1M токени | Зависно од давателот | Зависно од давателот | 1M токени |
| Намалување на трошоци | 90% | 90% | Зависно од давателот | 90% |
| Следење | Детално | Преку метрики | Зависно од давателот | Преку користење |

## Следни чекори {#next-steps}

1. **Изберете го вашиот давател**: Изберете врз основа на вашите потреби
2. **Конфигурирајте кеширање**: Поставете кеширање специфично за давателот
3. **Тестирајте кеширање**: Проверете дали работи со вашите промптови
4. **Следете го користењето**: Следете ги погодоците во кешот и заштедите на трошоци
5. **Оптимизирајте**: Прилагодете TTL и стратегија за кеш врз основа на резултатите
