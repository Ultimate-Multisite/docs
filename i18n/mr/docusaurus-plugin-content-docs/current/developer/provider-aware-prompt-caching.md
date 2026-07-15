---
title: सेवा प्रदाता-जागरूक प्रॉम्प्ट कॅशिंग
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# प्रदाता-जागरूक प्रॉम्प्ट कॅशिंग (Provider-Aware Prompt Caching)

Superdav AI Agent v1.12.0 मध्ये **प्रदाता-जागरूक प्रॉम्प्ट कॅशिंग** (provider-aware prompt caching) सादर केले आहे. हे वेगवेगळ्या LLM प्रदात्यांमध्ये (providers) प्रॉम्प्ट्स कॅश करून API खर्च आणि विलंबता (latency) ऑप्टिमाइझ करते. प्रत्येक प्रदात्याची कॅशिंग यंत्रणा आणि कॉन्फिगरेशन वेगळे असते.

## विहंगावलोकन (Overview) {#overview}

प्रॉम्प्ट कॅशिंगमुळे तुम्हाला खालील गोष्टी करता येतात:

- मोठ्या, वारंवार वापरल्या जाणाऱ्या प्रॉम्प्ट्स कॅश करणे.
- अनावश्यक प्रोसेसिंग टाळून API खर्च कमी करणे.
- कॅश केलेल्या विनंत्यांसाठी विलंबता (latency) सुधारणे.
- कॅश लाइफसायकल (cache lifecycle) स्पष्टपणे व्यवस्थापित करणे.

वेगवेगळे प्रदाते कॅशिंग वेगळ्या पद्धतीने लागू करतात:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL सह प्रॉम्प्ट कॅशिंग
- **OpenRouter**: प्रदाता-विशिष्ट कॅशिंग
- **Vertex Anthropic**: कॅश कंट्रोलसह प्रॉम्प्ट कॅशिंग

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini तुम्हाला `cachedContents` API द्वारे स्पष्ट कॅशे व्यवस्थापन (explicit cache management) देते.

### कॉन्फिगरेशन (Configuration) {#configuration}

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

### कॅश केलेला प्रॉम्प्ट तयार करणे (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

### कॅश केलेला प्रॉम्प्ट वापरणे (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### कॅश लाइफसायकल (Cache Lifecycle) {#cache-lifecycle}

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

### Gemini साठी सर्वोत्तम पद्धती (Best Practices for Gemini) {#best-practices-for-gemini}

- **योग्य TTL सेट करा**: खर्च बचत आणि कॅश जुने होणे (cache staleness) यांच्यात संतुलन साधा.
- **सिस्टम प्रॉम्प्ट कॅश करा**: विनंत्यांमध्ये (requests) तोच सिस्टम प्रॉम्प्ट पुन्हा वापरा.
- **कॅश वापर निरीक्षण करा**: कोणते कॅश सर्वात जास्त वापरले जातात याचा मागोवा घ्या.
- **समाप्ती झालेले कॅश स्वच्छ करा**: वेळोवेळी न वापरलेले कॅश डिलीट करा.

## Azure OpenAI: प्रॉम्प्ट कॅशिंग (Prompt Caching) {#azure-openai-prompt-caching}

Azure OpenAI स्वयंचलित TTL व्यवस्थापनासह प्रॉम्प्ट कॅशिंगला समर्थन देते.

### कॉन्फिगरेशन (Configuration) {#configuration-1}

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

### कॅशिंग सक्षम करणे (Enabling Caching) {#enabling-caching}

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

### कॅश हेडर (Cache Headers) {#cache-headers}

Azure OpenAI कॅश कंट्रोलसाठी HTTP हेडर वापरते:

```
Cache-Control: max_age=3600
```

समर्थित मूल्ये (Supported values):

- `max_age=<seconds>`: निर्दिष्ट कालावधीसाठी कॅश करा.
- `no_cache`: ही विनंती कॅश करू नका.
- `no_store`: कॅश करू नका आणि पुन्हा वापरू नका.

### कॅश वापर निरीक्षण करणे (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI साठी सर्वोत्तम पद्धती (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **सुसंगत प्रॉम्प्ट वापरा**: एकसारख्या प्रॉम्प्ट्समुळे कॅशिंगचा फायदा होतो.
- **वाजवी TTL सेट करा**: खर्च आणि ताजेपणा (freshness) यांच्यात संतुलन साधा.
- **कॅश मेट्रिक्सवर लक्ष ठेवा**: कॅश निर्मिती विरुद्ध हिट्सचा मागोवा घ्या.
- **समान विनंत्या बॅच करा**: कॅश हिट्स वाढवण्यासाठी विनंत्यांचा गट करा.

## OpenRouter: प्रदाता-विशिष्ट कॅशिंग (Provider-Specific Caching) {#openrouter-provider-specific-caching}

OpenRouter हे खालील प्रदात्यांद्वारे (OpenAI, Anthropic, इत्यादी) कॅशिंगला समर्थन देते.

### कॉन्फिगरेशन (Configuration) {#configuration-2}

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

### OpenRouter कॅशिंग वापरणे (Using OpenRouter Caching) {#using-openrouter-caching}

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

### प्रदाता-विशिष्ट पर्याय (Provider-Specific Options) {#provider-specific-options}

वेगवेगळ्या प्रदात्यांच्या कॅशिंग यंत्रणा वेगळ्या असतात:

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

### OpenRouter साठी सर्वोत्तम पद्धती (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **तुमच्या प्रदात्याचे कॅशिंग जाणून घ्या**: प्रत्येक प्रदात्याची यंत्रणा वेगळी असते.
- **कॅशिंग वर्तन तपासा**: तुम्ही निवडलेल्या प्रदात्यासोबत कॅशिंग काम करते की नाही हे तपासा.
- **खर्चावर लक्ष ठेवा**: कॅशिंगमुळे किती बचत होते याचा मागोवा घ्या.
- **सुसंगत मॉडेल्स वापरा**: मॉडेल बदलल्यास कॅश हिट्स तुटतात.

## Vertex Anthropic: कॅश कंट्रोलसह प्रॉम्प्ट कॅशिंग (Prompt Caching with Cache Control) {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) स्पष्ट कॅश कंट्रोलसह प्रॉम्प्ट कॅशिंगला समर्थन देते.

### कॉन्फिगरेशन (Configuration) {#configuration-3}

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

### Vertex Anthropic कॅशिंग वापरणे (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

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

### कॅश कंट्रोल प्रकार (Cache Control Types) {#cache-control-types}

- **ephemeral**: विनंतीच्या कालावधीसाठी कॅश (default).
- **persistent**: अनेक विनंत्यांमध्ये कॅश (जर समर्थित असेल).

### कॅश वापर निरीक्षण करणे (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic साठी सर्वोत्तम पद्धती (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral कॅशिंग वापरा**: सिंगल-सेशन कॅशिंगसाठी चांगले.
- **max_tokens योग्यरित्या सेट करा**: कॅशचा आकार आणि खर्च यांच्यात संतुलन साधा.
- **कॅश मेट्रिक्सवर लक्ष ठेवा**: कॅश किती प्रभावी आहे याचा मागोवा घ्या.
- **तुमच्या कामावर चाचणी घ्या**: कॅशिंग तुमच्या गरजेनुसार फायदे देते की नाही हे तपासा.

## क्रॉस-प्रदाता कॅशिंग रणनीती (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### एकत्रित कॉन्फिगरेशन (Unified Configuration) {#unified-configuration}

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

### प्रदाता ओळख (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### फॉलबॅक रणनीती (Fallback Strategy) {#fallback-strategy}

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

## खर्च ऑप्टिमायझेशन (Cost Optimization) {#cost-optimization}

### बचत मोजा (Calculate Savings) {#calculate-savings}

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

### ऑप्टिमायझेशन टिप्स (Optimization Tips) {#optimization-tips}

- **मोठे सिस्टम प्रॉम्प्ट कॅश करा**: सर्वात जास्त खर्च बचत इथे होते.
- **संदर्भ पुन्हा वापरा**: वारंवार वापरले जाणारे संदर्भ दस्तऐवज (context documents) कॅश करा.
- **विनंत्या बॅच करा**: कॅश हिट्स वाढवण्यासाठी समान विनंत्यांचा गट करा.
- **कॅश परिणामकारकता तपासा**: प्रत्यक्ष बचतीचा मागोवा घ्या.
- **TTL समायोजित करा**: खर्च आणि ताजेपणा यांच्यात संतुलन साधा.

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### कॅश वापरला जात नाहीये (Cache not being used) {#cache-not-being-used}

- कॉन्फिगरेशनमध्ये कॅशिंग सक्षम आहे की नाही तपासा.
- प्रॉम्प्ट्स एकसारखे (identical) आहेत की नाही हे तपासा (कॅशिंगसाठी अचूक जुळणी आवश्यक आहे).
- कॅशची मुदत (expiry) संपली आहे की नाही तपासा.
- प्रदाता-विशिष्ट कॅश मर्यादा तपासा.

### कॅश निर्मिती अयशस्वी (Cache creation failing) {#cache-creation-failing}

- कॅशचा आकार प्रदाताच्या मर्यादांमध्ये आहे की नाही हे तपासा.
- कॅश कंट्रोल सिंटॅक्स योग्य आहे की नाही हे तपासा.
- तुमच्या मॉडेलसाठी प्रदाता कॅशिंगला समर्थन देतो की नाही हे तपासा.
- मर्यादांसाठी प्रदाता दस्तऐवज तपासा.

### अनपेक्षित खर्च (Unexpected costs) {#unexpected-costs}

- कॅश निर्मिती विरुद्ध कॅश रीड टोकन्सवर लक्ष ठेवा.
- कॅश खरोखर वापरला जात आहे की नाही हे तपासा.
- प्रॉम्प्ट बदलांमुळे कॅश मिस (cache misses) होत आहेत का हे तपासा.
- TTL किंवा कॅश रणनीती समायोजित करण्याचा विचार करा.

## प्रदाता तुलना (Provider Comparison) {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## पुढील पाऊले (Next Steps) {#next-steps}

1. **तुमचा प्रदाता निवडा**: तुमच्या गरजेनुसार निवडा.
2. **कॅशिंग कॉन्फिगर करा**: प्रदाता-विशिष्ट कॅशिंग सेट करा.
3. **कॅशिंग तपासा**: तुमच्या प्रॉम्प्ट्ससोबत ते काम करते की नाही हे तपासा.
4. **वापर निरीक्षण करा**: कॅश हिट्स आणि खर्च बचतीचा मागोवा घ्या.
5. **ऑप्टिमाइझ करा**: निकालांवर आधारित TTL आणि कॅश रणनीती समायोजित करा.
