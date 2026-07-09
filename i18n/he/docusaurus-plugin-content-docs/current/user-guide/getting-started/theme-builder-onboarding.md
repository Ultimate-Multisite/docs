---
title: זרימת קליטת משתמשים בבונה תבניות
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# תהליך הדרכה של בונה התבניות (Theme Builder Onboarding Flow) {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 מציג **תהליך הדרכה של בונה התבניות** (Theme Builder onboarding flow) המלווה אותך וסופר לך ליצור תבנית בלוק מותאמת אישית במהלך ההגדרה הראשונית. זה מחליף את מצב ה-Site Builder הישן בגישה גמישה יותר, המונעת על ידי סוכן (Agent).

## מהו תהליך הדרכה של בונה התבניות? {#what-is-the-theme-builder-onboarding-flow}

תהליך הדרכה של בונה התבניות הוא מאשף הגדרה אינטראקטיבי שעושה את הדברים הבאים:

- מנחה אותך בהחלטות עיצוב (צבעים, טיפוגרפיה, פריסה)
- לוכד את העדפות הזהות הוויזואלית של האתר שלך
- מייצר תבנית בלוק מותאמת אישית שמתאימה לצרכים שלך
- מפעיל את התבנית אוטומטית עם סיום התהליך

התהליך מופעל על ידי **סוכן Setup Assistant**, אשר שואל שאלות הבהרה ובונה את התבנית שלך באופן הדרגתי.

## התחלת תהליך הדרכה של בונה התבניות {#starting-the-theme-builder-onboarding}

### הגדרה ראשונית {#first-run-setup}

כשתפעיל לראשונה את Superdav AI Agent בהתקנת WordPress חדשה, תראה:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

בחר ב**"Build a custom theme"** כדי להיכנס לתהליך הדרכה של בונה התבניות.

### הפעלה ידנית {#manual-activation}

אתה יכול גם להתחיל את תהליך ההדרכה של בונה התבניות בכל עת על ידי בקשת:

```
"Start the Theme Builder onboarding"
```

או

```
"Help me create a custom theme"
```

## שלבי ההדרכה {#the-onboarding-steps}

### שלב 1: בחירת מצב {#step-1-mode-selection}

סוכן Setup Assistant שואל אותך על ההעדפה שלך:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**מצב מודרך (Guided mode)** מומלץ עבור רוב המשתמשים; הסוכן יציע המלצות עיצוב בהתבסס על התעשייה והמטרות שלך.

### שלב 2: מפרט האתר {#step-2-site-specification}

תישאל על האתר שלך:

- **מטרת האתר**: מסחר אלקטרוני, בלוג, פורטפוליו, SaaS וכו'.
- **קהל יעד**: מי המבקרים שלך?
- **צבעי המותג**: צבע ראשי וצבע משני (או "אני לא בטוח")
- **טון**: מקצועי, יצירתי, משחקי, מינימליסטי וכו'.

מידע זה נשמר בזיכרון **site_brief** שלך, שאליו הסוכנים מפנים בהמשך המפגשים.

### שלב 3: החלטות מערכת העיצוב (Design System) {#step-3-design-system-decisions}

הסוכן מנחה אותך דרך בחירת אסימוני עיצוב (design tokens):

- **טיפוגרפיה**: משפחת גופן (Serif, Sans-serif, Monospace) וסולם גודל
- **פלטת צבעים**: צבע ראשי, צבע משני, צבע הדגשה וצבעים ניטרליים
- **מרווחים**: פריסות צפופות, רגילות או מרווחות
- **תנועה (Motion)**: אנימציות ומעברים (אם נדרש)

### שלב 4: יצירת התבנית (Theme Generation) {#step-4-theme-generation}

סוכן Setup Assistant יוצר עבורך את תבנית הבלוק המותאמת אישית עם:

- `theme.json` המכיל את כל אסימוני העיצוב שלך
- תבניות בלוק (Block templates) לפריסות נפוצות (דף הבית, בלוג, יצירת קשר)
- סגנונות בלוק מותאמים למערכת העיצוב שלך
- מטא-דאטה של התבנית והצהרות תמיכה ב-WordPress

### שלב 5: הפעלה ואימות {#step-5-activation-and-verification}

התבנית מופעלת אוטומטית, ותראה:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

לאחר מכן תוכל לבקר באתר שלך כדי לוודא שהתבנית מוצגת כראוי.

## מפרט האתר וזיכרון site_brief {#site-specification-and-sitebrief-memory}

במהלך ההדרכה, הסוכן לוכד את מפרט האתר שלך בקטגוריה של זיכרון **site_brief**. זה כולל:

- מטרות ויעדי האתר
- קהל יעד
- צבעי מותג וטון
- העדפות עיצוב
- מבנה התוכן

### למה site_brief חשוב? {#why-sitebrief-matters}

במפגשים עתידיים, הסוכנים מפנים ל-site_brief שלך כדי:

- לשמור על עקביות עיצובית לצורך שינויים
- להציע פיצ'רים המותאמים למטרת האתר שלך
- לספק המלצות מודעות להקשר
- להימנע מחזרה על שאלות הגדרה

### צפייה ב-site_brief שלך {#viewing-your-sitebrief}

אתה יכול לבקש מהסוכן:

```
"Show me my site brief"
```

או

```
"What do you know about my site?"
```

הסוכן יציג את מפרט האתר השמור שלך.

## התאמה אישית לאחר ההדרכה {#customizing-after-onboarding}

לאחר שסיימה הדרכת בונה התבניות, אתה יכול:

### להשתמש במיומנות אסתטיקת מערכת העיצוב (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

לבקש ליטושים עיצוביים:

```
"Refine the typography to be more modern"
```

או

```
"Adjust the color palette to be warmer"
```

**מיומנות Design System Aesthetics** מנחה אותך דרך עדכונים עיצוביים ממוקדים.

### עריכת theme.json ישירות {#edit-themejson-directly}

למשתמשים מתקדמים, ערוך את `/wp-content/themes/[theme-name]/theme.json` כדי להתאים:

- אסימוני צבע (Color tokens)
- סקלות טיפוגרפיה (Typography scales)
- ערכי מרווח (Spacing values)
- הגדרות גבולות וצללים (Border and shadow definitions)

### יצירת תבניות בלוק מותאמות אישית {#create-custom-block-templates}

השתמש בעורך הבלוקים של WordPress כדי ליצור תבניות מותאמות אישית עבור:

- פריסות דף הבית
- דפי פוסט בלוג
- דפי מוצר
- טפסי יצירת קשר

## השוואה: הדרכה ישנה מול חדשה {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## פתרון תקלות (Troubleshooting) {#troubleshooting}

**תהליך ההדרכה לא הושלם**
- הפעל מחדש את התהליך: "Start the Theme Builder onboarding"
- ודא שההתקנה של WordPress מעודכנת
- ודא שסוכן Setup Assistant מופעל

**ה-site_brief שלי לא נמצא בשימוש**
- אשר שהסוכן מקבל גישה לזיכרון
- בקש מהסוכן "recall my site brief"
- ודא שזיכרון מופעל בהגדרות שלך

**התבנית שנוצרה לא תואמת את ההעדפות שלי**
- השתמש במיומנות Design System Aesthetics כדי ללטש אותה
- בקש מהסוכן "regenerate the theme with [specific changes]"
- ערוך את theme.json ישירות לצורך שליטה מדויקת

## צעדים הבאים {#next-steps}

לאחר השלמת הדרכת בונה התבניות:

1. **אמת את האתר שלך**: בקר באתר כדי לראות את התבנית החדשה
2. **שפר את העיצוב**: השתמש במיומנות Design System Aesthetics לצורך התאמות
3. **הוסף תוכן**: התחל לבנות את תוכן האתר שלך
4. **חקור יכולות**: למד על יכולות סוכנים אחרות כמו scaffold-block-theme ו-activate-theme
