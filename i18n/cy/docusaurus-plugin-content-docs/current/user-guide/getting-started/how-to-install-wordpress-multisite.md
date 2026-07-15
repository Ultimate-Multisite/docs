---
title: Sutaliad yr WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Sut yn Installio WordPress Multisite?

Mae WordPress Multisite yn sylwch i'n gael rheol o wefan ar gyfer ystod unig. Mae hyn yn ffeithau wedi'i cyfathoghio, ond nid yw'n weithredol yn ddefnyddiol yn ddefnyddiol yn ddefnyddiol.

:::tip
Mae Ultimate Multisite yn cynnwys **[Gweidiell Ystyriaeth Multisite wedi'i Cyflwyno](./multisite-setup-wizard)** sy'n cyfathoghio'r proses gyfan hwn. Os oes gennych chi Ultimate Multisite wedi'i ddefnyddio, mae ein gwirioneddol yn cynrychioli'r gweidiell ystod yllori'r dystiolaethau manwl isod.
:::

Gan fod Ultimate Multisite yn plugin sy'n gynnwys rheol unig, mewn dystiolaeth hwn, byddwch yn dysgu sut i ddefnyddio a setio WordPress Multisite yn manwl. Mae'r testun hwn yn adala ar [Sut i Ddefnyddio a Setio WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), o WPBeginner.

**Pethau sydd i'w sylw ar ôl ychwanegu eich rheol multisite:**

  * Derbyn gweithredol WordPress da! Mae wefan ar gyfer y rheol yn rhannu resurciai server unig.

  * Mewn achos oes gennych chi rhywbeth o wefan gyda chwarae isel, bydd hosting cyfrifol (shared hosting) yn gweithio iawn i chi.

  * Mae'r bennaf **Cyfathrebu WordPress wedi'i Gariadu** yn cynnig Multisite o'r ddefnyddio (maentaf ychwanegu WordPress gyda Multisite wedi'i weithredol a'i setio ar gyfer chi). Mae hyn yn digwydd i WP Engine, Closte, Cloudways, etc. Os nad yw'n sicr chi beth yw hyn ar gyfer eich cyfathrebu hosting, gwahidi eu cefnogaeth cyn mynd ymlaen gyda'r dystiolaeth hwn.

  * Mae'n dda hefyd fod yn gwyllt â'r ddefnyddio WordPress a redig fyliau (files) drwy FTP.

_**DAU**_ **:** Os ydych chi'n setio rheol multisite ar wefan WordPress sydd wedi'i cyfathoghio, peidiwch ag oeth i:

  * Creu bakaif llawn o eich wefan WordPress

  * De-weithredol pob plugin ar eich wefan gan ddychwch i'r dudalen pluginau ac gw milltedd _Deactivate_ o'r gweithrediad cyfathoghio a ddilyn ychwanegu _Apply_.

Iechyddu'r Multisite i'wainio, mae'n ddefnyddio client FTP neu fylchgarau o'r cPanel i cysylltu â'ch safle ac osgo'r fylchgarau eich `wp-config.php` i redig.

Ar ôl y llinell _*Daeth y cyfathrebu, stop redig! Blogu'n hapus.*_ dod o hyd i'r cod yn ymlaen:

```php
define('WP_ALLOW_MULTISITE', true);
```

Rydych chi'n gael y ffeithrediad Multisite ar eich safle, mae angen i chi ddatblygu eich rheol.

Goedi i **Tools » Network Setup** (Tadlu: Toolau » Rheoli Nethwyll).

Mae angen i chi ddweud wrth WordPress beth yw'r ffurfwr o'r domenaidd sydd yn cael ei ddefnyddio ar gyfer safleoedd yn eich rheol: subdomains neu subdirectories.

Os gwahironwch subdomains, mae angen i chi newid eich setau DNS ar gyfer cyflwyniad domenaidd ac sicr ychwanegu _**wildcard subdomains**_ ar gyfer eich rheol Multisite.

Tylch yn ôl i Rheoli Nethwyll, rhoi enw i'r rheol eich rheol (network) a sicr bod yr adran e-bostau mewn email y rheol Network yn iawn. Clic ar _Install_ i ddeall ymlaen.

Dodwch y cod hwn, a ddarganfod gan WordPress, i'ch `wp-config.php`:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

A hefyd y cod hwn, a ddarganfod gan WordPress, i'ch fylchgarau `**.htaccess**`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gofalwch eich client FTP neuediadol neu rheolwr fyliau (os oes gennych rhywbeth fel cPanel, er engh님) i copio a gyswllt y cod yn y ddau hyn.

Yn ddiwedd, rhai'r logi eto ar eich siat WordPress i cyffredinol eich rheolwr multisite.

**Mae'n bwysig gwneud gwyliau a sicr y gallwch ddefnyddio subsite ar eich càiad WordPress Multisite yn gyflwynig قبل eich bod yn chwarae Ultimate Multisite.**

I creu subsite:

  1. Agor eich wefanau wp-admin
  2. Rhewch i My Sites > Sites (/wp-admin/network/sites.php)
  3. Clic Add New ar y ddefnyddiol
  4. Gyflwynwch pob ffeil:

  * Site Address — Peidiwch â defnyddio “www”
  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
  * Site Title — Titell y wefan, gallai ei newid yn neslinell
  * Admin Email — Rheoli fel defnyddi admin cyntaf ar gyfer y subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Ar ôl gyflwyno'r ffeiliau, clywed y "Add site". Ar ôl creu'r subsite newydd, mynd arno i chwarae iddo i sicr bod y subsite yn gweithredol.

## Problemy Cyffredinol: {#add-a-trailing-slash-to-wp-admin}

### 1. Gallaf i ffresgu siat newydd ond nid yw'n cyffredinol. {#common-problems}

Os ydych chi wedi dewis subdomainau, mae angen hefyd i ddefnyddio subdomainau wildcards ar gyfer eich rheol multisite.

I wneud hynny, mynd i'r dashboard o'r cyfrifau eich cyflwyniad wefan (e.e., cPanel/Plesk/Direct Admin yn ôl eich cyflwyniad)
Gwneud chwilio am opsiwn ar gyfer “Domains” neu “Subdomains”. Mewn rhai cyfrifau, mae'n cael ei ddefnyddio fel “Domain administration”.

Ar gyfer y field y subdomain, rhaiwch an asterisk (*). Yna bydd ei fod yn gofyn i chi ddewis enw domaint lle dod y subdomain arall.

Bydd y gorthwr (document root) ar gyfer enw domaint wedi'i gael yn awtomatig. Clic ar y butwn _Create_ neu _Save_ i drosu eich subdomain cyflenwiol (wildcard). Bydd y cyflwyniad yn edrych fel “*.[mydomain.com](http://mydomain.com)”.
