---
title: Кешування промптів із обізнаністю провайдера
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кешування промптів з урахуванням провайдера

Superdav AI Agent v1.12.0 запроваджує **кешування промптів з урахуванням провайдера**, що оптимізує витрати на API та зменшує затримку, кешуючи промпти для різних LLM провайдерів. Кожен провайдер має свої механізми та конфігурації кешування.

## Огляд {#overview}

Кешування промптів дозволяє вам:

- Кешувати великі, часто використовувані промпти
- Зменшити витрати на API, уникаючи повторної обробки
- Покращити затримку для кешованих запитів
- Явно керувати життєвим циклом кешу

Різні провайдери реалізують кешування по-різному:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Кешування промптів із TTL
- **OpenRouter**: Кешування, специфічне для провайдера
- **Vertex Anthropic**: Кешування промптів із керуванням кешем

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini забезпечує явне керування кешем через API `cachedContents`.

### Конфігурація {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 година у секундах
        'max_tokens' => 1000000, // Максимальна кількість токенів для кешування
    ],
];
```

### Створення кешованого промпту {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Ви — корисний помічник...',
        'context' => 'Великий контекстний документ...',
        'ttl' => 3600,
    ]
);

// Повертає: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Використання кешованого промпту {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Питання користувача тут',
    ]
);
```

### Життєвий цикл кешу {#cache-lifecycle}

```php
// Список кешованих вмістів
$caches = $gemini->list_cached_contents();

// Отримати деталі кешу
$cache = $gemini->get_cached_content( 'abc123' );

// Подовжити TTL кешу
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Подовжити до 2 годин
);

// Видалити кеш
$gemini->delete_cached_content( 'abc123' );
```

### Найкращі практики для Gemini {#best-practices-for-gemini}

- **Встановлюйте відповідний TTL**: Збалансуйте економію коштів та застарілість кешу
- **Кешуйте системні промпти**: Повторно використовуйте один і той самий системний промпт для запитів
- **Моніторте використання кешу**: Відстежуйте, які кеші використовуються найбільше
- **Очищайте прострочені кеші**: Періодично видаляйте невикористовувані кеші

## Azure OpenAI: Кешування промптів {#azure-openai-prompt-caching}

Azure OpenAI підтримує кешування промптів із автоматичним керуванням TTL.

### Конфігурація {#configuration-1}

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

### Увімкнення кешування {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Ви — корисний помічник...',
        'context' => 'Великий контекстний документ...',
        'prompt' => 'Питання користувача тут',
        'cache_control' => 'max_age=3600',
    ]
);

// Відповідь включає використання кешу:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### HTTP-заголовки кешу {#cache-headers}

Azure OpenAI використовує HTTP-заголовки для керування кешем:

```
Cache-Control: max_age=3600
```

Підтримувані значення:

- `max_age=<seconds>`: Кешувати протягом заданого періоду
- `no_cache`: Не кешувати цей запит
- `no_store`: Не кешувати і не повторно використовувати

### Моніторинг використання кешу {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Створення кешу: $cache_tokens токенів\n";
echo "Збіги кешу: $cache_hits токенів\n";
```

### Найкращі практики для Azure OpenAI {#best-practices-for-azure-openai}

- **Використовуйте узгоджені промпти**: Ідентичні промпти виграють від кешування
- **Встановлюйте розумний TTL**: Збалансуйте витрати та актуальність
- **Моніторте метрики кешу**: Відстежуйте створення кешу проти збігів
- **Пакетуйте схожі запити**: Групуйте запити, щоб максимізувати збіги кешу

## OpenRouter: Кешування, специфічне для провайдера {#openrouter-provider-specific-caching}

OpenRouter підтримує кешування через базових провайдерів (OpenAI, Anthropic тощо).

### Конфігурація {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Використовуємо кешування OpenAI
    ],
];
```

### Використання кешування OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Ви — корисний помічник...',
        'context' => 'Великий контекстний документ...',
        'prompt' => 'Питання користувача тут',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Опції, специфічні для провайдера {#provider-specific-options}

Різні провайдери мають різні механізми кешування:

```php
// Кешування, сумісне з OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Кешування, сумісне з Anthropic
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

### Найкращі практики для OpenRouter {#best-practices-for-openrouter}

- **Знайте кешування свого провайдера**: Кожен провайдер має різні механізми
- **Тестуйте поведінку кешування**: Переконайтеся, що кешування працює з обраним провайдером
- **Моніторте витрати**: Відстежуйте економію від кешування
- **Використовуйте узгоджені моделі**: Зміна моделей порушує збіги кешу

## Vertex Anthropic: Кешування промптів із керуванням кешем {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) підтримує кешування промптів із явним керуванням кешем.

### Конфігурація {#configuration-3}

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

### Використання кешування Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Ви — корисний помічник...',
        'context' => 'Великий контекстний документ...',
        'prompt' => 'Питання користувача тут',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Відповідь включає метрики кешу:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Типи керування кешем {#cache-control-types}

- **ephemeral**: Кешування на час запиту (за замовчуванням)
- **persistent**: Кешування між кількома запитами (якщо підтримується)

### Моніторинг використання кешу {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Створено кеш: $cache_created токенів\n";
echo "Прочитано кеш: $cache_read токенів\n";
```

### Найкращі практики для Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Використовуйте ефемерне кешування**: Добре для кешування в межах однієї сесії
- **Встановлюйте max_tokens відповідним чином**: Збалансуйте розмір кешу та витрати
- **Моніторте метрики кешу**: Відстежуйте ефективність кешування
- **Тестуйте на вашому робочому навантаженні**: Переконайтеся, що кешування вигідно для вашого випадку використання

## Стратегія кешування між провайдерами {#cross-provider-caching-strategy}

### Уніфікована конфігурація {#unified-configuration}

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

### Виявлення провайдера {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Використовуємо конфігурацію кешування, специфічну для провайдера
```

### Стратегія відмовостійкості (Fallback) {#fallback-strategy}

```php
try {
    // Спробувати кешування з основним провайдером
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Відхилитися до запиту без кешування
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Оптимізація витрат {#cost-optimization}

### Розрахунок економії {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Типова вартість (змінна для провайдера):
$cache_creation_cost = $cache_created_tokens * 0.00001; // В 10 разів дешевше
$cache_read_cost = $cache_read_tokens * 0.000001; // У 100 разів дешевше
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Орієнтовна економія: \$$savings\n";
```

### Поради щодо оптимізації {#optimization-tips}

- **Кешуйте великі системні промпти**: Найбільша економія коштів
- **Повторно використовуйте контекст**: Кешуйте часто використовувані контекстні документи
- **Пакетуйте запити**: Групуйте схожі запити, щоб максимізувати збіги кешу
- **Моніторте ефективність кешу**: Відстежуйте фактичну економію
- **Коригуйте TTL**: Збалансуйте витрати та актуальність

## Усунення несправностей {#troubleshooting}

### Кеш не використовується {#cache-not-being-used}

- Перевірте, чи увімкнено кешування в конфігурації
- Переконайтеся, що промпти ідентичні (кешування вимагає точного збігу)
- Перевірте, що кеш не прострочений
- Перевірте обмеження кешування, специфічні для провайдера

### Збій створення кешу {#cache-creation-failing}

- Перевірте, чи розмір кешу знаходиться в межах лімітів провайдера
- Переконайтеся, що синтаксис керування кешем правильний
- Переконайтеся, що провайдер підтримує кешування для вашої моделі
- Перегляньте документацію провайдера щодо обмежень

### Несподівані витрати {#unexpected-costs}

- Моніторте токени створення кешу проти токенів читання кешу
- Переконайтеся, що кеш дійсно використовується
- Перевірте наявність пропусків кешу через варіації промптів
- Розгляньте коригування TTL або стратегії кешування

## Порівняння провайдерів {#provider-comparison}

| Функція | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API кешу | cachedContents | HTTP headers | Специфічний для провайдера | Cache control |
| Керування TTL | Явне | Через заголовки | Залежить від провайдера | Ефемерне/постійне |
| Макс. розмір кешу | 1M токенів | Залежить від провайдера | Залежить від провайдера | 1M токенів |
| Зменшення витрат | 90% | 90% | Залежить від провайдера | 90% |
| Моніторинг | Деталізований | Через метрики | Залежить від провайдера | Через використання |

## Наступні кроки {#next-steps}

Необхідно перевірити відповідність,
Необхідно перевірити відповідність
