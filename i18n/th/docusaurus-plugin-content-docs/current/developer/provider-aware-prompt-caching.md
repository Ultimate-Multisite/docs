---
title: การแคชพรอมต์ที่รับรู้ผู้ให้บริการ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# การแคช Prompt ที่รับรู้ถึง Provider {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 ได้เพิ่มฟีเจอร์ **provider-aware prompt caching** ซึ่งช่วยเพิ่มประสิทธิภาพและลดค่าใช้จ่าย API โดยการแคช Prompt ข้าม Provider ของ LLM ต่างๆ เนื่องจากแต่ละ Provider มีกลไกและการตั้งค่าการแคชที่แตกต่างกัน

## ภาพรวม {#overview}

Prompt caching ช่วยให้คุณสามารถ:

- แคช Prompt ขนาดใหญ่ที่ถูกใช้งานบ่อย
- ลดค่าใช้จ่าย API โดยการหลีกเลี่ยงการประมวลผลซ้ำซ้อน
- ปรับปรุงความหน่วง (latency) สำหรับคำขอที่ถูกแคชไว้
- จัดการวงจรชีวิตของ Cache ได้อย่างชัดเจน

Provider ต่างๆ มีการนำการแคชไปใช้ที่แตกต่างกัน:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Prompt caching พร้อม TTL
- **OpenRouter**: การแคชเฉพาะ Provider
- **Vertex Anthropic**: Prompt caching พร้อม cache control

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini มีการจัดการ Cache ที่ชัดเจนผ่าน API `cachedContents`

### การตั้งค่า (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 ชั่วโมงในหน่วยวินาที
        'max_tokens' => 1000000, // จำนวน Token สูงสุดที่สามารถแคชได้
    ],
];
```

### การสร้าง Prompt ที่ถูกแคช (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

// คืนค่า: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### การใช้ Prompt ที่ถูกแคช (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### วงจรชีวิตของ Cache (Cache Lifecycle) {#cache-lifecycle}

```php
// แสดงรายการเนื้อหาที่ถูกแคช
$caches = $gemini->list_cached_contents();

// ดึงรายละเอียด Cache
$cache = $gemini->get_cached_content( 'abc123' );

// ขยาย TTL ของ Cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // ขยายเป็น 2 ชั่วโมง
);

// ลบ Cache
$gemini->delete_cached_content( 'abc123' );
```

### แนวทางปฏิบัติที่ดีที่สุดสำหรับ Gemini (Best Practices for Gemini) {#best-practices-for-gemini}

- **ตั้งค่า TTL ที่เหมาะสม**: สร้างสมดุลระหว่างการประหยัดต้นทุนกับการที่ Cache ล้าสมัย
- **แคช System prompts**: ใช้ System prompt เดิมซ้ำๆ ในหลายคำขอ
- **ตรวจสอบการใช้งาน Cache**: ติดตามว่า Cache ใดถูกใช้งานมากที่สุด
- **ล้าง Cache ที่หมดอายุ**: ลบ Cache ที่ไม่ได้ใช้งานเป็นระยะๆ

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI รองรับ Prompt caching พร้อมการจัดการ TTL อัตโนมัติ

### การตั้งค่า (Configuration) {#configuration-1}

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

### การเปิดใช้งาน Cache (Enabling Caching) {#enabling-caching}

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

// Response จะรวมการใช้งาน Cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Cache Headers {#cache-headers}

Azure OpenAI ใช้ HTTP headers สำหรับการควบคุม Cache:

```
Cache-Control: max_age=3600
```

ค่าที่รองรับ:

- `max_age=<seconds>`: แคชเป็นระยะเวลาที่กำหนด
- `no_cache`: ไม่แคชคำขอนี้
- `no_store`: ไม่แคชและไม่นำกลับมาใช้ซ้ำ

### การตรวจสอบการใช้งาน Cache (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### แนวทางปฏิบัติที่ดีที่สุดสำหรับ Azure OpenAI (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **ใช้ Prompt ที่สม่ำเสมอ**: Prompt ที่เหมือนกันจะได้รับประโยชน์จากการแคช
- **ตั้งค่า TTL ที่สมเหตุสมผล**: สร้างสมดุลระหว่างต้นทุนและความสดใหม่ของข้อมูล
- **ตรวจสอบเมตริก Cache**: ติดตามการสร้าง Cache เทียบกับการเรียกใช้ Cache
- **รวมคำขอที่คล้ายกันเป็น Batch**: จัดกลุ่มคำขอเพื่อเพิ่มโอกาสในการเรียกใช้ Cache

## OpenRouter: Provider-Specific Caching {#openrouter-provider-specific-caching}

OpenRouter รองรับการแคชผ่าน Provider พื้นฐาน (เช่น OpenAI, Anthropic เป็นต้น)

### การตั้งค่า (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // ใช้การแคชของ OpenAI
    ],
];
```

### การใช้ OpenRouter Caching {#using-openrouter-caching}

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

### ตัวเลือกเฉพาะ Provider (Provider-Specific Options) {#provider-specific-options}

Provider ต่างๆ มีกลไกการแคชที่แตกต่างกัน:

```php
// การแคชที่เข้ากันได้กับ OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// การแคชที่เข้ากันได้กับ Anthropic
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

### แนวทางปฏิบัติที่ดีที่สุดสำหรับ OpenRouter (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **ทราบการแคชของ Provider**: แต่ละ Provider มีกลไกที่แตกต่างกัน
- **ทดสอบพฤติกรรมการแคช**: ตรวจสอบว่าการแคชทำงานได้ดีกับ Provider ที่คุณเลือก
- **ตรวจสอบต้นทุน**: ติดตามการประหยัดจาก Cache
- **ใช้ Model ที่สม่ำเสมอ**: การเปลี่ยน Model จะทำให้ Cache Miss

## Vertex Anthropic: Prompt Caching with Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) รองรับ Prompt caching พร้อมการควบคุม Cache ที่ชัดเจน

### การตั้งค่า (Configuration) {#configuration-3}

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

### การใช้ Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

// Response จะรวมเมตริก Cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### ประเภท Cache Control {#cache-control-types}

- **ephemeral**: แคชสำหรับระยะเวลาของคำขอ (ค่าเริ่มต้น)
- **persistent**: แคชข้ามหลายคำขอ (หากรองรับ)

### การตรวจสอบการใช้งาน Cache (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### แนวทางปฏิบัติที่ดีที่สุดสำหรับ Vertex Anthropic (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ใช้ ephemeral caching**: เหมาะสำหรับการแคชในเซสชันเดียว
- **ตั้งค่า max_tokens อย่างเหมาะสม**: สร้างสมดุลระหว่างขนาด Cache กับต้นทุน
- **ตรวจสอบเมตริก Cache**: ติดตามประสิทธิภาพของ Cache
- **ทดสอบกับ Workload ของคุณ**: ตรวจสอบว่าการแคชเป็นประโยชน์ต่อ Use Case ของคุณจริงหรือไม่

## กลยุทธ์การแคชข้าม Provider (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### การตั้งค่าแบบรวมศูนย์ (Unified Configuration) {#unified-configuration}

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

### การตรวจจับ Provider (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// ใช้การตั้งค่าการแคชเฉพาะ Provider
```

### กลยุทธ์สำรอง (Fallback Strategy) {#fallback-strategy}

```php
try {
    // ลองแคชด้วย Primary Provider
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // ย้อนกลับไปใช้คำขอแบบไม่แคช
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## การเพิ่มประสิทธิภาพด้านต้นทุน (Cost Optimization) {#cost-optimization}

### การคำนวณการประหยัด (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// ราคาโดยทั่วไป (แตกต่างกันไปตาม Provider):
$cache_creation_cost = $cache_created_tokens * 0.00001; // ถูกกว่า 10 เท่า
$cache_read_cost = $cache_read_tokens * 0.000001; // ถูกกว่า 100 เท่า
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### เคล็ดลับการเพิ่มประสิทธิภาพ (Optimization Tips) {#optimization-tips}

- **แคช System prompts ขนาดใหญ่**: ประหยัดต้นทุนได้มากที่สุด
- **ใช้ Context ซ้ำ**: แคชเอกสาร Context ที่ถูกใช้งานบ่อย
- **รวมคำขอเป็น Batch**: จัดกลุ่มคำขอที่คล้ายกันเพื่อเพิ่มโอกาสในการเรียกใช้ Cache
- **ตรวจสอบประสิทธิภาพ Cache**: ติดตามการประหยัดต้นทุนที่เกิดขึ้นจริง
- **ปรับ TTL**: สร้างสมดุลระหว่างต้นทุนกับความสดใหม่ของข้อมูล

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### Cache ไม่ถูกใช้งาน {#cache-not-being-used}

- ตรวจสอบว่าได้เปิดใช้งานการแคชในการตั้งค่าแล้ว
- ตรวจสอบว่า Prompt เหมือนกันทุกประการ (การแคชต้องใช้การจับคู่ที่แม่นยำ)
- ตรวจสอบว่า Cache ยังไม่หมดอายุ
- ตรวจสอบขีดจำกัด Cache เฉพาะ Provider

### การสร้าง Cache ล้มเหลว {#cache-creation-failing}

- ตรวจสอบว่าขนาด Cache อยู่ภายในขีดจำกัดของ Provider
- ตรวจสอบว่าไวยากรณ์ของ cache control ถูกต้อง
- ตรวจสอบว่า Provider รองรับการแคชสำหรับ Model ของคุณหรือไม่
- ตรวจสอบเอกสารของ Provider สำหรับข้อจำกัดต่างๆ

### ต้นทุนที่ไม่คาดคิด {#unexpected-costs}

- ติดตามการสร้าง Cache เทียบกับการเรียกใช้ Cache
- ตรวจสอบว่ามีการใช้ Cache จริงหรือไม่
- ตรวจสอบ Cache Miss ที่เกิดจากการเปลี่ยนแปลงของ Prompt
- พิจารณาปรับ TTL หรือกลยุทธ์การแคช

## การเปรียบเทียบ Provider (Provider Comparison) {#provider-comparison}

| Feature | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | Cache control |
| TTL control | Explicit | Via headers | Provider-dependent | Ephemeral/persistent |
| Max cache size | 1M tokens | Provider-dependent | Provider-dependent | 1M tokens |
| Cost reduction | 90% | 90% | Provider-dependent | 90% |
| Monitoring | Detailed | Via metrics | Provider-dependent | Via usage |

## ขั้นตอนต่อไป (Next Steps) {#next-steps}

1. **เลือก Provider ของคุณ**: เลือกตามความต้องการของคุณ
2. **ตั้งค่าการแคช**: ตั้งค่าการแคชเฉพาะ Provider
3. **ทดสอบการแคช**: ตรวจสอบว่าทำงานได้ดีกับ Prompt ของคุณ
4. **ตรวจสอบการใช้งาน**: ติดตาม Cache Hits และการประหยัดต้นทุน
5. **ปรับปรุง**: ปรับ TTL และกลยุทธ์การแคชตามผลลัพธ์
