---
title: Taisceadh Promtaí atá Feasach ar Sholáthraithe
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Taisceadh Leideanna atá Feasach ar Sholáthraithe

Tugann Superdav AI Agent v1.12.0 isteach **taisceadh leideanna atá feasach ar sholáthraithe**, a bharrfheabhsaíonn costais API agus foighne trí leideanna a thaisceadh thar sholáthraithe LLM éagsúla. Tá meicníochtaí agus cumraíochtaí taiscthe éagsúla ag gach soláthraí.

## Forbhreathnú

Ligeann taisceadh leideanna duit:

- Leideanna móra a úsáidtear go minic a thaisceadh
- Costais API a laghdú trí phróiseáil iomarcach a sheachaint
- Foighne a fheabhsú d’iarratais thaiscthe
- Saolré na taisce a bhainistiú go follasach

Cuireann soláthraithe éagsúla taisceadh i bhfeidhm ar bhealaí éagsúla:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Taisceadh leideanna le TTL
- **OpenRouter**: Taisceadh sonrach don soláthraí
- **Vertex Anthropic**: Taisceadh leideanna le rialú taisce

## Google Gemini: API cachedContents

Soláthraíonn Google Gemini bainistíocht fhollasach taisce tríd an API `cachedContents`.

### Cumraíocht

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

### Leid Thaiscthe a Chruthú

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

### Leid Thaiscthe a Úsáid

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Saolré na Taisce

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

### Dea-Chleachtais do Gemini

- **Socraigh TTL oiriúnach**: Cothromaigh coigilteas costais i gcoinne seanchaiteacht na taisce
- **Taisc leideanna córais**: Athúsáid an leid chórais chéanna thar iarratais
- **Déan monatóireacht ar úsáid na taisce**: Rianaigh cé na taiscí is mó a úsáidtear
- **Glan taiscí atá imithe in éag**: Scrios taiscí nach n-úsáidtear ó am go chéile

## Azure OpenAI: Taisceadh Leideanna

Tacaíonn Azure OpenAI le taisceadh leideanna le bainistíocht uathoibríoch TTL.

### Cumraíocht

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

### Taisceadh a Chumasú

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

### Ceanntásca Taisce

Úsáideann Azure OpenAI ceanntásca HTTP le haghaidh rialú taisce:

```
Cache-Control: max_age=3600
```

Luachanna tacaithe:

- `max_age=<seconds>`: Taisc ar feadh na tréimhse sonraithe
- `no_cache`: Ná taisc an t-iarratas seo
- `no_store`: Ná taisc agus ná hathúsáid

### Monatóireacht ar Úsáid na Taisce

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Dea-Chleachtais do Azure OpenAI

- **Úsáid leideanna comhsheasmhacha**: Baineann leideanna comhionanna tairbhe as taisceadh
- **Socraigh TTL réasúnta**: Cothromaigh costas i gcoinne úire
- **Déan monatóireacht ar mhéadrachtaí taisce**: Rianaigh cruthú taisce i gcoinne amas
- **Baiscigh iarratais chosúla**: Grúpáil iarratais chun amas taisce a uasmhéadú

## OpenRouter: Taisceadh Sonrach don Soláthraí

Tacaíonn OpenRouter le taisceadh trí na soláthraithe bunúsacha (OpenAI, Anthropic, srl.).

### Cumraíocht

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

### Taisceadh OpenRouter a Úsáid

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

### Roghanna Sonracha don Soláthraí

Tá meicníochtaí taiscthe éagsúla ag soláthraithe éagsúla:

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

### Dea-Chleachtais do OpenRouter

- **Bíodh taisceadh do sholáthraí ar eolas agat**: Tá meicníochtaí éagsúla ag gach soláthraí
- **Tástáil iompar taiscthe**: Deimhnigh go n-oibríonn taisceadh leis an soláthraí atá roghnaithe agat
- **Déan monatóireacht ar chostais**: Rianaigh coigilteas ó thaisceadh
- **Úsáid samhlacha comhsheasmhacha**: Briseann athrú samhlacha amas taisce

## Vertex Anthropic: Taisceadh Leideanna le Rialú Taisce

Tacaíonn Vertex Anthropic (Google Cloud) le taisceadh leideanna le rialú follasach taisce.

### Cumraíocht

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

### Caching Vertex Anthropic a Úsáid

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

### Cineálacha Rialaithe Taisce

- **ephemeral**: Taisce ar feadh ré an iarratais (réamhshocrú)
- **persistent**: Taisce thar iliomad iarratas (má thacaítear leis)

### Monatóireacht ar Úsáid Taisce

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Dea-Chleachtais do Vertex Anthropic

- **Úsáid caching ephemeral**: Maith do thaisceadh seisiúin aonair
- **Socraigh max_tokens go cuí**: Cothromaigh méid na taisce i gcoinne an chostais
- **Déan monatóireacht ar mhéadrachtaí taisce**: Rianaigh éifeachtacht na taisce
- **Tástáil le d’ualach oibre**: Deimhnigh go dtéann taisceadh chun tairbhe do chás úsáide

## Straitéis Taisce Thras-Sholáthraí

### Cumraíocht Aontaithe

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

### Brath Soláthraí

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Straitéis Chúltaca

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

## Barrfheabhsú Costais

### Coigilteas a Ríomh

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

### Leideanna Barrfheabhsaithe

- **Cuir prompts córais mhóra sa taisce**: An coigilteas costais is mó
- **Athúsáid comhthéacs**: Cuir doiciméid chomhthéacs a úsáidtear go minic sa taisce
- **Baiscigh iarratais**: Grúpáil iarratais chosúla chun buillí taisce a uasmhéadú
- **Déan monatóireacht ar éifeachtacht taisce**: Rianaigh coigilteas iarbhír
- **Coigeartaigh TTL**: Cothromaigh costas i gcoinne úire

## Fabhtcheartú

### Níl an taisce á húsáid

- Deimhnigh go bhfuil caching cumasaithe sa chumraíocht
- Seiceáil go bhfuil na prompts comhionann (teastaíonn meaitseáil bheacht ó caching)
- Deimhnigh nach bhfuil an taisce imithe in éag
- Seiceáil teorainneacha taisce atá sainiúil don soláthraí

### Teipeann ar chruthú taisce

- Deimhnigh go bhfuil méid na taisce laistigh de theorainneacha an tsoláthraí
- Seiceáil go bhfuil comhréir rialaithe taisce ceart
- Cinntigh go dtacaíonn an soláthraí le caching do do mhúnla
- Athbhreithnigh doiciméadú an tsoláthraí le haghaidh teorainneacha

### Costais gan choinne

- Déan monatóireacht ar chruthú taisce i gcoinne comharthaí léite taisce
- Deimhnigh go bhfuil an taisce á húsáid i ndáiríre
- Seiceáil le haghaidh cailliúintí taisce de bharr éagsúlachtaí prompt
- Smaoinigh ar TTL nó straitéis taisce a choigeartú

## Comparáid Soláthraithe

| Gné | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| API Taisce | cachedContents | ceanntásca HTTP | Sainiúil don soláthraí | Rialú taisce |
| Rialú TTL | Sainráite | Trí cheanntásca | Ag brath ar an soláthraí | Ephemeral/persistent |
| Uasmhéid taisce | 1M comharthaí | Ag brath ar an soláthraí | Ag brath ar an soláthraí | 1M comharthaí |
| Laghdú costais | 90% | 90% | Ag brath ar an soláthraí | 90% |
| Monatóireacht | Mionsonraithe | Trí mhéadrachtaí | Ag brath ar an soláthraí | Trí úsáid |

## Na Chéad Chéimeanna Eile

1. **Roghnaigh do sholáthraí**: Roghnaigh bunaithe ar do riachtanais
2. **Cumraigh caching**: Socraigh caching atá sainiúil don soláthraí
3. **Tástáil caching**: Deimhnigh go n-oibríonn sé le do prompts
4. **Déan monatóireacht ar úsáid**: Rianaigh buillí taisce agus coigilteas costais
5. **Barrfheabhsaigh**: Coigeartaigh TTL agus straitéis taisce bunaithe ar thorthaí
