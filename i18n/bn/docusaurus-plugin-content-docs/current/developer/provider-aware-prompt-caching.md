---
title: প্রদানকারী-সচেতন প্রম্পট ক্যাশিং
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# প্রোভাইডার-সচেতন প্রম্পট ক্যাশিং {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0-এ **প্রোভাইডার-সচেতন প্রম্পট ক্যাশিং** যুক্ত করা হয়েছে। এটি বিভিন্ন LLM প্রোভাইডারের জুড়ে প্রম্পট ক্যাশ করার মাধ্যমে API খরচ এবং ল্যাটেন্সি অপটিমাইজ করে। প্রতিটি প্রোভাইডারের ক্যাশিং মেকানিজম এবং কনফিগারেশন ভিন্ন।

## ওভারভিউ {#overview}

প্রম্পট ক্যাশিং আপনাকে যা করতে সাহায্য করে:

- বড় এবং প্রায়শই ব্যবহৃত প্রম্পট ক্যাশ করা যায়
- অপ্রয়োজনীয় প্রক্রিয়াকরণ এড়িয়ে API খরচ কমানো যায়
- ক্যাশ করা অনুরোধগুলির জন্য ল্যাটেন্সি উন্নত হয়
- ক্যাশের লাইফসাইকেল স্পষ্টভাবে পরিচালনা করা যায়

বিভিন্ন প্রোভাইডার ভিন্নভাবে ক্যাশিং প্রয়োগ করে:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL সহ প্রম্পট ক্যাশিং
- **OpenRouter**: প্রোভাইডার-নির্দিষ্ট ক্যাশিং
- **Vertex Anthropic**: ক্যাশ কন্ট্রোল সহ প্রম্পট ক্যাশিং

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini, `cachedContents` API এর মাধ্যমে স্পষ্ট ক্যাশ ম্যানেজমেন্ট প্রদান করে।

### কনফিগারেশন {#configuration}

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

### একটি ক্যাশড প্রম্পট তৈরি করা {#creating-a-cached-prompt}

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

### একটি ক্যাশড প্রম্পট ব্যবহার করা {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### ক্যাশ লাইফসাইকেল {#cache-lifecycle}

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

### Gemini-এর জন্য সেরা অনুশীলন {#best-practices-for-gemini}

- **উপযুক্ত TTL সেট করুন**: খরচ বাঁচানো বনাম ক্যাশ ডেটা পুরোনো হয়ে যাওয়া—এর মধ্যে ভারসাম্য বজায় রাখুন
- **সিস্টেম প্রম্পট ক্যাশ করুন**: অনুরোধ জুড়ে একই সিস্টেম প্রম্পট পুনরায় ব্যবহার করুন
- **ক্যাশ ব্যবহার পর্যবেক্ষণ করুন**: কোন ক্যাশগুলি সবচেয়ে বেশি ব্যবহৃত হচ্ছে তা ট্র্যাক করুন
- **মেয়াদোত্তীর্ণ ক্যাশ পরিষ্কার করুন**: নিয়মিতভাবে অব্যবহৃত ক্যাশ মুছে ফেলুন

## Azure OpenAI: প্রম্পট ক্যাশিং {#azure-openai-prompt-caching}

Azure OpenAI স্বয়ংক্রিয় TTL ম্যানেজমেন্ট সহ প্রম্পট ক্যাশিং সমর্থন করে।

### কনফিগারেশন {#configuration-1}

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

### ক্যাশিং সক্ষম করা {#enabling-caching}

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

### ক্যাশ হেডার্স {#cache-headers}

Azure OpenAI ক্যাশ নিয়ন্ত্রণের জন্য HTTP হেডার ব্যবহার করে:

```
Cache-Control: max_age=3600
```

সমর্থিত মানগুলি:

- `max_age=<seconds>`: নির্দিষ্ট সময়ের জন্য ক্যাশ করুন
- `no_cache`: এই অনুরোধটি ক্যাশ করবেন না
- `no_store`: ক্যাশ করবেন না এবং পুনরায় ব্যবহার করবেন না

### ক্যাশ ব্যবহার পর্যবেক্ষণ করা {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI-এর জন্য সেরা অনুশীলন {#best-practices-for-azure-openai}

- **ধারাবাহিক প্রম্পট ব্যবহার করুন**: অভিন্ন প্রম্পট ক্যাশিংয়ের সুবিধা পায়
- **যৌক্তিক TTL সেট করুন**: খরচ বনাম ডেটার সতেজতার মধ্যে ভারসাম্য বজায় রাখুন
- **ক্যাশ মেট্রিক্স পর্যবেক্ষণ করুন**: ক্যাশ তৈরি বনাম হিট ট্র্যাক করুন
- **একই ধরনের অনুরোধ ব্যাচ করুন**: ক্যাশ হিট সর্বাধিক করার জন্য অনুরোধগুলিকে গ্রুপ করুন

## OpenRouter: প্রোভাইডার-নির্দিষ্ট ক্যাশিং {#openrouter-provider-specific-caching}

OpenRouter অন্তর্নিহিত প্রোভাইডারগুলির (OpenAI, Anthropic, ইত্যাদি) মাধ্যমে ক্যাশিং সমর্থন করে।

### কনফিগারেশন {#configuration-2}

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

### OpenRouter ক্যাশিং ব্যবহার করা {#using-openrouter-caching}

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

### প্রোভাইডার-নির্দিষ্ট অপশন {#provider-specific-options}

বিভিন্ন প্রোভাইডারের ক্যাশিং মেকানিজম ভিন্ন:

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

### OpenRouter-এর জন্য সেরা অনুশীলন {#best-practices-for-openrouter}

- **আপনার প্রোভাইডারের ক্যাশিং জানুন**: প্রতিটি প্রোভাইডারের ভিন্ন মেকানিজম রয়েছে
- **ক্যাশিং আচরণ পরীক্ষা করুন**: আপনার নির্বাচিত প্রোভাইডারের সাথে ক্যাশিং কাজ করছে কিনা তা যাচাই করুন
- **খরচ পর্যবেক্ষণ করুন**: ক্যাশিং থেকে সঞ্চয় ট্র্যাক করুন
- **ধারাবাহিক মডেল ব্যবহার করুন**: মডেল পরিবর্তন করলে ক্যাশ হিট নষ্ট হয়

## Vertex Anthropic: ক্যাশ কন্ট্রোল সহ প্রম্পট ক্যাশিং {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) স্পষ্ট ক্যাশ কন্ট্রোল সহ প্রম্পট ক্যাশিং সমর্থন করে।

### কনফিগারেশন {#configuration-3}

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

### Vertex Anthropic ক্যাশিং ব্যবহার করা {#using-vertex-anthropic-caching}

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

### ক্যাশ কন্ট্রোল প্রকারভেদ {#cache-control-types}

- **ephemeral**: অনুরোধের সময়কালের জন্য ক্যাশ (ডিফল্ট)
- **persistent**: একাধিক অনুরোধ জুড়ে ক্যাশ (যদি সমর্থিত হয়)

### ক্যাশ ব্যবহার পর্যবেক্ষণ করা {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic-এর জন্য সেরা অনুশীলন {#best-practices-for-vertex-anthropic}

- **ephemeral ক্যাশিং ব্যবহার করুন**: একক সেশনের জন্য ভালো
- **max_tokens উপযুক্তভাবে সেট করুন**: ক্যাশ সাইজ বনাম খরচের মধ্যে ভারসাম্য বজায় রাখুন
- **ক্যাশ মেট্রিক্স পর্যবেক্ষণ করুন**: ক্যাশের কার্যকারিতা ট্র্যাক করুন
- **আপনার ওয়ার্কলোড দিয়ে পরীক্ষা করুন**: নিশ্চিত করুন যে ক্যাশিং আপনার ব্যবহারের ক্ষেত্রে সুবিধা দিচ্ছে

## ক্রস-প্রোভাইডার ক্যাশিং কৌশল {#cross-provider-caching-strategy}

### একত্রিত কনফিগারেশন {#unified-configuration}

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

### প্রোভাইডার সনাক্তকরণ {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### ফলব্যাক কৌশল {#fallback-strategy}

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

## খরচ অপটিমাইজেশন {#cost-optimization}

### সঞ্চয় গণনা করা {#calculate-savings}

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

### অপটিমাইজেশনের টিপস {#optimization-tips}

- **বড় সিস্টেম প্রম্পট ক্যাশ করুন**: সবচেয়ে বেশি খরচ বাঁচানো যায়
- **কনটেক্সট পুনরায় ব্যবহার করুন**: প্রায়শই ব্যবহৃত কনটেক্সট ডকুমেন্ট ক্যাশ করুন
- **অনুরোধ ব্যাচ করুন**: ক্যাশ হিট সর্বাধিক করার জন্য অনুরূপ অনুরোধগুলিকে গ্রুপ করুন
- **ক্যাশ কার্যকারিতা পর্যবেক্ষণ করুন**: প্রকৃত সঞ্চয় ট্র্যাক করুন
- **TTL অ্যাডজাস্ট করুন**: খরচ বনাম সতেজতার মধ্যে ভারসাম্য বজায় রাখুন

## সমস্যা সমাধান {#troubleshooting}

### ক্যাশ ব্যবহার না হওয়া {#cache-not-being-used}

- কনফিগারেশনে ক্যাশিং সক্ষম করা আছে কিনা তা যাচাই করুন
- প্রম্পটগুলি অভিন্ন কিনা তা পরীক্ষা করুন (ক্যাশিংয়ের জন্য সঠিক মিল প্রয়োজন)
- ক্যাশ মেয়াদোত্তীর্ণ হয়নি তা যাচাই করুন
- প্রোভাইডার-নির্দিষ্ট ক্যাশ সীমা পরীক্ষা করুন

### ক্যাশ তৈরি ব্যর্থ হওয়া {#cache-creation-failing}

- ক্যাশ সাইজ প্রোভাইডার সীমার মধ্যে আছে কিনা তা যাচাই করুন
- ক্যাশ কন্ট্রোল সিনট্যাক্স সঠিক কিনা তা পরীক্ষা করুন
- প্রোভাইডারটি আপনার মডেলের জন্য ক্যাশিং সমর্থন করে কিনা তা নিশ্চিত করুন
- সীমাবদ্ধতার জন্য প্রোভাইডার ডকুমেন্টেশন পর্যালোচনা করুন

### অপ্রত্যাশিত খরচ {#unexpected-costs}

- ক্যাশ তৈরি বনাম ক্যাশ রিড টোকেন পর্যবেক্ষণ করুন
- ক্যাশ সত্যিই ব্যবহার করা হচ্ছে কিনা তা যাচাই করুন
- প্রম্পট পরিবর্তনের কারণে ক্যাশ মিস হচ্ছে কিনা তা পরীক্ষা করুন
- TTL বা ক্যাশ কৌশল সামঞ্জস্য করার কথা বিবেচনা করুন

## প্রোভাইডার তুলনা {#provider-comparison}

| ফিচার | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## পরবর্তী পদক্ষেপ {#next-steps}

1. **আপনার প্রোভাইডার বেছে নিন**: আপনার প্রয়োজন অনুযায়ী নির্বাচন করুন
2. **ক্যাশিং কনফিগার করুন**: প্রোভাইডার-নির্দিষ্ট ক্যাশিং সেটআপ করুন
3. **ক্যাশিং পরীক্ষা করুন**: আপনার প্রম্পটগুলির সাথে এটি কাজ করছে কিনা তা যাচাই করুন
4. **ব্যবহার পর্যবেক্ষণ করুন**: ক্যাশ হিট এবং খরচ সঞ্চয় ট্র্যাক করুন
5. **অপটিমাইজ করুন**: ফলাফলের ভিত্তিতে TTL এবং ক্যাশ কৌশল অ্যাডজাস্ট করুন
