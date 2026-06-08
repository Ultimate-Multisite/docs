---
title: 提供商感知提示缓存
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# 提供商感知提示词缓存

Superdav AI Agent v1.12.0 引入了**提供商感知提示词缓存**（provider-aware prompt caching）功能。该功能通过跨不同 LLM 提供商缓存提示词，从而优化 API 成本和延迟。每个提供商都有不同的缓存机制和配置。

## 概述

提示词缓存允许您：

- 缓存大型、经常使用的提示词
- 通过避免重复处理来降低 API 成本
- 提高缓存请求的延迟性能
- 显式管理缓存的生命周期

不同的提供商实现缓存的方式不同：

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: 带 TTL 的提示词缓存
- **OpenRouter**: 提供商特定的缓存
- **Vertex Anthropic**: 带缓存控制的提示词缓存

## Google Gemini: cachedContents API

Google Gemini 通过 `cachedContents` API 提供显式的缓存管理。

### 配置

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

### 创建缓存提示词

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

### 使用缓存提示词

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### 缓存生命周期

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

### Gemini 的最佳实践

- **设置合适的 TTL**: 平衡成本节约与缓存过时程度
- **缓存系统提示词**: 在多个请求中重复使用相同的系统提示词
- **监控缓存使用情况**: 跟踪哪些缓存使用频率最高
- **清理过期的缓存**: 定期删除未使用的缓存

## Azure OpenAI: 提示词缓存

Azure OpenAI 支持带自动 TTL 管理的提示词缓存。

### 配置

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

### 启用缓存

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

### 缓存头

Azure OpenAI 使用 HTTP 头进行缓存控制：

```
Cache-Control: max_age=3600
```

支持的值：

- `max_age=<seconds>`: 缓存指定持续时间
- `no_cache`: 不缓存此请求
- `no_store`: 不缓存且不重用

### 监控缓存使用情况

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI 的最佳实践

- **使用一致的提示词**: 相同的提示词能从缓存中受益
- **设置合理的 TTL**: 平衡成本与新鲜度
- **监控缓存指标**: 跟踪缓存创建量与命中量
- **批量处理相似请求**: 将请求分组以最大化缓存命中率

## OpenRouter: 提供商特定缓存

OpenRouter 通过底层提供商（OpenAI、Anthropic 等）支持缓存。

### 配置

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

### 使用 OpenRouter 缓存

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

### 提供商特定选项

不同的提供商有不同的缓存机制：

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

### OpenRouter 的最佳实践

- **了解提供商的缓存机制**: 每个提供商的机制都不同
- **测试缓存行为**: 验证缓存是否能与您选择的提供商一起工作
- **监控成本**: 跟踪缓存带来的节省
- **使用一致的模型**: 切换模型会中断缓存命中

## Vertex Anthropic: 带缓存控制的提示词缓存

Vertex Anthropic (Google Cloud) 支持带显式缓存控制的提示词缓存。

### 配置

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

### 使用 Vertex Anthropic 缓存

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

### 缓存控制类型

- **ephemeral**: 仅在请求期间缓存（默认）
- **persistent**: 跨多个请求缓存（如果支持）

### 监控缓存使用情况

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic 的最佳实践

- **使用临时缓存 (ephemeral)**: 适用于单次会话缓存
- **合理设置 max_tokens**: 平衡缓存大小与成本
- **监控缓存指标**: 跟踪缓存的有效性
- **使用您的工作负载进行测试**: 验证缓存是否能为您的用例带来益处

## 跨提供商缓存策略

### 统一配置

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

### 提供商检测

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### 故障转移策略

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

## 成本优化

### 计算节省额

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

### 优化技巧

- **缓存大型系统提示词**: 节省成本最大的部分
- **重用上下文**: 缓存经常使用的上下文文档
- **批量请求**: 将相似的请求分组以最大化缓存命中率
- **监控缓存有效性**: 跟踪实际节省的成本
- **调整 TTL**: 平衡成本与新鲜度

## 故障排除

### 缓存未生效

- 确认配置中已启用缓存
- 检查提示词是否完全一致（缓存要求完全匹配）
- 验证缓存是否已过期
- 检查提供商特定的缓存限制

### 缓存创建失败

- 确认缓存大小是否在提供商限制内
- 检查缓存控制语法是否正确
- 确保提供商支持您的模型进行缓存
- 查阅提供商文档了解限制

### 意外成本

- 监控缓存创建量与缓存读取量
- 验证缓存是否确实在使用
- 检查由于提示词变化导致的缓存未命中
- 考虑调整 TTL 或缓存策略

## 提供商对比

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## 下一步

1. **选择提供商**: 根据您的需求选择
2. **配置缓存**: 设置提供商特定的缓存
3. **测试缓存**: 验证其是否能与您的提示词一起工作
4. **监控使用情况**: 跟踪缓存命中率和成本节约
5. **优化**: 根据结果调整 TTL 和缓存策略
