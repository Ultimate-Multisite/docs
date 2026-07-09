---
title: Pag-iimbak ng Prompt na May Kamalayan sa Provider
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Ipinakilala ng Superdav AI Agent v1.12.0 ang **provider-aware prompt caching**, na nag-o-optimize sa gastos at latency ng API sa pamamagitan ng pag-iimbak (caching) ng mga prompts sa iba't ibang LLM providers. Ang bawat provider ay may iba't ibang mekanismo at configuration para sa caching.

## Overview {#overview}

Ang prompt caching ay nagpapahintulot sa iyo na:

- Mag-cache ng malalaki at madalas gamiting prompts
- Bawasan ang gastos sa API sa pamamagitan ng pag-iwas sa paulit-ulit na pagpoproseso
- Pagandahin ang latency para sa mga cached na request
- Pamahalaan nang malinaw ang lifecycle ng cache

Iba-iba ang pagpapatupad ng caching ng iba't ibang providers:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching na may TTL
- **OpenRouter**: Provider-specific caching
- **Vertex Anthropic**: Prompt caching na may cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Nagbibigay ang Google Gemini ng malinaw na pamamahala ng cache sa pamamagitan ng `cachedContents` API.

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

- **Set appropriate TTL**: Balansehin ang pagtitipid sa gastos laban sa pagiging luma (staleness) ng cache
- **Cache system prompts**: Gamitin muli ang parehong system prompt sa iba't ibang requests
- **Monitor cache usage**: Subaybayan kung aling mga cache ang pinakamadalas gamitin
- **Clean up expired caches**: Regular na burahin ang mga cache na lumipas na ang expiration

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Sinusuportahan ng Azure OpenAI ang prompt caching na may awtomatikong pamamahala ng TTL.

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

Gumagamit ang Azure OpenAI ng HTTP headers para sa cache control:

```
Cache-Control: max_age=3600
```

Mga sinusuportahang values:

- `max_age=<seconds>`: I-cache sa loob ng tinukoy na tagal
- `no_cache`: Huwag i-cache ang request na ito
- `no_store`: Huwag i-cache at huwag gamitin muli

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Gamitin ang consistent prompts**: Ang magkakaparehong prompts ay nakikinabang sa caching
- **Magtakda ng makatwirang TTL**: Balansehin ang gastos laban sa pagiging sariwa (freshness)
- **Monitor cache metrics**: Subaybayan ang paglikha ng cache kumpara sa mga hits
- **Batch similar requests**: Pangkat-pangkatin ang mga requests para ma-maximize ang cache hits

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

Sinusuportahan ng OpenRouter ang caching sa pamamagitan ng mga underlying providers (OpenAI, Anthropic, atbp.).

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

Iba-iba ang mekanismo ng caching ng iba't ibang providers:

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

- **Alamin ang caching ng provider**: Ang bawat provider ay may iba't ibang mekanismo
- **Subukan ang pag-uugali ng caching**: Siguraduhin na gumagana ang caching sa napili mong provider
- **Monitor ang gastos**: Subaybayan ang matitipid mula sa caching
- **Gumamit ng consistent models**: Ang pagpapalit ng models ay nagpapabagsak sa cache hits

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Sinusuportahan ng Vertex Anthropic (Google Cloud) ang prompt caching na may malinaw na cache control.

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

- **ephemeral**: Cache para sa tagal ng request (default)
- **persistent**: Cache sa pagitan ng maraming requests (kung sinusuportahan)

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

- **Gamitin ang ephemeral caching**: Maganda ito para sa single-session caching
- **Magtakda ng max_tokens nang tama**: Balansehin ang laki ng cache laban sa gastos
- **Monitor cache metrics**: Subaybayan ang pagiging epektibo ng cache
- **Test with your workload**: Siguraduhin na nakakatulong ang caching sa iyong use case

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

- **Cache large system prompts**: Ito ang pinakamalaking matitipid sa gastos
- **Reuse context**: I-cache ang mga madalas gamiting context documents
- **Batch requests**: Pangkat-pangkatin ang magkakatulad na requests para ma-maximize ang cache hits
- **Monitor cache effectiveness**: Subaybayan ang aktwal na matitipid
- **Adjust TTL**: Balansehin ang gastos laban sa pagiging sariwa

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- I-verify na naka-enable ang caching sa configuration
- Tiyakin na magkapareho ang mga prompts (kailangan ng eksaktong pagtutugma ang caching)
- I-verify na hindi pa expired ang cache
- Tingnan ang mga limitasyon ng cache na specific sa provider

### Cache creation failing {#cache-creation-failing}

- I-verify na ang laki ng cache ay nasa loob ng limitasyon ng provider
- Tiyakin na tama ang syntax ng cache control
- Siguraduhin na sinusuportahan ng provider ang caching para sa iyong model
- Basahin ang dokumentasyon ng provider para sa mga limitasyon

### Unexpected costs {#unexpected-costs}

- Subaybayan ang cache creation kumpara sa cache read tokens
- I-verify na talagang ginagamit ang cache
- Tingnan kung may cache misses dahil sa pagbabago ng prompts
- Isaalang-alang ang pag-aayos ng TTL o cache strategy

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: Pumili batay sa iyong mga pangangailangan
2. **Configure caching**: I-set up ang provider-specific caching
3. **Test caching**: I-verify na gumagana ito sa iyong mga prompts
4. **Monitor usage**: Subaybayan ang cache hits at matitipid sa gastos
5. **Optimize**: Ayusin ang TTL at cache strategy batay sa mga resulta
