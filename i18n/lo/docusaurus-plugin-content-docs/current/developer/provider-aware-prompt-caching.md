---
title: ການແຄຊພຣອມຕ໌ທີ່ຮັບຮູ້ຜູ້ໃຫ້ບໍລິການ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# ການແຄຊ Prompt ທີ່ຮັບຮູ້ຜູ້ໃຫ້ບໍລິການ

Superdav AI Agent v1.12.0 ແນະນຳ **ການແຄຊ prompt ທີ່ຮັບຮູ້ຜູ້ໃຫ້ບໍລິການ**, ເຊິ່ງປັບປຸງຄ່າໃຊ້ຈ່າຍ API ແລະຄວາມໜ່ວງໂດຍການແຄຊ prompt ຂ້າມຜູ້ໃຫ້ບໍລິການ LLM ຕ່າງໆ. ແຕ່ລະຜູ້ໃຫ້ບໍລິການມີກົນໄກການແຄຊ ແລະການກຳນົດຄ່າທີ່ແຕກຕ່າງກັນ.

## ພາບລວມ

ການແຄຊ prompt ຊ່ວຍໃຫ້ທ່ານ:

- ແຄຊ prompt ຂະໜາດໃຫຍ່ທີ່ໃຊ້ເລື້ອຍໆ
- ຫຼຸດຄ່າໃຊ້ຈ່າຍ API ໂດຍຫຼີກເວັ້ນການປະມວນຜົນຊ້ຳຊ້ອນ
- ປັບປຸງຄວາມໜ່ວງສຳລັບຄຳຂໍທີ່ຖືກແຄຊໄວ້
- ຈັດການວົງຈອນຊີວິດຂອງແຄຊຢ່າງຊັດເຈນ

ຜູ້ໃຫ້ບໍລິການຕ່າງໆນຳໃຊ້ການແຄຊແຕກຕ່າງກັນ:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: ການແຄຊ prompt ພ້ອມ TTL
- **OpenRouter**: ການແຄຊສະເພາະຜູ້ໃຫ້ບໍລິການ
- **Vertex Anthropic**: ການແຄຊ prompt ພ້ອມການຄວບຄຸມແຄຊ

## Google Gemini: cachedContents API

Google Gemini ໃຫ້ການຈັດການແຄຊຢ່າງຊັດເຈນຜ່ານ `cachedContents` API.

### ການກຳນົດຄ່າ

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

### ການສ້າງ Prompt ທີ່ຖືກແຄຊ

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

### ການໃຊ້ Prompt ທີ່ຖືກແຄຊ

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### ວົງຈອນຊີວິດຂອງແຄຊ

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

### ແນວປະຕິບັດທີ່ດີສຳລັບ Gemini

- **ຕັ້ງ TTL ໃຫ້ເໝາະສົມ**: ດຸ່ນດ່ຽງການປະຫຍັດຄ່າໃຊ້ຈ່າຍກັບຄວາມເກົ່າຂອງແຄຊ
- **ແຄຊ system prompts**: ນຳ system prompt ເດີມກັບມາໃຊ້ຊ້ຳໃນຫຼາຍຄຳຂໍ
- **ຕິດຕາມການໃຊ້ແຄຊ**: ຕິດຕາມວ່າແຄຊໃດຖືກໃຊ້ຫຼາຍທີ່ສຸດ
- **ລ້າງແຄຊທີ່ໝົດອາຍຸ**: ລຶບແຄຊທີ່ບໍ່ໄດ້ໃຊ້ເປັນໄລຍະ

## Azure OpenAI: ການແຄຊ Prompt

Azure OpenAI ຮອງຮັບການແຄຊ prompt ພ້ອມການຈັດການ TTL ອັດຕະໂນມັດ.

### ການກຳນົດຄ່າ

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

### ການເປີດໃຊ້ການແຄຊ

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

### Header ຂອງແຄຊ

Azure OpenAI ໃຊ້ HTTP headers ສຳລັບການຄວບຄຸມແຄຊ:

```
Cache-Control: max_age=3600
```

ຄ່າທີ່ຮອງຮັບ:

- `max_age=<seconds>`: ແຄຊຕາມໄລຍະເວລາທີ່ກຳນົດ
- `no_cache`: ຢ່າແຄຊຄຳຂໍນີ້
- `no_store`: ຢ່າແຄຊ ແລະຢ່ານຳກັບມາໃຊ້ຊ້ຳ

### ການຕິດຕາມການໃຊ້ແຄຊ

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### ແນວປະຕິບັດທີ່ດີສຳລັບ Azure OpenAI

- **ໃຊ້ prompt ທີ່ສອດຄ່ອງກັນ**: prompt ທີ່ເໝືອນກັນຈະໄດ້ປະໂຫຍດຈາກການແຄຊ
- **ຕັ້ງ TTL ໃຫ້ເໝາະສົມ**: ດຸ່ນດ່ຽງຄ່າໃຊ້ຈ່າຍກັບຄວາມສົດໃໝ່
- **ຕິດຕາມ metrics ຂອງແຄຊ**: ຕິດຕາມການສ້າງແຄຊທຽບກັບການ hit
- **ຈັດກຸ່ມຄຳຂໍທີ່ຄ້າຍກັນ**: ຈັດກຸ່ມຄຳຂໍເພື່ອເພີ່ມ cache hits ໃຫ້ສູງສຸດ

## OpenRouter: ການແຄຊສະເພາະຜູ້ໃຫ້ບໍລິການ

OpenRouter ຮອງຮັບການແຄຊຜ່ານຜູ້ໃຫ້ບໍລິການພື້ນຖານ (OpenAI, Anthropic, ແລະອື່ນໆ).

### ການກຳນົດຄ່າ

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

### ການໃຊ້ການແຄຊຂອງ OpenRouter

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

### ຕົວເລືອກສະເພາະຜູ້ໃຫ້ບໍລິການ

ຜູ້ໃຫ້ບໍລິການຕ່າງໆມີກົນໄກການແຄຊແຕກຕ່າງກັນ:

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

### ແນວປະຕິບັດທີ່ດີສຳລັບ OpenRouter

- **ຮູ້ການແຄຊຂອງຜູ້ໃຫ້ບໍລິການຂອງທ່ານ**: ແຕ່ລະຜູ້ໃຫ້ບໍລິການມີກົນໄກແຕກຕ່າງກັນ
- **ທົດສອບພຶດຕິກຳການແຄຊ**: ກວດສອບວ່າການແຄຊໃຊ້ໄດ້ກັບຜູ້ໃຫ້ບໍລິການທີ່ທ່ານເລືອກ
- **ຕິດຕາມຄ່າໃຊ້ຈ່າຍ**: ຕິດຕາມການປະຫຍັດຈາກການແຄຊ
- **ໃຊ້ໂມເດວທີ່ສອດຄ່ອງກັນ**: ການປ່ຽນໂມເດວຈະເຮັດໃຫ້ cache hits ຂາດຕອນ

## Vertex Anthropic: ການແຄຊ Prompt ພ້ອມການຄວບຄຸມແຄຊ

Vertex Anthropic (Google Cloud) ຮອງຮັບການແຄຊ prompt ພ້ອມການຄວບຄຸມແຄຊຢ່າງຊັດເຈນ.

### ການກຳນົດຄ່າ

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

### ການໃຊ້ Vertex Anthropic ສຳລັບການແຄຊ

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

### ປະເພດການຄວບຄຸມແຄຊ

- **ephemeral**: ແຄຊສຳລັບໄລຍະເວລາຂອງຄຳຂໍ (ຄ່າເລີ່ມຕົ້ນ)
- **persistent**: ແຄຊຂ້າມຫຼາຍຄຳຂໍ (ຖ້າຮອງຮັບ)

### ການຕິດຕາມການໃຊ້ແຄຊ

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### ແນວປະຕິບັດທີ່ດີສຳລັບ Vertex Anthropic

- **ໃຊ້ການແຄຊແບບ ephemeral**: ເໝາະສຳລັບການແຄຊໃນເຊດຊັນດຽວ
- **ຕັ້ງ max_tokens ໃຫ້ເໝາະສົມ**: ປັບສົມດຸນຂະໜາດແຄຊກັບຕົ້ນທຶນ
- **ຕິດຕາມຕົວຊີ້ວັດແຄຊ**: ຕິດຕາມປະສິດທິຜົນຂອງແຄຊ
- **ທົດສອບກັບພາລະວຽກຂອງທ່ານ**: ຢືນຢັນວ່າການແຄຊເປັນປະໂຫຍດຕໍ່ກໍລະນີໃຊ້ງານຂອງທ່ານ

## ກົນລະຍຸດການແຄຊຂ້າມຜູ້ໃຫ້ບໍລິການ

### ການກຳນົດຄ່າແບບຮວມສູນ

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

### ການກວດຈັບຜູ້ໃຫ້ບໍລິການ

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### ກົນລະຍຸດສຳຮອງ

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

## ການປັບໃຫ້ເໝາະສົມດ້ານຕົ້ນທຶນ

### ຄຳນວນການປະຢັດ

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

### ເຄັດລັບການປັບໃຫ້ເໝາະສົມ

- **ແຄຊ system prompts ຂະໜາດໃຫຍ່**: ປະຢັດຕົ້ນທຶນໄດ້ຫຼາຍທີ່ສຸດ
- **ນຳບໍລິບົດກັບມາໃຊ້ໃໝ່**: ແຄຊເອກະສານບໍລິບົດທີ່ໃຊ້ເລື້ອຍໆ
- **ຈັດກຸ່ມຄຳຂໍ**: ຈັດກຸ່ມຄຳຂໍທີ່ຄ້າຍກັນເພື່ອເພີ່ມ cache hits ໃຫ້ສູງສຸດ
- **ຕິດຕາມປະສິດທິຜົນແຄຊ**: ຕິດຕາມການປະຢັດຈິງ
- **ປັບ TTL**: ປັບສົມດຸນຕົ້ນທຶນກັບຄວາມສົດໃໝ່

## ການແກ້ໄຂບັນຫາ

### ແຄຊບໍ່ຖືກໃຊ້

- ກວດສອບວ່າການແຄຊຖືກເປີດໃຊ້ໃນການກຳນົດຄ່າ
- ກວດວ່າ prompts ເໝືອນກັນ (ການແຄຊຕ້ອງການການກົງກັນຢ່າງແນ່ນອນ)
- ກວດສອບວ່າແຄຊຍັງບໍ່ໝົດອາຍຸ
- ກວດຂີດຈຳກັດແຄຊສະເພາະຜູ້ໃຫ້ບໍລິການ

### ການສ້າງແຄຊລົ້ມເຫຼວ

- ກວດສອບວ່າຂະໜາດແຄຊຢູ່ພາຍໃນຂີດຈຳກັດຂອງຜູ້ໃຫ້ບໍລິການ
- ກວດວ່າຮູບແບບຄຳສັ່ງຄວບຄຸມແຄຊຖືກຕ້ອງ
- ໃຫ້ແນ່ໃຈວ່າຜູ້ໃຫ້ບໍລິການຮອງຮັບການແຄຊສຳລັບໂມເດວຂອງທ່ານ
- ທົບທວນເອກະສານຂອງຜູ້ໃຫ້ບໍລິການສຳລັບຂໍ້ຈຳກັດ

### ຕົ້ນທຶນທີ່ບໍ່ຄາດຄິດ

- ຕິດຕາມການສ້າງແຄຊທຽບກັບ tokens ການອ່ານແຄຊ
- ກວດສອບວ່າແຄຊຖືກໃຊ້ຈິງ
- ກວດຫາ cache misses ທີ່ເກີດຈາກຄວາມແຕກຕ່າງຂອງ prompt
- ພິຈາລະນາປັບ TTL ຫຼືກົນລະຍຸດແຄຊ

## ການປຽບທຽບຜູ້ໃຫ້ບໍລິການ

| ຄຸນສົມບັດ | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | ສະເພາະຜູ້ໃຫ້ບໍລິການ | ການຄວບຄຸມແຄຊ |
| ການຄວບຄຸມ TTL | ຊັດເຈນ | ຜ່ານ headers | ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ | Ephemeral/persistent |
| ຂະໜາດແຄຊສູງສຸດ | 1M tokens | ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ | ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ | 1M tokens |
| ການຫຼຸດຕົ້ນທຶນ | 90% | 90% | ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ | 90% |
| ການຕິດຕາມ | ລະອຽດ | ຜ່ານຕົວຊີ້ວັດ | ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ | ຜ່ານການໃຊ້ງານ |

## ຂັ້ນຕອນຕໍ່ໄປ

1. **ເລືອກຜູ້ໃຫ້ບໍລິການຂອງທ່ານ**: ເລືອກຕາມຄວາມຕ້ອງການຂອງທ່ານ
2. **ກຳນົດຄ່າການແຄຊ**: ຕັ້ງຄ່າການແຄຊສະເພາະຜູ້ໃຫ້ບໍລິການ
3. **ທົດສອບການແຄຊ**: ກວດສອບວ່າມັນເຮັດວຽກກັບ prompts ຂອງທ່ານ
4. **ຕິດຕາມການໃຊ້ງານ**: ຕິດຕາມ cache hits ແລະການປະຢັດຕົ້ນທຶນ
5. **ປັບໃຫ້ເໝາະສົມ**: ປັບ TTL ແລະກົນລະຍຸດແຄຊຕາມຜົນລັບທີ່ໄດ້
