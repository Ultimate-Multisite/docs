---
title: راستکردن و پێکهێنانی پڕۆڤایدرەکان
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# فروشنده دامنه: راه‌اندازی و پیکربندی ارائه‌دهنده {#domain-seller-setup-and-provider-configuration}

افزونه Domain Seller با یک راهنمای تنظیم (setup wizard) هدایت‌شده عرضه می‌شود که شما را از تمام مراحل مورد نیاز عبور می‌دهد. این صفحه در مورد جریان این ویزارد و نحوه پیکربندی یا تنظیم مجدد ارائه‌دهندگان بعد از آن توضیح می‌دهد.

## پیش‌نیازها {#requirements}

- **Multisite Ultimate** نسخه v2.4.12 یا بالاتر، فعال شده روی شبکه
- **PHP** نسخه 7.4+
- اعتبارنامه‌های API برای حداقل یک رجیستر پشتیبانی‌شده

## ویزارد تنظیم اولیه (First-run setup wizard) {#first-run-setup-wizard}

ویزارد تنظیم به محض اولین بار که افزونه را روی شبکه فعال می‌کنید، به صورت خودکار اجرا می‌شود. همچنین می‌توانید در هر زمان از مسیر **Network Admin › Ultimate Multisite › Domain Seller Setup** به آن دسترسی داشته باشید.

### مرحله ۱ — انتخاب ارائه‌دهنده (Choose a provider) {#step-1--choose-a-provider}

رجیستری را که می‌خواهید متصل کنید، انتخاب کنید. گزینه‌های پشتیبانی شده:

| Provider | مدیریت DNS | حریم خصوصی WHOIS |
|---|---|---|
| OpenSRS | بله | بله |
| Namecheap | خیر | بله (WhoisGuard، رایگان) |
| HostAfrica | بله | بله (حفاظت ID) |
| Openprovider | بله | بله |
| Hostinger | از طریق نگاشت دامنه اصلی Hostinger برای دامنه‌های میزبانی شده | بله |
| GoDaddy | خیر | خیر |
| ResellerClub | بله | خیر |
| NameSilo | خیر | خیر |
| Enom | بله | خیر |

### مرحله ۲ — وارد کردن اعتبارنامه‌ها (Enter credentials) {#step-2--enter-credentials}

هر ارائه‌دهنده فیلدهای اعتبارنامه متفاوتی دارد:

**OpenSRS** — نام کاربری و کلید خصوصی (از پنل کنترل فروش مجدد OpenSRS)

**Namecheap** — نام کاربری و API key (از بخش Account › Tools › API Access)

**HostAfrica** — نقطه پایانی API فروش مجدد دامنه‌ها و اعتبارنامه‌ها از ماژول Reseller در HostAfrica. در حال حاضر یک نقطه sandbox جداگانه مستند نشده است؛ قبل از اجرای ثبت‌های واقعی، با بررسی‌های فقط خواندنی امن تست کنید.

**Openprovider** — نام کاربری و رمز عبور با فعال بودن دسترسی API. حالت sandbox اختیاری از API sandbox Openprovider استفاده می‌کند و می‌توانید برای ثبت‌نام‌ها از یک شناسه مشتری پیش‌فرض اختیاری دوباره استفاده کنید.

**Hostinger** — توکن hPanel اشتراکی Hostinger لە API بۆ یەکگرتووی ناوەندی Hostinger. هەمان توکن ئەو کارانەی مۆڵپەینگێکی سەرەکی و تۆمارکردنی بەڕێوەبەری ناوچەکانی دامەنی دەتوانێت بەکاربهێنێت.

**GoDaddy** — کلیدی API و سێکرێت (لە developer.godaddy.com دابنێیت)

**ResellerClub** — IDی Reseller و کلیدی API (لە کۆنترۆڵ پینلێکی ResellerClub دابنێیت)

**NameSilo** — کلیدی API (لە namesilo.com › Account › API Manager دابنێیت)

**Enom** — IDی هەژمارە و توکن API

بۆ تاقیکردنەوە، **Sandbox mode** یەک دیکھیں کە لە کوفی هەیە بۆ تاقیکردنەوە بەرامبەر ژینگەی تاقیکردنەوەی پڕۆڤایدر پێش ئەوەی بە ڕاستی کار بکەیت.

### هەنگاو 3 — پەیوەندییەکە تاقیکار بکە {#step-3--test-the-connection}

**Test Connection** بگرە. ئیسپێڕ (wizard) داواکارییەکی بچووک بۆ API دەدات بۆ پشکنینی سەرچاو و پەیوەندی. هەر کێشەیەک لەسەر توکن یان پەیوەندییەکە هەیە پێش بەردەوامبوون، چارەسەر بکە.

### هەنگاو 4 — TLDs (ناوەکانی دامەنی ناوخۆیی) گەیەنە {#step-4--import-tlds}

**Import TLDs** بگرە بۆ ڕاکێشانی هەموو TLDs وราقەکانی بەپێی دووبارە لە پڕۆڤایدرەکە. ئەمە لیستەکەی TLDs دەبێت کە بەکاردێت بۆ بەرهەمەکانی دامەنی ناوخۆیی. ئەگەر پڕۆڤایدرێک کۆمەڵێکی گەورەی TLDs هەبوو، ڕەنگە ئەم کارە ٣٠ تا ٦٠ چرکە وەربگرێت.

TLDs یەکجار ڕۆژان بە شێوەیەکی ئۆتۆماتیک دەگەڕێنەوە لە ڕێگەی Cron jobێکی زماندار.

### هەنگاو 5 — بەرهەمێک بۆ دامەنی ناوخۆیی دروست بکە {#step-5--create-a-domain-product}

ئیسپێڕ بەرهەمێکی پیش‌دۆزراو (catch-all) بۆ دامەنی ناوخۆیی دەگرێتەوە لەگەڵ ١٠٪ پاشەکەوت. دەتوانیت ئەم بەرهەمە بە خێرایی بگۆڕیت یان بگەڕێ و بە شێوەیەکی دەستکرد بە **Ultimate Multisite › Products** بەرهەم دروست بکەیت.

بۆ ڕێنمایی تەواوی پێکهاتەی بەرهەم، سەردانی [Domain Products and Pricing](./domain-products) بکە.

---

## گۆڕینی ڕێکخستنی پڕۆڤایدرەکە (Reconfiguring a provider) {#reconfiguring-a-provider}

بڕۆ بۆ **Network Admin › Ultimate Multisite › Settings › Domain Seller** (یان لە لیستەکەی plugin ی هەڵبژێرە **Settings**).

لاپەڕەی تنظیمان ئەم شتەکان دەگرێتەوە:

- **Enable domain selling** — toggling this feature on/off controls the entire domain selling functionality.
- **Default provider** — این همان سرویسی است که برای جستجوی دامنه و محصولات جدید استفاده می‌شود.
- **Max TLDs per search** — مشخص می‌کند وقتی مشتری جستجو می‌کند، چند نوع TLD (مثل .com یا .ir) بررسی شوند؛ مقادیر بالاتر گزینه‌های بیشتری نشان می‌دهند اما کندتر هستند.
- **Availability cache duration** — تعیین می‌کند نتایج موجود بودن و قیمت‌ها چقدر کش (cache) شوند؛ مقادیر پایین‌تر دقیق‌تر هستند اما تعداد فراخوانی‌های API بیشتر می‌شود.
- **Manage domain products** — یک لینک سریع به لیست محصولات دامنه است.
- **Configure providers** — این گزینه پنجره راهنمای ادغام (Integration Wizard) را باز می‌کند تا بتوانید ارائه‌دهندگان جدید اضافه یا تنظیمات قبلی را تغییر دهید.

### افزودن ارائه‌دهنده دوم {#adding-a-second-provider}

روی **Configure providers** کلیک کنید و دوباره برای ثبت‌نام در رجیستری جدید، این wizard را اجرا کنید. شما می‌توانید چندین ارائه‌دهنده را به طور همزمان پیکربندی کنید. هر محصول دامنه را به یک ارائه‌دهنده خاص اختصاص دهید، یا آن را روی پیش‌فرض نگه دارید.

### همگام‌سازی دستی TLDها {#syncing-tlds-manually}

در صفحه تنظیمات، کنار هر ارائه‌دهنده‌ای که پیکربندی کرده‌اید، روی **Sync TLDs** کلیک کنید تا آخرین قیمت‌ها را دریافت نمایید. این کار زمانی مفید است که یک ارائه‌دهنده قیمت عمده را به‌روزرسانی کند یا TLDهای جدیدی اضافه کند.

---

## Logs (لاگ‌ها) {#logs}

هر ارائه‌دهنده اطلاعات خود را در کانال لاگ مخصوص خودش ثبت می‌کند. می‌توانید لاگ‌ها را در مسیر **Network Admin › Ultimate Multisite › Logs** مشاهده کنید:

| قنوات اللوغ (Log channel) | المحتويات (Contents) |
|---|---|
| `domain-seller-registration` | كل محاولات التسجيل (نجاح وفشل) |
| `domain-seller-renewal` | نتائج مهمة التجديد (Renewal job results) |
| `domain-seller-opensrs` | نشاط OpenSRS API الخام |
| `domain-seller-namecheap` | نشاط Namecheap API الخام |
| `domain-seller-hostafrica` | نشاط HostAfrica API الخام |
| `domain-seller-openprovider` | نشاط Openprovider API الخام |
| `domain-seller-hostinger` | نشاط Hostinger API الخام |
| `domain-seller-godaddy` | نشاط GoDaddy API الخام |
| `domain-seller-resellerclub` | نشاط ResellerClub API الخام |
| `domain-seller-namesilo` | نشاط NameSilo API الخام |
| `domain-seller-enom` | نشاط Enom API الخام |

---

## ملاحظات قدرات المزود (Provider capability notes) {#provider-capability-notes}

مش كل API بتاع مسجل (registrar) بيعرض نفس العمليات. الإضافة بتظهر العمليات غير المدعومة بأخطاء واضحة للمسؤول بدل ما تفشل بصمت.

- **HostAfrica** بيدعم أوسع سير عمل للمُعاد بيعه المباشر (live reseller workflow)، بما في ذلك البحث، مزامنة TLD/التسعير، التسجيل، التجديد، النقل، تحديثات خوادم الأسماء (nameserver updates)، سجلات DNS، أكواد EPP، قفل المسجل (registrar lock)، وحماية الهوية (ID protection).
- **Openprovider** بيدعم مزامنة TLD بسعر المُعاد بيعه، التسجيل، التجديد، عمليات النقل، تحديثات خوادم الأسماء، مناطق DNS، أكواد EPP، قفل المسجل، وخصوصية WHOIS. هو بيتحقق باستخدام توكن (bearer token) قصير الأمد بتعمل الإضافة تحديث له تلقائي.
- **Hostinger** بيدعم البحث عن التوافر، التسجيل، البحث في المحفظة (portfolio lookup)، تحديثات خوادم الأسماء، قفل المسجل، وخصوصية WHOIS من خلال توكن API المشترك hPanel. الـ Domains API العامة لـ Hostinger ما بتعرض أسعار المُعاد بيعه/الجملة، أو النقل الوارد، أو التجديد الصريح، أو استرجاع أكواد EPP؛ التجديدات بتكون تلقائية فقط.
