---
title: Cache Cyflwyniadau gyda Gwybodol am y Cyflenwr
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caching Promptau Gwyrddwr-Arallt {#provider-aware-prompt-caching}

Mae Superdav AI Agent v1.12.0 yn cyflwyno **caching promptau arallt-arallt** (provider-aware prompt caching), sy mae'n optimiast costau API a latens gan gael y promptau wedi'u cadw yn y cyflym drwy ei cadw mewn cache ar gyfer pwylliant LLM'r wahodil. Mae pob pwylliant gyda'i ddethau a chwaraeir cadw yn rhywfaint.

## Oglwyddictod {#overview}

Mae caching promptau yn gallu i chi:

- Cadw promptau mawr a cael eu defnyddio'n aml mewn cache
- Redu costau API gan ddefnyddio prosesau ddifrifol
- Gyfeillio latens ar gyfer y caniatâdau wedi'u cadw
- Rheoli byw y cache yn ddefnyddiol yn llwyr

Mae pwylliant ddifrifol yn cyflwyno caching yn rhywfaint:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Caching promptau gyda TTL (Time To Live)
- **OpenRouter**: Caching arallt-arallt-pwylliant
- **Vertex Anthropic**: Caching promptau gyda rheoli cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Mae Google Gemini yn rhoi rheoli cache yn ddefnyddiol drwy'r API `cachedContents`.

### Rheoli {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 awr mewn oerau
        'max_tokens' => 1000000, // Mae'n ychwanegau mwyaf i cadw
    ],
];
```

### Creu Prompt Cadw {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Ti yw asiant gweithredol...',
        'context' => 'Ddogfen context mawr...',
        'ttl' => 3600,
    ]
);

// Mae'n cyflwyno: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Cyfalu Prompt wedi cael Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'cwestiwn ybysgol yma',
    ]
);
```

### Cyflffordd yr Cache {#cache-lifecycle}

```php
// Llofrif y cynnwys wedi'u cael cache
$caches = $gemini->list_cached_contents();

// Derbyn cyfathiadau y cache
$cache = $gemini->get_cached_content( 'abc123' );

// Mae'r TTL (cymeriad am y cache) yn cael ei gyflwyno
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Gyflwyno i 2 awr
);

// Talybo y cache
$gemini->delete_cached_content( 'abc123' );
```

### Prif Gweithredoedd ar Gemini {#best-practices-for-gemini}

- **Rheoli TTL pwysig**: Balans gwirtschaftiadau cost vs. rhyddoldeb yr cache
- **Cache system prompts**: Redig ystod am ystod (system prompt) felly yn cael ei ddefnyddio ar gyfer cyflwyno
- **Monitor defnydd y cache**: Monitro beth yw'r cacheau a ddefnyddir yn fwy
- **Lleidydd y cacheau wedi'u cael eu cyflwyno**: Talybo'r cacheau sydd wedi'u cael eu cyflwyno amser o bryd

## Azure OpenAI: Cyfathiadau Prompt Cache {#azure-openai-prompt-caching}

Mae Azure OpenAI yn chymorthu â cache prompt gyda rheoli TTL (cymeriad am y cache) yn awtomatig.

### Cysylltu {#configuration-1}

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

### Mae Cache yn cael ei chynllunio {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Dw i'r asiant helpu...',
        'context' => 'Ddogfennol ddogfennol document',
        'prompt' => 'Cwestiad y surfer',
        'cache_control' => 'max_age=3600',
    ]
);

// Mae'r ymatech yn cynnwys defnyddio cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cyflwyniadau Cache (Cache Headers) {#cache-headers}

Mae Azure OpenAI yn defnyddio hedfanau HTTP i rheoli cynnwys cache:

```
Cache-Control: max_age=3600
```

Gwerthau sydd wedi'u chynllunio:

- `max_age=<seconds>`: Cache am ddefnyddio cyfnod penodol
- `no_cache`: Peidiwch â cache'r gyfle hwnnw
- `no_store`: Peidiwch â cache a peidiwch â ddefnyddio eto

### Monitro Defnyddio Cache (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Creu cache: $cache_tokens token\n";
echo "Cyflwyniadau cache: $cache_hits token\n";
```

### Prif Gwybodaeth ar gyfer Azure OpenAI (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **Defnyddiwch promptau yn unigol**: Mae promptau unigol yn dod yn dda gyda cache
- **Rheoli TTL ymosodol**: Balans cost vs. newyddolwch
- **Monitro metrefau cache**: Monitro creu cache vs. cyflwyniadau
- **Barchu gyfleidiau tebyg**: Barchu gyfleidiau i maximu cyflwyniadau cache

## OpenRouter: Cache Penodol y Cyflwyniadau (OpenRouter: Provider-Specific Caching) {#openrouter-provider-specific-caching}

Mae OpenRouter yn chymryd cache drwy'r cyflwyniadau sydd wedi'u cynnwys (OpenAI, Anthropic, etc.).

### Cyfluniad (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Defnyddiw caching OpenAI
    ],
];
```

### Cysylltu â Caching OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Dw i'n gynllunwrth', // Dw i'n gynllunwrth (You are a helpful assistant...)
        'context' => 'Ddogfen gyda chyfathrebu mawr...', // Ddogfen gyda chyfathrebu mawr... (Large context document...)
        'prompt' => 'Cwestiwn yboryd yboryd', // Cwestiwn yboryd yboryd (User question here)
        'cache_control' => 'max_age=3600',
    ]
);
```

### Opsiynau Specifigol i'r Provider {#provider-specific-options}

Mae providerau yn cael eu mecanwaith caching yn rhywfaint:

```php
// Caching cyfathrebu OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caching cyfathrebu Anthropic
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

### Prif Gweithredoedd ar gyfer OpenRouter {#best-practices-for-openrouter}

- **Gweld eich provider o'r caching**: Mae gan bob provider mecanwaith yn rhywfaint.
- **Profiwch y cyfarwyddiadau caching**: Cynllunwch bod y caching yn gweithio gyda'r provider a dychwelyd.
- **Monitro costau**: Drwy'r cyfathrebu o'r caching.
- **Defnyddiw modelau unigolion**: Mae newid modelau yn gwblhau'r cyflwyniad (cache hits).

## Vertex Anthropic: Caching Prompt gyda Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Mae Vertex Anthropic (Google Cloud) yn cefnogi cache o'r prompt gyda rheoli cache arallgolyguol.

### Cynnig {#configuration-3}

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

### Defnyddio Cache Vertex Anthropic {#using-vertex-anthropic-caching}

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

// Mae'r y cyfeiriad yn cynnwys metrion cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Rheoliadau Cache Control {#cache-control-types}

- **ephemeral**: Cache ar gyfer y cyfnod yr ymddangos (defnyddiol yn ddefnyddiol)
- **persistent**: Cache ar gyfer amserau aml o ymddangosau (os mae hyn yn cael ei cefnogi)

### Monitro Defnyddio Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache wedi cael ei chynllunio: $cache_created token\n";
echo "Cache wedi cael ei ddefnyddio: $cache_read token\n";
```

### Prifau Gweithredol ar Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Defnyddiw cache efemeryd (ephemeral caching)**: Da iawn i cache o sesiwn unig.
- **Setwch max_tokens yn dda**: Balanswch grädd y cache a'r cost.
- **Monitawch y metrefau cache**: Draffwch yr effeithioldeb y cache.
- **Gwystau gyda'ch gweithredol**: Cynllunwch bod y cache yn dod â phryd i eich casgliad.

## Strategi Cache ar Gyflymion Mae'n Cyflwyno (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### Cynnig Unifyddol (Unified Configuration) {#unified-configuration}

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

### Gyflwyno Gweithredol (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Defnyddiwch cynnig cache o'r gyflym yn benodol i'r gyflym
```

### Strategi Gwrthyn (Fallback Strategy) {#fallback-strategy}

```php
try {
    // Prata'r casgliad gyda' cyfathrebu prynhawn
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Gofal i'r gyfleidr nid yn cael ei casgliadu
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimau Costau {#cost-optimization}

### Cyfrannu Gofal {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Prif y cyflogau (mae'n newid gan y cyfathrebu):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x gormodol
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x gormodol
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Gofal arosol: \$$savings\n";
```

### Cysylltiadau Optimau {#optimization-tips}

- **Casgliad promptau mawr**: Mae'r gormodol mwyaf yn cael ei gwachnos.
- **Gwneud cyfathrebu allan**: Casgliadu ddogfenau arolwg sydd yn cael eu defnyddio'n aml.
- **Cyflenwi gyfleiwiau**: Cyfathreg yr adranau o ddefnyddio i maximu casgliadau.
- **Monitor effeithiol y casgliad**: Monitor y gormodol wir.
- **Regulwch TTL**: Casgliadu cost vs. newid.

## Gofalion {#troubleshooting}

### Nid yw'r casgliad yn cael ei ddefnyddio {#cache-not-being-used}

- Proffwch bod casgliad wedi'i chynllunio yn y cyfluniad (configuration).
- Gwylio bod y promptau yn identigol (mae'r casgliad yn rhoi angen cyfathrebu llawn).
- Proffwch nad yw'r casgliad wedi cael ei ddefnyddio.
- Gwylio am ystodau casgliad a chyflenwiol gan y cyfathrebu.

### Mae casgliad yn failu i gael {#cache-creation-failing}

### Gwylio'r cyflenau (Cache size) yn dros hanesau ychwanegwyr (provider limits) {#unexpected-costs}

- Cynnal y gwylio'r hanesau yn dros hanesau ychwanegwyr
- Gyda'r syniad cyddeall (cache control syntax) yn siarad
- Sicrhewch bod ychwanegwr yn chymryd y gwylio ar gyfer eich model

### Costau anghyfrifol (Unexpected costs) {#provider-comparison}

- Monitorea'r creu hanesau (cache creation) yn gyflwyniadau hanesau (cache read tokens)
- Cynnal y gwylio bod y hanesau yn cael eu defnyddio wir

- Gyda'r hanesau yn cael eu cael eu gael yn dros amrywiaethau prompt (prompt variations)
- Meddyliw am ei adeiladu TTL neu strategais hanesau (cache strategy)

## Cyflenau ychwanegwyr (Provider Comparison) {#next-steps}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Cynlluniau nesaf (Next Steps)

1. **Deallwch eich ychwanegwr**: Deallwch ar adeiladu eich angeniadau
2. **Cyflenwch y gwylio**: Rheoli'r hanesau yn gyflwyniadau ychwanegwyr
3. **Gwarchodwch y gwylio**: Cynnal y bydd yn gweithio gyda'ch promptau
4. **Monitorea'r defnydd**: Drwyllwch y cyffredinhanau hanesau a chynlluniau costau

5. **Optimai**: Adnewidiwch yr TTL a strategais hanesau ar adeiladu'r canlyniadau
