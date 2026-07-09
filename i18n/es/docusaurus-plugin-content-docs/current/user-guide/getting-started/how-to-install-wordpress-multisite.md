---
title: Cómo instalar WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# ¿Cómo instalo WordPress Multisite?

WordPress Multisite te permite tener una red de sitios en una sola instalación. Esta es una función integrada, pero no está activa de forma predeterminada.

:::tip
Ultimate Multisite incluye un **[Asistente de configuración de Multisite integrado](./multisite-setup-wizard)** que automatiza todo este proceso. Si tienes Ultimate Multisite instalado, recomendamos usar el asistente en lugar de seguir los pasos manuales a continuación.
:::

Como Ultimate Multisite es un plugin solo para red, en este tutorial vas a aprender cómo instalar y configurar WordPress Multisite manualmente. Este texto se basa en [Cómo instalar y configurar una red WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Cosas a las que prestar atención antes de crear tu red multisite:**

  * ¡Consigue un buen hosting de WordPress! Los sitios web de una red comparten los mismos recursos del servidor.

  * En caso de que tengas solo un par de sitios con poco tráfico, el hosting compartido probablemente te funcione.

  * La mayoría de los **proveedores de hosting WordPress gestionado** ofrecen Multisite listo para usar (instalan WordPress con Multisite ya activado y configurado para ti). Este es el caso de WP Engine, Closte, Cloudways, etc. Si no estás seguro de si ese es el caso de tu proveedor de hosting, contacta con su soporte antes de continuar con este tutorial.

  * También es bueno estar familiarizado con la instalación de WordPress y la edición de archivos usando FTP .

_**IMPORTANTE**_ **:** Si estás configurando una red multisite en un sitio web WordPress existente, no olvides:

  * Crear una copia de seguridad completa de tu sitio WordPress

  * Desactivar todos los plugins de tu sitio yendo a tu página de plugins y seleccionando _Desactivar_ en las acciones en lote y luego haciendo clic en _Aplicar_

<!-- Captura de pantalla no disponible: página de plugins de WordPress mostrando la acción de desactivar en lote -->

Para activar Multisite, primero conéctate a tu sitio usando un cliente FTP o el administrador de archivos de cPanel, y abre tu archivo wp-config.php para editarlo.

Antes de la línea _*Eso es todo, deja de editar. Feliz publicación.*_, añade el siguiente fragmento de código:

define('WP_ALLOW_MULTISITE', true);

Guarda y sube tu archivo wp-config.php de nuevo al servidor.

Con la función multisite activada en tu sitio, ahora es momento de configurar tu red.

Ve a **Herramientas » Configuración de red**

<!-- Captura de pantalla no disponible: menú Herramientas de WordPress mostrando la opción Configuración de red -->

Ahora necesitas indicar a WordPress qué tipo de estructura de dominio usarás para los sitios en tu red: subdominios o subdirectorios.

Si eliges subdominios, debes cambiar tu configuración de DNS para el mapeo de dominios y asegurarte de configurar _**subdominios wildcard**_ para tu red multisite.

De vuelta en la Configuración de red, asigna un título a tu red y asegúrate de que la dirección de correo electrónico en el correo electrónico del administrador de red sea correcta. Haz clic en _Instalar_ para continuar.

<!-- Captura de pantalla no disponible: página de Configuración de red de WordPress con campos de título de red y correo electrónico de administrador -->

Añade este código, proporcionado por WordPress, a tu _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Y este código, también proporcionado por WordPress, a tu archivo _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Usa un cliente FTP o un administrador de archivos (si estás usando algo como cPanel, por ejemplo) para copiar y pegar el código en estos dos archivos.

Finalmente, vuelve a iniciar sesión en tu sitio WordPress para acceder a tu red multisite.

**Es importante probar y asegurarte de que puedes crear un subsitio en tu instalación de WordPress Multisite antes de instalar Ultimate Multisite.**

Para crear un subsitio:

  1. Abre el wp-admin de tus sitios web

  2. Navega a My Sites > Sites (/wp-admin/network/sites.php)

  3. Haz clic en Add New en la parte superior

  4. Completa todos los campos:

  * Dirección del sitio — Nunca uses “www”

  * Subdominio: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectorio: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Título del sitio — Título del sitio, se puede cambiar más adelante

  * Correo electrónico de administrador — Establécelo como el usuario administrador inicial del subsitio

![Formulario para añadir un nuevo sitio en WordPress Multisite](/img/admin/sites-list.png)

Después de completar los campos, haz clic en el botón "Añadir sitio". Una vez creado el nuevo subsitio, continúa y accede a él para asegurarte de que el subsitio funciona.

## Problemas comunes:

### 1\. Puedo crear nuevos sitios, pero no son accesibles.

Si elegiste subdominios, también necesitas configurar subdominios wildcard para tu red multisite.

Para hacerlo, ve al Dashboard del panel de control de la Account de hosting de tu sitio web (p. ej., cPanel/Plesk/Direct Admin según tu proveedor de hosting).

Busca una opción para “Dominios” o “Subdominios”. En algunos paneles de control aparece como “Administración de dominios”.

En el campo de subdominio, introduce un asterisco (*). Luego, debería pedirte que selecciones un nombre de dominio bajo el cual quieres que se añada el subdominio.

La raíz del documento para el nombre de dominio seleccionado se detectará automáticamente. Haz clic en el botón _Crear_ o _Guardar_ para añadir tu subdominio wildcard. La entrada debería verse como “*.[mydomain.com](http://mydomain.com)”
