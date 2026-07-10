---
title: Kev khaws lus qhia cia rau cache uas paub txog tus muab kev pab
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 qhia **provider-aware prompt caching**, uas pab txo API tus nqi thiab latency los ntawm kev khaws prompts cia siv tau thoob ntau tus LLM providers. Txhua tus provider muaj lawv txoj kev caching thiab kev teeb tsa sib txawv.

## Kev piav qhia dav dav {#overview}

Prompt caching tso cai rau koj:

- Khaws cov prompts loj uas siv tas li cia
- Txo API tus nqi los ntawm kev zam kev ua haujlwm rov ua dua
- Txhim kho latency rau cov kev thov uas twb cached lawm
- Tswj cache lifecycle kom meej

Cov providers sib txawv siv caching sib txawv:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching nrog TTL
- **OpenRouter**: Caching raws provider
- **Vertex Anthropic**: Prompt caching nrog cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini muab kev tswj cache meej los ntawm `cachedContents` API.

### Kev teeb tsa {#configuration}

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

### Tsim ib qho Cached Prompt {#creating-a-cached-prompt}

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

### Siv ib qho Cached Prompt {#using-a-cached-prompt}

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

### Cov kev coj zoo tshaj rau Gemini {#best-practices-for-gemini}

- **Teem TTL kom haum**: Ntsuas kev txuag nqi piv rau cache qub dhau
- **Cache system prompts**: Rov siv tib system prompt hauv ntau qhov kev thov
- **Saib xyuas kev siv cache**: Taug qab cov caches twg siv ntau tshaj
- **Tu cov caches uas tas sijhawm**: Nquag rho tawm cov caches uas tsis siv lawm

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI txhawb prompt caching nrog kev tswj TTL tsis siv tes ua.

### Kev teeb tsa {#configuration-1}

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

### Qhib Caching {#enabling-caching}

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

Azure OpenAI siv HTTP headers rau cache control:

```
Cache-Control: max_age=3600
```

Cov nqi uas txhawb nqa:

- `max_age=<seconds>`: Cache rau lub sijhawm uas teev tseg
- `no_cache`: Tsis txhob cache qhov kev thov no
- `no_store`: Tsis txhob cache thiab tsis txhob rov siv

### Saib xyuas kev siv Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Cov kev coj zoo tshaj rau Azure OpenAI {#best-practices-for-azure-openai}

- **Siv prompts kom zoo ib yam**: Prompts uas zoo ib yam kiag tau txais txiaj ntsig los ntawm caching
- **Teem TTL kom tsim nyog**: Ntsuas tus nqi piv rau kev tshiab
- **Saib xyuas cache metrics**: Taug qab kev tsim cache piv rau hits
- **Batch cov kev thov zoo sib xws**: Muab cov kev thov ua pab kom tau cache hits ntau tshaj

## OpenRouter: Caching Raws Provider {#openrouter-provider-specific-caching}

OpenRouter txhawb caching los ntawm cov providers hauv qab (OpenAI, Anthropic, thiab lwm yam).

### Kev teeb tsa {#configuration-2}

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

### Siv OpenRouter Caching {#using-openrouter-caching}

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

### Cov kev xaiv raws Provider {#provider-specific-options}

Cov providers sib txawv muaj cov txheej txheem caching sib txawv:

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

### Cov kev coj zoo tshaj rau OpenRouter {#best-practices-for-openrouter}

- **Paub koj tus provider txoj kev caching**: Txhua tus provider muaj cov txheej txheem sib txawv
- **Kuaj caching tus cwj pwm**: Xyuas kom tseeb tias caching ua haujlwm nrog tus provider uas koj xaiv
- **Saib xyuas cov nqi**: Taug qab kev txuag tau los ntawm caching
- **Siv models kom zoo ib yam**: Hloov models yuav ua rau cache hits tawg

## Vertex Anthropic: Prompt Caching nrog Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) txhawb prompt caching nrog cache control meej.

### Kev teeb tsa {#configuration-3}

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

### Siv Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Hom Cache Control {#cache-control-types}

- **ephemeral**: Cache rau lub sijhawm ntawm qhov request (default)
- **persistent**: Cache hla ntau qhov requests (yog tias txhawb)

### Saib Xyuas Kev Siv Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Cov Kev Xyaum Zoo Tshaj rau Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Siv ephemeral caching**: Zoo rau caching hauv ib session xwb
- **Teem max_tokens kom haum**: Sib npaug cache loj thiab tus nqi
- **Saib xyuas cache metrics**: Taug qab cache ua haujlwm zoo npaum li cas
- **Kuaj nrog koj workload**: Xyuas kom caching pab tau koj qhov use case

## Tswv Yim Caching Hla Ntau Provider {#cross-provider-caching-strategy}

### Kev Teeb Tsa Sib Xws {#unified-configuration}

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

### Kev Tshawb Xyuas Provider {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Tswv Yim Fallback {#fallback-strategy}

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

## Kev Txhim Kho Kom Txo Nqi {#cost-optimization}

### Xam Qhov Txuag Tau {#calculate-savings}

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

### Cov Tswv Yim Txhim Kho {#optimization-tips}

- **Cache system prompts loj**: Txuag nqi tau ntau tshaj
- **Rov siv context**: Cache cov ntaub ntawv context uas siv tas li
- **Batch requests**: Muab cov requests uas zoo sib xws ua pab kom cache hits ntau tshaj
- **Saib xyuas cache effectiveness**: Taug qab qhov nyiaj txuag tau tiag
- **Kho TTL**: Sib npaug tus nqi thiab kev tshiab

## Kev Daws Teeb Meem {#troubleshooting}

### Cache tsis raug siv {#cache-not-being-used}

- Xyuas kom caching tau qhib hauv configuration
- Tshawb xyuas tias prompts zoo ib yam nkaus (caching yuav tsum yog exact match)
- Xyuas kom cache tseem tsis tau tag sijhawm
- Tshawb xyuas provider-specific cache limits

### Tsim cache tsis tiav {#cache-creation-failing}

- Xyuas kom cache size nyob hauv provider limits
- Tshawb xyuas tias cache control syntax yog lawm
- Xyuas kom provider txhawb caching rau koj model
- Saib provider documentation rau cov kev txwv

### Cov nqi tsis tau xav txog {#unexpected-costs}

- Saib xyuas cache creation piv rau cache read tokens
- Xyuas kom cache yeej raug siv tiag
- Tshawb xyuas cache misses vim prompt variations
- Xav txog kev kho TTL lossis cache strategy

## Kev Sib Piv Provider {#provider-comparison}

| Yam ntxwv | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Kev tswj cache |
| Kev tswj TTL | Meej meej | Los ntawm headers | Nyob ntawm provider | Ephemeral/persistent |
| Cache size siab tshaj | 1M tokens | Nyob ntawm provider | Nyob ntawm provider | 1M tokens |
| Kev txo nqi | 90% | 90% | Nyob ntawm provider | 90% |
| Kev saib xyuas | Nthuav dav | Los ntawm metrics | Nyob ntawm provider | Los ntawm usage |

## Cov Kauj Ruam Tom Ntej {#next-steps}

1. **Xaiv koj provider**: Xaiv raws li koj cov kev xav tau
2. **Teeb caching**: Teeb provider-specific caching
3. **Kuaj caching**: Xyuas kom nws ua haujlwm nrog koj cov prompts
4. **Saib xyuas usage**: Taug qab cache hits thiab kev txuag nqi
5. **Txhim kho**: Kho TTL thiab cache strategy raws li cov txiaj ntsig
