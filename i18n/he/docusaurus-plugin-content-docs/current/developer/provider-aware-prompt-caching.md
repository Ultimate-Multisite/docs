---
title: שמירת מטמון פרומפט מודעת ספק
sidebar_position: 10
_i18n_hash: 79ff1fbb0ca81ccc5124c816dc6df48b
---
# מטמון פרומפטים מודע לספק (Provider-Aware Prompt Caching) {#provider-aware-prompt-caching}

Superdav AI Agent v1.12.0 מציג **מטמון פרומפטים מודע לספק** (provider-aware prompt caching), המבצע אופטימיזציה של עלויות ה-API וזמני ההשהיה (latency) על ידי שמירת פרומפטים במטמון בין ספקי LLM שונים. לכל ספק יש מנגנוני תצורה ומטמון שונים.

## סקירה כללית {#overview}

מטמון פרומפטים מאפשר לך:

- לשמור במטמון פרומפטים גדולים ומשתמשים בתדירות גבוהה
- להפחית עלויות API על ידי מניעת עיבוד מיותר
- לשפר את זמני ההשהיה עבור בקשות שנשמרו במטמון
- לנהל את מחזור חיי המטמון באופן מפורש

ספקים שונים מיישמים מטמון בצורה שונה:

- **Google Gemini**: ממשק ה-API `cachedContents`
- **Azure OpenAI**: מטמון פרומפטים עם TTL
- **OpenRouter**: מטמון ספציפי לספק
- **Vertex Anthropic**: מטמון פרומפטים עם בקרת מטמון (cache control)

## Google Gemini: ממשק ה-API cachedContents {#google-gemini-cachedcontents-api}

Google Gemini מספק ניהול מטמון מפורש באמצעות ה-API `cachedContents`.

### תצורה {#configuration}

```php
$config = [
    'provider' => 'google-gemini',
    'model' => 'gemini-2.0-flash',
    'caching' => [
        'enabled' => true,
        'ttl' => 3600, // שעה בשניות
        'max_tokens' => 1000000, // מקסימום טוקנים למטמון
    ],
];
```

### יצירת פרומפט במטמון {#creating-a-cached-prompt}

```php
use Superdav\AI\Providers\GoogleGemini;

$gemini = new GoogleGemini( $config );

$cached_content = $gemini->create_cached_content(
    [
        'system_prompt' => 'אתה עוזר מועיל...',
        'context' => 'מסמך הקשר גדול...',
        'ttl' => 3600,
    ]
);

// מחזיר: ['cache_id' => 'abc123', 'expires_at' => timestamp]
```

### שימוש בפרומפט במטמון {#using-a-cached-prompt}

```php
$response = $gemini->generate(
    [
        'cache_id' => 'abc123',
        'prompt' => 'שאלה מהמשתמש כאן',
    ]
);
```

### מחזור חיי המטמון {#cache-lifecycle}

```php
// רשימת תכני מטמון
$caches = $gemini->list_cached_contents();

// קבלת פרטי מטמון
$cache = $gemini->get_cached_content( 'abc123' );

// הארכת TTL של המטמון
$gemini->update_cached_content(
    'abc123',
    ['ttl' => 7200] // הארכה ל-2 שעות
);

// מחיקת מטמון
$gemini->delete_cached_content( 'abc123' );
```

### שיטות עבודה מומלצות עבור Gemini {#best-practices-for-gemini}

- **הגדרת TTL מתאים**: איזון בין חיסכון בעלויות לבין התיישנות המטמון
- **שמירת פרומפטי מערכת**: שימוש חוזר באותו פרומפט מערכת עבור בקשות שונות
- **ניטור שימוש במטמון**: מעקב אחר המטמון שבו נעשה שימוש הכי הרבה
- **ניקוי מטמון פג תוקף**: מחיקה תקופתית של מטמון שלא נעשה בו שימוש

## Azure OpenAI: מטמון פרומפטים {#azure-openai-prompt-caching}

Azure OpenAI תומך במטמון פרומפטים עם ניהול TTL אוטומטי.

### תצורה {#configuration-1}

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

### הפעלת מטמון {#enabling-caching}

```php
use Superdav\AI\Providers\AzureOpenAI;

$azure = new AzureOpenAI( $config );

$response = $azure->generate(
    [
        'system_prompt' => 'אתה עוזר מועיל...',
        'context' => 'מסמך הקשר גדול...',
        'prompt' => 'שאלה מהמשתמש כאן',
        'cache_control' => 'max_age=3600',
    ]
);

// התגובה כוללת שימוש במטמון:
// [
//     'content' => '...',
//     'cache_creation_input_tokens' => 1000,
//     'cache_read_input_tokens' => 500,
// ]
```

### כותרות מטמון (Cache Headers) {#cache-headers}

Azure OpenAI משתמש בכותרות HTTP לבקרת מטמון:

```
Cache-Control: max_age=3600
```

ערכים נתמכים:

- `max_age=<seconds>`: מטמון לתקופה שצוינה
- `no_cache`: לא לשמור את הבקשה הזו במטמון
- `no_store`: לא לשמור ולא להשתמש מחדש

### ניטור שימוש במטמון {#monitoring-cache-usage}

```php
$response = $azure->generate( [...] );

$cache_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_hits = $response['cache_read_input_tokens'] ?? 0;

echo "יצירת מטמון: $cache_tokens טוקנים\n";
echo "פגיעות מטמון: $cache_hits טוקנים\n";
```

### שיטות עבודה מומלצות עבור Azure OpenAI {#best-practices-for-azure-openai}

- **שימוש בפרומפטים עקביים**: פרומפטים זהים מפיקים תועלת מהמטמון
- **הגדרת TTL סביר**: איזון בין עלות לבין עדכניות
- **ניטור מדדי מטמון**: מעקב אחר יצירת מטמון לעומת פגיעות מטמון
- **עיבוד בקשות דומות בבת אחת (Batch)**: קיבוץ בקשות למקסום פגיעות המטמון

## OpenRouter: מטמון ספציפי לספק {#openrouter-provider-specific-caching}

OpenRouter תומך במטמון דרך ספקיות תשתית (OpenAI, Anthropic וכו').

### תצורה {#configuration-2}

```php
$config = [
    'provider' => 'openrouter',
    'model' => 'openai/gpt-4-turbo',
    'caching' => [
        'enabled' => true,
        'provider_cache' => 'openai', // שימוש במטמון של OpenAI
    ],
];
```

### שימוש במטמון OpenRouter {#using-openrouter-caching}

```php
use Superdav\AI\Providers\OpenRouter;

$router = new OpenRouter( $config );

$response = $router->generate(
    [
        'system_prompt' => 'אתה עוזר מועיל...',
        'context' => 'מסמך הקשר גדול...',
        'prompt' => 'שאלה מהמשתמש כאן',
        'cache_control' => 'max_age=3600',
    ]
);
```

### אפשרויות ספציפיות לספק {#provider-specific-options}

לספקים שונים יש מנגנוני מטמון שונים:

```php
// מטמון תואם ל-OpenAI
$response = $router->generate(
    [
        'model' => 'openai/gpt-4-turbo',
        'cache_control' => 'max_age=3600',
    ]
);

// מטמון תואם ל-Anthropic
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

### שיטות עבודה מומלצות עבור OpenRouter {#best-practices-for-openrouter}

- **הכרת מטמון הספק**: לכל ספק יש מנגנונים שונים
- **בדיקת התנהגות המטמון**: ודא שהמטמון עובד עם הספק שבחרת
- **ניטור עלויות**: מעקב אחר חיסכון מהמטמון
- **שימוש במודלים עקביים**: מעבר בין מודלים שובר את פגיעות המטמון

## Vertex Anthropic: מטמון פרומפטים עם בקרת מטמון {#vertex-anthropic-prompt-caching-with-cache-control}

Vertex Anthropic (Google Cloud) תומך במטמון פרומפטים עם בקרת מטמון מפורשת.

### תצורה {#configuration-3}

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

### שימוש במטמון Vertex Anthropic {#using-vertex-anthropic-caching}

```php
use Superdav\AI\Providers\VertexAnthropic;

$vertex = new VertexAnthropic( $config );

$response = $vertex->generate(
    [
        'system_prompt' => 'אתה עוזר מועיל...',
        'context' => 'מסמך הקשר גדול...',
        'prompt' => 'שאלה מהמשתמש כאן',
        'cache_control' => [
            'type' => 'ephemeral',
            'max_tokens' => 1000000,
        ],
    ]
);

// התגובה כוללת מדדי מטמון:
// [
//     'content' => '...',
//     'usage' => [
//         'input_tokens' => 1000,
//         'cache_creation_input_tokens' => 500,
//         'cache_read_input_tokens' => 300,
//     ],
// ]
```

### סוגי בקרת מטמון {#cache-control-types}

- **ephemeral**: מטמון למשך משך הבקשה (ברירת מחדל)
- **persistent**: מטמון על פני מספר בקשות (אם נתמך)

### ניטור שימוש במטמון {#monitoring-cache-usage-1}

```php
$response = $vertex->generate( [...] );

$usage = $response['usage'];
$cache_created = $usage['cache_creation_input_tokens'] ?? 0;
$cache_read = $usage['cache_read_input_tokens'] ?? 0;

echo "נוצר מטמון: $cache_created טוקנים\n";
echo "קריאת מטמון: $cache_read טוקנים\n";
```

### שיטות עבודה מומלצות עבור Vertex Anthropic {#best-practices-for-vertex-anthropic}

- **שימוש במטמון ephemeral**: טוב למטמון של סשן יחיד
- **הגדרת max_tokens בהתאם**: איזון בין גודל המטמון לעלות
- **ניטור מדדי מטמון**: מעקב אחר יעילות המטמון
- **בדיקה עם עומס העבודה שלך**: ודא שהמטמון מועיל למקרה השימוש שלך

## אסטרטגיית מטמון חוצת ספקים {#cross-provider-caching-strategy}

### תצורה מאוחדת {#unified-configuration}

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

### זיהוי ספק {#provider-detection}

```php
$provider = $config['provider'];

$cache_config = $config['caching']['providers'][ $provider ]
    ?? $config['caching'];

// שימוש בתצורת המטמון הספציפית לספק
```

### אסטרטגיית נחיתה (Fallback) {#fallback-strategy}

```php
try {
    // ניסיון מטמון עם הספק הראשי
    $response = $primary_provider->generate( $request );
} catch ( CacheException $e ) {
    // נחיתה לבקשה ללא מטמון
    $response = $primary_provider->generate(
        array_merge( $request, ['cache_control' => 'no_cache'] )
    );
}
```

## אופטימיזציית עלויות {#cost-optimization}

### חישוב חיסכון {#calculate-savings}

```php
$cache_created_tokens = $response['cache_creation_input_tokens'] ?? 0;
$cache_read_tokens = $response['cache_read_input_tokens'] ?? 0;
$regular_tokens = $response['input_tokens'] ?? 0;

// תמחור טיפוסי (משתנה לפי ספק):
$cache_creation_cost = $cache_created_tokens * 0.00001; // זול פי 10
$cache_read_cost = $cache_read_tokens * 0.000001; // זול פי 100
$regular_cost = $regular_tokens * 0.00001;

$total_cost = $cache_creation_cost + $cache_read_cost + $regular_cost;
$savings = ($regular_tokens * 0.00001) - $total_cost;

echo "חיסכון משוער: \$$savings\n";
```

### טיפים לאופטימיזציה {#optimization-tips}

- **שמירת פרומפטי מערכת גדולים**: החיסכון הגדול ביותר בעלויות
- **שימוש חוזר בהקשר**: שמירת מסמכי הקשר שמשתמשים בהם לעיתים קרובות
- **עיבוד בקשות בבת אחת (Batch)**: קיבוץ בקשות דומות למקסום פגיעות המטמון
- **ניטור יעילות המטמון**: מעקב אחר חיסכון בפועל
- **התאמת TTL**: איזון בין עלות לבין עדכניות

## פתרון תקלות (Troubleshooting) {#troubleshooting}

### המטמון אינו בשימוש {#cache-not-being-used}

- ודא שמטמון מופעל בהגדרות
- בדוק שהפרומפטים זהים (המטמון דורש התאמה מדויקת)
- ודא שהמטמון לא פג תוקף
- בדוק מגבלות מטמון ספציפיות לספק

### כשל ביצירת מטמון {#cache-creation-failing}

- ודא שגודל המטמון נמצא במסגרת המגבלות של הספק
- בדוק שהתחביר של בקרת המטמון נכון
- ודא שהספק תומך במטמון עבור המודל שלך
- עיין במסמכי הספק לגבי מגבלות

### עלויות בלתי צפויות {#unexpected-costs}

- נטרל את יצירת המטמון לעומת קריאת המטמון
- ודא שהמטמון אכן נמצא בשימוש
- בדוק אם יש "misses" (כישלונות) במטמון עקב וריאציות בפרומפט
- שקול התאמת TTL או אסטרטגיית מטמון

***
*הערה: המונחים "API", "CMS" ו"Database" נשארים באנגלית כפי שמקובל בתחום הטכנולוגיה.*
