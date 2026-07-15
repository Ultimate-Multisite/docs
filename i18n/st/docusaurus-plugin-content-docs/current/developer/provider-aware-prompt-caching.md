---
title: Ho boloka Prompt ka Cache ho Hlokomelang Mofani
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Ho Boloka Prompt ka Cache ho Elang Hloko Provider

Superdav AI Agent v1.12.0 e hlahisa **ho boloka prompt ka cache ho elang hloko provider**, ho ntlafatsang ditjeho tsa API le tieho ka ho boloka prompts ka cache ho pholletsa le providers ba fapaneng ba LLM. Provider ka nngwe e na le mekgwa le ditlhophiso tse fapaneng tsa caching.

## Kakaretso {#overview}

Ho boloka prompt ka cache ho o dumella ho:

- Boloka prompts tse kgolo, tse sebediswang kgafetsa ka cache
- Fokotsa ditjeho tsa API ka ho qoba tshebetso e iphetang e sa hlokahaleng
- Ntlafatsa tieho bakeng sa dikopo tse bolokilweng ka cache
- Laola potoloho ya bophelo ba cache ka ho hlaka

Providers ba fapaneng ba kenya caching tshebetsong ka ditsela tse fapaneng:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Ho boloka prompt ka cache ka TTL
- **OpenRouter**: Caching e ikgethileng ho provider
- **Vertex Anthropic**: Ho boloka prompt ka cache ka taolo ya cache

## Google Gemini: `cachedContents` API {#google-gemini-cachedcontents-api}

Google Gemini e fana ka taolo e hlakileng ya cache ka `cachedContents` API.

### Tlhophiso {#configuration}

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

### Ho Theha Prompt e Bolokilweng ka Cache {#creating-a-cached-prompt}

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

### Ho Sebedisa Prompt e Bolokilweng ka Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Potoloho ya Bophelo ba Cache {#cache-lifecycle}

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

### Mekgwa e Metle ka ho Fetisisa bakeng sa Gemini {#best-practices-for-gemini}

- **Beha TTL e loketseng**: Lekalekanya poloko ya ditjeho le ho tsofala ha cache
- **Boloka system prompts ka cache**: Sebedisa system prompt e tshwanang hape dikopong tse fapaneng
- **Lekola tshebediso ya cache**: Latela hore na ke di-cache dife tse sebediswang haholo
- **Hlakola di-cache tse fedileng nako**: Hlakola di-cache tse sa sebedisweng nako le nako

## Azure OpenAI: Ho Boloka Prompt ka Cache {#azure-openai-prompt-caching}

Azure OpenAI e tshehetsa ho boloka prompt ka cache ka taolo ya TTL e iketsang.

### Tlhophiso {#configuration-1}

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

### Ho Dumella Caching {#enabling-caching}

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

### Dihlooho tsa Cache {#cache-headers}

Azure OpenAI e sebedisa dihlooho tsa HTTP bakeng sa taolo ya cache:

```
Cache-Control: max_age=3600
```

Diboleng tse tshehetswang:

- `max_age=<seconds>`: Boloka ka cache bakeng sa nako e boletsweng
- `no_cache`: O se ke wa boloka kopo ena ka cache
- `no_store`: O se ke wa boloka ka cache mme o se ke wa sebedisa hape

### Ho Lekola Tshebediso ya Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Mekgwa e Metle ka ho Fetisisa bakeng sa Azure OpenAI {#best-practices-for-azure-openai}

- **Sebedisa prompts tse tsitsitseng**: Prompts tse tshwanang di una molemo ho caching
- **Beha TTL e utlwahalang**: Lekalekanya ditjeho le botjha
- **Lekola metrics tsa cache**: Latela ho thehwa ha cache kgahlanong le hits
- **Kopanya dikopo tse tshwanang**: Hlophisa dikopo ka dihlopha ho eketsa cache hits

## OpenRouter: Caching e Ikgethileng ho Provider {#openrouter-provider-specific-caching}

OpenRouter e tshehetsa caching ka providers ba ka tlase (OpenAI, Anthropic, jj.).

### Tlhophiso {#configuration-2}

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

### Ho Sebedisa OpenRouter Caching {#using-openrouter-caching}

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

### Dikgetho tse Ikgethileng ho Provider {#provider-specific-options}

Providers ba fapaneng ba na le mekgwa e fapaneng ya caching:

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

### Mekgwa e Metle ka ho Fetisisa bakeng sa OpenRouter {#best-practices-for-openrouter}

- **Tseba caching ya provider wa hao**: Provider ka nngwe e na le mekgwa e fapaneng
- **Leka boitshwaro ba caching**: Netefatsa hore caching e sebetsa le provider eo o e kgethileng
- **Lekola ditjeho**: Latela poloko e tswang ho caching
- **Sebedisa models tse tsitsitseng**: Ho fetola models ho senya cache hits

## Vertex Anthropic: Ho Boloka Prompt ka Cache ka Taolo ya Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) e tshehetsa ho boloka prompt ka cache ka taolo e hlakileng ya cache.

### Tlhophiso {#configuration-3}

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

### Ho Sebelisa Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Mefuta ea Taolo ea Cache {#cache-control-types}

- **ephemeral**: Cache bakeng sa nako ea kopo (ea kamehla)
- **persistent**: Cache ho pholletsa le likopo tse ngata (haeba e tšehetsoa)

### Ho Hlokomela Tšebeliso ea Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Mekhoa e Metle bakeng sa Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Sebelisa caching ea ephemeral**: E loketse caching ea seboka se le seng
- **Beha max_tokens ka nepo**: Lekalekanya boholo ba cache le litšenyehelo
- **Hlokomela metrics ea cache**: Latela katleho ea cache
- **Lekola ka mosebetsi oa hau**: Netefatsa hore caching e tsoela nyeoe ea hau ea tšebeliso molemo

## Leano la Caching Pakeng tsa Bafani {#cross-provider-caching-strategy}

### Tlhophiso e Kopaneng {#unified-configuration}

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

### Ho Lemohwa ha Mofani {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Leano la Fallback {#fallback-strategy}

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

## Ntlafatso ea Litšenyehelo {#cost-optimization}

### Bala Poloko {#calculate-savings}

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

### Malebela a Ntlafatso {#optimization-tips}

- **Cache system prompts tse kholo**: Poloko e kholo ka ho fetisisa ea litšenyehelo
- **Sebelisa moelelo hape**: Cache litokomane tsa moelelo tse sebelisoang khafetsa
- **Likopo tsa batch**: Kopanya likopo tse tšoanang ho eketsa cache hits
- **Hlokomela katleho ea cache**: Latela poloko ea sebele
- **Fetola TTL**: Lekalekanya litšenyehelo le bocha

## Ho Rarolla Mathata {#troubleshooting}

### Cache ha e sebelisoe {#cache-not-being-used}

- Netefatsa hore caching e nolofalitsoe tlhophisong
- Hlahloba hore prompts lia tšoana (caching e hloka ho tšoana ka ho feletseng)
- Netefatsa hore cache ha e so fele
- Hlahloba meeli ea cache e ikhethileng ho mofani

### Ho theha cache hoa hloleha {#cache-creation-failing}

- Netefatsa hore boholo ba cache bo ka har’a meeli ea mofani
- Hlahloba hore syntax ea taolo ea cache e nepahetse
- Netefatsa hore mofani o tšehetsa caching bakeng sa model ea hau
- Hlahloba litokomane tsa mofani bakeng sa meeli

### Litšenyehelo tse sa lebelloang {#unexpected-costs}

- Hlokomela ho thehoa ha cache ha ho bapisoa le tokens tsa ho bala cache
- Netefatsa hore cache e hlile e sebelisoa
- Hlahloba cache misses tse bakoang ke liphapang tsa prompt
- Nahana ka ho fetola TTL kapa leano la cache

## Papiso ea Bafani {#provider-comparison}

| Tšobotsi | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | E ikhethileng ho mofani | Taolo ea cache |
| Taolo ea TTL | E hlakileng | Ka headers | E itšetlehile ka mofani | Ephemeral/persistent |
| Boholo bo boholo ba cache | 1M tokens | Bo itšetlehile ka mofani | Bo itšetlehile ka mofani | 1M tokens |
| Phokotso ea litšenyehelo | 90% | 90% | E itšetlehile ka mofani | 90% |
| Ho hlokomela | Ka botlalo | Ka metrics | Ho itšetlehile ka mofani | Ka usage |

## Mehato e Latelang {#next-steps}

1. **Khetha mofani oa hau**: Khetha ho latela litlhoko tsa hau
2. **Hlophisa caching**: Beha caching e ikhethileng ho mofani
3. **Lekola caching**: Netefatsa hore e sebetsa le prompts tsa hau
4. **Hlokomela tšebeliso**: Latela cache hits le poloko ea litšenyehelo
5. **Ntlafatsa**: Fetola TTL le leano la cache ho latela liphetho
