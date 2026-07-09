---
title: Ħażna fil-cache tal-Prompt Konxja mill-Fornitur
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caching ta' prompts konxju tal-fornitur

Superdav AI Agent v1.12.0 jintroduċi **caching ta' prompts konxju tal-fornitur**, li jottimizza l-ispejjeż tal-API u l-latenza billi jaħżen prompts fil-cache bejn fornituri LLM differenti. Kull fornitur għandu mekkaniżmi u konfigurazzjonijiet differenti ta' caching.

## Ħarsa ġenerali

Il-caching ta' prompts jippermettilek:

- Taħżen fil-cache prompts kbar u użati ta' spiss
- Tnaqqas l-ispejjeż tal-API billi tevita pproċessar żejjed
- Ittejjeb il-latenza għal talbiet fil-cache
- Timmaniġġja ċ-ċiklu tal-ħajja tal-cache b'mod espliċitu

Fornituri differenti jimplimentaw il-caching b'modi differenti:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Caching ta' prompts b'TTL
- **OpenRouter**: Caching speċifiku għall-fornitur
- **Vertex Anthropic**: Caching ta' prompts b'kontroll tal-cache

## Google Gemini: cachedContents API

Google Gemini jipprovdi ġestjoni espliċita tal-cache permezz tal-API `cachedContents`.

### Konfigurazzjoni

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

### Ħolqien ta' prompt fil-cache

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

### Użu ta' prompt fil-cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ċiklu tal-ħajja tal-cache

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

### L-aħjar prattiki għal Gemini

- **Issettja TTL xieraq**: Ibbilanċja l-iffrankar fl-ispejjeż kontra l-qedem tal-cache
- **Aħżen fil-cache prompts tas-sistema**: Erġa' uża l-istess prompt tas-sistema bejn it-talbiet
- **Immonitorja l-użu tal-cache**: Segwi liema caches jintużaw l-aktar
- **Naddaf caches skaduti**: Ħassar perjodikament caches mhux użati

## Azure OpenAI: Caching ta' prompts

Azure OpenAI jappoġġja caching ta' prompts b'ġestjoni awtomatika tat-TTL.

### Konfigurazzjoni

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

### Attivazzjoni tal-caching

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

### Headers tal-cache

Azure OpenAI juża headers HTTP għall-kontroll tal-cache:

```
Cache-Control: max_age=3600
```

Valuri appoġġjati:

- `max_age=<seconds>`: Aħżen fil-cache għat-tul ta' żmien speċifikat
- `no_cache`: Taħżinx din it-talba fil-cache
- `no_store`: Taħżinx fil-cache u terġax tuża

### Monitoraġġ tal-użu tal-cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### L-aħjar prattiki għal Azure OpenAI

- **Uża prompts konsistenti**: Prompts identiċi jibbenefikaw mill-caching
- **Issettja TTL raġonevoli**: Ibbilanċja l-ispiża kontra l-freskezza
- **Immonitorja l-metriċi tal-cache**: Segwi l-ħolqien tal-cache kontra l-hits
- **Agħmel batch ta' talbiet simili**: Gruppja t-talbiet biex timmassimizza l-hits tal-cache

## OpenRouter: Caching speċifiku għall-fornitur

OpenRouter jappoġġja caching permezz ta' fornituri sottostanti (OpenAI, Anthropic, eċċ.).

### Konfigurazzjoni

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

### Użu tal-caching ta' OpenRouter

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

### Għażliet speċifiċi għall-fornitur

Fornituri differenti għandhom mekkaniżmi differenti ta' caching:

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

### L-aħjar prattiki għal OpenRouter

- **Kun af il-caching tal-fornitur tiegħek**: Kull fornitur għandu mekkaniżmi differenti
- **Ittestja l-imġiba tal-caching**: Ivverifika li l-caching jaħdem mal-fornitur magħżul tiegħek
- **Immonitorja l-ispejjeż**: Segwi l-iffrankar mill-caching
- **Uża mudelli konsistenti**: Il-bdil tal-mudelli jkisser il-hits tal-cache

## Vertex Anthropic: Caching ta' prompts b'kontroll tal-cache

Vertex Anthropic (Google Cloud) jappoġġja caching ta' prompts b'kontroll espliċitu tal-cache.

### Konfigurazzjoni

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

### Użu ta' Vertex Anthropic Caching

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

### Tipi ta' Kontroll tal-Cache

- **ephemeral**: Cache għat-tul tat-talba (default)
- **persistent**: Cache fuq diversi talbiet (jekk appoġġjat)

### Monitoraġġ tal-Użu tal-Cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### L-Aħjar Prattiki għal Vertex Anthropic

- **Uża caching ephemeral**: Tajjeb għal caching ta' sessjoni waħda
- **Issettja max_tokens b'mod xieraq**: Ibbilanċja d-daqs tal-cache kontra l-ispiża
- **Immonitorja l-metriċi tal-cache**: Segwi l-effettività tal-cache
- **Ittestja bit-tagħbija tax-xogħol tiegħek**: Ivverifika li l-caching jibbenefika l-każ ta' użu tiegħek

## Strateġija ta' Caching bejn il-Providers

### Konfigurazzjoni Unifikata

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

### Sejbien tal-Provider

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Strateġija ta' Riżerva

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

## Ottimizzazzjoni tal-Ispejjeż

### Ikkalkula t-Tfaddil

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

### Suġġerimenti għall-Ottimizzazzjoni

- **Aħżen fil-cache prompts kbar tas-sistema**: L-akbar tfaddil fl-ispejjeż
- **Erġa' uża l-kuntest**: Aħżen fil-cache dokumenti ta' kuntest użati ta' spiss
- **Talbiet f'lottijiet**: Għaqqad talbiet simili biex timmassimizza l-cache hits
- **Immonitorja l-effettività tal-cache**: Segwi t-tfaddil reali
- **Aġġusta t-TTL**: Ibbilanċja l-ispiża kontra l-freskezza

## Soluzzjoni tal-Problemi

### Il-cache mhux qed jintuża

- Ivverifika li l-caching huwa attivat fil-konfigurazzjoni
- Iċċekkja li l-prompts huma identiċi (il-caching jeħtieġ qbil eżatt)
- Ivverifika li l-cache ma skadiex
- Iċċekkja l-limiti tal-cache speċifiċi għall-provider

### Il-ħolqien tal-cache qed ifalli

- Ivverifika li d-daqs tal-cache jinsab fil-limiti tal-provider
- Iċċekkja li s-sintassi tal-kontroll tal-cache hija korretta
- Żgura li l-provider jappoġġja caching għall-mudell tiegħek
- Irrevedi d-dokumentazzjoni tal-provider għal-limitazzjonijiet

### Spejjeż mhux mistennija

- Immonitorja l-ħolqien tal-cache kontra t-tokens tal-qari tal-cache
- Ivverifika li l-cache tassew qed jintuża
- Iċċekkja għal cache misses minħabba varjazzjonijiet fil-prompt
- Ikkunsidra li taġġusta t-TTL jew l-istrateġija tal-cache

## Tqabbil tal-Providers

| Karatteristika | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Speċifiku għall-provider | Kontroll tal-cache |
| Kontroll tat-TTL | Espliċitu | Permezz ta' headers | Dipendenti fuq il-provider | Ephemeral/persistent |
| Daqs massimu tal-cache | 1M tokens | Dipendenti fuq il-provider | Dipendenti fuq il-provider | 1M tokens |
| Tnaqqis fl-ispiża | 90% | 90% | Dipendenti fuq il-provider | 90% |
| Monitoraġġ | Dettaljat | Permezz ta' metriċi | Dipendenti fuq il-provider | Permezz tal-użu |

## Passi Li Jmiss

1. **Agħżel il-provider tiegħek**: Agħżel skont il-bżonnijiet tiegħek
2. **Ikkonfigura l-caching**: Issettja caching speċifiku għall-provider
3. **Ittestja l-caching**: Ivverifika li jaħdem mal-prompts tiegħek
4. **Immonitorja l-użu**: Segwi l-cache hits u t-tfaddil fl-ispejjeż
5. **Ottimizza**: Aġġusta t-TTL u l-istrateġija tal-cache skont ir-riżultati
