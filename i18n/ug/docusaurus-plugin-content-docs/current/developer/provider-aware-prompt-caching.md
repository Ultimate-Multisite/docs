---
title: تەمىنلىگۈچىگە ماسلاشقان پرامپتنى كەشلەش
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# تەمىنلىگۈچىدىن خەۋەردار Prompt Caching

Superdav AI Agent v1.12.0 **تەمىنلىگۈچىدىن خەۋەردار prompt caching** نى تونۇشتۇرىدۇ؛ بۇ ئوخشىمىغان LLM تەمىنلىگۈچىلەر ئارىسىدا prompt لارنى cache قىلىش ئارقىلىق API خىراجىتى ۋە كېچىكىشنى ئەلالاشتۇرىدۇ. ھەر بىر تەمىنلىگۈچىنىڭ cache مېخانىزمى ۋە سەپلىمىلىرى ئوخشىمايدۇ.

## ئومۇمىي چۈشەنچە

Prompt caching سىزگە تۆۋەندىكىلەرنى قىلىش ئىمكانىنى بېرىدۇ:

- چوڭ، دائىم ئىشلىتىلىدىغان prompt لارنى cache قىلىش
- تەكرار بىر تەرەپ قىلىشتىن ساقلىنىپ API خىراجىتىنى ئازايتىش
- cache قىلىنغان تەلەپلەرنىڭ كېچىكىشىنى ياخشىلاش
- cache ھايات دەۋرىنى ئېنىق باشقۇرۇش

ئوخشىمىغان تەمىنلىگۈچىلەر cache قىلىشنى ئوخشىمىغان ئۇسۇلدا ئەمەلگە ئاشۇرىدۇ:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL بىلەن prompt caching
- **OpenRouter**: تەمىنلىگۈچىگە خاس caching
- **Vertex Anthropic**: cache control بىلەن prompt caching

## Google Gemini: cachedContents API

Google Gemini `cachedContents` API ئارقىلىق ئېنىق cache باشقۇرۇشنى تەمىنلەيدۇ.

### سەپلىمە

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

### Cache قىلىنغان Prompt قۇرۇش

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

### Cache قىلىنغان Prompt نى ئىشلىتىش

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache ھايات دەۋرى

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

### Gemini ئۈچۈن ئەڭ ياخشى ئەمەلىيەتلەر

- **مۇۋاپىق TTL بەلگىلەڭ**: خىراجەت تېجەش بىلەن cache نىڭ كونىرىشى ئوتتۇرىسىدا تەڭپۇڭلۇق ساقلاڭ
- **سىستېما prompt لارنى cache قىلىڭ**: ئوخشاش سىستېما prompt نى تەلەپلەر ئارىسىدا قايتا ئىشلىتىڭ
- **cache ئىشلىتىلىشىنى كۆزىتىڭ**: قايسى cache لارنىڭ ئەڭ كۆپ ئىشلىتىلىدىغانلىقىنى ئىز قوغلاڭ
- **مۇددىتى ئۆتكەن cache لارنى تازىلاڭ**: ئىشلىتىلمەيدىغان cache لارنى قەرەللىك ئۆچۈرۈڭ

## Azure OpenAI: Prompt Caching

Azure OpenAI ئاپتوماتىك TTL باشقۇرۇشى بىلەن prompt caching نى قوللايدۇ.

### سەپلىمە

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

### Caching نى قوزغىتىش

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

Azure OpenAI cache control ئۈچۈن HTTP headers ئىشلىتىدۇ:

```
Cache-Control: max_age=3600
```

قوللايدىغان قىممەتلەر:

- `max_age=<seconds>`: بەلگىلەنگەن مۇددەت بويىچە cache قىلىش
- `no_cache`: بۇ تەلەپنى cache قىلماسلىق
- `no_store`: cache قىلماسلىق ۋە قايتا ئىشلەتمەسلىك

### Cache ئىشلىتىلىشىنى كۆزىتىش

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI ئۈچۈن ئەڭ ياخشى ئەمەلىيەتلەر

- **ئىزچىل prompt لارنى ئىشلىتىڭ**: ئوخشاش prompt لار caching دىن پايدا ئالىدۇ
- **مۇۋاپىق TTL بەلگىلەڭ**: خىراجەت بىلەن يېڭىلىق ئوتتۇرىسىدا تەڭپۇڭلۇق ساقلاڭ
- **cache ئۆلچەملىرىنى كۆزىتىڭ**: cache قۇرۇلۇشى بىلەن hit لارنى ئىز قوغلاڭ
- **ئوخشاش تەلەپلەرنى توپلاڭ**: cache hit لارنى ئەڭ يۇقىرى چەككە يەتكۈزۈش ئۈچۈن تەلەپلەرنى گۇرۇپپىلاڭ

## OpenRouter: تەمىنلىگۈچىگە خاس Caching

OpenRouter ئاستىدىكى تەمىنلىگۈچىلەر (OpenAI، Anthropic قاتارلىقلار) ئارقىلىق caching نى قوللايدۇ.

### سەپلىمە

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

### OpenRouter Caching نى ئىشلىتىش

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

### تەمىنلىگۈچىگە خاس تاللانمىلار

ئوخشىمىغان تەمىنلىگۈچىلەرنىڭ cache مېخانىزملىرى ئوخشىمايدۇ:

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

### OpenRouter ئۈچۈن ئەڭ ياخشى ئەمەلىيەتلەر

- **تەمىنلىگۈچىڭىزنىڭ caching نى بىلىڭ**: ھەر بىر تەمىنلىگۈچىنىڭ مېخانىزمى ئوخشىمايدۇ
- **caching ھەرىكىتىنى سىناڭ**: تاللىغان تەمىنلىگۈچىڭىز بىلەن caching نىڭ ئىشلەيدىغانلىقىنى دەلىللەڭ
- **خىراجەتنى كۆزىتىڭ**: caching ئارقىلىق تېجەلگەن مىقدارنى ئىز قوغلاڭ
- **ئىزچىل model لارنى ئىشلىتىڭ**: model ئالماشتۇرۇش cache hit لارنى بۇزىدۇ

## Vertex Anthropic: Cache Control بىلەن Prompt Caching

Vertex Anthropic (Google Cloud) ئېنىق cache control بىلەن prompt caching نى قوللايدۇ.

### سەپلىمە

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

### Vertex Anthropic Caching نى ئىشلىتىش

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

### Cache كونترول تۈرلىرى

- **ephemeral**: ئىلتىماس داۋامىدا Cache قىلىش (كۆڭۈلدىكى)
- **persistent**: كۆپ ئىلتىماس ئارىسىدا Cache قىلىش (قوللىسا)

### Cache ئىشلىتىلىشىنى كۆزىتىش

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic ئۈچۈن ئەڭ ياخشى ئەمەلىيەتلەر

- **ephemeral caching نى ئىشلىتىڭ**: يەككە session Cache قىلىشقا ماس كېلىدۇ
- **max_tokens نى مۇۋاپىق تەڭشەڭ**: Cache چوڭلۇقى بىلەن خىراجەت ئارىسىدا تەڭپۇڭلۇق ساقلاڭ
- **Cache ئۆلچەملىرىنى كۆزىتىڭ**: Cache ئۈنۈمىنى ئىز قوغلاڭ
- **ئۆز workloadىڭىز بىلەن سىناڭ**: Cache قىلىشنىڭ سىزنىڭ ئىشلىتىش ئەھۋالىڭىزغا پايدا ئېلىپ كېلىدىغانلىقىنى دەلىللەڭ

## تەمىنلىگۈچىلەر ئارا Cache ئىستراتېگىيەسى

### بىرلەشمە تەڭشەك

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

### تەمىنلىگۈچىنى بايقاش

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### قايتما ئىستراتېگىيە

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

## خىراجەتنى ئەلالاشتۇرۇش

### تېجەمنى ھېسابلاش

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

### ئەلالاشتۇرۇش ئۇسۇللىرى

- **چوڭ system prompt لارنى Cache قىلىڭ**: ئەڭ چوڭ خىراجەت تېجەش
- **context نى قايتا ئىشلىتىڭ**: دائىم ئىشلىتىلىدىغان context ھۆججەتلىرىنى Cache قىلىڭ
- **ئىلتىماسلارنى توپلاڭ**: ئوخشاش ئىلتىماسلارنى گۇرۇپپىلاپ، Cache hit نى ئەڭ يۇقىرى قىلىڭ
- **Cache ئۈنۈمىنى كۆزىتىڭ**: ئەمەلىي تېجەمنى ئىز قوغلاڭ
- **TTL نى تەڭشەڭ**: خىراجەت بىلەن يېڭىلىق ئارىسىدا تەڭپۇڭلۇق ساقلاڭ

## مەسىلىلەرنى ھەل قىلىش

### Cache ئىشلىتىلمەيۋاتىدۇ

- تەڭشەكتە Cache قىلىشنىڭ قوزغىتىلغانلىقىنى تەكشۈرۈڭ
- prompt لارنىڭ ئوخشاش ئىكەنلىكىنى تەكشۈرۈڭ (Cache قىلىش ئېنىق ماس كېلىشنى تەلەپ قىلىدۇ)
- Cache نىڭ ۋاقتى ئۆتۈپ كەتمىگەنلىكىنى دەلىللەڭ
- تەمىنلىگۈچىگە خاس Cache چەكلىمىلىرىنى تەكشۈرۈڭ

### Cache قۇرۇش مەغلۇپ بولۇۋاتىدۇ

- Cache چوڭلۇقىنىڭ تەمىنلىگۈچى چەكلىمىلىرى ئىچىدە ئىكەنلىكىنى دەلىللەڭ
- Cache كونترول syntax نىڭ توغرا ئىكەنلىكىنى تەكشۈرۈڭ
- تەمىنلىگۈچىنىڭ مودېلىڭىز ئۈچۈن Cache قىلىشنى قوللايدىغانلىقىغا كاپالەتلىك قىلىڭ
- چەكلىمىلەر ئۈچۈن تەمىنلىگۈچى ھۆججەتلىرىنى كۆرۈپ چىقىڭ

### كۈتۈلمىگەن خىراجەتلەر

- Cache قۇرۇش بىلەن Cache ئوقۇش token لىرىنى كۆزىتىڭ
- Cache نىڭ ھەقىقەتەن ئىشلىتىلىۋاتقانلىقىنى دەلىللەڭ
- prompt ئۆزگىرىشلىرى سەۋەبلىك Cache miss نى تەكشۈرۈڭ
- TTL ياكى Cache ئىستراتېگىيەسىنى تەڭشەشنى ئويلاڭ

## تەمىنلىگۈچى سېلىشتۇرمىسى

| ئىقتىدار | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | تەمىنلىگۈچىگە خاس | Cache control |
| TTL كونترول | ئېنىق | header لار ئارقىلىق | تەمىنلىگۈچىگە باغلىق | Ephemeral/persistent |
| ئەڭ چوڭ Cache چوڭلۇقى | 1M token | تەمىنلىگۈچىگە باغلىق | تەمىنلىگۈچىگە باغلىق | 1M token |
| خىراجەتنى ئازايتىش | 90% | 90% | تەمىنلىگۈچىگە باغلىق | 90% |
| كۆزىتىش | تەپسىلىي | ئۆلچەملەر ئارقىلىق | تەمىنلىگۈچىگە باغلىق | usage ئارقىلىق |

## كېيىنكى قەدەملەر

1. **تەمىنلىگۈچىڭىزنى تاللاڭ**: ئېھتىياجىڭىزغا ئاساسەن تاللاڭ
2. **Cache قىلىشنى تەڭشەڭ**: تەمىنلىگۈچىگە خاس Cache قىلىشنى تەڭشەپ چىقىڭ
3. **Cache قىلىشنى سىناڭ**: ئۇنىڭ prompt لىرىڭىز بىلەن ئىشلەيدىغانلىقىنى دەلىللەڭ
4. **ئىشلىتىشنى كۆزىتىڭ**: Cache hit ۋە خىراجەت تېجەشنى ئىز قوغلاڭ
5. **ئەلالاشتۇرۇڭ**: نەتىجىلەرگە ئاساسەن TTL ۋە Cache ئىستراتېگىيەسىنى تەڭشەڭ
