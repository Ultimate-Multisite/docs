---
title: வழங்குநர்-அறிவுடன் Prompt கேச்சிங்
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# வழங்குநர்-அடிப்படையிலான ப்ராம்ட் கேச்சிங்

Superdav AI Agent v1.12.0 ஆனது **வழங்குநர்-அடிப்படையிலான ப்ராம்ட் கேச்சிங்** அம்சத்தை அறிமுகப்படுத்துகிறது. இது வெவ்வேறு LLM வழங்குநர்கள் (providers) முழுவதும் ப்ராம்ட்களை கேச் செய்வதன் மூலம் API செலவுகளையும் தாமதத்தையும் (latency) மேம்படுத்துகிறது. ஒவ்வொரு வழங்குநருக்கும் வெவ்வேறு கேச்சிங் வழிமுறைகள் மற்றும் அமைப்புகள் உள்ளன.

## கண்ணோட்டம் (Overview) {#overview}

ப்ராம்ட் கேச்சிங் மூலம் நீங்கள் செய்யக்கூடியவை:

- அடிக்கடி பயன்படுத்தப்படும் பெரிய ப்ராம்ட்களை கேச் செய்யலாம்.
- தேவையற்ற செயலாக்கத்தைத் தவிர்ப்பதன் மூலம் API செலவுகளைக் குறைக்கலாம்.
- கேச் செய்யப்பட்ட கோரிக்கைகளுக்கு தாமதத்தை மேம்படுத்தலாம்.
- கேச் வாழ்க்கைச் சுழற்சியை (cache lifecycle) வெளிப்படையாக நிர்வகிக்கலாம்.

வெவ்வேறு வழங்குநர்கள் கேச்சிங்கை வெவ்வேறு விதமாக செயல்படுத்துகின்றன:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL உடன் ப்ராம்ட் கேச்சிங்
- **OpenRouter**: வழங்குநர்-குறிப்பிட்ட கேச்சிங்
- **Vertex Anthropic**: கேச் கட்டுப்பாட்டுடன் ப்ராம்ட் கேச்சிங்

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini ஆனது `cachedContents` API மூலம் வெளிப்படையான கேச் நிர்வாகத்தை வழங்குகிறது.

### உள்ளமைவு (Configuration) {#configuration}

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

### கேச் செய்யப்பட்ட ப்ராம்ட்டை உருவாக்குதல் (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

### கேச் செய்யப்பட்ட ப்ராம்ட்டைப் பயன்படுத்துதல் (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### கேச் வாழ்க்கைச் சுழற்சி (Cache Lifecycle) {#cache-lifecycle}

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

### Gemini க்கான சிறந்த நடைமுறைகள் (Best Practices for Gemini) {#best-practices-for-gemini}

- **சரியான TTL-ஐ அமைக்கவும்**: செலவு சேமிப்புக்கும் கேச் காலாவதியடைவதற்கும் இடையே சமநிலையை ஏற்படுத்துங்கள்.
- **சிஸ்டம் ப்ராம்ட்களை கேச் செய்யவும்**: கோரிக்கைகள் முழுவதும் ஒரே சிஸ்டம் ப்ராம்ட்டை மீண்டும் பயன்படுத்துங்கள்.
- **கேச் பயன்பாட்டைக் கண்காணிக்கவும்**: எந்த கேச்சுகள் அதிகம் பயன்படுத்தப்படுகின்றன என்பதைக் கண்காணிக்கவும்.
- **காலாவதியான கேச்களை சுத்தம் செய்யவும்**: பயன்படுத்தப்படாத கேச்களை அவ்வப்போது நீக்கவும்.

## Azure OpenAI: ப்ராம்ட் கேச்சிங் {#azure-openai-prompt-caching}

Azure OpenAI ஆனது தானியங்கி TTL நிர்வாகத்துடன் ப்ராம்ட் கேச்சிங்கை ஆதரிக்கிறது.

### உள்ளமைவு (Configuration) {#configuration-1}

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

### கேச்சிங்கை இயக்குதல் (Enabling Caching) {#enabling-caching}

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

### கேச் தலைப்புகள் (Cache Headers) {#cache-headers}

Azure OpenAI ஆனது கேச் கட்டுப்பாட்டிற்கு HTTP தலைப்புகளைப் பயன்படுத்துகிறது:

```
Cache-Control: max_age=3600
```

ஆதரவு மதிப்புகள் (Supported values):

- `max_age=<seconds>`: குறிப்பிட்ட காலத்திற்கு கேச் செய்யவும்.
- `no_cache`: இந்த கோரிக்கையை கேச் செய்ய வேண்டாம்.
- `no_store`: கேச் செய்ய வேண்டாம் மற்றும் மீண்டும் பயன்படுத்த வேண்டாம்.

### கேச் பயன்பாட்டைக் கண்காணித்தல் (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI க்கான சிறந்த நடைமுறைகள் (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **ஒரே மாதிரியான ப்ராம்ட்களைப் பயன்படுத்தவும்**: ஒரே மாதிரியான ப்ராம்ட்கள் கேச்சிங்கின் மூலம் பயனடைகின்றன.
- **நியாயமான TTL-ஐ அமைக்கவும்**: செலவுக்கும் புதிய தகவலுக்கும் இடையே சமநிலையை ஏற்படுத்துங்கள்.
- **கேச் அளவீடுகளைக் கண்காணிக்கவும்**: கேச் உருவாக்கம் மற்றும் ஹிட்ஸ் ஆகியவற்றை கண்காணிக்கவும்.
- **ஒத்த கோரிக்கைகளை தொகுக்கவும்**: கேச் ஹிட்ஸ் அதிகரிக்க கோரிக்கைகளை குழுவாக வைக்கவும்.

## OpenRouter: வழங்குநர்-குறிப்பிட்ட கேச்சிங் {#openrouter-provider-specific-caching}

OpenRouter ஆனது அடிப்படை வழங்குநர்கள் (OpenAI, Anthropic போன்றவை) மூலம் கேச்சிங்கை ஆதரிக்கிறது.

### உள்ளமைவு (Configuration) {#configuration-2}

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

### OpenRouter கேச்சிங்கை பயன்படுத்துதல் (Using OpenRouter Caching) {#using-openrouter-caching}

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

### வழங்குநர்-குறிப்பிட்ட விருப்பங்கள் (Provider-Specific Options) {#provider-specific-options}

வெவ்வேறு வழங்குநர்கள் வெவ்வேறு கேச்சிங் வழிமுறைகளைக் கொண்டுள்ளன:

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

### OpenRouter க்கான சிறந்த நடைமுறைகள் (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **உங்கள் வழங்குநரின் கேச்சிங்கை அறிந்து கொள்ளுங்கள்**: ஒவ்வொரு வழங்குநருக்கும் வெவ்வேறு வழிமுறைகள் உள்ளன.
- **கேச்சிங் நடத்தையைச் சோதிக்கவும்**: நீங்கள் தேர்ந்தெடுத்த வழங்குநருடன் கேச்சிங் வேலை செய்கிறதா என்பதை உறுதிப்படுத்தவும்.
- **செலவுகளைக் கண்காணிக்கவும்**: கேச்சிங்கிலிருந்து கிடைக்கும் சேமிப்பைக் கண்காணிக்கவும்.
- **ஒரே மாதிரியான மாடல்களைப் பயன்படுத்தவும்**: மாடல்களை மாற்றுவது கேச் ஹிட்களை உடைத்துவிடும்.

## Vertex Anthropic: கேச் கட்டுப்பாட்டுடன் ப்ராம்ட் கேச்சிங் {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ஆனது வெளிப்படையான கேச் கட்டுப்பாட்டுடன் ப்ராம்ட் கேச்சிங்கை ஆதரிக்கிறது.

### உள்ளமைவு (Configuration) {#configuration-3}

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

### Vertex Anthropic கேச்சிங்கை பயன்படுத்துதல் (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

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

### கேச் கட்டுப்பாட்டு வகைகள் (Cache Control Types) {#cache-control-types}

- **ephemeral**: கோரிக்கை காலத்திற்கு கேச் (இயல்புநிலை)
- **persistent**: பல கோரிக்கைகள் முழுவதும் கேச் (ஆதரவு இருந்தால்)

### கேச் பயன்பாட்டைக் கண்காணித்தல் (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic க்கான சிறந்த நடைமுறைகள் (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral கேச்சிங்கைப் பயன்படுத்தவும்**: ஒற்றை அமர்வு கேச்சிங்கிற்கு நல்லது.
- **max_tokens-ஐ பொருத்தமாக அமைக்கவும்**: கேச் அளவுக்கும் செலவுக்கும் இடையே சமநிலையை ஏற்படுத்துங்கள்.
- **கேச் அளவீடுகளைக் கண்காணிக்கவும்**: கேச் செயல்திறனைக் கண்காணிக்கவும்.
- **உங்கள் பணிச்சுமையுடன் சோதிக்கவும்**: கேச்சிங் உங்கள் பயன்பாட்டுச் சூழலுக்குப் பலன் தருகிறதா என்பதை உறுதிப்படுத்தவும்.

## பல வழங்குநர்கள் குறுக்குவழி கேச்சிங் உத்தி (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### ஒருங்கிணைந்த உள்ளமைவு (Unified Configuration) {#unified-configuration}

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

### வழங்குநர் கண்டறிதல் (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### மாற்று உத்தி (Fallback Strategy) {#fallback-strategy}

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

## செலவு மேம்படுத்துதல் (Cost Optimization) {#cost-optimization}

### சேமிப்பைக் கணக்கிடுதல் (Calculate Savings) {#calculate-savings}

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

### மேம்படுத்தும் குறிப்புகள் (Optimization Tips) {#optimization-tips}

- **பெரிய சிஸ்டம் ப்ராம்ட்களை கேச் செய்யவும்**: மிகப்பெரிய செலவு சேமிப்பு.
- **சூழலை மீண்டும் பயன்படுத்தவும்**: அடிக்கடி பயன்படுத்தப்படும் சூழல் ஆவணங்களை கேச் செய்யவும்.
- **கோரிக்கைகளை தொகுக்கவும்**: கேச் ஹிட்ஸ் அதிகரிக்க ஒத்த கோரிக்கைகளை குழுவாக வைக்கவும்.
- **கேச் செயல்திறனைக் கண்காணிக்கவும்**: உண்மையான சேமிப்பைக் கண்காணிக்கவும்.
- **TTL-ஐ சரிசெய்யவும்**: செலவுக்கும் புதிய தகவலுக்கும் இடையே சமநிலையை ஏற்படுத்துங்கள்.

## சிக்கல் தீர்த்தல் (Troubleshooting) {#troubleshooting}

### கேச் பயன்படுத்தப்படவில்லை (Cache not being used) {#cache-not-being-used}

- உள்ளமைவில் கேச்சிங் இயக்கப்பட்டுள்ளதா என்பதைச் சரிபார்க்கவும்.
- ப்ராம்ட்கள் ஒரே மாதிரியாக இருக்கிறதா என்று பார்க்கவும் (சரியான பொருத்தம் கேச்சிங்கிற்கு அவசியம்).
- கேச் காலாவதியாகவில்லை என்பதை உறுதிப்படுத்தவும்.
- வழங்குநர்-குறிப்பிட்ட கேச் வரம்புகளைச் சரிபார்க்கவும்.

### கேச் உருவாக்கம் தோல்வியடைதல் (Cache creation failing) {#cache-creation-failing}

- கேச் அளவு வழங்குநர் வரம்புகளுக்குள் உள்ளதா என்பதை உறுதிப்படுத்தவும்.
- கேச் கட்டுப்பாட்டு தொடரியல் (syntax) சரியாக உள்ளதா என்று பார்க்கவும்.
- உங்கள் மாடலுக்கு வழங்குநர் கேச்சிங்கை ஆதரிக்கிறதா என்பதை உறுதிப்படுத்தவும்.
- வரம்புகளுக்காக வழங்குநர் ஆவணங்களைப் பார்க்கவும்.

### எதிர்பாராத செலவுகள் (Unexpected costs) {#unexpected-costs}

- கேச் உருவாக்கும் டோக்கன்கள் மற்றும் கேச் படிக்கும் டோக்கன்களைக் கண்காணிக்கவும்.
- கேச் உண்மையில் பயன்படுத்தப்படுகிறதா என்பதை உறுதிப்படுத்தவும்.
- ப்ராம்ட் மாறுபாடுகள் காரணமாக கேச் மிஸ் (cache misses) உள்ளதா என்று பார்க்கவும்.
- TTL அல்லது கேச் உத்தியை சரிபார்க்க பரிசீலிக்கவும்.

## வழங்குநர் ஒப்பீடு (Provider Comparison) {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | |
| | | | | |

***
