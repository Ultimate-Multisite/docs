---
title: WordPress Multisite nireň nädip kurmak?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite-i Nasıl Kurulur?

WordPress Multisite, tek bir kurulumda sitelerden oluşan bir ağ oluşturmanıza olanak tanır. Bu, yerleşik bir özelliktir ancak varsayılan olarak aktif değildir.

:::tip
Ultimate Multisite, bu tüm süreci otomatik hale getiren bir **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** içerir. Ultimate Multisite kuruluysa, manuel adımları takip etmek yerine bu sihirbazı kullanmanızı öneririz.
:::

Ultimate Multisite ağ odaklı bir plugin olduğu için, bu eğitimde WordPress Multisite'ı manuel olarak nasıl kurup ayarlayacağınızı öğreneceksiniz. Bu metin WPBeginner'dan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) makalesine dayanmaktadır.

**Multisite ağınızı oluşturmadan önce dikkat etmeniz gerekenler:**

  * İyi bir WordPress hosting hizmeti alın! Ağdaki siteler aynı sunucu kaynaklarını paylaşır.

  * Eğer sadece az trafiğe sahip birkaç siteniz varsa, paylaşımlı hosting sizin için işe yarayacaktır.

  * Çoğu **Managed WordPress hosting sağlayıcısı** Multisite'ı hazır olarak sunar (WordPress'i zaten etkinleştirilmiş ve sizin için yapılandırılmış bir şekilde kurarlar). Bu durum WP Engine, Closte, Cloudways vb. için geçerlidir. Hosting sağlayıcınızın bu durumu destekleyip desteklemediğinden emin değilseniz, bu eğitimden devam etmeden önce onlarla iletişime geçin.

  * Ayrıca FTP kullanarak WordPress kurulumu yapmayı ve dosyaları düzenlemeyi öğrenmek de iyi olur.

_**ÖNEMLİ**_ **:** Mevcut bir WordPress web sitesinde multisite ağı kuruyorsanız şunları unutmayın:

  * WordPress sitenizin tam bir yedeğini alın

  * Pluginler sayfanıza gidip toplu eylemlerden _Deactivate_ seçeneğini seçerek tüm pluginleri devre dışı bırakın ve ardından _Apply_ (Uygula) butonuna tıklayın

Multisite'ı etkinleştirmek için önce FTP istemcisi veya cPanel dosya yöneticisi kullanarak sitenize bağlanın ve düzenlemek için wp-config.php dosyanızı açın.

*_Bu kadar, düzenlemeyi durdurun! Mutlu blog yazıları.*_ satırından önce aşağıdaki kod parçasını ekleyin:

define('WP_ALLOW_MULTISITE', true);

wp-config.php dosyasını kaydedin ve tekrar sunucuya yükleyin.

Sitenizde multisite özelliği etkinleştirildikten sonra, şimdi ağınızı kurma zamanı geldi.

**Tools » Network Setup** (Araçlar » Ağ Kurulumu) bölümüne gidin.

Şimdi WordPress'e ağınızdaki siteler için hangi alan yapısını kullanacağınızı söylemeniz gerekiyor: alt alan adları mı yoksa alt dizinler mi?

Eğer alt alan adlarını seçerseniz, alan adı eşleştirmesi için DNS ayarlarınızı değiştirmeniz ve multisite ağı için _**wildcard subdomains**_ (joker alt alan adları) kurulumunu yaptığınızdan emin olmanız gerekir.

Network Setup'a geri dönün, ağınız için bir başlık verin ve Network admin e-postasındaki e-posta adresinin doğru olduğundan emin olun. Devam etmek için _Install_ (Yükle) butonuna tıklayın.

WordPress tarafından sağlanan bu kodu _**wp-config.php**_'nize ekleyin:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Ve bu kodu da WordPress tarafından sağlanan _**.htaccess**_ dosyasına ekleyin:

RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin'e sonuna eğik çizgi (trailing slash) ekle

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bu kodu FTP klientini ýa-da fayl menejeri (myslany cPanel, mysal) ulanyp bu iki faylda nusgalaýan we ýapyp bilersiňiz.

Soňra, WordPress sahypasyna täze login ediň we multisite ulgamyňyz bilen habarlaşmak üçin girizişiňizi geçiriň.

**Ultimate Multisite-y kurmagyndan önce WordPress Multisite guramanda subsite döretip bilýändigini barlap we test etmek örän möhümdir.**

Subsite döretmek üçin:

  1. Sahypaňyzda wp-admin açyň

  2. My Sites > Sites ( /wp-admin/network/sites.php ) bilen gitdiň

  3. Üstden Add New (Täze goşmak) düwmesine basyň

  4. Bütün ulanyjylary dolduryň:

  * Site Address — "www" ýazmasyn.
  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
  * Site Title — Sahypaňyzyň ady, soňra üýtgedilip bilner

  * Admin Email — Subsite üçin ilkinji admin ulanyjysy hökmünde goýuň

![WordPress Multisite-de täze site formasy](/img/admin/sites-list.png)

Ulanyjylary doldurandan soň, "Add site" (Site goşmak) düwmenine basyň. Täze subsite döredilip bilende, olu işjeňdir diýip barlamak üçin ony girizip görüň.

## Üýtgeş Problem:

### 1. Täze site döredip bilýärin, ýöne olara girip bilmeýärin.

Eger siz subdomainleri saýlaýan bolsaňyz, multisite ulgamyňyz üçin "wildcard" (täkli) subdomainleri hem sozlamagyňyz zerurdyr.

Buni etmek üçin, web-saytyňyzyň hosting hasabynda kontrol paneli dashboarduna gitdiň (mysal üçin cPanel/Plesk/Direct Admin sizden wep-sayt barçasyndan baglydyr).

"Domains" ýa-da "Subdomains" bilen baglanyşykly bir opsiyany tapyň. Käbir kontrol panellerde bu "Domain administration" (Domain administratiýasy) diýlip görkezilip biler.

Subdomain (alt-alan) ulanyp biljekde, bir yıldız (*). Sonra sizden alt-alanı nire domain ady aşagynda goýmeli diýen soraýar.

Siz saýlaň bilen, bu domain üçin dokument kökü (document root) awtomatiki tapylýar. Wildcard subdomaini goýmak üçin _Create_ ýa-da _Save_ düwmenine basyň. Giriş şu görnüşde görünmeli: “*.[mydomain.com](http://mydomain.com)”
