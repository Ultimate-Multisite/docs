---
title: Ukugcinwa kunqolobane kwama-prompt okuqaphela umhlinzeki
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Ukugcinwa Kunqolobane Kwemiyalezo Okuqaphela Umhlinzeki

Superdav AI Agent v1.12.0 yethula **ukugcinwa kunqolobane kwemiyalezo okuqaphela umhlinzeki**, okuthuthukisa izindleko ze-API nokulibaziseka ngokugcina imiyalezo kunqolobane kubahlinzeki be-LLM abahlukene. Umhlinzeki ngamunye unezindlela zokugcina kunqolobane nezilungiselelo ezahlukene.

## Ukubuka konke {#overview}

Ukugcinwa kwemiyalezo kunqolobane kukuvumela ukuthi:

- Ugcine kunqolobane imiyalezo emikhulu, esetshenziswa njalo
- Wehlise izindleko ze-API ngokugwema ukucubungula okuphindaphindiwe
- Uthuthukise ukulibaziseka kwezicelo ezigcinwe kunqolobane
- Uphathe umjikelezo wokuphila wenqolobane ngokucacile

Abahlinzeki abahlukene basebenzisa ukugcinwa kunqolobane ngezindlela ezahlukene:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Ukugcinwa kwemiyalezo kunqolobane nge-TTL
- **OpenRouter**: Ukugcinwa kunqolobane okuqondene nomhlinzeki
- **Vertex Anthropic**: Ukugcinwa kwemiyalezo kunqolobane ngokulawulwa kwenqolobane

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini inikeza ukuphathwa kwenqolobane okucacile nge-`cachedContents` API.

### Ukulungiselela {#configuration}

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

### Ukudala Umyalezo Ogcinwe Kunqolobane {#creating-a-cached-prompt}

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

### Ukusebenzisa Umyalezo Ogcinwe Kunqolobane {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Umjikelezo Wokuphila Wenqolobane {#cache-lifecycle}

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

### Izindlela Ezingcono Kakhulu ze-Gemini {#best-practices-for-gemini}

- **Setha i-TTL efanele**: Linganisa ukonga izindleko nokuphelelwa yisikhathi kokuqukethwe kwenqolobane
- **Gcina imiyalezo yesistimu kunqolobane**: Phinda usebenzise umyalezo wesistimu ofanayo kuzo zonke izicelo
- **Qapha ukusetshenziswa kwenqolobane**: Landela ukuthi yiziphi izinqolobane ezisetshenziswa kakhulu
- **Susa izinqolobane eziphelelwe yisikhathi**: Susa ngezikhathi ezithile izinqolobane ezingasetshenziswa

## Azure OpenAI: Ukugcinwa Kwemiyalezo Kunqolobane {#azure-openai-prompt-caching}

Azure OpenAI isekela ukugcinwa kwemiyalezo kunqolobane ngokuphathwa kwe-TTL okuzenzakalelayo.

### Ukulungiselela {#configuration-1}

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

### Ukuvumela Ukugcinwa Kunqolobane {#enabling-caching}

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

### Izihloko Zenqolobane {#cache-headers}

Azure OpenAI isebenzisa izihloko ze-HTTP ukulawula inqolobane:

```
Cache-Control: max_age=3600
```

Amanani asekelwayo:

- `max_age=<seconds>`: Gcina kunqolobane isikhathi esicacisiwe
- `no_cache`: Ungasigcini kunqolobane lesi sicelo
- `no_store`: Ungasigcini kunqolobane futhi ungasisebenzisi kabusha

### Ukuqapha Ukusetshenziswa Kwenqolobane {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Izindlela Ezingcono Kakhulu ze-Azure OpenAI {#best-practices-for-azure-openai}

- **Sebenzisa imiyalezo engaguquguquki**: Imiyalezo efanayo iyazuza ekugcinweni kunqolobane
- **Setha i-TTL enengqondo**: Linganisa izindleko nokusha kokuqukethwe
- **Qapha izilinganiso zenqolobane**: Landela ukudalwa kwenqolobane uma kuqhathaniswa nokutholakala kuyo
- **Hlanganisa izicelo ezifanayo**: Hlanganisa izicelo ukuze wandise ukutholakala kunqolobane

## OpenRouter: Ukugcinwa Kunqolobane Okuqondene Nomhlinzeki {#openrouter-provider-specific-caching}

OpenRouter isekela ukugcinwa kunqolobane ngabahlinzeki abangaphansi (OpenAI, Anthropic, njll.).

### Ukulungiselela {#configuration-2}

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

### Ukusebenzisa Ukugcinwa Kunqolobane kwe-OpenRouter {#using-openrouter-caching}

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

### Izinketho Eziqondene Nomhlinzeki {#provider-specific-options}

Abahlinzeki abahlukene banezindlela ezahlukene zokugcina kunqolobane:

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

### Izindlela Ezingcono Kakhulu ze-OpenRouter {#best-practices-for-openrouter}

- **Yazi ukugcinwa kunqolobane komhlinzeki wakho**: Umhlinzeki ngamunye unezindlela ezahlukene
- **Hlola ukuziphatha kokugcinwa kunqolobane**: Qinisekisa ukuthi ukugcinwa kunqolobane kuyasebenza nomhlinzeki omkhethile
- **Qapha izindleko**: Landela ukonga okuvela ekugcinweni kunqolobane
- **Sebenzisa amamodeli angaguquguquki**: Ukushintsha amamodeli kuphazamisa ukutholakala kunqolobane

## Vertex Anthropic: Ukugcinwa Kwemiyalezo Kunqolobane Ngokulawulwa Kwenqolobane {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) isekela ukugcinwa kwemiyalezo kunqolobane ngokulawulwa kwenqolobane okucacile.

### Ukulungiselela {#configuration-3}

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

### Ukusebenzisa Ukugcinwa Kunqolobane kwe-Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Izinhlobo Zokulawula Inqolobane {#cache-control-types}

- **ephemeral**: Gcina kunqolobane isikhathi sesicelo (okuzenzakalelayo)
- **persistent**: Gcina kunqolobane kuzo zonke izicelo eziningi (uma kusekelwa)

### Ukuqapha Ukusetshenziswa Kwenqolobane {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Izindlela Ezingcono Kakhulu ze-Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Sebenzisa ukugcinwa kunqolobane kwe-ephemeral**: Kuhle ekugcinweni kunqolobane kweseshini eyodwa
- **Setha i- max_tokens ngokufanele**: Linganisa usayizi wenqolobane nezindleko
- **Qapha izilinganiso zenqolobane**: Landela ukusebenza kahle kwenqolobane
- **Hlola ngomthwalo wakho womsebenzi**: Qinisekisa ukuthi ukugcinwa kunqolobane kuyalisiza icala lakho lokusebenzisa

## Isu Lokugcinwa Kunqolobane Kubahlinzeki Abahlukene {#cross-provider-caching-strategy}

### Ukulungiselela Okuhlanganisiwe {#unified-configuration}

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

### Ukutholwa Komhlinzeki {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Isu Lokubuyela Emuva {#fallback-strategy}

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

## Ukuthuthukisa Izindleko {#cost-optimization}

### Bala Ukonga {#calculate-savings}

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

### Amathiphu Okuthuthukisa {#optimization-tips}

- **Gcina imiyalezo emikhulu yesistimu kunqolobane**: Ukonga izindleko okukhulu kakhulu
- **Phinda usebenzise umongo**: Gcina kunqolobane amadokhumenti omongo asetshenziswa njalo
- **Hlanganisa izicelo**: Hlanganisa izicelo ezifanayo ukuze wandise ukutholakala kunqolobane
- **Qapha ukusebenza kahle kwenqolobane**: Landela ukonga kwangempela
- **Lungisa i-TTL**: Linganisa izindleko nokusha kokuqukethwe

## Ukuxazulula Izinkinga {#troubleshooting}

### Inqolobane ayisetshenziswa {#cache-not-being-used}

- Qinisekisa ukuthi ukugcinwa kunqolobane kuvunyelwe ekulungiselelweni
- Hlola ukuthi imiyalezo iyafana (ukugcinwa kunqolobane kudinga ukufana okuqondile)
- Qinisekisa ukuthi inqolobane ayikaphelelwa yisikhathi
- Hlola imikhawulo yenqolobane eqondene nomhlinzeki

### Ukudala inqolobane kuyahluleka {#cache-creation-failing}

- Qinisekisa ukuthi usayizi wenqolobane ungaphakathi kwemikhawulo yomhlinzeki
- Hlola ukuthi isintaksi sokulawula inqolobane silungile
- Qinisekisa ukuthi umhlinzeki usekela ukugcinwa kunqolobane kwemodeli yakho
- Buyekeza amadokhumenti omhlinzeki ukuze uthole imikhawulo

### Izindleko ezingalindelekile {#unexpected-costs}

- Qapha ukudalwa kwenqolobane uma kuqhathaniswa namathokheni okufunda inqolobane
- Qinisekisa ukuthi inqolobane isetshenziswa ngempela
- Hlola ukuphuthelwa yinqqolobane ngenxa yokuhlukahluka kwemiyalezo
- Cabanga ukulungisa i-TTL noma isu lenqolobane

## Ukuqhathanisa Abahlinzeki {#provider-comparison}

| Isici | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API yenqolobane | cachedContents | Izihloko ze-HTTP | Okuqondene nomhlinzeki | Ukulawula inqolobane |
| Ukulawula i-TTL | Okucacile | Ngezihloko | Kuncike kumhlinzeki | Ephemeral/persistent |
| Usayizi omkhulu wenqolobane | 1M tokens | Kuncike kumhlinzeki | Kuncike kumhlinzeki | 1M tokens |
| Ukwehliswa kwezindleko | 90% | 90% | Kuncike kumhlinzeki | 90% |
| Ukuqapha | Okuningiliziwe | Ngezilinganiso | Kuncike kumhlinzeki | Ngokusetshenziswa |

## Izinyathelo Ezilandelayo {#next-steps}

1. **Khetha umhlinzeki wakho**: Khetha ngokusekelwe ezidingweni zakho
2. **Lungiselela ukugcinwa kunqolobane**: Setha ukugcinwa kunqolobane okuqondene nomhlinzeki
3. **Hlola ukugcinwa kunqolobane**: Qinisekisa ukuthi kusebenza ngemiyalezo yakho
4. **Qapha ukusetshenziswa**: Landela ukutholakala kunqolobane nokonga izindleko
5. **Thuthukisa**: Lungisa i-TTL nesu lenqolobane ngokusekelwe emiphumeleni
