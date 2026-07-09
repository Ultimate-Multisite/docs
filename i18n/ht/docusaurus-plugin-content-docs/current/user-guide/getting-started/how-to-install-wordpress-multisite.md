---
title: Kijan pou Enstale WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kijan mwen mete WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite pèmèt ou gen yon rezo sit sou yon sèl enstalasyon. Sa se yon fonksyon ki vini ak li, men li pa aktif de fèt.

:::tip
Ultimate Multisite genyen yon **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** ki automate tout pwosesis sa a. Si ou gen Ultimate Multisite enstale, nou rekòmande pou w itilize wizard la olye de swiv etap manual anba a.
:::

Puisque Ultimate Multisite se yon plugin ki sèlman pou rezo (network-only), nan tèmisyèl sa a, ou pral aprann kijan pou w enstale epi configure WordPress Multisite manmanèlman. Tekst sa a baze sou [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), soti nan WPBeginner.

**Chwa ou dwe fè anvan ou kòmanse rezo multisite ou a:**

  * Jwenn yon bon hosting WordPress! Sit sou yon rezo pataje menm resous sèvè a.

  * Si ou gen sèlman kèk sit ki gen trafik ba, shared hosting ap mache pou ou.

  * Lawo **Managed WordPress hosting providers** ofri Multisite de fèt (yo enstale WordPress ak Multisite deja aktive epi configure pou ou). Sa se ka pou WP Engine, Closte, Cloudways, elatriye. Si ou pa asire si sa se ka pou fournisseur hosting ou a, kontakte sipò yo anvan ou kontinye avèk tèmisyèl sa a.

  * Li tou bon pou w konnen kijan pou enstale WordPress epi edite fichye itilize FTP.

_**ENPÒTAN**_ **:** Si ou ap configure yon rezo multisite sou yon sit WordPress ki egziste deja, pa bliye fè sa:

  * Kreye yon backup konplè sit WordPress ou a

  * Deaktive tout plugin yo sou sit ou anvan w ale nan paj plugin ou a epi chwazi _Deactivate_ nan aksyon gwo (bulk actions) epi apre sa klike _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Pou wè Multisite la, premye bagay ou dwe fè se konekte ak sit ou a itilize yon FTP client oswa cPanel file manager, epi ouvri fichye wp-config.php ou a pou modifye li.

Anvan liy _*Sa se tout, kòte modifike! Bon blog.*_, ajoute kòd sa a:

define('WP_ALLOW_MULTISITE', true);

Konserve epi telechaje fichye wp-config.php ou a ankò sou sèvè a.

Lè fonksyon multisite la aktif sou sit ou, kounye a se lè pou w mete tout rezo ou an plas.

Ale nan **Tools » Network Setup** (Tools » Konfigirasyon Rezo)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Kounye a ou bezwen di WordPress ki kalite estrikti domèn ou pral itilize pou sit yo nan rezo ou a: subdomains oswa subdirectories.

Si ou chwazi subdomains, ou dwe chanje konfigirasyon DNS ou pou mapaj domèn epi asire ke setup _**wildcard subdomains**_ pou rezo multisite ou an.

Tounen nan Network Setup la, bay yon tit pou rezo ou a epi asire ke adrès imèl nan email admin Rezo a kòrèk. Klike sou _Install_ (Enstalasyon) pou kontinye.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Ajoute kòd sa a, ki bay pa WordPress la, nan _**wp-config.php**_ ou an :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

E kòd sa a, ki bay pa WordPress la, nan fichye _**.htaccess**_ ou an :

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# ajoute yon slash final pou /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Pou wè yon FTP client oswa yon file manager (si ou ap itilize yon bagay tankou cPanel, pa egzanp) pou kopye epi kole kòd sa yo nan de fichye sa yo.

Finalman, re-login sou sit WordPress ou a pou ou ka jwenn aksè nan rezo multisite ou an.

**Li enpòtan pou w teste epi asire ou kapab kreye yon subsite sou enstalasyon WordPress Multisite ou an anvan ou mete Ultimate Multisite.**

Pou kreye yon subsite:

  1. Louvri wp-admin sit ou yo

  2. Ale nan My Sites > Sites (/wp-admin/network/sites.php)

  3. Klike Add New an anwo a

  4. Ranplase tout fòm sa yo:

  * Site Address — Pa janm itilize “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Tit la sit la, ou ka chanje li pi l rete

  * Admin Email — Mete li kòm itilizat admin inisyal pou subsite a

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Malgre ranpli tout fòm yo, klike sou bouton "Add site". Lè nou kreye nouvo subsite a, ale epi aksè li pou w asire ke subsite a fonksyone byen.

## Pwoblèm komen: {#common-problems}

### 1. Mwen ka kreye nouvo sit men yo pa rive jwenn yo. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Si ou te chwazi subdomain, ou bezwen tou mete wildcard subdomains pou rezo multisite ou an.

Pou fè sa, ale nan dashboard kont wè wè sit la (pa egzanp cPanel/Plesk/Direct Admin selon fournisseur wè).

Chèche yon opsyon pou “Domains” oswa “Subdomains”. Nan kèk panel kont yo, li rele “Domain administration”.

Nan fèt la, ou inite sou fò ou vle wè yon sijè ki gen tout bagay (wildcard). Nan fèn nan "subdomain field", enter yon estè (*). Lè sa fèt, li pral mande ou chwazi non domèn kote ou vle mete subdomain la.

Root dokiman pou non domèn ki chwazi a ap detèmen otomatikman. Klike sou bouton _Create_ (Kreye) oswa _Save_ (Konsèvi) pou ajoute subdomain w la ki gen tout bagay sa a. Entrè a pral gade tankou “*.[mydomain.com](http://mydomain.com)”.
