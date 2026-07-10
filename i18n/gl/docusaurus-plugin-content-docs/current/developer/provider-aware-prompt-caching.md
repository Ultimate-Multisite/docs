---
title: Caché de indicacións consciente do provedor
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Caché de prompts consciente do provedor {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 introduce **caché de prompts consciente do provedor**, que optimiza os custos da API e a latencia gardando prompts en caché entre distintos provedores de LLM. Cada provedor ten mecanismos e configuracións de caché diferentes.

## Visión xeral {#overview}

A caché de prompts permíteche:

- Gardar en caché prompts grandes e de uso frecuente
- Reducir os custos da API evitando procesamento redundante
- Mellorar a latencia para solicitudes en caché
- Xestionar explicitamente o ciclo de vida da caché

Os distintos provedores implementan a caché de maneira diferente:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: caché de prompts con TTL
- **OpenRouter**: caché específica do provedor
- **Vertex Anthropic**: caché de prompts con control de caché

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini ofrece xestión explícita da caché mediante a API `cachedContents`.

### Configuración {#configuration}

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

### Crear un prompt en caché {#creating-a-cached-prompt}

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

### Usar un prompt en caché {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ciclo de vida da caché {#cache-lifecycle}

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

### Boas prácticas para Gemini {#best-practices-for-gemini}

- **Define un TTL axeitado**: Equilibra o aforro de custos fronte á obsolescencia da caché
- **Garda en caché os prompts do sistema**: Reutiliza o mesmo prompt do sistema entre solicitudes
- **Supervisa o uso da caché**: Fai seguimento de que cachés se usan máis
- **Limpa as cachés caducadas**: Elimina periodicamente as cachés sen usar

## Azure OpenAI: caché de prompts {#azure-openai-prompt-caching}

Azure OpenAI admite caché de prompts con xestión automática de TTL.

### Configuración {#configuration-1}

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

### Activar a caché {#enabling-caching}

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

### Cabeceiras de caché {#cache-headers}

Azure OpenAI usa cabeceiras HTTP para o control da caché:

```
Cache-Control: max_age=3600
```

Valores admitidos:

- `max_age=<seconds>`: Gardar en caché durante a duración especificada
- `no_cache`: Non gardar esta solicitude en caché
- `no_store`: Non gardar en caché e non reutilizar

### Supervisar o uso da caché {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Boas prácticas para Azure OpenAI {#best-practices-for-azure-openai}

- **Usa prompts consistentes**: Os prompts idénticos benefícianse da caché
- **Define un TTL razoable**: Equilibra o custo fronte á frescura
- **Supervisa as métricas da caché**: Fai seguimento da creación de caché fronte aos acertos
- **Agrupa solicitudes similares**: Agrupa solicitudes para maximizar os acertos de caché

## OpenRouter: caché específica do provedor {#openrouter-provider-specific-caching}

OpenRouter admite caché a través dos provedores subxacentes (OpenAI, Anthropic, etc.).

### Configuración {#configuration-2}

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

### Usar a caché de OpenRouter {#using-openrouter-caching}

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

### Opcións específicas do provedor {#provider-specific-options}

Os distintos provedores teñen mecanismos de caché diferentes:

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

### Boas prácticas para OpenRouter {#best-practices-for-openrouter}

- **Coñece a caché do teu provedor**: Cada provedor ten mecanismos diferentes
- **Proba o comportamento da caché**: Verifica que a caché funciona co provedor escollido
- **Supervisa os custos**: Fai seguimento do aforro derivado da caché
- **Usa modelos consistentes**: Cambiar de modelo rompe os acertos de caché

## Vertex Anthropic: caché de prompts con control de caché {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) admite caché de prompts con control explícito da caché.

### Configuración {#configuration-3}

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

### Usar o almacenamento en caché de Vertex Anthropic {#using-vertex-anthropic-caching}

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

### Tipos de control da caché {#cache-control-types}

- **ephemeral**: Caché durante a duración da solicitude (predeterminado)
- **persistent**: Caché entre varias solicitudes (se é compatible)

### Supervisar o uso da caché {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Mellores prácticas para Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Usar caché ephemeral**: Bo para o almacenamento en caché dunha soa sesión
- **Configurar max_tokens axeitadamente**: Equilibra o tamaño da caché fronte ao custo
- **Supervisar as métricas da caché**: Fai seguimento da eficacia da caché
- **Probar coa túa carga de traballo**: Verifica que o almacenamento en caché beneficia o teu caso de uso

## Estratexia de almacenamento en caché entre provedores {#cross-provider-caching-strategy}

### Configuración unificada {#unified-configuration}

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

### Detección do provedor {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Estratexia de reserva {#fallback-strategy}

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

## Optimización de custos {#cost-optimization}

### Calcular o aforro {#calculate-savings}

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

### Consellos de optimización {#optimization-tips}

- **Almacenar en caché prompts de sistema grandes**: O maior aforro de custos
- **Reutilizar contexto**: Almacena en caché documentos de contexto usados con frecuencia
- **Solicitudes por lotes**: Agrupa solicitudes similares para maximizar os acertos da caché
- **Supervisar a eficacia da caché**: Fai seguimento do aforro real
- **Axustar TTL**: Equilibra o custo fronte á actualización

## Solución de problemas {#troubleshooting}

### A caché non se está usando {#cache-not-being-used}

- Verifica que o almacenamento en caché estea activado na configuración
- Comproba que os prompts sexan idénticos (o almacenamento en caché require unha coincidencia exacta)
- Verifica que a caché non caducase
- Comproba os límites de caché específicos do provedor

### Fallo na creación da caché {#cache-creation-failing}

- Verifica que o tamaño da caché estea dentro dos límites do provedor
- Comproba que a sintaxe de control da caché sexa correcta
- Asegúrate de que o provedor admita o almacenamento en caché para o teu modelo
- Revisa a documentación do provedor para coñecer as limitacións

### Custos inesperados {#unexpected-costs}

- Supervisa a creación da caché fronte aos tokens de lectura da caché
- Verifica que a caché se estea usando realmente
- Comproba se hai fallos de caché debido a variacións nos prompts
- Considera axustar o TTL ou a estratexia de caché

## Comparación de provedores {#provider-comparison}

| Función | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API de caché | cachedContents | Cabeceiras HTTP | Específico do provedor | Control da caché |
| Control de TTL | Explícito | Mediante cabeceiras | Dependente do provedor | Ephemeral/persistent |
| Tamaño máximo da caché | 1M tokens | Dependente do provedor | Dependente do provedor | 1M tokens |
| Redución de custos | 90% | 90% | Dependente do provedor | 90% |
| Supervisión | Detallada | Mediante métricas | Dependente do provedor | Mediante uso |

## Próximos pasos {#next-steps}

1. **Escolle o teu provedor**: Selecciona segundo as túas necesidades
2. **Configura o almacenamento en caché**: Establece o almacenamento en caché específico do provedor
3. **Proba o almacenamento en caché**: Verifica que funcione cos teus prompts
4. **Supervisa o uso**: Fai seguimento dos acertos da caché e do aforro de custos
5. **Optimiza**: Axusta o TTL e a estratexia de caché segundo os resultados
