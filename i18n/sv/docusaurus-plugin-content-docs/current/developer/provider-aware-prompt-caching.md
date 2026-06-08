---
title: Provider-Aware Prompt Caching
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Prompt-caching med provider-medvetenhet

Superdav AI Agent v1.12.0 introducerar **provider-aware prompt caching**, vilket optimerar API-kostnader och latens genom att cacha prompts över olika LLM-leverantörer. Varje leverantör har olika cachemekanismer och konfigurationer.

## Översikt

Prompt-caching gör att du kan:

- Cacha stora, ofta använda prompts
- Minska API-kostnader genom att undvika redundant bearbetning
- Förbättra latensen för cachade anrop
- Hantera cachelivscykeln explicit

Olika leverantörer implementerar caching på olika sätt:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Prompt-caching med TTL
- **OpenRouter**: Provider-specifikt caching
- **Vertex Anthropic**: Prompt-caching med cache control

## Google Gemini: cachedContents API

Google Gemini erbjuder explicit cachehantering via `cachedContents` API.

### Konfiguration

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

### Skapa en cachad prompt

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

### Använda en cachad prompt

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Cachelivscykel

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

### Bästa praxis för Gemini

- **Ställ in lämpligt TTL**: Balansera kostnadsbesparingar mot cache-föråldring
- **Cacha systemprompts**: Återanvänd samma systemprompt i flera anrop
- **Övervaka cacheanvändning**: Spåra vilka cache som används mest
- **Rensa utgångna cache**: Radera regelbundet oanvända cache

## Azure OpenAI: Prompt-caching

Azure OpenAI stöder prompt-caching med automatisk TTL-hantering.

### Konfiguration

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

### Aktivera caching

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

### Cache-headers

Azure OpenAI använder HTTP-headers för cachekontroll:

```
Cache-Control: max_age=3600
```

Stödde värden:

- `max_age=<seconds>`: Cache i specificerad varaktighet
- `no_cache`: Cacha inte detta anrop
- `no_store`: Cacha inte och återanvänd inte

### Övervaka cacheanvändning

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Bästa praxis för Azure OpenAI

- **Använd konsekventa prompts**: Identiska prompts gynnas av caching
- **Ställ in rimligt TTL**: Balansera kostnad mot aktualitet
- **Övervaka cachemetriker**: Spåra cacheskapande kontra träffar
- **Batcha liknande anrop**: Gruppera anrop för att maximera cacheträffarna

## OpenRouter: Provider-specifikt caching

OpenRouter stöder caching via underliggande leverantörer (OpenAI, Anthropic, etc.).

### Konfiguration

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

### Använda OpenRouter caching

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

### Provider-specifika alternativ

Olika leverantörer har olika cachemekanismer:

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

### Bästa praxis för OpenRouter

- **Känn till din providers caching**: Varje leverantör har olika mekanismer
- **Testa cachebeteendet**: Verifiera att caching fungerar med din valda provider
- **Övervaka kostnader**: Spåra besparingar från caching
- **Använd konsekventa modeller**: Att byta modeller bryter cacheträffarna

## Vertex Anthropic: Prompt-caching med cache control

Vertex Anthropic (Google Cloud) stöder prompt-caching med explicit cache control.

### Konfiguration

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

### Använda Vertex Anthropic caching

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

### Cache Control Typer

- **ephemeral**: Cache under anropets varaktighet (standard)
- **persistent**: Cache över flera anrop (om stöds)

### Övervaka cacheanvändning

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Bästa praxis för Vertex Anthropic

- **Använd ephemeral caching**: Bra för caching i en enskild session
- **Ställ in max_tokens lämpligt**: Balansera cachestorlek mot kostnad
- **Övervaka cachemetriker**: Spåra cacheeffektivitet
- **Testa med din arbetsbelastning**: Verifiera att caching gynnar ditt användningsfall

## Cross-Provider Caching Strategy

### Enhetlig konfiguration

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

### Providerdetektering

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Fallback-strategi

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

## Kostnadsoptimering

### Beräkna besparingar

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

### Optimeringstips

- **Cacha stora systemprompts**: Största kostnadsbesparingarna
- **Återanvänd kontext**: Cacha ofta använda kontextdokument
- **Batcha anrop**: Gruppera liknande anrop för att maximera cacheträffarna
- **Övervaka cacheeffektivitet**: Spåra faktiska besparingar
- **Justera TTL**: Balansera kostnad mot aktualitet

## Felsökning

### Caching används inte

- Verifiera att caching är aktiverat i konfigurationen
- Kontrollera att prompts är identiska (caching kräver exakt matchning)
- Verifiera att cachen inte har gått ut
- Kontrollera provider-specifika cachegränser

### Cacheskapande misslyckas

- Verifiera att cachestorleken är inom providerns gränser
- Kontrollera att syntaxen för cache control är korrekt
- Se till att providern stöder caching för din modell
- Gå igenom providerns dokumentation för begränsningar

### Oväntade kostnader

- Övervaka cacheskapande kontra cachelästa tokens
- Verifiera att cachen faktiskt används
- Kontrollera efter cachemissar på grund av promptvariationer
- Överväg att justera TTL eller cachestrategi

## Providerjämförelse

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Nästa steg

1. **Välj din provider**: Välj baserat på dina behov
2. **Konfigurera caching**: Ställ in provider-specifikt caching
3. **Testa caching**: Verifiera att det fungerar med dina prompts
4. **Övervaka användning**: Spåra cacheträffar och kostnadsbesparingar
5. **Optimera**: Justera TTL och cachestrategi baserat på resultaten
