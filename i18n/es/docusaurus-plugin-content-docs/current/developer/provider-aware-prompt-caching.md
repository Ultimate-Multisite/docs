---
title: Almacenamiento en caché de prompts consciente del proveedor
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Almacenamiento en Caché de Prompts con Conciencia del Proveedor

Superdav AI Agent v1.12.0 presenta el **almacenamiento en caché de prompts consciente del proveedor** (*provider-aware prompt caching*), lo que optimiza los costos y la latencia de la API al almacenar en caché los prompts a través de diferentes proveedores de LLM. Cada proveedor tiene mecanismos y configuraciones de caché diferentes.

## Visión general

El almacenamiento en caché de prompts te permite:

- Almacenar en caché prompts grandes y de uso frecuente
- Reducir los costos de la API al evitar el procesamiento redundante
- Mejorar la latencia para las solicitudes en caché
- Gestionar el ciclo de vida de la caché de forma explícita

Los diferentes proveedores implementan la caché de manera distinta:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Almacenamiento en caché de prompts con TTL
- **OpenRouter**: Caché específica del proveedor
- **Vertex Anthropic**: Almacenamiento en caché de prompts con control de caché

## Google Gemini: API cachedContents

Google Gemini proporciona una gestión de caché explícita a través de la API `cachedContents`.

### Configuración

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 hora en segundos
        'max_tokens' => 1000000, // Máximo de tokens a almacenar en caché
    ],
];
```

### Creación de un Prompt en Caché

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

// Devuelve: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Uso de un Prompt en Caché

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ciclo de Vida de la Caché

```php
// Listar contenidos en caché
$caches = $gemini->list_cached_contents();

// Obtener detalles de la caché
$cache = $gemini->get_cached_content( 'abc123' );

// Extender el TTL de la caché
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Extender a 2 horas
);

// Eliminar la caché
$gemini->delete_cached_content( 'abc123' );
```

### Mejores prácticas para Gemini

- **Establecer un TTL apropiado**: Equilibrar el ahorro de costos frente a la antigüedad de la caché
- **Almacenar en caché los prompts del sistema**: Reutilizar el mismo prompt del sistema en varias solicitudes
- **Monitorizar el uso de la caché**: Rastrear qué cachés se usan más
- **Limpiar cachés caducadas**: Eliminar periódicamente las cachés no utilizadas

## Azure OpenAI: Almacenamiento en Caché de Prompts

Azure OpenAI admite el almacenamiento en caché de prompts con gestión automática de TTL.

### Configuración

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

### Habilitar la Caché

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

// La respuesta incluye el uso de la caché:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Encabezados de Caché

Azure OpenAI utiliza encabezados HTTP para el control de caché:

```
Cache-Control: max_age=3600
```

Valores admitidos:

- `max_age=<segundos>`: Almacenar en caché por la duración especificada
- `no_cache`: No almacenar en caché esta solicitud
- `no_store`: No almacenar en caché y no reutilizar

### Monitorización del Uso de la Caché

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Creación de caché: $cache_tokens tokens\n";
echo "Hits de caché: $cache_hits tokens\n";
```

### Mejores prácticas para Azure OpenAI

- **Usar prompts consistentes**: Los prompts idénticos se benefician de la caché
- **Establecer un TTL razonable**: Equilibrar el costo frente a la frescura
- **Monitorizar las métricas de caché**: Rastrear la creación frente a los hits
- **Agrupar solicitudes similares**: Agrupar solicitudes para maximizar los hits de caché

## OpenRouter: Caché Específica del Proveedor

OpenRouter admite el almacenamiento en caché a través de proveedores subyacentes (OpenAI, Anthropic, etc.).

### Configuración

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Usar la caché de OpenAI
    ],
];
```

### Uso de la Caché de OpenRouter

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

### Opciones Específicas del Proveedor

Los diferentes proveedores tienen diferentes mecanismos de caché:

```php
// Caché compatible con OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caché compatible con Anthropic
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

### Mejores prácticas para OpenRouter

- **Conocer la caché de su proveedor**: Cada proveedor tiene mecanismos diferentes
- **Probar el comportamiento de la caché**: Verificar que la caché funcione con el proveedor elegido
- **Monitorizar costos**: Rastrear el ahorro gracias a la caché
- **Usar modelos consistentes**: Cambiar de modelo rompe los hits de caché

## Vertex Anthropic: Almacenamiento en Caché de Prompts con Control de Caché

Vertex Anthropic (Google Cloud) admite el almacenamiento en caché de prompts con control de caché explícito.

### Configuración

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

### Uso de la Caché de Vertex Anthropic

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

// La respuesta incluye métricas de caché:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Tipos de Control de Caché

- **ephemeral**: Caché durante la duración de la solicitud (por defecto)
- **persistent**: Caché a través de múltiples solicitudes (si está soportado)

### Monitorización del Uso de la Caché

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Caché creada: $cache_created tokens\n";
echo "Caché leída: $cache_read tokens\n";
```

### Mejores prácticas para Vertex Anthropic

- **Usar caché efímera**: Bueno para el almacenamiento en caché de una sola sesión
- **Establecer `max_tokens` apropiadamente**: Equilibrar el tamaño de la caché frente al costo
- **Monitorizar métricas de caché**: Rastrear la efectividad de la caché
- **Probar con su carga de trabajo**: Verificar que la caché beneficie su caso de uso

## Estrategia de Caché Multi-Proveedor

### Configuración Unificada

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

### Detección del Proveedor

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Usar la configuración de caché específica del proveedor
```

### Estrategia de Fallback

```php
try {
    // Intentar la caché con el proveedor principal
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Volver a la solicitud sin caché
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Optimización de Costos

### Calcular Ahorros

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Precios típicos (varían según el proveedor):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x más barato
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x más barato
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Ahorro estimado: \$$savings\n";
```

### Consejos de Optimización

- **Almacenar en caché prompts del sistema grandes**: El mayor ahorro de costos
- **Reutilizar contexto**: Almacenar en caché documentos de contexto de uso frecuente
- **Agrupar solicitudes**: Agrupar solicitudes similares para maximizar los hits de caché
- **Monitorizar la efectividad de la caché**: Rastrear el ahorro real
- **Ajustar el TTL**: Equilibrar el costo frente a la frescura

## Solución de Problemas

### La caché no se está utilizando

- Verificar que la caché esté habilitada en la configuración
- Comprobar que los prompts sean idénticos (la caché requiere coincidencia exacta)
- Verificar que la caché no haya caducado
- Comprobar los límites de caché específicos del proveedor

### Fallo al crear la caché

- Verificar que el tamaño de la caché esté dentro de los límites del proveedor
- Comprobar que la sintaxis de control de caché sea correcta
- Asegurarse de que el proveedor soporte la caché para su modelo
- Revisar la documentación del proveedor para conocer las limitaciones

### Costos inesperados

- Monitorizar los tokens de creación de caché frente a los tokens de lectura de caché
- Verificar que la caché realmente se esté utilizando
- Comprobar si hay fallos de caché debido a variaciones en el prompt
- Considerar ajustar el TTL o la estrategia de caché

## Comparación de Proveedores

| Característica | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API de Caché | cachedContents | Encabezados HTTP | Específico del proveedor | Control de caché |
| Control TTL | Explícito | Vía encabezados | Dependiente del proveedor | Efímero/persistente |
| Tamaño máx. caché | 1M tokens | Dependiente del proveedor | Dependiente del proveedor | 1M tokens |
| Reducción de costos | 90% | 90% | Dependiente del proveedor | 90% |
| Monitorización | Detallada | Vía métricas | Dependiente del proveedor | Vía uso |

## Próximos Pasos

1. **Elegir su proveedor**: Seleccionar según sus necesidades
2. **Configurar la caché**: Configurar el almacenamiento en caché específico del proveedor
3. **Probar la caché**: Verificar que funcione con sus prompts
4. **Monitorizar el uso**: Rastrear los hits de caché y el ahorro de costos
5. **Optimizar**: Ajustar el TTL y la estrategia de caché según los resultados
