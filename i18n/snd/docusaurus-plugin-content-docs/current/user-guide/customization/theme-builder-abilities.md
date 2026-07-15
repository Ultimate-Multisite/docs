---
title: تھیم بلڊر جي صلاحيتون
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 ۾ ٻه طاقتور صلاحيتون شامل ڪيون آهن جيڪي توهان کي چیٽ انٽر فيس جي مستند طور تي ڪاسٽم بلاڪ ٿيمين (block themes) جنريٽ ڪرڻ ۽ پليمنتي ڪرڻ جو موقع ڏين ٿيون.

## گهرجي (Overview) {#overview}

**scaffold-block-theme** ۽ **activate-theme** صلاحيتون ايجنٽس کي مندرت توهان جي وضاحتن تي ڪاسٽم بلاڪ ٿيمين جنريٽ ڪرڻ ۽ پليمنتي ڪرڻ جو موقع ڏين ٿيون:
- توهان جي مخصوص معلومات جي بنياد تي كامل، پروڊڪشن لاءِ تيار بلاڪ ٿيمين جنريٽ ڪرڻ
- هيٺ ڏنل عمل کان سواءِ خودي مداخلت بجي تمام طور تي توهان جي سائيٽ تي ٿيمين کي خود بخود فعال (activate) ڪرڻ
- رهنمائي تصميمون سان گڏ هڪ هم آهنگ بصري هوئيت (visual identities) جو نڪتا ڪرڻ

## بلاڪ ٿيمين جنريٽ ڪرڻ (Scaffold Block Theme) {#scaffold-block-theme}

**scaffold-block-theme** صلاحيت ان جديد WordPress block theme کي جنريٽ ڪري ٿي جنهن ۾ كامل ٿيم جي ساخت شامل آهي، جنهن ۾ شامل آهن:

- Design tokens سان `theme.json` کانڪر
- عام لي آؤٽس لاءِ بلاڪ ٽيمپليٽ فائلون
- ڪاسٽم بلاڪ سٽائل ۽ مختلف انداز (variations)
- ٿيم ميڊيٽا ۽ سپورٽ اعلان

### ڪيئن استعمال ڪجي (How to Invoke) {#how-to-invoke}

Superdav AI Agent سان پنهنجي چیٽ ۾، توهان ٿيم جنريٽ ڪرڻ جو درخواست ڪري سگهو ٿا:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ايجنٽ ڪجهه ڪم ڪندو:
1. گهڻي گفتگو جي ذريعي توهان جي تصميمون حاصل ڪندي
2. كامل ٿيم جي ساخت جنريٽ ڪندي
3. تمام ضروري ٿيم فائلون bana ڪندي
4. فعال ڪرڻ لاءِ ٿيم کي تيار ڪندي

### توقع ڪيل نتيجو (Expected Output) {#expected-output}

جڏهن صلاحيت ڪاميابن سان عمل ڪري ٿي، توهان ڏسندا رهندا:

- هيٺ ڏنل تصديق ته ٿيم جنريٽ ٿي ويو آهي
- ٿيم جو نام ۽ جڳهه (location)
- لاڳو ٿيل design tokens جو خلاصو (رنگ، ڪارڊ، فاصلو)
- فعال ڪرڻ لاءِ تيار حالت

مثال نتيجو:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## ٿيم کي فعال ڪرڻ (Activate Theme) {#activate-theme}

**activate-theme** جي صلاحيت توهان جي سائيٽ کي نوي بنائي واري يا موجود block theme تي منتقل ڪري ٿي.

### ڪيئن استعمال ڪجي (How to Invoke) {#how-to-invoke-1}

Theme جو scaffold ڪرڻ کان پوءِ، توهان ان کي فوري طور تي فعال ڪري سگهو ٿا:

```
"Modern Agency theme کي فعال ڪريو"
```

يا ڪنهن به موجود theme کي فعال ڪريو:

```
"Twentytwentyfour theme تي منتقل ٿيو"
```

### توقع ڪيل نتيجي (Expected Output) {#expected-output-1}

جڏهن فعال ڪرڻ ۾ ڪاميابي ٿئي ته:

- فعال سميائي واري theme جو تصديق
- پُچھلا theme جو نالو (حواله لاءِ)
- سائيٽ جو URL جتي theme موجوده آهي
- ڪنهن به theme-خاص set up جي نوٽس

مثال نتيجي:
```
✓ Theme ڪاميابن سان فعال ٿيو
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Layout جي تصديق ڪرڻ لاءِ پنهنجي homepage کي چيڪ ڪريو
```

## ڪم ڪندڙ عمل (Workflow: Scaffold and Activate) {#workflow-scaffold-and-activate}

عام ڪم ڪندڙ عمل ۾ ٻئي صلاحيتون شامل هونديون آهن:

1. **Theme generation جو درخواست**: "من جي SaaS ل اينڊنگ پيچ لاءِ هڪ block theme banaؤ"
2. **Agent theme کي scaffold ڪري ٿو**: فائلون ۽ design tokens جن کي بنايو ويندو آهي
3. **جائز ڪرڻ ۽ بهتر ڪرڻ**: جيڪڏهن ضرورت پئي ته design جي تبديلين تي بحث ڪيو وڃي
4. **فعال ڪرڻ**: "Theme کي هله فعال ڪريو"
5. **تصديق ڪرڻ**: نئين design جو لائیو ٿيڻ کان تصديق ڪرڻ لاءِ سائيٽ بجي

## Design Tokens ۽ تخصيص (Design Tokens and Customization) {#design-tokens-and-customization}

Scaffold ڪيل themes WordPress design tokens (via `theme.json`) جو استعمال ڪن ٿا:

- **Colors**: Primary، secondary، accent، neutral palette
- **Typography**: Font families، sizes، weights، line heights
- **Spacing**: Padding، margin، gap scales
- **Borders**: Radius ۽ width tokens
- **Shadows**: Elevation levels

هيس tokens `theme.json` ۾ مركزيت آهن، جنهن سان هڪ فائل کان پنهنجي سڄي design system کي ترتي ڪرڻ آسان آهي.

## محدوديتون ۽ نوٽس (Limitations and Notes) {#limitations-and-notes}

## مسئلہ حل (Troubleshooting) {#troubleshooting}

**Theme scaffolding کے بعد Theme نظر نہیں آ رہا ہے**
- چیک کریں کہ theme کی ڈائریکٹری موجود ہے اور اس میں مناسب پرمیشنز ہیں
- چیک کریں کہ `theme.json` درست JSON ہے
- یقینی بنائیں کہ theme کا نام پہلے سے موجود themes سے متصادم (conflict) نہ ہو

**Activation فیل ہو رہا ہے**
- تصدیق کریں کہ آپ کے پاس ایڈمنسٹریٹر کی اجازتیں ہیں
- چیک کریں کہ WordPress کو theme ڈائریکٹری پڑھنے کی اجازت ہے
- تفصیلات کے لیے WordPress error logs کا جائزہ لیں

**Design tokens لاگو نہیں ہو رہے**
- تصدیق کریں کہ `theme.json` کا syntax درست ہے
- کسی بھی caching plugins کو صاف (clear) کر دیں
- چیک کریں کہ آپ کا WordPress ورژن ان tokens کو سپورٹ کرتا ہے جنہیں آپ استعمال کر رہے ہیں

## اگلے اقدامات (Next Steps) {#next-steps}

اپنا theme activate کرنے کے بعد، آپ یہ کر سکتے ہیں:
- ٹائپوگرافی، رنگوں اور اسپیسنگ کو بہتر بنانے کے لیے **Design System Aesthetics skill** کا استعمال کریں
- WordPress block editor کے ذریعے انفرادی block styles کو کسٹمائز کریں
- theme کی `style.css` فائل میں کسٹم CSS شامل کریں
- مخصوص page types کے لیے کسٹم block templates بنائیں
