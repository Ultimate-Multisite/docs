---
title: د ښودلو وړتیا
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# ښودلو ګါمنولیت (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 له **Ability Visibility** kontrollونه راغلاستل چې تعیین کوي چې کوم سطحونه هر چا د وړتیاو څرګندوي. دا کار اجازه ورکوي مدیرانو ته چې تنظیم کړي چې کومي ایجن قابلیتونه د REST APIs، MCP سرورونو، WooCommerce هم 통합ات او نورو رابطو له لارې موجود وي.

## Ability Visibility څه دی؟ {#what-is-ability-visibility}

Ability Visibility یو اجازه سیستم دی چې کنټرول کوي:

- **کوم وړتیاو** د ایجن لپاره موجود دي
- **د کوم ځایونه** (REST API، MCP، WooCommerce، او نور) کې څرګندوي
- **څوک کولی شي ورته ورسره وي** (د شریکانو اجازه لیستونو له لارې)
- **کوم ډول класиفای شوي دي** (پنه او غیر پنه)

هر وړتیا یو ښودلو لوري لري چې تعیین کوي چې د مختلف سطحو په ګډون یې چمتو دی.

## ښودلو سطون (Visibility Levels) {#visibility-levels}

### عمومي (Public) {#public}

**عمومي وړتیاو** هر ځای کې موجود دي:

- REST API endpoints
- MCP سرورونه
- WooCommerce هم 통합ات
- چټ رابطې (Chat interfaces)
- ټول کارولو نقشې (د مناسب اجازهو سره)

مثال: `scaffold-block-theme`, `activate-theme`, `send-email`

### داخلي (Internal) {#internal}

**داخلي وړتیاو** یوازې په خپل WordPress هم設置 کې موجود دي:

- چټ رابطې
- مدیري پینلونه (Admin panels)
- یوازې لاگ شوي کارونکي
- د REST API یا خارجي 통합ات له لارې څرګند نه وي

مثال: `manage-settings`, `view-analytics`, `export-data`

### شریک (Partner) {#partner}

**شریک وړتیاو** یوازې د لیست شوي شریکانو لپاره موجود دي:

- کارولو لپاره شریکانو اجازه لیست کې واضح ننوتل کیدو لازم دی
- له شریکانو معلومات سره REST API له لارې موجود دی
- له شریکانو اوتوماتیکي احراز (authentication) له لارې MCP له لارې موجود دی
- د معمول کارونکو لپاره موجود نه دي

مثال: `bulk-import-users`, `modify-billing`, `access-analytics`

### غیر فعال (Disabled) {#disabled}

**غیر فعال وړتیاو** هیڅ ځای کې موجود نه دي:

- له کوم سطح څخه څرګند نه وي
- په چټ کې موجود نه دی
- مدیري پینلو کې موجود نه دی
- د منقضی شوي یا پریک experiments وړتیاو لپاره ګټور دی

## مدیریت ښکارهوالی (Managing Ability Visibility) {#managing-ability-visibility}

### د وړتیا ښکارهولو تنظیمات ته چمتو کېدل (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

۱. راده към **WordPress Admin** → **Superdav AI Agent** → **Settings**
۲. върху **Abilities** (حوله/قدرتونه) 탭 باندې کلیک وکړئ
۳. تاسو به لیست لرئ ټول نصب شوي وړتیاوو او د دوی ښکارهولو سطون سره

### د وړتیا جزئیاتو لیدل (Viewing Ability Details) {#viewing-ability-details}

د هر وړتیا باندې کلیک وکړئ ترڅو وګورئ:

- **Name**: د وړتیا تعریفي نوم
- **Description**: دا وړتیا څه کار کوي
- **Current visibility**: عمومي (Public)، داخلي (Internal)، شریک (Partner)، یا غیر فعال (Disabled)
- **Partner allow-list**: کوم شریکونه اجازه لري چې ورته ورته ته ورسره شي (که Partner ښکارهوالی وي)
- **Last updated**: کله د ښکارهولو وروستۍ بدلون کیږي
- **Status**: په پام کې نیول شوی (Recognized) یا غیر класиفای شوی (Unclassified)

### د ښکارهولو سطونو بدلول (Changing Visibility Levels) {#changing-visibility-levels}

د یو وړتیاको ښکارهوالی بدلول لپاره:

۱. په لیست کې هغه وړتیا غوره کړئ
۲. له دراپډاون (dropdown) څخه یو نوی ښکارهولو سطح غوره کړئ
۳. که تاسو "Partner" غوره کوئ، نو شریکونو تعریفي معلومات (partner identifiers) اجازه لیست ته اضافه کړئ
۴. **Save** (ذخیره کړئ) باندې کلیک وکړئ

مثال:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### ګډ عملیات (Bulk Operations) {#bulk-operations}

د ډیری وړتیاوو د ښکارهولو لپاره بدلول:

۱. په وړتیاونو ورته خانې (boxes) ټیک کړئ
۲. له ګډ عمل (bulk action) دراپډاون څخه یو نوی ښکارهولو سطح غوره کړئ
۳. **Apply** (ګرځوي/اجرایئ) باندې کلیک وکړئ

## شریکونو اجازه لیست (Partner Allow-List) {#partner-allow-list}

د **partner allow-list** هغه بیرونی شریکونه کنټرول کوي چې کولی شي Partner-level وړتیاوو ته ورسره شي.

### شریکونو اضافه کول (Adding Partners) {#adding-partners}

۱. راده към **Superdav AI Agent** → **Settings** → **Partners**
۲. **Add Partner** (شریک اضافه کړئ) باندې کلیک وکړئ
۳. شریک د تعریفي معلوماتو (partner identifier)، چې معمولا API key یا سازمان ID وي، ورسره کړئ
۴. اختیاري: یو شریکको نوم او توصیف اضافه کړئ
۵. **Save** (ذخیره کړئ) باندې کلیک وکړئ

### وړتیاوو ته شریکونه وتړل (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

شریک اضافه کولو وروسته:

۱. **Abilities** 탭 ته ور sideways وکړئ
۲. Partner visibility (همکار دِ睇) لري یه شي پیدا کړئ
۳. ویرایش (Edit) کو کلیک وکړئ
۴. په "Partner allow-list" (همکار اجازه لیست) برخې کې، هغه همکاروको लागि बक्सहरू चेक गर्नुहोस् जसलाई पहुँच चाहिन्छ
५. **Save** मा क्लिक وکړئ

### Partner Access हटाउने तरिका {#revoking-partner-access}

یه همکارको पहुँच हटाउनको लागि:

۱. त्यो ability (क्षमता) सम्पादन गर्नुहोस्
۲. allow-list (अनुमति सूची) کې देख搵को पार्टनरको बक्स अनचेक गर्नुहोस्
۳. **Save** मा क्लिक गर्नुहोस्

पहुँच तुरुन्तै त्यो ability बाट हट्छ।

## Unclassified Abilities (वर्गीकृत नभएका क्षमताहरू) {#unclassified-abilities}

जब तपाईंले कुनै तेस्रो पक्षको ability (क्षमता) इन्स्टल गर्नुहुन्छ जुन Superdav AI Agent ले चिनदैन, त्यसलाई **Unclassified** (वर्गीकृत नभएको) मानिन्छ।

### Unclassified Abilities को लागि एडमिन सूचना {#admin-notice-for-unclassified-abilities}

तपाईं एउटा एडमिन सूचना देख्नुहुनेछ:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities को समीक्षा गर्ने तरिका {#reviewing-unclassified-abilities}

१. सूचनामा **Review Abilities** (क्षमताहरूको समीक्षा गर्नुहोस्) मा क्लिक गर्नुहोस्
२. हरेक unclassified ability को लागि, तपाईंले निम्न कुराहरू देख्नुहुनेछ:
   - Ability नाम र विवरण
   - Source (कुन plugin/addon ले यो इन्स्टल गरेको हो)
   - Suggested visibility level (सुझाएको पहुँच स्तर)
   - Security assessment (सुरक्षा मूल्याङ्कन)

३. एउटा visibility level छान्नुहोस्:
   - **Public** (सार्वजनिक): ability मा विश्वास गर्नुहोस्; सबै ठाउँमा प्रदर्शन गर्नुहोस्
   - **Internal** (आन्तरिक): केवल आन्तरिक प्रयोगको लागि सीमित गर्नुहोस्
   - **Partner** (همکار): विशिष्ट पार्टनरहरूमा सीमित गर्नुहोस्
   - **Disabled** (अक्षम): यो ability प्रयोग नगर्नुहोस्

४. आफ्नो निर्णय सुरक्षित गर्न **Classify** मा क्लिक गर्नुहोस्

### Unclassified Abilities लाई किन Classify गर्ने? {#why-classify-unclassified-abilities}

ability हरूलाई वर्गीकरण गर्नुको कारण:

- **सुरक्षा सुधार गर्छ**: तपाईंले के प्रदर्शन गरिने छ भने स्पष्ट रूपमा स्वीकृति दिनुहुन्छ
- **दुर्घटनाहरू रोक्छ**: वर्गीकृत नभएका ability हरू डिफोल्ट रूपमा अक्षम हुन्छन्
- **सुविधा सक्षम गर्छ**: एक पटक वर्गीकृत भएपछि, त्यो ability उपलब्ध हुन्छ
- **निर्णयहरूको दस्तावेज गर्छ**: तपाईंको छनोटहरू लेखापरीक्षण (audit) प्रयोजनका लागि रेकर्ड गरिन्छ

## دِگر سطوح کې ښودل (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**عام توانونه (Public abilities)** له لارې REST endpoints څخه رامنځته کیږي:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**داخلي او همکار توانونه (Internal and Partner abilities)** له لارې REST API کې موجود نه دي.

### MCP Servers {#mcp-servers}

**عام توانونه (Public abilities)** له لارې MCP رامنځته کیږي:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**داخلي توانونه (Internal abilities)** له MCP څخه ښکاره نه کیږي.

**همکار توانونه (Partner abilities)** یوازې همکار معلومات (credentials) د لارې موجود دي.

### WooCommerce Integration {#woocommerce-integration}

د WooCommerce سره تړلي **عام توانونه (Public abilities)** رامنځته کیږي:

- محصول مدیریت (Product management)
- سرتو پردازش (Order processing)
- کارندوی اړیکه (Customer communication)

**داخلي توانونه (Internal abilities)** د WooCommerce لپاره ښکاره نه دي.

### Chat Interface {#chat-interface}

د چټ (chat) کې **تمام توانونه** (عام، داخلي، همکار) د کارونکي اجازهو پر اساس رامنځته کیږي:

- مدیران ټول توانونه ویني
- معمول کارونکي یوازې عام توانونه ویني
- همکاران عام + همکار توانونه ویني (که دوی لیست کې شامل وي)

## امنیتཀྱི་ غوره عملونه (Security Best Practices) {#security-best-practices}

### کمترین امتیازको सिद्धान्त (Principle of Least Privilege) {#principle-of-least-privilege}

- توانونه د هغه محدودیت په ترتیب سره تنظیم کړئ چې دوی کارولای شي.
- حساس کارونو لپاره همکار توانونه प्रयोग کړئ.
- هغه توانونه غیر فعال کړئ چې تاسو یې کار نه کوئ.

### منظم معاینې (Regular Audits) {#regular-audits}

- هر ماه توانوको ښودل پر مهال بیاکتنه وکړئ.
- غیر класиفای شوي توانونه وګورئ.
- کار नगर्ने همکارانو ته ورته رسېدلو بند کړئ.

### لاگ او نزاوي (Logging and Monitoring) {#logging-and-monitoring}

- وګورئ چې کوم توانونه ډېر کارل کیږي.
- همکاران د رسېدلو نمونې تعقیب کړئ.
- غیر معمول توانوको کار کولو پر اطلاع ورکړئ.

### درې درې ورته توانونه (Third-Party Abilities) {#third-party-abilities}

- فعالولو अ deg Third-party abilities بیاکتنه وکړئ.
- دوی واضح ډول класиفای کړئ.
- داخلي یا همکار ښودل څخه আৰম্ভ وکړئ.
- تایید وروسته یې عام ته پورته کړئ.

## مشکلات حل (Troubleshooting) {#troubleshooting}

**یه قابلیت توی لیست نمایش داده نمی‌شه**
- مطمئن بشید که اون قابلیت نصب و فعال هست
- چک کنید که افزونه/Addon فعال باشه
- صفحه رو رفرش (Refresh) کنید

**نمی‌تونم دید یک قابلیت رو تغییر بدم**
- تأیید کنید که دسترسی ادمین دارید
- بررسی کنید که آیا هیچ افزونه‌ای اون قابلیت رو قفل نکرده یا نه
- سعی کنید افزونه‌های تداخل‌کننده رو غیرفعال (Disable) کنید

**شریک نمی‌تونه به یک قابلیت دسترسی پیدا کنه**
- تأیید کنید که شریک در لیست اجازه (allow-list) هست
- چک کنید که دید اون قابلیت روی "Partner" تنظیم شده باشه
- مطمئن بشید که اطلاعات ورود (credentials) شریک درست هستند
- لاگ‌های API رو برای خطاهای احراز هویت بررسی کنید

**قابلیت‌های طبقه‌بندی نشده همچنان ظاهر می‌شن**
- آن‌ها را در اعلان‌های ادمین مرور و دسته‌بندی کنید
- چک کنید که دسته‌بندی شما ذخیره شده باشه
- مطمئن شوید افزونه‌ای که این قابلیت رو فراهم می‌کنه به‌روز هست

## مهاجرت از حالت قدیمی (Migration from Legacy Mode) {#migration-from-legacy-mode}

اگر دارید از نسخه قدیمی Superdav AI Agent ارتقا می‌کنید:

- تمام قابلیت‌های موجود به صورت خودکار به عنوان عمومی (Public) طبقه‌بندی می‌شوند
- بر اساس نیاز، دید آن‌ها را مرور و تنظیم کنید
- مگر اینکه بخواهید دسترسی رو محدود کنید، هیچ کاری لازم نیست انجام دهید

برای جزئیات بیشتر در مورد انتقال به ادغام API قابلیت‌های بومی (native Abilities API integration)، به **مهاجرت حالت شخص ثالث (Third-Party Mode Migration)** مراجعه کنید.

## مراحل بعدی (Next Steps) {#next-steps}

بعد از تنظیم دید قابلیت‌ها:

۱. **قابلیت‌های خود را مرور کنید**: تمام قابلیت‌های نصب شده رو بررسی کنید
۲. **قابلیت‌های طبقه‌بندی نشده را دسته‌بندی کنید**: به اعلان‌های ادمین پاسخ دهید
۳. **شرکای خود را راه‌اندازی کنید**: اگر از دید Partner استفاده می‌کنید، شرکا اضافه کنید
۴. **استفاده‌ها را نظارت کنید**: ردیابی کنید که کدام قابلیت‌ها بیشتر استفاده می‌شوند
۵. **تصمیمات را مستند کنید**: یادداشت‌هایی در مورد اینکه چرا هر سطح دید خاص رو انتخاب کردید نگه دارید
