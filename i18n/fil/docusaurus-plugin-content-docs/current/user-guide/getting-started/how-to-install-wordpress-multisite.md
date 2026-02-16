---
title: Paano Mag-install ng WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Paano Ko Ito I-install ang WordPress Multisite?

Ang WordPress Multisite ay nagbibigay-daan sa iyo na magkaroon ng network ng mga site sa isang installation lamang. Ito ay built-in na feature, pero hindi ito aktibo bilang default.

:::tip
Kasama sa Ultimate Multisite ang **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** na awtomatikong gagawin ang buong prosesong ito. Kung naka-install na ang Ultimate Multisite sa iyo, inirerekomenda naming gamitin ang wizard sa halip na sundin ang mga manual na hakbang sa ibaba.
:::

Dahil ang Ultimate Multisite ay isang network-only na plugin, sa tutorial na ito, matututunan mo kung paano i-install at i-setup ang WordPress Multisite nang manual. Ang tekstong ito ay base sa [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), mula sa WPBeginner.

**Mga dapat tandaan bago gumawa ng iyong multisite network:**

  * Kumuha ng magandang WordPress hosting! Ang mga website sa isang network ay nagbabahagi ng parehong server resources.

  * Kung mayroon ka lamang ilang mga site na may mababang traffic, malamang na gagana ang shared hosting para sa iyo.

  * Karamihan sa mga **Managed WordPress hosting provider** ay nag-aalok ng Multisite na out-of-the-box (ini-install nila ang WordPress na may Multisite na aktibo at naka-configure na para sa iyo). Ganito ang WP Engine, Closte, Cloudways, atbp. Kung hindi ka sigurado kung ganito rin ang iyong host provider, makipag-ugnayan sa kanilang support bago magpatuloy sa tutorial na ito.

  * Maganda rin na pamilyar ka sa pag-install ng WordPress at pag-edit ng mga file gamit ang FTP.

_**MAHALAGA**_ **:** Kung nagse-setup ka ng multisite network sa isang umiiral na WordPress website, huwag kalimutang:

  * Gumawa ng kumpletong backup ng iyong WordPress site

  * I-deactivate ang lahat ng plugins sa iyong site sa pamamagitan ng pagpunta sa iyong plugins page at piliin ang _Deactivate_ mula sa bulk actions at pagkatapos ay i-click ang _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Para i-enable ang Multisite, una ay kumonekta sa iyong site gamit ang FTP client o cPanel file manager, at buksan ang iyong wp-config.php file para i-edit.

Bago ang linya na _*That's all, stop editing! Happy blogging.*_, idagdag ang sumusunod na code snippet:

define('WP_ALLOW_MULTISITE', true);

I-save at i-upload ang iyong wp-config.php file pabalik sa server.

Kapag na-enable na ang multisite feature sa iyong site, oras na para i-setup ang iyong network.

Pumunta sa **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ngayon ay kailangan mong sabihin sa WordPress kung anong uri ng domain structure ang gagamitin mo para sa mga site sa iyong network: subdomains o subdirectories.

Kung pipiliin mo ang subdomains, kailangan mong baguhin ang iyong DNS settings para sa domain mapping at siguraduhing naka-setup ang _**wildcard subdomains**_ para sa iyong multisite network.

Balik sa Network Setup, magbigay ng title para sa iyong network at siguraduhing tama ang email address sa Network admin email. I-click ang _Install_ para magpatuloy.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Idagdag ang code na ito, na ibinigay ng WordPress, sa iyong _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

At ang code na ito, na ibinigay din ng WordPress, sa iyong _**.htaccess**_ file:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# magdagdag ng trailing slash sa /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gumamit ng FTP client o file manager (kung gumagamit ka ng tulad ng cPanel, halimbawa) para i-copy at i-paste ang code sa dalawang file na ito.

Sa wakas, mag-login ulit sa iyong WordPress site para ma-access ang iyong multisite network.

**Mahalagang i-test at siguraduhing makakagawa ka ng subsite sa iyong WordPress Multisite installation bago mo i-install ang Ultimate Multisite.**

Para gumawa ng subsite:

  1. Buksan ang wp-admin ng iyong website

  2. Pumunta sa My Sites > Sites (/wp-admin/network/sites.php)

  3. I-click ang Add New sa itaas

  4. Punan ang lahat ng fields:

  * Site Address — Huwag kailanman gumamit ng "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Title ng site, maaaring baguhin sa ibang pagkakataon

  * Admin Email — Itatakda bilang unang admin user para sa subsite

![Add new site form sa WordPress Multisite](/img/admin/sites-list.png)

Pagkatapos punan ang mga fields, i-click ang "Add site" button. Kapag nagawa na ang bagong subsite, pumunta at i-access ito para siguraduhing gumagana ang subsite.

## Mga Karaniwang Problema:

### 1\. Nakakagawa ako ng mga bagong site pero hindi sila ma-access.

Kung pinili mo ang subdomains, kailangan mo ring mag-setup ng wildcard subdomains para sa iyong multisite network.

Para gawin ito, pumunta sa control panel dashboard ng hosting account ng iyong Website (hal. cPanel/Plesk/Direct Admin depende sa iyong hosting provider).

Maghanap ng option para sa "Domains" o "Subdomains". Sa ilang control panels, naka-label ito bilang "Domain administration".

Sa subdomain field, maglagay ng asterisk (*). Pagkatapos, hihilingin nitong pumili ka ng domain name kung saan mo gustong idagdag ang subdomain.

Ang document root para sa piniling domain name ay awtomatikong made-detect. I-click ang _Create_ o _Save_ button para idagdag ang iyong wildcard subdomain. Ang entry ay dapat magmukhang "*.[mydomain.com](http://mydomain.com)"
