---
title: د چمتوکوونکي په پام کې نیولو سره د پرامپټ زېرمه کول
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# د چمتوکوونکي-خبر پرومپټ زېرمه کول

Superdav AI Agent v1.12.0 **د چمتوکوونکي-خبر پرومپټ زېرمه کول** معرفي کوي، چې د بېلابېلو LLM چمتوکوونکو ترمنځ د پرومپټونو په زېرمه کولو سره د API لګښتونه او ځنډ ښه کوي. هر چمتوکوونکی بېلابېل د زېرمه کولو میکانېزمونه او تنظیمات لري.

## عمومي کتنه {#overview}

د پرومپټ زېرمه کول تاسو ته اجازه درکوي چې:

- لوی، ډېر کارېدونکي پرومپټونه زېرمه کړئ
- د تکراري پروسس له مخنیوي سره د API لګښتونه کم کړئ
- د زېرمه شوو غوښتنو لپاره ځنډ ښه کړئ
- د زېرمه ژوندپړاو په څرګند ډول مدیریت کړئ

بېلابېل چمتوکوونکي زېرمه کول په بېلابېلو ډولونو پلي کوي:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: د TTL سره د پرومپټ زېرمه کول
- **OpenRouter**: د چمتوکوونکي-ځانګړي زېرمه کول
- **Vertex Anthropic**: د زېرمه کنټرول سره د پرومپټ زېرمه کول

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini د `cachedContents` API له لارې څرګند زېرمه مدیریت برابروي.

### تنظیمات {#configuration}

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

### د زېرمه شوي پرومپټ جوړول {#creating-a-cached-prompt}

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

### د زېرمه شوي پرومپټ کارول {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### د زېرمه ژوندپړاو {#cache-lifecycle}

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

### د Gemini لپاره غوره کړنلارې {#best-practices-for-gemini}

- **مناسب TTL وټاکئ**: د لګښت سپما او د زېرمه زړېدو ترمنځ توازن وساتئ
- **سیسټم پرومپټونه زېرمه کړئ**: په غوښتنو کې هماغه سیسټم پرومپټ بیا وکاروئ
- **د زېرمه کارونه وڅارئ**: وڅارئ چې کومې زېرمې تر ټولو ډېرې کارول کېږي
- **ختمې شوې زېرمې پاکې کړئ**: ناکارېدلې زېرمې په دوره‌یي ډول ړنګې کړئ

## Azure OpenAI: د پرومپټ زېرمه کول {#azure-openai-prompt-caching}

Azure OpenAI د اتومات TTL مدیریت سره د پرومپټ زېرمه کولو ملاتړ کوي.

### تنظیمات {#configuration-1}

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

### د زېرمه کولو فعالول {#enabling-caching}

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

### د زېرمه سرلیکونه {#cache-headers}

Azure OpenAI د زېرمه کنټرول لپاره HTTP سرلیکونه کاروي:

```
Cache-Control: max_age=3600
```

ملاتړ شوي ارزښتونه:

- `max_age=<seconds>`: د ټاکلې مودې لپاره زېرمه کول
- `no_cache`: دا غوښتنه مه زېرمه کوئ
- `no_store`: مه یې زېرمه کوئ او بیا یې مه کاروئ

### د زېرمه کارونې څارنه {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### د Azure OpenAI لپاره غوره کړنلارې {#best-practices-for-azure-openai}

- **ثابت پرومپټونه وکاروئ**: یو شان پرومپټونه له زېرمه کولو ګټه اخلي
- **معقول TTL وټاکئ**: د لګښت او تازه‌والي ترمنځ توازن وساتئ
- **د زېرمه مېټریکونه وڅارئ**: د زېرمه جوړېدو او هټونو ترمنځ څارنه وکړئ
- **ورته غوښتنې په ډلو کې واستوئ**: غوښتنې ګروپ کړئ څو د زېرمه هټونه اعظمي شي

## OpenRouter: د چمتوکوونکي-ځانګړي زېرمه کول {#openrouter-provider-specific-caching}

OpenRouter د بنسټیزو چمتوکوونکو (OpenAI، Anthropic، او نور) له لارې د زېرمه کولو ملاتړ کوي.

### تنظیمات {#configuration-2}

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

### د OpenRouter زېرمه کولو کارول {#using-openrouter-caching}

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

### د چمتوکوونکي-ځانګړي اختیارونه {#provider-specific-options}

بېلابېل چمتوکوونکي د زېرمه کولو بېلابېل میکانېزمونه لري:

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

### د OpenRouter لپاره غوره کړنلارې {#best-practices-for-openrouter}

- **د خپل چمتوکوونکي زېرمه کول وپېژنئ**: هر چمتوکوونکی بېلابېل میکانېزمونه لري
- **د زېرمه کولو چلند وازمویئ**: ډاډ ترلاسه کړئ چې زېرمه کول ستاسو له ټاکل شوي چمتوکوونکي سره کار کوي
- **لګښتونه وڅارئ**: له زېرمه کولو څخه سپما وڅارئ
- **ثابت ماډلونه وکاروئ**: د ماډلونو بدلول د زېرمه هټونه ماتوي

## Vertex Anthropic: د زېرمه کنټرول سره د پرومپټ زېرمه کول {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) د څرګند زېرمه کنټرول سره د پرومپټ زېرمه کولو ملاتړ کوي.

### تنظیمات {#configuration-3}

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

### د Vertex Anthropic Caching کارول {#using-vertex-anthropic-caching}

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

### د Cache Control ډولونه {#cache-control-types}

- **ephemeral**: د غوښتنې د مودې لپاره Cache (اصلي)
- **persistent**: د څو غوښتنو ترمنځ Cache (که ملاتړ یې کېږي)

### د Cache کارونې څارنه {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### د Vertex Anthropic لپاره غوره کړنې {#best-practices-for-vertex-anthropic}

- **ephemeral caching وکاروئ**: د یوې ناستې caching لپاره ښه دی
- **max_tokens مناسب وټاکئ**: د cache اندازې او لګښت ترمنځ توازن وساتئ
- **د cache metrics وڅارئ**: د cache اغېزمنتیا تعقیب کړئ
- **له خپل کاري بار سره ازموینه وکړئ**: ډاډ ترلاسه کړئ چې caching ستاسو د کارونې حالت ته ګټه رسوي

## د برابرونکو ترمنځ Caching تګلاره {#cross-provider-caching-strategy}

### یوځای شوی Configuration {#unified-configuration}

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

### د Provider پېژندنه {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### د Fallback تګلاره {#fallback-strategy}

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

## د لګښت ښه کول {#cost-optimization}

### سپما محاسبه کړئ {#calculate-savings}

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

### د ښه کولو لارښوونې {#optimization-tips}

- **لوی system prompts Cache کړئ**: تر ټولو لویه د لګښت سپما
- **context بیا وکاروئ**: ډېر کارېدونکي context سندونه Cache کړئ
- **غوښتنې batch کړئ**: ورته غوښتنې سره ګروپ کړئ څو cache hits زیات شي
- **د cache اغېزمنتیا وڅارئ**: حقیقي سپما تعقیب کړئ
- **TTL عیار کړئ**: د لګښت او تازه‌والي ترمنځ توازن وساتئ

## د ستونزو حل {#troubleshooting}

### Cache نه کارېږي {#cache-not-being-used}

- تایید کړئ چې caching په configuration کې فعال دی
- وګورئ چې prompts یو شان دي (caching دقیق برابرښت ته اړتیا لري)
- تایید کړئ چې cache نه دی پای ته رسېدلی
- د provider ځانګړي cache حدود وګورئ

### د Cache جوړول ناکامېږي {#cache-creation-failing}

- تایید کړئ چې د cache اندازه د provider حدودو دننه ده
- وګورئ چې د cache control syntax سم دی
- ډاډ ترلاسه کړئ چې provider ستاسو د model لپاره caching ملاتړ کوي
- د محدودیتونو لپاره د provider documentation بیا وګورئ

### ناڅاپي لګښتونه {#unexpected-costs}

- د cache جوړولو او cache read tokens څارنه وکړئ
- تایید کړئ چې cache په رښتیا کارېږي
- د prompt بدلونونو له امله cache misses وګورئ
- د TTL یا cache تګلارې عیارول په پام کې ونیسئ

## د Provider پرتله {#provider-comparison}

| ځانګړنه | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| د TTL کنټرول | Explicit | د headers له لارې | Provider-dependent | Ephemeral/persistent |
| اعظمي cache اندازه | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| د لګښت کمښت | 90% | 90% | Provider-dependent | 90% |
| څارنه | تفصیلي | د metrics له لارې | Provider-dependent | د usage له لارې |

## راتلونکي ګامونه {#next-steps}

1. **خپل provider وټاکئ**: د خپلو اړتیاوو پر بنسټ انتخاب وکړئ
2. **caching تنظیم کړئ**: د provider ځانګړې caching جوړه کړئ
3. **caching وازموئ**: تایید کړئ چې له ستاسو prompts سره کار کوي
4. **usage وڅارئ**: cache hits او د لګښت سپما تعقیب کړئ
5. **ښه یې کړئ**: د پایلو پر بنسټ TTL او cache تګلاره عیار کړئ
