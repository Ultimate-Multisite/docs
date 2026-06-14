---
title: He aha te ara ki te Whakaritenga WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# He aha te whakamahi ana ahau ki Whakarite WordPress Multisite?

E whaiaro ana i te WordPress Multisite, e tino kitea ana i te wāhi irere (network) o ngā waka (sites) i tētahi whakauru (installation) paku. He āhuatanga whakatō (built-in feature) ia, engari ā, he ātaahua (active) i te wāhi whakatō (default).

:::tip
Ko te Ultimate Multisite e whaiaro ana i **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**, e tino whakamahi ai i tēnei whakatau katoa. Ko te whakaahua (automates) i tēnei whakatau katoa. Ko koe i roto i te Ultimate Multisite, ā, mōku, he tino rekenga ahau ki te whakamahi i tēnei wizard i tētahi wāhi, i tētahi ngāhi (manual steps) i te pō. Ko tēnei tekau (text) e ahua ana i te [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), mai WPBeginner.

**Ngā mea e tino kitea (Things to pay attention to) i roto i te whakatō o koe mo te multisite network:**

  * Kia kaha ki hosting WordPress! Ngā waka i te network, ka whai ana i ngā taonga o te server (server resources) i te wāhi irere.

  * I tētahi wā, he tino pai ahau ki te shared hosting inae ahau i roto i ngā waka paku me mana (low traffic).

  * Kei te tino whaiaro ana ngā **Managed WordPress hosting providers** i Multisite eke mai (out-of-the-box) (he tino whakatō rā WordPress me Multisite eke mai me ātaahua mo koe). Ko tēnei he te waka WP Engine, Closte, Cloudways, etc. Ko koe i roto i te ahua ko he hoki ahau ki te host provider kia whaiaro ahau i te mea he hoki ahau ki te tutorial pō.

  * He tino pai ahau ki te mōhaka (familiar) ki te whakairo WordPress me te whakarereke o ngā file muai (editing files) i roto i FTP.

_**Tū mai i te wāhi nui (IMPORTANT)**_: **:** Ko koe i te whakatō multisite network i tētahi waka WordPress eke mai, kia mārama ahau ki:

  * Whakawātea (Create a complete backup) o tō waka WordPress.

  * Whakamutunga (Deactivate) ngā plugins katoa i tō waka eke mai, i te whakatū i tō page of plugins me te whiri i _Deactivate_ i te bulk actions ā, he paka (Apply).

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite onete i te whaiaro, he tino pai. Whakaaro ana koe ki te konei, he mea nui. Hei whakatika i te Multisite, kia whai i tō site i te FTP client takea, he manager file o cPanel, ā, whakahoki i tō wp-config.php file mo whakawhiti.

I roto i te line _*Ko atu, he whāinga! Kei te blogging pai.*_ i te whakatika, whero i te code snippet berikut:

define('WP_ALLOW_MULTISITE', true);

Whakaaro ana koe ki te save i tō wp-config.php file ā, whai i ai i te server.

Me te multisite e whakahirahira ana i tō site, ko he tino pai ahau ki te whakarite i tō network.

Pāinga ki **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ko te mea e tino nui ia, kia mō WordPress koe he mea e whai ake ana i te whakamahi mo te kaha o te domain structure mo ngā sites i tō network: subdomains (subdomain) ahau, ko subdirectories (directory).

Ko te whakaaro koe ki subdomain, me tino whakatika i tō DNS settings mo te mapping o domain ā, kia kore e pēnei i _wildcard subdomains_ mo tō multisite network.

I whai i te Network Setup, give a title mo tō network ā, kia kore e pēnei i te email address i te Network admin email he tino pai. Click _Install_ mo te whakatika.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Whakaaro ana koe ki te add this code, ko e whai ake ana i WordPress, ki tō _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Me te ko e code, ko e whai ake ana i WordPress, ki tō _**.htaccess**_ file:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use heke FTP client, au file manager (he tino whakamahi i te cPanel, mō te kupu, e tēnei), ki te whakakua me te whakatika i te kōrero i ngā iki iki i tēnei iki.

I te whakamutunga, whakaingoa anō i tō WordPress site mo te whai access ki tō network multisite.

**He tino mōhiohia ana te whakamārama me te whakamārama ana kua e taea ai koe te whakato subsitei i tō installation WordPress Multisite i tēnei i te whakato Ultimate Multisite.**

Mō te whakato subsite:

  1. Whakawātea i tō websites wp-admin

  2. Pāinga ki My Sites > Sites (/wp-admin/network/sites.php)

  3. Whakawātea i Add New i te whakatūnga

  4. Whakarite katoa ngā rohe:

  * Site Address — Kua te whakamahi i "www" nei? Hengai!

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Te titara o te site, e taea ai te whakawhiti i tōna titara i te wā.

  * Admin Email — Whakarite ana he au admin i te whakatūnga i te subsite.

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

I te whakarite katoa ngā rohe, whakatika i te "Add site" button. I te wā kua whakato koe i te subsite hou, whai i ai ki te whai access ki i tōna mōhiamo kia whakatutai ana he hoki functional.

## Ngā Pānga Whakamahi:

### 1\. He taea ai ahau te whakato mga site hou engari ka nui ake nei ngā tino whai access.

Ko te mea kua e whai i subdomains, he tino kitea ana koe ki te whakarite wildcard subdomains mō tō network multisite.

Mō te whakamahi i tēnei, pāinga ki te dashboard o te account hosting o tō Website (e.g cPanel/Plesk/Direct Admin i runga i tō whai hosting).

Whakawātea i he kupu mō "Domains" he tino kitea ana ai i ngā control panel. I ngā control panel, he pēnei te whakamārama ana: “Domain administration”.

I te whānui o te subdomain, mā te whakamārama (asterisk) (*), i te wā ko e whakamae ana, ka āwhi ia koe kia whiriwai te ingoa o te domain i te mea e pēnei te tika ana.

Ka whai ake ai te whakatika i te root o te domain i whiriata. Ka whakatutaku (Click) i te button _Create_ he tino pai, he kawhai (Save). Ka āwhi ia koe ki te subdomain wildcard o koe. Ka kitea i te whakamahi: “*.[mydomain.com](http://mydomain.com)”
