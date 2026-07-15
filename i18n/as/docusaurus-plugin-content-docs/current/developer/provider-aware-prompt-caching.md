---
title: প্ৰদানকাৰী-সচেতন প্ৰম্পট কেষ্টিং
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 ले **provider-aware prompt caching** (প্ৰোভাইডাৰ-সচেতন প্ৰম্পট কেছিং) আগবঢ়াইছে, যিয়ে বিভিন্ন LLM provider-ৰ ওপৰত প্ৰম্পট কেছি কৰাৰ দ্বাৰা API cost আৰু latency অপটিমাইজ কৰে। প্ৰতিজন provider-ৰ নিজৰ কেছিং মেকানিজম আৰু কনফিগাৰেচন ভিন্ন হয়।

## Overview {#overview}

Prompt caching ব্যৱস্থাৰ দ্বাৰা আপুনি এই কামবোৰ কৰিব পাৰে:

- ডাঙৰ, ঘন ঘন ব্যৱহৃত prompt সমূহ কেছি কৰা।
- পুনৰাবৃত্ত প্ৰচেছিং এৰাই API cost হ্ৰাস কৰা।
- কেছি কৰা request-ৰ বাবে latency উন্নত কৰা।
- কেছ লাইফচক্ৰ (cache lifecycle) স্পষ্টভাৱে ব্যৱস্থাপনা কৰা।

বিভিন্ন provider-এ কেছিং ভিন্ন উপায়েৰে কাৰ্যকৰী কৰে:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL (Time To Live) লগত prompt caching
- **OpenRouter**: Provider-specific caching
- **Vertex Anthropic**: Cache control লগত prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini ले `cachedContents` APIৰ জৰিয়তে স্পষ্ট কেছ ব্যৱস্থাপনা (explicit cache management) প্ৰদান কৰে।

### Configuration {#configuration}

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

### Creating a Cached Prompt {#creating-a-cached-prompt}

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

### Using a Cached Prompt {#using-a-cached-prompt}

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

### Best Practices for Gemini {#best-practices-for-gemini}

- **Appropriate TTL সেট কৰক**: Cost সেভিং বনাম cache staleness (কেছ পুৰণি হোৱা) ব্যালেন্স কৰক।
- **System prompts কেছি কৰক**: request সমূহৰ বাবে একেটা system prompt পুনৰ ব্যৱহাৰ কৰক।
- **Cache usage monitor কৰক**: কোনবোৰ cache সৰ্বাধিক ব্যৱহৃত হয়, সেয়া অনুসৰীক্ষা কৰক।
- **Expired caches clean up কৰক**: ব্যৱহাৰ নোহোৱা cache সমূহ সময়-সময়তে delete কৰক।

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ले স্বয়ংক্রিয় TTL ব্যৱস্থাপনাৰ সৈতে prompt caching সমৰ্থন কৰে।

### Configuration {#configuration-1}

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

### Enabling Caching {#enabling-caching}

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

Azure OpenAI ले cache control কৰিবলৈ HTTP header ব্যৱহাৰ কৰে:

```
Cache-Control: max_age=3600
```

সমৰ্থন কৰা মানসমূহ:

- `max_age=<seconds>`: নিৰ্দিষ্ট সময়ৰ বাবে কেছ কৰা।
- `no_cache`: এই request টো কেছ নকৰিব।
- `no_store`: কেছ নকৰিব আৰু পুনৰ ব্যৱহাৰ নকৰিব।

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Consistent prompts ব্যৱহাৰ কৰক**: একেটা prompt হ'লে caching ৰ সুবিধা ল'ব পাৰে।
- **Reasonable TTL সেট কৰক**: Cost আৰু freshness (সতেজতা) ব্যালেন্স কৰক।
- **Cache metrics monitor কৰক**: cache creation বনাম hits ট্ৰেক কৰক।
- **Similar requests batch কৰক**: cache hits বঢ়াবলৈ request সমূহক গোট কৰক।

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter ले তলৰ থকা provider (OpenAI, Anthropic, ইত্যাদি) সমূহৰ জৰিয়তে caching সমৰ্থন কৰে।

### Configuration {#configuration-2}

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

### Using OpenRouter Caching {#using-openrouter-caching}

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

### Provider-Specific Options {#provider-specific-options}

বিভিন্ন provider-ৰ কেছিং মেকানিজম ভিন্ন হয়:

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

### Best Practices for OpenRouter {#best-practices-for-openrouter}

- **Provider-ৰ caching জানক**: প্ৰতিজন provider-ৰ নিজৰ মেকানিজম আছে।
- **Caching behavior test কৰক**: আপুনি বাছনি কৰা provider লগত caching কাম কৰে নে নাই, সেয়া পৰীক্ষা কৰক।
- **Costs monitor কৰক**: caching ৰ পৰা হোৱা সেভিং ট্ৰেক কৰক।
- **Consistent models ব্যৱহাৰ কৰক**: মডেল সলনি কৰিলে cache hits ভাঙি যায়।

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ले explicit cache control লগত prompt caching সমৰ্থন কৰে।

### Configuration {#configuration-3}

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

### Using Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Cache Control Types {#cache-control-types}

- **ephemeral**: request-ৰ সময়কালৰ বাবে কেছ কৰা হয় (default)।
- **persistent**: একাধিক request জুড়ে কেছ কৰা হয় (যদি সমৰ্থন কৰে)।

### Monitoring Cache Usage {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Best Practices for Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Ephemeral caching ব্যৱহাৰ কৰক**: একক session-ৰ বাবে ভাল।
- **max_tokens উপযুক্তভাৱে সেট কৰক**: Cache size আৰু cost ব্যালেন্স কৰক।
- **Cache metrics monitor কৰক**: cache-ৰ কাৰ্যক্ষমতা ট্ৰেক কৰক।
- **Workload লগত test কৰক**: আপোনাৰ use case-ৰ বাবে caching লাভজনক হয় নে নাই, সেয়া পৰীক্ষা কৰক।

## Cross-Provider Caching Strategy {#cross-provider-caching-strategy}

### Unified Configuration {#unified-configuration}

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

### Provider Detection {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback Strategy {#fallback-strategy}

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

## Cost Optimization {#cost-optimization}

### Calculate Savings {#calculate-savings}

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

### Optimization Tips {#optimization-tips}

- **Large system prompts কেছি কৰক**: সৰ্বাধিক cost সেভিং হয়।
- **Context পুনৰ ব্যৱহাৰ কৰক**: ঘন ঘন ব্যৱহৃত context document সমূহ কেছি কৰক।
- **Requests batch কৰক**: cache hits বঢ়াবলৈ similar request সমূহক গোট কৰক।
- **Cache effectiveness monitor কৰক**: প্ৰকৃত সেভিং ট্ৰেক কৰক।
- **TTL adjust কৰক**: Cost আৰু freshness ব্যালেন্স কৰক।

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- Verify caching is enabled in configuration
- Check that prompts are identical (caching requires exact match)
- Verify cache hasn't expired
- Check provider-specific cache limits

### Cache creation failing {#cache-creation-failing}

- Verify cache size is within provider limits
- Check that cache control syntax is correct
- Ensure provider supports caching for your model
- Review provider documentation for limitations

### Unexpected costs {#unexpected-costs}

- Monitor cache creation vs. cache read tokens
- Verify cache is actually being used
- Check for cache misses due to prompt variations
- Consider adjusting TTL or cache strategy

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: আপোনাৰ প্ৰয়োজন অনুসৰি এটা provider বাছি লওক।
2. **Configure caching**: provider-specific caching সেট কৰক।
3. **Test caching**: আপোনাৰ prompt লগত কাম কৰে নে নাই, সেয়া পৰীক্ষা কৰক।
4. **Monitor usage**: cache hits আৰু cost সেভিং ট্ৰেক কৰক।
5. **Optimize**: ফলাফলৰ ওপৰত ভিত্তি কৰি TTL আৰু cache strategy adjust কৰক।
