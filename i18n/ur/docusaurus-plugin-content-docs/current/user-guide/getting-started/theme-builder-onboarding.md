---
title: تھیم بلڈر آن بورڈنگ فلو
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 ایک گائیڈڈ **Theme Builder onboarding flow** متعارف کراتا ہے جو آپ کو اپنی ابتدائی سیٹ اپ کے دوران ایک کسٹم بلاک تھیم بنانے میں مدد کرتا ہے۔ یہ پرانے Site Builder mode کی جگہ ایک زیادہ لچکدار، ایجنٹ کی مدد سے چلنے والے طریقے سے کام کرتا ہے۔

## Theme Builder Onboarding Flow کیا ہے؟ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow ایک انٹرایکٹو سیٹ اپ ویزرڈ ہے جو یہ کام کرتا ہے:

- ڈیزائن کے فیصلوں (رنگ، ٹائپوگرافی، لے آؤٹ) میں آپ کی رہنمائی کرتا ہے
- آپ کی سائٹ کی بصری شناخت کی ترجیحات کو محفوظ کرتا ہے
- آپ کی ضروریات کے مطابق ایک کسٹم بلاک تھیم تیار کرتا ہے
- مکمل ہونے پر تھیم کو خودکار طور پر فعال (activate) کر دیتا ہے

یہ flow **Setup Assistant agent** سے چلتا ہے، جو وضاحت کرنے والے سوالات پوچھتا ہے اور آپ کی تھیم کو آہستہ آہستہ بناتا ہے۔

## Theme Builder Onboarding شروع کرنا {#starting-the-theme-builder-onboarding}

### پہلی بار سیٹ اپ (First-Run Setup) {#first-run-setup}

جب آپ پہلی بار Superdav AI Agent کو ایک نئی WordPress انسٹالیشن پر چلاتے ہیں، تو آپ کو یہ نظر آئے گا:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow میں داخل ہونے کے لیے **"Build a custom theme"** کا انتخاب کریں۔

### دستی فعال کرنا (Manual Activation) {#manual-activation}

آپ کسی بھی وقت Theme Builder onboarding شروع کر سکتے ہیں، یہ کہہ کر:

```
"Start the Theme Builder onboarding"
```

یا

```
"Help me create a custom theme"
```

## Onboarding کے مراحل {#the-onboarding-steps}

### مرحلہ 1: موڈ کا انتخاب (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent آپ کی ترجیح کے بارے میں پوچھتا ہے:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

زیادہ تر صارفین کے لیے **Guided mode** تجویز کیا جاتا ہے؛ ایجنٹ آپ کی صنعت اور اہداف کی بنیاد پر ڈیزائن کی سفارشات کرتا ہے۔

### مرحلہ 2: سائٹ کی تفصیلات (Site Specification) {#step-2-site-specification}

آپ سے آپ کی سائٹ کے بارے میں پوچھا جائے گا:

- **Site purpose**: ای-کامرس، بلاگ، پورٹفولیو، SaaS، وغیرہ۔
- **Target audience**: آپ کے وزٹر کون ہیں؟
- **Brand colors**: پرائمری اور سیکنڈری رنگ (یا "مجھے یقین نہیں")
- **Tone**: پروفیشنل، تخلیقی، چنچل، کم سے کم (minimal)، وغیرہ۔

یہ معلومات آپ کی **site_brief** میموری میں محفوظ ہو جاتی ہیں، جسے ایجنٹ مستقبل کے سیشنز میں استعمال کرتے ہیں۔

### مرحلہ 3: ڈیزائن سسٹم کے فیصلے (Design System Decisions) {#step-3-design-system-decisions}

ایجنٹ آپ کو ڈیزائن ٹوکنز (design tokens) کے انتخاب کے ذریعے رہنمائی کرتا ہے:

- **Typography**: فونٹ فیملی (serif, sans-serif, monospace) اور سائز کا پیمانہ (size scale)
- **Color palette**: پرائمری، سیکنڈری، ایکسینٹ، اور نیوٹرل رنگ
- **Spacing**: کمپیکٹ، نارمل، یا اسپیسس لے آؤٹ
- **Motion**: اینیمیشنز اور ٹرانزیشنز (اگر مطلوب ہو)

### مرحلہ 4: تھیم کی تیاری (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent آپ کے کسٹم بلاک تھیم کو مندرجہ ذیل چیزوں سے تیار کرتا ہے:

- `theme.json` جس میں آپ کے تمام ڈیزائن ٹوکنز شامل ہوتے ہیں
- عام لے آؤٹ کے لیے بلاک ٹیمپلیٹس (ہوم پیج، بلاگ، رابطہ)
- آپ کے ڈیزائن سسٹم سے ملتے جلتے کسٹم بلاک اسٹائلز
- تھیم میٹا ڈیٹا اور WordPress سپورٹ ڈکلیریشنز

### مرحلہ 5: فعال کرنا اور تصدیق (Activation and Verification) {#step-5-activation-and-verification}

تھیم خودکار طور پر فعال ہو جاتا ہے، اور آپ کو یہ نظر آئے گا:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

اس کے بعد آپ تھیم کی تصدیق کرنے کے لیے اپنی سائٹ پر جا سکتے ہیں۔

## Site Specification اور site_brief Memory {#site-specification-and-sitebrief-memory}

Onboarding کے دوران، ایجنٹ آپ کی سائٹ کی تفصیلات کو ایک **site_brief** میموری کیٹیگری میں محفوظ کرتا ہے۔ اس میں شامل ہیں:

- سائٹ کا مقصد اور اہداف
- ہدف کے سامعین (Target audience)
- برانڈ کے رنگ اور لہجہ (tone)
- ڈیزائن کی ترجیحات
- مواد کی ساخت (Content structure)

### site_brief کیوں اہم ہے {#why-sitebrief-matters}

مستقبل کے سیشنز میں، ایجنٹ آپ کے site_brief کا حوالہ دیتے ہیں تاکہ:

- تبدیلیوں کے دوران ڈیزائن میں مستقل مزاجی برقرار رہے
- آپ کی سائٹ کے مقصد کے مطابق خصوصیات تجویز کی جا سکیں
- سیاق و سباق سے متعلق سفارشات فراہم کی جا سکیں
- سیٹ اپ کے سوالات دہرانے سے بچا جا سکے

### اپنے site_brief کو دیکھنا {#viewing-your-sitebrief}

آپ ایجنٹ سے پوچھ سکتے ہیں:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

ایجنٹ آپ کی محفوظ کردہ سائٹ کی تفصیلات دکھائے گا۔

## Onboarding کے بعد کسٹمائزیشن {#customizing-after-onboarding}

Theme Builder onboarding مکمل ہونے کے بعد، آپ یہ کر سکتے ہیں:

### Design System Aesthetics Skill کا استعمال کرنا {#use-the-design-system-aesthetics-skill}

ڈیزائن میں بہتری کے لیے درخواست کریں:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** آپ کو ہدف کے مخصوص ڈیزائن اپ ڈیٹس کے ذریعے رہنمائی کرتا ہے۔

### theme.json کو براہ راست ایڈٹ کرنا {#edit-themejson-directly}

Advanced صارفین کے لیے، رنگوں، ٹائپوگرافی کے پیمانوں، اسپیسنگ ویلیوز، اور بارڈر اور شیڈو کی تعریفات کو ایڈجسٹ کرنے کے لیے `/wp-content/themes/[theme-name]/theme.json` کو ایڈٹ کریں۔

### کسٹم بلاک ٹیمپلیٹس بنانا {#create-custom-block-templates}

WordPress بلاک ایڈیٹر کا استعمال مندرجہ ذیل کے لیے کسٹم ٹیمپلیٹس بنانے کے لیے کریں:

- ہوم پیج لے آؤٹس
- بلاگ پوسٹ پیجز
- پروڈکٹ پیجز
- رابطہ فارمز

## موازنہ: پرانا بمقابلہ نیا Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## مسائل کا حل (Troubleshooting) {#troubleshooting}

**Onboarding flow مکمل نہیں ہوا**
- flow کو دوبارہ شروع کریں: "Start the Theme Builder onboarding"
- چیک کریں کہ آپ کی WordPress انسٹالیشن اپ ٹو ڈیٹ ہے
- تصدیق کریں کہ Setup Assistant agent فعال (enabled) ہے

**میرا site_brief استعمال نہیں ہو رہا**
- تصدیق کریں کہ ایجنٹ کو میموری تک رسائی حاصل ہے
- ایجنٹ سے پوچھیں کہ "recall my site brief"
- چیک کریں کہ آپ کی سیٹنگز میں میموری فعال ہے

**تخلیق شدہ تھیم میری ترجیحات سے مطابقت نہیں رکھتا**
- اسے بہتر بنانے کے لیے Design System Aesthetics skill کا استعمال کریں
- ایجنٹ سے پوچھیں کہ "regenerate the theme with [specific changes]"
- درست کنٹرول کے لیے theme.json کو براہ راست ایڈٹ کریں

## اگلے اقدامات (Next Steps) {#next-steps}

Theme Builder onboarding مکمل کرنے کے بعد:

1. **اپنی سائٹ کی تصدیق کریں**: نئی تھیم دیکھنے کے لیے اپنی سائٹ پر جائیں
2. **ڈیزائن کو بہتر بنائیں**: ایڈجسٹمنٹ کے لیے Design System Aesthetics skill استعمال کریں
3. **مواد شامل کریں**: اپنی سائٹ کا مواد بنانا شروع کریں
4. **قابلیتوں کو دریافت کریں**: scaffold-block-theme اور activate-theme جیسی دیگر ایجنٹ کی صلاحیتوں کے بارے میں جانیں۔
