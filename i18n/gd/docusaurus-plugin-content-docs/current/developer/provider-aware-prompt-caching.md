---
title: Tasgadh phròmptan a tha mothachail air an t-solaraiche
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Tasgadh prompt mothachail air solaraichean {#provider-aware-prompt-caching}

Tha Superdav AI Agent v1.12.0 a’ toirt a-steach **tasgadh prompt mothachail air solaraichean**, a nì cosgaisean API agus latency nas fheàrr le bhith a’ tasgadh promptaichean thar diofar sholaraichean LLM. Tha uidheaman agus rèiteachaidhean tasgaidh eadar-dhealaichte aig gach solaraiche.

## Sealladh farsaing {#overview}

Leigidh tasgadh prompt leat:

- Promptaichean mòra, a thathar a’ cleachdadh gu tric, a thasgadh
- Cosgaisean API a lùghdachadh le bhith a’ seachnadh giullachd ath-aithriseach
- Latency a leasachadh airson iarrtasan tasgaichte
- Cuairt-beatha an tasgadain a stiùireadh gu soilleir

Bidh diofar sholaraichean a’ cur tasgadh an gnìomh ann an dòighean eadar-dhealaichte:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Tasgadh prompt le TTL
- **OpenRouter**: Tasgadh sònraichte don t-solaraiche
- **Vertex Anthropic**: Tasgadh prompt le smachd tasgadain

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Tha Google Gemini a’ toirt seachad stiùireadh tasgadain soilleir tron `cachedContents` API.

### Rèiteachadh {#configuration}

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

### Cruthachadh prompt tasgaichte {#creating-a-cached-prompt}

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

### Cleachdadh prompt tasgaichte {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cuairt-beatha an tasgadain {#cache-lifecycle}

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

### Cleachdaidhean as fheàrr airson Gemini {#best-practices-for-gemini}

- **Suidhich TTL iomchaidh**: Cothromaich sàbhalaidhean cosgais an aghaidh seannachd an tasgadain
- **Tasgaich promptaichean siostaim**: Ath-chleachd an aon prompt siostaim thar iarrtasan
- **Cum sùil air cleachdadh an tasgadain**: Lorg dè na tasgadain as motha a thathar a’ cleachdadh
- **Glan tasgadain a dh’fhalbh an ùine**: Sguab às tasgadain nach eilear a’ cleachdadh bho àm gu àm

## Azure OpenAI: Tasgadh prompt {#azure-openai-prompt-caching}

Tha Azure OpenAI a’ toirt taic do thasgadh prompt le stiùireadh TTL fèin-obrachail.

### Rèiteachadh {#configuration-1}

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

### Cur tasgaidh an comas {#enabling-caching}

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

### Headers tasgadain {#cache-headers}

Bidh Azure OpenAI a’ cleachdadh HTTP headers airson smachd tasgadain:

```
Cache-Control: max_age=3600
```

Luachan le taic:

- `max_age=<seconds>`: Tasgaich airson an ùine shònraichte
- `no_cache`: Na tasgaich an t-iarrtas seo
- `no_store`: Na tasgaich agus na h-ath-chleachd

### Cumail sùil air cleachdadh an tasgadain {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Cleachdaidhean as fheàrr airson Azure OpenAI {#best-practices-for-azure-openai}

- **Cleachd promptaichean cunbhalach**: Gheibh promptaichean co-ionann buannachd bho thasgadh
- **Suidhich TTL reusanta**: Cothromaich cosgais an aghaidh ùiread
- **Cum sùil air metrics tasgadain**: Lorg cruthachadh tasgadain an aghaidh bhuillean
- **Batch iarrtasan coltach**: Cuir iarrtasan ann am buidhnean gus buillean tasgadain a mheudachadh

## OpenRouter: Tasgadh sònraichte don t-solaraiche {#openrouter-provider-specific-caching}

Tha OpenRouter a’ toirt taic do thasgadh tro na solaraichean bunaiteach (OpenAI, Anthropic, msaa).

### Rèiteachadh {#configuration-2}

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

### Cleachdadh tasgadh OpenRouter {#using-openrouter-caching}

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

### Roghainnean sònraichte don t-solaraiche {#provider-specific-options}

Tha uidheaman tasgaidh eadar-dhealaichte aig diofar sholaraichean:

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

### Cleachdaidhean as fheàrr airson OpenRouter {#best-practices-for-openrouter}

- **Biodh fios agad air tasgadh an t-solaraiche agad**: Tha uidheaman eadar-dhealaichte aig gach solaraiche
- **Dèan deuchainn air giùlan tasgaidh**: Dearbhaich gu bheil tasgadh ag obair leis an t-solaraiche a thagh thu
- **Cum sùil air cosgaisean**: Lorg sàbhalaidhean bho thasgadh
- **Cleachd modailean cunbhalach**: Brisidh atharrachadh mhodailean buillean tasgadain

## Vertex Anthropic: Tasgadh prompt le smachd tasgadain {#vertex-anthropic-prompt-caching-with-cache-control}

Tha Vertex Anthropic (Google Cloud) a’ toirt taic do thasgadh prompt le smachd tasgadain soilleir.

### Rèiteachadh {#configuration-3}

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

### A’ cleachdadh tasgadh Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Seòrsaichean Cache Control {#cache-control-types}

- **ephemeral**: Tasgadan fad na h-iarrtais (bunaiteach)
- **persistent**: Tasgadan thar iomadh iarrtas (ma tha taic ann)

### A’ cumail sùil air cleachdadh an tasgadain {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Na cleachdaidhean as fheàrr airson Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Cleachd tasgadh ephemeral**: Math airson tasgadh ann an aon seisean
- **Suidhich max_tokens gu h-iomchaidh**: Cothromaich meud an tasgadain an aghaidh cosgais
- **Cum sùil air meatraigean an tasgadain**: Lorg èifeachdas an tasgadain
- **Dèan deuchainn leis an eallach-obrach agad**: Dearbhaich gu bheil tasgadh feumail don chùis-chleachdaidh agad

## Ro-innleachd tasgaidh thar sholaraichean {#cross-provider-caching-strategy}

### Rèiteachadh aonaichte {#unified-configuration}

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

### Lorg solaraiche {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Ro-innleachd cùl-taice {#fallback-strategy}

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

## Barranachadh cosgais {#cost-optimization}

### Obraich a-mach sàbhalaidhean {#calculate-savings}

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

### Molaidhean barranachaidh {#optimization-tips}

- **Tasgaich brosnachaidhean mòra siostaim**: Na sàbhalaidhean cosgais as motha
- **Ath-chleachd co-theacsa**: Tasgaich sgrìobhainnean co-theacsa a thathar a’ cleachdadh gu tric
- **Cuir iarrtasan ann am buidhnean**: Cruinnich iarrtasan coltach ri chèile gus buillean tasgadain a mheudachadh
- **Cum sùil air èifeachdas an tasgadain**: Lorg na fìor shàbhalaidhean
- **Atharraich TTL**: Cothromaich cosgais an aghaidh ùiread

## Fuasgladh dhuilgheadasan {#troubleshooting}

### Chan eil an tasgadan ga chleachdadh {#cache-not-being-used}

- Dearbhaich gu bheil tasgadh an comas san rèiteachadh
- Dèan cinnteach gu bheil na brosnachaidhean co-ionann (tha tasgadh ag iarraidh maids cheart)
- Dearbhaich nach eil an tasgadan air tighinn gu crìch
- Thoir sùil air crìochan tasgadain a tha sònraichte don t-solaraiche

### Tha cruthachadh an tasgadain a’ fàiligeadh {#cache-creation-failing}

- Dearbhaich gu bheil meud an tasgadain taobh a-staigh crìochan an t-solaraiche
- Dèan cinnteach gu bheil co-chàradh Cache Control ceart
- Dèan cinnteach gu bheil an solaraiche a’ toirt taic do thasgadh airson a’ mhodail agad
- Lèirmheas sgrìobhainnean an t-solaraiche airson cuingeachaidhean

### Cosgaisean ris nach robh dùil {#unexpected-costs}

- Cum sùil air cruthachadh tasgadain an aghaidh tòcanan leughaidh tasgadain
- Dearbhaich gu bheil an tasgadan ga chleachdadh dha-rìribh
- Thoir sùil airson fàilligidhean tasgadain air sgàth atharrachaidhean ann am brosnachaidhean
- Beachdaich air TTL no ro-innleachd tasgadain atharrachadh

## Coimeas sholaraichean {#provider-comparison}

| Feart | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API tasgadain | cachedContents | Bann-cinn HTTP | Sònraichte don t-solaraiche | Cache Control |
| Smachd TTL | Follaiseach | Tro bhann-cinn | An urra ris an t-solaraiche | Ephemeral/persistent |
| Meud tasgadain as motha | 1M tòcan | An urra ris an t-solaraiche | An urra ris an t-solaraiche | 1M tòcan |
| Lùghdachadh cosgais | 90% | 90% | An urra ris an t-solaraiche | 90% |
| Cumail sùil | Mionaideach | Tro mheatraigean | An urra ris an t-solaraiche | Tro chleachdadh |

## Na h-ath cheumannan {#next-steps}

1. **Tagh an solaraiche agad**: Tagh stèidhichte air na feumalachdan agad
2. **Rèitich tasgadh**: Stèidhich tasgadh a tha sònraichte don t-solaraiche
3. **Dèan deuchainn air tasgadh**: Dearbhaich gu bheil e ag obair leis na brosnachaidhean agad
4. **Cum sùil air cleachdadh**: Lorg buillean tasgadain agus sàbhalaidhean cosgais
5. **Barranaich**: Atharraich TTL agus ro-innleachd tasgadain stèidhichte air toraidhean
