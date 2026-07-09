---
title: Kubika amabwiriza muri cache bishingiye ku mutanga-serivisi
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Kubika Prompt mu Bubiko Hakurikijwe Provider

Superdav AI Agent v1.12.0 izana **provider-aware prompt caching**, itunganya ibiciro bya API n’ubukererwe ibika prompts mu bubiko hagati ya LLM providers batandukanye. Buri provider afite uburyo n’igenamiterere bitandukanye byo kubika mu bubiko.

## Incamake

Kubika prompt mu bubiko bigufasha:

- Kubika prompts nini zikoreshwa kenshi
- Kugabanya ibiciro bya API wirinda gutunganya ibintu bisubirwamo
- Kunoza ubukererwe ku busabe bufite ibiri mu bubiko
- Kugenzura mu buryo bweruye ubuzima bw’ibiri mu bubiko

Providers batandukanye bashyira mu bikorwa kubika mu bubiko mu buryo butandukanye:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Kubika prompt mu bubiko hamwe na TTL
- **OpenRouter**: Kubika mu bubiko byihariye kuri provider
- **Vertex Anthropic**: Kubika prompt mu bubiko hamwe no kugenzura ububiko

## Google Gemini: cachedContents API

Google Gemini itanga igenzura ryeruye ry’ububiko binyuze kuri `cachedContents` API.

### Igenamiterere

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

### Gukora Prompt Ibitswe mu Bubiko

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

### Gukoresha Prompt Ibitswe mu Bubiko

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ubuzima bw’Ibiri mu Bubiko

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

### Imikorere Myiza kuri Gemini

- **Shyiraho TTL ikwiye**: Shyira ku munzani kuzigama ibiciro n’uko ibiri mu bubiko bishobora gusaza
- **Bika system prompts mu bubiko**: Ongera ukoreshe system prompt imwe mu busabe butandukanye
- **Kurikirana ikoreshwa ry’ububiko**: Menya ububiko bukoreshwa cyane kurusha ubundi
- **Sukura ububiko bwarangije igihe**: Siba rimwe na rimwe ububiko butagikoreshwa

## Azure OpenAI: Kubika Prompt mu Bubiko

Azure OpenAI ishyigikira kubika prompt mu bubiko hamwe no gucunga TTL mu buryo bwikora.

### Igenamiterere

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

### Gufungura Kubika mu Bubiko

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

### Imitwe y’Ububiko

Azure OpenAI ikoresha HTTP headers mu kugenzura ububiko:

```
Cache-Control: max_age=3600
```

Indangagaciro zishyigikiwe:

- `max_age=<seconds>`: Bika mu bubiko mu gihe cyagenwe
- `no_cache`: Ntukabike ubu busabe mu bubiko
- `no_store`: Ntukabike kandi ntukongere gukoresha

### Gukurikirana Ikoreshwa ry’Ububiko

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Imikorere Myiza kuri Azure OpenAI

- **Koresha prompts zidahindagurika**: Prompts zisa neza neza zungukira ku kubikwa mu bubiko
- **Shyiraho TTL yumvikana**: Shyira ku munzani igiciro n’ubusugire bw’ibigezweho
- **Kurikirana ibipimo by’ububiko**: Menya uko ububiko bukorwa ugereranyije n’uko buboneka
- **Shyira hamwe ubusabe busa**: Shyira ubusabe mu matsinda kugira ngo wongere amahirwe yo kubona ibiri mu bubiko

## OpenRouter: Kubika mu Bubiko Byihariye kuri Provider

OpenRouter ishyigikira kubika mu bubiko binyuze kuri providers bo hasi (OpenAI, Anthropic, n’abandi).

### Igenamiterere

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

### Gukoresha Kubika mu Bubiko kwa OpenRouter

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

### Amahitamo Yihariye kuri Provider

Providers batandukanye bafite uburyo butandukanye bwo kubika mu bubiko:

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

### Imikorere Myiza kuri OpenRouter

- **Menya uburyo provider wawe abika mu bubiko**: Buri provider afite uburyo butandukanye
- **Gerageza imyitwarire y’ububiko**: Emeza ko kubika mu bubiko bikorana na provider wahisemo
- **Kurikirana ibiciro**: Menya amafaranga uzigama biturutse ku kubika mu bubiko
- **Koresha models zidahindagurika**: Guhinduranya models bisenya amahirwe yo kubona ibiri mu bubiko

## Vertex Anthropic: Kubika Prompt mu Bubiko hamwe no Kugenzura Ububiko

Vertex Anthropic (Google Cloud) ishyigikira kubika prompt mu bubiko hamwe no kugenzura ububiko mu buryo bweruye.

### Igenamiterere

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

### Gukoresha kubika by'agateganyo kwa Vertex Anthropic

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

### Ubwoko bwa Cache Control

- **ephemeral**: Bika by'agateganyo mu gihe cy'igisubizo gisabwa (mburabuzi)
- **persistent**: Bika by'agateganyo hagati y'ibisubizo bisabwa byinshi (niba bishyigikiwe)

### Gukurikirana ikoreshwa rya cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Imikorere myiza kuri Vertex Anthropic

- **Koresha kubika by'agateganyo kwa ephemeral**: Ni byiza ku kubika by'agateganyo mu gihe kimwe cy'isomo
- **Shyiraho max_tokens mu buryo bukwiye**: Guhuza ingano ya cache n'igiciro
- **Kurikirana ibipimo bya cache**: Kurikirana uko cache ikora neza
- **Gerageza n'umutwaro w'akazi wawe**: Emeza ko kubika by'agateganyo bigirira akamaro uko ubikoresha

## Ingamba zo kubika by'agateganyo ku batanga serivisi benshi

### Iboneza rihuriweho

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

### Kumenya utanga serivisi

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Ingamba zo gusubira ku yindi nzira

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

## Kugabanya ibiciro

### Kubara amafaranga uzigama

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

### Inama zo kunoza

- **Bika by'agateganyo system prompts nini**: Ni ho haboneka kuzigama ibiciro byinshi kurusha ahandi
- **Ongera ukoreshe imiterere**: Bika by'agateganyo inyandiko z'imiterere zikoreshwa kenshi
- **Huriza hamwe ibisabwa**: Shyira hamwe ibisabwa bisa kugira ngo wongere cache hits
- **Kurikirana uko cache ikora neza**: Kurikirana amafaranga nyayo uzigama
- **Hindura TTL**: Guhuza igiciro n'ubusugire bw'igihe

## Gukemura ibibazo

### Cache ntikoreshwa

- Emeza ko kubika by'agateganyo byafunguwe mu iboneza
- Reba ko prompts zisa neza neza (kubika by'agateganyo bisaba guhuza neza)
- Emeza ko cache itararangiza igihe
- Reba imipaka ya cache yihariye ku mutanga serivisi

### Gukora cache birananirana

- Emeza ko ingano ya cache iri mu mipaka y'utanga serivisi
- Reba ko syntax ya cache control ari yo
- Menya neza ko utanga serivisi ashyigikira kubika by'agateganyo kuri model yawe
- Suzuma inyandiko z'utanga serivisi ku bijyanye n'imbogamizi

### Ibiciro bitunguranye

- Kurikirana gukora cache ugereranyije na cache read tokens
- Emeza ko cache ikoreshwa koko
- Reba cache misses ziterwa n'itandukaniro muri prompt
- Tekereza guhindura TTL cyangwa ingamba za cache

## Kugereranya abatanga serivisi

| Ikiranga | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Byihariye ku mutanga serivisi | Cache control |
| Igenzura rya TTL | Ryeruye | Binyuze muri headers | Biterwa n'utanga serivisi | Ephemeral/persistent |
| Ingano ntarengwa ya cache | 1M tokens | Biterwa n'utanga serivisi | Biterwa n'utanga serivisi | 1M tokens |
| Kugabanya igiciro | 90% | 90% | Biterwa n'utanga serivisi | 90% |
| Gukurikirana | Birambuye | Binyuze mu bipimo | Biterwa n'utanga serivisi | Binyuze mu ikoreshwa |

## Intambwe zikurikira

1. **Hitamo utanga serivisi wawe**: Hitamo ukurikije ibyo ukeneye
2. **Bona neza kubika by'agateganyo**: Tegura kubika by'agateganyo byihariye ku mutanga serivisi
3. **Gerageza kubika by'agateganyo**: Emeza ko bikorana na prompts zawe
4. **Kurikirana ikoreshwa**: Kurikirana cache hits n'amafaranga uzigama
5. **Nonoza**: Hindura TTL n'ingamba za cache ukurikije ibisubizo
