---
title: ಪроваೈಡರ್-ಅರಿವಿನ ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 ರಲ್ಲಿ **provider-aware prompt caching** ಅನ್ನು ಪರಿಚಯಿಸಲಾಗಿದೆ. ಇದು ವಿವಿಧ LLM ಪроваೈಡರ್‌ಗಳಾದ್ಯಂತ ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಕ್ಯಾಶ್ ಮಾಡುವ ಮೂಲಕ API ವೆಚ್ಚಗಳು ಮತ್ತು ಲೇಟೆನ್ಸಿಯನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ಪроваೈಡರ್‌ನದೇ ಆದ ಕ್ಯಾಶಿಂಗ್ ಕಾರ್ಯವಿಧಾನಗಳು ಮತ್ತು ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳಿವೆ.

## Overview {#overview}

ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್ ನಿಮಗೆ ಈ ಕೆಳಗಿನ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ನೀಡುತ್ತದೆ:

- ದೊಡ್ಡ, ಆಗಾಗ್ಗೆ ಬಳಸುವ ಪ್ರಾಂಪ್ಟ್‌ಗಳನ್ನು ಕ್ಯಾಶ್ ಮಾಡಬಹುದು
- ಪುನರಾವರ್ತಿತ ಪ್ರಕ್ರಿಯೆಗಳನ್ನು ತಪ್ಪಿಸುವ ಮೂಲಕ API ವೆಚ್ಚಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು
- ಕ್ಯಾಶ್ ಮಾಡಿದ ವಿನಂತಿಗಳಿಗೆ ಲೇಟೆನ್ಸಿಯನ್ನು ಸುಧಾರಿಸಬಹುದು
- ಕ್ಯಾಶ್ ಲೈಫ್‌ಸೈಕಲ್ ಅನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ನಿರ್ವಹಿಸಬಹುದು

ವಿವಿಧ ಪроваೈಡರ್‌ಗಳು ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ವಿಭಿನ್ನ ರೀತಿಯಲ್ಲಿ ಜಾರಿಗೊಳಿಸುತ್ತವೆ:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL ಜೊತೆಗೆ ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್
- **OpenRouter**: ಪроваೈಡರ್-ನಿರ್ದಿಷ್ಟ ಕ್ಯಾಶಿಂಗ್
- **Vertex Anthropic**: ಕ್ಯಾಶ್ ಕಂಟ್ರೋಲ್ ಜೊತೆಗೆ ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API ಮೂಲಕ ಸ್ಪಷ್ಟ ಕ್ಯಾಶ್ ನಿರ್ವಹಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.

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

- **Set appropriate TTL**: ವೆಚ್ಚ ಉಳಿತಾಯ ಮತ್ತು ಕ್ಯಾಶ್ ಹಳೆಯದಾಗುವಿಕೆ (staleness) ನಡುವೆ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಿ
- **Cache system prompts**: ವಿನಂತಿಗಳಾದ್ಯಂತ ಒಂದೇ system prompt ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಿ
- **Monitor cache usage**: ಯಾವ ಕ್ಯಾಶ್‌ಗಳನ್ನು ಹೆಚ್ಚು ಬಳಸಲಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- **Clean up expired caches**: ಬಳಸದ ಕ್ಯಾಶ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಡಿಲೀಟ್ ಮಾಡಿ

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ಸ್ವಯಂಚಾಲಿತ TTL ನಿರ್ವಹಣೆಯೊಂದಿಗೆ ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

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

Azure OpenAI ಕ್ಯಾಶ್ ಕಂಟ್ರೋಲ್‌ಗಾಗಿ HTTP ಹೆಡರ್‌ಗಳನ್ನು ಬಳಸುತ್ತದೆ:

```
Cache-Control: max_age=3600
```

Supported values:

- `max_age=<seconds>`: ನಿರ್ದಿಷ್ಟ ಅವಧಿಗೆ ಕ್ಯಾಶ್ ಮಾಡಿ
- `no_cache`: ಈ ವಿನಂತಿಯನ್ನು ಕ್ಯಾಶ್ ಮಾಡಬೇಡಿ
- `no_store`: ಕ್ಯಾಶ್ ಮಾಡಬೇಡಿ ಮತ್ತು ಮರುಬಳಕೆ ಮಾಡಬೇಡಿ

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Use consistent prompts**: ಒಂದೇ ರೀತಿಯ ಪ್ರಾಂಪ್ಟ್‌ಗಳು ಕ್ಯಾಶಿಂಗ್‌ನಿಂದ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತವೆ
- **Set reasonable TTL**: ವೆಚ್ಚ ಮತ್ತು ತಾಜಾತನ (freshness) ನಡುವೆ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಿ
- **Monitor cache metrics**: ಕ್ಯಾಶ್ ರಚನೆ ಮತ್ತು hits ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- **Batch similar requests**: ಕ್ಯಾಶ್ hits ಅನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನಂತಿಗಳನ್ನು ಗುಂಪು ಮಾಡಿ

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter ಅಡಗಿರುವ ಪроваೈಡರ್‌ಗಳ ಮೂಲಕ (OpenAI, Anthropic, ಇತ್ಯಾದಿ) ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

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

ವಿವಿಧ ಪроваೈಡರ್‌ಗಳು ವಿಭಿನ್ನ ಕ್ಯಾಶಿಂಗ್ ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಹೊಂದಿವೆ:

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

- **Know your provider's caching**: ಪ್ರತಿಯೊಂದು ಪроваೈಡರ್ ವಿಭಿನ್ನ ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಹೊಂದಿದೆ
- **Test caching behavior**: ನೀವು ಆರಿಸಿಕೊಂಡ ಪроваೈಡರ್‌ನೊಂದಿಗೆ ಕ್ಯಾಶಿಂಗ್ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- **Monitor costs**: ಕ್ಯಾಶಿಂಗ್‌ನಿಂದ ಉಳಿತಾಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- **Use consistent models**: ಮಾದರಿಗಳನ್ನು ಬದಲಾಯಿಸುವುದು ಕ್ಯಾಶ್ hits ಅನ್ನು ಮುರಿಯುತ್ತದೆ

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ಸ್ಪಷ್ಟ ಕ್ಯಾಶ್ ಕಂಟ್ರೋಲ್‌ನೊಂದಿಗೆ ಪ್ರಾಂಪ್ಟ್ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

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

- **ephemeral**: ವಿನಂತಿಯ ಅವಧಿಗೆ ಕ್ಯಾಶ್ (default)
- **persistent**: ಅನೇಕ ವಿನಂತಿಗಳಾದ್ಯಂತ ಕ್ಯಾಶ್ (if supported)

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

- **Use ephemeral caching**: ಒಂದೇ ಸೆಷನ್ ಕ್ಯಾಶಿಂಗ್‌ಗೆ ಉತ್ತಮ
- **Set max_tokens appropriately**: ಕ್ಯಾಶ್ ಗಾತ್ರ ಮತ್ತು ವೆಚ್ಚದ ನಡುವೆ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಿ
- **Monitor cache metrics**: ಕ್ಯಾಶ್ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- **Test with your workload**: ನಿಮ್ಮ ಬಳಕೆಯ ಸಂದರ್ಭಕ್ಕೆ ಕ್ಯಾಶಿಂಗ್ ಪ್ರಯೋಜನ ನೀಡುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು ಪರೀಕ್ಷಿಸಿ

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

- **Cache large system prompts**: ಅತಿ ದೊಡ್ಡ ವೆಚ್ಚ ಉಳಿತಾಯ
- **Reuse context**: ಆಗಾಗ್ಗೆ ಬಳಸುವ context documents ಅನ್ನು ಕ್ಯಾಶ್ ಮಾಡಿ
- **Batch requests**: ಕ್ಯಾಶ್ hits ಅನ್ನು ಹೆಚ್ಚಿಸಲು ವಿನಂತಿಗಳನ್ನು ಗುಂಪು ಮಾಡಿ
- **Monitor cache effectiveness**: ನಿಜವಾದ ಉಳಿತಾಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- **Adjust TTL**: ವೆಚ್ಚ ಮತ್ತು ತಾಜಾತನ ನಡುವೆ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಿ

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಆನ್ ಮಾಡಲಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಪ್ರಾಂಪ್ಟ್‌ಗಳು ಒಂದೇ ಆಗಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ (ಕ್ಯಾಶಿಂಗ್‌ಗೆ ನಿಖರ ಹೊಂದಾಣಿಕೆ ಬೇಕು)
- ಕ್ಯಾಶ್ ಅವಧಿ ಮುಗಿದಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಪроваೈಡರ್-ನಿರ್ದಿಷ್ಟ ಕ್ಯಾಶ್ ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ

### Cache creation failing {#cache-creation-failing}

- ಕ್ಯಾಶ್ ಗಾತ್ರವು ಪроваೈಡರ್ ಮಿತಿಗಳಲ್ಲಿ ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಕ್ಯಾಶ್ ಕಂಟ್ರೋಲ್ ಸಿಂಟ್ಯಾಕ್ಸ್ ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ ಮಾದರಿಗಾಗಿ ಪроваೈಡರ್ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
- ಮಿತಿಗಳಿಗಾಗಿ ಪроваೈಡರ್ ಡಾಕ್ಯುಮೆಂટેಶನ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ

### Unexpected costs {#unexpected-costs}

- ಕ್ಯಾಶ್ ರಚನೆ ಮತ್ತು ಕ್ಯಾಶ್ ಓದುವ ಟೋಕನ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
- ಕ್ಯಾಶ್ ನಿಜವಾಗಿಯೂ ಬಳಸಲಾಗುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಪ್ರಾಂಪ್ಟ್ ವ್ಯತ್ಯಾಸಗಳಿಂದಾಗಿ ಕ್ಯಾಶ್ ಮಿಸ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ
- TTL ಅಥವಾ ಕ್ಯಾಶ್ ಸ್ಟ್ರಾಟಜಿಯನ್ನು ಹೊಂದಿಸಲು ಪರಿಗಣಿಸಿ

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಪроваೈಡರ್ ಆರಿಸಿ
2. **Configure caching**: ಪроваೈಡರ್-ನಿರ್ದಿಷ್ಟ ಕ್ಯಾಶಿಂಗ್ ಅನ್ನು ಸೆಟ್ ಮಾಡಿ
3. **Test caching**: ನಿಮ್ಮ ಪ್ರಾಂಪ್ಟ್‌ಗಳೊಂದಿಗೆ ಇದು ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
4. **Monitor usage**: ಕ್ಯಾಶ್ hits ಮತ್ತು ವೆಚ್ಚ ಉಳಿತಾಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ
5. **Optimize**: ಫಲಿತಾಂಶಗಳ ಆಧಾರದ ಮೇಲೆ TTL ಮತ್ತು ಕ್ಯಾಶ್ ಸ್ಟ್ರಾಟಜಿಯನ್ನು ಹೊಂದಿಸಿ
