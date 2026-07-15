---
title: Провайдерны исәпкә алган промпт кэшлау
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Провайдерны исәпкә алган Prompt Caching

Superdav AI Agent v1.12.0 **провайдерны исәпкә алган prompt caching** кертә; ул төрле LLM провайдерлары арасында promptларны кэшлап, API чыгымнарын һәм тоткарлыкны оптимальләштерә. Һәр провайдерның кэшлау механизмнары һәм көйләнмәләре төрле.

## Гомуми күзәтү {#overview}

Prompt caching сезгә түбәндәгеләрне мөмкин итә:

- Зур, еш кулланыла торган promptларны кэшлау
- Кабат эшкәртүдән качып, API чыгымнарын киметү
- Кэшланган сораулар өчен тоткарлыкны яхшырту
- Кэшның яшәү циклын ачык итеп идарә итү

Төрле провайдерлар кэшлауны төрлечә гамәлгә ашыра:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL белән prompt caching
- **OpenRouter**: Провайдерга хас кэшлау
- **Vertex Anthropic**: Кэш контроле белән prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini `cachedContents` API аша ачык кэш идарәсен бирә.

### Көйләү {#configuration}

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

### Кэшланган prompt булдыру {#creating-a-cached-prompt}

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

### Кэшланган prompt куллану {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Кэшның яшәү циклы {#cache-lifecycle}

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

### Gemini өчен иң яхшы гамәлләр {#best-practices-for-gemini}

- **Тиешле TTL куегыз**: Чыгымнарны экономияләү белән кэшның искерүе арасында баланс табыгыз
- **Система promptларын кэшлагыз**: Бер үк система promptын сораулар арасында кабат кулланыгыз
- **Кэш кулланылышын күзәтегез**: Кайсы кэшларның иң күп кулланылуын күзәтегез
- **Вакыты чыккан кэшларны чистартыгыз**: Кулланылмый торган кэшларны вакыт-вакыт бетерегез

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI автомат TTL идарәсе белән prompt caching хуплый.

### Көйләү {#configuration-1}

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

### Кэшлауны кабызу {#enabling-caching}

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

### Кэш башлыклары {#cache-headers}

Azure OpenAI кэш контроле өчен HTTP башлыкларын куллана:

```
Cache-Control: max_age=3600
```

Хуплана торган кыйммәтләр:

- `max_age=<seconds>`: Күрсәтелгән вакыт дәвамында кэшлау
- `no_cache`: Бу сорауны кэшламаска
- `no_store`: Кэшламаска һәм кабат кулланмаска

### Кэш кулланылышын күзәтү {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI өчен иң яхшы гамәлләр {#best-practices-for-azure-openai}

- **Эзлекле promptлар кулланыгыз**: Бер үк promptлар кэшлаудан файда күрә
- **Акыллы TTL куегыз**: Чыгым белән яңалык арасында баланс табыгыз
- **Кэш метрикаларын күзәтегез**: Кэш булдыруны һәм туры килүләрне күзәтегез
- **Охшаш сорауларны төркемләгез**: Кэш туры килүләрен максимальләштерү өчен сорауларны төркемләгез

## OpenRouter: Провайдерга хас кэшлау {#openrouter-provider-specific-caching}

OpenRouter төп провайдерлар (OpenAI, Anthropic һ.б.) аша кэшлауны хуплый.

### Көйләү {#configuration-2}

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

### OpenRouter кэшлавын куллану {#using-openrouter-caching}

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

### Провайдерга хас вариантлар {#provider-specific-options}

Төрле провайдерларның кэшлау механизмнары төрле:

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

### OpenRouter өчен иң яхшы гамәлләр {#best-practices-for-openrouter}

- **Провайдерыгызның кэшлавын белегез**: Һәр провайдерның механизмнары төрле
- **Кэшлау тәртибен сынагыз**: Сайланган провайдерыгыз белән кэшлауның эшләвен тикшерегез
- **Чыгымнарны күзәтегез**: Кэшлаудан килгән экономияне күзәтегез
- **Эзлекле модельләр кулланыгыз**: Модельләрне алыштыру кэш туры килүләрен өзә

## Vertex Anthropic: Кэш контроле белән Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ачык кэш контроле белән prompt caching хуплый.

### Көйләү {#configuration-3}

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

### Vertex Anthropic кэшлауны куллану {#using-vertex-anthropic-caching}

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

### Кэш белән идарә итү төрләре {#cache-control-types}

- **ephemeral**: сорау дәвамында кэшлау (килешү буенча)
- **persistent**: берничә сорау арасында кэшлау (әгәр тәэмин ителсә)

### Кэш кулланылышын күзәтү {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic өчен иң яхшы тәҗрибәләр {#best-practices-for-vertex-anthropic}

- **Вакытлы кэшлауны кулланыгыз**: бер сессияле кэшлау өчен яхшы
- **max_tokens тиешенчә көйләгез**: кэш күләме белән бәя арасында баланс саклагыз
- **Кэш метрикаларын күзәтегез**: кэш нәтиҗәлелеген күзәтегез
- **Үз эш йөкләнешегез белән сынагыз**: кэшлау сезнең куллану очрагыгызга файда китерүен тикшерегез

## Провайдерлар арасында кэшлау стратегиясе {#cross-provider-caching-strategy}

### Бердәм конфигурация {#unified-configuration}

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

### Провайдерны ачыклау {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Резерв стратегия {#fallback-strategy}

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

## Чыгымнарны оптимальләштерү {#cost-optimization}

### Экономияне исәпләү {#calculate-savings}

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

### Оптимальләштерү киңәшләре {#optimization-tips}

- **Зур система promptларын кэшлагыз**: иң зур чыгым экономиясе
- **Контекстны кабат кулланыгыз**: еш кулланыла торган контекст документларын кэшлагыз
- **Сорауларны пакетлагыз**: кэш туры килүләрен арттыру өчен охшаш сорауларны төркемләгез
- **Кэш нәтиҗәлелеген күзәтегез**: чын экономияне күзәтегез
- **TTL көйләгез**: бәя белән яңалык арасында баланс саклагыз

## Проблемаларны хәл итү {#troubleshooting}

### Кэш кулланылмый {#cache-not-being-used}

- Конфигурациядә кэшлау кабызылганын тикшерегез
- Promptларның бертөрле булуын тикшерегез (кэшлау төгәл туры килүне таләп итә)
- Кэшның вакыты чыкмаганын тикшерегез
- Провайдерга хас кэш чикләрен тикшерегез

### Кэш булдыру уңышсыз {#cache-creation-failing}

- Кэш күләме провайдер чикләре эчендә булуын тикшерегез
- Кэш белән идарә итү синтаксисы дөрес булуын тикшерегез
- Провайдер сезнең модель өчен кэшлауны тәэмин итүенә инаныгыз
- Чикләүләр өчен провайдер документациясен карап чыгыгыз

### Көтелмәгән чыгымнар {#unexpected-costs}

- Кэш булдыру tokenнарын кэш уку tokenнары белән чагыштырып күзәтегез
- Кэш чыннан да кулланылуын тикшерегез
- Prompt үзгәрешләре аркасында кэш туры килмәүләрен тикшерегез
- TTL яки кэш стратегиясен көйләүне карагыз

## Провайдерларны чагыштыру {#provider-comparison}

| Үзенчәлек | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Кэш API | cachedContents | HTTP headers | Провайдерга хас | Кэш белән идарә итү |
| TTL белән идарә итү | Ачык | Headers аша | Провайдерга бәйле | Вакытлы/даими |
| Максималь кэш күләме | 1M token | Провайдерга бәйле | Провайдерга бәйле | 1M token |
| Чыгымны киметү | 90% | 90% | Провайдерга бәйле | 90% |
| Күзәтү | Җентекле | Метрикалар аша | Провайдерга бәйле | Кулланылыш аша |

## Киләсе адымнар {#next-steps}

1. **Провайдерыгызны сайлагыз**: ихтыяҗларыгызга нигезләнеп сайлагыз
2. **Кэшлауны конфигурацияләгез**: провайдерга хас кэшлауны көйләгез
3. **Кэшлауны сынагыз**: аның promptларыгыз белән эшләвен тикшерегез
4. **Кулланылышны күзәтегез**: кэш туры килүләрен һәм чыгым экономиясен күзәтегез
5. **Оптимальләштерегез**: нәтиҗәләргә нигезләнеп TTL һәм кэш стратегиясен көйләгез
