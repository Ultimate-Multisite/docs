---
title: Ịchekwa prompt na cache nke na-amata onye na-eweta ọrụ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt Caching nke Na-amata Provider {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 na-ewebata **prompt caching nke na-amata provider**, nke na-eme ka ụgwọ API na latency ka mma site n’ịchekwa prompts gafee providers LLM dị iche iche. Provider ọ bụla nwere usoro caching na nhazi dị iche iche.

## Nchịkọta {#overview}

Prompt caching na-enye gị ohere:

- Chekwaa prompts buru ibu, a na-ejikarị eme ihe
- Belata ụgwọ API site n’izere nhazi ugboro ugboro na-enweghị mkpa
- Mee ka latency ka mma maka arịrịọ echekwara na cache
- Jikwaa cache lifecycle n'ụzọ doro anya

Providers dị iche iche na-etinye caching n’ọrụ n’ụzọ dị iche:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching nwere TTL
- **OpenRouter**: Caching pụrụ iche maka provider
- **Vertex Anthropic**: Prompt caching nwere cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini na-enye njikwa cache doro anya site na `cachedContents` API.

### Nhazi {#configuration}

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

### Ịmepụta Prompt Echekwara na Cache {#creating-a-cached-prompt}

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

### Iji Prompt Echekwara na Cache {#using-a-cached-prompt}

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

### Omume Kachasị Mma maka Gemini {#best-practices-for-gemini}

- **Tọọ TTL kwesịrị ekwesị**: Hazie n’etiti ịchekwa ụgwọ na ịka nká nke cache
- **Chekwaa system prompts na cache**: Jiri otu system prompt ọzọ gafee arịrịọ
- **Nyochaa ojiji cache**: Soro caches a na-eji nke ukwuu
- **Hichapụ caches gwụchara oge**: Hichapụ caches anaghị eji eme ihe kwa oge

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI na-akwado prompt caching nwere njikwa TTL akpaka.

### Nhazi {#configuration-1}

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

### Ime ka Caching rụọ ọrụ {#enabling-caching}

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

Azure OpenAI na-eji HTTP headers maka cache control:

```
Cache-Control: max_age=3600
```

Ụkpụrụ akwadoro:

- `max_age=<seconds>`: Chekwaa na cache ruo oge akọwapụtara
- `no_cache`: Echekwala arịrịọ a na cache
- `no_store`: Echekwala na cache ma ejikwala ọzọ

### Nyochaa Ojiji Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Omume Kachasị Mma maka Azure OpenAI {#best-practices-for-azure-openai}

- **Jiri prompts na-agbanwebeghị**: Prompts yiri otu na-erite uru na caching
- **Tọọ TTL ezi uche dị na ya**: Hazie n’etiti ụgwọ na ịdị ọhụrụ
- **Nyochaa metrics cache**: Soro imepụta cache megide hits
- **Kpokọta arịrịọ yiri ibe ha**: Kpọkọta arịrịọ iji mee ka cache hits baa ụba

## OpenRouter: Caching Pụrụ Iche maka Provider {#openrouter-provider-specific-caching}

OpenRouter na-akwado caching site na providers dị n’okpuru (OpenAI, Anthropic, wdg.).

### Nhazi {#configuration-2}

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

### Iji OpenRouter Caching {#using-openrouter-caching}

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

### Nhọrọ Pụrụ Iche maka Provider {#provider-specific-options}

Providers dị iche iche nwere usoro caching dị iche:

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

### Omume Kachasị Mma maka OpenRouter {#best-practices-for-openrouter}

- **Mara caching nke provider gị**: Provider ọ bụla nwere usoro dị iche
- **Nwale omume caching**: Nyochaa na caching na-arụ ọrụ na provider ị họọrọ
- **Nyochaa ụgwọ**: Soro ego echekwara site na caching
- **Jiri models na-agbanwebeghị**: Ịgbanwe models na-emebi cache hits

## Vertex Anthropic: Prompt Caching nwere Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) na-akwado prompt caching nwere cache control doro anya.

### Nhazi {#configuration-3}

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

### Iji Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Ụdị Cache Control {#cache-control-types}

- **ephemeral**: Cache maka oge arịrịọ ahụ na-adị (ndabara)
- **persistent**: Cache gafee ọtụtụ arịrịọ (ma ọ bụrụ na a na-akwado ya)

### Nlekọta Ojiji Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Omume Kachasị Mma maka Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Jiri ephemeral caching**: Ọ dị mma maka caching nke otu nnọkọ
- **Tọọ max_tokens nke ọma**: Mee nha cache na ọnụ ahịa kwekọọ
- **Nyochaa cache metrics**: Soro ịdị irè cache
- **Nwale na ibu ọrụ gị**: Kwenye na caching bara uru maka ọnọdụ ojiji gị

## Atụmatụ Caching Gafee Provider {#cross-provider-caching-strategy}

### Nhazi Jikọrọ Ọnụ {#unified-configuration}

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

### Nchọpụta Provider {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Atụmatụ Fallback {#fallback-strategy}

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

## Ibelata Ọnụ Ahịa {#cost-optimization}

### Gbakọọ Nchekwa Ego {#calculate-savings}

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

### Ndụmọdụ Optimization {#optimization-tips}

- **Cache nnukwu system prompts**: Nchekwa ego kachasị ukwuu
- **Jigharịa context**: Cache akwụkwọ context a na-ejikarị
- **Mee arịrịọ n’ìgwè**: Kpokọta arịrịọ yiri ibe ha iji mee ka cache hits dị elu
- **Nyochaa ịdị irè cache**: Soro ezigbo ego echekwara
- **Gbanwee TTL**: Mee ọnụ ahịa na ịdị ọhụrụ kwekọọ

## Ịchọpụta na idozi nsogbu {#troubleshooting}

### A naghị eji cache eme ihe {#cache-not-being-used}

- Kwenye na enyere caching aka na nhazi
- Lelee na prompts bụ otu kpọmkwem (caching chọrọ nkwekọrịta zuru ezu)
- Kwenye na cache agafeghị oge
- Lelee oke cache pụrụ iche nke provider

### Ịmepụta cache na-ada {#cache-creation-failing}

- Kwenye na nha cache dị n’ime oke provider
- Lelee na syntax cache control ziri ezi
- Gbaa mbọ hụ na provider na-akwado caching maka model gị
- Nyochaa documentation provider maka mmachi

### Ọnụ ahịa a na-atụghị anya ya {#unexpected-costs}

- Nyochaa imepụta cache megide tokens a na-agụ site na cache
- Kwenye na a na-eji cache n’ezie
- Lelee cache misses n’ihi mgbanwe prompt
- Tụlee ịgbanwe TTL ma ọ bụ atụmatụ cache

## Ntụnyere Provider {#provider-comparison}

| Njirimara | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Nke provider pụrụ iche | Cache control |
| Njikwa TTL | Doro anya | Site na headers | Dabere na provider | Ephemeral/persistent |
| Oke nha cache | tokens 1M | Dabere na provider | Dabere na provider | tokens 1M |
| Mbelata ọnụ ahịa | 90% | 90% | Dabere na provider | 90% |
| Nlekọta | Zuru ezu | Site na metrics | Dabere na provider | Site na usage |

## Nzọụkwụ Ndị Ọzọ {#next-steps}

1. **Họrọ provider gị**: Họrọ dabere na mkpa gị
2. **Hazie caching**: Hazie caching pụrụ iche maka provider
3. **Nwale caching**: Kwenye na ọ na-arụ ọrụ na prompts gị
4. **Nyochaa ojiji**: Soro cache hits na ego echekwara
5. **Mee ka ọ ka mma**: Gbanwee TTL na atụmatụ cache dabere na nsonaazụ
