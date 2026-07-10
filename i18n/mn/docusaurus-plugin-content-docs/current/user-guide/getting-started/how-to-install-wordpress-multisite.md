---
title: WordPress Multisite-ийг хэрхэн суулгах вэ?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite-ийг хэрхэн суулгах вэ? {#how-do-i-install-wordpress-multisite}

WordPress Multisite нь нэг талбарт олон сайтын сүлжээг үүсгэх боломжийг олгодог. Энэ нь системд заавал ирж байдаг функц боловч анх стандарт тохиргоогүй байна.

:::tip
Ultimate Multisite-т **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** гэсэн хэрэгсэл багтсан бөгөөд энэ нь бүх процессыг автоматаар хийж өгнө. Хэрэв та Ultimate Multisite суулгасан бол доорх гарын авлагын алхмуудыг дагахын оронд энэ хэрэгслийг ашиглахад зөвлөдөг.
:::

Ultimate Multisite нь сүлжээний (network-only) плагин тул энэхүү зааврыг дагуу бид WordPress Multisite-ийг гараар суулгаж, тохируулах аргыг сурч үзнэ. Энэхүү текст WPBeginner-ээс [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) -аас авсан байна.

**Multisite сүлжээг үүсгэхээс өмнө анхаарах зүйлс:**

  * Сайн WordPress хостинг сонгоорой! Сүлжээнд байгаа сайтууд ижил сервер нөөцийг хуваалцдаг.

  * Хэрэв та бага төлөвлөгөөтэй хэдхэн сайттай бол, shared hosting (хамтдаа ашиглах хостинг) танд тохирох байх.

  * Ихэнх **Managed WordPress hosting providers** нь Multisite-ийг анхнаасаа ирж өгдөг (тэд WordPress-ийг аль хэдийн Multisite-тай идэвхтэй, тохируулсан байдлаар суулгадаг). Энэ нь WP Engine, Closte, Cloudways зэрэгт хамаарах. Хэрэв та өөрийн хостинг провайдерт энэ нь ямар байгааг мэдэхгүй бол энэ зааврыг үргэлжлүүлэхээс өмнө тэдний дэмжлэгтэй холбогдож үзээрэй.

  * FTP ашиглан WordPress суулгах, файл засварлах зэрэгт тань мэдлэг байх нь ч сайн юм.

_**Чөлөөтэй анхаарах зүйл**_ **:** Хэрэв одоо байгаа WordPress сайтод multisite сүлжээг тохируулж байгаа бол дараах зүйлсийг мартаж болохгүй:

  * Өөрийн WordPress сайтыг бүрэн бэлэн (backup) хийх.

  * Plugins-ийн хуудас руу очиж, bulk actions-оос _Deactivate_ сонгоод дараа нь _Apply_-ыг дарж сайт дээрх бүх плагиныг идэвхгүй болгох.

Мультисайт (Multisite) функцийг идэвхүүлэхийн тулд эхлээд FTP клиент эсвэл cPanel файл менежер ашиглан таны сайтай холбогдож, `wp-config.php` файлыг өөрчлөхөд бэлэн байх хэрэгтэй.

`_*Энэ бол бүгд дууссан, баяртай бичээрэй.*_ гэсэн мөрөөс өмнө дараах код snippet-ийг нэмнэ үү:

```php
define('WP_ALLOW_MULTISITE', true);
```

`wp-config.php` файлыг хадгалан сервер рүү дахин ачаална уу.

Сайт дээр мультисайт функцийг идэвхжүүлсний дараа, одоо таны сүлжээг тохируулах цаг боллоо.

**Tools » Network Setup** руу орно.

Одоо WordPress-д таны сүлжээний сайтуудад ямар домен бүтцийг ашиглахыг (subdomains эсвэл subdirectories) хэрэглэх талаар мэдэгдэх шаардлагатай: subdomain (дотоод домен) эсвэл subdirectory (дотоод хавтас).

Хэрэв та subdomain-ийг сонговол, домен тохиргоог өөрчлөх, мөн мультисайт сүлжээнд _**wildcard subdomains**_ (хавтгай subdomain) -ыг тохируулах шаардлагатай.

Network Setup руу буцаж ирээд, таны сүлжээнд нэр (title) өгөөч, мөн Network admin-ийн email хаяг зөв байгаа эсэхийг шалгана уу. Үргэлжлүүлэхийн тулд _Install_ товчийг дарна уу.

WordPress-ээс өгөгдсөн дараах кодыг `wp-config.php`-д нэмнэ үү:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Мөн WordPress-ээс өгөгдсөн дараах кодыг `**.htaccess**` файл руу нэмнэ үү:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin-ийн төгсгөлд slash нэмэх
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Энэ кодыг FTP клиент эсвэл файл менежер (жишээлбэл, cPanel ашиглаж байгаа бол) ашиглан хоёр файл руу хуулж оруулаарай.

Эцэст нь, Ultimate Multisite-ийг суулгахын өмнө WordPress Multisite сүлжээнд дэдсайт үүсгэх боломжтой эсэхийг шалгаж, тест хийх нь чухал юм.

Дэдсайт үүсгэх:

  1. Таны сайтын wp-admin руу ороод орно.
  2. My Sites > Sites (/wp-admin/network/sites.php) руу очино.
  3. Дээд талд байгаа Add New (Шинэ нэмэх) товчийг дарна.
  4. Бүх талбаруудыг дүүргэнэ:

* Site Address — "www"-г хэзээ ч ашиглаагүй байх ёстой.

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Сайтын нэр, дараа нь өөрчлөх боломжтой.

* Admin Email — Дэдсайтын анхны администратор хэрэглэгч болгоно.

![WordPress Multisite-д шинэ сайт үүсгэх маяг](/img/admin/sites-list.png)

Та бүх талбарыг дүүргээд "Add site" (Сайт нэмэх) товчийг дарна. Шинэ дэдсайт үүссэн бол түүнд ороод, дэдсайт ажиллаж байгаа эсэхийг шалгаарай.

## Ерөнхий асуудлууд: {#add-a-trailing-slash-to-wp-admin}

### 1. Би шинэ сайт үүсгэж чадах ч хандах боломжгүй байна. {#common-problems}

Хэрэв та subdomain-ыг сонгосон бол, Multisite сүлжээнд wildcard (бүрэн давхаргатай) subdomain-уудыг тохируулах хэрэгтэй.

Үүнийг хийхийн тулд таны хостинг компанийн удирдлагын самбарт (жишээлбэл cPanel/Plesk/Direct Admin, таны хостинг компаниас хамаарна) очино.

"Domains" эсвэл "Subdomains"-ийн сонголтыг олох хэрэгтэй. Зарим удирдлагын самбарт үүнийг "Domain administration" (Домен удирдлага) гэж нэрлэдэг байдаг.

Поддомен (subdomain) талбарт звездог (\*) оруулна уу. Дараа нь таны поддомены аль домен дээр нэмэгдэхийг сонгохыг асууна.

Сонгосон доменийн үндсэн хавтас (document root) автоматаар тодорхойлогдоно. Wildcard поддомен-ийг нэмэхэд _Create_ эсвэл _Save_ товчийг дарна уу. Оролт нь “*.[mydomain.com](http://mydomain.com)” гэсэн хэлбэртэй харагдах ёстой.
