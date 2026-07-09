---
title: Удирдлагын тавцан интеграцийг сайжруулах
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Удирдах панель (Control Panel) интеграцийг сайжруулах {#enhance-control-panel-integration}

## Ерөнхий өгүүлэл {#overview}
Enhance нь хүчирхэг хостинг автоматаар удирдах болон менежлэх чадвартай орчин үеийн удирдлагын панели юм. Энэхүү интеграци нь Ultimate Multisite болон Enhance Control Panel-ийн хоорондох талбаруудыг автомат синхро хийх, SSL сертификатын удирдлагыг хийх боломжийг олгодог.

**Холбоотой хэлэлцүүлэг:** Олон нийтийн зөвлөмж ба нэмэлт мэдээллийн хувьд [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)-ийг үзнэ үү.

## Онцлог {#features}
- Ultimate Multisite-д доменүүдийг тохируулсны дараа домены автоматаар синхродох
- DNS шийдэгдэх үед LetsEncrypt-ээр SSL сертификат автоматаар олгогдох
- Домен дээр ажилладаг сүлжээний хувьд дэддомын (subdomain) дэмжлэг үзэх
- Тохируулга устгахад домены хасагдах
- API зөвшөөрлийг шалгах зорилгоор холболтын шалгалт хийх

## Шаардлага {#requirements}

### Системийн шаардлагууд {#system-requirements}
- Enhance Control Panel суурилуулсан бөгөөд хүртээмжтэй байх
- Enhance сервер дээр эсвэл түүнтэй холбогдсон WordPress Multisite суулгалт
- Apache веб сервэр (Enhance одоогоор Apache конфигурацийг дэмждэг; LiteSpeed Enterprise нь бусад хямд үнээр боломжтой)

### API хандалт {#api-access}
API токен үүсгэхийн тулд Enhance Control Panel-ийн администратор эрхтэй байх шаардлагатай.

## API зөвшөөрөл авч авах {#getting-your-api-credentials}

### 1. API Токен үүсгэх {#1-create-an-api-token}

1. Администратор болгон Enhance Control Panel руу нэвтэрнэ.
2. Навигацийн цэснээс **Settings** (Тохиргоо)-ыг дарна.
3. **Access Tokens** (Хандах токен) хэсэг рүү орно.
4. **Create Token** (Токен үүсгэх)-ыг дарна.
5. Токенд тодорхой нэр өгнө (жишээлбэл, "Ultimate Multisite Integration").
6. **System Administrator** (Системийн администратор) ролийг онооно.
7. Хугацаа дуусах огнооны хувьд:
   - Токен хэзээ ч дуусаагүй байхыг хүсвэл хоосон үлдээнэ.
   - Эсвэл аюулгүй байдлын зорилгоор тодорхой хугацаа дуусах огноо тогтооно.
8. **Create** (Үүсгэх)-ыг дарна.

Үүсгэсний дараа таны **Access Token** болон **Organization ID** харагдана. Эдгээрийг **оронд нь хадгалаарай**, учир нь токен нэг удаа л харагдах юм.

### 2. Өөрийн Organization ID-г авах {#2-get-your-organization-id}

Organization ID нь "Org ID: {your_id}" гэсэн цэнхэр мэдээллийн хайрцагт Access Tokens хуудсан дээр харагдана.

Organization ID нь дараах хэлбэртэй UUID (Уникий код) юм: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Та мөн үйлчлэгчийн Organization ID-г дараах аргаар олж болно:
1. **Customers** хууд руу орно.
2. Тухайн үйлчлэгчийг сонгоод **Manage customer** (Үйлчлэгчийг удирдах) дээр дарна.
3. URL-ийг харвал Organization ID нь `/customers/`-ээс дараах үсэг, тоо бүхий хэсэг юм.

### 3. Өөрийн Server ID-г авах {#3-get-your-server-id}

Server ID (доментэй холбоотой үйлдлүүдэд шаардлагатай) олохын тулд:

1. Enhance Control Panel дотор **Servers** руу орно.
2. Таны WordPress суулгагдсан сервер дээр дарна.
3. Server ID (UUID хэлбэрээр) URL-д эсвэл сервер дэлгэрэнгүй мэдээлэлд харагдана.
4. Эсвэл та API ашиглан серверүүдийг жагсаж болно:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID нь дараах UUID хэлбэртэй байна: `00000000-0000-0000-0000-000000000000`

### 4. Өөрийн API URL-г авах {#4-get-your-api-url}

Таны API URL нь Enhance Control Panel URL дээр `/api/`-г нэмсэн байдаг:

```
https://your-enhance-panel.com/api/
```

**Анхаарах зүйл:** `/api/` зам (path) шаардлагатай. Ерөнхий алдаанууд нь:
- `/api/`-ггүйгээр зөвхөн домен ашиглах.
- Аюулгүй байдлын үүднээс HTTP-ийн оронд HTTPS-ийг ашиглах (HTTPS шаардлагатай).

## Тохиргоо {#configuration}

### Шаардлагатай тогтмол утгууд (Required Constants) {#required-constants}

Дараах тогтмол утгуудыг таны `wp-config.php` файл руу нэмнэ үү:

// Удирдах хяналтын самбарын нэгтгэлийг сайжруулах
define('WU_ENHANCE_API_TOKEN', 'танай-bearer-token-ийг-энд');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'танай-server-uuid-ийг-энд');

### Нэгтгэлийн аргаар тохируулах {#setup-via-integration-wizard}

1. WordPress-ийн администратор руу орж, **Ultimate Multisite** > **Settings** руу очоод
2. **Integrations** таб руу орно.
3. **Enhance Control Panel Integration**-ийг олж, **Configuration** дээр дарна.
4. Удирдах үйл явц таныг дараах алхамаар удиргана:
   - **Алхам 1:** Танилцуулга ба онцлог шинжилгээ
   - **Алхам 2:** API нууцлал (Token, API URL, Server ID)-ийг оруулна
   - **Алхам 3:** Холбоог шалгах
   - **Алхам 4:** Шалгалт хийж идэвхжүүлэх

Та дараах сонголтуудыг хийж болно:
- Удирдах үйл явц нь эдгээр константнуудыг таны `wp-config.php` файл руу автоматаар оруулна уу
- Констант нарийвчлалыг хуулж, өөрөө гараар нэмнэ

## Нэмэлт WordPress тохиргоо {#additional-wordpress-configuration}

Байгууллагын санал ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) -ийн дагуу, та эдгээр нэмэлт тохиргоог хийх шаардлагатай байж болно:

### .htaccess Тохиргоо {#htaccess-configuration}

Домен хамаарал үүсэх асуудал гарвал:
1. Анхны Enhance `.htaccess` файлыг устгана
2. Стандарт WordPress Multisite `.htaccess` файлтай солино

### Cookie Констант {#cookie-constants}

Хамгийн зөв cookie-ийн удирдлагыг хангахаар эдгээр константнуудыг `wp-config.php`-д нэмнэ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Ажиллах зарчим {#how-it-works}

### Домен хамаарал үүсэх үед {#when-a-domain-is-mapped}

1. Ultimate Multisite (эсвэл subdomain модел дээр шинэ сайт үүсгэсэн) дотор хэрэглэгч өөрийн тохируулсан домен нэрийг холбодог.
2. Энэхүү интеграци нь Enhance API-д POST хүсэлт илгээдэг: `/servers/{server_id}/domains`
3. Enhance тухайн доменээ таны сервер тохиргоонд нэмнэ.
4. DNS таны серврт шилжих үед, Enhance автоматаар LetsEncrypt-ээр SSL сертификат олгодог.
5. Домен HTTPS ашиглан идэвхтэй болно.

### Домен хасна гэх үед {#when-a-domain-is-removed}

1. Ultimate Multisite дотор домен холболтыг устгана.
2. Интеграци нь Enhance-д тухайн доменийн ID-г олохын тулд асуулга хийж байна.
3. `/servers/{server_id}/domains/{domain_id}` руу DELETE хүсэлт илгээх.
4. Enhance тухайн доменээ таны сервер тохиргоонд устгана.

### DNS болон SSL шалгалт {#dns-and-ssl-checking}

Ultimate Multisite-д DNS болон SSL шалгалт багцлаг байна:
- Шалгах хугацааг **Domain Mapping Settings** (анх утга: 300 секунд/5 минут) дотор тохируулах боломжтой.
- Систем нь домен идэвхтэй болгохоос өмнө DNS-ийн тархалтыг шалгана.
- SSL сертификатын үйл явцыг автоматаар шалгадаг.
- Enhance нь SSL олголтыг автоматаар хийдэг тул гараар SSL тохируулах шаардлагагүй.

## Тохиргоог баталгаажуулах {#verifying-setup}

### Холбоог турших {#test-the-connection}

1. Интеграцийн Wizard дотор **Test Connection** алхмыг ашиглана уу.
2. Плагин таны сервер дээр байгаа доменүүдийг жагсаахад оролддог.
3. Амжилттай мессеж дараах зүйл баталгаажуулна:
   - API credentials зөв байна
   - API URL хүртээмжтэй байна
   - Server ID үнэн байна
   - Зөвшөөрөл зөв тохируулагдсан

### Домен холбосон дараа {#after-mapping-a-domain}

1. Ultimate Multisite дотор туршилтын домен холбоно.
2. Ultimate Multisite-ийн логуудыг шалгана (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Enhance Control Panel дээр тухайн домен нэмэгдсэн эсэхийг баталгаажуулна:
   - **Servers** > **Your Server** > **Domains** руу орно
   - Шинэ домен жагсаалтад гарч ирнэ
4. DNS тархсан дараа SSL автоматаар олгогдсон эсэхийг шалгана

## Асуудал шийдэх (Troubleshooting) {#troubleshooting}

### API холболтын асуудлууд (API Connection Issues) {#api-connection-issues}

**Албан ёсны алдаа: "Enhance API-д холбогдох боломжгүй боллоо" ("Failed to connect to Enhance API")**
- `WU_ENHANCE_API_URL`-д `/api/` гэсэн төгсгөлтэй байгаа эсэхийг шалгана.
- HTTP биш, харин HTTPS ашиглаж байгаа эсэхийг баталгаажуулаарай.
- Enhance панел нь таны WordPress серверээс хүртэл нэвтрэх боломжтой эсэхийг шалгана уу.
- Холболтыг саад болгосон фаервол (firewall) дүрмүүд байгаа эсэхийг шалгаарай.

**Албан ёсны алдаа: "Enhance API токен олдсонгүй" ("Enhance API Token not found")**
- `wp-config.php`-д `WU_ENHANCE_API_TOKEN` тодорхойлогдсон эсэхийг шалгана уу.
- Enhance доторх токен нь устгагдаагүй, хугацаа дууссан эсэхийг баталгаажуулна уу.
- Токений утгын алдаа бичилт байгаа эсэхийг шалгана уу.

**Албан ёсны алдаа: "Сервер ID тохиргоогүй" ("Server ID is not configured")**
- `wp-config.php`-д `WU_ENHANCE_SERVER_ID` тодорхойлогдсон эсэхийг шалгана уу.
- Сервер ID нь зөв UUID форматтай байгаа эсэхийг баталгаажуулна уу.
- Тухайн сервер Enhance панелд байгаа эсэхийг баталгаажуулна уу.

### Домен нэмээгүй байх (Domain Not Added) {#domain-not-added}

**Лог шууд шалгах:**
1. **Ultimate Multisite** > **Logs** руу орно.
2. **integration-enhance** гэсэнээр шүүлтүүр хийнэ.
3. Асуудал үүсгэж буй алдаа мессежийг хайна уу.

**Үе шаттай шалтгаанууд:**
- Доменийн формат буруу байх.
- Домен Enhance дотор аль хэдийн байгаа байх.
- API эрхийн хангалтгүй байх (токенд System Administrator үүрэг байгаа эсэхийг баталгаажуулна уу).
- Сервер ID нь Enhance доторх бодит сервертэй таарахгүй байх.

### SSL Сертификатын асуудлууд (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL тохируулагдаагүй байх:**
- DNS нь таны серверийн IP хаяг руу чиглэж байгаа эсэхийг шалгана уу.
- Домен зөв шийдэгдэж байгаа эсэхийг шалгана: `nslookup yourdomain.com`
- Enhance SSL тохируулахын өмнө DNS нь шийдэгдэх ёстой.
- SSL тохируулалт нь DNS тархасны дараа ерөнхийдөө 5-10 минут зарцуулдаг.
- SSL-тэй холбоотой алдаануудыг Enhance Control Panel-ийн логт шалгана уу.

**Enhance дотор гараар SSL асуудлыг шийдэх:**
1. **Servers** > **Your Server** > **Domains** руу орно.
2. Таны доменыг олж, түүний SSL статусыг шалгана уу.
3. Хэрэгтэй бол та гараар SSL тохируулалтыг эхлүүлж болно.

### DNS Шалгах хугацаа (DNS Check Interval) {#dns-check-interval}

Домен эсвэл SSL сертификат идэвхэд хэтэрхий их хугацаа шаардвал:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** руу орно.
2. **DNS Check Interval** тохиргоог ол.
3. Үндсэн 300 секундээс бага утга руу (хамгийн багадаа: 10 секунд) өөрчил.
4. **Анхаарах зүйл:** Хурдан шалгах хугацаа нь илүү их байдаг боловч сервер дээр ачаалал нэмэгдэнэ.

### Нөхцөл байдлын алдаа (Authentication Errors) {#authentication-errors}

**HTTP 401/403 алдаанууд:**
- Enhance доторх API токеноо дахин үүсгэ.
- Токен дээр **System Administrator** эрх байгаа эсэхийг шалга.
- Токен хугацаа дууссан эсэхийг баталгаажуул.
- Зөв Organization ID-г ашиглаж байгаа эсэхийг шалга (URL-д ихэвчлэн шаарддаггүй ч).

### Лог шинжилгээ (Log Analysis) {#log-analysis}

Дэлгэрэнгүй логи-г идэвхжүүлээрэй:
```php
// илүү сайн багасгахын тулд wp-config.php руу нэмнэ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Дараа нь дараах газруудад логиг шалга:
- Ultimate Multisite лог: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance-ийн администратор интерфейсэд байгаа

## API Хавсралт (API Reference) {#api-reference}

### Нөхцөл байдлын баталгаажуулалт (Authentication) {#authentication}
Бүх API хүсэлтүүд Bearer токен ашиглан баталгаажуулдаг:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Үндсэн endpoints-үүд {#common-endpoints-used}

**Серверүүдийг жагсаах:**
```
GET /servers
```

**Сервер дээрх доменүүдийг жагсаах:**
```
GET /servers/{server_id}/domains
```

**Домен нэмэх:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Домен хасах:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Бүтэн API баримт (Full API Documentation) {#full-api-documentation}
Бүх API-ийн баримтыг үзэх: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Хамгийн сайн практик (Best Practices) {#best-practices}

### Аюулгүй байдал (Security) {#security}
- **API токенудыг хэзээ ч version control руу оруулаагүй байх**
- Токенуудыг `wp-config.php`-д хадгалах бөгөөд энэ файлыг Git-ээс гаргасан байх ёстой
- Зарлагын зөв эрхийтэй токен ашиглана (бүх интеграцийн хувьд System Administrator)
- Продакшн орчинд токений хугацаа дуусах огноог тогтооно
- Токенудыг цаг тухайн давтамжтайгаар солино

### Гүйцэтгэл (Performance) {#performance}
- Хэт их API дуудлагыг сэргийлэхийн тулд анхны DNS шалгах хугацааг (300 секунд) ашиглана
- Том хэмжээний домен үйлдлүүдийг гүйцэтгэж байх үед Enhance серверийн нөөцийг хянах нь зүйтэй
- Олон домены нэг дор тохируулах шаардлагатай бол домену дарааллаар нэмэх (staggering) боломжийг авч үзнэ

### Хяналт (Monitoring) {#monitoring}
- Интеграцийн алдаануудыг Ultimate Multisite логуудаас тогтмол шалгана
- Домен нэмэх явдал амжилтгүй болсон үед хяналтын системээ байгуулна
- SSL сертификатууд зөв хуваарилагдаж байгаа эсэхийг шалгана
- Enhance серверийн чадвар болон доменийн хязгаарыг анхаарч хар

## Нэмэлт нөөц (Additional Resources) {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** "How to Configure Domain Mapping v2" вики хуудсыг үзнэ үү

## Тусламж (Support) {#support}

Асуудал гарвал:
1. Дээрх Troubleshooting хэсгийг шалгана
2. Ultimate Multisite логуудыг үзнэ үү
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)-ийг харна уу
4. Панел-асаа холбоотой асуудлаар Enhance-д хандана уу
5. Олон нийтийн тусламж авахын тулд дэлгэрэнгүй алдааны логуудыг оруулсан шинэ хэлэлцүүлэг үүсгэнэ

Энэхүү интеграци нь зөвхөн домен аливаа нэршлэлтийг (domain aliases) зохицуулдаг; Enhance нь SSL-ийг автоматаар удирдан чиглүүлдэг.

Энэхүү интеграц нь өөрөө тохируулсан домен нэршлэлт болон дэддомен дээр суурилсан сайтуудыг хоёуланг нь дэмждэг.

Автомат www дэддомен үүсгэхийг Domain Mapping-ийн тохиргооноос тохируулж болно.

Enhance одоогоор Apache конфигурацийг дэмждэг (LiteSpeed Enterprise ашиглах боломжтой).

Ultimate Multisite-аас домен хасах үйлдэл нь Enhance-ээс тухайн домены хасна гэсэн үг боловч холбоотой SSL сертификатуудыг шууд устгахгүй байж болно.
