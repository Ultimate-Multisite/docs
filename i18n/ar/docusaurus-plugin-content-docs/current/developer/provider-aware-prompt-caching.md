---
title: تخزين مؤقت للتعليمات التوجيهية المدرك للمزود
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# التخزين المؤقت للموجهات الواعي بالمزود

يقدم Superdav AI Agent v1.12.0 ميزة **التخزين المؤقت للموجهات الواعي بالمزود (provider-aware prompt caching)**، والتي تعمل على تحسين تكاليف واجهة برمجة التطبيقات (API) وزمن الوصول (latency) عن طريق تخزين الموجهات مؤقتًا عبر مختلف مزودي نماذج اللغة الكبيرة (LLM). يمتلك كل مزود آليات وتكوينات تخزين مؤقت مختلفة.

## نظرة عامة

يسمح لك التخزين المؤقت للموجهات بما يلي:

- تخزين الموجهات الكبيرة والمستخدمة بشكل متكرر.
- تقليل تكاليف الـ API عن طريق تجنب المعالجة المكررة.
- تحسين زمن الوصول للطلبات المخزنة مؤقتًا.
- إدارة دورة حياة التخزين المؤقت بشكل صريح.

تنفذ المزوّدات المختلفة التخزين المؤقت بطرق مختلفة:

- **Google Gemini**: واجهة `cachedContents` API.
- **Azure OpenAI**: التخزين المؤقت للموجهات مع فترة صلاحية (TTL).
- **OpenRouter**: التخزين المؤقت الخاص بكل مزود.
- **Vertex Anthropic**: التخزين المؤقت للموجهات مع التحكم في التخزين المؤقت (cache control).

## Google Gemini: واجهة cachedContents API

توفر Google Gemini إدارة صريحة للتخزين المؤقت عبر واجهة `cachedContents` API.

### التكوين (Configuration)

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // ساعة واحدة بالثواني
        'max_tokens' => 1000000, // الحد الأقصى للرموز للتخزين المؤقت
    ],
];
```

### إنشاء موجه مخزن مؤقتًا (Creating a Cached Prompt)

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

// يعيد: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### استخدام موجه مخزن مؤقتًا (Using a Cached Prompt)

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### دورة حياة التخزين المؤقت (Cache Lifecycle)

```php
// سرد المحتويات المخزنة مؤقتًا
$caches = $gemini->list_cached_contents();

// الحصول على تفاصيل التخزين المؤقت
$cache = $gemini->get_cached_content( 'abc123' );

// تمديد فترة صلاحية التخزين المؤقت
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // التمديد إلى ساعتين
);

// حذف التخزين المؤقت
$gemini->delete_cached_content( 'abc123' );
```

### أفضل الممارسات لـ Gemini

- **تحديد فترة صلاحية (TTL) مناسبة**: الموازنة بين توفير التكاليف وقِدم البيانات المخزنة مؤقتًا.
- **تخزين الموجهات النظامية (system prompts)**: إعادة استخدام نفس الموجه النظامي عبر الطلبات المختلفة.
- **مراقبة استخدام التخزين المؤقت**: تتبع أي التخزين المؤقت يتم استخدامه أكثر.
- **تنظيف التخزين المؤقت منتهي الصلاحية**: حذف التخزين المؤقت غير المستخدم بشكل دوري.

## Azure OpenAI: التخزين المؤقت للموجهات

يدعم Azure OpenAI التخزين المؤقت للموجهات مع إدارة تلقائية لفترة الصلاحية (TTL).

### التكوين (Configuration)

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

### تمكين التخزين المؤقت (Enabling Caching)

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

// تتضمن الاستجابة استخدام التخزين المؤقت:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### رؤوس التخزين المؤقت (Cache Headers)

يستخدم Azure OpenAI رؤوس HTTP للتحكم في التخزين المؤقت:

```
Cache-Control: max_age=3600
```

القيم المدعومة:

- `max_age=<seconds>`: التخزين المؤقت لمدة محددة.
- `no_cache`: لا تقم بتخزين هذا الطلب مؤقتًا.
- `no_store`: لا تقم بالتخزين المؤقت ولا تعيد استخدامه.

### مراقبة استخدام التخزين المؤقت (Monitoring Cache Usage)

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### أفضل الممارسات لـ Azure OpenAI

- **استخدام موجهات متسقة**: الموجهات المتطابقة تستفيد من التخزين المؤقت.
- **تحديد فترة صلاحية (TTL) معقولة**: الموازنة بين التكلفة وحداثة البيانات.
- **مراقبة مقاييس التخزين المؤقت**: تتبع إنشاء التخزين المؤقت مقابل الإصابات (Hits).
- **تجميع الطلبات المتشابهة**: تجميع الطلبات لزيادة إصابات التخزين المؤقت.

## OpenRouter: التخزين المؤقت الخاص بكل مزود

يدعم OpenRouter التخزين المؤقت من خلال المزوّدات الأساسية (OpenAI، Anthropic، إلخ).

### التكوين (Configuration)

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // استخدام التخزين المؤقت الخاص بـ OpenAI
    ],
];
```

### استخدام التخزين المؤقت لـ OpenRouter

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

### خيارات خاصة بكل مزود

تختلف المزوّدات المختلفة في آليات التخزين المؤقت:

```php
// التخزين المؤقت المتوافق مع OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// التخزين المؤقت المتوافق مع Anthropic
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

### أفضل الممارسات لـ OpenRouter

- **معرفة التخزين المؤقت لمزودك**: يمتلك كل مزود آليات مختلفة.
- **اختبار سلوك التخزين المؤقت**: التأكد من أن التخزين المؤقت يعمل مع المزود الذي اخترته.
- **مراقبة التكاليف**: تتبع التوفير الناتج عن التخزين المؤقت.
- **استخدام نماذج متسقة**: تغيير النماذج يكسر إصابات التخزين المؤقت.

## Vertex Anthropic: التخزين المؤقت للموجهات مع التحكم في التخزين المؤقت

يدعم Vertex Anthropic (Google Cloud) التخزين المؤقت للموجهات مع تحكم صريح في التخزين المؤقت.

### التكوين (Configuration)

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

### استخدام التخزين المؤقت لـ Vertex Anthropic

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

// تتضمن الاستجابة مقاييس التخزين المؤقت:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### أنواع التحكم في التخزين المؤقت (Cache Control Types)

- **ephemeral**: التخزين المؤقت لمدة الطلب الواحد (افتراضي).
- **persistent**: التخزين المؤقت عبر طلبات متعددة (إذا كان مدعومًا).

### مراقبة استخدام التخزين المؤقت (Monitoring Cache Usage)

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### أفضل الممارسات لـ Vertex Anthropic

- **استخدام التخزين المؤقت العابر (ephemeral)**: جيد للتخزين المؤقت لجلسة واحدة.
- **تحديد max_tokens بشكل مناسب**: الموازنة بين حجم التخزين المؤقت والتكلفة.
- **مراقبة مقاييس التخزين المؤقت**: تتبع فعالية التخزين المؤقت.
- **الاختبار بحمولتك العملية**: التأكد من أن التخزين المؤقت يفيد حالة الاستخدام الخاصة بك.

## استراتيجية التخزين المؤقت عبر المزوّدات (Cross-Provider Caching Strategy)

### التكوين الموحد (Unified Configuration)

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

### اكتشاف المزود (Provider Detection)

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// استخدام تكوين التخزين المؤقت الخاص بالمزود
```

### استراتيجية التراجع (Fallback Strategy)

```php
try {
    // محاولة التخزين المؤقت باستخدام المزود الأساسي
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // التراجع إلى طلب غير مخزن مؤقتًا
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## تحسين التكاليف (Cost Optimization)

### حساب التوفير (Calculate Savings)

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// الأسعار النموذجية (تختلف حسب المزود):
$cache_creation_cost = $cache_created_tokens * 0.00001; // أرخص بـ 10 مرات
$cache_read_cost = $cache_read_tokens * 0.000001; // أرخص بـ 100 مرة
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### نصائح التحسين (Optimization Tips)

- **تخزين الموجهات النظامية الكبيرة**: أكبر توفير في التكاليف.
- **إعادة استخدام السياق**: تخزين المستندات السياقية المستخدمة بشكل متكرر.
- **تجميع الطلبات**: تجميع الطلبات المتشابهة لزيادة إصابات التخزين المؤقت.
- **مراقبة فعالية التخزين المؤقت**: تتبع التوفير الفعلي.
- **تعديل فترة الصلاحية (TTL)**: الموازنة بين التكلفة وحداثة البيانات.

## استكشاف الأخطاء وإصلاحها (Troubleshooting)

### التخزين المؤقت لا يُستخدم

- التحقق من تمكين التخزين المؤقت في التكوين.
- التأكد من أن الموجهات متطابقة (يتطلب التخزين المؤقت تطابقًا تامًا).
- التحقق من عدم انتهاء صلاحية التخزين المؤقت.
- التحقق من حدود التخزين المؤقت الخاصة بكل مزود.

### فشل إنشاء التخزين المؤقت

- التحقق من أن حجم التخزين المؤقت ضمن حدود المزود.
- التأكد من صحة بناء جملة التحكم في التخزين المؤقت (cache control).
- التأكد من أن المزود يدعم التخزين المؤقت لنموذجك.
- مراجعة وثائق المزود لمعرفة القيود.

### تكاليف غير متوقعة

- مراقبة رموز إنشاء التخزين المؤقت مقابل رموز قراءة التخزين المؤقت.
- التحقق من أن التخزين المؤقت يُستخدم بالفعل.
- التحقق من وجود حالات فشل في التخزين المؤقت.

## ملخص

| الميزة | الوصف |
| :--- | :--- |
| **الهدف** | تقليل التكاليف وتحسين الأداء عن طريق إعادة استخدام النتائج المحفوظة. |
| **المتطلبات** | تحديد المفتاح (Key) الذي يحدد محتوى الطلب لضمان التخزين الصحيح. |
| **المخاطر** | قد يؤدي التغيير الطفيف في المدخلات إلى إنشاء مفتاح جديد، مما يمنع الاستفادة من التخزين المؤقت. |
