---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 లో **provider-aware prompt caching** ఫీచర్ వచ్చింది. ఇది వివిధ LLM ప్రొవైడర్ల అంతటా ప్రాంప్ట్‌లను క్యాష్ చేయడం ద్వారా API ఖర్చులను మరియు లేటెన్సీని ఆప్టిమైజ్ చేస్తుంది. ప్రతి ప్రొవైడర్ యొక్క క్యాషింగ్ మెకానిజమ్స్ మరియు కాన్ఫిగరేషన్స్ వేరుగా ఉంటాయి.

## Overview

ప్రాంప్ట్ క్యాషింగ్ ద్వారా మీరు చేయగలిగేవి:

- తరచుగా ఉపయోగించే పెద్ద ప్రాంప్ట్‌లను క్యాష్ చేయడం
- అనవసరమైన ప్రాసెసింగ్‌ను నివారించడం ద్వారా API ఖర్చులను తగ్గించడం
- క్యాష్ చేయబడిన రిక్వెస్ట్‌ల కోసం లేటెన్సీని మెరుగుపరచడం
- క్యాష్ జీవితచక్రాన్ని (cache lifecycle) స్పష్టంగా నిర్వహించడం

వివిధ ప్రొవైడర్లు క్యాషింగ్‌ను వేర్వేరుగా అమలు చేస్తాయి:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL తో ప్రాంప్ట్ క్యాషింగ్
- **OpenRouter**: ప్రొవైడర్-నిర్దిష్ట క్యాషింగ్
- **Vertex Anthropic**: క్యాష్ కంట్రోల్‌తో ప్రాంప్ట్ క్యాషింగ్

## Google Gemini: cachedContents API

Google Gemini, `cachedContents` API ద్వారా స్పష్టమైన క్యాష్ నిర్వహణను అందిస్తుంది.

### Configuration

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

### Creating a Cached Prompt

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

### Using a Cached Prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache Lifecycle

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

### Best Practices for Gemini

- **Set appropriate TTL**: ఖర్చు ఆదా చేయడం మరియు క్యాష్ పాతబడటం (staleness) మధ్య సమతుల్యత పాటించండి
- **Cache system prompts**: రిక్వెస్ట్‌లన్నింటికీ ఒకే system promptని మళ్లీ ఉపయోగించండి
- **Monitor cache usage**: ఏ క్యాష్‌లను ఎక్కువగా ఉపయోగిస్తున్నారో ట్రాక్ చేయండి
- **Clean up expired caches**: ఉపయోగించని క్యాష్‌లను క్రమానుగతంగా తొలగించండి

## Azure OpenAI: Prompt Caching

Azure OpenAI ఆటోమేటిక్ TTL నిర్వహణతో ప్రాంప్ట్ క్యాషింగ్‌కు మద్దతు ఇస్తుంది.

### Configuration

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

### Enabling Caching

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

### Cache Headers

Azure OpenAI క్యాష్ కంట్రోల్ కోసం HTTP హెడర్‌లను ఉపయోగిస్తుంది:

```
Cache-Control: max_age=3600
```

Supported values:

- `max_age=<seconds>`: నిర్దిష్ట సమయం వరకు క్యాష్ చేయండి
- `no_cache`: ఈ రిక్వెస్ట్‌ను క్యాష్ చేయవద్దు
- `no_store`: క్యాష్ చేయవద్దు మరియు మళ్లీ ఉపయోగించవద్దు

### Monitoring Cache Usage

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Best Practices for Azure OpenAI

- **Use consistent prompts**: ఒకే ప్రాంప్ట్‌లు క్యాషింగ్ నుండి ప్రయోజనం పొందుతాయి
- **Set reasonable TTL**: ఖర్చు మరియు తాజాదనం (freshness) మధ్య సమతుల్యత పాటించండి
- **Monitor cache metrics**: క్యాష్ క్రియేషన్ వర్సెస్ హిట్స్ ట్రాక్ చేయండి
- **Batch similar requests**: క్యాష్ హిట్స్ పెంచడానికి రిక్వెస్ట్‌లను సమూహాలుగా చేయండి

## OpenRouter: Provider-Specific Caching

OpenRouter అనేది అంతర్లీన ప్రొవైడర్ల (OpenAI, Anthropic, మొదలైనవి) ద్వారా క్యాషింగ్‌కు మద్దతు ఇస్తుంది.

### Configuration

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

### Using OpenRouter Caching

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

### Provider-Specific Options

వివిధ ప్రొవైడర్లకు వేర్వేరు క్యాషింగ్ మెకానిజమ్స్ ఉన్నాయి:

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

### Best Practices for OpenRouter

- **Know your provider's caching**: ప్రతి ప్రొవైడర్ వేరే మెకానిజంను కలిగి ఉంటుంది
- **Test caching behavior**: మీరు ఎంచుకున్న ప్రొవైడర్‌తో క్యాషింగ్ సరిగ్గా పనిచేస్తుందో ధృవీకరించండి
- **Monitor costs**: క్యాషింగ్ నుండి పొందే ఆదాను ట్రాక్ చేయండి
- **Use consistent models**: మోడల్‌లను మార్చడం వల్ల క్యాష్ హిట్స్ విచ్ఛిన్నమవుతాయి

## Vertex Anthropic: Prompt Caching with Cache Control

Vertex Anthropic (Google Cloud) స్పష్టమైన క్యాష్ కంట్రోల్‌తో ప్రాంప్ట్ క్యాషింగ్‌కు మద్దతు ఇస్తుంది.

### Configuration

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

### Using Vertex Anthropic Caching

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

### Cache Control Types

- **ephemeral**: రిక్వెస్ట్ వ్యవధికి క్యాష్ (డిఫాల్ట్)
- **persistent**: బహుళ రిక్వెస్ట్‌ల అంతటా క్యాష్ (మద్దతు ఇస్తే)

### Monitoring Cache Usage

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Best Practices for Vertex Anthropic

- **Use ephemeral caching**: సింగిల్-సెషన్ క్యాషింగ్‌కు మంచిది
- **Set max_tokens appropriately**: క్యాష్ పరిమాణం మరియు ఖర్చు మధ్య సమతుల్యత పాటించండి
- **Monitor cache metrics**: క్యాష్ సామర్థ్యాన్ని ట్రాక్ చేయండి
- **Test with your workload**: మీ వాడుక సందర్భానికి క్యాషింగ్ ప్రయోజనం చేకూరుస్తుందో ధృవీకరించడానికి పరీక్షించండి

## Cross-Provider Caching Strategy

### Unified Configuration

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

### Provider Detection

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback Strategy

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

## Cost Optimization

### Calculate Savings

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

### Optimization Tips

- **Cache large system prompts**: అతిపెద్ద ఖర్చు ఆదా
- **Reuse context**: తరచుగా ఉపయోగించే కాంటెక్స్ట్ డాక్యుమెంట్లను క్యాష్ చేయండి
- **Batch requests**: క్యాష్ హిట్స్ పెంచడానికి రిక్వెస్ట్‌లను సమూహాలుగా చేయండి
- **Monitor cache effectiveness**: వాస్తవ ఆదాను ట్రాక్ చేయండి
- **Adjust TTL**: ఖర్చు మరియు తాజాదనం మధ్య సమతుల్యత పాటించండి

## Troubleshooting

### Cache not being used

- కాన్ఫిగరేషన్‌లో క్యాషింగ్ ఎనేబుల్ చేయబడిందో లేదో ధృవీకరించండి
- ప్రాంప్ట్‌లు ఒకేలా ఉన్నాయో లేదో తనిఖీ చేయండి (క్యాషింగ్‌కు ఖచ్చితమైన మ్యాచ్ అవసరం)
- క్యాష్ గడువు ముగిసిపోయిందో లేదో ధృవీకరించండి
- ప్రొవైడర్-నిర్దిష్ట క్యాష్ పరిమితులను తనిఖీ చేయండి

### Cache creation failing

- క్యాష్ పరిమాణం ప్రొవైడర్ పరిమితుల్లో ఉందో లేదో ధృవీకరించండి
- క్యాష్ కంట్రోల్ సింటాక్స్ సరైనదో లేదో తనిఖీ చేయండి
- మీ మోడల్‌కు క్యాషింగ్ మద్దతు ఇస్తుందో లేదో నిర్ధారించుకోండి
- పరిమితుల కోసం ప్రొవైడర్ డాక్యుమెంటేషన్‌ను సమీక్షించండి

### Unexpected costs

- క్యాష్ క్రియేషన్ వర్సెస్ క్యాష్ రీడ్ టోకెన్లను పర్యవేక్షించండి
- క్యాష్ నిజంగా ఉపయోగించబడుతోందో లేదో ధృవీకరించండి
- ప్రాంప్ట్ వైవిధ్యాల కారణంగా క్యాష్ మిస్ అవుతుందేమో తనిఖీ చేయండి
- TTL లేదా క్యాష్ వ్యూహాన్ని సర్దుబాటు చేయడాన్ని పరిగణించండి

## Provider Comparison

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Next Steps

1. **Choose your provider**: మీ అవసరాల ఆధారంగా ఎంచుకోండి
2. **Configure caching**: ప్రొవైడర్-నిర్దిష్ట క్యాషింగ్‌ను సెటప్ చేయండి
3. **Test caching**: మీ ప్రాంప్ట్‌లతో ఇది పనిచేస్తుందో ధృవీకరించండి
4. **Monitor usage**: క్యాష్ హిట్స్ మరియు ఖర్చు ఆదాను ట్రాక్ చేయండి
5. **Optimize**: ఫలితాల ఆధారంగా TTL మరియు క్యాష్ వ్యూహాన్ని సర్దుబాటు చేయండి
