---
title: پوشش‌دهی کش پرامپت آگاه به ارائه‌دهنده
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# ذخیره‌سازی Prompt با آگاهی از ارائه‌دهنده (Provider-Aware Prompt Caching)

Superdav AI Agent v1.12.0 قابلیت **ذخیره‌سازی Prompt با آگاهی از ارائه‌دهنده** را معرفی می‌کند. این قابلیت با ذخیره Prompts در میان ارائه‌دهندگان مختلف LLM، هزینه‌های API و تأخیر (latency) را بهینه می‌کند. هر ارائه‌دهنده، مکانیزم‌ها و تنظیمات کش (caching) متفاوتی دارد.

## نمای کلی (Overview)

ذخیره‌سازی Prompt به شما این امکان را می‌دهد که:

- Prompts بزرگ و پرکاربرد را ذخیره کنید.
- با جلوگیری از پردازش تکراری، هزینه‌های API را کاهش دهید.
- تأخیر درخواست‌های کش شده را بهبود بخشید.
- چرخه عمر کش را به صورت صریح مدیریت کنید.

ارائه‌دهندگان مختلف، کش را به شکل‌های متفاوتی پیاده‌سازی می‌کنند:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: ذخیره‌سازی Prompt با TTL
- **OpenRouter**: کش اختصاصی ارائه‌دهنده
- **Vertex Anthropic**: ذخیره‌سازی Prompt با کنترل کش (cache control)

## Google Gemini: API cachedContents

Google Gemini مدیریت کش صریحی را از طریق API `cachedContents` فراهم می‌کند.

### پیکربندی (Configuration)

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 ساعت بر حسب ثانیه
        'max_tokens' => 1000000, // حداکثر توکن برای کش کردن
    ],
];
```

### ایجاد یک Prompt کش شده (Creating a Cached Prompt)

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'شما یک دستیار مفید هستید...',
        'context' => 'سند با محتوای بزرگ...',
        'ttl' => 3600,
    ]
);

// بازگشت: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### استفاده از یک Prompt کش شده (Using a Cached Prompt)

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'سوال کاربر در اینجا',
    ]
);
```

### چرخه عمر کش (Cache Lifecycle)

```php
// لیست محتویات کش شده
$caches = $gemini->list_cached_contents();

// دریافت جزئیات کش
$cache = $gemini->get_cached_content( 'abc123' );

// تمدید TTL کش
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // تمدید تا 2 ساعت
);

// حذف کش
$gemini->delete_cached_content( 'abc123' );
```

### بهترین شیوه‌ها برای Gemini (Best Practices for Gemini)

- **تنظیم TTL مناسب**: تعادل بین صرفه‌جویی در هزینه و قدیمی شدن کش.
- **کش کردن System Prompts**: استفاده مجدد از یک System Prompt یکسان در درخواست‌ها.
- **نظارت بر استفاده از کش**: ردیابی اینکه کدام کش‌ها بیشتر استفاده می‌شوند.
- **پاکسازی کش‌های منقضی شده**: حذف دوره‌ای کش‌های بلااستفاده.

## Azure OpenAI: ذخیره‌سازی Prompt

Azure OpenAI از ذخیره‌سازی Prompt با مدیریت خودکار TTL پشتیبانی می‌کند.

### پیکربندی (Configuration)

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

### فعال‌سازی کش (Enabling Caching)

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'شما یک دستیار مفید هستید...',
        'context' => 'سند با محتوای بزرگ...',
        'prompt' => 'سوال کاربر در اینجا',
        'cache_control' => 'max_age=3600',
    ]
);

// پاسخ شامل استفاده از کش است:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### هدرهای کش (Cache Headers)

Azure OpenAI از هدرهای HTTP برای کنترل کش استفاده می‌کند:

```
Cache-Control: max_age=3600
```

مقادیر پشتیبانی شده:

- `max_age=<seconds>`: کش برای مدت زمان مشخص شده.
- `no_cache`: این درخواست را کش نکن.
- `no_store`: کش نکن و مجدداً استفاده نکن.

### نظارت بر استفاده از کش (Monitoring Cache Usage)

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "ایجاد کش: $cache_tokens توکن\n";
echo "استفاده از کش: $cache_hits توکن\n";
```

### بهترین شیوه‌ها برای Azure OpenAI (Best Practices for Azure OpenAI)

- **استفاده از Prompts ثابت**: Prompts یکسان از مزایای کش‌سازی بهره می‌برند.
- **تنظیم TTL منطقی**: تعادل بین هزینه و تازگی اطلاعات.
- **نظارت بر معیارهای کش**: ردیابی ایجاد کش در مقابل استفاده از آن.
- **دسته‌بندی درخواست‌های مشابه**: گروه‌بندی درخواست‌ها برای به حداکثر رساندن استفاده از کش.

## OpenRouter: کش اختصاصی ارائه‌دهنده (Provider-Specific Caching)

OpenRouter از طریق ارائه‌دهندگان زیربنایی (OpenAI، Anthropic و غیره) از قابلیت کش پشتیبانی می‌کند.

### پیکربندی (Configuration)

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // استفاده از کش OpenAI
    ],
];
```

### استفاده از کش OpenRouter (Using OpenRouter Caching)

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'شما یک دستیار مفید هستید...',
        'context' => 'سند با محتوای بزرگ...',
        'prompt' => 'سوال کاربر در اینجا',
        'cache_control' => 'max_age=3600',
    ]
);
```

### گزینه‌های اختصاصی ارائه‌دهنده (Provider-Specific Options)

ارائه‌دهندگان مختلف، مکانیزم‌های کش متفاوتی دارند:

```php
// کش‌سازی سازگار با OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// کش‌سازی سازگار با Anthropic
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

### بهترین شیوه‌ها برای OpenRouter (Best Practices for OpenRouter)

- **آشنا باشید با کش ارائه‌دهنده**: هر ارائه‌دهنده مکانیزم‌های متفاوتی دارد.
- **تست رفتار کش**: تأیید کنید که کش با ارائه‌دهنده انتخابی شما کار می‌کند.
- **نظارت بر هزینه‌ها**: ردیابی صرفه‌جویی حاصل از کش‌سازی.
- **استفاده از مدل‌های ثابت**: تغییر مدل‌ها باعث از بین رفتن استفاده از کش می‌شود.

## Vertex Anthropic: ذخیره‌سازی Prompt با کنترل کش

Vertex Anthropic (Google Cloud) از ذخیره‌سازی Prompt با کنترل کش صریح پشتیبانی می‌کند.

### پیکربندی (Configuration)

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

### استفاده از کش Vertex Anthropic (Using Vertex Anthropic Caching)

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'شما یک دستیار مفید هستید...',
        'context' => 'سند با محتوای بزرگ...',
        'prompt' => 'سوال کاربر در اینجا',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// پاسخ شامل معیارهای کش است:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### انواع کنترل کش (Cache Control Types)

- **ephemeral**: کش برای مدت زمان درخواست (پیش‌فرض).
- **persistent**: کش در طول چندین درخواست (در صورت پشتیبانی).

### نظارت بر استفاده از کش (Monitoring Cache Usage)

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "ایجاد کش: $cache_created توکن\n";
echo "خواندن کش: $cache_read توکن\n";
```

### بهترین شیوه‌ها برای Vertex Anthropic (Best Practices for Vertex Anthropic)

- **استفاده از کش موقت (ephemeral)**: مناسب برای کش‌سازی در یک جلسه کاری.
- **تنظیم max_tokens مناسب**: تعادل بین اندازه کش و هزینه.
- **نظارت بر معیارهای کش**: ردیابی اثربخشی کش.
- **تست با حجم کاری خود**: تأیید اینکه کش برای مورد استفاده شما مفید است.

## استراتژی کش‌سازی بین ارائه‌دهندگان (Cross-Provider Caching Strategy)

### پیکربندی یکپارچه (Unified Configuration)

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

### تشخیص ارائه‌دهنده (Provider Detection)

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// استفاده از پیکربندی کش اختصاصی ارائه‌دهنده
```

### استراتژی بازگشت (Fallback Strategy)

```php
try {
    // تلاش برای کش‌سازی با ارائه‌دهنده اصلی
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // بازگشت به درخواست بدون کش
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## بهینه‌سازی هزینه (Cost Optimization)

### محاسبه صرفه‌جویی (Calculate Savings)

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// قیمت‌گذاری معمول (بسته به ارائه‌دهنده متفاوت است):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 برابر ارزان‌تر
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 برابر ارزان‌تر
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "صرفه‌جویی تخمینی: \$$savings\n";
```

### نکات بهینه‌سازی (Optimization Tips)

- **کش کردن System Prompts بزرگ**: بزرگترین صرفه‌جویی در هزینه.
- **استفاده مجدد از Context**: کش کردن اسناد Context پرکاربرد.
- **دسته‌بندی درخواست‌ها**: گروه‌بندی درخواست‌های مشابه برای به حداکثر رساندن استفاده از کش.
- **نظارت بر اثربخشی کش**: ردیابی صرفه‌جویی واقعی.
- **تنظیم TTL**: تعادل بین هزینه و تازگی اطلاعات.

## عیب‌یابی (Troubleshooting)

### کش استفاده نمی‌شود (Cache not being used)

- تأیید کنید که کش در پیکربندی فعال است.
- بررسی کنید که Prompts یکسان باشند (کش‌سازی نیاز به تطابق دقیق دارد).
- تأیید کنید که کش منقضی نشده باشد.
- محدودیت‌های کش اختصاصی ارائه‌دهنده را بررسی کنید.

### ایجاد کش شکست می‌خورد (Cache creation failing)

- تأیید کنید که اندازه کش در محدودیت‌های ارائه‌دهنده قرار دارد.
- بررسی کنید که نحوه‌ی `cache control` صحیح باشد.
- اطمینان حاصل کنید که ارائه‌دهنده برای مدل شما از کش پشتیبانی می‌کند.
- مستندات ارائه‌دهنده را برای محدودیت‌ها مرور کنید.

### هزینه‌های غیرمنتظره (Unexpected costs)

- نظارت بر توکن‌های ایجاد کش در مقابل توکن‌های خواندن کش.
- تأیید کنید که کش واقعاً در حال استفاده است.
- بررسی کنید که آیا به دلیل تغییرات در Prompt، کش‌سازی از کار افتاده است (cache misses).
- در نظر بگیرید که TTL یا استراتژی کش را تنظیم کنید.

## مقایسه ارائه‌دهندگان (Provider Comparison)

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## مراحل بعدی (Next Steps)

1. **ارائه‌دهنده خود را انتخاب کنید**: بر اساس نیازهای خود انتخاب نمایید.
2. **پیکربندی کش‌سازی**: کش‌سازی اختصاصی ارائه‌دهنده را تنظیم کنید.
3. **تست کش‌سازی**: تأیید کنید که با Prompts شما کار می‌کند.
4. **نظارت بر استفاده**: ردیابی استفاده از کش و صرفه‌جویی در هزینه.
5. **بهینه‌سازی**: تنظیم TTL و استراتژی کش بر اساس نتایج.
