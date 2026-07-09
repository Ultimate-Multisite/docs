---
title: راستکردن و پێکهێنانی پڕۆڤایدرەکان
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# فروشنده دامنه: راه‌اندازی و پیکربندی ارائه‌دهنده {#domain-seller-setup-and-provider-configuration}

افزونه Domain Seller با یک راهنمای تنظیمات هدایت‌کننده عرضه می‌شود که شما را از تمام مراحل مورد نیاز عبور می‌دهد. این صفحه در مورد جریان این wizard و نحوه پیکربندی یا پیکربندی مجدد ارائه‌دهندگان بعد از آن توضیح می‌دهد.

## پیش‌نیازها {#requirements}

- **Multisite Ultimate** نسخه v2.4.12 یا بالاتر، فعال شده در شبکه
- **PHP** 7.4+
- اعتبارنامه‌های API برای حداقل یک رجیستر پشتیبانی شده

## wizard راه‌اندازی اولیه {#first-run-setup-wizard}

این wizard به محض اولین بار که افزونه را فعال می‌کنید، به صورت خودکار اجرا می‌شود. همچنین می‌توانید هر زمان از مسیر **Network Admin › Ultimate Multisite › Domain Seller Setup** آن را پیدا کنید.

### مرحله ۱ — انتخاب ارائه‌دهنده {#step-1--choose-a-provider}

رجیستری را که می‌خواهید متصل کنید، انتخاب کنید. گزینه‌های پشتیبانی شده:

| ارائه‌دهنده | مدیریت DNS | حریم خصوصی WHOIS |
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

**HostAfrica** — نقطه پایانی API فروش مجدد دامنه‌ها و اعتبارنامه‌ها از ماژول Reseller HostAfrica. در حال حاضر هیچ نقطه sandbox جداگانه‌ای مستند نشده است؛ قبل از اجرای ثبت‌های واقعی، با بررسی‌های فقط خواندنی امن تست کنید.

**Openprovider** — نام کاربری و رمز عبور با فعال بودن دسترسی API. حالت sandbox اختیاری از API sandbox Openprovider استفاده می‌کند و یک شناسه مشتری پیش‌فرض اختیاری می‌تواند برای ثبت‌ها دوباره استفاده شود.

**Hostinger** — Tokeni hPanel API shared yê Hostinger ji integrasyonê sereke. Eman token ji bo xartkirina domên sereke û operasyonên registrajna satî domên (Domain Seller registration) karê.

**GoDaddy** — API key û secret (Ji developer.godaddy.com)

**ResellerClub** — Reseller ID û API key (Ji paneli kontrola ResellerClub)

**NameSilo** — API key (Ji namesilo.com › Account › API Manager)

**Enom** — Account ID û API token

Ji bo tespîtarina li **Sandbox mode** ku hewce ye, ji bo tespîtkarin a karşıya mîmarê pênivîsî (provider's test environment) pêştekirin.

### Qeybesê 3 — Pêşveçkirina porsê {#step-3--test-the-connection}

Li **Test Connection** klik bikin. Wizard yek carê API call ji bo taybetbûna credentials û hatîna berxwedan (connectivity) dike. Piriyên hatine hatin dîtin pirskirînên credentials ji bo davamkirin.

### Qeybesê 4 — Import kirina TLDs {#step-4--import-tlds}

Li **Import TLDs** klik bikin ku hemû TLDs û biroborinên piyasî (wholesale pricing) ji pênivîsî ya hatine hatin vebêjin, çêrîya domên yên karê. Ev import dikare 30–60 sekûnd dike ji bo pênivîsî yên ku kataloga TLDs mezin in.

TLDs hemû caran bi taybetbûna rojêyek ji bergotina cron job (scheduled cron job) hatin resync kirin.

### Qeybesê 5 — Çêkirina yekûna domên (domain product) {#step-5--create-a-domain-product}

Wizard yekûna domênyek pêştekî (default catch-all domain product) bi 10% markup dike. Tu dikarin ev yekûn hatine vîgirtin an jî ji bo taybetbûna manavî (manually) li bajarê **Ultimate Multisite › Products** çêkirin.

Ji bo rêgeha gelek konfigurasyon a yekûna karê, [Domain Products and Pricing](./domain-products) derê binêrê dinakirin.

---

## Pêştekirina pênivîsî (Reconfiguring a provider) {#reconfiguring-a-provider}

Ji **Network Admin › Ultimate Multisite › Settings › Domain Seller** bi rêwîtiye (veya li paneli plugin ji bo Settings klik bikin).

Pajeya settings ser digire:

- **Enable domain selling** — toggling this feature on/off controls the entire domain selling functionality.
- **Default provider** — this is the provider that gets used for searching domains and adding new products.
- **Max TLDs per search** — specifies how many Top-Level Domains (TLDs) to check when a customer searches; higher numbers show more options but make the search slower.
- **Availability cache duration** — determines how long availability and pricing results are cached; lower values mean more accurate data but increase API calls.
- **Manage domain products** — a quick link that takes you to the Products list.
- **Configure providers** — opens the Integration Wizard so you can add or change your providers.

### Adding a second provider {#adding-a-second-provider}

Click on **Configure providers** and run the wizard again for the new registrar. You can have several providers set up at the same time. Assign each domain product to a specific provider, or just leave it on the default setting.

### Syncing TLDs manually {#syncing-tlds-manually}

On the settings page, click **Sync TLDs** next to any configured provider to get the latest pricing. This is helpful after a provider updates wholesale prices or adds new TLDs.

---

## Logs {#logs}

Each provider writes its own log channel. You can view these logs under **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | هەموو هەوڵەکانی تۆمارکردن (سەرکەوتوو و شکست) |
| `domain-seller-renewal` | ئەنجامی کارکردنی نوێکردنەوە |
| `domain-seller-opensrs` | چالاکی ڕاستەقینەی OpenSRS API |
| `domain-seller-namecheap` | چالاکی ڕاستەقینەی Namecheap API |
| `domain-seller-hostafrica` | چالاکی ڕاستەقینەی HostAfrica API |
| `domain-seller-openprovider` | چالاکی ڕاستەقینەی Openprovider API |
| `domain-seller-hostinger` | چالاکی ڕاستەقینەی Hostinger API |
| `domain-seller-godaddy` | چالاکی ڕاستەقینەی GoDaddy API |
| `domain-seller-resellerclub` | چالاکی ڕاستەقینەی ResellerClub API |
| `domain-seller-namesilo` | چالاکی ڕاستەقینەی NameSilo API |
| `domain-seller-enom` | چالاکی ڕاستەقینەی Enom API |

---

## تێبینیی تواناکانی پڕۆڤایدر (Provider capability notes) {#provider-capability-notes}

نەخستن هەموو APIی تۆمارگرنی یەک کارکردن و ئامراز دەدات. ئەپڵۆگەکە ئەو کارانەی کە پشتگیران نییە بە هەڵەکانی بەڕێوەبەری دیار دەکات، لەبری ئەوەی بە خەفەکی بێت بەسلاح ڕەتکارد.

- **HostAfrica** پڕۆسەی گشتگیرترین کارکردنی ڕیکلامەر (reseller workflow) پشتگیران دەکات، کە دەچێت لەگەڵ لێکۆڵینەوە، هەڵسُوڕانی TLD/نرخ، تۆمارکردن، نوێکردنەوە، گواستنەوە، نوێکردنەوەی ناوی سروری (nameserver updates)، تۆماری DNS، کۆدی EPP، قفلکردنی ڕیکلامەر و پاراستنی ID.
- **Openprovider** پشتگیران دەکات لێکۆڵینەوەی TLD بە نرخێکی ڕیکلامەر، تۆمارکردن، نوێکردنەوە، گواستنەوەکان، نوێکردنەوەی ناوی سروری (nameserver updates)، ناوچەکانی DNS، کۆدی EPP، قفلکردنی ڕیکلامەر و تایبەتمەندی پنهانکردنی WHOIS. ئەم APIیە لەگەڵ توکنێکی bearer کورتەمۆد بەکار دێت کە ئەپڵۆگەکە خۆی دەستکاری دەکات (refreshes).
- **Hostinger** پشتگیران دەکات لێکۆڵینەوەی بەدواداچوون، تۆمارکردن، لێکۆڵینەوەی پۆرتفۆلی، نوێکردنەوەی ناوی سروری (nameserver updates)، قفلکردنی ڕیکلامەر و تایبەتمەندی پنهانکردنی WHOIS لە ڕێگەی توکن APIی هاوبەش ی hPanel. APIی Domainەکانی Hostinger کە بە ئاسایی دەبینرێت، نرخەکانی ڕیکلامەر/سۆشیال (reseller/wholesale pricing)، گواستنەوەی ناوخۆیی (inbound transfer)، نوێکردنەوەی ڕاستەوخۆ (explicit renewal) یان وەربگرتنی کۆدی EPP نیشان得ێت؛ نوێکردنەوەیەکان تەنها بە شێوەی ئۆتۆماتیک دەبێت.
