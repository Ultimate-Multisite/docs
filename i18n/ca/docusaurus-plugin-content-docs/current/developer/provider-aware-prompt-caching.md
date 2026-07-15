---
title: Memoria de Cache de Prompts Conegut per el Proveïdor
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cacheo de Prompts Conscient del Proveïdor

Superdav AI Agent v1.12.0 presenta el **cacheo de prompts conscient del proveïdor**, que optimitza els costos i la latència de l'API cacheant prompts en diversos proveïdors de LLM. Cada proveïdor té mecanismes i configuracions de cache diferents.

## Resum {#overview}

El cacheo de prompts us permet:

- Cachear prompts grans i freqüentment utilitzats
- Reduir els costos de l'API evitant processaments redundants
- Millorar la latència per a les sol·licituds cacheades
- Gestionar el cicle de vida del cache de manera explícita

Els diferents proveïdors implementen el cacheo de manera diferent:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Cacheo de prompts amb TTL
- **OpenRouter**: Cacheo específic del proveïdor
- **Vertex Anthropic**: Cacheo de prompts amb control de cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini proporciona una gestió explícita del cache mitjançant l'API `cachedContents`.

### Configuració {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 hora en segons
        'max_tokens' => 1000000, // Tokens màxims a cachear
    ],
];
```

### Creació d'un Prompt Cacheat {#creating-a-cached-prompt}

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

// Devolveu: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Utilització d'un Prompt Cacheat {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cicle de Vida del Cache {#cache-lifecycle}

```php
// Llistar continguts cacheats
$caches = $gemini->list_cached_contents();

// Obté detalls del cache
$cache = $gemini->get_cached_content( 'abc123' );

// Estendre el TTL del cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Estendre a 2 hores
);

// Eliminar cache
$gemini->delete_cached_content( 'abc123' );
```

### Millores Pràctiques per a Gemini {#best-practices-for-gemini}

- **Establir un TTL adequat**: Equilibri entre l'estalvi de costos i l'obsolescència del cache
- **Cachear prompts de sistema**: Reutilitzar el mateix prompt de sistema en diverses sol·licituds
- **Monitoritzar l'ús del cache**: Fer un seguiment dels caches més utilitzats
- **Netitzar caches expirats**: Eliminar periodicàment caches no utilitzats

## Azure OpenAI: Cacheo de Prompts {#azure-openai-prompt-caching}

Azure OpenAI suporta el cacheo de prompts amb gestió automàtica del TTL.

### Configuració {#configuration-1}

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

### Habilitar el Cacheo {#enabling-caching}

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

// La resposta inclou l'ús del cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headers de Cache {#cache-headers}

Azure OpenAI utilitza headers HTTP per al control del cache:

```
Cache-Control: max_age=3600
```

Valors suportats:

- `max_age=<seconds>`: Cachear durant la durada especificada
- `no_cache`: No cachear aquesta sol·licitud
- `no_store`: No cachear i no reutilitzar

### Monitorització de l'Ús del Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Millores Pràctiques per a Azure OpenAI {#best-practices-for-azure-openai}

- **Utilitzar prompts consistents**: Els prompts idèntics es benefician del cacheo
- **Establir un TTL raonable**: Equilibri entre el cost i la frescor
- **Monitoritzar les mètriques del cache**: Fer un seguiment de la creació vs. els hits
- **Processar sol·licituds similars en grup**: Agrupar sol·licituds per maximitzar els hits de cache

## OpenRouter: Cacheo Específic del Proveïdor {#openrouter-provider-specific-caching}

OpenRouter suporta el cacheo mitjançant els proveïdors substramentals (OpenAI, Anthropic, etc.).

### Configuració {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Utilitzar el cacheo d'OpenAI
    ],
];
```

### Utilització del Cacheo d'OpenRouter {#using-openrouter-caching}

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

### Opcións Específiques del Proveïdor {#provider-specific-options}

Els diferents proveïdors tenen mecanismes de cacheo diferents:

```php
// Cacheo compatible amb OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Cacheo compatible amb Anthropic
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

### Millores Pràctiques per a OpenRouter {#best-practices-for-openrouter}

- **Conèixer el cacheo del vostre proveïdor**: Cada proveïdor té mecanismes diferents
- **Provar el comportament del cacheo**: Verifiqueu que el cacheo funciona amb el proveïdor que hauràs de triar
- **Monitoritzar els costos**: Fer un seguiment dels estalvis gràcies al cacheo
- **Utilitzar models consistents**: Canviar de model rompega els hits de cache

## Vertex Anthropic: Cacheo de Prompts amb Control de Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) suporta el cacheo de prompts amb un control de cache explícit.

### Configuració {#configuration-3}

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

### Utilització del Cacheo Vertex Anthropic {#using-vertex-anthropic-caching}

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

// La resposta inclou mètriques de cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Tipus de Control de Cache {#cache-control-types}

- **ephemeral**: Cachear durant la durada de la sol·licitud (per defecte)
- **persistent**: Cachear en diverses sol·licituds (si està suportat)

### Monitorització de l'Ús del Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Millores Pràctiques per a Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Utilitzar cacheo ephemeral**: Bon per a cacheo de sessió única
- **Establir max_tokens adequadament**: Equilibri entre la mida del cache i el cost
- **Monitoritzar les mètriques del cache**: Fer un seguiment de l'efectivitat del cache
- **Provar amb la vostra càrrega de treball**: Verifiqueu que el cacheo beneficia el vostre cas d'ús

## Estratègia de Cacheo Cross-Provider {#cross-provider-caching-strategy}

### Configuració Unificada {#unified-configuration}

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

### Detecta del Proveïdor {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Utilitzar la configuració de cacheo específica del proveïdor
```

### Estratègia de Fallback {#fallback-strategy}

```php
try {
    // Intentar cachear amb el proveïdor principal
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallar a sol·licitat no cacheada
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimització de Costos {#cost-optimization}

### Calcular Estalvis {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Preu típic (varia per proveïdor):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x més barat
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x més barat
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### Consells d'Optimització {#optimization-tips}

- **Cachear prompts de sistema grans**: Els grans estalvis de costos
- **Reutilitzar context**: Cachear documents de context freqüentment utilitzats
- **Processar sol·licituds en grup**: Agrupar sol·licituds similars per maximitzar els hits de cache
- **Monitoritzar l'efectivitat del cache**: Fer un seguiment dels estalvis reals
- **Ajustar el TTL**: Equilibri entre el cost i la frescor

## Solucionar Problemes {#troubleshooting}

### El cache no s'està utilitzant {#cache-not-being-used}

- Verifiqueu que el cacheo estigui habilitat a la configuració
- Comproveu que els prompts siguin idèntics (el cacheo requereix una coincidència exacta)
- Verifiqueu que el cache no hagi expirat
- Comproveu els límits de cache específics del proveïdor

### Fallida la creació del cache {#cache-creation-failing}

- Verifiqueu que la mida del cache estigui dins dels límits del proveïdor
- Comproveu que la sintaxi de `cache_control` sigui correcta
- Assegureu-vos que el proveïdor suporti el cacheo per al vostre model
- Reviseu la documentació del proveïdor per límits

### Costos inesperats {#unexpected-costs}

- Monitoritzeu els tokens de creació vs. lectura del cache
- Verifiqueu que el cache està realment en ús
- Comproveu si hi ha misses de cache a causa de variacions de prompts
- Considerare ajustar el TTL o l'estratègia de cache

## Comparativa de Proveïdors {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explícit | Via headers | Dependent del proveïdor | Ephemeral/persistent |
| Max cache size | 1M tokens | Dependent del proveïdor | Dependent del proveïdor | 1M tokens |
| Cost reduction | 90% | 90% | Dependent del proveïdor | 90% |
| Monitoring | Detallat | Via mètriques | Dependent del proveïdor | Via usage |

## Pròxims Passos {#next-steps}

1. **Triar el vostre proveïdor**: Seleccioneu en base a les vostres necessitats
2. **Configurar el cacheo**: Configureu el cacheo específic del proveïdor
3. **Provar el cacheo**: Verifiqueu que funciona amb els vostres prompts
4. **Monitoritzar l'ús**: Fer un seguiment dels hits de cache i l'estalvi de costos
5. **Optimitzar**: Ajustar el TTL i l'estratègia de cache en base als resultats
