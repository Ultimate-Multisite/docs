---
title: Մատակարարին հարմարեցված Prompt քեշավորում
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Մատակարարին համապատասխան prompt caching

Superdav AI Agent v1.12.0-ը ներկայացնում է **մատակարարին համապատասխան prompt caching**, որը օպտիմալացնում է API-ի ծախսերն ու ուշացումը՝ տարբեր LLM մատակարարների միջև prompt-երը cache անելով։ Յուրաքանչյուր մատակարար ունի տարբեր cache մեխանիզմներ և կարգավորումներ։

## Ընդհանուր ակնարկ {#overview}

Prompt caching-ը թույլ է տալիս՝

- Cache անել մեծ, հաճախ օգտագործվող prompt-երը
- Նվազեցնել API-ի ծախսերը՝ խուսափելով կրկնվող մշակումից
- Բարելավել ուշացումը cache արված հարցումների համար
- Հստակորեն կառավարել cache-ի կյանքի ցիկլը

Տարբեր մատակարարներ cache-ը իրականացնում են տարբեր ձևերով՝

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt caching TTL-ով
- **OpenRouter**: Մատակարարին հատուկ caching
- **Vertex Anthropic**: Prompt caching cache control-ով

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini-ը տրամադրում է cache-ի հստակ կառավարում `cachedContents` API-ի միջոցով։

### Կարգավորում {#configuration}

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

### Cache արված prompt-ի ստեղծում {#creating-a-cached-prompt}

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

### Cache արված prompt-ի օգտագործում {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cache-ի կյանքի ցիկլ {#cache-lifecycle}

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

### Լավագույն գործելակերպեր Gemini-ի համար {#best-practices-for-gemini}

- **Սահմանեք համապատասխան TTL**: Հավասարակշռեք ծախսերի խնայողությունը և cache-ի հնացումը
- **Cache արեք system prompt-երը**: Նույն system prompt-ը վերօգտագործեք հարցումների միջև
- **Վերահսկեք cache-ի օգտագործումը**: Հետևեք, թե որ cache-երն են առավել շատ օգտագործվում
- **Մաքրեք ժամկետանց cache-երը**: Պարբերաբար ջնջեք չօգտագործվող cache-երը

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI-ն աջակցում է prompt caching՝ ավտոմատ TTL կառավարմամբ։

### Կարգավորում {#configuration-1}

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

### Caching-ի միացում {#enabling-caching}

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

### Cache վերնագրեր {#cache-headers}

Azure OpenAI-ն օգտագործում է HTTP վերնագրեր cache-ի կառավարման համար՝

```
Cache-Control: max_age=3600
```

Աջակցվող արժեքներ՝

- `max_age=<seconds>`: Cache անել նշված տևողությամբ
- `no_cache`: Չանել cache այս հարցումը
- `no_store`: Չանել cache և չվերօգտագործել

### Cache-ի օգտագործման վերահսկում {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Լավագույն գործելակերպեր Azure OpenAI-ի համար {#best-practices-for-azure-openai}

- **Օգտագործեք համահունչ prompt-եր**: Նույնական prompt-երը օգուտ են ստանում caching-ից
- **Սահմանեք ողջամիտ TTL**: Հավասարակշռեք ծախսը և թարմությունը
- **Վերահսկեք cache-ի չափորոշիչները**: Հետևեք cache-ի ստեղծմանն ընդդեմ հարվածների
- **Խմբավորեք նմանատիպ հարցումները**: Խմբավորեք հարցումները՝ cache-ի հարվածները առավելագույնի հասցնելու համար

## OpenRouter: Մատակարարին հատուկ caching {#openrouter-provider-specific-caching}

OpenRouter-ն աջակցում է caching-ին հիմքում գտնվող մատակարարների միջոցով (OpenAI, Anthropic և այլն)։

### Կարգավորում {#configuration-2}

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

### OpenRouter caching-ի օգտագործում {#using-openrouter-caching}

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

### Մատակարարին հատուկ տարբերակներ {#provider-specific-options}

Տարբեր մատակարարներ ունեն տարբեր caching մեխանիզմներ՝

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

### Լավագույն գործելակերպեր OpenRouter-ի համար {#best-practices-for-openrouter}

- **Իմացեք ձեր մատակարարի caching-ը**: Յուրաքանչյուր մատակարար ունի տարբեր մեխանիզմներ
- **Փորձարկեք caching-ի վարքագիծը**: Ստուգեք, որ caching-ը աշխատում է ձեր ընտրած մատակարարի հետ
- **Վերահսկեք ծախսերը**: Հետևեք caching-ից ստացված խնայողություններին
- **Օգտագործեք համահունչ մոդելներ**: Մոդելների փոխումը խափանում է cache-ի հարվածները

## Vertex Anthropic: Prompt Caching cache control-ով {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic-ը (Google Cloud) աջակցում է prompt caching-ին՝ հստակ cache control-ով։

### Կարգավորում {#configuration-3}

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

### Vertex Anthropic քեշավորման օգտագործումը {#using-vertex-anthropic-caching}

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

### Քեշի կառավարման տեսակներ {#cache-control-types}

- **ephemeral**: Քեշավորել հարցման տևողության համար (լռելյայն)
- **persistent**: Քեշավորել մի քանի հարցումների միջև (եթե աջակցվում է)

### Քեշի օգտագործման մոնիթորինգ {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic-ի լավագույն գործելակերպեր {#best-practices-for-vertex-anthropic}

- **Օգտագործեք ephemeral քեշավորում**: Հարմար է մեկ սեսիայի քեշավորման համար
- **Սահմանեք max_tokens-ը համապատասխան կերպով**: Հավասարակշռեք քեշի չափը և արժեքը
- **Վերահսկեք քեշի մետրիկաները**: Հետևեք քեշի արդյունավետությանը
- **Փորձարկեք ձեր ծանրաբեռնվածությամբ**: Ստուգեք, որ քեշավորումը օգտակար է ձեր օգտագործման դեպքի համար

## Մատակարարների միջև քեշավորման ռազմավարություն {#cross-provider-caching-strategy}

### Միասնական կազմաձևում {#unified-configuration}

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

### Մատակարարի հայտնաբերում {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Պահուստային ռազմավարություն {#fallback-strategy}

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

## Արժեքի օպտիմալացում {#cost-optimization}

### Խնայողությունների հաշվարկ {#calculate-savings}

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

### Օպտիմալացման խորհուրդներ {#optimization-tips}

- **Քեշավորեք մեծ համակարգային հուշումները**: Ամենամեծ արժեքային խնայողությունները
- **Վերօգտագործեք համատեքստը**: Քեշավորեք հաճախ օգտագործվող համատեքստային փաստաթղթերը
- **Խմբավորեք հարցումները**: Միավորեք նմանատիպ հարցումները՝ քեշի համընկնումները առավելագույնի հասցնելու համար
- **Վերահսկեք քեշի արդյունավետությունը**: Հետևեք իրական խնայողություններին
- **Կարգավորեք TTL-ը**: Հավասարակշռեք արժեքը և թարմությունը

## Խնդիրների լուծում {#troubleshooting}

### Քեշը չի օգտագործվում {#cache-not-being-used}

- Ստուգեք, որ քեշավորումը միացված է կազմաձևում
- Ստուգեք, որ հուշումները նույնական են (քեշավորումը պահանջում է ճշգրիտ համընկնում)
- Ստուգեք, որ քեշի ժամկետը չի լրացել
- Ստուգեք մատակարարին հատուկ քեշի սահմանաչափերը

### Քեշի ստեղծումը ձախողվում է {#cache-creation-failing}

- Ստուգեք, որ քեշի չափը մատակարարի սահմանաչափերի մեջ է
- Ստուգեք, որ քեշի կառավարման շարահյուսությունը ճիշտ է
- Համոզվեք, որ մատակարարը աջակցում է քեշավորմանը ձեր մոդելի համար
- Վերանայեք մատակարարի փաստաթղթերը սահմանափակումների համար

### Անսպասելի ծախսեր {#unexpected-costs}

- Վերահսկեք քեշի ստեղծման և քեշի ընթերցման token-ները
- Ստուգեք, որ քեշն իրականում օգտագործվում է
- Ստուգեք հուշումների տարբերակների պատճառով առաջացած քեշի վրիպումները
- Դիտարկեք TTL-ի կամ քեշի ռազմավարության կարգավորումը

## Մատակարարների համեմատություն {#provider-comparison}

| Հատկություն | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Քեշի API | cachedContents | HTTP headers | Մատակարարին հատուկ | Քեշի կառավարում |
| TTL-ի կառավարում | Բացահայտ | Header-ների միջոցով | Կախված մատակարարից | Ephemeral/persistent |
| Քեշի առավելագույն չափ | 1M token | Կախված մատակարարից | Կախված մատակարարից | 1M token |
| Արժեքի նվազեցում | 90% | 90% | Կախված մատակարարից | 90% |
| Մոնիթորինգ | Մանրամասն | Մետրիկաների միջոցով | Կախված մատակարարից | Օգտագործման միջոցով |

## Հաջորդ քայլերը {#next-steps}

1. **Ընտրեք ձեր մատակարարին**: Ընտրեք՝ հիմնվելով ձեր կարիքների վրա
2. **Կազմաձևեք քեշավորումը**: Կարգավորեք մատակարարին հատուկ քեշավորումը
3. **Փորձարկեք քեշավորումը**: Ստուգեք, որ այն աշխատում է ձեր հուշումների հետ
4. **Վերահսկեք օգտագործումը**: Հետևեք քեշի համընկնումներին և արժեքային խնայողություններին
5. **Օպտիմալացրեք**: Կարգավորեք TTL-ը և քեշի ռազմավարությունը՝ արդյունքների հիման վրա
