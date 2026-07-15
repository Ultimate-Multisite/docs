---
title: Kachaj prompt ki konsyan de founisè a
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Kach Prompt ki Konsyan de Provider

Superdav AI Agent v1.12.0 prezante **kach prompt ki konsyan de provider**, ki optimize depans API ak latans lè li mete prompt yo an kach atravè diferan provider LLM. Chak provider gen mekanis ak konfigirasyon kach diferan.

## Apèsi {#overview}

Kach prompt pèmèt ou:

- Mete gwo prompt yo itilize souvan an kach
- Diminye depans API lè w evite pwosesis ki repete san nesesite
- Amelyore latans pou demann ki an kach
- Jere sik lavi kach la klèman

Diferan provider aplike kach yon fason diferan:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Kach prompt ak TTL
- **OpenRouter**: Kach espesifik pou provider
- **Vertex Anthropic**: Kach prompt ak kontwòl kach

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini bay jesyon kach klè atravè `cachedContents` API.

### Konfigirasyon {#configuration}

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

### Kreye yon Prompt ki an Kach {#creating-a-cached-prompt}

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

### Itilize yon Prompt ki an Kach {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Sik Lavi Kach {#cache-lifecycle}

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

### Pi Bon Pratik pou Gemini {#best-practices-for-gemini}

- **Mete TTL ki apwopriye**: Balanse ekonomi depans ak kach ki ka vin demode
- **Mete system prompts an kach**: Reyitilize menm system prompt la atravè demann yo
- **Siveye itilizasyon kach**: Swiv ki kach yo itilize plis
- **Netwaye kach ki ekspire**: Efase kach ki pa itilize yo detanzantan

## Azure OpenAI: Kach Prompt {#azure-openai-prompt-caching}

Azure OpenAI sipòte kach prompt ak jesyon TTL otomatik.

### Konfigirasyon {#configuration-1}

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

### Aktive Kach {#enabling-caching}

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

### Header Kach {#cache-headers}

Azure OpenAI itilize header HTTP pou kontwòl kach:

```
Cache-Control: max_age=3600
```

Valè ki sipòte yo:

- `max_age=<seconds>`: Mete an kach pou dire ki espesifye a
- `no_cache`: Pa mete demann sa a an kach
- `no_store`: Pa mete an kach epi pa reyitilize

### Siveye Itilizasyon Kach {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Pi Bon Pratik pou Azure OpenAI {#best-practices-for-azure-openai}

- **Itilize prompt ki konsistan**: Prompt ki idantik benefisye de kach
- **Mete TTL ki rezonab**: Balanse depans ak frechè
- **Siveye metrik kach**: Swiv kreyasyon kach kont hits
- **Gwoupe demann ki sanble**: Gwoupe demann yo pou maksimize hits kach

## OpenRouter: Kach Espesifik pou Provider {#openrouter-provider-specific-caching}

OpenRouter sipòte kach atravè provider ki anba yo (OpenAI, Anthropic, elatriye).

### Konfigirasyon {#configuration-2}

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

### Itilize Kach OpenRouter {#using-openrouter-caching}

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

### Opsyon Espesifik pou Provider {#provider-specific-options}

Diferan provider gen mekanis kach diferan:

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

### Pi Bon Pratik pou OpenRouter {#best-practices-for-openrouter}

- **Konnen kach provider ou a**: Chak provider gen mekanis diferan
- **Teste konpòtman kach**: Verifye kach la mache ak provider ou chwazi a
- **Siveye depans yo**: Swiv ekonomi ki soti nan kach
- **Itilize modèl ki konsistan**: Chanje modèl kraze hits kach yo

## Vertex Anthropic: Kach Prompt ak Kontwòl Kach {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) sipòte kach prompt ak kontwòl kach klè.

### Konfigirasyon {#configuration-3}

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

### Sèvi ak Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Kalite Kontwòl Cache {#cache-control-types}

- **ephemeral**: Cache pou dire demann nan (default)
- **persistent**: Cache atravè plizyè demann (si li sipòte)

### Siveyans Itilizasyon Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Pi Bon Pratik pou Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Sèvi ak caching ephemeral**: Bon pou caching nan yon sèl sesyon
- **Mete max_tokens jan sa apwopriye**: Balanse gwosè cache ak pri
- **Siveye metrik cache yo**: Swiv efikasite cache la
- **Teste ak chaj travay ou**: Verifye caching bay avantaj pou ka itilizasyon ou

## Estrateji Caching Ant Founisè {#cross-provider-caching-strategy}

### Konfigirasyon Inifye {#unified-configuration}

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

### Deteksyon Founisè {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Estrateji Fallback {#fallback-strategy}

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

## Optimizasyon Pri {#cost-optimization}

### Kalkile Ekonomi {#calculate-savings}

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

### Konsèy Optimizasyon {#optimization-tips}

- **Cache gwo system prompts**: Pi gwo ekonomi pri
- **Reitilize kontèks**: Cache dokiman kontèks yo itilize souvan
- **Gwoupe demann yo**: Mete demann ki sanble yo ansanm pou maksimize cache hits
- **Siveye efikasite cache la**: Swiv ekonomi reyèl yo
- **Ajiste TTL**: Balanse pri ak fraîcheur

## Depanaj {#troubleshooting}

### Cache pa itilize {#cache-not-being-used}

- Verifye caching aktive nan konfigirasyon an
- Tcheke prompts yo idantik (caching mande korespondans egzak)
- Verifye cache la pa ekspire
- Tcheke limit cache espesifik pou founisè a

### Kreyasyon cache ap echwe {#cache-creation-failing}

- Verifye gwosè cache la nan limit founisè a
- Tcheke sentaks kontwòl cache la kòrèk
- Asire founisè a sipòte caching pou modèl ou a
- Revize dokimantasyon founisè a pou limit yo

### Pri inatandi {#unexpected-costs}

- Siveye kreyasyon cache kont cache read tokens
- Verifye cache la vrèman ap itilize
- Tcheke pou cache misses akòz varyasyon nan prompt yo
- Konsidere ajiste TTL oswa estrateji cache

## Konparezon Founisè {#provider-comparison}

| Fonksyonalite | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Espesifik pou founisè | Kontwòl cache |
| Kontwòl TTL | Eksplisit | Atravè headers | Depann de founisè | Ephemeral/persistent |
| Gwosè cache maksimòm | 1M tokens | Depann de founisè | Depann de founisè | 1M tokens |
| Rediksyon pri | 90% | 90% | Depann de founisè | 90% |
| Siveyans | Detaye | Atravè metrik | Depann de founisè | Atravè itilizasyon |

## Pwochen Etap yo {#next-steps}

1. **Chwazi founisè ou**: Chwazi selon bezwen ou yo
2. **Konfigire caching**: Mete caching espesifik pou founisè a an plas
3. **Teste caching**: Verifye li mache ak prompts ou yo
4. **Siveye itilizasyon**: Swiv cache hits ak ekonomi pri
5. **Optimize**: Ajiste TTL ak estrateji cache selon rezilta yo
