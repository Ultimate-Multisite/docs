---
title: Ukugcinwa kweePrompt kwikheshi okuQondayo uMboneleli
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Ukugcinwa kwee-Prompt kwi-Cache okuQaphela uMboneleli

Superdav AI Agent v1.12.0 yazisa **ukugcinwa kwee-prompt kwi-cache okuqaphela umboneleli**, okulungiselela iindleko ze-API kunye nokulibaziseka ngokugcina ii-prompt kwi-cache kubaboneleli be-LLM abohlukeneyo. Umboneleli ngamnye uneendlela kunye noqwalaselo lokugcina kwi-cache olwahlukileyo.

## Isishwankathelo

Ukugcinwa kwee-prompt kwi-cache kukuvumela ukuba:

- Ugcine ii-prompt ezinkulu, ezisetyenziswa rhoqo kwi-cache
- Unciphise iindleko ze-API ngokuphepha ukuqhubekekisa okuphindaphindwayo
- Uphucule ukulibaziseka kwizicelo ezigcinwe kwi-cache
- Ulawule umjikelo wobomi be-cache ngokucacileyo

Ababoneleli abohlukeneyo baphumeza ukugcinwa kwi-cache ngeendlela ezohlukeneyo:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Ukugcinwa kwee-prompt kwi-cache nge-TTL
- **OpenRouter**: Ukugcinwa kwi-cache okukhethekileyo kumboneleli
- **Vertex Anthropic**: Ukugcinwa kwee-prompt kwi-cache ngolawulo lwe-cache

## Google Gemini: cachedContents API

Google Gemini ibonelela ngolawulo lwe-cache olucacileyo nge-`cachedContents` API.

### Uqwalaselo

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

### Ukwenza i-Prompt eGcinwe kwi-Cache

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

### Ukusebenzisa i-Prompt eGcinwe kwi-Cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Umjikelo woBomi be-Cache

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

### Iindlela eziNgcono ze-Gemini

- **Seta i-TTL efanelekileyo**: Linganisa ukonga iindleko xa kuthelekiswa nokuphelelwa lixesha kwe-cache
- **Gcina ii-prompt zesistim kwi-cache**: Phinda usebenzise i-prompt yesistim efanayo kuzo zonke izicelo
- **Beka esweni ukusetyenziswa kwe-cache**: Landela ukuba zeziphi ii-cache ezisetyenziswa kakhulu
- **Coca ii-cache eziphelelwe lixesha**: Cima ngamaxesha athile ii-cache ezingasetyenziswanga

## Azure OpenAI: Ukugcinwa kwee-Prompt kwi-Cache

Azure OpenAI ixhasa ukugcinwa kwee-prompt kwi-cache ngolawulo lwe-TTL oluzenzekelayo.

### Uqwalaselo

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

### Ukuvula Ukugcinwa kwi-Cache

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

### Izihloko ze-Cache

Azure OpenAI isebenzisa izihloko ze-HTTP kulawulo lwe-cache:

```
Cache-Control: max_age=3600
```

Amaxabiso axhaswayo:

- `max_age=<seconds>`: Gcina kwi-cache ixesha elichaziweyo
- `no_cache`: Ungasigcini esi sicelo kwi-cache
- `no_store`: Ungasigcini kwi-cache kwaye ungaphindi usisebenzise

### Ukubeka esweni Ukusetyenziswa kwe-Cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Iindlela eziNgcono ze-Azure OpenAI

- **Sebenzisa ii-prompt ezingaguquguqukiyo**: Ii-prompt ezifanayo ziyazuza ekugcinweni kwi-cache
- **Seta i-TTL esengqiqweni**: Linganisa iindleko xa zithelekiswa nokutsha
- **Beka esweni iimetriki ze-cache**: Landela ukwenziwa kwe-cache xa kuthelekiswa nokufunyanwa kwi-cache
- **Qokelela izicelo ezifanayo**: Dibanisa izicelo ukwandisa ukufunyanwa kwi-cache

## OpenRouter: Ukugcinwa kwi-Cache okuKhethekileyo kuMboneleli

OpenRouter ixhasa ukugcinwa kwi-cache ngababoneleli abangaphantsi (OpenAI, Anthropic, njalo njalo).

### Uqwalaselo

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

### Ukusebenzisa Ukugcinwa kwi-Cache kwe-OpenRouter

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

### Iinketho eziKhethekileyo kuMboneleli

Ababoneleli abohlukeneyo baneendlela ezohlukeneyo zokugcina kwi-cache:

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

### Iindlela eziNgcono ze-OpenRouter

- **Yazi ukugcinwa kwi-cache komboneleli wakho**: Umboneleli ngamnye uneendlela ezohlukeneyo
- **Vavanya ukuziphatha kokugcinwa kwi-cache**: Qinisekisa ukuba ukugcinwa kwi-cache kusebenza nomboneleli omkhethileyo
- **Beka esweni iindleko**: Landela ukonga okuvela ekugcinweni kwi-cache
- **Sebenzisa iimodeli ezingaguquguqukiyo**: Ukutshintsha iimodeli kuqhawula ukufunyanwa kwi-cache

## Vertex Anthropic: Ukugcinwa kwee-Prompt kwi-Cache ngoLawulo lwe-Cache

Vertex Anthropic (Google Cloud) ixhasa ukugcinwa kwee-prompt kwi-cache ngolawulo lwe-cache olucacileyo.

### Uqwalaselo

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

### Ukusebenzisa Ukugcinwa kwi-Cache kwe-Vertex Anthropic

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

### Iintlobo zoLawulo lwe-Cache

- **ephemeral**: Gcina kwi-cache ngexesha lesicelo (okungagqibekanga)
- **persistent**: Gcina kwi-cache kuzo zonke izicelo ezininzi (ukuba kuyaxhaswa)

### Ukubeka esweni Ukusetyenziswa kwe-Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Iindlela eziNgcono ze-Vertex Anthropic

- **Sebenzisa ukugcinwa kwi-cache okwethutyana**: Kulungile ukugcinwa kwi-cache kweseshoni enye
- **Seta i-max_tokens ngokufanelekileyo**: Linganisa ubungakanani be-cache xa kuthelekiswa neendleko
- **Beka esweni iimetriki ze-cache**: Landela ukusebenza kwe-cache
- **Vavanya ngomthwalo wakho womsebenzi**: Qinisekisa ukuba ukugcinwa kwi-cache kuyanceda imeko yakho yokusetyenziswa

## Icebo lokuGcina kwi-Cache eliNqumla Ababoneleli

### Uqwalaselo oluManyeneyo

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

### Ukuchongwa koMboneleli

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Icebo lokuBuyela Umva

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

## Ukulungiselela Iindleko

### Bala uKonga

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

### Iingcebiso zokuLungiselela

- **Gcina ii-prompt zesistim ezinkulu kwi-cache**: Olona konga lweendleko lukhulu
- **Phinda usebenzise umxholo**: Gcina kwi-cache amaxwebhu omxholo asetyenziswa rhoqo
- **Qokelela izicelo**: Dibanisa izicelo ezifanayo ukwandisa ukufunyanwa kwi-cache
- **Beka esweni ukusebenza kwe-cache**: Landela ukonga kwangempela
- **Lungisa i-TTL**: Linganisa iindleko xa zithelekiswa nokutsha

## Ukusombulula Iingxaki

### I-cache ayisetyenziswa

- Qinisekisa ukuba ukugcinwa kwi-cache kuvuliwe kuqwalaselo
- Jonga ukuba ii-prompt ziyafana (ukugcinwa kwi-cache kufuna ukuhambelana okuchanekileyo)
- Qinisekisa ukuba i-cache ayikaphelelwa lixesha
- Jonga imida ye-cache ekhethekileyo kumboneleli

### Ukwenziwa kwe-cache kuyasilela

- Qinisekisa ukuba ubungakanani be-cache bungaphakathi kwemida yomboneleli
- Jonga ukuba isintaksi solawulo lwe-cache sichanekile
- Qinisekisa ukuba umboneleli uxhasa ukugcinwa kwi-cache kwimodeli yakho
- Phonononga uxwebhu lomboneleli malunga nemida

### Iindleko ezingalindelekanga

- Beka esweni ukwenziwa kwe-cache xa kuthelekiswa neetokeni zokufunda kwi-cache
- Qinisekisa ukuba i-cache iyasetyenziswa ngokwenene
- Jonga ukuphoswa kwe-cache ngenxa yokwahluka kwee-prompt
- Cinga ngokulungisa i-TTL okanye icebo le-cache

## Uthelekiso lwaBaboneleli

| Uphawu | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | Izihloko ze-HTTP | Okukhethekileyo kumboneleli | Ulawulo lwe-cache |
| Ulawulo lwe-TTL | Olucacileyo | Ngezihloko | Kuxhomekeke kumboneleli | Okwethutyana/okuqhubekayo |
| Obona bungakanani bukhulu be-cache | Iitokeni eziyi-1M | Kuxhomekeke kumboneleli | Kuxhomekeke kumboneleli | Iitokeni eziyi-1M |
| Ukuncitshiswa kweendleko | 90% | 90% | Kuxhomekeke kumboneleli | 90% |
| Ukubeka esweni | Okuneenkcukacha | Ngeemetriki | Kuxhomekeke kumboneleli | Ngokusetyenziswa |

## Amanyathelo aLandelayo

1. **Khetha umboneleli wakho**: Khetha ngokusekelwe kwiimfuno zakho
2. **Qwalasela ukugcinwa kwi-cache**: Misela ukugcinwa kwi-cache okukhethekileyo kumboneleli
3. **Vavanya ukugcinwa kwi-cache**: Qinisekisa ukuba kusebenza nee-prompt zakho
4. **Beka esweni ukusetyenziswa**: Landela ukufunyanwa kwi-cache kunye nokonga iindleko
5. **Lungiselela**: Lungisa i-TTL kunye necebo le-cache ngokusekelwe kwiziphumo
