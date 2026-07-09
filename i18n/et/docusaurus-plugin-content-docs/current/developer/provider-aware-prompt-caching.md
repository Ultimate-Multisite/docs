---
title: Teenusepakkujapõhine viibapuhverdamine
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Teenusepakkuja-teadlik promptide vahemällu salvestamine

Superdav AI Agent v1.12.0 tutvustab **teenusepakkuja-teadlikku promptide vahemällu salvestamist**, mis optimeerib API kulusid ja latentsust, salvestades prompte vahemällu eri LLM-teenusepakkujate vahel. Igal teenusepakkujal on erinevad vahemällu salvestamise mehhanismid ja seadistused.

## Ülevaade

Promptide vahemällu salvestamine võimaldab teil:

- Salvestada vahemällu suuri, sageli kasutatavaid prompte
- Vähendada API kulusid, vältides üleliigset töötlemist
- Parandada vahemällu salvestatud päringute latentsust
- Hallata vahemälu elutsüklit selgesõnaliselt

Eri teenusepakkujad rakendavad vahemällu salvestamist erinevalt:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: promptide vahemällu salvestamine TTL-iga
- **OpenRouter**: teenusepakkuja-põhine vahemällu salvestamine
- **Vertex Anthropic**: promptide vahemällu salvestamine vahemälu juhtimisega

## Google Gemini: cachedContents API

Google Gemini pakub selgesõnalist vahemälu haldust `cachedContents` API kaudu.

### Seadistus

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

### Vahemällu salvestatud prompti loomine

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

### Vahemällu salvestatud prompti kasutamine

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Vahemälu elutsükkel

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

### Gemini parimad tavad

- **Määrake sobiv TTL**: tasakaalustage kulude kokkuhoid ja vahemälu aegumine
- **Salvestage süsteemipromptid vahemällu**: kasutage sama süsteemiprompti päringute vahel uuesti
- **Jälgige vahemälu kasutust**: jälgige, milliseid vahemälusid kasutatakse kõige rohkem
- **Puhastage aegunud vahemälud**: kustutage perioodiliselt kasutamata vahemälud

## Azure OpenAI: promptide vahemällu salvestamine

Azure OpenAI toetab promptide vahemällu salvestamist automaatse TTL-i haldusega.

### Seadistus

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

### Vahemällu salvestamise lubamine

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

### Vahemälu päised

Azure OpenAI kasutab vahemälu juhtimiseks HTTP päiseid:

```
Cache-Control: max_age=3600
```

Toetatud väärtused:

- `max_age=<seconds>`: salvesta vahemällu määratud kestuseks
- `no_cache`: ära salvesta seda päringut vahemällu
- `no_store`: ära salvesta vahemällu ega kasuta uuesti

### Vahemälu kasutuse jälgimine

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI parimad tavad

- **Kasutage järjepidevaid prompte**: identsed promptid saavad vahemällu salvestamisest kasu
- **Määrake mõistlik TTL**: tasakaalustage kulu ja värskus
- **Jälgige vahemälu mõõdikuid**: jälgige vahemälu loomise ja tabamuste suhet
- **Rühmitage sarnased päringud**: koondage päringud, et maksimeerida vahemälu tabamusi

## OpenRouter: teenusepakkuja-põhine vahemällu salvestamine

OpenRouter toetab vahemällu salvestamist aluseks olevate teenusepakkujate kaudu (OpenAI, Anthropic jne).

### Seadistus

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

### OpenRouteri vahemällu salvestamise kasutamine

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

### Teenusepakkuja-põhised valikud

Eri teenusepakkujatel on erinevad vahemällu salvestamise mehhanismid:

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

### OpenRouteri parimad tavad

- **Tundke oma teenusepakkuja vahemällu salvestamist**: igal teenusepakkujal on erinevad mehhanismid
- **Testige vahemällu salvestamise käitumist**: kontrollige, et vahemällu salvestamine töötaks teie valitud teenusepakkujaga
- **Jälgige kulusid**: jälgige vahemällu salvestamisest saadavat kokkuhoidu
- **Kasutage järjepidevaid mudeleid**: mudelite vahetamine katkestab vahemälu tabamused

## Vertex Anthropic: promptide vahemällu salvestamine vahemälu juhtimisega

Vertex Anthropic (Google Cloud) toetab promptide vahemällu salvestamist selgesõnalise vahemälu juhtimisega.

### Seadistus

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

### Vertex Anthropicu vahemällu salvestamise kasutamine

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

### Vahemälu juhtimise tüübid

- **ephemeral**: Vahemälu päringu kestuse ajaks (vaikimisi)
- **persistent**: Vahemälu mitme päringu vahel (kui toetatud)

### Vahemälu kasutuse jälgimine

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic parimad praktikad

- **Kasuta ephemeral vahemällu salvestamist**: Hea ühe seansi vahemällu salvestamiseks
- **Määra max_tokens sobivalt**: Tasakaalusta vahemälu suurust ja kulu
- **Jälgi vahemälu mõõdikuid**: Jälgi vahemälu tõhusust
- **Testi oma töökoormusega**: Veendu, et vahemällu salvestamine toob sinu kasutusjuhule kasu

## Teenusepakkujateülene vahemällu salvestamise strateegia

### Ühtne konfiguratsioon

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

### Teenusepakkuja tuvastamine

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Varustrateegia

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

## Kulude optimeerimine

### Säästu arvutamine

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

### Optimeerimisnõuanded

- **Salvesta suured süsteemiviibad vahemällu**: Suurim kulude kokkuhoid
- **Kasuta konteksti uuesti**: Salvesta sageli kasutatavad kontekstidokumendid vahemällu
- **Päringute pakettimine**: Rühmita sarnased päringud, et maksimeerida vahemälu tabamusi
- **Jälgi vahemälu tõhusust**: Jälgi tegelikku säästu
- **Kohanda TTL-i**: Tasakaalusta kulu ja värskust

## Tõrkeotsing

### Vahemälu ei kasutata

- Veendu, et vahemällu salvestamine on konfiguratsioonis lubatud
- Kontrolli, et viibad oleksid identsed (vahemällu salvestamine nõuab täpset vastet)
- Veendu, et vahemälu pole aegunud
- Kontrolli teenusepakkujaspetsiifilisi vahemälu piiranguid

### Vahemälu loomine ebaõnnestub

- Veendu, et vahemälu suurus jääb teenusepakkuja piirangute sisse
- Kontrolli, et vahemälu juhtimise süntaks oleks korrektne
- Veendu, et teenusepakkuja toetab sinu mudeli jaoks vahemällu salvestamist
- Vaata piirangute kohta teenusepakkuja dokumentatsiooni

### Ootamatud kulud

- Jälgi vahemälu loomise ja vahemälust lugemise token’eid
- Veendu, et vahemälu tegelikult kasutatakse
- Kontrolli viipade variatsioonidest tingitud vahemälu möödalaskmisi
- Kaalu TTL-i või vahemälu strateegia kohandamist

## Teenusepakkujate võrdlus

| Funktsioon | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Vahemälu API | cachedContents | HTTP päised | Teenusepakkujaspetsiifiline | Vahemälu juhtimine |
| TTL-i juhtimine | Selgesõnaline | Päiste kaudu | Sõltub teenusepakkujast | Ephemeral/persistent |
| Maksimaalne vahemälu suurus | 1M token’it | Sõltub teenusepakkujast | Sõltub teenusepakkujast | 1M token’it |
| Kulude vähendamine | 90% | 90% | Sõltub teenusepakkujast | 90% |
| Jälgimine | Üksikasjalik | Mõõdikute kaudu | Sõltub teenusepakkujast | Kasutuse kaudu |

## Järgmised sammud

1. **Vali oma teenusepakkuja**: Vali oma vajaduste põhjal
2. **Konfigureeri vahemällu salvestamine**: Seadista teenusepakkujaspetsiifiline vahemällu salvestamine
3. **Testi vahemällu salvestamist**: Veendu, et see töötab sinu viipadega
4. **Jälgi kasutust**: Jälgi vahemälu tabamusi ja kulude kokkuhoidu
5. **Optimeeri**: Kohanda TTL-i ja vahemälu strateegiat tulemuste põhjal
