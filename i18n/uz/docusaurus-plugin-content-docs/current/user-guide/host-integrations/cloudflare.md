---
title: Cloudflare Integratsiyasi
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegratsiyasi

## Umumiy Ko'rinish {#overview}
Cloudflare bu veb-saytlarini himoya qilish va tezlashtirishga yordam beradigan yetakchi kontent yetkazib berish tarmog'i (CDN) va xavfsizlik provayderidir. Bu integratsiya Ultimate Multisite va Cloudflare o'rtasida avtomatik domen boshqaruvini, ayniqsa sous-domen multisite o'rnatmalar uchun imkon beradi.

## Xususiyatlar {#features}
- Cloudflare'da avtomatik sous-domen yaratish
- Proxy qilingan sous-domen qo'llab-quvvatlash
- DNS yozuvlarini boshqarish
- Ultimate Multisite admin panelida yaxshilangan DNS yozuvi ko'rsatish

## Talablar {#requirements}
Quyidagi konstantlarni `wp-config.php` faylingizda belgilashingiz kerak:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizning_api_kalit');
define('WU_CLOUDFLARE_ZONE_ID', 'sizning_zone_id');
```

## Sozlash Ko'rsatmalari {#setup-instructions}

### 1. Cloudflare API Kalitingizni Oling {#1-get-your-cloudflare-api-key}

1. Cloudflare panelingizga kiring
2. "My Profile" (o'ng yuqori burchakdagi elektron pochtaingiz ustiga bosing) ga o'ting
3. menyudan "API Tokens" ni tanlang
4. Quyidagi ruxsatnomalar bilan yangi API token yarating:
   - Zone.Zone: O'qish (Read)
   - Zone.DNS: Tahrirlash (Edit)
5. API tokeningizni nusxalang

### 2. Sizning Zone ID'ingizni Oling {#2-get-your-zone-id}

1. Cloudflare panelingizda ishlatmoqchi bo'lgan domen tanlang
2. Zone ID "Overview" yorlig'ida, "API" ostidagi o'ng menyuda ko'rinadi
3. Zone ID'ni nusxalang

### 3. wp-config.php ga Konstanta Qo'shing {#3-add-constants-to-wp-configphp}

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

```php
define('WU_CLOUDFLARE_API_KEY', 'sizning_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'sizning_zone_id');
```

### 4. Integratsiyani Faollashtiring {#4-enable-the-integration}

1. WordPress admin panelida Ultimate Multisite > Settings ga o'ting
2. "Domain Mapping" (Domen Xaritasi) yorlig'iga kiring
3. "Host Integrations" (Mezbon Integratsiyalari) bo'limiga tushib boring
4. Cloudflare integratsiyasini faollashtiring
5. "Save Changes" (O'zgartirishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi {#how-it-works}

### Sous-domen Boshqaruvi {#subdomain-management}

Sous-domen multisite o'rnatmasida yangi sayt yaratilganda:

1. Интеграция поддомен для добавления CNAME записей в API Cloudflare'a so'rovornilik yuboradi.
2. Поддомен ko'pincha Cloudflare orqali proksi qilinishi uchun sozlanadi (buni filtrlash orqali o'zgartirish mumkin).
3. Sayt o'chirilganda, integratsiya poddomenni Cloudflare'dan olib tashlaydi.

### DNS Yozuvini Ko'rsatish {#dns-record-display}

Integratsiya Ultimate Multisite admin panelidagi DNS yozuvlarini quyidagicha yaxshilaydi:

1. DNS yozuvlarini to'g'ridan-to'g'ri Cloudflare'dan olib keladi
2. Yozuvlar proksi qilinayotganmi yoki qilinmayotganini ko'rsatadi
3. DNS yozuvlari haqida qo'shimcha ma'lumotlarni ko'rsatadi

## Cloudflare Maxsus Hostnomalari (Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (avval "Cloudflare for SaaS" deb atalgan edi) bu Cloudflare funksiyasi bo‘lib, mijozlaringizning o‘z domenlarini SSL bilan sizning multisite tarmog‘ingizda ishlatishiga imkon beradi. Bu domain-xaritmalangan multisite o'rnatmalar uchun tavsiya etilgan yondashuvdir, chunki Cloudflare har bir maxsus domen uchun SSL sertifikatini avtomatik ravishda boshqaradi va yangilaydi.

### Standart Cloudflare integratsiyasidan qanday farq qilishi {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standart integratsiya | Cloudflare Custom Hostnames |
|---|---|---|
| **Maqsad** | Poddomennlar uchun DNS yozuvlarini avtomatik yaratish | Cloudflare boshqaradigan SSL bilan maxsus (xaritalangan) domenlarni faollashtirish |
| **Eng mos keladigan** | Poddomet multisite | Domen-xaritmalangan multisite |
| **SSL** | Alohida boshqariladi | Cloudflare tomonidan avtomatik boshqariladi |

### Cloudflare Custom Hostnames'ni sozlash {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare paneldagi asosiy domen uchun zonani oching.
2. **SSL/TLS > Custom Hostnames** (SSL/TLS > Maxsus Hostnomlar) bo‘limiga o‘ting.
3. Serverning IP manzili yoki hostnomasi bilan bog‘langan fallback originni qo‘shing.
4. Ultimate Multisite'da xaritalangan har bir mijoz domeni uchun Cloudflare'da Custom Hostname yozuvini qo‘shing. Bu qadamni Cloudflare API yordamida avtomatlashtirishingiz mumkin.
5. Mijozning DNS-i sizning tarmoqqa yo‘naltirilganidan so‘ng, Cloudflare har bir custom hostname uchun TLS sertifikatlarini avtomatik ravishda beradi va yangilaydi.

To‘liq API ma'lumotlari uchun [Cloudflare Custom Hostnames dokumentatsiyasiga](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) qarang.

:::note Terminologiya yangilanishi
Ultimate Multisite v2.6.1 versiyasidan boshlab, bu funksiya barcha plugin sozlamalarida va belgilarda **Cloudflare Custom Hostnames** (Cloudflare Maxsus Hostnomlar) deb ataladi. Avvalgi versiyalarda esa asosiy Cloudflare mahsulot nomi bo‘lgan "Cloudflare for SaaS" nomi ishlatilgan edi.
:::

## Muhim Eslatmalar {#important-notes}

Cloudflarening so‘nggi yangilanishlari bilan, hozir barcha mijozlar uchun wildcard proxying mavjud. Bu shuni anglatadiki, subdomain multisite o‘rnatishlari uchun standart Cloudflare DNS integratsiyasi avvalgidek muhim emas, chunki siz oddiygina Cloudflare'da wildcard DNS yozuvini sozlab qo‘yishingiz mumkin.

## Muammolarni hal qilish (Troubleshooting) {#troubleshooting}

### API Bog‘lanish Muammolari {#api-connection-issues}
- API tokeningiz to‘g‘ri ekanligini va kerakli ruxsatnomalarga ega ekanligini tekshiring.
- Zonangiz ID ning to‘g‘ri ekanligini tekshiring.
- Cloudflare hisobingizda kerakli ruxsatnomalar mavjudligiga ishonch hosil qiling.

### Subdomain Qo‘shilmagan {#subdomain-not-added}
- Ultimate Multisite loglarida xatolik xabarlari bormi, tekshiring.
- Subdomain allaqachon Cloudflare'ga qo‘shilmaganligini tasdiqlang.
- Sizning Cloudflare rejangiz yaratayotgan DNS yozuvlari sonini qo‘llab-quvvatlayotganligiga ishonch hosil qiling.

### Proxying Muammolari {#proxying-issues}

- Agar siz subdomenlarni proxy qilishni istamasangiz, `wu_cloudflare_should_proxy` filteridan foydalanishingiz mumkin.
- Ba'zi funksiyalar proxy qilinganda to'g'ri ishlamasligi mumkin (masalan, ba'zi WordPress admin funksiyalari).
- Admin sahifalari uchun cacheni o'tkazib yuborish uchun Cloudflarening Page Rulesidan foydalanishni ko'rib chiqing.
