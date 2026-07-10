---
title: Predmemoriranje promptova s obzirom na pružatelja
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Predmemoriranje promptova svjesno pružatelja {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 uvodi **predmemoriranje promptova svjesno pružatelja**, koje optimizira troškove API-ja i latenciju predmemoriranjem promptova kod različitih LLM pružatelja. Svaki pružatelj ima različite mehanizme i konfiguracije predmemoriranja.

## Pregled {#overview}

Predmemoriranje promptova omogućuje vam da:

- Predmemorirate velike, često korištene promptove
- Smanjite troškove API-ja izbjegavanjem suvišne obrade
- Poboljšate latenciju za predmemorirane zahtjeve
- Eksplicitno upravljate životnim ciklusom predmemorije

Različiti pružatelji različito implementiraju predmemoriranje:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Predmemoriranje promptova s TTL-om
- **OpenRouter**: Predmemoriranje specifično za pružatelja
- **Vertex Anthropic**: Predmemoriranje promptova s kontrolom predmemorije

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini pruža eksplicitno upravljanje predmemorijom putem `cachedContents` API-ja.

### Konfiguracija {#configuration}

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

### Stvaranje predmemoriranog prompta {#creating-a-cached-prompt}

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

### Upotreba predmemoriranog prompta {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Životni ciklus predmemorije {#cache-lifecycle}

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

### Najbolje prakse za Gemini {#best-practices-for-gemini}

- **Postavite odgovarajući TTL**: Uravnotežite uštede troškova i zastarjelost predmemorije
- **Predmemorirajte sistemske promptove**: Ponovno upotrijebite isti sistemski prompt kroz više zahtjeva
- **Pratite upotrebu predmemorije**: Pratite koje se predmemorije najviše koriste
- **Očistite istekle predmemorije**: Povremeno izbrišite neiskorištene predmemorije

## Azure OpenAI: predmemoriranje promptova {#azure-openai-prompt-caching}

Azure OpenAI podržava predmemoriranje promptova s automatskim upravljanjem TTL-om.

### Konfiguracija {#configuration-1}

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

### Omogućavanje predmemoriranja {#enabling-caching}

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

### Zaglavlja predmemorije {#cache-headers}

Azure OpenAI koristi HTTP zaglavlja za kontrolu predmemorije:

```
Cache-Control: max_age=3600
```

Podržane vrijednosti:

- `max_age=<seconds>`: Predmemoriraj na navedeno trajanje
- `no_cache`: Nemoj predmemorirati ovaj zahtjev
- `no_store`: Nemoj predmemorirati i nemoj ponovno upotrebljavati

### Praćenje upotrebe predmemorije {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Najbolje prakse za Azure OpenAI {#best-practices-for-azure-openai}

- **Koristite dosljedne promptove**: Identični promptovi imaju koristi od predmemoriranja
- **Postavite razuman TTL**: Uravnotežite trošak i svježinu
- **Pratite metrike predmemorije**: Pratite stvaranje predmemorije u odnosu na pogotke
- **Grupirajte slične zahtjeve**: Grupirajte zahtjeve kako biste maksimalno povećali pogotke predmemorije

## OpenRouter: predmemoriranje specifično za pružatelja {#openrouter-provider-specific-caching}

OpenRouter podržava predmemoriranje putem temeljnih pružatelja (OpenAI, Anthropic itd.).

### Konfiguracija {#configuration-2}

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

### Upotreba OpenRouter predmemoriranja {#using-openrouter-caching}

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

### Opcije specifične za pružatelja {#provider-specific-options}

Različiti pružatelji imaju različite mehanizme predmemoriranja:

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

### Najbolje prakse za OpenRouter {#best-practices-for-openrouter}

- **Upoznajte predmemoriranje svog pružatelja**: Svaki pružatelj ima različite mehanizme
- **Testirajte ponašanje predmemoriranja**: Provjerite radi li predmemoriranje s odabranim pružateljem
- **Pratite troškove**: Pratite uštede od predmemoriranja
- **Koristite dosljedne modele**: Promjena modela prekida pogotke predmemorije

## Vertex Anthropic: predmemoriranje promptova s kontrolom predmemorije {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) podržava predmemoriranje promptova s eksplicitnom kontrolom predmemorije.

### Konfiguracija {#configuration-3}

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

### Korištenje Vertex Anthropic predmemoriranja {#using-vertex-anthropic-caching}

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

### Vrste kontrole predmemorije {#cache-control-types}

- **ephemeral**: Predmemorija tijekom trajanja zahtjeva (zadano)
- **persistent**: Predmemorija kroz više zahtjeva (ako je podržano)

### Praćenje korištenja predmemorije {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Najbolje prakse za Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Koristite ephemeral predmemoriranje**: Dobro za predmemoriranje u jednoj sesiji
- **Postavite max_tokens na odgovarajući način**: Uravnotežite veličinu predmemorije i trošak
- **Pratite metrike predmemorije**: Pratite učinkovitost predmemorije
- **Testirajte sa svojim radnim opterećenjem**: Provjerite koristi li predmemoriranje vašem slučaju upotrebe

## Strategija predmemoriranja među pružateljima {#cross-provider-caching-strategy}

### Ujedinjena konfiguracija {#unified-configuration}

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

### Otkrivanje pružatelja {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Rezervna strategija {#fallback-strategy}

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

## Optimizacija troškova {#cost-optimization}

### Izračun ušteda {#calculate-savings}

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

### Savjeti za optimizaciju {#optimization-tips}

- **Predmemorirajte velike sistemske promptove**: Najveće uštede troškova
- **Ponovno upotrijebite kontekst**: Predmemorirajte često korištene kontekstne dokumente
- **Grupirajte zahtjeve**: Grupirajte slične zahtjeve kako biste maksimalno povećali pogotke predmemorije
- **Pratite učinkovitost predmemorije**: Pratite stvarne uštede
- **Prilagodite TTL**: Uravnotežite trošak i svježinu

## Rješavanje problema {#troubleshooting}

### Predmemorija se ne koristi {#cache-not-being-used}

- Provjerite je li predmemoriranje omogućeno u konfiguraciji
- Provjerite jesu li promptovi identični (predmemoriranje zahtijeva točno podudaranje)
- Provjerite nije li predmemorija istekla
- Provjerite ograničenja predmemorije specifična za pružatelja

### Izrada predmemorije ne uspijeva {#cache-creation-failing}

- Provjerite je li veličina predmemorije unutar ograničenja pružatelja
- Provjerite je li sintaksa kontrole predmemorije ispravna
- Provjerite podržava li pružatelj predmemoriranje za vaš model
- Pregledajte dokumentaciju pružatelja radi ograničenja

### Neočekivani troškovi {#unexpected-costs}

- Pratite izradu predmemorije u odnosu na tokene čitanja iz predmemorije
- Provjerite koristi li se predmemorija zaista
- Provjerite promašaje predmemorije zbog varijacija promptova
- Razmislite o prilagodbi TTL-a ili strategije predmemorije

## Usporedba pružatelja {#provider-comparison}

| Značajka | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Specifično za pružatelja | Kontrola predmemorije |
| Kontrola TTL-a | Eksplicitno | Putem headers | Ovisno o pružatelju | Ephemeral/persistent |
| Maks. veličina predmemorije | 1M tokena | Ovisno o pružatelju | Ovisno o pružatelju | 1M tokena |
| Smanjenje troškova | 90% | 90% | Ovisno o pružatelju | 90% |
| Praćenje | Detaljno | Putem metrika | Ovisno o pružatelju | Putem usage |

## Sljedeći koraci {#next-steps}

1. **Odaberite svog pružatelja**: Odaberite na temelju svojih potreba
2. **Konfigurirajte predmemoriranje**: Postavite predmemoriranje specifično za pružatelja
3. **Testirajte predmemoriranje**: Provjerite radi li s vašim promptovima
4. **Pratite korištenje**: Pratite pogotke predmemorije i uštede troškova
5. **Optimizirajte**: Prilagodite TTL i strategiju predmemorije na temelju rezultata
