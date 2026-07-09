---
title: فراهم ڪندڙ-آگاهه پرومپٽ ڪيشنگ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# فراهم ڪندڙ-آگاهه Prompt Caching

Superdav AI Agent v1.12.0 **فراهم ڪندڙ-آگاهه prompt caching** متعارف ڪرائي ٿو، جيڪا مختلف LLM فراهم ڪندڙن ۾ prompts کي cache ڪري API خرچن ۽ دير کي بهتر بڻائي ٿي. هر فراهم ڪندڙ جا caching جا طريقا ۽ ترتيبون مختلف آهن.

## جائزو

Prompt caching توهان کي اجازت ڏئي ٿي ته:

- وڏا، گهڻو استعمال ٿيندڙ prompts cache ڪريو
- ورجائتي پروسيسنگ کان بچي API خرچ گهٽايو
- cache ٿيل درخواستن لاءِ دير بهتر ڪريو
- cache جي زندگي چڪر کي واضح طور سنڀاليو

مختلف فراهم ڪندڙ caching کي مختلف نموني لاڳو ڪن ٿا:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL سان Prompt caching
- **OpenRouter**: فراهم ڪندڙ-مخصوص caching
- **Vertex Anthropic**: cache control سان Prompt caching

## Google Gemini: cachedContents API

Google Gemini `cachedContents` API ذريعي واضح cache انتظام مهيا ڪري ٿو.

### ترتيب

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

### Cache ٿيل Prompt ٺاهڻ

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

### Cache ٿيل Prompt استعمال ڪرڻ

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache جي زندگي چڪر

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

### Gemini لاءِ بهترين طريقا

- **مناسب TTL مقرر ڪريو**: خرچن جي بچت ۽ cache جي پراڻائپ ۾ توازن رکو
- **سسٽم prompts cache ڪريو**: درخواستن ۾ ساڳيو سسٽم prompt ٻيهر استعمال ڪريو
- **cache استعمال جي نگراني ڪريو**: ڏسو ڪهڙا caches سڀ کان وڌيڪ استعمال ٿين ٿا
- **مدو پورو ٿيل caches صاف ڪريو**: غير استعمال ٿيل caches وقت بوقت حذف ڪريو

## Azure OpenAI: Prompt Caching

Azure OpenAI خودڪار TTL انتظام سان prompt caching جي حمايت ڪري ٿو.

### ترتيب

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

### Caching فعال ڪرڻ

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

### Cache Headers

Azure OpenAI cache control لاءِ HTTP headers استعمال ڪري ٿو:

```
Cache-Control: max_age=3600
```

حمايت ٿيل قدر:

- `max_age=<seconds>`: ڄاڻايل مدت لاءِ cache ڪريو
- `no_cache`: هن درخواست کي cache نه ڪريو
- `no_store`: cache نه ڪريو ۽ ٻيهر استعمال نه ڪريو

### Cache استعمال جي نگراني

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI لاءِ بهترين طريقا

- **هڪجهڙا prompts استعمال ڪريو**: ساڳيا prompts caching مان فائدو وٺن ٿا
- **مناسب TTL مقرر ڪريو**: خرچ ۽ تازگي ۾ توازن رکو
- **cache ماپن جي نگراني ڪريو**: cache ٺهڻ ۽ hits جو پتو رکو
- **ساڳيون درخواستون batch ڪريو**: cache hits وڌائڻ لاءِ درخواستن کي گڏ ڪريو

## OpenRouter: فراهم ڪندڙ-مخصوص Caching

OpenRouter هيٺين فراهم ڪندڙن (OpenAI، Anthropic، وغيره) ذريعي caching جي حمايت ڪري ٿو.

### ترتيب

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

### OpenRouter Caching استعمال ڪرڻ

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

### فراهم ڪندڙ-مخصوص اختيار

مختلف فراهم ڪندڙن جا caching طريقا مختلف آهن:

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

### OpenRouter لاءِ بهترين طريقا

- **پنهنجي فراهم ڪندڙ جي caching ڄاڻو**: هر فراهم ڪندڙ جا طريقا مختلف آهن
- **caching جي رويي کي آزمائيو**: پنهنجي چونڊيل فراهم ڪندڙ سان پڪ ڪريو ته caching ڪم ڪري ٿي
- **خرچن جي نگراني ڪريو**: caching مان بچت جو پتو رکو
- **هڪجهڙا ماڊل استعمال ڪريو**: ماڊل بدلائڻ cache hits کي ٽوڙي ٿو

## Vertex Anthropic: Cache Control سان Prompt Caching

Vertex Anthropic (Google Cloud) واضح cache control سان prompt caching جي حمايت ڪري ٿو.

### ترتيب

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

### Vertex Anthropic ڪيشنگ استعمال ڪرڻ

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

### ڪيش ڪنٽرول جا قسم

- **ephemeral**: درخواست جي مدت لاءِ ڪيش (ڊفالٽ)
- **persistent**: ڪيترين درخواستن ۾ ڪيش (جيڪڏهن سهارو ڏنل هجي)

### ڪيش استعمال جي نگراني

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic لاءِ بهترين طريقا

- **ephemeral ڪيشنگ استعمال ڪريو**: هڪ-سيشن واري ڪيشنگ لاءِ سٺو
- **max_tokens مناسب نموني مقرر ڪريو**: ڪيش سائيز ۽ لاڳت ۾ توازن رکو
- **ڪيش ميٽرڪس جي نگراني ڪريو**: ڪيش جي اثرائتي کي ٽريڪ ڪريو
- **پنهنجي ڪم لوڊ سان ٽيسٽ ڪريو**: پڪ ڪريو ته ڪيشنگ توهان جي استعمال جي صورت کي فائدو ڏئي ٿي

## مختلف فراهم ڪندڙن لاءِ ڪيشنگ حڪمت عملي

### گڏيل ترتيب

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

### فراهم ڪندڙ جي سڃاڻپ

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### متبادل حڪمت عملي

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

## لاڳت جي بهتري

### بچت جو حساب ڪريو

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

### بهتري جا ٽوٽڪا

- **وڏا سسٽم پرامپٽ ڪيش ڪريو**: سڀ کان وڏي لاڳت بچت
- **حوالو ٻيهر استعمال ڪريو**: اڪثر استعمال ٿيندڙ حوالي وارا دستاويز ڪيش ڪريو
- **درخواستون بيچ ڪريو**: ڪيش هٽ وڌائڻ لاءِ ملندڙ جلندڙ درخواستن کي گڏ ڪريو
- **ڪيش جي اثرائتي جي نگراني ڪريو**: حقيقي بچت کي ٽريڪ ڪريو
- **TTL ترتيب ڏيو**: لاڳت ۽ تازگي ۾ توازن رکو

## مسئلا حل ڪرڻ

### ڪيش استعمال نه ٿي رهي آهي

- پڪ ڪريو ته ترتيب ۾ ڪيشنگ فعال آهي
- چيڪ ڪريو ته پرامپٽ ساڳيا آهن (ڪيشنگ لاءِ بلڪل ساڳيو ملڻ ضروري آهي)
- پڪ ڪريو ته ڪيش ختم نه ٿي آهي
- فراهم ڪندڙ-مخصوص ڪيش حدون چيڪ ڪريو

### ڪيش ٺاهڻ ناڪام ٿي رهيو آهي

- پڪ ڪريو ته ڪيش سائيز فراهم ڪندڙ جي حدن اندر آهي
- چيڪ ڪريو ته ڪيش ڪنٽرول نحو صحيح آهي
- يقيني بڻايو ته فراهم ڪندڙ توهان جي ماڊل لاءِ ڪيشنگ کي سهارو ڏئي ٿو
- حدن لاءِ فراهم ڪندڙ جي دستاويزن جو جائزو وٺو

### غير متوقع لاڳتون

- ڪيش ٺاهڻ ۽ ڪيش پڙهڻ وارن ٽوڪنن جي نگراني ڪريو
- پڪ ڪريو ته ڪيش واقعي استعمال ٿي رهي آهي
- پرامپٽ جي تبديليين سبب ڪيش مس چيڪ ڪريو
- TTL يا ڪيش حڪمت عملي ترتيب ڏيڻ تي غور ڪريو

## فراهم ڪندڙن جو مقابلو

| خاصيت | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| ڪيش API | cachedContents | HTTP headers | فراهم ڪندڙ-مخصوص | ڪيش ڪنٽرول |
| TTL ڪنٽرول | واضح | headers ذريعي | فراهم ڪندڙ-تي-دارومدار | Ephemeral/persistent |
| وڌ ۾ وڌ ڪيش سائيز | 1M ٽوڪن | فراهم ڪندڙ-تي-دارومدار | فراهم ڪندڙ-تي-دارومدار | 1M ٽوڪن |
| لاڳت ۾ گهٽتائي | 90% | 90% | فراهم ڪندڙ-تي-دارومدار | 90% |
| نگراني | تفصيلي | ميٽرڪس ذريعي | فراهم ڪندڙ-تي-دارومدار | استعمال ذريعي |

## ايندڙ قدم

1. **پنهنجو فراهم ڪندڙ چونڊيو**: پنهنجي ضرورتن جي بنياد تي چونڊيو
2. **ڪيشنگ ترتيب ڏيو**: فراهم ڪندڙ-مخصوص ڪيشنگ سيٽ اپ ڪريو
3. **ڪيشنگ ٽيسٽ ڪريو**: پڪ ڪريو ته اها توهان جي پرامپٽن سان ڪم ڪري ٿي
4. **استعمال جي نگراني ڪريو**: ڪيش هٽس ۽ لاڳت بچت کي ٽريڪ ڪريو
5. **بهتر ڪريو**: نتيجن جي بنياد تي TTL ۽ ڪيش حڪمت عملي ترتيب ڏيو
