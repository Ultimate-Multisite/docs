---
title: Cache de Prompts Sensível ao Provedor
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cache de prompts com reconhecimento de fornecedor

Superdav AI Agent v1.12.0 introduz **cache de prompts com reconhecimento de fornecedor**, que otimiza os custos de API e a latência ao armazenar prompts em cache entre diferentes fornecedores de LLM. Cada fornecedor tem mecanismos e configurações de cache diferentes.

## Visão geral

O cache de prompts permite-lhe:

- Armazenar em cache prompts grandes e usados frequentemente
- Reduzir custos de API ao evitar processamento redundante
- Melhorar a latência para pedidos em cache
- Gerir explicitamente o ciclo de vida do cache

Diferentes fornecedores implementam o cache de formas diferentes:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: cache de prompts com TTL
- **OpenRouter**: cache específico do fornecedor
- **Vertex Anthropic**: cache de prompts com controlo de cache

## Google Gemini: API cachedContents

Google Gemini fornece gestão explícita de cache através da API `cachedContents`.

### Configuração

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

### Criar um prompt em cache

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

### Usar um prompt em cache

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Ciclo de vida do cache

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

### Boas práticas para Gemini

- **Defina um TTL adequado**: Equilibre a poupança de custos com a desatualização do cache
- **Armazene prompts de sistema em cache**: Reutilize o mesmo prompt de sistema entre pedidos
- **Monitorize o uso do cache**: Acompanhe quais caches são mais usados
- **Limpe caches expirados**: Elimine periodicamente caches não usados

## Azure OpenAI: cache de prompts

Azure OpenAI suporta cache de prompts com gestão automática de TTL.

### Configuração

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

### Ativar o cache

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

### Headers de cache

Azure OpenAI usa headers HTTP para controlo de cache:

```
Cache-Control: max_age=3600
```

Valores suportados:

- `max_age=<seconds>`: Armazenar em cache durante a duração especificada
- `no_cache`: Não armazenar este pedido em cache
- `no_store`: Não armazenar em cache e não reutilizar

### Monitorizar o uso do cache

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Boas práticas para Azure OpenAI

- **Use prompts consistentes**: Prompts idênticos beneficiam do cache
- **Defina um TTL razoável**: Equilibre custo e atualidade
- **Monitorize métricas de cache**: Acompanhe a criação de cache em comparação com acertos
- **Agrupe pedidos semelhantes**: Agrupe pedidos para maximizar acertos de cache

## OpenRouter: cache específico do fornecedor

OpenRouter suporta cache através dos fornecedores subjacentes (OpenAI, Anthropic, etc.).

### Configuração

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

### Usar o cache do OpenRouter

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

### Opções específicas do fornecedor

Diferentes fornecedores têm diferentes mecanismos de cache:

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

### Boas práticas para OpenRouter

- **Conheça o cache do seu fornecedor**: Cada fornecedor tem mecanismos diferentes
- **Teste o comportamento do cache**: Verifique se o cache funciona com o fornecedor escolhido
- **Monitorize os custos**: Acompanhe a poupança obtida com o cache
- **Use modelos consistentes**: Mudar de modelo impede acertos de cache

## Vertex Anthropic: cache de prompts com controlo de cache

Vertex Anthropic (Google Cloud) suporta cache de prompts com controlo explícito de cache.

### Configuração

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

### Usar Vertex Anthropic Caching

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

### Tipos de Cache Control

- **ephemeral**: Cache durante a duração do pedido (predefinição)
- **persistent**: Cache em vários pedidos (se suportado)

### Monitorizar a utilização de cache

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Boas práticas para Vertex Anthropic

- **Usar cache ephemeral**: Bom para cache de sessão única
- **Definir max_tokens apropriadamente**: Equilibre o tamanho da cache vs. custo
- **Monitorizar métricas de cache**: Acompanhe a eficácia da cache
- **Testar com a sua carga de trabalho**: Verifique se a cache beneficia o seu caso de uso

## Estratégia de cache entre fornecedores

### Configuração unificada

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

### Deteção de fornecedor

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Estratégia de fallback

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

## Otimização de custos

### Calcular poupanças

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

### Dicas de otimização

- **Colocar em cache prompts de sistema grandes**: Maior poupança de custos
- **Reutilizar contexto**: Coloque em cache documentos de contexto usados frequentemente
- **Agrupar pedidos**: Agrupe pedidos semelhantes para maximizar acertos de cache
- **Monitorizar a eficácia da cache**: Acompanhe as poupanças reais
- **Ajustar TTL**: Equilibre custo vs. atualidade

## Resolução de problemas

### A cache não está a ser usada

- Verifique se a cache está ativada na configuração
- Verifique se os prompts são idênticos (a cache requer correspondência exata)
- Verifique se a cache não expirou
- Verifique os limites de cache específicos do fornecedor

### A criação da cache está a falhar

- Verifique se o tamanho da cache está dentro dos limites do fornecedor
- Verifique se a sintaxe de cache control está correta
- Garanta que o fornecedor suporta cache para o seu modelo
- Reveja a documentação do fornecedor quanto a limitações

### Custos inesperados

- Monitorize a criação de cache vs. tokens de leitura de cache
- Verifique se a cache está realmente a ser usada
- Verifique falhas de cache devido a variações dos prompts
- Considere ajustar o TTL ou a estratégia de cache

## Comparação de fornecedores

| Funcionalidade | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API de cache | cachedContents | HTTP headers | Específico do fornecedor | Cache control |
| Controlo de TTL | Explícito | Via headers | Dependente do fornecedor | Ephemeral/persistent |
| Tamanho máximo da cache | 1M tokens | Dependente do fornecedor | Dependente do fornecedor | 1M tokens |
| Redução de custos | 90% | 90% | Dependente do fornecedor | 90% |
| Monitorização | Detalhada | Via métricas | Dependente do fornecedor | Via utilização |

## Próximos passos

1. **Escolha o seu fornecedor**: Selecione com base nas suas necessidades
2. **Configure a cache**: Configure cache específica do fornecedor
3. **Teste a cache**: Verifique se funciona com os seus prompts
4. **Monitorize a utilização**: Acompanhe acertos de cache e poupanças de custos
5. **Otimize**: Ajuste o TTL e a estratégia de cache com base nos resultados
