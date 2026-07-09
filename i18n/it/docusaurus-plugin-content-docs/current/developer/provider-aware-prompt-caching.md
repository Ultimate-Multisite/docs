---
title: Memorizzazione dei Prompt Consapevole del Fornitore
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caching dei Prompt Consapevole del Provider {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 introduce il **caching dei prompt consapevole del provider**, che ottimizza i costi e la latenza dell'API memorizzando i prompt tra diversi provider LLM. Ogni provider ha meccanismi e configurazioni di caching diversi.

## Panoramica {#overview}

Il caching dei prompt ti permette di:

- Memorizzare prompt grandi e frequentemente utilizzati
- Ridurre i costi dell'API evitando elaborazioni ridondanti
- Migliorare la latenza per le richieste memorizzate
- Gestire il ciclo di vita della cache esplicitamente

I diversi provider implementano il caching in modo diverso:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Caching dei prompt con TTL
- **OpenRouter**: Caching specifico del provider
- **Vertex Anthropic**: Caching dei prompt con controllo della cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini fornisce una gestione esplicita della cache tramite l'API `cachedContents`.

### Configurazione {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 ora in secondi
        'max_tokens' => 1000000, // Max tokens da cacheare
    ],
];
```

### Creazione di un Prompt Cacheato {#creating-a-cached-prompt}

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

### Utilizzo di un Prompt Cacheato {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ciclo di Vita della Cache {#cache-lifecycle}

```php
// Elenca i contenuti cacheati
$caches = $gemini->list_cached_contents();

// Ottieni i dettagli della cache
$cache = $gemini->get_cached_content( 'abc123' );

// Estendi il TTL della cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Estendi a 2 ore
);

// Elimina la cache
$gemini->delete_cached_content( 'abc123' );
```

### Best Practices per Gemini {#best-practices-for-gemini}

- **Imposta un TTL appropriato**: Bilancia il risparmio sui costi con l'obsolescenza della cache
- **Cachea i system prompt**: Riutilizza lo stesso system prompt per le richieste
- **Monitora l'utilizzo della cache**: Tieni traccia delle cache più utilizzate
- **Pulisci le cache scadute**: Elimina periodicamente le cache inutilizzate

## Azure OpenAI: Caching dei Prompt {#azure-openai-prompt-caching}

Azure OpenAI supporta il caching dei prompt con gestione automatica del TTL.

### Configurazione {#configuration-1}

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

### Abilitazione del Caching {#enabling-caching}

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

// La risposta include l'utilizzo della cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Intestazioni Cache {#cache-headers}

Azure OpenAI utilizza le intestazioni HTTP per il controllo della cache:

```
Cache-Control: max_age=3600
```

Valori supportati:

- `max_age=<seconds>`: Cache per la durata specificata
- `no_cache`: Non cacheare questa richiesta
- `no_store`: Non cacheare e non riutilizzare

### Monitoraggio dell'Utilizzo della Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Creazione cache: $cache_tokens token\n";
echo "Hit cache: $cache_hits token\n";
```

### Best Practices per Azure OpenAI {#best-practices-for-azure-openai}

- **Usa prompt coerenti**: Prompt identici beneficiano del caching
- **Imposta un TTL ragionevole**: Bilancia i costi con la freschezza dei dati
- **Monitora le metriche di cache**: Tieni traccia della creazione rispetto agli hit
- **Batch le richieste simili**: Raggruppa le richieste per massimizzare gli hit di cache

## OpenRouter: Caching Specifico del Provider {#openrouter-provider-specific-caching}

OpenRouter supporta il caching tramite i provider sottostanti (OpenAI, Anthropic, ecc.).

### Configurazione {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Usa il caching di OpenAI
    ],
];
```

### Utilizzo del Caching OpenRouter {#using-openrouter-caching}

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

### Opzioni Specifiche del Provider {#provider-specific-options}

I diversi provider hanno diversi meccanismi di caching:

```php
// Caching compatibile con OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caching compatibile con Anthropic
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

### Best Practices per OpenRouter {#best-practices-for-openrouter}

- **Conosci il caching del tuo provider**: Ogni provider ha meccanismi diversi
- **Testa il comportamento di caching**: Verifica che il caching funzioni con il provider scelto
- **Monitora i costi**: Tieni traccia dei risparmi ottenuti dal caching
- **Usa modelli coerenti**: Cambiare modelli interrompe gli hit di cache

## Vertex Anthropic: Caching dei Prompt con Controllo della Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) supporta il caching dei prompt con controllo esplicito della cache.

### Configurazione {#configuration-3}

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

### Utilizzo del Caching Vertex Anthropic {#using-vertex-anthropic-caching}

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

// La risposta include le metriche di cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Tipi di Controllo della Cache {#cache-control-types}

- **ephemeral**: Cache per la durata della richiesta (predefinito)
- **persistent**: Cache su più richieste (se supportato)

### Monitoraggio dell'Utilizzo della Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache creata: $cache_created token\n";
echo "Cache letta: $cache_read token\n";
```

### Best Practices per Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Usa il caching effimero**: Ottimo per il caching in singola sessione
- **Imposta max_tokens in modo appropriato**: Bilancia la dimensione della cache con i costi
- **Monitora le metriche di cache**: Tieni traccia dell'efficacia della cache
- **Testa con il tuo carico di lavoro**: Verifica che il caching sia utile per il tuo caso d'uso

## Strategia di Caching Cross-Provider {#cross-provider-caching-strategy}

### Configurazione Unificata {#unified-configuration}

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

### Rilevamento del Provider {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Usa la configurazione di caching specifica del provider
```

### Strategia di Fallback {#fallback-strategy}

```php
try {
    // Prova a cacheare con il provider primario
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback a richiesta non cacheata
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Ottimizzazione dei Costi {#cost-optimization}

### Calcolare i Risparmi {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Prezzi tipici (variano per provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x più economico
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x più economico
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Risparmio stimato: \$$savings\n";
```

### Consigli di Ottimizzazione {#optimization-tips}

- **Cacheare i system prompt grandi**: Il maggiore risparmio sui costi
- **Riutilizzare il contesto**: Cacheare documenti di contesto frequentemente utilizzati
- **Batchare le richieste**: Raggruppare richieste simili per massimizzare gli hit di cache
- **Monitorare l'efficacia della cache**: Tieni traccia dei risparmi effettivi
- **Regolare il TTL**: Bilanciare costi e freschezza

## Risoluzione dei Problemi {#troubleshooting}

### La cache non viene utilizzata {#cache-not-being-used}

- Verifica che il caching sia abilitato nella configurazione
- Controlla che i prompt siano identici (il caching richiede una corrispondenza esatta)
- Verifica che la cache non sia scaduta
- Controlla i limiti di cache specifici del provider

### Fallimento della creazione della cache {#cache-creation-failing}

- Verifica che la dimensione della cache sia entro i limiti del provider
- Controlla che la sintassi di cache control sia corretta
- Assicurati che il provider supporti il caching per il tuo modello
- Rivedi la documentazione del provider per i limiti

### Costi inaspettati {#unexpected-costs}

- Monitora i token di creazione cache rispetto ai token di lettura cache
- Verifica che la cache venga effettivamente utilizzata
- Controlla la presenza di cache miss dovuti a variazioni dei prompt
- Considera di regolare il TTL o la strategia di cache

## Confronto dei Provider {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | Intestazioni HTTP | Specifico del Provider | Controllo della Cache |
| Controllo TTL | Esplicito | Tramite intestazioni | Dipendente dal Provider | Effimero/persistente |
| Dimensione max cache | 1M token | Dipendente dal Provider | Dipendente dal Provider | 1M token |
| Riduzione costi | 90% | 90% | Dipendente dal Provider | 90% |
| Monitoraggio | Dettagliato | Tramite metriche | Dipendente dal Provider | Tramite utilizzo |

## Prossimi Passi {#next-steps}

1. **Scegli il tuo provider**: Seleziona in base alle tue esigenze
2. **Configura il caching**: Imposta il caching specifico del provider
3. **Testa il caching**: Verifica che funzioni con i tuoi prompt
4. **Monitora l'utilizzo**: Tieni traccia degli hit di cache e del risparmio sui costi
5. **Ottimizza**: Regola il TTL e la strategia di cache in base ai risultati
