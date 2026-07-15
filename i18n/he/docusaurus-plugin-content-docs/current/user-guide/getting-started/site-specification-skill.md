---
title: מיומנות מפרט אתר
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# מיומנות אפיון האתר (Site Specification Skill)

**מיומנות אפיון האתר** היא גישה מובנית לאיסוף המטרות, קהל היעד ומותג של האתר שלך. מידע זה נשמר בזיכרון **site_brief** שלך, ואג'נטים (Agents) מתייחסים אליו לאורך סשנים שונים כדי לספק סיוע עקבי ומותאם להקשר.

## מהו אפיון האתר? {#what-is-site-specification}

אפיון האתר הוא תהליך תיעוד של:

- **מטרת האתר**: מה האתר שלך עושה ולמה הוא קיים
- **קהל היעד**: מי מבקר באתר שלך ומה הוא צריך
- **זהות המותג**: הצבעים, הטון והסגנון הוויזואלי שלך
- **מטרות העסקיות**: איך נראית ההצלחה עבור האתר שלך
- **מבנה התוכן**: איך האתר שלך מאורגן

מפרט זה הופך ל-**site_brief** שלך, זיכרון קבוע שאג'נטים משתמשים בו כדי להבין את ההקשר של האתר שלך.

## למה להשתמש באפיון האתר? {#why-use-site-specification}

### עקביות בין סשנים {#consistency-across-sessions}

בלי site_brief, היית צריך להסביר מחדש את מטרת האתר בכל פעם שאתה מתחיל סשן חדש. עם site_brief, האג'נטים מבינים מיד:

- את מטרות וקהל היעד של האתר שלך
- את צבעי המותג והטון שלו
- את מבנה התוכן שלך
- את המטרות העסקיות שלך

### המלצות טובות יותר {#better-recommendations}

האג'נטים משתמשים ב-site_brief שלך כדי:

- להציע פיצ'רים שמתיישרים עם מטרת האתר שלך
- להמליץ על מבני תוכן שמתאימים למטרות שלך
- להציע עיצובים עקביים עם המותג שלך
- להימנע מהצעת פיצ'רים שאינם תואמים

### קליטה מהירה יותר {#faster-onboarding}

אג'נטים חדשים (או אג'נטים בסשנים חדשים) יכולים להגיע לרמה גבוהה במהירות על ידי קריאת ה-site_brief שלך, במקום לשאול שאלות הבהרה.

## אתחול אפיון האתר {#initiating-site-specification}

### במהלך ה-Onboarding של Theme Builder {#during-theme-builder-onboarding}

מיומנות אפיון האתר מאותחלת אוטומטית במהלך תהליך ה-onboarding של **Theme Builder**. אג'נט ה-Setup Assistant שואל שאלות ובונה את ה-site_brief שלך.

### אתחול ידני {#manual-initiation}

אתה יכול להתחיל אפיון אתר בכל עת:

```
"Let's define my site specification"
```

או

```
"Help me create a site brief"
```

## תהליך אפיון האתר {#the-site-specification-process}

### שלב 1: מטרת האתר {#step-1-site-purpose}

האג'נט שואל:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

אתה יכול לבחור קטגוריה או לתאר את המטרה שלך.

### שלב 2: קהל היעד {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### שלב 3: זהות המותג {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### שלב 4: מטרות עסקיות {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### שלב 5: מבנה התוכן {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## זיכרון site_brief שלך {#your-sitebrief-memory}

לאחר השלמת אפיון האתר, המידע שלך נשמר כ-**site_brief** בזיכרון האג'נט. זהו רשומה מובנית המכילה:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## צפייה ועדכון ה-site_brief שלך {#viewing-and-updating-your-sitebrief}

### צפייה ב-site_brief שלך {#view-your-sitebrief}

שאל את האג'נט:

```
"Show me my site brief"
```

או

```
"What do you know about my site?"
```

האג'נט יציג את המפרט השמור שלך.

### עדכון ה-site_brief שלך {#update-your-sitebrief}

אם האתר שלך מתפתח, אתה יכול לעדכן אותו:

```
"Update my site brief: we're now targeting B2B customers"
```

או

```
"Refresh my site specification"
```

פעולה זו תריץ מחדש את מיומנות אפיון האתר עם המידע הקיים שלך כנקודת התחלה.

## איך האג'נטים משתמשים ב-site_brief {#how-agents-use-sitebrief}

### המלצות עיצוב {#design-recommendations}

כאשר אתה מבקש שינויים בעיצוב, האג'נטים מתייחסים ל-site_brief שלך:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### הצעות פיצ'רים {#feature-suggestions}

האג'נטים מציעים פיצ'רים שמתיישרים עם המטרות שלך:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### מבנה תוכן {#content-structure}

האג'נטים מציעים ארגון תוכן בהתבסס על המבנה שלך:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## שיטות עבודה מומלצות {#best-practices}

### להיות ספציפי {#be-specific}

במקום "קהל כללי," תאר את קהל היעד האמיתי שלך:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### לעדכן באופן קבוע {#update-regularly}

ככל שהאתר שלך מתפתח, עדכן את ה-site_brief שלך:

- כשאתה משנה את קהל היעד שלך
- כשאתה מוסיף קווי מוצרים חדשים
- כשזהות המותג שלך משתנה
- כשמטרות העסקיות שלך משתנות

### להשתמש בטרמינולוגיה עקבית {#use-consistent-terminology}

השתמש באותם מונחים לאורך הסשנים:

- ✓ תמיד אמור "sustainable jewelry" (ולא "eco-friendly jewelry" ו-"green products")
- ✓ התייחס באופן עקבי לקהל היעד שלך באותו אופן

### לכלול הקשר {#include-context}

ספק רקע שעוזר לאג'נטים להבין את ההחלטות שלך:

- "אנחנו מכוונים למקצוענים שמעריכים איכות על פני מחיר"
- "הקהל שלנו טכנולוגי ומצפה לעיצוב מודרני"
- "אנחנו סטארט-אפ שמומן עצמאית, אז אנחנו צריכים פתרונות חסכוניים"

## קשר ל-Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

מיומנות אפיון האתר משולבת בתהליך ה-onboarding של **Theme Builder**. כאשר אתה משלים את ה-onboarding, ה-site_brief שלך נוצר אוטומטית עם המידע שסיפקת.

אתה יכול גם להריץ את אפיון האתר באופן עצמאי אם תרצה:

- ללטש את המפרט שלך לאחר ההגדרה הראשונית
- לעדכן את ה-site_brief שלך ככל שהאתר מתפתח
- ליצור מפרט מפורט לפני תחילת ה-Theme Builder

## פתרון תקלות {#troubleshooting}

**ה-site_brief שלי לא נמצא בשימוש**
- ודא שהאג'נט יכול לגשת לזיכרון
- בקש מהאג'נט "recall my site brief"
- בדוק שהזיכרון מופעל בהגדרות שלך

**אני רוצה להתחיל מחדש עם site_brief חדש**
- בקש מהאג'נט: "Clear my site brief and start fresh"
- ואז הרץ שוב את אפיון האתר

**האג'נט נותן המלצות שאינן תואמות את ה-site_brief שלי**
- בקש מהאג'נט "review my site brief"
- עדכן את ה-site_brief שלך אם הוא מיושן
- ספק הקשר נוסף בבקשות שלך

## צעדים הבאים {#next-steps}

לאחר הגדרת מפרט האתר שלך:

1. **השתמש ב-Theme Builder**: צור תבנית מותאמת אישית בהתבסס על ה-site_brief שלך
2. **לטש עיצוב**: השתמש במיומנות Design System Aesthetics לעבודה עיצובית מפורטת
3. **תכנן תוכן**: בקש מהאג'נטים המלצות על מבנה תוכן
4. **בנה פיצ'רים**: בקש פיצ'רים שמתיישרים עם המטרות העסקיות שלך
