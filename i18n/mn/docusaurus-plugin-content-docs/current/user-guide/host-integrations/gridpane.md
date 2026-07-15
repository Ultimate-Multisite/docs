---
title: GridPane-ийн нийлүүлэлт
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane-ийн нийлүүлэлт (Integration)

## Ерөнхий ойлголт {#overview}
GridPane нь зөвхөн WordPress мэргэжилтнүүдэд зориулсан, онцгой бүтээгдсэн WordPress хостинг удирдлагын панель юм. Энэхүү нийлүүлэлт нь Ultimate Multisite болон GridPane-ийн хооронд таны домен (domain) автоматаар синхрончлагдахаас гадна SSL сертификатын удирдлагыг хийх боломжийг олгодог.

## Онцлог шинжүүд {#features}
- Домены автоматаар синхрончлах
- SSL сертификатыг удирдах
- SUNRISE тогтмол утгуудыг (constant) автоматаар тохируулах

## Шаардлага {#requirements}
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор тодорхойлох шаардлагатай:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Тохируулах зааврууд {#setup-instructions}

### 1. Таны GridPane API баримт бичгийг авах {#1-get-your-gridpane-api-credentials}
1. Таны GridPane dashboard руу логин хийх.
2. "Settings" > "API" руу орно.
3. Хэрэв танд API key байхгүй бол API key үүсгэх.
4. Таны API key-г хуулж авна уу.

### 2. Таны Сервер болон Сайт ID-г авах {#2-get-your-server-and-site-ids}
1. GridPane dashboard дээр "Servers" руу орно.
2. Таны WordPress multisite байрласан серверыг сонгоно.
3. Server ID-г анхаарна уу (URL дотор эсвэл сервер дуудлага хуудасны дэлгэрэнгүй мэдээлэлд харагдана).
4. "Sites" руу орж таны WordPress сайтыг сонгоно.
5. Site ID-г анхаарна уу (URL дотор эсвэл сайт дуудлага хуудасны дэлгэрэнгүй мэдээлэлд харагдана).

### 3. wp-config.php руу тогтмол утгуудыг нэмэх {#3-add-constants-to-wp-configphp}
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор нэмнэ үү:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Нэгтгэлийг идэвхжүүлэх {#4-enable-the-integration}
1. Таны WordPress admin-д Ultimate Multisite > Settings руу орно.
2. "Domain Mapping" таб руу шилжинэ.
3. Доо руу урагшираад "Host Integrations"-ыг харна уу.
4. GridPane нийлүүлэлтийг идэвхжүүлэх.
5. "Save Changes" (Өөрчлөлтөө хадгалах) товчийг дарна уу.

## Энэ хэрхэн ажилладаг вэ? {#how-it-works}

Ultimate Multisite-т домен тааруулагдахад:

1. Интеграцийн хувьд таны домен дээр нэрийг оруулахын тулд GridPane-ийн API руу хүсэлт илгээдэг.
2. GridPane автоматаар SSL сертификатын тохиргоог хийдэг.
3. Домен хослолыг арилгахад, интеграцийн хувьд доменээ GridPane-оос арилгана.

Интеграци нь таны wp-config.php файлд шаардлагатай SUNRISE тогтмол утгыг автоматаар тохируулдаг.

## SUNRISE Тогтмолыг Удирдах {#sunrise-constant-management}

GridPane интеграцийн өвөрмөц онцлог бол GridPane-ийн домен хослолын системтэй зөрчилдөхгүй байхын тулд wp-config.php файлд байгаа SUNRISE тогтмолыг автоматаар буцааж өөрчилдөг явдал юм. Энэ нь хоёр систем асуудалгүй хамтран ажиллах боломжийг олгодог.

## Асуудал Олох (Troubleshooting) {#troubleshooting}

### API Холбоос Зөрүүтэй Үед {#api-connection-issues}
- Таны API key зөв байгаа эсэхийг шалгана.
- Таны сервер болон сайт ID зөв байгаа эсэхийг шалгана.
- Таны GridPane аккаунд шаардлагатай эрхүүд байгаа эсэхийг баталгаажуулна.

### SSL Сертификатын Асуудал Үед {#ssl-certificate-issues}
- GridPane нь SSL сертификат олгоход зарим цаг хугацаа шаардах боломжтой.
- Таны доменүүд серверinizin IP хаяг руу зөв чиглэсэн эсэхийг баталгаажуулна.
- Таны сайтын GridPane SSL тохиргоог шалгана.

### Домен Нэмэгдээгүй Үед {#domain-not-added}
- Ultimate Multisite логуудаас ямар нэгэн алдаа мессеж байгаа эсэхийг шалгана.
- Домен аль хэдийн GridPane-д нэмэгдсэн эсэхийг баталгаажуулна.
- Таны доменийн DNS бүрт зөв тохиргоо хийгдсэн эсэхийг шалгана.
