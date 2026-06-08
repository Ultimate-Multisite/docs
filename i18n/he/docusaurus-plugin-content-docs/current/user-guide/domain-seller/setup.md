---
title: הגדרה ותצורת ספק
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: הגדרת המערכת והגדרת ספקי השירות

תוסף Domain Seller מגיע עם מַּעְבַּד הַהִתְקָנָן מונחה שמלווה אותך בכל שלב הנדרש. דף זה מכסה את תהליך המַּעְבַּד ואת האופן שבו ניתן להגדיר או להגדיר מחדש ספקים לאחר מכן.

## דרישות מוקדמות

- **Multisite Ultimate** גרסה 2.4.12 ומעלה, מופעל ברמת הרשת (network-activated)
- **PHP** 7.4+
- פרטי API לפחות רשם אחד נתמך

## מַּעְבַּד הַהִתְקָנָן הראשוני

מַּעְבַּד ההתקנה מופעל אוטומטית בפעם הראשונה שאתה מפעיל את התוסף ברמת הרשת. ניתן להפעיל אותו גם בכל עת דרך **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### שלב 1 — בחירת ספק

בחר את רשם הדומיינים שברצונך לחבר. האפשרויות הנתמכות:

| ספק | ניהול DNS | פרטיות WHOIS |
|---|---|---|
| OpenSRS | כן | כן |
| Namecheap | לא | כן (WhoisGuard, חינם) |
| GoDaddy | לא | לא |
| ResellerClub | כן | לא |
| NameSilo | לא | לא |
| Enom | כן | לא |

### שלב 2 — הזנת פרטי התחברות

לכל ספק יש שדות פרטי התחברות שונים:

**OpenSRS** — שם משתמש ומפתח פרטי (מלוח הבקרה של OpenSRS Reseller)

**Namecheap** — שם משתמש ומפתח API (מתוך Account › Tools › API Access)

**GoDaddy** — מפתח API וסיסמה (מתוך developer.godaddy.com)

**ResellerClub** — מזהה רשיין (Reseller ID) ומפתח API (מתוך לוח הבקרה של ResellerClub)

**NameSilo** — מפתח API (מתוך namesilo.com › Account › API Manager)

**Enom** — מזהה חשבון (Account ID) ומארז API (API token)

בדוק את **מצב Sandbox** (Sandbox mode) במידת האפשר כדי לבצע בדיקות בסביבת המבחן של הספק לפני ההפעלה האמיתית.

### שלב 3 — בדיקת החיבור

לחץ על **Test Connection**. המַּעְבַּד שולח קריאת API קלה כדי לאמת את פרטי ההתחברות והקישוריות. תקן כל בעיית פרטי התחברות לפני ההמשך.

### שלב 4 — ייבוא TLDs

לחץ על **Import TLDs** כדי למשוך את כל TLDs הזמינים ואת תמחור הסיטונאות מהספק המחובר. זה ממלא את רשימת ה-TLDs המשמשת עבור מוצרי דומיין. הייבוא עשוי לקחת 30–60 שניות עבור ספקים עם קטלוג TLDs גדול.

ה-TLDs מסונכרנים מחדש אוטומטית פעם ביום באמצעות משימת קרונ (cron job) מתוזמנת.

### שלב 5 — יצירת מוצר דומיין

המַּעְבַּד יוצר מוצר דומיין ברירת מחדל עם תוספת מחיר של 10%. ניתן לערוך את המוצר הזה מיד או לדלג ולייצר מוצרים ידנית תחת **Ultimate Multisite › Products**.

ראה [Domain Products and Pricing](./domain-products) לקבלת המדריך המלא להגדרת מוצרים ותמחור.

---

## הגדרת מחדש של ספק

נווט אל **Network Admin › Ultimate Multisite › Settings › Domain Seller** (או לחץ על **Settings** ברשימת התוספים).

דף ההגדרות מכיל:

- **Enable domain selling** — הפעל/כבה את התכונה כולה
- **Default provider** — הספק המשמש לחיפושי דומיינים ולמוצרים חדשים
- **Max TLDs per search** — כמה TLDs לבדוק כאשר לקוח מבצע חיפוש; ערכים גבוהים יותר מציגים יותר אפשרויות אך איטיים יותר
- **Availability cache duration** — כמה זמן לשמור מטמון (cache) של תוצאות זמינות ותמחור; ערכים נמוכים יותר מדויקים יותר אך מגדילים את קריאות ה-API
- **Manage domain products** — קישור מהיר לרשימת המוצרים
- **Configure providers** — פותח את מַּעְבַּד האינטגרציה (Integration Wizard) להוספה או הגדרה מחדש של ספקים

### הוספת ספק שני

לחץ על **Configure providers** והפעל את המַּעְבַּד שוב עבור הרשם החדש. ניתן להגדיר מספר ספקים בו-זמנית. הקצה כל מוצר דומיין לספק ספציפי, או השאר אותו על ברירת המחדל.

### סנכרון TLDs ידני

בדף ההגדרות, לחץ על **Sync TLDs** ליד כל ספק שהוגדר כדי למשוך את תמחור הסיטונאות העדכני ביותר. זה שימושי לאחר שהספק מעדכן את תמחור הסיטונאות או מוסיף TLDs חדשים.

---

## יומנים (Logs)

כל ספק כותב לצינור יומנים (log channel) משלו. ניתן לצפות ביומנים תחת **Network Admin › Ultimate Multisite › Logs**:

| צינור יומנים | תוכן |
|---|---|
| `domain-seller-registration` | כל ניסיונות ההרשמה (הצלחה וכישלון) |
| `domain-seller-renewal` | תוצאות משימת ההחדשה |
| `domain-seller-opensrs` | פעילות API גולמית של OpenSRS |
| `domain-seller-namecheap` | פעילות API גולמית של Namecheap |
| `domain-seller-godaddy` | פעילות API גולמית של GoDaddy |
| `domain-seller-resellerclub` | פעילות API גולמית של ResellerClub |
| `domain-seller-namesilo` | פעילות API גולמית של NameSilo |
| `domain-seller-enom` | פעילות API גולמית של Enom |
