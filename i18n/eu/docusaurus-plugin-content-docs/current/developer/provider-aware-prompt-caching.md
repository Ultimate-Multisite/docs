---
title: Provedor-aware prompt caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 introduce **provider-aware prompt caching**, ze optimizatzen API kostuak eta latentez (latency) gisa, prompt-ak erabiltzaileko LLM provider-ek artean cache egiten da. Provider guztiek desberdinetik cache mekanismo eta konfiguratura hauek ditu.

## Deskurtsoa {#overview}

Prompt caching-ek lehen daitezke:

- Prompts handi eta legez erabiltzen dituztenak cache egin
- Redundante prozesamenduak aurkitu behaztekin API kostuak jarraitzea
- Cache egindako eskakiz latentez (latency) hobetzea
- Cache-aren etorri-aurtzeko gaitasunaren (lifecycle) eragiketa

Provider desberdinak cache egiten hasieraz:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL (Time To Live) duen prompt caching
- **OpenRouter**: Provider-eko cachea
- **Vertex Anthropic**: Cache kontrolu duen prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini-ak `cachedContents` API bidez cache administrazio eragiketa ematen du.

### Konfigurazioa {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 ora segundian
        'max_tokens' => 1000000, // Cache egiteko max tokenak
    ],
];
```

### Cache Egina Prompt bat {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Zu bere lagunagaria da...',
        'context' => 'Handi kontekstuko dokumentua...',
        'ttl' => 3600,
    ]
);

// Indartzen du: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Promptaren Cachea Erri {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Euskal testua hau da', // User question here
    ]
);
```

### Cachearen Bidea (Cache Lifecycle) {#cache-lifecycle}

```php
// Cachearen kontuan listatu
$caches = $gemini->list_cached_contents();

// Cachearen detallak hartu
$cache = $gemini->get_cached_content( 'abc123' );

// Cachearen TTL-a hobetzea (Extend cache TTL)
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2 orduko erantzuneko bitartean hobetzea
);

// Cachearen hautatzea (Delete cache)
$gemini->delete_cached_content( 'abc123' );
```

### Gemini-ren Best Practiceak {#best-practices-for-gemini}

- **TTL-a ondo ematen**: Kostu ahorau eta cachearen batzu edo ezbatzen artean balansa egin.
- **System promptaren cachea**: Beste eskaera bere oneskatu (Reuse the same system prompt across requests).
- **Cachearen erabilera monitorizatu**: Nola cacheak gehiago erabiltzen dira, eta nolan da.
- **Hautatutako cacheak asekitu**: Ez erabiltzen cacheak periodicoki hautatzea.

## Azure OpenAI: Prompt Caching (Promptaren Cachea) {#azure-openai-prompt-caching}

Azure OpenAI-k TTL-aren automatikoko manehoarekin prompt cachinga suportatzen du.

### Konfigurazioa (Configuration) {#configuration-1}

```php
$config = [
    'provider' => 'azure-openai',
    'model' => 'gpt-4-turbo',
    'api_version' => '2024-08-01-preview',
    'caching' => [
        'enabled' => true,
        'cache_control' => 'max_age=3600', // 1 oraan (3600 segundioan)
    ],
];
```

### Cachearen Aktiboa Ekitzea (Enabling Caching) {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Zure lagun er gizarteko aurkea dauden bidezai...',
        'context' => 'Handia konte dokumentua handia...',
        'prompt' => 'Ergune jardutza dauden testua aipatzean',
        'cache_control' => 'max_age=3600',
    ]
);

// Er atzeneko iradokizuna (cache) er gehiak barru egiten du:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Headerak {#cache-headers}

Azure OpenAI-k cache kontrola erantzunak (HTTP headers) erabiltzen du:

```
Cache-Control: max_age=3600
```

Eskurtatu dituen jarduerak:

- `max_age=<segundo>`: Eradokia ditentukan itzultzeko.
- `no_cache`: Erantzunak ez cacheatzi behar da.
- `no_store`: Ez cacheatzi eta ez gogoratzen du.

### Cache Erabenduaren Erakunde Egitzena {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache erabendu: $cache_tokens token\n";
echo "Cache hitak: $cache_hits token\n";
```

### Azure OpenAI-ko Best Practiceak {#best-practices-for-azure-openai}

- **Erabendu batzuk erabiltu**: Identiko iradokizunak cachea onartzen du.
- **TTL erabili**: Kostua eta freskurtasunaren bilduan balansa egin.
- **Cache metrikak egitu**: Cache erabendu eta hitak ikustu.
- **Erreur esku batzuk agertu**: Cache hitak maximizatzeko iradokizunak grupatu.

## OpenRouter: Provider-eko Cachea {#openrouter-provider-specific-caching}

OpenRouter-ek osasunaren (OpenAI, Anthropic, etc.) ondoriozko provider-ek bidez cachea onartzen du.

### Konfigurazioa {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI-ren cachea
    ],
];
```

### OpenRouter Caching Erabiltzea {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Zure lagun den gizartea da...',
        'context' => 'Handia kontekstuko dokumentua...',
        'prompt' => 'Erreguntzen dituen jardutza da',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Provider-eko Erabilgar Opcionesak {#provider-specific-options}

Provider-ek ezberdina cachea mekanismoak ditu:

```php
// OpenAI-bilen onartzen dituen cachea
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-bilen onartzen dituen cachea
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

### OpenRouter-eko Best Practicesak {#best-practices-for-openrouter}

- **Zure provider-ren cachea jakatu**: Provider guzti mekanismo ezberdinetu ditu.
- **Cachearen erakunde testatu**: Cachea zure aukeratutako providerarekin onartzen da.
- **Kostuak erakunde**: Cachearen erabilera gertatzen duen aurrezkedune ikusi.
- **Modelak onartu**: Modelak aldatzea cache hit-ek eskaintzen du.

## Vertex Anthropic: Prompt Caching eta Cache Controla {#vertex-anthropic-prompt-caching-with-cache-control}

(Eski testu hau ez da, baina itxura dago.)

Vertex Anthropic (Google Cloud) prompt caching-a suporta cache explicit control.

### Konfigurazioa {#configuration-3}

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

### Vertex Anthropic Caching Erabiltzen {#using-vertex-anthropic-caching}

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

// Respondek cache metrikak nagusi du:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Control Tipaketa {#cache-control-types}

- **ephemeral**: Cache requestaren zeharraren bitartean (default)
- **persistent**: Multiple requestetan cachea (supportatzen bada)

### Cache Erabiltzen Monitorizazioa {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic-eko Praktikak {#best-practices-for-vertex-anthropic}

- **Erabatu cache ephemeral (eg. edo sesio bat daiteko)**: Ez dago irudien cache-a itxarako.
- **Max_tokensa ondo ezartu**: Cache-aren diseinazioa eta kostuan balansa egin behar duzu.
- **Cache metrikak eratu**: Cache-aren eraginkoritatea egiaztatu.
- **Itxarpenak workload-arekin erakustu**: Cache-ak uso-arekin onartzen duen jakinarazteko.

## Provider-ek Arrakastapen Estrategia (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### Konfigurazioa Batua (Unified Configuration) {#unified-configuration}

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

### Provider-ek Ahan-dendua (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Provider-eko cache konfiguratazioa eratu
```

### Itxarpenak (Fallback Strategy) {#fallback-strategy}

```php
try {
    // Probar cachearekin le provedior primarioa
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Itxarriren non-cacheatutako eskaera
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostu optimizazioa {#cost-optimization}

### Aurreratu ahorazioak {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Erreguntzak (provedioraren ondorioz ondo ireki da):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x txikiagoa
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x txikiagoa
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Eskaintzen dituen ahorazioa: \$$savings\n";
```

### Optimazio aukerak {#optimization-tips}

- **Cacheatu prompt funtsezkoak**: Madari ahorazio handiak dira
- **Gaitatu kontekstua**: Lehen erabiltzen dituen dokumentuak cacheatu
- **Eskaera batatu (Batch requests)**: Ondo ireki eta eskaera parehasak grupatu, cache hit-ak maximizatzeko
- **Cachearen eraginkoritatea eratu**: Astea ahorazioak egia zuzendu
- **TTL aukeratu**: Kostu eta freskurtasunaren balansa egin

## Erreguntzak {#troubleshooting}

### Cache ez dago erabiltzen {#cache-not-being-used}

- Konfigurazioran cachearekin ondo ireki da?
- Prompt funtsezkoak parehas egin behar dira (cacheari erabilera eskatzen du parehas edo lapurtu)
- Cachearen eduki ez dagoela eratu
- Proveedoraren konponbideko limiteak eratu

### Cachearekin ondo ireki ez da {#cache-creation-failing}

Cache-aizua ze kontrolatu, prozesuraren limitazioak edo kontratuaren bat ez da.
Kontrollatu, cache control sintaksia (syntax) barne dagoela.
Eskerrikun, provider-ek modelaren artean cache-aizketa suportatzen duen jakin.
Limitazioak bidez provider-en dokumentazioa ikusi.

### Kostuak ezberdinetasunak {#unexpected-costs}

- Cache-aizketa kontrako cache read tokens eta kontratuaren bilatu.
- Cache-aizketa gurean erabiltzen duen jakin.
- Prompt-ek ondo aldaketa egin dezake den cache misses (cache-aizketa ez duten) kontrolatu.
- TTL edo cache strategya aldaketara iruki.

## Provider-ek zehaztasuna {#provider-comparison}

| Karakteristika | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---|---|---|---|---|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL kontrola | Ezpiritu (Explicit) | Headers bidez | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Kostuak reduktzea | 90% | 90% | Provider-dependent | 90% |
| Monitorizazioa | Detallatuta | Metrikak bidez | Provider-dependent | Erabendu bidez (Usage) |

## Irudiak gaur eguneko {#next-steps}

1. **Providera aukeratu**: Bezatz da beharrezko alegiaren arabera.
2. **Cache-aizketa konfiguratatu**: Provider-ek bere cache-aizketa aipatzen.
3. **Cache-aizketa erakusten**: Prompt-ek baten artean ondo jakin.
4. **Erabendu izen eta kostuak bilatu**: Cache hits eta kostu ahorazioak taldeatu.
5. **Optimizatu**: Eremuaren arabera TTL eta cache strategya aldaketara iruki.
