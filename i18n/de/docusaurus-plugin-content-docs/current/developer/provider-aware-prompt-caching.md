---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 führt **provider-aware prompt caching** ein. Dies optimiert die API-Kosten und die Latenz, indem Prompts über verschiedene LLM-Provider hinweg zwischengespeichert werden. Jeder Provider hat unterschiedliche Caching-Mechanismen und Konfigurationen.

## Überblick {#overview}

Prompt Caching ermöglicht es Ihnen, Folgendes zu tun:

- Große, häufig verwendete Prompts zwischenzuspeichern
- API-Kosten zu senken, indem redundante Verarbeitungen vermieden werden
- Die Latenz für zwischengespeicherte Anfragen zu verbessern
- Den Lebenszyklus des Caches explizit zu verwalten

Verschiedene Provider implementieren das Caching unterschiedlich:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt Caching mit TTL
- **OpenRouter**: Provider-spezifisches Caching
- **Vertex Anthropic**: Prompt Caching mit Cache Control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini bietet über die `cachedContents` API eine explizite Cache-Verwaltung.

### Konfiguration {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 Stunde in Sekunden
        'max_tokens' => 1000000, // Max Tokens zum Cachen
    ],
];
```

### Erstellen eines zwischengespeicherten Prompts {#creating-a-cached-prompt}

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

// Gibt zurück: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Verwendung eines zwischengespeicherten Prompts {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache-Lebenszyklus {#cache-lifecycle}

```php
// Zwischengespeicherte Inhalte auflisten
$caches = $gemini->list_cached_contents();

// Cache-Details abrufen
$cache = $gemini->get_cached_content( 'abc123' );

// Cache TTL verlängern
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Auf 2 Stunden verlängern
);

// Cache löschen
$gemini->delete_cached_content( 'abc123' );
```

### Best Practices für Gemini {#best-practices-for-gemini}

- **Passendes TTL festlegen**: Kostenersparnis gegen Cache-Veralterung abwägen
- **System-Prompts zwischenspeichern**: Verwenden Sie denselben System-Prompt für mehrere Anfragen
- **Cache-Nutzung überwachen**: Verfolgen Sie, welche Caches am häufigsten verwendet werden
- **Abgelaufene Caches bereinigen**: Löschen Sie ungenutzte Caches regelmäßig

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI unterstützt Prompt Caching mit automatischer TTL-Verwaltung.

### Konfiguration {#configuration-1}

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

### Caching aktivieren {#enabling-caching}

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

// Die Antwort enthält die Cache-Nutzung:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache-Header {#cache-headers}

Azure OpenAI verwendet HTTP-Header zur Cache-Steuerung:

```
Cache-Control: max_age=3600
```

Unterstützte Werte:

- `max_age=<seconds>`: Cache für die angegebene Dauer
- `no_cache`: Diese Anfrage nicht zwischenspeichern
- `no_store`: Nicht zwischenspeichern und nicht wiederverwenden

### Cache-Nutzung überwachen {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache-Erstellung: $cache_tokens Tokens\n";
echo "Cache-Treffer: $cache_hits Tokens\n";
```

### Best Practices für Azure OpenAI {#best-practices-for-azure-openai}

- **Konsistente Prompts verwenden**: Identische Prompts profitieren vom Caching
- **Angemessenes TTL festlegen**: Kosten gegen Aktualität abwägen
- **Cache-Metriken überwachen**: Cache-Erstellung gegen Treffer verfolgen
- **Ähnliche Anfragen bündeln**: Anfragen gruppieren, um Cache-Treffer zu maximieren

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter unterstützt das Caching über die zugrunde liegenden Provider (OpenAI, Anthropic usw.).

### Konfiguration {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Nutzt das OpenAI-Caching
    ],
];
```

### OpenRouter Caching verwenden {#using-openrouter-caching}

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

### Provider-Spezifische Optionen {#provider-specific-options}

Verschiedene Provider haben unterschiedliche Caching-Mechanismen:

```php
// OpenAI-kompatibles Caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-kompatibles Caching
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

### Best Practices für OpenRouter {#best-practices-for-openrouter}

- **Provider-Caching kennen**: Jeder Provider hat unterschiedliche Mechanismen
- **Caching-Verhalten testen**: Überprüfen Sie, ob das Caching mit Ihrem gewählten Provider funktioniert
- **Kosten überwachen**: Verfolgen Sie die Einsparungen durch Caching
- **Konsistente Modelle verwenden**: Der Wechsel von Modellen bricht Cache-Treffer

## Vertex Anthropic: Prompt Caching mit Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) unterstützt Prompt Caching mit expliziter Cache Control.

### Konfiguration {#configuration-3}

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

### Vertex Anthropic Caching verwenden {#using-vertex-anthropic-caching}

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

// Die Antwort enthält Cache-Metriken:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Control Typen {#cache-control-types}

- **ephemeral**: Cache für die Dauer der Anfrage (Standard)
- **persistent**: Cache über mehrere Anfragen hinweg (falls unterstützt)

### Cache-Nutzung überwachen {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache erstellt: $cache_created Tokens\n";
echo "Cache gelesen: $cache_read Tokens\n";
```

### Best Practices für Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Ephemeral Caching verwenden**: Gut für das Caching innerhalb einer Sitzung
- **`max_tokens` angemessen festlegen**: Cache-Größe gegen Kosten abwägen
- **Cache-Metriken überwachen**: Die Effektivität des Caches verfolgen
- **Mit Ihrer Arbeitslast testen**: Überprüfen Sie, ob das Caching Ihren Anwendungsfall verbessert

## Cross-Provider Caching Strategy {#cross-provider-caching-strategy}

### Vereinheitlichte Konfiguration {#unified-configuration}

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

### Provider-Erkennung {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Nutzt die provider-spezifische Caching-Konfiguration
```

### Fallback-Strategie {#fallback-strategy}

```php
try {
    // Versuch des Caching mit dem primären Provider
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback auf die nicht-gecachte Anfrage
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostenoptimierung {#cost-optimization}

### Einsparungen berechnen {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typische Preise (variiert je nach Provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x günstiger
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x günstiger
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Geschätzte Einsparungen: \$$savings\n";
```

### Optimierungstipps {#optimization-tips}

- **Große System-Prompts zwischenspeichern**: Größte Kosteneinsparungen
- **Kontext wiederverwenden**: Häufig verwendete Kontextdokumente zwischenspeichern
- **Anfragen bündeln**: Ähnliche Anfragen gruppieren, um Cache-Treffer zu maximieren
- **Cache-Effektivität überwachen**: Tatsächliche Einsparungen verfolgen
- **TTL anpassen**: Kosten gegen Aktualität abwägen

## Fehlerbehebung {#troubleshooting}

### Cache wird nicht verwendet {#cache-not-being-used}

- Überprüfen Sie, ob das Caching in der Konfiguration aktiviert ist
- Stellen Sie sicher, dass die Prompts identisch sind (Caching erfordert exakte Übereinstimmung)
- Überprüfen Sie, ob der Cache abgelaufen ist
- Überprüfen Sie die provider-spezifischen Cache-Limits

### Cache-Erstellung schlägt fehl {#cache-creation-failing}

- Überprüfen Sie, ob die Cache-Größe innerhalb der Provider-Limits liegt
- Stellen Sie sicher, dass die Cache-Control-Syntax korrekt ist
- Stellen Sie sicher, dass der Provider das Caching für Ihr Modell unterstützt
- Überprüfen Sie die Provider-Dokumentation auf Einschränkungen

### Unerwartete Kosten {#unexpected-costs}

- Überwachen Sie Cache-Erstellung im Vergleich zu Cache-Lese-Tokens
- Überprüfen Sie, ob der Cache tatsächlich verwendet wird
- Achten Sie auf Cache-Misses aufgrund von Prompt-Variationen
- Ziehen Sie in Betracht, das TTL oder die Cache-Strategie anzupassen

## Provider-Vergleich {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-spezifisch | Cache control |
| TTL-Steuerung | Explizit | Über Header | Provider-abhängig | Ephemeral/persistent |
| Max Cache Größe | 1M Tokens | Provider-abhängig | Provider-abhängig | 1M Tokens |
| Kostenreduktion | 90% | 90% | Provider-abhängig | 90% |
| Überwachung | Detailliert | Über Metriken | Provider-abhängig | Über Usage |

## Nächste Schritte {#next-steps}

1. **Wählen Sie Ihren Provider**: Wählen Sie basierend auf Ihren Anforderungen
2. **Caching konfigurieren**: Richten Sie das provider-spezifische Caching ein
3. **Caching testen**: Überprüfen Sie, ob es mit Ihren Prompts funktioniert
4. **Nutzung überwachen**: Verfolgen Sie Cache-Treffer und Kosteneinsparungen
5. **Optimieren**: Passen Sie TTL und Cache-Strategie basierend auf den Ergebnissen an
