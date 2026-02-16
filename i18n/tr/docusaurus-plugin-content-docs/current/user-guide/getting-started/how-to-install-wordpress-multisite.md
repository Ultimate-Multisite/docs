---
title: WordPress Multisite Nasıl Kurulur
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite Nasıl Kurulur?

WordPress Multisite, tek bir kurulumda birden fazla siteyi yönetebileceğiniz bir site ağı oluşturmanızı sağlar. Bu özellik WordPress'in içinde hazır olarak bulunur, ancak varsayılan olarak etkin değildir.

:::tip
Ultimate Multisite, tüm bu süreci otomatikleştiren **[yerleşik bir Multisite Kurulum Sihirbazı](./multisite-setup-wizard)** içerir. Ultimate Multisite kuruluysa, aşağıdaki manuel adımları takip etmek yerine sihirbazı kullanmanızı öneririz.
:::

Ultimate Multisite yalnızca ağ düzeyinde çalışan bir plugin olduğundan, bu rehberde WordPress Multisite'ı manuel olarak nasıl kuracağınızı ve yapılandıracağınızı öğreneceksiniz. Bu içerik, WPBeginner'dan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) makalesinden uyarlanmıştır.

**Multisite ağınızı oluşturmadan önce dikkat etmeniz gerekenler:**

  * Kaliteli bir WordPress hosting hizmeti seçin! Ağdaki siteler aynı sunucu kaynaklarını paylaşır.

  * Düşük trafikli birkaç siteniz varsa, paylaşımlı hosting muhtemelen işinizi görecektir.

  * Çoğu **Yönetimli WordPress hosting sağlayıcısı** Multisite desteğini hazır olarak sunar (WordPress'i sizin için Multisite etkinleştirilmiş ve yapılandırılmış şekilde kurarlar). WP Engine, Closte, Cloudways gibi sağlayıcılar buna örnektir. Hosting sağlayıcınızın bunu destekleyip desteklemediğinden emin değilseniz, bu rehbere devam etmeden önce destek ekibiyle iletişime geçin.

  * Ayrıca WordPress kurulumu ve FTP kullanarak dosya düzenleme konusunda bilgi sahibi olmanız faydalı olacaktır.

_**ÖNEMLİ**_ **:** Mevcut bir WordPress sitesinde multisite ağı kuruyorsanız şunları unutmayın:

  * WordPress sitenizin eksiksiz bir yedeğini alın

  * Sitenizdeki tüm pluginleri devre dışı bırakın: Pluginler sayfasına gidin, toplu işlemlerden _Devre Dışı Bırak_ seçeneğini seçin ve ardından _Uygula_ düğmesine tıklayın

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite'ı etkinleştirmek için önce bir FTP istemcisi veya cPanel dosya yöneticisi kullanarak sitenize bağlanın ve wp-config.php dosyasını düzenleme için açın.

_*That's all, stop editing! Happy blogging.*_ satırından önce aşağıdaki kod parçacığını ekleyin:

define('WP_ALLOW_MULTISITE', true);

wp-config.php dosyanızı kaydedin ve sunucuya geri yükleyin.

Sitenizde multisite özelliği etkinleştirildiğine göre, şimdi ağınızı kurma zamanı.

**Araçlar » Ağ Kurulumu** menüsüne gidin

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Şimdi WordPress'e ağınızdaki siteler için hangi alan adı yapısını kullanacağınızı söylemeniz gerekiyor: alt alan adları (subdomain) mı yoksa alt dizinler (subdirectory) mi.

Alt alan adlarını seçerseniz, alan adı eşleştirmesi için DNS ayarlarınızı değiştirmeniz ve multisite ağınız için _**joker karakter alt alan adları (wildcard subdomains)**_ kurulumu yapmanız gerekir.

Ağ Kurulumu sayfasına geri dönün, ağınıza bir başlık verin ve Ağ yöneticisi e-postası alanındaki e-posta adresinin doğru olduğundan emin olun. Devam etmek için _Kur_ düğmesine tıklayın.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress'in sağladığı bu kodu _**wp-config.php**_ dosyanıza ekleyin:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Yine WordPress'in sağladığı bu kodu da _**.htaccess**_ dosyanıza ekleyin:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin sonuna eğik çizgi ekle

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bu iki dosyaya kodu kopyalayıp yapıştırmak için bir FTP istemcisi veya dosya yöneticisi (örneğin cPanel kullanıyorsanız) kullanın.

Son olarak, multisite ağınıza erişmek için WordPress sitenize yeniden giriş yapın.

**Ultimate Multisite'ı kurmadan önce, WordPress Multisite kurulumunuzda bir alt site oluşturabildiğinizi test edip doğrulamanız önemlidir.**

Bir alt site oluşturmak için:

  1. Sitenizin wp-admin panelini açın

  2. Sitelerim > Siteler (/wp-admin/network/sites.php) bölümüne gidin

  3. Üst kısımdaki Yeni Ekle düğmesine tıklayın

  4. Tüm alanları doldurun:

  * Site Adresi — Asla "www" kullanmayın

  * Alt alan adı: [siteadresi.alanadiniz.com](http://siteaddress.yourdomain.com)

  * Alt dizin: [alanadiniz.com/siteadresi](http://yourdomain.com/siteaddress)

  * Site Başlığı — Sitenin başlığı, daha sonra değiştirilebilir

  * Yönetici E-postası — Alt site için ilk yönetici kullanıcısı olarak ayarlanır

![WordPress Multisite'da yeni site ekleme formu](/img/admin/sites-list.png)

Alanları doldurduktan sonra "Site ekle" düğmesine tıklayın. Yeni alt site oluşturulduktan sonra, alt sitenin düzgün çalıştığından emin olmak için siteye erişin ve test edin.

## Sık Karşılaşılan Sorunlar:

### 1\. Yeni siteler oluşturabiliyorum ama erişilemiyor.

Alt alan adlarını seçtiyseniz, multisite ağınız için joker karakter alt alan adları (wildcard subdomains) kurulumu da yapmanız gerekir.

Bunu yapmak için web sitenizin hosting hesabının kontrol paneline gidin (hosting sağlayıcınıza göre cPanel/Plesk/Direct Admin vb.).

"Alan Adları" veya "Alt Alan Adları" seçeneğini bulun. Bazı kontrol panellerinde bu "Alan adı yönetimi" olarak etiketlenmiştir.

Alt alan adı alanına yıldız işareti (*) girin. Ardından, alt alan adının hangi alan adı altına ekleneceğini seçmeniz istenecektir.

Seçilen alan adı için belge kökü otomatik olarak algılanacaktır. Joker karakter alt alan adınızı eklemek için _Oluştur_ veya _Kaydet_ düğmesine tıklayın. Kayıt "*.[alanadiniz.com](http://mydomain.com)" şeklinde görünmelidir.
