---
title: Pagtipig sa Prompt nga Nakaalam sa Provider
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Pag-save sa Prompt Base sa Provider

Ang Superdav AI Agent v1.12.0 nagpaila og **provider-aware prompt caching**, nga makapahimo og pag-optimize sa gasto sa API ug latency pinaagi sa pag-cache sa mga prompts gikan sa lainlaing LLM providers. Ang matag provider adunay lahi kaayo nga mekanismo ug configuration sa caching.

## Overview {#overview}

Ang prompt caching nagtugot kanimo sa:

- Pag-save og dagko, kasagarang gigamit nga mga prompts
- Pagpamenos sa gasto sa API pinaagi sa paglikay sa sobra o duha ka beses nga pagproseso
- Pagpaayo sa latency para sa mga request nga na-cache
- Pagdumala sa cache lifecycle direkta

Lahi ang paagi sa pagpatuman og caching sa lainlaing providers:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching uban ang TTL (Time To Live)
- **OpenRouter**: Caching nga espesipiko sa provider
- **Vertex Anthropic**: Prompt caching uban ang cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Naghatag ang Google Gemini og klaro nga pagdumala sa cache pinaagi sa `cachedContents` API.

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

### Paghimo og Na-cache nga Prompt {#creating-a-cached-prompt}

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

### Paggamit sa Na-cache nga Prompt {#using-a-cached-prompt}

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

### Best Practices para sa Gemini {#best-practices-for-gemini}

- **I-set ang saktong TTL**: Balanseha ang pagtipig og gasto batok sa ka-karaan (staleness) sa cache.
- **I-cache ang system prompts**: Gamita pag-usab ang parehas nga system prompt sa tanang requests.
- **Monitor ang paggamit sa cache**: Bantayi kung unsang mga cache ang kasagaran gigamit.
- **Limpyohan ang expired caches**: Regular kining i-delete ang mga cache nga wala na magamit.

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Gisuportahan sa Azure OpenAI ang prompt caching uban ang automatic TTL management.

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

### Pagpahaktol sa Caching {#enabling-caching}

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

Naggamit ang Azure OpenAI og HTTP headers para sa cache control:

```
Cache-Control: max_age=3600
```

Mga suportado nga values:

- `max_age=<seconds>`: I-cache sulod sa gitakda nga panahon.
- `no_cache`: Ayaw i-cache kining request.
- `no_store`: Ayaw i-cache ug ayaw usab kini gamiton pag-usab.

### Pagmonitor sa Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices para sa Azure OpenAI {#best-practices-for-azure-openai}

- **Gamit og consistent nga prompts**: Ang parehas nga prompts makabenepisyo gikan sa caching.
- **I-set ang rasonable nga TTL**: Balanseha ang gasto batok sa pagka-fresh (freshness).
- **Monitor ang cache metrics**: Bantayi ang paghimo ug paggamit sa cache.
- **Batch og susama nga requests**: Igrupo ang mga request aron ma-maximize ang cache hits.

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

Gisuportahan sa OpenRouter ang caching pinaagi sa underlying providers (OpenAI, Anthropic, etc.).

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

### Paggamit sa OpenRouter Caching {#using-openrouter-caching}

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

Lahi ang mekanismo sa caching sa lainlaing providers:

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

### Best Practices para sa OpenRouter {#best-practices-for-openrouter}

- **Kahibalo sa caching sa provider**: Lahi ang mekanismo sa matag provider.
- **Test sa behavior sa caching**: Siguroha nga naglihok og maayo ang caching uban sa imong napili nga provider.
- **Monitor ang gasto**: Bantayi ang pagtipig gikan sa caching.
- **Gamit og consistent models**: Ang pagbalhin sa modelo makapabagsak sa cache hits.

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Gisuportahan sa Vertex Anthropic (Google Cloud) ang prompt caching uban ang klaro nga cache control.

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

### Paggamit sa Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

- **ephemeral**: I-cache sulod sa panahon sa request (default).
- **persistent**: I-cache sa daghang requests (kon gisuportahan).

### Pagmonitor sa Cache Usage {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Best Practices para sa Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Gamit og ephemeral caching**: Maayo kini alang sa single-session caching.
- **I-set ang max_tokens nga saktong paagi**: Balanseha ang gidak-on sa cache batok sa gasto.
- **Monitor ang cache metrics**: Bantayi ang kaepektibo sa cache.
- **Test uban sa imong workload**: Siguroha nga makabenepisyo ang caching sa imong kasamtangang gamit.

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

- **I-cache ang dagkong system prompts**: Kini ang pinakadako nga makatipig og gasto.
- **Gamit pag-usab sa context**: I-cache ang mga context document nga kasagaran gigamit.
- **Batch og requests**: Igrupo ang susama nga requests aron ma-maximize ang cache hits.
- **Monitor ang kaepektibo sa cache**: Bantayi ang aktwal nga makatipig nga kwarta.
- **I-adjust ang TTL**: Balanseha ang gasto batok sa pagka-freshness.

## Troubleshooting {#troubleshooting}

### Cache not being used (Wala gigamit ang Cache) {#cache-not-being-used}

- Siguroha nga naka-enable ang caching sa configuration.
- Susihon nga parehas gyud ang mga prompts (kinahanglan og exact match ang caching).
- I-verify nga wala pa ka-expire ang cache.
- Susihon ang limitasyon sa cache nga espesipiko sa provider.

### Cache creation failing (Nawala ang paghimo sa Cache) {#cache-creation-failing}

- Siguroha nga anaa pa sa provider limits ang gidak-on sa cache.
- Susihon nga husto ang syntax sa cache control.
- Siguroha nga gisuportahan sa provider ang caching para sa imong model.
- Basaha ang dokumentasyon sa provider bahin sa mga limitasyon.

### Unexpected costs (Dili ma-expect nga gasto) {#unexpected-costs}

- Monitor ang paghimo ug pagbasa sa cache tokens.
- I-verify nga gigamit gyud ang cache.
- Susihon kung aduna bay cache misses tungod sa kalainan sa prompts.
- Konsideraha ang pag-adjust sa TTL o sa caching strategy.

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Pilia ang imong provider**: Pagpili base sa imong panginahanglan.
2. **I-configure ang caching**: I-set up ang cache nga espesipiko sa provider.
3. **Test sa caching**: Siguroha nga naglihok kini uban sa imong mga prompts.
4. **Monitor ang paggamit**: Bantayi ang cache hits ug cost savings.
5. **Optimize**: I-adjust ang TTL ug cache strategy base sa resulta.
