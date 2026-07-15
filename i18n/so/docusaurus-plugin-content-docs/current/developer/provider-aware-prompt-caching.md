---
title: Kaydinta Prompt-ka ee Ka Warqabta Bixiyaha
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Kaydinta Prompt-ka ee Ka Warqabta Provider-ka

Superdav AI Agent v1.12.0 wuxuu soo bandhigayaa **kaydinta prompt-ka ee ka warqabta provider-ka**, taas oo hagaajisa kharashaadka API iyo daahitaanka iyadoo prompts lagu kaydiyo LLM providers kala duwan. Provider kasta wuxuu leeyahay habab kaydin iyo dejinno kala duwan.

## Dulmar {#overview}

Kaydinta prompt-ku waxay kuu oggolaanaysaa inaad:

- Kaydiso prompts waaweyn oo si joogto ah loo isticmaalo
- Yareyso kharashaadka API adigoo ka fogaanaya habayn soo noqnoqota
- Hagaajiso daahitaanka codsiyada kaydsan
- Si cad u maamusho wareegga nolosha kaydka

Providers kala duwan si kala duwan ayay u hirgeliyaan kaydinta:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Kaydinta prompt-ka oo leh TTL
- **OpenRouter**: Kaydin u gaar ah provider-ka
- **Vertex Anthropic**: Kaydinta prompt-ka oo leh xakamaynta kaydka

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini wuxuu bixiyaa maareyn kayd oo cad iyadoo loo marayo `cachedContents` API.

### Dejinta {#configuration}

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

### Abuuridda Prompt Kaydsan {#creating-a-cached-prompt}

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

### Isticmaalka Prompt Kaydsan {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Wareegga Nolosha Kaydka {#cache-lifecycle}

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

### Hab-dhaqannada Ugu Fiican ee Gemini {#best-practices-for-gemini}

- **Deji TTL ku habboon**: Isku dheellitir kaydinta kharashka iyo duugowga kaydka
- **Kaydi system prompts**: Dib u isticmaal isla system prompt-ka codsiyada oo dhan
- **La soco isticmaalka kaydka**: Raadraac kaydadka ugu isticmaalka badan
- **Nadiifi kaydadka dhacay**: Si xilliyeed u tirtir kaydadka aan la isticmaalin

## Azure OpenAI: Kaydinta Prompt-ka {#azure-openai-prompt-caching}

Azure OpenAI wuxuu taageeraa kaydinta prompt-ka oo leh maareyn TTL oo otomaatig ah.

### Dejinta {#configuration-1}

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

### Daaridda Kaydinta {#enabling-caching}

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

### Headers-ka Kaydka {#cache-headers}

Azure OpenAI wuxuu u adeegsadaa HTTP headers xakamaynta kaydka:

```
Cache-Control: max_age=3600
```

Qiimayaasha la taageero:

- `max_age=<seconds>`: Kaydi muddada la cayimay
- `no_cache`: Ha kaydin codsigan
- `no_store`: Ha kaydin hana dib u isticmaalin

### La Socodka Isticmaalka Kaydka {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Hab-dhaqannada Ugu Fiican ee Azure OpenAI {#best-practices-for-azure-openai}

- **Isticmaal prompts isku mid ah**: Prompts isku eg waxay ka faa’iidaystaan kaydinta
- **Deji TTL macquul ah**: Isku dheellitir kharashka iyo cusaybka
- **La soco cabbirrada kaydka**: Raadraac abuurista kaydka iyo hits-ka
- **Isku ururi codsiyada la midka ah**: Kooxee codsiyada si loo kordhiyo cache hits

## OpenRouter: Kaydin U Gaar ah Provider-ka {#openrouter-provider-specific-caching}

OpenRouter wuxuu taageeraa kaydinta iyadoo loo marayo providers hoose (OpenAI, Anthropic, iwm.).

### Dejinta {#configuration-2}

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

### Isticmaalka Kaydinta OpenRouter {#using-openrouter-caching}

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

### Ikhtiyaarrada U Gaar ah Provider-ka {#provider-specific-options}

Providers kala duwan waxay leeyihiin habab kaydin oo kala duwan:

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

### Hab-dhaqannada Ugu Fiican ee OpenRouter {#best-practices-for-openrouter}

- **Ogow kaydinta provider-kaaga**: Provider kasta wuxuu leeyahay habab kala duwan
- **Tijaabi hab-dhaqanka kaydinta**: Xaqiiji in kaydintu la shaqayso provider-ka aad dooratay
- **La soco kharashaadka**: Raadraac kaydka ka yimaada kaydinta
- **Isticmaal models isku mid ah**: Bedelidda models waxay jebisaa cache hits

## Vertex Anthropic: Kaydinta Prompt-ka oo leh Xakamaynta Kaydka {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) wuxuu taageeraa kaydinta prompt-ka oo leh xakamayn kayd oo cad.

### Dejinta {#configuration-3}

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

### Isticmaalka Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### Noocyada Cache Control {#cache-control-types}

- **ephemeral**: Cache muddada codsiga (caadiga)
- **persistent**: Cache codsiyo badan dhexdiis (haddii la taageero)

### La-socodka Isticmaalka Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Hab-dhaqannada Ugu Fiican ee Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Isticmaal ephemeral caching**: Ku fiican caching hal-fadhi ah
- **U deji max_tokens si habboon**: Isku dheelli tir cabbirka cache iyo kharashka
- **La soco cabbirrada cache**: Raad-raac waxtarka cache
- **Ku tijaabi culayskaaga shaqo**: Xaqiiji in caching uu faa'iido u leeyahay xaaladdaada isticmaal

## Istaraatiijiyadda Caching ee Bixiyeyaasha Kala Duwan {#cross-provider-caching-strategy}

### Habayn Midaysan {#unified-configuration}

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

### Ogaanshaha Bixiyaha {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Istaraatiijiyadda Fallback {#fallback-strategy}

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

## Hagaajinta Kharashka {#cost-optimization}

### Xisaabi Kaydka {#calculate-savings}

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

### Talooyin Hagaajin {#optimization-tips}

- **Cache system prompts waaweyn**: Kaydka kharashka ugu weyn
- **Dib u isticmaal context**: Cache dukumiintiyada context ee si joogto ah loo isticmaalo
- **Isku ururi codsiyada**: Kooxee codsiyada isku midka ah si loo kordhiyo cache hits
- **La soco waxtarka cache**: Raad-raac kaydka dhabta ah
- **Hagaaji TTL**: Isku dheelli tir kharashka iyo cusaybka

## Xallinta Dhibaatooyinka {#troubleshooting}

### Cache lama isticmaalayo {#cache-not-being-used}

- Xaqiiji in caching lagu daaray habaynta
- Hubi in prompts-ku isku mid yihiin (caching wuxuu u baahan yahay is-waafajin sax ah)
- Xaqiiji in cache uusan dhicin
- Hubi xaddidaadaha cache ee u gaarka ah bixiyaha

### Abuurista cache way fashilantay {#cache-creation-failing}

- Xaqiiji in cabbirka cache uu ku jiro xaddidaadaha bixiyaha
- Hubi in syntax-ka cache control uu sax yahay
- Hubi in bixiyuhu taageero caching ee model-kaaga
- Dib u eeg dukumiintiyada bixiyaha ee xaddidaadaha

### Kharashyo aan la filayn {#unexpected-costs}

- La soco abuurista cache marka loo eego cache read tokens
- Xaqiiji in cache dhab ahaantii la isticmaalayo
- Hubi cache misses ay sababaan kala duwanaanshaha prompt
- Tixgeli hagaajinta TTL ama istaraatiijiyadda cache

## Isbarbardhigga Bixiyeyaasha {#provider-comparison}

| Astaanta | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | U gaar ah bixiyaha | Cache control |
| Xakamaynta TTL | Cad | Iyadoo loo marayo headers | Ku xiran bixiyaha | Ephemeral/persistent |
| Cabbirka ugu badan ee cache | 1M tokens | Ku xiran bixiyaha | Ku xiran bixiyaha | 1M tokens |
| Dhimista kharashka | 90% | 90% | Ku xiran bixiyaha | 90% |
| La-socodka | Faahfaahsan | Iyadoo loo marayo metrics | Ku xiran bixiyaha | Iyadoo loo marayo usage |

## Tallaabooyinka Xiga {#next-steps}

1. **Dooro bixiyahaaga**: Ku dooro iyadoo lagu salaynayo baahiyahaaga
2. **Habeey caching**: Diyaari caching u gaar ah bixiyaha
3. **Tijaabi caching**: Xaqiiji inuu la shaqeeyo prompts-kaaga
4. **La soco isticmaalka**: Raad-raac cache hits iyo kaydka kharashka
5. **Hagaaji**: Hagaaji TTL iyo istaraatiijiyadda cache iyadoo lagu salaynayo natiijooyinka
