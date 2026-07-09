---
title: ပရိုဗိုင်ဒါကို သိရှိသော ပရော့မတ် ကက်ရှ်လုပ်ခြင်း
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# ပံ့ပိုးပေးသူအလိုက် သိရှိသော Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 မှာ **provider-aware prompt caching** ကို မိတ်ဆက်ပေးလိုက်ပါတယ်။ ဒီအင်္ဂါရပ်က LLM ပံ့ပိုးပေးသူ (providers) အမျိုးမျိုးမှာ prompt တွေကို cache လုပ်ပေးခြင်းအားဖြင့် API ကုန်ကျစရိတ်နဲ့ အချိန်နှောင့်နှေးမှု (latency) တွေကို အကောင်းဆုံးဖြစ်အောင် လုပ်ဆောင်ပေးပါတယ်။ ပံ့ပိုးပေးသူ တစ်ခုချင်းစီမှာ cache လုပ်တဲ့ ယန္တရားနဲ့ စနစ်ဖွဲ့စည်းမှုတွေ မတူညီပါဘူး။

## အကျဉ်းချုပ် (Overview) {#overview}

Prompt caching ကို အသုံးပြုခြင်းအားဖြင့် အောက်ပါအရာများကို လုပ်ဆောင်နိုင်ပါတယ်-

- မကြာခဏ အသုံးပြုရတဲ့ prompt ကြီးတွေကို cache လုပ်ထားနိုင်ခြင်း
- ထပ်ခါထပ်ခါ လုပ်ဆောင်ရတဲ့ အလုပ်တွေကို ရှောင်ရှားခြင်းအားဖြင့် API ကုန်ကျစရိတ်ကို လျှော့ချနိုင်ခြင်း
- cache လုပ်ထားတဲ့ request တွေအတွက် အချိန်နှောင့်နှေးမှု (latency) ကို မြှင့်တင်ပေးနိုင်ခြင်း
- cache ရဲ့ ဘဝသံသရာ (lifecycle) ကို ကိုယ်တိုင် စီမံခန့်ခွဲနိုင်ခြင်း

ပံ့ပိုးပေးသူ အမျိုးမျိုးက cache လုပ်တဲ့ နည်းလမ်းတွေကို မတူညီစွာ အကောင်အထည်ဖော်ထားပါတယ်-

- **Google Gemini**: `cachedContents` API ကို အသုံးပြုသည်
- **Azure OpenAI**: TTL (Time To Live) နဲ့ Prompt caching ကို အသုံးပြုသည်
- **OpenRouter**: ပံ့ပိုးပေးသူအလိုက် cache လုပ်သည်
- **Vertex Anthropic**: Cache control နဲ့ Prompt caching ကို အသုံးပြုသည်

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini က `cachedContents` API ကို အသုံးပြုပြီး cache ကို ရှင်းရှင်းလင်းလင်း စီမံခန့်ခွဲနိုင်ပါတယ်။

### စနစ်ဖွဲ့စည်းမှု (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // စက္ကန့် ၁ နာရီ
        'max_tokens' => 1000000, // cache လုပ်နိုင်တဲ့ အများဆုံး tokens
    ],
];
```

### Cache လုပ်ထားတဲ့ Prompt တစ်ခုကို ဖန်တီးခြင်း (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

// ပြန်ရသည်: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Cache လုပ်ထားတဲ့ Prompt ကို အသုံးပြုခြင်း (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache ဘဝသံသရာ (Cache Lifecycle) {#cache-lifecycle}

```php
// cache လုပ်ထားတဲ့ အကြောင်းအရာတွေကို စာရင်းထုတ်ခြင်း
$caches = $gemini->list_cached_contents();

// cache အသေးစိတ်အချက်အလက် ရယူခြင်း
$cache = $gemini->get_cached_content( 'abc123' );

// cache TTL ကို တိုးမြှင့်ခြင်း
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // ၂ နာရီအထိ တိုးမြှင့်သည်
);

// cache ဖျက်ခြင်း
$gemini->delete_cached_content( 'abc123' );
```

### Gemini အတွက် အကောင်းဆုံး လုပ်ဆောင်မှုများ (Best Practices for Gemini) {#best-practices-for-gemini}

- **သင့်တော်တဲ့ TTL ကို သတ်မှတ်ပါ**: ကုန်ကျစရိတ်သက်သာမှုနဲ့ cache ဟောင်းနွမ်းမှုကြား မျှတအောင် လုပ်ပါ။
- **System prompts တွေကို cache လုပ်ပါ**: request အများအပြားမှာ တူညီတဲ့ system prompt ကို ပြန်လည်အသုံးပြုပါ။
- **Cache အသုံးပြုမှုကို စောင့်ကြည့်ပါ**: ဘယ် cache တွေက အများဆုံး အသုံးပြုလဲဆိုတာ စစ်ဆေးပါ။
- **သက်တမ်းကုန်တဲ့ cache တွေကို ရှင်းလင်းပါ**: အသုံးမပြုတော့တဲ့ cache တွေကို ပုံမှန်ဖျက်ပေးပါ။

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI က automatic TTL စီမံခန့်ခွဲမှုနဲ့ prompt caching ကို ပံ့ပိုးပေးပါတယ်။

### စနစ်ဖွဲ့စည်းမှု (Configuration) {#configuration-1}

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

### Caching ကို ဖွင့်ခြင်း (Enabling Caching) {#enabling-caching}

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

// Response မှာ cache အသုံးပြုမှု ပါဝင်ပါတယ်:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Headers များ (Cache Headers) {#cache-headers}

Azure OpenAI က cache ထိန်းချုပ်မှုအတွက် HTTP headers တွေကို အသုံးပြုပါတယ်-

```
Cache-Control: max_age=3600
```

ပံ့ပိုးထားတဲ့ တန်ဖိုးများ (Supported values):

- `max_age=<seconds>`: သတ်မှတ်ထားတဲ့ ကာလအတွင်း cache လုပ်ထားမည်
- `no_cache`: ဒီ request ကို cache မလုပ်ပါနဲ့
- `no_store`: cache မလုပ်ဘဲ ပြန်အသုံးပြုတာမျိုးလည်း မလုပ်ပါနဲ့

### Cache အသုံးပြုမှုကို စောင့်ကြည့်ခြင်း (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache ဖန်တီးမှု: $cache_tokens tokens\n";
echo "Cache အသုံးပြုမှု: $cache_hits tokens\n";
```

### Azure OpenAI အတွက် အကောင်းဆုံး လုပ်ဆောင်မှုများ (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **တသမတ်တည်း prompt များကို အသုံးပြုပါ**: တူညီတဲ့ prompt တွေက cache လုပ်တာကို အကျိုးရှိစေပါတယ်။
- **သင့်တင့်တဲ့ TTL ကို သတ်မှတ်ပါ**: ကုန်ကျစရိတ်နဲ့ အသစ်ဖြစ်မှုကြား မျှတအောင် လုပ်ပါ။
- **Cache metrics တွေကို စောင့်ကြည့်ပါ**: cache ဖန်တီးမှုနဲ့ အသုံးပြုမှုတွေကို စစ်ဆေးပါ။
- **request တွေကို အစုအဝေးအဖြစ် လုပ်ပါ**: cache hit တွေကို အများဆုံးရဖို့ request တွေကို အုပ်စုဖွဲ့ပါ။

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter က အောက်ခံ ပံ့ပိုးပေးသူတွေ (OpenAI, Anthropic စသည်) ကနေတစ်ဆင့် cache ကို ပံ့ပိုးပေးပါတယ်။

### စနစ်ဖွဲ့စည်းမှု (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI ရဲ့ caching ကို အသုံးပြုမည်
    ],
];
```

### OpenRouter Caching ကို အသုံးပြုခြင်း (Using OpenRouter Caching) {#using-openrouter-caching}

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

### ပံ့ပိုးပေးသူအလိုက် ရွေးချယ်စရာများ (Provider-Specific Options) {#provider-specific-options}

ပံ့ပိုးပေးသူ အမျိုးမျိုးမှာ cache လုပ်တဲ့ ယန္တရားတွေ မတူညီပါဘူး-

```php
// OpenAI နဲ့ ကိုက်ညီတဲ့ caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic နဲ့ ကိုက်ညီတဲ့ caching
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

### OpenRouter အတွက် အကောင်းဆုံး လုပ်ဆောင်မှုများ (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **သင့်ပံ့ပိုးပေးသူရဲ့ caching ကို သိပါ**: ပံ့ပိုးပေးသူ တစ်ခုချင်းစီမှာ ယန္တရား မတူပါဘူး။
- **Caching အပြုအမူကို စမ်းသပ်ပါ**: ရွေးချယ်ထားတဲ့ ပံ့ပိုးပေးသူနဲ့ cache လုပ်တာ အဆင်ပြေရဲ့လားဆိုတာ စစ်ဆေးပါ။
- **ကုန်ကျစရိတ်ကို စောင့်ကြည့်ပါ**: cache လုပ်ခြင်းကနေ ဘယ်လောက်သက်သာလဲဆိုတာ စစ်ဆေးပါ။
- **တသမတ်တည်း model တွေကို အသုံးပြုပါ**: model ပြောင်းလဲတာက cache hit တွေကို ပျက်စေပါတယ်။

## Vertex Anthropic: Cache Control နဲ့ Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) က explicit cache control နဲ့ prompt caching ကို ပံ့ပိုးပေးပါတယ်။

### စနစ်ဖွဲ့စည်းမှု (Configuration) {#configuration-3}

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

### Vertex Anthropic Caching ကို အသုံးပြုခြင်း (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

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

// Response မှာ cache metrics ပါဝင်ပါတယ်:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Cache Control အမျိုးအစားများ (Cache Control Types) {#cache-control-types}

- **ephemeral**: request တစ်ခုရဲ့ ကာလအတွင်း cache လုပ်ထားခြင်း (default)
- **persistent**: request အများအပြားမှာ cache လုပ်ထားခြင်း (ပံ့ပိုးပေးရင်)

### Cache အသုံးပြုမှုကို စောင့်ကြည့်ခြင်း (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache ဖန်တီးမှု: $cache_created tokens\n";
echo "Cache ဖတ်ယူမှု: $cache_read tokens\n";
```

### Vertex Anthropic အတွက် အကောင်းဆုံး လုပ်ဆောင်မှုများ (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral caching ကို အသုံးပြုပါ**: session တစ်ခုအတွင်း cache လုပ်ဖို့ အကောင်းဆုံးပါ။
- **max_tokens ကို သင့်လျော်စွာ သတ်မှတ်ပါ**: cache အရွယ်အစားနဲ့ ကုန်ကျစရိတ်ကြား မျှတအောင် လုပ်ပါ။
- **Cache metrics တွေကို စောင့်ကြည့်ပါ**: cache ဘယ်လောက်ထိရောက်လဲဆိုတာ စစ်ဆေးပါ။
- **သင့်အလုပ်ဝန်ပမာဏနဲ့ စမ်းသပ်ပါ**: cache လုပ်ခြင်းက သင့်အသုံးပြုမှုအတွက် အကျိုးရှိရဲ့လားဆိုတာ စစ်ဆေးပါ။

## ပံ့ပိုးပေးသူအချင်းချင်း Cache လုပ်တဲ့ နည်းဗျူဟာ (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### စနစ်ဖွဲ့စည်းမှု ပေါင်းစပ်ခြင်း (Unified Configuration) {#unified-configuration}

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

### ပံ့ပိုးပေးသူကို သိရှိခြင်း (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// ပံ့ပိုးပေးသူအလိုက် cache စနစ်ဖွဲ့စည်းမှုကို အသုံးပြုပါ
```

### ပြန်လည်ရရှိရေး နည်းဗျူဟာ (Fallback Strategy) {#fallback-strategy}

```php
try {
    // အဓိက ပံ့ပိုးပေးသူနဲ့ cache လုပ်ဖို့ ကြိုးစားခြင်း
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // cache မလုပ်ဘဲ request အတိုင်း ပြန်လည်ရရှိခြင်း
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## ကုန်ကျစရိတ် အကောင်းဆုံးဖြစ်အောင် လုပ်ဆောင်ခြင်း (Cost Optimization) {#cost-optimization}

### သက်သာငွေ တွက်ချက်ခြင်း (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// ပုံမှန်စျေးနှုန်း (ပံ့ပိုးပေးသူအလိုက် ကွဲပြားသည်):
$cache_creation_cost = $cache_created_tokens * 0.00001; // ၁၀ ဆ စျေးသက်သာသည်
$cache_read_cost = $cache_read_tokens * 0.000001; // ၁၀၀ ဆ စျေးသက်သာသည်
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "ခန့်မှန်းသက်သာငွေ: \$$savings\n";
```

### အကောင်းဆုံး လုပ်ဆောင်မှု အကြံပြုချက်များ (Optimization Tips) {#optimization-tips}

- **System prompts ကြီးတွေကို cache လုပ်ပါ**: အများဆုံး ကုန်ကျစရိတ် သက်သာစေပါတယ်။
- **Context ကို ပြန်လည်အသုံးပြုပါ**: မကြာခဏ အသုံးပြုရတဲ့ context စာရွက်စာတမ်းတွေကို cache လုပ်ပါ။
- **အမြဲတမ်း စစ်ဆေးပါ**:

---

## အနှစ်ချုပ် {#troubleshooting}

*   **အဓိကရည်ရွယ်ချက်:** API ခေါ်ဆိုမှုများ၏ ကုန်ကျစရိတ်ကို လျှော့ချရန်နှင့် စွမ်းဆောင်ရည်မြှင့်တင်ရန်။
*   **အလုပ်လုပ်ပုံ:** အလားတူ input များအတွက် အဖြေများကို သိမ်းဆည်းထားခြင်း (Caching)။
*   **အကျိုးကျေးဇူး:**
    *   **ကုန်ကျစရိတ်သက်သာခြင်း:** API ခေါ်ဆိုမှုအရေအတွက် လျော့ကျခြင်း။
    *   **အမြန်နှုန်း:** သိမ်းဆည်းထားသော အဖြေများကို ချက်ချင်းရရှိခြင်း။
    *   **စွမ်းဆောင်ရည်:** စနစ်၏ တုံ့ပြန်မှုမြန်ဆန်ခြင်း။
*   **အကောင်အထည်ဖော်ရန်:**
    1.  **Cache Key:** Input ကို အခြေခံ၍ ထူးခြားသော key တစ်ခု ဖန်တီးခြင်း။
    2.  **Cache Storage:** Key နှင့် အဖြေကို သိမ်းဆည်းရန် နေရာ (ဥပမာ- Redis)။
    3.  **Logic:** API ခေါ်ဆိုမှုမပြုမီ Cache ကို စစ်ဆေးခြင်း။
*   **သတိပြုရန်:**
    *   **Cache Invalidation:** အချက်အလက် အသစ်ရောက်လာပါက Cache ကို မပျက်စေရန် စီမံခန့်ခွဲရမည်။
    *   **Cache Hit/Miss:** Cache တွင် အဖြေရှိခြင်း (Hit) နှင့် မရှိခြင်း (Miss) ကို ခွဲခြားသိရှိရန်။
