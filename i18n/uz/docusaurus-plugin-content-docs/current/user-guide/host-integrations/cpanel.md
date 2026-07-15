---
title: cPanel Integratsiyasi
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integratsiyasi

## Umumiy ko'rinish {#overview}
cPanel bu ko'p umumiy va maxsus hosting provayderlari tomonidan ishlatiladigan eng mashhur veb-hosting boshqaruv panellaridan biridir. Bu integratsiya Ultimate Multisite va cPanel o'rtasida domenlarni avtomatik sinxronlashni imkon beradi, bu esa sizga domen aliaslarini va sousdomainlarni cPanel hisobingizga avtomatik qo'shish imkonini beradi.

## Xususiyatlar {#features}
- cPanelda avtomatik addon domain yaratish
- cPanelda avtomatik subdomain yaratish (subdomain multisite o'rnatmalari uchun)
- Mappinglar o'chirilganda domenlarni olib tashlash

## Talablar {#requirements}
`wp-config.php` faylingizda quyidagi konstantalar belgilanishi kerak:

```php
define('WU_CPANEL_USERNAME', 'sizning_cpanel_username');
define('WU_CPANEL_PASSWORD', 'sizning_cpanel_password');
define('WU_CPANEL_HOST', 'sizning_cpanel_host');
```

Ixtiyoriy ravishda quyidagilarni ham belgilashingiz mumkin:

```php
define('WU_CPANEL_PORT', 2083); // Default 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default /public_html
```

## Sozlash ko'rsatmalari {#setup-instructions}

### 1. cPanel ma'lumotlaringizni oling {#1-get-your-cpanel-credentials}

1. Hosting provayderingizdan cPanel foydalanuvchi nomi va parolingizni oling
2. CPanel hosting manzilingizni aniqlang (odatda `cpanel.yourdomain.com` yoki `yourdomain.com:2083`)

### 2. wp-config.php ga konstantalar qo'shing {#2-add-constants-to-wp-configphp}

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

```php
define('WU_CPANEL_USERNAME', 'sizning_cpanel_username');
define('WU_CPANEL_PASSWORD', 'sizning_cpanel_password');
define('WU_CPANEL_HOST', 'sizning_cpanel_host');
```

Ixtiyoriy ravishda port va asosiy katalog (root directory) sozlamalarini o'zgartirishingiz mumkin:

```php
define('WU_CPANEL_PORT', 2083); // Agar cPanel boshqa portdan foydalansa, o'zgartiring
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Agar hujjat asosiy katalog boshqacha bo'lsa, o'zgartiring
```

### 3. Integratsiyani faollashtiring {#3-enable-the-integration}

1. WordPress admin panelingizda, **Ultimate Multisite > Settings** (Ultimate Multisite > Ayarlar) bölümüne gidin.
2. "Domain Mapping" (Alan Haritalaması) sekmesine geçin.
3. Aşağı kaydırarak "Host Integrations" (Barqaruv Integratsiyalari) kısmına gelin.
4. cPanel entegrasionini etkinleştirin.
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Qanday Ishlaydi {#how-it-works}

### Addon Domains (Ek Alan Adları) {#addon-domains}

Ultimate Multisite'ta bir alan adı haritalandığında:

1. Entegratsiya, alanı ek alan adı olarak cPanel API'sine soʻrov yuboradi.
2. Alan nomi sizning asosiy katalogingizga ishora qilish uchun sozlanadi.
3. Agar alan nomi haritalanishi oʻchirilsa, integratsiya ushbu ek aland nomini cPanel'dan olib tashlaydi.

### Subdomains (Subdomainlar) {#subdomains}

Subdomain multisite o‘rnatishlari uchun yangi sayt yaratilganda:

1. Entegratsiya to‘liq alan nomidan subdomain qismini ajratib oladi.
2. U subdomainni cPanel API'siga qoʻshish uchun soʻrov yuboradi.
3. Subdomain sizning asosiy katalogingizga ishora qilish uchun sozlanadi.

## Muhim Eslatmalar {#important-notes}

- Entegratsiya cPanel hisobingiz bilan bogʻlanish uchun cPanel API2 dan foydalanadi.
- Sizning cPanel hisobingizda ek aland nomlari va subdomainlarni qoʻshish huquqlari boʻlishi kerak.
- Ba'zi hosting provayderlari siz yarata oladigan ek aland nomi yoki subdomainlar sonini cheklashi mumkin.
- Entegratsiya DNS konfiguratsiyasini boshqarmaydi; siz hali ham alan nomlarini serverning IP manziliga ishora qilishingiz kerak.

## Muammolarni Qayta Koʻrib Chiqarish (Troubleshooting) {#troubleshooting}

### API Bogʻlanish Muammolari {#api-connection-issues}

- cPanel foydalanuvchi nomi va parolingiz to‘g‘ri ekanligini tekshiring.
- cPanel hostingizning to‘g‘ri va kirish mumkinligini tekshiring.
- CPanel hisobingizda kerakli huquqlar mavjudligini ta’minlang.
- Host uchun to‘liq URL dan foydalanishni sinab koʻring (masalan, `https://cpanel.yourdomain.com`).

### Alan Nomi Qoʻshilmagan {#domain-not-added}

- Ultimate Multisite loglarini xatolik xabarlari bo‘yicha tekshiring.
- Alan nomining cPanel'ga allaqachon qo‘shilmaganligini tasdiqlang.
- CPanel hisobingiz ek aland nomlari yoki subdomainlar uchun cheklanishiga yetmaganligini ta’minlang.

### SSL Sertifikat Muammalari {#ssl-certificate-issues}

- Integratsiya SSL sertifikati berishni boshlamaydi.
- Domenlaringiz uchun SSL sertifikatlarini olish uchun siz cPanelning SSL/TLS vositalaridan yoki AutoSSL xususiyatidan foydalanishingiz kerak bo'ladi.
- Alternativ ravishda, cPanelning AutoSSL orqali Let's Encrypt kabi xizmatdan foydalanishingiz mumkin.
