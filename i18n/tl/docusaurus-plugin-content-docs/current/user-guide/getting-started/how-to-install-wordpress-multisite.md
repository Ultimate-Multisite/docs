---
title: Paano Mag-install ng WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Paano Mag-install ng WordPress Multisite?

Ang WordPress Multisite ay nagpapahintulot sa iyo na magkaroon ng isang network ng mga site sa iisang installation. Ito ay isang built-in feature, pero hindi ito naka-activate nang default.

:::tip
Kasama ang Ultimate Multisite ang isang **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** na awtomatiko itong buong proseso. Kung mayroon kang Ultimate Multisite installed, iminumungkahi namin na gamitin ang wizard kaysa sundin ang mga manual na hakbang sa ibaba.
:::

Dahil ang Ultimate Multisite ay isang plugin para lang sa network, sa tutorial na ito, matututunan mo kung paano i-install at i-set up ang WordPress Multisite nang mano-mano. Ang text na ito ay batay sa [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), mula sa WPBeginner.

**Mga Dapat Pansinin Bago Gumawa ng Iyong multisite network:**

  * Maghanap ng magandang WordPress hosting! Ang mga website sa isang network ay gumagamit ng parehong server resources.

  * Kung mayroon ka lang ng ilang site na mababa ang traffic, malamang na gagana para sa iyo ang shared hosting.

  * Karamihan sa mga **Managed WordPress hosting providers** ay nag-aalok ng Multisite out-of-the-box (ini-install nila ang WordPress na may Multisite na naka-activate at naka-configure na para sa iyo). Ito ang kaso para sa WP Engine, Closte, Cloudways, atbp. Kung hindi ka sigurado kung iyon ba ang kaso para sa iyong host provider, makipag-ugnayan muna sa kanilang support bago magpatuloy sa tutorial na ito.

  * Mabuti ring maging pamilyar sa pag-install ng WordPress at pag-edit ng mga files gamit ang FTP .

_**MAHALAGA**_ **:** Kung ikaw ay nagse-set up ng multisite network sa isang umiiral nang WordPress website huwag kalimutang gawin ang mga sumusunod:

  * Gumawa ng kumpletong backup ng iyong WordPress site

  * I-deactivate ang lahat ng plugins sa iyong site sa pamamagitan ng pagpunta sa iyong plugins page at pagpili ng _Deactivate_ mula sa bulk actions at pagkatapos ay i-click ang _Apply_

Para ma-enable ang Multisite, una kumonekta sa iyong site gamit ang FTP client o cPanel file manager, at buksan ang iyong `wp-config.php` file para i-edit.

Bago ang linya na _*That’s all, stop editing! Happy blogging.*_ magdagdag ng sumusunod na code snippet:

```php
define('WP_ALLOW_MULTISITE', true);
```

I-save at i-upload muli ang iyong `wp-config.php` file sa server.

Kapag na-enable mo na ang multisite feature sa iyong site, oras na para i-setup ang iyong network.

Pumunta sa **Tools » Network Setup**

Ngayon kailangan mong sabihin sa WordPress kung anong uri ng domain structure ang gagamitin mo para sa mga site sa iyong network: subdomains o subdirectories.

Kung pipili ka ng subdomains, kailangan mong baguhin ang iyong DNS settings para sa domain mapping at siguraduhin na naka-setup _**wildcard subdomains**_ para sa iyong multisite network.

Balik sa Network Setup, magbigay ng pamagat para sa iyong network at tiyakin na tama ang email address sa Network admin email. I-click ang _Install_ para magpatuloy.

Idagdag itong code, ibinigay ng WordPress, sa iyong _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

At itong code, ibinigay din ng WordPress, sa iyong _**.htaccess**_ file:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# magdagdag ng trailing slash sa /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gamitin ang isang FTP client o file manager (kung gumagamit ka ng cPanel, halimbawa) para kopyahin at i-paste ang code sa dalawang file na ito.

Sa huli, mag-login ulit sa iyong WordPress site para ma-access ang iyong multisite network.

**Mahalagang subukan at siguraduhin na kaya mong gumawa ng subsite sa iyong WordPress Multisite installation bago mo i-install ang Ultimate Multisite.**

Para gumawa ng subsite:

  1. Buksan ang iyong websites wp-admin

  2. Pumunta sa My Sites > Sites (/wp-admin/network/sites.php)

  3. I-click ang Add New sa itaas

  4. Punuan ang lahat ng fields:

* Site Address — Huwag na huwag gumamit ng “www”

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Pamagat ng site, pwedeng baguhin mamaya

* Admin Email — Itakda bilang unang admin user para sa subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Pagkatapos punan ang mga fields, i-click ang "Add site" button. Kapag na-create na ang bagong subsite, pumunta at i-access ito para masigurado na gumagana ang subsite.

## Mga Karaniwang Problema: {#add-a-trailing-slash-to-wp-admin}

### 1. Kaya kong gumawa ng mga bagong site pero hindi ko ma-access. {#common-problems}

Kung pinili mo ang mga subdomain, kailangan mo ring mag-setup ng wildcard subdomains para sa iyong multisite network.

Para gawin iyan, pumunta sa dashboard ng hosting account ng iyong Website (halimbawa cPanel/Plesk/Direct Admin depende sa iyong hosting provider).

Hanapin ang opsyon para sa “Domains” o “Subdomains”. Sa ilang control panel, ito ay may label na “Domain administration”.

Sa field na subdomain, ilagay ang isang bituin (*). Pagkatapos nito, hihiling sa iyo na pumili ng pangalan ng domain kung saan mo gustong idagdag ang iyong subdomain.

Awtomatikong matutukoy ang root directory para sa napiling pangalan ng domain. Pindahin ang _Create_ o _Save_ button para idagdag ang iyong wildcard subdomain. Ang entry ay dapat magmukhang “*.[mydomain.com](http://mydomain.com)”
