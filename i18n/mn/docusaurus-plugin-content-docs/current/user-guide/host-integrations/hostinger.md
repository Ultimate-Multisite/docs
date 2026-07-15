---
title: Хостинг (hPanel) интеграц
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Холбогчтой Нэгтгэх

## Ерөнхий өгүүлэл {#overview}

Hostinger бол hPanel гэх орчин үеийн удирдах талбартай алдартай вэб хостинг провайдер юм. Ultimate Multisite Hostinger integration нь Ultimate Multisite болон Hostinger-ийн hPanel хоорондын домен синхронизуулалтад автоматаар оролцох боломжийг олгодог бөгөөд ингэснээр та WordPress admin-аас шууд домен тохиргоо болон дэддоменүүдийг автоматжуулж удирдах боломжтой болно.

## Онцлог {#features}

- hPanel-д addon domain автоматаар үүсгэх
- hPanel-д дэддомен автоматаар үүсгэх (дэддомен multisite суулгалт хийх үед)
- Тохиргоо хасахад домен арилгах
- hPanel-ийн домен удирдах API-тай бдирд нэгтгэл

## Шаардлага {#requirements}

Hostinger integration-ыг ашиглахын тулд та дараах зүйлс шаардлагатай:

1. hPanel-тэй Hostinger аккаунт
2. Hostinger-ээс API token
3. `wp-config.php` файлд тодорхойлогдох дараах тогтмол утгууд:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Мөн сонголттойгоор дараах утгуудыг тодорхойлох боломжтой:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Анхны API endpoint
```

## Тохируулах заавар {#setup-instructions}

### 1. Таны Hostinger API Token-ыг үүсгэх {#1-generate-your-hostinger-api-token}

1. Таны Hostinger аккаунтод нэвтэрч hPanel руу орно.
2. **Account Settings** → **API Tokens** руу очих.
3. **Create New Token**-ыг дарна.
4. Таны токенд тодорхой нэр өгнө (жишээлбэл, "Ultimate Multisite").
5. Шаардлагатай эрхийг сонгоно:
   - Domain management (Домен удирдах)
   - Subdomain management (Дэддомен удирдах)
6. Үүссэн токеныг хуулж аваад аюулгүй хадгална.

### 2. Таны Account ID-г олох {#2-find-your-account-id}

1. hPanel-д **Account Settings** → **Account Information** руу очих.
2. Таны Account ID энэхүү хуудсан дээр гарч байна.
3. Дараагийн алхамд ашиглахаар үүнийг хуулж хадгална.

### 3. wp-config.php-т тогтмол утгуудыг нэмэх {#3-add-constants-to-wp-configphp}

Дараах тогтмол утгуудыг таны `wp-config.php` файл руу нэмнэ:

```php
define('WU_HOSTINGER_API_TOKEN', 'таашаар_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'таашаар_hostinger_account_id');
```

Хэрэв таны Hostinger аккаунт өөр API endpoint ашигладаг бол та үүнийг тохируулах боломжтой:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Интеграцийг идэвхжүүлэх {#4-enable-the-integration}

1. WordPress-ийн администратор руу орж, **Ultimate Multisite > Settings** руу очино уу
2. **Domain Mapping** таб руу шилжинэ үү
3. Доо руу шилжихэд **Host Integrations** гэсэн хэсгийг олъё
4. **Hostinger (hPanel)** интеграцийг идэвхжүүлнэ үү
5. **Save Changes**-д дарна уу

## Энэ яаж ажилладаг вэ? {#how-it-works}

### Addon Domains (Нэмэлт домен) {#addon-domains}

Ultimate Multisite дээр та домен тохируулснада:

1. Интеграцийн систем Hostinger API руу хүсэлт илгээж, тухайн домены нэмэлт домен болгон нэмнэ
2. Тухайн домен нь таны үндсэн хавтас руу чиглэсэн байдлаар тохируулагддаг
3. Домен маппинг (mapping) устгахад, интеграцийн систем hPanel-ээс тухайн нэмэлт домены автоматаар арилгана

### Subdomains (Поддоменүүд) {#subdomains}

Поддоменээр multisite суулгасан үед шинэ сайт үүсгэхэд:

1. Интеграцийн систем бүрэн доменээс поддомын хэсгийг гаргаж авна
2. Тухайн поддомыны нэмэлт байдлыг Hostinger API руу хүсэлт илгээж нэмнэ
3. Поддомен нь таны үндсэн хавтас руу чиглэсэн байдлаар тохируулагддаг

## Чухал анхаарах зүйлс {#important-notes}

- Интеграцийн систем таны аккаунтай холбогдохын тулд Hostinger-ийн REST API-г ашигладаг
- Таны API token нь домен болон поддомын удирдлагын шаардлагатай эрхийг агуулсан байх ёстой
- Интеграцийн систем DNS тохиргоо хийхгүй; доменүүдийг аль хэдийн таны Hostinger аккаунтод чиглүүлсэн байх ёстой
- API хүсэлтүүд HTTPS-ээр аюулгүйгээр хийгддэг
- Таны API token-ыг аюулгүй хадгалж, хэзээ ч олон нийтэд хуваалцахыг хориглоно уу

## Асуудал шийдэх (Troubleshooting) {#troubleshooting}

### API Connection Issues (API холболтын асуудлууд) {#api-connection-issues}

API токен зөв эсэхийг, хугацаа дууссан эсэхийг шалгана уу
Тороо ID таны зөв байгаа эсэхийг шалгана уу
Таны API токен домен удирдлагад шаардлагатай эрхүүдийг агуулж байгаа эсэхийг баталгаажуулаарай
Таны Hostinger аккаунт идэвхтэй, сайн байдалд байгааг баталгаажуулаарай

### Домен нэмээгүй үед {#domain-not-added}

- Ultimate Multisite логуудыг алдаа дуудлууд байгаа эсэхийг шалгана уу
- Домен таны Hostinger аккаунтод аль хэдийн нэмэгдсэн эсэхийг баталгаажуулна уу
- Таны Hostinger аккаунт доторх нэмэлт домен (addon domains) -ийн хязгаарыг давсан эсэхийг шалгана уу
- Домен таны Hostinger nameservereд зөв чиглүүлэгдсэн эсэхийг баталгаажуулна уу

### SSL Сертификатын асуудлууд {#ssl-certificate-issues}

- Энэхүү интеграци нь SSL сертификат олголтыг зохицуулдаггүй
- Hostinger ихэвчлэн AutoSSL-ээр үнэгүй SSL сертификатуудыг өгдөг
- Та hPanel дотор **SSL/TLS** хэсгээс шууд SSL сертификатуудыг удирдах боломжтой
- Эсвэл Hostinger-ийн AutoSSL функцтэй хамт Let's Encrypt-ийг ашиглаж болно

## Тусламж {#support}

Hostinger интеграцитай холбоотой нэмэлт тусламжийн хувьд дараах зүйлсийг үзнэ үү:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
