---
title: "Provider-Aware Prompt Caching"
sidebar_position: 10
---

# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 introduces **provider-aware prompt caching**, which optimizes API costs and latency by caching prompts across different LLM providers. Each provider has different caching mechanisms and configurations.

## Overview

Prompt caching allows you to:

- Cache large, frequently-used prompts
- Reduce API costs by avoiding redundant processing
- Improve latency for cached requests
- Manage cache lifecycle explicitly

Different providers implement caching differently:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching with TTL
- **OpenRouter**: Provider-specific caching
- **Vertex Anthropic**: Prompt caching with cache control

## Google Gemini: cachedContents API

Google Gemini provides explicit cache management via the `cachedContents` API.

### Configuration

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

### Creating a Cached Prompt

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

### Using a Cached Prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Lifecycle

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

### Best Practices for Gemini

- **Set appropriate TTL**: Balance cost savings vs. cache staleness
- **Cache system prompts**: Reuse the same system prompt across requests
- **Monitor cache usage**: Track which caches are used most
- **Clean up expired caches**: Periodically delete unused caches

## Azure OpenAI: Prompt Caching

Azure OpenAI supports prompt caching with automatic TTL management.

### Configuration

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

### Enabling Caching

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

Azure OpenAI uses HTTP headers for cache control:

```
Cache-Control: max_age=3600
```

Supported values:

- `max_age=<seconds>`: Cache for specified duration
- `no_cache`: Don't cache this request
- `no_store`: Don't cache and don't reuse

### Monitoring Cache Usage

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI

- **Use consistent prompts**: Identical prompts benefit from caching
- **Set reasonable TTL**: Balance cost vs. freshness
- **Monitor cache metrics**: Track cache creation vs. hits
- **Batch similar requests**: Group requests to maximize cache hits

## OpenRouter: Provider-Specific Caching

OpenRouter supports caching through underlying providers (OpenAI, Anthropic, etc.).

### Configuration

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

### Using OpenRouter Caching

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

### Provider-Specific Options

Different providers have different caching mechanisms:

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

### Best Practices for OpenRouter

- **Know your provider's caching**: Each provider has different mechanisms
- **Test caching behavior**: Verify caching works with your chosen provider
- **Monitor costs**: Track savings from caching
- **Use consistent models**: Switching models breaks cache hits

## Vertex Anthropic: Prompt Caching with Cache Control

Vertex Anthropic (Google Cloud) supports prompt caching with explicit cache control.

### Configuration

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

### Using Vertex Anthropic Caching

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

### Cache Control Types

- **ephemeral**: Cache for the duration of the request (default)
- **persistent**: Cache across multiple requests (if supported)

### Monitoring Cache Usage

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Best Practices for Vertex Anthropic

- **Use ephemeral caching**: Good for single-session caching
- **Set max_tokens appropriately**: Balance cache size vs. cost
- **Monitor cache metrics**: Track cache effectiveness
- **Test with your workload**: Verify caching benefits your use case

## Cross-Provider Caching Strategy

### Unified Configuration

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

### Provider Detection

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ] 
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback Strategy

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

## Cost Optimization

### Calculate Savings

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

### Optimization Tips

- **Cache large system prompts**: Biggest cost savings
- **Reuse context**: Cache frequently-used context documents
- **Batch requests**: Group similar requests to maximize cache hits
- **Monitor cache effectiveness**: Track actual savings
- **Adjust TTL**: Balance cost vs. freshness

## Troubleshooting

### Cache not being used

- Verify caching is enabled in configuration
- Check that prompts are identical (caching requires exact match)
- Verify cache hasn't expired
- Check provider-specific cache limits

### Cache creation failing

- Verify cache size is within provider limits
- Check that cache control syntax is correct
- Ensure provider supports caching for your model
- Review provider documentation for limitations

### Unexpected costs

- Monitor cache creation vs. cache read tokens
- Verify cache is actually being used
- Check for cache misses due to prompt variations
- Consider adjusting TTL or cache strategy

## Provider Comparison

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps

1. **Choose your provider**: Select based on your needs
2. **Configure caching**: Set up provider-specific caching
3. **Test caching**: Verify it works with your prompts
4. **Monitor usage**: Track cache hits and cost savings
5. **Optimize**: Adjust TTL and cache strategy based on results
