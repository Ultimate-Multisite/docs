---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0-ൽ **provider-aware prompt caching** അവതരിപ്പിച്ചു. ഇത് വിവിധ LLM പ്രൊവൈഡർമാർക്കിടയിൽ പ്രോംപ്റ്റുകൾ കാഷ് ചെയ്യുന്നതിലൂടെ API ചെലവുകളും ലേറ്റൻസിയും ഒപ്റ്റിമൈസ് ചെയ്യാൻ സഹായിക്കുന്നു. ഓരോ പ്രൊവൈഡർക്കും വ്യത്യസ്തമായ കാഷിംഗ് മെക്കാനിസങ്ങളും കോൺഫിഗറേഷനുകളും ഉണ്ട്.

## Overview {#overview}

പ്രോംപ്റ്റ് കാഷിംഗ് ഉപയോഗിക്കുന്നതിലൂടെ നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്:

- വലിയ അളവിലുള്ള, പതിവായി ഉപയോഗിക്കുന്ന പ്രോംപ്റ്റുകൾ കാഷ് ചെയ്യുക.
- ആവർത്തന പ്രോസസ്സിംഗ് ഒഴിവാക്കി API ചെലവ് കുറയ്ക്കുക.
- കാഷ് ചെയ്ത റിക്വസ്റ്റുകൾക്കുള്ള ലേറ്റൻസി മെച്ചപ്പെടുത്തുക.
- കാഷ് ലൈഫ്‌സൈക്കിൾ വ്യക്തമായി കൈകാര്യം ചെയ്യുക.

വിവിധ പ്രൊവൈഡർമാർ കാഷിംഗ് വ്യത്യസ്തമായി നടപ്പിലാക്കുന്നു:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL സഹിതം പ്രോംപ്റ്റ് കാഷിംഗ്
- **OpenRouter**: പ്രൊവൈഡർ-നിർദ്ദിഷ്ട കാഷിംഗ്
- **Vertex Anthropic**: കാഷ് കൺട്രോൾ സഹിതം പ്രോംപ്റ്റ് കാഷിംഗ്

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API വഴി വ്യക്തമായ കാഷ് മാനേജ്‌മെന്റ് നൽകുന്നു.

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

- **Set appropriate TTL**: ചെലവ് ലാഭിക്കാനുള്ള സാധ്യതയും കാഷ് പഴക്കം (staleness) തമ്മിൽ സന്തുലിതാവസ്ഥ പാലിക്കുക.
- **Cache system prompts**: റിക്വസ്റ്റുകൾക്കിടയിൽ ഒരേ system prompt വീണ്ടും ഉപയോഗിക്കുക.
- **Monitor cache usage**: ഏത് കാഷുകളാണ് ഏറ്റവും കൂടുതൽ ഉപയോഗിക്കുന്നത് എന്ന് ട്രാക്ക് ചെയ്യുക.
- **Clean up expired caches**: ഉപയോഗിക്കാത്ത കാഷുകൾ ഇടയ്ക്കിടെ ഡിലീറ്റ് ചെയ്യുക.

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI, ഓട്ടോമാറ്റിക് TTL മാനേജ്‌മെന്റോടുകൂടിയ പ്രോംപ്റ്റ് കാഷിംഗ് പിന്തുണയ്ക്കുന്നു.

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

Azure OpenAI, കാഷ് കൺട്രോളിനായി HTTP ഹെഡറുകൾ ഉപയോഗിക്കുന്നു:

```
Cache-Control: max_age=3600
```

Supported values:

- `max_age=<seconds>`: നിശ്ചിത സമയത്തേക്ക് കാഷ് ചെയ്യുക.
- `no_cache`: ഈ റിക്വസ്റ്റ് കാഷ് ചെയ്യരുത്.
- `no_store`: കാഷ് ചെയ്യുകയുമില്ല, വീണ്ടും ഉപയോഗിക്കുകയുമില്ല.

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Use consistent prompts**: ഒരേ പ്രോംപ്റ്റുകൾ കാഷിംഗിന് ഗുണകരമാണ്.
- **Set reasonable TTL**: ചെലവിനും പുതിയ വിവരങ്ങൾ ലഭിക്കാനുള്ള സാധ്യതയ്ക്കും ഇടയിൽ സന്തുലിതാവസ്ഥ പാലിക്കുക.
- **Monitor cache metrics**: കാഷ് ക്രിയേഷൻ vs. ഹിറ്റുകൾ ട്രാക്ക് ചെയ്യുക.
- **Batch similar requests**: കാഷ് ഹിറ്റുകൾ പരമാവധി വർദ്ധിപ്പിക്കാൻ റിക്വസ്റ്റുകൾ ഗ്രൂപ്പ് ചെയ്യുക.

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter, അടിസ്ഥാന പ്രൊവൈഡർമാർ (OpenAI, Anthropic മുതലായവ) വഴി കാഷിംഗ് പിന്തുണയ്ക്കുന്നു.

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

വിവിധ പ്രൊവൈഡർമാർക്ക് വ്യത്യസ്ത കാഷിംഗ് മെക്കാനിസങ്ങൾ ഉണ്ട്:

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

- **Know your provider's caching**: ഓരോ പ്രൊവൈഡർക്കും വ്യത്യസ്ത മെക്കാനിസങ്ങൾ ഉണ്ട് എന്ന് മനസ്സിലാക്കുക.
- **Test caching behavior**: നിങ്ങൾ തിരഞ്ഞെടുത്ത പ്രൊവൈഡറുമായി കാഷിംഗ് ശരിയായി പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക.
- **Monitor costs**: കാഷിംഗിൽ നിന്നുള്ള ലാഭം ട്രാക്ക് ചെയ്യുക.
- **Use consistent models**: മോഡലുകൾ മാറ്റുന്നത് കാഷ് ഹിറ്റുകൾ തടസ്സപ്പെടുത്തും.

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) വ്യക്തമായ കാഷ് കൺട്രോൾ സഹിതം പ്രോംപ്റ്റ് കാഷിംഗ് പിന്തുണയ്ക്കുന്നു.

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

- **ephemeral**: റിക്വസ്റ്റ് സമയത്തേക്ക് കാഷ് ചെയ്യുക (default).
- **persistent**: ഒന്നിലധികം റിക്വസ്റ്റുകളിലുടനീളം കാഷ് ചെയ്യുക (if supported).

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

- **Use ephemeral caching**: ഒറ്റ സെഷനിലെ കാഷിംഗിന് ഇത് നല്ലതാണ്.
- **Set max_tokens appropriately**: കാഷ് വലുപ്പവും ചെലവും തമ്മിൽ സന്തുലിതാവസ്ഥ പാലിക്കുക.
- **Monitor cache metrics**: കാഷ് എത്രത്തോളം ഫലപ്രദമാണെന്ന് ട്രാക്ക് ചെയ്യുക.
- **Test with your workload**: നിങ്ങളുടെ ഉപയോഗത്തിന് കാഷിംഗ് ഗുണകരമാണോ എന്ന് ഉറപ്പാക്കാൻ ടെസ്റ്റ് ചെയ്യുക.

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

- **Cache large system prompts**: ഏറ്റവും വലിയ ചെലവ് ലാഭം ഇത് നൽകും.
- **Reuse context**: പതിവായി ഉപയോഗിക്കുന്ന context documents കാഷ് ചെയ്യുക.
- **Batch requests**: കാഷ് ഹിറ്റുകൾ പരമാവധി വർദ്ധിപ്പിക്കാൻ റിക്വസ്റ്റുകൾ ഗ്രൂപ്പ് ചെയ്യുക.
- **Monitor cache effectiveness**: യഥാർത്ഥ ലാഭം ട്രാക്ക് ചെയ്യുക.
- **Adjust TTL**: ചെലവും പുതിയ വിവരങ്ങൾ ലഭിക്കാനുള്ള സാധ്യതയും തമ്മിൽ സന്തുലിതാവസ്ഥ പാലിക്കാൻ TTL ക്രമീകരിക്കുക.

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- കോൺഫിഗറേഷനിൽ കാഷിംഗ് പ്രവർത്തനക്ഷമമാക്കിയിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക.
- പ്രോംപ്റ്റുകൾ ഒരേപോലെയാണോ എന്ന് ഉറപ്പാക്കുക (കൃത്യമായ പൊരുത്തം ആവശ്യമാണ്).
- കാഷ് കാലഹരണപ്പെട്ടിട്ടില്ലെന്ന് ഉറപ്പാക്കുക.
- പ്രൊവൈഡർ-നിർദ്ദിഷ്ട കാഷ് ലിമിറ്റുകൾ പരിശോധിക്കുക.

### Cache creation failing {#cache-creation-failing}

- കാഷ് വലുപ്പം പ്രൊവൈഡർ ലിമിറ്റുകൾക്കുള്ളിലാണോ എന്ന് പരിശോധിക്കുക.
- കാഷ് കൺട്രോൾ സിന്റാക്സ് ശരിയാണോ എന്ന് പരിശോധിക്കുക.
- നിങ്ങളുടെ മോഡലിന് കാഷിംഗ് പിന്തുണയ്ക്കുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കുക.
- പരിമിതികൾക്കായി പ്രൊവൈഡർ ഡോക്യുമെന്റേഷൻ പരിശോധിക്കുക.

### Unexpected costs {#unexpected-costs}

- കാഷ് ക്രിയേഷൻ vs. കാഷ് റീഡ് ടോക്കനുകൾ നിരീക്ഷിക്കുക.
- കാഷ് യഥാർത്ഥത്തിൽ ഉപയോഗിക്കപ്പെടുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കുക.
- പ്രോംപ്റ്റ് വ്യതിയാനങ്ങൾ കാരണം കാഷ് മിസ് ആകുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക.
- TTL അല്ലെങ്കിൽ കാഷ് സ്ട്രാറ്റജി ക്രമീകരിക്കുന്നത് പരിഗണിക്കുക.

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: നിങ്ങളുടെ ആവശ്യകതകൾ അനുസരിച്ച് ഒരു പ്രൊവൈഡർ തിരഞ്ഞെടുക്കുക.
2. **Configure caching**: പ്രൊവൈഡർ-നിർദ്ദിഷ്ട കാഷിംഗ് സജ്ജമാക്കുക.
3. **Test caching**: നിങ്ങളുടെ പ്രോംപ്റ്റുകളുമായി ഇത് പ്രവർത്തിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക.
4. **Monitor usage**: കാഷ് ഹിറ്റുകളും ചെലവ് ലാഭവും ട്രാക്ക് ചെയ്യുക.
5. **Optimize**: ഫലങ്ങൾ അനുസരിച്ച് TTL-യും കാഷ് സ്ട്രാറ്റജിയും ക്രമീകരിക്കുക.
