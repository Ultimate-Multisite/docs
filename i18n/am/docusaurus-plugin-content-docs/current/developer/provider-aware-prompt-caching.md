---
title: አቅራቢን የሚያውቅ የፕሮምፕት ማከማቻ
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# በአቅራቢው ሁኔታ ላይ የተመሰረተ Prompt Caching {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 **በአቅራቢው ሁኔታ ላይ የተመሰረተ prompt caching**ን አስተዋውቋል፣ ይህም በተለያዩ LLM አቅራቢዎች (providers) መካከል promptsን በማስቀመጥ (caching) የAPI ወጪዎችን እና የጊዜ መጓጓዣን (latency) ያመቻቻል። እያንዳንዱ አቅራቢ የተለያየ የማስቀመጥ ዘዴ እና ውቅረት አለው።

## አጠቃላይ እይታ (Overview) {#overview}

Prompt caching የሚከተሉትን እንዲያደርጉ ያስችልዎታል፦

- ትልቅ እና በተደጋጋሚ ጥቅም ላይ የሚውሉ promptsዎችን ማስቀመጥ (Cache)
- ተደጋጋሚ ሂደት በማስወገድ የAPI ወጪዎችን መቀነስ
- ለተቀመጠላቸው ጥያቄዎች የጊዜ መጓጓዣን (latency) ማሻሻል
- የcache የህይወት ዑደትን (lifecycle) በግልጽ መቆጣጠር

የተለያዩ አቅራቢዎች cachingን በተለያየ መንገድ ይተገብራሉ።

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: በTTL (Time To Live) Prompt caching
- **OpenRouter**: በአቅራቢው የተወሰነ caching
- **Vertex Anthropic**: በcache control Prompt caching

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini በ`cachedContents` API አማካይነት ግልጽ የcache አስተዳደርን ያቀርባል።

### ውቅረት (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // በሰከንዶች ውስጥ 1 ሰዓት
        'max_tokens' => 1000000, // ማስቀመጥ የሚችለው ከፍተኛ የtokens ብዛት
    ],
];
```

### የተቀመጠ Prompt መፍጠር (Creating a Cached Prompt) {#creating-a-cached-prompt}

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

// ይመልሳል: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### የተቀመጠ Prompt መጠቀም (Using a Cached Prompt) {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### የCache የህይወት ዑደት (Cache Lifecycle) {#cache-lifecycle}

```php
// የተቀመጡ ይዘቶችን መዘርዘር
$caches = $gemini->list_cached_contents();

// የcache ዝርዝሮችን ማግኘት
$cache = $gemini->get_cached_content( 'abc123' );

// የcache TTLን ማስፋት
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // ወደ 2 ሰዓት ማስፋት
);

// cacheን መሰረዝ
$gemini->delete_cached_content( 'abc123' );
```

### ለGemini ምርጥ አሠራሮች (Best Practices for Gemini) {#best-practices-for-gemini}

- **ትክክለኛ TTLን ያዘጋጁ**: ወጪ ቁጠባን ከcache መበላሸት ጋር ሚዛን ይያዙ።
- **የsystem promptsን ማስቀመጥ**: በተለያዩ ጥያቄዎች ላይ አንድ አይነት system promptን እንደገና ይጠቀሙ።
- **የcache አጠቃቀምን መከታተል**: የትኞቹ caches በብዛት ጥቅም ላይ እንደሚውሉ ይከታተሉ።
- **የማለቁ cachesን ማጽዳት**: ጥቅም ላይ ያልዋሉ cachesን በየጊዜው ይሰርዙ።

## Azure OpenAI: Prompt Caching {#azure-openai-prompt-caching}

Azure OpenAI በራስ-ሰር TTL አስተዳደር (automatic TTL management) አማካይነት prompt cachingን ይደግፋል።

### ውቅረት (Configuration) {#configuration-1}

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

### cachingን ማብራት (Enabling Caching) {#enabling-caching}

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

// ምላሹ የcache አጠቃቀምን ያካትታል:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### የCache Headers {#cache-headers}

Azure OpenAI ለcache ቁጥጥር HTTP headersን ይጠቀማል፦

```
Cache-Control: max_age=3600
```

የሚደገፉ እሴቶች (Supported values):

- `max_age=<seconds>`: ለተወሰነ ጊዜ ማስቀመጥ (Cache for specified duration)
- `no_cache`: ይህን ጥያቄ ማስቀመጥ የለብህም (Don't cache this request)
- `no_store`: ማስቀመጥ የለብህም እና እንደገና መጠቀም የለብህም (Don't cache and don't reuse)

### የCache አጠቃቀምን መከታተል (Monitoring Cache Usage) {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### ለAzure OpenAI ምርጥ አሠራሮች (Best Practices for Azure OpenAI) {#best-practices-for-azure-openai}

- **አንድ ወጥ prompts ይጠቀሙ**: ተመሳሳይ prompts በcaching ይጠቅማሉ።
- **ተመጣጣኝ TTL ያዘጋጁ**: ወጪን ከቅ fraîche-ness ጋር ሚዛን ይያዙ።
- **የcache መለኪያዎችን ይከታተሉ**: የcache መፍጠርን ከhits ጋር ያወዳድሩ።
- **ተመሳሳይ ጥያቄዎችን በቡድን ያድርጉ**: የcache hitsን ከፍ ለማድረግ ጥያቄዎችን ይሰበስቡ።

## OpenRouter: በአቅራቢው የተወሰነ Caching {#openrouter-provider-specific-caching}

OpenRouter በየየአቅራቢዎቹ (OpenAI, Anthropic, ወዘተ) አማካይነት cachingን ይደግፋል።

### ውቅረት (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // የOpenAI cachingን መጠቀም
    ],
];
```

### OpenRouter Cachingን መጠቀም (Using OpenRouter Caching) {#using-openrouter-caching}

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

### በአቅራቢው የተወሰኑ አማራጮች (Provider-Specific Options) {#provider-specific-options}

የተለያዩ አቅራቢዎች የተለያዩ የማስቀመጥ ዘዴዎች አሏቸው፦

```php
// ከOpenAI ጋር የሚጣጣም caching
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// ከAnthropic ጋር የሚጣጣም caching
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

### ለOpenRouter ምርጥ አሠራሮች (Best Practices for OpenRouter) {#best-practices-for-openrouter}

- **የአቅራቢዎን caching ይወቁ**: እያንዳንዱ አቅራቢ የተለያየ ዘዴ አለው።
- **የcaching ባህሪን ይፈትኑ**: የተመረጠው አቅራቢዎ caching እንደሚሰራ ያረጋግጡ።
- **ወጪዎችን ይከታተሉ**: ከcaching የሚገኘውን ቁጠባ ይከታተሉ።
- **አንድ ወጥ models ይጠቀሙ**: models መቀየር የcache hitsን ያቋርጣል።

## Vertex Anthropic: Cache Control ባለው Prompt Caching {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) ግልጽ የcache ቁጥጥር (explicit cache control) አማካይነት prompt cachingን ይደግፋል።

### ውቅረት (Configuration) {#configuration-3}

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

### Vertex Anthropic Cachingን መጠቀም (Using Vertex Anthropic Caching) {#using-vertex-anthropic-caching}

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

// ምላሹ የcache መለኪያዎችን ያካትታል:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### የCache ቁጥጥር አይነቶች (Cache Control Types) {#cache-control-types}

- **ephemeral**: ለጥያቄው ጊዜ የሚቆይ cache (በቅድፋሚነት)
- **persistent**: በተለያዩ ጥያቄዎች ላይ የሚቆይ cache (የሚደገፍ ከሆነ)

### የCache አጠቃቀምን መከታተል (Monitoring Cache Usage) {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### ለVertex Anthropic ምርጥ አሠራሮች (Best Practices for Vertex Anthropic) {#best-practices-for-vertex-anthropic}

- **ephemeral cachingን ይጠቀሙ**: ለአንድ የሰርሽ ክፍለ ጊዜ (single-session) ጥሩ ነው።
- **max_tokensን በትክክል ያዘጋጁ**: የcache መጠንን ከወጪ ጋር ሚዛን ይያዙ።
- **የcache መለኪያዎችን ይከታተሉ**: የcache ብቃትን ይከታተሉ።
- **በስራዎ ይፈትኑ**: caching ለተጠቃሚዎ ሁኔታ እንደሚጠቅም ያረጋግጡ።

## በሁሉም አቅራቢዎች ላይ የሚሰራ Cache ስትራቴጂ (Cross-Provider Caching Strategy) {#cross-provider-caching-strategy}

### አንድ ወጥ ውቅረት (Unified Configuration) {#unified-configuration}

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

### የአቅራቢ መለየት (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// በአቅራቢው የተወሰነ caching ውቅረትን መጠቀም
```

### የመልቀቅ ስትራቴጂ (Fallback Strategy) {#fallback-strategy}

```php
try {
    // በዋናው አቅራቢ caching ለመሞከር
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // ወደ non-cached ጥያቄ መመለስ
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## ወጪን ማመቻቸት (Cost Optimization) {#cost-optimization}

### ቁጠባን ማስላት (Calculate Savings) {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// የተለመደ ዋጋ (በአቅራቢው ይለያያል):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 እጥፍ ርካሽ
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 እጥፍ ርካሽ
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### የማመቻቸት ምክሮች (Optimization Tips) {#optimization-tips}

- **ትልቅ system prompts ማስቀመጥ**: ትልቁ የወጪ ቁጠባ።
- **contextን እንደገና መጠቀም**: በተደጋጋሚ ጥቅም ላይ የሚውሉ context documents ማስቀመጥ።
- **ጥያቄዎችን በቡድን ማድረግ**: የcache hitsን ከፍ ለማድረግ ጥያቄዎችን ይሰበስቡ።
- **የcache ብቃትን መከታተል**: ትክክለኛ ቁጠባን ይከታተሉ።
- **TTL ማስተካከል**: ወጪን ከቅ fraîche-ness ጋር ሚዛን ይያዙ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

### Cache ጥቅም ላይ አለመዋል (Cache not being used) {#cache-not-being-used}

- caching በቅንብር (configuration) ውስጥ መብራቱን ያረጋግጡ።
- prompts ተመሳሳይ መሆናቸውን ያረጋግጡ (caching ትክክለኛ ጥምረት ይጠይቃል)።
- cache አልማለቀም (expired) መሆኑን ያረጋግጡ።
- የአቅራቢውን የተወሰነ የcache ገደቦችን ይፈትሹ።

### Cache መፍጠር መሳሳት (Cache creation failing) {#cache-creation-failing}

- የcache መጠኑ በአቅራቢው ገደብ ውስጥ መሆኑን ያረጋግጡ።
- የትክክለኛውን አጠቃቀም (usage) ይፈጽሙ።

### የውሂብ ፍሰት (Data Flow) {#unexpected-costs}

---

**ማስታወሻ:** የጽሑፍ ክፍል አልተሰጠም።

---
