---
title: Samþætting við vísindamannar-áhrifsvatn
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provider-Aware Prompt Caching

Superdav AI Agent v1.12.0 hefurð **provider-aware prompt caching**, sem betur fyrir API-kostna og hlutfall á hvísli með því að nota cache fyrir texta (prompts) yfir annar LLM veitiefyrirtæki. Hvert veitiefyrirtæki hefur annarra skilyrða og uppsetningum fyrir caching.

## Översiktur

Prompt caching leyfir þér að:

- Cacha stórar, oftast notaðar texta (prompts)
- Drápa API-kostna með því að undanbúa óþarf skipti
- Bera hvísli fyrir vinnu á færðum leiknum
- Stýra lífeyrslu cache-sins sérstaklega

Fyrir hverja veitiefyrirtæki er caching gerst annarlega:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching með TTL (tími fyrir laukið)
- **OpenRouter**: Veitiefyrirtæki-spesifikt caching
- **Vertex Anthropic**: Prompt caching með stjórnun af cache-sins

## Google Gemini: cachedContents API

Google Gemini býður sér sérstaka stjórnun á cache-sins í gegnum `cachedContents` API.

### Uppsetning

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 stund í sekundum
        'max_tokens' => 1000000, // Stóra texta (tokens) að cacha
    ],
];
```

### Sköpun cached Prompt-sins

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Þú ert hjálfandi hjálparmann...',
        'context' => 'Stórt texta-dokument...',
        'ttl' => 3600,
    ]
);

// Til að bera: ['cache_id' => 'abc123', 'expires_at' => tími]
```

### Notkun með cacheð prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Notkunarspurning hér',
    ]
);
```

### Leikslagslif
```php
// Listuðu cached innhald
$caches = $gemini->list_cached_contents();

// Fáðu upplýsingar um cache-inn
$cache = $gemini->get_cached_content( 'abc123' );

// Stækka TTL (tími til að nota) á cache-inn
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Stækkt í 2 stundir
);

// Teyma cache-inn
$gemini->delete_cached_content( 'abc123' );
```

### Bestu háttar fyrir Gemini

- **Setju viðeigandi TTL**: Samþættið kostnaðsredu og ófullnægni í upplýsingum (staleness).
- **Cache system prompts**: Notaðu sama system prompt fyrir all spurningarnar þín.
- **Fylgjast með notkun cache-ins**: Fylgjast með því hvar sem caches eru notað mest.
- **Teyma úldri caches**: Teyma ónotaðir caches á viðkvæmt tveiminn.

## Azure OpenAI: Prompt Caching

Azure OpenAI stendur fyrir prompt caching og hefur sjálfvirka stjórnun TTL (tíma til að nota) með því.

### Innstillingar

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

### Skilning af að aktíva caching

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Þú ert hjálfandi hjálpar',
        'context' => 'Stort textafræðilegt skjal...',
        'prompt' => 'Notkunarspurning hér',
        'cache_control' => 'max_age=3600',
    ]
);

// Svarin fylgja notkun á cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache-hæðir (Cache Headers)

Azure OpenAI notar HTTP-hæðir til stjórnun á cache:

```
Cache-Control: max_age=3600
```

Stöðugt virkandi verðmæti:

- `max_age=<sekond>`: Cache fyrir sérstaka tíma
- `no_cache`: Skyni þessar skynjun ekki í cache
- `no_store`: Skyni þessar skynjun ekki og notaðu ekki aftur

### Stuðningur á notkun cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Sköpun cache: $cache_tokens token\n";
echo "Hit-sögu cache: $cache_hits token\n";
```

### Bestu aðferðir fyrir Azure OpenAI

- **Notu eins og sama spurningar**: Ítúlar spurningar fái ávinningur af caching
- **Setri raunverulega TTL (Time To Live)**: Balansar kostnað og fréshild
- **Fylgjast með metrikum cache-notkunarinnar**: Fylgja sköpunu cacheins og hitum
- **Samla eins og sama spurningar**: Gruppa spurningar til að ná mestri mögulega hitum í cache

## OpenRouter: Cache fyrir viðbótun (Provider-Specific Caching)

OpenRouter stendur með caching þegar hann notar grundvallar viðbótunir (OpenAI, Anthropic, osbn).

### Innstillingar


```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Nota: Notkun OpenAI-s peyttu
    ],
];
```

### Notkun OpenRouter Caching

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Þú ert hjálfandi hjálpar',
        'context' => 'Stort textafræðilegt skjal...',
        'prompt' => 'Notkunarspurning hér',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Valkostir fyrir Notkunarviti (Provider-Specific Options)

Fjöldi notkunarvita hefur sína eigin skeymið til að nota viti:

```php
// OpenAI-samræmd viti
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic-samræmd viti
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

### Bestu Dragar fyrir OpenRouter

- **Vitið þennan notkunarvita**: Hvert vita hefur annarra vita sem er annleiki.
- **Prófa vitið**: Staða viti til að virka með notkunarvita sem þú valdið.
- **Fylgjast með kostnaðum**: Fylgja sparnaðum sem viti gerir.
- **Notkun sama modella**: Skiftingu modella breytur ekki hitlið (cache hits).

## Vertex Anthropic: Prompt Caching með Cache Control

Vertex Anthropic (Google Cloud) stendur á prompt caching með skýrri kontrolli yfir cache.

### Innstillingar

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

### Notkun Vertex Anthropic Caching

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

// Svarin fylgja með metrikum cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Typer Cache Kontrolls

- **ephemeral**: Cache fyrir varanlega áhættu (default)
- **persistent**: Cache milli fleiri skýrslunnar (ef er stuðlað í veg)

### Öryggisáætlun Notkun Caches

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache skipt: $cache_created tokens\n";
echo "Cache lesnið: $cache_read tokens\n";
```

### Bestu háttar fyrir Vertex Anthropic

- **Brug efemörlega skipti**: Góð fyrir skipti í einum samkvæði.
- **Stellir max_tokens rétt**: Balansar stærð skiptisins og kostnað.
- **Fylgjast með skipti metrikum**: Fylgja með áhrif skiptisins.
- **Prófa við sjálfan virkni**: Staða hvernig skipti gagn öryggjum fyrir notkunarþáttinn þinn.

## Strateiki fyrir skipti milli veitenda (Cross-Provider Caching Strategy)

### Samkvæddir uppsetning

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

### Að finna veitendur (Provider Detection)

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Nota skipti uppsetningu sem er sérstaklega fyrir veitendann
```

### Strateiki fyrir að komast í gegnum (Fallback Strategy)

```php
try {
    // Prófaðu skráning með fyrsta veitsvæði
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Skipti í óskráðar fyrirspurnir
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kostnaðsoptimering

### Rekja sparnaðin

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Almenn prís (verður að breytast eftir veitsvæði):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x billigari
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x billigari
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Uppskattar sparnaður: \$$savings\n";
```

### Optimeringstípsla

- **Skráðu stórar systemfræðingum**: Størst kostnaðssparnaður
- **Vera í samhengi**: Skráðu oftast notað samhengi-skjal
- **Samþáttu spurninga**: Gruppa samþáttu spurningar til að ná mestri skráningu á skráðum gögnum (cache hits)
- **Fylgjast með skráningaskiljunni**: Fylgjast með raunverulegum sparnaðum
- **Nákvæmdu TTL**: Samþáttu kostnað og fréshild

## Feilfellingar

### Skráning ekki notað

- Staða skráningars í uppsetningu (configuration)
- Staða að spurningar séu eins og áður (skráning krefst nákvæm samræmi)
- Staða að skráningur hafi ekki laukið
- Fylgjast með taknum fyrir veitsvæði

### Skráningur er ekki í gangi

### Staðfestu að kaffi-stærðin sé innan fjölda takmarkana við veitmannann

Staðfesti að stærð kaffi-stærðarinnar sé innan fjölda takmarkana veitmannans.
Staðfesti að syntaktiki kontrolli kaffi-stærðarinnar sé rétt.
Sækja því að veitmanninn stuðlar við kaffi-stærðu fyrir modellann þinn.
Fara í gegnum veitmannans skjalði til að sjá takmarkanir.

### Óvæntar kostnaður

Staðfesti að færð á kaffi-sköpun og færð á lesingu kaffi-tökunar sé viðeigandi.
Staðfestu að kaffi sé í raun notuð.
Fara í gegnum skiptan prompt-a til að sjá það sem er missað af kaffi.
Stofna yfir að breyta TTL eða kaffi-stefnu eftir niðurstöðum.

## Samanburður veitmannanna

| Eiknum | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---|---|---|---|---|
| Cache API | cachedContents | HTTP headers | Veitmanna-spécifikt | Kontrolli kaffi-stærðarinnar |
| TTL kontroll | Ákveðin | Gjennom headers | Veitmanna-afhänging | Ephemeral/persistent |
| Maks kaffi-stærð | 1M tokens | Veitmanna-afhänging | Veitmanna-afhänging | 1M tokens |
| Kostnaðsreduktion | 90% | 90% | Veitmanna-afhänging | 90% |
| Öryggisþróun | Ítöl | Gjennom metrics | Veitmanna-afhänging | Gjennom notkunar |

## Næstu skref

1. **Velðu veitmannann þinn**: Veldu eftir því sem þarf er
2. **Stellu kaffi-stærðu**: Stellum veitmanna-spécifíka kaffi-stærðu
3. **Prófa kaffi-stærðu**: Staðfestu að það virki með prompt-um þínum
4. **Fara í gegnum notkun**: Fara í gegnum kaffi-hit og kostnaðsreduktion
5. **Ófnaðu**: Breyta TTL og kaffi-stefnu eftir niðurstöðum
