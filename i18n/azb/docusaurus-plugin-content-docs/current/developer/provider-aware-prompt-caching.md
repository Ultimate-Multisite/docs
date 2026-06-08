---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Sağlayıcıya Özel Prompt Önbellekleme

Superdav AI Agent v1.12.0, farklı LLM sağlayıcıları arasında prompt'ları önbelleğe alarak API maliyetlerini ve gecikmeyi optimize eden **sağlayıcıya özel prompt önbellekleme** özelliğini getiriyor. Her sağlayıcının farklı önbellekleme mekanizmaları ve yapılandırmaları vardır.

## Genel Bakış

Prompt önbellekleme sayesinde şunları yapabilirsiniz:

- Sık kullanılan büyük prompt'ları önbelleğe almak
- Gereksiz işlemleri engelleyerek API maliyetlerini düşürmek
- Önbelleğe alınmış istekler için gecikmeyi iyileştirmek
- Önbellek yaşam döngüsünü açıkça yönetmek

Farklı sağlayıcılar önbellekleme özelliğini farklı şekillerde uyguluyor:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL ile Prompt önbellekleme
- **OpenRouter**: Sağlayıcıya özel önbellekleme
- **Vertex Anthropic**: Önbellek kontrolü ile Prompt önbellekleme

## Google Gemini: cachedContents API

Google Gemini, `cachedContents` API aracılığıyla açık önbellek yönetimi sağlar.

### Yapılandırma

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 saat saniye cinsinden
        'max_tokens' => 1000000, // Önbelleklenebilecek maksimum token
    ],
];
```

### Önbelleklenmiş Prompt Oluşturma

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Yardımcı bir asistan olduğunuzu varsayın...',
        'context' => 'Büyük bağlam belgesi...',
        'ttl' => 3600,
    ]
);

// Dönüş: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Önbelleklenmiş Prompt Kullanma

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Kullanıcı sorusu burada',
    ]
);
```

### Önbellek Yaşam Döngüsü

```php
// Önbelleklenmiş içerikleri listele
$caches = $gemini->list_cached_contents();

// Önbellek detaylarını al
$cache = $gemini->get_cached_content( 'abc123' );

// Önbellek TTL'sini uzat
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2 saate uzat
);

// Önbelleği sil
$gemini->delete_cached_content( 'abc123' );
```

### Gemini İçin En İyi Uygulamalar

- **Uygun TTL belirleyin**: Maliyet tasarrufu ile önbellek güncelliği arasında denge kurun
- **Sistem prompt'larını önbelleğe alın**: İstekler arasında aynı sistem prompt'unu yeniden kullanın
- **Önbellek kullanımını izleyin**: Hangi önbelleklerin en çok kullanıldığını takip edin
- **Süresi dolmuş önbellekleri temizleyin**: Kullanılmayan önbellekleri periyodik olarak silin

## Azure OpenAI: Prompt Önbellekleme

Azure OpenAI, otomatik TTL yönetimi ile prompt önbellekleme desteği sunar.

### Yapılandırma

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

### Önbellekleme Etkinleştirme

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Yardımcı bir asistan olduğunuzu varsayın...',
        'context' => 'Büyük bağlam belgesi...',
        'prompt' => 'Kullanıcı sorusu burada',
        'cache_control' => 'max_age=3600',
    ]
);

// Yanıt, önbellek kullanımını içerir:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Önbellek Başlıkları (Cache Headers)

Azure OpenAI, önbellek kontrolü için HTTP başlıkları kullanır:

```
Cache-Control: max_age=3600
```

Desteklenen değerler:

- `max_age=<saniye>`: Belirtilen süre boyunca önbellek tutar
- `no_cache`: Bu isteği önbelleğe alma
- `no_store`: Önbellekleme yapma ve yeniden kullanmama

### Önbellek Kullanımını İzleme

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Önbellek oluşturma: $cache_tokens token\n";
echo "Önbellek okuma: $cache_hits token\n";
```

### Azure OpenAI İçin En İyi Uygulamalar

- **Tutarlı prompt'lar kullanın**: Aynı prompt'lar önbelleklemeden faydalanır
- **Makul TTL belirleyin**: Maliyet ile tazelik arasında denge kurun
- **Önbellek metriklerini izleyin**: Önbellek oluşturma ile okuma sayısını takip edin
- **Benzer istekleri toplu işleyin**: Önbellek isabetini en üst düzeye çıkarmak için istekleri gruplayın

## OpenRouter: Sağlayıcıya Özel Önbellekleme

OpenRouter, alttaki sağlayıcılar (OpenAI, Anthropic vb.) aracılığıyla önbellekleme desteği sunar.

### Yapılandırma

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI'nin önbelleklemesini kullan
    ],
];
```

### OpenRouter Önbellekleme Kullanma

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Yardımcı bir asistan olduğunuzu varsayın...',
        'context' => 'Büyük bağlam belgesi...',
        'prompt' => 'Kullanıcı sorusu burada',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Sağlayıcıya Özel Seçenekler

Farklı sağlayıcıların farklı önbellekleme mekanizmaları vardır:

```php
// OpenAI uyumlu önbellekleme
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic uyumlu önbellekleme
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

### OpenRouter İçin En İyi Uygulamalar

- **Sağlayıcınızın önbelleklemesini bilin**: Her sağlayıcının farklı mekanizmaları vardır
- **Önbellekleme davranışını test edin**: Seçtiğiniz sağlayıcıyla önbelleklemenin çalıştığından emin olun
- **Maliyetleri izleyin**: Önbelleklemeden elde edilen tasarrufları takip edin
- **Tutarlı modeller kullanın**: Model değiştirmek önbellek isabetini bozar

## Vertex Anthropic: Önbellek Kontrollü Prompt Önbellekleme

Vertex Anthropic (Google Cloud), açık önbellek kontrolü ile prompt önbellekleme desteği sunar.

### Yapılandırma

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

### Vertex Anthropic Önbellekleme Kullanma

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Yardımcı bir asistan olduğunuzu varsayın...',
        'context' => 'Büyük bağlam belgesi...',
        'prompt' => 'Kullanıcı sorusu burada',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Yanıt, önbellek metriklerini içerir:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Önbellek Kontrol Türleri

- **ephemeral**: İstek süresi boyunca önbellek tutar (varsayılan)
- **persistent**: Birden fazla istek boyunca önbellek tutar (desteklenirse)

### Önbellek Kullanımını İzleme

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Oluşturulan önbellek: $cache_created token\n";
echo "Okunan önbellek: $cache_read token\n";
```

### Vertex Anthropic İçin En İyi Uygulamalar

- **Ephemeral önbellekleme kullanın**: Tek oturum önbelleklemesi için iyidir
- **max_tokens'ı uygun şekilde ayarlayın**: Önbellek boyutu ile maliyet arasında denge kurun
- **Önbellek metriklerini izleyin**: Önbellek etkinliğini takip edin
- **İş yükünüzle test edin**: Önbelleklemenin kullanım senaryonuza fayda sağladığını doğrulayın

## Sağlayıcılar Arası Önbellekleme Stratejisi

### Birleştirilmiş Yapılandırma

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

### Sağlayıcı Algılama

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Sağlayıcıya özel önbellekleme yapılandırmasını kullan
```

### Geri Dönüş Stratejisi

```php
try {
    // Birincil sağlayıcı ile önbellekleme yapmayı dene
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Önbelleksiz isteğe geri dön
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Maliyet Optimizasyonu

### Tasarrufu Hesaplama

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tipik fiyatlandırma (sağlayıcıya göre değişir):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 kat daha ucuz
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 kat daha ucuz
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Tahmini tasarruf: \$$savings\n";
```

### Optimizasyon İpuçları

- **Büyük sistem prompt'larını önbelleğe alın**: En büyük maliyet tasarrufu
- **Bağlamı yeniden kullanın**: Sık kullanılan bağlam belgelerini önbelleğe alın
- **İstekleri toplu işleyin**: Önbellek isabetini en üst düzeye çıkarmak için benzer istekleri gruplayın
- **Önbellek etkinliğini izleyin**: Gerçek tasarrufları takip edin
- **TTL'yi ayarlayın**: Maliyet ile güncellik arasında denge kurun

## Sorun Giderme

### Önbellek kullanılmıyor

- Yapılandırmada önbelleklemenin etkinleştirildiğini doğrulayın
- Prompt'ların aynı olduğunu kontrol edin (önbellekleme tam eşleşme gerektirir)
- Önbelleğin süresinin dolmadığını doğrulayın
- Sağlayıcıya özel önbellek limitlerini kontrol edin

### Önbellek oluşturma başarısız oluyor

- Önbellek boyutunun sağlayıcı limitleri dahilinde olduğunu doğrulayın
- Önbellek kontrol sözdiziminin doğru olduğundan emin olun
- Sağlayıcının modeliniz için önbellekleme desteklediğini kontrol edin
- Sınırlamalar için sağlayıcı dokümantasyonunu gözden geçirin

### Beklenmedik maliyetler

- Önbellek oluşturma ile önbellek okuma token'larını izleyin
- Önbelleğin gerçekten kullanılıp kullanılmadığını doğrulayın
- Prompt varyasyonları nedeniyle önbellek kaçırması olup olmadığını kontrol edin
- TTL'yi veya önbellekleme stratejisini ayarlamayı düşünün

## Sağlayıcı Karşılaştırması

| Özellik | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP başlıkları | Sağlayıcıya özel | Cache control |
| TTL kontrolü | Açık | Başlıklar aracılığıyla | Sağlayıcıya bağlı | Ephemeral/persistent |
| Maksimum önbellek boyutu | 1M token | Sağlayıcıya bağlı | Sağlayıcıya bağlı | 1M token |
| Maliyet azaltma | %90 | %90 | Sağlayıcıya bağlı | %90 |
| İzleme | Detaylı | | |

***

**Özet:** Bu doküman, farklı sağlayıcılar için önbellekleme mekanizmalarını, kullanım senaryolarını ve teknik detayları karşılaştırmalı olarak sunmaktadır. Her bölüm, belirli bir sağlayıcının güçlü yönlerini ve bu bağlamda nasıl kullanılması gerektiğini açıklamaktadır.
