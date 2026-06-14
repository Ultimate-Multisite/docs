---
title: Quomodo instalare WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Quommodo Installō WordPress Multisite?

WordPress Multisite te permittit habere network sitium in una sola installation. Hoc est factor inclusus, sed non est activus per default.

:::tip
Ultimate Multisite includit **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** qui omnem hanc processum automatizat. Si Ultimate Multisite habes installatum, ut hoc manualiter sequam, wizardem uti recommendamus in loco inferioribus.
:::

Quia Ultimate Multisite est plugin sol network, in hoc tutoriale discere currendis quommodo WordPress Multisite manualiter instalare et configurare. Hoc textum fundatur ex [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), a WPBeginner.

**Cosa debet in mente antequam network multisite tuum creas:**

  * Accipe hospedium WordPress bonum! Sitium in network communibus res serveris partibus habent.

  * In casu quod sol pares sita cum traffico minimō, shared hosting tibi probabilemente sufficiet.

  * Multa **Managed WordPress hosting providers** Multisite out-of-the-box offerunt (WordPress cum Multisite iam activum et configuratum pro te installant). Hoc est casus ad WP Engine, Closte, Cloudways, etc. Si non es sic certus de hoc pro tuo provider hostis, contacta supportum eorum antequam in hanc tutorialem procedere.

  * Etiam bonum est esse familiaris cum installatione WordPress et editore librari per FTP.

_**IMPORTANTE**_ **:** Si network multisite in situm WordPress iam existentibus configurabis, ne obliviscari:

  * Backup completum siti WordPress tuum creare

  * Omnes plugins in tuo sitio deactivare per ire ad paginam pluginium et selectum _Deactivate_ ex bulk actions et deinde cliccare _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Ad rem Multisite (Multisito) activare, primum connecta ad situm tuum per client FTP vel qua manager file cPanel, et aperire filum tuum wp-config.php ad editum.

Ante lineam _*Ita finis, cessare editum! Blogna felix.*_, add hoc fragmentum codicis:

define('WP_ALLOW_MULTISITE', true);

Salva et upload filum tuum wp-config.php in server.

Cum functio multisite in situo tuo activata, nunc tempus est ad configurandum ratum tuum.

Ire ad **Tools » Network Setup** (Instrumenta » Configuratio Reticulis)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Nunc debes dicere WordPress quid est structura dominii ut usus in locis network tuis: subdomini vel subdirectoria.

Si eliges subdominia, debes mutare parametra DNS ad mappam dominii et assurae esse configuratio _**wildcard subdomains**_ pro ratu multisite tuum.

Ad Network Setup redi, da titulam ratui tuo et assurae esse quod adressa epistolaris in email admin network est rectae. Click _Install_ (Installa) ad continuandum.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Hoc codicem addere, quod a WordPress praebet, ad filum tuum _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Et hoc codicem, etiam a WordPress praebet, ad filum tuum _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add trailing slash in /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Utiliza un cliente FTP o un administrador de archivos (si estás usando algo como cPanel, por ejemplo) para copiar y pegar el código en estos dos archivos.

Finalmente, vuelve a iniciar sesión en tu sitio de WordPress para acceder a tu red multisite.

**Es importante probarlo y asegurarte de que puedes crear un subsitio en tu instalación de WordPress Multisite antes de instalar Ultimate Multisite.**

Para crear un subsitio:

  1. Abre el área de administración de tus sitios wp-admin

  2. Navega a Mis Sitios > Sitios (/wp-admin/network/sites.php)

  3. Haz clic en Añadir Nuevo en la parte superior

  4. Rellena todos los campos:

  * Dirección del sitio — Nunca uses “www”

  * Subdominio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectorio: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Título del sitio — Título del sitio, se puede cambiar más tarde

  * Correo electrónico de administrador — Configura como el usuario administrador inicial para el subsitio

![Formulario para añadir un nuevo sitio en WordPress Multisite](/img/admin/sites-list.png)

Después de rellenar los campos, haz clic en el botón "Añadir sitio". Una vez creado el nuevo subsitio, ve y accédelo para asegurarte de que el subsitio funciona correctamente.

## Problemas Comunes:

### 1. Puedo crear sitios nuevos pero no son accesibles.

Si elegiste subdominios, también necesitas configurar subdominios comodín (wildcard) para tu red multisite.

Para hacer esto, ve al panel de control de la cuenta de alojamiento de tu sitio web (por ejemplo cPanel/Plesk/Direct Admin dependiendo de tu proveedor de hosting).

Busca una opción para “Dominios” o “Subdominios”. En algunos paneles de control se etiqueta como “Administración de dominios”.

In campo sottodominio, inserisci un asterisco (*). Poi ti verrà chiesto di selezionare il nome del dominio sotto il quale desideri aggiungere il sottodominio.

Il root del documento per il nome del dominio selezionato verrà rilevato automaticamente. Clicca sul pulsante _Create_ o _Save_ per aggiungere il tuo sottodominio wildcard. L'inserimento dovrebbe apparire come “*.[mydomain.com](http://mydomain.com)”.
