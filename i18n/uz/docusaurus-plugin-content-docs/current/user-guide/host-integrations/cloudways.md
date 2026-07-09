---
title: Cloudways Integratsiyasi
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integratsiyasi {#cloudways-integration}

## Umumiy ko'rinish {#overview}
Cloudways — bu boshqariladigan bulutli hosting platformasi bo‘lib, siz Ultimate Multisite WordPress saytlarini DigitalOcean, AWS, Google Cloud va boshqa kabi turli bulut provayderlarida joylashtirishingiz mumkin. Bu integratsiya Ultimate Multisite va Cloudways o‘rtasida domenlarni avtomatik sinxronlash va SSL sertifikatlarini boshqarish imkonini beradi.

## Xususiyatlar {#features}
- Domenlarni avtomatik sinxronlash
- SSL sertifikatlarini boshqarish
- Qo'shimcha domenlarni qo'llab-quvvatlash
- SSL sertifikatlari uchun DNS tasdiqlash

## Talablar {#requirements}
`wp-config.php` faylingizda quyidagi konstantalar belgilanishi kerak:

```php
define('WU_CLOUDWAYS_EMAIL', 'sizning_cloudways_emailingiz');
define('WU_CLOUDWAYS_API_KEY', 'sizning_api_kalit');
define('WU_CLOUDWAYS_SERVER_ID', 'sizning_server_id');
define('WU_CLOUDWAYS_APP_ID', 'sizning_app_id');
```

Ixtiyoriy ravishda quyidagilarni ham belgilashingiz mumkin:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domenlar,virgulla_ajratilgan_ro'yxat');
```

## Sozlash ko'rsatmalari {#setup-instructions}

### 1. Cloudways API ma'lumotlaringizni oling {#1-get-your-cloudways-api-credentials}

1. Cloudways panelingizga kiring
2. "Account" > "API Keys" (Hisob > API kalitlari) bo‘limiga o‘ting
3. Agar sizda hali yo‘q bo‘lsa, API kalitini yarating
4. O‘zingizning emailingiz va API kalitingizni nusxalang

### 2. Server va ilova ID'laringizni oling {#2-get-your-server-and-application-ids}

1. Cloudways panelingizda "Servers" (Serverlar) bo‘limiga kiring
2. WordPress multisite joylashgan serverni tanlang
3. Server ID URL da ko‘rinadi: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" (Ilovalar) bo‘limiga o‘ting va WordPress ilovangizni tanlang
5. App ID URL da ko‘rinadi: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ga konstantalar qo'shing {#3-add-constants-to-wp-configphp}

Quyidagi konstantalarni `wp-config.php` faylingizga qo‘shing:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Eğer multisite ağınız dışında, her zaman Cloudways takma adları listesinde tutulması gereken ek **tutanak dışı** alan adlarınız varsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kendi ağınızın joker karakterini (wildcard) eklemeyin
`WU_CLOUDWAYS_EXTRA_DOMAINS`'e `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) eklemeyin. Neden bu durum her kiracı için ayrı SSL sertifikalarının verilmesini engellediğini aşağıda [Önemli — joker karakter SSL tuzağı](#important--wildcard-ssl-pitfall) inceleyin.
:::

### 4. Entegrasyonu Etkinleştirme {#4-enable-the-integration}

1. WordPress yönetim panelinizde Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine geçin
3. Aşağı kaydırarak "Host Integrations" (Barındırıcı Entegrasyonları) kısmına gelin
4. Cloudways entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu (Domain Syncing) {#domain-syncing}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, şu anda eşleşmiş tüm alan adlarını alır
2. Yeni alanı listeye ekler (uygulanabilirse www versiyonu ile birlikte)
3. Tam listeyi API aracılığıyla Cloudways'e gönderir
4. Cloudways, uygulamanız için alan adı takma adlarını günceller

Not: Cloudways API, her seferinde sadece tek bir alanı eklemek veya kaldırmak yerine tüm alan adlarının tam listesini göndermeyi gerektirir.

### SSL Sertifikası Yönetimi {#ssl-certificate-management}

Alan adları senkronize edildikten sonra:

1. Entegrasyon, sunucunuza işaret eden geçerli DNS kayıtlarına sahip hangi alan adlarını kontrol eder
2. O alan adları için Let's Encrypt SSL sertifikaları kurmak üzere Cloudways'e bir istek gönderir
3. Cloudways, SSL sertifikası verme ve kurulum işlemlerini yönetir

Integratsiya har doqiq **standart** (wildcard emas) Let's Encrypt sertifikatlarini Cloudways dan so'raydi. Agar `WU_CLOUDWAYS_EXTRA_DOMAINS` da wildcard shablonidan foydalanilsa, SSL so'rovidan oldin boshidagi `*.` olib tashlanadi — bu integratsiya tomonidan hech qachon o'rnatilmaydi. Cloudwaysda wildcard sertifikatidan foydalanish uchun uni qo'lda o'rnatishingiz kerak bo'ladi, ammo bunga ko'ra xarajatli domenlar (mapped custom domains) uchun Let's Encrypt sertifikati berish bloklanadi (quyidagi xavfni ko'ring).

## Qo'shimcha Domenlar (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` konstanti siz Cloudways ilovasi alias ro'yxatida doim saqlanishi kerak bo'lgan qo'shimcha **tashqi** domenlarni belgilashingizga imkon beradi. Quyidagilar uchun buni ishlating:

- Ultimate Multisite tomonidan boshqarilmaydigan tashqi domenlar (masalan, bir xil Cloudways ilovasini ulashgan alohida marketing sayti).
- Ilova alias ro'yxatida saqlanishini istagan parklangan yoki staging domenlari.

O'zingizning tarmog'ingiz uchun subdomain wildcardidan (masalan, `*.your-network.com`) bu konstantdan foydalanmang. Wildcard SSL xavfini quyida ko'ring.

## Muhim — Wildcard SSL Xavfi {#important--wildcard-ssl-pitfall}

Cloudwaysning standart sozlamasiga amal qilganda uchraydigan keng tarqalgan xato shuki, `WU_CLOUDWAYS_EXTRA_DOMAINS` ga `*.your-network.com` kabi wildcard qo'shish yoki ushbu wildcard uchun Cloudwaysda qo'lda SSL sertifikatini o'rnatishdir.

**Agar siz bunga amal qilsangiz, Cloudways Ultimate Multisite tomonidan xaritalangan har bir mijoz domenlari uchun Let's Encrypt sertifikatlarini berishni rad etadi.** Cloudways ilovadagi faol SSL sertifikatini har safar almashtiradi va ilovada mavjud bo'lgan oldindan mavjud wildcard sertifikati integratsiyaning ishonadigan har bir domen uchun Let's Encrypt sertifikatini berishini bloklaydi.

### Ultimate Multisite tarmog'i uchun Cloudways SSL tavsiya etilgan sozlamasi {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ilovchasida **SSL Sertifikati** yorlig'ida, faqat `your-network.com` va `www.your-network.com` domenlarini qamrab oluvchi **standart Let's Encrypt sertifikatini** o'rnating. — *wildcard (yulduzli) sertifikatni emas.*
2. `*.your-network.com` (yoki sizning tarmoqning istalgan sousubdomainlar shablonlari) ni `WU_CLOUDWAYS_EXTRA_DOMAINS` ga qo'ymang. Bu konstantni faqat **tashqi** domenlar uchun saqlab qoling.
3. Subdomenlarni aniqlash uchun (ya'ni, sousitelarni ishlatish uchun) **DNS** darajasida faqat per-tenant wildcard subdomenini yarating (`*.your-network.com` uchun `A` rejasi sizning Cloudways server IP manzilingizga yo'naltirilgan bo'lishi kerak). Shundan so'ng, individual xarita qilingan maxsus domenlar uchun SSL avtomatik ravishda Let's Encrypt orqali beriladi.

Agar loyihangizdagi mijozlarning maxsus domenlari SSL bilan muammoga duch kelsa va ular SSLga ega bo'lmasa, Cloudways SSL yorlig'ini tekshiring. Agar u yerda wildcard sertifikati faol bo'lsa, uni o'chiring, asosiy tarmoq domeni uchun standart Let's Encrypt sertifikatini qayta chiqarib bering va `WU_CLOUDWAYS_EXTRA_DOMAINS` dan har qanday wildcard kirishlarini olib tashlang. Keyin domen xaritasi (mapping)ni qayta ishga tushiring (yoki keyingi birini kutib turing), va integratsiya yana domainlar uchun sertifikatlar chiqarishni boshlaydi.

## Muammolarni hal qilish {#troubleshooting}

### API Bog'lanish muammolari {#api-connection-issues}
- Emailingiz va API kalitingiz to'g'ri ekanligini tekshiring.
- Server va ilova IDlaringizning to'g'ri ekanligini tekshiring.
- Cloudways hisobingizda kerakli ruxsatnomalar mavjudligiga ishonch hosil qiling.

### SSL Sertifikat Masalalari {#ssl-certificate-issues}

- Cloudways, SSL sertifikatlari berishdan oldin domenlarning serveringizga yo'naltirilgan amal qiladigan DNS yozuvlariga ega bo'lishini talab qiladi.
- Integratsiya SSL sertifikatlari so'rashdan oldin DNS yozuvlarini tekshiradi.
- Agar SSL sertifikatlari berilmasa, domenlaringizning serveringiz IP manziliga to'g'ri yo'naltirilganligini tekshiring.
- **SSLsiz qolgan per-tenant maxsus domenlar?** Cloudways ilovasi SSL Sertifikat (SSL Certificate) yorlig'idan tekshiring. Agar kengaytirilgan sertifikat (qo'lda o'rnatilgan yoki `*.your-network.com` ni qamrab oluvchi) faol bo'lsa, Cloudways individual xaritalangan maxsus domenlar uchun Let's Encrypt sertifikatlari bermaydi. Buni asosiy tarmoq domeni (`your-network.com`, `www.your-network.com`)ni qamrab oluvchi standart Let's Encrypt sertifikati bilan almashtiring va `WU_CLOUDWAYS_EXTRA_DOMAINS` dan har qanday kengaytirilgan kirishlarni o'chiring. Keyin domen xaritalanishini qayta ishga tushiring (yoki keyingi birini kutib turing) va integratsiya domainlar uchun sertifikat so'raydi.

### Domen Qo'shilmagan {#domain-not-added}
- Ultimate Multisite loglarida har qanday xatolik xabarlari bormi tekshiring.
- Domen Cloudwaysga allaqachon qo'shilmaganligini tasdiqlang.
- Sizning Cloudways reitingiz qo'shmoqchi bo'lgan domenlar sonini qo'llab-quvvatlayotganligiga ishonch hosil qiling.
