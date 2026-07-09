---
title: プロバイダー認識プロンプトキャッシュ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# プロバイダー対応のプロンプトキャッシュ {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0では、**プロバイダー対応のプロンプトキャッシュ**が導入されました。これは、複数のLLMプロバイダーにまたがってプロンプトをキャッシュすることで、APIコストとレイテンシを最適化します。プロバイダーごとにキャッシュの仕組みや設定が異なります。

## 概要 {#overview}

プロンプトキャッシュを利用すると、以下のことが可能になります。

- 大容量で頻繁に使用するプロンプトをキャッシュできる
- 冗長な処理を避けることで、APIコストを削減できる
- キャッシュされたリクエストのレイテンシを改善できる
- キャッシュのライフサイクルを明示的に管理できる

プロバイダーによってキャッシュの実装が異なります。

- **Google Gemini**: `cachedContents` APIを使用
- **Azure OpenAI**: TTL（Time To Live）によるプロンプトキャッシュ
- **OpenRouter**: プロバイダー固有のキャッシュ機能
- **Vertex Anthropic**: キャッシュ制御（cache control）によるプロンプトキャッシュ

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Geminiでは、`cachedContents` APIを通じて明示的なキャッシュ管理が可能です。

### 設定 {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1時間（秒）
        'max_tokens' => 1000000, // キャッシュする最大トークン数
    ],
];
```

### キャッシュされたプロンプトの作成 {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'あなたは役立つアシスタントです...',
        'context' => '大規模なコンテキストドキュメント...',
        'ttl' => 3600,
    ]
);

// 戻り値: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### キャッシュされたプロンプトの使用 {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'ユーザーの質問はこちら',
    ]
);
```

### キャッシュのライフサイクル管理 {#cache-lifecycle}

```php
// キャッシュされたコンテンツを一覧表示
$caches = $gemini->list_cached_contents();

// キャッシュの詳細を取得
$cache = $gemini->get_cached_content( 'abc123' );

// キャッシュのTTLを延長
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2時間に延長
);

// キャッシュを削除
$gemini->delete_cached_content( 'abc123' );
```

### Geminiでのベストプラクティス {#best-practices-for-gemini}

- **適切なTTLを設定する**: コスト削減とキャッシュの陳腐化のバランスを取る
- **システムプロンプトをキャッシュする**: リクエスト間で同じシステムプロンプトを再利用する
- **キャッシュの使用状況を監視する**: どのキャッシュが最も使用されているかを追跡する
- **期限切れのキャッシュをクリーンアップする**: 定期的に未使用のキャッシュを削除する

## Azure OpenAI: プロンプトキャッシュ {#azure-openai-prompt-caching}

Azure OpenAIは、自動的なTTL管理を備えたプロンプトキャッシュをサポートしています。

### 設定 {#configuration-1}

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

### キャッシュの有効化 {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'あなたは役立つアシスタントです...',
        'context' => '大規模なコンテキストドキュメント...',
        'prompt' => 'ユーザーの質問はこちら',
        'cache_control' => 'max_age=3600',
    ]
);

// レスポンスにはキャッシュの使用状況が含まれます:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### キャッシュヘッダー {#cache-headers}

Azure OpenAIは、キャッシュ制御にHTTPヘッダーを使用します。

```
Cache-Control: max_age=3600
```

サポートされている値:

- `max_age=<秒数>`: 指定された期間キャッシュする
- `no_cache`: このリクエストをキャッシュしない
- `no_store`: キャッシュせず、再利用もしない

### キャッシュ使用状況の監視 {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "キャッシュ作成: $cache_tokens トークン\n";
echo "キャッシュヒット: $cache_hits トークン\n";
```

### Azure OpenAIでのベストプラクティス {#best-practices-for-azure-openai}

- **一貫したプロンプトを使用する**: 同じプロンプトはキャッシュの恩恵を受けやすい
- **妥当なTTLを設定する**: コストと鮮度のバランスを取る
- **キャッシュメトリクスを監視する**: キャッシュ作成とヒットを追跡する
- **類似のリクエストをバッチ処理する**: キャッシュヒットを最大化するためにリクエストをグループ化する

## OpenRouter: プロバイダー固有のキャッシュ {#openrouter-provider-specific-caching}

OpenRouterは、基盤となるプロバイダー（OpenAI、Anthropicなど）を通じてキャッシュをサポートしています。

### 設定 {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAIのキャッシュを使用
    ],
];
```

### OpenRouterキャッシュの使用 {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'あなたは役立つアシスタントです...',
        'context' => '大規模なコンテキストドキュメント...',
        'prompt' => 'ユーザーの質問はこちら',
        'cache_control' => 'max_age=3600',
    ]
);
```

### プロバイダー固有のオプション {#provider-specific-options}

プロバイダーによってキャッシュの仕組みが異なります。

```php
// OpenAI互換のキャッシュ
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic互換のキャッシュ
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

### OpenRouterでのベストプラクティス {#best-practices-for-openrouter}

- **プロバイダーのキャッシュを理解する**: プロバイダーごとに仕組みが異なる
- **キャッシュ動作をテストする**: 選択したプロバイダーでキャッシュが機能するか検証する
- **コストを監視する**: キャッシュによる節約額を追跡する
- **一貫したモデルを使用する**: モデルを切り替えるとキャッシュヒットが失われる

## Vertex Anthropic: キャッシュ制御によるプロンプトキャッシュ {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic（Google Cloud）は、明示的なキャッシュ制御を備えたプロンプトキャッシュをサポートしています。

### 設定 {#configuration-3}

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

### Vertex Anthropicキャッシュの使用 {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'あなたは役立つアシスタントです...',
        'context' => '大規模なコンテキストドキュメント...',
        'prompt' => 'ユーザーの質問はこちら',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// レスポンスにはキャッシュメトリクスが含まれます:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### キャッシュ制御タイプ {#cache-control-types}

- **ephemeral**: リクエストの実行期間のみキャッシュする（デフォルト）
- **persistent**: 複数のリクエストにわたってキャッシュする（サポートされている場合）

### キャッシュ使用状況の監視 {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "キャッシュ作成: $cache_created トークン\n";
echo "キャッシュ読み取り: $cache_read トークン\n";
```

### Vertex Anthropicでのベストプラクティス {#best-practices-for-vertex-anthropic}

- **ephemeralキャッシュを使用する**: シングルセッションのキャッシュに適している
- **max_tokensを適切に設定する**: キャッシュサイズとコストのバランスを取る
- **キャッシュメトリクスを監視する**: キャッシュの有効性を追跡する
- **ワークロードでテストする**: キャッシュがユースケースに役立つか検証する

## プロバイダー横断的なキャッシュ戦略 {#cross-provider-caching-strategy}

### 統一された設定 {#unified-configuration}

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

### プロバイダーの検出 {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// プロバイダー固有のキャッシュ設定を使用
```

### フォールバック戦略 {#fallback-strategy}

```php
try {
    // プライマリプロバイダーでキャッシュを試行
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // キャッシュ失敗時は、キャッシュなしのリクエストにフォールバックする
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## コストの最適化 {#cost-optimization}

### 節約額の計算 {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// 標準的な料金（プロバイダーにより異なります）:
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10分の1のコスト
$cache_read_cost = $cache_read_tokens * 0.000001; // 100分の1のコスト
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "推定節約額: \$$savings\n";
```

### 最適化のヒント {#optimization-tips}

- **大規模なシステムプロンプトをキャッシュする**: 最大のコスト削減につながる
- **コンテキストを再利用する**: 頻繁に使用するコンテキストドキュメントをキャッシュする
- **リクエストをバッチ処理する**: 類似のリクエストをグループ化してキャッシュヒットを最大化する
- **キャッシュの有効性を監視する**: 実際の節約額を追跡する
- **TTLを調整する**: コストと鮮度のバランスを取る

## トラブルシューティング {#troubleshooting}

### キャッシュが使用されていない場合 {#cache-not-being-used}

- 設定でキャッシュが有効になっているか確認する
- プロンプトが完全に一致しているか確認する（キャッシュには完全一致が必要）
- キャッシュが期限切れになっていないか確認する
- プロバイダー固有のキャッシュ制限を確認する

### キャッシュ作成が失敗する場合 {#cache-creation-failing}

- キャッシュサイズがプロバイダーの制限内か確認する
- キャッシュ制御の構文が正しいか確認する
- プロバイダーがそのモデルのキャッシュをサポートしているか確認する
- 制限事項についてはプロバイダーのドキュメントを確認する

### 予期せぬコストが発生する場合 {#unexpected-costs}

- キャッシュ作成トークンとキャッシュ読み取りトークンを監視する
- キャッシュが実際に使用されているか確認する
- プロンプトのばらつきによるキャッシュミスがないか確認する
- TTLやキャッシュ戦略の調整を検討する

## プロバイダー比較 {#provider-comparison}

| 機能 | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| キャッシュAPI | cachedContents | HTTPヘッダー | プロバイダー固有 | キャッシュ制御 |
| TTL制御 | 明示的 | ヘッダー経由 | プロバイダー依存 | エフェメラル/永続 |
| 最大キャッシュサイズ | 1Mトークン | プロバイダー依存 | プロバイダー依存 | 1Mトークン |
| コスト削減率 | 90% | 90% | プロバイダー依存 | 90% |
| 監視 | 詳細 | メトリクス経由 | プロバイダー依存 | 使用状況経由 |

## 次のステップ {#next-steps}

1. **プロバイダーを選択する**: 必要なものに基づいて選択する
2. **キャッシュを設定する**: プロバイダー固有のキャッシュを設定する
3. **キャッシュをテストする**: プロンプトで機能するか検証する
4. **使用状況を監視する**: キャッシュヒットとコスト削減を追跡する
5. **最適化する**: 結果に基づいてTTLとキャッシュ戦略を調整する
