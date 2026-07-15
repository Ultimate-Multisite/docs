---
title: Fitahirizana Cache Prompt Mahafantatra ny Provider
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caching ny Prompt Mahafantatra Provider

Superdav AI Agent v1.12.0 dia mampiditra **caching ny prompt mahafantatra provider**, izay manatsara ny vidin’ny API sy ny latency amin’ny alalan’ny caching ny prompts manerana ireo provider LLM samihafa. Samy manana mekanisma sy fikirakirana caching samihafa ny provider tsirairay.

## Topimaso {#overview}

Ny caching ny prompt dia mamela anao:

- Hanaovana cache ireo prompts lehibe sy ampiasaina matetika
- Hampihenana ny vidin’ny API amin’ny fisorohana fanodinana miverimberina
- Hanatsarana ny latency ho an’ireo fangatahana voatahiry anaty cache
- Hitantana mazava ny tsingerim-piainan’ny cache

Samy hafa ny fomba anatanterahan’ny provider samihafa ny caching:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Caching ny prompt miaraka amin’ny TTL
- **OpenRouter**: Caching manokana arakaraka ny provider
- **Vertex Anthropic**: Caching ny prompt miaraka amin’ny fanaraha-maso cache

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini dia manome fitantanana cache mazava amin’ny alalan’ny `cachedContents` API.

### Fikirakirana {#configuration}

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

### Famoronana Prompt Voatahiry anaty Cache {#creating-a-cached-prompt}

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

### Fampiasana Prompt Voatahiry anaty Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Tsingerim-piainan’ny Cache {#cache-lifecycle}

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

### Fomba Fanao Tsara Indrindra ho an’ny Gemini {#best-practices-for-gemini}

- **Mametraha TTL mety**: Ampifandanjao ny fitsitsiana vola sy ny fahalasanan’ny cache
- **Ataovy cache ny system prompts**: Ampiasao indray ilay system prompt mitovy manerana ny fangatahana
- **Araho maso ny fampiasana cache**: Araho hoe iza amin’ireo cache no ampiasaina indrindra
- **Diovy ireo cache lany daty**: Fafao tsindraindray ireo cache tsy ampiasaina

## Azure OpenAI: Caching ny Prompt {#azure-openai-prompt-caching}

Azure OpenAI dia manohana caching ny prompt miaraka amin’ny fitantanana TTL mandeha ho azy.

### Fikirakirana {#configuration-1}

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

### Fampandehanana ny Caching {#enabling-caching}

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

### Lohateny Cache {#cache-headers}

Azure OpenAI dia mampiasa lohateny HTTP ho an’ny fanaraha-maso cache:

```
Cache-Control: max_age=3600
```

Sanda tohanana:

- `max_age=<seconds>`: Ataovy cache mandritra ny faharetana voafaritra
- `no_cache`: Aza atao cache ity fangatahana ity
- `no_store`: Aza atao cache ary aza ampiasaina indray

### Fanaraha-maso ny Fampiasana Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Fomba Fanao Tsara Indrindra ho an’ny Azure OpenAI {#best-practices-for-azure-openai}

- **Mampiasà prompts tsy miovaova**: Mahazo tombony amin’ny caching ny prompts mitovy tanteraka
- **Mametraha TTL antonony**: Ampifandanjao ny vidiny sy ny maha-vaovao
- **Araho maso ny metrika cache**: Araho ny famoronana cache raha oharina amin’ny hits
- **Ataovy andiany ireo fangatahana mitovy**: Vondroy ny fangatahana mba hampitomboana ny cache hits

## OpenRouter: Caching Manokana arakaraka ny Provider {#openrouter-provider-specific-caching}

OpenRouter dia manohana caching amin’ny alalan’ireo provider fototra (OpenAI, Anthropic, sns.).

### Fikirakirana {#configuration-2}

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

### Fampiasana Caching OpenRouter {#using-openrouter-caching}

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

### Safidy Manokana arakaraka ny Provider {#provider-specific-options}

Samy manana mekanisma caching samihafa ny provider samihafa:

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

### Fomba Fanao Tsara Indrindra ho an’ny OpenRouter {#best-practices-for-openrouter}

- **Fantaro ny caching an’ny provider-nao**: Samy manana mekanisma samihafa ny provider tsirairay
- **Andramo ny fitondran-tenan’ny caching**: Hamarino fa mandeha amin’ilay provider nofidinao ny caching
- **Araho maso ny vola lany**: Araho ny fitsitsiana azo avy amin’ny caching
- **Mampiasà models tsy miovaova**: Manapaka ny cache hits ny fifindrana models

## Vertex Anthropic: Caching ny Prompt miaraka amin’ny Fanaraha-maso Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) dia manohana caching ny prompt miaraka amin’ny fanaraha-maso cache mazava.

### Fikirakirana {#configuration-3}

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

### Fampiasana Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Karazana Cache Control {#cache-control-types}

- **ephemeral**: Cache mandritra ny fangatahana (default)
- **persistent**: Cache manerana fangatahana maro (raha tohanana)

### Fanaraha-maso ny Fampiasana Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Fomba Fanao Tsara Indrindra ho an'ny Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Mampiasà caching ephemeral**: Tsara ho an'ny caching amin'ny session tokana
- **Apetraka araka ny tokony ho izy ny max_tokens**: Ampifandanjana ny haben'ny cache sy ny vidiny
- **Araho maso ny metrika cache**: Araho ny fahombiazan'ny cache
- **Andramo amin'ny enta-miasanao**: Hamarino fa mahasoa ny tranga fampiasanao ny caching

## Paikady Caching Miampita Mpanome Tolotra {#cross-provider-caching-strategy}

### Fanamboarana Mitambatra {#unified-configuration}

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

### Famantarana Mpanome Tolotra {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Paikady Fallback {#fallback-strategy}

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

## Fanatsarana Vidiny {#cost-optimization}

### Kajio ny Fitsitsiana {#calculate-savings}

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

### Torohevitra Fanatsarana {#optimization-tips}

- **Cache prompts rafitra lehibe**: Fitsitsiana vidiny lehibe indrindra
- **Ampiasao indray ny context**: Cache antontan-taratasy context ampiasaina matetika
- **Ataovy batch ny fangatahana**: Vondrony ny fangatahana mitovy mba hampitomboana ny cache hits
- **Araho maso ny fahombiazan'ny cache**: Araho ny fitsitsiana tena izy
- **Ahitsio ny TTL**: Ampifandanjana ny vidiny sy ny havaozina

## Famahana Olana {#troubleshooting}

### Tsy ampiasaina ny cache {#cache-not-being-used}

- Hamarino fa alefa ao amin'ny fanamboarana ny caching
- Jereo fa mitovy tanteraka ny prompts (mitaky fitoviana tanteraka ny caching)
- Hamarino fa tsy lany daty ny cache
- Jereo ny fetran'ny cache manokana ho an'ny mpanome tolotra

### Tsy mahomby ny famoronana cache {#cache-creation-failing}

- Hamarino fa ao anatin'ny fetran'ny mpanome tolotra ny haben'ny cache
- Jereo fa marina ny syntax cache control
- Ataovy azo antoka fa manohana caching ho an'ny model-nao ny mpanome tolotra
- Avereno jerena ny documentation an'ny mpanome tolotra momba ny fetra

### Vidiny tsy nampoizina {#unexpected-costs}

- Araho maso ny famoronana cache raha oharina amin'ny tokens vakina avy amin'ny cache
- Hamarino fa tena ampiasaina ny cache
- Jereo raha misy cache misses noho ny fiovaovan'ny prompt
- Diniho ny fanitsiana ny TTL na ny paikady cache

## Fampitahana Mpanome Tolotra {#provider-comparison}

| Endri-javatra | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Manokana ho an'ny mpanome tolotra | Cache control |
| Fanaraha-maso TTL | Mazava | Amin'ny alalan'ny headers | Miankina amin'ny mpanome tolotra | Ephemeral/persistent |
| Haben'ny cache ambony indrindra | 1M tokens | Miankina amin'ny mpanome tolotra | Miankina amin'ny mpanome tolotra | 1M tokens |
| Fampihenana vidiny | 90% | 90% | Miankina amin'ny mpanome tolotra | 90% |
| Fanaraha-maso | Amin'ny antsipiriany | Amin'ny alalan'ny metrics | Miankina amin'ny mpanome tolotra | Amin'ny alalan'ny usage |

## Dingana Manaraka {#next-steps}

1. **Safidio ny mpanome tolotrao**: Safidio araka ny filanao
2. **Amboary ny caching**: Apetraho ny caching manokana ho an'ny mpanome tolotra
3. **Andramo ny caching**: Hamarino fa mandeha amin'ny prompts-nao izany
4. **Araho maso ny fampiasana**: Araho ny cache hits sy ny fitsitsiana vidiny
5. **Hatsarao**: Ahitsio ny TTL sy ny paikady cache araka ny vokatra
