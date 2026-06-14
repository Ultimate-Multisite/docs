---
title: Comharrachadh WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Cona chlàradh WordPress Multisite?

Leidichir WordPress Multisite leideach thu a bhith agadair seannach de siti ar cur-a-chlu. Is e feuma seo a th'annach, ach tha e ann an-diugh gu nàdarach.

:::tip
Innecear Ultimate Multisite a tha **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** a tha a' tòiseachadh an t-sealladh seo a th'annach. Tha e a' tòiseachadh an t-sealladh seo gu lèir. Mar a tha Ultimate Multisite agadair, rinn mi a' tòiseachadh gu robh thu a' sgrùdadh a' tòiseachadh a' t-sealladh seo a' tòiseachadh a' tòiseachadh a' t-sealladh seo a' tòiseachadh.
:::

Mar a tha Ultimate Multisite agadair, tha thu ag iarraidh a' faighinn agus a' sethandle WordPress Multisite gu mheasach. Tha an t-earrach seo a' tòiseachadh air [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Cosa a bhith ag iarraidh a' faighinn air a bhith a' tòiseachadh gu robh thu a' creachadh an t-sealladh Multisite:**

  * Faigh hosting WordPress gu mionnach! Tha siti ar cur-a-chlu ar chluar resurgail seannach.

  * Mar a tha thu ag deamh a bhith agadair beag siti le fòcas beag, tha shared hosting a' tòiseachadh gu robh thu a' sgrùdadh.

  * Tha daoine **Managed WordPress hosting providers** gu mòr a' tòiseachadh Multisite gu mheasach (a thann an WordPress le Multisite a' tòiseachadh agus a' sethandle airson do). Tha seo ag obair airson WP Engine, Closte, Cloudways, etc. Mar a tha thu a' faighinn an t-sealladh seo air do host, coimhead le do chùlcas gu robh thu a' sgrùdadh a' tòiseachadh a' tòiseachadh a' tòiseachadh a' tòiseachadh.

  * Tha e gu math a bhith ag faighinn an WordPress agus a' atharrachail fhaighinn a' le FTP.

_**IMPORTANT**_ **:** Mar a tha thu a' sethandle Multisite ar sealladh WordPress agadair, eann a bhith a' tòiseachadh air:

  * Creagh a' chàrr-bàidh (backup) leatamach de do sealladh WordPress.

  * Ath-ghnìthich (deactivate) a' chùlcas gu latha ar do sealladh a' tòiseachadh gu robh thu a' sgrùdadh, agus tha' e a' tòiseachadh air _Deactivate_ de bulk actions agus tha' e a' tòiseachadh air _Apply_.

Chan eil a' chàirich a' sgrùdadh: WordPress plugins page a' sgrùdadh an athrachadh bulk deactivate.

Chan eil Multisite a fháil air, cuir amradh gu fàilte air a ghnàthach a' chuid site a' chluainte (FTP client) no cPanel file manager, agus coileadh an t-file `wp-config.php` a' chluainte airson atharrachadh.

An sin, le bhith a' chluainte an línte: _*Tha sin gu las, sealltainn! Bhaileachd fìor.*_ cuir an codal seo a' chluainte:

```php
define('WP_ALLOW_MULTISITE', true);
```

Cuir an t-file `wp-config.php` a' chluainte agus a' sgrùdadh air an server.

Le bhith Multisite a' chluainte air an site, tha e an t-am airson a' sgrùdadh an t-sieidseachd (network) agad.

Ràdh anseo: **Tools » Network Setup**

Chan eil screenshot a' chluainte: WordPress Tools menu a' sgrùdadh option Network Setup.

An uair, tha thu ag iarraidh a' sgrùdadh do WordPress gu faice ri chuid stràth domain a bheil thu a' sgrùdadh airson sitean a' chuid network agad: subdomains (subdomain) no subdirectories (subdirectory).

Chan eil thu a' tighinn air subdomains, tha thu ag iarraidh a' chluainte an deiseil airson mapping domain agus a' sgrùdadh _**wildcard subdomains**_ airson an teannach Multisite agad.

Ràdh anseo: Network Setup, cuir tairgse (title) airson an teannach agad agus dìreach a' faic gu bheil an ainm e-mail anns an admin email air a' chluainte. Cuir _Install_ airson a' sgrùdadh.

Chan eil screenshot a' chluainte: WordPress Network Setup page le tairgse an teannach agus an ainm e-mail admin.

Cuir an codal seo, a tha WordPress a' chluainte, air an _**wp-config.php**_:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

Chan eil an codal seo, a tha WordPress a' chluainte, air an _**.htaccess**_ file:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Usga un FTP client no 'n file manager (os a tha tha a bh't a tha a cPanel, gan eil thu a' chùis), le coir agus paste an cod i earrach na dacda seo.

An uair a tha thu a' chùis ar fáil ar WordPress, leathain sealltainn (multisite) a ghlacadh air a faighinn a' chùis.

**Tha e prìomhach a bhith a' chùis agus a' sgrùdadh gu bheil thu a' fhaighinn an subsite ar do WordPress Multisite a bhith agad air a shlàmhachadh a dimint a tha a' chùis Ultimate Multisite.**

At sao a bhith a' chùis:

  1. Coir do seòiltainn (websites) wp-admin
  2. Tuis a' chùis gu My Sites > Sites (/wp-admin/network/sites.php)
  3. Clic Add New air an t-aon.
4. Ghàinm thu a' chùis gu latha:

* Site Address — Donn a bhith a' chùis "www"
* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Site Title — Taisneil a' chuis, is eadar a thar a' chùis an t-aon

* Admin Email — Set as an ùir a' chuis admin airson an subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

An uair a tha thu a' chùis gu latha, coir an "Add site". An uair a tha an subsite a' chùis, thoir air a ghlacadh airson a bhith a' chùis agus a' sgrùdadh gu bheil an subsite a' chùis.

## Earracha a tha a' chùis:

### 1. Is e féidir li mi a shlàmhachadh seòiltainn ùra ach tha iad a' chùis.

Tha thu a' chùis subdomains, tha thu a' fhaighinn a' chùis wildcard subdomains airson do network multisite.

Dèanadh sin, coir gu an dashboard control panel a' chuis a' chuis a' chuis a' chuis (e.g cPanel/Plesk/Direct Admin a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a' chuis a'

Ar an fhaisg de 'subdomain', leugh an astirsk (*). An uair a tha thu a' sgaidh, rinn an t-aon chuid domaint gu leathan sin a tha thu a' ginn a bhith a' tòiseachadh.

Bidh an cruth domaint (document root) airson an domaint a th'ann thu a' ginn a bhith a' tòiseachadh gu leathan sin a tha thu a' ginn a bhith a' tòiseachadh gu leathan sin a tha thu a' ginn a bhith a' tòiseachadh.

Cloich air an nút 'Create' (Cruth) no 'Save' (A' sgaidh) airson a bhith a' tòiseachadh a' chuid subdomain a tha thu a' ginn a bhith a' tòiseachadh gu leathan sin. Bidh an fhaisg a' tòiseachadh mar: “*.[mydomain.com](http://mydomain.com)”
