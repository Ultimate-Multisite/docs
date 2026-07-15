---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt-caching basert på leverandør

Superdav AI Agent v1.12.0 introduserer **prompt-caching basert på leverandør** (provider-aware prompt caching), som optimaliserer API-kostnader og latens ved å cache prompts på tvers av forskjellige LLM-leverandører. Hver leverandør har forskjellige caching-mekanismer og konfigurasjoner.

## Oversikt {#overview}

Prompt-caching lar deg:

- Cache store, ofte brukte prompts
- Redusere API-kostnader ved å unngå unødvendig prosessering
- Forbedre latensen for cachede forespørsler
- Administrere cache-livssyklusen eksplisitt

Forskjellige leverandører implementerer caching forskjellig:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-caching med TTL
- **OpenRouter**: Leverandørspesifikk caching
- **Vertex Anthropic**: Prompt-caching med cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini tilbyr eksplisitt cache-administrasjon via `cachedContents` API.

### Konfigurasjon {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 time i sekunder
        'max_tokens' => 1000000, // Maks tokens som kan caches
    ],
];
```

### Oppretting av en cachet prompt {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Du er en hjelpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'ttl' => 3600,
    ]
);

// Returnerer: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Bruk av en cachet prompt {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Bruker spørsmål her',
    ]
);
```

### Cache-livssyklus {#cache-lifecycle}

```php
// List cached contents
$caches = $gemini->list_cached_contents();

// Hent cache-detaljer
$cache = $gemini->get_cached_content( 'abc123' );

// Forlenge cache TTL
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Forlenger til 2 timer
);

// Slette cache
$gemini->delete_cached_content( 'abc123' );
```

### Beste praksis for Gemini {#best-practices-for-gemini}

- **Sett passende TTL**: Balanser kostnadsbesparelser mot at cachen blir utdatert
- **Cache system prompts**: Gjenbruk samme system prompt på tvers av forespørsler
- **Overvåk cache-bruk**: Spor hvilke caches som brukes mest
- **Rydd opp i utløpte caches**: Slett ubrukte caches periodisk

## Azure OpenAI: Prompt-caching {#azure-openai-prompt-caching}

Azure OpenAI støtter prompt-caching med automatisk TTL-håndtering.

### Konfigurasjon {#configuration-1}

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

### Aktivere caching {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Du er en hjelpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Bruker spørsmål her',
        'cache_control' => 'max_age=3600',
    ]
);

// Svaret inkluderer cache-bruk:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache-headers {#cache-headers}

Azure OpenAI bruker HTTP-headers for cache-kontroll:

```
Cache-Control: max_age=3600
```

Støttede verdier:

- `max_age=<sekunder>`: Cache i spesifisert varighet
- `no_cache`: Ikke cache denne forespørselen
- `no_store`: Ikke cache og ikke gjenbruk

### Overvåking av cache-bruk {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache opprettelse: $cache_tokens tokens\n";
echo "Cache treff: $cache_hits tokens\n";
```

### Beste praksis for Azure OpenAI {#best-practices-for-azure-openai}

- **Bruk konsistente prompts**: Identiske prompts drar nytte av caching
- **Sett rimelig TTL**: Balanser kostnad mot friskhet
- **Overvåk cache-metrikker**: Spor cacheopprettelse versus treff
- **Batch lignende forespørsler**: Grupper forespørsler for å maksimere cache-treff

## OpenRouter: Leverandørspesifikk caching {#openrouter-provider-specific-caching}

OpenRouter støtter caching gjennom underliggende leverandører (OpenAI, Anthropic, etc.).

### Konfigurasjon {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Bruker OpenAI sin caching
    ],
];
```

### Bruk av OpenRouter caching {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Du er en hjelpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Bruker spørsmål her',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Leverandørspesifikke alternativer {#provider-specific-options}

Forskjellige leverandører har forskjellige caching-mekanismer:

```php
// OpenAI-kompatibel caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-kompatibel caching
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

### Beste praksis for OpenRouter {#best-practices-for-openrouter}

- **Kjenn din leverandørs caching**: Hver leverandør har forskjellige mekanismer
- **Test cache-atferden**: Verifiser at caching fungerer med den valgte leverandøren
- **Overvåk kostnader**: Spor besparelser fra caching
- **Bruk konsistente modeller**: Bytting av modeller bryter cache-treff

## Vertex Anthropic: Prompt-caching med cache control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) støtter prompt-caching med eksplisitt cache control.

### Konfigurasjon {#configuration-3}

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

### Bruk av Vertex Anthropic caching {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Du er en hjelpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Bruker spørsmål her',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Svaret inkluderer cache-metrikker:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Control Typer {#cache-control-types}

- **ephemeral**: Cache for varigheten av forespørselen (standard)
- **persistent**: Cache på tvers av flere forespørsler (hvis støttet)

### Overvåking av cache-bruk {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache opprettet: $cache_created tokens\n";
echo "Cache lest: $cache_read tokens\n";
```

### Beste praksis for Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Bruk ephemeral caching**: Bra for caching i en enkelt sesjon
- **Sett max_tokens hensiktsmessig**: Balanser cachestørrelse mot kostnad
- **Overvåk cache-metrikker**: Spor cache-effektiviteten
- **Test med din arbeidsmengde**: Verifiser at caching gagner brukstilfellet ditt

## Tverr-leverandør caching-strategi {#cross-provider-caching-strategy}

### Enhetlig konfigurasjon {#unified-configuration}

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

### Leverandøroppdagelse {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Bruker leverandørspesifikk caching-konfigurasjon
```

### Fallback-strategi {#fallback-strategy}

```php
try {
    // Prøv caching med primær leverandør
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback til ikke-caching forespørsel
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostnadsoptimalisering {#cost-optimization}

### Beregne besparelser {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typisk prising (varierer etter leverandør):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x billigere
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x billigere
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimert besparelse: \$$savings\n";
```

### Optimaliseringstips {#optimization-tips}

- **Cache store system prompts**: Største kostnadsbesparelser
- **Gjenbruk kontekst**: Cache ofte brukte kontekstdokumenter
- **Batch forespørsler**: Grupper lignende forespørsler for å maksimere cache-treff
- **Overvåk cache-effektivitet**: Spor faktiske besparelser
- **Juster TTL**: Balanser kostnad mot friskhet

## Feilsøking {#troubleshooting}

### Caching brukes ikke {#cache-not-being-used}

- Verifiser at caching er aktivert i konfigurasjonen
- Sjekk at prompts er identiske (caching krever nøyaktig match)
- Verifiser at cachen ikke har utløpt
- Sjekk leverandørspesifikke cache-grenser

### Cache-oppretting feiler {#cache-creation-failing}

- Verifiser at cachestørrelsen er innenfor leverandørens grenser
- Sjekk at syntaksen for cache control er korrekt
- Forsikre deg om at leverandøren støtter caching for modellen din
- Gå gjennom leverandørens dokumentasjon for begrensninger

### Uventede kostnader {#unexpected-costs}

- Overvåk cacheopprettelse versus cache-lesing av tokens
- Verifiser at cachen faktisk blir brukt
- Sjekk for cache-miss på grunn av prompt-variasjoner
- Vurder å justere TTL eller cache-strategien

## Sammenligning av leverandører {#provider-comparison}

| Funksjon | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL kontroll | Eksplisitt | Via headers | Leverandør-avhengig | Ephemeral/persistent |
| Maks cachestørrelse | 1M tokens | Leverandør-avhengig | Leverandør-avhengig | 1M tokens |
| Kostnadsreduksjon | 90% | 90% | Leverandør-avhengig | 90% |
| Overvåking | Detaljert | Via metrikker | Leverandør-avhengig | Via usage |

## Neste steg {#next-steps}

1. **Velg din leverandør**: Velg basert på dine behov
2. **Konfigurer caching**: Sett opp leverandørspesifikk caching
3. **Test caching**: Verifiser at det fungerer med promptsene dine
4. **Overvåk bruk**: Spor cache-treff og kostnadsbesparelser
5. **Optimaliser**: Juster TTL og cache-strategi basert på resultatene
