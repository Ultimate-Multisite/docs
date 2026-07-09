---
title: ପ୍ରଦାତା-ସଚେତନ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# ପ୍ରଦାତା-ସଚେତନ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 **ପ୍ରଦାତା-ସଚେତନ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ** ଆଣିଛି, ଯାହା ଭିନ୍ନ LLM ପ୍ରଦାତାମାନଙ୍କ ମଧ୍ୟରେ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶ୍ କରି API ଖର୍ଚ୍ଚ ଓ ବିଳମ୍ବକୁ ଅପ୍ଟିମାଇଜ୍ କରେ। ପ୍ରତ୍ୟେକ ପ୍ରଦାତାଙ୍କର ଭିନ୍ନ କ୍ୟାଶିଂ ପ୍ରଣାଳୀ ଓ ବିନ୍ୟାସ ଅଛି।

## ସାରାଂଶ {#overview}

ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ ଆପଣଙ୍କୁ ଏହା କରିବାକୁ ଦେଇଥାଏ:

- ବଡ଼, ବାରମ୍ବାର ବ୍ୟବହୃତ ପ୍ରମ୍ପ୍ଟଗୁଡ଼ିକୁ କ୍ୟାଶ୍ କରନ୍ତୁ
- ଅନାବଶ୍ୟକ ପ୍ରକ୍ରିୟାକରଣ ଏଡ଼ାଇ API ଖର୍ଚ୍ଚ କମାନ୍ତୁ
- କ୍ୟାଶ୍ ହୋଇଥିବା ଅନୁରୋଧ ପାଇଁ ବିଳମ୍ବ କମାନ୍ତୁ
- କ୍ୟାଶ୍ ଜୀବନଚକ୍ରକୁ ସ୍ପଷ୍ଟଭାବେ ପରିଚାଳନା କରନ୍ତୁ

ଭିନ୍ନ ପ୍ରଦାତାମାନେ କ୍ୟାଶିଂକୁ ଭିନ୍ନ ଭାବରେ କାର୍ଯ୍ୟକର କରନ୍ତି:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: TTL ସହିତ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ
- **OpenRouter**: ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ୟାଶିଂ
- **Vertex Anthropic**: କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ସହିତ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini `cachedContents` API ମାଧ୍ୟମରେ ସ୍ପଷ୍ଟ କ୍ୟାଶ୍ ପରିଚାଳନା ଦେଇଥାଏ।

### ବିନ୍ୟାସ {#configuration}

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

### କ୍ୟାଶ୍ ହୋଇଥିବା ପ୍ରମ୍ପ୍ଟ ସୃଷ୍ଟି କରିବା {#creating-a-cached-prompt}

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

### କ୍ୟାଶ୍ ହୋଇଥିବା ପ୍ରମ୍ପ୍ଟ ବ୍ୟବହାର କରିବା {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### କ୍ୟାଶ୍ ଜୀବନଚକ୍ର {#cache-lifecycle}

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

### Gemini ପାଇଁ ଶ୍ରେଷ୍ଠ ପ୍ରଚଳନା {#best-practices-for-gemini}

- **ଉପଯୁକ୍ତ TTL ସେଟ୍ କରନ୍ତୁ**: ଖର୍ଚ୍ଚ ସଞ୍ଚୟ ଓ କ୍ୟାଶ୍ ପୁରୁଣାହେବା ମଧ୍ୟରେ ସନ୍ତୁଳନ ରଖନ୍ତୁ
- **ସିଷ୍ଟମ୍ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶ୍ କରନ୍ତୁ**: ଅନୁରୋଧଗୁଡ଼ିକରେ ସେହି ସିଷ୍ଟମ୍ ପ୍ରମ୍ପ୍ଟକୁ ପୁନଃବ୍ୟବହାର କରନ୍ତୁ
- **କ୍ୟାଶ୍ ବ୍ୟବହାର ନିରୀକ୍ଷଣ କରନ୍ତୁ**: କେଉଁ କ୍ୟାଶ୍ ସବୁଠାରୁ ଅଧିକ ବ୍ୟବହୃତ ହେଉଛି ଟ୍ରାକ୍ କରନ୍ତୁ
- **ମেয়ାଦ ସମାପ୍ତ କ୍ୟାଶ୍ ସଫା କରନ୍ତୁ**: ଅବ୍ୟବହୃତ କ୍ୟାଶ୍ଗୁଡ଼ିକୁ ସମୟସମୟରେ ବିଲୋପ କରନ୍ତୁ

## Azure OpenAI: ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ {#azure-openai-prompt-caching}

Azure OpenAI ସ୍ୱୟଂଚାଳିତ TTL ପରିଚାଳନା ସହିତ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂକୁ ସମର୍ଥନ କରେ।

### ବିନ୍ୟାସ {#configuration-1}

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

### କ୍ୟାଶିଂ ସକ୍ରିୟ କରିବା {#enabling-caching}

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

### କ୍ୟାଶ୍ ହେଡର୍ {#cache-headers}

Azure OpenAI କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ପାଇଁ HTTP ହେଡର୍ ବ୍ୟବହାର କରେ:

```
Cache-Control: max_age=3600
```

ସମର୍ଥିତ ମୂଲ୍ୟଗୁଡ଼ିକ:

- `max_age=<seconds>`: ନିର୍ଦ୍ଦିଷ୍ଟ ସମୟାବଧି ପାଇଁ କ୍ୟାଶ୍ କରନ୍ତୁ
- `no_cache`: ଏହି ଅନୁରୋଧକୁ କ୍ୟାଶ୍ କରନ୍ତୁ ନାହିଁ
- `no_store`: କ୍ୟାଶ୍ କରନ୍ତୁ ନାହିଁ ଏବଂ ପୁନଃବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ

### କ୍ୟାଶ୍ ବ୍ୟବହାର ନିରୀକ୍ଷଣ {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Azure OpenAI ପାଇଁ ଶ୍ରେଷ୍ଠ ପ୍ରଚଳନା {#best-practices-for-azure-openai}

- **ସମାନ ପ୍ରମ୍ପ୍ଟ ବ୍ୟବହାର କରନ୍ତୁ**: ଏକାକାର ପ୍ରମ୍ପ୍ଟଗୁଡ଼ିକ କ୍ୟାଶିଂରୁ ଲାଭ ପାଆନ୍ତି
- **ଯୁକ୍ତିସଙ୍ଗତ TTL ସେଟ୍ କରନ୍ତୁ**: ଖର୍ଚ୍ଚ ଓ ତାଜାପନ ମଧ୍ୟରେ ସନ୍ତୁଳନ ରଖନ୍ତୁ
- **କ୍ୟାଶ୍ ମେଟ୍ରିକ୍ସ ନିରୀକ୍ଷଣ କରନ୍ତୁ**: କ୍ୟାଶ୍ ସୃଷ୍ଟି ବନାମ ହିଟ୍ ଟ୍ରାକ୍ କରନ୍ତୁ
- **ସମାନ ଅନୁରୋଧଗୁଡ଼ିକୁ ବ୍ୟାଚ୍ କରନ୍ତୁ**: କ୍ୟାଶ୍ ହିଟ୍ ବଢ଼ାଇବାକୁ ଅନୁରୋଧଗୁଡ଼ିକୁ ଗୋଷ୍ଠୀବଦ୍ଧ କରନ୍ତୁ

## OpenRouter: ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ୟାଶିଂ {#openrouter-provider-specific-caching}

OpenRouter ଅନ୍ତର୍ନିହିତ ପ୍ରଦାତାମାନଙ୍କ (OpenAI, Anthropic, ଇତ୍ୟାଦି) ମାଧ୍ୟମରେ କ୍ୟାଶିଂକୁ ସମର୍ଥନ କରେ।

### ବିନ୍ୟାସ {#configuration-2}

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

### OpenRouter କ୍ୟାଶିଂ ବ୍ୟବହାର କରିବା {#using-openrouter-caching}

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

### ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ ବିକଳ୍ପ {#provider-specific-options}

ଭିନ୍ନ ପ୍ରଦାତାମାନଙ୍କର ଭିନ୍ନ କ୍ୟାଶିଂ ପ୍ରଣାଳୀ ଅଛି:

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

### OpenRouter ପାଇଁ ଶ୍ରେଷ୍ଠ ପ୍ରଚଳନା {#best-practices-for-openrouter}

- **ଆପଣଙ୍କ ପ୍ରଦାତାଙ୍କ କ୍ୟାଶିଂକୁ ଜାଣନ୍ତୁ**: ପ୍ରତ୍ୟେକ ପ୍ରଦାତାଙ୍କର ଭିନ୍ନ ପ୍ରଣାଳୀ ଅଛି
- **କ୍ୟାଶିଂ ବ୍ୟବହାର ପରୀକ୍ଷା କରନ୍ତୁ**: ଆପଣ ବାଛିଥିବା ପ୍ରଦାତା ସହିତ କ୍ୟାଶିଂ କାମ କରୁଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
- **ଖର୍ଚ୍ଚ ନିରୀକ୍ଷଣ କରନ୍ତୁ**: କ୍ୟାଶିଂରୁ ହୋଇଥିବା ସଞ୍ଚୟ ଟ୍ରାକ୍ କରନ୍ତୁ
- **ସମାନ ମଡେଲ୍ ବ୍ୟବହାର କରନ୍ତୁ**: ମଡେଲ୍ ବଦଳାଇଲେ କ୍ୟାଶ୍ ହିଟ୍ ବନ୍ଦ ହୋଇଯାଏ

## Vertex Anthropic: କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ସହିତ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂ {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ସ୍ପଷ୍ଟ କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ସହିତ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶିଂକୁ ସମର୍ଥନ କରେ।

### ବିନ୍ୟାସ {#configuration-3}

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

### Vertex Anthropic କ୍ୟାଶିଂ ବ୍ୟବହାର {#using-vertex-anthropic-caching}

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

### କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ପ୍ରକାର {#cache-control-types}

- **ephemeral**: ଅନୁରୋଧ ଅବଧି ପର୍ଯ୍ୟନ୍ତ କ୍ୟାଶ୍ କରନ୍ତୁ (ଡିଫଲ୍ଟ)
- **persistent**: ଏକାଧିକ ଅନୁରୋଧରେ କ୍ୟାଶ୍ କରନ୍ତୁ (ସମର୍ଥିତ ହେଲେ)

### କ୍ୟାଶ୍ ବ୍ୟବହାର ନିରୀକ୍ଷଣ {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic ପାଇଁ ଶ୍ରେଷ୍ଠ ପ୍ରକ୍ରିୟା {#best-practices-for-vertex-anthropic}

- **ephemeral କ୍ୟାଶିଂ ବ୍ୟବହାର କରନ୍ତୁ**: ଏକକ-ସେସନ୍ କ୍ୟାଶିଂ ପାଇଁ ଭଲ
- **max_tokens ଉଚିତ ଭାବେ ସେଟ୍ କରନ୍ତୁ**: କ୍ୟାଶ୍ ଆକାର ଓ ଖର୍ଚ୍ଚରେ ସମନ୍ୱୟ ରଖନ୍ତୁ
- **କ୍ୟାଶ୍ ମେଟ୍ରିକ୍ସ ନିରୀକ୍ଷଣ କରନ୍ତୁ**: କ୍ୟାଶ୍ କାର୍ଯ୍ୟକାରିତା ଟ୍ରାକ୍ କରନ୍ତୁ
- **ଆପଣଙ୍କ କାର୍ଯ୍ୟଭାର ସହ ପରୀକ୍ଷା କରନ୍ତୁ**: କ୍ୟାଶିଂ ଆପଣଙ୍କ ବ୍ୟବହାର ମାମଲାରେ ଲାଭଦାୟକ କି ନାହିଁ ଯାଞ୍ଚ କରନ୍ତୁ

## ବିଭିନ୍ନ ପ୍ରଦାତା ପାଇଁ କ୍ୟାଶିଂ ରଣନୀତି {#cross-provider-caching-strategy}

### ଏକୀକୃତ କନଫିଗରେସନ୍ {#unified-configuration}

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

### ପ୍ରଦାତା ଚିହ୍ନଟ {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### ବିକଳ୍ପ ରଣନୀତି {#fallback-strategy}

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

## ଖର୍ଚ୍ଚ ଅନୁକୂଳନ {#cost-optimization}

### ସଞ୍ଚୟ ହିସାବ କରନ୍ତୁ {#calculate-savings}

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

### ଅନୁକୂଳନ ପରାମର୍ଶ {#optimization-tips}

- **ବଡ଼ ସିଷ୍ଟମ୍ ପ୍ରମ୍ପ୍ଟ କ୍ୟାଶ୍ କରନ୍ତୁ**: ସବୁଠାରୁ ବଡ଼ ଖର୍ଚ୍ଚ ସଞ୍ଚୟ
- **ପ୍ରସଙ୍ଗ ପୁନଃବ୍ୟବହାର କରନ୍ତୁ**: ବାରମ୍ବାର ବ୍ୟବହୃତ ପ୍ରସଙ୍ଗ ଡକ୍ୟୁମେଣ୍ଟ କ୍ୟାଶ୍ କରନ୍ତୁ
- **ଅନୁରୋଧଗୁଡ଼ିକୁ ବ୍ୟାଚ୍ କରନ୍ତୁ**: କ୍ୟାଶ୍ ହିଟ୍ ସର୍ବାଧିକ କରିବାକୁ ସମାନ ଅନୁରୋଧଗୁଡ଼ିକୁ ଗୋଷ୍ଠୀ କରନ୍ତୁ
- **କ୍ୟାଶ୍ କାର୍ଯ୍ୟକାରିତା ନିରୀକ୍ଷଣ କରନ୍ତୁ**: ପ୍ରକୃତ ସଞ୍ଚୟ ଟ୍ରାକ୍ କରନ୍ତୁ
- **TTL ସମଯୋଜନ କରନ୍ତୁ**: ଖର୍ଚ୍ଚ ଓ ନୂତନତାରେ ସମନ୍ୱୟ ରଖନ୍ତୁ

## ସମସ୍ୟା ସମାଧାନ {#troubleshooting}

### କ୍ୟାଶ୍ ବ୍ୟବହୃତ ହେଉନାହିଁ {#cache-not-being-used}

- କନଫିଗରେସନ୍‌ରେ କ୍ୟାଶିଂ ସକ୍ରିୟ ଅଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
- ପ୍ରମ୍ପ୍ଟଗୁଡ଼ିକ ସମାନ କି ଯାଞ୍ଚ କରନ୍ତୁ (କ୍ୟାଶିଂ ପାଇଁ ଠିକ୍ ମେଳ ଆବଶ୍ୟକ)
- କ୍ୟାଶ୍‌ର ଅବଧି ସମାପ୍ତ ହୋଇନାହିଁ କି ଯାଞ୍ଚ କରନ୍ତୁ
- ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ୟାଶ୍ ସୀମା ଯାଞ୍ଚ କରନ୍ତୁ

### କ୍ୟାଶ୍ ସୃଷ୍ଟି ବିଫଳ ହେଉଛି {#cache-creation-failing}

- କ୍ୟାଶ୍ ଆକାର ପ୍ରଦାତା ସୀମା ମଧ୍ୟରେ ଅଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
- କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ ସିଣ୍ଟାକ୍ସ ଠିକ୍ କି ଯାଞ୍ଚ କରନ୍ତୁ
- ଆପଣଙ୍କ ମଡେଲ୍ ପାଇଁ ପ୍ରଦାତା କ୍ୟାଶିଂ ସମର୍ଥନ କରେ କି ନିଶ୍ଚିତ କରନ୍ତୁ
- ସୀମାବଧତା ପାଇଁ ପ୍ରଦାତା ଡକ୍ୟୁମେଣ୍ଟେସନ୍ ସମୀକ୍ଷା କରନ୍ତୁ

### ଅପେକ୍ଷାତୀତ ଖର୍ଚ୍ଚ {#unexpected-costs}

- କ୍ୟାଶ୍ ସୃଷ୍ଟି ବନାମ କ୍ୟାଶ୍ ରିଡ୍ ଟୋକେନ୍ ନିରୀକ୍ଷଣ କରନ୍ତୁ
- କ୍ୟାଶ୍ ପ୍ରକୃତରେ ବ୍ୟବହୃତ ହେଉଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
- ପ୍ରମ୍ପ୍ଟ ଭିନ୍ନତା କାରଣରେ କ୍ୟାଶ୍ ମିସ୍ ହେଉଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
- TTL କିମ୍ବା କ୍ୟାଶ୍ ରଣନୀତି ସମଯୋଜନ ବିଚାର କରନ୍ତୁ

## ପ୍ରଦାତା ତୁଳନା {#provider-comparison}

| ବୈଶିଷ୍ଟ୍ୟ | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| କ୍ୟାଶ୍ API | cachedContents | HTTP headers | ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ | କ୍ୟାଶ୍ ନିୟନ୍ତ୍ରଣ |
| TTL ନିୟନ୍ତ୍ରଣ | ସ୍ପଷ୍ଟ | headers ମାଧ୍ୟମରେ | ପ୍ରଦାତା-ନିର୍ଭର | Ephemeral/persistent |
| ସର୍ବାଧିକ କ୍ୟାଶ୍ ଆକାର | 1M ଟୋକେନ୍ | ପ୍ରଦାତା-ନିର୍ଭର | ପ୍ରଦାତା-ନିର୍ଭର | 1M ଟୋକେନ୍ |
| ଖର୍ଚ୍ଚ କମିବା | 90% | 90% | ପ୍ରଦାତା-ନିର୍ଭର | 90% |
| ନିରୀକ୍ଷଣ | ବିସ୍ତୃତ | ମେଟ୍ରିକ୍ସ ମାଧ୍ୟମରେ | ପ୍ରଦାତା-ନିର୍ଭର | ବ୍ୟବହାର ମାଧ୍ୟମରେ |

## ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ {#next-steps}

1. **ଆପଣଙ୍କ ପ୍ରଦାତା ବାଛନ୍ତୁ**: ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଆଧାରରେ ଚୟନ କରନ୍ତୁ
2. **କ୍ୟାଶିଂ କନଫିଗର୍ କରନ୍ତୁ**: ପ୍ରଦାତା-ନିର୍ଦ୍ଦିଷ୍ଟ କ୍ୟାଶିଂ ସେଟ୍ ଅପ୍ କରନ୍ତୁ
3. **କ୍ୟାଶିଂ ପରୀକ୍ଷା କରନ୍ତୁ**: ଏହା ଆପଣଙ୍କ ପ୍ରମ୍ପ୍ଟ ସହ କାମ କରୁଛି କି ଯାଞ୍ଚ କରନ୍ତୁ
4. **ବ୍ୟବହାର ନିରୀକ୍ଷଣ କରନ୍ତୁ**: କ୍ୟାଶ୍ ହିଟ୍ ଓ ଖର୍ଚ୍ଚ ସଞ୍ଚୟ ଟ୍ରାକ୍ କରନ୍ତୁ
5. **ଅନୁକୂଳନ କରନ୍ତୁ**: ଫଳାଫଳ ଆଧାରରେ TTL ଓ କ୍ୟାଶ୍ ରଣନୀତି ସମଯୋଜନ କରନ୍ତୁ
