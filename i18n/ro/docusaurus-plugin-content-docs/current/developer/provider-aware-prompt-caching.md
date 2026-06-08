---
title: Cachingul de Prompt Conștient de Provider
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cachează Prompt-urile Conștient de Furnizor

Superdav AI Agent v1.12.0 introduce **cachearea prompt-urilor conștientă de furnizor**, care optimizează costurile API-ului și latența prin stocarea prompt-urilor în cache pe mai mulți furnizori LLM. Fiecare furnizor are mecanisme și configurații diferite de cache.

## Prezentare Generală

Cachearea prompt-urilor vă permite să:

- Cacheați prompt-uri mari și frecvent folosite
- Să reduceți costurile API-ului, evitând procesarea redundantă
- Să îmbunătățiți latența pentru cererile cacheate
- Să gestionați ciclul de viață al cache-ului în mod explicit

Diferiți furnizori implementează cachearea în mod diferit:

- **Google Gemini**: API-ul `cachedContents`
- **Azure OpenAI**: Cachearea prompt-urilor cu TTL
- **OpenRouter**: Cacheare specifică furnizorului
- **Vertex Anthropic**: Cachearea prompt-urilor cu control de cache

## Google Gemini: API-ul cachedContents

Google Gemini oferă gestionarea explicită a cache-ului prin API-ul `cachedContents`.

### Configurare

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 oră în secunde
        'max_tokens' => 1000000, // Max de token-uri de cacheat
    ],
];
```

### Crearea unui Prompt Cacheat

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

// Returnează: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Utilizarea unui Prompt Cacheat

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ciclul de Viață al Cache-ului

```php
// Listează conținuturile cacheate
$caches = $gemini->list_cached_contents();

// Obține detaliile cache-ului
$cache = $gemini->get_cached_content( 'abc123' );

// Extinde TTL-ul cache-ului
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Extinde la 2 ore
);

// Șterge cache-ul
$gemini->delete_cached_content( 'abc123' );
```

### Cele mai bune practici pentru Gemini

- **Setați un TTL adecvat**: Echilibrați economiile de cost față de învechirea cache-ului
- **Cacheați prompt-urile de sistem**: Reutilizați același prompt de sistem în mai multe cereri
- **Monitorizați utilizarea cache-ului**: Urmăriți ce cache-uri sunt folosite cel mai des
- **Curățați cache-urile expirate**: Ștergeți periodic cache-urile nefolosite

## Azure OpenAI: Cachearea Prompt-urilor

Azure OpenAI suportă cachearea prompt-urilor cu gestionare automată a TTL-ului.

### Configurare

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

### Activarea Cache-ului

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

// Răspunsul include utilizarea cache-ului:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headere de Cache

Azure OpenAI folosește headere HTTP pentru controlul cache-ului:

```
Cache-Control: max_age=3600
```

Valorile suportate:

- `max_age=<secunde>`: Cachează pentru durata specificată
- `no_cache`: Nu cachează această cerere
- `no_store`: Nu cachează și nu reutilizează

### Monitorizarea Utilizării Cache-ului

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Creare cache: $cache_tokens token-uri\n";
echo "Răscoturi cache: $cache_hits token-uri\n";
```

### Cele mai bune practici pentru Azure OpenAI

- **Folosiți prompt-uri consistente**: Prompt-urile identice beneficiază de cacheare
- **Setați un TTL rezonabil**: Echilibrați costurile față de proaspătătatea datelor
- **Monitorizați metricile cache-ului**: Urmăriți crearea față de răscoturile cache-ului
- **Bandați cererile similare**: Grupați cererile pentru a maximiza răscoturile cache-ului

## OpenRouter: Cacheare Specifică Furnizorului

OpenRouter suportă cachearea prin furnizorii subiacenti (OpenAI, Anthropic etc.).

### Configurare

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Folosește cache-ul OpenAI
    ],
];
```

### Utilizarea Cache-ului OpenRouter

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

### Opțiuni Specifice Furnizorului

Diferiți furnizori au mecanisme de cache diferite:

```php
// Cacheare compatibilă cu OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Cacheare compatibilă cu Anthropic
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

### Cele mai bune practici pentru OpenRouter

- **Cunoașteți cache-ul furnizorului**: Fiecare furnizor are mecanisme diferite
- **Testați comportamentul cache-ului**: Verificați că cachearea funcționează cu furnizorul ales
- **Monitorizați costurile**: Urmăriți economiile obținute prin cacheare
- **Folosiți modele consistente**: Schimbarea modelelor rupe răscoturile cache-ului

## Vertex Anthropic: Cachearea Prompt-urilor cu Control de Cache

Vertex Anthropic (Google Cloud) suportă cachearea prompt-urilor cu control explicit de cache.

### Configurare

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

### Utilizarea Cache-ului Vertex Anthropic

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

// Răspunsul include metricile cache-ului:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Tipuri de Control de Cache

- **ephemeral**: Cachează pentru durata cererii (implicit)
- **persistent**: Cachează pe mai multe cereri (dacă este suportat)

### Monitorizarea Utilizării Cache-ului

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache creat: $cache_created token-uri\n";
echo "Cache citit: $cache_read token-uri\n";
```

### Cele mai bune practici pentru Vertex Anthropic

- **Folosiți cache-ul efemer**: Bun pentru cachearea sesiunilor unice
- **Setați max_tokens adecvat**: Echilibrați dimensiunea cache-ului față de cost
- **Monitorizați metricile cache-ului**: Urmăriți eficiența cache-ului
- **Testați cu sarcina de lucru**: Verificați dacă cachearea vă beneficiează în cazul de utilizare

## Strategia de Cacheare Cross-Provider

### Configurare Unificată

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

### Detectarea Furnizorului

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Folosește configurația de cache specifică furnizorului
```

### Strategia de Fallback

```php
try {
    // Încearcă cachearea cu furnizorul principal
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback la cererea necacheată
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimizarea Costurilor

### Calcularea Economiilor

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Preț tipic (variază în funcție de furnizor):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x mai ieftin
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x mai ieftin
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Economii estimate: \$$savings\n";
```

### Sfaturi de Optimizare

- **Cacheați prompt-urile mari de sistem**: Cele mai mari economii de cost
- **Reutilizați contextul**: Cacheați documentele de context frecvent folosite
- **Bandați cererile**: Grupați cererile similare pentru a maximiza răscoturile cache-ului
- **Monitorizați eficiența cache-ului**: Urmăriți economiile reale
- **Ajustați TTL**: Echilibrați costurile față de proaspătatea datelor

## Depanșare

### Cache-ul nu este folosit

- Verificați dacă cachearea este activată în configurare
- Asigurați-vă că prompt-urile sunt identice (cachearea necesită o potrivire exactă)
- Verificați dacă cache-ul nu a expirat
- Verificați limitele cache-ului specifice furnizorului

### Eșecul creării cache-ului

- Verificați dacă dimensiunea cache-ului este în limitele furnizorului
- Asigurați-vă că sintaxa `cache_control` este corectă
- Asigurați-vă că furnizorul suportă cachearea pentru modelul dvs.
- Revizuiți documentația furnizorului pentru limitări

### Costuri neașteptate

- Monitorizați token-urile de creare și citire a cache-ului
- Verificați dacă cache-ul este folosit efectiv
- Verificați dacă există rată de eșec a cache-ului din cauza variațiilor prompt-urilor
- Luați în considerare ajustarea TTL-ului sau a strategiei de cacheare

## Comparativ Furnizori

| Funcționalitate | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Cache | cachedContents | Headere HTTP | Specific furnizorului | Control de cache |
| Control TTL | Explicit | Prin headere | Depinde de furnizor | Efemer/persistent |
| Dimensiune max cache | 1M token-uri | Depinde de furnizor | Depinde de furnizor | 1M token-uri |
| Reducere cost | 90% | 90% | Depinde de furnizor | 90% |
| Monitorizare | Detaliat | Prin metrici | Depinde de furnizor | Prin utilizare |

## Pași Următori

1. **Alegeți furnizorul**: Selectați în funcție de nevoile dvs.
2. **Configurați cachearea**: Setați cachearea specifică furnizorului
3. **Testați cachearea**: Verificați că funcționează cu prompt-urile dvs.
4. **Monitorizați utilizarea**: Urmăriți răscoturile cache-ului și economiile de cost
