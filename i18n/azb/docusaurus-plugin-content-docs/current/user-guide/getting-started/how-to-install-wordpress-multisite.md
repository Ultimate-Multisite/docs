---
title: How to Install WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite Nasıl Kurulur? {#how-do-i-install-wordpress-multisite}

WordPress Multisite, tek bir kurulum üzerinde bir site ağı oluşturmanıza olanak tanır. Bu yerleşik bir özelliktir, ancak varsayılan olarak aktif değildir.

:::tip
Ultimate Multisite, bu tüm süreci otomatik hale getiren bir **[yerleşik Multisite Kurulum Sihirbazı](./multisite-setup-wizard)** içerir. Eğer Ultimate Multisite kurduysanız, aşağıdaki manuel adımları takip etmek yerine sihirbazı kullanmanızı öneririz.
:::

Ultimate Multisite yalnızca bir ağ eklentisi olduğu için, bu eğitimde WordPress Multisite'ı manuel olarak nasıl kurup ayarlayacağınızı öğreneceksiniz. Bu metin, WPBeginner'dan alınan [WordPress Multisite Ağı Kurulum ve Ayarlama](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) makalesine dayanmaktadır.

**Multisite ağınızı oluşturmadan önce dikkat etmeniz gerekenler:**

  * İyi bir WordPress barındırma hizmeti alın! Bir ağdaki siteler aynı sunucu kaynaklarını paylaşır.

  * Sadece birkaç düşük trafiğe sahip siteniz varsa, paylaşımlı barındırma (shared hosting) muhtemelen işinizi görecektir.

  * Çoğu **Yönetilen WordPress barındırma sağlayıcısı** Multisite'ı kutudan çıktığı gibi sunar (WordPress'i Multisite zaten etkinleştirilmiş ve sizin için yapılandırılmış olarak kurarlar). Bu durum WP Engine, Closte, Cloudways vb. için geçerlidir. Barındırma sağlayıcınızın durumundan emin değilseniz, bu eğitimde ilerlemeden önce destekleriyle iletişime geçin.

  * Ayrıca WordPress kurma ve FTP kullanarak dosya düzenleme konusunda bilgi sahibi olmak da iyi olur.

_**ÖNEMLİ**_ **:** Mevcut bir WordPress web sitesinde multisite ağı kuruyorsanız, şunları yapmayı unutmayın:

  * WordPress sitenizin tam bir yedeğini alın

  * Tüm eklentileri sitenizden devre dışı bırakın. Bunun için eklentiler sayfanıza gidin, toplu işlemlerden _Devre Dışı Bırak_ seçeneğini seçin ve ardından _Uygula_ düğmesine tıklayın.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite'ı etkinleştirmek için önce bir FTP istemcisi veya cPanel dosya yöneticisi kullanarak sitenize bağlanın ve `wp-config.php` dosyanızı düzenlemek için açın.

_*Hepsi bu kadar, düzenlemeyi durdurun! İyi bloglamalar.*_ satırından önce aşağıdaki kod parçasını ekleyin:

define('WP_ALLOW_MULTISITE', true);

`wp-config.php` dosyanızı kaydedin ve sunucuya tekrar yükleyin.

Sitenizde multisite özelliği etkinleştirildiğine göre, şimdi ağınızı kurma zamanı.

**Araçlar » Ağ Kurulumu**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Şimdi WordPress'e ağınızdaki siteler için hangi alan adı yapısını kullanacağınızı söylemeniz gerekiyor: alt alan adları (subdomains) veya alt dizinler (subdirectories).

Alt alan adları seçerseniz, alan adı eşlemesi için DNS ayarlarınızı değiştirmeniz ve multisite ağınız için _**wildcard alt alan adları**_ kurduğunuzdan emin olmanız gerekir.

Ağ Kurulumu'na geri dönün, ağınıza bir başlık verin ve Ağ yöneticisi e-posta adresindeki e-posta adresinin doğru olduğundan emin olun. Devam etmek için _Yükle_ düğmesine tıklayın.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress tarafından sağlanan bu kodu, _**wp-config.php**_ dosyanıza ekleyin:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Ve WordPress tarafından sağlanan bu kodu, _**.htaccess**_ dosyanıza ekleyin:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Bu iki dosyaya kodu kopyalayıp yapıştırmak için bir FTP istemcisi veya dosya yöneticisi kullanın (örneğin cPanel kullanıyorsanız).

Son olarak, multisite ağınıza erişmek için WordPress sitenize yeniden giriş yapın.

**Ultimate Multisite'ı kurmadan önce, WordPress Multisite kurulumunuzda bir alt site oluşturup oluşturamadığınızı test etmeniz ve emin olmanız önemlidir.**

Bir alt site oluşturmak için:

  1. Web sitenizin wp-admin'ini açın

  2. Sitesiz > Siteler'e gidin (/wp-admin/network/sites.php)

  3. En üstteki Ekle'ye tıklayın

  4. Tüm alanları doldurun:

  * Site Adresi — Asla “www” kullanmayın

  * Alt Alan Adı: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Alt Dizin: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Başlığı — Sitenin başlığı, daha sonra değiştirilebilir

  * Yönetici E-postası — Alt site için başlangıç yönetici kullanıcısı olarak ayarlayın

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Alanları doldurduktan sonra "Site ekle" düğmesine tıklayın. Yeni alt site oluşturulduktan sonra, alt sitenin çalışır durumda olduğundan emin olmak için ona erişin.

## Sık Yaşanan Sorunlar: {#common-problems}

### 1. Yeni siteler oluşturabiliyorum ama erişilemiyorlar. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Alt alan adları seçtiyseniz, multisite ağınız için wildcard alt alan adları kurmanız gerekir.

Bunu yapmak için, Web sitenizin barındırma hesabı kontrol paneli panosuna gidin (örneğin barındırma sağlayıcınıza bağlı olarak cPanel/Plesk/Direct Admin).

“Alan Adları” veya “Alt Alan Adları” seçeneğini bulun. Bazı kontrol panellerinde bu “Alan Adı yönetimi” olarak adlandırılmıştır.

Alt alan adı alanına bir yıldız (*) girin. Ardından, alt alan adının eklenmesini istediğiniz bir alan adı seçmeniz istenmelidir.

Seçilen alan adı için belge kökü otomatik olarak algılanacaktır. Wildcard alt alan adınızı eklemek için _Oluştur_ veya _Kaydet_ düğmesine tıklayın. Giriş şu şekilde görünmelidir: “*.[mydomain.com](http://mydomain.com)”
