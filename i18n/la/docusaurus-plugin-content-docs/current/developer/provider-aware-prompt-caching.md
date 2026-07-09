---
title: Reconditio monitorum provisoris conscia
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Promptorum in Cache Repositio Praebitoris Conscia

Superdav AI Agent v1.12.0 introducit **promptorum in cache repositio praebitoris conscia**, quae sumptus API et moram optimat prompta apud diversos LLM praebitores in cache reponendo. Unicuique praebitori diversa sunt machinae et configurationes cache.

## Conspectus

Promptorum in cache repositio tibi sinit:

- Magna prompta, saepe adhibita, in cache reponere
- Sumptus API minuere processu redundanti vitato
- Moram emendare petitionibus in cache conditis
- Vitam cache explicite administrare

Diversi praebitores caching diversimode efficiunt:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Promptorum caching cum TTL
- **OpenRouter**: Caching proprius praebitori
- **Vertex Anthropic**: Promptorum caching cum cache control

## Google Gemini: cachedContents API

Google Gemini administrationem cache explicitam per `cachedContents` API praebet.

### Configuratio

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

### Promptum in Cache Conditum Creare

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

### Prompto in Cache Condito Uti

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Vita Cache

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

### Optimae Rationes pro Gemini

- **TTL aptum constitue**: Aequilibra compendia sumptuum contra vetustatem cache
- **Prompta systematis in cache repone**: Idem promptum systematis per petitiones reuse
- **Usum cache observa**: Indaga quae caches maxime adhibeantur
- **Caches exspiratas purga**: Caches non adhibitas periodice dele

## Azure OpenAI: Promptorum Caching

Azure OpenAI promptorum caching cum administratione TTL automatica sustinet.

### Configuratio

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

### Caching Activare

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

### Capita Cache

Azure OpenAI capitibus HTTP ad cache control utitur:

```
Cache-Control: max_age=3600
```

Valores sustentati:

- `max_age=<seconds>`: In cache repone per durationem definitam
- `no_cache`: Hanc petitionem in cache ne repone
- `no_store`: Neque in cache repone neque reuse

### Usum Cache Observare

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Optimae Rationes pro Azure OpenAI

- **Promptis constantibus utere**: Prompta identica ex caching prosunt
- **TTL rationabile constitue**: Aequilibra sumptum contra recentiam
- **Mensuras cache observa**: Creationem cache contra hits indaga
- **Petitiones similes congloba**: Petitiones congrega ut cache hits maxime augeantur

## OpenRouter: Caching Proprium Praebitori

OpenRouter caching per praebitores subiectos (OpenAI, Anthropic, etc.) sustinet.

### Configuratio

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

### OpenRouter Caching Uti

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

### Optiones Propriae Praebitori

Diversis praebitoribus diversae sunt machinae caching:

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

### Optimae Rationes pro OpenRouter

- **Caching praebitoris tui cognosce**: Unicuique praebitori diversae sunt machinae
- **Mores caching experire**: Confirma caching cum praebitore electo tuo operari
- **Sumptus observa**: Compendia ex caching indaga
- **Modelis constantibus utere**: Mutatio modelorum cache hits frangit

## Vertex Anthropic: Promptorum Caching cum Cache Control

Vertex Anthropic (Google Cloud) promptorum caching cum cache control explicito sustinet.

### Configuratio

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

### Usus Vertex Anthropic Caching

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

### Genera Gubernationis Cache

- **ephemeral**: In cache serva per durationem petitionis (praedefinitum)
- **persistent**: In cache serva per plures petitiones (si sustentatur)

### Observatio Usus Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Optimae Rationes pro Vertex Anthropic

- **Utere caching ephemeral**: Bonum ad caching unius sessionis
- **Constitue max_tokens apte**: Aequilibra magnitudinem cache contra sumptum
- **Observa metrica cache**: Persequere efficaciam cache
- **Experire cum tuo onere laboris**: Confirma caching tuo casui usus prodesse

## Consilium Caching Inter Provisores

### Configuratio Unificata

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

### Deprehensio Provisoris

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Consilium Subsidarium

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

## Optimizatio Sumptus

### Computa Compendia

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

### Monita Optimizationis

- **In cache serva magnos system prompts**: Maxima compendia sumptus
- **Iterum utere contextu**: In cache serva documenta contextus saepe adhibita
- **Congrega petitiones**: Coniunge petitiones similes ut ictus cache maximes
- **Observa efficaciam cache**: Persequere compendia vera
- **Accommoda TTL**: Aequilibra sumptum contra recentiam

## Solutio Difficultatum

### Cache non adhibetur

- Confirma caching in configuratione activatum esse
- Reprehende prompts identica esse (caching exactam congruentiam requirit)
- Confirma cache nondum exspiravisse
- Reprehende limites cache proprios provisoris

### Creatio cache deficit

- Confirma magnitudinem cache intra limites provisoris esse
- Reprehende syntaxin gubernationis cache rectam esse
- Cura ut provisor caching pro tuo exemplari sustineat
- Recense documenta provisoris de limitationibus

### Sumptus inopinati

- Observa creationem cache contra tokens lectionis cache
- Confirma cache re vera adhiberi
- Reprehende lapsus cache propter variationes prompt
- Considera TTL aut consilium cache accommodare

## Comparatio Provisorum

| Proprietas | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Cache | cachedContents | HTTP headers | Provisori proprium | Gubernatio cache |
| Gubernatio TTL | Expressa | Per headers | Ex provisore pendens | Ephemeral/persistent |
| Maxima magnitudo cache | 1M tokens | Ex provisore pendens | Ex provisore pendens | 1M tokens |
| Imminutio sumptus | 90% | 90% | Ex provisore pendens | 90% |
| Observatio | Singillatim | Per metrica | Ex provisore pendens | Per usum |

## Gradus Proximi

1. **Elige tuum provisorem**: Selige secundum tua necessaria
2. **Configura caching**: Constitue caching provisori proprium
3. **Experire caching**: Confirma id cum tuis prompts operari
4. **Observa usum**: Persequere ictus cache et compendia sumptus
5. **Optimiza**: Accommoda TTL et consilium cache secundum eventus
