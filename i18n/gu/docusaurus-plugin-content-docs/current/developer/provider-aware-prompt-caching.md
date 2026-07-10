---
title: પ્રદાતા-જાગૃત પ્રોમ્પ્ટ કેશીંગ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 માં **provider-aware prompt caching** રજૂ કરવામાં આવ્યું છે, જે વિવિધ LLM પ્રોવાઇડર્સમાં prompts ને કેશ કરીને API ખર્ચ અને લેટન્સી (latency) ને ઓપ્ટિમાઇઝ કરે છે. દરેક પ્રોવાઇડરની કેશિંગ મિકેનિઝમ્સ અને કન્ફિગરેશન્સ અલગ હોય છે.

## Overview {#overview}

Prompt caching તમને નીચેની બાબતો કરવાની મંજૂરી આપે છે:

- મોટા, વારંવાર ઉપયોગમાં લેવાતા prompts ને કેશ કરવો
- બિનજરૂરી પ્રોસેસિંગ ટાળીને API ખર્ચ ઘટાડવો
- કેશ કરેલા requests માટે લેટન્સી સુધારવી
- કેશના જીવનચક્ર (cache lifecycle) ને સ્પષ્ટ રીતે મેનેજ કરવો

વિવિધ પ્રોવાઇડર્સ કેશિંગ અલગ રીતે અમલમાં મૂકે છે:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL સાથે Prompt caching
- **OpenRouter**: પ્રોવાઇડર-વિશિષ્ટ કેશિંગ
- **Vertex Anthropic**: કેશ કંટ્રોલ સાથે Prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API દ્વારા સ્પષ્ટ કેશ મેનેજમેન્ટ પ્રદાન કરે છે.

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

- **Set appropriate TTL**: ખર્ચ બચત અને કેશ જૂની થવાની સ્થિતિ વચ્ચે સંતુલન જાળવો
- **Cache system prompts**: requests માં સમાન system prompt નો પુન:ઉપયોગ કરો
- **Monitor cache usage**: કયા કેશનો સૌથી વધુ ઉપયોગ થાય છે તે ટ્રેક કરો
- **Clean up expired caches**: નિયમિતપણે બિનઉપયોગી કેશને ડિલીટ કરો

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ઓટોમેટિક TTL મેનેજમેન્ટ સાથે prompt caching ને સપોર્ટ કરે છે.

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

Azure OpenAI કેશ કંટ્રોલ માટે HTTP headers નો ઉપયોગ કરે છે:

```
Cache-Control: max_age=3600
```

સપોર્ટેડ values:

- `max_age=<seconds>`: નિર્ધારિત સમયગાળા માટે કેશ કરો
- `no_cache`: આ request ને કેશ ન કરો
- `no_store`: કેશ ન કરો અને ફરીથી ઉપયોગ ન કરો

### Monitoring Cache Usage {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI {#best-practices-for-azure-openai}

- **Use consistent prompts**: સમાન prompts કેશિંગથી ફાયદો લે છે
- **Set reasonable TTL**: ખર્ચ અને તાજગી વચ્ચે સંતુલન જાળવો
- **Monitor cache metrics**: કેશ ક્રિએશન વિરુદ્ધ હિટ્સને ટ્રેક કરો
- **Batch similar requests**: કેશ હિટ્સને મહત્તમ કરવા માટે requests ને ગ્રુપ કરો

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter મૂળભૂત પ્રોવાઇડર્સ (OpenAI, Anthropic, વગેરે) દ્વારા કેશિંગને સપોર્ટ કરે છે.

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

વિવિધ પ્રોવાઇડર્સમાં કેશિંગ મિકેનિઝમ્સ અલગ હોય છે:

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

- **Know your provider's caching**: દરેક પ્રોવાઇડરના અલગ મિકેનિઝમ્સ હોય છે
- **Test caching behavior**: ખાતરી કરો કે કેશિંગ તમારા પસંદ કરેલા પ્રોવાઇડર સાથે કામ કરે છે
- **Monitor costs**: કેશિંગમાંથી થતી બચતને ટ્રેક કરો
- **Use consistent models**: મોડેલ બદલવાથી કેશ હિટ્સ તૂટી જાય છે

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) સ્પષ્ટ કેશ કંટ્રોલ સાથે prompt caching ને સપોર્ટ કરે છે.

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

- **ephemeral**: request ના સમયગાળા માટે કેશ (default)
- **persistent**: બહુવિધ requests માં કેશ (જો સપોર્ટેડ હોય તો)

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

- **Use ephemeral caching**: single-session caching માટે સારું છે
- **Set max_tokens appropriately**: કેશના કદ અને ખર્ચ વચ્ચે સંતુલન જાળવો
- **Monitor cache metrics**: કેશની અસરકારકતા ટ્રેક કરો
- **Test with your workload**: ખાતરી કરો કે કેશિંગ તમારા ઉપયોગના કિસ્સામાં ફાયદો કરે છે

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

- **Cache large system prompts**: સૌથી વધુ ખર્ચ બચત
- **Reuse context**: વારંવાર ઉપયોગમાં લેવાતા context documents ને કેશ કરો
- **Batch requests**: કેશ હિટ્સને મહત્તમ કરવા માટે requests ને ગ્રુપ કરો
- **Monitor cache effectiveness**: વાસ્તવિક બચતને ટ્રેક કરો
- **Adjust TTL**: ખર્ચ અને તાજગી વચ્ચે સંતુલન જાળવો

## Troubleshooting {#troubleshooting}

### Cache not being used {#cache-not-being-used}

- ખાતરી કરો કે કન્ફિગરેશનમાં કેશિંગ enable થયેલ છે
- તપાસો કે prompts સમાન છે (કેશિંગ માટે exact match જરૂરી છે)
- ખાતરી કરો કે કેશ સમાપ્ત (expired) નથી થયો
- પ્રોવાઇડર-વિશિષ્ટ કેશ મર્યાદાઓ તપાસો

### Cache creation failing {#cache-creation-failing}

- ખાતરી કરો કે કેશનું કદ પ્રોવાઇડરની મર્યાદામાં છે
- તપાસો કે cache control syntax સાચો છે
- ખાતરી કરો કે પ્રોવાઇડર તમારા મોડેલ માટે કેશિંગને સપોર્ટ કરે છે
- મર્યાદાઓ માટે પ્રોવાઇડર દસ્તાવેજીકરણની સમીક્ષા કરો

### Unexpected costs {#unexpected-costs}

- કેશ ક્રિએશન વિરુદ્ધ કેશ રીડ ટોકન્સ પર નજર રાખો
- ખાતરી કરો કે કેશ ખરેખર ઉપયોગમાં લેવાઈ રહ્યું છે
- prompt માં ફેરફારને કારણે કેશ મિસ (cache misses) માટે તપાસ કરો
- TTL અથવા કેશ વ્યૂહરચનાને સમાયોજિત કરવાનું વિચારો

## Provider Comparison {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps {#next-steps}

1. **Choose your provider**: તમારી જરૂરિયાતોના આધારે પસંદ કરો
2. **Configure caching**: પ્રોવાઇડર-વિશિષ્ટ કેશિંગ સેટ કરો
3. **Test caching**: ખાતરી કરો કે તે તમારા prompts સાથે કામ કરે છે
4. **Monitor usage**: કેશ હિટ્સ અને ખર્ચ બચતને ટ્રેક કરો
5. **Optimize**: પરિણામોના આધારે TTL અને કેશ વ્યૂહરચનાને એડજસ્ટ કરો
