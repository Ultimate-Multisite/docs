---
title: Penyimpanan Cache Prompt Sedar Penyedia
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Penyimpanan Cache Prompt Berdasarkan Provider

Superdav AI Agent v1.12.0 memperkenalkan **penyimpanan cache prompt berdasarkan provider** (*provider-aware prompt caching*), yang mengoptimumkan kos API dan latensi dengan menyimpan cache prompt merentasi pelbagai provider LLM. Setiap provider mempunyai mekanisme dan konfigurasi caching yang berbeza.

## Gambaran Keseluruhan

Penyimpanan cache prompt membolehkan anda untuk:

- Menyimpan cache prompt yang besar dan sering digunakan
- Mengurangkan kos API dengan mengelakkan pemprosesan yang berulang
- Meningkatkan latensi untuk permintaan yang di-cache
- Menguruskan kitaran hayat cache secara eksplisit

Setiap provider melaksanakan caching secara berbeza:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Penyimpanan cache prompt dengan TTL
- **OpenRouter**: Caching khusus provider
- **Vertex Anthropic**: Penyimpanan cache prompt dengan kawalan cache

## Google Gemini: API cachedContents

Google Gemini menyediakan pengurusan cache yang eksplisit melalui API `cachedContents`.

### Konfigurasi

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 jam dalam saat
        'max_tokens' => 1000000, // Token maksimum untuk di-cache
    ],
];
```

### Mencipta Prompt yang Di-cache

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

// Mengembalikan: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Menggunakan Prompt yang Di-cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Kitaran Hayat Cache

```php
// Senaraikan kandungan yang di-cache
$caches = $gemini->list_cached_contents();

// Dapatkan butiran cache
$cache = $gemini->get_cached_content( 'abc123' );

// Sambung semula TTL cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Sambung semula kepada 2 jam
);

// Padam cache
$gemini->delete_cached_content( 'abc123' );
```

### Amalan Terbaik untuk Gemini

- **Tetapkan TTL yang sesuai**: Imbangkan penjimatan kos berbanding keusangan cache
- **Cache system prompts**: Gunakan semula system prompt yang sama merentasi permintaan
- **Pantau penggunaan cache**: Jejaki cache mana yang paling banyak digunakan
- **Bersihkan cache luput**: Padam cache yang tidak digunakan secara berkala

## Azure OpenAI: Penyimpanan Cache Prompt

Azure OpenAI menyokong penyimpanan cache prompt dengan pengurusan TTL automatik.

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

### Mengaktifkan Caching

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

// Respons termasuk penggunaan cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Header Cache

Azure OpenAI menggunakan header HTTP untuk kawalan cache:

```
Cache-Control: max_age=3600
```

Nilai yang disokong:

- `max_age=<seconds>`: Cache untuk tempoh yang ditetapkan
- `no_cache`: Jangan cache permintaan ini
- `no_store`: Jangan cache dan jangan guna semula

### Memantau Penggunaan Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Amalan Terbaik untuk Azure OpenAI

- **Gunakan prompt yang konsisten**: Prompt yang sama mendapat manfaat daripada caching
- **Tetapkan TTL yang munasabah**: Imbangkan kos berbanding kesegaran
- **Pantau metrik cache**: Jejaki penciptaan cache berbanding kejayaan bacaan cache
- **Kumpulkan permintaan serupa**: Kumpulkan permintaan untuk memaksimumkan kejayaan cache

## OpenRouter: Caching Khusus Provider

OpenRouter menyokong caching melalui provider asas (OpenAI, Anthropic, dsb.).

### Konfigurasi

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Gunakan caching OpenAI
    ],
];
```

### Menggunakan Caching OpenRouter

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

Provider yang berbeza mempunyai mekanisme caching yang berbeza:

```php
// Caching serasi OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caching serasi Anthropic
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

### Amalan Terbaik untuk OpenRouter

- **Ketahui caching provider anda**: Setiap provider mempunyai mekanisme yang berbeza
- **Uji tingkah laku caching**: Sahkan caching berfungsi dengan provider pilihan anda
- **Pantau kos**: Jejaki penjimatan daripada caching
- **Gunakan model yang konsisten**: Menukar model akan memecahkan kejayaan cache

## Vertex Anthropic: Penyimpanan Cache Prompt dengan Kawalan Cache

Vertex Anthropic (Google Cloud) menyokong penyimpanan cache prompt dengan kawalan cache yang eksplisit.

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

### Menggunakan Caching Vertex Anthropic

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

// Respons termasuk metrik cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Jenis Kawalan Cache

- **ephemeral**: Cache untuk tempoh permintaan (lalai)
- **persistent**: Cache merentasi pelbagai permintaan (jika disokong)

### Memantau Penggunaan Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Amalan Terbaik untuk Vertex Anthropic

- **Gunakan caching ephemeral**: Bagus untuk caching sesi tunggal
- **Tetapkan max_tokens dengan sesuai**: Imbangkan saiz cache berbanding kos
- **Pantau metrik cache**: Jejaki keberkesanan cache
- **Uji dengan beban kerja anda**: Sahkan caching memberi manfaat kepada kes penggunaan anda

## Strategi Caching Merentasi Provider

### Konfigurasi Bersepadu

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

### Pengesanan Provider

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Gunakan konfigurasi caching khusus provider
```

### Strategi Fallback

```php
try {
    // Cuba cache dengan provider utama
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fall back kepada permintaan tanpa cache
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Pengoptimuman Kos

### Kira Penjimatan

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Harga tipikal (berbeza mengikut provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x lebih murah
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x lebih murah
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### Tips Pengoptimuman

- **Cache system prompts yang besar**: Penjimatan kos terbesar
- **Guna semula konteks**: Cache dokumen konteks yang sering digunakan
- **Kumpulkan permintaan**: Kumpulkan permintaan serupa untuk memaksimumkan kejayaan cache
- **Pantau keberkesanan cache**: Jejaki penjimatan sebenar
- **Laraskan TTL**: Imbangkan kos berbanding kesegaran

## Penyelesaian Masalah

### Cache tidak digunakan

- Sahkan caching diaktifkan dalam konfigurasi
- Semak bahawa prompt adalah sama (caching memerlukan padanan yang tepat)
- Sahkan cache belum luput
- Semak had cache khusus provider

### Kegagalan penciptaan cache

- Sahkan saiz cache berada dalam had provider
- Semak sintaks `cache_control` adalah betul
- Pastikan provider menyokong caching untuk model anda
- Semak dokumentasi provider untuk had-had

### Kos yang tidak dijangka

- Pantau token penciptaan cache berbanding token bacaan cache
- Sahkan cache benar-benar digunakan
- Semak cache miss kerana variasi prompt
- Pertimbangkan untuk melaraskan TTL atau strategi cache

## Perbandingan Provider

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Langkah Seterusnya

1. **Pilih provider anda**: Pilih berdasarkan keperluan anda
2. **Konfigurasi caching**: Sediakan caching khusus provider
3. **Uji caching**: Sahkan ia berfungsi dengan prompt anda
4. **Pantau penggunaan**: Jejaki kejayaan cache dan penjimatan kos
5. **Optimumkan**: Laraskan TTL dan strategi cache berdasarkan keputusan
