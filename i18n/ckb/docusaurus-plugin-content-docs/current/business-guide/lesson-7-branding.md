---
title: 'بۆژمارە ٧: دەربڕینی تایبەتمەندکردنی'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# سبق ٧: خۆشکردن بۆ خۆت

مشتەرایان هەرگیز احساس نەکەن کە لە "چەند پلاتفۆرمێکی WordPress" بەکاردێن. ئەوان دەبێت هەست بکەن وەک لەگەڵ FitSite بەکار دێن، یەک پلاتفۆرم کە بۆ ئەو تایبەتمەندییان دروستکراوە. ئەم وانەیە دەربارەی براندینگ، وایت-لێبلینگ (white-labeling)، و چۆنیەتی هەستاوێنکردنی پلاتفۆرمەکە وەک بەرهەمێک دەگوازێتەوە دەگواستێت.

## لە کوێدا لەوێ بوومە

FitSite سیستمی دابین کردووە کە ڕێڕەوی پاراستانی (checkout flow) کاردەکات کە خاوەن ستۆدیۆکانی فیتنس لە هەڵبژاردنی پلاندانانەوە تا سایتێکی زیندوو دەهێنێت. ئێستا، ہم هەموو ئەزموونەکە وەک بەرهەمێکی یەکگرتوو و برانددار دەکەین هەست بکات.

## دامێنی پلاتفۆرمەکەت

بنیادەری براندەکەت دامێنی تۆیە. بۆ FitSite:

- **دامێنی سەرەکی**: `fitsite.com` (سایتی بازاری و ڕیشەی تۆڕی کارپێکردن)
- **سایتی کڕیارەکان**: `studioname.fitsite.com` (سوبدۆمینەکان)
- **دامێنی تایبەت**: کڕیارانی لە پلانی Growth و Pro دەتوانن دامێنی خۆیان بەکاربهێنن

### ڕێکخستنی دامێنی تۆ

1. دامێنی پلاتفۆرمەکەت تۆمار بکە
2. بۆ پڕۆڤایەرەکەی هۆستینگەکە ئاماژە پێ بدە
3. DNSی wildcard (`*.fitsite.com`) بۆ سوبدۆمینەکانی کڕیارەکان ڕێک بخات
4. دڵنیابە SSLی wildcard چالاک بێت

بۆ ڕێنمایی ورد زیاتر ببینە [چۆنیەتی ڕێکخستنی مۆدال دامێنی](/user-guide/domain-mapping/how-to-configure-domain-mapping) بۆ ڕێکارەکان.

## وایت-لێبلکردنی ئەزموونی ئیدارە (Admin Experience)

کاتێک خاوەن ستۆدیۆی فیتنسەکە چووە ناو داشبۆردی سایتەکەی، دەبێت براندەکەت ببینێت، نەک WordPress یان Ultimate Multisite.

### لاگینی تایبەت (Custom Login Page)

سایتی لاگینی WordPress بە شێوەیەکی تایبەت بگۆڕە بۆ ئەوەی ئەم خاڵانە نیشان بدات:

- لوگۆی FitSite
- وێنەی پسراو کە پەیوەست بێت بە فیتنس
- ڕەنگەکانی براندەکەت

### براندکردنی داشبۆرد (Dashboard Branding)

بۆ ئەوەی لەسەر بەکارهێنانی [Admin Page Creator](/addons/admin-page-creator) یان CSS تایبەت، بتوانید:

- لوگۆی WordPress وایە بۆ لوگۆی FitSite خۆتان بگۆڕیت
- ڕەنگەکانی داشبۆردی ئامادەکراو (admin color scheme) بەپێی براندەکەت دیزاین بکەنەوە
- ویجێتكۆمۆداڵێکی تایبەت زیاد بکەن کە لینکە خێراتر و سەرچاوە یارمەتییەکان بۆ وەرزشکردن دەربکەن

### صفحات ئادمن تایبەت (Custom Admin Pages)

تێبینی بکەن لە دروستکردنی صفحات ئادمن تایبەت کە کارە بەهێزترین شتەکان بۆ سۆفتويری ستودیوەکانی وەرزش دابنێت:

- "دەستکاری کردن پلانی خەلكان" (Edit Your Class Schedule)
- "نوێکردنەوەی پرۆفایلەکانی مامۆستا/تەکنیکار" (Update Trainer Profiles)
- "دۆخەکە ببینیت" (View Your Site)

ئەم کارە ڕێگە دەدات فێربوونی نوێکان کەم بکاتەوە بەوەی ئەو کارانەی تایبەت بە ناوچەکەت لە پێشدا بن و نیشاندن، لەبری ئەوەی لە مێنیوی ستاندارد ی WordPress دابنێیت.

## براندکردنی پەیوەندییەکان (Branding Your Communications)

هەر ئیمێلی، فاکتۆرا (invoice)، و ئاگادارییەک دەبێت براندەکەت پەیام بکاتەوە.

### ئیمێلەکانی سیستەم (System Emails)

گواستنە **Ultimate Multisite > Settings > Emails** بۆ گۆڕینی هەموو ئیمێلەکان:

- **ناوی فرستەر**: FitSite
- **ئیمێلی فرستەر**: hello@fitsite.com
- **دەمتلێی ئیمێل (Email templates)**: ڕەنگ و لوگۆی براندەکەت بەکاربهێنە
- **زمان**: لە سەرانسەیەکی وەرزشی تایبەت بێت

ئیمێلە گرنگییەکان بۆ گۆڕین:

| ئیمێل | دەمتلێی گشتی (Generic Version) | دەمتلێی FitSite (FitSite Version) |
|---|---|---|
| بەخێربێیت (Welcome) | "سایتی نوێیەکەت ئامادە کردووە" | "سایتی ستودیو وەرزشی تۆ لە کارەستە" |
| ڕاپۆرتی پارەدان (Payment receipt) | "پارەدان بەدەستێناوە" | "پایداکردنی ئەبۆنمنتی FitSite پارەدان تاییدا کرا" |
| کۆتایی هاتنیทดลองی کار (Trial ending) | "ทดลองی کارەکەت دەچێتە کۆتایی" | "ทดลองی FitSite لە 3 ڕۆژدا کۆتایی دێت -- ستودیو وەرزشی تۆ بە وردی بمێنێتەوە" |

### فاکتۆراکان (Invoices)

دەمتلێی فاکتۆراکان بگۆڕە بە:

لوگوی و رنگ‌های برند شما در سایت فیت‌سایت
جزئیات کسب‌وکار شما
نام محصولات خاص تناسب اندام (نه شناسه عمومی طرح‌ها)

## سایت面向 مشتری

دامنه اصلی شما (`fitsite.com`) به یک سایت بازاریابی نیاز دارد که پلتفرم را بفروشد. این سایت از مدیریت شبکه Ultimate Multisite جدا است -- این چهره عمومی کسب‌وکار شماست.

صفحات کلیدی:

- **صفحه اصلی (Homepage)**: ارزش پیشنهادی واضح برای کسب‌وکارهای تناسب اندام
- **ویژگی‌ها (Features)**: فیت‌سایت چه کاری انجام می‌دهد، به زبان مرتبط با تناسب اندام
- **قیمت‌گذاری (Pricing)**: سه طرح شما با مقایسه ویژگی‌های خاص هر حوزه تخصصی
- **نمونه‌ها (Examples)**: نمایش سایت‌هایی که بر روی پلتفرم ساخته شده‌اند
- **ثبت نام (Sign Up)**: لینک به فرم پرداخت شما

:::tip سایت بازاریابی شما می‌تواند یک سایت شبکه باشد
سایت بازاریابی خود را به عنوان یک سایت در داخل شبکه خود ایجاد کنید. این کار به شما اجازه می‌دهد آن را از همان داشبورد مدیریت کرده و قابلیت‌های پلتفرم خود را نشان دهید.
:::

## دامنه سفارشی برای مشتریان

برای مشتریانی که طرح‌هایی شامل دامنه‌های سفارشی هستند، فرآیند را به وضوح مستند کنید:

۱. مشتری دامنه خود را ثبت یا منتقل می‌کند به یک رجیستر (registrar)
۲. مشتری DNS را به‌روزرسانی می‌کند تا به پلتفرم شما اشاره کند (رکوردها را دقیق ارائه دهید)
۳. Ultimate Multisite مدیریت نگاشت دامنه و SSL را انجام می‌دهد

یک مقاله کمک یا ورودی پایگاه دانش مخصوص این فرآیند ایجاد کنید، که برای صاحبان استودیوهای تناسب اندام غیرفنی نوشته شده باشد.

شبکه فیت‌سایت تا کنون

FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (configure and brandet)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (spesifik për nisjen e ndërmjetës, i testuar)
├── Branding
│   ├── Faqja e hyrjes personalizuar
│   ├── Dashboard admin me markën FitSite
│   ├── Emailet sistemike specifike për nisjen
│   ├── Fatura me markë
│   └── Siti marketing në fitsite.com
└── Ready for onboarding flow (leksioni i ardhshëm)

## Çfarë Krijim Këtë Leksi

- **Platforma domene dhe DNS** të konfiguruar për një përvojë me markë
- **Admin pa markë (white-labeled)** me markën FitSite gjithë vendite
- **Komunikime të personalizuara** -- emailet, faturat dhe njoftimet të gjitha me markë
- **Një vitrinë marketingje** që shet FitSite pronarëve të stuele sportive
- **Dokumentim i domeneve të personalizuara** për klientët që duan domenit e tyre

---

**Në vijim:** [Leksi 8: Onboarding i Klientit](lesson-8-onboarding) -- ne dizajnojmë përvojën që transformon një regjistrim të ri në një klient aktiv dhe të lumtur.
