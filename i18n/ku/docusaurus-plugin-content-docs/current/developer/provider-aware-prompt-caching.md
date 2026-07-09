---
title: Cachekirina Daxwazê ya Li Gorî Dabînkerê
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cachekirina Prompt ya Li Gorî Provider

Superdav AI Agent v1.12.0 **cachekirina prompt ya li gorî provider** dide nasîn, ku lêçûnên API û derengmayînê bi cachekirina promptan di navbera providerên cuda yên LLM de baştir dike. Her provider mekanîzma û mîhengên cachekirinê yên cuda hene.

## Kurte

Cachekirina prompt dihêle hûn:

- Promptên mezin û pir-car-têne-bikaranîn cache bikin
- Lêçûnên API kêm bikin bi dûrketin ji pêvajoyên dubare
- Derengmayînê ji bo daxwazên cachekirî baştir bikin
- Jiyana cache bi awayekî eşkere bi rê ve bibin

Providerên cuda cachekirinê bi awayên cuda pêk tînin:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Cachekirina prompt bi TTL
- **OpenRouter**: Cachekirina taybet bi provider
- **Vertex Anthropic**: Cachekirina prompt bi kontrola cache

## Google Gemini: cachedContents API

Google Gemini bi riya `cachedContents` API rêvebirina cache ya eşkere peyda dike.

### Mîheng

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

### Afirandina Promptek Cachekirî

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

### Bikaranîna Promptek Cachekirî

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Jiyana Cache

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

### Rêbazên Baş ji bo Gemini

- **TTL ya guncaw danîn**: Di navbera qezenca lêçûnê û kevnbûna cache de hevsengî çêkin
- **Promptên sîstemê cache bikin**: Heman prompta sîstemê di nav daxwazan de ji nû ve bi kar bînin
- **Bikaranîna cache bişopînin**: Bişopînin kîjan cache herî zêde têne bikaranîn
- **Cacheên demborî pak bikin**: Cacheên nedihatine bikaranîn bi demdemî jê bibin

## Azure OpenAI: Cachekirina Prompt

Azure OpenAI cachekirina prompt bi rêvebirina TTL ya bixweber piştgirî dike.

### Mîheng

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

### Çalakkirina Cachekirinê

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

### Headerên Cache

Azure OpenAI ji bo kontrola cache headerên HTTP bi kar tîne:

```
Cache-Control: max_age=3600
```

Nirxên tên piştgirîkirin:

- `max_age=<seconds>`: Ji bo heyama diyarkirî cache bike
- `no_cache`: Vê daxwazê cache neke
- `no_store`: Cache neke û ji nû ve bi kar neyne

### Şopandina Bikaranîna Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Rêbazên Baş ji bo Azure OpenAI

- **Promptên yekgirtî bi kar bînin**: Promptên wekhev ji cachekirinê sûdê dibînin
- **TTL ya maqûl danîn**: Di navbera lêçûn û nûbûnê de hevsengî çêkin
- **Metrîkên cache bişopînin**: Afirandina cache li hember hitan bişopînin
- **Daxwazên dişibin hev kom bikin**: Daxwazan kom bikin da ku hitên cache herî zêde bibin

## OpenRouter: Cachekirina Taybet bi Provider

OpenRouter cachekirinê bi riya providerên binyadî (OpenAI, Anthropic, hwd.) piştgirî dike.

### Mîheng

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

### Bikaranîna Cachekirina OpenRouter

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

### Vebijêrkên Taybet bi Provider

Providerên cuda mekanîzmayên cachekirinê yên cuda hene:

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

### Rêbazên Baş ji bo OpenRouter

- **Cachekirina providerê xwe nas bikin**: Her provider mekanîzmayên cuda hene
- **Reftara cachekirinê biceribînin**: Piştrast bikin cachekirin bi providerê we yê hilbijartî dixebite
- **Lêçûnan bişopînin**: Qezenca ji cachekirinê bişopînin
- **Modelên yekgirtî bi kar bînin**: Guhertina modelan hitên cache dişkîne

## Vertex Anthropic: Cachekirina Prompt bi Kontrola Cache

Vertex Anthropic (Google Cloud) cachekirina prompt bi kontrola cache ya eşkere piştgirî dike.

### Mîheng

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

### Bikaranîna Vertex Anthropic Caching

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

### Cureyên Kontrola Cache

- **ephemeral**: Cache ji bo dema daxwazê (bi xweber)
- **persistent**: Cache di navbera gelek daxwazan de (eger piştgirî hebe)

### Şopandina Bikaranîna Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Rêbazên Herî Baş ji bo Vertex Anthropic

- **Cacheya ephemeral bi kar bîne**: Ji bo cacheya yek-danîşînê baş e
- **max_tokens bi awayekî guncan saz bike**: Mezinahiya cache û lêçûnê hevseng bike
- **Metriyên cache bişopîne**: Karîgeriya cache bişopîne
- **Bi barê xwe re biceribîne**: Piştrast bike ku caching ji rewşa bikaranîna te re sûd dide

## Stratejiya Caching di Navbera Peydakêran de

### Veavakirina Yekgirtî

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

### Nasandina Peydakêr

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Stratejiya Cîgir

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

## Başkirina Lêçûnê

### Hesabkirina Teserûfê

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

### Şîretên Başkirinê

- **System promptên mezin cache bike**: Mezintirîn teserûfa lêçûnê
- **Contextê dubare bi kar bîne**: Belgeyên contextê yên pir têne bikaranîn cache bike
- **Daxwazan bi kom bike**: Daxwazên wekhev kom bike da ku cache hit zêde bibin
- **Karîgeriya cache bişopîne**: Teserûfa rastîn bişopîne
- **TTL biguherîne**: Lêçûn û nûtîbûnê hevseng bike

## Çareserkirina Pirsgirêkan

### Cache nayê bikaranîn

- Piştrast bike ku caching di veavakirinê de çalak e
- Kontrol bike ku prompt yek in (caching hevberdana tam dixwaze)
- Piştrast bike ku cache qediya nebûye
- Sînorên cache yên taybet bi peydakêr kontrol bike

### Afirandina cache têk diçe

- Piştrast bike ku mezinahiya cache di nav sînorên peydakêr de ye
- Kontrol bike ku syntaxa kontrola cache rast e
- Piştrast bike ku peydakêr ji bo modela te caching piştgirî dike
- Belgekirina peydakêr ji bo sînordariyan binirxîne

### Lêçûnên neçaverêkirî

- Afirandina cache li hember tokenên xwendina cache bişopîne
- Piştrast bike ku cache bi rastî tê bikaranîn
- Ji ber guhertoyên promptê cache miss kontrol bike
- Guhertina TTL an stratejiya cache bifikire

## Berawirdkirina Peydakêran

| Taybetmendî | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | Sernavên HTTP | Taybet bi peydakêr | Kontrola cache |
| Kontrola TTL | Eşkere | Bi sernavan | Girêdayî peydakêr | Ephemeral/persistent |
| Mezinahiya herî zêde ya cache | 1M token | Girêdayî peydakêr | Girêdayî peydakêr | 1M token |
| Kêmkirina lêçûnê | 90% | 90% | Girêdayî peydakêr | 90% |
| Şopandin | Hûrgulî | Bi metrikayan | Girêdayî peydakêr | Bi bikaranînê |

## Gavên Dû re

1. **Peydakêrê xwe hilbijêre**: Li gorî pêdiviyên xwe hilbijêre
2. **Caching veava bike**: Cachinga taybet bi peydakêr saz bike
3. **Caching biceribîne**: Piştrast bike ku bi promptên te re dixebite
4. **Bikaranînê bişopîne**: Cache hit û teserûfa lêçûnê bişopîne
5. **Baş bike**: Li gorî encaman TTL û stratejiya cache biguherîne
