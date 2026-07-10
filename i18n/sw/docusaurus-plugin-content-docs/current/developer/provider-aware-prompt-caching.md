---
title: Uhifadhi wa Prompt Uliotambua Mtoaji
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Kuhifadhi Prompt kwa Kuzingatia Mtoa Huduma {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 inatangulia **uhifadhi wa prompt kwa kuzingatia mtoa huduma (provider-aware prompt caching)**, ambayo hufanya kazi ya kuboresha gharama za API na kasi (latency) kwa kuhifadhi prompts katika watoa huduma tofauti wa LLM. Kila mtoa huduma ana njia na mipangilio yake ya kuhifadhi data.

## Muhtasari {#overview}

Uhifadhi wa prompt unakuwezesha:

- Kuhifadhi prompts kubwa na zinazotumika mara kwa mara
- Kupunguza gharama za API kwa kuepuka kufanya kazi zile zile mara kwa mara
- Kuboresha kasi (latency) kwa maombi yaliyohifadhiwa
- Kudhibiti mzunguko wa maelezo ya cache kwa uwazi

Watoa huduma tofauti wanatekeleza uhifadhi kwa njia tofauti:

- **Google Gemini**: API ya `cachedContents`
- **Azure OpenAI**: Uhifadhi wa prompt kwa TTL
- **OpenRouter**: Uhifadhi wa cache unaotegemea mtoa huduma
- **Vertex Anthropic**: Uhifadhi wa prompt kwa udhibiti wa cache

## Google Gemini: API ya cachedContents {#google-gemini-cachedcontents-api}

Google Gemini inatoa usimamizi wa cache kwa uwazi kupitia API ya `cachedContents`.

### Mpangilio (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // Saa 1 kwa sekunde
        'max_tokens' => 1000000, // Tokens za juu za kuhifadhi
    ],
];
```

### Kuunda Prompt Iliyohifadhiwa (Creating a Cached Prompt) {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Wewe ni msaidizi msaidizi...',
        'context' => 'Waraka mkubwa wa muktadha...',
        'ttl' => 3600,
    ]
);

// Inarejesha: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Kutumia Prompt Iliyohifadhiwa (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Swali la mtumiaji hapa',
    ]
);
```

### Mzunguko wa Cache (Cache Lifecycle) {#cache-lifecycle}

```php
// Orodhesha yaliyohifadhiwa
$caches = $gemini->list_cached_contents();

// Pata maelezo ya cache
$cache = $gemini->get_cached_content( 'abc123' );

// Upanua TTL ya cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Upanua hadi saa 2
);

// Futa cache
$gemini->delete_cached_content( 'abc123' );
```

### Mazoea Bora kwa Gemini {#best-practices-for-gemini}

- **Weka TTL inayofaa**: Zingatia usawa kati ya kuokoa gharama na kuzeeka kwa cache
- **Hifadhi system prompts**: Tumia prompt ile ile ya mfumo katika maombi mengi
- **Fuata matumizi ya cache**: Tambua cache zipi zinatumika zaidi
- **Safisha caches zilizopita**: Futa mara kwa mara caches zisizotumika

## Azure OpenAI: Uhifadhi wa Prompt {#azure-openai-prompt-caching}

Azure OpenAI inasaidia uhifadhi wa prompt kwa usimamizi wa TTL kiotomatiki.

### Mpangilio (Configuration) {#configuration-1}

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

### Kuwezesha Cache (Enabling Caching) {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Wewe ni msaidizi msaidizi...',
        'context' => 'Waraka mkubwa wa muktadha...',
        'prompt' => 'Swali la mtumiaji hapa',
        'cache_control' => 'max_age=3600',
    ]
);

// Jibu linajumuisha matumizi ya cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headers za Cache {#cache-headers}

Azure OpenAI inatumia headers za HTTP kwa udhibiti wa cache:

```
Cache-Control: max_age=3600
```

Thamani zinazodumishwa:

- `max_age=<seconds>`: Hifadhi kwa muda uliowekwa
- `no_cache`: Usihifadhi ombi hili
- `no_store`: Usihifadhi na usitumie tena

### Ufuatiliaji wa Matumizi ya Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Uundaji wa cache: $cache_tokens tokens\n";
echo "Kupata cache: $cache_hits tokens\n";
```

### Mazoea Bora kwa Azure OpenAI {#best-practices-for-azure-openai}

- **Tumia prompts thabiti**: Prompts ile ile zinapata faida kutoka kwa cache
- **Weka TTL inayofaa**: Zingatia usawa kati ya gharama na ubora
- **Fuata vipimo vya cache**: Tambua uundaji wa cache dhidi ya kupata cache
- **Unganisha maombi yanayofanana**: Weka maombi pamoja ili kuongeza kupata cache

## OpenRouter: Uhifadhi Unaotegemea Mtoa Huduma {#openrouter-provider-specific-caching}

OpenRouter inasaidia uhifadhi kupitia watoa huduma wa chini (OpenAI, Anthropic, n.k.).

### Mpangilio (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Tumia uhifadhi wa OpenAI
    ],
];
```

### Kutumia Cache ya OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Wewe ni msaidizi msaidizi...',
        'context' => 'Waraka mkubwa wa muktadha...',
        'prompt' => 'Swali la mtumiaji hapa',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Chaguo Maalum kwa Mtoa Huduma {#provider-specific-options}

Watoa huduma tofauti wana njia tofauti za kuhifadhi cache:

```php
// Cache inayolingana na OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Cache inayolingana na Anthropic
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

### Mazoea Bora kwa OpenRouter {#best-practices-for-openrouter}

- **Jua uhifadhi wa mtoa huduma wako**: Kila mtoa huduma ana njia tofauti
- **Jaribu tabia ya cache**: Thibitisha kuwa cache inafanya kazi na mtoa huduma uliyonchagua
- **Fuata gharama**: Tambua akimatuzi kutoka kwa cache
- **Tumia mifumo thabiti**: Kubadilisha mifumo huoharibu kupata cache

## Vertex Anthropic: Uhifadhi wa Prompt kwa Udhibiti wa Cache {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) inasaidia uhifadhi wa prompt kwa udhibiti wa cache kwa uwazi.

### Mpangilio (Configuration) {#configuration-3}

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

### Kutumia Cache ya Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Wewe ni msaidizi msaidizi...',
        'context' => 'Waraka mkubwa wa muktadha...',
        'prompt' => 'Swali la mtumiaji hapa',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Jibu linajumuisha vipimo vya cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Aina za Udhibiti wa Cache {#cache-control-types}

- **ephemeral**: Hifadhi kwa muda wa ombi (default)
- **persistent**: Hifadhi katika maombi mengi (ikiwa inasaudiwa)

### Ufuatiliaji wa Matumizi ya Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache iloundwa: $cache_created tokens\n";
echo "Cache ilisomwa: $cache_read tokens\n";
```

### Mazoea Bora kwa Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Tumia ephemeral caching**: Nzuri kwa kuhifadhi ndani ya kikao kimoja
- **Weka max_tokens ipasavyo**: Zingatia usawa kati ya ukubwa wa cache na gharama
- **Fuata vipimo vya cache**: Tambua ufanisi wa cache
- **Jaribu na kazi yako**: Thibitisha kuwa cache inafaa kwa matumizi yako

## Mikakati ya Cache ya Watoa Huduma Mbalimbali {#cross-provider-caching-strategy}

### Mpangilio Mmoja (Unified Configuration) {#unified-configuration}

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

### Kugundua Mtoa Huduma (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Tumia mpangilio wa cache unaotegemea mtoa huduma
```

### Mkakati wa Kurudi Nyuma (Fallback Strategy) {#fallback-strategy}

```php
try {
    // Jaribu kuhifadhi kwa mtoa huduma mkuu
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Rudi nyuma kwa ombi lisilohifadhiwa
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Kuboresha Gharama (Cost Optimization) {#cost-optimization}

### Kuhesabu Akimatuzi (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Bei za kawaida (zinabadilika kulingana na mtoa huduma):
$cache_creation_cost = $cache_created_tokens * 0.00001; // Bei 10x nafuu
$cache_read_cost = $cache_read_tokens * 0.000001; // Bei 100x nafuu
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Akimatuzi yanayokadiriwa: \$$savings\n";
```

### Vidokezo vya Kuboresha (Optimization Tips) {#optimization-tips}

- **Hifadhi system prompts kubwa**: Akimatuzi kubwa zaidi ya gharama
- **Tumia muktadha upya**: Hifadhi waraka wa muktadha unaotumika mara kwa mara
- **Unganisha maombi**: Weka maombi yanayofanana pamoja ili kuongeza kupata cache
- **Fuata ufanisi wa cache**: Tambua akimatuzi halisi
- **Sawa TTL**: Zingatia usawa kati ya gharama na ubora

## Kutatua Matatizo (Troubleshooting) {#troubleshooting}

### Cache haitumiki {#cache-not-being-used}

- Thibitisha kuwa cache imewashwa katika mpangilio
- Angalia kuwa prompts ni sawa (cache inahitaji kufanana kabisa)
- Thibitisha kuwa cache haijapita muda wake
- Angalia mipaka ya cache maalum kwa mtoa huduma

### Kuunda cache kushindwa {#cache-creation-failing}

- Thibitisha kuwa ukubwa wa cache uko ndani ya mipaka ya mtoa huduma
- Angalia kuwa sintaks ya udhibiti wa cache ni sahihi
- Hakikisha mtoa huduma anasaidia cache kwa mfumo wako
- Pitia waraka wa mtoa huduma kwa mapungufu

### Gharama zisizotarajiwa {#unexpected-costs}

- Fuata uundaji wa cache dhidi ya tokens za kusoma cache
- Thibitisha kuwa cache inatumika kweli
- Angalia kwa ajili ya cache misses kutokana na mabadiliko ya prompts
- Zingatia kurekebisha TTL au mkakati wa cache

## Kulinganisha Watoa Huduma (Provider Comparison) {#provider-comparison}

| Kipengele | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API ya Cache | cachedContents | HTTP headers | Provider-specific | Cache control |
| Udhibiti wa TTL | Uwazi | Kupitia headers | Kulingana na mtoa huduma | Ephemeral/persistent |
| Ukubwa wa cache | 1M tokens | Kulingana na mtoa huduma | Kulingana na mtoa huduma | 1M tokens |
| Kupunguza gharama | 90% | 90% | Kulingana na mtoa huduma | 90% |
| Ufuatiliaji | Kina | Kupitia vipimo | Kulingana na mtoa huduma | Kupitia matumizi |

## Hatua Zijazo (Next Steps) {#next-steps}

1. **Chagua mtoa huduma wako**: Chagua kulingana na mahitaji yako
2. **Panga cache**: Weka upangilio wa cache unaotegemea mtoa huduma
3. **Jaribu cache**: Thibitisha kuwa inafanya kazi na prompts zako
4. **Fuata matumizi**: Tambua kupata cache na akimatuzi ya kuokoa
5. **Boresha**: Rekebisha TTL na mkakati wa cache kulingana na matokeo
