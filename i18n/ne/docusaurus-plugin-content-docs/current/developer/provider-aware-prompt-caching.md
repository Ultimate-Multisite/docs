---
title: प्रदायक-सचेत प्रम्प्ट क्यासिङ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-सचेत Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 ले **provider-सचेत prompt caching** परिचय गराउँछ, जसले विभिन्न LLM providers भरि prompts cache गरेर API लागत र विलम्बता अनुकूलित गर्छ। प्रत्येक provider का caching संयन्त्र र configurations फरक हुन्छन्।

## सिंहावलोकन {#overview}

Prompt caching ले तपाईंलाई यी गर्न दिन्छ:

- ठूला, बारम्बार प्रयोग हुने prompts cache गर्नु
- दोहोरिने processing जोगाएर API लागत घटाउनु
- cached requests का लागि विलम्बता सुधार गर्नु
- cache lifecycle स्पष्ट रूपमा व्यवस्थापन गर्नु

विभिन्न providers ले caching फरक तरिकाले कार्यान्वयन गर्छन्:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL सहितको Prompt caching
- **OpenRouter**: Provider-specific caching
- **Vertex Anthropic**: cache control सहितको Prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini ले `cachedContents` API मार्फत स्पष्ट cache management प्रदान गर्छ।

### Configuration {#configuration}

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

### Cached Prompt सिर्जना गर्दै {#creating-a-cached-prompt}

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

### Cached Prompt प्रयोग गर्दै {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Lifecycle {#cache-lifecycle}

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

### Gemini का लागि उत्तम अभ्यासहरू {#best-practices-for-gemini}

- **उपयुक्त TTL सेट गर्नुहोस्**: लागत बचत र cache staleness बीच सन्तुलन मिलाउनुहोस्
- **system prompts cache गर्नुहोस्**: requests भरि एउटै system prompt पुनः प्रयोग गर्नुहोस्
- **cache usage निगरानी गर्नुहोस्**: कुन caches सबैभन्दा बढी प्रयोग हुन्छन् track गर्नुहोस्
- **expired caches सफा गर्नुहोस्**: प्रयोग नभएका caches आवधिक रूपमा delete गर्नुहोस्

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI ले automatic TTL management सहित prompt caching समर्थन गर्छ।

### Configuration {#configuration-1}

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

### Caching सक्षम गर्दै {#enabling-caching}

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

### Cache Headers {#cache-headers}

Azure OpenAI ले cache control का लागि HTTP headers प्रयोग गर्छ:

```
Cache-Control: max_age=3600
```

समर्थित मानहरू:

- `max_age=<seconds>`: तोकिएको अवधिका लागि cache गर्नुहोस्
- `no_cache`: यो request cache नगर्नुहोस्
- `no_store`: cache नगर्नुहोस् र पुनः प्रयोग नगर्नुहोस्

### Cache Usage निगरानी {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI का लागि उत्तम अभ्यासहरू {#best-practices-for-azure-openai}

- **consistent prompts प्रयोग गर्नुहोस्**: समान prompts ले caching बाट लाभ लिन्छन्
- **reasonable TTL सेट गर्नुहोस्**: लागत र freshness बीच सन्तुलन मिलाउनुहोस्
- **cache metrics निगरानी गर्नुहोस्**: cache creation र hits track गर्नुहोस्
- **similar requests batch गर्नुहोस्**: cache hits अधिकतम बनाउन requests group गर्नुहोस्

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter ले underlying providers (OpenAI, Anthropic, आदि) मार्फत caching समर्थन गर्छ।

### Configuration {#configuration-2}

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

### OpenRouter Caching प्रयोग गर्दै {#using-openrouter-caching}

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

### Provider-Specific Options {#provider-specific-options}

विभिन्न providers का caching mechanisms फरक हुन्छन्:

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

### OpenRouter का लागि उत्तम अभ्यासहरू {#best-practices-for-openrouter}

- **आफ्नो provider को caching जान्नुहोस्**: प्रत्येक provider का mechanisms फरक हुन्छन्
- **caching behavior test गर्नुहोस्**: तपाईंले छानेको provider सँग caching काम गर्छ कि गर्दैन verify गर्नुहोस्
- **लागत निगरानी गर्नुहोस्**: caching बाट भएको savings track गर्नुहोस्
- **consistent models प्रयोग गर्नुहोस्**: models बदल्दा cache hits टुट्छन्

## Vertex Anthropic: Cache Control सहितको Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ले explicit cache control सहित prompt caching समर्थन गर्छ।

### Configuration {#configuration-3}

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

### Vertex Anthropic Caching प्रयोग गर्दै {#using-vertex-anthropic-caching}

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

### Cache Control प्रकारहरू {#cache-control-types}

- **ephemeral**: अनुरोधको अवधिसम्म Cache गर्नुहोस् (पूर्वनिर्धारित)
- **persistent**: धेरै अनुरोधहरूभरि Cache गर्नुहोस् (समर्थित भएमा)

### Cache प्रयोगको निगरानी {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic का लागि उत्कृष्ट अभ्यासहरू {#best-practices-for-vertex-anthropic}

- **ephemeral caching प्रयोग गर्नुहोस्**: एकल-सत्र caching का लागि राम्रो
- **max_tokens उपयुक्त रूपमा सेट गर्नुहोस्**: cache आकार र लागतबीच सन्तुलन मिलाउनुहोस्
- **cache मेट्रिक्स निगरानी गर्नुहोस्**: cache प्रभावकारिता ट्र्याक गर्नुहोस्
- **आफ्नो कार्यभारसँग परीक्षण गर्नुहोस्**: caching ले तपाईंको प्रयोग अवस्थालाई लाभ पुर्‍याउँछ कि गर्दैन प्रमाणित गर्नुहोस्

## प्रदायकहरूबीचको Caching रणनीति {#cross-provider-caching-strategy}

### एकीकृत Configuration {#unified-configuration}

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

### प्रदायक पहिचान {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback रणनीति {#fallback-strategy}

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

## लागत Optimization {#cost-optimization}

### बचत गणना गर्नुहोस् {#calculate-savings}

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

### Optimization सुझावहरू {#optimization-tips}

- **ठूला system prompts Cache गर्नुहोस्**: सबैभन्दा ठूलो लागत बचत
- **सन्दर्भ पुनः प्रयोग गर्नुहोस्**: बारम्बार प्रयोग हुने सन्दर्भ कागजातहरू Cache गर्नुहोस्
- **अनुरोधहरू Batch गर्नुहोस्**: cache hits अधिकतम बनाउन मिल्दाजुल्दा अनुरोधहरू समूहबद्ध गर्नुहोस्
- **cache प्रभावकारिता निगरानी गर्नुहोस्**: वास्तविक बचत ट्र्याक गर्नुहोस्
- **TTL समायोजन गर्नुहोस्**: लागत र ताजापनबीच सन्तुलन मिलाउनुहोस्

## समस्या समाधान {#troubleshooting}

### Cache प्रयोग भइरहेको छैन {#cache-not-being-used}

- configuration मा caching सक्षम गरिएको छ भनेर प्रमाणित गर्नुहोस्
- prompts उस्तै छन् कि छैनन् जाँच गर्नुहोस् (caching लाई ठ्याक्कै मिलान आवश्यक हुन्छ)
- cache को म्याद सकिएको छैन भनेर प्रमाणित गर्नुहोस्
- प्रदायक-विशिष्ट cache सीमाहरू जाँच गर्नुहोस्

### Cache सिर्जना असफल हुँदैछ {#cache-creation-failing}

- cache आकार प्रदायक सीमाभित्र छ भनेर प्रमाणित गर्नुहोस्
- cache control syntax सही छ कि छैन जाँच गर्नुहोस्
- प्रदायकले तपाईंको model का लागि caching समर्थन गर्छ भनेर सुनिश्चित गर्नुहोस्
- सीमितताहरूका लागि प्रदायक documentation समीक्षा गर्नुहोस्

### अप्रत्याशित लागतहरू {#unexpected-costs}

- cache creation र cache read tokens निगरानी गर्नुहोस्
- cache वास्तवमै प्रयोग भइरहेको छ भनेर प्रमाणित गर्नुहोस्
- prompt variations का कारण cache misses भए/नभएको जाँच गर्नुहोस्
- TTL वा cache रणनीति समायोजन गर्ने विचार गर्नुहोस्

## प्रदायक तुलना {#provider-comparison}

| विशेषता | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | प्रदायक-विशिष्ट | Cache control |
| TTL control | स्पष्ट | headers मार्फत | प्रदायक-निर्भर | Ephemeral/persistent |
| अधिकतम cache आकार | 1M tokens | प्रदायक-निर्भर | प्रदायक-निर्भर | 1M tokens |
| लागत कटौती | 90% | 90% | प्रदायक-निर्भर | 90% |
| निगरानी | विस्तृत | metrics मार्फत | प्रदायक-निर्भर | usage मार्फत |

## अर्को चरणहरू {#next-steps}

1. **आफ्नो प्रदायक छान्नुहोस्**: आफ्ना आवश्यकताहरूका आधारमा चयन गर्नुहोस्
2. **caching configure गर्नुहोस्**: प्रदायक-विशिष्ट caching सेट अप गर्नुहोस्
3. **caching परीक्षण गर्नुहोस्**: यो तपाईंका prompts सँग काम गर्छ भनेर प्रमाणित गर्नुहोस्
4. **प्रयोग निगरानी गर्नुहोस्**: cache hits र लागत बचत ट्र्याक गर्नुहोस्
5. **Optimize गर्नुहोस्**: नतिजाहरूका आधारमा TTL र cache रणनीति समायोजन गर्नुहोस्
