---
title: Кешаванне промптаў з улікам правайдэра
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кешаванне прамптаў, ўсведамляючы пра провайдэра {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 прадстаўляе **кешаванне прамптаў, ўсведамляючы пра провайдэра**, што аптымізуе выдаткі на API і латэнцыю, кешаванне прамптаў паміж рознымі провайдэрамі LLM. Кожны провайдэра мае свае спецыфічныя механізмы і канфігурацыі кешавання.

## Агляд {#overview}

Кешаванне прамптаў дазваляе вам:

- Кешаваць вялікія, часта выкарыстоўваныя прампты
- Зніжаць выдаткі на API, адмовіўшыся ад паўторнай праробкі
- Палепшыць латэнцыю для кешаваных запытаў
- Яўна кіраваць жыцдарным цыклам кеша

Розныя провайдэра ўпрэўмяваюць кешаванне па-розныму:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Кешаванне прамптаў з TTL
- **OpenRouter**: Кешаванне, спецыфічнае для провайдэра
- **Vertex Anthropic**: Кешаванне прамптаў з кантролем кеша

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini прадугледжвае яўнае кіраванне кешам праз API `cachedContents`.

### Канфігурацыя {#configuration}

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

### Стваৰэнне кешаванага прампта {#creating-a-cached-prompt}

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

### Выкарыстанне кешаванага прампта {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Жыцдар кеша {#cache-lifecycle}

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

### Найлепшыя практыкі для Gemini {#best-practices-for-gemini}

- **Устаноўце адпаведны TTL**: Збалансаванне эканоміі коштаў і старасці кеша
- **Кешаваць сістэмныя прампты**: Павторыстое выкарыстанне аднога і таго сістэмнага прампта ў розных запытах
- **Маніторыць выкарыстанне кеша**: Адказваць, якія кешы выкарыстоўваюцца найбольш
- **Пачысці прасрочаныя кешы**: Перадыважо адказваць невыкарыстоўваныя кешы

## Azure OpenAI: Кешаванне прамптаў {#azure-openai-prompt-caching}

Azure OpenAI падтрымлівае кешаванне прамптаў з аўтаматычным кіраваннем TTL.

### Канфігурацыя {#configuration-1}

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

### Аактывацыя кешавання {#enabling-caching}

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

### Загоłвы кеша {#cache-headers}

Azure OpenAI выкарыстоўвае HTTP-загоłвы для кантролю кеша:

```
Cache-Control: max_age=3600
```

Падтрымліваныя значэнні:

- `max_age=<seconds>`: Кешаванне на ўказаны перыяд
- `no_cache`: Не кешаваць гэты запыт
- `no_store`: Не кешаваць і не перавыкарыстоўваць

### Маніторынг выкарыстання кеша {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Найлепшыя практыкі для Azure OpenAI {#best-practices-for-azure-openai}

- **Выкарыстоўвайце адсочныя прампты**: Ідэнтычныя прампты выгадоўваюць кешаваннем
- **Устаноўце рацыянальны TTL**: Збалансаванне кошту і свежасці
- **Маніторыць метрыкі кеша**: Адказваць стварэнне кеша адносна паспехаў
- **Парачкаваць падобныя запыты**: Групваць запыты, каб максімізаваць паспехі кеша

## OpenRouter: Кешаванне, спецыфічнае для провайдэра {#openrouter-provider-specific-caching}

OpenRouter падтрымлівае кешаванне праз падлёжачых провайдэраў (OpenAI, Anthropic і г.д.).

### Канфігурацыя {#configuration-2}

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

### Выкарыстанне кешавання OpenRouter {#using-openrouter-caching}

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

### Варыянты, спецыфічныя для провайдэра {#provider-specific-options}

Розныя провайдэры маюць розныя механізмы кешавання:

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

### Найлепшыя практыкі для OpenRouter {#best-practices-for-openrouter}

- **Знайце кешаванне вашага провайдэра**: Кожны провайдэра мае адрозныя механізмы
- **Пратэставуйце паводзіны кешавання**: Праверце, што кешаванне працуе з выбраным провайдэрамі
- **Маніторыце выдаткі**: Адказваць эканомію ад кешавання
- **Выкарыстоўвайце адсочныя мадэлі**: Змяненне мадэляў pháраўвае паспехі кеша

## Vertex Anthropic: Кешаванне прамптаў з кантролем кеша {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) падтрымлівае кешаванне прамптаў з яўнага кантролю кеша.

### Канфігурацыя {#configuration-3}

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

### Выкарыстанне кешавання Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Тыпы кантролю кеша {#cache-control-types}

- **ephemeral**: Кешаванне на працягу запыту (па ўстаянні)
- **persistent**: Кешаванне паміж некалькімі запытамі (калі падтрымліваецца)

### Маніторынг выкарыстання кеша {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Найлепшыя практыкі для Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Выкарыстоўвайце ephemeral кешаванне**: Добра для кешавання ў адным сесіі
- **Устаноўце max_tokens адпадна):** Збалансаванне памеру кеша і кошту
- **Маніторыць метрыкі кеша**: Адказваць эфектыўнасць кешавання
- **Патэставуйце на сваім нараладзе**: Праверце, ці кешаванне выгадоўвае вашыму выкарыстанню

## Стратэгія кешавання паміж провайдэрамі {#cross-provider-caching-strategy}

### Адраматыўная канфігурацыя {#unified-configuration}

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

### Выяўленне провайдэра {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Стратэгія рэзервацыі {#fallback-strategy}

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

## Аптымізацыя коштаў {#cost-optimization}

### Вылічэнне эканоміі {#calculate-savings}

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

### Парады па аптымізацыі {#optimization-tips}

- **Кешаваць вялікія сістэмныя прампты**: Найбольш вялікія эканоміі коштаў
- **Павторыстое выкарыстанне кантэксту**: Кешаванне часта выкарыстоўваных кантэкставых дакументаў
- **Парачкаванне запытаў**: Групванне падобных запытаў, каб максімізаваць паспехі кеша
- **Маніторынг эфектыўнасці кеша**: Адказванне сапраўдных эканоміў
- **Выпраўленне TTL**: Балансаванне кошту і свежасці

## Выяўленне і выпраўленне памылак {#troubleshooting}

### Кеш не выкарыстоўваецца {#cache-not-being-used}

- Праверце, што кешаванне актывавана ў канфігурацыі
- Праверце, што прампты ідэнтычныя (кешаванне патрабуе точнага спалучэння)
- Праверце, што кеш не прасрочыўся
- Праверце спецыфічныя для провайдэра ліміты кеша

### Памылка стварэння кеша {#cache-creation-failing}

- Праверце, што памер кеша ў рамках лімітаў провайдэра
- Праверце, што składняванне `cache control` правільна
- Убедзіцеся, што провайдэра падтрымлівае кешаванне для вашай мадэлі
- Пагледзьце дакументацыю провайдэра на магчымасці

### Нечакаваныя выдаткі {#unexpected-costs}

- Маніторыце стварэнне кеша адносна прачытання кеша
- Праверце, што кеш сапраўды выкарыстоўваецца
- Пагледзьце на промагілі кеша з-за варыяцый прамптаў
- Пагледжаць на магчымасць выпраўлення TTL або стратэгіі кеша

## Параўнанне провайдэраў {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cached | | | |
| | | | | |
| | | | | |

##
