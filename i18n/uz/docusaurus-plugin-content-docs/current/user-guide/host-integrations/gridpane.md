---
title: GridPane Integratsiyasi
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integratsiyasi

## Umumiy ko'rinish {#overview}
GridPane bu jiddiy WordPress professionalari uchun mo'ljallangan maxsus hosting boshqaruv paneli (control panel). Bu integratsiya Ultimate Multisite va GridPane o'rtasida domenlarni avtomatik sinxronlash va SSL sertifikatlarini boshqarish imkonini beradi.

## Xususiyatlar {#features}
- Domenlarni avtomatik sinxronlash
- SSL sertifikatlarini boshqarish
- SUNRISE konstantasini avtomatik sozlash

## Talablar {#requirements}
Quyidagi konstantalar `wp-config.php` faylingizda e'lon qilinishi kerak:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sizning_api_kalit');
define('WU_GRIDPANE_SERVER_ID', 'sizning_server_id');
define('WU_GRIDPANE_APP_ID', 'sizning_site_id');
```

## Sozlash ko'rsatmalari {#setup-instructions}

### 1. GridPane API ma'lumotlaringizni oling {#1-get-your-gridpane-api-credentials}

1. Sizning GridPane dashboardingizga tizimga kirish yapishingiz kerak.
2. "Settings" > "API" (Sozlamalar > API) ga kiring.
3. Agar sizda hali bo'lmagan bo'lsa, API kalitini yarating.
4. API kalitingizni nusxalang.

### 2. Server va Sayt ID'laringizni oling {#2-get-your-server-and-site-ids}

1. GridPane dashboardingizda "Servers" (Serverlar) ga kiring.
2. WordPress multisite joylashgan serverni tanlang.
3. Server ID ni qayd eting (URL da yoki server tafsilotlari sahifasida ko'rinadi).
4. "Sites" (Saytlar) ga o'ting va WordPress saytingizni tanlang.
5. Sayt ID ni qayd eting (URL da yoki sayt tafsilotlari sahifasida ko'rinadi).

### 3. wp-config.php ga konstantalar qo'shing {#3-add-constants-to-wp-configphp}

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sizning_api_kalit');
define('WU_GRIDPANE_SERVER_ID', 'sizning_server_id');
define('WU_GRIDPANE_APP_ID', 'sizning_site_id');
```

### 4. Integratsiyani faollashtiring {#4-enable-the-integration}

1. WordPress admin panelida Ultimate Multisite > Settings (Sozlamalar) ga kiring.
2. "Domain Mapping" (Domen xaritasi) yorlig'iga o'ting.
3. "Host Integrations" (Mezbon integratsiyalari) bo'limiga tushib boring.
4. GridPane integratsiyasini faollashtiring.
5. "Save Changes" (O'zgartirishlarni saqlash) tugmasini bosing.

## Qanday ishlaydi {#how-it-works}

Ultimate Multisite da domen xaritasi qilinganida:

1. Интеграция доменни ім додани сайтга кенданки APIga so' foydalanuvchi domenni sizning saytingizga qo'shish uchun so'rov yuboradi.
2. GridPane avtomatik ravishda SSL sertifikatini ta'minlaydi.
3. Домен xaritasi o'chirilsa, интеграция domeni GridPane dan olib tashlaydi.

Интеграция shuningdek, doimiy ishlatiladigan `wp-config.php` faylidagi SUNRISE konstantasini avtomatik ravishda boshqaradi, bu esa domen xaritasi to'g'ri ishlashi uchun zarurdir.

## SUNRISE Constantni Boshqarish {#sunrise-constant-management}

GridPane integratsiyasining noyob xususiyati shundaki, u GridPanening o'z doimiy ishlatiladigan domen xaritasi tizimi bilan ziddiyat yuzaga kelmasligi uchun `wp-config.php` faylidagi SUNRISE konstantasini avtomatik ravishda qaytarib qo'yadi. Bu ikkala tizim ham muammosiz birgalik ishlashi mumkinligini ta'minlaydi.

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting) {#troubleshooting}

### API Bog'lanish Muammolari {#api-connection-issues}
- API kalitning to'g'ri ekanligini tekshiring.
- Server va sayt IDlaringiz to'g'ri ekanligini tekshiring.
- Sizning GridPane hisobingizda kerakli ruxsatnomalar mavjudligini ta'minlang.

### SSL Sertifikati Muammolari {#ssl-certificate-issues}
- GridPane SSL sertifikatlarini chiqarish biroz vaqt olishi mumkin.
- Doimiy ishlatiladigan domenlaringiz server IP manziliga to'g'ri yo'naltirilganligini tekshiring.
- Saytingiz uchun GridPanening SSL sozlamalarini tekshiring.

### Domen Qo'shilmagan {#domain-not-added}
- Ultimate Multisite loglarida hech qanday xato xabarlari bormi, tekshiring.
- Domen allaqachon GridPanega qo'shilganligini tasdiqlang.
- Domenning DNS yozuvlari to'g'ri sozlangani uchun shart ekanligini ta'minlang.
