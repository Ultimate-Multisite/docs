---
title: فراهم ڪندڙ کان باخبر پرامپٽ ڪيشنگ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# مهيا ڪندڙ-آگاهه Prompt Caching

Superdav AI Agent v1.12.0 **مهيا ڪندڙ-آگاهه prompt caching** متعارف ڪرائي ٿو، جيڪو مختلف LLM مهيا ڪندڙن ۾ prompts کي cache ڪري API خرچن ۽ latency کي بهتر بڻائي ٿو. هر مهيا ڪندڙ وٽ مختلف caching طريقا ۽ ترتيبون آهن.

## جائزو {#overview}

Prompt caching توهان کي اجازت ڏئي ٿي ته:

- وڏا، اڪثر استعمال ٿيندڙ prompts cache ڪريو
- غير ضروري processing کان بچي API خرچ گهٽايو
- cached requests لاءِ latency بهتر بڻايو
- cache lifecycle کي صاف نموني manage ڪريو

مختلف مهيا ڪندڙ caching مختلف نموني لاڳو ڪن ٿا:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL سان Prompt caching
- **OpenRouter**: مهيا ڪندڙ-مخصوص caching
- **Vertex Anthropic**: cache control سان Prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini `cachedContents` API ذريعي واضح cache management فراهم ڪري ٿو.

### ترتيب {#configuration}

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

### Cached Prompt ٺاهڻ {#creating-a-cached-prompt}

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

### Cached Prompt استعمال ڪرڻ {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Lifecycle {#cache-lifecycle}

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

### Gemini لاءِ بهترين عمل {#best-practices-for-gemini}

- **مناسب TTL مقرر ڪريو**: خرچ جي بچت ۽ cache جي پراڻپ ۾ توازن رکو
- **system prompts cache ڪريو**: requests ۾ ساڳيو system prompt ٻيهر استعمال ڪريو
- **cache جي استعمال جي نگراني ڪريو**: ڏسو ڪهڙا caches سڀ کان وڌيڪ استعمال ٿين ٿا
- **مدو پورو ٿيل caches صاف ڪريو**: غير استعمال ٿيل caches وقت بوقت حذف ڪريو

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI خودڪار TTL management سان prompt caching جي حمايت ڪري ٿو.

### ترتيب {#configuration-1}

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

### Caching فعال ڪرڻ {#enabling-caching}

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

### Cache Headers {#cache-headers}

Azure OpenAI cache control لاءِ HTTP headers استعمال ڪري ٿو:

```
Cache-Control: max_age=3600
```

حمايت ڪيل قيمتون:

- `max_age=<seconds>`: ڏنل عرصي لاءِ cache ڪريو
- `no_cache`: هن request کي cache نه ڪريو
- `no_store`: cache نه ڪريو ۽ ٻيهر استعمال نه ڪريو

### Cache Usage جي نگراني {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI لاءِ بهترين عمل {#best-practices-for-azure-openai}

- **هڪجهڙا prompts استعمال ڪريو**: ساڳيا prompts caching مان فائدو وٺن ٿا
- **مناسب TTL مقرر ڪريو**: خرچ ۽ تازگي ۾ توازن رکو
- **cache metrics جي نگراني ڪريو**: cache ٺهڻ ۽ hits کي track ڪريو
- **ساڳيا requests batch ڪريو**: cache hits وڌائڻ لاءِ requests کي گروهه بڻايو

## OpenRouter: مهيا ڪندڙ-مخصوص Caching {#openrouter-provider-specific-caching}

OpenRouter هيٺين مهيا ڪندڙن (OpenAI، Anthropic، وغيره) ذريعي caching جي حمايت ڪري ٿو.

### ترتيب {#configuration-2}

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

### OpenRouter Caching استعمال ڪرڻ {#using-openrouter-caching}

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

### مهيا ڪندڙ-مخصوص Options {#provider-specific-options}

مختلف مهيا ڪندڙن وٽ مختلف caching طريقا آهن:

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

### OpenRouter لاءِ بهترين عمل {#best-practices-for-openrouter}

- **پنهنجي مهيا ڪندڙ جي caching ڄاڻو**: هر مهيا ڪندڙ وٽ مختلف طريقا آهن
- **caching behavior آزمائيو**: پنهنجي چونڊيل مهيا ڪندڙ سان caching ڪم ڪري ٿي يا نه، تصديق ڪريو
- **خرچن جي نگراني ڪريو**: caching مان ٿيندڙ بچت کي track ڪريو
- **هڪجهڙا models استعمال ڪريو**: models تبديل ڪرڻ cache hits کي ٽوڙي ڇڏي ٿو

## Vertex Anthropic: Cache Control سان Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) واضح cache control سان prompt caching جي حمايت ڪري ٿو.

### ترتيب {#configuration-3}

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

### Vertex Anthropic ڪيشنگ استعمال ڪرڻ {#using-vertex-anthropic-caching}

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

### ڪيش ڪنٽرول جا قسم {#cache-control-types}

- **ephemeral**: درخواست جي مدت لاءِ ڪيش (ڊفالٽ)
- **persistent**: ڪيترين ئي درخواستن ۾ ڪيش (جيڪڏهن سهائتا ٿيل هجي)

### ڪيش جي استعمال جي نگراني {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic لاءِ بهترين طريقا {#best-practices-for-vertex-anthropic}

- **ephemeral caching استعمال ڪريو**: هڪڙي سيشن جي ڪيشنگ لاءِ سٺو
- **max_tokens مناسب طور سيٽ ڪريو**: ڪيش سائيز ۽ لاڳت ۾ توازن رکو
- **ڪيش ميٽرڪس جي نگراني ڪريو**: ڪيش جي اثرائتيت ٽريڪ ڪريو
- **پنهنجي workload سان ٽيسٽ ڪريو**: تصديق ڪريو ته ڪيشنگ توهان جي استعمال واري حالت کي فائدو ڏئي ٿي

## فراهم ڪندڙن جي وچ ۾ ڪيشنگ حڪمت عملي {#cross-provider-caching-strategy}

### متحد Configuration {#unified-configuration}

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

### فراهم ڪندڙ جي سڃاڻپ {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### متبادل حڪمت عملي {#fallback-strategy}

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

## لاڳت جي بهتري {#cost-optimization}

### بچت جو حساب ڪريو {#calculate-savings}

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

### بهتري جون صلاحون {#optimization-tips}

- **وڏا system prompts ڪيش ڪريو**: سڀ کان وڏي لاڳت بچت
- **context ٻيهر استعمال ڪريو**: اڪثر استعمال ٿيندڙ context دستاويز ڪيش ڪريو
- **درخواستون batch ڪريو**: ڪيش hits وڌ کان وڌ ڪرڻ لاءِ ملندڙ درخواستن کي گڏ ڪريو
- **ڪيش جي اثرائتيت جي نگراني ڪريو**: حقيقي بچت ٽريڪ ڪريو
- **TTL ترتيب ڏيو**: لاڳت ۽ تازگي ۾ توازن رکو

## مسئلا حل ڪرڻ {#troubleshooting}

### ڪيش استعمال نه ٿي رهي آهي {#cache-not-being-used}

- تصديق ڪريو ته configuration ۾ ڪيشنگ فعال آهي
- چيڪ ڪريو ته prompts هڪجهڙا آهن (ڪيشنگ لاءِ بلڪل ساڳيو match گهربل آهي)
- تصديق ڪريو ته ڪيش expire نه ٿي آهي
- فراهم ڪندڙ-مخصوص ڪيش حدون چيڪ ڪريو

### ڪيش ٺاهڻ ناڪام ٿي رهيو آهي {#cache-creation-failing}

- تصديق ڪريو ته ڪيش سائيز فراهم ڪندڙ جي حدن اندر آهي
- چيڪ ڪريو ته ڪيش ڪنٽرول syntax صحيح آهي
- پڪ ڪريو ته فراهم ڪندڙ توهان جي model لاءِ ڪيشنگ کي support ڪري ٿو
- حدن لاءِ فراهم ڪندڙ جي documentation جو جائزو وٺو

### اڻڄاتل لاڳتون {#unexpected-costs}

- ڪيش ٺاهڻ ۽ ڪيش پڙهڻ وارن tokens جي نگراني ڪريو
- تصديق ڪريو ته ڪيش واقعي استعمال ٿي رهي آهي
- prompt variations سبب ڪيش misses لاءِ چيڪ ڪريو
- TTL يا ڪيش حڪمت عملي ترتيب ڏيڻ تي غور ڪريو

## فراهم ڪندڙن جو مقابلو {#provider-comparison}

| خاصيت | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | فراهم ڪندڙ-مخصوص | ڪيش ڪنٽرول |
| TTL ڪنٽرول | واضح | headers ذريعي | فراهم ڪندڙ تي دارومدار | Ephemeral/persistent |
| وڌ کان وڌ ڪيش سائيز | 1M tokens | فراهم ڪندڙ تي دارومدار | فراهم ڪندڙ تي دارومدار | 1M tokens |
| لاڳت ۾ گهٽتائي | 90% | 90% | فراهم ڪندڙ تي دارومدار | 90% |
| نگراني | تفصيلي | metrics ذريعي | فراهم ڪندڙ تي دارومدار | usage ذريعي |

## ايندڙ قدم {#next-steps}

1. **پنهنجو فراهم ڪندڙ چونڊيو**: پنهنجي ضرورتن جي بنياد تي چونڊيو
2. **ڪيشنگ configure ڪريو**: فراهم ڪندڙ-مخصوص ڪيشنگ سيٽ اپ ڪريو
3. **ڪيشنگ ٽيسٽ ڪريو**: تصديق ڪريو ته اها توهان جي prompts سان ڪم ڪري ٿي
4. **استعمال جي نگراني ڪريو**: ڪيش hits ۽ لاڳت بچت ٽريڪ ڪريو
5. **بهتر ڪريو**: نتيجن جي بنياد تي TTL ۽ ڪيش حڪمت عملي ترتيب ڏيو
