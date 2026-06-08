---
title: प्रदाता-जागरूक प्रॉम्प्ट कैशिंग
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# प्रदाता-जागरूक प्रॉम्प्ट कैशिंग

Superdav AI Agent v1.12.0 में **प्रदाता-जागरूक प्रॉम्प्ट कैशिंग** (provider-aware prompt caching) पेश किया गया है, जो विभिन्न LLM प्रदाताओं में प्रॉम्प्ट को कैश करके API लागत और विलंबता (latency) को अनुकूलित करता है। प्रत्येक प्रदाता की कैशिंग तंत्र और कॉन्फ़िगरेशन अलग-अलग होती है।

## अवलोकन (Overview)

प्रॉम्प्ट कैशिंग आपको ये करने की अनुमति देती है:

- बड़े, बार-बार उपयोग किए जाने वाले प्रॉम्प्ट को कैश करना
- अनावश्यक प्रोसेसिंग से बचकर API लागत को कम करना
- कैश किए गए अनुरोधों के लिए विलंबता (latency) में सुधार करना
- कैश लाइफसाइकिल को स्पष्ट रूप से प्रबंधित करना

विभिन्न प्रदाता कैशिंग को अलग-अलग तरीके से लागू करते हैं:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL के साथ प्रॉम्प्ट कैशिंग
- **OpenRouter**: प्रदाता-विशिष्ट कैशिंग
- **Vertex Anthropic**: कैश कंट्रोल के साथ प्रॉम्प्ट कैशिंग

## Google Gemini: cachedContents API

Google Gemini, `cachedContents` API के माध्यम से स्पष्ट कैश प्रबंधन प्रदान करता है।

### कॉन्फ़िगरेशन (Configuration)

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 घंटे को सेकंड में
        'max_tokens' => 1000000, // कैश करने के लिए अधिकतम टोकन
    ],
];
```

### कैश किया गया प्रॉम्प्ट बनाना (Creating a Cached Prompt)

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'आप एक सहायक सहायक हैं...',
        'context' => 'बड़ा संदर्भ दस्तावेज़...',
        'ttl' => 3600,
    ]
);

// रिटर्न करता है: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### कैश किया गया प्रॉम्प्ट का उपयोग करना (Using a Cached Prompt)

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'उपयोगकर्ता का प्रश्न यहाँ',
    ]
);
```

### कैश लाइफसाइकिल (Cache Lifecycle)

```php
// कैश किए गए कंटेंट को सूचीबद्ध करें
$caches = $gemini->list_cached_contents();

// कैश विवरण प्राप्त करें
$cache = $gemini->get_cached_content( 'abc123' );

// कैश TTL बढ़ाएँ
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2 घंटे तक बढ़ाएँ
);

// कैश हटाएं
$gemini->delete_cached_content( 'abc123' );
```

### Gemini के लिए सर्वोत्तम अभ्यास (Best Practices for Gemini)

- **उपयुक्त TTL सेट करें**: लागत बचत बनाम कैश की पुरानी होने की स्थिति को संतुलित करें
- **सिस्टम प्रॉम्प्ट को कैश करें**: अनुरोधों में एक ही सिस्टम प्रॉम्प्ट का पुन: उपयोग करें
- **कैश उपयोग की निगरानी करें**: ट्रैक करें कि कौन से कैश सबसे अधिक उपयोग किए जाते हैं
- **समाप्त हो चुके कैश को साफ़ करें**: समय-समय पर अनुपयोगी कैश को हटाएं

## Azure OpenAI: प्रॉम्प्ट कैशिंग

Azure OpenAI स्वचालित TTL प्रबंधन के साथ प्रॉम्प्ट कैशिंग का समर्थन करता है।

### कॉन्फ़िगरेशन (Configuration)

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

### कैशिंग सक्षम करना (Enabling Caching)

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'आप एक सहायक सहायक हैं...',
        'context' => 'बड़ा संदर्भ दस्तावेज़...',
        'prompt' => 'उपयोगकर्ता का प्रश्न यहाँ',
        'cache_control' => 'max_age=3600',
    ]
);

// प्रतिक्रिया में कैश उपयोग शामिल है:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### कैश हेडर (Cache Headers)

Azure OpenAI कैश नियंत्रण के लिए HTTP हेडर का उपयोग करता है:

```
Cache-Control: max_age=3600
```

समर्थित मान (Supported values):

- `max_age=<seconds>`: निर्दिष्ट अवधि के लिए कैश करें
- `no_cache`: इस अनुरोध को कैश न करें
- `no_store`: कैश न करें और पुन: उपयोग न करें

### कैश उपयोग की निगरानी करना (Monitoring Cache Usage)

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "कैश निर्माण: $cache_tokens टोकन\n";
echo "कैश हिट: $cache_hits टोकन\n";
```

### Azure OpenAI के लिए सर्वोत्तम अभ्यास (Best Practices for Azure OpenAI)

- **संगत प्रॉम्प्ट का उपयोग करें**: समान प्रॉम्प्ट कैशिंग से लाभान्वित होते हैं
- **उचित TTL सेट करें**: लागत बनाम ताजगी को संतुलित करें
- **कैश मेट्रिक्स की निगरानी करें**: कैश निर्माण बनाम हिट ट्रैक करें
- **समान अनुरोधों को बैच करें**: कैश हिट को अधिकतम करने के लिए अनुरोधों को समूहित करें

## OpenRouter: प्रदाता-विशिष्ट कैशिंग

OpenRouter अंतर्निहित प्रदाताओं (OpenAI, Anthropic, आदि) के माध्यम से कैशिंग का समर्थन करता है।

### कॉन्फ़िगरेशन (Configuration)

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI की कैशिंग का उपयोग करें
    ],
];
```

### OpenRouter कैशिंग का उपयोग करना (Using OpenRouter Caching)

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'आप एक सहायक सहायक हैं...',
        'context' => 'बड़ा संदर्भ दस्तावेज़...',
        'prompt' => 'उपयोगकर्ता का प्रश्न यहाँ',
        'cache_control' => 'max_age=3600',
    ]
);
```

### प्रदाता-विशिष्ट विकल्प (Provider-Specific Options)

विभिन्न प्रदाताओं के पास अलग-अलग कैशिंग तंत्र होते हैं:

```php
// OpenAI-संगत कैशिंग
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-संगत कैशिंग
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

### OpenRouter के लिए सर्वोत्तम अभ्यास (Best Practices for OpenRouter)

- **अपने प्रदाता की कैशिंग को जानें**: प्रत्येक प्रदाता के पास अलग-अलग तंत्र होते हैं
- **कैशिंग व्यवहार का परीक्षण करें**: सत्यापित करें कि कैशिंग आपके चुने हुए प्रदाता के साथ काम करती है
- **लागत की निगरानी करें**: कैशिंग से बचत ट्रैक करें
- **संगत मॉडल का उपयोग करें**: मॉडल बदलने से कैश हिट टूट जाते हैं

## Vertex Anthropic: कैश कंट्रोल के साथ प्रॉम्प्ट कैशिंग

Vertex Anthropic (Google Cloud) स्पष्ट कैश कंट्रोल के साथ प्रॉम्प्ट कैशिंग का समर्थन करता है।

### कॉन्फ़िगरेशन (Configuration)

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

### Vertex Anthropic कैशिंग का उपयोग करना (Using Vertex Anthropic Caching)

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'आप एक सहायक सहायक हैं...',
        'context' => 'बड़ा संदर्भ दस्तावेज़...',
        'prompt' => 'उपयोगकर्ता का प्रश्न यहाँ',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// प्रतिक्रिया में कैश मेट्रिक्स शामिल हैं:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### कैश कंट्रोल प्रकार (Cache Control Types)

- **ephemeral**: अनुरोध की अवधि के लिए कैश करें (डिफ़ॉल्ट)
- **persistent**: कई अनुरोधों में कैश करें (यदि समर्थित है)

### कैश उपयोग की निगरानी करना (Monitoring Cache Usage)

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "कैश बनाया गया: $cache_created टोकन\n";
echo "कैश पढ़ा गया: $cache_read टोकन\n";
```

### Vertex Anthropic के लिए सर्वोत्तम अभ्यास (Best Practices for Vertex Anthropic)

- **ephemeral कैशिंग का उपयोग करें**: एकल-सत्र कैशिंग के लिए अच्छा है
- **max_tokens को उपयुक्त रूप से सेट करें**: कैश आकार बनाम लागत को संतुलित करें
- **कैश मेट्रिक्स की निगरानी करें**: कैश प्रभावशीलता ट्रैक करें
- **अपने वर्कलोड के साथ परीक्षण करें**: सत्यापित करें कि कैशिंग आपके उपयोग के मामले को लाभ पहुंचाती है

## क्रॉस-प्रदाता कैशिंग रणनीति (Cross-Provider Caching Strategy)

### एकीकृत कॉन्फ़िगरेशन (Unified Configuration)

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

### प्रदाता का पता लगाना (Provider Detection)

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// प्रदाता-विशिष्ट कैशिंग कॉन्फ़िगरेशन का उपयोग करें
```

### फॉलबैक रणनीति (Fallback Strategy)

```php
try {
    // प्राथमिक प्रदाता के साथ कैशिंग का प्रयास करें
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // बिना कैशिंग अनुरोध पर वापस आएं
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## लागत अनुकूलन (Cost Optimization)

### बचत की गणना करना (Calculate Savings)

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// विशिष्ट मूल्य निर्धारण (प्रदाता के अनुसार भिन्न होता है):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 गुना सस्ता
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 गुना सस्ता
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "अनुमानित बचत: \$$savings\n";
```

### अनुकूलन सुझाव (Optimization Tips)

- **बड़े सिस्टम प्रॉम्प्ट को कैश करें**: सबसे बड़ी लागत बचत
- **संदर्भ का पुन: उपयोग करें**: बार-बार उपयोग किए जाने वाले संदर्भ दस्तावेज़ को कैश करें
- **अनुरोधों को बैच करें**: कैश हिट को अधिकतम करने के लिए समान अनुरोधों को समूहित करें
- **कैश प्रभावशीलता की निगरानी करें**: वास्तविक बचत ट्रैक करें
- **TTL समायोजित करें**: लागत बनाम ताजगी को संतुलित करें

## समस्या निवारण (Troubleshooting)

### कैश का उपयोग नहीं हो रहा है (Cache not being used)

- सत्यापित करें कि कॉन्फ़िगरेशन में कैशिंग सक्षम है
- जांचें कि प्रॉम्प्ट समान हैं (कैशिंग के लिए सटीक मिलान आवश्यक है)
- सत्यापित करें कि कैश समाप्त नहीं हुआ है
- प्रदाता-विशिष्ट कैश सीमाओं की जांच करें

### कैश निर्माण विफल होना (Cache creation failing)

- सत्यापित करें कि कैश का आकार प्रदाता की सीमाओं के भीतर है
- जांचें कि कैश कंट्रोल सिंटैक्स सही है
- सुनिश्चित करें कि प्रदाता आपके मॉडल के लिए कैशिंग का समर्थन करता है
- सीमाओं के लिए प्रदाता दस्तावेज़ीकरण की समीक्षा करें

### अप्रत्याशित लागतें (Unexpected costs)

- कैश निर्माण बनाम कैश रीड टोकन की निगरानी करें
- सत्यापित करें कि कैश वास्तव में उपयोग किया जा रहा है
- प्रॉम्प्ट भिन्नताओं के कारण कैश मिस की जांच करें
- TTL या कैश रणनीति को समायोजित करने पर विचार करें

## प्रदाता तुलना (Provider Comparison)

| फीचर | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| कैश API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL नियंत्रण | स्पष्ट (Explicit) | हेडर के माध्यम से | प्रदाता पर निर्भर | क्षणिक/स्थायी (Ephemeral/persistent) |
| अधिकतम कैश आकार | 1M टोकन | प्रदाता पर निर्भर | प्रदाता पर निर्भर | 1M टोकन |
| लागत में कमी | 90% | 90% | प्रदाता पर निर्भर | 90% |
| निगरानी | विस्तृत | मेट्रिक्स के माध्यम से | प्रदाता पर निर्भर | उपयोग के माध्यम से |

## अगले कदम (Next Steps)

1. **अपने प्रदाता का चयन करें**: अपनी ज़रूरतों के आधार पर चुनें
2. **कैशिंग कॉन्फ़िगर करें**: प्रदाता-विशिष्ट कैशिंग सेट करें
3. **कैशिंग का परीक्षण करें**: सत्यापित करें कि यह आपके प्रॉम्प्ट के साथ काम करता है
4. **उपयोग की निगरानी करें**: कैश हिट और लागत बचत ट्रैक करें
5. **अनुकूलित करें**: परिणामों के आधार पर TTL और कैश रणनीति को समायोजित करें
