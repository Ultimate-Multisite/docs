---
title: Nodrošinātājam pielāgota uzvedņu kešošana
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# No pakalpojumu sniedzēja atkarīga prompt kešošana

Superdav AI Agent v1.12.0 ievieš **no pakalpojumu sniedzēja atkarīgu prompt kešošanu**, kas optimizē API izmaksas un latentumu, kešojot promptus dažādos LLM pakalpojumu sniedzējos. Katram pakalpojumu sniedzējam ir atšķirīgi kešošanas mehānismi un konfigurācijas.

## Pārskats

Prompt kešošana ļauj jums:

- Kešot lielus, bieži izmantotus promptus
- Samazināt API izmaksas, izvairoties no liekas apstrādes
- Uzlabot latentumu kešotiem pieprasījumiem
- Tieši pārvaldīt keša dzīves ciklu

Dažādi pakalpojumu sniedzēji kešošanu ievieš atšķirīgi:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: prompt kešošana ar TTL
- **OpenRouter**: pakalpojumu sniedzējam specifiska kešošana
- **Vertex Anthropic**: prompt kešošana ar keša kontroli

## Google Gemini: cachedContents API

Google Gemini nodrošina tiešu keša pārvaldību, izmantojot `cachedContents` API.

### Konfigurācija

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

### Kešota prompta izveide

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

### Kešota prompta izmantošana

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Keša dzīves cikls

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

### Labākā prakse Gemini

- **Iestatiet atbilstošu TTL**: sabalansējiet izmaksu ietaupījumu un keša novecošanu
- **Kešojiet sistēmas promptus**: atkārtoti izmantojiet vienu un to pašu sistēmas promptu dažādos pieprasījumos
- **Pārraugiet keša lietojumu**: sekojiet, kuri keši tiek izmantoti visvairāk
- **Notīriet beigušos kešus**: periodiski dzēsiet neizmantotos kešus

## Azure OpenAI: prompt kešošana

Azure OpenAI atbalsta prompt kešošanu ar automātisku TTL pārvaldību.

### Konfigurācija

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

### Kešošanas iespējošana

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

### Keša galvenes

Azure OpenAI keša kontrolei izmanto HTTP galvenes:

```
Cache-Control: max_age=3600
```

Atbalstītās vērtības:

- `max_age=<seconds>`: kešot norādīto ilgumu
- `no_cache`: nekešot šo pieprasījumu
- `no_store`: nekešot un neizmantot atkārtoti

### Keša lietojuma pārraudzība

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Labākā prakse Azure OpenAI

- **Izmantojiet konsekventus promptus**: identiski prompti gūst labumu no kešošanas
- **Iestatiet saprātīgu TTL**: sabalansējiet izmaksas un aktualitāti
- **Pārraugiet keša metrikas**: sekojiet keša izveidei salīdzinājumā ar trāpījumiem
- **Apvienojiet līdzīgus pieprasījumus paketēs**: grupējiet pieprasījumus, lai maksimizētu keša trāpījumus

## OpenRouter: pakalpojumu sniedzējam specifiska kešošana

OpenRouter atbalsta kešošanu, izmantojot pamatā esošos pakalpojumu sniedzējus (OpenAI, Anthropic u. c.).

### Konfigurācija

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

### OpenRouter kešošanas izmantošana

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

### Pakalpojumu sniedzējam specifiskas opcijas

Dažādiem pakalpojumu sniedzējiem ir atšķirīgi kešošanas mehānismi:

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

### Labākā prakse OpenRouter

- **Pārziniet sava pakalpojumu sniedzēja kešošanu**: katram pakalpojumu sniedzējam ir atšķirīgi mehānismi
- **Testējiet kešošanas darbību**: pārbaudiet, vai kešošana darbojas ar jūsu izvēlēto pakalpojumu sniedzēju
- **Pārraugiet izmaksas**: sekojiet ietaupījumam no kešošanas
- **Izmantojiet konsekventus modeļus**: modeļu maiņa izjauc keša trāpījumus

## Vertex Anthropic: prompt kešošana ar keša kontroli

Vertex Anthropic (Google Cloud) atbalsta prompt kešošanu ar tiešu keša kontroli.

### Konfigurācija

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

### Vertex Anthropic kešošanas izmantošana

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

### Kešatmiņas kontroles veidi

- **ephemeral**: Kešatmiņa pieprasījuma ilgumam (noklusējums)
- **persistent**: Kešatmiņa vairākos pieprasījumos (ja tiek atbalstīts)

### Kešatmiņas lietojuma uzraudzība

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic labākā prakse

- **Izmantojiet ephemeral kešošanu**: Piemērota vienas sesijas kešošanai
- **Iestatiet max_tokens atbilstoši**: Līdzsvarojiet kešatmiņas izmēru un izmaksas
- **Uzraugiet kešatmiņas metrikas**: Sekojiet kešatmiņas efektivitātei
- **Testējiet ar savu darba slodzi**: Pārbaudiet, vai kešošana sniedz ieguvumu jūsu lietošanas gadījumā

## Kešošanas stratēģija starp nodrošinātājiem

### Vienota konfigurācija

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

### Nodrošinātāja noteikšana

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Atkāpšanās stratēģija

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

## Izmaksu optimizācija

### Ietaupījumu aprēķināšana

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

### Optimizācijas padomi

- **Kešojiet lielus sistēmas promptus**: Lielākais izmaksu ietaupījums
- **Atkārtoti izmantojiet kontekstu**: Kešojiet bieži izmantotus konteksta dokumentus
- **Apvienojiet pieprasījumus paketēs**: Grupējiet līdzīgus pieprasījumus, lai maksimāli palielinātu kešatmiņas trāpījumus
- **Uzraugiet kešatmiņas efektivitāti**: Sekojiet faktiskajiem ietaupījumiem
- **Pielāgojiet TTL**: Līdzsvarojiet izmaksas un svaigumu

## Problēmu novēršana

### Kešatmiņa netiek izmantota

- Pārbaudiet, vai konfigurācijā ir iespējota kešošana
- Pārbaudiet, vai prompti ir identiski (kešošanai nepieciešama precīza sakritība)
- Pārbaudiet, vai kešatmiņa nav beigusies
- Pārbaudiet nodrošinātājam specifiskos kešatmiņas ierobežojumus

### Kešatmiņas izveide neizdodas

- Pārbaudiet, vai kešatmiņas izmērs ir nodrošinātāja ierobežojumu robežās
- Pārbaudiet, vai kešatmiņas kontroles sintakse ir pareiza
- Pārliecinieties, ka nodrošinātājs atbalsta kešošanu jūsu modelim
- Pārskatiet nodrošinātāja dokumentāciju par ierobežojumiem

### Negaidītas izmaksas

- Uzraugiet kešatmiņas izveides un kešatmiņas nolasīšanas tokenus
- Pārbaudiet, vai kešatmiņa tiešām tiek izmantota
- Pārbaudiet, vai promptu variāciju dēļ nerodas kešatmiņas netrāpījumi
- Apsveriet TTL vai kešošanas stratēģijas pielāgošanu

## Nodrošinātāju salīdzinājums

| Funkcija | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Kešatmiņas API | cachedContents | HTTP galvenes | Nodrošinātājam specifisks | Kešatmiņas kontrole |
| TTL kontrole | Tieša | Izmantojot galvenes | Atkarīga no nodrošinātāja | Ephemeral/persistent |
| Maks. kešatmiņas izmērs | 1M tokeni | Atkarīgs no nodrošinātāja | Atkarīgs no nodrošinātāja | 1M tokeni |
| Izmaksu samazinājums | 90% | 90% | Atkarīgs no nodrošinātāja | 90% |
| Uzraudzība | Detalizēta | Izmantojot metrikas | Atkarīga no nodrošinātāja | Izmantojot lietojumu |

## Nākamās darbības

1. **Izvēlieties savu nodrošinātāju**: Atlasiet, pamatojoties uz savām vajadzībām
2. **Konfigurējiet kešošanu**: Iestatiet nodrošinātājam specifisku kešošanu
3. **Testējiet kešošanu**: Pārbaudiet, vai tā darbojas ar jūsu promptiem
4. **Uzraugiet lietojumu**: Sekojiet kešatmiņas trāpījumiem un izmaksu ietaupījumiem
5. **Optimizējiet**: Pielāgojiet TTL un kešošanas stratēģiju, pamatojoties uz rezultātiem
