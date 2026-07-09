---
title: Kiel instali WordPress Multisite?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kiel mi instalas WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite pervasivon viemo unu sistemos de sitos unigajne instalacio. Ĝi estas inkluziva funkcio, sed ĝi ne estas aktiva por default.

:::tip
Ultimate Multisite inkluzas **[built-in Multisite Setup Wizard](./multisite-setup-wizard)**, kiu automatigas ĉiujn tiuj procesojn. Se vi havas Ultimate Multisite instalitan, ni rekomendas uzui la wizardan en ili en tiu tuta proceson.
:::

Ĉar Ultimate Multisite estas plugino por retoj nur, en ĉi tiu tutoro vi lernos kiel instali kaj konfiguri WordPress Multisite manuele. Ĉi tiu teksto bazita sur [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Aŭlaj thingoj, kiujn vi devas komenci antaŭ krei vian multisite reton:**

  * Akvizi bonegan WordPress hospedadon! Sitoj sur la retoj partaj la homaj resursojn de la servero.

  * Se vi havas nur du aŭ pli sitoj kun malalta trafiĝo, shared hosting probable funkcias por vi.

  * La plej multaj **Managed WordPress hosting providers** ofres Multisite per default (il instalas WordPress kun Multisite déjà aktiva kaj konfiguraita por vi). Tio estas la kazo por WP Engine, Closte, Cloudways, etc. Se vi ne estas certa, ĉu tio estas la kazo por via hospedilo provizanto, kontakti sian suporton antaŭe pliante al ĉi tiu tutoro.

  * Ĝi ankaŭ bone esti familiala kun instalado de WordPress kaj redigado de filoj uzante FTP.

_**IMPORTAN**_ **:** Se vi konfiguras multisite reton sur ekzista WordPress sita, ne forgi:

  * Krei kompletan backup de via WordPress sitio
  * Deaktivi ĉiuj pluginojn sur via sitio per gidi al via plugino-paĝo kaj selekti _Deactivate_ el bulk actions kaj tiam kliki _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Pra aktivi WordPress Multisite, konekteziĝu al viajito per FTP klienton aŭ cPanel file manager kaj ofpuŝu vian wp-config.php filon por edito.

Mankaj la linion _*Tio estas ĉio, ĉesu editi! Bonan blogadon.*_, aldonu la seguenti kodajn fragmentojn:

define('WP_ALLOW_MULTISITE', true);

Salvu kaj plunviŝu vian wp-config.php filon malankom ilje al servero.

Kaj kun la multisite funkcio aktiva sur viajito, nun estas tempo montri vian reton.

Aliriĝu al **Tools » Network Setup** (Instrumentoj » Reta Montado)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nun vi devas diri WordPress, kion tipo domajno strukturon vi uzos por site en via reta: subdomajn aŭ subdirektarojn.

Se vi elektas subdomajn, vi devas ŝanĝi vian DNS-parametroj por domajno mapado kaj certifi, ke montrigos _**wildcard subdomajn**_ por via multisite reta.

Malankom al Network Setup, donu titolojn al via reta kaj certigu, ke la elektronika adreso en la emaila adresaro de la administrado de la Reta estas ĝusta. Kliku sur _Install_ (Instali) por kontinui.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Aldonu ĉi tiun kodon, donitan per WordPress, al viajo _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Kaj ĉi tiun kodon, ankaŭ donitan per WordPress, al viajo _**.htaccess**_ filon:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# aldonu finajn slajojn al /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Uzemite FTP klienton aŭ fakilman (se vi uzas ion simile al cPanel, paŭze) kopu kaj instandu la kodon en ĉi tiuj du filoj.

Finalan, re-logu sin al via WordPress-stito por akcesi vian multisite-retecon.

**Ĝi estas grava testiniti kaj certigi, ke vi povas krei substiton sur via WordPress Multisite instalado antaŭ instandu Ultimate Multisite.**

Por krei substiton:

  1. Opun vian wp-admin (viaj sitoj)

  2. Navigu al My Sites > Sites (/wp-admin/network/sites.php)

  3. Kliku "Add New" en la supero

  4. Plenpus ĉiuj kampoj:

  * Site Address — Ne uzu "www"
  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
  * Site Title — Titolo de la sitio, ki povas esti ŝanĝita maldaŭre
  * Admin Email — Definiti kiel la unua admin-uzo por la substito

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Post plenumado de kampoj, kliku la butonon "Add site". Kiel la nova substito estas kreita, aliri ĝin kaj certigi, ke la substito funkcias.

## Komuna Problemoj: {#common-problems}

### 1. Mi povas krei novajn sitojn, sed ili ne estas akcesaj. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Se vi elektis subdomainojn, vi ankaŭ bezonas montri wildcard-subdomainojn por via multisite-reteco.

Por ti, navigu al la kontrolpulto de la alojigo de via Situaĉo (ekzemple cPanel/Plesk/Direct Admin dependas de via alojiganto).

Aĉetu opcion por "Domains" aŭ "Subdomains". En certaj kontrolpultoj ĝi estas etiketita kiel "Domain administration".

Na la campo de subdomajno, skribi asteriskan (*). Tiam ĝi domina nomon, kie vi volas, plibondu ti subdomajno elektos.

La dokumento root por selektita domina nomo sera otomatikman detekta. Kliku sur butonon _Create_ (Krei) aŭ _Save_ (Salva), por pliigi vian wildcard subdomajno. La enskribo devas ŝajni kiel “*.[mydomain.com](http://mydomain.com)”
