---
title: Provider-bewosst Prompt-Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-bewosst Prompt-Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 féiert **provider-bewosst Prompt-Caching** an, dat API-Käschten a Latenz optiméiert, andeems Prompts iwwer verschidde LLM-Provider gecacht ginn. All Provider huet ënnerschiddlech Caching-Mechanismen a Konfiguratiounen.

## Iwwersiicht {#overview}

Prompt-Caching erlaabt Iech:

- Grouss, dacks benotzt Prompts ze cachen
- API-Käschten ze reduzéieren, andeems redundant Veraarbechtung vermeit gëtt
- D'Latenz fir gecachte Ufroen ze verbesseren
- De Cache-Liewenszyklus explizitt ze verwalten

Verschidde Provider implementéieren Caching ënnerschiddlech:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-Caching mat TTL
- **OpenRouter**: Provider-spezifescht Caching
- **Vertex Anthropic**: Prompt-Caching mat Cache-Kontroll

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini bitt explizit Cache-Verwaltung iwwer d'`cachedContents` API.

### Konfiguratioun {#configuration}

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

### E gecachte Prompt erstellen {#creating-a-cached-prompt}

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

### E gecachte Prompt benotzen {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache-Liewenszyklus {#cache-lifecycle}

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

### Bescht Praktike fir Gemini {#best-practices-for-gemini}

- **Passend TTL setzen**: Käschtespueren géint Cache-Veralen ofweien
- **System-Prompts cachen**: Dee selwechte System-Prompt iwwer Ufroen erëmbenotzen
- **Cache-Notzung iwwerwaachen**: Verfollegen, wéi eng Caches am meeschte benotzt ginn
- **Ofgelaf Caches opraumen**: Onbenotzt Caches periodesch läschen

## Azure OpenAI: Prompt-Caching {#azure-openai-prompt-caching}

Azure OpenAI ënnerstëtzt Prompt-Caching mat automatescher TTL-Verwaltung.

### Konfiguratioun {#configuration-1}

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

### Caching aktivéieren {#enabling-caching}

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

### Cache-Headeren {#cache-headers}

Azure OpenAI benotzt HTTP-Headeren fir Cache-Kontroll:

```
Cache-Control: max_age=3600
```

Ënnerstëtzt Wäerter:

- `max_age=<seconds>`: Fir déi spezifizéiert Dauer cachen
- `no_cache`: Dës Ufro net cachen
- `no_store`: Net cachen an net erëmbenotzen

### Cache-Notzung iwwerwaachen {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Bescht Praktike fir Azure OpenAI {#best-practices-for-azure-openai}

- **Konsistent Prompts benotzen**: Identesch Prompts profitéiere vum Caching
- **Raisonnabel TTL setzen**: Käschten géint Aktualitéit ofweien
- **Cache-Metriken iwwerwaachen**: Cache-Erstellung géint Treffer verfollegen
- **Änlech Ufroe bündelen**: Ufroe gruppéieren, fir Cache-Treffer ze maximéieren

## OpenRouter: Provider-spezifescht Caching {#openrouter-provider-specific-caching}

OpenRouter ënnerstëtzt Caching iwwer déi drënner leien Provider (OpenAI, Anthropic, asw.).

### Konfiguratioun {#configuration-2}

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

### OpenRouter-Caching benotzen {#using-openrouter-caching}

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

### Provider-spezifesch Optiounen {#provider-specific-options}

Verschidde Provider hunn ënnerschiddlech Caching-Mechanismen:

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

### Bescht Praktike fir OpenRouter {#best-practices-for-openrouter}

- **D'Caching vun Ärem Provider kennen**: All Provider huet ënnerschiddlech Mechanismen
- **Caching-Verhalen testen**: Iwwerpréift, datt Caching mat Ärem gewielte Provider funktionéiert
- **Käschten iwwerwaachen**: Spuerpotenzial duerch Caching verfollegen
- **Konsistent Modeller benotzen**: Modeller wiesselen ënnerbrécht Cache-Treffer

## Vertex Anthropic: Prompt-Caching mat Cache-Kontroll {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ënnerstëtzt Prompt-Caching mat explizitter Cache-Kontroll.

### Konfiguratioun {#configuration-3}

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

### Vertex Anthropic Caching benotzen {#using-vertex-anthropic-caching}

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

### Cache-Control-Typen {#cache-control-types}

- **ephemeral**: Cache fir d'Dauer vun der Ufro (Standard)
- **persistent**: Cache iwwer méi Ufroen ewech (wann ënnerstëtzt)

### Cache-Notzung iwwerwaachen {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Bescht Praktike fir Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Ephemeral caching benotzen**: Gutt fir Caching an enger eenzeger Sessioun
- **max_tokens passend astellen**: Cache-Gréisst géint Käschten ofweien
- **Cache-Metriken iwwerwaachen**: Cache-Effikassitéit verfollegen
- **Mat Ärer Aarbechtslaascht testen**: Iwwerpréift, datt Caching Ärem Notzungsfall notzt

## Cross-Provider-Caching-Strategie {#cross-provider-caching-strategy}

### Eenheetlech Konfiguratioun {#unified-configuration}

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

### Ubidder-Erkennung {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback-Strategie {#fallback-strategy}

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

## Käschtenoptimiséierung {#cost-optimization}

### Aspuerunge berechnen {#calculate-savings}

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

### Optimiséierungstipps {#optimization-tips}

- **Grouss System-Prompts cachen**: Gréisst Käschtenaspuerungen
- **Kontext weiderbenotzen**: Dacks benotzte Kontextdokumenter cachen
- **Ufroen bündelen**: Änlech Ufroen zesummefaassen, fir Cache-Hits ze maximéieren
- **Cache-Effikassitéit iwwerwaachen**: Tatsächlech Aspuerunge verfollegen
- **TTL upassen**: Käschten géint Aktualitéit ofweien

## Feelerbehebung {#troubleshooting}

### Cache gëtt net benotzt {#cache-not-being-used}

- Iwwerpréift, datt Caching an der Konfiguratioun aktivéiert ass
- Kontrolléiert, datt Prompts identesch sinn (Caching erfuerdert eng exakt Iwwereenstëmmung)
- Iwwerpréift, datt de Cache net ofgelaf ass
- Kontrolléiert ubidder-spezifesch Cache-Limiten

### Cache-Erstellung klappt net {#cache-creation-failing}

- Iwwerpréift, datt d'Cache-Gréisst bannent den Ubidder-Limiten ass
- Kontrolléiert, datt d'Cache-Control-Syntax korrekt ass
- Stellt sécher, datt den Ubidder Caching fir Äre Modell ënnerstëtzt
- Kuckt d'Ubidder-Dokumentatioun fir Aschränkungen no

### Onerwaart Käschten {#unexpected-costs}

- Iwwerwaacht Cache-Erstellung géint Cache-Lies-Tokens
- Iwwerpréift, datt de Cache tatsächlech benotzt gëtt
- Kontrolléiert op Cache-Misses wéinst Prompt-Variatiounen
- Iwwerleet, TTL oder Cache-Strategie unzepassen

## Ubidder-Verglach {#provider-comparison}

| Funktioun | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP-Headeren | Ubidder-spezifesch | Cache-Control |
| TTL-Kontroll | Explizit | Iwwer Headeren | Ubidder-ofhängeg | Ephemeral/persistent |
| Max. Cache-Gréisst | 1M Tokens | Ubidder-ofhängeg | Ubidder-ofhängeg | 1M Tokens |
| Käschtereduktioun | 90% | 90% | Ubidder-ofhängeg | 90% |
| Iwwerwaachung | Detailléiert | Iwwer Metriken | Ubidder-ofhängeg | Iwwer Notzung |

## Nächst Schrëtt {#next-steps}

1. **Wielt Ären Ubidder**: Wielt op Basis vun Äre Besoinen
2. **Caching konfiguréieren**: Riicht ubidder-spezifescht Caching an
3. **Caching testen**: Iwwerpréift, datt et mat Äre Prompts funktionéiert
4. **Notzung iwwerwaachen**: Verfollegt Cache-Hits a Käschtenaspuerungen
5. **Optimiséieren**: Passt TTL a Cache-Strategie op Basis vun de Resultater un
