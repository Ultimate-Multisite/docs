---
title: Καταθήκευση Προτροπών με Επίγνωση Παρόχου
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# Καταθήκευση Prompts με Επίγνωση Παρόχου {#provider-aware-prompt-caching}

Το Superdav AI Agent v1.12.0 εισάγει την **cache των prompts με επίγνωση παρόχου (provider-aware prompt caching)**, η οποία βελτιστοποιεί τα κόστη και τη καθυστέρηση των API κάνοντας cache των prompts σε διάφορους παρόχους LLM. Κάθε πάροχος έχει διαφορετικούς μηχανισμούς και ρυθμίσεις caching.

## Επισκόπηση {#overview}

Η καταθήκευση prompts σας επιτρέπει να:

- Κάνετε cache μεγάλων, συχνά χρησιμοποιούμενων prompts
- Μειώνετε τα κόστη των API αποφεύγοντας την επαναληπτική επεξεργασία
- Βελτιώνετε τη καθυστέρηση για τα αιτήματα που έχουν cache
- Διαχειρίζεστε τον κύκλο ζωής του cache ρητά

Οι διαφορετικοί πάροχοι υλοποιούν το caching διαφορετικά:

- **Google Gemini**: API `cachedContents`
- **Azure OpenAI**: Καταθήκευση prompts με TTL
- **OpenRouter**: Caching ειδικό για τον πάροχο
- **Vertex Anthropic**: Καταθήκευση prompts με cache control

## Google Gemini: API cachedContents {#google-gemini-cachedcontents-api}

Το Google Gemini παρέχει διαχείριση cache μέσω του API `cachedContents`.

### Ρύθμιση (Configuration) {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // 1 ώρα σε δευτερόλεπτα
        'max_tokens' => 1000000, // Μέγιστο tokens για cache
    ],
];
```

### Δημιουργία Καταθηκευμένου Prompt {#creating-a-cached-prompt}

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

### Χρήση Καταθηκευμένου Prompt {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'User question here',
    ]
);
```

### Κύκλος Ζωής του Cache {#cache-lifecycle}

```php
// Λίστα των καταθητευμένων περιεχομένων
$caches = $gemini->list_cached_contents();

// Λήψη λεπτομερειών cache
$cache = $gemini->get_cached_content( 'abc123' );

// Επέκταση TTL του cache
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // Επέκταση σε 2 ώρες
);

// Διαγραφή cache
$gemini->delete_cached_content( 'abc123' );
```

### Βέλτιστες Πρακτικές για Gemini {#best-practices-for-gemini}

- **Καθορίστε κατάλληλο TTL**: Ισορροπήστε την εξοικονόμηση κόστους έναντι της παλαιότητας του cache
- **Cache τα system prompts**: Επαναχρησιμοποιήστε το ίδιο system prompt σε αιτήματα
- **Παρακολουθήστε τη χρήση του cache**: Καταγράψτε ποια caches χρησιμοποιούνται περισσότερο
- **Καθαρισμός λήγειν των caches**: Διαγράψτε τα caches που δεν χρησιμοποιούνται περιοδικά

## Azure OpenAI: Καταθήκευση Prompts {#azure-openai-prompt-caching}

Το Azure OpenAI υποστηρίζει την καταθήκευση prompts με αυτόματη διαχείριση TTL.

### Ρύθμιση (Configuration) {#configuration-1}

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

### Ενεργοποίηση Caching {#enabling-caching}

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

// Η απάντηση περιλαμβάνει τη χρήση του cache:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### Headers Cache {#cache-headers}

Το Azure OpenAI χρησιμοποιεί HTTP headers για τον έλεγχο του cache:

```
Cache-Control: max_age=3600
```

Υποστηριζόμενες τιμές:

- `max_age=<seconds>`: Cache για τον καθορισμένο χρόνο
- `no_cache`: Μην cache γίνεται αυτό το αίτημα
- `no_store`: Μην cache γίνεται και μην επαναχρησιμοποιείται

### Παρακολούθηση Χρήσης Cache {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "Cache creation: $cache_tokens tokens\n";
echo "Cache hits: $cache_hits tokens\n";
```

### Βέλτιστες Πρακτικές για Azure OpenAI {#best-practices-for-azure-openai}

- **Χρησιμοποιήστε συνεπείς prompts**: Τα ταυτοτικά prompts ωφελούνται από το caching
- **Καθορίστε εύλογο TTL**: Ισορροπήστε το κόστος έναντι της świeżότητας
- **Παρακολουθήστε τα μετρήματα cache**: Καταγράψτε τη δημιουργία έναντι των hits
- **Βαλέστε αιτήματα σε παρτίδες**: Ομαδοποιήστε τα αιτήματα για να μεγιστοποιήσετε τα cache hits

## OpenRouter: Caching Ειδικό για τον Πάροχο {#openrouter-provider-specific-caching}

Το OpenRouter υποστηρίζει το caching μέσω των υποκείμενων παρόχων (OpenAI, Anthropic κ.λπ.).

### Ρύθμιση (Configuration) {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // Χρήση του caching της OpenAI
    ],
];
```

### Χρήση Caching του OpenRouter {#using-openrouter-caching}

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

### Επιλογές Ειδικές για τον Πάροχο {#provider-specific-options}

Οι διαφορετικοί πάροχοι έχουν διαφορετικούς μηχανισμούς caching:

```php
// Caching συμβατό με OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// Caching συμβατό με Anthropic
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

### Βέλτιστες Πρακτικές για OpenRouter {#best-practices-for-openrouter}

- **Γνωρίστε το caching του παρόχου σας**: Κάθε πάροχος έχει διαφορετικούς μηχανισμούς
- **Δοκιμάστε τη συμπεριφορά του caching**: Επιβεβαιώστε ότι το caching λειτουργεί με τον επιλεγμένο πάροχο
- **Παρακολουθήστε τα κόστη**: Καταγράψτε τις εξοικονομήσεις από το caching
- **Χρησιμοποιήστε συνεπείς μοντέλα**: Το αλλαγή μοντέλων καταστρέφει τα cache hits

## Vertex Anthropic: Καταθήκευση Prompts με Cache Control {#vertex-anthropic-prompt-caching-with-cache-control}

Το Vertex Anthropic (Google Cloud) υποστηρίζει την καταθήκευση prompts με ρητό cache control.

### Ρύθμιση (Configuration) {#configuration-3}

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

### Χρήση Caching του Vertex Anthropic {#using-vertex-anthropic-caching}

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

// Η απάντηση περιλαμβάνει τα μετρήματα cache:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### Τύποι Cache Control {#cache-control-types}

- **ephemeral**: Cache για τη διάρκεια του αιτήματος (default)
- **persistent**: Cache σε πολλαπλά αιτήματα (εάν υποστηρίζεται)

### Παρακολούθηση Χρήσης Cache {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "Cache created: $cache_created tokens\n";
echo "Cache read: $cache_read tokens\n";
```

### Βέλτιστες Πρακτικές για Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **Χρησιμοποιήστε ephemeral caching**: Καλό για caching σε μία συνεδρία
- **Καθορίστε το max_tokens κατάλληλα**: Ισορροπήστε το μέγεθος του cache έναντι του κόστους
- **Παρακολουθήστε τα μετρήματα cache**: Καταγράψτε την αποτελεσματικότητα του cache
- **Δοκιμάστε με το workload σας**: Επιβεβαιώστε ότι το caching ωφελεί την περίπτωση χρήσης σας

## Στρατηγική Caching Μεταξύ Πολλών Παρόχων {#cross-provider-caching-strategy}

### Ενιαία Ρύθμιση (Unified Configuration) {#unified-configuration}

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

### Ανίχνευση Παρόχου (Provider Detection) {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// Χρήση της ρύθμισης caching ειδικής για τον πάροχο
```

### Στρατηγική Αντικατάστασης (Fallback Strategy) {#fallback-strategy}

```php
try {
    // Προσπάθηση caching με τον κύριο πάροχο
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // Επιστροφή σε αίτημα χωρίς cache
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## Βελτιστοποίηση Κόστους {#cost-optimization}

### Υπολογισμός Εξοικονομημάτων {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// Τυπικές τιμές (διαφέρουν ανά πάροχο):
$cache_creation_cost = $cache_created_tokens * 0.00001; // 10 φορές φθηνότερο
$cache_read_cost = $cache_read_tokens * 0.000001; // 100 φορές φθηνότερο
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "Estimated savings: \$$savings\n";
```

### Συμβουλές Βελτιστοποίησης {#optimization-tips}

- **Cache τα μεγάλα system prompts**: Τα μεγαλύτερα εξοικονομητικά κόστη
- **Επαναχρησιμοποιήστε το context**: Cache τα συχνά χρησιμοποιούμενα έγγραφα context
- **Βαλέστε αιτήματα σε παρτίδες**: Ομαδοποιήστε παρόμοια αιτήματα για να μεγιστοποιήσετε τα cache hits
- **Παρακολουθήστε την αποτελεσματικότητα του cache**: Καταγράψτε τις πραγματικές εξοικονομήσεις
- **Ρυθμίστε το TTL**: Ισορροπήστε το κόστος έναντι της świeżότητας

## Αντιμετώπιση Προβλημάτων (Troubleshooting) {#troubleshooting}

### Το cache δεν χρησιμοποιείται {#cache-not-being-used}

- Επιβεβαιώστε ότι το caching είναι ενεργοποιημένο στις ρυθμίσεις
- Ελέγξτε ότι τα prompts είναι ταυτόσημα (το caching απαιτεί ακριβή تطابق)
- Επιβεβαιώστε ότι το cache δεν έχει λήξει
- Ελέγξτε τα όρια cache ειδικά για τον πάροχο

### Αποτυχία δημιουργίας cache {#cache-creation-failing}

- Επιβεβαιώστε ότι το μέγεθος του cache είναι εντός των ορίων του παρόχου
- Ελέγξτε ότι η σύνταξη του cache control είναι σωστή
- Βεβαιωθείτε ότι ο πάροχος υποστηρίζει το caching για το μοντέλο σας
- Ελέγξτε την τεκμηρίωση του παρόχου για περιορισμούς

### Απροσδόκητα κόστη {#unexpected-costs}

- Παρακολουθήστε τα tokens δημιουργίας cache έναντι των tokens ανάγνωσης cache
- Επιβεβαιώστε ότι το cache χρησιμοποιείται πράγματι
- Ελέγξτε για cache misses λόγω διακυμάνσεων στα prompts
- Σκεφτείτε να ρυθμίσετε το TTL ή τη στρατηγική cache

## Σύγκριση Παρόχων {#provider-comparison}

| Χαρακτηριστικό | Gemini | Azure OpenAI | OpenRouter | Vertex Anthropic |
|---------|--------|--------------|-----------|------------------|
| Cache API | cachedContents | HTTP headers | Provider-specific | |
| | | | | |
| | | | | |

## Συμπέρασμα {#next-steps}

| | | | | |
| :--- | :--- | :--- | :--- | :--- |
| | | | | |
