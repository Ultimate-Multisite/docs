---
title: ការរក្សាទុកពាក្យបញ្ជាក្នុងឃ្លាំងសម្ងាត់ដែលដឹងពីអ្នកផ្តល់សេវា
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ដោយដឹងពីអ្នកផ្តល់សេវា

Superdav AI Agent v1.12.0 ណែនាំ **ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ដោយដឹងពីអ្នកផ្តល់សេវា** ដែលបង្កើនប្រសិទ្ធភាពថ្លៃ API និងភាពយឺតឆ្លើយតប ដោយរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ឆ្លងកាត់អ្នកផ្តល់សេវា LLM ផ្សេងៗ។ អ្នកផ្តល់សេវានីមួយៗមានយន្តការ និងការកំណត់រចនាសម្ព័ន្ធឃ្លាំងសម្ងាត់ខុសគ្នា។

## ទិដ្ឋភាពទូទៅ {#overview}

ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់អនុញ្ញាតឱ្យអ្នក៖

- រក្សាទុក prompt ធំៗ ដែលប្រើញឹកញាប់ក្នុងឃ្លាំងសម្ងាត់
- កាត់បន្ថយថ្លៃ API ដោយជៀសវាងការដំណើរការដដែលៗ
- បង្កើនល្បឿនឆ្លើយតបសម្រាប់សំណើដែលមានក្នុងឃ្លាំងសម្ងាត់
- គ្រប់គ្រងវដ្តជីវិតឃ្លាំងសម្ងាត់យ៉ាងច្បាស់លាស់

អ្នកផ្តល់សេវាផ្សេងៗអនុវត្តការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ខុសៗគ្នា៖

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ជាមួយ TTL
- **OpenRouter**: ការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ជាក់លាក់តាមអ្នកផ្តល់សេវា
- **Vertex Anthropic**: ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ជាមួយការគ្រប់គ្រងឃ្លាំងសម្ងាត់

## Google Gemini: `cachedContents` API {#google-gemini-cachedcontents-api}

Google Gemini ផ្តល់ការគ្រប់គ្រងឃ្លាំងសម្ងាត់យ៉ាងច្បាស់តាមរយៈ `cachedContents` API។

### ការកំណត់រចនាសម្ព័ន្ធ {#configuration}

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

### ការបង្កើត prompt ដែលរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ {#creating-a-cached-prompt}

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

### ការប្រើ prompt ដែលរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### វដ្តជីវិតឃ្លាំងសម្ងាត់ {#cache-lifecycle}

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

### វិធីអនុវត្តល្អបំផុតសម្រាប់ Gemini {#best-practices-for-gemini}

- **កំណត់ TTL ឱ្យសមស្រប**: ថ្លឹងថ្លែងរវាងការសន្សំថ្លៃ និងភាពចាស់ហួសសម័យរបស់ឃ្លាំងសម្ងាត់
- **រក្សាទុក system prompt ក្នុងឃ្លាំងសម្ងាត់**: ប្រើ system prompt ដូចគ្នាឡើងវិញនៅគ្រប់សំណើ
- **តាមដានការប្រើឃ្លាំងសម្ងាត់**: តាមដានថាឃ្លាំងសម្ងាត់ណាដែលត្រូវបានប្រើច្រើនបំផុត
- **សម្អាតឃ្លាំងសម្ងាត់ដែលផុតកំណត់**: លុបឃ្លាំងសម្ងាត់ដែលមិនប្រើជាប្រចាំ

## Azure OpenAI: ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ {#azure-openai-prompt-caching}

Azure OpenAI គាំទ្រការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ជាមួយការគ្រប់គ្រង TTL ដោយស្វ័យប្រវត្តិ។

### ការកំណត់រចនាសម្ព័ន្ធ {#configuration-1}

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

### ការបើកការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ {#enabling-caching}

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

### Header ឃ្លាំងសម្ងាត់ {#cache-headers}

Azure OpenAI ប្រើ HTTP header សម្រាប់ការគ្រប់គ្រងឃ្លាំងសម្ងាត់៖

```
Cache-Control: max_age=3600
```

តម្លៃដែលគាំទ្រ៖

- `max_age=<seconds>`: រក្សាទុកក្នុងឃ្លាំងសម្ងាត់សម្រាប់រយៈពេលដែលបានកំណត់
- `no_cache`: កុំរក្សាទុកសំណើនេះក្នុងឃ្លាំងសម្ងាត់
- `no_store`: កុំរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ និងកុំប្រើឡើងវិញ

### ការតាមដានការប្រើឃ្លាំងសម្ងាត់ {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### វិធីអនុវត្តល្អបំផុតសម្រាប់ Azure OpenAI {#best-practices-for-azure-openai}

- **ប្រើ prompt ឱ្យជាប់លាប់**: prompt ដូចគ្នាទទួលបានអត្ថប្រយោជន៍ពីការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់
- **កំណត់ TTL ឱ្យសមហេតុផល**: ថ្លឹងថ្លែងរវាងថ្លៃ និងភាពថ្មី
- **តាមដានម៉ែត្រិកឃ្លាំងសម្ងាត់**: តាមដានការបង្កើតឃ្លាំងសម្ងាត់ធៀបនឹងការរកឃើញក្នុងឃ្លាំងសម្ងាត់
- **ដាក់ជាក្រុមសំណើស្រដៀងគ្នា**: ដាក់សំណើជាក្រុម ដើម្បីបង្កើនការរកឃើញក្នុងឃ្លាំងសម្ងាត់

## OpenRouter: ការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ជាក់លាក់តាមអ្នកផ្តល់សេវា {#openrouter-provider-specific-caching}

OpenRouter គាំទ្រការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់តាមរយៈអ្នកផ្តល់សេវាមូលដ្ឋាន (OpenAI, Anthropic ជាដើម)។

### ការកំណត់រចនាសម្ព័ន្ធ {#configuration-2}

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

### ការប្រើការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់របស់ OpenRouter {#using-openrouter-caching}

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

### ជម្រើសជាក់លាក់តាមអ្នកផ្តល់សេវា {#provider-specific-options}

អ្នកផ្តល់សេវាផ្សេងៗមានយន្តការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ខុសៗគ្នា៖

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

### វិធីអនុវត្តល្អបំផុតសម្រាប់ OpenRouter {#best-practices-for-openrouter}

- **ស្គាល់ការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់របស់អ្នកផ្តល់សេវារបស់អ្នក**: អ្នកផ្តល់សេវានីមួយៗមានយន្តការខុសគ្នា
- **សាកល្បងឥរិយាបថឃ្លាំងសម្ងាត់**: ផ្ទៀងផ្ទាត់ថាការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ដំណើរការជាមួយអ្នកផ្តល់សេវាដែលអ្នកបានជ្រើស
- **តាមដានថ្លៃ**: តាមដានការសន្សំពីការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់
- **ប្រើម៉ូដែលឱ្យជាប់លាប់**: ការប្តូរម៉ូដែលធ្វើឱ្យខកខានការរកឃើញក្នុងឃ្លាំងសម្ងាត់

## Vertex Anthropic: ការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ជាមួយការគ្រប់គ្រងឃ្លាំងសម្ងាត់ {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) គាំទ្រការរក្សាទុក prompt ក្នុងឃ្លាំងសម្ងាត់ជាមួយការគ្រប់គ្រងឃ្លាំងសម្ងាត់យ៉ាងច្បាស់។

### ការកំណត់រចនាសម្ព័ន្ធ {#configuration-3}

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

### ការប្រើ Vertex Anthropic Caching {#using-vertex-anthropic-caching}

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

### ប្រភេទការគ្រប់គ្រងឃ្លាំងសម្ងាត់ {#cache-control-types}

- **ephemeral**: រក្សាទុកក្នុងឃ្លាំងសម្ងាត់សម្រាប់រយៈពេលនៃសំណើ (លំនាំដើម)
- **persistent**: រក្សាទុកក្នុងឃ្លាំងសម្ងាត់ឆ្លងកាត់សំណើច្រើន (ប្រសិនបើគាំទ្រ)

### ការតាមដានការប្រើឃ្លាំងសម្ងាត់ {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### ការអនុវត្តល្អបំផុតសម្រាប់ Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **ប្រើឃ្លាំងសម្ងាត់ ephemeral**: ល្អសម្រាប់ការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់សម្រាប់វគ្គតែមួយ
- **កំណត់ max_tokens ឱ្យសមស្រប**: ថ្លឹងថ្លែងរវាងទំហំឃ្លាំងសម្ងាត់ និងថ្លៃចំណាយ
- **តាមដានម៉ែត្រិកឃ្លាំងសម្ងាត់**: តាមដានប្រសិទ្ធភាពឃ្លាំងសម្ងាត់
- **សាកល្បងជាមួយបន្ទុកការងាររបស់អ្នក**: ផ្ទៀងផ្ទាត់ថាការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ផ្តល់អត្ថប្រយោជន៍ដល់ករណីប្រើប្រាស់របស់អ្នក

## យុទ្ធសាស្ត្រឃ្លាំងសម្ងាត់ឆ្លងអ្នកផ្តល់សេវា {#cross-provider-caching-strategy}

### ការកំណត់រចនាសម្ព័ន្ធរួម {#unified-configuration}

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

### ការរកឃើញអ្នកផ្តល់សេវា {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### យុទ្ធសាស្ត្របម្រុង {#fallback-strategy}

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

## ការបង្កើនប្រសិទ្ធភាពថ្លៃចំណាយ {#cost-optimization}

### គណនាការសន្សំ {#calculate-savings}

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

### គន្លឹះបង្កើនប្រសិទ្ធភាព {#optimization-tips}

- **រក្សាទុក system prompts ធំៗក្នុងឃ្លាំងសម្ងាត់**: សន្សំថ្លៃចំណាយបានច្រើនបំផុត
- **ប្រើបរិបទឡើងវិញ**: រក្សាទុកឯកសារបរិបទដែលប្រើញឹកញាប់ក្នុងឃ្លាំងសម្ងាត់
- **បាច់សំណើ**: ដាក់សំណើស្រដៀងគ្នាជាក្រុម ដើម្បីបង្កើន cache hits ឱ្យបានអតិបរមា
- **តាមដានប្រសិទ្ធភាពឃ្លាំងសម្ងាត់**: តាមដានការសន្សំពិតប្រាកដ
- **កែតម្រូវ TTL**: ថ្លឹងថ្លែងរវាងថ្លៃចំណាយ និងភាពថ្មី

## ការដោះស្រាយបញ្ហា {#troubleshooting}

### ឃ្លាំងសម្ងាត់មិនត្រូវបានប្រើ {#cache-not-being-used}

- ផ្ទៀងផ្ទាត់ថាការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ត្រូវបានបើកក្នុងការកំណត់រចនាសម្ព័ន្ធ
- ពិនិត្យថា prompts ដូចគ្នាទាំងស្រុង (ការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ត្រូវការការផ្គូផ្គងពិតប្រាកដ)
- ផ្ទៀងផ្ទាត់ថាឃ្លាំងសម្ងាត់មិនទាន់ផុតកំណត់
- ពិនិត្យដែនកំណត់ឃ្លាំងសម្ងាត់ជាក់លាក់របស់អ្នកផ្តល់សេវា

### ការបង្កើតឃ្លាំងសម្ងាត់បរាជ័យ {#cache-creation-failing}

- ផ្ទៀងផ្ទាត់ថាទំហំឃ្លាំងសម្ងាត់ស្ថិតក្នុងដែនកំណត់របស់អ្នកផ្តល់សេវា
- ពិនិត្យថាវាក្យសម្ព័ន្ធគ្រប់គ្រងឃ្លាំងសម្ងាត់ត្រឹមត្រូវ
- ធានាថាអ្នកផ្តល់សេវាគាំទ្រការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់សម្រាប់ម៉ូដែលរបស់អ្នក
- ពិនិត្យឯកសាររបស់អ្នកផ្តល់សេវាសម្រាប់ដែនកំណត់

### ថ្លៃចំណាយមិនរំពឹងទុក {#unexpected-costs}

- តាមដាន token សម្រាប់ការបង្កើតឃ្លាំងសម្ងាត់ ធៀបនឹង token សម្រាប់ការអានឃ្លាំងសម្ងាត់
- ផ្ទៀងផ្ទាត់ថាឃ្លាំងសម្ងាត់ពិតជាត្រូវបានប្រើ
- ពិនិត្យ cache misses ដោយសារការប្រែប្រួល prompt
- ពិចារណាកែតម្រូវ TTL ឬយុទ្ធសាស្ត្រឃ្លាំងសម្ងាត់

## ការប្រៀបធៀបអ្នកផ្តល់សេវា {#provider-comparison}

| លក្ខណៈពិសេស | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | ជាក់លាក់តាមអ្នកផ្តល់សេវា | ការគ្រប់គ្រងឃ្លាំងសម្ងាត់ |
| ការគ្រប់គ្រង TTL | ច្បាស់លាស់ | តាមរយៈ headers | អាស្រ័យលើអ្នកផ្តល់សេវា | Ephemeral/persistent |
| ទំហំឃ្លាំងសម្ងាត់អតិបរមា | 1M tokens | អាស្រ័យលើអ្នកផ្តល់សេវា | អាស្រ័យលើអ្នកផ្តល់សេវា | 1M tokens |
| ការកាត់បន្ថយថ្លៃចំណាយ | 90% | 90% | អាស្រ័យលើអ្នកផ្តល់សេវា | 90% |
| ការតាមដាន | លម្អិត | តាមរយៈម៉ែត្រិក | អាស្រ័យលើអ្នកផ្តល់សេវា | តាមរយៈការប្រើប្រាស់ |

## ជំហានបន្ទាប់ {#next-steps}

1. **ជ្រើសរើសអ្នកផ្តល់សេវារបស់អ្នក**: ជ្រើសរើសផ្អែកលើតម្រូវការរបស់អ្នក
2. **កំណត់រចនាសម្ព័ន្ធការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់**: រៀបចំការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ជាក់លាក់តាមអ្នកផ្តល់សេវា
3. **សាកល្បងការរក្សាទុកក្នុងឃ្លាំងសម្ងាត់**: ផ្ទៀងផ្ទាត់ថាវាដំណើរការជាមួយ prompts របស់អ្នក
4. **តាមដានការប្រើប្រាស់**: តាមដាន cache hits និងការសន្សំថ្លៃចំណាយ
5. **បង្កើនប្រសិទ្ធភាព**: កែតម្រូវ TTL និងយុទ្ធសាស្ត្រឃ្លាំងសម្ងាត់ផ្អែកលើលទ្ធផល
