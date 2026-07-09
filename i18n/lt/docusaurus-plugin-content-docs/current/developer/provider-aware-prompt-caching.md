---
title: Į teikėją atsižvelgiantis raginimų talpinimas podėlyje
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Teikėją atpažįstantis promptų podėlio naudojimas {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 pristato **teikėją atpažįstantį promptų podėlio naudojimą**, kuris optimizuoja API sąnaudas ir delsą talpindamas promptus podėlyje skirtinguose LLM teikėjuose. Kiekvienas teikėjas turi skirtingus podėlio mechanizmus ir konfigūracijas.

## Apžvalga {#overview}

Promptų podėlio naudojimas leidžia:

- Talpinti podėlyje didelius, dažnai naudojamus promptus
- Sumažinti API sąnaudas išvengiant perteklinio apdorojimo
- Pagerinti delsą podėlyje esančioms užklausoms
- Aiškiai valdyti podėlio gyvavimo ciklą

Skirtingi teikėjai podėlio naudojimą įgyvendina skirtingai:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: promptų podėlio naudojimas su TTL
- **OpenRouter**: teikėjui specifinis podėlio naudojimas
- **Vertex Anthropic**: promptų podėlio naudojimas su podėlio valdymu

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini suteikia aiškų podėlio valdymą per `cachedContents` API.

### Konfigūracija {#configuration}

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

### Podėlyje talpinamo prompto kūrimas {#creating-a-cached-prompt}

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

### Podėlyje talpinamo prompto naudojimas {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Podėlio gyvavimo ciklas {#cache-lifecycle}

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

### Geriausios praktikos Gemini {#best-practices-for-gemini}

- **Nustatykite tinkamą TTL**: suderinkite sąnaudų taupymą ir podėlio pasenimą
- **Talpinkite sistemos promptus podėlyje**: pakartotinai naudokite tą patį sistemos promptą skirtingoms užklausoms
- **Stebėkite podėlio naudojimą**: sekite, kurie podėliai naudojami dažniausiai
- **Išvalykite pasibaigusio galiojimo podėlius**: periodiškai ištrinkite nenaudojamus podėlius

## Azure OpenAI: promptų podėlio naudojimas {#azure-openai-prompt-caching}

Azure OpenAI palaiko promptų podėlio naudojimą su automatiniu TTL valdymu.

### Konfigūracija {#configuration-1}

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

### Podėlio naudojimo įjungimas {#enabling-caching}

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

### Podėlio antraštės {#cache-headers}

Azure OpenAI podėlio valdymui naudoja HTTP antraštes:

```
Cache-Control: max_age=3600
```

Palaikomos reikšmės:

- `max_age=<seconds>`: talpinti podėlyje nurodytą trukmę
- `no_cache`: netalpinti šios užklausos podėlyje
- `no_store`: netalpinti podėlyje ir nenaudoti pakartotinai

### Podėlio naudojimo stebėjimas {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Geriausios praktikos Azure OpenAI {#best-practices-for-azure-openai}

- **Naudokite nuoseklius promptus**: identiški promptai gauna naudos iš podėlio naudojimo
- **Nustatykite pagrįstą TTL**: suderinkite sąnaudas ir šviežumą
- **Stebėkite podėlio metrikas**: sekite podėlio kūrimą ir pataikymus
- **Grupuokite panašias užklausas**: sugrupuokite užklausas, kad maksimaliai padidintumėte podėlio pataikymus

## OpenRouter: teikėjui specifinis podėlio naudojimas {#openrouter-provider-specific-caching}

OpenRouter palaiko podėlio naudojimą per pagrindinius teikėjus (OpenAI, Anthropic ir kt.).

### Konfigūracija {#configuration-2}

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

### OpenRouter podėlio naudojimas {#using-openrouter-caching}

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

### Teikėjui specifinės parinktys {#provider-specific-options}

Skirtingi teikėjai turi skirtingus podėlio mechanizmus:

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

### Geriausios praktikos OpenRouter {#best-practices-for-openrouter}

- **Žinokite savo teikėjo podėlio naudojimą**: kiekvienas teikėjas turi skirtingus mechanizmus
- **Išbandykite podėlio elgseną**: patikrinkite, ar podėlio naudojimas veikia su jūsų pasirinktu teikėju
- **Stebėkite sąnaudas**: sekite sutaupymą dėl podėlio naudojimo
- **Naudokite nuoseklius modelius**: modelių keitimas nutraukia podėlio pataikymus

## Vertex Anthropic: promptų podėlio naudojimas su podėlio valdymu {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) palaiko promptų podėlio naudojimą su aiškiu podėlio valdymu.

### Konfigūracija {#configuration-3}

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

### Vertex Anthropic kešavimo naudojimas {#using-vertex-anthropic-caching}

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

### Kešo valdymo tipai {#cache-control-types}

- **ephemeral**: Kešuoti užklausos trukmei (numatyta)
- **persistent**: Kešuoti per kelias užklausas (jei palaikoma)

### Kešo naudojimo stebėjimas {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Geriausios praktikos Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Naudokite ephemeral kešavimą**: Tinka vienos sesijos kešavimui
- **Tinkamai nustatykite max_tokens**: Subalansuokite kešo dydį ir kainą
- **Stebėkite kešo metrikas**: Sekite kešo veiksmingumą
- **Testuokite su savo darbo krūviu**: Patikrinkite, ar kešavimas naudingas jūsų naudojimo atvejui

## Kelių tiekėjų kešavimo strategija {#cross-provider-caching-strategy}

### Suvienodinta konfigūracija {#unified-configuration}

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

### Tiekėjo aptikimas {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Atsarginė strategija {#fallback-strategy}

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

## Kainos optimizavimas {#cost-optimization}

### Sutaupymų skaičiavimas {#calculate-savings}

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

### Optimizavimo patarimai {#optimization-tips}

- **Kešuokite didelius sistemos promptus**: Didžiausias kainos sutaupymas
- **Pakartotinai naudokite kontekstą**: Kešuokite dažnai naudojamus konteksto dokumentus
- **Grupuokite užklausas**: Grupuokite panašias užklausas, kad maksimaliai padidintumėte kešo pataikymus
- **Stebėkite kešo veiksmingumą**: Sekite faktinius sutaupymus
- **Koreguokite TTL**: Subalansuokite kainą ir naujumą

## Trikčių šalinimas {#troubleshooting}

### Kešas nenaudojamas {#cache-not-being-used}

- Patikrinkite, ar kešavimas įjungtas konfigūracijoje
- Patikrinkite, ar promptai identiški (kešavimui reikia tikslaus sutapimo)
- Patikrinkite, ar kešo galiojimas nėra pasibaigęs
- Patikrinkite tiekėjui būdingus kešo apribojimus

### Nepavyksta sukurti kešo {#cache-creation-failing}

- Patikrinkite, ar kešo dydis neviršija tiekėjo apribojimų
- Patikrinkite, ar kešo valdymo sintaksė teisinga
- Įsitikinkite, kad tiekėjas palaiko kešavimą jūsų modeliui
- Peržiūrėkite tiekėjo dokumentaciją dėl apribojimų

### Netikėtos išlaidos {#unexpected-costs}

- Stebėkite kešo kūrimo ir kešo skaitymo tokenus
- Patikrinkite, ar kešas iš tikrųjų naudojamas
- Patikrinkite, ar nėra kešo nepataikymų dėl promptų variacijų
- Apsvarstykite TTL arba kešavimo strategijos koregavimą

## Tiekėjų palyginimas {#provider-comparison}

| Funkcija | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Kešo API | cachedContents | HTTP headers | Tiekėjui būdinga | Kešo valdymas |
| TTL valdymas | Aiškus | Per headers | Priklauso nuo tiekėjo | Ephemeral/persistent |
| Maks. kešo dydis | 1M tokenų | Priklauso nuo tiekėjo | Priklauso nuo tiekėjo | 1M tokenų |
| Kainos sumažinimas | 90% | 90% | Priklauso nuo tiekėjo | 90% |
| Stebėjimas | Išsamus | Per metrikas | Priklauso nuo tiekėjo | Per naudojimą |

## Kiti veiksmai {#next-steps}

1. **Pasirinkite tiekėją**: Pasirinkite pagal savo poreikius
2. **Sukonfigūruokite kešavimą**: Nustatykite tiekėjui būdingą kešavimą
3. **Ištestuokite kešavimą**: Patikrinkite, ar jis veikia su jūsų promptais
4. **Stebėkite naudojimą**: Sekite kešo pataikymus ir kainos sutaupymus
5. **Optimizuokite**: Koreguokite TTL ir kešavimo strategiją pagal rezultatus
