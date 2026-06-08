---
title: 提供者感知提示快取
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# 供應商感知提示快取 (Provider-Aware Prompt Caching)

Superdav AI Agent v1.12.0 引入了**供應商感知提示快取**功能。此功能透過在不同的 LLM 供應商之間快取提示，從而優化 API 成本和延遲。每個供應商都有不同的快取機制和配置。

## 概述 (Overview)

提示快取功能讓您能夠：

- 快取大型、經常使用的提示 (prompts)
- 避免重複處理，從而降低 API 成本
- 提升快取請求的延遲表現
- 明確管理快取生命週期

不同的供應商實作快取的方式不同：

- **Google Gemini**: 使用 `cachedContents` API
- **Azure OpenAI**: 帶有 TTL 的提示快取
- **OpenRouter**: 供應商特定的快取
- **Vertex Anthropic**: 帶有快取控制的提示快取

## Google Gemini: cachedContents API

Google Gemini 透過 `cachedContents` API 提供了明確的快取管理功能。

### 配置 (Configuration)

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 小時 (秒)
        'max_tokens' => 1000000, // 最大快取 token 數
    ],
];
```

### 建立快取提示 (Creating a Cached Prompt)

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => '您是一位有幫助的助理...',
        'context' => '大型上下文文件...',
        'ttl' => 3600,
    ]
);

// 回傳值: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### 使用快取提示 (Using a Cached Prompt)

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => '用戶問題在此',
    ]
);
```

### 快取生命週期 (Cache Lifecycle)

```php
// 列出快取內容
$caches = $gemini->list_cached_contents();

// 取得快取詳細資訊
$cache = $gemini->get_cached_content( 'abc123' );

// 延長快取 TTL
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 延長至 2 小時
);

// 刪除快取
$gemini->delete_cached_content( 'abc123' );
```

### Gemini 的最佳實踐 (Best Practices for Gemini)

- **設定適當的 TTL**: 平衡成本節省與快取過時程度
- **快取系統提示**: 在多個請求中重複使用相同的系統提示
- **監控快取使用情況**: 追蹤哪些快取被使用得最頻繁
- **清理過期的快取**: 定期刪除未使用的快取

## Azure OpenAI: 提示快取 (Prompt Caching)

Azure OpenAI 支援帶有自動 TTL 管理的提示快取。

### 配置 (Configuration)

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

### 啟用快取 (Enabling Caching)

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => '您是一位有幫助的助理...',
        'context' => '大型上下文文件...',
        'prompt' => '用戶問題在此',
        'cache_control' => 'max_age=3600',
    ]
);

// 回應包含快取使用情況:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### 快取標頭 (Cache Headers)

Azure OpenAI 使用 HTTP 標頭來控制快取：

```
Cache-Control: max_age=3600
```

支援的值：

- `max_age=<seconds>`: 快取指定時間的內容
- `no_cache`: 不快取此請求
- `no_store`: 不快取且不重複使用

### 監控快取使用情況 (Monitoring Cache Usage)

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "快取建立: $cache_tokens tokens\n";
echo "快取命中: $cache_hits tokens\n";
```

### Azure OpenAI 的最佳實踐 (Best Practices for Azure OpenAI)

- **使用一致的提示**: 相同的提示能從快取中受益
- **設定合理的 TTL**: 平衡成本與新鮮度
- **監控快取指標**: 追蹤快取建立與命中次數
- **批次處理相似請求**: 將請求分組以最大化快取命中率

## OpenRouter: 供應商特定快取 (Provider-Specific Caching)

OpenRouter 透過底層供應商（OpenAI、Anthropic 等）支援快取功能。

### 配置 (Configuration)

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // 使用 OpenAI 的快取
    ],
];
```

### 使用 OpenRouter 快取 (Using OpenRouter Caching)

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => '您是一位有幫助的助理...',
        'context' => '大型上下文文件...',
        'prompt' => '用戶問題在此',
        'cache_control' => 'max_age=3600',
    ]
);
```

### 供應商特定選項 (Provider-Specific Options)

不同的供應商有不同的快取機制：

```php
// 兼容 OpenAI 的快取
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// 兼容 Anthropic 的快取
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

### OpenRouter 的最佳實踐 (Best Practices for OpenRouter)

- **了解供應商的快取機制**: 每個供應商的機制都不同
- **測試快取行為**: 驗證快取是否能與您選擇的供應商正常運作
- **監控成本**: 追蹤快取帶來的節省
- **使用一致的模型**: 更換模型會導致快取失效

## Vertex Anthropic: 帶有快取控制的提示快取 (Prompt Caching with Cache Control)

Vertex Anthropic (Google Cloud) 支援帶有明確快取控制的提示快取。

### 配置 (Configuration)

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

### 使用 Vertex Anthropic 快取 (Using Vertex Anthropic Caching)

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => '您是一位有幫助的助理...',
        'context' => '大型上下文文件...',
        'prompt' => '用戶問題在此',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// 回應包含快取指標:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### 快取控制類型 (Cache Control Types)

- **ephemeral**: 請求期間的快取 (預設)
- **persistent**: 跨多個請求的快取 (如果支援)

### 監控快取使用情況 (Monitoring Cache Usage)

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "快取建立: $cache_created tokens\n";
echo "快取讀取: $cache_read tokens\n";
```

### Vertex Anthropic 的最佳實踐 (Best Practices for Vertex Anthropic)

- **使用 ephemeral 快取**: 適合單次會話的快取
- **適當設定 max_tokens**: 平衡快取大小與成本
- **監控快取指標**: 追蹤快取有效性
- **使用您的工作負載進行測試**: 驗證快取是否能為您的使用案例帶來益處

## 跨供應商快取策略 (Cross-Provider Caching Strategy)

### 統一配置 (Unified Configuration)

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

### 供應商偵測 (Provider Detection)

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// 使用供應商特定的快取配置
```

### 備用策略 (Fallback Strategy)

```php
try {
    // 嘗試使用主要供應商進行快取
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // 備用為不快取的請求
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## 成本優化 (Cost Optimization)

### 計算節省 (Calculate Savings)

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// 典型定價 (依供應商而異):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 便宜 10 倍
$cache_read_cost = $cache_read_tokens * 0.000001; // 便宜 100 倍
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "預估節省: \$$savings\n";
```

### 優化技巧 (Optimization Tips)

- **快取大型系統提示**: 最大的成本節省點
- **重複使用上下文**: 快取經常使用的上下文文件
- **批次處理請求**: 將相似的請求分組以最大化快取命中率
- **監控快取有效性**: 追蹤實際節省的成本
- **調整 TTL**: 平衡成本與新鮮度

## 故障排除 (Troubleshooting)

### 快取未被使用 (Cache not being used)

- 驗證配置中已啟用快取功能
- 檢查提示是否完全相同 (快取需要完全匹配)
- 驗證快取是否已過期
- 檢查供應商特定的快取限制

### 快取建立失敗 (Cache creation failing)

- 驗證快取大小是否在供應商限制內
- 檢查快取控制語法是否正確
- 確保供應商支援您的模型快取功能
- 查閱供應商文件了解限制

### 意外的成本 (Unexpected costs)

- 監控快取建立與快取讀取的 token 數量
- 驗證快取是否確實被使用
- 檢查是否因提示變化導致快取遺漏 (cache misses)
- 考慮調整 TTL 或快取策略

## 供應商比較 (Provider Comparison)

| 功能 (Feature) | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| 快取 API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL 控制 | 明確設定 | 透過標頭 | 依供應商決定 | Ephemeral/persistent |
| 最大快取大小 | 1M tokens | 依供應商決定 | 依供應商決定 | 1M tokens |
| 成本降低率 | 90% | 90% | 依供應商決定 | 90% |
| 監控 (Monitoring) | 詳細 | 透過指標 (metrics) | 依供應商決定 | 透過使用量 (usage) |

## 下一步 (Next Steps)

1. **選擇您的供應商**: 根據您的需求選擇
2. **配置快取**: 設定供應商特定的快取功能
3. **測試快取**: 驗證快取是否能與您的提示正常運作
4. **監控使用量**: 追蹤快取命中率和成本節省
5. **優化**: 根據結果調整 TTL 和快取策略
