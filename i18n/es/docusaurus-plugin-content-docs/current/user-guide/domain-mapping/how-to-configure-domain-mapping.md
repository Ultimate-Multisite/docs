---
title: '# Cómo configurar el mapeo de dominios'
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Cómo Configurar el Mapeo de Dominio (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Una de las características más poderosas de una red premium es la capacidad de ofrecer a nuestros clientes la posibilidad de adjuntar un dominio de nivel superior a sus sitios. Después de todo, ¿qué parece más profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Por eso Ultimate Multisite ofrece esa función incorporada, sin necesidad de usar plugins de terceros.

## ¿Qué es el mapeo de dominio?

Como su nombre indica, el mapeo de dominio es la capacidad que ofrece Ultimate Multisite de recibir una solicitud para un dominio personalizado y mapear esa solicitud al sitio correspondiente en la red con ese dominio particular adjunto.

### Cómo configurar el mapeo de dominio en tu Red Ultimate Multisite

El mapeo de dominio requiere cierta configuración de tu parte para funcionar. Afortunadamente, Ultimate Multisite automatiza el trabajo duro para que puedas cumplir fácilmente los requisitos.

Durante la instalación de Ultimate Multisite, el asistente copiará e instalará automáticamente el **sunrise.php** en la carpeta designada. **El asistente no te permitirá continuar hasta que este paso esté completado**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zrBdFs13Dy.png)

Esto significa que una vez que el asistente de instalación de Ultimate Multisite haya completado la configuración de tu red, puedes comenzar a mapear el dominio personalizado de inmediato.

Ten en cuenta que el mapeo de dominio en Ultimate Multisite no es obligatorio. Tienes la opción de usar la función nativa de mapeo de dominio de WordPress Multisite o cualquier otra solución de mapeo de dominio.

Si necesitas desactivar el mapeo de dominio de Ultimate Multisite para dar paso a otras soluciones de mapeo de dominio, puedes desactivar esta función en **Ultimate Multisite > Settings > Domain Mapping**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbrC47pTcX.png)

Justo debajo de esta opción, también puedes ver la opción **Force Admin Redirect**. Esta opción te permite controlar si tus clientes podrán acceder a su panel de administración tanto en su dominio personalizado como en su subdominio o solo en uno de ellos.

Si seleccionas **Force redirect to mapped domain**, tus clientes solo podrán acceder a su panel de administración en sus dominios personalizados.

La opción **Force redirect to** **network domain** hará exactamente lo contrario: tus clientes solo podrán acceder a sus paneles en su subdominio, incluso si intentan iniciar sesión en sus dominios personalizados.

Y la opción **Allow access to the admin by both mapped domain domain and network domain** les permite acceder a sus paneles de administración tanto en el subdominio como en el dominio personalizado.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JYwHPWhYwV.png)

Hay dos formas de mapear un dominio personalizado. La primera es mapear el nombre de dominio desde el panel de administración de la red como super administrador y la segunda es a través del panel de administración del subsitio bajo la página de cuenta.

Pero antes de comenzar a mapear el dominio personalizado a uno de los subsitios en tu red, deberás asegurarte de que la configuración de **DNS** del nombre de dominio esté correctamente configurada.

### Asegurándose de que la configuración de DNS del dominio esté correctamente configurada

Para que el mapeo funcione, debes asegurarte de que el dominio que planeas mapear apunte a la dirección IP de tu Red. Ten en cuenta que necesitas la dirección IP de la Red: la dirección IP del dominio donde está instalado Ultimate Multisite, no la dirección IP del dominio personalizado que deseas mapear. Para buscar la dirección IP de un dominio específico, te sugerimos ir a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por ejemplo.

Para mapear correctamente el dominio, debes agregar un **A RECORD** en tu configuración de **DNS** apuntando a esa **IP address**. La gestión de DNS varía mucho entre diferentes registradores de dominios, pero hay muchos tutoriales en línea que cubren eso si buscas “_Creating A Record on XXXX_” donde XXXX es tu registrador de dominios (por ejemplo: “_Creating A Record on_ _GoDaddy_ ”).

Si te encuentras con problemas para que esto funcione, **contacta al soporte de tu registrador de dominios** y podrán ayudarte con esta parte.

Si planeas permitir que tus clientes mapeen sus propios dominios, deberán hacer el trabajo en esta parte ellos mismos. Dirígelos al sistema de soporte de su registrador si no pueden crear el A Record.

### Mapear el nombre de dominio personalizado como Super Administrador

Cuando inicies sesión como super administrador en tu red, puedes agregar y administrar fácilmente nombres de dominio personalizados yendo a **Ultimate Multisite > Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5XxtXP622s.png)

En esta página, puedes hacer clic en el botón **Add Domain** en la parte superior y se abrirá una ventana modal donde puedes establecer y completar el **custom domain name**, **el subsitio** al que deseas aplicar el nombre de dominio personalizado, y decidir si quieres configurarlo como el nombre de dominio **primary** o no (ten en cuenta que puedes mapear **múltiples nombres de dominio a un subsitio**).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rD6fnbzRe9.png)

Después de ingresar toda la información, puedes hacer clic en el botón **Add Existing Domain** en la parte inferior.

Esto iniciará el proceso de verificación y obtención de la información DNS del dominio personalizado. También verás un registro en la parte inferior de la página para que puedas seguir el proceso que está llevando a cabo. Este proceso puede tardar unos minutos en completarse.

El **Stage** o el estado debería cambiar de **Checking DNS** a **Ready** si todo está configurado correctamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3g2mkrlk75we98uhscagnr3ini0s)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5dIPdYQfZi.png)

Si haces clic en el nombre de dominio, podrás ver algunas opciones dentro de él. Echemos un vistazo rápido a ellas:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5tCiNUIKih.png)

**Stage:** Esta es la etapa en la que se encuentra el dominio. Cuando agregas el dominio por primera vez, probablemente estará en la etapa **Checking DNS**. El proceso verificará las entradas DNS y confirmará que son correctas. Luego, el dominio se colocará en la etapa **Checking SSL**. Ultimate Multisite verificará si el dominio tiene SSL o no y clasificará tu dominio como **Ready** o **Ready (without SSL)**.

**Site:** El subdominio asociado con este dominio. El dominio mapeado mostrará el contenido de este sitio específico.

**Active:** Puedes activar o desactivar esta opción para activar o desactivar el dominio.

**Is Primary Domain?:** Tus clientes pueden tener más de un dominio mapeado para cada sitio. Usa esta opción para seleccionar si este es el dominio principal para el sitio específico.

**Is Secure?:** Aunque Ultimate Multisite verifica si el dominio tiene un certificado SSL o no antes de habilitarlo, puedes seleccionar manualmente cargar el dominio con o sin certificado SSL. Ten en cuenta que si el sitio web no tiene un certificado SSL y intentas forzar la carga con SSL, puede generar errores.

### Mapear el nombre de dominio personalizado como usuario de subsitio

Los administradores de subsitio también pueden mapear nombres de dominio personalizados desde su panel de administración de subsitio.

Primero, debes asegurarte de habilitar esta opción en la configuración de **Domain mapping**. Consulta la captura de pantalla a continuación.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M3MO6RKBWe.png)

También puedes establecer o configurar esta opción en el nivel **Plan** o en las opciones de producto en **Ultimate Multisite > Products**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JRqx7Uhqsa.png)

Cuando cualquiera de esas opciones esté habilitada y se permita a un usuario de subsitio mapear nombres de dominio personalizados, el usuario de subsitio debería ver un metabox bajo la página **Account** llamado **Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DUeHUY66yP.png)

El usuario puede hacer clic en el botón **Add Domain** y se abrirá una ventana modal con algunas instrucciones.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-n5mNhDpL38.png)

El usuario puede hacer clic en **Next Step** y proceder a agregar el nombre de dominio personalizado. También pueden elegir si será el dominio principal o no.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0vlbs2dcaz.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zez2zeiqz8mi67o7izkg3d7x43ve)Hacer clic en **Add Domain** iniciará el proceso de verificación y obtención de la información DNS del dominio personalizado.

### Acerca de la Sincronización de Dominio

Domain Syncing es un proceso en el que Ultimate Multisite agrega el nombre de dominio personalizado a tu cuenta de hosting como un dominio adicional **para que el mapeo de dominio funcione**.

La sincronización de dominio ocurre automáticamente si tu proveedor de hosting tiene integración con la función de mapeo de dominio de Ultimate Multisite. Actualmente, estos proveedores de hosting son _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ y _Cpanel_.

Necesitarás activar esta integración en la configuración de Ultimate Multisite bajo la pestaña **Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-k6i46r4x2yddii0op4x343jizq20)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JMADuxaH62.png)

_Nota que si tu proveedor de hosting no es uno de los proveedores mencionados anteriormente, **deberás sincronizar manualmente o agregar el nombre de dominio** a tu cuenta de hosting._
