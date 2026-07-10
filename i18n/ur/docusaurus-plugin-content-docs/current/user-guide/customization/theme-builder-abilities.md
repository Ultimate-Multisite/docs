---
title: تھیم بلڈر کی صلاحیتیں
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold اور Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 دو طاقتور abilities متعارف کراتا ہے جو آپ کو چیٹ انٹرفیس سے براہ راست کسٹم بلاک تھیمز بنانے اور انہیں استعمال کرنے (deploy) کی اجازت دیتی ہیں۔

## Overview {#overview}

**scaffold-block-theme** اور **activate-theme** abilities ایجنٹس کو یہ کام کرنے کے قابل بناتی ہیں:
- آپ کی تفصیلات کی بنیاد پر مکمل، استعمال کے لیے تیار (production-ready) بلاک تھیمز بنانا
- بغیر کسی دستی مداخلت کے آپ کی سائٹ پر تھیمز کو خودکار طور پر فعال (activate) کرنا
- گائیڈڈ ڈیزائن فیصلوں کے ذریعے ایک مربوط بصری شناخت (cohesive visual identity) بنانا

## Scaffold Block Theme {#scaffold-block-theme}

**scaffold-block-theme** ability ایک مکمل تھیم ڈھانچے (theme structure) کے ساتھ ایک نیا WordPress بلاک تھیم تیار کرتی ہے، جس میں شامل ہیں:

- ڈیزائن ٹوکنز کے ساتھ `theme.json` کنفیگریشن
- عام لے آؤٹس کے لیے بلاک ٹیمپلیٹ فائلز
- کسٹم بلاک اسٹائلز اور ویرییشنز
- تھیم میٹا ڈیٹا اور سپورٹ ڈکلیریشنز

### How to Invoke {#how-to-invoke}

Superdav AI Agent کے ساتھ اپنی چیٹ میں، آپ تھیم بنانے کی درخواست کر سکتے ہیں:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ایجنٹ یہ کرے گا:
1. گفتگو کے ذریعے آپ کی ڈیزائن کی ترجیحات (preferences) جمع کرے گا
2. مکمل تھیم ڈھانچہ تیار کرے گا
3. تمام ضروری تھیم فائلز بنائے گا
4. تھیم کو فعال کرنے کے لیے تیار کرے گا

### Expected Output {#expected-output}

جب یہ ability کامیابی سے چل جائے گی، تو آپ کو یہ نظر آئے گا:

- تصدیق کہ تھیم کو scaffold کر دیا گیا ہے
- تھیم کا نام اور مقام (location)
- لاگو کیے گئے ڈیزائن ٹوکنز کا خلاصہ (رنگ، ٹائپوگرافی، اسپیسنگ)
- فعال کرنے کے لیے تیار (ready-to-activate) اسٹیٹس

مثال کے طور پر آؤٹ پٹ:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

**activate-theme** ability آپ کی سائٹ کو ایک نئے scaffold کیے گئے یا موجودہ بلاک تھیم پر سوئچ کرتی ہے۔

### How to Invoke {#how-to-invoke-1}

تھیم کو scaffold کرنے کے بعد، آپ اسے فوری طور پر فعال کر سکتے ہیں:

```
"Activate the Modern Agency theme"
```

یا کسی بھی موجودہ تھیم کو فعال کر سکتے ہیں:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output {#expected-output-1}

جب activation کامیاب ہو جائے گا:

- فعال تھیم کی تصدیق
- پچھلے تھیم کا نام (حوالے کے لیے)
- سائٹ کا URL جہاں تھیم اب لائیو ہے
- کوئی بھی تھیم سے متعلق سیٹ اپ نوٹ

مثال کے طور پر آؤٹ پٹ:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold اور Activate {#workflow-scaffold-and-activate}

ایک عام workflow ان دونوں abilities کو یکجا کرتا ہے:

1. **تھیم بنانے کی درخواست**: "Create a block theme for my SaaS landing page"
2. **ایجنٹ تھیم scaffold کرتا ہے**: فائلز اور ڈیزائن ٹوکنز تیار کرتا ہے
3. **جائزہ لینا اور بہتر بنانا**: اگر ضرورت ہو تو ڈیزائن میں تبدیلیوں پر بات چیت کرنا
4. **Activate کرنا**: "Activate the theme now"
5. **تصدیق کرنا**: نئے ڈیزائن کی تصدیق کے لیے اپنی سائٹ پر جانا

## Design Tokens اور Customization {#design-tokens-and-customization}

Scaffold کیے گئے تھیمز WordPress design tokens (جو `theme.json` کے ذریعے ہوتے ہیں) کا استعمال کرتے ہیں تاکہ:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius اور width tokens
- **Shadows**: Elevation levels

یہ ٹوکنز `theme.json` میں مرکزی طور پر موجود ہوتے ہیں، جس سے آپ کو ایک ہی فائل سے اپنے پورے ڈیزائن سسٹم کو ایڈجسٹ کرنا آسان ہو جاتا ہے۔

## Limitations and Notes {#limitations-and-notes}

- تھیمز `/wp-content/themes/` میں scaffold کیے جاتے ہیں اور انہیں WordPress کے نام کے اصولوں (naming conventions) پر عمل کرنا ضروری ہے۔
- Activation کے لیے آپ کی WordPress سائٹ پر مناسب اجازتوں (permissions) کی ضرورت ہوتی ہے۔
- تھیمز میں کسٹم PHP کوڈ کم سے کم ہوتا ہے؛ پیچیدہ فنکشنلٹی کے لیے plugins استعمال کریں۔
- بلاک تھیمز WordPress 5.9 اور اس سے نئے ورژن کے ساتھ بہترین کام کرتے ہیں۔

## Troubleshooting {#troubleshooting}

**Scaffolding کے بعد تھیم نظر نہیں آتا**
- تصدیق کریں کہ تھیم کی ڈائریکٹری موجود ہے اور اس کی مناسب اجازتیں ہیں۔
- چیک کریں کہ `theme.json` درست JSON ہے۔
- یقینی بنائیں کہ تھیم کا نام موجودہ تھیمز سے ٹکرا (conflict) نہیں رہا ہے۔

**Activation ناکام ہو جاتا ہے**
- تصدیق کریں کہ آپ کے پاس ایڈمنسٹریٹر کی اجازتیں ہیں۔
- چیک کریں کہ تھیم کی ڈائریکٹری WordPress کے لیے قابلِ مطالعہ (readable) ہے۔
- تفصیلات کے لیے WordPress error logs کا جائزہ لیں۔

**Design tokens لاگو نہیں ہو رہے**
- تصدیق کریں کہ `theme.json` syntax درست ہے۔
- کوئی بھی کیشنگ پلگ ان (caching plugin) صاف کریں۔
- چیک کریں کہ آپ کا WordPress ورژن ان ٹوکنز کو سپورٹ کرتا ہے۔

## Next Steps {#next-steps}

اپنا تھیم فعال کرنے کے بعد، آپ یہ کر سکتے ہیں:
- ٹائپوگرافی، رنگوں، اور اسپیسنگ کو بہتر بنانے کے لیے **Design System Aesthetics skill** استعمال کریں۔
- WordPress block editor کے ذریعے انفرادی بلاک اسٹائلز کو کسٹمائز کریں۔
- تھیم کی `style.css` فائل میں کسٹم CSS شامل کریں۔
- مخصوص پیج ٹائپس کے لیے کسٹم بلاک ٹیمپلیٹس بنائیں۔
