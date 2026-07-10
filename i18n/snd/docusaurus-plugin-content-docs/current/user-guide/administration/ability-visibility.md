---
title: دکھاڻي جي صلاحيت
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# صلاحیت کی نظر (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 میں **Ability Visibility** کنٹرولز شامل کیے گئے ہیں جو یہ طے کرتے ہیں کہ کون سی سطحیں (surfaces) کس صلاحیت کو دکھائیں گی۔ اس سے ایڈمنز یہ ترتیب دے سکتے ہیں کہ REST APIs، MCP سرورز، WooCommerce انٹیگریشنز اور دیگر انٹرفیس کے ذریعے کون سی ایجنٹ کی صلاحیتیں دستیاب ہوں گی۔

## Ability Visibility کیا ہے؟ {#what-is-ability-visibility}

Ability Visibility ایک اجازت کا نظام ہے جو مندرجہ ذیل چیزوں کو کنٹرول کرتا ہے:

- **ایجنٹس کے لیے کون سی صلاحیتیں** دستیاب ہیں
- **وہ کہاں ظاہر ہوتی ہیں** (REST API، MCP، WooCommerce وغیرہ)
- **کون انہیں استعمال کر سکتا ہے** (پارٹنر آلاؤ لسٹ کے ذریعے)
- **ان کی درجہ بندی کیسے کی جاتی ہے** (شناخت شدہ یا غیر شناخت شدہ)

ہر صلاحیت کا ایک نظر آنے کا لیول ہوتا ہے جو مختلف سطحوں پر اس کی دستیابی کا تعین کرتا ہے۔

## Visibility Levels (نظر آنے کے لیولز) {#visibility-levels}

### Public (عوامی) {#public}

**Public abilities** ہر جگہ دستیاب ہوتی ہیں:

- REST API endpoints
- MCP سرورز
- WooCommerce انٹیگریشنز
- چیٹ انٹرفیسز
- تمام صارف کردار (مناسب اجازتوں کے ساتھ)

مثال: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (اندرونی) {#internal}

**Internal abilities** صرف آپ کی WordPress انسٹالیشن کے اندر دستیاب ہوتی ہیں:

- چیٹ انٹرفیسز
- ایڈمن پینلز
- صرف لاگ ان شدہ صارفین کے لیے
- REST API یا بیرونی انٹیگریشنز کے ذریعے ظاہر نہیں ہوتیں

مثال: `manage-settings`, `view-analytics`, `export-data`

### Partner (پارٹنر) {#partner}

**Partner abilities** صرف وہ پارٹنرز دستیاب ہوتے ہیں جن کی فہرست میں انہیں شامل کیا گیا ہے:

- پارٹنر آلاؤ لسٹ میں واضح اندراج درکار ہوتا ہے
- پارٹنر کریڈینشلز کے ذریعے REST API کے ذریعے دستیاب ہوتی ہیں
- پارٹنر تصدیق کے ساتھ MCP کے ذریعے دستیاب ہوتی ہیں
- عام صارفین کے لیے دستیاب نہیں ہوتیں

مثال: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (غیر فعال) {#disabled}

**Disabled abilities** کہیں بھی دستیاب نہیں ہوتیں:

- کسی بھی سطح پر ظاہر نہیں ہوتی
- چیٹ میں دستیاب نہیں ہیں
- ایڈمن پینلز میں دستیاب نہیں ہیں
- پرانے یا تجرباتی صلاحیتوں کے لیے مفید

## صلاحيت کی نظر کو سنبھالنا (Managing Ability Visibility) {#managing-ability-visibility}

### صلاحيت کی نظر کے سیٹنگز تک رسائی حاصل کرنا (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** پر جائیں۔
2. **Abilities** ٹیب پر کلک کریں۔
3. آپ کو انسٹال شدہ تمام abilities کی فہرست اور ان کی نظر آنے کی سطح نظر آئے گی۔

### صلاحيت کی تفصیلات دیکھنا (Viewing Ability Details) {#viewing-ability-details}

کسی بھی ability پر کلک کرنے سے آپ یہ دیکھ سکتے ہیں:

- **Name**: ability کا شناخت کنندہ (identifier)
- **Description**: یہ ability کیا کام کرتی ہے
- **Current visibility**: عوامی (Public)، اندرونی (Internal)، پارٹنر (Partner)، یا غیر فعال (Disabled)
- **Partner allow-list**: کون سے پارٹنرز رسائی حاصل کر سکتے ہیں (اگر Partner visibility ہو تو)
- **Last updated**: نظر کی آخری تبدیلی کب ہوئی تھی
- **Status**: پہچانا گیا (Recognized) یا غیر درجہ بندی شدہ (Unclassified)

### نظر کی سطح تبدیل کرنا (Changing Visibility Levels) {#changing-visibility-levels}

کسی ability کی نظر کی سطح بدلنے کے لیے:

1. لسٹ میں اس ability پر کلک کریں۔
2. ڈراپ ڈاؤن سے ایک نئی visibility level منتخب کریں۔
3. اگر آپ "Partner" منتخب کرتے ہیں، تو allow-list میں پارٹنر آئیڈینٹیفائر شامل کریں۔
4. **Save** پر کلک کریں۔

مثال:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### بڑے آپریشنز (Bulk Operations) {#bulk-operations}

ایک سے زیادہ abilities کی نظر بدلنے کے لیے:

1. abilities کے آگے موجود باکسز پر ٹک کریں۔
2. bulk action dropdown سے ایک نئی visibility level منتخب کریں۔
3. **Apply** پر کلک کریں۔

## پارٹنر allow-list (Partner Allow-List) {#partner-allow-list}

**partner allow-list** یہ کن چیزوں کو پارٹنر لیول کی abilities تک رسائی حاصل کرنے کی اجازت ہے، اس کا مطلب ہے کہ کون سے بیرونی پارٹنرز کس ability تک جا سکتے ہیں۔

### پارٹنرز شامل کرنا (Adding Partners) {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** پر جائیں۔
2. **Add Partner** پر کلک کریں۔
3. پارٹنر آئیڈینٹیفائر درج کریں (عام طور پر ایک API key یا آرگنائزیشن ID)۔
4. اختیاری طور پر پارٹنر کا نام اور تفصیل شامل کریں۔
5. **Save** پر کلک کریں۔

### abilities کو پارٹنرز کے ساتھ منسلک کرنا (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

پارٹنر شامل کرنے کے بعد:

1. **Abilities** ટેબ (tab) تي وڃو
2. Partner visibility وارو موجود اي ability ڏسو
3. edit ڪرڻ لاءِ کليڪ ڪريو
4. "Partner allow-list" سيكشن ۾، ان پارٽنرن جي باري بکس کي چڪ (check) ڪريو جنہیں رسائي حاصل ہونی چاہيدي
5. **Save** تي کليڪ ڪريو

### Partner Access ختم ڪرڻ (Revoking Partner Access) {#revoking-partner-access}

ڪنه پارٽنر جو رسائي ختم ڪرڻ لاءِ:

1. ability edit ڪريو
2. allow-list ۾ ان پارٽنر جو بکس چڪ کان ہٽائي ڇڏيو
3. **Save** تي کليڪ ڪريو

پارٽنر کي فوري طور تي ان ability جي رسائي ختم ٿي ويندي.

## Unclassified Abilities (غير تصنیف ڪيل صلاحيتون) {#unclassified-abilities}

جڏهن توهان koi third-party ability install ڪندا آهيو جيڪا Superdav AI Agent سمجهي نه، تڏهن ان کي **Unclassified** مارڪ ڪيو ويندو آهي.

### Unclassified Abilities لاءِ Admin Notice {#admin-notice-for-unclassified-abilities}

توهان هڪ admin notice ڏسندو رهندو:

```
⚠️ Unclassified Abilities Detected

هي abilityون install ٿي وئي آهن پر انهن کي سمجهي نه ويو آهي:
- custom-import-tool
- external-api-wrapper

اهدي abilityون سيڪيورٽي يا compatibility جو خطرو پيدا ڪري سگهن ٿيون.
براہ کرم انهن جي جائزو ورتو ۽ تصنيف ڪيو.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities جو جائزو وٺڻ (Reviewing Unclassified Abilities) {#reviewing-unclassified-abilities}

1. notice ۾ **Review Abilities** تي کليڪ ڪريو
2. هر unclassified ability لاءِ، توهان ڏسندو رهندو:
   - Ability جو نالو ۽ وضاحت
   - Source (ڪون plugin/addon ان کي install ڪيو آهي)
   - Suggested visibility level
   - Security assessment

3. هڪ visibility level چونڊيو:
   - **Public**: ability تي اعتماد ڪريو؛ هر جاءِ تي ظاهر ڪريو
   - **Internal**: صرف اندروني استعمال لاءِ محدود ڪريو
   - **Partner**: مخصوص پارٽنرن لاءِ محدود ڪريو
   - **Disabled**: ان ability جو استعمال نه ڪريو

4. پنهنجو Decision save ڪرڻ لاءِ **Classify** تي کليڪ ڪريو

### Unclassified Abilities کي Classify ڪيئن؟ (Why Classify Unclassified Abilities?) {#why-classify-unclassified-abilities}

Ability کي classify ڪرڻ جا فائدن:

- **Security بهتر ٿيندو**: توهان واضح طور تي منظور ڪري ٿا ان جو ظاهر ٿيڻ
- **گلط ڪمن کي روڪي ٿو**: غير تصنیف ڪيل abilityون default طور تي بند (disabled) هونديون آهن
- **Features فعال ٿين ٿا**: هڪ دفعو classify ٿي وڃڻ کان پوءِ، ability استعمال لاءِ موجود ٿي ويندي آهي
- **Decisions جو دستاويز ٿي ٿو**: توهان جا انتخاب audit جي مقصد لاءِ لاگ ٿيندا آهن

## مختلف سطحوں پر نظر آنا (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**پبلک صلاحیتیں** REST endpoints کے ذریعے دستیاب ہیں:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**اندرونی اور پارٹنر صلاحیتیں** REST API کے ذریعے دستیاب نہیں ہیں۔

### MCP سرورز (MCP Servers) {#mcp-servers}

**پبلک صلاحیتیں** MCP کے ذریعے دستیاب ہیں:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**اندرونی صلاحیتوں کو** MCP کے ذریعے ظاہر نہیں کیا جاتا۔

**پارٹنر صلاحیتیں** صرف پارٹنر کریڈینشلز کے ساتھ دستیاب ہوتی ہیں۔

### ووکامرس انٹیگریشن (WooCommerce Integration) {#woocommerce-integration}

**ووکامرس سے متعلق پبلک صلاحیتیں** دستیاب ہیں:

- پروڈکٹ مینجمنٹ
- آرڈر پروسیسنگ
- کسٹمر کمیونیکیشن

**اندرونی صلاحیتوں کو** ووکامرس تک ظاہر نہیں کیا جاتا۔

### چیٹ انٹرفیس (Chat Interface) {#chat-interface}

**تمام صلاحیتیں** (پبلک، اندرونی، پارٹنر) چیٹ میں دستیاب ہیں، یہ صارف کی اجازتوں پر منحصر ہے:

- ایڈمنسٹریٹرز تمام صلاحیتیں دیکھتے ہیں۔
- عام صارفین صرف پبلک صلاحیتیں دیکھتے ہیں۔
- پارٹنرز پبلک + پارٹنر صلاحیتیں دیکھتے ہیں (اگر انہیں لائسٹ کیا گیا ہو)

## سیکیورٹی کے بہترین طریقے (Security Best Practices) {#security-best-practices}

### کم سے کم مراعات کا اصول (Principle of Least Privilege) {#principle-of-least-privilege}

- صلاحیتوں کو سب سے سخت نظر آنے والی حالت پر سیٹ کریں جو ان کے استعمال کی اجازت دے۔
- حساس آپریشنز کے لیے پارٹنر ویزیبلٹی کا استعمال کریں۔
- ان صلاحیتوں کو غیر فعال کر دیں جنہیں آپ استعمال نہیں کرتے۔

### باقاعدہ آڈٹ (Regular Audits) {#regular-audits}

- ہر مہینے صلاحیتوں کی نظر کو چیک کریں۔
- غیر درجہ بند صلاحیتوں کی جانچ کریں۔
- استعمال نہ ہونے والے پارٹنرز کے لیے رسائی ہٹا دیں۔

### لاگنگ اور نگرانی (Logging and Monitoring) {#logging-and-monitoring}

- دیکھیں کہ کون سی صلاحیتیں سب سے زیادہ استعمال ہو رہی ہیں۔
- پارٹنر کی رسائی کے طریقوں پر نظر رکھیں۔
- غیر معمولی صلاحیت کے استعمال پر الرٹ دیں۔

### تھرڈ پارٹی صلاحیتیں (Third-Party Abilities) {#third-party-abilities}

- فعال کرنے سے پہلے تھرڈ پارٹی صلاحیتوں کا جائزہ لیں۔
- انہیں واضح طور پر درجہ بند کریں۔
- اندرونی یا پارٹنر ویزیبلٹی سے شروع کریں۔
- جانچ پڑتال کے بعد ہی پبلک میں ترقی دیں۔

## مسئلہ حل کرنا (Troubleshooting) {#troubleshooting}

**کوئی صلاحیت لسٹ میں نظر نہیں آ رہی**
- چیک کریں کہ وہ ایبیلٹی انسٹال ہے اور فعال (active) ہے۔
- چیک کریں کہ پلےجن/ایڈون آن ہے یا نہیں۔
- پیج کو ریفریش کریں۔

**میں کسی ایبیلٹی کی نظر چھپانے (visibility) میں تبدیلی نہیں کر پا رہا**
- تصدیق کریں کہ آپ کے پاس ایڈمن پرمیشنز ہیں۔
- چیک کریں کہ کیا کوئی پلےجن اس ایبیلٹی کو لاک تو نہیں کر رہا۔
- متصادم (conflicting) پلےجن کو بند کرنے کی کوشش کریں۔

**پارٹنر کسی ایبیلٹی تک رسائی حاصل نہیں کر پا رہا**
- تصدیق کریں کہ پارٹنر آپ کے الاؤ لسٹ میں ہے۔
- چیک کریں کہ کیا ایبیلٹی کی نظر چھپانے کا سیٹنگ "Partner" پر رکھی گئی ہے۔
- اس بات کی تصدیق کریں کہ پارٹنر کی تفصیلات (credentials) درست ہیں۔
- تصدیق کے لیے API لاگز کو متبادل (authentication) کی غلطیوں کے لیے چیک کریں۔

**غیر درجہ بند ایبیلٹیز مسلسل نظر آ رہی ہیں**
- ایڈمن نوٹس میں ان کا جائزہ لیں اور انہیں درجہ بند (classify) کریں۔
- چیک کریں کہ کیا آپ کی درجہ بندی محفوظ ہو گئی ہے۔
- تصدیق کریں کہ وہ پلےجن جو یہ ایبیلٹی فراہم کر رہا ہے، اپ ڈیٹ شدہ ہے۔

## پرانے موڈ سے منتقلی (Migration from Legacy Mode) {#migration-from-legacy-mode}

اگر آپ Superdav AI Agent کے پرانے ورژن سے اپ گریڈ کر رہے ہیں:

- تمام موجودہ ایبیلٹیز خود بخود "Public" کے طور پر درجہ بند ہو جائیں گی۔
- ضرورت کے مطابق نظر چھپانے کی تفصیلات کا جائزہ لیں اور ایڈجسٹ کریں۔
- جب تک آپ رسائی کو محدود نہیں کرنا چاہتے، کوئی کارروائی کرنے کی ضرورت نہیں۔

نیٹیو Abilities API انٹیگریشن میں منتقلی کے بارے میں مزید تفصیلات کے لیے **Third-Party Mode Migration** دیکھیں۔

## اگلے اقدامات (Next Steps) {#next-steps}

ایبیلٹی کی نظر چھپانے کی ترتیب دینے کے بعد:

1. **اپنی ایبیلٹیز کا جائزہ لیں**: تمام انسٹال شدہ ایبیلٹیز کا آڈٹ کریں۔
2. **غیر درجہ بند ایبیلٹیز کو درجہ بند کریں**: ایڈمن نوٹس کا جواب دیں۔
3. **پارٹنرز کو سیٹ اپ کریں**: اگر آپ Partner visibility استعمال کر رہے ہیں تو پارٹنرز شامل کریں۔
4. **استعمال کی نگرانی کریں**: ٹریک کریں کہ کون سی ایبیلٹیز سب سے زیادہ استعمال ہو رہی ہیں۔
5. **فیصلوں کو دستاویز کریں**: یہ نوٹ رکھیں کہ آپ نے ہر نظر چھپانے کے درجے (visibility level) کیوں منتخب کیا۔
