---
title: Sanda wa Kayayyakin Dominin da Farashin Suya
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# mahadun-duniya da farashin samun kayan (Domain Products and Pricing) {#domain-products-and-pricing}

Kayan domain suna yadda kake sarrafa farashin, TLDs (domain extensions), sirrin WHOIS, da zaɓar gudanarwa. Kowane kayan domain shine wani kayan na standard Ultimate Multisite tare da tab mai ƙarfi **Domain Settings**.

## Samar da kayan domain {#creating-a-domain-product}

1. Zuwa **Network Admin › Ultimate Multisite › Products**
2. Danna **Add New** (Ƙara Mai Sabuni)
3. Ka sanya nau'in kayan zuwa **Domain**
4. Ka tsara tab na **Domain Settings** (ga kalli ƙasa)
5. Save (Ajiye)

Kayan domain suna bayyana tare da alamar purple mai suna **Domain** a cikin babban rarrabawar kayan kuma za ka iya fassara su ta amfani da tab na **Domain Products**.

## Tab na Domain Settings {#domain-settings-tab}

### Provider (Gudanarwa/Mai samarwa) {#provider}

Zaɓi wanda zai yi tsara rijista ga wannan kayan. Yana fara tare da **Default provider** a duniya da aka sanya a cikin Domain Seller settings.

### Supported TLDs (TLDs da ake himata) {#supported-tlds}

Ka bar shi a matsayin buɗaɗɗen don samar da wani kayan **catch-all product** wanda ke aiki ga dukkan TLDs ba su da haɗi da wani kayan.

Ka shigar da ƙila mai tsokaci (comma-separated list) na TLDs (misali: `.com, .net, .org`) don samar da wani kayan **TLD-specific product** wanda ke aiki kawai ga waɗannan haɗi.

**Yadda ake aiki da haɗin kayan:** Lokacin da abokin ciniki ya nema domain, wannan addon zai zaɓi mafi dacewa da kayan da suka dace. Kayar da ke da `.com` a cikin yanzuwar TLD ɗinta tana da muhimmanci fiye da wani catch-all product. Idan ba a sami wani kayan na TLD ba, ana amfani da catch-all. Idan babu wani kayan, ba za a nuna binciken domain ba.

### Markup type (Nau'in farashin ƙara) {#markup-type}

Takwas nau'ikan ke sarrafa yadda ake cawa farashin kasuwanci daga kuɗin samun shi:

| Mode (Nau'i) | Yadda yake aiki |
|---|---|
| **Percentage** (Shari'a ta shari'a) | Ya ƙara shari'a a kan kuɗin samun shi. Wani farashin ƙara na 20% a kan domain da ya kasance $10 yana ba da $12. |
| **Fixed markup** (Farashin ƙara na tsari) | Yana ƙara wani latsa na musamman. Wani farashin ƙara na $5 a kan domain da ya kasance $10 yana ba da $15. |
| **Fixed price** (Farashi na tsari) | Yana lalata kuɗin samun shi gaba ɗaya. Ya dauka kowane latsa da ka shigar. |

### Introductory pricing (Farashin fara) {#introductory-pricing}

**قیمت سال اول تخفیفی دادن را فعال کنید.** یک **قیمت معرفی (قیمت سال اول)** جداگانه در کنار **قیمت تمدید عادی (قیمت سال دوم به بعد)** قرار دهید. مشتری هر دو قیمت را هنگام تسویه حساب می‌بیند تا بداند در زمان تمدید چه انتظاری داشته باشد.

### حریم خصوصی WHOIS {#whois-privacy}

کنترل می‌کند که آیا برای دامنه‌های ثبت شده از طریق این محصول، حفاظت از حریم خصوصی WHOIS ارائه می‌شود یا خیر.

| تنظیمات | رفتار |
|---|---|
| **غیرفعال** | حریم خصوصی WHOIS هرگز ارائه یا فعال نمی‌شود. |
| **همیشه شامل** | حریم خصوصی WHOIS به صورت خودکار هنگام ثبت نام بدون هزینه فعال می‌شود. |
| **انتخاب مشتری** | یک چک‌باکس در طول تسویه حساب ظاهر می‌شود. **قیمت حریم خصوصی** را برای دریافت هزینه سالانه تنظیم کنید، یا آن را روی $0 بگذارید تا رایگان ارائه شود. |

برای Namecheap، حریم خصوصی WHOIS از WhoisGuard استفاده می‌کند (همیشه رایگان است). برای OpenSRS، از سرویس حریم خصوصی OpenSRS استفاده می‌کند (ممکن است در فروش عمده هزینه داشته باشد).

---

## وارد کردن و همگام‌سازی TLDها {#tld-import-and-sync}

محصولات دامنه قیمت‌های عمده لحظه‌ای را از ارائه‌دهنده متصل دریافت می‌کنند. برای اینکه این کار انجام شود، باید TLDها وارد شوند.

- **همگام‌سازی دستی:** Settings › Domain Seller › Sync TLDs (برای هر ارائه‌دهنده)
- **همگام‌سازی خودکار:** روزانه از طریق یک کارهای زمان‌بندی شده (scheduled cron job) در تمام ارائه‌دهندگان پیکربندی شده اجرا می‌شود.

بعد از همگام‌سازی، به تب Domain Settings هر محصول دامنه بروید و از انتخاب TLD برای دیدن TLDهای موجود با قیمت‌های عمده فعلی استفاده کنید.

---

## تمدید خودکار {#auto-renewal}

تمدید دامنه‌ها به وضعیت عضویت مشتری وابسته است:

- وقتی یک عضویت تمدید می‌شود و یک دامنه به آن متصل می‌گردد، تمدید دامنه به صورت خودکار در صف قرار می‌گیرد.
- تلاش‌های تمدید از دروازه پرداخت فعال مشتری استفاده می‌کنند.
- تمدیدهای ناموفق به طور خودکار با عقب‌نشینی نمایی (exponential backoff) دوباره امتحان می‌شوند.
- برای تمدیدهای موفق، شکست‌ها و تاریخ انقضاها، اعلان‌های ایمیلی ارسال می‌شود.

شناسه‌های قالب ایمیل برای رویدادهای چرخه حیات دامنه:

| Wuri | ID ɗin Template |
|---|---|
| Domain an rubuta | `domain_registered` |
| Domain an sake rubuta | `domain_renewed` |
| Sake rubutawa ta yi nasara ba | `domain_renewal_failed` |
| Domain ya kusa da ƙarewa | `domain_expiring_soon` |

---

## Admin: Rubutawar domain a hannun kai (Manual domain registration) {#admin-manual-domain-registration}

Don rubuta domain a hannun wani abokin ciniki ba tare da ya tafiya ta checkout ba:

1. Zuwa **Network Admin › Ultimate Multisite › Register Domain**
2. Zaɓi abokin ciniki kuma ka shigar da sunan domain
3. Ka cika bayanan addini na mai rubuta (sunan, adireshin, wuri)
4. Danna **Register**

An ƙirƙira rekodin domain kuma an haɗa shi da asusun abokin cinikin.
