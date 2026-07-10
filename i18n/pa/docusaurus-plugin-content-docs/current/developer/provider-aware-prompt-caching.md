---
title: ਪ੍ਰੋਵਾਈਡਰ-ਜਾਗਰੂਕ ਪ੍ਰੌਮਪਟ ਕੈਸ਼ਿੰਗ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 ਵਿੱਚ **provider-aware prompt caching** ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ, ਜੋ ਵੱਖ-ਵੱਖ LLM providers ਵਿੱਚ prompts ਨੂੰ cache ਕਰਕੇ API ਖਰਚਿਆਂ ਅਤੇ latency ਨੂੰ ਆਪਟੀਮਾਈਜ਼ ਕਰਦਾ ਹੈ। ਹਰੇਕ provider ਦੀ ਆਪਣੀ caching mechanism ਅਤੇ configuration ਹੁੰਦੀ ਹੈ।

## Overview {#overview}

Prompt caching ਤੁਹਾਨੂੰ ਇਹ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ:

- ਵੱਡੇ, ਅਕਸਰ ਵਰਤੇ ਜਾਣ ਵਾਲੇ prompts ਨੂੰ cache ਕਰਨਾ
- ਬੇਲੋੜੀ ਪ੍ਰੋਸੈਸਿੰਗ ਤੋਂ ਬਚ ਕੇ API ਖਰਚੇ ਘਟਾਉਣਾ
- cache ਕੀਤੇ requests ਲਈ latency ਸੁਧਾਰਨਾ
- cache life cycle ਨੂੰ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ manage ਕਰਨਾ

ਵੱਖ-ਵੱਖ providers caching ਨੂੰ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਨਾਲ ਲਾਗੂ ਕਰਦੇ ਹਨ:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL ਨਾਲ Prompt caching
- **OpenRouter**: Provider-specific caching
- **Vertex Anthropic**: Cache control ਨਾਲ Prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API ਰਾਹੀਂ ਸਪੱਸ਼ਟ cache management ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

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

- **Set appropriate TTL**: Cost savings ਅਤੇ cache staleness ਵਿਚਕਾਰ ਸੰਤੁਲਨ ਬਣਾਈ ਰੱਖੋ
- **Cache system prompts**: requests ਵਿੱਚ ਇੱਕੋ system prompt ਨੂੰ ਦੁਬਾਰਾ ਵਰਤੋ
- **Monitor cache usage**: ਇਹ ਟਰੈਕ ਕਰੋ ਕਿ ਕਿਹੜੇ caches ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੇ ਜਾਂਦੇ ਹਨ
- **Clean up expired caches**: ਨਿਯਮਿਤ ਤੌਰ 'ਤੇ ਵਰਤੇ ਨਾ ਗਏ caches ਨੂੰ delete ਕਰੋ

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI, automatic TTL management ਨਾਲ prompt caching ਸਹਾਰਾ ਦਿੰਦਾ ਹੈ।

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

Azure OpenAI cache control ਲਈ HTTP headers ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ:

```
Cache-Control: max_age=3600
```

ਸਮर्थਿਤ values:

- `max_age=<seconds>`: ਨਿਰਧਾਰਤ ਸਮਾਂ ਲਈ cache ਕਰੋ
- `no_cache`: ਇਸ request ਨੂੰ cache ਨਾ ਕਰੋ
- `no_store`: cache ਨਾ ਕਰੋ ਅਤੇ ਦੁਬਾਰਾ ਵਰਤੋਂ ਨਾ ਕਰੋ

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Use consistent prompts**: ਇੱਕੋ ਜਿਹੇ prompts caching ਤੋਂ ਲਾਭ ਉਠਾਉਂਦੇ ਹਨ
- **Set reasonable TTL**: ਖਰਚੇ ਅਤੇ ਤਾਜ਼ਗੀ ਵਿਚਕਾਰ ਸੰਤੁਲਨ ਬਣਾਈ ਰੱਖੋ
- **Monitor cache metrics**: cache creation ਬਨਾਮ hits ਨੂੰ ਟਰੈਕ ਕਰੋ
- **Batch similar requests**: cache hits ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨ ਲਈ requests ਨੂੰ ਸਮੂਹਿਕ ਕਰੋ

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter, underlying providers (OpenAI, Anthropic, ਆਦਿ) ਰਾਹੀਂ caching ਸਹਾਰਾ ਦਿੰਦਾ ਹੈ।

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

ਵੱਖ-ਵੱਖ providers ਦੀਆਂ ਵੱਖ-ਵੱਖ caching mechanisms ਹੁੰਦੀਆਂ ਹਨ:

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

- **Know your provider's caching**: ਹਰੇਕ provider ਦੀਆਂ ਵੱਖ-ਵੱਖ mechanisms ਹੁੰਦੀਆਂ ਹਨ
- **Test caching behavior**: ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ ਚੁਣੇ ਹੋਏ provider ਨਾਲ caching ਕੰਮ ਕਰਦਾ ਹੈ
- **Monitor costs**: caching ਤੋਂ ਹੋਣ ਵਾਲੀ ਬੱਚਤ ਨੂੰ ਟਰੈਕ ਕਰੋ
- **Use consistent models**: models ਬਦਲਣ ਨਾਲ cache hits ਟੁੱਟ ਜਾਂਦੇ ਹਨ

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ਸਪੱਸ਼ਟ cache control ਨਾਲ prompt caching ਸਹਾਰਾ ਦਿੰਦਾ ਹੈ।

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

- **ephemeral**: request ਦੀ अवधि ਲਈ cache (default)
- **persistent**: ਕਈ requests ਵਿੱਚ cache (ਜੇ ਸਹਾਰਾ ਦਿੱਤਾ ਗਿਆ ਹੋਵੇ)

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

- **Use ephemeral caching**: single-session caching ਲਈ ਵਧੀਆ ਹੈ
- **Set max_tokens appropriately**: cache size ਅਤੇ cost ਵਿਚਕਾਰ ਸੰਤੁਲਨ ਬਣਾਈ ਰੱਖੋ
- **Monitor cache metrics**: cache ਦੀ ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ ਨੂੰ ਟਰੈਕ ਕਰੋ
- **Test with your workload**: ਯਕੀਨੀ ਬਣਾਓ ਕਿ caching ਤੁਹਾਡੇ use case ਨੂੰ ਲਾਭ ਪਹੁੰਚਾਉਂਦਾ ਹੈ

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

- **Cache large system prompts**: ਸਭ ਤੋਂ ਵੱਡੀ ਖਰਚੀ ਬੱਚਤ
- **Reuse context**: ਅਕਸਰ ਵਰਤੇ ਜਾਣ ਵਾਲੇ context documents ਨੂੰ cache ਕਰੋ
- **Batch requests**: cache hits ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਕਰਨ ਲਈ similar requests ਨੂੰ group ਕਰੋ
- **Monitor cache effectiveness**: ਅਸਲ ਬੱਚਤ ਨੂੰ ਟਰੈਕ ਕਰੋ
- **Adjust TTL**: ਖਰਚੇ ਅਤੇ ਤਾਜ਼ਗੀ ਵਿਚਕਾਰ ਸੰਤੁਲਨ ਬਣਾਈ ਰੱਖੋ

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- Verify caching is enabled in configuration: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ configuration ਵਿੱਚ caching enable ਹੈ
- Check that prompts are identical (caching requires exact match): ਜਾਂਚ ਕਰੋ ਕਿ prompts ਇੱਕੋ ਜਿਹੇ ਹਨ (caching ਲਈ exact match ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ)
- Verify cache hasn't expired: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ cache expire ਨਹੀਂ ਹੋਇਆ ਹੈ
- Check provider-specific cache limits: provider-specific cache limits ਦੀ ਜਾਂਚ ਕਰੋ

### Cache creation failing {#cache-creation-failing}

- Verify cache size is within provider limits: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ cache size provider limits ਦੇ ਅੰਦਰ ਹੈ
- Check that cache control syntax is correct: ਜਾਂਚ ਕਰੋ ਕਿ cache control syntax ਸਹੀ ਹੈ
- Ensure provider supports caching for your model: ਯਕੀਨੀ ਬਣਾਓ ਕਿ provider ਤੁਹਾਡੇ model ਲਈ caching ਸਹਾਰਾ ਦਿੰਦਾ ਹੈ
- Review provider documentation for limitations: limitations ਲਈ provider documentation ਦੀ ਸਮੀਖਿਆ ਕਰੋ

### Unexpected costs {#unexpected-costs}

- Monitor cache creation vs. cache read tokens: cache creation ਬਨਾਮ cache read tokens ਨੂੰ ਟਰੈਕ ਕਰੋ
- Verify cache is actually being used: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ cache ਅਸਲ ਵਿੱਚ ਵਰਤਿਆ ਜਾ ਰਿਹਾ ਹੈ
- Check for cache misses due to prompt variations: prompt variations ਕਾਰਨ cache misses ਦੀ ਜਾਂਚ ਕਰੋ
- Consider adjusting TTL or cache strategy: TTL ਜਾਂ cache strategy ਨੂੰ ਠੀਕ ਕਰਨ 'ਤੇ ਵਿਚਾਰ ਕਰੋ

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: ਆਪਣੀ ਲੋੜ ਅਨੁਸਾਰ provider ਚੁਣੋ
2. **Configure caching**: provider-specific caching ਸੈਟਅਪ ਕਰੋ
3. **Test caching**: ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਇਹ ਤੁਹਾਡੇ prompts ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ
4. **Monitor usage**: cache hits ਅਤੇ cost savings ਨੂੰ ਟਰੈਕ ਕਰੋ
5. **Optimize**: ਨਤੀਜਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ TTL ਅਤੇ cache strategy ਨੂੰ ਠੀਕ ਕਰੋ
