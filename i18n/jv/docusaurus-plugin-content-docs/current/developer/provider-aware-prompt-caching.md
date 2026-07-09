---
title: Panyimpenan Cache Prompt sing Nggatekake Panyedhiya
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cache Prompt sing Ngerti Provider

Superdav AI Agent v1.12.0 ngenalake **cache prompt sing ngerti provider**, sing ngoptimalake biaya API lan latensi kanthi nge-cache prompt ing macem-macem provider LLM. Saben provider nduweni mekanisme lan konfigurasi cache sing beda-beda.

## Ringkesan

Cache prompt ngidini sampeyan kanggo:

- Nge-cache prompt gedhe sing kerep digunakake
- Ngurangi biaya API kanthi ngindhari pangolahan sing bola-bali
- Ningkatake latensi kanggo panjaluk sing wis di-cache
- Ngatur siklus urip cache kanthi cetha

Provider sing beda-beda ngetrapake cache kanthi cara sing beda:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Cache prompt nganggo TTL
- **OpenRouter**: Cache khusus provider
- **Vertex Anthropic**: Cache prompt nganggo kontrol cache

## Google Gemini: API cachedContents

Google Gemini nyedhiyakake pangaturan cache kanthi cetha liwat API `cachedContents`.

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

### Nggawe Prompt sing Di-cache

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

### Nggunakake Prompt sing Di-cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Siklus Urip Cache

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

### Praktik Paling Apik kanggo Gemini

- **Setel TTL sing cocog**: Imbangna penghematan biaya vs. cache sing wis ora seger
- **Cache prompt sistem**: Gunakake maneh prompt sistem sing padha ing antarane panjaluk
- **Pantau panggunaan cache**: Lacak cache endi sing paling kerep digunakake
- **Resiki cache sing kadaluwarsa**: Mbusak cache sing ora digunakake kanthi berkala

## Azure OpenAI: Cache Prompt

Azure OpenAI ndhukung cache prompt nganggo pangaturan TTL otomatis.

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

### Ngaktifake Cache

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

### Header Cache

Azure OpenAI nggunakake header HTTP kanggo kontrol cache:

```
Cache-Control: max_age=3600
```

Nilai sing didhukung:

- `max_age=<seconds>`: Cache sajrone durasi sing ditemtokake
- `no_cache`: Aja nge-cache panjaluk iki
- `no_store`: Aja nge-cache lan aja digunakake maneh

### Mantau Panggunaan Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Praktik Paling Apik kanggo Azure OpenAI

- **Gunakake prompt sing konsisten**: Prompt sing identik entuk manfaat saka cache
- **Setel TTL sing lumrah**: Imbangna biaya vs. kesegaran
- **Pantau metrik cache**: Lacak nggawe cache vs. hit
- **Batch panjaluk sing padha**: Kelompokake panjaluk kanggo maksimalake hit cache

## OpenRouter: Cache Khusus Provider

OpenRouter ndhukung cache liwat provider dhasar (OpenAI, Anthropic, lsp.).

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

### Nggunakake Cache OpenRouter

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

### Pilihan Khusus Provider

Provider sing beda-beda nduweni mekanisme cache sing beda:

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

### Praktik Paling Apik kanggo OpenRouter

- **Ngerteni cache provider sampeyan**: Saben provider nduweni mekanisme sing beda
- **Tes prilaku cache**: Priksa manawa cache bisa mlaku karo provider sing sampeyan pilih
- **Pantau biaya**: Lacak penghematan saka cache
- **Gunakake model sing konsisten**: Ngganti model ngrusak hit cache

## Vertex Anthropic: Cache Prompt nganggo Kontrol Cache

Vertex Anthropic (Google Cloud) ndhukung cache prompt nganggo kontrol cache sing cetha.

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

### Nggunakake Caching Vertex Anthropic

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

### Jinis Kontrol Cache

- **ephemeral**: Cache sajrone panyuwunan (gawan)
- **persistent**: Cache ing pirang-pirang panyuwunan (yen didhukung)

### Ngawasi Panggunaan Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Praktik Paling Apik kanggo Vertex Anthropic

- **Gunakake ephemeral caching**: Apik kanggo caching siji sesi
- **Setel max_tokens kanthi trep**: Imbangna ukuran cache karo biaya
- **Awasi metrik cache**: Lacak efektifitas cache
- **Tes nganggo beban kerja sampeyan**: Priksa manawa caching migunani kanggo kasus panggunaan sampeyan

## Strategi Caching Lintas-Panyedhiya

### Konfigurasi Manunggal

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

### Deteksi Panyedhiya

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Strategi Cadangan

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

### Ngitung Penghematan

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

### Tips Optimasi

- **Cache system prompts gedhe**: Penghematan biaya paling gedhe
- **Gunakake maneh konteks**: Cache dokumen konteks sing kerep digunakake
- **Batch panyuwunan**: Klompokna panyuwunan sing padha kanggo maksimalake cache hits
- **Awasi efektifitas cache**: Lacak penghematan nyata
- **Atur TTL**: Imbangna biaya karo kesegaran

## Ngatasi Masalah

### Cache ora digunakake

- Priksa manawa caching diaktifake ing konfigurasi
- Priksa manawa prompts padha persis (caching mbutuhake kecocokan persis)
- Priksa manawa cache durung kadaluwarsa
- Priksa watesan cache khusus panyedhiya

### Pembuatan cache gagal

- Priksa manawa ukuran cache isih ana ing watesan panyedhiya
- Priksa manawa sintaks kontrol cache bener
- Mesthekake panyedhiya ndhukung caching kanggo model sampeyan
- Deleng dokumentasi panyedhiya kanggo watesan

### Biaya ora dikarepake

- Awasi pembuatan cache dibandhingake cache read tokens
- Priksa manawa cache pancen digunakake
- Priksa cache misses amarga variasi prompt
- Coba atur TTL utawa strategi cache

## Perbandingan Panyedhiya

| Fitur | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Khusus panyedhiya | Kontrol cache |
| Kontrol TTL | Eksplisit | Liwat headers | Gumantung panyedhiya | Ephemeral/persistent |
| Ukuran cache maksimal | 1M tokens | Gumantung panyedhiya | Gumantung panyedhiya | 1M tokens |
| Pangurangan biaya | 90% | 90% | Gumantung panyedhiya | 90% |
| Pangawasan | Rinci | Liwat metrik | Gumantung panyedhiya | Liwat panggunaan |

## Langkah Sabanjure

1. **Pilih panyedhiya sampeyan**: Pilih adhedhasar kabutuhan sampeyan
2. **Konfigurasi caching**: Setel caching khusus panyedhiya
3. **Tes caching**: Priksa manawa bisa digunakake karo prompts sampeyan
4. **Awasi panggunaan**: Lacak cache hits lan penghematan biaya
5. **Optimalake**: Atur TTL lan strategi cache adhedhasar asil
