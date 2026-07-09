---
title: Ajiye Prompt a cache bisa la’akari da mai samarwa
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caching na Prompt Mai La’akari da Provider {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 yana gabatar da **caching na prompt mai la’akari da provider**, wanda ke inganta kuɗin API da jinkiri ta hanyar caching na prompts a tsakanin providers na LLM daban-daban. Kowane provider yana da hanyoyin caching da saituna daban-daban.

## Bayani Gabaɗaya {#overview}

Caching na prompt yana ba ka damar:

- Yi cache na manyan prompts da ake yawan amfani da su
- Rage kuɗin API ta hanyar guje wa maimaita sarrafawa
- Inganta jinkiri ga buƙatun da aka yi cache
- Sarrafa rayuwar cache a sarari

Providers daban-daban suna aiwatar da caching ta hanyoyi daban-daban:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Caching na prompt tare da TTL
- **OpenRouter**: Caching na musamman ga provider
- **Vertex Anthropic**: Caching na prompt tare da sarrafa cache

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini yana bayar da sarrafa cache a sarari ta hanyar `cachedContents` API.

### Saituna {#configuration}

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

### Ƙirƙirar Prompt da aka Yi Cache {#creating-a-cached-prompt}

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

### Amfani da Prompt da aka Yi Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Rayuwar Cache {#cache-lifecycle}

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

### Mafi Kyawun Hanyoyi don Gemini {#best-practices-for-gemini}

- **Saita TTL da ya dace**: Daidaita tanadin kuɗi da tsufar cache
- **Yi cache na system prompts**: Sake amfani da system prompt iri ɗaya a cikin buƙatu
- **Sa ido kan amfani da cache**: Bibiyi waɗanne caches aka fi amfani da su
- **Share caches da suka ƙare**: Share caches marasa amfani lokaci-lokaci

## Azure OpenAI: Caching na Prompt {#azure-openai-prompt-caching}

Azure OpenAI yana goyon bayan caching na prompt tare da sarrafa TTL ta atomatik.

### Saituna {#configuration-1}

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

### Kunna Caching {#enabling-caching}

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

### Headers na Cache {#cache-headers}

Azure OpenAI yana amfani da HTTP headers don sarrafa cache:

```
Cache-Control: max_age=3600
```

Ƙimomin da ake goyon baya:

- `max_age=<seconds>`: Yi cache na tsawon lokacin da aka ayyana
- `no_cache`: Kada a yi cache na wannan buƙata
- `no_store`: Kada a yi cache kuma kada a sake amfani da shi

### Sa Ido kan Amfani da Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Mafi Kyawun Hanyoyi don Azure OpenAI {#best-practices-for-azure-openai}

- **Yi amfani da prompts masu daidaito**: Prompts iri ɗaya suna amfana daga caching
- **Saita TTL mai ma’ana**: Daidaita kuɗi da sabo
- **Sa ido kan ma’aunin cache**: Bibiyi ƙirƙirar cache da hits
- **Tattara buƙatu masu kama da juna**: Rarraba buƙatu wuri ɗaya don ƙara cache hits

## OpenRouter: Caching na Musamman ga Provider {#openrouter-provider-specific-caching}

OpenRouter yana goyon bayan caching ta hanyar providers na ƙasa (OpenAI, Anthropic, da sauransu).

### Saituna {#configuration-2}

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

### Amfani da Caching na OpenRouter {#using-openrouter-caching}

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

### Zaɓuɓɓuka na Musamman ga Provider {#provider-specific-options}

Providers daban-daban suna da hanyoyin caching daban-daban:

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

### Mafi Kyawun Hanyoyi don OpenRouter {#best-practices-for-openrouter}

- **San caching na provider ɗinka**: Kowane provider yana da hanyoyi daban-daban
- **Gwada halayen caching**: Tabbatar caching yana aiki da provider da ka zaɓa
- **Sa ido kan kuɗaɗe**: Bibiyi tanadi daga caching
- **Yi amfani da models masu daidaito**: Sauya models yana karya cache hits

## Vertex Anthropic: Caching na Prompt tare da Sarrafa Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) yana goyon bayan caching na prompt tare da sarrafa cache a sarari.

### Saituna {#configuration-3}

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

### Amfani da Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Nau'ikan Sarrafa Cache {#cache-control-types}

- **ephemeral**: Cache na tsawon lokacin buƙatar (tsoho)
- **persistent**: Cache a cikin buƙatu da yawa (idan ana goyon baya)

### Sa Ido kan Amfani da Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Mafi Kyawun Dabaru don Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Yi amfani da ephemeral caching**: Yana da kyau don caching na zaman guda
- **Saita max_tokens yadda ya dace**: Daidaita girman cache da farashi
- **Sa ido kan ma'aunin cache**: Bibiyi ingancin cache
- **Gwada da aikin ka**: Tabbatar caching yana amfani ga yanayin amfanin ka

## Dabarar Caching Ta Masu Samarwa Daban-daban {#cross-provider-caching-strategy}

### Daidaitaccen Saitawa {#unified-configuration}

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

### Gano Provider {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Dabarar Fallback {#fallback-strategy}

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

## Inganta Farashi {#cost-optimization}

### Lissafa Tanadi {#calculate-savings}

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

### Shawarwarin Ingantawa {#optimization-tips}

- **Cache manyan system prompts**: Mafi girman tanadin farashi
- **Sake amfani da context**: Cache takardun context da ake yawan amfani da su
- **Tara buƙatu**: Haɗa buƙatu masu kama don ƙara cache hits
- **Sa ido kan ingancin cache**: Bibiyi ainihin tanadi
- **Daidaita TTL**: Daidaita farashi da sabo

## Gyaran Matsaloli {#troubleshooting}

### Ba a amfani da cache {#cache-not-being-used}

- Tabbatar caching yana kunne a cikin saitawa
- Duba cewa prompts ɗin iri ɗaya ne (caching yana buƙatar cikakken daidaito)
- Tabbatar cache bai ƙare ba
- Duba iyakokin cache na musamman ga provider

### Ƙirƙirar cache na gaza {#cache-creation-failing}

- Tabbatar girman cache yana cikin iyakokin provider
- Duba cewa tsarin cache control daidai ne
- Tabbatar provider yana goyon bayan caching don model ɗin ka
- Duba takardun provider don iyakoki

### Farashi da ba a zata ba {#unexpected-costs}

- Sa ido kan ƙirƙirar cache da cache read tokens
- Tabbatar da gaske ana amfani da cache
- Duba cache misses saboda bambance-bambancen prompt
- Yi la'akari da daidaita TTL ko dabarar cache

## Kwatanta Provider {#provider-comparison}

| Fasali | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Na musamman ga provider | Cache control |
| Sarrafa TTL | A fili | Ta headers | Ya dogara da provider | Ephemeral/persistent |
| Matsakaicin girman cache | 1M tokens | Ya dogara da provider | Ya dogara da provider | 1M tokens |
| Rage farashi | 90% | 90% | Ya dogara da provider | 90% |
| Sa ido | Dalla-dalla | Ta metrics | Ya dogara da provider | Ta usage |

## Matakai na Gaba {#next-steps}

1. **Zaɓi provider ɗin ka**: Zaɓa bisa buƙatun ka
2. **Saita caching**: Kafa caching na musamman ga provider
3. **Gwada caching**: Tabbatar yana aiki da prompts ɗin ka
4. **Sa ido kan amfani**: Bibiyi cache hits da tanadin farashi
5. **Inganta**: Daidaita TTL da dabarar cache bisa sakamako
