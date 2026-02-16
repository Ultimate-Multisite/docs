---
title: שילוב לוח הבקרה Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# אינטגרציה עם לוח הבקרה Hestia

מדריך זה מסביר כיצד להגדיר את האינטגרציה של Ultimate Multisite עם Hestia, כך שדומיינים ממופים ברשת שלכם יתווספו (ויוסרו) באופן אוטומטי כ-Web Domain Aliases ב-Hestia.

- פקודות CLI של Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- תיעוד ה-REST API הרשמי: https://hestiacp.com/docs/server-administration/rest-api.html

## מה זה עושה
- כאשר דומיין ממופה ב-Ultimate Multisite, האינטגרציה פונה ל-API של Hestia ומריצה:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- כאשר מיפוי דומיין מוסר, היא מריצה:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- לפי הגדרת "יצירה אוטומטית של תת-דומיין www" בהגדרות מיפוי הדומיינים, ניתן גם להוסיף/להסיר את ה-alias של `www.`.

## דרישות מקדימות
- Web Domain קיים ב-Hestia שכבר מצביע להתקנת ה-WordPress שלכם. האינטגרציה תצמיד aliases לדומיין הבסיס הזה.
- גישת API ל-Hestia מופעלת. ניתן להזדהות באמצעות סיסמה או באמצעות API hash/token.

עיינו בתיעוד ה-REST API של Hestia להפעלת גישת API ופרטי הזדהות:
https://hestiacp.com/docs/server-administration/rest-api.html

## הגדרה (Wizard → Integrations → Hestia)
הזינו את הערכים הבאים:

- `WU_HESTIA_API_URL` (חובה)
  - נקודת הקצה הבסיסית של ה-API, בדרך כלל `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (חובה)
  - משתמש Hestia לפקודות API (לרוב `admin`).
- `WU_HESTIA_API_PASSWORD` או `WU_HESTIA_API_HASH` (לפחות אחד)
  - בחרו שיטת הזדהות אחת: סיסמה או API hash/token.
- `WU_HESTIA_ACCOUNT` (חובה)
  - החשבון (הבעלים) של ה-Web Domain ב-Hestia; זהו הארגומנט הראשון לפקודת ה-CLI.
- `WU_HESTIA_WEB_DOMAIN` (חובה)
  - ה-Web Domain הקיים ב-Hestia שמשרת את ה-WordPress שלכם (ה-aliases יוצמדו אליו).
- `WU_HESTIA_RESTART` (אופציונלי; ברירת מחדל `yes`)
  - האם להפעיל מחדש/לרענן שירותים לאחר שינויי alias.

ניתן לאפשר לאשף להזריק את הקבועים הללו לקובץ `wp-config.php`, או להגדיר אותם ידנית.

## אימות ההגדרה
- בשלב "Testing" באשף, התוסף קורא ל-`v-list-web-domains <WU_HESTIA_ACCOUNT> json` דרך ה-API. תגובה מוצלחת מאשרת קישוריות והזדהות.
- לאחר מיפוי דומיין, בדקו ב-Hestia: Web > דומיין הבסיס > Aliases. אתם אמורים לראות את ה-alias החדש שנוסף.

## הערות וטיפים
- ודאו ש-`WU_HESTIA_WEB_DOMAIN` כבר קיים ושייך ל-`WU_HESTIA_ACCOUNT`.
- אם נדרש SSL, נהלו את האישורים ב-Hestia. אינטגרציה זו מטפלת כרגע ב-aliases בלבד.
- התוסף עשוי גם להוסיף/להסיר `www.<domain>` בהתאם להגדרת "תת-דומיין www" במיפוי הדומיינים.

## דוגמה לקריאת API (cURL)
להלן דוגמה רעיונית (התאימו לסביבה שלכם). עיינו בתיעוד הרשמי לפרמטרים המדויקים.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

למחיקה, השתמשו ב-`cmd=v-delete-web-domain-alias` עם אותם ארגומנטים.

## פתרון בעיות
- שגיאת HTTP מה-API: ודאו ש-`WU_HESTIA_API_URL` נגיש וכולל `/api`.
- שגיאות הזדהות: אשרו את `WU_HESTIA_API_USER` ואת `WU_HESTIA_API_PASSWORD` או `WU_HESTIA_API_HASH`.
- "Missing account/base domain" בלוגים: ודאו ש-`WU_HESTIA_ACCOUNT` ו-`WU_HESTIA_WEB_DOMAIN` מוגדרים ותקפים ב-Hestia.

## קישורים נוספים
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- פקודות CLI של Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
