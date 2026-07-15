---
title: Kaŝmemorigado de promptoj konscia pri provizanto
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Provizanto-konscia prompt-kaŝmemorigado

Superdav AI Agent v1.12.0 enkondukas **provizanto-konscian prompt-kaŝmemorigadon**, kiu optimumigas API-kostojn kaj atendotempon per kaŝmemorigado de promptoj tra malsamaj LLM-provizantoj. Ĉiu provizanto havas malsamajn kaŝmemorigajn mekanismojn kaj agordojn.

## Superrigardo {#overview}

Prompt-kaŝmemorigado permesas al vi:

- Kaŝmemorigi grandajn, ofte uzatajn promptojn
- Redukti API-kostojn evitante redundan prilaboradon
- Plibonigi atendotempon por kaŝmemorigitaj petoj
- Administri la vivociklon de kaŝmemoro eksplicite

Malsamaj provizantoj efektivigas kaŝmemorigadon malsame:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-kaŝmemorigado kun TTL
- **OpenRouter**: Provizanto-specifa kaŝmemorigado
- **Vertex Anthropic**: Prompt-kaŝmemorigado kun kaŝmemora kontrolo

## Google Gemini: `cachedContents` API {#google-gemini-cachedcontents-api}

Google Gemini provizas eksplicitan kaŝmemoran administradon per la `cachedContents` API.

### Agordo {#configuration}

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

### Krei kaŝmemorigitan prompton {#creating-a-cached-prompt}

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

### Uzi kaŝmemorigitan prompton {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Kaŝmemora vivociklo {#cache-lifecycle}

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

### Plej bonaj praktikoj por Gemini {#best-practices-for-gemini}

- **Agordu taŭgan TTL**: Ekvilibrigu kostajn ŝparojn kontraŭ kaŝmemora malfreŝeco
- **Kaŝmemorigu sistemajn promptojn**: Reuzu la saman sisteman prompton tra petoj
- **Kontrolu kaŝmemoran uzadon**: Spuru kiuj kaŝmemoroj estas plej uzataj
- **Purigu eksvalidiĝintajn kaŝmemorojn**: Periode forigu neuzatajn kaŝmemorojn

## Azure OpenAI: Prompt-kaŝmemorigado {#azure-openai-prompt-caching}

Azure OpenAI subtenas prompt-kaŝmemorigadon kun aŭtomata TTL-administrado.

### Agordo {#configuration-1}

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

### Ebligi kaŝmemorigadon {#enabling-caching}

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

### Kaŝmemoraj kaplinioj {#cache-headers}

Azure OpenAI uzas HTTP-kapliniojn por kaŝmemora kontrolo:

```
Cache-Control: max_age=3600
```

Subtenataj valoroj:

- `max_age=<seconds>`: Kaŝmemorigi por specifita daŭro
- `no_cache`: Ne kaŝmemorigi ĉi tiun peton
- `no_store`: Ne kaŝmemorigi kaj ne reuzi

### Kontroli kaŝmemoran uzadon {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Plej bonaj praktikoj por Azure OpenAI {#best-practices-for-azure-openai}

- **Uzu konsekvencajn promptojn**: Identaj promptoj profitas de kaŝmemorigado
- **Agordu prudentan TTL**: Ekvilibrigu koston kontraŭ freŝeco
- **Kontrolu kaŝmemorajn metrikojn**: Spuru kaŝmemoran kreadon kontraŭ trafoj
- **Grupe sendu similajn petojn**: Grupigu petojn por maksimumigi kaŝmemorajn trafojn

## OpenRouter: Provizanto-specifa kaŝmemorigado {#openrouter-provider-specific-caching}

OpenRouter subtenas kaŝmemorigadon per subaj provizantoj (OpenAI, Anthropic, ktp.).

### Agordo {#configuration-2}

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

### Uzi OpenRouter-kaŝmemorigadon {#using-openrouter-caching}

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

### Provizanto-specifaj opcioj {#provider-specific-options}

Malsamaj provizantoj havas malsamajn kaŝmemorigajn mekanismojn:

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

### Plej bonaj praktikoj por OpenRouter {#best-practices-for-openrouter}

- **Konu la kaŝmemorigadon de via provizanto**: Ĉiu provizanto havas malsamajn mekanismojn
- **Testu kaŝmemoran konduton**: Kontrolu ke kaŝmemorigado funkcias kun via elektita provizanto
- **Kontrolu kostojn**: Spuru ŝparojn el kaŝmemorigado
- **Uzu konsekvencajn modelojn**: Ŝanĝi modelojn rompas kaŝmemorajn trafojn

## Vertex Anthropic: Prompt-kaŝmemorigado kun kaŝmemora kontrolo {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) subtenas prompt-kaŝmemorigadon kun eksplicita kaŝmemora kontrolo.

### Agordo {#configuration-3}

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

### Uzado de Vertex Anthropic-kaŝmemorado {#using-vertex-anthropic-caching}

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

### Tipoj de Cache Control {#cache-control-types}

- **ephemeral**: Kaŝmemoro dum la daŭro de la peto (defaŭlte)
- **persistent**: Kaŝmemoro trans pluraj petoj (se subtenata)

### Monitorado de kaŝmemora uzado {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Plej bonaj praktikoj por Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Uzu ephemeral-kaŝmemoradon**: Bona por unusesia kaŝmemorado
- **Agordu max_tokens taŭge**: Ekvilibrigu kaŝmemoran grandecon kontraŭ kosto
- **Monitoru kaŝmemorajn metrikojn**: Spuru kaŝmemoran efikecon
- **Testu per via laborŝarĝo**: Kontrolu ke kaŝmemorado utilas al via uzokazo

## Transprovizanta kaŝmemora strategio {#cross-provider-caching-strategy}

### Unuigita agordo {#unified-configuration}

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

### Detekto de provizanto {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Rezerva strategio {#fallback-strategy}

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

## Kosta optimumigo {#cost-optimization}

### Kalkuli ŝparojn {#calculate-savings}

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

### Optimumigaj konsiletoj {#optimization-tips}

- **Kaŝmemoru grandajn sistemajn instigojn**: Plej grandaj kostŝparoj
- **Reuzu kuntekston**: Kaŝmemoru ofte uzatajn kuntekstajn dokumentojn
- **Amasigu petojn**: Grupigu similajn petojn por maksimumigi kaŝmemorajn trafojn
- **Monitoru kaŝmemoran efikecon**: Spuru realajn ŝparojn
- **Ĝustigu TTL**: Ekvilibrigu koston kontraŭ freŝeco

## Problemsolvado {#troubleshooting}

### Kaŝmemoro ne estas uzata {#cache-not-being-used}

- Kontrolu ke kaŝmemorado estas ebligita en agordo
- Kontrolu ke instigoj estas identaj (kaŝmemorado postulas ĝustan kongruon)
- Kontrolu ke kaŝmemoro ne eksvalidiĝis
- Kontrolu provizanto-specifajn kaŝmemorajn limojn

### Kreado de kaŝmemoro malsukcesas {#cache-creation-failing}

- Kontrolu ke kaŝmemora grandeco estas ene de provizantaj limoj
- Kontrolu ke kaŝmemora kontrolsintakso estas ĝusta
- Certigu ke provizanto subtenas kaŝmemoradon por via modelo
- Reviziu provizantan dokumentaron pri limigoj

### Neatenditaj kostoj {#unexpected-costs}

- Monitoru kaŝmemoran kreadon kontraŭ kaŝmemoraj legotokenoj
- Kontrolu ke kaŝmemoro efektive estas uzata
- Kontrolu pri kaŝmemoraj maltrafoj pro varioj de instigoj
- Konsideru ĝustigi TTL aŭ kaŝmemoran strategion

## Komparo de provizantoj {#provider-comparison}

| Trajto | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provizanto-specifa | Cache control |
| TTL-kontrolo | Eksplicita | Per headers | Provizanto-dependa | Ephemeral/persistent |
| Maks. kaŝmemora grandeco | 1M tokenoj | Provizanto-dependa | Provizanto-dependa | 1M tokenoj |
| Kostoredukto | 90% | 90% | Provizanto-dependa | 90% |
| Monitorado | Detala | Per metrikoj | Provizanto-dependa | Per uzado |

## Sekvaj paŝoj {#next-steps}

1. **Elektu vian provizanton**: Elektu laŭ viaj bezonoj
2. **Agordu kaŝmemoradon**: Starigu provizanto-specifan kaŝmemoradon
3. **Testu kaŝmemoradon**: Kontrolu ke ĝi funkcias kun viaj instigoj
4. **Monitoru uzadon**: Spuru kaŝmemorajn trafojn kaj kostŝparojn
5. **Optimumigu**: Ĝustigu TTL kaj kaŝmemoran strategion laŭ rezultoj
