---
title: Cache de Prompt Ciente do Provedor
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Cache de Prompt Consciente do Provedor {#provider-aware-prompt-caching}

O Superdav AI Agent v1.12.0 introduz o **cache de prompt consciente do provedor** (provider-aware prompt caching), que otimiza os custos e a latência da API ao armazenar em cache prompts em diferentes provedores de LLM. Cada provedor possui mecanismos e configurações de cache diferentes.

## Visão Geral {#overview}

O cache de prompt permite que você:

- Armazene em cache prompts grandes e frequentemente usados
- Reduza os custos da API, evitando processamento redundante
- Melhore a latência para requisições em cache
- Gerencie o ciclo de vida do cache explicitamente

Diferentes provedores implementam o cache de maneiras distintas:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Cache de prompt com TTL
- **OpenRouter**: Cache específico do provedor
- **Vertex Anthropic**: Cache de prompt com controle de cache

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

O Google Gemini oferece gerenciamento de cache explícito através da API `cachedContents`.

### Configuração {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 hora em segundos
        'max_tokens' => 1000000, // Máximo de tokens para cache
    ],
];
```

### Criando um Prompt em Cache {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'Você é um assistente prestativo...',
        'context' => 'Documento de contexto grande...',
        'ttl' => 3600,
    ]
);

// Retorna: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Usando um Prompt em Cache {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'Pergunta do usuário aqui',
    ]
);
```

### Ciclo de Vida do Cache {#cache-lifecycle}

```php
// Listar conteúdos em cache
$caches = $gemini->list_cached_contents();

// Obter detalhes do cache
$cache = $gemini->get_cached_content( 'abc123' );

// Estender o TTL do cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Estender para 2 horas
);

// Deletar cache
$gemini->delete_cached_content( 'abc123' );
```

### Melhores Práticas para Gemini {#best-practices-for-gemini}

- **Definir TTL apropriado**: Equilibrar economia de custos versus desatualização do cache
- **Cachear prompts de sistema**: Reutilizar o mesmo prompt de sistema em várias requisições
- **Monitorar o uso do cache**: Rastrear quais caches são mais usados
- **Limpar caches expirados**: Deletar periodicamente caches não utilizados

## Azure OpenAI: Cache de Prompt {#azure-openai-prompt-caching}

O Azure OpenAI suporta cache de prompt com gerenciamento automático de TTL.

### Configuração {#configuration-1}

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

### Habilitando o Cache {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'Você é um assistente prestativo...',
        'context' => 'Documento de contexto grande...',
        'prompt' => 'Pergunta do usuário aqui',
        'cache_control' => 'max_age=3600',
    ]
);

// A resposta inclui o uso do cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headers de Cache {#cache-headers}

O Azure OpenAI usa headers HTTP para controle de cache:

```
Cache-Control: max_age=3600
```

Valores suportados:

- `max_age=<segundos>`: Cache por duração especificada
- `no_cache`: Não cachear esta requisição
- `no_store`: Não cachear e não reutilizar

### Monitorando o Uso do Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Criação de cache: $cache_tokens tokens\n";
echo "Acertos de cache: $cache_hits tokens\n";
```

### Melhores Práticas para Azure OpenAI {#best-practices-for-azure-openai}

- **Usar prompts consistentes**: Prompts idênticos se beneficiam do cache
- **Definir TTL razoável**: Equilibrar custo versus frescor
- **Monitorar métricas de cache**: Rastrear criação vs. acertos
- **Agrupar requisições similares**: Agrupar requisições para maximizar os acertos de cache

## OpenRouter: Cache Específico do Provedor {#openrouter-provider-specific-caching}

O OpenRouter suporta cache através de provedores subjacentes (OpenAI, Anthropic, etc.).

### Configuração {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Usar o cache do OpenAI
    ],
];
```

### Usando o Cache do OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'Você é um assistente prestativo...',
        'context' => 'Documento de contexto grande...',
        'prompt' => 'Pergunta do usuário aqui',
        'cache_control' => 'max_age=3600',
    ]
);
```

### Opções Específicas do Provedor {#provider-specific-options}

Diferentes provedores têm mecanismos de cache diferentes:

```php
// Cache compatível com OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Cache compatível com Anthropic
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

### Melhores Práticas para OpenRouter {#best-practices-for-openrouter}

- **Conhecer o cache do provedor**: Cada provedor tem mecanismos diferentes
- **Testar o comportamento do cache**: Verificar se o cache funciona com o provedor escolhido
- **Monitorar custos**: Rastrear a economia gerada pelo cache
- **Usar modelos consistentes**: Mudar de modelo quebra os acertos de cache

## Vertex Anthropic: Cache de Prompt com Controle de Cache {#vertex-anthropic-prompt-caching-with-cache-control}

O Vertex Anthropic (Google Cloud) suporta cache de prompt com controle de cache explícito.

### Configuração {#configuration-3}

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

### Usando o Cache Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'Você é um assistente prestativo...',
        'context' => 'Documento de contexto grande...',
        'prompt' => 'Pergunta do usuário aqui',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// A resposta inclui métricas de cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Tipos de Controle de Cache {#cache-control-types}

- **ephemeral**: Cache pela duração da requisição (padrão)
- **persistent**: Cache em várias requisições (se suportado)

### Monitorando o Uso do Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache criado: $cache_created tokens\n";
echo "Cache lido: $cache_read tokens\n";
```

### Melhores Práticas para Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Usar cache efêmero**: Bom para cache de sessão única
- **Definir max_tokens apropriadamente**: Equilibrar tamanho do cache versus custo
- **Monitorar métricas de cache**: Rastrear a eficácia do cache
- **Testar com sua carga de trabalho**: Verificar se o cache beneficia seu caso de uso

## Estratégia de Cache Multi-Provedor {#cross-provider-caching-strategy}

### Configuração Unificada {#unified-configuration}

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

### Detecção do Provedor {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Usar a configuração de cache específica do provedor
```

### Estratégia de Fallback {#fallback-strategy}

```php
try {
    // Tentar cachear com o provedor principal
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Recuar para requisição sem cache
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Otimização de Custos {#cost-optimization}

### Calcular Economias {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Preços típicos (variam por provedor):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10x mais barato
$cache_read_cost = $cache_read_tokens * 0.000001; // 100x mais barato
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Economia estimada: \$$savings\n";
```

### Dicas de Otimização {#optimization-tips}

- **Cachear prompts de sistema grandes**: Maior economia de custos
- **Reutilizar contexto**: Cachear documentos de contexto frequentemente usados
- **Agrupar requisições**: Agrupar requisições similares para maximizar os acertos de cache
- **Monitorar a eficácia do cache**: Rastrear a economia real
- **Ajustar TTL**: Equilibrar custo versus frescor

## Solução de Problemas {#troubleshooting}

### Cache não está sendo usado {#cache-not-being-used}

- Verificar se o cache está habilitado na configuração
- Verificar se os prompts são idênticos (o cache exige correspondência exata)
- Verificar se o cache não expirou
- Verificar limites de cache específicos do provedor

### Falha na criação do cache {#cache-creation-failing}

- Verificar se o tamanho do cache está dentro dos limites do provedor
- Verificar se a sintaxe do controle de cache está correta
- Garantir que o provedor suporta cache para o seu modelo
- Revisar a documentação do provedor para limitações

### Custos inesperados {#unexpected-costs}

- Monitorar tokens de criação de cache versus tokens de leitura de cache
- Verificar se o cache está realmente sendo usado
- Verificar falhas de cache devido a variações de prompt
- Considerar ajustar o TTL ou a estratégia de cache

## Comparação de Provedores {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## Próximos Passos {#next-steps}

1. **Escolher seu provedor**: Selecionar com base nas suas necessidades
2. **Configurar o cache**: Configurar o cache específico do provedor
3. **Testar o cache**: Verificar se funciona com seus prompts
4. **Monitorar o uso**: Rastrear acertos de cache e economia de custos
5. **Otimizar**: Ajustar o TTL e a estratégia de cache com base nos resultados
