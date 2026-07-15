---
title: CyberPanel-ийн нэгтгэл
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Энэхүү гарын авлага нь Ultimate Multisite-ийн CyberPanel интеграцийг хэрхэн тохируулахыг тайлж байна. Энэ нь таны сүлжээнд байгаа домен шүүлтүүр (mapped domains)-ийг CyberPanel дээр виртуальный хост болгон автоматаар нэмэх (багасах) боломжийг, мөн Let's Encrypt-ээр SSL-ийг автоматаар олгох сонголтыг багтаасан юм.

## Яаж ажилладаг вэ? {#what-it-does}

- Ultimate Multisite-д домен шүүлтүүр (domain) нэмэгдэх үед, интеграцийн систем нь тухайн доменд зориулсан виртуальный хостын үүсгэхийн тулд CyberPanel API-ийг дуудна.
- Домен шүүлтүүрийг хасна (remove) үед, интеграцийн систем нь харгалзах виртуальный хостыг устгахын тулд API-д дуудлага хийнэ.
- Автомат SSL-ийг идэвхжүүлсэн бол, интеграци нь виртуальный хостын үүсгэгдсэний дараа Let's Encrypt-ийн сертификаты олголтыг шууд эхлүүлнэ.
- Домен шүүлтүүрийн тохиргоо (Domain Mapping settings)-д байгаа "Auto-create www subdomain" тохиргооны үндсэн дээр `www.` алиасыг нэмэх эсвэл хасах боломжтой.

## Хэрэгтэй зүйлс (Prerequisites) {#prerequisites}

- Ажиллаж буй CyberPanel үйлчилгээ (2.3 эсвэл түүнээс дээш хувилбар зөвлөгдсөн). Энэ нь таны WordPress серверээс хүртэгдэх ёстой.
- CyberPanel дээр аль хэдийн таны WordPress сүлжээний үндсэн (root) байрлалыг үйлчилж буй вебсайт байх ёстой. Интеграци нь шинэ виртуальный хостүүдийг энэ серверт холбоно.
- CyberPanel API-ийн хандалтыг идэвхжүүлсэн байх. Баталгаажуулалт нь таны CyberPanel администраторын хэрэглэгчийн нэр болон нууц үгийг ашиглана.
- Автомат SSL олгохоос өмнө, домен шүүлтүүрүүдийн DNS бүрт таны серверийн IP хаяг заасан байх шаардлагатай.

## Шаардлага (Requirements) {#requirements}

Дараах тогтмол утгуудыг `wp-config.php` файлд тодорхойлох хэрэгтэй:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Мөн дараах зүйлсийг сонголттай тодорхойлох боломжтой:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Анхны утга: true — домен үүсгэсний дараа Let's Encrypt SSL-ийг ажиллуулах
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Анхны утга: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL сертификатын харилцааны зориулалт

## Тохиргооны зааврууд

### 1. CyberPanel API-г ажиллуулах

1. Администратор болгон өөрийн CyberPanel dashboard руу нэвтэрнэ үү.
2. **Security** > **SSL** руу орж, SSL нь CyberPanel интерфейс дээр идэвхтэй байгаа эсэхийг баталгаажуулна уу (аюулгүй API дуудлагын хувьд шаардлагатай).
3. CyberPanel API нь анхны тохиргоор `https://your-server-ip:8090/api/`-т байгаа. Үүнийг ажиллуулахын тулд нэмэлт алхам хийх шаардлагагүй — администратор хэрэглэгчдэд үүнийг анхны тохиргоор идэвхтэй байдаг.

### 2. wp-config.php-д тогтмол утгуудыг нэмэх

Дараах тогтмол утгуудыг `/* That's all, stop editing! */` мөрөөс өмнө `wp-config.php` файлд нэмнэ үү:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Автоматик SSL-ийг ажиллуулахын тулд (зөвлөгөө өгдөг):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Нэгтгэлийг ажиллуулах

1. WordPress-ийн сүлжээний администратор (network admin) руу орж, **Ultimate Multisite** > **Settings** руу очино уу.
2. **Domain Mapping** таб руу шилжин орно уу.
3. Доо талд байгаа **Host Integrations**-д доошоо уншиж үзнэ үү.
4. **CyberPanel** нэгтгэлийг идэвхжүүлэх.
5. **Save Changes**-ийг дарна уу.

### 4. Түгээлтийг шалгах

Тохиргооны wizard дотор байгаа дотоод холболтын шалгалт (built-in connection test)-ыг ашиглан шалгаж болно:
```

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ру орно.
2. **Test Connection**-ий товч.
3. Амжилттай мессеж нь plugin CyberPanel API-д хүрэх боломжтой бөгөөд зөв батлагдсаныг баталдаг.

## Хэрхэн ажилладаг вэ? {#setup-instructions}

### Domain Mapping (Домен тохируулга) {#1-enable-the-cyberpanel-api}

Ultimate Multisite-д домен тохируулсан үед:

1. Integration нь танай CyberPanel хост дээр `/api/createWebsite` руу `POST` хүсэлт илгээдэг.
2. CyberPanel тухайн домен дотор тохируулсан package-ийн дагуу шинэ virtual host (виртуал хост) үүсгэдэг.
3. Document root нь танай WordPress сүлжээний үндсэн каталог руу чиглүүлэхээр тохируулагддаг.
4. Домен тохируулгыг арилгахад, integration нь virtual host-ийг цэвэрлэхийн тулд `/api/deleteWebsite`-ийг дуудна.

### Auto-SSL (Автоматик SSL) {#2-add-constants-to-wp-configphp}

`WU_CYBERPANEL_AUTO_SSL` хувьсагч `true` байх үед:

1. Virtual host үүсгэгдсэн дараа, integration нь тухайн доменэд `/api/issueSSL`-ийг дуудна.
2. CyberPanel Let's Encrypt-ээс ACME HTTP-01 challenge ашиглан сертификат хүссэнэ.
3. Сертификат нь CyberPanel-ээр хугацаа дуусахаас өмнө автоматаар шинэчлэгддэг.

> **Анхаарах зүйл:** Let's Encrypt домен дээр шалгахын тулд DNS нь танай серверний IP хаягт бүрэн тархсан байх ёстой. Хэрэв тохируулсны дараа SSL-ийг шууд гаргахад алдаа гарвал, DNS-ийн тархалтыг хүлээгээд **SSL** > **Manage SSL** дотор CyberPanel-ийн dashboard-оос SSL-ийг дахин идэвхжүүлээрэй.

### www Subdomain (www дэддомен) {#3-enable-the-integration}

Domain Mapping тохиргоонд **Auto-create www subdomain** асаасан бол, integration нь `www.<domain>`-д зориулсан virtual host alias үүсгэдэг бөгөөд Auto-SSL асаатай байвал apex болон www хувилбаруудыг бүгдийг хамарсан сертификат олгодог.

### Email Forwarders (Имэйл удирдах) {#4-verify-connectivity}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) аддон идэвхтэй байх үед CyberPanel нь хэрэглэгчдийн цахим шуудан (email forwarders) үйлчилгээ үзүүлэх боломжийг олгодог. Forwarder нь бүрэн халаагүйгээр, нэг дорны хаягаас ирсэн мессеж бусад халааны хаяг руу чиглүүлдэг бөгөөд энэ нь `info@customer-domain.test` эсвэл `support@customer-domain.test` зэрэг аливаа аливаа алдааны (aliases) хувьд хэрэглэхэд тохиромжтой юм.

Хэрэглэгчдэд forwarder идэвхтэй болгохоос өмнө:

1. Дээр дурдсан CyberPanel тогтмол утгууд тохирсон эсэхийг баталгаажуулж, холболтын шалгалт амжилтанд хүрснийг шалгана уу.
2. Emails аддоны тохиргооноос CyberPanel email provider-ийг идэвхтэй болгоно.
3. Forwarder үүсгэхээс өмнө тухайн хэрэглэгчийн домен CyberPanel дээр аль хэдийн байгаа эсэхийг баталгаажуулна уу.
4. Тест forwarder үүсгээд түүрөө дамжуулан мессеж илгээж үзээд, дараа нь энэ функцийг production (үнэ төлбөлттэй) планах дээр санал болгоно.

Хэрэв forwarder үүсгэхэд алдаа гарвал эхлээд Ultimate Multisite-ийн activity logs-ыг шалгана уу, дараа нь CyberPanel дээр тухайн эх сурвалж домен байгаа эсэхийг баталгаажуулж, API user-т email-management эрх байгаа эсэхийг шалгана уу.

## Тохиргооны дурсгалт {#how-it-works}

| Constant | Шаардлагатай | Анхны утга | Үзүүлбэр |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Тийм | — | Порт, жишээлбэл: `https://cp.example.com:8090` зэрэг CyberPanel-ийн бүрэн URL |
| `WU_CYBERPANEL_USERNAME` | Тийм | — | CyberPanel администраторын хэрэглэгчийн нэр |
| `WU_CYBERPANEL_PASSWORD` | Тийм | — | CyberPanel администраторын нууц үг |
| `WU_CYBERPANEL_PACKAGE` | Тийм | `Default` | Шинэ virtual host-д олгох CyberPanel хостинг пакет |
| `WU_CYBERPANEL_AUTO_SSL` | Үгүй | `true` | Домен үүсгэсний дараа Let's Encrypt SSL сертификат оруулах |
| `WU_CYBERPANEL_PHP_VERSION` | Үгүй | `PHP 8.2` | Шинэ virtual host-д ашиглах PHP хувилбар (CyberPanel дээр суурилуулсан хувилбартай таарч байх ёстой) |
| `WU_CYBERPANEL_EMAIL` | Үгүй | — | SSL сертификат бүртгэлд хандах контакт email |

## Чухал анхаарах зүйлс {#domain-mapping}

CyberPanel API нь сессион бодлоготой токен (session-based token) ашигладаг. Энэ интеграци нь API дуудлага бүрт токенийг автоматаар авч байна.
Таны CyberPanel администратор хэрэглэгчийн аккаунтод вэбсайт үүсгэх, устгах эрх байх ёстой.
CyberPanel анх `8090` портоор ажилладаг. Хэрэв таны серверт фаервол (firewall) ашиглаж байгаа бол энэ порты WordPress-ийн аппликейшн сервеерийн хандалтад боломжтой эсэхийг шалгана уу.
Энэ интеграци нь DNS бүртгэлүүдийг удирдахгүй. Ultimate Multisite-т доменыг тохируулахын өмнө таны домены DNS-ийг серверinizin IP хаягаар заах ёстой.
Хэрэв OpenLiteSpeed (OLS) ашиглаж байгаа бол виртуальный хост (virtual host)-ыг өөрчилсөн дараа автоматаар сайхан (graceful) эхлүүлэх үйлдэл хийгдэнэ. Ямар ч гараар оролдох шаардлагагүй.

## Асуудал шийдэх {#auto-ssl}

### API холболт тасарсан байна (API Connection Refused) {#www-subdomain}

- Таны сервер фаерволд `8090` порт нээлттэй байгаа эсэхийг шалгана уу.
- `WU_CYBERPANEL_HOST` утгад зөв протокол (`https://`) болон порты багтсан эсэхийг баталгаажуулна уу.
- Таны CyberPanel SSL сертификат хүчинтэй эсэхийг шалгана уу; өөрөө гаргасан (self-signed) сертификатууд TLS шалгах алдаа үүсгэх боломжтой. Зөвхөн итгэлтэй нутагт (trusted private network) `WU_CYBERPANEL_VERIFY_SSL`-ийг `false` болгоно.

### Баталгаажуулалт алдаа гарсан байна (Authentication Errors) {#email-forwarders}

- CyberPanel руу шууд логин хийж байгаа эсэхийг шалгана уу, ингэснээр таны `WU_CYBERPANEL_USERNAME` болон `WU_CYBERPANEL_PASSWORD` зөв байгаа эсэхийг баталгаажуулна.
- CyberPanel нь давхардсан алдаатай логин оролдлого хийсний дараа аккаунтыг хаадаг. Хэрэв ийм тохиолдол гарвал CyberPanel-ийн **Security** > **Brute Force Monitor** хэсгийг шалгана уу.

### Домен үүсгээгүй байна (Domain Not Created) {#configuration-reference}

- API алдаа мессежүүдийг Ultimate Multisite-ын activity log (**Ultimate Multisite** > **Activity Logs**) -оос шалгана уу.
- `WU_CYBERPANEL_PACKAGE`-д тодорхойлогдсон пакет CyberPanel-д байгаа эсэхийг баталгаажуулна уу (**Packages** > **List Packages**).
- Домен нь CyberPanel дээр аль хэдийн вэбсайт болгож бүртгэгдээгүй эсэхийг шалгана уу — давхардсан вэбсайтыг үүсгэхэд алдаа гардаг.

### SSL Сертификат олгоогүй байна (SSL Certificate Not Issued) {#important-notes}

DNS бүрэн тархсан эсэхийг баталгаажуулаарай: `dig +short your-domain.com` командыг ашиглан таны серверийн IP хаягийг гаргаж ирнэ эсэхийг шалгана уу.
Let's Encrypt нь хурдны хязгаар (rate limits) тавьдаг. Хэрэв та саяхан ижил доменэд хэд хэдэн сертификат олгосон бол дахин орохоос өмнө хүлээх хэрэгтэй.
Сертификат олгох алдаа тухай дэлгэрэнгүй мэдээллийг **Logs** > **Error Logs**-д байгаа CyberPanel-ийн SSL логуудыг шалгана уу.
Хэрвээ дээрх арга ажиллахгүй бол та CyberPanel-ээс SSL-ийг гараар олгож болно: **SSL** > **Manage SSL** > домен сонгох > **Issue SSL**.

## Эх сурвалжууд {#troubleshooting}

- CyberPanel API Документаци: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Удирдах: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Хурдны хязгаар: https://letsencrypt.org/docs/rate-limits/
