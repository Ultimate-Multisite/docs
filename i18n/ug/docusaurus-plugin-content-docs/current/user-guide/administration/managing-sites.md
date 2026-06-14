---
title: Saytlarni boshqarish
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Saytlarni Boshqarish

Saytlar (yoki subsaytlari) sizning WaaS biznesingizning asosidir. Ultimate Multisite da 3 turdagi sayt mavjud:

- **Mijozga tegishli** — Muayyan mijozlarga xos bo'lgan saytlar
- **Sayt Shabloni (Site Templates)** — Mijozlar boshlash nuqtasi sifatida tanlaydigan oldindan belgilangan saytlar
- **Asosiy Sayt (Main Site)** — Sizning asosiy tarmoq saytingiz

## Saytlarni Ko'rish

Tarmoqdagi barcha subsaytlarni ko'rish uchun **Ultimate Multisite → Sites** ga o'ting. Har bir sayt turiga ko'ra belgilangan bo'ladi va siz ularni Barcha Saytlar, Mijozga tegishli, Shabloni yoki Kutib turuvchi (Pending) bo'yicha filtrlashingiz mumkin.

![Sites list page](/img/admin/sites-list.png)

## Yangi Sayt Qo'shish

Yangi sayt yaratish uchun **Add Site** tugmasini bosing. Siz quyidagilarni taqdim etishingiz kerak bo'ladi:

- **Site Title** — жаңы сайтın adı
- **Site URL** — sitenin alan adı/yolu
- **Site Type** — bu bir müşteri sitesi mi, şablon mu yoksa normal site mi olduğunu belirtir

**Copy Site** seçeneği, mevcut bir site şablonuna dayanarak yeni bir site oluşturmanıza olanak tanır. Bu seçenek etkinleştirildiğinde, başlangıç noktası olarak hangi şablonu kullanacağınızı seçebilirsiniz. Medya dosyalarını dahil etmek için **Copy Media on Duplication**'ın etkinleştirildiğinden emin olun.

## Mevcut Bir Siteyi Yönetme

Herhangi bir siteye tıklayarak **Manage** (Yönet) butonuna basarsanız, **Edit Site** (Siteyi Düzenle) sayfasına girersiniz. Burada şunları bulabilirsiniz:

### Temel Bilgiler

Sitenin adı, türü, site ID'si ve açıklaması. Ayrıca eşlenmiş alan adı, ilişkili üyelik bilgileri ve siteyi sahip olan müşteri hesabını da görebilirsiniz.

### Site Seçenekleri

Sitenin yeteneklerini ve sınırlarını yapılandırın:

* **زيارة محدودیت‌ها (Visit limits)** — حداکثر تعداد بازدید سایت
* **محدودیت‌های حساب کاربری (User account limits)** — محدودیت‌ها بر اساس نقش هر کاربر
* **فضای دیسک (Disk space)** — سهم ذخیره‌سازی برای سایت
* **دامنه سفارشی (Custom domain)** — فعال کردن نگاشت دامنه برای این سایت
* **دیدپذیری افزونه و قالب (Plugin and theme visibility)** — کنترل اینکه کدام افزونه‌ها و قالب‌ها قابل مشاهده، مخفی یا از پیش فعال هستند

به صورت پیش‌فرض، سایت‌ها محدودیت‌های تعیین شده در سطح عضویت را دنبال می‌کنند. اگر محدودیت‌ها را در سطح سایت ayarlarsanız، این تنظیمات بر روی تنظیمات عضویت غلبه خواهد کرد.

### ارتباطات (Associations)

زیر گزینه‌های سایت، اطلاعات مربوط به موارد زیر را پیدا خواهید کرد:

* **دامنه های نگاشت شده (Mapped domains)** مرتبط با سایت
* **عضویت (Membership)** که سایت تحت آن قرار دارد
* **حساب مشتری (Customer account)** متصل به سایت

### نوار کناری سمت راست (Right Sidebar)

در سمت راست می‌توانید موارد زیر را انجام دهید:

* سايتيни ёки ўчириш учун тугмачадан фойдаланинг.*
* Сайт турини ўзгартиринг ёки мулкини бошқа кишига тақсимланг.*
*Сайт тасвирини/миниатюрас (сайт шаблонларида олдин қисмда кўринади) белгиланг.*
*Сайтни доимий равишда ўчиринг.*

:::warning
Сайтни ўчириш бутунлай қайтарилмайди. Сайт ва унинг барча мазмуни доимий равишда олиб ташланади.
:::
