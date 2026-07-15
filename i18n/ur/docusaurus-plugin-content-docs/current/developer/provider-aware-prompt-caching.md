---
title: فراہم کنندہ سے آگاہ پرامپٹ کیشنگ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# فراہم کنندہ کے لحاظ سے پرامپٹ کیشنگ (Provider-Aware Prompt Caching)

Superdav AI Agent v1.12.0 میں **فراہم کنندہ کے لحاظ سے پرامپٹ کیشنگ** متعارف کرایا گیا ہے، جو مختلف LLM فراہم کنندگان میں پرامپٹ کیشنگ کے ذریعے API کے اخراجات اور لیٹنسی کو بہتر بناتا ہے۔ ہر فراہم کنندہ کیشنگ کے مختلف طریقے اور کنفیگریشن استعمال کرتا ہے۔

## جائزہ (Overview) {#overview}

پرامپٹ کیشنگ آپ کو یہ کرنے کی اجازت دیتی ہے:

- بڑے، اکثر استعمال ہونے والے پرامپٹس کو کیش کرنا
- بار بار ہونے والے پروسیسنگ سے بچ کر API کے اخراجات کو کم کرنا
- کیش شدہ درخواستوں کے لیے لیٹنسی کو بہتر بنانا
- کیش کے پورے چکر (lifecycle) کو واضح طور پر سنبھالنا

مختلف فراہم کنندگان کیشنگ کو مختلف طریقوں سے نافذ کرتے ہیں:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL کے ساتھ پرامپٹ کیشنگ
- **OpenRouter**: فراہم کنندہ کے مخصوص کیشنگ
- **Vertex Anthropic**: کیش کنٹرول کے ساتھ پرامپٹ کیشنگ

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini، `cachedContents` API کے ذریعے واضح کیش مینجمنٹ فراہم کرتا ہے۔

### کنفیگریشن (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 گھنٹہ سیکنڈز میں
        'max_tokens' => 1000000, // کیش کرنے کے لیے زیادہ سے زیادہ ٹوکنز
    ],
];
```

### کیش شدہ پرامپٹ بنانا (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

### کیش شدہ پرامپٹ استعمال کرنا (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### کیش کا چکر (Cache Lifecycle) {#cache-lifecycle}

```php
// کیش شدہ مواد کی فہرست بنائیں
$caches = $gemini->list_cached_contents();

// کیش کی تفصیلات حاصل کریں
$cache = $gemini->get_cached_content( 'abc123' );

// کیش TTL بڑھائیں
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2 گھنٹے تک بڑھائیں
);

// کیش حذف کریں
$gemini->delete_cached_content( 'abc123' );
```

### Gemini کے لیے بہترین طریقے (Best Practices for Gemini) {#best-practices-for-gemini}

- **مناسب TTL سیٹ کریں**: لاگت کی بچت بمقابلہ کیش کی پرانی ہونے کی صورتحال کو متوازن کریں۔
- **سسٹم پرامپٹس کیش کریں**: درخواستوں میں ایک ہی سسٹم پرامپٹ کا دوبارہ استعمال کریں۔
- **کیش کے استعمال کی نگرانی کریں**: ٹریک کریں کہ کون سے کیش سب سے زیادہ استعمال ہو رہے ہیں۔
- **منقضی شدہ کیش کو صاف کریں**: غیر استعمال شدہ کیش کو وقتاً فوقتاً حذف کریں۔

## Azure OpenAI: پرامپٹ کیشنگ {#azure-openai-prompt-caching}

Azure OpenAI خودکار TTL مینجمنٹ کے ساتھ پرامپٹ کیشنگ کو سپورٹ کرتا ہے۔

### کنفیگریشن (Configuration) {#configuration-1}

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

### کیشنگ کو فعال کرنا (Enabling Caching) {#enabling-caching}

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

// Response میں کیش کا استعمال شامل ہے:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### کیش ہیڈرز (Cache Headers) {#cache-headers}

Azure OpenAI کیش کنٹرول کے لیے HTTP ہیڈرز استعمال کرتا ہے:

```
Cache-Control: max_age=3600
```

مددگار اقدار (Supported values):

- `max_age=<seconds>`: مخصوص مدت کے لیے کیش کریں
- `no_cache`: اس درخواست کو کیش نہ کریں
- `no_store`: کیش نہ کریں اور دوبارہ استعمال نہ کریں

### کیش کے استعمال کی نگرانی کرنا (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI کے لیے بہترین طریقے (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **مستقل پرامپٹس استعمال کریں**: ایک جیسے پرامپٹس کیشنگ سے فائدہ اٹھاتے ہیں۔
- **مناسب TTL سیٹ کریں**: لاگت بمقابلہ تازگی کو متوازن کریں۔
- **کیش میٹرکس کی نگرانی کریں**: کیش بنانے بمقابلہ استعمال ہونے کی ٹریکنگ کریں۔
- **مشابہ درخواستوں کو بیچ میں گروپ کریں**: کیش ہٹس کو زیادہ سے زیادہ کرنے کے لیے درخواستوں کو گروپ کریں۔

## OpenRouter: فراہم کنندہ کے مخصوص کیشنگ {#openrouter-provider-specific-caching}

OpenRouter بنیادی فراہم کنندگان (OpenAI, Anthropic, وغیرہ) کے ذریعے کیشنگ کو سپورٹ کرتا ہے۔

### کنفیگریشن (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI کیشنگ استعمال کریں
    ],
];
```

### OpenRouter کیشنگ استعمال کرنا (Using OpenRouter Caching) {#using-openrouter-caching}

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

### فراہم کنندہ کے مخصوص آپشنز (Provider-Specific Options) {#provider-specific-options}

مختلف فراہم کنندگان کے پاس کیشنگ کے مختلف طریقے ہیں:

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

### OpenRouter کے لیے بہترین طریقے (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **اپنے فراہم کنندہ کی کیشنگ جانیں**: ہر فراہم کنندہ کے اپنے طریقے ہوتے ہیں۔
- **کیشنگ کے رویے کا تجربہ کریں**: تصدیق کریں کہ کیشنگ آپ کے منتخب کردہ فراہم کنندہ کے ساتھ کام کرتی ہے۔
- **اخراجات کی نگرانی کریں**: کیشنگ سے بچت کو ٹریک کریں۔
- **مستقل ماڈلز استعمال کریں**: ماڈل تبدیل کرنے سے کیش ہٹس ٹوٹ جاتے ہیں۔

## Vertex Anthropic: کیش کنٹرول کے ساتھ پرامپٹ کیشنگ {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) واضح کیش کنٹرول کے ساتھ پرامپٹ کیشنگ کو سپورٹ کرتا ہے۔

### کنفیگریشن (Configuration) {#configuration-3}

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

### Vertex Anthropic کیشنگ استعمال کرنا (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

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

// Response میں کیش میٹرکس شامل ہیں:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### کیش کنٹرول کی اقسام (Cache Control Types) {#cache-control-types}

- **ephemeral**: درخواست کی مدت کے لیے کیش (ڈیفالٹ)
- **persistent**: متعدد درخواستوں میں کیش (اگر سپورٹ کیا گیا ہو)

### کیش کے استعمال کی نگرانی کرنا (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic کے لیے بہترین طریقے (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral کیشنگ استعمال کریں**: سنگل سیشن کی کیشنگ کے لیے اچھا ہے۔
- **max_tokens مناسب سیٹ کریں**: کیش کے سائز بمقابلہ لاگت کو متوازن کریں۔
- **کیش میٹرکس کی نگرانی کریں**: کیش کی کارکردگی کو ٹریک کریں۔
- **اپنے ورک لوڈ کے ساتھ ٹیسٹ کریں**: تصدیق کریں کہ کیشنگ آپ کے استعمال کے کیس میں فائدہ مند ہے۔

## فراہم کنندہ کے درمیان کیشنگ کی حکمت عملی (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### متحد کنفیگریشن (Unified Configuration) {#unified-configuration}

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

### فراہم کنندہ کی شناخت (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// فراہم کنندہ کے مخصوص کیشنگ کنفیگریشن کا استعمال کریں
```

### فال بیک حکمت عملی (Fallback Strategy) {#fallback-strategy}

```php
try {
    // بنیادی فراہم کنندہ کے ساتھ کیشنگ کرنے کی کوشش کریں
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // کیشنگ کے بغیر درخواست پر واپس جائیں
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## لاگت کو بہتر بنانا (Cost Optimization) {#cost-optimization}

### بچت کا حساب لگانا (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// عام قیمتیں (فراہم کنندہ کے لحاظ سے مختلف):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 گنا سستا
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 گنا سستا
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### بہتری کے نکات (Optimization Tips) {#optimization-tips}

- **بڑے سسٹم پرامپٹس کیش کریں**: سب سے زیادہ لاگت کی بچت۔
- **کنٹیکسٹ کا دوبارہ استعمال کریں**: اکثر استعمال ہونے والے کنٹیکسٹ دستاویزات کو کیش کریں۔
- **درخواستوں کو بیچ میں گروپ کریں**: کیش ہٹس کو زیادہ سے زیادہ کرنے کے لیے ملتا جلتا کام کریں۔
- **کیش کی کارکردگی کی نگرانی کریں**: اصل بچت کو ٹریک کریں۔
- **TTL ایڈجسٹ کریں**: لاگت بمقابلہ تازگی کو متوازن کریں۔

## مسائل کا حل (Troubleshooting) {#troubleshooting}

### کیش استعمال نہیں ہو رہا (Cache not being used) {#cache-not-being-used}

- تصدیق کریں کہ کنفیگریشن میں کیشنگ فعال ہے۔
- چیک کریں کہ پرامپٹس بالکل ایک جیسے ہیں (کیشنگ کے لیے بالکل مطابقت ضروری ہے)۔
- تصدیق کریں کہ کیش کی میعاد ختم نہیں ہوئی ہے۔
- فراہم کنندہ کے مخصوص کیش محدودات (limits) چیک کریں۔

### کیش بنانے میں ناکامی (Cache creation failing) {#cache-creation-failing}

- تصدیق کریں کہ کیش کا سائز فراہم کنندہ کی حد کے اندر ہے۔
- چیک کریں کہ کیش کنٹرول کی Syntax درست ہے۔
- یقینی بنائیں کہ فراہم کنندہ آپ کے ماڈل کے لیے کیشنگ کو سپورٹ کرتا ہے۔
- محدودات کے لیے فراہم کنندہ کی دستاویزات کا جائزہ لیں۔

### غیر متوقع اخراجات (Unexpected costs) {#unexpected-costs}

- کیش بنانے بمقابلہ کیش پڑھنے والے ٹوکنز کی نگرانی کریں۔
- تصدیق کریں کہ کیش واقعی استعمال ہو رہا ہے۔
- پرامپٹ میں تبدیلیوں کی وجہ سے کیش مس (cache misses) کی جانچ کریں۔
- TTL یا کیش کی حکمت عملی کو ایڈجسٹ کرنے پر غور کریں۔

## فراہم کنندہ کا موازنہ (Provider Comparison) {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | | | | |
