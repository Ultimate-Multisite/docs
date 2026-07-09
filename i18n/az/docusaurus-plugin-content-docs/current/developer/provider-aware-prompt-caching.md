---
title: Təchizatçıya Uyğun Prompt Keşləmə
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Providerə Uyğun Prompt Cacheləmə {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0, müxtəlif LLM (Böyük Dil Modeli) providerları arasında promptları cacheləyərək API xərclərini və gecikməni (latency) optimallaşdıran **providerə uyğun prompt cacheləmə** funksionallığını təqdim edir. Hər bir providerun özünəməxsus cacheləmə mexanizmləri və konfiqurasiyaları var.

## Ümumi Baxış {#overview}

Prompt cacheləmə sizə aşağıdakıları etməyə imkan verir:

- Tez-tez istifadə olunan böyük promptları cacheləmək
- Təkrar emal etməkdən çəkinərək API xərclərini azaltmaq
- Cachelənmiş sorğular üçün gecikməni yaxşılaşdırmaq
- Cache həyat dövrünü (lifecycle) açıq şəkildə idarə etmək

Fərqli providerlar cacheləməni fərqli şəkildə tətbiq edir:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL ilə Prompt cacheləmə
- **OpenRouter**: Providerə xas cacheləmə
- **Vertex Anthropic**: Cache nəzarəti ilə Prompt cacheləmə

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API vasitəsilə açıq cache idarəetməsi təmin edir.

### Konfiqurasiya {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 saat saniyə ilə
        'max_tokens' => 1000000, // Cachelənməyə maksimum token sayı
    ],
];
```

### Cachelənmiş Prompt Yaratmaq {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Siz köməkçi bir asistanınız...',
        'context' => 'Böyük kontekst sənədi...',
        'ttl' => 3600,
    ]
);

// Nəticə: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Cachelənmiş Promptdan İstifadə Etmək {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'İstifadəçi sualı burda',
    ]
);
```

### Cache Həyat Dövrü {#cache-lifecycle}

```php
// Cachelənmiş məzmunları siyahıla
$caches = $gemini->list_cached_contents();

// Cache detallarını al
$cache = $gemini->get_cached_content( 'abc123' );

// Cache TTL-ni uzatmaq
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2 saatə qədər uzat
);

// Cache-i silmək
$gemini->delete_cached_content( 'abc123' );
```

### Gemini üçün Ən Yaxşı Praktikalara Nəzarət {#best-practices-for-gemini}

- **Uyğun TTL təyin edin**: Xərclərdən qənaət və cache köhnəlməsi arasında balans tapın
- **Sistem promptlarını cacheləyin**: Sorğular arasında eyni sistem promptundan istifadə edin
- **Cache istifadəsini monitorinq edin**: Hansı cachelərin ən çox istifadə olunduğunu izləyin
- **Expired cacheləri təmizləyin**: İstifadə edilməyən cacheləri müntəzəm olaraq silin

## Azure OpenAI: Prompt Cacheləmə {#azure-openai-prompt-caching}

Azure OpenAI, avtomatik TTL idarəetməsi ilə prompt cacheləməni dəstəkləyir.

### Konfiqurasiya {#configuration-1}

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

### Cacheləməni Aktivləşdirmək {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Siz köməkçi bir asistanınız...',
        'context' => 'Böyük kontekst sənədi...',
        'prompt' => 'İstifadəçi sualı burda',
        'cache_control' => 'max_age=3600',
    ]
);

// Cavabda cache istifadəsi daxildir:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Başlıqları (Cache Headers) {#cache-headers}

Azure OpenAI, cache nəzarəti üçün HTTP başlıqlarından istifadə edir:

```
Cache-Control: max_age=3600
```

Dəstəklənən dəyərlər:

- `max_age=<saniyə>`: Müəyyən müddət üçün cacheləyin
- `no_cache`: Bu sorğunu cacheləməyin
- `no_store`: Cacheləməyin və yenidən istifadə etməyin

### Cache İstifadəsinin Monitorinqi {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache yaratma: $cache_tokens token\n";
echo "Cache tutuşu (hits): $cache_hits token\n";
```

### Azure OpenAI üçün Ən Yaxşı Praktikalara Nəzarət {#best-practices-for-azure-openai}

- **Müəyyən promptlardan istifadə edin**: Eyni promptlar cachelənmədən faydalanır
- **Məntiq bir TTL təyin edin**: Xərc və təzəlik arasında balans tapın
- **Cache metrikalarını monitorinq edin**: Cache yaratma ilə tutuşları izləyin
- **Oxşar sorğuları toplu (batch) göndərin**: Cache tutuşlarını maksimallaşdırmaq üçün sorğuları qruplaşdırın

## OpenRouter: Providerə Xas Cacheləmə {#openrouter-provider-specific-caching}

OpenRouter, əsas providerlar (OpenAI, Anthropic və s.) vasitəsilə cacheləməni dəstəkləyir.

### Konfiqurasiya {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI-nin cacheləməsindən istifadə et
    ],
];
```

### OpenRouter Cacheləməsindən İstifadə Etmək {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Siz köməkçi bir asistanınız...',
        'context' => 'Böyük kontekst sənədi...',
        'prompt' => 'İstifadəçi sualı burda',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Providerə Xas Seçimlər {#provider-specific-options}

Fərqli providerların fərqli cacheləmə mexanizmləri var:

```php
// OpenAI-uyumlu cacheləmə
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-uyumlu cacheləmə
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

### OpenRouter üçün Ən Yaxşı Praktikalara Nəzarət {#best-practices-for-openrouter}

- **Providerunuzun cacheləməsini bilin**: Hər providerun fərqli mexanizmləri var
- **Cacheləmə davranışını test edin**: Seçdiyiniz provider ilə cacheləmənin işlədiyini yoxlayın
- **Xərcləri monitorinq edin**: Cacheləmədən qənaətləri izləyin
- **Müəyyən modellərdən istifadə edin**: Model dəyişmək cache tutuşlarını pozur

## Vertex Anthropic: Cache Nəzarəti ilə Prompt Cacheləmə {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) açıq cache nəzarəti ilə prompt cacheləməni dəstəkləyir.

### Konfiqurasiya {#configuration-3}

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

### Vertex Anthropic Cacheləməsindən İstifadə Etmək {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Siz köməkçi bir asistanınız...',
        'context' => 'Böyük kontekst sənədi...',
        'prompt' => 'İstifadəçi sualı burda',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Cavabda cache metrikaları daxildir:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Nəzarəti Tipləri {#cache-control-types}

- **ephemeral**: Sorğu müddətində cacheləyin (default)
- **persistent**: Bir neçə sorğu boyunca cacheləyin (dəstəklənirsə)

### Cache İstifadəsinin Monitorinqi {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache yaradıldı: $cache_created token\n";
echo "Cache oxundu: $cache_read token\n";
```

### Vertex Anthropic üçün Ən Yaxşı Praktikalara Nəzarət {#best-practices-for-vertex-anthropic}

- **Ephemeral cacheləmə istifadə edin**: Bir sessiya ərzində cacheləmə üçün yaxşıdır
- **max_tokens-i uyğun təyin edin**: Cache ölçüsü və xərc arasında balans tapın
- **Cache metrikalarını monitorinq edin**: Cache effektivliyini izləyin
- **Yükünüzlə test edin**: Cacheləmənin istifadə halınıza fayda verdiyini yoxlayın

## Providerlararası Cacheləmə Strategiyası {#cross-provider-caching-strategy}

### Birləşdirilmiş Konfiqurasiya {#unified-configuration}

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

### Provider Müəyyən Etmə {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Providerə xas cacheləmə konfiqurasiyasından istifadə et
```

### Fallback Strategiyası {#fallback-strategy}

```php
try {
    // Əsas provider ilə cacheləməni cəhd et
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Cachelənməmiş sorğuya geri dön
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Xərc Optimallaşdırılması {#cost-optimization}

### Qənaətləri Hesablamaq {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Tipik qiymətləndirmə (providerdan providera dəyişir):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x ucuzdur
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x ucuzdur
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Təxmini qənaət: \$$savings\n";
```

### Optimallaşdırma Məsləhətləri {#optimization-tips}

- **Böyük sistem promptlarını cacheləyin**: Ən böyük xərc qənaəti
- **Konteksti yenidən istifadə edin**: Tez-tez istifadə olunan kontekst sənədlərini cacheləyin
- **Sorğuları toplu (batch) göndərin**: Cache tutuşlarını maksimallaşdırmaq üçün oxşar sorğuları qruplaşdırın
- **Cache effektivliyini monitorinq edin**: Faktiki qənaətləri izləyin
- **TTL-ni tənzimləyin**: Xərc və təzəlik arasında balans tapın

## Problemlərin Həlli (Troubleshooting) {#troubleshooting}

### Cache istifadə edilmir {#cache-not-being-used}

- Konfiqurasiyada cacheləmənin aktiv olduğundan əmin olun
- Promptların eyni olduğundan əmin olun (cacheləmə dəqiq uyğunluğu tələb edir)
- Cachenin bitmədiyini yoxlayın
- Providerə xas cache limitlərini yoxlayın

### Cache yaratmaq uğursuz olur {#cache-creation-failing}

- Cache ölçüsünün provider limitləri daxilində olduğundan əmin olun
- Cache nəzarəti sintaksisinin düzgün olduğundan əmin olun
- Providerun modeliniz üçün cacheləməni dəstəklədiyini yoxlayın
- Məhdudiyyətlər üçün provider sənədlərinə nəzər salın

### Gözlənilməz xərclər {#unexpected-costs}

- Cache yaratma ilə cache oxuma tokenlarını monitorinq edin
- Cachenin həqiqətən istifadə olunduğunu yoxlayın
- Prompt fərqlilikləri səbəbindən cache çatışmazlığını yoxlayın
- TTL (Time To Live)

---
