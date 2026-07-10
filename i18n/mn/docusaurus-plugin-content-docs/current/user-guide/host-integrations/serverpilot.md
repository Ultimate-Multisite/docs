---
title: ServerPilot-ийн интеграц
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Нэгтгэл {#serverpilot-integration}

## Ерөнхий өгүүлэл {#overview}
ServerPilot нь DigitalOcean, Amazon, Google эсвэл бусад серверүүд дээр WordPress болон бусад PHP вэбсайтуудыг хостлохын тулд зориулсан cloud үйлчилгээ юм. Энэхүү нэгтгэл нь Ultimate Multisite болон ServerPilot-ийн хоорондох домен синхронизуулалт болон SSL сертификатын удирдлагыг автоматаар хийхийг ашигладаг.

## Онцлог {#features}
- Доменин автоматаар синхронируулга
- Let's Encrypt-ээр SSL сертификатыг удирдах
- SSL-ийн автоматаар шинэчлэлт

## Шаардлага {#requirements}
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор тодорхойлох шаардлагатай:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Тохируулах заавар {#setup-instructions}

### 1. Таны ServerPilot API баримт бичгийг авах {#1-get-your-serverpilot-api-credentials}

1. Таны ServerPilot dashboard руу нэвтэрнэ үү.
2. "Account" > "API" руу орно.
3. Хэрэв танд API key байхгүй бол шинэ API key үүсгэнэ.
4. Client ID болон API Key-ээ хуулна уу.

### 2. Таны App ID-г авах {#2-get-your-app-id}

1. ServerPilot dashboard дээр "Apps" руу орно.
2. Таны WordPress multisite хостлогдсон аппликейшний сонголтыг хийнэ.
3. App ID нь URL дотор харагдана: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php руу тогтмол утгуудыг нэмэх {#3-add-constants-to-wp-configphp}

Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор нэмнэ үү:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Нэгтгэлийг идэвхжүүлэх {#4-enable-the-integration}

1. Таны WordPress admin-д Ultimate Multisite > Settings руу орно.
2. "Domain Mapping" таб руу шилжинэ үү.
3. "Host Integrations"-ийн доор урагш шилжих хэрэгтэй.
4. ServerPilot нэгтгэлийг идэвхжүүлнэ үү.
5. "Save Changes" (Өөрчлөлт хадгалах) товчийг дарна уу.

## Хэрхэн ажилладаг вэ {#how-it-works}

### Доменин синхронируулга {#domain-syncing}

Ultimate Multisite-т домен нэгтгэл хийгдэх үед:

1. Интеграци хийх үйлдэл нь ServerPilot-аас одоогийн доменүүдийн жагсаалтыг авдаг.
2. Энэ интеграци нь шинэ доментийг жагсаалтад нэмнэ (хэрэв тохиромжтой бол www хувилбарыг мөн хамт).
3. Өөрчлөгдсөн жагсаалтыг API-ээр дамжуулан ServerPilot руу илгээдэг.
4. ServerPilot таны аппликейшн домен жагсаалтыг шинэчилдэг.

### SSL Сертификатын Удирдах {#ssl-certificate-management}

Доменүүд синхрохоос хойш:

1. Интеграци нь таны аппликейшнд AutoSSL-ийг автоматаар идэвхжүүлдэг.
2. ServerPilot Let's Encrypt ашиглан SSL сертификат олгох, суулгах үйлдлийг хийдэг.
3. ServerPilot SSL сертификатуудыг автоматаар шинэчлэх ажлыг ч гүйцэтгэдэг.

## SSL Сертификатыг Баталгаажуулах {#ssl-certificate-verification}

Интеграци нь ServerPilot-д SSL сертификатын баталгаажуулалтын оролдлого (verification attempts) тоог нэмэгдүүлэхээр тохируулсан. Учир нь ServerPilot SSL сертификат олгож, суулгах хэдэн цаг хугацаа шаарч болно. Анхны тохиргоо 5 удаа хүртэл оролдохыг хичээдэг боловч фильтр ашиглан үүнийг өөрчилж болно.

## Асуудал шийдэх (Troubleshooting) {#troubleshooting}

### API холболтын асуудлууд {#api-connection-issues}
- Таны Client ID ба API Key зөв байгаа эсэхийг шалгана.
- Таны App ID зөв байгаа эсэхийг шалгана.
- Таны ServerPilot аккаунд шаардлагатай эрхүүд байгаа эсэхийг баталгаажуулаарай.

### SSL Сертификатын асуудлууд {#ssl-certificate-issues}
- ServerPilot нь SSL сертификат олгохоос өмнө доменүүдийн DNS бүрт таны сервер рүү зөв заасан (valid) бичилт байх шаарддаг.
- Хэрэв SSL сертификатууд олгогдоогүй бол таны доменүүд таны серверийн IP хаягт зөв зааж байгаа эсэхийг шалгана уу.
- ServerPilot нь SSL сертификатыг олгох, суулгах хэдэн цаг хугацаа шаарч болно (ихэвчлэн 5-15 минут).

### Домен нэмэгдээгүй {#domain-not-added}
- Ultimate Multisite-ийн logs-оос ямар нэг алдааны мессеж байгаа эсэхийг шалгана.
- Тухайн домен ServerPilot-т аль хэдийн нэмэгдсэн эсэхийг баталгаажуулна уу.
- Таны ServerPilot төлөвлөгөө та нэмж буй доменүүдийн тоог дэмждэг эсэхийг шалгана уу.

### Доменг арилгах {#domain-removal}

- Одоогоор ServerPilot API нь тусгай доменүүдийг гаргах аргагүй байна.
- Ultimate Multisite-д домен хамаарлыг (domain mapping) арилгасны дараа, интеграцийн систем нь арилгасан доменээ ServerPilot-ийн домен жагсаалтаас гаргаж өөрчлөлт хийх болно.
