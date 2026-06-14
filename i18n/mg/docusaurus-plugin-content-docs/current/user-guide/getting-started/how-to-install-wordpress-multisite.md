---
title: Ahoana ny fametrahana WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Ahoana ny fametrahana WordPress Multisite?

Ny WordPress Multisite dia ahafahanao manana tambajotra (network) an'ireo tranokala maromaro ao anaty fampiasana iray. Ity dia tena azo atao fa tsy mandeha ho aktiva amin'ny fahataperana izany.

:::tip
Ny Ultimate Multisite dia ahitana **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** izay manao azy rehetra an-tsokosoko (automate) io dingana io. Raha efa nampiditra ny Ultimate Multisite ianao, dia manoro anareo hampiasa ilay wizard fa tsy arahina ireo dingana ara-dalàna eto ambany.
:::

Satria ny Ultimate Multisite dia plugin natao ho an'ny tambajotra ihany, amin'ity tutorial ity dia ianareo no ianarana ny fomba fametrahana sy fanamboarana WordPress Multisite manokana (man-tsokosoko). Ity lahatsoratra ity dia mifototra amin'ny [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), avy ao amin'i WPBeginner.

**Ireto misy zavatra tokony ho fantatra alohan'ny famoronana ny tambajotra multisite anareo:**

  * Mitadiava hosting WordPress tsara! Ny tranokala ao anatin'ny tambajotra dia mampiasa ireo loharanon-tsakafo (server resources) mitovy.

  * Raha manana toerana vitsivitsy ihany ianao izay tsy dia misy trafiky be, dia mety ho mandeha tsara amin'ny shared hosting izany.

  * Ireo **Managed WordPress hosting providers** maro dia manolotra Multisite mialoha (out-of-the-box) (manampy anareo ny WordPress miaraka amin'ny Multisite efa voafidy sy vita ho anareo). Izany no tranga ho an'i WP Engine, Closte, Cloudways, sns. Raha tsy dia fantatrao raha izany ilay hosting provider anareo izany, dia mifandraisa amin'izy ireo alohan'ny hanohy ity tutorial ity ianao.

  * Tsara koa ny hahafantarana ny fomba fametrahana WordPress sy ny fanovana rakitra (files) amin'ny alalan'ny FTP.

_**Zava-dehibe**_ **:** Raha manao multisite network ianao amin'ny website WordPress efa misy dia aza adino ny:

  * Mamorona backup feno an'ny site WordPress anareo

  * Manakana (Deactivate) ireo plugin rehetra ao amin'ny site anareo amin'ny alalan'ny fipifandra amin'ny pejy plugins ary safidio ny _Deactivate_ avy amin'ny bulk actions dia tsindrio ny _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite (WordPress Multisite) fanaovana aloha, dia mila mifandray amin'ny tranokala anao ianao mampiasa FTP client na cPanel file manager, ary afaka manokatra ny rakitra `wp-config.php` mba hanovana azy.

Alohan'ny tsipika hoe _*Ity no rehetra, aza manova intsony! Faly manoratra.*_ dia ampiana ity code snippet ity:

```php
define('WP_ALLOW_MULTISITE', true);
```

Ataovy an-tsokosoko (Save) ary alefa indray ny rakitra `wp-config.php` any amin'ny server.

Rehefa voafidy ny fahaizana Multisite eo amin'ny tranokala anao, dia fotoana izao hanomanana ny tambajotra iainanao.

Mandehana any amin'ny **Tools » Network Setup** (Fitaovana » Fandrindrana Tambajotra)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ity no tokony hatao anao, dia mila milaza an'i WordPress hoe karazana firafitry ny domain (domain structure) iantsoinao ho an'ny tranokala ao amin'ny tambajotranareo ianao: subdomains ve sa subdirectories?

Raha misafidy subdomain ianao, dia tsy maintsy ovaina ny fandrindrana DNS anao ho an'ny fametrahana domain (domain mapping) ary ataovy antoka fa voaomana tsara ny _**wildcard subdomains**_ ho an'ny tambajotranareo Multisite.

Miverina any amin'ny Network Setup, omeo lohateny (title) ho an'ny tambajotranareo ary antoky fa marina ny adiresin-potoana (email address) ao amin'ny email admin an'ny Network. Kitiro _Install_ mba hanohy.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ampiana ity code ity, omen'i WordPress, ao amin'ny _**wp-config.php**_ anao :

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Ary ity code hafa, omen'i WordPress koa, ao amin'ny rakitra _**.htaccess**_ anao:

```apache
RewriteEngine On RewriteBase /
RewriteRule ^index.php$ - [L]

# ampiana trailing slash ho an'ny /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Mampiasa FTP client na file manager (raha mampiasa zavatra toy ny cPanel, ohatra) mba kopia sy apetraka ny code ao amin'ireto rakitro roa ireto.

Farany, avereno fidirana indray amin'ny tranonkala WordPress anareo mba hahazoana ny tambajotra multisite anareo.

**Zava-dehibe dia mila manandrana sy manamarina fa afaka mamorona subsite ianao ao amin'ny fametrahana WordPress Multisite anareo alohan'ny hanaraka ny Ultimate Multisite.**

Mba famoronana subsite:

  1. Afaka ny websites anareo wp-admin
  2. Mandehana any My Sites > Sites (/wp-admin/network/sites.php)
  3. Tsindrio Add New eo ambony indrindra
  4. Fenoina ireo toerana rehetra:

* Site Address — Aza mampiasa “www” mihitsy

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Ny lohatenin'ny site, azo ovaina aorian'izany

* Admin Email — Ataovy ho mpampiasa admin voalohany ho an'ny subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Rehefa vita ny famenoana ireo toerana rehetra, tsindrio ny bokotra "Add site". Rehefa voforona ny subsite vaovao, mandehana ary afaka miditra azy mba hanamarinana fa miasa tsara ilay subsite.

## Olana Mahazatra:

### 1\. Afaka mamorona sites vaovao aho nefa tsy azo miditra izy ireo.

Raha nifidy subdomain ianao, mila manao koa fepetra ho an'ny wildcard subdomains ho an'ny tambajotra multisite anareo.

Mba hanaovana izany, mandehana any amin'ny dashboard an'ny kaontin'ny hosting anareo (ohatra cPanel/Plesk/Direct Admin miankina amin'ny mpamatsy hosting anareo).

Mitadiava safidy ho an'ny “Domains” na “Subdomains”. Amin'ny control panel sasany dia antsoina hoe “Domain administration” izany.

Ao amin'ny champ subdomain dia soraty asterisk (*). Avy eo, ho fantany ny domain name tianao hampidirina ao anatin'izay.

Ny root directory (fokajy) ho an'ilay domain name voafidy dia ho fantany ho azy. Tsindrio ny bokotra _Create_ na _Save_ mba hanampiana subdomain wildcard-nao. Ny fomba fisehoana dia tokony ho toy izao: “*.[mydomain.com](http://mydomain.com)”
