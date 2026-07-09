---
title: Провайдерт нийцүүлсэн промптын кэшлэлт
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Нийлүүлэгчийг харгалздаг сануулгын кэшлэлт

Superdav AI Agent v1.12.0 нь **нийлүүлэгчийг харгалздаг сануулгын кэшлэлт**-ийг танилцуулж байгаа бөгөөд энэ нь өөр өөр LLM нийлүүлэгчдийн хооронд сануулгуудыг кэшлэснээр API зардал болон хоцролтыг оновчилдог. Нийлүүлэгч бүр өөр өөр кэшлэх механизм болон тохиргоотой.

## Тойм

Сануулгын кэшлэлт танд дараах боломжийг олгоно:

- Том, байнга ашиглагддаг сануулгуудыг кэшлэх
- Давхардсан боловсруулалтаас зайлсхийж API зардлыг бууруулах
- Кэшлэгдсэн хүсэлтүүдийн хоцролтыг сайжруулах
- Кэшийн амьдралын мөчлөгийг ил тод удирдах

Өөр өөр нийлүүлэгчид кэшлэлтийг өөр өөрөөр хэрэгжүүлдэг:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL-тэй сануулгын кэшлэлт
- **OpenRouter**: Нийлүүлэгчид тусгайлсан кэшлэлт
- **Vertex Anthropic**: Кэшийн хяналттай сануулгын кэшлэлт

## Google Gemini: cachedContents API

Google Gemini нь `cachedContents` API-аар дамжуулан кэшийн ил тод удирдлагыг хангадаг.

### Тохиргоо

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

### Кэшлэгдсэн сануулга үүсгэх

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

### Кэшлэгдсэн сануулга ашиглах

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Кэшийн амьдралын мөчлөг

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

### Gemini-д зориулсан шилдэг туршлагууд

- **Тохиромжтой TTL тохируулах**: Зардлын хэмнэлт ба кэшийн хуучралтын тэнцвэрийг барих
- **Системийн сануулгуудыг кэшлэх**: Хүсэлтүүдийн хооронд ижил системийн сануулгыг дахин ашиглах
- **Кэшийн хэрэглээг хянах**: Аль кэшүүд хамгийн их ашиглагдаж байгааг мөрдөх
- **Хугацаа нь дууссан кэшүүдийг цэвэрлэх**: Ашиглагдаагүй кэшүүдийг үе үе устгах

## Azure OpenAI: Сануулгын кэшлэлт

Azure OpenAI нь автомат TTL удирдлагатай сануулгын кэшлэлтийг дэмждэг.

### Тохиргоо

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

### Кэшлэлтийг идэвхжүүлэх

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

### Кэшийн толгойнууд

Azure OpenAI нь кэшийн хяналтад HTTP толгойнуудыг ашигладаг:

```
Cache-Control: max_age=3600
```

Дэмжигдэх утгууд:

- `max_age=<seconds>`: Заасан хугацаанд кэшлэх
- `no_cache`: Энэ хүсэлтийг кэшлэхгүй
- `no_store`: Кэшлэхгүй бөгөөд дахин ашиглахгүй

### Кэшийн хэрэглээг хянах

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI-д зориулсан шилдэг туршлагууд

- **Тогтвортой сануулгууд ашиглах**: Ижил сануулгууд кэшлэлтээс ашиг хүртэнэ
- **Боломжийн TTL тохируулах**: Зардал ба шинэлэг байдлын тэнцвэрийг барих
- **Кэшийн хэмжүүрүүдийг хянах**: Кэш үүсгэлт ба оноолтыг мөрдөх
- **Төстэй хүсэлтүүдийг багцлах**: Кэшийн оноолтыг дээд хэмжээнд хүргэхийн тулд хүсэлтүүдийг бүлэглэх

## OpenRouter: Нийлүүлэгчид тусгайлсан кэшлэлт

OpenRouter нь суурь нийлүүлэгчдээр (OpenAI, Anthropic гэх мэт) дамжуулан кэшлэлтийг дэмждэг.

### Тохиргоо

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

### OpenRouter кэшлэлт ашиглах

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

### Нийлүүлэгчид тусгайлсан сонголтууд

Өөр өөр нийлүүлэгчид өөр өөр кэшлэх механизмтай:

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

### OpenRouter-д зориулсан шилдэг туршлагууд

- **Өөрийн нийлүүлэгчийн кэшлэлтийг мэдэх**: Нийлүүлэгч бүр өөр өөр механизмтай
- **Кэшлэлтийн үйлдлийг турших**: Сонгосон нийлүүлэгчтэйгээ кэшлэлт ажиллаж байгааг баталгаажуулах
- **Зардлыг хянах**: Кэшлэлтийн хэмнэлтийг мөрдөх
- **Тогтвортой загварууд ашиглах**: Загвар солих нь кэшийн оноолтыг тасалдуулдаг

## Vertex Anthropic: Кэшийн хяналттай сануулгын кэшлэлт

Vertex Anthropic (Google Cloud) нь ил тод кэшийн хяналттай сануулгын кэшлэлтийг дэмждэг.

### Тохиргоо

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

### Vertex Anthropic кэшийг ашиглах

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

### Кэшийн хяналтын төрлүүд

- **ephemeral**: Хүсэлтийн үргэлжлэх хугацаанд кэшлэх (өгөгдмөл)
- **persistent**: Олон хүсэлтийн хооронд кэшлэх (дэмжигдсэн бол)

### Кэш ашиглалтыг хянах

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic-д зориулсан шилдэг туршлагууд

- **Түр кэшлэлтийг ашиглах**: Нэг сессийн кэшлэлтийн хувьд тохиромжтой
- **max_tokens-ийг тохиромжтой тохируулах**: Кэшийн хэмжээ ба зардлын тэнцвэрийг хадгалах
- **Кэшийн хэмжүүрүүдийг хянах**: Кэшийн үр нөлөөг хянах
- **Өөрийн ажлын ачааллаар турших**: Кэшлэлт таны хэрэглээний тохиолдолд ашигтай эсэхийг баталгаажуулах

## Нийлүүлэгч хоорондын кэшлэлтийн стратеги

### Нэгдсэн тохиргоо

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

### Нийлүүлэгчийг илрүүлэх

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Нөөц стратеги

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

## Зардлын оновчлол

### Хэмнэлтийг тооцоолох

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

### Оновчлолын зөвлөмжүүд

- **Том системийн prompt-уудыг кэшлэх**: Хамгийн их зардал хэмнэнэ
- **Контекстийг дахин ашиглах**: Түгээмэл ашиглагддаг контекст баримт бичгүүдийг кэшлэх
- **Хүсэлтүүдийг багцлах**: Кэш тааралтыг нэмэгдүүлэхийн тулд төстэй хүсэлтүүдийг бүлэглэх
- **Кэшийн үр нөлөөг хянах**: Бодит хэмнэлтийг хянах
- **TTL-ийг тохируулах**: Зардал ба шинэлэг байдлын тэнцвэрийг хадгалах

## Алдааг олж засварлах

### Кэш ашиглагдахгүй байна

- Тохиргоонд кэшлэлт идэвхжсэн эсэхийг шалгах
- Prompt-ууд яг ижил байгаа эсэхийг шалгах (кэшлэлтэд яг таарах шаардлагатай)
- Кэшийн хугацаа дуусаагүй эсэхийг шалгах
- Нийлүүлэгчийн тусгай кэшийн хязгааруудыг шалгах

### Кэш үүсгэхэд алдаа гарч байна

- Кэшийн хэмжээ нийлүүлэгчийн хязгаарын дотор байгаа эсэхийг шалгах
- Кэшийн хяналтын синтакс зөв эсэхийг шалгах
- Нийлүүлэгч таны model-д кэшлэлтийг дэмждэг эсэхийг баталгаажуулах
- Хязгаарлалтуудын талаар нийлүүлэгчийн баримт бичгийг хянах

### Гэнэтийн зардал

- Кэш үүсгэх токен ба кэш унших токеныг хянах
- Кэш үнэхээр ашиглагдаж байгаа эсэхийг баталгаажуулах
- Prompt-ийн хувилбаруудаас болж кэш таарахгүй байгаа эсэхийг шалгах
- TTL эсвэл кэшийн стратегийг тохируулахыг бодолцох

## Нийлүүлэгчдийн харьцуулалт

| Онцлог | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Кэшийн API | cachedContents | HTTP headers | Нийлүүлэгчийн тусгай | Кэшийн хяналт |
| TTL хяналт | Ил тод | Header-уудаар | Нийлүүлэгчээс хамаарна | Түр/байнгын |
| Кэшийн дээд хэмжээ | 1M токен | Нийлүүлэгчээс хамаарна | Нийлүүлэгчээс хамаарна | 1M токен |
| Зардлын бууралт | 90% | 90% | Нийлүүлэгчээс хамаарна | 90% |
| Хяналт | Дэлгэрэнгүй | Хэмжүүрүүдээр | Нийлүүлэгчээс хамаарна | Ашиглалтаар |

## Дараагийн алхмууд

1. **Нийлүүлэгчээ сонгох**: Өөрийн хэрэгцээнд үндэслэн сонгох
2. **Кэшлэлтийг тохируулах**: Нийлүүлэгчийн тусгай кэшлэлтийг тохируулах
3. **Кэшлэлтийг турших**: Энэ нь таны prompt-уудтай ажиллаж буй эсэхийг баталгаажуулах
4. **Ашиглалтыг хянах**: Кэш тааралт болон зардлын хэмнэлтийг хянах
5. **Оновчлох**: Үр дүнд үндэслэн TTL болон кэшийн стратегийг тохируулах
