---
title: Buforowanie Promptów Dostawczo-Świadome
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Buforowanie Promptów Zależne od Dostawcy

Superdav AI Agent v1.12.0 wprowadza **buforowanie promptów zależne od dostawcy** (provider-aware prompt caching), co optymalizuje koszty API i opóźnienia, buforując prompty w różnych dostawcach LLM. Każdy dostawca ma inne mechanizmy i konfiguracje buforowania.

## Przegląd {#overview}

Buforowanie promptów pozwala Ci:

- Buforować duże, często używane prompty
- Zmniejszyć koszty API, unikając powtórnej obróbki
- Poprawić opóźnienia dla żądań z bufora
- Zarządzać cyklem życia bufora w sposób jawny

Różne dostawcy implementują buforowanie inaczej:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Buforowanie promptów z TTL
- **OpenRouter**: Buforowanie specyficzne dla dostawcy
- **Vertex Anthropic**: Buforowanie promptów z kontrolą nad buforem (cache control)

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini zapewnia jawne zarządzanie buforem za pomocą API `cachedContents`.

### Konfiguracja {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 godzina w sekundach
        'max_tokens' => 1000000, // Maksymalna liczba tokenów do buforowania
    ],
];
```

### Tworzenie Buforowanego Promptu {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Jesteś pomocnym asystentem...',
        'context' => 'Duży dokument kontekstowy...',
        'ttl' => 3600,
    ]
);

// Zwraca: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Użycie Buforowanego Promptu {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Pytanie użytkownika tutaj',
    ]
);
```

### Cykl Życia Bufora {#cache-lifecycle}

```php
// Wyświetl buforowane treści
$caches = $gemini->list_cached_contents();

// Pobierz szczegóły bufora
$cache = $gemini->get_cached_content( 'abc123' );

// Przedłuż TTL bufora
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Przedłużenie na 2 godziny
);

// Usuń bufor
$gemini->delete_cached_content( 'abc123' );
```

### Najlepsze Praktyki dla Gemini {#best-practices-for-gemini}

- **Ustaw odpowiedni TTL**: Zrównoważ oszczędności kosztów z przestarzałością bufora
- **Buforuj systemowe prompty**: Ponownie używaj tego samego promptu systemowego w różnych żądaniach
- **Monitoruj użycie bufora**: Śledź, które buforowanie jest używane najczęściej
- **Czyszcz buforowane treści po wygaśnięciu**: Okresowo usuwaj nieużywane buforowanie

## Azure OpenAI: Buforowanie Promptów {#azure-openai-prompt-caching}

Azure OpenAI obsługuje buforowanie promptów z automatycznym zarządzaniem TTL.

### Konfiguracja {#configuration-1}

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

### Włączenie Buforowania {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Jesteś pomocnym asystentem...',
        'context' => 'Duży dokument kontekstowy...',
        'prompt' => 'Pytanie użytkownika tutaj',
        'cache_control' => 'max_age=3600',
    ]
);

// Odpowiedź zawiera informacje o użyciu bufora:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Nagłówki Bufora (Cache Headers) {#cache-headers}

Azure OpenAI używa nagłówków HTTP do kontroli bufora:

```
Cache-Control: max_age=3600
```

Obsługiwane wartości:

- `max_age=<sekundy>`: Buforowanie na określony czas
- `no_cache`: Nie buforuj tego żądania
- `no_store`: Nie buforuj i nie używaj ponownie

### Monitorowanie Użycia Bufora {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Tworzenie bufora: $cache_tokens tokenów\n";
echo "Użycie bufora: $cache_hits tokenów\n";
```

### Najlepsze Praktyki dla Azure OpenAI {#best-practices-for-azure-openai}

- **Używaj spójnych promptów**: Identyczne prompty korzystają z buforowania
- **Ustaw rozsądny TTL**: Zrównoważ koszt z świeżością danych
- **Monitoruj metryki bufora**: Śledź tworzenie vs. użycie bufora
- **Dziel żądania na partie**: Grupuj żądania, aby zmaksymalizować trafienia w bufor

## OpenRouter: Buforowanie Specyficzne dla Dostawcy {#openrouter-provider-specific-caching}

OpenRouter obsługuje buforowanie poprzez podstawowe dostawcy (OpenAI, Anthropic itp.).

### Konfiguracja {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Użyj buforowania OpenAI
    ],
];
```

### Użycie Buforowania OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Jesteś pomocnym asystentem...',
        'context' => 'Duży dokument kontekstowy...',
        'prompt' => 'Pytanie użytkownika tutaj',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Opcje Specyficzne dla Dostawcy {#provider-specific-options}

Różne dostawcy mają różne mechanizmy buforowania:

```php
// Buforowanie kompatybilne z OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Buforowanie kompatybilne z Anthropic
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

### Najlepsze Praktyki dla OpenRouter {#best-practices-for-openrouter}

- **Poznaj buforowanie swojego dostawcy**: Każdy dostawca ma inne mechanizmy
- **Testuj działanie buforowania**: Sprawdź, czy buforowanie działa z wybranym dostawcą
- **Monitoruj koszty**: Śledź oszczędności wynikające z buforowania
- **Używaj spójnych modeli**: Zmiana modelu powoduje utratę trafień w bufor

## Vertex Anthropic: Buforowanie Promptów z Kontrolą nad Buforem {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) obsługuje buforowanie promptów z jawną kontrolą nad buforem.

### Konfiguracja {#configuration-3}

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

### Użycie Buforowania Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Jesteś pomocnym asystentem...',
        'context' => 'Duży dokument kontekstowy...',
        'prompt' => 'Pytanie użytkownika tutaj',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// Odpowiedź zawiera metryki bufora:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Typy Kontroli Bufora {#cache-control-types}

- **ephemeral**: Buforowanie na czas trwania żądania (domyślne)
- **persistent**: Buforowanie przez wiele żądań (jeśli jest obsługiwane)

### Monitorowanie Użycia Bufora {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Bufor utworzony: $cache_created tokenów\n";
echo "Bufor odczytany: $cache_read tokenów\n";
```

### Najlepsze Praktyki dla Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Używaj buforowania efemerycznego**: Idealne do buforowania sesji
- **Ustaw max_tokens odpowiednio**: Zrównoważ rozmiar bufora z kosztem
- **Monitoruj metryki bufora**: Śledź skuteczność buforowania
- **Testuj na swoim obciążeniu**: Sprawdź, czy buforowanie jest korzystne dla Twojego przypadku użycia

## Strategia Buforowania Między Dostawcami {#cross-provider-caching-strategy}

### Ujednolicona Konfiguracja {#unified-configuration}

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

### Wykrywanie Dostawcy {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Użyj konfiguracji buforowania specyficznej dla dostawcy
```

### Strategia Awaryjna (Fallback) {#fallback-strategy}

```php
try {
    // Spróbuj buforowania z podstawowym dostawcą
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Powrót do żądania bez buforowania
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optymalizacja Kosztów {#cost-optimization}

### Obliczanie Oszczędności {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Typowe ceny (zmienne w zależności od dostawcy):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x taniej
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x taniej
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Szacowane oszczędności: \$$savings\n";
```

### Wskazówki Optymalizacyjne {#optimization-tips}

- **Buforuj duże prompty systemowe**: Największe oszczędności kosztów
- **Ponownie używaj kontekstu**: Buforuj często używane dokumenty kontekstowe
- **Dziel żądania na partie**: Grupuj podobne żądania, aby zmaksymalizować trafienia w bufor
- **Monitoruj skuteczność buforowania**: Śledź rzeczywiste oszczędności
- **Dostosuj TTL**: Zrównoważ koszt z świeżością danych

## Rozwiązywanie Problemów {#troubleshooting}

### Buforowanie nie jest używane {#cache-not-being-used}

- Sprawdź, czy buforowanie jest włączone w konfiguracji
- Upewnij się, że prompty są identyczne (buforowanie wymaga dokładnego dopasowania)
- Sprawdź, czy bufor nie wygasł
- Sprawdź limity buforowania specyficzne dla dostawcy

### Błąd tworzenia bufora {#cache-creation-failing}

- Sprawdź, czy rozmiar bufora mieści się w limitach dostawcy
- Upewnij się, że składnia kontroli bufora jest poprawna
- Upewnij się, że dostawca obsługuje buforowanie dla Twojego modelu
- Przejrzyj dokumentację dostawcy pod kątem ograniczeń

### Nieoczekiwane koszty {#unexpected-costs}

- Monitoruj tokeny tworzenia bufora vs. tokeny odczytu bufora
- Sprawdź, czy buforowanie jest faktycznie używane
- Sprawdź, czy nie ma braków bufora z powodu zmian w promptach
- Rozważ dostosowanie TTL lub strategii buforowania

## Porównanie Dostawców {#provider-comparison}

| Funkcja | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Bufora | cachedContents | Nagłówki HTTP | Specyficzne dla dostawcy | Kontrola bufora |
| Kontrola TTL | Jawna | Poprzez nagłówki | Zależne od dostawcy | Efemeryczne/trwałe |
| Max rozmiar bufora | 1M tokenów | Zależne od dostawcy | Zależne od dostawcy | 1M tokenów |
| Redukcja kosztów | 90% | 90% | Zależne od dostawcy | 90% |
| Monitorowanie | Szczegółowe | Poprzez metryki | Zależne od dostawcy | Poprzez użycie |

## Następne Kroki {#next-steps}

1. **Wybierz dostawcę**: Wybierz na podstawie swoich potrzeb
2. **Skonfiguruj buforowanie**: Ustaw buforowanie specyficzne dla dostawcy
3. **Testuj buforowanie**: Sprawdź, czy działa z Twoimi promptami
4. **Monitoruj użycie**: Śledź trafienia w bufor i oszczędności kosztów
5. **Optymalizuj**: Dostosuj TTL i strategię buforowania na podstawie wyników
