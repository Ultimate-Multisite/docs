---
title: 'שיעור 6: חוויית ההרשמה'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# שיעור 6: חוויית ההרשמה

תהליך התשלום הוא המקום שבו עניין הופך להכנסה. תהליך הרשמה מבלבל או כללי גורם לאובדן לקוחות. תהליך ממוקד נישה, שמדבר בשפה שלהם ומרגיש טבעי, ממיר אותם.

## איפה השארנו {#where-we-left-off}

ל-FitSite יש תבניות ותוכניות מוגדרות. עכשיו אנו בונים את חוויית ההרשמה והתשלום שהופכת בעלי אולמות כושר ללקוחות משלמים.

## הבנת תהליך ההרשמה {#understanding-the-registration-flow}

טפסי התשלום של Ultimate Multisite הם טפסים מרובי שלבים הניתנים להתאמה אישית במלואם. עבור FitSite, אנו רוצים תהליך ש:

1. מרגיש שנבנה במיוחד עבור עסקי כושר
2. אוסף רק את המידע הנדרש
3. מביא את הלקוח לאתר פעיל במהירות האפשרית

לראיון הטכני המלא, עיינו ב[תהליך ההרשמה](/user-guide/configuration/the-registration-flow).

## עיצוב תהליך התשלום של FitSite {#designing-the-fitsite-checkout}

נווטו אל **Ultimate Multisite > Checkout Forms** וצרו טופס חדש.

### שלב 1: בחירת תוכנית {#step-1-plan-selection}

הדבר הראשון שבעל אולמות כושר צריך לראות צריך להיות התוכניות, המוצגות במונחים שהוא מבין.

- הוסיפו שדה **Pricing Table** (טבלת תמחור)
- הגדירו אותו להציג את כל שלוש תוכניות FitSite
- תיאורי התוכניות שכתבתם בשיעור 5 מופיעים כאן – וודאו שהם מדברים על צרכי עסקי כושר, ולא על תכונות טכניות.

:::tip שפת הנישה חשובה
"1 GB אחסון" לא אומר דבר לבעל חדר כושר. "הכל שאתם צריכים לאתר מקצועי של אולמות כושר" אומר הכל. כתבו את תיאורי התוכניות בשפה של הלקוח שלכם.
:::

### שלב 2: בחירת תבנית {#step-2-template-selection}

לאחר בחירת תוכנית, הלקוח בוחר את התבנית ההתחלתית שלו.

- הוסיפו שדה **Template Selection** (בחירת תבנית)
- התבניות הזמינות מסוננות לפי התוכנית שבחרו (הוגדר בשיעור 5)
- לכל תבנית צריך להיות תמונת תצוגה שמציגה עיצוב ספציפי לכושר.

### שלב 3: יצירת חשבון {#step-3-account-creation}

שמרו את זה מינימלי. אספו רק:

- כתובת אימייל
- סיסמה
- שם האולפן/העסק (זה הופך לשם האתר שלהם)

אל תבקשו מידע שאתם לא צריכים בהרשמה. כל שדה נוסף מפחית את שיעורי ההמרה.

### שלב 4: הגדרת האתר {#step-4-site-setup}

- **Site title** (כותרת האתר): מלא אוטומטית משם האולפן שהוזן בשלב 3
- **Site URL** (כתובת האתר): נוצר אוטומטית משם האולפן (לדוגמה: `ironworks.fitsite.com`)

### שלב 5: תשלום {#step-5-payment}

- הוסיפו את שדה **Payment** (תשלום)
- הגדירו את שער התשלום שלכם ([Stripe](/user-guide/payment-gateways/stripe) מומלץ לחייב מנויים)
- אם יצרתם "Order Bumps" (תוספות הזמנה) בשיעור 5, הוסיפו שדה **Order Bump** לפני שלב התשלום.

### שלב 6: אישור {#step-6-confirmation}

- התאימו את הודעת האישור בשפה ספציפית לכושר.
- דוגמה: "אתר האולמות שלכם נמצא בתהליך יצירה. תוופנו לאתר החדש שלכם תוך מספר שניות."

## הוספת מתג בחירת תקופה {#adding-a-period-selection-toggle}

אם הגדרתם וריאציות מחיר בתוכניות שלכם (חודשי מול שנתי), הוסיפו שדה **Period Selection** (בחירת תקופה) לטופס התשלום כדי שהלקוחות יוכלו להחליף בין תקופות חיוב. ראו ב[Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) להוראות.

## הגדרת התשלום {#configuring-payment}

אם עדיין לא הגדרתם שער תשלום:

1. נווטו אל **Ultimate Multisite > Settings > Payment Gateways**
2. עקבו אחר [מדריך הגדרת Stripe](/user-guide/payment-gateways/stripe) או שער התשלום המועדף עליכם
3. בדקו תהליך תשלום מלא עם תשלום בדיקה

לפרטים על אופן קבלת התשלומים בחשבון שלכם, ראו ב[Getting Paid](/user-guide/payment-gateways/getting-paid).

## בדיקת התהליך {#testing-the-flow}

לפני המעבר הלאה, השלימו הרשמה מלאה:

1. פתחו את טופס התשלום בחלון דפדפן פרטי/Incognito
2. בחרו תוכנית
3. בחרו תבנית
4. צרו חשבון
5. השלימו תשלום (השתמשו במצב בדיקה)
6. ודאו שהאתר נוצר עם התבנית הנכונה

בדקו ש:

- [ ] תיאורי התוכניות ברורים וספציפיים לנישה
- [ ] תצוגות התבניות מציגות עיצובים מתאימים לכושר
- [ ] כתובת האתר נוצרת נכון משם האולפן
- [ ] התשלום מתבצע בהצלחה
- [ ] הלקוח מגיע לאתר פעיל עם התבנית שנבחרה
- [ ] אימיילי האישור משתמשים בשפה ספציפית לכושר

## רשת FitSite עד כה {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## מה בנינו בשיעור זה {#what-we-built-this-lesson}

- **טופס תשלום מרובי שלבים** המותאם לבעלי אולמות כושר
- **שפה ספציפית לנישה** לאורך כל תהליך ההרשמה
- **חיכוך מינימלי** – רק שדות חיוניים, נתיב מהיר לאתר פעיל
- **שילוב תשלום** עם אימות בדיקה
- **תהליך מקצה לקצה שנבדק** – מבחירת תוכנית ועד לאתר פעיל

---

**השלב הבא:** [Lesson 7: Making It Yours](lesson-7-branding) – נבצע White-labeling לפלטפורמה ונקים את FitSite כמותג.
