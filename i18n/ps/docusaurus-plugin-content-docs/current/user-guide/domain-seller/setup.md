---
title: تشوب او پرایدر تنظیمول
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: تنظیم و پیکربندی ارائه‌دهنده

افزونه Domain Seller با یک راهنمای تنظیم هدایت شده همراه است که شما را از تمام مراحل مورد نیاز عبور می‌دهد. این صفحه در مورد جریان این wizard و نحوه پیکربندی یا تنظیم مجدد ارائه‌دهندگان بعد از آن توضیح می‌دهد.

## پیش‌نیازها {#requirements}

- **Multisite Ultimate** نسخه v2.4.12 یا بالاتر، فعال شده در شبکه
- **PHP** 7.4+
- اعتبارنامه‌های API برای حداقل یک رجیستر پشتیبانی شده

## wizard تنظیم اولیه {#first-run-setup-wizard}

این wizard به محض اینکه اولین بار افزونه را فعال و در شبکه کنید، به طور خودکار اجرا می‌شود. همچنین شما همیشه می‌توانید از طریق **Network Admin › Ultimate Multisite › Domain Seller Setup** به آن دسترسی داشته باشید.

### مرحله ۱ — انتخاب ارائه‌دهنده {#step-1--choose-a-provider}

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

### مرحله ۲ — وارد کردن اعتبارنامه‌ها {#step-2--enter-credentials}

هر ارائه‌دهنده فیلدهای اعتبارنامه متفاوتی دارد:

**OpenSRS** — نام کاربری و کلید خصوصی (از پنل کنترل بازرگان OpenSRS)

**Namecheap** — نام کاربری و API key (از Account › Tools › API Access)

**HostAfrica** — نقطه پایانی API ارائه‌دهنده دامنه Reseller و اعتبارنامه‌ها از ماژول Reseller HostAfrica. در حال حاضر هیچ نقطه sandbox جداگانه مستند نشده است؛ قبل از اجرای ثبت‌های زنده، با بررسی‌های فقط خواندنی امن آزمایش کنید.

**Openprovider** — نام کاربری و رمز عبور با فعال بودن دسترسی API. حالت sandbox اختیاری از API sandbox Openprovider استفاده می‌کند و یک شناسه مشتری پیش‌فرض اختیاری می‌تواند برای ثبت‌ها دوباره استفاده شود.

**Hostinger** — Core Hostinger integration څخه ترلاسه کېدونکي اشتراک কৰা hPanel API token. ই একেটা টোকেনৰ দ্বাৰা মূল ডোমেইন মেপিং আৰু Domain Seller ৰ 등록 কামবোৰ সম্পন্ন হয়।

**GoDaddy** — API key আৰু secret (developer.godaddy.com बाट)

**ResellerClub** — Reseller ID আৰু API key (ResellerClub control panel बाट)

**NameSilo** — API key (namesilo.com › Account › API Manager बाट)

**Enom** — Account ID আৰু API token

যদি উপলব্ধ থাকে, **Sandbox mode** চাব লাগে যাতে লাইভ হোৱাৰ আগতে প্ৰদানকাৰৰ ট্ৰেষ্ট এনভায়রনমেন্টত পৰীক্ষা কৰিব পাৰে।

### ধাপ ৩ — সংযোগটো পৰীক্ষা কৰক {#step-3--test-the-connection}

**Test Connection** ক্লিক কৰক। এই উইজार्डটোৱে স্বীকৃতি আৰু সংযোগ পৰীক্ষা কৰিবলৈ এটা সৰু API কল প্ৰেছনি কৰে। আগবাঢ়ি যোৱাৰ আগতে কোনো স্বীকৃতি সমস্যা সমাধান কৰি লওক।

### ধাপ ৪ — TLD সমূহ আমদানি কৰক (Import TLDs) {#step-4--import-tlds}

**Import TLDs** ক্লিক কৰক যাতে সংযুক্ত প্ৰদানকাৰৰ পৰা সকলো উপলব্ধ TLD আৰু পাইকারি মূল্যসমূহ লোৱা যায়। ই ডোমেইন প্ৰডাক্টবোৰৰ বাবে ব্যৱহাৰ হোৱা TLD তালিকাটো পূৰ্ণ কৰে। ডাঙৰ TLD ক্যাটালগ থকা প্ৰদানকাৰৰ ক্ষেত্ৰত আমদানি কৰাত ৩০–৬০ ছেকেণ্ড সময় ল’ব পাৰে।

সময়ৰ এক পৰিকল্পিত cron job-ৰ দ্বাৰা দিনটোৰ ভিতৰত TLD সমূহ স্বয়ংক্রিয়ভাৱে পুনৰ সিমান কৰা হয়।

### ধাপ ৫ — এটা ডোমেইন প্ৰডাক্ট সৃষ্টি কৰক {#step-5--create-a-domain-product}

উইজार्डটোৱে ১০% markup সহ এটা ডিফল্ট catch-all ডোমেইন প্ৰডাক্ট সৃষ্টি কৰে। আপুনি এই প্ৰডাক্টটো তৎক্ষণাত সম্পাদনা কৰিব পাৰে বা **Ultimate Multisite › Products** ত মেৰুৱাই হাতেৰে প্ৰডাক্ট সৃষ্টি কৰিব পাৰে।

সম্পূৰ্ণ প্ৰডাক্ট কনফিгураচন গাইডৰ বাবে [Domain Products and Pricing](./domain-products) চাব।

---

## প্ৰদানকাৰ পুনৰ কনফিগুৰেট কৰা (Reconfiguring a provider) {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller** লৈ যাওক (বা প্লাগইন তালিকাৰ পৰা **Settings** ক্লিক কৰক)।

সেটিংছ পেজত নিম্নলিখিতবোৰ থাকিব:

- **Enable domain selling** — toggling this feature on/off means you can start or stop selling domains.
- **Default provider** — this is the main provider that will be used for searching domains and adding new products.
- **Max TLDs per search** — this tells us how many Top-Level Domains (TLDs) to check when a customer searches. If you set it higher, more options will show up, but the search might take longer.
- **Availability cache duration** — this sets how long we keep the availability and pricing results saved in our cache. Lower values mean the information is fresher/more accurate, but it means we make more calls to the API.
- **Manage domain products** — a quick link that takes you straight to the Products list so you can manage your domains easily.
- **Configure providers** — this opens the Integration Wizard where you can add new providers or change settings for existing ones.

### Adding a second provider {#adding-a-second-provider}

Click on **Configure providers** and run the wizard again for the new registrar. You can have several providers set up at the same time. You can assign each domain product to a specific provider, or just leave it on the default setting.

### Syncing TLDs manually {#syncing-tlds-manually}

On the settings page, click on **Sync TLDs** next to any configured provider to get the latest pricing information. This is helpful after a provider changes wholesale prices or adds new TLDs.

---

## Logs {#logs}

هر پ로우ایدەر (provider) خپل الگ لاگ کانال ته ورته. شما می توانید لاگ ها را تحت **Network Admin › Ultimate Multisite › Logs** ببینید:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | ټول ثبتي کوششونه (موفقیت او ناکامی) |
| `domain-seller-renewal` | بیاهمการณ์و کارونو نتيجه |
| `domain-seller-opensrs` | خام OpenSRS API فعالیت |
| `domain-seller-namecheap` | خام Namecheap API فعالیت |
| `domain-seller-hostafrica` | خام HostAfrica API فعالیت |
| `domain-seller-openprovider` | خام Openprovider API فعالیت |
| `domain-seller-hostinger` | خام Hostinger API فعالیت |
| `domain-seller-godaddy` | خام GoDaddy API فعالیت |
| `domain-seller-resellerclub` | خام ResellerClub API فعالیت |
| `domain-seller-namesilo` | خام NameSilo API فعالیت |
| `domain-seller-enom` | خام Enom API فعالیت |

---

## Provider capability notes {#provider-capability-notes}

همه ثبتي شرکتونو API یوه هم کارونه نریښه کړي. Addon هغه کارونه چې پ suport نه دي، به په چپ چاپ ناکام되지 نه شي، بَل له بدلې غلطی پیغامونه (errors) د مدیرانو لپاره ښکاره کوي.

- **HostAfrica** सबैभन्दा وسیله ژوندۍ ریسیلر ورکشルフارمه پشتیوني کوي، چې شامل دی: معلومات ترلاسه کول، TLD/قیمت همغږي کول، ثبتول، بیاهمการณ์، منتقلول، نام سرور (nameserver) تازه کول، DNS رکدا، EPP کودونه، شرکت لاک، او ID ساتنه.
- **Openprovider** ریسیلر قیمت شوي TLD همغږي کول، ثبتول، بیاهمการณ์، انتقال، نام سرور تازه کول، DNS زونونه، EPP کودونه، شرکت لاک، او WHOIS راټیری (privacy) پشتیوني کوي. دا Addon له یوې چټک وخت لپاره bearer token سره مرسته کوي چې Addon خود بخښنه یې خود بیا جوړوي.
- **Hostinger** د اشتہال فعالیتको खोजी, ثبتول, پورټफोलیو معلومات، نام سرور تازه کول, شرکت لاک, او WHOIS راټیری د साझा hPanel API token له لارې پشتیوني کوي. Hostinger د публи Domains API ریسیلر/ wholesale قیمتونه، ورودی انتقال (inbound transfer)، څرګند بیاهمการณ์، یا EPP کود ترلاسه کولو معلومات نه ښکاره کوي؛ بیاهمการณ์ فقط خود بخښنه کیږي.
