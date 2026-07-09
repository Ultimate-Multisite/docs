---
title: Ìfipamọ́ ìtọ́nisọ́nà sínú cache tó mọ olupèsè
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt Caching Tó Mọ Provider

Superdav AI Agent v1.12.0 ṣàgbékalẹ̀ **prompt caching tó mọ provider**, èyí tó ń mú iye owó API àti latency dara sí nípa fífi prompts pamọ́ kọjá àwọn provider LLM oriṣiriṣi. Provider kọọkan ní àwọn ọ̀nà caching àti àwọn ìṣètò tó yàtọ̀.

## Àkótán

Prompt caching jẹ́ kí o lè:

- Fi àwọn prompts ńlá, tí a máa ń lò léraléra pamọ́
- Dín iye owó API kù nípa yíyẹra fún ìṣètò tó tún ara rẹ̀ ṣe
- Mú latency dara sí fún àwọn ìbéèrè tí a ti fi pamọ́ sínú cache
- Ṣàkóso ìgbésí-ayé cache ní kedere

Àwọn provider oriṣiriṣi ń ṣe caching ní ọ̀nà oriṣiriṣi:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching pẹ̀lú TTL
- **OpenRouter**: Caching tó dá lórí provider
- **Vertex Anthropic**: Prompt caching pẹ̀lú cache control

## Google Gemini: cachedContents API

Google Gemini ń pèsè ìṣàkóso cache tó ṣe kedere nípasẹ̀ `cachedContents` API.

### Ìṣètò

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

### Ṣíṣẹ̀dá Prompt Tí A Fi Sínú Cache

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

### Lílo Prompt Tí A Fi Sínú Cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ìgbésí-ayé Cache

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

### Àwọn Ìlànà Tó Dára Jù fún Gemini

- **Ṣètò TTL tó yẹ**: Ṣe ìwọ̀ntúnwọ̀nsì láàrin fífi owó pamọ́ àti cache tó ti di àtijọ́
- **Fi system prompts sínú cache**: Tún system prompt kan náà lò kọjá àwọn ìbéèrè
- **Ṣọ́ lílo cache**: Tọpinpin àwọn cache tí a lò jù lọ
- **Nu àwọn cache tó ti parí kúrò**: Pa àwọn cache tí a kò lò mọ́ rẹ́ẹ̀rẹ́

## Azure OpenAI: Prompt Caching

Azure OpenAI ṣe àtìlẹ́yìn prompt caching pẹ̀lú ìṣàkóso TTL aládàáṣiṣẹ́.

### Ìṣètò

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

### Mímú Caching Ṣiṣẹ́

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

### Àwọn Header Cache

Azure OpenAI ń lo àwọn HTTP headers fún cache control:

```
Cache-Control: max_age=3600
```

Àwọn iye tí a ṣe àtìlẹ́yìn fún:

- `max_age=<seconds>`: Fi sínú cache fún àkókò tí a sọ
- `no_cache`: Má ṣe fi ìbéèrè yìí sínú cache
- `no_store`: Má ṣe fi sínú cache, má sì tún lò ó

### Ṣíṣọ́ Lílo Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Àwọn Ìlànà Tó Dára Jù fún Azure OpenAI

- **Lo prompts tó dúró déédéé**: Àwọn prompts tó jẹ́ bákannáà máa ń jèrè láti caching
- **Ṣètò TTL tó bójú mu**: Ṣe ìwọ̀ntúnwọ̀nsì láàrin owó àti tuntun
- **Ṣọ́ àwọn metrics cache**: Tọpinpin ṣíṣẹ̀dá cache láfiwé hits
- **Kó àwọn ìbéèrè tó jọra pọ̀**: Ṣàkójọpọ̀ ìbéèrè láti pọ̀si cache hits

## OpenRouter: Caching Tó Dá Lórí Provider

OpenRouter ṣe àtìlẹ́yìn caching nípasẹ̀ àwọn provider abẹ́lẹ̀ (OpenAI, Anthropic, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ).

### Ìṣètò

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

### Lílo OpenRouter Caching

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

### Àwọn Àṣàyàn Tó Dá Lórí Provider

Àwọn provider oriṣiriṣi ní àwọn ọ̀nà caching tó yàtọ̀:

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

### Àwọn Ìlànà Tó Dára Jù fún OpenRouter

- **Mọ caching ti provider rẹ**: Provider kọọkan ní àwọn ọ̀nà tó yàtọ̀
- **Dán ìhùwàsí caching wò**: Jẹ́rìí pé caching ń ṣiṣẹ́ pẹ̀lú provider tí o yàn
- **Ṣọ́ àwọn owó**: Tọpinpin iye tí caching fi pamọ́
- **Lo models tó dúró déédéé**: Yíyí models padà máa ń fọ́ cache hits

## Vertex Anthropic: Prompt Caching pẹ̀lú Cache Control

Vertex Anthropic (Google Cloud) ṣe àtìlẹ́yìn prompt caching pẹ̀lú cache control tó ṣe kedere.

### Ìṣètò

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

### Lílo Vertex Anthropic Caching

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

### Àwọn Irú Cache Control

- **ephemeral**: Fi sínú cache fún àkókò ìbéèrè náà (àiyipada)
- **persistent**: Fi sínú cache kọjá ọ̀pọ̀ ìbéèrè (bí a bá ṣe àtìlẹ́yìn fún un)

### Ṣíṣọ́ Lílo Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Àwọn Ìlànà Tó Dára Jù fún Vertex Anthropic

- **Lo ephemeral caching**: Ó dára fún caching ìpàdé kan ṣoṣo
- **Ṣètò max_tokens bí ó ti yẹ**: Ṣe ìwọ̀ntúnwọ̀nsì láàrin ìwọ̀n cache àti owó
- **Ṣọ́ àwọn metrics cache**: Tọpinpin bí cache ṣe munadoko
- **Dán an wò pẹ̀lú iṣẹ́ rẹ**: Jẹ́rìí pé caching ṣe anfaani fún ọ̀ràn lílo rẹ

## Ìlànà Caching Kọjá-Provider

### Ìṣètò Ìṣọ̀kan

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

### Ìdámọ̀ Provider

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Ìlànà Fallback

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

## Ìmúró Iye Owó

### Ṣírò Ìfipamọ́

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

### Àwọn Àbá Ìmúrọ̀

- **Fi àwọn system prompts ńlá sínú cache**: Ìfipamọ́ owó tó tóbi jù
- **Tún context lò**: Fi àwọn ìwé context tí a máa ń lò léraléra sínú cache
- **Kó àwọn ìbéèrè pọ̀**: Ṣàkójọpọ̀ àwọn ìbéèrè tó jọra láti pọ̀si cache hits
- **Ṣọ́ bí cache ṣe munadoko**: Tọpinpin ìfipamọ́ gidi
- **Ṣàtúnṣe TTL**: Ṣe ìwọ̀ntúnwọ̀nsì láàrin owó àti tuntun

## Yíyanjú Ìṣòro

### A kò lo cache

- Jẹ́rìí pé a ti mú caching ṣiṣẹ́ nínú ìṣètò
- Ṣàyẹ̀wò pé prompts jẹ́ bákannáà (caching nílò ìbámu pípé)
- Jẹ́rìí pé cache kò tíì parí
- Ṣàyẹ̀wò àwọn ààlà cache tó dá lórí provider

### Ṣíṣẹ̀dá cache ń kùnà

- Jẹ́rìí pé ìwọ̀n cache wà láàrin ààlà provider
- Ṣàyẹ̀wò pé syntax cache control tọ́
- Rí i dájú pé provider ṣe àtìlẹ́yìn caching fún model rẹ
- Ṣàgbéyẹ̀wò ìwé provider fún àwọn ìdíwọ̀n

### Àwọn owó àìròtẹ́lẹ̀

- Ṣọ́ ṣíṣẹ̀dá cache láfiwé àwọn token kíkà cache
- Jẹ́rìí pé cache ń jẹ́ lílò gan-an
- Ṣàyẹ̀wò cache misses nítorí àwọn ìyàtọ̀ prompt
- Ronú láti ṣàtúnṣe TTL tàbí ìlànà cache

## Ìfiwéra Provider

| Àbùdá | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Tó dá lórí provider | Cache control |
| Ìṣàkóso TTL | Kedere | Nípasẹ̀ headers | Ó gbẹ́kẹ̀ lé provider | Ephemeral/persistent |
| Ìwọ̀n cache tó pọ̀ jù | 1M tokens | Ó gbẹ́kẹ̀ lé provider | Ó gbẹ́kẹ̀ lé provider | 1M tokens |
| Dídín owó kù | 90% | 90% | Ó gbẹ́kẹ̀ lé provider | 90% |
| Ṣíṣọ́ | Alálàyé | Nípasẹ̀ metrics | Ó gbẹ́kẹ̀ lé provider | Nípasẹ̀ usage |

## Àwọn Ìgbésẹ̀ Tó Kàn

1. **Yan provider rẹ**: Yan dá lórí àwọn àìní rẹ
2. **Ṣètò caching**: Ṣètò caching tó dá lórí provider
3. **Dán caching wò**: Jẹ́rìí pé ó ń ṣiṣẹ́ pẹ̀lú prompts rẹ
4. **Ṣọ́ lílo**: Tọpinpin cache hits àti ìfipamọ́ owó
5. **Mú un rọrùn síi**: Ṣàtúnṣe TTL àti ìlànà cache dá lórí àwọn àbájáde
