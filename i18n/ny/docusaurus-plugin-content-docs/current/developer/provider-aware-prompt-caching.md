---
title: Kusunga ma Prompt mu Cache Kodziwa Provider
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 imayambitsa **provider-aware prompt caching**, yomwe imakonza bwino mtengo wa API ndi kuchedwa poyika prompts mu cache kudutsa ma provider osiyanasiyana a LLM. Provider aliyense ali ndi njira ndi makonzedwe osiyanasiyana a caching.

## Chidule {#overview}

Prompt caching imakulolani kuti:

- Muyike mu cache prompts zazikulu, zomwe zimagwiritsidwa ntchito kawirikawiri
- Muchepetse mtengo wa API popewa kukonza kobwerezabwereza
- Musinthe kuchedwa kwa zopempha zomwe zili mu cache
- Muyendetse moyo wa cache momveka bwino

Ma provider osiyanasiyana amagwiritsa ntchito caching mosiyanasiyana:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching yokhala ndi TTL
- **OpenRouter**: Caching yokhudzana ndi provider
- **Vertex Anthropic**: Prompt caching yokhala ndi cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini imapereka kasamalidwe ka cache komveka bwino kudzera pa `cachedContents` API.

### Makonzedwe {#configuration}

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

### Kupanga Prompt Yoyikidwa mu Cache {#creating-a-cached-prompt}

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

### Kugwiritsa Ntchito Prompt Yoyikidwa mu Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Moyo wa Cache {#cache-lifecycle}

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

### Njira Zabwino Kwambiri za Gemini {#best-practices-for-gemini}

- **Ikani TTL yoyenera**: Yerekezerani kusunga mtengo motsutsana ndi kukalamba kwa cache
- **Ikani system prompts mu cache**: Gwiritsaninso ntchito system prompt yomweyo pazopempha zosiyanasiyana
- **Yang'anirani kugwiritsidwa ntchito kwa cache**: Tsatirani ma cache omwe amagwiritsidwa ntchito kwambiri
- **Chotsani ma cache omwe atha nthawi**: Nthawi ndi nthawi chotsani ma cache osagwiritsidwa ntchito

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI imathandiza prompt caching yokhala ndi kasamalidwe ka TTL kodzichitira yokha.

### Makonzedwe {#configuration-1}

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

### Kuyatsa Caching {#enabling-caching}

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

Azure OpenAI imagwiritsa ntchito HTTP headers pa cache control:

```
Cache-Control: max_age=3600
```

Makhalidwe othandizidwa:

- `max_age=<seconds>`: Ikani mu cache kwa nthawi yomwe yatchulidwa
- `no_cache`: Musayike pempho ili mu cache
- `no_store`: Musayike mu cache ndipo musagwiritsenso ntchito

### Kuyang'anira Kugwiritsidwa Ntchito kwa Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Njira Zabwino Kwambiri za Azure OpenAI {#best-practices-for-azure-openai}

- **Gwiritsani ntchito prompts zosasintha**: Prompts zofanana zimapindula ndi caching
- **Ikani TTL yanzeru**: Yerekezerani mtengo motsutsana ndi kutsitsimuka
- **Yang'anirani cache metrics**: Tsatirani kupanga cache motsutsana ndi hits
- **Sonkhanitsani zopempha zofanana**: Ikani zopempha m'magulu kuti muwonjezere cache hits

## OpenRouter: Caching Yokhudzana ndi Provider {#openrouter-provider-specific-caching}

OpenRouter imathandiza caching kudzera mwa ma provider omwe ali pansi pake (OpenAI, Anthropic, ndi zina).

### Makonzedwe {#configuration-2}

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

### Kugwiritsa Ntchito OpenRouter Caching {#using-openrouter-caching}

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

### Zosankha Zokhudzana ndi Provider {#provider-specific-options}

Ma provider osiyanasiyana ali ndi njira zosiyanasiyana za caching:

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

### Njira Zabwino Kwambiri za OpenRouter {#best-practices-for-openrouter}

- **Dziwani caching ya provider wanu**: Provider aliyense ali ndi njira zosiyanasiyana
- **Yesani khalidwe la caching**: Tsimikizirani kuti caching ikugwira ntchito ndi provider amene mwasankha
- **Yang'anirani mitengo**: Tsatirani ndalama zosungidwa kuchokera ku caching
- **Gwiritsani ntchito models zosasintha**: Kusintha models kumasokoneza cache hits

## Vertex Anthropic: Prompt Caching Yokhala ndi Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) imathandiza prompt caching yokhala ndi cache control yomveka bwino.

### Makonzedwe {#configuration-3}

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

### Kugwiritsa Ntchito Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Mitundu ya Kuwongolera Cache {#cache-control-types}

- **ephemeral**: Cache kwa nthawi ya pempho (zokhazikika)
- **persistent**: Cache kudutsa mapempho angapo (ngati ikuthandizidwa)

### Kuwunika Kagwiritsidwe Ntchito ka Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Njira Zabwino Kwambiri za Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Gwiritsani ntchito ephemeral caching**: Ndi yabwino pa caching ya gawo limodzi
- **Ikani max_tokens moyenera**: Gwirizanitsani kukula kwa cache ndi mtengo
- **Yang'anirani ma metrics a cache**: Tsatirani mmene cache ikugwirira ntchito bwino
- **Yesani ndi ntchito yanu**: Tsimikizirani kuti caching ikupindulitsa kagwiritsidwe kanu

## Njira ya Caching Yodutsa Othandizira {#cross-provider-caching-strategy}

### Kasinthidwe Kogwirizana {#unified-configuration}

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

### Kuzindikira Wothandizira {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Njira Yobwerera M'mbuyo {#fallback-strategy}

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

## Kukonza Mtengo {#cost-optimization}

### Werengani Zosunga {#calculate-savings}

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

### Malangizo Okonza {#optimization-tips}

- **Cache ma system prompts akulu**: Kusunga mtengo kwakukulu kwambiri
- **Gwiritsaninso ntchito context**: Cache zikalata za context zomwe zimagwiritsidwa ntchito kawirikawiri
- **Mapempho a batch**: Sonkhanitsani mapempho ofanana kuti muwonjezere cache hits
- **Yang'anirani kugwira ntchito kwa cache**: Tsatirani zosunga zenizeni
- **Sinthani TTL**: Gwirizanitsani mtengo ndi kutsitsimuka

## Kuthetsa Mavuto {#troubleshooting}

### Cache sikugwiritsidwa ntchito {#cache-not-being-used}

- Tsimikizirani kuti caching yatsegulidwa mu configuration
- Onani kuti prompts ndi zofanana (caching imafuna kufanana kwenikweni)
- Tsimikizirani kuti cache sinathe nthawi
- Onani malire a cache a wothandizira aliyense

### Kupanga cache kukulephera {#cache-creation-failing}

- Tsimikizirani kuti kukula kwa cache kuli mkati mwa malire a wothandizira
- Onani kuti syntax ya cache control ndi yolondola
- Onetsetsani kuti wothandizira amathandiza caching pa model yanu
- Unikaninso documentation ya wothandizira kuti muone malire

### Mitengo yosayembekezereka {#unexpected-costs}

- Yang'anirani kupanga cache poyerekeza ndi cache read tokens
- Tsimikizirani kuti cache ikugwiritsidwa ntchito kwenikweni
- Onani cache misses chifukwa cha kusiyanasiyana kwa prompt
- Ganizirani kusintha TTL kapena njira ya cache

## Kuyerekezera Othandizira {#provider-comparison}

| Mbali | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Za wothandizira aliyense | Cache control |
| Kuwongolera TTL | Kofotokozedwa bwino | Kudzera mu headers | Kutengera wothandizira | Ephemeral/persistent |
| Kukula kwakukulu kwa cache | 1M tokens | Kutengera wothandizira | Kutengera wothandizira | 1M tokens |
| Kuchepetsa mtengo | 90% | 90% | Kutengera wothandizira | 90% |
| Kuwunika | Mwatsatanetsatane | Kudzera mu metrics | Kutengera wothandizira | Kudzera mu usage |

## Masitepe Otsatira {#next-steps}

1. **Sankhani wothandizira wanu**: Sankhani kutengera zosowa zanu
2. **Konzani caching**: Khazikitsani caching ya wothandizira aliyense
3. **Yesani caching**: Tsimikizirani kuti imagwira ntchito ndi prompts anu
4. **Yang'anirani kagwiritsidwe ntchito**: Tsatirani cache hits ndi zosunga mtengo
5. **Konzani**: Sinthani TTL ndi njira ya cache kutengera zotsatira
