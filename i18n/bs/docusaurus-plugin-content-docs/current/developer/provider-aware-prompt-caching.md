---
title: Keširanje prompta s obzirom na provajdera
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Keširanje prompta s obzirom na provajdera {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 uvodi **keširanje prompta s obzirom na provajdera** (provider-aware prompt caching), što optimizira troškove API-ja i latenciju keširanjem promptova preko različitih LLM provajdera. Svaki provajder ima različite mehanizme i konfiguracije keširanja.

## Pregled {#overview}

Keširanje promptova omogućava vam da:

- Keširate velike, često korištene promptove
- Smanjite troškove API-ja izbjegavanjem ponavljajućeg obrađivanja
- Poboljšate latenciju za keširane zahtjeve
- Eksplicitno upravljate životnim ciklusom keša

Različiti provajderi implementiraju keširanje na različite načine:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Keširanje prompta s TTL (Time To Live)
- **OpenRouter**: Keširanje specifično za provajdera
- **Vertex Anthropic**: Keširanje prompta s kontrolom keša

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini pruža eksplicitno upravljanje kešom putem `cachedContents` API-ja.

### Konfiguracija {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 sat u sekundama
        'max_tokens' => 1000000, // Maksimalni tokeni za keširanje
    ],
];
```

### Kreiranje keširanog prompta {#creating-a-cached-prompt}

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

// Vraća: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Korištenje keširanog prompta {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Životni ciklus keša {#cache-lifecycle}

```php
// Lista keširanog sadržaja
$caches = $gemini->list_cached_contents();

// Dohvati detalje keša
$cache = $gemini->get_cached_content( 'abc123' );

// Produžiti TTL keša
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Produži na 2 sata
);

// Izbrisati keš
$gemini->delete_cached_content( 'abc123' );
```

### Najbolje prakse za Gemini {#best-practices-for-gemini}

- **Postavite odgovarajući TTL**: Balansirajte uštedu troškova naspram zastarjevanja keša
- **Keširajte sistemske promptove**: Ponovno koristite isti sistemski prompt za zahteve
- **Pratite korištenje keša**: Pratite koji keševi se najviše koriste
- **Čistite istekle kešove**: Periodično brišite neiskorištene kešove

## Azure OpenAI: Keširanje prompta {#azure-openai-prompt-caching}

Azure OpenAI podržava keširanje promptova s automatskim upravljanjem TTL-om.

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

### Omogućavanje keširanja {#enabling-caching}

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

// Odgovor uključuje korištenje keša:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Zaglavlja keša (Cache Headers) {#cache-headers}

Azure OpenAI koristi HTTP zaglavlja za kontrolu keša:

```
Cache-Control: max_age=3600
```

Podržane vrijednosti:

- `max_age=<sekunde>`: Keširaj za navedeni period
- `no_cache`: Ne keširaj ovaj zahtjev
- `no_store`: Ne keširaj i ne ponovno koristi

### Praćenje korištenja keša {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Kreiranje keša: $cache_tokens tokena\n";
echo "Pogađanje keša: $cache_hits tokena\n";
```

### Najbolje prakse za Azure OpenAI {#best-practices-for-azure-openai}

- **Koristite dosljedne promptove**: Identični promptovi profitiraju od keširanja
- **Postavite razuman TTL**: Balansirajte trošak naspram svježine
- **Pratite metrike keša**: Pratite kreiranje naspram pogađanja keša
- **Batchujte slične zahteve**: Grupirajte zahteve kako biste maksimizirali pogađanje keša

## OpenRouter: Keširanje specifično za provajdera {#openrouter-provider-specific-caching}

OpenRouter podržava keširanje putem osnovnih provajdera (OpenAI, Anthropic, itd.).

### Konfiguracija {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Koristi keširanje OpenAI-ja
    ],
];
```

### Korištenje OpenRouter keširanja {#using-openrouter-caching}

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

### Opcije specifične za provajdera {#provider-specific-options}

Različiti provajderi imaju različite mehanizme keširanja:

```php
// Keširanje kompatibilno sa OpenAI-jem
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Keširanje kompatibilno sa Anthropic-om
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

- **Poznajte keširanje provajdera**: Svaki provajder ima različite mehanizme
- **Testirajte ponašanje keširanja**: Provjerite da li keširanje radi s vašim odabranim provajderom
- **Pratite troškove**: Pratite uštede iz keširanja
- **Koristite dosljedne modele**: Promjena modela prekida pogađanje keša

## Vertex Anthropic: Keširanje prompta s kontrolom keša {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) podržava keširanje promptova s eksplicitnom kontrolom keša.

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

### Korištenje Vertex Anthropic keširanja {#using-vertex-anthropic-caching}

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

// Odgovor uključuje metrike keša:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Vrste kontrole keša {#cache-control-types}

- **ephemeral**: Keširanje za trajanje zahtjeva (podrazumevano)
- **persistent**: Keširanje preko više zahtjeva (ako je podržano)

### Praćenje korištenja keša {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Kreirano keš: $cache_created tokena\n";
echo "Pročitano keš: $cache_read tokena\n";
```

### Najbolje prakse za Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Koristite efemerno keširanje**: Dobro za keširanje unutar jedne sesije
- **Postavite max_tokens odgovarajuće**: Balansirajte veličinu keša naspram troška
- **Pratite metrike keša**: Pratite učinkovitost keša
- **Testirajte s vašim radnim opterećenjem**: Provjerite da li keširanje koristi vašem slučaju korištenja

## Međuprovajderska strategija keširanja {#cross-provider-caching-strategy}

### Unificirana konfiguracija {#unified-configuration}

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

### Detekcija provajdera {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Koristi se konfiguracija keširanja specifična za provajdera
```

### Strategija fallback-a {#fallback-strategy}

```php
try {
    // Pokušaj keširanja s primarnim provajderom
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback na zahtjev bez keširanja
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimizacija troškova {#cost-optimization}

### Izračun uštede {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tipična cijena (varira po provajderu):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x je jeftinije
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x je jeftinije
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Procjena uštede: \$$savings\n";
```

### Savjeti za optimizaciju {#optimization-tips}

- **Keširajte velike sistemske promptove**: Najveća ušteda troškova
- **Ponovno koristite kontekst**: Keširajte često korištene dokumente konteksta
- **Batchujte zahteve**: Grupirajte slične zahteve kako biste maksimizirali pogađanje keša
- **Pratite učinkovitost keša**: Pratite stvarne uštede
- **Podesite TTL**: Balansirajte trošak naspram svježine

## Rješavanje problema {#troubleshooting}

### Keš se ne koristi {#cache-not-being-used}

- Provjerite je li keširanje omogućeno u konfiguraciji
- Provjerite da li su promptovi identični (keširanje zahtijeva točno podudaranje)
- Provjerite da li keš nije istekao
- Provjerite specifične limite keša provajdera

### Neuspješno kreiranje keša {#cache-creation-failing}

- Provjerite da li je veličina keša unutar limita provajdera
- Provjerite da li je sintaksa kontrole keša ispravna
- Osigurajte da provajder podržava keširanje za vaš model
- Pregledajte dokumentaciju provajdera o ograničenjima

### Neočekivani troškovi {#unexpected-costs}

- Pratite kreiranje keša naspram čitanja keša
- Provjerite da li se keš zaista koristi
- Provjerite da li do keš-propusta dolazi zbog varijacija prompta
- Razmislite o podešavanju TTL-a ili strategije keširanja

## Poređenje provajdera {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Eksplicitno | Preko zaglavlja | Zavisno od provajdera | Ephemeral/persistent |
| Max cache size | 1M tokena | Zavisno od provajdera | Zavisno od provajdera | 1M tokena |
| Cost reduction | 90% | 90% | Zavisno od provajdera | 90% |
| Monitoring | Detaljno | Preko metrika | Zavisno od provajdera | Preko korištenja |

## Sljedeći koraci {#next-steps}

1. **Izaberite provajdera**: Odaberite na temelju vaših potreba
2. **Konfigurišite keširanje**: Postavite keširanje specifično za provajdera
3. **Testirajte keširanje**: Provjerite da li radi s vašim promptovima
4. **Pratite korištenje**:
5.
