---
title: Penyimpanan Cache Prompt Sadar Penyedia
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt Caching Sadar Penyedia

Superdav AI Agent v1.12.0 memperkenalkan **provider-aware prompt caching**, yang mengoptimalkan biaya API dan latensi dengan menyimpan (caching) prompt di berbagai provider LLM. Setiap provider memiliki mekanisme dan konfigurasi caching yang berbeda.

## Gambaran Umum {#overview}

Prompt caching memungkinkan Anda untuk:

- Menyimpan prompt besar yang sering digunakan
- Mengurangi biaya API dengan menghindari pemrosesan yang berulang
- Meningkatkan latensi untuk permintaan yang di-cache
- Mengelola siklus hidup cache secara eksplisit

Berbagai provider menerapkan caching secara berbeda:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Prompt caching dengan TTL
- **OpenRouter**: Caching spesifik provider
- **Vertex Anthropic**: Prompt caching dengan kontrol cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini menyediakan manajemen cache eksplisit melalui API `cachedContents`.

### Konfigurasi {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 jam dalam detik
        'max_tokens' => 1000000, // Maksimal token yang di-cache
    ],
];
```

### Membuat Prompt yang Di-cache {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Anda adalah asisten yang membantu...',
        'context' => 'Dokumen konteks besar...',
        'ttl' => 3600,
    ]
);

// Mengembalikan: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Menggunakan Prompt yang Di-cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Pertanyaan pengguna di sini',
    ]
);
```

### Siklus Hidup Cache {#cache-lifecycle}

```php
// Daftar konten yang di-cache
$caches = $gemini->list_cached_contents();

// Mendapatkan detail cache
$cache = $gemini->get_cached_content( 'abc123' );

// Memperpanjang TTL cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Diperpanjang menjadi 2 jam
);

// Menghapus cache
$gemini->delete_cached_content( 'abc123' );
```

### Praktik Terbaik untuk Gemini {#best-practices-for-gemini}

- **Atur TTL yang sesuai**: Seimbangkan penghematan biaya vs. kedaluwarsa cache
- **Cache prompt sistem**: Gunakan kembali prompt sistem yang sama di berbagai permintaan
- **Pantau penggunaan cache**: Lacak cache mana yang paling sering digunakan
- **Bersihkan cache kedaluwarsa**: Hapus cache yang tidak terpakai secara berkala

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI mendukung prompt caching dengan manajemen TTL otomatis.

### Konfigurasi {#configuration-1}

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

### Mengaktifkan Caching {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Anda adalah asisten yang membantu...',
        'context' => 'Dokumen konteks besar...',
        'prompt' => 'Pertanyaan pengguna di sini',
        'cache_control' => 'max_age=3600',
    ]
);

// Respons mencakup penggunaan cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Header Cache {#cache-headers}

Azure OpenAI menggunakan header HTTP untuk kontrol cache:

```
Cache-Control: max_age=3600
```

Nilai yang didukung:

- `max_age=<detik>`: Cache selama durasi yang ditentukan
- `no_cache`: Jangan cache permintaan ini
- `no_store`: Jangan cache dan jangan gunakan kembali

### Memantau Penggunaan Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Pembuatan cache: $cache_tokens token\n";
echo "Akses cache: $cache_hits token\n";
```

### Praktik Terbaik untuk Azure OpenAI {#best-practices-for-azure-openai}

- **Gunakan prompt yang konsisten**: Prompt yang identik mendapat manfaat dari caching
- **Atur TTL yang masuk akal**: Seimbangkan biaya vs. kesegaran data
- **Pantau metrik cache**: Lacak pembuatan cache vs. akses cache
- **Kelompokkan permintaan serupa**: Kelompokkan permintaan untuk memaksimalkan *cache hits*

## OpenRouter: Caching Spesifik Provider {#openrouter-provider-specific-caching}

OpenRouter mendukung caching melalui provider yang mendasarinya (OpenAI, Anthropic, dll.).

### Konfigurasi {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Menggunakan caching OpenAI
    ],
];
```

### Menggunakan Caching OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Anda adalah asisten yang membantu...',
        'context' => 'Dokumen konteks besar...',
        'prompt' => 'Pertanyaan pengguna di sini',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Opsi Spesifik Provider {#provider-specific-options}

Berbagai provider memiliki mekanisme caching yang berbeda:

```php
// Caching kompatibel OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caching kompatibel Anthropic
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

### Praktik Terbaik untuk OpenRouter {#best-practices-for-openrouter}

- **Pahami caching provider Anda**: Setiap provider memiliki mekanisme yang berbeda
- **Uji perilaku caching**: Verifikasi caching berfungsi dengan provider pilihan Anda
- **Pantau biaya**: Lacak penghematan dari caching
- **Gunakan model yang konsisten**: Mengganti model akan memutus *cache hits*

## Vertex Anthropic: Prompt Caching dengan Kontrol Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) mendukung prompt caching dengan kontrol cache eksplisit.

### Konfigurasi {#configuration-3}

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

### Menggunakan Caching Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Anda adalah asisten yang membantu...',
        'context' => 'Dokumen konteks besar...',
        'prompt' => 'Pertanyaan pengguna di sini',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Respons mencakup metrik cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Jenis Kontrol Cache {#cache-control-types}

- **ephemeral**: Cache selama durasi permintaan (default)
- **persistent**: Cache di berbagai permintaan (jika didukung)

### Memantau Penggunaan Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache dibuat: $cache_created token\n";
echo "Cache dibaca: $cache_read token\n";
```

### Praktik Terbaik untuk Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Gunakan ephemeral caching**: Baik untuk caching sesi tunggal
- **Atur max_tokens dengan tepat**: Seimbangkan ukuran cache vs. biaya
- **Pantau metrik cache**: Lacak efektivitas cache
- **Uji dengan beban kerja Anda**: Verifikasi caching menguntungkan kasus penggunaan Anda

## Strategi Caching Lintas Provider {#cross-provider-caching-strategy}

### Konfigurasi Terpadu {#unified-configuration}

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

### Deteksi Provider {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Menggunakan konfigurasi caching spesifik provider
```

### Strategi Fallback {#fallback-strategy}

```php
try {
    // Mencoba caching dengan provider utama
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Fallback ke permintaan tanpa cache
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimalisasi Biaya {#cost-optimization}

### Menghitung Penghematan {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Harga tipikal (bervariasi per provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x lebih murah
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x lebih murah
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimasi penghematan: \$$savings\n";
```

### Tips Optimalisasi {#optimization-tips}

- **Cache prompt sistem besar**: Penghematan biaya terbesar
- **Gunakan kembali konteks**: Cache dokumen konteks yang sering digunakan
- **Kelompokkan permintaan**: Kelompokkan permintaan serupa untuk memaksimalkan *cache hits*
- **Pantau efektivitas cache**: Lacak penghematan aktual
- **Sesuaikan TTL**: Seimbangkan biaya vs. kesegaran data

## Pemecahan Masalah {#troubleshooting}

### Cache tidak digunakan {#cache-not-being-used}

- Verifikasi bahwa caching diaktifkan dalam konfigurasi
- Periksa bahwa prompt identik (caching memerlukan kecocokan yang tepat)
- Verifikasi bahwa cache belum kedaluwarsa
- Periksa batas cache spesifik provider

### Kegagalan pembuatan cache {#cache-creation-failing}

- Verifikasi bahwa ukuran cache berada dalam batas provider
- Periksa bahwa sintaks `cache control` sudah benar
- Pastikan provider mendukung caching untuk model Anda
- Tinjau dokumentasi provider untuk batasan

### Biaya tak terduga {#unexpected-costs}

- Pantau token pembuatan cache vs. token baca cache
- Verifikasi bahwa cache benar-benar digunakan
- Periksa *cache misses* karena variasi prompt
- Pertimbangkan untuk menyesuaikan TTL atau strategi cache

## Perbandingan Provider {#provider-comparison}

| Fitur | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Cache | cachedContents | HTTP headers | Provider-specific | Cache control |
| Kontrol TTL | Eksplisit | Melalui header | Tergantung provider | Ephemeral/persistent |
| Ukuran cache maks | 1M token | Tergantung provider | Tergantung provider | 1M token |
| Pengurangan biaya | 90% | 90% | Tergantung provider | 90% |
| Pemantauan | Detail | Melalui metrik | Tergantung provider | Melalui penggunaan |

## Langkah Selanjutnya {#next-steps}

1. **Pilih provider Anda**: Pilih berdasarkan kebutuhan Anda
2. **Konfigurasi caching**: Atur caching spesifik provider
3. **Uji caching**: Verifikasi berfungsi dengan prompt Anda
4. **Pantau penggunaan**: Lacak *cache hits* dan penghematan biaya
5. **Optimalkan**: Sesuaikan TTL dan strategi cache berdasarkan hasil
