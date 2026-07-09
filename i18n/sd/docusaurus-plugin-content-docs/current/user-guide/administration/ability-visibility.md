---
title: دکھڻ جي صلاحيت
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# صلاحيت کی نظر آنا (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 ۾ **Ability Visibility** ڪن ڪنٽرول شامل ڪيا آهن جيڪي اهو منظم ڪندا ته ڪهڙا سرفيسز هر صلاحيت کي ڏسڻ (expose) گهرجي. ان سان ڊيزاينرز (administrators) اهڙي طرح ayarlڪار ڪري سگهن ٿا ته ڪهڙا ايجنت جي صلاحيتون REST APIs، MCP سرورن، WooCommerce انتظام (integrations)، ۽ ٻين رابطن تروتاز طريقن ذريعي موجود هجن.

## Ability Visibility ڇا آهي؟ {#what-is-ability-visibility}

Ability Visibility هڪ اجازت نظام آهي جيڪو ان کي منظم ڪري ٿو ته:

- **ڪهڙيون صلاحيتون** ايجنتن لاءِ موجود آهن
- **اهن کي ڪٿي ڏسڻ گهرجي** (REST API، MCP، WooCommerce، etc.)
- **ڪنهن جي انهن تي رسائي آهي** (پارتنر آلو-لستن ذريعي)
- **اهن کي ڪهڙو تصنيف ڏني وڃي ٿو** (منتج يا غير منتج)

هر صلاحيت جو هڪ نظر اچڻ جو هيٺ ڏنل سطح آهي جيڪا مختلف سرفيسز تي ان جي موجود هجڻ جو حڪم ڪندي آهي.

## Visibility Levels {#visibility-levels}

### Public (عام) {#public}

**Public abilities** هر ڪٿي موجود هوندا آهن:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- سڀ صارف رولن (مناسب اجازت ناهن سان)

مثال: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (درستي) {#internal}

**Internal abilities** صرف توهان جي WordPress installation اندر موجود هوندا آهن:

- Chat interfaces
- Admin panels
- صرف لاگ-ين ڪندڙ صارف
- REST API يا ٻاهرين انتظام ذريعي ڏيکاري ناهي

مثال: `manage-settings`, `view-analytics`, `export-data`

### Partner (پارتنر) {#partner}

**Partner abilities** صرف انهن پارٽنر لاءِ موجود هوندا آهن جن کي آلو-لست ۾ شامل ڪيو وڃي آهي:

- پارتنر آلو-لست ۾ واضح اندراج گهرجي
- پارتنر ڪردارن سان REST API ذريعي موجود
- پارتنر تصديق (authentication) سان MCP ذريعي موجود
- عام صارف لاءِ موجود ناهي

مثال: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (منتي) {#disabled}

**Disabled abilities** ڪٿي به موجود نه هوندا آهن:

- ڪنهن سرفيس ذريعي ڏيکاري ناهي
- ڇاٽ ۾ موجود ناهي
- اڊمن پینل ۾ موجود ناهي
- پرانے يا تجرباتي صلاحيتن لاءِ فائديمند آهي

## صلاحيت کی نظر کو سنبھالنا (Managing Ability Visibility) {#managing-ability-visibility}

### صلاحیت کی نظر سیٹنگز تک رسائی (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** پر جائیں۔
2. **Abilities** ٹیب پر کلک کریں۔
3. آپ کو انسٹال شدہ تمام abilities کی فہرست اور ان کی نظر آنے کی سطح نظر آئے گی۔

### صلاحیت کی تفصیلات دیکھنا (Viewing Ability Details) {#viewing-ability-details}

کسی بھی ability پر کلک کرنے سے آپ یہ دیکھ سکتے ہیں:

- **Name**: اس ability کا شناخت کنندہ (identifier)
- **Description**: یہ ability کیا کام کرتی ہے
- **Current visibility**: عوامی (Public)، اندرونی (Internal)، پارٹنر (Partner)، یا غیر فعال (Disabled)
- **Partner allow-list**: کون سے پارٹنرز تک رسائی حاصل کر سکتے ہیں (اگر Partner visibility ہو تو)
- **Last updated**: نظر کو آخری بار کب تبدیل کیا گیا تھا
- **Status**: تسلیم شدہ (Recognized) یا غیر درجہ بندی شدہ (Unclassified)

### نظر کی سطح تبدیل کرنا (Changing Visibility Levels) {#changing-visibility-levels}

کسی ability کی نظر تبدیل کرنے کے لیے:

1. لسٹ میں اس ability پر کلک کریں۔
2. ڈراپ ڈاؤن سے ایک نئی visibility level منتخب کریں۔
3. اگر آپ "Partner" منتخب کر رہے ہیں، تو allow-list میں پارٹنر آئیڈنٹیفائر شامل کریں۔
4. **Save** پر کلک کریں۔

مثال:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### بڑے آپریشنز (Bulk Operations) {#bulk-operations}

ایک سے زیادہ abilities کی نظر تبدیل کرنے کے لیے:

1. abilities کے آگے بکس چیک کریں۔
2. bulk action dropdown سے ایک نئی visibility level منتخب کریں۔
3. **Apply** پر کلک کریں۔

## پارٹنر allow-list (Partner Allow-List) {#partner-allow-list}

**partner allow-list** یہ کن بیرونی پارٹنرز کو Partner-level abilities تک رسائی حاصل کرنے کی اجازت دیتا ہے۔

### پارٹنرز شامل کرنا (Adding Partners) {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** پر جائیں۔
2. **Add Partner** پر کلک کریں۔
3. پارٹنر آئیڈنٹیفائر درج کریں (عام طور پر ایک API key یا آرگنائزیشن ID)۔
4. اختیاری طور پر پارٹنر کا نام اور تفصیل شامل کریں۔
5. **Save** پر کلک کریں۔

### پارٹنرز کو abilities کے ساتھ جوڑنا (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

پارٹنر شامل کرنے کے بعد:

1. **Abilities** ٹیب تي وڃو (Go to the Abilities tab)
2. Partner visibility وارو موجود ability کي ڳلو (Find an ability with Partner visibility)
3. Edit ڪرڻ لاءِ کليڪ ڪريو (Click to edit)
4. "Partner allow-list" سيكشن ۾، ان پارٽنرن جي باري باکسز چیک ڪريو جنہیں رسائی ہور ہونی چاہيدي (In the "Partner allow-list" section, check the boxes for partners who should have access)
5. **Save** تي کليڪ ڪريو

### Partner Access ختم ڪرڻ (Revoking Partner Access) {#revoking-partner-access}

کوئی پارٽنر جي رسائی ختم ڪرڻ لاءِ:

1. ability edit ڪريو
2. allow-list ۾ ان پارٽنر کا باکس ان چیک نه ڪيو (Uncheck the partner's box in the allow-list)
3. **Save** تي کليڪ ڪريو

پارٽنر کي فوري طور تي ان ability جي رسائی ختم ٿي ويندي آهي.

## غير تصنیف ٿيل Abilities (Unclassified Abilities) {#unclassified-abilities}

جڏهن توهان ڪا third-party ability انسٹال ڪريو جيڪا Superdav AI Agent سمجهي نه، تڏهن ان کي **Unclassified** مارڪ ڪيو ويندو آهي.

### Unclassified Abilities لاءِ Admin Notice {#admin-notice-for-unclassified-abilities}

توهان هڪ admin notice ڏسڻ ۾ ايندا آهيو:

```
⚠️ Unclassified Abilities Detected

Followin abilities install ڪيا ويا پر انهن کي سمجهي نه ويو آهي:
- custom-import-tool
- external-api-wrapper

هي abilities سيڪيورٽي يا مطابقت (compatibility) جي خطري کي جنري ڪري سگهن ٿيون.
براہ کرم انهن کي ڏسو ۽ تصنیف ڪريو.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities جو جائزو وٺڻ (Reviewing Unclassified Abilities) {#reviewing-unclassified-abilities}

1. notice ۾ **Review Abilities** تي کليڪ ڪريو
2. هر غير تصنیف ٿيل ability لاءِ، توهان کي ڏسڻ ۾ ايندا آهن:
   - Ability جو نالو ۽ وضاحت
   - Source (ڪهڙي plugin/addon ان کي انسٹال ڪيو)
   - Suggested visibility level
   - Security assessment

3. هڪ visibility level چونڊيو:
   - **Public**: ability تي اعتماد ڪريو؛ هر جاءِ تي ظاهر ڪريو
   - **Internal**: صرف اندروني استعمال لاءِ محدود ڪريو
   - **Partner**: مخصوص پارٽنرن تک محدود ڪريو
   - **Disabled**: ان ability جو استعمال نه ڪريو

4. پنهنجو Decision save ڪرڻ لاءِ **Classify** تي کليڪ ڪريو

### Unclassified Abilities کي Classify ڪيئن؟ (Why Classify Unclassified Abilities?) {#why-classify-unclassified-abilities}

Abilities کي تصنیف ڪرڻ جا فائدن:

- **Security بهتر ٿيندو**: توهان واضح طور تي منظور ڪريو ته ڇا ظاهر ڪيو ويندو آهي
- **گلط ڪارروائيون روڪي ٿي**: غير تصنیف ٿيل abilities بالڊيفت (default) طور تي بند هوندا آهن
- **Features فعال ٿين ٿا**: هڪ دفعو تصنیف ڪرڻ کان پوءِ، ability استعمال لاءِ موجود ٿي ويندي آهي
- **Decisions جو دستاويزي ڪيو ويندو آهي**: توهان جا انتخاب آڊٽ مقصدن لاءِ لاگ ٿين ٿا

## مختلف سطحوں پر نظر آنا (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**پبلک صلاحیتیں (Public abilities)** REST endpoints کے ذریعے دستیاب ہیں:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**اندرونی اور پارٹنر صلاحیتیں (Internal and Partner abilities)** REST API کے ذریعے دستیاب نہیں ہیں۔

### MCP سرورز (MCP Servers) {#mcp-servers}

**پبلک صلاحیتیں (Public abilities)** MCP کے ذریعے دستیاب ہیں:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**اندرونی صلاحیتوں کو MCP کے ذریعے ظاہر نہیں کیا جاتا۔**

**پارٹنر صلاحیتیں (Partner abilities)** صرف پارٹنر کریڈینشلز کے ساتھ دستیاب ہوتی ہیں۔

### ووکامرس انٹیگریشن (WooCommerce Integration) {#woocommerce-integration}

**ووکامرس سے متعلق پبلک صلاحیتیں (Public abilities related to WooCommerce)** دستیاب ہیں:

- پروڈکٹ مینجمنٹ
- آرڈر پروسیسنگ
- کسٹمر کمیونیکیشن

**اندرونی صلاحیتوں کو ووکامرس تک ظاہر نہیں کیا جاتا۔**

### چیٹ انٹرفیس (Chat Interface) {#chat-interface}

**تمام صلاحیتیں** (پبلک، اندرونی، پارٹنر) چیٹ میں دستیاب ہیں، یہ صارف کی اجازتوں پر منحصر ہے:

- ایڈمنسٹریٹرز تمام صلاحیتیں دیکھتے ہیں۔
- عام صارفین صرف پبلک صلاحیتیں دیکھتے ہیں۔
- پارٹنرز پبلک + پارٹنر صلاحیتیں دیکھتے ہیں (اگر انہیں لائسٹ کیا گیا ہو)

## سیکیورٹی کے بہترین طریقے (Security Best Practices) {#security-best-practices}

### کم سے کم مراعات کا اصول (Principle of Least Privilege) {#principle-of-least-privilege}

- صلاحیتوں کو سب سے سخت نظر آنے والی اجازت دیں جو ان کے استعمال کی اجازت دے۔
- حساس کاموں کے لیے پارٹنر ویزیبلٹی (Partner visibility) کا استعمال کریں۔
- ان صلاحیتوں کو غیر فعال کریں جنہیں آپ استعمال نہیں کرتے۔

### باقاعدہ آڈٹ (Regular Audits) {#regular-audits}

- ہر مہینے صلاحیتوں کی نظر کو چیک کریں۔
- غیر درجہ بندی شدہ صلاحیتوں کے لیے چیک کریں۔
- استعمال نہ ہونے والے پارٹنرز کے لیے رسائی ہٹا دیں۔

### لاگنگ اور نگرانی (Logging and Monitoring) {#logging-and-monitoring}

- دیکھیں کہ کون سی صلاحیتیں سب سے زیادہ استعمال ہو رہی ہیں۔
- پارٹنر کی رسائی کے نمونے (access patterns) کو ٹریک کریں۔
- غیر معمولی صلاحیتوں کے استعمال پر الرٹ دیں۔

### تھرڈ پارٹی صلاحیتیں (Third-Party Abilities) {#third-party-abilities}

- فعال کرنے سے پہلے تھرڈ پارٹی صلاحیتوں کا جائزہ لیں۔
- انہیں واضح طور پر درجہ بندی کریں۔
- اندرونی یا پارٹنر ویزیبلٹی سے شروع کریں۔
- جانچ پڑتال کے بعد ہی پبلک میں منتقل کریں۔

## مسئلہ حل کرنا (Troubleshooting) {#troubleshooting}

**کوئی صلاحیت لسٹ میں نہیں دکھ رہی**
- چیک کریں کہ وہ ایبیلٹی انسٹال ہے اور فعال (active) ہے۔
- چیک کریں کہ پلےگِن/ایڈون آن ہے یا نہیں۔
- پیج کو ریفریش کریں۔

**میں کسی ایبیلٹی کی نظر چھپانے (visibility) میں تبدیلی نہیں کر سکتا**
- تصدیق کریں کہ آپ کے پاس ایڈمن پرمیشنز ہیں۔
- چیک کریں کہ کیا کوئی پلےگِن اس ایبیلٹی کو لاک تو نہیں کر رہا۔
- متصادم (conflicting) پلےگِنز کو بند کرنے کی کوشش کریں۔

**پارٹنر کسی ایبیلٹی تک رسائی حاصل نہیں کر پا رہا**
- تصدیق کریں کہ پارٹنر لائسنس شدہ فہرست (allow-list) میں ہے۔
- چیک کریں کہ کیا ایبیلٹی کی نظر چھپانے کا سیٹنگ "Partner" پر رکھی گئی ہے۔
- اس بات کی تصدیق کریں کہ پارٹنر کے کریڈینشلز درست ہیں۔
- تصدیق کے لیے API لاگز کو متبادل (authentication) کی غلطیوں کے لیے چیک کریں۔

**غیر درجہ بند شدہ ایبیلٹیز مسلسل ظاہر ہو رہی ہیں**
- ایڈمن نوٹس میں ان کا جائزہ لیں اور انہیں درجہ بندی (classify) دیں۔
- چیک کریں کہ کیا آپ کی درجہ بندی محفوظ ہو گئی ہے۔
- تصدیق کریں کہ وہ پلےگِن جو یہ ایبیلٹی فراہم کر رہا ہے، اپ ڈیٹ شدہ ہے۔

## پرانے موڈ سے منتقلی (Migration from Legacy Mode) {#migration-from-legacy-mode}

اگر آپ Superdav AI Agent کے پرانے ورژن سے اپ گریڈ کر رہے ہیں:

- تمام موجودہ ایبیلٹیز خود بخود "Public" کے طور پر درجہ بند ہو جائیں گی۔
- ضرورت کے مطابق نظر چھپانے کی تفصیلات کا جائزہ لیں اور ایڈجسٹ کریں۔
- جب تک آپ رسائی محدود نہیں کرنا چاہتے، کوئی کارروائی کرنے کی ضرورت نہیں۔

نیٹیو Abilities API انٹیگریشن میں منتقلی کے بارے میں مزید تفصیلات کے لیے **Third-Party Mode Migration** دیکھیں۔

## اگلے اقدامات (Next Steps) {#next-steps}

ایبیلٹی کی نظر چھپانے کی ترتیب دینے کے بعد:

1. **اپنی ایبیلٹیز کا جائزہ لیں**: تمام انسٹال شدہ ایبیلٹیز کا آڈٹ کریں۔
2. **غیر درجہ بند شدہ ایبیلٹیز کو درجہ بندی کریں**: ایڈمن نوٹس کا جواب دیں۔
3. **پارٹنرز کو سیٹ اپ کریں**: اگر آپ پارٹنر نظر چھپانے کا استعمال کر رہے ہیں تو پارٹنرز شامل کریں۔
4. **استعمال کی نگرانی کریں**: ٹریک کریں کہ کون سی ایبیلٹیز سب سے زیادہ استعمال ہو رہی ہیں۔
5. **فیصلوں کو دستاویز کریں**: یہ نوٹ رکھیں کہ آپ نے ہر نظر چھپانے کے درجے (visibility level) کیوں منتخب کیا۔
