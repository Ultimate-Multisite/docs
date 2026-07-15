---
title: Кэшкунии промпт бо дарназардошти провайдер
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кэшкунии промпт бо огоҳӣ аз провайдер

Superdav AI Agent v1.12.0 **кэшкунии промпт бо огоҳӣ аз провайдер**-ро муаррифӣ мекунад, ки хароҷоти API ва таъхирро тавассути кэшкунии промптҳо дар байни провайдерҳои гуногуни LLM оптимизатсия мекунад. Ҳар як провайдер механизмҳо ва конфигуратсияҳои гуногуни кэшкунӣ дорад.

## Шарҳи умумӣ {#overview}

Кэшкунии промпт ба шумо имкон медиҳад:

- Промптҳои калон ва зуд-зуд истифодашавандаро кэш кунед
- Хароҷоти API-ро бо пешгирӣ аз коркарди такрорӣ кам кунед
- Таъхирро барои дархостҳои кэшшуда беҳтар кунед
- Давраи ҳаёти кэшро ошкоро идора кунед

Провайдерҳои гуногун кэшкуниро ба таври гуногун амалӣ мекунанд:

- **Google Gemini**: API-и `cachedContents`
- **Azure OpenAI**: Кэшкунии промпт бо TTL
- **OpenRouter**: Кэшкунии махсуси провайдер
- **Vertex Anthropic**: Кэшкунии промпт бо назорати кэш

## Google Gemini: API-и cachedContents {#google-gemini-cachedcontents-api}

Google Gemini идоракунии ошкори кэшро тавассути API-и `cachedContents` таъмин мекунад.

### Конфигуратсия {#configuration}

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

### Эҷоди промпти кэшшуда {#creating-a-cached-prompt}

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

### Истифодаи промпти кэшшуда {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Давраи ҳаёти кэш {#cache-lifecycle}

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

### Беҳтарин таҷрибаҳо барои Gemini {#best-practices-for-gemini}

- **TTL-и мувофиқ таъин кунед**: Сарфаи хароҷотро бо кӯҳнашавии кэш мувозинат кунед
- **Промптҳои системавиро кэш кунед**: Ҳамон промпти системавиро дар байни дархостҳо дубора истифода баред
- **Истифодаи кэшро назорат кунед**: Пайгирӣ кунед, ки кадом кэшҳо бештар истифода мешаванд
- **Кэшҳои муҳлаташон гузаштаро пок кунед**: Давра ба давра кэшҳои истифоданашударо нест кунед

## Azure OpenAI: Кэшкунии промпт {#azure-openai-prompt-caching}

Azure OpenAI кэшкунии промптро бо идоракунии худкори TTL дастгирӣ мекунад.

### Конфигуратсия {#configuration-1}

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

### Фаъол кардани кэшкунӣ {#enabling-caching}

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

### Сарлавҳаҳои кэш {#cache-headers}

Azure OpenAI барои назорати кэш сарлавҳаҳои HTTP-ро истифода мебарад:

```
Cache-Control: max_age=3600
```

Қиматҳои дастгиришуда:

- `max_age=<seconds>`: Барои давомнокии муайяншуда кэш кунед
- `no_cache`: Ин дархостро кэш накунед
- `no_store`: Кэш накунед ва дубора истифода набаред

### Мониторинги истифодаи кэш {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Беҳтарин таҷрибаҳо барои Azure OpenAI {#best-practices-for-azure-openai}

- **Промптҳои пайвастаро истифода баред**: Промптҳои якхела аз кэшкунӣ фоида мебинанд
- **TTL-и оқилона таъин кунед**: Хароҷотро бо тозагӣ мувозинат кунед
- **Метрикаҳои кэшро назорат кунед**: Эҷоди кэшро нисбат ба попаданияҳо пайгирӣ кунед
- **Дархостҳои монандро гурӯҳбандӣ кунед**: Дархостҳоро гурӯҳбандӣ кунед, то попаданияҳои кэшро ба ҳадди аксар расонед

## OpenRouter: Кэшкунии махсуси провайдер {#openrouter-provider-specific-caching}

OpenRouter кэшкуниро тавассути провайдерҳои зеринаш (OpenAI, Anthropic ва ғайра) дастгирӣ мекунад.

### Конфигуратсия {#configuration-2}

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

### Истифодаи кэшкунии OpenRouter {#using-openrouter-caching}

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

### Имконоти махсуси провайдер {#provider-specific-options}

Провайдерҳои гуногун механизмҳои гуногуни кэшкунӣ доранд:

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

### Беҳтарин таҷрибаҳо барои OpenRouter {#best-practices-for-openrouter}

- **Кэшкунии провайдери худро бидонед**: Ҳар як провайдер механизмҳои гуногун дорад
- **Рафтори кэшкуниро санҷед**: Боварӣ ҳосил кунед, ки кэшкунӣ бо провайдери интихобкардаи шумо кор мекунад
- **Хароҷотро назорат кунед**: Сарфаро аз кэшкунӣ пайгирӣ кунед
- **Моделҳои пайвастаро истифода баред**: Иваз кардани моделҳо попаданияҳои кэшро мешиканад

## Vertex Anthropic: Кэшкунии промпт бо назорати кэш {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) кэшкунии промптро бо назорати ошкори кэш дастгирӣ мекунад.

### Конфигуратсия {#configuration-3}

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

### Истифодаи Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Намудҳои идоракунии кеш {#cache-control-types}

- **ephemeral**: Кеш барои давомнокии дархост (пешфарз)
- **persistent**: Кеш дар байни якчанд дархост (агар дастгирӣ шавад)

### Мониторинги истифодаи кеш {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Беҳтарин таҷрибаҳо барои Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Истифодаи кеши ephemeral**: Барои кешкунии як-сеансӣ хуб аст
- **`max_tokens`-ро мувофиқ танзим кунед**: Андозаи кешро бо хароҷот мувозинат кунед
- **Метрикаҳои кешро мониторинг кунед**: Самаранокии кешро пайгирӣ кунед
- **Бо сарбории кори худ санҷед**: Тафтиш кунед, ки кешкунӣ барои мавриди истифодаи шумо фоида дорад

## Стратегияи кешкунӣ байни провайдерҳо {#cross-provider-caching-strategy}

### Танзимоти ягона {#unified-configuration}

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

### Муайянкунии провайдер {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Стратегияи fallback {#fallback-strategy}

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

## Оптимизатсияи хароҷот {#cost-optimization}

### Ҳисоб кардани сарфа {#calculate-savings}

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

### Маслиҳатҳои оптимизатсия {#optimization-tips}

- **Кеш кардани prompt-ҳои калони системавӣ**: Бузургтарин сарфаи хароҷот
- **Истифодаи дубораи контекст**: Ҳуҷҷатҳои контексти зуд-зуд истифодашавандаро кеш кунед
- **Дархостҳои batch**: Дархостҳои монандро гурӯҳбандӣ кунед, то cache hit-ҳоро ба ҳадди аксар расонед
- **Мониторинги самаранокии кеш**: Сарфаи воқеиро пайгирӣ кунед
- **Танзими TTL**: Хароҷотро бо тозагӣ мувозинат кунед

## Ҳалли мушкилот {#troubleshooting}

### Кеш истифода намешавад {#cache-not-being-used}

- Тафтиш кунед, ки кешкунӣ дар танзимот фаъол аст
- Санҷед, ки prompt-ҳо якхелаанд (кешкунӣ мувофиқати дақиқро талаб мекунад)
- Тафтиш кунед, ки муҳлати кеш ба охир нарасидааст
- Маҳдудиятҳои кеши махсуси провайдерро санҷед

### Эҷоди кеш ноком мешавад {#cache-creation-failing}

- Тафтиш кунед, ки андозаи кеш дар доираи маҳдудиятҳои провайдер аст
- Санҷед, ки синтаксиси идоракунии кеш дуруст аст
- Боварӣ ҳосил кунед, ки провайдер барои модели шумо кешкуниро дастгирӣ мекунад
- Ҳуҷҷатҳои провайдерро барои маҳдудиятҳо баррасӣ кунед

### Хароҷоти ғайричашмдошт {#unexpected-costs}

- Токенҳои эҷоди кешро нисбат ба токенҳои хондани кеш мониторинг кунед
- Тафтиш кунед, ки кеш воқеан истифода мешавад
- Норасоиҳои кешро аз сабаби фарқиятҳои prompt санҷед
- Дар бораи танзими TTL ё стратегияи кеш фикр кунед

## Муқоисаи провайдерҳо {#provider-comparison}

| Хусусият | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Махсуси провайдер | Идоракунии кеш |
| Идоракунии TTL | Ошкор | Тавассути headers | Вобаста ба провайдер | Ephemeral/persistent |
| Андозаи максималии кеш | 1M токен | Вобаста ба провайдер | Вобаста ба провайдер | 1M токен |
| Коҳиши хароҷот | 90% | 90% | Вобаста ба провайдер | 90% |
| Мониторинг | Муфассал | Тавассути метрикаҳо | Вобаста ба провайдер | Тавассути истифода |

## Қадамҳои минбаъда {#next-steps}

1. **Провайдери худро интихоб кунед**: Дар асоси ниёзҳои худ интихоб кунед
2. **Кешкуниро танзим кунед**: Кешкунии махсуси провайдерро роҳандозӣ кунед
3. **Кешкуниро санҷед**: Тафтиш кунед, ки он бо prompt-ҳои шумо кор мекунад
4. **Истифодаро мониторинг кунед**: Cache hit-ҳо ва сарфаи хароҷотро пайгирӣ кунед
5. **Оптимизатсия кунед**: TTL ва стратегияи кешро дар асоси натиҷаҳо танзим кунед
