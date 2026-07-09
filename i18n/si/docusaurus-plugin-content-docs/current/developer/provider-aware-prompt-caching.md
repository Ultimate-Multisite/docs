---
title: සැපයුම්කරු-සංවේදී ප්‍රොම්ප්ට් හැඹිලිගත කිරීම
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# සපයන්නා-දැනුවත් Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 **සපයන්නා-දැනුවත් prompt caching** හඳුන්වා දෙයි. මෙය විවිධ LLM සපයන්නන් අතර prompts cache කිරීමෙන් API පිරිවැය සහ ප්‍රමාදය ප්‍රශස්ත කරයි. සෑම සපයන්නෙකුටම වෙනස් caching ක්‍රම සහ වින්‍යාස තිබේ.

## දළ විශ්ලේෂණය {#overview}

Prompt caching ඔබට ඉඩ දෙන්නේ:

- විශාල, නිතර භාවිතා කරන prompts cache කිරීමට
- අතිරික්ත සැකසීම මඟහැර API පිරිවැය අඩු කිරීමට
- cached ඉල්ලීම් සඳහා ප්‍රමාදය වැඩිදියුණු කිරීමට
- cache ජීවන චක්‍රය පැහැදිලිව කළමනාකරණය කිරීමට

විවිධ සපයන්නන් caching වෙනස් ලෙස ක්‍රියාත්මක කරයි:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL සහිත prompt caching
- **OpenRouter**: සපයන්නා-විශේෂිත caching
- **Vertex Anthropic**: cache control සහිත prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini `cachedContents` API හරහා පැහැදිලි cache කළමනාකරණය සපයයි.

### වින්‍යාසය {#configuration}

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

### Cached Prompt එකක් සෑදීම {#creating-a-cached-prompt}

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

### Cached Prompt එකක් භාවිතා කිරීම {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache ජීවන චක්‍රය {#cache-lifecycle}

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

### Gemini සඳහා හොඳම ක්‍රියාමාර්ග {#best-practices-for-gemini}

- **සුදුසු TTL සකසන්න**: පිරිවැය ඉතිරිය සහ cache පරණ වීම අතර සමතුලිත කරන්න
- **system prompts cache කරන්න**: ඉල්ලීම් අතර එකම system prompt නැවත භාවිතා කරන්න
- **cache භාවිතය අධීක්ෂණය කරන්න**: වැඩියෙන්ම භාවිතා වන caches අනුගමනය කරන්න
- **කල් ඉකුත් වූ caches පිරිසිදු කරන්න**: භාවිතා නොවන caches කාලානුරූපව මකන්න

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ස්වයංක්‍රීය TTL කළමනාකරණය සමඟ prompt caching සඳහා සහය දක්වයි.

### වින්‍යාසය {#configuration-1}

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

### Caching සක්‍රීය කිරීම {#enabling-caching}

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

Azure OpenAI cache control සඳහා HTTP headers භාවිතා කරයි:

```
Cache-Control: max_age=3600
```

සහය දක්වන අගයන්:

- `max_age=<seconds>`: නියම කළ කාල සීමාව සඳහා cache කරන්න
- `no_cache`: මෙම ඉල්ලීම cache නොකරන්න
- `no_store`: cache නොකරන්න සහ නැවත භාවිතා නොකරන්න

### Cache භාවිතය අධීක්ෂණය {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI සඳහා හොඳම ක්‍රියාමාර්ග {#best-practices-for-azure-openai}

- **එකම ආකාරයේ prompts භාවිතා කරන්න**: හරියටම සමාන prompts caching වලින් ප්‍රතිලාභ ලබයි
- **සාධාරණ TTL සකසන්න**: පිරිවැය සහ නැවුම් බව අතර සමතුලිත කරන්න
- **cache මිනුම් අධීක්ෂණය කරන්න**: cache සෑදීම සහ hits අතර අනුගමනය කරන්න
- **සමාන ඉල්ලීම් batch කරන්න**: cache hits උපරිම කිරීමට ඉල්ලීම් කණ්ඩායම් කරන්න

## OpenRouter: සපයන්නා-විශේෂිත Caching {#openrouter-provider-specific-caching}

OpenRouter මූලික සපයන්නන් (OpenAI, Anthropic, ආදිය) හරහා caching සඳහා සහය දක්වයි.

### වින්‍යාසය {#configuration-2}

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

### OpenRouter Caching භාවිතා කිරීම {#using-openrouter-caching}

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

### සපයන්නා-විශේෂිත විකල්ප {#provider-specific-options}

විවිධ සපයන්නන්ට වෙනස් caching ක්‍රම තිබේ:

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

### OpenRouter සඳහා හොඳම ක්‍රියාමාර්ග {#best-practices-for-openrouter}

- **ඔබේ සපයන්නාගේ caching ගැන දැනගන්න**: සෑම සපයන්නෙකුටම වෙනස් ක්‍රම තිබේ
- **caching හැසිරීම පරීක්ෂා කරන්න**: ඔබ තෝරාගත් සපයන්නා සමඟ caching ක්‍රියා කරන බව තහවුරු කරන්න
- **පිරිවැය අධීක්ෂණය කරන්න**: caching මඟින් ලැබෙන ඉතිරිකිරීම් අනුගමනය කරන්න
- **එකම models භාවිතා කරන්න**: models මාරු කිරීම cache hits බිඳ දමයි

## Vertex Anthropic: Cache Control සහිත Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) පැහැදිලි cache control සමඟ prompt caching සඳහා සහය දක්වයි.

### වින්‍යාසය {#configuration-3}

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

### Vertex Anthropic Caching භාවිතය {#using-vertex-anthropic-caching}

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

### Cache Control වර්ග {#cache-control-types}

- **ephemeral**: ඉල්ලීමේ කාලය සඳහා Cache කරන්න (පෙරනිමි)
- **persistent**: ඉල්ලීම් කිහිපයක් හරහා Cache කරන්න (සහාය දක්වන්නේ නම්)

### Cache භාවිතය නිරීක්ෂණය {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic සඳහා හොඳම ක්‍රම {#best-practices-for-vertex-anthropic}

- **ephemeral caching භාවිත කරන්න**: තනි සැසි Cache කිරීම සඳහා හොඳයි
- **max_tokens සුදුසු ලෙස සකසන්න**: Cache ප්‍රමාණය සහ වියදම අතර සමතුලිත කරන්න
- **Cache මිනුම් නිරීක්ෂණය කරන්න**: Cache ඵලදායීතාව පසුපස යන්න
- **ඔබේ වැඩ බර සමඟ පරීක්ෂා කරන්න**: Cache කිරීම ඔබේ භාවිත අවස්ථාවට ප්‍රයෝජනවත් බව තහවුරු කරන්න

## සැපයුම්කරුවන් අතර Cache උපායමාර්ගය {#cross-provider-caching-strategy}

### ඒකාබද්ධ වින්‍යාසය {#unified-configuration}

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

### සැපයුම්කරු හඳුනාගැනීම {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### විකල්ප උපායමාර්ගය {#fallback-strategy}

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

## වියදම් ප්‍රශස්තිකරණය {#cost-optimization}

### ඉතිරිකිරීම් ගණනය කරන්න {#calculate-savings}

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

### ප්‍රශස්තිකරණ ඉඟි {#optimization-tips}

- **විශාල system prompts Cache කරන්න**: වැඩිම වියදම් ඉතිරිය
- **සන්දර්භය නැවත භාවිත කරන්න**: නිතර භාවිත කරන සන්දර්භ ලේඛන Cache කරන්න
- **ඉල්ලීම් කාණ්ඩගත කරන්න**: Cache hits උපරිම කිරීමට සමාන ඉල්ලීම් එකතු කරන්න
- **Cache ඵලදායීතාව නිරීක්ෂණය කරන්න**: සැබෑ ඉතිරිකිරීම් පසුපස යන්න
- **TTL සකසන්න**: වියදම සහ නැවුම් බව අතර සමතුලිත කරන්න

## දෝෂ නිරාකරණය {#troubleshooting}

### Cache භාවිත නොවීම {#cache-not-being-used}

- වින්‍යාසය තුළ caching සක්‍රීය කර ඇති බව තහවුරු කරන්න
- prompts සමාන බව පරීක්ෂා කරන්න (caching සඳහා නිවැරදි ගැළපීමක් අවශ්‍යයි)
- cache කල් ඉකුත් වී නැති බව තහවුරු කරන්න
- සැපයුම්කරුට විශේෂ cache සීමා පරීක්ෂා කරන්න

### Cache නිර්මාණය අසාර්ථක වීම {#cache-creation-failing}

- cache ප්‍රමාණය සැපයුම්කරු සීමා තුළ ඇති බව තහවුරු කරන්න
- cache control ව්‍යාකරණය නිවැරදි බව පරීක්ෂා කරන්න
- ඔබේ model සඳහා සැපයුම්කරු caching සඳහා සහාය දක්වන බව සහතික කරන්න
- සීමාවන් සඳහා සැපයුම්කරු ලේඛන සමාලෝචනය කරන්න

### අපේක්ෂා නොකළ වියදම් {#unexpected-costs}

- cache නිර්මාණය සහ cache read tokens නිරීක්ෂණය කරන්න
- cache ඇත්තටම භාවිත වන බව තහවුරු කරන්න
- prompt වෙනස්කම් නිසා cache misses තිබේදැයි පරීක්ෂා කරන්න
- TTL හෝ cache උපායමාර්ගය සකස් කිරීම සලකා බලන්න

## සැපයුම්කරු සැසඳීම {#provider-comparison}

| විශේෂාංගය | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | සැපයුම්කරුට විශේෂ | Cache control |
| TTL පාලනය | පැහැදිලි | headers හරහා | සැපයුම්කරු මත රඳා පවතින | Ephemeral/persistent |
| උපරිම cache ප්‍රමාණය | 1M tokens | සැපයුම්කරු මත රඳා පවතින | සැපයුම්කරු මත රඳා පවතින | 1M tokens |
| වියදම් අඩු කිරීම | 90% | 90% | සැපයුම්කරු මත රඳා පවතින | 90% |
| නිරීක්ෂණය | විස්තරාත්මක | metrics හරහා | සැපයුම්කරු මත රඳා පවතින | usage හරහා |

## ඊළඟ පියවර {#next-steps}

1. **ඔබේ සැපයුම්කරු තෝරන්න**: ඔබේ අවශ්‍යතා මත පදනම්ව තෝරන්න
2. **caching වින්‍යාස කරන්න**: සැපයුම්කරුට විශේෂ caching සකසන්න
3. **caching පරීක්ෂා කරන්න**: එය ඔබේ prompts සමඟ ක්‍රියා කරන බව තහවුරු කරන්න
4. **භාවිතය නිරීක්ෂණය කරන්න**: Cache hits සහ වියදම් ඉතිරිකිරීම් පසුපස යන්න
5. **ප්‍රශස්තිකරණය කරන්න**: ප්‍රතිඵල මත පදනම්ව TTL සහ cache උපායමාර්ගය සකසන්න
