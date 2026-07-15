---
title: کاشکردنی پرۆمپت بە ئاگاداری لە دابینکەر
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# کەشکردنی پرۆمپت بە ئاگاداری دابینکەر

Superdav AI Agent v1.12.0 **کەشکردنی پرۆمپت بە ئاگاداری دابینکەر** دەناسێنێت، کە تێچووی API و کاتی دواکەوتن باشتر دەکات بە کەشکردنی پرۆمپتەکان لە نێوان دابینکەرانی جیاوازی LLM. هەر دابینکەرێک میکانیزم و ڕێکخستنەکانی کەشکردنی جیاوازی هەیە.

## تێڕوانینێکی گشتی {#overview}

کەشکردنی پرۆمپت ڕێگەت پێدەدات:

- پرۆمپتی گەورە و زۆر بەکارهاتوو کەش بکەیت
- تێچووی API کەم بکەیتەوە بە خۆپاراستن لە پرۆسەکردنی دووبارەی بێپێویست
- کاتی دواکەوتن بۆ داواکارییە کەشکراوەکان باشتر بکەیت
- سووڕی ژیانی کەش بە ڕوونی بەڕێوە ببەیت

دابینکەرە جیاوازەکان کەشکردن بە شێوازی جیاواز جێبەجێ دەکەن:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: کەشکردنی پرۆمپت لەگەڵ TTL
- **OpenRouter**: کەشکردنی تایبەت بە دابینکەر
- **Vertex Anthropic**: کەشکردنی پرۆمپت لەگەڵ کۆنترۆڵی کەش

## Google Gemini: `cachedContents` API {#google-gemini-cachedcontents-api}

Google Gemini بەڕێوەبردنی ڕوونی کەش لە ڕێگەی `cachedContents` API دابین دەکات.

### ڕێکخستن {#configuration}

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

### دروستکردنی پرۆمپتێکی کەشکراو {#creating-a-cached-prompt}

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

### بەکارهێنانی پرۆمپتێکی کەشکراو {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### سووڕی ژیانی کەش {#cache-lifecycle}

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

### باشترین کردارەکان بۆ Gemini {#best-practices-for-gemini}

- **TTLی گونجاو دابنێ**: هاوسەنگی بکە لە نێوان پاشەکەوتی تێچوو و کۆنبوونی کەش
- **پرۆمپتی سیستەم کەش بکە**: هەمان پرۆمپتی سیستەم لە داواکارییەکاندا دووبارە بەکاربهێنە
- **بەکارهێنانی کەش چاودێری بکە**: بەدواداچوون بکە کە کام کەشەکان زۆرترین بەکارهێنانیان هەیە
- **کەشە بەسەرچووەکان پاک بکەرەوە**: بە ماوەماوە کەشە بەکارنەهاتووەکان بسڕەوە

## Azure OpenAI: کەشکردنی پرۆمپت {#azure-openai-prompt-caching}

Azure OpenAI پشتگیری کەشکردنی پرۆمپت دەکات لەگەڵ بەڕێوەبردنی ئۆتۆماتیکی TTL.

### ڕێکخستن {#configuration-1}

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

### چالاککردنی کەشکردن {#enabling-caching}

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

### سەرپەڕەکانی کەش {#cache-headers}

Azure OpenAI سەرپەڕەکانی HTTP بۆ کۆنترۆڵی کەش بەکاردەهێنێت:

```
Cache-Control: max_age=3600
```

بەها پشتگیریکراوەکان:

- `max_age=<seconds>`: کەش بکە بۆ ماوەی دیاریکراو
- `no_cache`: ئەم داواکارییە کەش مەکە
- `no_store`: کەش مەکە و دووبارە بەکاری مەهێنە

### چاودێریکردنی بەکارهێنانی کەش {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### باشترین کردارەکان بۆ Azure OpenAI {#best-practices-for-azure-openai}

- **پرۆمپتی یەکسان بەکاربهێنە**: پرۆمپتە وەک‌یەکەکان سوود لە کەشکردن وەردەگرن
- **TTLی گونجاو دابنێ**: هاوسەنگی بکە لە نێوان تێچوو و تازەیی
- **پێوانەکانی کەش چاودێری بکە**: دروستکردنی کەش بەراورد بە لێدانەکانی کەش بەدواداچوون بکە
- **داواکارییە هاوشێوەکان بە کۆمەڵ بکە**: داواکارییەکان کۆ بکەرەوە بۆ زۆرترینکردنی لێدانەکانی کەش

## OpenRouter: کەشکردنی تایبەت بە دابینکەر {#openrouter-provider-specific-caching}

OpenRouter لە ڕێگەی دابینکەرە بنەڕەتییەکانەوە پشتگیری کەشکردن دەکات (OpenAI, Anthropic, هتد.).

### ڕێکخستن {#configuration-2}

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

### بەکارهێنانی کەشکردنی OpenRouter {#using-openrouter-caching}

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

### هەڵبژاردە تایبەتەکانی دابینکەر {#provider-specific-options}

دابینکەرە جیاوازەکان میکانیزمی کەشکردنی جیاوازیان هەیە:

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

### باشترین کردارەکان بۆ OpenRouter {#best-practices-for-openrouter}

- **کەشکردنی دابینکەرەکەت بناسە**: هەر دابینکەرێک میکانیزمی جیاوازی هەیە
- **ڕەفتاری کەشکردن تاقی بکەرەوە**: دڵنیا ببە کە کەشکردن لەگەڵ دابینکەری هەڵبژێردراوت کار دەکات
- **تێچووەکان چاودێری بکە**: پاشەکەوتەکانی کەشکردن بەدواداچوون بکە
- **مۆدێلی یەکسان بەکاربهێنە**: گۆڕینی مۆدێل لێدانەکانی کەش دەشکێنێت

## Vertex Anthropic: کەشکردنی پرۆمپت لەگەڵ کۆنترۆڵی کەش {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) پشتگیری کەشکردنی پرۆمپت دەکات لەگەڵ کۆنترۆڵی ڕوونی کەش.

### ڕێکخستن {#configuration-3}

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

### بەکارهێنانی Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### جۆرەکانی کۆنترۆڵی Cache {#cache-control-types}

- **ephemeral**: Cache بۆ ماوەی داواکارییەکە (بنەڕەت)
- **persistent**: Cache لە چەندین داواکارییدا (ئەگەر پشتگیری بکرێت)

### چاودێریکردنی بەکارهێنانی Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### باشترین شێوازەکان بۆ Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Cacheـی ephemeral بەکاربهێنە**: باشە بۆ Cacheـکردنی تاک-دانیشتن
- **max_tokens بە شێوەی گونجاو دابنێ**: هاوسەنگی بکە لە نێوان قەبارەی Cache و تێچوو
- **چاودێری پێوەرەکانی Cache بکە**: کاریگەری Cache بەدواداچوون بکە
- **لەگەڵ بارکارییەکەت تاقی بکەرەوە**: دڵنیابە کە Cache سوود بە حاڵەتی بەکارهێنانت دەگەیەنێت

## ستراتیژی Cacheکردن لە نێوان دابینکەرەکان {#cross-provider-caching-strategy}

### ڕێکخستنی یەکگرتوو {#unified-configuration}

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

### دۆزینەوەی دابینکەر {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### ستراتیژی جێگرەوە {#fallback-strategy}

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

## باشترکردنی تێچوو {#cost-optimization}

### ژماردنی پاشەکەوت {#calculate-savings}

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

### ئامۆژگارییەکانی باشترکردن {#optimization-tips}

- **پرۆمپتە گەورەکانی سیستەم Cache بکە**: گەورەترین پاشەکەوتی تێچوو
- **کۆنتێکست دووبارە بەکاربهێنەوە**: بەڵگەنامە کۆنتێکستە زۆر بەکارهێنراوەکان Cache بکە
- **داواکارییەکان بە Batch بکە**: داواکارییە هاوشێوەکان کۆبکەرەوە بۆ زۆرکردنی cache hit
- **چاودێری کاریگەری Cache بکە**: پاشەکەوتە ڕاستەقینەکان بەدواداچوون بکە
- **TTL ڕێکبخە**: هاوسەنگی بکە لە نێوان تێچوو و تازەیی

## چارەسەرکردنی کێشەکان {#troubleshooting}

### Cache بەکارناهێنرێت {#cache-not-being-used}

- پشتڕاستی بکەرەوە کە caching لە ڕێکخستنەکاندا چالاککراوە
- پشکنین بکە کە پرۆمپتەکان وەک یەکن (caching هاوتایی تەواو دەوێت)
- پشتڕاستی بکەرەوە کە cache بەسەرنەچووە
- سنوورە تایبەتەکانی cacheـی دابینکەر بپشکنە

### دروستکردنی Cache سەرکەوتوو نابێت {#cache-creation-failing}

- پشتڕاستی بکەرەوە کە قەبارەی cache لە ناو سنوورەکانی دابینکەردایە
- پشکنین بکە کە سینتاکسی کۆنترۆڵی cache ڕاستە
- دڵنیابە کە دابینکەر پشتگیری caching بۆ مۆدێلەکەت دەکات
- بەڵگەنامەکانی دابینکەر بۆ سنووردارکردنەکان پێداچوونەوە بکە

### تێچووی چاوەڕواننەکراو {#unexpected-costs}

- چاودێری tokenـەکانی دروستکردنی cache بەرامبەر خوێندنەوەی cache بکە
- پشتڕاستی بکەرەوە کە cache بەڕاستی بەکاردەهێنرێت
- پشکنین بکە بۆ cache miss بەهۆی جیاوازیی پرۆمپتەکان
- بیر لە ڕێکخستنی TTL یان ستراتیژی cache بکەرەوە

## بەراوردی دابینکەر {#provider-comparison}

| تایبەتمەندی | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | تایبەت بە دابینکەر | کۆنترۆڵی Cache |
| کۆنترۆڵی TTL | ڕوون | لە ڕێگەی headers | پەیوەست بە دابینکەر | Ephemeral/persistent |
| زۆرترین قەبارەی cache | 1M tokens | پەیوەست بە دابینکەر | پەیوەست بە دابینکەر | 1M tokens |
| کەمکردنەوەی تێچوو | 90% | 90% | پەیوەست بە دابینکەر | 90% |
| چاودێری | ورد | لە ڕێگەی metrics | پەیوەست بە دابینکەر | لە ڕێگەی usage |

## هەنگاوەکانی دواتر {#next-steps}

1. **دابینکەرەکەت هەڵبژێرە**: لەسەر بنەمای پێویستییەکانت هەڵبژێرە
2. **caching ڕێکبخە**: cachingـی تایبەت بە دابینکەر دابنێ
3. **caching تاقی بکەرەوە**: پشتڕاستی بکەرەوە کە لەگەڵ پرۆمپتەکانت کاردەکات
4. **بەکارهێنان چاودێری بکە**: cache hit و پاشەکەوتی تێچوو بەدواداچوون بکە
5. **باشتر بکە**: TTL و ستراتیژی cache لەسەر بنەمای ئەنجامەکان ڕێکبخە
