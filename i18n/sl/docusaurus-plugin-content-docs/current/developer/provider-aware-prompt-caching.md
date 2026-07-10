---
title: Predpomnjenje pozivov z zavedanjem ponudnika
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Predpomnjenje pozivov z zavedanjem ponudnika {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 uvaja **predpomnjenje pozivov z zavedanjem ponudnika**, ki optimizira stroške API in zakasnitev s predpomnjenjem pozivov pri različnih ponudnikih LLM. Vsak ponudnik ima različne mehanizme in konfiguracije predpomnjenja.

## Pregled {#overview}

Predpomnjenje pozivov vam omogoča, da:

- Predpomnite velike, pogosto uporabljene pozive
- Zmanjšate stroške API z izogibanjem odvečnemu obdelovanju
- Izboljšate zakasnitev za predpomnjene zahteve
- Izrecno upravljate življenjski cikel predpomnilnika

Različni ponudniki predpomnjenje izvajajo različno:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: predpomnjenje pozivov s TTL
- **OpenRouter**: predpomnjenje, specifično za ponudnika
- **Vertex Anthropic**: predpomnjenje pozivov z nadzorom predpomnilnika

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini zagotavlja izrecno upravljanje predpomnilnika prek `cachedContents` API.

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

### Ustvarjanje predpomnjenega poziva {#creating-a-cached-prompt}

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

### Uporaba predpomnjenega poziva {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Življenjski cikel predpomnilnika {#cache-lifecycle}

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

### Najboljše prakse za Gemini {#best-practices-for-gemini}

- **Nastavite ustrezen TTL**: Uravnotežite prihranek stroškov in zastarelost predpomnilnika
- **Predpomnite sistemske pozive**: Ponovno uporabite isti sistemski poziv v različnih zahtevah
- **Spremljajte uporabo predpomnilnika**: Sledite, kateri predpomnilniki se uporabljajo največ
- **Počistite potekle predpomnilnike**: Občasno izbrišite neuporabljene predpomnilnike

## Azure OpenAI: predpomnjenje pozivov {#azure-openai-prompt-caching}

Azure OpenAI podpira predpomnjenje pozivov s samodejnim upravljanjem TTL.

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

### Omogočanje predpomnjenja {#enabling-caching}

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

### Glave predpomnilnika {#cache-headers}

Azure OpenAI uporablja HTTP glave za nadzor predpomnilnika:

```
Cache-Control: max_age=3600
```

Podprte vrednosti:

- `max_age=<seconds>`: Predpomni za določeno trajanje
- `no_cache`: Ne predpomni te zahteve
- `no_store`: Ne predpomni in ne uporabi ponovno

### Spremljanje uporabe predpomnilnika {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Najboljše prakse za Azure OpenAI {#best-practices-for-azure-openai}

- **Uporabljajte dosledne pozive**: Enaki pozivi imajo koristi od predpomnjenja
- **Nastavite razumen TTL**: Uravnotežite stroške in svežino
- **Spremljajte metrike predpomnilnika**: Sledite ustvarjanju predpomnilnika v primerjavi z zadetki
- **Združujte podobne zahteve**: Združite zahteve, da povečate število zadetkov predpomnilnika

## OpenRouter: predpomnjenje, specifično za ponudnika {#openrouter-provider-specific-caching}

OpenRouter podpira predpomnjenje prek osnovnih ponudnikov (OpenAI, Anthropic itd.).

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

### Uporaba predpomnjenja OpenRouter {#using-openrouter-caching}

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

### Možnosti, specifične za ponudnika {#provider-specific-options}

Različni ponudniki imajo različne mehanizme predpomnjenja:

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

### Najboljše prakse za OpenRouter {#best-practices-for-openrouter}

- **Poznajte predpomnjenje svojega ponudnika**: Vsak ponudnik ima različne mehanizme
- **Preizkusite obnašanje predpomnjenja**: Preverite, ali predpomnjenje deluje z vašim izbranim ponudnikom
- **Spremljajte stroške**: Sledite prihrankom zaradi predpomnjenja
- **Uporabljajte dosledne modele**: Menjava modelov prekine zadetke predpomnilnika

## Vertex Anthropic: predpomnjenje pozivov z nadzorom predpomnilnika {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) podpira predpomnjenje pozivov z izrecnim nadzorom predpomnilnika.

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

### Uporaba Vertex Anthropic predpomnjenja {#using-vertex-anthropic-caching}

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

### Vrste nadzora predpomnilnika {#cache-control-types}

- **ephemeral**: Predpomnilnik za čas trajanja zahteve (privzeto)
- **persistent**: Predpomnilnik za več zahtev (če je podprto)

### Spremljanje uporabe predpomnilnika {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Najboljše prakse za Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Uporabite ephemeral predpomnjenje**: Dobro za predpomnjenje v eni seji
- **Ustrezno nastavite max_tokens**: Uravnotežite velikost predpomnilnika in stroške
- **Spremljajte metrike predpomnilnika**: Sledite učinkovitosti predpomnilnika
- **Preizkusite s svojo delovno obremenitvijo**: Preverite, ali predpomnjenje koristi vašemu primeru uporabe

## Strategija predpomnjenja med ponudniki {#cross-provider-caching-strategy}

### Poenotena konfiguracija {#unified-configuration}

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

### Zaznavanje ponudnika {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Nadomestna strategija {#fallback-strategy}

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

## Optimizacija stroškov {#cost-optimization}

### Izračun prihrankov {#calculate-savings}

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

### Nasveti za optimizacijo {#optimization-tips}

- **Predpomnite velike sistemske pozive**: Največji prihranki pri stroških
- **Ponovno uporabite kontekst**: Predpomnite pogosto uporabljene kontekstne dokumente
- **Združujte zahteve v pakete**: Združite podobne zahteve, da povečate zadetke predpomnilnika
- **Spremljajte učinkovitost predpomnilnika**: Sledite dejanskim prihrankom
- **Prilagodite TTL**: Uravnotežite stroške in svežino

## Odpravljanje težav {#troubleshooting}

### Predpomnilnik se ne uporablja {#cache-not-being-used}

- Preverite, ali je predpomnjenje omogočeno v konfiguraciji
- Preverite, ali so pozivi identični (predpomnjenje zahteva natančno ujemanje)
- Preverite, ali predpomnilnik ni potekel
- Preverite omejitve predpomnilnika, specifične za ponudnika

### Ustvarjanje predpomnilnika ne uspe {#cache-creation-failing}

- Preverite, ali je velikost predpomnilnika znotraj omejitev ponudnika
- Preverite, ali je sintaksa nadzora predpomnilnika pravilna
- Prepričajte se, da ponudnik podpira predpomnjenje za vaš model
- Preglejte dokumentacijo ponudnika glede omejitev

### Nepričakovani stroški {#unexpected-costs}

- Spremljajte ustvarjanje predpomnilnika v primerjavi z žetoni branja iz predpomnilnika
- Preverite, ali se predpomnilnik dejansko uporablja
- Preverite zgrešitve predpomnilnika zaradi različic pozivov
- Razmislite o prilagoditvi TTL ali strategije predpomnjenja

## Primerjava ponudnikov {#provider-comparison}

| Funkcija | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API predpomnilnika | cachedContents | HTTP glave | Specifično za ponudnika | Nadzor predpomnilnika |
| Nadzor TTL | Izrecen | Prek glav | Odvisno od ponudnika | Ephemeral/persistent |
| Največja velikost predpomnilnika | 1M žetonov | Odvisno od ponudnika | Odvisno od ponudnika | 1M žetonov |
| Znižanje stroškov | 90% | 90% | Odvisno od ponudnika | 90% |
| Spremljanje | Podrobno | Prek metrik | Odvisno od ponudnika | Prek uporabe |

## Naslednji koraki {#next-steps}

1. **Izberite svojega ponudnika**: Izberite glede na svoje potrebe
2. **Konfigurirajte predpomnjenje**: Nastavite predpomnjenje, specifično za ponudnika
3. **Preizkusite predpomnjenje**: Preverite, ali deluje z vašimi pozivi
4. **Spremljajte uporabo**: Sledite zadetkom predpomnilnika in prihrankom pri stroških
5. **Optimizirajte**: Prilagodite TTL in strategijo predpomnjenja na podlagi rezultatov
