---
title: cPanel-ийн нийлүүлэлт
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel-тэй Интеграци {#cpanel-integration}

## Ерөнхий өгүүлэл {#overview}
cPanel нь олон хуваарь болон тусгай хостинг үйлчилгээ үзүүлэгчдийн ашигладаг хамгийн алдартай вэб хостинг удирдлагын талбарууд юм. Энэхүү интеграци нь Ultimate Multisite ба cPanel-ийн хоорондох домен синхронизацийг автоматаар хийж, таны cPanel аккаунтад домен аливаа нэр (alias) болон дэддомены автоматаар нэмэх боломжийг олгоно.

## Онцлог {#features}
- cPanel-д addon domain-ийг автоматаар үүсгэх
- cPanel-д дэддомен үүсгэх (дэддомен multisite суулгалт хийх үед)
- Тохиргоо хасагдахад домен арилгах

## Шаардлага {#requirements}
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор тодорхойлох шаардлагатай:

```php
define('WU_CPANEL_USERNAME', 'танай_cpanel_username');
define('WU_CPANEL_PASSWORD', 'танай_cpanel_password');
define('WU_CPANEL_HOST', 'танай_cpanel_host');
```

Мөн сонголттойгоор дараах утгуудыг тодорхойлох боломжтой:

```php
define('WU_CPANEL_PORT', 2083); // Анхны утга нь 2083 байна
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Анхны утга нь /public_html байна
```

## Тохируулах зааврууд {#setup-instructions}

### 1. Таны cPanel-ийн мэдээллийг авах {#1-get-your-cpanel-credentials}

1. Танай хостинг үйлчилгээ үзүүлэгчээс таны cPanel username болон паролийг авна уу
2. Таны cPanel host (ихэвчлэн `cpanel.yourdomain.com` эсвэл `yourdomain.com:2083`) -ийг тодорхойлно

### 2. wp-config.php дотор тогтмол утгуудыг нэмэх {#2-add-constants-to-wp-configphp}

Дараах тогтмол утгуудыг таны `wp-config.php` файл руу нэмнэ үү:

```php
define('WU_CPANEL_USERNAME', 'танай_cpanel_username');
define('WU_CPANEL_PASSWORD', 'танай_cpanel_password');
define('WU_CPANEL_HOST', 'танай_cpanel_host');
```

Мөн та портыг болон үндсэн хавсралыг өөрийн хэрэгцээнд тохируулах боломжтой:

```php
define('WU_CPANEL_PORT', 2083); // Хэрэв таны cPanel өөр портыг ашигладаг бол өөрчилнө үү
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Таны документ үндсэн хавсралын өөр байвал өөрчилнө үү
```

### 3. Интеграцийг идэвхжүүлэх {#3-enable-the-integration}

1. WordPress администратор (admin) дээрээ, Ultimate Multisite > Settings руу орно.
2. "Domain Mapping" таб руу явна.
3. "Host Integrations"-д доош урагшаа шилжих хэрэгтэй.
4. cPanel integration-ийг идэвхжүүлнэ.
5. "Save Changes" (Өөрчлөлт хадгалах) дээр дарна.

## Энэ яаж ажилладаг вэ? {#how-it-works}

### Addon Domains (Нэмэлт доменүүд) {#addon-domains}

Ultimate Multisite-д доменыг mapping хийх үед:

1. Integration нь cPanel API руу хүсэлт илгээж, тухайн домен дээр addon domain гэж нэмнэ.
2. Тухайн домен нь таны үндсэн хавтас (root directory)-д чиглэсэн байдлаар тохируулагддаг.
3. Домен mapping-ийг арилгасны дараа, integration нь cPanel-ээс addon domain-ыг устгана.

### Subdomains (Поддоменүүд) {#subdomains}

Subdomain multisite installation хийх үед, шинэ сайт үүсгэхэд:

1. Integration нь бүрэн доменээс subdomain хэсгийг гаргаж авна.
2. Тухайн subdomain-ыг cPanel API руу нэмэх хүсэлт илгээдэг.
3. Subdomain нь таны үндсэн хавтас (root directory)-д чиглэсэн байдлаар тохируулагддаг.

## Чухал анхаарах зүйлс {#important-notes}

- Integration нь cPanel-тэй холбогдохын тулд cPanel API2-ыг ашигладаг.
- Таны cPanel аккаунтад addon domains болон subdomain-уудыг нэмэх эрх байх ёстой.
- Зарим хостинг компаниуд танд үүсгэж болох addon domain эсвэл subdomain-ийн тоог хязгаарлаж болно.
- Integration нь DNS configuration (DNS тохиргоо) хийхгүй; та доменүүдийг өөрийн серверээ чиглүүлэх шаардлагатай.

## Асуудал шийдэх (Troubleshooting) {#troubleshooting}

### API Connection Issues (API холболтын асуудлууд) {#api-connection-issues}
- Таны cPanel username болон пароль зөв байгаа эсэхийг шалгана уу.
- Таны cPanel host зөв байгаа эс, хүртээмжтэй байгаа эсээ шалгана уу.
- Таны cPanel аккаунтод шаардлагатай эрхүүд байгаа эсэхийг баталгаажуулна уу.
- Host-ийн бүрэн URL (жишээлбэл, `https://cpanel.yourdomain.com`) ашиглан туршаад үзээрэй.

### Domain Not Added (Домен нэмэгдээгүй) {#domain-not-added}
- Ultimate Multisite-ын logs-ыг алдаа мессеж байгаа эсэхийг шалгана уу.
- Домен cPanel-д аль хэдийн нэмэгдсэн эс эсээ баталгаажуулна уу.
- Таны cPanel аккаунт addon domains эс subdomain-уудын хязгаарыг давсан эс байгаа эсээ шалгана уу.

### SSL Сертификатын Асуудлууд {#ssl-certificate-issues}
- Энэ интеграц нь SSL сертификат олгох асуудлыг хамардаггүй.
- Та өөрийн доменүүдэд SSL сертификатуудыг олгохын тулд cPanel-ийн SSL/TLS хэрэгслүүдийг эсвэл AutoSSL функцийг ашиглах шаардлагатай.
- Эсвэл та Let's Encrypt шиг үйлчилгээг cPanel-ийн AutoSSL-тэй хамт ашиглаж болно.
