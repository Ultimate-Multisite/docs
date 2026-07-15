---
title: תיעוד מפתחים
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# תיעוד למפתחים

מדריך זה מספק למפתחים את כל מה שצריך כדי להתממשק עם, להרחיב או לפתח תוספים עבור Ultimate Multisite. Ultimate Multisite הופך רשת WordPress Multisite לפלטפורמת אתר כשירות (WaaS).

## מה זמין {#whats-available}

- **[REST API](./rest-api/overview)** — פעולות CRUD מלאות עבור כל הישויות (לקוחות, אתרים, מנויים, תשלומים, מוצרים, דומיינים) עם אימות מפתח API
- **[Hooks Reference](./hooks/guide)** — מעל 200 וווקים (hooks) מסוג פעולה ומעל 280 וווקים מסוג פילטר לאירועי מחזור חיים והתאמה אישית
- **[Integration Guide](./integration-guide/)** — דוגמאות לשילוב עם CRM, אנליטיקה, שערים מותאמים אישית ו-webhooks
- **[Code Examples](./code-examples/)** — דפוסים מתקדמים לתמחור דינמי, הקצאת אתרים, הגבלות מותאמות אישית ועיבוד מרובה שערים
- **[Addon Development](./addon-development/getting-started)** — מסגרת עבודה מובנית לבניית תוספי תוספים (addon plugins)

## דרישות קדם {#requirements}

- התקנת WordPress Multisite
- PHP 7.4 ומעלה
- הפעלת תוסף Ultimate Multisite

## התקנה באמצעות Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite זמין ב-[Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) תחת השם `ultimate-multisite/ultimate-multisite`. זוהי שיטת ההתקנה המומלצת להגדרות WordPress המבוססות על [Bedrock](https://roots.io/bedrock/) וסביבות אחרות המנוהלות על ידי Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note שם החבילה שונה (v2.6.1+)
חבילת ה-Composer שונתה משם `devstone/ultimate-multisite` ל-`ultimate-multisite/ultimate-multisite` בגרסה v2.6.1. אם קובץ `composer.json` שלך מפנה לשם הספק הישן, עדכן את הרשומה ב-`require` והרץ `composer update`.
:::

לאחר ההתקנה, הפעל את התוסף ברמת הרשת דרך מנהל הרשת (Network Admin):

```bash
wp plugin activate ultimate-multisite --network
```

או, אם אתה טוען את התוסף כתוסף חובה (must-use plugin) דרך ה-autoloader של Bedrock, השתמש בפילטר `wp_ultimo_skip_network_active_check` כדי לעקוף את מנגנון ההגנה של ההפעלה:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## התחלה מהירה {#quick-start}

### שימוש ב-REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### חיבור לאירועים (Hooks) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // תגובה להרשמות לקוחות חדשים
});
```

### בניית תוסף (Addon) {#build-an-addon}

```bash
# יצירת מסגרת התוסף מהתבנית
bash create-addon.sh
```

עבור כל סעיף לקבלת תיעוד ודוגמאות מפורטים.
