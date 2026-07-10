---
title: Кеширање промптова свесно провајдера
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кеширање промптова свесно провајдера {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 уводи **кеширање промптова свесно провајдера**, које оптимизује API трошкове и кашњење кеширањем промптова код различитих LLM провајдера. Сваки провајдер има различите механизме и конфигурације кеширања.

## Преглед {#overview}

Кеширање промптова вам омогућава да:

- Кеширате велике, често коришћене промптове
- Смањите API трошкове избегавањем сувишне обраде
- Побољшате кашњење за кеширане захтеве
- Експлицитно управљате животним циклусом кеша

Различити провајдери различито имплементирају кеширање:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: кеширање промптова са TTL
- **OpenRouter**: кеширање специфично за провајдера
- **Vertex Anthropic**: кеширање промптова са контролом кеша

## Google Gemini: `cachedContents` API {#google-gemini-cachedcontents-api}

Google Gemini обезбеђује експлицитно управљање кешом преко `cachedContents` API.

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

### Креирање кешираног промпта {#creating-a-cached-prompt}

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

### Коришћење кешираног промпта {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Животни циклус кеша {#cache-lifecycle}

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

### Најбоље праксе за Gemini {#best-practices-for-gemini}

- **Подесите одговарајући TTL**: Уравнотежите уштеду трошкова и застарелост кеша
- **Кеширајте системске промптове**: Поново користите исти системски промпт у различитим захтевима
- **Пратите коришћење кеша**: Пратите који кешеви се највише користе
- **Очистите истекле кешеве**: Периодично избришите некоришћене кешеве

## Azure OpenAI: кеширање промптова {#azure-openai-prompt-caching}

Azure OpenAI подржава кеширање промптова са аутоматским управљањем TTL.

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

### Омогућавање кеширања {#enabling-caching}

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

### Заглавља кеша {#cache-headers}

Azure OpenAI користи HTTP заглавља за контролу кеша:

```
Cache-Control: max_age=3600
```

Подржане вредности:

- `max_age=<seconds>`: Кеширај за наведено трајање
- `no_cache`: Не кеширај овај захтев
- `no_store`: Не кеширај и не користи поново

### Праћење коришћења кеша {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Најбоље праксе за Azure OpenAI {#best-practices-for-azure-openai}

- **Користите доследне промптове**: Идентични промптови имају користи од кеширања
- **Подесите разуман TTL**: Уравнотежите трошак и свежину
- **Пратите метрике кеша**: Пратите креирање кеша у односу на поготке
- **Групишите сличне захтеве**: Групишите захтеве да максимизирате поготке кеша

## OpenRouter: кеширање специфично за провајдера {#openrouter-provider-specific-caching}

OpenRouter подржава кеширање преко основних провајдера (OpenAI, Anthropic итд.).

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

### Коришћење OpenRouter кеширања {#using-openrouter-caching}

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

### Опције специфичне за провајдера {#provider-specific-options}

Различити провајдери имају различите механизме кеширања:

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

### Најбоље праксе за OpenRouter {#best-practices-for-openrouter}

- **Познајте кеширање свог провајдера**: Сваки провајдер има различите механизме
- **Тестирајте понашање кеширања**: Проверите да кеширање ради са вашим изабраним провајдером
- **Пратите трошкове**: Пратите уштеде од кеширања
- **Користите доследне моделе**: Промена модела прекида поготке кеша

## Vertex Anthropic: кеширање промптова са контролом кеша {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) подржава кеширање промптова са експлицитном контролом кеша.

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

### Коришћење Vertex Anthropic кеширања {#using-vertex-anthropic-caching}

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

### Типови контроле кеша {#cache-control-types}

- **ephemeral**: Кеширање током трајања захтева (подразумевано)
- **persistent**: Кеширање кроз више захтева (ако је подржано)

### Праћење употребе кеша {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Најбоље праксе за Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Користите ephemeral кеширање**: Добро за кеширање у једној сесији
- **Подесите max_tokens на одговарајући начин**: Уравнотежите величину кеша и трошак
- **Пратите метрике кеша**: Пратите ефикасност кеша
- **Тестирајте са својим радним оптерећењем**: Проверите да кеширање користи вашем случају употребе

## Стратегија кеширања између провајдера {#cross-provider-caching-strategy}

### Јединствена конфигурација {#unified-configuration}

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

### Откривање провајдера {#provider-detection}

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

## Оптимизација трошкова {#cost-optimization}

### Израчунајте уштеде {#calculate-savings}

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

### Савети за оптимизацију {#optimization-tips}

- **Кеширајте велике системске промптове**: Највеће уштеде трошкова
- **Поново користите контекст**: Кеширајте често коришћене документе контекста
- **Групишите захтеве**: Групишите сличне захтеве да бисте максимално повећали поготке кеша
- **Пратите ефикасност кеша**: Пратите стварне уштеде
- **Прилагодите TTL**: Уравнотежите трошак и свежину

## Решавање проблема {#troubleshooting}

### Кеш се не користи {#cache-not-being-used}

- Проверите да ли је кеширање омогућено у конфигурацији
- Проверите да су промптови идентични (кеширање захтева потпуно подударање)
- Проверите да кеш није истекао
- Проверите ограничења кеша специфична за провајдера

### Креирање кеша не успева {#cache-creation-failing}

- Проверите да је величина кеша у оквиру ограничења провајдера
- Проверите да је синтакса контроле кеша исправна
- Уверите се да провајдер подржава кеширање за ваш модел
- Прегледајте документацију провајдера за ограничења

### Неочекивани трошкови {#unexpected-costs}

- Пратите креирање кеша у односу на токене читања кеша
- Проверите да се кеш заиста користи
- Проверите промашаје кеша због варијација у промптовима
- Размислите о прилагођавању TTL-а или стратегије кеша

## Поређење провајдера {#provider-comparison}

| Функција | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API кеша | cachedContents | HTTP headers | Специфично за провајдера | Контрола кеша |
| Контрола TTL-а | Експлицитна | Преко заглавља | Зависи од провајдера | Ephemeral/persistent |
| Максимална величина кеша | 1M токена | Зависи од провајдера | Зависи од провајдера | 1M токена |
| Смањење трошкова | 90% | 90% | Зависи од провајдера | 90% |
| Праћење | Детаљно | Преко метрика | Зависи од провајдера | Преко употребе |

## Следећи кораци {#next-steps}

1. **Изаберите свог провајдера**: Изаберите на основу својих потреба
2. **Конфигуришите кеширање**: Подесите кеширање специфично за провајдера
3. **Тестирајте кеширање**: Проверите да ли ради са вашим промптовима
4. **Пратите употребу**: Пратите поготке кеша и уштеде трошкова
5. **Оптимизујте**: Прилагодите TTL и стратегију кеша на основу резултата
