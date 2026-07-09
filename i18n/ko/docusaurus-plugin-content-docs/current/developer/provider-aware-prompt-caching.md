---
title: 제공자 인식형 프롬프트 캐싱
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# 제공자별 프롬프트 캐싱 (Provider-Aware Prompt Caching) {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0에서는 **제공자별 프롬프트 캐싱(provider-aware prompt caching)** 기능을 도입하여, 여러 LLM 제공자(provider)에 걸쳐 프롬프트를 캐싱함으로써 API 비용과 지연 시간(latency)을 최적화합니다. 각 제공자는 캐싱 메커니즘과 설정이 다르므로 이를 이해하는 것이 중요합니다.

## 개요 (Overview) {#overview}

프롬프트 캐싱을 사용하면 다음 작업을 수행할 수 있습니다:

- 자주 사용되는 대용량 프롬프트를 캐싱할 수 있습니다.
- 중복 처리를 방지하여 API 비용을 절감할 수 있습니다.
- 캐시된 요청의 지연 시간을 개선할 수 있습니다.
- 캐시 수명 주기(cache lifecycle)를 명시적으로 관리할 수 있습니다.

제공자별로 캐싱 구현 방식이 다릅니다:

- **Google Gemini**: `cachedContents` API 사용
- **Azure OpenAI**: TTL(Time To Live)을 이용한 프롬프트 캐싱
- **OpenRouter**: 제공자별(Provider-specific) 캐싱
- **Vertex Anthropic**: 캐시 제어(cache control)를 이용한 프롬프트 캐싱

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini는 `cachedContents` API를 통해 명시적인 캐시 관리를 제공합니다.

### 설정 (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1시간은 초 단위입니다
        'max_tokens' => 1000000, // 캐싱할 최대 토큰 수
    ],
];
```

### 캐시된 프롬프트 생성 (Creating a Cached Prompt) {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => '당신은 도움이 되는 비서입니다...',
        'context' => '대용량 컨텍스트 문서...',
        'ttl' => 3600,
    ]
);

// 반환값: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### 캐시된 프롬프트 사용 (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => '사용자 질문입니다',
    ]
);
```

### 캐시 수명 주기 (Cache Lifecycle) {#cache-lifecycle}

```php
// 캐시된 내용 목록 조회
$caches = $gemini->list_cached_contents();

// 캐시 상세 정보 가져오기
$cache = $gemini->get_cached_content( 'abc123' );

// 캐시 TTL 연장
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // 2시간으로 연장
);

// 캐시 삭제
$gemini->delete_cached_content( 'abc123' );
```

### Gemini 모범 사례 (Best Practices for Gemini) {#best-practices-for-gemini}

- **적절한 TTL 설정**: 비용 절감과 캐시 오래됨(staleness) 사이의 균형을 맞추세요.
- **시스템 프롬프트 캐싱**: 요청 간에 동일한 시스템 프롬프트를 재사용하세요.
- **캐시 사용량 모니터링**: 어떤 캐시가 가장 많이 사용되는지 추적하세요.
- **만료된 캐시 정리**: 사용하지 않는 캐시는 주기적으로 삭제하세요.

## Azure OpenAI: 프롬프트 캐싱 {#azure-openai-prompt-caching}

Azure OpenAI는 자동 TTL 관리를 통해 프롬프트 캐싱을 지원합니다.

### 설정 (Configuration) {#configuration-1}

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

### 캐싱 활성화 (Enabling Caching) {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => '당신은 도움이 되는 비서입니다...',
        'context' => '대용량 컨텍스트 문서...',
        'prompt' => '사용자 질문입니다',
        'cache_control' => 'max_age=3600',
    ]
);

// 응답에는 캐시 사용 정보가 포함됩니다:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### 캐시 헤더 (Cache Headers) {#cache-headers}

Azure OpenAI는 캐시 제어를 위해 HTTP 헤더를 사용합니다:

```
Cache-Control: max_age=3600
```

지원되는 값:

- `max_age=<seconds>`: 지정된 시간 동안 캐싱
- `no_cache`: 이 요청을 캐싱하지 않음
- `no_store`: 캐싱하지 않고 재사용하지 않음

### 캐시 사용량 모니터링 (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "캐시 생성: $cache_tokens 토큰\n";
echo "캐시 적중: $cache_hits 토큰\n";
```

### Azure OpenAI 모범 사례 (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **일관된 프롬프트 사용**: 동일한 프롬프트가 캐싱의 이점을 얻습니다.
- **합리적인 TTL 설정**: 비용과 최신성 사이의 균형을 맞추세요.
- **캐시 메트릭 모니터링**: 캐시 생성 대 적중 횟수를 추적하세요.
- **유사 요청 배치 처리**: 요청을 그룹화하여 캐시 적중률을 최대화하세요.

## OpenRouter: 제공자별 캐싱 {#openrouter-provider-specific-caching}

OpenRouter는 하위 제공자(OpenAI, Anthropic 등)를 통해 캐싱을 지원합니다.

### 설정 (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // OpenAI의 캐싱 사용
    ],
];
```

### OpenRouter 캐싱 사용 (Using OpenRouter Caching) {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => '당신은 도움이 되는 비서입니다...',
        'context' => '대용량 컨텍스트 문서...',
        'prompt' => '사용자 질문입니다',
        'cache_control' => 'max_age=3600',
    ]
);
```

### 제공자별 옵션 (Provider-Specific Options) {#provider-specific-options}

제공자마다 캐싱 메커니즘이 다릅니다:

```php
// OpenAI 호환 캐싱
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Anthropic 호환 캐싱
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

### OpenRouter 모범 사례 (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **제공자별 캐싱 이해**: 각 제공자는 다른 메커니즘을 가지고 있습니다.
- **캐싱 동작 테스트**: 선택한 제공자에서 캐싱이 제대로 작동하는지 확인하세요.
- **비용 모니터링**: 캐싱을 통한 절감액을 추적하세요.
- **일관된 모델 사용**: 모델을 변경하면 캐시 적중률이 깨집니다.

## Vertex Anthropic: 캐시 제어와 함께하는 프롬프트 캐싱 {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud)은 명시적인 캐시 제어와 함께 프롬프트 캐싱을 지원합니다.

### 설정 (Configuration) {#configuration-3}

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

### Vertex Anthropic 캐싱 사용 (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => '당신은 도움이 되는 비서입니다...',
        'context' => '대용량 컨텍스트 문서...',
        'prompt' => '사용자 질문입니다',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// 응답에는 캐시 메트릭이 포함됩니다:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### 캐시 제어 유형 (Cache Control Types) {#cache-control-types}

- **ephemeral**: 요청 기간 동안 캐싱 (기본값)
- **persistent**: 여러 요청에 걸쳐 캐싱 (지원되는 경우)

### 캐시 사용량 모니터링 (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "캐시 생성: $cache_created 토큰\n";
echo "캐시 읽기: $cache_read 토큰\n";
```

### Vertex Anthropic 모범 사례 (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral 캐싱 사용**: 단일 세션 캐싱에 적합합니다.
- **max_tokens 적절하게 설정**: 캐시 크기와 비용 사이의 균형을 맞추세요.
- **캐시 메트릭 모니터링**: 캐시 효율성을 추적하세요.
- **워크로드로 테스트**: 캐싱이 사용 사례에 이점을 주는지 확인하세요.

## 제공자 간 캐싱 전략 (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### 통합 설정 (Unified Configuration) {#unified-configuration}

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

### 제공자 감지 (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// 제공자별 캐싱 설정을 사용합니다.
```

### 폴백 전략 (Fallback Strategy) {#fallback-strategy}

```php
try {
    // 기본 제공자로 캐싱 시도
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // 캐싱 실패 시 캐싱되지 않은 요청으로 폴백
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## 비용 최적화 (Cost Optimization) {#cost-optimization}

### 절감액 계산 (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// 일반적인 가격 책정 (제공자마다 다름):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10배 저렴
$cache_read_cost = $cache_read_tokens * 0.000001; // 100배 저렴
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "예상 절감액: \$$savings\n";
```

### 최적화 팁 (Optimization Tips) {#optimization-tips}

- **대용량 시스템 프롬프트 캐싱**: 가장 큰 비용 절감 효과를 가져옵니다.
- **컨텍스트 재사용**: 자주 사용되는 컨텍스트 문서를 캐싱하세요.
- **요청 배치 처리**: 유사한 요청을 그룹화하여 캐시 적중률을 최대화하세요.
- **캐시 효율성 모니터링**: 실제 절감액을 추적하세요.
- **TTL 조정**: 비용과 최신성 사이의 균형을 맞추세요.

## 문제 해결 (Troubleshooting) {#troubleshooting}

### 캐시가 사용되지 않는 경우 {#cache-not-being-used}

- 설정에서 캐싱이 활성화되었는지 확인하세요.
- 프롬프트가 동일한지 확인하세요 (캐싱은 정확히 일치하는 매칭을 요구합니다).
- 캐시가 만료되지 않았는지 확인하세요.
- 제공자별 캐시 제한을 확인하세요.

### 캐시 생성 실패 시 {#cache-creation-failing}

- 캐시 크기가 제공자 제한 내에 있는지 확인하세요.
- 캐시 제어 구문이 올바른지 확인하세요.
- 제공자가 해당 모델에 대한 캐싱을 지원하는지 확인하세요.
- 제한 사항에 대해 제공자 문서를 검토하세요.

### 예상치 못한 비용 발생 시 {#unexpected-costs}

- 캐시 생성 토큰 대 캐시 읽기 토큰을 모니터링하세요.
- 캐시가 실제로 사용되고 있는지 확인하세요.
- 프롬프트 변동으로 인한 캐시 미스(cache misses)가 있는지 확인하세요.
- TTL 또는 캐싱 전략 조정을 고려하세요.

## 제공자 비교 (Provider Comparison) {#provider-comparison}

| 기능 (Feature) | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| 캐시 API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL 제어 | 명시적 (Explicit) | 헤더를 통해 | 제공자 의존적 | Ephemeral/persistent |
| 최대 캐시 크기 | 1M 토큰 | 제공자 의존적 | 제공자 의존적 | 1M 토큰 |
| 비용 절감 | 90% | 90% | 제공자 의존적 | 90% |
| 모니터링 | 상세함 (Detailed) | 메트릭을 통해 | 제공자 의존적 | 사용량(Usage)을 통해 |

## 다음 단계 (Next Steps) {#next-steps}

1. **제공자 선택**: 필요에 따라 제공자를 선택하세요.
2. **캐싱 설정**: 제공자별 캐싱을 설정하세요.
3. **캐싱 테스트**: 프롬프트와 함께 작동하는지 확인하세요.
4. **사용량 모니터링**: 캐시 적중률과 비용 절감액을 추적하세요.
5. **최적화**: 결과를 바탕으로 TTL 및 캐싱 전략을 조정하세요.
