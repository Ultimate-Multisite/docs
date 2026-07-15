---
title: WordPress Multisite necə quraşdırılır
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite necə quraşdırılır?

WordPress Multisite, sizə tək bir quraşdırma üzərində bir neçə sayt ağı (network) qurmağa imkan verir. Bu, daxili bir xüsusiyyətdir, lakin default olaraq aktiv deyil.

:::tip
Ultimate Multisite, bu bütün prosesi avtomatlaşdıran bir **[daxili Multisite Qurulma Sihirbazına](./multisite-setup-wizard)** malikdir. Əgər Ultimate Multisite quraşdırılıbsa, aşağıdakı əl avəzini izləmək əvəzinə, sihirbazdan istifadə etməyinizi tövsiyə edirik.
:::

Ultimate Multisite yalnız network üçün bir plugin olduğu üçün, bu dərslikdə siz WordPress Multisite-ı əl ilə necə quraşdırıb quracağınızı öyrənəcəksiniz. Bu mətn, WPBeginner-dən alınan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) məqaləsinə əsaslanır.

**Multisite network-inizi yaratmadan əvvəl nəzərə alınmalı məqamlar:**

  * Yaxşı WordPress hosting-i alın! Network üzərindəki saytlar eyni server resurslarından istifadə edir.

  * Əgər yalnız az trafikli bir neçə saytınız varsa, shared hosting (paylaşılan hosting) sizin üçün kifayət edə bilər.

  * Əksər **İdarə olunan WordPress hosting provayerdləri** Multisite-ı qutu-çıxarı (out-of-the-box) təklif edir (yəni, WordPress-ı Multisite aktivləşdirilmiş və sizin üçün konfiqurasiya edilmiş şəkildə quraşdırırlar). Bu, WP Engine, Closte, Cloudways və s. üçün doğrudur. Əgər host provayerdinizdə belə bir şey olub-olmadığından əminsinizsə, bu dərslikdə davam etməzdən əvvəl onların dəstəyinə müraciət edin.

  * Həmçinin, WordPress-ı quraşdırmaq və faylları FTP vasitəsilə redaktə etmək barədə biliklərə malik olmaq yaxşı olar.

_**MÜHÜMDÜR**_ **:** Əgər mövcud bir WordPress saytı üzərində multisite network qurursunuzsa, aşağıdakıları etməyi unutmayın:

  * WordPress saytinizin tam backup-ını alın

  * Saytınızdakı bütün pluginləri səhv etməklə (plugins səhifənizə gedərək, toplu əməliyyatlardan _Deactivate_ seçərək və sonra _Apply_ düyməsinə basaraq) deaktiv edin

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite-ı aktivləşdirmək üçün, əvvəlcə FTP müştərisi və ya cPanel fayl meneceri vasitəsilə saytınıza qoşulun və `wp-config.php` faylınızı redaktə etmək üçün açın.

_*Bütün bunlar, redaktə etməyi dayandırın! Xoş blog yazıları.*_ xəttindən əvvəl, aşağıdakı kod parçasını əlavə edin:

define('WP_ALLOW_MULTISITE', true);

`wp-config.php` faylınızı yadda saxlayın və serverə yükləyin.

Saytınızda multisite xüsusiyyəti aktivləşdirildikdən sonra, indi network-inizi qurma vaxtıdır.

**Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

İndi WordPress-a network-inizdəki saytlar üçün hansı növ domen strukturundan istifadə edəcəyinizi deməlisiniz: alt domenlər (subdomains) yoxsa alt kataloglar (subdirectories).

Alt domenlərdən istifadə etsəniz, domen eşləşdirməsi üçün DNS parametrlərinizi dəyişdirməli və multisite network-iniz üçün _**wildcard subdomains**_ qurduğunuzdan əmin olmalısınız.

Network Setup-a qayıdın, network-iniz üçün bir başlıq verin və Network admin email-dəki e-poçt ünvanının düzgün olduğundan əmin olun. Davam etmək üçün _Install_ düyməsinə basın.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress tərəfindən təmin edilən bu kodu _**wp-config.php**_ faylınıza əlavə edin:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Və WordPress tərəfindən təmin edilən bu kodu, _**.htaccess**_ faylınıza əlavə edin:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bu iki fayldakı kodu kopyalayıb yapışmaq üçün FTP müştərisi və ya fayl meneceri (məsələn, cPanel istifadə edirsinizsə) istifadə edin.

Nəhayət, multisite network-inizə daxil olmaq üçün WordPress saytınıza yenidən daxil olun.

**Ultimate Multisite quraşdırmadan əvvəl, zəhmət olmasa, bir alt sayt (subsite) yaratmağı və bunun işlədiyinə əmin olmağınız vacibdir.**

Alt sayt yaratmaq üçün:

  1. Saytınızın wp-admin hissəsini açın

  2. My Sites > Sites (/wp-admin/network/sites.php) yolunu izləyin

  3. Yuxarıdakı hissədə "Add New" (Yeni Əlavə Et) düyməsinə basın

  4. Bütün sahələri doldurun:

  * Site Address (Sayt Ünvanı) — Heç vaxt “www” istifadə etməyin

  * Subdomain (Alt Domen): [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory (Alt Katalog): [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title (Sayt Başlığı) — Saytın adı, daha sonra dəyişdirilə bilər

  * Admin Email (Admin E-poçti) — Alt sayt üçün ilkin admin istifadəçisi kimi təyin edin

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Sahələri doldurduqdan sonra, "Add site" (Sayt əlavə et) düyməsinə basın. Yeni alt sayt yaradıldıqdan sonra, alt saytın işlək olduğundan əmin olmaq üçün ona daxil olun.

## Ümumi Problemlər: {#common-problems}

### 1. Yeni saytlar yarada bilirəm, amma onlara daxil ola bilmirəm. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Alt domenlərdən istifadə etdiyiniz halda, multisite network-iniz üçün wildcard alt domenlər qurmalısınız.

Bunu etmək üçün, Saytınızın hosting hesabının nəzarət paneli (məsələn, host provayerdən asılı olaraq cPanel/Plesk/Direct Admin) dashboard-una daxil olun.

“Domains” (Domenlər) və ya “Subdomains” (Alt Domenlər) üçün bir seçim tapın. Bəzi nəzarət panellərində bu, “Domain administration” (Domen idarəetməsi) olaraq adlandırılıb.

Alt domen sahəsinə bir ulduz işarəsi (*) daxil edin. Sonra, alt domenün hansı domen adı altında əlavə edilməsini seçməyiniz istənilməlidir.

Seçilmiş domen adı üçün sənəd kökü (document root) avtomatik aşkarlanacaq. Wildcard alt domeninizi əlavə etmək üçün _Create_ (Yarat) və ya _Save_ (Yadda Saxla) düyməsinə basın. Giriş belə görünməlidir: “*.[mydomain.com](http://mydomain.com)”
