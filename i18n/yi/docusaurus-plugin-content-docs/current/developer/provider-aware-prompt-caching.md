---
title: פּראַוויידער־באַוווּסטע פּראָמפּט־קאַשינג
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# צושטעלער־באַוואוסטער פּראָמפּט־קאַשינג

Superdav AI Agent v1.12.0 פֿירט אַרײַן **צושטעלער־באַוואוסטן פּראָמפּט־קאַשינג**, וואָס אָפּטימיזירט API קאָסטן און לאַטענץ דורך קאַשן פּראָמפּטן איבער פֿאַרשידענע LLM צושטעלער. יעדער צושטעלער האָט אַנדערע קאַשינג־מעכאַניזמען און קאָנפֿיגוראַציעס.

## איבערבליק {#overview}

פּראָמפּט־קאַשינג לאָזט אײַך:

- קאַשן גרויסע, אָפֿט־גענוצטע פּראָמפּטן
- פֿאַרקלענערן API קאָסטן דורך אויסמײַדן איבעריקע באַאַרבעטונג
- פֿאַרבעסערן לאַטענץ פֿאַר געקאַשטע בקשות
- פֿאַרוואַלטן דעם קאַש־לעבנסציקל בפֿירוש

פֿאַרשידענע צושטעלער אימפּלימענטירן קאַשינג אַנדערש:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: פּראָמפּט־קאַשינג מיט TTL
- **OpenRouter**: צושטעלער־ספּעציפֿישער קאַשינג
- **Vertex Anthropic**: פּראָמפּט־קאַשינג מיט קאַש־קאָנטראָל

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini גיט בפֿירושע קאַש־פֿאַרוואַלטונג דורך דעם `cachedContents` API.

### קאָנפֿיגוראַציע {#configuration}

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

### שאַפֿן אַ געקאַשטן פּראָמפּט {#creating-a-cached-prompt}

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

### ניצן אַ געקאַשטן פּראָמפּט {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### קאַש־לעבנסציקל {#cache-lifecycle}

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

### בעסטע פּראַקטיקעס פֿאַר Gemini {#best-practices-for-gemini}

- **שטעלט פּאַסיקן TTL**: באַלאַנסירט קאָסטן־אײַנשפּאָרונגען קעגן קאַש־פֿאַרעלטערונג
- **קאַשט סיסטעם־פּראָמפּטן**: ניצט ווידער דעם זעלבן סיסטעם־פּראָמפּט איבער בקשות
- **מאָניטאָרט קאַש־באַניץ**: נאָכפֿאָלגט וועלכע קאַשן ווערן מערסט גענוצט
- **רוימט אויס אויסגעלאָפֿענע קאַשן**: מעקט פּעריאָדיש נישט־גענוצטע קאַשן

## Azure OpenAI: פּראָמפּט־קאַשינג {#azure-openai-prompt-caching}

Azure OpenAI שטיצט פּראָמפּט־קאַשינג מיט אויטאָמאַטישער TTL־פֿאַרוואַלטונג.

### קאָנפֿיגוראַציע {#configuration-1}

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

### אַקטיווירן קאַשינג {#enabling-caching}

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

### קאַש־קעפּלעך {#cache-headers}

Azure OpenAI ניצט HTTP קעפּלעך פֿאַר קאַש־קאָנטראָל:

```
Cache-Control: max_age=3600
```

געשטיצטע ווערטן:

- `max_age=<seconds>`: קאַשן פֿאַר דער ספּעציפֿיצירטער געדויער
- `no_cache`: נישט קאַשן די בקשה
- `no_store`: נישט קאַשן און נישט ווידערניצן

### מאָניטאָרן קאַש־באַניץ {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### בעסטע פּראַקטיקעס פֿאַר Azure OpenAI {#best-practices-for-azure-openai}

- **ניצט קאָנסיסטענטע פּראָמפּטן**: אידענטישע פּראָמפּטן האָבן נוץ פֿון קאַשינג
- **שטעלט אַ גלײַכלעכן TTL**: באַלאַנסירט קאָסטן קעגן פֿרישקייט
- **מאָניטאָרט קאַש־מעטריקן**: נאָכפֿאָלגט קאַש־שאַפֿונג קעגן טרעפֿונגען
- **באַטשט ענלעכע בקשות**: גרופּירט בקשות כּדי צו מאַקסימיזירן קאַש־טרעפֿונגען

## OpenRouter: צושטעלער־ספּעציפֿישער קאַשינג {#openrouter-provider-specific-caching}

OpenRouter שטיצט קאַשינג דורך אונטערליגנדיקע צושטעלער (OpenAI, Anthropic, אאַז״ו).

### קאָנפֿיגוראַציע {#configuration-2}

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

### ניצן OpenRouter קאַשינג {#using-openrouter-caching}

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

### צושטעלער־ספּעציפֿישע אָפּציעס {#provider-specific-options}

פֿאַרשידענע צושטעלער האָבן פֿאַרשידענע קאַשינג־מעכאַניזמען:

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

### בעסטע פּראַקטיקעס פֿאַר OpenRouter {#best-practices-for-openrouter}

- **קענט דעם קאַשינג פֿון אײַער צושטעלער**: יעדער צושטעלער האָט אַנדערע מעכאַניזמען
- **טעסט קאַשינג־פֿירונג**: באַשטעטיקט אַז קאַשינג אַרבעט מיט אײַער אויסגעקליבענעם צושטעלער
- **מאָניטאָרט קאָסטן**: נאָכפֿאָלגט אײַנשפּאָרונגען פֿון קאַשינג
- **ניצט קאָנסיסטענטע מאָדעלן**: בײַטן מאָדעלן צעברעכט קאַש־טרעפֿונגען

## Vertex Anthropic: פּראָמפּט־קאַשינג מיט קאַש־קאָנטראָל {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) שטיצט פּראָמפּט־קאַשינג מיט בפֿירושן קאַש־קאָנטראָל.

### קאָנפֿיגוראַציע {#configuration-3}

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

### ניצן Vertex Anthropic קאַשינג {#using-vertex-anthropic-caching}

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

### קאַש־קאָנטראָל־טיפּן {#cache-control-types}

- **צײַטווײַליק**: קאַשן פֿאַר דער געדויער פֿון דער בקשה (סטאַנדאַרט)
- **שטענדיק**: קאַשן איבער עטלעכע בקשות (אויב געשטיצט)

### מאָניטאָרן קאַש־באַניץ {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### בעסטע פּראַקטיקעס פֿאַר Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **ניצט צײַטווײַליקן קאַשינג**: גוט פֿאַר איין־סעסיע קאַשינג
- **שטעלט max_tokens פּאַסיק**: באַלאַנסירט קאַש־גרייס קעגן קאָסטן
- **מאָניטאָרט קאַש־מעטריקן**: נאָכפֿאָלגט קאַש־ווירקזאַמקייט
- **טעסט מיט אײַער אַרבעטסמאַסע**: באַשטעטיקט אַז קאַשינג ברענגט נוץ פֿאַר אײַער באַניץ־פֿאַל

## קרײַץ־צושטעלער קאַשינג־סטראַטעגיע {#cross-provider-caching-strategy}

### פֿאַראייניקטע קאָנפֿיגוראַציע {#unified-configuration}

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

### דערקענען דעם צושטעלער {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### רעזערוו־סטראַטעגיע {#fallback-strategy}

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

## קאָסטן־אָפּטימיזאַציע {#cost-optimization}

### רעכענען אײַנשפּאָרונגען {#calculate-savings}

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

### אָפּטימיזאַציע־עצות {#optimization-tips}

- **קאַשט גרויסע סיסטעם־פּראָמפּטן**: די גרעסטע קאָסטן־אײַנשפּאָרונגען
- **ניצט ווידער קאָנטעקסט**: קאַשט אָפֿט־גענוצטע קאָנטעקסט־דאָקומענטן
- **באַטשט בקשות**: גרופּירט ענלעכע בקשות כּדי צו מאַקסימיזירן קאַש־טרעפֿונגען
- **מאָניטאָרט קאַש־ווירקזאַמקייט**: נאָכפֿאָלגט אמתע אײַנשפּאָרונגען
- **פּאַסט צו TTL**: באַלאַנסירט קאָסטן קעגן פֿרישקייט

## פּראָבלעם־לייזונג {#troubleshooting}

### קאַש ווערט נישט גענוצט {#cache-not-being-used}

- באַשטעטיקט אַז קאַשינג איז אַקטיווירט אין דער קאָנפֿיגוראַציע
- קאָנטראָלירט אַז פּראָמפּטן זענען אידענטיש (קאַשינג דאַרף אַן עקסאַקטן צופּאַס)
- באַשטעטיקט אַז דער קאַש איז נישט אויסגעלאָפֿן
- קאָנטראָלירט צושטעלער־ספּעציפֿישע קאַש־גרענעצן

### קאַש־שאַפֿונג פֿאַלט דורכ {#cache-creation-failing}

- באַשטעטיקט אַז די קאַש־גרייס איז אין די צושטעלער־גרענעצן
- קאָנטראָלירט אַז די קאַש־קאָנטראָל־סינטאַקס איז ריכטיק
- פֿאַרזיכערט אַז דער צושטעלער שטיצט קאַשינג פֿאַר אײַער מאָדעל
- איבערקוקט די צושטעלער־דאָקומענטאַציע פֿאַר באַגרענעצונגען

### אומדערוואַרטע קאָסטן {#unexpected-costs}

- מאָניטאָרט קאַש־שאַפֿונג קעגן קאַש־לייענען־טאָקענס
- באַשטעטיקט אַז דער קאַש ווערט טאַקע גענוצט
- קאָנטראָלירט אויף קאַש־פֿאַרפֿעלונגען צוליב פּראָמפּט־וואַריאַציעס
- באַטראַכט צופּאַסן TTL אָדער די קאַש־סטראַטעגיע

## צושטעלער־פֿאַרגלײַך {#provider-comparison}

| שטריך | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| קאַש API | cachedContents | HTTP קעפּלעך | צושטעלער־ספּעציפֿיש | קאַש־קאָנטראָל |
| TTL־קאָנטראָל | בפֿירוש | דורך קעפּלעך | אָפענגיק אויפֿן צושטעלער | צײַטווײַליק/שטענדיק |
| מאַקסימום קאַש־גרייס | 1M טאָקענס | אָפענגיק אויפֿן צושטעלער | אָפענגיק אויפֿן צושטעלער | 1M טאָקענס |
| קאָסטן־רעדוקציע | 90% | 90% | אָפענגיק אויפֿן צושטעלער | 90% |
| מאָניטאָרינג | דעטאַלירט | דורך מעטריקן | אָפענגיק אויפֿן צושטעלער | דורך באַניץ |

## קומעדיקע שריט {#next-steps}

1. **קלײַבט אײַער צושטעלער**: קלײַבט לויט אײַערע באַדערפֿענישן
2. **קאָנפֿיגורירט קאַשינג**: שטעלט אויף צושטעלער־ספּעציפֿישן קאַשינג
3. **טעסט קאַשינג**: באַשטעטיקט אַז עס אַרבעט מיט אײַערע פּראָמפּטן
4. **מאָניטאָרט באַניץ**: נאָכפֿאָלגט קאַש־טרעפֿונגען און קאָסטן־אײַנשפּאָרונגען
5. **אָפּטימיזירט**: פּאַסט צו TTL און די קאַש־סטראַטעגיע לויט די רעזולטאַטן
