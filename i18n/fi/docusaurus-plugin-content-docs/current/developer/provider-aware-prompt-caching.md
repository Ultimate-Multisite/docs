---
title: Palveluntarjoajatietoinen kehotteiden välimuisti
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Palveluntarjoajat huomioiva kehotteiden välimuisti

Superdav AI Agent v1.12.0 tuo käyttöön **palveluntarjoajat huomioivan kehotteiden välimuistin**, joka optimoi API-kustannuksia ja viivettä välimuistittamalla kehotteita eri LLM-palveluntarjoajien välillä. Jokaisella palveluntarjoajalla on erilaiset välimuistimekanismit ja määritykset.

## Yleiskatsaus {#overview}

Kehotteiden välimuisti mahdollistaa seuraavat asiat:

- Välimuistita suuria, usein käytettyjä kehotteita
- Vähennä API-kustannuksia välttämällä tarpeetonta uudelleenkäsittelyä
- Paranna viivettä välimuistitetuissa pyynnöissä
- Hallitse välimuistin elinkaarta eksplisiittisesti

Eri palveluntarjoajat toteuttavat välimuistin eri tavoin:

- **Google Gemini**: `cachedContents` API
- **Azure OpenAI**: Kehotteiden välimuisti TTL:n kanssa
- **OpenRouter**: Palveluntarjoajakohtainen välimuisti
- **Vertex Anthropic**: Kehotteiden välimuisti välimuistin hallinnalla

## Google Gemini: cachedContents API {#google-gemini-cachedcontents-api}

Google Gemini tarjoaa eksplisiittisen välimuistin hallinnan `cachedContents` API:n kautta.

### Määritys {#configuration}

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

### Välimuistitetun kehotteen luominen {#creating-a-cached-prompt}

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

### Välimuistitetun kehotteen käyttäminen {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Välimuistin elinkaari {#cache-lifecycle}

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

### Parhaat käytännöt Geminille {#best-practices-for-gemini}

- **Aseta sopiva TTL**: Tasapainota kustannussäästöt ja välimuistin vanhentuneisuus
- **Välimuistita järjestelmäkehotteet**: Käytä samaa järjestelmäkehotetta uudelleen eri pyynnöissä
- **Seuraa välimuistin käyttöä**: Seuraa, mitä välimuisteja käytetään eniten
- **Siivoa vanhentuneet välimuistit**: Poista käyttämättömät välimuistit säännöllisesti

## Azure OpenAI: Kehotteiden välimuisti {#azure-openai-prompt-caching}

Azure OpenAI tukee kehotteiden välimuistia automaattisella TTL-hallinnalla.

### Määritys {#configuration-1}

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

### Välimuistin käyttöönotto {#enabling-caching}

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

### Välimuistiotsakkeet {#cache-headers}

Azure OpenAI käyttää HTTP-otsakkeita välimuistin hallintaan:

```
Cache-Control: max_age=3600
```

Tuetut arvot:

- `max_age=<seconds>`: Välimuistita määritetyksi kestoksi
- `no_cache`: Älä välimuistita tätä pyyntöä
- `no_store`: Älä välimuistita äläkä käytä uudelleen

### Välimuistin käytön seuranta {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Parhaat käytännöt Azure OpenAI:lle {#best-practices-for-azure-openai}

- **Käytä yhdenmukaisia kehotteita**: Identtiset kehotteet hyötyvät välimuistista
- **Aseta kohtuullinen TTL**: Tasapainota kustannukset ja tuoreus
- **Seuraa välimuistimittareita**: Seuraa välimuistin luontia suhteessa osumiin
- **Eräytä samankaltaiset pyynnöt**: Ryhmittele pyynnöt maksimoidaksesi välimuistiosumat

## OpenRouter: Palveluntarjoajakohtainen välimuisti {#openrouter-provider-specific-caching}

OpenRouter tukee välimuistia taustalla olevien palveluntarjoajien (OpenAI, Anthropic jne.) kautta.

### Määritys {#configuration-2}

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

### OpenRouter-välimuistin käyttäminen {#using-openrouter-caching}

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

### Palveluntarjoajakohtaiset vaihtoehdot {#provider-specific-options}

Eri palveluntarjoajilla on erilaiset välimuistimekanismit:

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

### Parhaat käytännöt OpenRouterille {#best-practices-for-openrouter}

- **Tunne palveluntarjoajasi välimuisti**: Jokaisella palveluntarjoajalla on erilaiset mekanismit
- **Testaa välimuistin toimintaa**: Varmista, että välimuisti toimii valitsemasi palveluntarjoajan kanssa
- **Seuraa kustannuksia**: Seuraa välimuistin tuottamia säästöjä
- **Käytä yhdenmukaisia malleja**: Mallien vaihtaminen estää välimuistiosumat

## Vertex Anthropic: Kehotteiden välimuisti välimuistin hallinnalla {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) tukee kehotteiden välimuistia eksplisiittisellä välimuistin hallinnalla.

### Määritys {#configuration-3}

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

### Vertex Anthropic -välimuistin käyttö {#using-vertex-anthropic-caching}

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

### Välimuistin hallintatyypit {#cache-control-types}

- **ephemeral**: Välimuisti pyynnön keston ajaksi (oletus)
- **persistent**: Välimuisti useiden pyyntöjen välillä (jos tuettu)

### Välimuistin käytön seuranta {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Vertex Anthropic -parhaat käytännöt {#best-practices-for-vertex-anthropic}

- **Käytä ephemeral-välimuistia**: Hyvä yhden istunnon välimuistitukseen
- **Aseta max_tokens asianmukaisesti**: Tasapainota välimuistin koko ja kustannukset
- **Seuraa välimuistimittareita**: Seuraa välimuistin tehokkuutta
- **Testaa omalla työkuormallasi**: Varmista, että välimuistitus hyödyttää käyttötapaustasi

## Palveluntarjoajien välinen välimuististrategia {#cross-provider-caching-strategy}

### Yhtenäinen määritys {#unified-configuration}

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

### Palveluntarjoajan tunnistus {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Use provider-specific caching configuration
```

### Varastrategia {#fallback-strategy}

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

## Kustannusten optimointi {#cost-optimization}

### Laske säästöt {#calculate-savings}

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

### Optimointivinkit {#optimization-tips}

- **Tallenna suuret järjestelmäkehotteet välimuistiin**: Suurimmat kustannussäästöt
- **Käytä kontekstia uudelleen**: Tallenna usein käytetyt kontekstiasiakirjat välimuistiin
- **Eräpyynnöt**: Ryhmittele samankaltaiset pyynnöt välimuistiosumien maksimoimiseksi
- **Seuraa välimuistin tehokkuutta**: Seuraa todellisia säästöjä
- **Säädä TTL:ää**: Tasapainota kustannukset ja ajantasaisuus

## Vianmääritys {#troubleshooting}

### Välimuistia ei käytetä {#cache-not-being-used}

- Varmista, että välimuistitus on otettu käyttöön määrityksessä
- Tarkista, että kehotteet ovat identtisiä (välimuistitus edellyttää täsmällistä vastaavuutta)
- Varmista, ettei välimuisti ole vanhentunut
- Tarkista palveluntarjoajakohtaiset välimuistin rajat

### Välimuistin luonti epäonnistuu {#cache-creation-failing}

- Varmista, että välimuistin koko on palveluntarjoajan rajojen sisällä
- Tarkista, että välimuistin hallinnan syntaksi on oikein
- Varmista, että palveluntarjoaja tukee välimuistitusta mallillesi
- Tarkista rajoitukset palveluntarjoajan dokumentaatiosta

### Odottamattomat kustannukset {#unexpected-costs}

- Seuraa välimuistin luontia suhteessa välimuistin lukutokeneihin
- Varmista, että välimuistia todella käytetään
- Tarkista, johtuvatko välimuistihudit kehotteiden vaihteluista
- Harkitse TTL:n tai välimuististrategian säätämistä

## Palveluntarjoajien vertailu {#provider-comparison}

| Ominaisuus | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Välimuisti-API | cachedContents | HTTP-otsakkeet | Palveluntarjoajakohtainen | Välimuistin hallinta |
| TTL:n hallinta | Eksplisiittinen | Otsakkeiden kautta | Palveluntarjoajasta riippuva | Ephemeral/persistent |
| Välimuistin enimmäiskoko | 1M tokenia | Palveluntarjoajasta riippuva | Palveluntarjoajasta riippuva | 1M tokenia |
| Kustannusten alennus | 90% | 90% | Palveluntarjoajasta riippuva | 90% |
| Seuranta | Yksityiskohtainen | Mittareiden kautta | Palveluntarjoajasta riippuva | Käytön kautta |

## Seuraavat vaiheet {#next-steps}

1. **Valitse palveluntarjoajasi**: Valitse tarpeidesi perusteella
2. **Määritä välimuistitus**: Ota käyttöön palveluntarjoajakohtainen välimuistitus
3. **Testaa välimuistitus**: Varmista, että se toimii kehotteidesi kanssa
4. **Seuraa käyttöä**: Seuraa välimuistiosumia ja kustannussäästöjä
5. **Optimoi**: Säädä TTL:ää ja välimuististrategiaa tulosten perusteella
