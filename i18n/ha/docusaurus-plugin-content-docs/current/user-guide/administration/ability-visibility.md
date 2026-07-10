---
title: Iyakacin bayyana
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# دسترسی قابلیت‌ها (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 شمول **دسترسی قابلیت‌ها** را معرفی می‌کند که کنترل می‌کنند کدام سطوح (surfaces) هر قابلیت را نمایش می‌دهند. این به مدیران اجازه می‌دهد تنظیمات دقیق کنند که چه قابلیت‌های ایجنت از طریق REST API، سرورهای MCP، ادغام‌های WooCommerce و سایر رابط‌ها در دسترس هستند.

## دسترسی قابلیت چیست؟ {#what-is-ability-visibility}

دسترسی قابلیت یک سیستم مجوزدهی است که موارد زیر را کنترل می‌کند:

- **کدام قابلیت‌ها** برای ایجنت‌ها در دسترس هستند
- **محل نمایش آن‌ها** (REST API، MCP، WooCommerce و غیره)
- **چه کسانی می‌توانند به آن‌ها دسترسی داشته باشند** (از طریق لیست‌های مجاز شرکا - allow-lists)
- **چگونه طبقه‌بندی می‌شوند** (شناخته شده در مقابل غیرقابل شناسایی)

هر قابلیت یک سطح دید (visibility level) دارد که تعیین می‌کند در سطوح مختلف چه زمانی قابل دسترس است.

## سطوح دسترسی {#visibility-levels}

### عمومی (Public) {#public}

**قابلیت‌های عمومی** همه جا در دسترس هستند:

- نقاط پایانی REST API
- سرورهای MCP
- ادغام‌های WooCommerce
- رابط‌های چت
- تمام نقش‌های کاربر (با مجوزهای مناسب)

مثال: `scaffold-block-theme`، `activate-theme`، `send-email`

### داخلی (Internal) {#internal}

**قابلیت‌های داخلی** فقط در نصب وردپرس شما در دسترس هستند:

- رابط‌های چت
- پنل‌های مدیریت (Admin panels)
- فقط کاربران وارد شده (Logged-in users only)
- از طریق REST API یا ادغام‌های خارجی نمایش داده نمی‌شوند

مثال: `manage-settings`، `view-analytics`، `export-data`

### شریک (Partner) {#partner}

**قابلیت‌های شریک** فقط برای شرکای لیست مجاز در دسترس هستند:

- نیاز به ورود صریح در لیست مجاز شرکا وجود دارد
- از طریق REST API با اعتبارنامه‌های شریک قابل دسترسی است
- از طریق MCP با احراز هویت شریک قابل دسترسی است
- برای کاربران عادی در دسترس نیست

مثال: `bulk-import-users`، `modify-billing`، `access-analytics`

### غیرفعال (Disabled) {#disabled}

**قابلیت‌های غیرفعال** در هیچ کجای سیستم در دسترس نیستند:

- از طریق هیچ سطحی نمایش داده نمی‌شوند
- در چت قابل دسترسی نیستند
- در پنل‌های مدیریت قابل دسترسی نیستند
- برای قابلیت‌های منسوخ شده یا آزمایشی مفید است

## Intanetar da Gaskiya Ga Aiki {#managing-ability-visibility}

### Samun RC Wurin Bayanin Iyakacin Aiki (Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Zuwa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Danna kan tab ɗin **Abilities**
3. Za ka gani babban lissafi na duk iyakacin aiki da aka so, tare da matakan bayyanar yadda ake nuna shi.

### Gani Bayanai Na Iyakacin Aiki (Viewing Ability Details) {#viewing-ability-details}

Danna kan kowane iyakacin aiki don ganin:

- **Name**: Wannan wuri ne na wannan iyakacin aikin
- **Description**: Abin da wannan iyakacin aikin ke yi
- **Current visibility**: Public, Internal, Partner, ko Disabled (Ba shi da aiki)
- **Partner allow-list**: Wanne masu haɗi za su iya samun shi (idan an sanya nuna shi ga Partners)
- **Last updated**: Lokacin da aka canza bayanin nuna shi da wuri
- **Status**: An gano ko ba a gano ba

### Canza Matakan Nuna Shi (Changing Visibility Levels) {#changing-visibility-levels}

Don canza yadda ake nuna iyakacin aiki:

1. Danna kan wannan iyakacin aikin a cikin lissafi
2. Za ka zaɓi matakin nuna shi na sabon wuri daga dropdown menu
3. Idan ka zaɓi "Partner", ka ƙara bayanan masu haɗi (partner identifiers) zuwa allow-list
4. Danna kan **Save**

Misali:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Ayyukan da Suka Yi Da Yawa (Bulk Operations) {#bulk-operations}

Don canza yadda ake nuna iyakacin aiki ga dama da yawa:

1. Ka danna kan kowane iyakaci a cikin lissafi don sa wani tsari (checkbox)
2. Za ka zaɓi matakin nuna shi na sabon wuri daga dropdown menu na aikin da aka yi da yawa
3. Danna kan **Apply**

## Allow-List Na Masu Haɗi (Partner Allow-List) {#partner-allow-list}

**Partner allow-list** yana sarrafa wanne masu haɗin waje za su iya samun iyakacin aiki na matakin Partner.

### Tambaya Masu Haɗi (Adding Partners) {#adding-partners}

1. Zuwa **Superdav AI Agent** → **Settings** → **Partners**
2. Danna kan **Add Partner**
3. Ka shigar da bayanan mai haɗin waje (ko ya kasance API key ko Organization ID)
4. Za ka iya ƙara sunan mai haɗi da bayanin sa a matsayin zaɓi
5. Danna kan **Save**

### Bayarwa Ga Iyakacin Aiki ga Masu Haɗi (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

Bayan an ƙara wani mai haɗi:

1. Zu tabin **Abilities** tafiya.
2. Wajera wani ikon da bayyanar Partner visibility (neman girmama).
3. Danna don gyara shi.
4. A cikin sashi na "Partner allow-list", danna alamar check ga waɗanda ya kamata su samu damar shiga.
5. Danna **Save** (Ajiye).

### Cire Damar Shiga na Partner {#revoking-partner-access}

Don cire damar shiga wani partner:

1. Gyara ikon (ability)
2. Cire alamar check ta wa partner a cikin allow-list
3. Danna **Save** (Ajiye)

Partner ɗin zai rasa damar shiga wannan ikon nan take.

## Ikon Ba Su Bayanar Shiga (Unclassified Abilities) {#unclassified-abilities}

Idan ka yi amfani da wani ability na waje (third-party ability) da Superdav AI Agent ba ya gaskiya ko bai gane shi ba, ana nuna shi a matsayin **Unclassified** (ba aka bayyana).

### Bayanin Admin ga Ikon Ba Su Bayanar Shiga {#admin-notice-for-unclassified-abilities}

Za ka ga wani bayani na admin:

```
⚠️ Unclassified Abilities Detected

Wannan ikon da aka installa ba ya gaskiya ko ba:
- custom-import-tool
- external-api-wrapper

Waɗannan ikon za su iya haifar da haɗari na tsaro ko na dacewa.
Don tafiya a matsayin bincike kuma bayyana su.

[Review Abilities] [Dismiss]
```

### Binciken Ikon Ba Su Bayanar Shiga {#reviewing-unclassified-abilities}

1. Danna **Review Abilities** (Bincika Ikon) a cikin wannan bayanin.
2. Don kowane ikon ba su bayanar shiga, za ka ga:
   - Sunan ikon da bayani (description)
   - Jininsa (wanda wane plugin/addon ya install shi)
   - Matakin bayyanar damar shiga da aka sa (Suggested visibility level)
   - Tabbatar da tsaro

3. Za ka zaɓi matakin bayyanar damar shiga:
   - **Public** (Gabaɗaya): Aminci ikon; bayyana shi a duk wani wuri
   - **Internal** (Na Gida): Ilimi shi kawai don amfani na gida
   - **Partner**: Bayyana shi ga waɗanda suka dace da su
   - **Disabled** (Wanda aka yi harkar): Kada ka yi amfani da wannan ikon

4. Danna **Classify** (Bayyana) don ajiye shawarwar ka

### Me Yasa Ka Bayyana Ikon Ba Su Bayanar Shiga? {#why-classify-unclassified-abilities}

Bayyana ikon:

- **Yana inganta tsaro**: Kana tabbatar wa abin da za a bayyana shi
- **Yana hana matsala**: Ikon ba su bayanar shiga suna lalata nan take
- **Yana samar da ƙwarewa**: Bayan an bayyana su, ikon zai zama mai amfani
- **Yana lissafa shawarwari**: Za a lissafa zaɓin ka don bincike

## بینا در سطوح مختلف {#visibility-in-different-surfaces}

### REST API {#rest-api}

**قابلیت‌های عمومی** از طریق REST endpoints در دسترس هستند:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**قابلیت‌های داخلی و شرکای** از طریق REST API در دسترس نیستند.

### سرورهای MCP {#mcp-servers}

**قابلیت‌های عمومی** از طریق MCP در دسترس هستند:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**قابلیت‌های داخلی** از طریق MCP نمایش داده نمی‌شوند.

**قابلیت‌های شرکای** فقط با اعتبارنامه‌های شرکای در دسترس هستند.

### یکپارچه‌سازی ووکامرس (WooCommerce Integration) {#woocommerce-integration}

**قابلیت‌های عمومی** مربوط به ووکامرس در دسترس هستند:

- مدیریت محصول
- پردازش سفارش
- ارتباط با مشتری

**قابلیت‌های داخلی** به ووکامرس نمایش داده نمی‌شوند.

### رابط چت (Chat Interface) {#chat-interface}

**تمام قابلیت‌ها** (عمومی، داخلی، شرکای) بسته به مجوزهای کاربر در چت در دسترس هستند:

- مدیران همه قابلیت‌ها را می‌بینند
- کاربران عادی فقط قابلیت‌های عمومی را می‌بینند
- شرکا قابلیت‌های عمومی + شرکایی (اگر لیست سفید شده باشند) را می‌بینند

## بهترین شیوه‌های امنیتی {#security-best-practices}

### اصل کمترین امتیاز دسترسی (Principle of Least Privilege) {#principle-of-least-privilege}

- قابلیت‌ها را روی محدودترین دید ممکن تنظیم کنید که همچنان اجازه استفاده از آن‌ها را بدهد
- برای عملیات حساس از دید شرکای استفاده کنید
- قابلیت‌هایی را غیرفعال کنید که از آن‌ها استفاده نمی‌کنید

### ممیزی‌های منظم (Regular Audits) {#regular-audits}

- هر ماه دید قابلیت‌ها را بررسی کنید
- به دنبال قابلیت‌های بدون دسته‌بندی باشید
- دسترسی برای شرکای غیرفعال شده را حذف کنید

### لاگ‌برداری و نظارت (Logging and Monitoring) {#logging-and-monitoring}

- ببینید کدام قابلیت‌ها بیشتر استفاده می‌شوند
- الگوهای دسترسی شرکا را رصد کنید
- در مورد استفاده غیرمعمول از قابلیت هشدار دهید

### قابلیت‌های شخص ثالث (Third-Party Abilities) {#third-party-abilities}

- قبل از فعال کردن، قابلیت‌های شخص ثالث را بررسی کنید
- آن‌ها را به صراحت طبقه‌بندی کنید
- با دید داخلی یا شرکای شروع کنید
- فقط پس از تأیید، به عمومی ارتقا دهید

## Masalah da Gyara {#troubleshooting}

**Wata ikon ba bai nuna a cikin jerin ba**
- Ka tabbata ikon an install shi kuma yana aiki (active)
- Ka bincika cewa plugin/addon ya kasance aiki (enabled)
- Ka sake farawa (refresh) shafin

**Ba zan iya canza bayyanar wani ikon ba**
- Ka tabbata kana da ikon administrator
- Ka bincika cewa wani plugin bai yi ƙona ga wannan ikon ba
- Ka gwada lalata (disable) dukkanin plugins da ke da sha dangantaka

**Wani abokin ciniki bai iya samun wani ikon ba**
- Ka tabbata abokin ciniki yana cikin jerin ainihin izini (allow-list)
- Ka bincika cewa bayyanar wani ikon an sanya tana "Partner"
- Ka tabbatar kalubalen abokin cinikin sun yi daidai
- Ka bincika log ɗin API don rashin tsaro (authentication errors)

**Wata ikon ba da takaitaccen ba ke ci-ciye nan gaba**
- Bincika su kuma ka raba su a bayanan admin notice
- Ka tabbatar cewa an rufe (save) ƙirƙirar su
- Ka tabbatar wani plugin da ke samar da wannan ikon yana cikin sabon wuri

## Bayarwa daga Modon Waje (Legacy Mode Migration) {#migration-from-legacy-mode}

Idan kana canza daga wani farko na Superdav AI Agent:

- Duk waɗannan ikon da suka wuce suna raba su a matsayin Public ne ko'ina
- Ka bincika su kuma ka gyara bayyanar kamar yadda ake bukata
- Ba akwai wata damuwa ba idan ba kana so ka ƙara ƙaida samun su

Ka gani **Migration na Modon Waje (Third-Party Mode Migration)** don ƙarin bayani kan canjin zuwa haɗin aiki da API na Ikon na asali.

## Matakan Na Gaba {#next-steps}

Bayan ka gyara bayyanar wani ikon:

1. **Ka bincika ikonka**: Ka gwada dukkan ikon da aka install su
2. **Raba ikon da ba a raba su**: Ka jawab da bayanan admin notice
3. **Ka shirya abokan ciniki**: Ka ƙara abokan ciniki idan kana amfani da bayyanar Partner
4. **Ka yi gwaji kan amfani**: Ka lura wanne ikon ake amfani da shi sosai
5. **Ka rubuta ra'ayoyi**: Ka riƙa takaitaccen game da dalilin da ka zaɓi kowane matakin bayyana

---
