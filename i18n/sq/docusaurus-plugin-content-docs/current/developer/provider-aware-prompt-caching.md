---
title: Ruajtja në cache e Prompt-eve me Ndërgjegjësim për Ofruesin
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cache-im i Prompt-it i Ndërgjegjshëm për Provider {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 prezanton **cache-im të prompt-it të ndërgjegjshëm për provider**, i cili optimizon kostot e API-së dhe vonesën duke cache-uar prompt-et nëpër provider-a të ndryshëm LLM. Çdo provider ka mekanizma dhe konfigurime të ndryshme cache-imi.

## Përmbledhje {#overview}

Cache-imi i prompt-it ju lejon të:

- Cache-oni prompt-e të mëdha, të përdorura shpesh
- Ulni kostot e API-së duke shmangur përpunimin e tepërt
- Përmirësoni vonesën për kërkesat e cache-uara
- Menaxhoni në mënyrë eksplicite ciklin e jetës së cache-it

Provider-a të ndryshëm e zbatojnë cache-imin ndryshe:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Cache-im i prompt-it me TTL
- **OpenRouter**: Cache-im specifik për provider
- **Vertex Anthropic**: Cache-im i prompt-it me kontroll cache-i

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini ofron menaxhim eksplicit të cache-it përmes `cachedContents` API.

### Konfigurimi {#configuration}

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

### Krijimi i një Prompt-i të Cache-uar {#creating-a-cached-prompt}

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

### Përdorimi i një Prompt-i të Cache-uar {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cikli i Jetës së Cache-it {#cache-lifecycle}

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

### Praktikat më të Mira për Gemini {#best-practices-for-gemini}

- **Vendosni TTL të përshtatshëm**: Balanconi kursimet e kostos kundrejt vjetërsimit të cache-it
- **Cache-oni prompt-et e sistemit**: Ripërdorni të njëjtin prompt sistemi nëpër kërkesa
- **Monitoroni përdorimin e cache-it**: Ndiqni cilat cache përdoren më shumë
- **Pastroni cache-et e skaduara**: Fshini periodikisht cache-et e papërdorura

## Azure OpenAI: Cache-im i Prompt-it {#azure-openai-prompt-caching}

Azure OpenAI mbështet cache-imin e prompt-it me menaxhim automatik TTL.

### Konfigurimi {#configuration-1}

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

### Aktivizimi i Cache-imit {#enabling-caching}

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

### Header-at e Cache-it {#cache-headers}

Azure OpenAI përdor header-a HTTP për kontrollin e cache-it:

```
Cache-Control: max_age=3600
```

Vlerat e mbështetura:

- `max_age=<seconds>`: Cache-o për kohëzgjatjen e specifikuar
- `no_cache`: Mos e cache-o këtë kërkesë
- `no_store`: Mos e cache-o dhe mos e ripërdor

### Monitorimi i Përdorimit të Cache-it {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Praktikat më të Mira për Azure OpenAI {#best-practices-for-azure-openai}

- **Përdorni prompt-e të qëndrueshme**: Prompt-et identike përfitojnë nga cache-imi
- **Vendosni TTL të arsyeshëm**: Balanconi koston kundrejt freskisë
- **Monitoroni metrikat e cache-it**: Ndiqni krijimin e cache-it kundrejt goditjeve
- **Grumbulloni kërkesa të ngjashme**: Gruponi kërkesat për të maksimizuar goditjet e cache-it

## OpenRouter: Cache-im Specifik për Provider {#openrouter-provider-specific-caching}

OpenRouter mbështet cache-imin përmes provider-ave themelorë (OpenAI, Anthropic, etj.).

### Konfigurimi {#configuration-2}

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

### Përdorimi i Cache-imit të OpenRouter {#using-openrouter-caching}

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

### Opsione Specifike për Provider {#provider-specific-options}

Provider-a të ndryshëm kanë mekanizma të ndryshëm cache-imi:

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

### Praktikat më të Mira për OpenRouter {#best-practices-for-openrouter}

- **Njihni cache-imin e provider-it tuaj**: Çdo provider ka mekanizma të ndryshëm
- **Testoni sjelljen e cache-imit**: Verifikoni që cache-imi funksionon me provider-in tuaj të zgjedhur
- **Monitoroni kostot**: Ndiqni kursimet nga cache-imi
- **Përdorni modele të qëndrueshme**: Ndërrimi i modeleve prish goditjet e cache-it

## Vertex Anthropic: Cache-im i Prompt-it me Kontroll Cache-i {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) mbështet cache-imin e prompt-it me kontroll eksplicit të cache-it.

### Konfigurimi {#configuration-3}

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

### Përdorimi i caching-ut të Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Llojet e kontrollit të cache-it {#cache-control-types}

- **ephemeral**: Ruaj në cache për kohëzgjatjen e kërkesës (parazgjedhje)
- **persistent**: Ruaj në cache përgjatë disa kërkesave (nëse mbështetet)

### Monitorimi i përdorimit të cache-it {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Praktikat më të mira për Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Përdor caching ephemeral**: I mirë për caching me një seancë
- **Vendos max_tokens në mënyrë të përshtatshme**: Balanco madhësinë e cache-it kundrejt kostos
- **Monitoro metrikat e cache-it**: Ndiq efektivitetin e cache-it
- **Testo me ngarkesën tënde të punës**: Verifiko që caching-u i sjell përfitim rastit tënd të përdorimit

## Strategjia e caching-ut ndërmjet ofruesve {#cross-provider-caching-strategy}

### Konfigurim i unifikuar {#unified-configuration}

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

### Zbulimi i ofruesit {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Strategjia rezervë {#fallback-strategy}

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

## Optimizimi i kostos {#cost-optimization}

### Llogarit kursimet {#calculate-savings}

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

### Këshilla optimizimi {#optimization-tips}

- **Ruaj në cache promptet e mëdha të sistemit**: Kursimet më të mëdha të kostos
- **Ripërdor kontekstin**: Ruaj në cache dokumente konteksti të përdorura shpesh
- **Grumbullo kërkesat**: Grupo kërkesa të ngjashme për të maksimizuar goditjet në cache
- **Monitoro efektivitetin e cache-it**: Ndiq kursimet reale
- **Rregullo TTL**: Balanco koston kundrejt freskisë

## Zgjidhja e problemeve {#troubleshooting}

### Cache-i nuk po përdoret {#cache-not-being-used}

- Verifiko që caching-u është aktivizuar në konfigurim
- Kontrollo që promptet janë identike (caching-u kërkon përputhje të saktë)
- Verifiko që cache-i nuk ka skaduar
- Kontrollo kufijtë e cache-it specifikë për ofruesin

### Krijimi i cache-it po dështon {#cache-creation-failing}

- Verifiko që madhësia e cache-it është brenda kufijve të ofruesit
- Kontrollo që sintaksa e kontrollit të cache-it është e saktë
- Sigurohu që ofruesi mbështet caching për modelin tënd
- Shqyrto dokumentacionin e ofruesit për kufizime

### Kosto të papritura {#unexpected-costs}

- Monitoro krijimin e cache-it kundrejt tokenëve të leximit nga cache-i
- Verifiko që cache-i po përdoret vërtet
- Kontrollo për mungesa në cache për shkak të variacioneve të promptit
- Merr parasysh rregullimin e TTL ose të strategjisë së cache-it

## Krahasimi i ofruesve {#provider-comparison}

| Veçori | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Specifike për ofruesin | Kontrolli i cache-it |
| Kontrolli i TTL | Eksplicit | Përmes headers | Varet nga ofruesi | Ephemeral/persistent |
| Madhësia maksimale e cache-it | 1M tokenë | Varet nga ofruesi | Varet nga ofruesi | 1M tokenë |
| Ulja e kostos | 90% | 90% | Varet nga ofruesi | 90% |
| Monitorimi | I detajuar | Përmes metrikave | Varet nga ofruesi | Përmes përdorimit |

## Hapat e ardhshëm {#next-steps}

1. **Zgjidh ofruesin tënd**: Zgjidh bazuar në nevojat e tua
2. **Konfiguro caching-un**: Konfiguro caching specifik për ofruesin
3. **Testo caching-un**: Verifiko që funksionon me promptet e tua
4. **Monitoro përdorimin**: Ndiq goditjet në cache dhe kursimet e kostos
5. **Optimizo**: Rregullo TTL dhe strategjinë e cache-it bazuar në rezultate
