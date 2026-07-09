---
title: CyberPanel Integratsiyasi
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integratsiyasi {#cyberpanel-integration}

Bu qo'llanma Ultimate Multisite CyberPanel integratsiyasini qanday sozlashni tushuntiradi, shunda sizning tarmoqdagi xaritalangan domenlar avtomatik ravishda CyberPanelda virtual host sifatida qo'shiladi (va olib tashlanadi), Let's Encrypt orqali ixtiyoriy avtomatik SSL proviziyungslanishi bilan.

## Nima Qiladi {#what-it-does}

- Ultimate Multisite da domain xaritaga solinganida, integratsiya ushbu domain uchun virtual host yaratish uchun CyberPanel API chaqiriladi.
- Domain xaritasi o'chirilsa, integratsiya tegishli virtual hostni o'chirish uchun API chaqiriladi.
- Avtomatik SSL yoqilgan bo'lsa, integratsiya virtual host yaratilgandan so'ng Let's Encrypt sertifikatini darhol chiqarishni boshlaydi.
- Domain Xaritasi sozlamalaridagi "Auto-create www subdomain" (www sousdomainini avtomatik yaratish) sozlamangizga qarab `www.` aliasini ixtiyoriy ravishda qo'shadi/olib tashlaydi.

## Oldingi Shartlar (Prerequisites) {#prerequisites}

- Ishlatilayotgan CyberPanel instansi (2.3 yoki undan yuqori versiyasi tavsiya etiladi), bu server WordPress serveringizdan yetib borishi kerak.
- CyberPanelda mavjud bo'lgan veb-sayt, u sizning WordPress tarmoq ildizini (network root) xizmat qilishi kerak. Integratsiya yangi virtual hostlarni shu serverga bog'laydi.
- CyberPanel API kirish imkoniyati yoqilgan bo'lishi kerak. Tasdiqlash uchun sizning CyberPanel administrator ismingiz va parolingizdan foydalaniladi.
- Avtomatik SSL sertifikatini berishi uchun DNS yozuvlaringiz (mapping qilingan domenlar uchun) server IP manziliga yo'naltirilgan bo'lishi kerak.

## Talablar (Requirements) {#requirements}

Quyidagi konstantlar `wp-config.php` faylingizda belgilangan bo'lishi kerak:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Isteqlari, shuni ham belgilashingiz mumkin:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domen yaratilgandan so'ng Let's Encrypt SSL noutishini beradi
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL sertifikati bilan bog'lanish uchun ishlatiladi
```

## Sozlash Ko'rsatmalari {#setup-instructions}

### 1. CyberPanel API ni faollashtirish {#1-enable-the-cyberpanel-api}

1. Administrator sifatida CyberPanel dashboard'iga kirish yapishingiz kerak.
2. **Security** > **SSL** ga o'ting va SSL ning CyberPanel interfeysi o'zida faol ekanligini tasdiqlang (xavfsiz API chaqiruvlari uchun talab qilinadi).
3. CyberPanel API ko'pincha `https://your-server-ip:8090/api/` manzilida mavjud bo'ladi. Uni faollashtirish uchun qo'shimcha qadamlar kerak emas — admin foydalanuvchilari uchun u avtomatik ravishda yoqilgan bo'ladi.

### 2. wp-config.php ga konstantalar qo'shish {#2-add-constants-to-wp-configphp}

`/* That's all, stop editing! */` qatoridan oldin `wp-config.php` faylingizga quyidagi konstantalarni qo'shing:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Avtomatik SSL ni faollashtirish uchun (tavsiya etiladi):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integratsiyani Faollashtirish {#3-enable-the-integration}

1. WordPress tarmoq administrator panelingizda, **Ultimate Multisite** > **Settings** (Sozlamalar) ga kiring.
2. **Domain Mapping** (Doimening Xaritasi) yorlig'iga o'ting.
3. Pastga qarab **Host Integrations** (Mezbon Integratsiyalari) bo'limiga chiqing.
4. **CyberPanel** integratsiyasini faollashtiring.
5. **Save Changes** (O'zgartirishlarni saqlash) tugmasini bosing.

### 4. Ulanishni Tekshirish {#4-verify-connectivity}

Sozlamalar wizardidagi ichki ulanish testidan foydalaning:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ga o'ting.
2. **Test Connection** (Ulanishni tekshirish) tugmasini bosing.
3. Muvaqqiyat xabari plugin CyberPanel APIga yetib borishi va to'g'ri autentifikatsiya qilishini tasdiqlaydi.

## Qanday Ishlaydi {#how-it-works}

### Domain Mapping {#domain-mapping}

Ultimate Multisite da doimening xaritasi (mapping) qilinganda:

1. Integratsiya sizning CyberPanel hostingizdagi `/api/createWebsite` manziliga `POST` so'rov yuboradi.
2. CyberPanel belgilangan paket ostida domen uchun yangi virtual host yaratadi.
3. Dokument ildizi (document root) WordPress tarmoq ildiz katalogingizga ishora qilish uchun sozlanadi.
4. Domen xaritasi o'chirilganda, integratsiya virtual hostni tozalash uchun `/api/deleteWebsite` ni chaqiradi.

### Auto-SSL {#auto-ssl}

Agar `WU_CYBERPANEL_AUTO_SSL` haqiqat bo'lsa (`true`) :

1. Virtual host yaratilgandan so'ng, integratsiya domen uchun `/api/issueSSL` ni chaqiradi.
2. CyberPanel Let's Encrypt sertifikatini ACME HTTP-01 sinovidan foydalanib so'rab oladi.
3. Sertifikat muddati tugashidan oldin CyberPanel tomonidan avtomatik yangilaladi.

> **Muhim:** Let's Encrypt domenni tasdiqlashi uchun DNS serveringizning IP manziliga to'liq tarqalishi kerak. Agar SSL berish xaritmasidan darhol keyin muvaffaqiyatsizlik bo'lsa, DNS tarqalishi uchun kutib turing va CyberPanel dashboardidagi **SSL** > **Manage SSL** orqali SSLni qayta ishga tushiring.

### www Subdomain {#www-subdomain}

Agar Domain Mapping sozlamalarida **Auto-create www subdomain** (www sousdomainini avtomatik yaratish) yoqilgan bo'lsa, integratsiya ham `www.<domain>` uchun virtual host alias yaratadi va auto-SSL yoqilgan bo'lsa, bu ikkala variantni (apex va www) qamlovchi sertifikat beradi.

### Email Forwarders {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) аддон фаол бўлганида, CyberPanel ҳам мижозлар учун электрон почта юбориш (email forwarders) хизматларини тақдим этиши мумкин. Бу юборишлар орқали хабарномаларни тўлиқ почта хатларини яратишсиз, бир домен манзилидан бошқа қабул қилинадиган хатларга йўналтиради. Бу `info@customer-domain.test` ёки `support@customer-domain.test` каби алиас (alias)лар учун жуда фойдалидир.

Мижозлар учун юборишларни фаол қилишдан олдин:

1. Юқоридаги CyberPanel константалари солиштирилгани ва уланиш текшируви муваффақиятли ўтганлигини тасдиқланг.
2. Emails аддон параметрларида CyberPanel электрон почта провайдерини фаол қилинг.
3. Юборишларни яратишдан олдин мижоз домени CyberPanelда борлигини тасдиқланг.
4. Тест юборишни яратинг ва ундан орқали хабарнома юборишингизни продакцион планаларга хизматни таклиф қилишдан олдин синаб кўринг.

Agar forwarder yaratishda muammo yuz bersa, avval Ultimate Multisite faoliyat yozuvlarini tekshiring, so'ngra CyberPanel'da manba domen mavjudligini va API foydalanuvchisida elektron pochta boshqaruvi (email-management) huquqlari borligini tasdiqlang.

## Konfiguratsiya Ma'lumotlari {#configuration-reference}

| Constant | Talab Etilganmi | Default | Tavsif |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ha | — | Portni o'z ichiga olgan CyberPanel instansiyasining to'liq URL-i, masalan: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ha | — | CyberPanel administrator foydalanuvchi nomi |
| `WU_CYBERPANEL_PASSWORD` | Ha | — | CyberPanel administrator paroli |
| `WU_CYBERPANEL_PACKAGE` | Ha | `Default` | Yangi virtual hostlarga yuklanadigan CyberPanel hosting paketi |
| `WU_CYBERPANEL_AUTO_SSL` | Yo'q | `true` | Domen yaratilgandan so'ng Let's Encrypt SSL sertifikatini chiqarish |
| `WU_CYBERPANEL_PHP_VERSION` | Yo'q | `PHP 8.2` | Yangi virtual hostlar uchun PHP versiyasi (CyberPanelda o'rnatilgan versiyaga mos kelishi kerak) |
| `WU_CYBERPANEL_EMAIL` | Yo'q | — | SSL sertifikatini ro'yxatdan o'tish uchun aloqa elektron pochta manzili |

## Muhim Eslatmalar {#important-notes}

CyberPanel API sessiya asosidagi token autentifikatsiyasidan foydalanadi. Integratsiya har bir API chaqiruvda tokenni avtomatik olib oladi.
Sizning CyberPanel administrator hisobingiz veb-saytlarni yaratish va o'chirish huquqlariga ega bo'lishi kerak.
CyberPanel ko'pincha `8090` portida ishlaydi. Agar sizning serveringiz firewal (devorchi) dan foydalansa, bu port WordPress ilova serveridan kirish mumkinligini ta'minlang.
Integratsiya DNS yozuvlarini boshqarmaydi. Domenni Ultimate Multisite da xarita qilishdan oldin domen DNS-ni o'zingizning server IP manziliga yo'naltirish kerak.
Agar siz OpenLiteSpeed (OLS) dan foydalansangiz, virtual hostlar o'zgargandan so'ng yumshoq qayta ishga tushirish avtomatik boshlanadi. Qo'lda aralashish shart emas.

## Muammolarni hal qilish {#troubleshooting}

### API ulanish rad etildi {#api-connection-refused}

* Server firewalidingizda `8090` portining açık olduğundan emin olun.
* `WU_CYBERPANEL_HOST` değerinin doğru protokol (`https://`) ve portu içerdiğini doğrulayın.
* CyberPanel SSL sertifikanızın geçerli olup olmadığını kontrol edin; kendi kendine imzalanmış (self-signed) sertifikalar TLS doğrulama hatalarına neden olabilir. Sadece güvenilir özel ağ ortamlarında `WU_CYBERPANEL_VERIFY_SSL` değerini `false` olarak ayarlayın.

### Kimlik Doğrulama Hataları {#authentication-errors}

* CyberPanel'e doğrudan giriş yaparak `WU_CYBERPANEL_USERNAME` ve `WU_CYBERPANEL_PASSWORD` bilgilerinizin doğru olduğundan emin olun.
* Giriş denemeleri tekrar başarısız olursa, CyberPanel'de **Security** > **Brute Force Monitor** (Kaba Kuvvet İzleme) bölümünü kontrol edin; kilitlenmeler yaşanırsa buraya bakın.

### Alan Adı Oluşturulmadı {#domain-not-created}

API xatolarini tekshirish uchun Ultimate Multisite faoliyat yozuvlaridan (**Ultimate Multisite** > **Activity Logs**) foydalaning.
`WU_CYBERPANEL_PACKAGE` ichida belgilangan paket CyberPanel'da (**Packages** > **List Packages**) mavjudligini tasdiqlang.
Domain hali CyberPanel'da veb-sayt sifatida ro'yxatdan olinmaganligiga ishonch hosil qiling — takroriy veb-sayt yaratish xato beradi.

### SSL Sertifikati Chiqarilmagan {#ssl-certificate-not-issued}

DNS to'liq tarqalganligini tasdiqlang: `dig +short your-domain.com` buyrug'i serveringiz IP adresini qaytarishi kerak.
Let's Encrypt tezlik cheklovlarini (rate limits) qo'llaydi. Agar siz yaqinda bir xil domen uchun bir nechta sertifikat bergan bo'lsangiz, qayta urinishdan oldin kutib turing.
Sertifikat berishdagi muammolarga batafsil ma'lumotlar uchun **Logs** > **Error Logs** bo'limidagi CyberPanel SSL loglarini tekshiring.
Alternativ usul sifatida, siz CyberPanel orqali SSLni qo'lda berishingiz mumkin: **SSL** > **Manage SSL** > domen tanlang > **Issue SSL**.

## Manbalar {#references}

- CyberPanel API Dokumentatsiyasi: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Boshqaruvi: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Tezlik Cheklovlari: https://letsencrypt.org/docs/rate-limits/
