---
title: 'שיעור 9: תמחור לרווח'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# שיעור 9: תמחור לרווחיות {#lesson-9-pricing-for-profit}

בשיעור 5 קבענו מחירים ראשוניים עבור תוכניות FitSite. עכשיו אנחנו משכללים את אסטרטגיית התמחור עם טכניקות שמגבירות הכנסות, מעודדות שדרוגים ומפחיתות נטישה (Churn).

## איפה השארנו את המקום {#where-we-left-off}

ל-FitSite יש תוכניות, תבניות, תהליך תשלום (checkout), מיתוג והטמעת לקוחות (onboarding) מוכנים. התמחור הראשוני היה 49/99/199 דולר לחודש. עכשיו אנחנו גורמים לתמחור הזה לעבוד קשה יותר.

## עקרונות תמחור לפלטפורמות נישתיות {#pricing-principles-for-niche-platforms}

### תמחור לפי ערך, לא לפי עלות {#price-on-value-not-cost}

עלויות האחסון שלכם עשויות להיות 5-15 דולר לאתר לקוח. זה לא אומר שהמחיר שלכם צריך להיות 20 דולר. אתם לא מוכרים אחסון. אתם מוכרים:

- אתר כושר מקצועי שבנייתו מותאמת אישית תעלה 2,000-5,000 דולר
- תחזוקה, עדכונים ואבטחה מתמשכים שהם לא צריכים לדאוג להם
- תכונות ספציפיות לנישה שבוני בונים כלליים לא מציעים
- האמינות של פלטפורמה שנבנתה עבור התעשייה שלהם

תמחרו בהתבסס על הערך שאתם מספקים, לא על העלות של אספקתו.

### עיגון מול אלטרנטיבות {#anchor-to-alternatives}

כאשר בעל סטודיו כושר מעריך את FitSite, הוא משווה אותו ל:

- **שכירת מפתח אתרים**: 2,000-5,000 דולר מקדמה + 50-100 דולר/חודש תחזוקה
- **Wix/Squarespace**: 16-45 דולר/חודש, אבל בלי תכונות ספציפיות לכושר, והם בונים את זה בעצמם
- **לא לעשות כלום**: חברים אבודים שלא יכולים למצוא אותם באינטרנט

במחיר של 49-199 דולר/חודש, FitSite זול יותר ממפתח אתרים, מקיף יותר מבונים כלליים, וטוב בהרבה מאפס אתר.

## יישום וריאציות מחיר {#implementing-price-variations}

תמחור שנתי מעודד מחויבות ומפחית נטישה. נווטו ללשונית **Price Variations** (וריאציות מחיר) של כל תוכנית והוסיפו אפשרויות שנתיות:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

הוסיפו שדה **Period Selection** (בחירת תקופה) לטופס ה-checkout שלכם כדי שהלקוחות יוכלו להחליף בין חיוב חודשי לשנתי. ראו [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### למה תמחור שנתי עובד {#why-annual-pricing-works}

- **עבורכם**: מזומן מקדים, נטישה נמוכה יותר (לקוחות שמשלמים שנתי פחות צפויים לבטל באמצע תקופה)
- **עבורם**: חיסכון אמיתי, יכולת חיזוי תקציב

## דמי הקמה (Setup Fees) {#setup-fees}

שקלו גביית דמי הקמה חד-פעמיים עבור תוכניות שכוללות הגדרה מעשית:

- **Starter**: ללא דמי הקמה (מוריד מחסומים לכניסה)
- **Growth**: דמי הקמה של 99 דולר (מכסים הגדרת דומיין מותאם אישית וייעוץ ראשוני)
- **Pro**: דמי הקמה של 299 דולר (מכסים הגדרת מספר מיקומים ושיחת הטמעה)

הגדירו דמי הקמה בכל חלק תמחור של התוכנית. ראו [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) לפרטים.

## תקופות ניסיון (Trial Periods) {#trial-periods}

הצעת תקופת ניסיון מפחיתה חיכוך בהרשמה, אבל מציגה סיכון של אי-ההמרה. עבור FitSite:

- **ניסיון חינם של 7 ימים** רק בתוכנית Starter
- ללא ניסיון ב-Growth ו-Pro (לקוחות אלה מחויבים יותר ומצפים לשלם)

הגדירו את הניסיון בתוכנית Starter תחת חלק התמחור על ידי הפעלת המתג **Offer Trial** (הצע ניסיון) והגדרת משך הזמן ל-7 ימים.

### איך להפוך ניסיון להמרה {#making-trials-convert}

ניסיון עובד רק אם הלקוח חווה ערך במהלך תקופת הניסיון. רצף ההטמעה שלכם (שיעור 8) קריטי כאן – המיילים של ברכות צריכים להיות מתואמים כדי להניע מעורבות בתוך חלון ה-7 ימים.

## קודי הנחה (Discount Codes) {#discount-codes}

צרו קודי הנחה אסטרטגיים למטרות ספציפיות:

- **FITLAUNCH** -- 30% הנחה על 3 החודשים הראשונים (לקידום השקה)
- **ANNUAL20** -- 20% הנחה על תוכניות שנתיות (אם עדיין לא מופחת)
- **REFERRAL** -- חודש חינם (להפניות של לקוחות)

נווטו אל **Ultimate Multisite > Discount Codes** כדי ליצור אותם. ראו [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) למדריך המלא.

:::tip אין להנחות כברירת מחדל
הנחות צריכות להיות כלים אסטרטגיים, לא תוספת קבועה. אם כולם מקבלים הנחה, זו לא הנחה – זה המחיר האמיתי שלכם. השתמשו בהן לקמפיינים ספציפיים, הפניות וקידומים מוגבלים בזמן.
:::

## טיפול במסים (Tax Handling) {#tax-handling}

אם אתם מפעילים במדינה שמחייבת גביית מס:

1. הגדירו שיעורי מס ב-**Ultimate Multisite > Settings > Taxes**
2. יישמו קטגוריות מס על התוכניות שלכם
3. ודאו שהחשבוניות מציגות את המס בצורה נכונה

ראו [Tax Handling](/user-guide/payment-gateways/tax-handling) להגדרות מפורטות. אם אתם משרתים לקוחות בינלאומיים, שקלו את תוסף [VAT addon](/addons/vat) לצורך עמידה בתקנות האיחוד האירופי.

## סקירת התמחור שלכם {#reviewing-your-pricing}

לאחר ההשקה, עברו על התמחור רבעונית. שימו לב ל:

- **שיעור המרה לפי תוכנית**: אם Starter ממיר היטב אבל Growth לא, המרווח ביניהם אולי גדול מדי
- **שיעור שדרוג**: אם מעטים הלקוחות משדרגים מ-Starter ל-Growth, ייתכן שתוכנית Growth לא מציעה מספיק ערך נוסף
- **נטוק לפי תוכנית**: אם לקוחות שנתיים נוטים פחות לנטוק, דחפו את התמחור השנתי יותר
- **תמחור מתחרים**: כמה גובים האלטרנטיבות? האם אתם ממוקמים נכון?

## רשת FitSite עד כה {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## מה בנינו בשיעור הזה {#what-we-built-this-lesson}

- **תמחור שנתי** עם הנחה של 20% כדי לעודד מחויבות
- **דמי הקמה** ברמות הגבוהות יותר כדי לכסות מאמץ הטמעה
- **תקופת ניסיון** בתוכנית ההתחלה כדי להפחית חיכוך בהרשמה
- **קודי הנחה אסטרטגיים** להשקה, הפניות וקמפיינים
- **הגדרת מס** חיוב תואם
- **מסגרת סקירת תמחור** לאופטימיזציה מתמשכת

---

**השלב הבא:** [Lesson 10: Launch Day](lesson-10-launch) — רשימת בדיקה לפני השקה והעלאה לאוויר.
