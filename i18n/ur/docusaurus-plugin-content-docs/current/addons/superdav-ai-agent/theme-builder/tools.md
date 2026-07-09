---
title: ٹولز اور کنفیگریشن
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tools اور Configuration

Theme Builder آپ کی WordPress سائٹ کا تجزیہ، ڈیزائن، اور تعمیر کرنے کے لیے Tools کا ایک مجموعہ استعمال کرتا ہے۔ ورژن 1.16.0 میں، **sd-ai-agent/site-scrape اب Tier 1 tool ہے**، جس سے یہ Theme Builder میں بطور ڈیفالٹ دستیاب ہو جاتا ہے۔ Superdav AI Agent v1.18.0 قابلِ اعتماد developer workflows کے لیے الگ سے تقسیم کیا جانے والا Advanced companion package بھی متعارف کراتا ہے؛ یہ Tools WordPress.org core package کا حصہ نہیں ہیں اور انہیں الگ سے انسٹال اور مجاز کرنا ضروری ہے۔

## دستیاب Tools

### Tier 1 Tools (ہمیشہ دستیاب)

Tier 1 Tools Theme Builder میں کسی اضافی configuration کے بغیر بطور ڈیفالٹ دستیاب ہوتے ہیں۔

#### sd-ai-agent/site-scrape

**مقصد:** موجودہ websites کا تجزیہ کر کے ڈیزائن کی تحریک، مواد کی ساخت، اور فعالیت اخذ کرنا۔

**صلاحیتیں:**

- **Website تجزیہ** — حریف یا تحریک دینے والی websites کو scrape اور analyze کرنا
- **ڈیزائن اخذ کرنا** — رنگوں، fonts، اور layout patterns کی شناخت کرنا
- **مواد کی ساخت** — صفحے کی تنظیم اور درجہ بندی کو سمجھنا
- **خصوصیات کی شناخت** — plugins اور فعالیت کی شناخت کرنا
- **کارکردگی کا تجزیہ** — صفحے کی رفتار اور optimization چیک کرنا
- **SEO تجزیہ** — meta tags اور structured data کا جائزہ لینا

**استعمال:**

```
example.com کے ڈیزائن کا تجزیہ کریں اور اسے میری سائٹ کے لیے تحریک کے طور پر استعمال کریں۔
```

**یہ کیا اخذ کرتا ہے:**

- رنگوں کی palette اور رنگوں کا استعمال
- Typography (fonts اور sizes)
- Layout structure اور spacing
- Navigation patterns
- مواد کی تنظیم
- Images اور media کا استعمال
- Interactive elements
- Mobile responsiveness

**حدود:**

- Password-protected سائٹس کو scrape نہیں کر سکتا
- robots.txt اور سائٹ policies کا احترام کرتا ہے
- Dynamic content کو شاید capture نہ کر سکے
- JavaScript-heavy سائٹس کا تجزیہ محدود ہو سکتا ہے
- بڑی سائٹس کے تجزیے میں زیادہ وقت لگ سکتا ہے

### Tier 2 Tools (اختیاری)

Tier 2 Tools اس وقت دستیاب ہوتے ہیں جب انہیں Theme Builder settings میں واضح طور پر enabled کیا جائے۔

#### Advanced Analytics

تفصیلی performance metrics فراہم کرتا ہے:

- Page load times
- Core Web Vitals
- SEO score
- Accessibility score
- Best practices score

#### Content Optimizer

درج ذیل کے لیے بہتریوں کا تجزیہ اور تجاویز دیتا ہے:

- Readability
- SEO optimization
- Keyword usage
- Content structure
- Call-to-action placement

### Tier 3 Tools (Premium)

Tier 3 Tools اضافی configuration یا premium features کا تقاضا کرتے ہیں۔

#### AI Content Generator

درج ذیل کے لیے مواد generate کرتا ہے:

- Product descriptions
- Service pages
- Blog posts
- Meta descriptions
- Call-to-action copy

#### Advanced Design Tools

Advanced design capabilities فراہم کرتا ہے:

- Custom CSS generation
- Animation creation
- Interactive element design
- Advanced color theory
- Typography optimization

### Advanced Companion Tools (علیحدہ Package)

Advanced companion package کو core Superdav AI Agent release سے الگ تقسیم کیا جاتا ہے۔ یہ قابلِ اعتماد developer اور site-owner environments کے لیے ہے جہاں administrators agent کو high-impact tooling استعمال کرنے کی واضح اجازت دیتے ہیں۔

Advanced companion capabilities میں یہ شامل ہو سکتے ہیں:

- **Filesystem tools** — قابلِ اعتماد environments میں approved files کا معائنہ اور ترمیم کرنا
- **Database tools** — واضح طور پر authorise کیے جانے پر سائٹ data کو query یا update کرنا
- **WP-CLI tools** — WordPress maintenance اور inspection commands چلانا
- **REST dispatcher tools** — controlled dispatch workflows کے ذریعے registered REST endpoints کو call کرنا
- **Plugin builder tools** — plugin code کو scaffold کرنا اور اس پر iterate کرنا
- **Git snapshot tools** — risky developer operations سے پہلے snapshots بنانا
- **User-management tools** — اجازت ہونے پر user records کا جائزہ لینے یا adjust کرنے میں مدد کرنا
- **Benchmark tools** — development review کے لیے performance یا capability benchmarks چلانا

انہیں ہر installation کے لیے عمومی طور پر دستیاب Theme Builder Tools کے طور پر document نہ کریں۔ یہ صرف اس وقت دستیاب ہوتے ہیں جب Advanced companion package انسٹال، enabled، اور قابلِ اعتماد administrators تک محدود ہو۔

## Tool Configuration

### Tools کو فعال کرنا

Theme Builder میں اضافی Tools کو فعال کرنے کے لیے:

1. **Gratis AI Agent → Settings** پر جائیں
2. **Theme Builder → Tools** پر جائیں
3. ضرورت کے مطابق Tools کو on/off کریں
4. Settings محفوظ کریں

### Tool Permissions

کچھ Tools کو permissions درکار ہوتی ہیں:

- **Site scraping** — internet access درکار ہے
- **Analytics** — Google Analytics integration درکار ہے
- **Content generation** — API keys درکار ہیں
- **Advanced features** — premium subscription درکار ہو سکتی ہے
- **Advanced companion tools** — الگ سے تقسیم کیا گیا Advanced package اور administrator کا واضح اعتماد درکار ہے

### API Keys اور Credentials

ایسے Tools کے لیے API keys configure کریں جنہیں ان کی ضرورت ہو:

1. **Gratis AI Agent → Settings → API Keys** پر جائیں
2. ہر Tool کے لیے credentials درج کریں
3. Connection test کریں
4. محفوظ طریقے سے save کریں

### Advanced Companion Package انسٹال کرنا

Advanced companion package کو WordPress.org core ZIP سے الگ release کیا جاتا ہے۔ اسے صرف release کے official project distribution channel سے انسٹال کریں، پھر access کو قابلِ اعتماد administrators تک محدود کریں۔ Production سائٹ پر filesystem، database، WP-CLI، REST dispatcher، plugin builder، user-management، یا benchmark tools کو enabled کرنے سے پہلے human approval gates اور git snapshot behaviour کا جائزہ لیں۔

## sd-ai-agent/site-scrape کا استعمال

### بنیادی استعمال

Theme Builder سے کسی website کا تجزیہ کرنے کو کہیں:

```
competitor.com پر میرے competitor کی سائٹ کے ڈیزائن کا تجزیہ کریں
اور میری سائٹ کے لیے design improvements تجویز کریں۔
```

### مخصوص تجزیہ

مخصوص قسم کے تجزیے کی درخواست کریں:

```
example.com سے color palette اخذ کریں اور اسے تحریک کے طور پر استعمال کریں۔
```

```
example.com کے navigation structure کا تجزیہ کریں اور اسی جیسی
organization میری سائٹ پر apply کریں۔
```

```
example.com کی mobile responsiveness چیک کریں اور یقینی بنائیں کہ میری سائٹ
اتنی ہی responsive ہو۔
```

### Comparison Analysis

متعدد سائٹس کا موازنہ کریں:

```
site1.com اور site2.com کے designs کا موازنہ کریں اور ایسا design بنائیں
جو دونوں کے بہترین elements کو یکجا کرے۔
```

## Tool Limitations and Considerations

### Rate Limiting

- Scraping سرور کے زیادہ بوجھ کو روکنے کے لیے شرح کے لحاظ سے محدود ہے
- ایک ہی site پر متعدد درخواستیں محدود کی جا سکتی ہیں
- بڑے sites کا تجزیہ کرنے میں زیادہ وقت لگ سکتا ہے

### مواد کی درستگی

- متحرک مواد مکمل طور پر محفوظ نہیں ہو سکتا
- JavaScript سے رینڈر کیا گیا مواد نامکمل ہو سکتا ہے
- حقیقی وقت کا ڈیٹا ظاہر نہ ہو سکتا ہے
- کچھ مواد paywalls کے پیچھے ہو سکتا ہے

### قانونی اور اخلاقی امور

- robots.txt اور site پالیسیوں کا احترام کریں
- کاپی رائٹ شدہ مواد کو دوبارہ اشاعت کے لیے scrape نہ کریں
- تجزیے کو نقل کے بجائے تحریک کے لیے استعمال کریں
- تصدیق کریں کہ آپ کو نکالا گیا مواد استعمال کرنے کے حقوق حاصل ہیں
- تجزیہ کیے گئے sites کی service کی شرائط پر عمل کریں

### کارکردگی پر اثر

- بڑے sites کی scraping میں وقت لگ سکتا ہے
- بیک وقت متعدد scrapes سست ہو سکتے ہیں
- نیٹ ورک کنیکٹیویٹی رفتار کو متاثر کرتی ہے
- بڑے datasets کو مزید processing درکار ہو سکتی ہے

## بہترین طریقے

### Site Analysis کا استعمال

1. **متعدد sites کا تجزیہ کریں** — کئی ذرائع سے تحریک حاصل کریں
2. **ساخت پر توجہ دیں** — layout اور تنظیم کے patterns سیکھیں
3. **رنگ نکالیں** — color palettes کو ابتدائی نکات کے طور پر استعمال کریں
4. **typography کا مطالعہ کریں** — اپنی پسند کے font combinations شناخت کریں
5. **navigation کا جائزہ لیں** — menu کی تنظیم کو سمجھیں

### اخلاقی Scraping

1. **robots.txt کا احترام کریں** — site رہنما اصولوں پر عمل کریں
2. **مواد نقل نہ کریں** — تجزیہ صرف تحریک کے لیے استعمال کریں
3. **حقوق کی تصدیق کریں** — یقینی بنائیں کہ آپ نکالا گیا مواد استعمال کر سکتے ہیں
4. **ذرائع کا حوالہ دیں** — تحریک کے ذرائع کو credit دیں
5. **شرائط پر عمل کریں** — site کی service کی شرائط کی پابندی کریں

### Tool کی مؤثریت کو زیادہ سے زیادہ کرنا

1. **واضح رہیں** — مخصوص اقسام کے تجزیے کی درخواست کریں
2. **سیاق و سباق فراہم کریں** — اپنے site کا مقصد بیان کریں
3. **توقعات طے کریں** — اپنے design اہداف بیان کریں
4. **دہرائیں** — نتائج کی بنیاد پر بہتر بنائیں
5. **tools کو یکجا کریں** — جامع تجزیے کے لیے متعدد tools استعمال کریں

## مسئلہ حل کرنا

### Site Scrape نہیں ہو رہا

- چیک کریں کہ site عوامی طور پر قابل رسائی ہے یا نہیں
- تصدیق کریں کہ robots.txt scraping کی اجازت دیتا ہے
- کوئی مختلف site آزمائیں
- internet connection چیک کریں
- اگر مسئلہ برقرار رہے تو support سے رابطہ کریں

### نامکمل تجزیہ

- site میں متحرک مواد ہو سکتا ہے
- JavaScript مکمل طور پر رینڈر نہ ہوا ہو
- بڑے sites timeout ہو سکتے ہیں
- اس کے بجائے مخصوص صفحات کا تجزیہ کرنے کی کوشش کریں
- مخصوص تجزیاتی اقسام کی درخواست کریں

### سست کارکردگی

- بڑے sites کا تجزیہ کرنے میں زیادہ وقت لگتا ہے
- بیک وقت متعدد scrapes سست ہوتے ہیں
- نیٹ ورک کنیکٹیویٹی رفتار کو متاثر کرتی ہے
- کم مصروف اوقات میں کوشش کریں
- پہلے چھوٹے حصوں کا تجزیہ کریں

## متعلقہ دستاویزات

- [Discovery Interview](./discovery-interview.md) — design معلومات جمع کریں
- [Design Direction](./design-direction.md) — اپنے design کو بہتر بنائیں
- [Hospitality Menus](./hospitality-menus.md) — menu صفحات بنائیں
