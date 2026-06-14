---
title: Hostinger (hPanel) Integratsiyasi
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integratsiyasi

## Umumiy Ko'rinish

Hostinger bu zamonaviy boshqaruv paneli bo'lgan hPanel bilan mashhur veb-hosting provayderidir. Ultimate Multisite Hostinger integratsiyasi Ultimate Multisite va Hostinger'ning hPanel o'rtasida domenlarni avtomatik sinxronlashni ta'minlaydi, bu esa sizga WordPress adminidan bevosita domen xaritalanishlarini va sousdomainlarni avtomatik boshqarish imkonini beradi.

## Xususiyatlar

- hPanel'da avtomatik qo'shimcha domen yaratish
- hPanel'da avtomatik sousdomain yaratish (sousdomain multisite o'rnatmalari uchun)
- Xaritalanishlar o'chirilganda domenlarni olib tashlash
- hPanelning domen boshqaruv API bilan silliq integratsiya

## Talablar

Hostinger integratsiyasidan foydalanish uchun sizga quyidagilar kerak bo'ladi:

1. hPanel ga kirish imkoniga ega Hostinger hisobi
2. Hostingerdan API tokeni
3. `wp-config.php` faylingizda belgilangan quyidagi konstantalar:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Ixtiyoriy ravishda, siz quyidagilarni ham belgilashingiz mumkin:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Sozlash Ko'rsatmalari

### 1. Hostinger API Tokeningizni Oling

1. Hostinger hisobingizga kirib, hPanel ga kiring
2. **Account Settings** → **API Tokens** (Hisob sozlamalari → API tokenlari) bo'limiga o'ting
3. **Create New Token** (Yangi token yaratish) tugmasini bosing
4. Tokenlaringizga tavsifli nom bering (masalan, "Ultimate Multisite")
5. Kerakli ruxsatnomalarni tanlang:
   - Domain management (Domenni boshqarish)
   - Subdomain management (Sousdomainni boshqarish)
6. Yaratilgan tokenni nusxalang va uni xavfsiz saqlang

### 2. Hisob ID'ingizni Toping

1. hPanel'da **Account Settings** → **Account Information** (Hisob sozlamalari → Hisob ma'lumotlari) bo'limiga o'ting
2. Sizning Hisob ID'ingiz shu sahifada ko'rsatilgan
3. Keyingi qadam uchun buni nusxalab saqlang

### 3. wp-config.php ga Konstanta Qo'shish

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Agar sizning Hostinger hisobingiz boshqa API endpointidan foydalansa, uni o'zgartirishingiz mumkin:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integratsiyani Faollashtirish

1. WordPress admin panelida **Ultimate Multisite > Settings** ga kiring
2. **Domain Mapping** (Domain Xaritasi) yorlig'iga o'ting
3. Pastga tushib **Host Integrations** (Host Integratsiyalari) bo'limini toping
4. **Hostinger (hPanel)** integratsiyasini faollashtiring
5. **Save Changes** (O'zgarishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi

### Addon Domainlar

Ultimate Multisite da domen xaritasi qilganingizda:

1. Integratsiya Hostinger API ga domainni addon domain sifatida qo'shish uchun so'rov yuboradi
2. Domen asosiy katalog (root directory)ga ishora qilish uchun sozlanadi
3. Domen xaritasi o'chirilsa, integratsiya addon domenini avtomatik ravishda hPanel dan olib tashlaydi

### Subdomainlar

Subdomain multisite o'rnatmalarida yangi sayt yaratilganda:

1. Integratsiya to'liq domenidan subdomain qismini ajratib oladi
2. U subdomainni qo'shish uchun Hostinger API ga so'rov yuboradi
3. Subdomain asosiy katalogga ishora qilish uchun sozlanadi

## Muhim Eslatmalar

- Integratsiya hisobingiz bilan muloqot qilish uchun Hostingerning REST API dan foydalanadi
- Sizning API tokeningiz domen va subdomainlarni boshqarish uchun kerakli imkoniyatlarga ega bo'lishi kerak
- Integratsiya DNS konfiguratsiyasini hal qilmaydi; domenlar allaqachon sizning Hostinger hisobingizga ishora qilingan bo'lishi kerak
- API so'rovlari HTTPS orqali xavfsiz amalga oshiriladi
- API tokeningizni xavfsiz saqlang va uni hech qachon ommabop etmang

## Muammolarni Hal Qilish (Troubleshooting)

### API Bog'lanish Muammolari

API token'ingizning to'g'ri ekanligini va muddati tugmaganligini tekshiring

Hisob ID (Account ID) ning to'g'ri ekanligini tekshiring

API token'ingiz domenlarni boshqarish uchun zarur ruxsatnomalarga ega ekanligini ta'minlang

Hostinger hisobingiz faol va yaxshi holatda ekanligini tasdiqlang

### Domen qo'shilmagan

Ultimate Multisite loglarida xatolik xabarlari bormi tekshiring

Domen hali Hostinger hisobingizga qo'shilmaganligini tasdiqlang

Hostinger hisobingiz addon domenlari uchun cheklovga yetmaganligini ta'minlang

Domen Hostinger nomli serverlaringizga to'g'ri yo'naltirilganligini tasdiqlang

### SSL sertifikati muammolari

Integratsiya SSL sertifikatlarini chiqarishni amalga oshirmaydi

Hostinger odatda AutoSSL orqali bepul SSL sertifikatlarini taqdim etadi

SSL sertifikatlarini hPanel'dagi **SSL/TLS** bo'limidan bevosita boshqara olasiz

Alternativ ravishda, Hostingerning AutoSSL xususiyatidan foydalanish uchun Let's Encryptdan foydalanishingiz mumkin

## Qo'llab-quvvatlash

Hostinger integratsiyasi bilan qo'shimcha yordam uchun quyidagilarga murojaat qiling:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
