---
title: პროვაიდერზე მორგებული პრომპტის ქეშირება
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# პროვაიდერზე მორგებული პრომპტის ქეშირება {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 წარმოგიდგენთ **პროვაიდერზე მორგებული პრომპტის ქეშირებას**, რომელიც API-ის ხარჯებსა და დაყოვნებას ოპტიმიზაციას უკეთებს სხვადასხვა LLM პროვაიდერში პრომპტების ქეშირებით. თითოეულ პროვაიდერს განსხვავებული ქეშირების მექანიზმები და კონფიგურაციები აქვს.

## მიმოხილვა {#overview}

პრომპტის ქეშირება საშუალებას გაძლევთ:

- დააქეშიროთ დიდი, ხშირად გამოყენებული პრომპტები
- შეამციროთ API-ის ხარჯები ზედმეტი დამუშავების თავიდან აცილებით
- გააუმჯობესოთ დაყოვნება დაქეშირებული მოთხოვნებისთვის
- ცხადად მართოთ ქეშის სასიცოცხლო ციკლი

სხვადასხვა პროვაიდერი ქეშირებას განსხვავებულად ახორციელებს:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: პრომპტის ქეშირება TTL-ით
- **OpenRouter**: პროვაიდერის სპეციფიკური ქეშირება
- **Vertex Anthropic**: პრომპტის ქეშირება ქეშის კონტროლით

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini უზრუნველყოფს ცხად ქეშის მართვას `cachedContents` API-ის მეშვეობით.

### კონფიგურაცია {#configuration}

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

### დაქეშირებული პრომპტის შექმნა {#creating-a-cached-prompt}

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

### დაქეშირებული პრომპტის გამოყენება {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### ქეშის სასიცოცხლო ციკლი {#cache-lifecycle}

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

### საუკეთესო პრაქტიკები Gemini-სთვის {#best-practices-for-gemini}

- **დააყენეთ შესაბამისი TTL**: დააბალანსეთ ხარჯების დაზოგვა და ქეშის დაძველება
- **დააქეშირეთ სისტემური პრომპტები**: ხელახლა გამოიყენეთ იგივე სისტემური პრომპტი მოთხოვნებს შორის
- **აკონტროლეთ ქეშის გამოყენება**: თვალყური ადევნეთ, რომელი ქეშები გამოიყენება ყველაზე მეტად
- **გაასუფთავეთ ვადაგასული ქეშები**: პერიოდულად წაშალეთ გამოუყენებელი ქეშები

## Azure OpenAI: პრომპტის ქეშირება {#azure-openai-prompt-caching}

Azure OpenAI მხარს უჭერს პრომპტის ქეშირებას ავტომატური TTL მართვით.

### კონფიგურაცია {#configuration-1}

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

### ქეშირების ჩართვა {#enabling-caching}

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

### ქეშის სათაურები {#cache-headers}

Azure OpenAI ქეშის კონტროლისთვის იყენებს HTTP სათაურებს:

```
Cache-Control: max_age=3600
```

მხარდაჭერილი მნიშვნელობები:

- `max_age=<seconds>`: დააქეშირეთ მითითებული ხანგრძლივობით
- `no_cache`: არ დააქეშიროთ ეს მოთხოვნა
- `no_store`: არ დააქეშიროთ და არ გამოიყენოთ ხელახლა

### ქეშის გამოყენების მონიტორინგი {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### საუკეთესო პრაქტიკები Azure OpenAI-სთვის {#best-practices-for-azure-openai}

- **გამოიყენეთ თანმიმდევრული პრომპტები**: იდენტური პრომპტები სარგებელს იღებს ქეშირებიდან
- **დააყენეთ გონივრული TTL**: დააბალანსეთ ხარჯი და სიახლე
- **აკონტროლეთ ქეშის მეტრიკები**: თვალყური ადევნეთ ქეშის შექმნასა და მოხვედრებს
- **დააჯგუფეთ მსგავსი მოთხოვნები**: დააჯგუფეთ მოთხოვნები ქეშში მოხვედრების მაქსიმიზაციისთვის

## OpenRouter: პროვაიდერის სპეციფიკური ქეშირება {#openrouter-provider-specific-caching}

OpenRouter მხარს უჭერს ქეშირებას ძირითადი პროვაიდერების (OpenAI, Anthropic და სხვ.) მეშვეობით.

### კონფიგურაცია {#configuration-2}

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

### OpenRouter ქეშირების გამოყენება {#using-openrouter-caching}

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

### პროვაიდერის სპეციფიკური ვარიანტები {#provider-specific-options}

სხვადასხვა პროვაიდერს განსხვავებული ქეშირების მექანიზმები აქვს:

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

### საუკეთესო პრაქტიკები OpenRouter-ისთვის {#best-practices-for-openrouter}

- **იცოდეთ თქვენი პროვაიდერის ქეშირება**: თითოეულ პროვაიდერს განსხვავებული მექანიზმები აქვს
- **შეამოწმეთ ქეშირების ქცევა**: გადაამოწმეთ, რომ ქეშირება მუშაობს თქვენს არჩეულ პროვაიდერთან
- **აკონტროლეთ ხარჯები**: თვალყური ადევნეთ ქეშირებით მიღებულ დაზოგვას
- **გამოიყენეთ თანმიმდევრული მოდელები**: მოდელების შეცვლა ქეშში მოხვედრებს არღვევს

## Vertex Anthropic: პრომპტის ქეშირება ქეშის კონტროლით {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) მხარს უჭერს პრომპტის ქეშირებას ცხადი ქეშის კონტროლით.

### კონფიგურაცია {#configuration-3}

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

### Vertex Anthropic ქეშირების გამოყენება {#using-vertex-anthropic-caching}

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

### ქეშის კონტროლის ტიპები {#cache-control-types}

- **ephemeral**: ქეში მოთხოვნის ხანგრძლივობისთვის (ნაგულისხმევი)
- **persistent**: ქეში მრავალ მოთხოვნაზე (თუ მხარდაჭერილია)

### ქეშის გამოყენების მონიტორინგი {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### საუკეთესო პრაქტიკები Vertex Anthropic-ისთვის {#best-practices-for-vertex-anthropic}

- **გამოიყენეთ ephemeral ქეშირება**: კარგია ერთსესიანი ქეშირებისთვის
- **დააყენეთ max_tokens შესაბამისად**: დააბალანსეთ ქეშის ზომა და ღირებულება
- **აკონტროლეთ ქეშის მეტრიკები**: თვალყური ადევნეთ ქეშის ეფექტიანობას
- **გამოცადეთ თქვენი დატვირთვით**: გადაამოწმეთ, რომ ქეშირება სარგებელს აძლევს თქვენს გამოყენების შემთხვევას

## პროვაიდერებს შორის ქეშირების სტრატეგია {#cross-provider-caching-strategy}

### ერთიანი კონფიგურაცია {#unified-configuration}

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

### პროვაიდერის გამოვლენა {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### სარეზერვო სტრატეგია {#fallback-strategy}

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

## ღირებულების ოპტიმიზაცია {#cost-optimization}

### დანაზოგის გამოთვლა {#calculate-savings}

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

### ოპტიმიზაციის რჩევები {#optimization-tips}

- **დააქეშეთ დიდი სისტემური prompts**: ყველაზე დიდი ხარჯების დაზოგვა
- **ხელახლა გამოიყენეთ კონტექსტი**: დააქეშეთ ხშირად გამოყენებული კონტექსტური დოკუმენტები
- **დააჯგუფეთ მოთხოვნები**: დააჯგუფეთ მსგავსი მოთხოვნები ქეშის მოხვედრების მაქსიმიზაციისთვის
- **აკონტროლეთ ქეშის ეფექტიანობა**: თვალყური ადევნეთ რეალურ დანაზოგს
- **დაარეგულირეთ TTL**: დააბალანსეთ ღირებულება და სიახლე

## პრობლემების მოგვარება {#troubleshooting}

### ქეში არ გამოიყენება {#cache-not-being-used}

- გადაამოწმეთ, რომ ქეშირება ჩართულია კონფიგურაციაში
- შეამოწმეთ, რომ prompts იდენტურია (ქეშირებას ზუსტი დამთხვევა სჭირდება)
- გადაამოწმეთ, რომ ქეშს ვადა არ გასვლია
- შეამოწმეთ პროვაიდერისთვის სპეციფიკური ქეშის ლიმიტები

### ქეშის შექმნა ვერ ხერხდება {#cache-creation-failing}

- გადაამოწმეთ, რომ ქეშის ზომა პროვაიდერის ლიმიტებშია
- შეამოწმეთ, რომ ქეშის კონტროლის სინტაქსი სწორია
- დარწმუნდით, რომ პროვაიდერს თქვენი მოდელისთვის ქეშირების მხარდაჭერა აქვს
- გადახედეთ პროვაიდერის დოკუმენტაციას შეზღუდვებისთვის

### მოულოდნელი ხარჯები {#unexpected-costs}

- აკონტროლეთ ქეშის შექმნის და ქეშის წაკითხვის ტოკენები
- გადაამოწმეთ, რომ ქეში ნამდვილად გამოიყენება
- შეამოწმეთ ქეშის აცდენები prompt-ის ვარიაციების გამო
- განიხილეთ TTL-ის ან ქეშის სტრატეგიის დარეგულირება

## პროვაიდერების შედარება {#provider-comparison}

| ფუნქცია | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | პროვაიდერისთვის სპეციფიკური | ქეშის კონტროლი |
| TTL კონტროლი | პირდაპირი | headers-ის მეშვეობით | პროვაიდერზე დამოკიდებული | Ephemeral/persistent |
| მაქს. ქეშის ზომა | 1M tokens | პროვაიდერზე დამოკიდებული | პროვაიდერზე დამოკიდებული | 1M tokens |
| ღირებულების შემცირება | 90% | 90% | პროვაიდერზე დამოკიდებული | 90% |
| მონიტორინგი | დეტალური | metrics-ის მეშვეობით | პროვაიდერზე დამოკიდებული | usage-ის მეშვეობით |

## შემდეგი ნაბიჯები {#next-steps}

1. **აირჩიეთ თქვენი პროვაიდერი**: აირჩიეთ თქვენი საჭიროებების მიხედვით
2. **დააკონფიგურირეთ ქეშირება**: დააყენეთ პროვაიდერისთვის სპეციფიკური ქეშირება
3. **გამოცადეთ ქეშირება**: გადაამოწმეთ, რომ ის მუშაობს თქვენს prompts-თან
4. **აკონტროლეთ გამოყენება**: თვალყური ადევნეთ ქეშის მოხვედრებს და ღირებულების დანაზოგს
5. **ოპტიმიზაცია მოახდინეთ**: დაარეგულირეთ TTL და ქეშის სტრატეგია შედეგების მიხედვით
