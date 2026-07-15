---
title: Wajara da Tsarin Gudanarwa
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# فروندار دامن: تنظیم و پیکربندی ارائه‌دهنده

افزونه Domain Seller با یک راهنمای تنظیم هدایت شده عرضه می‌شود که شما را از تمام مراحل مورد نیاز عبور می‌دهد. این صفحه در مورد جریان این wizard و نحوه پیکربندی یا تنظیم مجدد ارائه‌دهندگان بعد از آن توضیح می‌دهد.

## الزامات {#requirements}

- **Multisite Ultimate** نسخه v2.4.12 یا بالاتر، فعال شده با شبکه
- **PHP** نسخه 7.4+
- اعتبارنامه‌های API برای حداقل یک رجیستر پشتیبانی شده

## wizard تنظیم اولیه {#first-run-setup-wizard}

این wizard به محض اینکه اولین بار افزونه را فعال و در شبکه کنید، به طور خودکار اجرا می‌شود. همچنین شما همیشه می‌توانید از طریق **Network Admin › Ultimate Multisite › Domain Seller Setup** به آن دسترسی داشته باشید.

### مرحله ۱ — انتخاب ارائه‌دهنده {#step-1--choose-a-provider}

رجیستری را که می‌خواهید متصل کنید، انتخاب کنید. گزینه‌های پشتیبانی شده:

| Provider | مدیریت DNS | حریم خصوصی WHOIS |
|---|---|---|
| OpenSRS | بله | بله |
| Namecheap | خیر | بله (WhoisGuard، رایگان) |
| HostAfrica | بله | بله (محافظت ID) |
| Openprovider | بله | بله |
| Hostinger | از طریق نگاشت دامنه اصلی Hostinger برای دامنه‌های میزبانی شده | بله |
| GoDaddy | خیر | خیر |
| ResellerClub | بله | خیر |
| NameSilo | خیر | خیر |
| Enom | بله | خیر |

### مرحله ۲ — وارد کردن اعتبارنامه‌ها {#step-2--enter-credentials}

هر ارائه‌دهنده فیلدهای اعتبارنامه متفاوتی دارد:

**OpenSRS** — نام کاربری و کلید خصوصی (از پنل کنترل فروش مجدد OpenSRS)

**Namecheap** — نام کاربری و API key (از Account › Tools › API Access)

**HostAfrica** — نقطه پایانی API فروش مجدد دامن و اعتبارنامه‌ها از ماژول فروش مجدد HostAfrica. در حال حاضر هیچ نقطه sandbox جداگانه‌ای مستند نشده است؛ قبل از اجرای ثبت‌های واقعی، با بررسی‌های فقط خواندنی امن آزمایش کنید.

**Openprovider** — نام کاربری و رمز عبور با فعال بودن دسترسی API. حالت sandbox اختیاری از API sandbox Openprovider استفاده می‌کند و یک شناسه مشتری پیش‌فرض اختیاری می‌تواند برای ثبت‌ها دوباره استفاده شود.

**Hostinger** — توکن hPanel اشتراک‌گذاری شده Hostinger از یکپارچه‌سازی اصلی Hostinger. همین توکن برای نگاشت دامنه اصلی و عملیات ثبت نام فروشنده دامنه استفاده می‌شود.

**GoDaddy** — کلید API و راز (از developer.godaddy.com)

**ResellerClub** — شناسه بازاریابی مجدد (Reseller ID) و کلید API (از پنل کنترل ResellerClub)

**NameSilo** — کلید API (از namesilo.com › Account › API Manager)

**Enom** — شناسه حساب و توکن API

در صورت وجود، **Sandbox mode** را بررسی کنید تا قبل از راه‌اندازی واقعی، با محیط آزمایشی ارائه‌دهنده تست کنید.

### مرحله ۳ — اتصال را آزمایش کنید {#step-3--test-the-connection}

روی **Test Connection** کلیک کنید. این wizard یک فراخوانی API سبک برای تأیید اعتبار و اتصال ارسال می‌کند. قبل از ادامه دادن، هرگونه مشکل در اطلاعات خود را برطرف کنید.

### مرحله ۴ — وارد کردن TLDها (Top-Level Domains) {#step-4--import-tlds}

برای دریافت تمام TLDها و قیمت‌های عمده از ارائه‌دهنده متصل، روی **Import TLDs** کلیک کنید. این کار لیست TLDهایی را که برای محصولات دامنه استفاده می‌شود پر می‌کند. ممکن است برای ارائه‌دهندگانی که کاتالوگ بزرگ TLD دارند، زمان وارد کردن ۳۰ تا ۶۰ ثانیه طول بکشد.

TLDها همچنین یک بار در روز از طریق یک cron job زمان‌بندی شده به صورت خودکار همزمان می‌شوند.

### مرحله ۵ — ایجاد محصول دامنه {#step-5--create-a-domain-product}

این wizard یک محصول دامنه پیش‌فرض با حاشیه سود ۱۰٪ ایجاد می‌کند. شما می‌توانید این محصول را بلافاصله ویرایش کنید یا آن را رد کرده و محصولات را از طریق **Ultimate Multisite › Products** به صورت دستی بسازید.

برای راهنمای کامل پیکربندی محصول، به [Domain Products and Pricing](./domain-products) مراجعه کنید.

---

## تنظیم مجدد یک ارائه‌دهنده (Reconfiguring a provider) {#reconfiguring-a-provider}

به مسیر **Network Admin › Ultimate Multisite › Settings › Domain Seller** بروید (یا روی **Settings** در لیست افزونه‌ها کلیک کنید).

صفحه تنظیمات شامل موارد زیر است:

- **Fara'adar domain selling** — wajakare wannan ƙarin ƙwarewa (feature) aiki ko ba shi.
- **Gudanar da gudanarwa (Default provider)** — wanda ake amfani da shi don neman domain da sabbin kayayyaki.
- **Adadin TLD na bincike** — yaya yawan TLD ɗin da za a bincika lokacin da abokin ciniki ya nema; ƙarin adadi yana nuna mafi yawa, amma yana zama mai tsawo.
- **Daurin cache na bayarwa (Availability cache duration)** — tsawon lokacin da za a ajiye bayanan availability da farashin kayayyaki; ƙasa waɗannan yarjejenawa suna da inganci sosai amma suna ƙara kuɗaɗen lafiyarka API calls.
- **Gudanar da kayan domain (Manage domain products)** — hanyar sauka zuwa cikin babban rarrabun kayayyaki (Products list).
- **Gudanar da masu samarwa (Configure providers)** — tana buɗe wajen shawarwari (Integration Wizard) don ƙara ko sake tsara masu samarwa.

### Idan ka ƙara wani mai samarwa na biyu {#adding-a-second-provider}

Danna **Configure providers** kuma gudanar da wajen shawarwar (wizard) a kan sabon registrar. Za ka iya samun wasu masu samarwa da aka tsara tare a lokaci guda. Ka ba kowane kayan domain ga wani mai samarwa na musamman, ko ka bar shi a kan default.

### Gudanar da TLD-suka kai (Syncing TLDs manually) {#syncing-tlds-manually}

A shafin settings, danna **Sync TLDs** a gefen kowane mai samarwa da aka tsara don cawa sabbin farashin. Wannan yana da kyau bayan wani mai samarwa ya sake tsara farashin wholesale ko ya ƙara sabbin TLD-suka kai.

---

## Logs (Sako) {#logs}

Kowane mai samarwa yana rubuta bayanan sa a kan hanyar sako (log channel) daban-daban. Za ka iya gani waɗannan sako a kan **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Dukin waɗa kowane ƙoƙarin shiga (na nasara da rashin nasara) |
| `domain-seller-renewal` | Batun aiki na sake tsaro (renewal job)
| `domain-seller-opensrs` | Ayyukan API na OpenSRS na gaba
| `domain-seller-namecheap` | Ayyukan API na Namecheap na gaba
| `domain-seller-hostafrica` | Ayyukan API na HostAfrica na gaba
| `domain-seller-openprovider` | Ayyukan API na Openprovider na gaba
| `domain-seller-hostinger` | Ayyukan API na Hostinger na gaba
| `domain-seller-godaddy` | Ayyukan API na GoDaddy na gaba
| `domain-seller-resellerclub` | Ayyukan API na ResellerClub na gaba
| `domain-seller-namesilo` | Ayyukan API na NameSilo na gaba
| `domain-seller-enom` | Ayyukan API na Enom na gaba

---

## Bayanai game da ikon masu samarwa (Provider capability notes) {#provider-capability-notes}

Ba duk API na registrar suna bayar da ayyuka ko aiki ɗaya. Addon (plugin) yana nuna ayyukan da ba a tattaunawa ba tare da wucewa ba, ta hanyar bayar da ƙarin matsaloli masu sauƙi ga masu gudanarwa (admin-facing errors) maimakon yin rashin aiki ba tare da sanin abin da ya faru.

- **HostAfrica** yana samun mafi girman ayyukan sake tsaro na reseller, wanda ya haɗa da bincike (lookup), zama/tsarar farashin TLD, shiga (registration), sake tsaro (renewal), tura (transfer), gyaran sunan server (nameserver updates), rekodoin DNS, kodin EPP, lokacin ƙona registrar (registrar lock), da kuma himmata kan ID.
- **Openprovider** yana samun zama/tsarar farashin reseller na TLD sync, shiga, sake tsaro, tura, gyaran sunan server, zonorin DNS, kodin EPP, lokacin ƙona registrar, da kuma sirrin WHOIS (WHOIS privacy). Yana tabbatar da shi da wani token na bearer mai rauni (short-lived bearer token) wanda addon yana sake tsara shi ne ba tare da wucewa ba.
- **Hostinger** yana samun bincike kan damar shiga, shiga, binciken portfolio, gyaran sunan server, lokacin ƙona registrar, da sirrin WHOIS ta hanyar amfani da token na hPanel (hPanel API token) da aka raba. API na Hostinger na public ba shi da bayyanar farashin reseller/wholesale, tura shiga, sake tsaro mai bayyana, ko samun kodin EPP; sake tsaro yana sake tsara ne kawai.
