---
title: Uvědomělé ukládání promptů pro poskytovatele
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cacheování promptů s ohledem na poskytovatele

Superdav AI Agent v1.12.0 zavádí **cacheování promptů s ohledem na poskytovatele** (provider-aware prompt caching). Optimalizuje to náklady na API a latenci tím, že cacheuje prompty napříč různými poskytovateli LLM. Každý poskytovatel má odlišné mechanismy a konfigurace cacheování.

## Přehled

Cacheování promptů vám umožňuje:

- Cacheovat velké, často používané prompty
- Snížit náklady na API tím, že se vyhnete opakovanému zpracování
- Zlepšit latenci pro cacheované požadavky
- Explicitně spravovat životní cyklus cache

Různý poskytovatelé implementují cacheování odlišně:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Cacheování promptů s TTL
- **OpenRouter**: Cacheování specifické pro poskytovatele
- **Vertex Anthropic**: Cacheování promptů s kontrolou cache

## Google Gemini: API cachedContents

Google Gemini poskytuje explicitní správu cache pomocí API `cachedContents`.

### Konfigurace

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 hodina v sekundách
        'max_tokens' => 1000000, // Maximální tokeny pro cacheování
    ],
];
```

### Vytváření cacheovaného promptu

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Jste užitečný asistent...',
        'context' => 'Velký kontextový dokument...',
        'ttl' => 3600,
    ]
);

// Vrací: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Použití cacheovaného promptu

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Dotaz uživatele zde',
    ]
);
```

### Životní cyklus cache

```php
// Seznam cacheovaných obsahu
$caches = $gemini->list_cached_contents();

// Získání detailů cache
$cache = $gemini->get_cached_content( 'abc123' );

// Prodlužování TTL cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Prodlužuje na 2 hodiny
);

// Odstranění cache
$gemini->delete_cached_content( 'abc123' );
```

### Nejlepší praxe pro Gemini

- **Nastavte vhodné TTL**: Vyvážte úsporu nákladů proti zastaralosti cache
- **Cacheujte system prompts**: Používejte stejný system prompt napříč požadavky
- **Monitorujte využití cache**: Sledujte, které cache jsou nejčastěji použity
- **Čistěte vypršující cache**: Periodicky odstraňujte nepoužívané cache

## Azure OpenAI: Cacheování promptů

Azure OpenAI podporuje cacheování promptů s automatickou správou TTL.

### Konfigurace

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

### Aktivace cacheování

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Jste užitečný asistent...',
        'context' => 'Velký kontextový dokument...',
        'prompt' => 'Dotaz uživatele zde',
        'cache_control' => 'max_age=3600',
    ]
);

// Odpověď obsahuje využití cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache hlavičky

Azure OpenAI používá HTTP hlavičky pro kontrolu cache:

```
Cache-Control: max_age=3600
```

Podporované hodnoty:

- `max_age=<sekundy>`: Cacheovat po zadané době
- `no_cache`: Tento požadavek necacheovat
- `no_store`: Necacheovat a nepoužívat

### Monitorování využití cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Vytvoření cache: $cache_tokens tokenů\n";
echo "Cache hits: $cache_hits tokenů\n";
```

### Nejlepší praxe pro Azure OpenAI

- **Používejte konzistentní prompty**: Identické prompty z benefitu cacheování
- **Nastavte rozumné TTL**: Vyvážte náklady proti aktuálnosti
- **Monitorujte metriky cache**: Sledujte vytvoření vs. cache hits
- **Batchujte podobné požadavky**: Skupujte požadavky, abyste maximalizovali cache hits

## OpenRouter: Cacheování specifické pro poskytovatele

OpenRouter podporuje cacheování prostřednictvím základních poskytovatelů (OpenAI, Anthropic atd.).

### Konfigurace

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Používá cacheování OpenAI
    ],
];
```

### Použití cacheování OpenRouter

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Jste užitečný asistent...',
        'context' => 'Velký kontextový dokument...',
        'prompt' => 'Dotaz uživatele zde',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Možnosti specifické pro poskytovatele

Různý poskytovatelé mají odlišné mechanismy cacheování:

```php
// Cacheování kompatibilní s OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Cacheování kompatibilní s Anthropic
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

### Nejlepší praxe pro OpenRouter

- **Zkuste seznámit s cacheováním poskytovatele**: Každý poskytovatel má jiné mechanismy
- **Testujte chování cacheování**: Ověřte, že cacheování funguje s vaším zvoleným poskytovatelem
- **Monitorujte náklady**: Sledujte úspory z cacheování
- **Používejte konzistentní modely**: Přepínání modelů narušuje cache hits

## Vertex Anthropic: Cacheování promptů s kontrolou cache

Vertex Anthropic (Google Cloud) podporuje cacheování promptů s explicitní kontrolou cache.

### Konfigurace

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

### Použití cacheování Vertex Anthropic

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Jste užitečný asistent...',
        'context' => 'Velký kontextový dokument...',
        'prompt' => 'Dotaz uživatele zde',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Odpověď obsahuje metriky cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Typy kontroly cache

- **ephemeral**: Cacheuje po dobu trvání požadavku (výchozí)
- **persistent**: Cacheuje napříč více požadavky (pokud je podporováno)

### Monitorování využití cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Vytvořeno cache: $cache_created tokenů\n";
echo "Čteno z cache: $cache_read tokenů\n";
```

### Nejlepší praxe pro Vertex Anthropic

- **Používejte efemérní cacheování**: Dobré pro cacheování v rámci jedné sesije
- **Nastavte max_tokens vhodně**: Vyvážte velikost cache proti nákladům
- **Monitorujte metriky cache**: Sledujte efektivitu cache
- **Testujte s vaším pracovním zatížením**: Ověřte, že cacheování pomáhá vašemu případu použití

## Strategie cacheování napříč poskytovateli

### Unified Konfigurace

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

### Detekce poskytovatele

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Použití konfigurace cacheování specifické pro poskytovatele
```

### Fallback strategie

```php
try {
    // Pokus o cacheování s primárním poskytovatelem
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Spadnutí na požadavek bez cacheování
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimalizace nákladů

### Výpočet úspor

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typické ceny (se liší podle poskytovatele):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x levnější
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x levnější
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Odhadované úspory: \$$savings\n";
```

### Tipy pro optimalizaci

- **Cacheujte velké system prompts**: Největší úspory nákladů
- **Používejte kontext opakovaně**: Cacheujte často používané kontextové dokumenty
- **Batchujte požadavky**: Skupujte podobné požadavky, abyste maximalizovali cache hits
- **Monitorujte efektivitu cache**: Sledujte skutečné úspory
- **Adjustujte TTL**: Vyvážte náklady proti aktuálnosti

## Řešení problémů

### Cache není použito

- Ověřte, že je cacheování povoleno v konfiguraci
- Zkontrolujte, že prompty jsou identické (cacheování vyžaduje přesnou shodu)
- Ověřte, že cache neuzpálila
- Zkontrolujte limity cache specifické pro poskytovatele

### Chyba při vytváření cache

- Ověřte, že velikost cache je v rámci limitů poskytovatele
- Zkontrolujte, že syntaxe pro kontrolu cache je správná
- Ujistěte se, že poskytovatel podporuje cacheování pro váš model
- Projděte dokumentaci poskytovatele ohledně omezení

### Nečekané náklady

- Monitorujte tokeny pro vytvoření cache vs. tokeny pro čtení cache
- Ověřte, že cache je skutečně použita
- Zkontrolujte, zda nedochází k cache missům kvůli odchylkám v promptech
- Zvažte úpravu TTL nebo strategie cacheování

## Porovnání poskytovatelů

| Funkce | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP hlavičky | Specifické pro poskytovatele | Kontrola cache |
| Kontrola TTL | Explicitní | Skrze hlavičky | Závislé na poskytovateli | Efemérní/persistentní |
| Max velikost cache | 1M tokenů | Závislé na poskytovateli | Závislé na poskytovateli | 1M tokenů |
| Snížení nákladů | 90% | 90% | Závislé na poskytovateli | 90% |
| Monitorování | Detailní | Skrze metriky | Závislé na poskytovateli | Skrze využití |

## Další kroky

1. **Vyberte si poskytovatele**: Vyberte podle vašich potřeb
2. **Konfigurujte cacheování**: Nastavte cacheování specifické pro poskytovatele
3. **Testujte cacheování**: Ověřte, že funguje s vašimi prompty
4. **Monitorujte využití**: Sledujte cache hits a úspory nákladů
5. **Optimalizujte**: Upravte TTL a strategii cacheování na základě výsledků
