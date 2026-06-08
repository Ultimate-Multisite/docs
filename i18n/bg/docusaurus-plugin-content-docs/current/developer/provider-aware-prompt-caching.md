---
title: Поставчико-съобразно кеширане на промптове
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Кеширане на промптове, съзнателно към доставчика

Superdav AI Agent v1.12.0 въвежда **кеширане на промптове, съзнателно към доставчика** (provider-aware prompt caching), което оптимизира разходите за API и латентността, като кешира промптове през различни LLM доставчици. Всеки доставчик има различни механизми и конфигурации за кеширане.

## Преглед

С кеширане на промптове можете да:

- Кеширате големи, често използвани промптове
- Намалявате разходите за API, като избягвате излишна обработка
- Подобрявате латентността за кешираните заявки
- Управлявате цикъла на живот на кеша изрично

Различните доставчици имплементират кеширането по различен начин:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Кеширане на промптове с TTL
- **OpenRouter**: Кеширане специфично за доставчика
- **Vertex Anthropic**: Кеширане на промптове с контрол на кеша

## Google Gemini: API cachedContents

Google Gemini предоставя изрично управление на кеша чрез API `cachedContents`.

### Конфигурация

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 час в секунди
        'max_tokens' => 1000000, // Макс. токена за кеширане
    ],
];
```

### Създаване на кеширан промпт

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

// Връща: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Използване на кеширан промпт

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Жизнен цикъл на кеша

```php
// Изброяване на кешираните съдържания
$caches = $gemini->list_cached_contents();

// Получаване на детайли на кеша
$cache = $gemini->get_cached_content( 'abc123' );

// Продължаване на TTL на кеша
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Продължаване до 2 часа
);

// Изтриване на кеша
$gemini->delete_cached_content( 'abc123' );
```

### Най-добри практики за Gemini

- **Уставете подходящ TTL**: Балансирайте спестяването на разходи срещу остаряването на кеша
- **Кеширайте system промптове**: Преизползвайте един и същ system промпт при заявки
- **Наблюдавайте използването на кеша**: Проследявайте кои кешове се използват най-често
- **Почиствайте изтеглените кешове**: Изтривайте периодично неиспользованите кешове

## Azure OpenAI: Кеширане на промптове

Azure OpenAI поддържа кеширане на промптове с автоматично управление на TTL.

### Конфигурация

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

### Включване на кеширането

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

// Отговорът включва използването на кеша:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Кеш хедъри

Azure OpenAI използва HTTP хедъри за контрол на кеша:

```
Cache-Control: max_age=3600
```

Поддържани стойности:

- `max_age=<seconds>`: Кеширайте за зададена продължителност
- `no_cache`: Не кеширайте тази заявка
- `no_store`: Не кеширайте и не преизползвайте

### Наблюдаване на използването на кеша

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Създаване на кеш: $cache_tokens токена\n";
echo "Успешни кеш прегледи: $cache_hits токена\n";
```

### Най-добри практики за Azure OpenAI

- **Използвайте последователни промптове**: Идентичните промптове се възползват от кеширането
- **Уставете разумно TTL**: Балансирайте разходите срещу свежестта
- **Наблюдавайте метриките на кеша**: Проследявайте създаването срещу прегледите на кеша
- **Изпращайте заявки в пакет**: Групирайте заявките, за да максимизирате успеващите кеш прегледи

## OpenRouter: Кеширане специфично за доставчика

OpenRouter поддържа кеширане чрез базови доставчици (OpenAI, Anthropic и др.).

### Конфигурация

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Използване на кеширането на OpenAI
    ],
];
```

### Използване на кеширането на OpenRouter

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

### Опции специфични за доставчика

Различните доставчици имат различни механизми за кеширане:

```php
// Кеширане, съвместимо с OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Кеширане, съвместимо с Anthropic
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

### Най-добри практики за OpenRouter

- **Знайте кеширането на доставчика си**: Всеки доставчик има различни механизми
- **Тествайте поведението на кеша**: Проверете дали кеширането работи с избрания доставчик
- **Наблюдавайте разходите**: Проследявайте спестяванията от кеширането
- **Използвайте последователни модели**: Смяната на моделите прекъсва кеш хитовете

## Vertex Anthropic: Кеширане на промптове с контрол на кеша

Vertex Anthropic (Google Cloud) поддържа кеширане на промптове с изричен контрол на кеша.

### Конфигурация

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

### Използване на кеширането на Vertex Anthropic

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

// Отговорът включва метрики за кеша:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Типове контрол на кеша

- **ephemeral**: Кеширане за продължителност на заявката (по подразбиране)
- **persistent**: Кеширане през множество заявки (ако е поддържано)

### Наблюдаване на използването на кеша

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Създаден кеш: $cache_created токена\n";
echo "Прочет кеш: $cache_read токена\n";
```

### Най-добри практики за Vertex Anthropic

- **Използвайте ephemeral кеширане**: Добро за кеширане в рамките на една сесия
- **Уставете max_tokens подходящо**: Балансирайте размера на кеша срещу разходите
- **Наблюдавайте метриките на кеша**: Проследявайте ефективността на кеша
- **Тествайте с вашата работна натовареност**: Проверете дали кеширането подобрява случая на употреба

## Стратегия за кеширане между доставчици

### Унифицирана конфигурация

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

### Определяне на доставчика

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Използване на конфигурацията за кеширане специфична за доставчика
```

### Стратегия за отказ (Fallback Strategy)

```php
try {
    // Опит за кеширане с основния доставчик
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Отказ към заявка без кеширане
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Оптимизация на разходите

### Изчисляване на спестяванията

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Типични цени (променливи в зависимост от доставчика):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x по-евтино
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x по-евтино
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Оценени спестявания: \$$savings\n";
```

### Съвети за оптимизация

- **Кеширайте големи system промптове**: Най-големите спестявания на разходи
- **Преизползвайте контекста**: Кеширайте често използвани контекстни документи
- **Изпращайте заявки в пакет**: Групирайте подобни заявки, за да максимизирате кеш хитовете
- **Наблюдавайте ефективността на кеша**: Проследявайте реалните спестявания
- **Настройвайте TTL**: Балансирайте разходите срещу свежестта

## Отстраняване на неизправности

### Кешът не се използва

- Проверете дали кеширането е активирано в конфигурацията
- Проверете дали промптовете са идентични (кеширането изисква точна съвпадение)
- Проверете дали кешът не е изтекъл
- Проверете специфичните за доставчика лимити на кеша

### Неуспешно създаване на кеш

- Проверете дали размерът на кеша е в рамките на лимитите на доставчика
- Проверете дали синтаксисът на контрола на кеша е коректен
- Уверете се, че доставчикът поддържа кеширане за вашия модел
- Прегледайте документацията на доставчика за ограничения

### Неочаквани разходи

- Наблюдавайте създаването срещу прочването на токени в кеша
- Проверете дали кешът всъщност се използва
- Проверете за пропуски на кеш поради вариации в промптовете
- Нашете да настроите TTL или стратегия за кеширане

## Сравнение на доставчиците

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Следващи стъпки

1. **Изберете доставчика си**: Изберете въз основа на вашите нужди
2. **Конфигурирайте кеширането**: Настройте кеширане специфично за доставчика
3. **Тествайте кеширането**: Проверете дали работи с вашите промптове
4. **Наблюдавайте използването**: Проследете кеш хитовете и спестяванията на разходи
5. **Оптимизирайте**: Настройте TTL и стратегия за кеширане въз основа на резултатите
