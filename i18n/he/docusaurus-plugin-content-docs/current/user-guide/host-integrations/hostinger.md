---
title: שילוב Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# אינטגרציה עם Hostinger (hPanel)

## סקירה כללית

Hostinger הוא ספק אירוח אתרים פופולרי עם לוח בקרה מודרני הנקרא hPanel. האינטגרציה של Ultimate Multisite עם Hostinger מאפשרת סנכרון אוטומטי של דומיינים בין Ultimate Multisite לבין hPanel של Hostinger, ומאפשרת לך לנהל מיפוי דומיינים ודומיינים משניים (subdomains) באופן אוטומטי ישירות מתוך מנהל ה-WordPress שלך.

## תכונות

- יצירת דומיינים נלווים (addon domains) אוטומטית ב-hPanel
- יצירת דומיינים משניים אוטומטית ב-hPanel (להקמות מולטי-אתרייט עם דומיינים משניים)
- מחיקת דומיין כאשר המיפוי שלו נמחק
- אינטגרציה משולבת עם ה-API לניהול דומיינים של hPanel

## דרישות

כדי להשתמש באינטגרציה של Hostinger, תצטרך:

1. חשבון Hostinger עם גישה ל-hPanel
2. אסימון API (API token) מ-Hostinger
3. להגדיר את הקבועים הבאים בקובץ `wp-config.php` שלך:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

אופציונלית, תוכל גם להגדיר:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // נקודת הקצה הדיפולטיבית של ה-API
```

## הוראות הגדרה

### 1. יצירת אסימון ה-API של Hostinger

1. היכנס לחשבון Hostinger שלך וגש ל-hPanel.
2. נווט אל **Account Settings** (הגדרות חשבון) → **API Tokens** (אסימוני API).
3. לחץ על **Create New Token** (צור אסימון חדש).
4. תן לאסימון שלך שם תיאורי (לדוגמה: "Ultimate Multisite").
5. בחר את ההרשאות הנדרשות:
   - ניהול דומיינים (Domain management)
   - ניהול דומיינים משניים (Subdomain management)
6. העתק את האסימון שנוצר ואחסן אותו במקום מאובטח.

### 2. מציאת מזהה החשבון שלך

1. ב-hPanel, עבור אל **Account Settings** (הגדרות חשבון) → **Account Information** (מידע חשבון).
2. מזהה החשבון (Account ID) שלך מוצג בדף זה.
3. העתק ושמור את המזהה הזה עבור השלב הבא.

### 3. הוספת קבועים ל-wp-config.php

הוסף את הקבועים הבאים לקובץ `wp-config.php` שלך:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

אם חשבון Hostinger שלך משתמש בנקודת קצה (API endpoint) שונה, תוכל להתאים אותו:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. הפעלת האינטגרציה

1. במנהל ה-WordPress שלך, נווט אל **Ultimate Multisite > Settings** (הגדרות).
2. עבור ללשונית **Domain Mapping** (מיפוי דומיינים).
3. גלול מטה אל **Host Integrations** (אינטגרציות מארח).
4. הפעל את האינטגרציה **Hostinger (hPanel)**.
5. לחץ על **Save Changes** (שמור שינויים).

## איך זה עובד

### דומיינים נלווים (Addon Domains)

כאשר אתה ממפה דומיין ב-Ultimate Multisite:

1. האינטגרציה שולחת בקשה ל-API של Hostinger כדי להוסיף את הדומיין כדומיין נלווה.
2. הדומיין מוגדר להצביע על ספריית השורש (root directory) שלך.
3. כאשר מיפוי דומיין מוסר, האינטגרציה מסירה אוטומטית את הדומיין הנלווה מ-hPanel.

### דומיינים משניים (Subdomains)

עבור הקמת מולטי-אתרייט עם דומיינים משניים, כאשר אתר חדש נוצר:

1. האינטגרציה מחלצת את החלק של הדומיין המשני מהדומיין המלא.
2. היא שולחת בקשה ל-API של Hostinger כדי להוסיף את הדומיין המשני.
3. הדומיין המשני מוגדר להצביע על ספריית השורש (root directory) שלך.

## הערות חשובות

- האינטגרציה משתמשת ב-REST API של Hostinger כדי לתקשר עם החשבון שלך.
- ל-API token שלך חייבות להיות ההרשאות הנדרשות לניהול דומיינים ודומיינים משניים.
- האינטגרציה אינה מטפלת בהגדרות DNS; יש לוודא שהדומיינים כבר מצביעים לחשבון Hostinger שלך.
- בקשות ה-API מבוצעות בצורה מאובטחת דרך HTTPS.
- שמור על ה-API token שלך במקום מאובטח ואל שתשתף אותו לעולם.

## פתרון תקלות

### בעיות חיבור API

- ודא שאסימון ה-API שלך נכון ולא פג תוקף.
- בדוק שה-Account ID שלך נכון.
- ודא של-API token יש את ההרשאות הנדרשות לניהול דומיינים.
- ודא שחשבון Hostinger שלך פעיל ובתקינות.

### הדומיין לא נוסף

- בדוק את יומני (logs) Ultimate Multisite עבור הודעות שגיאה.
- ודא שהדומיין כבר לא נוסף לחשבון Hostinger שלך.
- ודא שחשבון Hostinger שלך לא הגיע למגבלה של דומיינים נלווים.
- אשר שהדומיין מצביע כראוי על שרתי השמות (nameservers) של Hostinger.

### בעיות תעודת SSL

- האינטגרציה אינה מטפלת בהנפקת תעודות SSL.
- Hostinger מספקת בדרך כלל תעודות SSL חינמיות דרך AutoSSL.
- ניתן לנהל תעודות SSL ישירות ב-hPanel תחת **SSL/TLS**.
- לחלופין, השתמש ב-Let's Encrypt יחד עם תכונת AutoSSL של Hostinger.

## תמיכה

לסיוע נוסף עם אינטגרציית Hostinger, אנא עיין ב:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
