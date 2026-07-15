---
title: Keteroki Tohuaki e Mōhio ana ki te Kaiwhakarato
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Keteroki Tohuaki e Mōhio ana ki te Kaiwhakarato

Ka whakauru a Superdav AI Agent v1.12.0 i te **keteroki tohuaki e mōhio ana ki te kaiwhakarato**, e arotau ana i ngā utu API me te tōmuri mā te keteroki i ngā tohuaki puta noa i ngā kaiwhakarato LLM rerekē. He rerekē ngā tikanga keteroki me ngā whirihoranga a ia kaiwhakarato.

## Tirohanga Whānui {#overview}

Mā te keteroki tohuaki ka taea e koe te:

- Keteroki i ngā tohuaki nui, e whakamahia auautia ana
- Whakaiti i ngā utu API mā te karo i te tukatuka tāruarua
- Whakapai ake i te tōmuri mō ngā tono kua keterokitia
- Whakahaere mārama i te huringa oranga keteroki

He rerekē te whakatinana a ngā kaiwhakarato rerekē i te keteroki:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Keteroki tohuaki me te TTL
- **OpenRouter**: Keteroki motuhake ki te kaiwhakarato
- **Vertex Anthropic**: Keteroki tohuaki me te mana keteroki

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Ka whakarato a Google Gemini i te whakahaere keteroki mārama mā te API `cachedContents`.

### Whirihoranga {#configuration}

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

### Waihanga i tētahi Tohuaki Kua Keterokitia {#creating-a-cached-prompt}

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

### Whakamahi i tētahi Tohuaki Kua Keterokitia {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Huringa Oranga Keteroki {#cache-lifecycle}

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

### Ngā Tikanga Pai mō Gemini {#best-practices-for-gemini}

- **Tautuhia te TTL tōtika**: Whakatauritea ngā penapena utu ki te tawhitotanga o te keteroki
- **Keterokitia ngā tohuaki pūnaha**: Whakamahia anō taua tohuaki pūnaha anō puta noa i ngā tono
- **Aroturukitia te whakamahinga keteroki**: Aroturukitia ko ēhea keteroki e tino whakamahia ana
- **Whakapai i ngā keteroki kua mōnehu**: Mukua ā-wā ngā keteroki kāore e whakamahia ana

## Azure OpenAI: Keteroki Tohuaki {#azure-openai-prompt-caching}

Ka tautoko a Azure OpenAI i te keteroki tohuaki me te whakahaere TTL aunoa.

### Whirihoranga {#configuration-1}

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

### Whakahohe i te Keteroki {#enabling-caching}

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

### Ngā Header Keteroki {#cache-headers}

Ka whakamahi a Azure OpenAI i ngā header HTTP mō te mana keteroki:

```
Cache-Control: max_age=3600
```

Ngā uara e tautokona ana:

- `max_age=<seconds>`: Keteroki mō te roanga kua tohua
- `no_cache`: Kaua e keteroki i tēnei tono
- `no_store`: Kaua e keteroki, kaua hoki e whakamahi anō

### Aroturuki i te Whakamahinga Keteroki {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Ngā Tikanga Pai mō Azure OpenAI {#best-practices-for-azure-openai}

- **Whakamahia ngā tohuaki ōrite**: Ka whai hua ngā tohuaki ōrite i te keteroki
- **Tautuhia he TTL whaitake**: Whakatauritea te utu ki te houtanga
- **Aroturukitia ngā ine keteroki**: Aroturukitia te waihanga keteroki ki ngā pānga
- **Whakarōpūtia ngā tono ōrite**: Whakarōpūtia ngā tono kia nui ake ai ngā pānga keteroki

## OpenRouter: Keteroki Motuhake ki te Kaiwhakarato {#openrouter-provider-specific-caching}

Ka tautoko a OpenRouter i te keteroki mā ngā kaiwhakarato o raro (OpenAI, Anthropic, me ētahi atu).

### Whirihoranga {#configuration-2}

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

### Whakamahi i te Keteroki OpenRouter {#using-openrouter-caching}

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

### Ngā Kōwhiringa Motuhake ki te Kaiwhakarato {#provider-specific-options}

He rerekē ngā tikanga keteroki a ngā kaiwhakarato rerekē:

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

### Ngā Tikanga Pai mō OpenRouter {#best-practices-for-openrouter}

- **Me mōhio ki te keteroki a tō kaiwhakarato**: He rerekē ngā tikanga a ia kaiwhakarato
- **Whakamātauria te whanonga keteroki**: Manatokohia e mahi ana te keteroki me tō kaiwhakarato kua kōwhiria
- **Aroturukitia ngā utu**: Aroturukitia ngā penapena mai i te keteroki
- **Whakamahia ngā tauira ōrite**: Ka whati ngā pānga keteroki ina whakawhiti tauira

## Vertex Anthropic: Keteroki Tohuaki me te Mana Keteroki {#vertex-anthropic-prompt-caching-with-cache-control}

Ka tautoko a Vertex Anthropic (Google Cloud) i te keteroki tohuaki me te mana keteroki mārama.

### Whirihoranga {#configuration-3}

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

### Te whakamahi i te keteroki Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Ngā momo whakahaere keteroki {#cache-control-types}

- **ephemeral**: Keteroki mō te roanga o te tono (taunoa)
- **persistent**: Keteroki puta noa i ngā tono maha (mēnā ka tautokona)

### Te aroturuki i te whakamahinga keteroki {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Ngā tikanga pai mō Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Whakamahia te keteroki ephemeral**: He pai mō te keteroki wāhanga kotahi
- **Tautuhia te max_tokens kia hāngai**: Whakatauritea te rahi keteroki ki te utu
- **Aroturukihia ngā inenga keteroki**: Aroturukihia te whaihua o te keteroki
- **Whakamātauria ki tō kawenga mahi**: Manatokohia ka whai hua te keteroki ki tō whakamahinga

## Rautaki keteroki whakawhiti-kaiwhakarato {#cross-provider-caching-strategy}

### Whirihoranga whakakotahi {#unified-configuration}

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

### Kitea te kaiwhakarato {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Rautaki hokinga kē {#fallback-strategy}

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

## Arotau utu {#cost-optimization}

### Tātaihia ngā penapena {#calculate-savings}

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

### Ngā tohutohu arotau {#optimization-tips}

- **Keteroki ngā tohutohu pūnaha nui**: Ngā penapena utu tino nui
- **Whakamahia anō te horopaki**: Keteroki i ngā tuhinga horopaki e whakamahia nuitia ana
- **Whakarōpū tono**: Whakarōpūhia ngā tono ōrite hei whakanui i ngā pānga keteroki
- **Aroturukihia te whaihua o te keteroki**: Aroturukihia ngā penapena tūturu
- **Whakarerekēhia te TTL**: Whakatauritea te utu ki te hou tonu

## Rapurongoā {#troubleshooting}

### Kāore te keteroki e whakamahia ana {#cache-not-being-used}

- Manatokohia kua whakahohea te keteroki i te whirihoranga
- Tirohia he ōrite ngā tohutohu (me tino ōrite kia taea ai te keteroki)
- Manatokohia kāore anō te keteroki kia pau
- Tirohia ngā rohe keteroki motuhake ki te kaiwhakarato

### Kāore te waihanga keteroki e angitū {#cache-creation-failing}

- Manatokohia kei roto te rahi keteroki i ngā rohe a te kaiwhakarato
- Tirohia he tika te wetereo whakahaere keteroki
- Me whakarite ka tautoko te kaiwhakarato i te keteroki mō tō tauira
- Arotakehia ngā tuhinga a te kaiwhakarato mō ngā here

### Ngā utu ohorere {#unexpected-costs}

- Aroturukihia te waihanga keteroki ki ngā token pānui keteroki
- Manatokohia kei te whakamahia tūturu te keteroki
- Tirohia mēnā he hapa keteroki nā ngā rerekētanga tohutohu
- Whakaarohia te whakarerekē i te TTL, i te rautaki keteroki rānei

## Whakataurite kaiwhakarato {#provider-comparison}

| Āhuatanga | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Motuhake ki te kaiwhakarato | Whakahaere keteroki |
| Whakahaere TTL | Mō roto i ngā headers | Mā ngā headers | E whakawhirinaki ana ki te kaiwhakarato | Ephemeral/persistent |
| Rahi keteroki mōrahi | 1M tokens | E whakawhirinaki ana ki te kaiwhakarato | E whakawhirinaki ana ki te kaiwhakarato | 1M tokens |
| Whakaitinga utu | 90% | 90% | E whakawhirinaki ana ki te kaiwhakarato | 90% |
| Aroturuki | Taipitopito | Mā ngā inenga | E whakawhirinaki ana ki te kaiwhakarato | Mā te whakamahinga |

## Ngā mahi ka whai ake {#next-steps}

1. **Kōwhiria tō kaiwhakarato**: Tīpakohia i runga i ō hiahia
2. **Whirihorahia te keteroki**: Whakaritea te keteroki motuhake ki te kaiwhakarato
3. **Whakamātauria te keteroki**: Manatokohia ka mahi ki ō tohutohu
4. **Aroturukihia te whakamahinga**: Aroturukihia ngā pānga keteroki me ngā penapena utu
5. **Arotau**: Whakarerekēhia te TTL me te rautaki keteroki i runga i ngā hua
