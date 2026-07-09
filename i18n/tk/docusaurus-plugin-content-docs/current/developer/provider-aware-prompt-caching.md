---
title: Üpjin edijini göz öňünde tutýan prompt keşlemesi
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-den habarly prompt keşleme

Superdav AI Agent v1.12.0 **provider-den habarly prompt keşlemegi** hödürleýär; ol dürli LLM provider-leriniň arasynda promptlary keşlemek arkaly API çykdajylaryny we gijikmäni optimallaşdyrýar. Her provider-iň keşleme mehanizmleri we konfigurasiýalary tapawutlanýar.

## Umumy syn

Prompt keşleme size şulary etmäge mümkinçilik berýär:

- Uly, ýygy-ýygydan ulanylýan promptlary keşlemek
- Gaýtalanýan işläp taýýarlamadan gaça durup, API çykdajylaryny azaltmak
- Keşlenen haýyşlar üçin gijikmäni gowulandyrmak
- Keş ýaşaýyş siklini anyk dolandyrmak

Dürli provider-ler keşlemegi dürli görnüşde amala aşyrýarlar:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL bilen prompt keşleme
- **OpenRouter**: Provider-e mahsus keşleme
- **Vertex Anthropic**: Keş dolandyryşy bilen prompt keşleme

## Google Gemini: cachedContents API

Google Gemini `cachedContents` API arkaly anyk keş dolandyryşyny üpjün edýär.

### Konfigurasiýa

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

### Keşlenen prompt döretmek

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

### Keşlenen prompty ulanmak

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Keş ýaşaýyş sikli

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

### Gemini üçin iň gowy tejribeler

- **Degişli TTL belläň**: Çykdajy tygşytlamasyny keş könelmegi bilen deňagramlaşdyryň
- **Ulgam promptlaryny keşläň**: Şol bir ulgam promptyny haýyşlaryň arasynda gaýtadan ulanyň
- **Keş ulanylyşyna gözegçilik ediň**: Haýsy keşleriň has köp ulanylýandygyny yzarlaň
- **Möhleti geçen keşleri arassalaň**: Ulanylmaýan keşleri wagtal-wagtal pozuň

## Azure OpenAI: Prompt keşleme

Azure OpenAI awtomatik TTL dolandyryşy bilen prompt keşlemegi goldaýar.

### Konfigurasiýa

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

### Keşlemegi işletmek

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

### Keş sözbaşylary

Azure OpenAI keş dolandyryşy üçin HTTP sözbaşylaryny ulanýar:

```
Cache-Control: max_age=3600
```

Goldanylýan bahalar:

- `max_age=<seconds>`: Görkezilen dowamlylyk üçin keşle
- `no_cache`: Bu haýyşy keşleme
- `no_store`: Keşleme we gaýtadan ulanma

### Keş ulanylyşyna gözegçilik etmek

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI üçin iň gowy tejribeler

- **Yzygiderli promptlary ulanyň**: Birmeňzeş promptlar keşlemekden peýda görýär
- **Oňaýly TTL belläň**: Çykdajyny täzelik bilen deňagramlaşdyryň
- **Keş ölçeglerine gözegçilik ediň**: Keş döredilmesini we gabat gelmeleri yzarlaň
- **Meňzeş haýyşlary toparlaň**: Keş gabat gelmelerini artdyrmak üçin haýyşlary toparlaň

## OpenRouter: Provider-e mahsus keşleme

OpenRouter esasy provider-ler (OpenAI, Anthropic we ş.m.) arkaly keşlemegi goldaýar.

### Konfigurasiýa

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

### OpenRouter keşlemegini ulanmak

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

### Provider-e mahsus opsiýalar

Dürli provider-leriň keşleme mehanizmleri tapawutlanýar:

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

### OpenRouter üçin iň gowy tejribeler

- **Provider-iňiziň keşlemegini biliň**: Her provider-iň mehanizmleri tapawutlanýar
- **Keşleme hereketini synap görüň**: Saýlan provider-iňiz bilen keşlemegiň işleýändigini barlaň
- **Çykdajylara gözegçilik ediň**: Keşlemekden gelýän tygşytlamalary yzarlaň
- **Yzygiderli modelleri ulanyň**: Modelleri çalyşmak keş gabat gelmelerini bozýar

## Vertex Anthropic: Keş dolandyryşy bilen prompt keşleme

Vertex Anthropic (Google Cloud) anyk keş dolandyryşy bilen prompt keşlemegi goldaýar.

### Konfigurasiýa

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

### Vertex Anthropic keşlemegi ulanmak

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

### Keş dolandyryş görnüşleri

- **ephemeral**: Soragyň dowamlylygy üçin keşle (deslapky)
- **persistent**: Birnäçe soragyň arasynda keşle (goldanýan bolsa)

### Keş ulanylyşyna gözegçilik etmek

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic üçin iň gowy tejribeler

- **Ephemeral keşlemegi ulanyň**: Bir sessiýaly keşlemek üçin amatly
- **max_tokens degişli edip sazlaň**: Keş ölçegi bilen çykdajynyň arasynda deňagramlylyk saklaň
- **Keş görkezijilerine gözegçilik ediň**: Keşiň netijeliligini yzarlaň
- **Iş ýüküňiz bilen synag ediň**: Keşlemegiň siziň ulanyş ýagdaýyňyza peýda berýändigini barlaň

## Üpjün edijiler arasyndaky keşlemek strategiýasy

### Bitewi konfigurasiýa

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

### Üpjün edijini anyklamak

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Ätiýaçlyk strategiýa

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

## Çykdajyny optimizirlemek

### Tygşytlamalary hasaplaň

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

### Optimizirleme maslahatlary

- **Uly ulgam promptlaryny keşläň**: Iň uly çykdajy tygşytlamasy
- **Konteksti gaýtadan ulanyň**: Ýygy-ýygydan ulanylýan kontekst resminamalaryny keşläň
- **Soraglary toparlaň**: Keş tapylmalaryny ýokarlandyrmak üçin meňzeş soraglary toparlaň
- **Keşiň netijeliligine gözegçilik ediň**: Hakyky tygşytlamalary yzarlaň
- **TTL sazlaň**: Çykdajy bilen täzeligiň arasynda deňagramlylyk saklaň

## Näsazlyklary düzetmek

### Keş ulanylmaýar

- Konfigurasiýada keşlemegiň açykdygyny barlaň
- Promptlaryň birmeňzeşdigini barlaň (keşlemek takyk gabat gelmegi talap edýär)
- Keşiň möhletiniň gutarmandygyny barlaň
- Üpjün edijä mahsus keş çäklerini barlaň

### Keş döretmek şowsuz bolýar

- Keş ölçeginiň üpjün ediji çäkleriniň içinde bolandygyny barlaň
- Keş dolandyryş sintaksisiniň dogrudygyny barlaň
- Üpjün edijiniň siziň modeliňiz üçin keşlemegi goldaýandygyna göz ýetiriň
- Çäklendirmeler üçin üpjün edijiniň resminamalaryny gözden geçiriň

### Garaşylmadyk çykdajylar

- Keş döretmek bilen keş okama tokenlerine gözegçilik ediň
- Keşiň hakykatdan hem ulanylýandygyny barlaň
- Prompt üýtgemeleri sebäpli keş sypdyrmalaryny barlaň
- TTL ýa-da keş strategiýasyny sazlamagy göz öňünde tutuň

## Üpjün edijileri deňeşdirmek

| Aýratynlyk | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Keş API | cachedContents | HTTP headers | Üpjün edijä mahsus | Keş dolandyryşy |
| TTL dolandyryşy | Açyk | Headers arkaly | Üpjün edijä bagly | Ephemeral/persistent |
| Iň uly keş ölçegi | 1M token | Üpjün edijä bagly | Üpjün edijä bagly | 1M token |
| Çykdajy azalmagy | 90% | 90% | Üpjün edijä bagly | 90% |
| Gözegçilik | Jikme-jik | Metrikalar arkaly | Üpjün edijä bagly | Ulanylyş arkaly |

## Indiki ädimler

1. **Üpjün edijiňizi saýlaň**: Zerurlyklaryňyza görä saýlaň
2. **Keşlemegi konfigurirläň**: Üpjün edijä mahsus keşlemegi sazlaň
3. **Keşlemegi synag ediň**: Onuň promptlaryňyz bilen işleýändigini barlaň
4. **Ulanylyşa gözegçilik ediň**: Keş tapylmalaryny we çykdajy tygşytlamalaryny yzarlaň
5. **Optimizirläň**: Netijelere görä TTL we keş strategiýasyny sazlaň
