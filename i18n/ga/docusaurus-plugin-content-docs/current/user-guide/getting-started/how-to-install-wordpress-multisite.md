---
title: Conas aistriú WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Conas an WordPress Multisite?

Leine WordPress Multisite leat faoi bhealach chun siomraithe (network) de shailte ar chuid isteach. Is éifeacht is éifeacht a bhí ag curtha go léir, ach níl é an-aontaithe go dtí.

:::tip
Tá **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** sa Ultimate Multisite ar fáil a bheith leat chun an tairiscint an tús a dhéanamh ar an gualchas seo. Má tá Ultimate Multisite ar fáil, is uraimid an gualchas a úsáid go cnagmha eile a bheith ag curtha an tairiscint seo a dhéanamh.
:::

Nuair a bhíonn Ultimate Multisite ag curtha ar chuid siomraithe (network) ach an-aontaithe, ag iarraidh a bheith ag curtha agus a chur ar fáil WordPress Multisite go cnagmha eile. Is iarrchlaim seo ag cur isteach ar [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), ó WPBeginner.

**Céad ag cur isteach ar an chéad chun do siomraithe (multisite network) a chur ar fáil:**

  * Déan ghrá WordPress go maith! Tá na shailte ar chuid siomraithe (network) ag cur isteach réimse servera idir.

  * Má tá tú le caithfidh seacht shailte le traic beag, is féidir le hosting shared a bheith agat.

  * Déan cinnte go bhfuil tú ag cur ar fáil **Managed WordPress hosting providers** (hosting ar chuid curtha) an tairiscint Multisite ar fáil (curtha WordPress le Multisite ar fáil agus ar fáil ar fáil). Is é sin an cas a bhí ar WP Engine, Closte, Cloudways, etc. Má níl tú cinnte má tá sé seo ar fáil do curtha hosting, tapaidh leis an tairiscint a dhéanamh go dtí an tairiscint seo.

  * Is freagúil chun WordPress a chur ar fáil agus leat a bhaint ar na fáil (FTP) a bheith agat.

_**IMPORTANT**_ **:** Má tá tú ag cur ar fáil multisite network ar chuid siomraithe WordPress atá ar fáil, níl tú an-aontaithe:

  * Déan gach seacht (backup) de do site WordPress go léir.

  * Deáint an gcothairt (plugins) ar do site ag cur isteach ar fáil leat a bheith agat ar chuid na seachtanna, agus déan _Deactivate_ ó chuid ábhairte (bulk actions) agus tapaidh ar _Apply_.

Leat a fáil! Chunntas leat an Multisite, cur leat ar chuid site agat tríd FTP client nó cPanel file manager, agus lán an t-file *wp-config.php* duit chun é a athrú.

Ar dtús, ar an líne a bhaineann le _*Tá sé seo, stop an athrú! Go raibh maith agat an blog.*_, add an code snippet seo:

define('WP_ALLOW_MULTISITE', true);

Lán agus upload an t-file *wp-config.php* duit ar an server.

Le Multisite fada ar do site, anois tá an am a thaispeáidt do ngrú.

Go dtí **Tools » Network Setup**

Ar an sin, rud éigin leat ag cur ar WordPress conas a bheith agat ar chuid struchtúr domain atá agat chun sites i do ngrú: subdomains nó subdirectories.

Má thug tú ar subdomains, leat ag athrú do ríomhphostais DNS para marbhú domain agus cinnte go bhfuil an setup _**wildcard subdomains**_ fada ar do Multisite network.

Ar ais ar Network Setup, cur tairm (title) ar do ngrú agus cinnte go bhfuil an chuid email i an email admin na ngrú cuimhneachúil. Cliom ar _Install_ chun é a thaispeáidt.

Add an code seo, a bhaineann le WordPress, ar do _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Agus an code seo, a bhaineann le do _**.htaccess**_ file:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add an slash deiridh ar /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use an FTP client nórraithe file manager (if you are using something like cPanel, for example) chun copy agus paste an code seo iad do chuid lán.

Ansin, dhéan ath-logáil ar do site WordPress chun cur isteach i do ngrúin multisite.

**Is féidir linn a shonrachadh agus a fháil ar an t-aistriú go bhfuil tú ag cur isteach subsite ar do càiinnte WordPress Multisite prima caillte a chur isteach.**

Chun cur isteach subsite:

  1. Lán do websites wp-admin
  2. Déan cur isteach i My Sites > Sites (/wp-admin/network/sites.php)
  3. Cliom Add New ar an uair is déan
  4. Bhraoigh go léir na fáil:

* Site Address — Ná raibh tú ag úsáid “www” aon phointe

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Taisc an site, is féidir é a thaispeáint go dtí leat

* Admin Email — Déan é mar úsáid admin prima do subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Tar éis an fáil iad na fáil, cliom ar an nútinn "Add site". Tar éis a bhcreodú an subsite nua, cur isteach go bhfuil sé ag déanamh cinnte go bhfuil an subsite ag déanamh díriú.

## Probleanna Comhthabhairta:

### 1\. Is féidir liom cur isteach nugaiteacha ach níl iad ag cur isteach.

Má bhí tú ag cur isteach subdomains, rud éigin leat a chur isteach ar an gréine wildcard subdomains do do ngrúin multisite.

Chun é sin a dhéanamh, dhéan cur isteach i do dashboard control panel do chontacht an website (e.g cPanel/Plesk/Direct Admin ag accaite ar do chontacht).

Fháil ar oiriúnas chun “Domains” nó “Subdomains”. I gcuid control panels, is féidir é a leanúint mar “Domain administration”.

Ar an áit na fáil (subdomain field), cur isteach astirsk (*). Ansin, cheana féin ag iarraidh a chur i bhfeicimn an domáin a bhfuil tú ag cur an subdomain sin ar an domán a bheith ag cur.

Beidh an ríomhpháirt (document root) do chuid domán atá sceitheadh go dtí. Cliom ar an nútair _Create_ nó _Save_ chun an subdomain wildcard seo a chur i bhfeicimn. Beidh an cur chuig an t-aonacht ag cur: “*.[mydomain.com](http://mydomain.com)”
