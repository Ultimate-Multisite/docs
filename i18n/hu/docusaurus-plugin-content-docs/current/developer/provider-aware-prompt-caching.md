---
title: Provider-tudatos prompt-caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Szolgáltató-tudatos Prompt Cache-elés

A Superdav AI Agent v1.12.0 bevezet **szolgáltató-tudatos prompt cache-elést**, amely optimalizálja az API költségeket és a merülést (latency) különböző LLM szolgáltatók általi promptok cache-elése révén. Minden szolgáltatónek más cache-előző mechanizmusai és konfigurációi vannak.

## Áttekintő {#overview}

A prompt cache-elés lehetővé teszi, hogy:

- Cache-eljen nagy, gyakran használt promptokat
- Csökkentse az API költségeket a redundáns feldolgozás elkerülésével
- Javítsa a merülést a cache-elt kérések esetén
- Kezélje explicit módon a cache életciklusát

A különböző szolgáltatók eltérő módon implementálják a cache-elést:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt cache-elés TTL-lel (Time To Live)
- **OpenRouter**: Szolgáltató-specifikus cache-elés
- **Vertex Anthropic**: Prompt cache-elés cache-kontrollral

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

A Google Gemini explicit cache-kezelést biztosít a `cachedContents` API segítségével.

### Konfiguráció {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 óra másodpercekben
        'max_tokens' => 1000000, // Maximális cache-elhető token
    ],
];
```

### Cache-elt Prompt létrehozása {#creating-a-cached-prompt}

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

// Visszaadja: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Cache-elt Prompt használata {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Életciklus {#cache-lifecycle}

```php
// Listázza a cache-elt tartalmakat
$caches = $gemini->list_cached_contents();

// Kapja meg a cache részleteit
$cache = $gemini->get_cached_content( 'abc123' );

// Hosszabbítja a cache TTL-ét
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Hosszabbítja 2 órára
);

// Törli a cache-t
$gemini->delete_cached_content( 'abc123' );
```

### Legjobb gyakorlatok Gemini-hez {#best-practices-for-gemini}

- **Állítsa be megfelelő TTL-t**: Egyensúlya a költségmegtakarítás és a cache elavulása között
- **Cache-elje a rendszeres promptokat**: Használja újra ugyanazt a rendszeres utasítást a kérések során
- **Követje nyomon a cache használatát**: Figyelje meg, mely cache-ek használatosak
- **Tisztítsa meg az elavult cache-eket**: Idővel távolítsa el a nem használt cache-eket

## Azure OpenAI: Prompt Cache-elés {#azure-openai-prompt-caching}

Az Azure OpenAI támogatja a prompt cache-elést automatikus TTL-kezeléssel.

### Konfiguráció {#configuration-1}

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

### Cache-elés Aktiválása {#enabling-caching}

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

// A válasz tartalmazza a cache használatát:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Fejlesztők (Cache Headers) {#cache-headers}

Az Azure OpenAI HTTP fejléceket használ a cache-kontrollhoz:

```
Cache-Control: max_age=3600
```

Támogatott értékek:

- `max_age=<másodpercek>`: Cache a megadott időtartamra
- `no_cache`: Ne cache-elje ezt a kérést
- `no_store`: Ne cache-elje és ne használja újra

### Cache Használatának Követése {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache létrehozása: $cache_tokens token\n";
echo "Cache találatok: $cache_hits token\n";
```

### Legjobb gyakorlatok Azure OpenAI-hez {#best-practices-for-azure-openai}

- **Használjon konzisztens promptokat**: Azonos promptok kedveznek a cache-elésnek
- **Állítsanak be érdemi TTL-t**: Egyensúlya a költség és az frissesség között
- **Követjen nyomon a cache metrikáinak**: Figyelje a cache létrehozását és a találatokat
- **Csoportosítsa a hasonló kéréseket**: Csoportosítsa a kéréseket, hogy maximalizálja a cache találatokat

## OpenRouter: Szolgáltató-specifikus Cache-elés {#openrouter-provider-specific-caching}

Az OpenRouter cache-elést biztosít az alrendszerek (OpenAI, Anthropic stb.) segítségével.

### Konfiguráció {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Használja az OpenAI cache-elését
    ],
];
```

### OpenRouter Cache-elés Használata {#using-openrouter-caching}

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

### Szolgáltató-specifikus Opciók {#provider-specific-options}

A különböző szolgáltatók eltérő cache-előző mechanizmusokat használnak:

```php
// OpenAI-kompatibilis cache-elés
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-kompatibilis cache-elés
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

### Legjobb gyakorlatok OpenRouter-hez {#best-practices-for-openrouter}

- **Tudja meg a szolgáltató cache-előzőjét**: Minden szolgáltatónek más mechanizmusa van
- **Tesztelje a cache-előző viselkedést**: Ellenőrizze, hogy a cache-elés működik-e a választott szolgáltatójával
- **Követje nyomon a költségeket**: Figyelje a cache-elésből származó megtakarításokat
- **Használjon konzisztens modelleket**: A modellváltás megszakítja a cache találatokat

## Vertex Anthropic: Prompt Cache-elés Cache-kontrollral {#vertex-anthropic-prompt-caching-with-cache-control}

A Vertex Anthropic (Google Cloud) támogatja a prompt cache-elést explicit cache-kontrollral.

### Konfiguráció {#configuration-3}

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

### Vertex Anthropic Cache-elés Használata {#using-vertex-anthropic-caching}

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

// A válasz tartalmazza a cache metrikáit:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Kontroll Típusok {#cache-control-types}

- **ephemeral**: Cache a kérés időtartamára (alapértelmezett)
- **persistent**: Cache több kérésen keresztül (ha támogatott)

### Cache Használatának Követése {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache létrehozva: $cache_created token\n";
echo "Cache olvasva: $cache_read token\n";
```

### Legjobb gyakorlatok Vertex Anthropic-hez {#best-practices-for-vertex-anthropic}

- **Használja az ephemeral cache-elést**: Jó a single-session cache-eléshez
- **Állítsa be megfelelő max_tokens-t**: Egyensúlya a cache méret és a költség között
- **Követje nyomon a cache metrikáinak**: Figyelje a cache hatékonyságát
- **Tesztelje a munkaterhelésével**: Ellenőrizze, hogy a cache-elés előnyben részesíti-e a felhasználási eseteit

## Szolgáltató-átlátó Cache-előző Stratégia {#cross-provider-caching-strategy}

### Egletes Konfiguráció {#unified-configuration}

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

### Szolgáltató-feldetekezés (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Használja a szolgáltató-specifikus cache-előző konfigurációt
```

### Visszaeső Stratégia (Fallback Strategy) {#fallback-strategy}

```php
try {
    // Próba a fő szolgáltató cache-előzővel
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Visszaesésre a cache-ment kérésre
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Költségoptimalizálás {#cost-optimization}

### Megtakarítási Számítás {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tipikus árazás (változik a szolgáltatótól függően):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x olcsóbb
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x olcsóbb
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Várható megtakarítás: \$$savings\n";
```

### Optimalizációs Tippek {#optimization-tips}

- **Cache-elje nagy rendszeres promptokat**: A legnagyobb költségmegtakarítás
- **Használja újra a kontextust**: Cache-elje a gyakran használt kontextus dokumentumokat
- **Csoportosítsa a kéréseket**: Csoportosítsa a hasonló kéréseket, hogy maximalizálja a cache találatokat
- **Követje nyomon a cache hatékonyságát**: Figyelje a tényleges megtakarításokat
- **Állítsa be az TTL-t**: Egyensúlya a költség és a frissesség között

## Hibaelhárítás {#troubleshooting}

### A cache nem használatos {#cache-not-being-used}

- Ellenőrizze, hogy a cache-elés ki van kapcsolva a konfigurációban
- Ellenőrizze, hogy a promptok azonosak-e (a cache-elés pontos eşleştirést igényel)
- Ellenőrizze, hogy a cache nem érvénytelenült
- Ellenőrizze a szolgáltató-specifikus cache-korlátokat

### Cache létrehozása sikertelen {#cache-creation-failing}

- Ellenőrizze, hogy a cache mérete a szolgáltató korlátainak belül van
- Ellenőrizze, hogy a cache-kontroll szintaxis helyes
- Győződjön meg róla, hogy a szolgáltató támogatja a cache-elést az adott modellhez
- Nézze át a szolgáltató dokumentációját a korlátozások tekintetében

### Előre nem látott költségek {#unexpected-costs}

- Követje nyomon a cache létrehozás és a cache olvasás tokenjainak arányát
- Ellenőrizze, hogy a cache ténylegesen használatos-e
- Nézze meg a cache hiányokat a prompt változások miatt
- Fontos lehet az TTL vagy a cache-előző stratégiájának áttekintése

## Szolgáltató Össравниztábla {#provider-comparison}

| Funkció | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP fejlécek | Szolgáltató-specifikus | Cache-kontroll |
| | | | | |

***

*(Megjegyzés: A táblázatban a szövegforrásból származó szöveg hiányosságok miatt a második sorban a szöveg másolásakor oluşan szűkítés vagy elírások miatt a szöveg tartalma azonos marad, de a vizuális megjelenése eltérhet.)*
