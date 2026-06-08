---
title: Leverandør-bevidst promptcaching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Leverandør-bevidst prompt-caching

Superdav AI Agent v1.12.0 introducerer **leverandør-bevidst prompt-caching**, som optimerer API-omkostninger og ventetid ved at cache prompts på tværs af forskellige LLM-leverandører. Hver leverandør har forskellige caching-mekanismer og konfigurationer.

## Oversigt

Prompt-caching giver dig mulighed for at:

- Cache store, hyppigt anvendte prompts
- Reducere API-omkostninger ved at undgå unødig behandling
- Forbedre ventetiden for cached requests
- Eksplicit styre cache-livscyklussen

Forskellige leverandører implementerer caching forskelligt:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-caching med TTL (Time To Live)
- **OpenRouter**: Leverandør-specifik caching
- **Vertex Anthropic**: Prompt-caching med cache-kontrol

## Google Gemini: cachedContents API

Google Gemini giver eksplicit cachestyring via `cachedContents` API.

### Konfiguration

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 time i sekunder
        'max_tokens' => 1000000, // Maksimal antal tokens at cache
    ],
];
```

### Oprettelse af en Cached Prompt

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Du er en hjælpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'ttl' => 3600,
    ]
);

// Returnerer: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Brug af en cachet prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Brugerens spørgsmål her',
    ]
);
```

### Cachelivscyklus

```php
// Lister gemte indhold
$caches = $gemini->list_cached_contents();

// Hent cachedetaljer
$cache = $gemini->get_cached_content( 'abc123' );

// Udvid cache TTL (Time To Live)
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Udvid til 2 timer
);

// Slet cache
$gemini->delete_cached_content( 'abc123' );
```

### Bedste praksis for Gemini

- **Sæt passende TTL**: Balancér omkostningsbesparelser mod cacheens forældelse.
- **Cache systemprompts**: Genbrug den samme systemprompt på tværs af anmodninger.
- **Overvåg cacheforbrug**: Følg, hvilke caches der bruges mest.
- **Ryd udløbne caches**: Slet periodisk ubrugte caches.

## Azure OpenAI: Prompt Caching

Azure OpenAI understøtter prompt caching med automatisk TTL-styring.

### Konfiguration

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

### Aktivering af caching

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Du er en hjælpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Brugerens spørgsmål her',
        'cache_control' => 'max_age=3600',
    ]
);

// Svaret inkluderer cache-brug:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache-headers

Azure OpenAI bruger HTTP-headers til cache-kontrol:

```
Cache-Control: max_age=3600
```

Understøttede værdier:

- `max_age=<sekunder>`: Cache i den specificerede varighed
- `no_cache`: Gem ikke denne anmodning i cache
- `no_store`: Gem ikke og genbrug ikke

### Overvågning af cache-brug

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache oprettelse: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Bedste praksis for Azure OpenAI

- **Brug konsistente prompts**: Identiske prompts drager fordel af caching
- **Sæt en rimelig TTL (Time To Live)**: Balancer omkostninger mod friskhed
- **Overvåg cache-metrikker**: Spor cacheoprettelse over for hits
- **Batch lignende anmodninger**: Gruppér anmodninger for at maksimere cache hits

## OpenRouter: Udbyder-specifik caching

OpenRouter understøtter caching gennem de underliggende udbydere (OpenAI, Anthropic osv.).

### Konfiguration

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Brug OpenAIs caching
    ],
];
```

### Brug af OpenRouter Caching

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Du er en hjælpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Brugerens spørgsmål her',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Udbyder-specifikke muligheder

Forskellige udbydere har forskellige mekanismer til caching:

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

### Bedste praksis for OpenRouter

- **Kend din udbyders caching**: Hver udbyder har forskellige mekanismer.
- **Test caching-adfærden**: Bekræft, at caching virker med den valgte udbyder.
- **Overvåg omkostninger**: Følg besparelser fra caching.
- **Brug konsistente modeller**: Skift af modeller bryder cache-hits.

## Vertex Anthropic: Prompt Caching med Cache Control

Vertex Anthropic (Google Cloud) understøtter promptcaching med eksplicit cachekontrol.

### Konfiguration

```php
$config = [
    'provider' => 'vertex-anthropic',
    'model' => 'claude-3-opus',
    'project_id' => 'din-gcp-projekt-id',
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

### Brug af Vertex Anthropic Caching

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Du er en hjælpsom assistent...',
        'context' => 'Stort kontekstdokument...',
        'prompt' => 'Brugerens spørgsmål her',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Svaret inkluderer cache-målinger:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cachekontrol Typer

- **ephemeral**: Cache for løbet af anmodningen (standard)
- **persistent**: Cache på tværs af flere anmodninger (hvis understøttet)

### Overvågning af Cache-Brug

Beste praksis for Vertex Anthropic

- **Brug midlertidig caching (ephemeral caching)**: God til caching i enkelt sessioner.
- **Indstil max_tokens passende**: Balancér cachestørrelse mod omkostninger.
- **Overvåg cache-målinger**: Følg med i cachens effektivitet.
- **Test med din arbejdsbelastning**: Bekræft, at caching forbedrer dit brugsscenarie.

## Strategi for Cross-Provider Caching

### Samlet Konfiguration

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

### Leverandørdetektion

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Brug leverandørspecifik cachingkonfiguration
```

### Backup-strategi

```php
try {
    // Prøv at gemme i cache med primær leverandør
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Gå tilbage til anmodning uden caching
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Omkostningsoptimering

### Beregn besparelser

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typisk prissætning (varierer efter leverandør):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x billigere
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x billigere
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimeret besparelse: \$$savings\n";
```

### Optimeringstips

- **Gem store systemprompts i cache**: Største besparelser
- **Genbrug kontekst**: Gem ofte brugte kontekstdokumenter i cache
- **Batch anmodninger**: Gruppér lignende anmodninger for at maksimere cache-treffere
- **Overvåg cache-effektivitet**: Spor de faktiske besparelser
- **Justér TTL**: Balancer omkostninger mod friskhed

## Fejlfinding

### Cache bliver ikke brugt

- Tjek, at caching er aktiveret i konfigurationen
- Kontroller, at prompts er identiske (caching kræver præcis match)
- Bekræft, at cachen ikke er udløbet
- Tjek leverandørspecifikke cachegrænser

### Cache-oprettelse fejler

### Tjek cachen størrelse er inden for udbyderens grænser
- Kontroller, at cache control syntaksen er korrekt
- Sørg for, at udbyderen understøtter caching til din model
- Gennemgå udbyderens dokumentation for begrænsninger

### Uventede omkostninger

- Overvåg skabelse af cache vs. læsning af cache tokens
- Bekræft, at cachen faktisk bliver brugt
- Tjek efter cache misses på grund af variationer i prompts
- Overvej at justere TTL eller cachestrategi

## Udbyder sammenligning

| Funktion | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---|---|---|---|---|
| Cache API | cachedContents | HTTP headers | Udbyder-specifik | Cache control |
| TTL kontrol | Eksplicit | Via headers | Udbyderafhængig | Ephemeral/persistent |
| Maksimal cache størrelse | 1M tokens | Udbyderafhængig | Udbyderafhængig | 1M tokens |
| Omkostningsreduktion | 90% | 90% | Udbyderafhængig | 90% |
| Overvågning | Detaljeret | Via metrics | Udbyderafhængig | Via brug |

## Næste skridt

1. **Vælg din udbyder**: Vælg baseret på dine behov
2. **Konfigurer caching**: Opsæt udbyder-specifik caching
3. **Test caching**: Bekræft, at det virker med dine prompts
4. **Overvåg brug**: Spor cache hits og omkostningsbesparelser
5. **Optimer**: Juster TTL og cachestrategi baseret på resultater
