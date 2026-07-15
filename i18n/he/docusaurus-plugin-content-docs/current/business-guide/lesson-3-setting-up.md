---
title: 'שיעור 3: הגדרת הרשת שלך'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# שיעור 3: הגדרת הרשת שלך

הגיע הזמן לבנות. בשיעור זה תתקין את Ultimate Multisite ותגדיר את יסודות רשת FitSite. כל החלטה שאתה מקבל כאן נעשית תוך התחשבות בנישה של כושר.

## איפה השארנו {#where-we-left-off}

בחרנו במכוני כושר כנישה שלנו ואימתנו את ההזדמנות. עכשיו אנחנו הופכים את הרעיון הזה לפלטפורמה עובדת.

## בחירת המארח (Hosting) שלך {#choosing-your-hosting}

בחירת המארח חשובה יותר עבור פלטפורמה נישתית מאשר עבור אתר אינטרנט בודד. אתה לא מפעיל אתר אחד – אתה מפעיל רשת שתגדל לעשרות או מאות אתרים.

### למה לשים לב {#what-to-look-for}

- **תמיכה ב-WordPress Multisite**: לא כל המארחים מטפלים ב-multisite בצורה טובה.
- **Wildcard SSL**: חיוני לרשתות המבוססות על תת-דומיינים (subdomains).
- **משאבים ניתנים להרחבה (Scalable resources)**: אתה צריך מקום לצמוח בלעדי לעבור העברה (migrate).
- **אינטגרציה עם Ultimate Multisite**: מיפוי דומיינים אוטומטי ו-SSL חוסכים מאמץ תפעולי משמעותי.

### הגישה המומלצת {#recommended-approach}

בחר מארח מהרשימה של [ספקי התואמים](/user-guide/host-integrations/closte). אלו נבדקו עם Ultimate Multisite ומספקים את האינטגרציות שאתה צריך למיפוי דומיינים ולאוטומציה של SSL.

עבור FitSite, נשתמש בהגדרת תת-דומיין (subdomain). זה אומר שאתרים של לקוחות יופיעו בהתחלה כ-`studioname.fitsite.com` לפני שהם ממפים אופציונלית את הדומיין שלהם.

## התקנת WordPress Multisite {#installing-wordpress-multisite}

אם אין לך כבר התקנת WordPress Multisite:

1. התקן את WordPress אצל ספק המארחים שלך.
2. עקוב אחר המדריך [איך להתקין WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. בחר בהגדרת **תת-דומיין** (subdomain) כאשר תתבקש.

:::tip למה תת-דומיינים?
תת-דומיינים נותנים לכל אתר לקוח כתובת ייחודית משלו (`studio.fitsite.com`) במקום נתיב (`fitsite.com/studio`). זה מקצועי יותר עבור הלקוחות שלך ונמנע קונפליקטים של permalinks. ראה [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) להשוואה מפורטת.
:::

## התקנת Ultimate Multisite {#installing-ultimate-multisite}

עקוב אחר המדריך [התקנת Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) כדי:

1. להעלות ולהפעיל את ה-plugin ברמת הרשת כולה.
2. להריץ את [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard).

במהלך ה-setup wizard, זכור את הנישה של FitSite:

- **מטבע (Currency)**: הגדר את המטבע שבו משתמשים לקוחות מכוני הכושר שלך.
- **שם החברה (Company name)**: "FitSite" (או שם המותג שבחרת).
- **לוגו החברה (Company logo)**: העלה את לוגו המותג שלך – זה יופיע בחשבוניות ובמיילים.

## הגדרה לנישת הכושר {#configuring-for-the-fitness-niche}

עם Ultimate Multisite מותקן, בצע את בחירות ההגדרה הספציפיות לנישה:

### הגדרות כלליות (General Settings) {#general-settings}

נווט אל **Ultimate Multisite > Settings** והגדר:

- **שם האתר (Site name)**: FitSite
- **תפקיד ברירת מחדל (Default role)**: Administrator -- בעלי מכוני הכושר צריכים שליטה מלאה בתוכן האתר שלהם.
- **הרשמה (Registration)**: הפעל הרשמה למשתמשים כדי שבעלי המכוניות יוכלו להירשם בעצמם.

### הגדרת מיילים (Email Configuration) {#email-configuration}

המיילים של המערכת שלך צריכים לדבר בשפה של הנישה שלך. נווט אל **Ultimate Multisite > Settings > Emails** והתאם אישית:

- החלף את השפה הכללית "האתר החדש שלך" במסרים ספציפיים לכושר.
- נושא תرحיבה לדוגמה: "אתר הכושר שלך מוכן"
- גוף תرحיבה לדוגמה: התייחס למכון שלהם, לקלאס שלהם ולהתחלה עם אתר הכושר שלהם.

אנחנו נחדד את זה בהמשך בשיעור 8 (הקצאת לקוחות), אבל הגדרת הטון כבר עכשיו מבטיחה שגם הרשמות ניסיון מוקדמות ירגישו ספציפיות לנישה.

### הגדרת דומיין (Domain Configuration) {#domain-configuration}

אם אתה משתמש בספק מארח תואם, הגדר מיפוי דומיינים עכשיו:

1. נווט אל **Ultimate Multisite > Settings > Domain Mapping**.
2. עקוב אחר מדריך האינטגרציה עבור המארח הספציפי שלך.
3. בדוק שהאתרים الفرביים החדשים מקבלים SSL אוטומטית.

זה מבטיח שכאשר נתחיל ליצור תבניות ואתרים ניסיוניים בשיעור הבא, הכל יעבוד מקצה לקצה.

## רשת FitSite עד כה {#the-fitsite-network-so-far}

בסוף שיעור זה, הנה מה שיש לך:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## מה בנינו בשיעור הזה {#what-we-built-this-lesson}

- **התקנת WordPress Multisite** עובדת במצב תת-דומיין.
- **Ultimate Multisite מותקן** ומוגדר עם מיתוג FitSite.
- **Hosting ו-SSL** מוגדרים לרשת צומחת.
- **Domain mapping** מוגדר עבור ספק המארחים שלך.
- **טון מייל ספציפי לנישה** הוקם מהיום הראשון.

---

**הבא:** [שיעור 4: בניית תבניות נישה](lesson-4-templates) — אנחנו יוצרים תבניות אתר שבעלי מכוני כושר באמת ירצו להשתמש בהן.
