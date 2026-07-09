---
title: Bộ nhớ đệm nhắc nhở nhận biết nhà cung cấp
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Bộ nhớ đệm Prompt nhận biết nhà cung cấp {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 giới thiệu tính năng **bộ nhớ đệm Prompt nhận biết nhà cung cấp (provider-aware prompt caching)**, giúp tối ưu hóa chi phí API và độ trễ bằng cách lưu trữ bộ nhớ đệm các prompt trên nhiều nhà cung cấp LLM khác nhau. Mỗi nhà cung cấp có cơ chế và cấu hình bộ nhớ đệm khác nhau.

## Tổng quan {#overview}

Bộ nhớ đệm Prompt cho phép bạn:

- Lưu trữ các prompt lớn, được sử dụng thường xuyên
- Giảm chi phí API bằng cách tránh xử lý dư thừa
- Cải thiện độ trễ cho các yêu cầu đã được lưu bộ nhớ đệm
- Quản lý vòng đời bộ nhớ đệm một cách rõ ràng

Các nhà cung cấp khác nhau triển khai bộ nhớ đệm theo những cách khác nhau:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Bộ nhớ đệm Prompt với TTL
- **OpenRouter**: Bộ nhớ đệm dành riêng cho nhà cung cấp
- **Vertex Anthropic**: Bộ nhớ đệm Prompt với cache control

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini cung cấp khả năng quản lý bộ nhớ đệm rõ ràng thông qua API `cachedContents`.

### Cấu hình {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 giờ tính bằng giây
        'max_tokens' => 1000000, // Số token tối đa để lưu bộ nhớ đệm
    ],
];
```

### Tạo Prompt đã lưu bộ nhớ đệm {#creating-a-cached-prompt}

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

// Trả về: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### Sử dụng Prompt đã lưu bộ nhớ đệm {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Vòng đời bộ nhớ đệm {#cache-lifecycle}

```php
// Liệt kê các nội dung đã lưu bộ nhớ đệm
$caches = $gemini->list_cached_contents();

// Lấy chi tiết bộ nhớ đệm
$cache = $gemini->get_cached_content( 'abc123' );

// Gia hạn TTL của bộ nhớ đệm
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Gia hạn lên 2 giờ
);

// Xóa bộ nhớ đệm
$gemini->delete_cached_content( 'abc123' );
```

### Thực hành tốt nhất cho Gemini {#best-practices-for-gemini}

- **Thiết lập TTL phù hợp**: Cân bằng giữa tiết kiệm chi phí và độ cũ của bộ nhớ đệm
- **Lưu bộ nhớ đệm prompt hệ thống**: Tái sử dụng cùng một prompt hệ thống qua các yêu cầu
- **Theo dõi việc sử dụng bộ nhớ đệm**: Theo dõi các bộ nhớ đệm nào được sử dụng nhiều nhất
- **Dọn dẹp bộ nhớ đệm hết hạn**: Định kỳ xóa các bộ nhớ đệm không sử dụng

## Azure OpenAI: Bộ nhớ đệm Prompt {#azure-openai-prompt-caching}

Azure OpenAI hỗ trợ bộ nhớ đệm Prompt với quản lý TTL tự động.

### Cấu hình {#configuration-1}

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

### Kích hoạt Bộ nhớ đệm {#enabling-caching}

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

// Phản hồi bao gồm việc sử dụng bộ nhớ đệm:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headers Bộ nhớ đệm {#cache-headers}

Azure OpenAI sử dụng HTTP headers để kiểm soát bộ nhớ đệm:

```
Cache-Control: max_age=3600
```

Các giá trị được hỗ trợ:

- `max_age=<seconds>`: Lưu bộ nhớ đệm trong khoảng thời gian xác định
- `no_cache`: Không lưu bộ nhớ đệm yêu cầu này
- `no_store`: Không lưu bộ nhớ đệm và không tái sử dụng

### Theo dõi việc sử dụng bộ nhớ đệm {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Tạo bộ nhớ đệm: $cache_tokens tokens\n";
echo "Truy cập bộ nhớ đệm: $cache_hits tokens\n";
```

### Thực hành tốt nhất cho Azure OpenAI {#best-practices-for-azure-openai}

- **Sử dụng prompt nhất quán**: Các prompt giống hệt nhau sẽ được hưởng lợi từ bộ nhớ đệm
- **Thiết lập TTL hợp lý**: Cân bằng giữa chi phí và độ mới
- **Theo dõi các chỉ số bộ nhớ đệm**: Theo dõi việc tạo bộ nhớ đệm so với lần truy cập thành công
- **Gửi các yêu cầu tương tự theo lô**: Nhóm các yêu cầu để tối đa hóa lần truy cập thành công vào bộ nhớ đệm

## OpenRouter: Bộ nhớ đệm dành riêng cho nhà cung cấp {#openrouter-provider-specific-caching}

OpenRouter hỗ trợ bộ nhớ đệm thông qua các nhà cung cấp cơ bản (OpenAI, Anthropic, v.v.).

### Cấu hình {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Sử dụng bộ nhớ đệm của OpenAI
    ],
];
```

### Sử dụng Bộ nhớ đệm OpenRouter {#using-openrouter-caching}

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

### Tùy chọn dành riêng cho nhà cung cấp {#provider-specific-options}

Các nhà cung cấp khác nhau có các cơ chế bộ nhớ đệm khác nhau:

```php
// Bộ nhớ đệm tương thích với OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Bộ nhớ đệm tương thích với Anthropic
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

### Thực hành tốt nhất cho OpenRouter {#best-practices-for-openrouter}

- **Nắm rõ bộ nhớ đệm của nhà cung cấp**: Mỗi nhà cung cấp có cơ chế khác nhau
- **Kiểm tra hành vi bộ nhớ đệm**: Xác minh bộ nhớ đệm hoạt động với nhà cung cấp bạn chọn
- **Theo dõi chi phí**: Theo dõi khoản tiết kiệm từ bộ nhớ đệm
- **Sử dụng các model nhất quán**: Việc chuyển đổi model sẽ làm mất cơ hội truy cập bộ nhớ đệm

## Vertex Anthropic: Bộ nhớ đệm Prompt với Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) hỗ trợ bộ nhớ đệm Prompt với kiểm soát bộ nhớ đệm rõ ràng.

### Cấu hình {#configuration-3}

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

### Sử dụng Bộ nhớ đệm Vertex Anthropic {#using-vertex-anthropic-caching}

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

// Phản hồi bao gồm các chỉ số bộ nhớ đệm:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Các loại Cache Control {#cache-control-types}

- **ephemeral**: Lưu bộ nhớ đệm trong suốt thời gian yêu cầu (mặc định)
- **persistent**: Lưu bộ nhớ đệm qua nhiều yêu cầu (nếu được hỗ trợ)

### Theo dõi việc sử dụng bộ nhớ đệm {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Tạo bộ nhớ đệm: $cache_created tokens\n";
echo "Đọc bộ nhớ đệm: $cache_read tokens\n";
```

### Thực hành tốt nhất cho Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Sử dụng bộ nhớ đệm ephemeral**: Tốt cho việc lưu bộ nhớ đệm trong một phiên làm việc
- **Thiết lập max_tokens phù hợp**: Cân bằng giữa kích thước bộ nhớ đệm và chi phí
- **Theo dõi các chỉ số bộ nhớ đệm**: Theo dõi hiệu quả của bộ nhớ đệm
- **Kiểm tra với khối lượng công việc của bạn**: Xác minh bộ nhớ đệm mang lại lợi ích cho trường hợp sử dụng của bạn

## Chiến lược Bộ nhớ đệm Đa Nhà cung cấp {#cross-provider-caching-strategy}

### Cấu hình Hợp nhất {#unified-configuration}

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

### Phát hiện Nhà cung cấp {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Sử dụng cấu hình bộ nhớ đệm dành riêng cho nhà cung cấp
```

### Chiến lược dự phòng (Fallback) {#fallback-strategy}

```php
try {
    // Thử bộ nhớ đệm với nhà cung cấp chính
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Dự phòng bằng yêu cầu không bộ nhớ đệm
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Tối ưu hóa Chi phí {#cost-optimization}

### Tính toán khoản tiết kiệm {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Giá điển hình (thay đổi tùy nhà cung cấp):
$cache_creation_cost = $cache_created_tokens * 0.00001; // Rẻ hơn 10 lần
$cache_read_cost = $cache_read_tokens * 0.000001; // Rẻ hơn 100 lần
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Ước tính tiết kiệm: \$$savings\n";
```

### Mẹo Tối ưu hóa {#optimization-tips}

- **Lưu bộ nhớ đệm prompt hệ thống lớn**: Tiết kiệm chi phí lớn nhất
- **Tái sử dụng ngữ cảnh**: Lưu bộ nhớ đệm các tài liệu ngữ cảnh được sử dụng thường xuyên
- **Gửi yêu cầu theo lô**: Nhóm các yêu cầu tương tự để tối đa hóa lần truy cập thành công vào bộ nhớ đệm
- **Theo dõi hiệu quả bộ nhớ đệm**: Theo dõi khoản tiết kiệm thực tế
- **Điều chỉnh TTL**: Cân bằng giữa chi phí và độ mới

## Khắc phục sự cố {#troubleshooting}

### Bộ nhớ đệm không được sử dụng {#cache-not-being-used}

- Xác minh bộ nhớ đệm đã được bật trong cấu hình
- Kiểm tra rằng các prompt là giống hệt nhau (bộ nhớ đệm yêu cầu khớp chính xác)
- Xác minh bộ nhớ đệm chưa hết hạn
- Kiểm tra giới hạn bộ nhớ đệm dành riêng cho nhà cung cấp

### Tạo bộ nhớ đệm thất bại {#cache-creation-failing}

- Xác minh kích thước bộ nhớ đệm nằm trong giới hạn của nhà cung cấp
- Kiểm tra cú pháp cache control đã đúng
- Đảm bảo nhà cung cấp hỗ trợ bộ nhớ đệm cho model của bạn
- Xem lại tài liệu nhà cung cấp về các giới hạn

### Chi phí bất ngờ {#unexpected-costs}

- Theo dõi tokens tạo bộ nhớ đệm so với tokens đọc bộ nhớ đệm
- Xác minh bộ nhớ đệm thực sự đang được sử dụng
- Kiểm tra các trường hợp bỏ lỡ bộ nhớ đệm do biến thể prompt
- Cân nhắc điều chỉnh TTL hoặc chiến lược bộ nhớ đệm

## So sánh Nhà cung cấp {#provider-comparison}

| Tính năng | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Bộ nhớ đệm | cachedContents | HTTP headers | Provider-specific | Cache control |
| Kiểm soát TTL | Rõ ràng | Qua headers | Tùy nhà cung cấp | Ephemeral/persistent |
| Kích thước bộ nhớ đệm tối đa | 1M tokens | Tùy nhà cung cấp | Tùy nhà cung cấp | 1M tokens |
| Giảm chi phí | 90% | 90% | Tùy nhà cung cấp | 90% |
| Giám sát | Chi tiết | Qua metrics | Tùy nhà cung cấp | Qua usage |

## Các bước tiếp theo {#next-steps}

1. **Chọn nhà cung cấp của bạn**: Lựa chọn dựa trên nhu cầu của bạn
2. **Cấu hình bộ nhớ đệm**: Thiết lập bộ nhớ đệm dành riêng cho nhà cung cấp
3. **Kiểm tra bộ nhớ đệm**: Xác minh nó hoạt động với các prompt của bạn
4. **Tối ưu hóa:**
