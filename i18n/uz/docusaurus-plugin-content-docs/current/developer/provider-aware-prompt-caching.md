---
title: Provayderga mos prompt keshlash
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provayderdan xabardor Prompt Caching

Superdav AI Agent v1.12.0 **provayderdan xabardor prompt caching**ni taqdim etadi; u promptlarni turli LLM provayderlari bo‘ylab keshlash orqali API xarajatlari va kechikishni optimallashtiradi. Har bir provayderning keshlash mexanizmlari va konfiguratsiyalari turlicha.

## Umumiy ko‘rinish {#overview}

Prompt caching sizga quyidagilarni beradi:

- Katta, tez-tez ishlatiladigan promptlarni keshlash
- Ortiqcha qayta ishlashdan qochib, API xarajatlarini kamaytirish
- Keshlangan so‘rovlar uchun kechikishni yaxshilash
- Kesh hayot siklini aniq boshqarish

Turli provayderlar keshlashni turlicha amalga oshiradi:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL bilan prompt caching
- **OpenRouter**: Provayderga xos keshlash
- **Vertex Anthropic**: Kesh boshqaruvi bilan prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini `cachedContents` API orqali aniq kesh boshqaruvini taqdim etadi.

### Konfiguratsiya {#configuration}

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

### Keshlangan prompt yaratish {#creating-a-cached-prompt}

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

### Keshlangan promptdan foydalanish {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Kesh hayot sikli {#cache-lifecycle}

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

### Gemini uchun eng yaxshi amaliyotlar {#best-practices-for-gemini}

- **Mos TTL belgilang**: Xarajatni tejash va keshning eskirishi o‘rtasida muvozanat saqlang
- **Tizim promptlarini keshlang**: Bir xil tizim promptini so‘rovlar bo‘ylab qayta ishlating
- **Keshdan foydalanishni kuzating**: Qaysi keshlar eng ko‘p ishlatilishini kuzatib boring
- **Muddati o‘tgan keshlarni tozalang**: Ishlatilmaydigan keshlarni vaqti-vaqti bilan o‘chiring

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI avtomatik TTL boshqaruvi bilan prompt cachingni qo‘llab-quvvatlaydi.

### Konfiguratsiya {#configuration-1}

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

### Keshlashni yoqish {#enabling-caching}

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

### Kesh headerlari {#cache-headers}

Azure OpenAI kesh boshqaruvi uchun HTTP headerlardan foydalanadi:

```
Cache-Control: max_age=3600
```

Qo‘llab-quvvatlanadigan qiymatlar:

- `max_age=<seconds>`: Belgilangan muddatga keshlash
- `no_cache`: Bu so‘rovni keshlamang
- `no_store`: Keshlamang va qayta ishlatmang

### Keshdan foydalanishni kuzatish {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI uchun eng yaxshi amaliyotlar {#best-practices-for-azure-openai}

- **Izchil promptlardan foydalaning**: Bir xil promptlar keshlashdan foyda ko‘radi
- **Oqilona TTL belgilang**: Xarajat va yangilik o‘rtasida muvozanat saqlang
- **Kesh metrikalarini kuzating**: Kesh yaratilishi va hitlarni kuzatib boring
- **O‘xshash so‘rovlarni paketlang**: Kesh hitlarini maksimal qilish uchun so‘rovlarni guruhlang

## OpenRouter: Provayderga xos keshlash {#openrouter-provider-specific-caching}

OpenRouter asosiy provayderlar (OpenAI, Anthropic va boshqalar) orqali keshlashni qo‘llab-quvvatlaydi.

### Konfiguratsiya {#configuration-2}

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

### OpenRouter keshlashidan foydalanish {#using-openrouter-caching}

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

### Provayderga xos variantlar {#provider-specific-options}

Turli provayderlarning keshlash mexanizmlari turlicha:

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

### OpenRouter uchun eng yaxshi amaliyotlar {#best-practices-for-openrouter}

- **Provayderingizning keshlashini biling**: Har bir provayderning mexanizmlari turlicha
- **Keshlash xatti-harakatini sinang**: Tanlangan provayderingiz bilan keshlash ishlashini tekshiring
- **Xarajatlarni kuzating**: Keshlashdan olingan tejashni kuzatib boring
- **Izchil modellardan foydalaning**: Modellarni almashtirish kesh hitlarini buzadi

## Vertex Anthropic: Kesh boshqaruvi bilan Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) aniq kesh boshqaruvi bilan prompt cachingni qo‘llab-quvvatlaydi.

### Konfiguratsiya {#configuration-3}

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

### Vertex Anthropic keshlashidan foydalanish {#using-vertex-anthropic-caching}

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

### Kesh nazorati turlari {#cache-control-types}

- **ephemeral**: So‘rov davomida keshda saqlash (standart)
- **persistent**: Bir nechta so‘rovlar bo‘ylab keshda saqlash (agar qo‘llab-quvvatlansa)

### Keshdan foydalanishni monitoring qilish {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic uchun eng yaxshi amaliyotlar {#best-practices-for-vertex-anthropic}

- **Ephemeral keshlashdan foydalaning**: Yagona sessiyali keshlash uchun yaxshi
- **max_tokens ni mos ravishda belgilang**: Kesh hajmi va xarajat o‘rtasida muvozanat saqlang
- **Kesh metrikalarini monitoring qiling**: Kesh samaradorligini kuzatib boring
- **Ish yuklamangiz bilan sinab ko‘ring**: Keshlash foydalanish holatingizga foyda berishini tekshiring

## Provayderlararo keshlash strategiyasi {#cross-provider-caching-strategy}

### Yagona konfiguratsiya {#unified-configuration}

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

### Provayderni aniqlash {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Zaxira strategiyasi {#fallback-strategy}

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

## Xarajatlarni optimallashtirish {#cost-optimization}

### Tejashni hisoblash {#calculate-savings}

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

### Optimallashtirish bo‘yicha maslahatlar {#optimization-tips}

- **Katta tizim promptlarini keshda saqlang**: Eng katta xarajat tejalishi
- **Kontekstdan qayta foydalaning**: Tez-tez ishlatiladigan kontekst hujjatlarini keshda saqlang
- **So‘rovlarni paketlang**: Keshga tushishlarni maksimal oshirish uchun o‘xshash so‘rovlarni guruhlang
- **Kesh samaradorligini monitoring qiling**: Haqiqiy tejashni kuzatib boring
- **TTL ni sozlang**: Xarajat va yangilik o‘rtasida muvozanat saqlang

## Muammolarni bartaraf etish {#troubleshooting}

### Kesh ishlatilmayapti {#cache-not-being-used}

- Konfiguratsiyada keshlash yoqilganini tekshiring
- Promptlar bir xil ekanini tekshiring (keshlash aniq moslikni talab qiladi)
- Kesh muddati tugamaganini tekshiring
- Provayderga xos kesh cheklovlarini tekshiring

### Kesh yaratish muvaffaqiyatsiz bo‘lmoqda {#cache-creation-failing}

- Kesh hajmi provayder limitlari doirasida ekanini tekshiring
- Kesh nazorati sintaksisi to‘g‘ri ekanini tekshiring
- Provayder modelingiz uchun keshlashni qo‘llab-quvvatlashiga ishonch hosil qiling
- Cheklovlar uchun provayder hujjatlarini ko‘rib chiqing

### Kutilmagan xarajatlar {#unexpected-costs}

- Kesh yaratish va keshdan o‘qish tokenlarini monitoring qiling
- Kesh haqiqatda ishlatilayotganini tekshiring
- Prompt o‘zgarishlari tufayli keshga tushmaslik holatlarini tekshiring
- TTL yoki kesh strategiyasini sozlashni ko‘rib chiqing

## Provayderlarni taqqoslash {#provider-comparison}

| Xususiyat | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Kesh API | cachedContents | HTTP headers | Provayderga xos | Kesh nazorati |
| TTL nazorati | Aniq | Headerlar orqali | Provayderga bog‘liq | Ephemeral/persistent |
| Maksimal kesh hajmi | 1M token | Provayderga bog‘liq | Provayderga bog‘liq | 1M token |
| Xarajat kamayishi | 90% | 90% | Provayderga bog‘liq | 90% |
| Monitoring | Batafsil | Metrikalar orqali | Provayderga bog‘liq | Foydalanish orqali |

## Keyingi qadamlar {#next-steps}

1. **Provayderingizni tanlang**: Ehtiyojlaringiz asosida tanlang
2. **Keshlashni sozlang**: Provayderga xos keshlashni sozlang
3. **Keshlashni sinab ko‘ring**: Promptlaringiz bilan ishlashini tekshiring
4. **Foydalanishni monitoring qiling**: Keshga tushishlar va xarajat tejalishini kuzatib boring
5. **Optimallashtiring**: Natijalar asosida TTL va kesh strategiyasini sozlang
