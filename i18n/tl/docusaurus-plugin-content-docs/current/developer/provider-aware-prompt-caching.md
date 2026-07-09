---
title: Pag-cache ng Prompt na Nakabatay sa Tagapagbigay
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Ipinapakilala ng Superdav AI Agent v1.12.0 ang **provider-aware prompt caching**, na nag-o-optimize ng mga gastos sa API at latency sa pamamagitan ng pag-cache ng mga prompt sa iba't ibang LLM provider. May iba't ibang mekanismo at configuration sa caching ang bawat provider.

## Pangkalahatang-ideya

Pinapayagan ka ng prompt caching na:

- I-cache ang malalaki at madalas gamitin na mga prompt
- Bawasan ang mga gastos sa API sa pamamagitan ng pag-iwas sa paulit-ulit na pagproseso
- Pahusayin ang latency para sa mga naka-cache na request
- Tahasang pamahalaan ang lifecycle ng cache

Iba-iba ang pagpapatupad ng caching ng iba't ibang provider:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching na may TTL
- **OpenRouter**: Caching na partikular sa provider
- **Vertex Anthropic**: Prompt caching na may cache control

## Google Gemini: cachedContents API

Nagbibigay ang Google Gemini ng tahasang pamamahala ng cache sa pamamagitan ng `cachedContents` API.

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

### Paggawa ng Naka-cache na Prompt

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

### Paggamit ng Naka-cache na Prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Lifecycle ng Cache

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

### Pinakamahuhusay na Kasanayan para sa Gemini

- **Magtakda ng angkop na TTL**: Balansehin ang pagtitipid sa gastos kumpara sa pagkaluma ng cache
- **I-cache ang mga system prompt**: Muling gamitin ang parehong system prompt sa iba't ibang request
- **Subaybayan ang paggamit ng cache**: Tukuyin kung aling mga cache ang pinakaginagamit
- **Linisin ang mga nag-expire na cache**: Pana-panahong burahin ang mga hindi ginagamit na cache

## Azure OpenAI: Prompt Caching

Sinusuportahan ng Azure OpenAI ang prompt caching na may awtomatikong pamamahala ng TTL.

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

### Pag-enable ng Caching

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

### Mga Cache Header

Gumagamit ang Azure OpenAI ng mga HTTP header para sa cache control:

```
Cache-Control: max_age=3600
```

Mga sinusuportahang value:

- `max_age=<seconds>`: I-cache para sa tinukoy na tagal
- `no_cache`: Huwag i-cache ang request na ito
- `no_store`: Huwag i-cache at huwag muling gamitin

### Pagsubaybay sa Paggamit ng Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Pinakamahuhusay na Kasanayan para sa Azure OpenAI

- **Gumamit ng magkakaparehong prompt**: Nakikinabang sa caching ang magkakaparehong prompt
- **Magtakda ng makatuwirang TTL**: Balansehin ang gastos kumpara sa pagiging bago
- **Subaybayan ang mga sukatan ng cache**: Tukuyin ang paggawa ng cache kumpara sa mga hit
- **I-batch ang magkatulad na request**: Ipangkat ang mga request upang mapalaki ang mga cache hit

## OpenRouter: Caching na Partikular sa Provider

Sinusuportahan ng OpenRouter ang caching sa pamamagitan ng mga pinagbabatayang provider (OpenAI, Anthropic, atbp.).

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

### Paggamit ng OpenRouter Caching

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

### Mga Opsyon na Partikular sa Provider

May iba't ibang mekanismo ng caching ang iba't ibang provider:

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

### Pinakamahuhusay na Kasanayan para sa OpenRouter

- **Alamin ang caching ng iyong provider**: May iba't ibang mekanismo ang bawat provider
- **Subukan ang gawi ng caching**: Tiyaking gumagana ang caching sa pinili mong provider
- **Subaybayan ang mga gastos**: Tukuyin ang matitipid mula sa caching
- **Gumamit ng magkakaparehong model**: Ang pagpapalit ng model ay sumisira sa mga cache hit

## Vertex Anthropic: Prompt Caching na may Cache Control

Sinusuportahan ng Vertex Anthropic (Google Cloud) ang prompt caching na may tahasang cache control.

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

### Paggamit ng Vertex Anthropic Caching

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

### Mga Uri ng Cache Control

- **ephemeral**: Cache para sa tagal ng request (default)
- **persistent**: Cache sa maraming request (kung sinusuportahan)

### Pagsubaybay sa Paggamit ng Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Pinakamahuhusay na Kasanayan para sa Vertex Anthropic

- **Gumamit ng ephemeral caching**: Mabuti para sa single-session caching
- **Itakda nang angkop ang max_tokens**: Balansehin ang laki ng cache laban sa gastos
- **Subaybayan ang cache metrics**: Subaybayan ang bisa ng cache
- **Subukan gamit ang iyong workload**: Tiyaking kapaki-pakinabang ang caching para sa iyong use case

## Cross-Provider Caching Strategy

### Pinag-isang Configuration

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

### Pagtukoy ng Provider

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

## Pag-optimize ng Gastos

### Kalkulahin ang Matitipid

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

### Mga Tip sa Pag-optimize

- **I-cache ang malalaking system prompts**: Pinakamalaking matitipid sa gastos
- **Muling gamitin ang context**: I-cache ang madalas gamiting mga dokumento ng context
- **I-batch ang requests**: Igrupo ang magkakatulad na requests upang mapalaki ang cache hits
- **Subaybayan ang bisa ng cache**: Subaybayan ang aktuwal na matitipid
- **Ayusin ang TTL**: Balansehin ang gastos laban sa pagiging napapanahon

## Pag-troubleshoot

### Hindi ginagamit ang cache

- Tiyaking naka-enable ang caching sa configuration
- Suriing magkapareho ang prompts (nangangailangan ang caching ng eksaktong tugma)
- Tiyaking hindi pa nag-expire ang cache
- Suriin ang provider-specific cache limits

### Nabibigo ang paggawa ng cache

- Tiyaking nasa loob ng provider limits ang laki ng cache
- Suriing tama ang cache control syntax
- Tiyaking sinusuportahan ng provider ang caching para sa iyong model
- Suriin ang dokumentasyon ng provider para sa mga limitasyon

### Hindi inaasahang gastos

- Subaybayan ang cache creation laban sa cache read tokens
- Tiyaking talagang ginagamit ang cache
- Suriin kung may cache misses dahil sa pagkakaiba-iba ng prompt
- Isaalang-alang ang pag-aayos ng TTL o cache strategy

## Paghahambing ng Provider

| Tampok | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| Kontrol ng TTL | Explicit | Sa pamamagitan ng headers | Depende sa provider | Ephemeral/persistent |
| Pinakamalaking laki ng cache | 1M tokens | Depende sa provider | Depende sa provider | 1M tokens |
| Pagbawas ng gastos | 90% | 90% | Depende sa provider | 90% |
| Pagsubaybay | Detalyado | Sa pamamagitan ng metrics | Depende sa provider | Sa pamamagitan ng usage |

## Mga Susunod na Hakbang

1. **Piliin ang iyong provider**: Pumili batay sa iyong mga pangangailangan
2. **I-configure ang caching**: I-set up ang provider-specific caching
3. **Subukan ang caching**: Tiyaking gumagana ito sa iyong prompts
4. **Subaybayan ang paggamit**: Subaybayan ang cache hits at matitipid sa gastos
5. **I-optimize**: Ayusin ang TTL at cache strategy batay sa mga resulta
