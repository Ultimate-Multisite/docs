---
title: Com instal·lar WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Com instal·lar WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite et permet tenir una xarxa de sites en una única instal·lació. És una funcionalitat pròpia, però no està activa per defecte.

:::tip
Ultimate Multisite inclou un **[Wizard de configuració Multisite integrat](./multisite-setup-wizard)** que automatitza tot aquest procés. Si tens Ultimate Multisite instal·lat, et recomanem utilitzar el wizard en lloc de seguir els passos manuals de més avall.
:::

Com que Ultimate Multisite és un plugin només per a xarxes (network-only), en aquest tutorial vas a aprendre com a instal·lar i configurar WordPress Multisite manualment. Aquest text es basa en [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Coses a tenir en compte abans de crear la teva xarxa multisite:**

  * ¡Assigura-te d'tenir un bon aillage de WordPress! Els sites d'una xarxa comparteixen els mateixos recursos del servidor.

  * Si només tens un parell de sites amb trànsit baix, l'aillage compartit probablement et farà servir.

  * La majoria dels **proveïdors d'aillage WordPress gestionat** ofereixen Multisite de serie (instal·len WordPress amb Multisite ja activat i configurat per tu. Això és el cas de WP Engine, Closte, Cloudways, etc.). Si no estàs segur si és el cas del teu proveïdor d'aillage, contacta amb el seu suport abans de continuar amb aquest tutorial.

  * També és bo estar familiaritzat amb l'instal·lació de WordPress i l'edició de fitxers utilitzant FTP.

_**IMPORTANT**_ **:** Si estàs configurant una xarxa multisite en un lloc web de WordPress ja existent, no t'oblidis de:

  * Crear una còpia de segure de tot el teu lloc web de WordPress

  * Desactivar tots els plugins del teu site anant a la pàgina de plugins i seleccionant _Deactivate_ des de les accions en massa i després fent clic a _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Per activar Multisite, primer has de connectar-te al teu site utilitzant un client FTP o un gestor de fitxers de cPanel, i obrir el teu fitxer wp-config.php per editar-lo.

Abans de la línia _*That’s all, stop editing! Happy blogging.*_, afegeix el següent fragment de codi:

define('WP_ALLOW_MULTISITE', true);

Guarda i carrega el teu fitxer wp-config.php al servidor.

Amb la funcionalitat multisite activada al teu site, ara és hora de configurar la teva xarxa.

Va a **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Ara has de dir a WordPress quin tipus de estructura de domini utilitzaràs per als sites de la teva xarxa: subdominis o subdirectòries.

Si et trigues subdominis, has de canviar la configuració DNS per a la cartografia de domini i assegurar-te de configurar _**wildcard subdomains**_ per la teva xarxa multisite.

Torna a Network Setup, dona un títol a la teva xarxa i assegura't que l'adreça electrònica a l'administrador de la xarxa és correcta. Fes clic a _Install_ per continuar.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Afegeix aquest codi, proporcionat per WordPress, al teu _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

I aquest codi, també proporcionat per WordPress, al teu fitxer _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Utilitza un client FTP o un gestor de fitxers (si utilitzes alguna cosa com cPanel, per exemple) per copiar i enganxar el codi en aquests dos fitxers.

Finalment, reinicia la sessió al teu site de WordPress per accedir a la teva xarxa multisite.

**És important provar i assegurar-te que pots crear un subsite en la teva instal·lació de WordPress Multisite abans d'instal·lar Ultimate Multisite.**

Per crear un subsite:

  1. Obre l'wp-admin del teu lloc web

  2. Navega a My Sites > Sites (/wp-admin/network/sites.php)

  3. Fes clic a Add New en la part superior

  4. Omple tots els camps:

  * Site Address — Nunca utilitzis “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Títol del site, es pot canviar més tard

  * Admin Email — Configura l'usuari administrador inicial per al subsite

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Després d'omplir els camps, fes clic al botó "Add site". Una vegada creat el nou subsite, continua i accedeix-hi per assegurar-te que el subsite funciona.

## Problemes Comuns: {#common-problems}

### 1. Incapacitat de crear sites nous, però no són accessibles. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Si et trigues subdominis, també has de configurar subdominis wildcard per la teva xarxa multisite.

Per fer-ho, va al panell de control de la compte d'aillage del teu lloc web (per exemple cPanel/Plesk/Direct Admin, depenent del teu proveïdor d'aillage).

Busca una opció de "Domains" o "Subdomains". En alguns panells de control està etiquetat com "Domain administration".

En el camp de subdomain, afegeix un asterisc (*). Després, hauria demanar seleccionar un nom de domini on vols que s'afegeixi el subdominí.

La carpeta de documentació (document root) per al nom de domini seleccionat es detectarà automàticament. Fes clic al botó _Create_ o _Save_ per afegir el teu subdominí wildcard. L'entrada hauria de veure "*-.[mydomain.com](http://mydomain.com)"
