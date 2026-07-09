---
title: תבנית תוסף
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# תבנית Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## דרישות {#requirements}

- WordPress 5.3 ומעלה
- PHP 7.4 ומעלה
- תוסף Ultimate Multisite (פעיל)

## התקנה {#installation}

1. העלה את קבצי ה-addon לתיקייה `/wp-content/plugins/`
2. הפעל את ה-plugin דרך תפריט ה-"Plugins" ב-WordPress
3. הגדר את הגדרות ה-addon במנהל הרשת

## פיתוח {#development}

### הגדרה (Setup) {#setup}

```bash
# התקנת תלויות
composer install
npm install

# הרצת בדיקות
npm run test

# בדיקת תקני קוד
vendor/bin/phpcs
vendor/bin/phpstan

# תיקון בעיות סגנון קוד
vendor/bin/phpcbf

# בנייה להפצה (Production)
npm run build
```

### מבנה הפרויקט {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # מחלקות וקבצי include של PHP
│   ├── class-multisite-ultimate-updater.php  # מטפל עדכונים
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # הפונקציונליות הראשית
├── tests/                        # בדיקות יחידה (Unit tests)
│   ├── bootstrap.php            # הבוטסטראפ של הבדיקות
│   ├── class-*-base.php         # מחלקת בדיקה בסיסית
│   └── class-*-test.php         # מקרי בדיקה
├── views/                       # קבצי תבנית
├── assets/                      # נכסים סטטיים
│   ├── css/                     # קבצי סגנון (Stylesheets)
│   ├── js/                      # קבצי JavaScript
│   └── images/                  # תמונות
├── lang/                        # קבצי שפה
├── composer.json                # תלויות PHP
├── package.json                 # תלויות Node.js
├── phpunit.xml.dist             # קונפיגורציה של PHPUnit
├── .phpcs.xml.dist              # קונפיגורציה של תקני קוד
└── rector.php                   # כללי מודרניזציה של קוד
```

### בדיקות (Testing) {#testing}

ה-addon כולל מסגרת בדיקות מקיפה:

- **בדיקות יחידה (Unit Tests)**: בדיקות מבוססות PHPUnit עם חבילת הבדיקות של WordPress.
- **מחלקת בדיקה בסיסית (Base Test Class)**: מספקת מתודות עזר למצבי בדיקה נפוצים.
- **כיסוי בדיקות (Test Coverage)**: מוגדר למעקב אחר כיסוי הקוד.
- **בדיקות רשת (Multisite Testing)**: הבדיקות רצות בסביבת רשת (Multisite).

### תקני קוד (Code Standards) {#code-standards}

- **תקני קידוד של WordPress**: נאכפים באמצעות PHPCS.
- **תאימות PHP 7.4+**: נתמכים תכונות PHP מודרניות.
- **ניתוח סטטי (Static Analysis)**: שילוב PHPStan לבדיקת טיפוסים (Type Checking).
- **מודרניזציית קוד (Code Modernization)**: כללי Rector לשדרוג PHP.

### מערכת בנייה (Build System) {#build-system}

- **עיבוד נכסים (Asset Processing)**: מיניפיקציה לקבצי CSS/JS.
- **תרגום (Translation)**: יצירת קובצי POT.
- **אריזה (Packaging)**: יצירת ארכיון להפצה.
- **מצב פיתוח (Development Mode)**: נכסים לא ממוזערים (Unminified) לצורך דיבוג.

## קונפיגורציה (Configuration) {#configuration}

ה-addon תומך באפשרויות קונפיגורציה שונות הנגישות דרך ממשק מנהל הרשת.

## Hooks ו-Filters {#hooks-and-filters}

### Actions (פעולות) {#actions}

- `ultimate-multisite-addon-template_init` - מופעל לאחר אתחול ה-addon.
- `ultimate-multisite-addon-template_loaded` - מופעל לאחר טעינת כל קבצי ה-addon.

### Filters (מסננים) {#filters}

- `ultimate-multisite-addon-template_settings` - שינוי הגדרות ה-addon.
- `ultimate-multisite-addon-template_enabled` - דריסה של סטטוס ההפעלה/כיבוי של ה-addon.

## רישיון (License) {#license}

ה-addon הזה מורשה תחת GPL v3 או גרסה מאוחר יותר.

## תמיכה (Support) {#support}

לתמיכה ותיעוד, בקר ב-[MultisiteUltimate.com](https://multisiteultimate.com)
## יומן שינויים (Changelog) {#changelog}

- גרסה 1.0.1 (2025-09-28): שינוי הקידומת ל-ultimate-multisite; עדכון תחום הטקסט; העלאת גרסה.


- גרסה (2025-09-28): שינוי הקידומת ל-ultimate-multisite; עדכון תחום הטקסט; העלאת גרסה.
