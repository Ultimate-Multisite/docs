---
title: Provider-Bewuste Prompte-Kassering
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Verskaffer-Bewus Prompt-Caching

Superdav AI Agent v1.12.0 stel **verskaffer-bewus prompt-caching** bekend, wat API-koste en latensie optimaliseer deur prompts oor verskillende LLM-verskaffers te cache. Elke verskaffer het verskillende caching-meganismes en -konfigurasies.

## Oorsig

Prompt-caching laat jou toe om:

- Groot, dikwels gebruikte prompts te cache
- API-koste te verminder deur redundante verwerking te vermy
- Latensie vir gecachede aanvraag te verbeter
- Die cache-lewenstydsiklus eksplisiet te bestuur

Verskillende verskaffers implementeer caching op verskillende maniere:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-caching met TTL
- **OpenRouter**: Verskaffer-spesifieke caching
- **Vertex Anthropic**: Prompt-caching met cachebeheer

## Google Gemini: cachedContents API

Google Gemini bied eksplisiete cachebestuur via die `cachedContents` API.

### Konfigurasie

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 uur in sekondes
        'max_tokens' => 1000000, // Maksimum tokens om te cache
    ],
];
```

### Skep 'n Gecachede Prompt

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

// Gee terug: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Gebruik 'n Gecachede Prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache-Lewensydsiklus

```php
// Lys gecachede inhoud
$caches = $gemini->list_cached_contents();

// Kry cache-besonderhede
$cache = $gemini->get_cached_content( 'abc123' );

// Verleng cache TTL
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Verleng na 2 uur
);

// Verwyder cache
$gemini->delete_cached_content( 'abc123' );
```

### Beste Praktyke vir Gemini

- **Stel 'n toepaslike TTL**: Balanseer kostebesparing teenoor cache-veroudering
- **Cache sisteme-prompts**: Hergebruik dieselfde sisteme-prompt oor aanvraag
- **Monitor cache-gebruik**: Hou by wie se caches die meeste gebruik word
- **Skoonmaak verouderde caches**: Verwyder periodiek ongebruikte caches

## Azure OpenAI: Prompt-Caching

Azure OpenAI ondersteun prompt-caching met outomatiese TTL-bestuur.

### Konfigurasie

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

### Aktivering van Caching

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

// Antwoord sluit cache-gebruik in:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache-koppe (Cache Headers)

Azure OpenAI gebruik HTTP-koppe vir cachebeheer:

```
Cache-Control: max_age=3600
```

Ondersteunde waardes:

- `max_age=<sekondes>`: Cache vir gespesifiseerde duur
- `no_cache`: Moenie hierdie aanvraag cache nie
- `no_store`: Moenie cache nie en hergebruik nie

### Monitor Cache-Gebruik

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache skep: $cache_tokens tokens\n";
echo "Cache treffers: $cache_hits tokens\n";
```

### Beste Praktyke vir Azure OpenAI

- **Gebruik konsekwente prompts**: Identieke prompts baat by caching
- **Stel 'n redelike TTL**: Balanseer koste teenoor varsheid
- **Monitor cache-metrieke**: Hou by cache-skepping teenoor treffers
- **Batch soortgelyke aanvraag**: Groepeer aanvraag om cache-treffers te maksimeer

## OpenRouter: Verskaffer-Spesifieke Caching

OpenRouter ondersteun caching deur onderliggende verskaffers (OpenAI, Anthropic, ens.).

### Konfigurasie

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Gebruik OpenAI se caching
    ],
];
```

### Gebruik OpenRouter Caching

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

### Verskaffer-Spesifieke Opsies

Verskillende verskaffers het verskillende caching-meganismes:

```php
// OpenAI-kompatibele caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-kompatibele caching
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

### Beste Praktyke vir OpenRouter

- **Ken jou verskaffer se caching**: Elke verskaffer het verskillende meganismes
- **Toets caching-gedrag**: Verifieer dat caching werk met jou gekose verskaffer
- **Monitor koste**: Hou by besparings deur caching
- **Gebruik konsekwente modelle**: Om modelle te skakel breek cache-treffers

## Vertex Anthropic: Prompt-Caching met Cachebeheer

Vertex Anthropic (Google Cloud) ondersteun prompt-caching met eksplisiete cachebeheer.

### Konfigurasie

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

### Gebruik Vertex Anthropic Caching

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

// Antwoord sluit cache-metrieke in:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cachebeheer Tipes

- **ephemeral**: Cache vir die duur van die aanvraag (standaard)
- **persistent**: Cache oor verskeie aanvraag (indien ondersteun)

### Monitor Cache-Gebruik

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache geskep: $cache_created tokens\n";
echo "Cache gelees: $cache_read tokens\n";
```

### Beste Praktyke vir Vertex Anthropic

- **Gebruik ephemeral caching**: Goed vir enkele sessie caching
- **Stel max_tokens toepaslik**: Balanseer cachegrootte teenoor koste
- **Monitor cache-metrieke**: Hou by cache-doeltreffendheid
- **Toets met jou werklas**: Verifieer dat caching jou gebruik geval voordeel

## Verskaffer-Oorskrydende Caching Strategie

### Geunifieerde Konfigurasie

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

### Verskaffer-Opsporing

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Gebruik verskaffer-spesifieke caching-konfigurasie
```

### Terugvalstrategie

```php
try {
    // Probeer caching met primêre verskaffer
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Val terug na nie-gecachede aanvraag
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostebesparing

### Bereken Besparings

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tipiese prysvorming (verander per verskaffer):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x goedkoper
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x goedkoper
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Geskatte besparing: \$$savings\n";
```

### Optimalisering Wenke

- **Cache groot sisteme-prompts**: Grootste kostebesparings
- **Hergebruik konteks**: Cache dikwels gebruikte konteksdokumente
- **Batch aanvraag**: Groepeer soortgelyke aanvraag om cache-treffers te maksimeer
- **Monitor cache-doeltreffendheid**: Hou by werklike besparings
- **Pas TTL aan**: Balanseer koste teenoor varsheid

## Foutopsporing

### Cache word nie gebruik nie

- Verifieer dat caching in die konfigurasie geaktiveer is
- Kontroleer dat prompts identies is (caching vereis presiese pas)
- Verifieer dat die cache nie verouderd is nie
- Kontroleer verskaffer-spesifieke cachelimiete

### Cache-skepping misluk

- Verifieer dat die cachegrootte binne verskafferlimiete is
- Kontroleer dat die cachebeheer sintaks korrek is
- Verseker dat die verskaffer caching vir jou model ondersteun
- Raadpleeg verskaffer-dokumentasie vir beperkings

### Onverwagte koste

- Monitor cache-skeppings-teenoor-cache-lees-tokens
- Verifieer dat die cache werklik gebruik word
- Kontroleer vir cache-misses as gevolg van prompt-variasies
- Oorweeg om TTL of die cache-strategie aan te pas

## Verskaffervergelyking

| Funksie | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Verskaffer-spesifiek | Cachebeheer |
| TTL beheer | Eksplisiet | Via koppe | Verskaffer-afhanklik | Ephemeral/persistent |
| Maksimum cachegrootte | 1M tokens | Verskaffer-afhanklik | Verskaffer-afhanklik | 1M tokens |
| Kostevermindering | 90% | 90% | Verskaffer-afhanklik | 90% |
| Monitoring | Gedetailleerd | Via metrieke | Verskaffer-afhanklik | Via gebruik |

## Volgende Stappe

1. **Kies jou verskaffer**: Kies op grond van jou behoeftes
2. **Konfigureer caching**: Stel verskaffer-spesifieke caching op
3. **Toets caching**: Verifieer dat dit met jou prompts werk
4. **Monitor gebruik**: Hou by cache-treffers en kostebesparings
5. **Optimaliseer**: Pas TTL en cache-strategie aan op grond van resultate
