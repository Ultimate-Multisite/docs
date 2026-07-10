---
title: Ukladanie promptov do vyrovnávacej pamäte s ohľadom na poskytovateľa
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt caching zohľadňujúci providera {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 prináša **prompt caching zohľadňujúci providera**, ktorý optimalizuje náklady na API a latenciu ukladaním promptov do cache naprieč rôznymi LLM providermi. Každý provider má odlišné mechanizmy a konfigurácie cache.

## Prehľad {#overview}

Prompt caching vám umožňuje:

- Ukladať veľké, často používané prompty do cache
- Znížiť náklady na API tým, že sa vyhnete redundantnému spracovaniu
- Zlepšiť latenciu pre požiadavky z cache
- Explicitne spravovať životný cyklus cache

Rôzni provideri implementujú caching odlišne:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching s TTL
- **OpenRouter**: Caching špecifický pre providera
- **Vertex Anthropic**: Prompt caching s riadením cache

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini poskytuje explicitnú správu cache cez `cachedContents` API.

### Konfigurácia {#configuration}

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

### Vytvorenie promptu v cache {#creating-a-cached-prompt}

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

### Použitie promptu z cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Životný cyklus cache {#cache-lifecycle}

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

### Osvedčené postupy pre Gemini {#best-practices-for-gemini}

- **Nastavte vhodné TTL**: Vyvážte úsporu nákladov oproti zastaranosti cache
- **Ukladajte systémové prompty do cache**: Opakovane používajte rovnaký systémový prompt naprieč požiadavkami
- **Monitorujte používanie cache**: Sledujte, ktoré cache sa používajú najviac
- **Odstraňujte expirované cache**: Pravidelne mažte nepoužívané cache

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI podporuje prompt caching s automatickou správou TTL.

### Konfigurácia {#configuration-1}

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

### Zapnutie cachingu {#enabling-caching}

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

### Hlavičky cache {#cache-headers}

Azure OpenAI používa HTTP hlavičky na riadenie cache:

```
Cache-Control: max_age=3600
```

Podporované hodnoty:

- `max_age=<seconds>`: Uložiť do cache na zadané trvanie
- `no_cache`: Neukladať túto požiadavku do cache
- `no_store`: Neukladať do cache a nepoužívať opakovane

### Monitorovanie používania cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Osvedčené postupy pre Azure OpenAI {#best-practices-for-azure-openai}

- **Používajte konzistentné prompty**: Identické prompty profitujú z cachingu
- **Nastavte rozumné TTL**: Vyvážte náklady oproti aktuálnosti
- **Monitorujte metriky cache**: Sledujte vytváranie cache oproti zásahom
- **Dávkujte podobné požiadavky**: Zoskupujte požiadavky, aby ste maximalizovali cache hits

## OpenRouter: Caching špecifický pre providera {#openrouter-provider-specific-caching}

OpenRouter podporuje caching prostredníctvom podkladových providerov (OpenAI, Anthropic atď.).

### Konfigurácia {#configuration-2}

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

### Používanie OpenRouter cachingu {#using-openrouter-caching}

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

### Možnosti špecifické pre providera {#provider-specific-options}

Rôzni provideri majú odlišné mechanizmy cachingu:

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

### Osvedčené postupy pre OpenRouter {#best-practices-for-openrouter}

- **Poznajte caching svojho providera**: Každý provider má odlišné mechanizmy
- **Testujte správanie cachingu**: Overte, že caching funguje s vami zvoleným providerom
- **Monitorujte náklady**: Sledujte úspory z cachingu
- **Používajte konzistentné modely**: Prepínanie modelov ruší cache hits

## Vertex Anthropic: Prompt Caching s riadením cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) podporuje prompt caching s explicitným riadením cache.

### Konfigurácia {#configuration-3}

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

### Používanie Vertex Anthropic caching {#using-vertex-anthropic-caching}

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

### Typy riadenia cache {#cache-control-types}

- **ephemeral**: Cache počas trvania požiadavky (predvolené)
- **persistent**: Cache naprieč viacerými požiadavkami (ak je podporované)

### Monitorovanie používania cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Osvedčené postupy pre Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Použite ephemeral caching**: Vhodné na cache v rámci jednej relácie
- **Nastavte max_tokens primerane**: Vyvážte veľkosť cache a náklady
- **Monitorujte metriky cache**: Sledujte účinnosť cache
- **Testujte so svojou pracovnou záťažou**: Overte, že cache prináša výhody pre váš prípad použitia

## Stratégia cache naprieč poskytovateľmi {#cross-provider-caching-strategy}

### Zjednotená konfigurácia {#unified-configuration}

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

### Detekcia poskytovateľa {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Záložná stratégia {#fallback-strategy}

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

## Optimalizácia nákladov {#cost-optimization}

### Vypočítajte úspory {#calculate-savings}

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

### Tipy na optimalizáciu {#optimization-tips}

- **Ukladajte veľké systémové prompty do cache**: Najväčšie úspory nákladov
- **Opätovne používajte kontext**: Ukladajte často používané kontextové dokumenty do cache
- **Dávkujte požiadavky**: Zoskupujte podobné požiadavky, aby ste maximalizovali zásahy cache
- **Monitorujte účinnosť cache**: Sledujte skutočné úspory
- **Upravte TTL**: Vyvážte náklady a aktuálnosť

## Riešenie problémov {#troubleshooting}

### Cache sa nepoužíva {#cache-not-being-used}

- Overte, že cache je v konfigurácii povolená
- Skontrolujte, že prompty sú identické (cache vyžaduje presnú zhodu)
- Overte, že cache neexpirovala
- Skontrolujte limity cache špecifické pre poskytovateľa

### Vytvorenie cache zlyháva {#cache-creation-failing}

- Overte, že veľkosť cache je v rámci limitov poskytovateľa
- Skontrolujte, že syntax riadenia cache je správna
- Uistite sa, že poskytovateľ podporuje cache pre váš model
- Prezrite si dokumentáciu poskytovateľa pre obmedzenia

### Neočakávané náklady {#unexpected-costs}

- Monitorujte vytváranie cache oproti tokenom čítaným z cache
- Overte, že cache sa skutočne používa
- Skontrolujte chýbajúce zásahy cache v dôsledku variácií promptov
- Zvážte úpravu TTL alebo stratégie cache

## Porovnanie poskytovateľov {#provider-comparison}

| Funkcia | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP hlavičky | Špecifické pre poskytovateľa | Riadenie cache |
| Riadenie TTL | Explicitné | Cez hlavičky | Závislé od poskytovateľa | Ephemeral/persistent |
| Max. veľkosť cache | 1M tokenov | Závislá od poskytovateľa | Závislá od poskytovateľa | 1M tokenov |
| Zníženie nákladov | 90 % | 90 % | Závislé od poskytovateľa | 90 % |
| Monitorovanie | Podrobné | Cez metriky | Závislé od poskytovateľa | Cez používanie |

## Ďalšie kroky {#next-steps}

1. **Vyberte svojho poskytovateľa**: Vyberte podľa svojich potrieb
2. **Nakonfigurujte cache**: Nastavte cache špecifickú pre poskytovateľa
3. **Otestujte cache**: Overte, že funguje s vašimi promptmi
4. **Monitorujte používanie**: Sledujte zásahy cache a úspory nákladov
5. **Optimalizujte**: Upravte TTL a stratégiu cache na základe výsledkov
