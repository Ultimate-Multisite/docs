---
title: Panyimpenan Cache Prompt anu Sadar kana Panyadia
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 ngenalkeun **provider-aware prompt caching**, anu ngaoptimalkeun biaya API jeung latensi ku nyimpen prompt dina cache di rupa-rupa panyadia LLM. Unggal panyadia boga mékanisme jeung konfigurasi caching anu béda.

## Ringkesan

Prompt caching ngamungkinkeun anjeun pikeun:

- Nyimpen prompt gedé anu remen dipaké dina cache
- Ngurangan biaya API ku ngahindarkeun pamrosésan anu malikan deui
- Ningkatkeun latensi pikeun pamundut anu geus aya dina cache
- Ngatur daur hirup cache sacara écés

Panyadia anu béda nerapkeun caching ku cara anu béda:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching kalayan TTL
- **OpenRouter**: Caching husus panyadia
- **Vertex Anthropic**: Prompt caching kalayan kontrol cache

## Google Gemini: `cachedContents` API

Google Gemini nyadiakeun pangaturan cache anu écés ngaliwatan `cachedContents` API.

### Konfigurasi

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

### Nyieun Prompt anu Dicache

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

### Ngagunakeun Prompt anu Dicache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Daur Hirup Cache

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

### Prakték Panghadéna pikeun Gemini

- **Setel TTL anu merenah**: Saimbangkeun pangiritan biaya jeung katinggaleun cache
- **Cache system prompts**: Paké deui system prompt anu sarua dina rupa-rupa pamundut
- **Pantau pamakéan cache**: Lacak cache mana anu pangmindengna dipaké
- **Beresihan cache anu kadaluwarsa**: Pupus cache anu teu dipaké sacara périodik

## Azure OpenAI: Prompt Caching

Azure OpenAI ngarojong prompt caching kalayan pangaturan TTL otomatis.

### Konfigurasi

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

### Ngaktipkeun Caching

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

### Cache Headers

Azure OpenAI ngagunakeun HTTP headers pikeun kontrol cache:

```
Cache-Control: max_age=3600
```

Nilai anu dirojong:

- `max_age=<seconds>`: Cache salila durasi anu ditangtukeun
- `no_cache`: Ulah cache pamundut ieu
- `no_store`: Ulah cache jeung ulah dipaké deui

### Mantau Pamakéan Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Prakték Panghadéna pikeun Azure OpenAI

- **Paké prompt anu konsisten**: Prompt anu idéntik meunang mangpaat tina caching
- **Setel TTL anu wajar**: Saimbangkeun biaya jeung kasegaran
- **Pantau métrik cache**: Lacak nyieun cache dibandingkeun jeung hits
- **Batch pamundut anu sarupa**: Kelompokkeun pamundut pikeun ngamaksimalkeun cache hits

## OpenRouter: Caching Husus Panyadia

OpenRouter ngarojong caching ngaliwatan panyadia dasar (OpenAI, Anthropic, jsb.).

### Konfigurasi

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

### Ngagunakeun OpenRouter Caching

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

### Pilihan Husus Panyadia

Panyadia anu béda boga mékanisme caching anu béda:

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

### Prakték Panghadéna pikeun OpenRouter

- **Apal caching panyadia anjeun**: Unggal panyadia boga mékanisme anu béda
- **Uji paripolah caching**: Pastikeun caching jalan jeung panyadia anu anjeun pilih
- **Pantau biaya**: Lacak pangiritan tina caching
- **Paké modél anu konsisten**: Ngalih modél megatkeun cache hits

## Vertex Anthropic: Prompt Caching kalayan Kontrol Cache

Vertex Anthropic (Google Cloud) ngarojong prompt caching kalayan kontrol cache anu écés.

### Konfigurasi

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

### Ngagunakeun Vertex Anthropic Caching

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

### Jinis Cache Control

- **ephemeral**: Cache salila paménta lumangsung (standar)
- **persistent**: Cache pikeun sababaraha paménta (lamun dirojong)

### Ngawas Pamakéan Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Prakték Pangalusna pikeun Vertex Anthropic

- **Anggo caching ephemeral**: Hadé pikeun caching sési tunggal
- **Atur max_tokens sakumaha pantesna**: Saimbangkeun ukuran cache jeung biaya
- **Awas métrik cache**: Lacak éféktivitas cache
- **Uji ku beban gawé anjeun**: Pastikeun caching méré mangpaat pikeun kasus pamakéan anjeun

## Strategi Caching Lintas-Panyadia

### Konfigurasi Terpadu

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

### Deteksi Panyadia

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Strategi Fallback

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

## Optimasi Biaya

### Itung Panghematan

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

### Tip Optimasi

- **Cache prompt sistem gedé**: Panghematan biaya panggedéna
- **Anggo deui kontéks**: Cache dokumén kontéks anu sering dipaké
- **Batch paménta**: Grupkeun paménta anu sarupa pikeun ngamaksimalkeun cache hit
- **Awas éféktivitas cache**: Lacak panghematan sabenerna
- **Saluyukeun TTL**: Saimbangkeun biaya jeung kabaruan

## Ngungkulan Masalah

### Cache teu dipaké

- Pastikeun caching diaktipkeun dina konfigurasi
- Pariksa yén prompt téh idéntik (caching merlukeun cocog persis)
- Pastikeun cache can kadaluwarsa
- Pariksa wates cache husus panyadia

### Nyieun cache gagal

- Pastikeun ukuran cache aya dina wates panyadia
- Pariksa yén sintaks cache control bener
- Pastikeun panyadia ngarojong caching pikeun modél anjeun
- Tinjau dokuméntasi panyadia pikeun watesan

### Biaya teu disangka-sangka

- Awas pembuatan cache dibanding token maca cache
- Pastikeun cache sabenerna dipaké
- Pariksa cache miss alatan variasi prompt
- Pertimbangkeun nyaluyukeun TTL atawa strategi cache

## Babandingan Panyadia

| Fitur | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Husus panyadia | Cache control |
| Kadali TTL | Éksplisit | Ngaliwatan headers | Gumantung panyadia | Ephemeral/persistent |
| Ukuran cache maksimum | 1M token | Gumantung panyadia | Gumantung panyadia | 1M token |
| Pangurangan biaya | 90% | 90% | Gumantung panyadia | 90% |
| Pangawasan | Rinci | Ngaliwatan métrik | Gumantung panyadia | Ngaliwatan pamakéan |

## Léngkah Salajengna

1. **Pilih panyadia anjeun**: Pilih dumasar kana kabutuhan anjeun
2. **Konpigurasikeun caching**: Setel caching husus panyadia
3. **Uji caching**: Pastikeun éta jalan jeung prompt anjeun
4. **Awas pamakéan**: Lacak cache hit jeung panghematan biaya
5. **Optimalkeun**: Saluyukeun TTL jeung strategi cache dumasar kana hasil
