---
title: Cómo instalar WordPress Multisite
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# ¿Cómo instalo WordPress Multisite?

WordPress Multisite te permite tener una red de sitios en una sola instalación. Esta es una función incorporada, pero no está activa por defecto.

Dado que Ultimate Multisite es un plugin exclusivo para redes, en este tutorial aprenderás cómo instalar y configurar WordPress Multisite. Este texto se basa en [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), de WPBeginner.

**Cosas a tener en cuenta antes de crear tu red multisite:**

* ¡Obtén un buen hosting de WordPress! Los sitios web en una red comparten los mismos recursos del servidor.
* En caso de que tengas solo un par de sitios con bajo tráfico, el hosting compartido probablemente funcione para ti.
* La mayoría de los **proveedores de hosting gestionado de WordPress** ofrecen Multisite de forma predeterminada (instalan WordPress con Multisite ya activado y configurado para ti). Este es el caso de WP Engine, Closte, Cloudways, etc. Si no estás seguro de que sea así con tu proveedor de hosting, contacta su soporte antes de continuar con este tutorial.
* También es bueno familiarizarse con la instalación de WordPress y la edición de archivos usando FTP.

_**IMPORTANTE** **:** Si estás configurando una red multisite en un sitio web de WordPress existente, no olvides:

* Crea una copia de seguridad completa de tu sitio WordPress
* Desactiva todos los plugins en tu sitio yendo a la página de plugins y seleccionando _Deactivate_ de las acciones masivas y luego haciendo clic en _Apply_

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

Para habilitar Multisite, primero conéctate a tu sitio usando un cliente FTP o el administrador de archivos de cPanel, y abre tu archivo wp-config.php para editarlo.

Antes de la línea _*That’s all, stop editing! Happy blogging.*_, agrega el siguiente fragmento de código:

```php
define('WP_ALLOW_MULTISITE', true);
```

Guarda y sube tu archivo wp-config.php de nuevo al servidor.

Con la función multisite habilitada en tu sitio, ahora es hora de configurar tu red.

Ve a **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Ahora necesitas decirle a WordPress qué tipo de estructura de dominio usarás para los sitios en tu red: subdominios o subdirectorios.

Si eliges subdominios, debes cambiar la configuración de DNS para el mapeo de dominios y asegurarte de configurar _**wildcard subdomains**_ para tu red multisite.

Regresa a la Configuración de la Red, asigna un título a tu red y asegúrate de que la dirección de correo electrónico en el correo del administrador de la red sea correcta. Haz clic en _Install_ para continuar.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Agrega este código, proporcionado por WordPress, a tu _**wp-config.php**_ :

```php
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', true);
define('DOMAIN_CURRENT_SITE', 'multisite.local');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

Y este código, también proporcionado por WordPress, a tu archivo _**.htaccess**_ :

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
# add a trailing slash to /wp-admin
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(wp-(content|admin|includes)._) $1 [L]
RewriteRule ^(._.php)$ $1 [L]
RewriteRule . index.php [L]
```

Usa un cliente FTP o un administrador de archivos (si usas algo como cPanel, por ejemplo) para copiar y pegar el código en estos dos archivos.

Finalmente, vuelve a iniciar sesión en tu sitio WordPress para acceder a tu red multisite.

**Es importante probar y asegurarse de que puedas crear un subsitio en tu instalación de WordPress Multisite antes de instalar Ultimate Multisite.**

Para crear un subsitio:

1. Abre el wp-admin de tu sitio web
2. Navega a My Sites > Sites (/wp-admin/network/sites.php)
3. Haz clic en Add New en la parte superior
4. Rellena todos los campos:

* Site Address — Nunca uses “www”
* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)
* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)
* Site Title — Título del sitio, puede cambiarse más tarde
* Admin Email — Establece como el usuario administrador inicial para el subsitio

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

Después de completar los campos, haz clic en el botón "Add site". Una vez que el nuevo subsitio esté creado, accede a él para asegurarte de que el subsitio sea funcional.

## Problemas comunes:

### 1\. Puedo crear nuevos sitios pero no son accesibles.

Si elegiste subdominios, también necesitas configurar subdominios comodín para tu red multisite.

Para hacer eso, ve al panel de control de la cuenta de hosting de tu sitio web (por ejemplo, cPanel/Plesk/Direct Admin, según tu proveedor de hosting).

Busca una opción para “Domains” o “Subdomains”. En algunos paneles de control se etiqueta como “Domain administration”.

En el campo de subdominio, ingresa un asterisco (*). Luego, debería pedirte que selecciones un nombre de dominio donde quieras que se añada el subdominio.

La raíz del documento para el nombre de dominio seleccionado se detectará automáticamente. Haz clic en el botón _Create_ o _Save_ para agregar tu subdominio comodín. La entrada debería verse como “*.[mydomain.com](http://mydomain.com)”
