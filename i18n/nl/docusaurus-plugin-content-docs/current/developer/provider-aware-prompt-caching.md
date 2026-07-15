---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 introduceert **provider-aware prompt caching**, wat de API-kosten en latentie optimaliseert door prompts op te slaan (cachen) over verschillende LLM-providers heen. Elke provider heeft verschillende cachingmechanismen en configuraties.

## Overzicht {#overview}

Prompt caching stelt u in staat om:

- Grote, vaak gebruikte prompts op te slaan (cachen)
- API-kosten te verminderen door te voorkomen dat er dubbel werk wordt verricht
- De latentie te verbeteren voor gecachede verzoeken
- De levenscyclus van de cache expliciet te beheren

Verschillende providers implementeren caching op hun eigen manier:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching met TTL
- **OpenRouter**: Provider-specifieke caching
- **Vertex Anthropic**: Prompt caching met cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini biedt expliciet cachebeheer via de `cachedContents` API.

### Configuratie {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 uur in seconden
        'max_tokens' => 1000000, // Max tokens om op te slaan
    ],
];
```

### Een Gecacheerde Prompt Creëren {#creating-a-cached-prompt}

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

// Retourneert: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Een Gecacheerde Prompt Gebruiken {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Levenscyclus {#cache-lifecycle}

```php
// Lijst gecacheerde inhoud
$caches = $gemini->list_cached_contents();

// Haal cachegegevens op
$cache = $gemini->get_cached_content( 'abc123' );

// Verleng cache TTL
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Verleng naar 2 uur
);

// Verwijder cache
$gemini->delete_cached_content( 'abc123' );
```

### Best Practices voor Gemini {#best-practices-for-gemini}

- **Stel een geschikte TTL in**: Balans tussen kostenbesparing en veroudering van de cache
- **Cache system prompts**: Hergebruik dezelfde system prompt bij verschillende verzoeken
- **Monitor cachegebruik**: Houd bij welke caches het meest worden gebruikt
- **Verwijder verlopen caches**: Verwijder periodiek ongebruikte caches

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ondersteunt prompt caching met automatische TTL-beheer.

### Configuratie {#configuration-1}

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

### Caching Inschakelen {#enabling-caching}

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

// De respons bevat cachegebruik:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Headers {#cache-headers}

Azure OpenAI gebruikt HTTP-headers voor cachebeheer:

```
Cache-Control: max_age=3600
```

Ondersteunde waarden:

- `max_age=<seconden>`: Cache voor de gespecificeerde duur
- `no_cache`: Cacheer dit verzoek niet
- `no_store`: Cacheer niet en hergebruik ook niet

### Cachegebruik Monitoren {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creatie: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices voor Azure OpenAI {#best-practices-for-azure-openai}

- **Gebruik consistente prompts**: Identieke prompts profiteren van caching
- **Stel een redelijke TTL in**: Balans tussen kosten en actualiteit
- **Monitor cachemetrieken**: Houd bij het verschil tussen cachecreatie en hits
- **Batch verzoeken**: Groepeer verzoeken om de cache hits te maximaliseren

## OpenRouter: Provider-Specifieke Caching {#openrouter-provider-specific-caching}

OpenRouter ondersteunt caching via de onderliggende providers (OpenAI, Anthropic, etc.).

### Configuratie {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Gebruik OpenAI's caching
    ],
];
```

### OpenRouter Caching Gebruiken {#using-openrouter-caching}

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

### Provider-Specifieke Opties {#provider-specific-options}

Verschillende providers hebben verschillende cachingmechanismen:

```php
// OpenAI-compatibele caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-compatibele caching
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

### Best Practices voor OpenRouter {#best-practices-for-openrouter}

- **Ken de caching van je provider**: Elke provider heeft verschillende mechanismen
- **Test het cachinggedrag**: Controleer of caching werkt met je gekozen provider
- **Monitor kosten**: Houd de besparingen door caching bij
- **Gebruik consistente modellen**: Het wijzigen van modellen verbreekt cache hits

## Vertex Anthropic: Prompt Caching met Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ondersteunt prompt caching met expliciete cache control.

### Configuratie {#configuration-3}

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

### Vertex Anthropic Caching Gebruiken {#using-vertex-anthropic-caching}

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

// De respons bevat cachemetrieken:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Control Types {#cache-control-types}

- **ephemeral**: Cache voor de duur van het verzoek (standaard)
- **persistent**: Cache over meerdere verzoeken (indien ondersteund)

### Cachegebruik Monitoren {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache aangemaakt: $cache_created tokens\n";
echo "Cache gelezen: $cache_read tokens\n";
```

### Best Practices voor Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Gebruik ephemeral caching**: Goed voor caching binnen één sessie
- **Stel max_tokens passend in**: Balans tussen cachegrootte en kosten
- **Monitor cachemetrieken**: Houd de effectiviteit van de cache bij
- **Test met je werklast**: Controleer of caching je gebruiksscenario ten goede komt

## Cross-Provider Caching Strategie {#cross-provider-caching-strategy}

### Geünificeerde Configuratie {#unified-configuration}

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

### Provider Detectie {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Gebruik de provider-specifieke cachingconfiguratie
```

### Fallback Strategie {#fallback-strategy}

```php
try {
    // Probeer te cachen met de primaire provider
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Val terug op een niet-gecacheerd verzoek
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostenoptimalisatie {#cost-optimization}

### Besparingen Berekenen {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typische prijzen (variëren per provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x goedkoper
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x goedkoper
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Geschatte besparing: \$$savings\n";
```

### Optimalisatietips {#optimization-tips}

- **Cache grote system prompts**: Grootste kostenbesparing
- **Hergebruik context**: Cache vaak gebruikte contextdocumenten
- **Batch verzoeken**: Groepeer verzoeken om de cache hits te maximaliseren
- **Monitor cacheeffectiviteit**: Houd daadwerkelijke besparingen bij
- **Pas TTL aan**: Balans tussen kosten en actualiteit

## Probleemoplossing {#troubleshooting}

### Cache wordt niet gebruikt {#cache-not-being-used}

- Controleer of caching is ingeschakeld in de configuratie
- Controleer of de prompts identiek zijn (caching vereist een exacte match)
- Controleer of de cache niet is verlopen
- Controleer de provider-specifieke cachelimieten

### Cachecreatie faalt {#cache-creation-failing}

- Controleer of de cachegrootte binnen de providerlimieten valt
- Controleer of de syntax van cache control correct is
- Zorg ervoor dat de provider caching ondersteunt voor uw model
- Raadpleeg de providerdocumentatie voor beperkingen

### Onverwachte kosten {#unexpected-costs}

- Monitor cachecreatie versus cache read tokens
- Controleer of de cache daadwerkelijk wordt gebruikt
- Controleer op cache misses door promptvariaties
- Overweeg de TTL of de cachestrategie aan te passen

## Provider Vergelijking {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Expliciet | Via headers | Provider-afhankelijk | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-afhankelijk | Provider-afhankelijk | 1M tokens |
| Cost reduction | 90% | 90% | Provider-afhankelijk | 90% |
| Monitoring | Gedetailleerd | Via metrics | Provider-afhankelijk | Via usage |

## Volgende Stappen {#next-steps}

1. **Kies je provider**: Selecteer op basis van je behoeften
2. **Configureer caching**: Stel provider-specifieke caching in
3. **Test caching**: Controleer of het werkt met je prompts
4. **Monitor gebruik**: Houd cache hits en kostenbesparingen bij
5. **Optimaliseer**: Pas TTL en cachestrategie aan op basis van de resultaten
