---
title: Kuchengetwa kwePrompt Kunoenderana neMupi
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt Caching Inoziva Provider

Superdav AI Agent v1.12.0 inounza **provider-aware prompt caching**, iyo inogadzirisa mutengo weAPI nekumhanya nekuchengetedza maprompt pakati peLLM providers vakasiyana. Provider mumwe nemumwe ane nzira nemagadzirirwo akasiyana e caching.

## Pfupiso {#overview}

Prompt caching inokubvumira kuti:

- Uchengetedze maprompt makuru, anoshandiswa kazhinji
- Uderedze mutengo weAPI nekudzivisa kugadzirisa kwakapetwa
- Uvandudze kumhanya kwezvikumbiro zvakachengetedzwa mu cache
- Utungamirire cache lifecycle zvakajeka

Providers vakasiyana vanoita caching nenzira dzakasiyana:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching ine TTL
- **OpenRouter**: Caching yakanangana neprovider
- **Vertex Anthropic**: Prompt caching ine cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini inopa kutungamirira cache zvakajeka kuburikidza ne `cachedContents` API.

### Magadzirirwo {#configuration}

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

### Kugadzira Prompt Yakachengetedzwa muCache {#creating-a-cached-prompt}

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

### Kushandisa Prompt Yakachengetedzwa muCache {#using-a-cached-prompt}

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

### Maitiro Akanakisisa eGemini {#best-practices-for-gemini}

- **Isa TTL yakakodzera**: Enzanisa kuchengetedza mutengo ne cache staleness
- **Chengetedza system prompts mu cache**: Shandisazve system prompt imwe chete pazvikumbiro
- **Tarisa mashandisirwo e cache**: Tevera kuti ma cache api anoshandiswa zvakanyanya
- **Bvisa ma cache akapera nguva**: Nguva nenguva bvisa ma cache asingachashandiswi

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI inotsigira prompt caching ine kutungamirirwa kweTTL otomatiki.

### Magadzirirwo {#configuration-1}

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

### Kugonesa Caching {#enabling-caching}

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

Azure OpenAI inoshandisa HTTP headers pakutonga cache:

```
Cache-Control: max_age=3600
```

Mivalue inotsigirwa:

- `max_age=<seconds>`: Chengetedza mu cache kwenguva yakatarwa
- `no_cache`: Usachengetedze chikumbiro ichi mu cache
- `no_store`: Usachengetedze mu cache uye usashandisazve

### Kuongorora Mashandisirwo eCache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Maitiro Akanakisisa eAzure OpenAI {#best-practices-for-azure-openai}

- **Shandisa maprompt anoenderana**: Maprompt akafanana anobatsirwa ne caching
- **Isa TTL ine mwero**: Enzanisa mutengo nekutsva
- **Tarisa cache metrics**: Tevera kugadzirwa kwe cache zvichienzaniswa ne hits
- **Unganidza zvikumbiro zvakafanana**: Ronga zvikumbiro pamwe chete kuti uwedzere cache hits

## OpenRouter: Caching Yakanangana neProvider {#openrouter-provider-specific-caching}

OpenRouter inotsigira caching kuburikidza neproviders vari pasi payo (OpenAI, Anthropic, nezvimwe).

### Magadzirirwo {#configuration-2}

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

### Kushandisa OpenRouter Caching {#using-openrouter-caching}

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

### Sarudzo Dzakanangana neProvider {#provider-specific-options}

Providers vakasiyana vane nzira dzakasiyana dze caching:

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

### Maitiro Akanakisisa eOpenRouter {#best-practices-for-openrouter}

- **Ziva caching yeprovider wako**: Provider mumwe nemumwe ane nzira dzakasiyana
- **Edza maitiro e caching**: Simbisa kuti caching inoshanda neprovider wawasarudza
- **Tarisa mitengo**: Tevera kuchengetedza kunobva ku caching
- **Shandisa models dzinoenderana**: Kuchinja models kunoputsa cache hits

## Vertex Anthropic: Prompt Caching ine Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) inotsigira prompt caching ine cache control yakajeka.

### Magadzirirwo {#configuration-3}

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

### Kushandisa Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Mhando dzeCache Control {#cache-control-types}

- **ephemeral**: Cache kwenguva yechikumbiro (default)
- **persistent**: Cache muzvikumbiro zvakawanda (kana zvichitsigirwa)

### Kuongorora Kushandiswa kweCache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Maitiro Akanakisisa eVertex Anthropic {#best-practices-for-vertex-anthropic}

- **Shandisa ephemeral caching**: Zvakanaka pakucaching kwechikamu chimwe chete
- **Seta max_tokens zvakakodzera**: Enzanisa saizi yeCache nemutengo
- **Ongorora cache metrics**: Tevera kushanda kwecache
- **Edza nebasa rako**: Simbisa kuti caching inobatsira mashandisirwo ako

## Zano reCaching Rinoyambuka Vapi {#cross-provider-caching-strategy}

### Kugadziriswa Kwakabatana {#unified-configuration}

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

### Kuziva Mupi {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Zano reFallback {#fallback-strategy}

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

## Kuderedza Mutengo {#cost-optimization}

### Verenga Kuchengetedza Mari {#calculate-savings}

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

### Mazano Ekugadzirisa {#optimization-tips}

- **Cache masystem prompts makuru**: Kuchengetedza mari kukuru
- **Shandisazve context**: Cache magwaro econtext anoshandiswa kazhinji
- **Batch zvikumbiro**: Unganidza zvikumbiro zvakafanana kuti uwedzere cache hits
- **Ongorora kushanda kwecache**: Tevera mari chaiyo yachengetedzwa
- **Gadzirisa TTL**: Enzanisa mutengo nekutsva kwezviri muCache

## Kugadzirisa Matambudziko {#troubleshooting}

### Cache haisi kushandiswa {#cache-not-being-used}

- Simbisa kuti caching yakagoneswa mukugadziriswa
- Tarisa kuti maprompts akafanana (caching inoda kufanana chaiko)
- Simbisa kuti cache haisati yapera nguva
- Tarisa miganho yeCache inoenderana nemupi

### Kugadzirwa kweCache kuri kutadza {#cache-creation-failing}

- Simbisa kuti saizi yeCache iri mukati memiganho yemupi
- Tarisa kuti syntax yeCache control yakarurama
- Ita shuwa kuti mupi anotsigira caching yemodel yako
- Wongorora magwaro emupi kuti uone miganho

### Mitengo isingatarisirwi {#unexpected-costs}

- Ongorora kugadzirwa kweCache uchienzanisa necache read tokens
- Simbisa kuti cache iri kunyatsoshandiswa
- Tarisa cache misses dzinokonzerwa nekusiyana kwemaprompts
- Funga kugadzirisa TTL kana zano reCache

## Kuenzanisa Vapi {#provider-comparison}

| Chinhu | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Zvinoenderana nemupi | Cache control |
| Kudzora TTL | Zvakajeka | Kuburikidza nemaheaders | Zvinoenderana nemupi | Ephemeral/persistent |
| Saizi yepamusoro yeCache | 1M tokens | Zvinoenderana nemupi | Zvinoenderana nemupi | 1M tokens |
| Kuderedzwa kwemutengo | 90% | 90% | Zvinoenderana nemupi | 90% |
| Kuongorora | Kwakadzama | Kuburikidza nemametrics | Zvinoenderana nemupi | Kuburikidza nekushandiswa |

## Matanho Anotevera {#next-steps}

1. **Sarudza mupi wako**: Sarudza zvichienderana nezvaunoda
2. **Gadzirisa caching**: Gadzira caching inoenderana nemupi
3. **Edza caching**: Simbisa kuti inoshanda nemaprompts ako
4. **Ongorora kushandiswa**: Tevera cache hits uye mari yachengetedzwa
5. **Gadzirisa**: Gadzirisa TTL nezano reCache zvichienderana nezvabuda
