---
title: Cómo configurar el mapeo de dominios
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cómo configurar la asignación de dominios (v2) {#how-to-configure-domain-mapping-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Una de las funciones más potentes de una red premium es la capacidad de ofrecer a nuestros clientes la posibilidad de adjuntar un dominio de nivel superior a sus sitios. Después de todo, ¿qué se ve más profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Por eso Ultimate Multisite ofrece esa función integrada, sin necesidad de usar plugins de terceros.

## ¿Qué es la asignación de dominios? {#whats-domain-mapping}

Como su nombre indica, la asignación de dominios es la capacidad ofrecida por Ultimate Multisite para recibir una solicitud de un dominio personalizado y asignar esa solicitud al sitio correspondiente en la red que tiene ese dominio concreto adjunto.

### Cómo configurar la asignación de dominios en tu red Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

La asignación de dominios requiere cierta configuración por tu parte para funcionar. Afortunadamente, Ultimate Multisite automatiza el trabajo difícil por ti para que puedas cumplir fácilmente los requisitos.

Durante la instalación de Ultimate Multisite, el asistente copiará e instalará automáticamente **sunrise.php** en la carpeta designada. **El asistente no te permitirá continuar hasta que este paso se haya completado**.

<!-- Captura de pantalla no disponible: asistente de instalación de Ultimate Multisite con el paso sunrise.php -->

Esto significa que, una vez que el asistente de instalación de Ultimate Multisite haya terminado de configurar tu red, puedes empezar a asignar el dominio personalizado de inmediato.

Ten en cuenta que la asignación de dominios en Ultimate Multisite no es obligatoria. Tienes la opción de usar la función nativa de asignación de dominios de WordPress Multisite o cualquier otra solución de asignación de dominios.

Si necesitas desactivar la asignación de dominios de Ultimate Multisite para dar paso a otras soluciones de asignación de dominios, puedes desactivar esta función en **Ultimate Multisite > Ajustes > Asignación de dominios**.

![Página de ajustes de Asignación de dominios que muestra la redirección de administración, el mensaje de asignación y las opciones de DNS](/img/config/domain-mapping-settings.png)

Justo debajo de esta opción, también puedes ver la opción **Forzar redirección de administración**. Esta opción te permite controlar si tus clientes podrán acceder a su panel de administración tanto en su dominio personalizado como en su subdominio, o solo en uno de ellos.

Si seleccionas **Forzar redirección al dominio asignado** , tus clientes solo podrán acceder a su panel de administración en sus dominios personalizados.

La opción **Forzar redirección a** **dominio de red** hará exactamente lo contrario: tus clientes solo podrán acceder a sus paneles en su subdominio, incluso si intentan iniciar sesión en sus dominios personalizados.

Y la opción **Permitir acceso a la administración tanto por el dominio asignado como por el dominio de red** les permite acceder a sus paneles de administración tanto en el subdominio como en el dominio personalizado.

![Desplegable de Redirección de administración expandido que muestra las tres opciones de redirección](/img/config/domain-mapping-redirect-options.png)

Hay dos formas de asignar un dominio personalizado. La primera es asignando el nombre de dominio desde el panel de administración de tu red como superadministrador, y la segunda es a través del panel de administración del subsitio en la página de la cuenta.

Pero antes de empezar a asignar el dominio personalizado a uno de los subsitios de tu red, tendrás que asegurarte de que los **ajustes DNS** del nombre de dominio estén configurados correctamente.

###

### Asegurarse de que los ajustes DNS del dominio estén configurados correctamente {#making-sure-the-domain-dns-settings-are-properly-configured}

Para que una asignación funcione, debes asegurarte de que el dominio que planeas asignar apunte a la dirección IP de tu red. Ten en cuenta que necesitas la dirección IP de la red —la dirección IP del dominio donde está instalado Ultimate Multisite—, no la dirección IP del dominio personalizado que quieres asignar. Para buscar la dirección IP de un dominio específico, sugerimos ir a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), por ejemplo.

Para asignar correctamente el dominio, debes añadir un **registro A** en tu configuración de **DNS** apuntando a esa **dirección IP**. La gestión de DNS varía mucho entre los distintos registradores de dominios, pero hay muchos tutoriales en línea que cubren esto si buscas " _Crear un registro A en XXXX_ ", donde XXXX es tu registrador de dominios (ej.: " _Crear un registro A en_ _GoDaddy_ ").

Si tienes problemas para hacer que esto funcione, **contacta con el soporte de tu registrador de dominios** y podrán ayudarte con esta parte.

Si planeas permitir que tus clientes asignen sus propios dominios, tendrán que hacer el trabajo de esta parte por sí mismos. Dirígelos al sistema de soporte de su registrador si no pueden crear el registro A.

### Asignar un nombre de dominio personalizado como superadministrador {#mapping-custom-domain-name-as-super-admin}

Cuando has iniciado sesión como superadministrador en tu red, puedes añadir y gestionar fácilmente nombres de dominio personalizados yendo a **Ultimate Multisite > Dominios**.

![Página de lista de dominios en Ultimate Multisite](/img/admin/domains-list.png)

En esta página, puedes hacer clic en el botón **Añadir dominio** de la parte superior y esto abrirá una ventana modal donde puedes establecer y rellenar el **nombre de dominio personalizado** , **el subsitio** al que deseas aplicar el nombre de dominio personalizado, y decidir si quieres establecerlo como el nombre de **dominio principal** o no (ten en cuenta que puedes asignar **varios nombres de dominio a un solo subsitio**).

![Modal Añadir dominio con nombre de dominio, selector de sitio y conmutador de dominio principal](/img/admin/domain-add-modal.png)

Después de introducir toda la información, puedes hacer clic en el botón **Añadir dominio existente** en la parte inferior.

Esto iniciará el proceso de verificación y obtención de la información DNS del dominio personalizado. También verás un registro en la parte inferior de la página para que puedas seguir el proceso que se está llevando a cabo. Este proceso puede tardar unos minutos en completarse.

Ultimate Multisite v2.13.0 también crea el registro de dominio interno automáticamente cuando se crea un nuevo sitio en un host que debe tratarse como un dominio por sitio. Si el host es el dominio principal de la red, o uno de los dominios base compartidos del formulario de checkout configurados en un campo **Site URL**, se omite el registro automático de dominio mapeado para que ese dominio base compartido siga estando disponible para cada sitio que lo use.

Cuando un cliente registra un nuevo dominio mediante Domain Seller v1.3.0 o más reciente, Ultimate Multisite mapea automáticamente el dominio registrado al sitio de red del cliente de forma predeterminada. Los administradores ya no necesitan añadir un registro de dominio mapeado separado después de un registro correcto, a menos que quieran ajustar opciones como la marca de dominio principal, el estado de activación o la gestión de SSL.

El **Stage** o el estado debería cambiar de **Checking DNS** a **Ready** si todo está configurado correctamente.

<!-- Captura de pantalla no disponible: Fila de dominio que muestra la etapa Checking DNS en la lista de dominios -->

<!-- Captura de pantalla no disponible: Fila de dominio que muestra la etapa Ready con el indicador de estado verde -->

Si haces clic en el nombre de dominio, podrás ver algunas opciones dentro de él. Echemos un vistazo rápido a ellas:

![Página de detalles del dominio con conmutadores de etapa, sitio, activo, principal y SSL](/img/admin/domain-edit.png)

**Stage:** Esta es la etapa en la que se encuentra el dominio. Cuando añades el dominio por primera vez, probablemente estará en la etapa **Checking DNS**. El proceso comprobará las entradas DNS y confirmará que sean correctas. Luego, el dominio se colocará en la etapa **Checking SSL**. Ultimate Multisite comprobará si el dominio tiene SSL o no y categorizará tu dominio como **Ready** o **Ready (without SSL)**.

**Site:** El subdominio que está asociado con este dominio. El dominio mapeado mostrará el contenido de este sitio específico.

**Active:** Puedes activar o desactivar esta opción para activar o desactivar el dominio.

**Is Primary Domain?:** Tus clientes pueden tener más de un dominio mapeado para cada sitio. Usa esta opción para seleccionar si este es el dominio principal para el sitio específico.

**Is Secure?:** Aunque Ultimate Multisite comprueba si el dominio tiene un certificado SSL o no antes de habilitarlo, puedes seleccionar manualmente cargar el dominio con o sin un certificado SSL. Ten en cuenta que, si el sitio web no tiene un certificado SSL e intentas forzar su carga con SSL, puede darte errores.

### Mapear un nombre de dominio personalizado como usuario de subsitio {#mapping-custom-domain-name-as-subsite-user}

Los administradores de subsitios también pueden mapear nombres de dominio personalizados desde el dashboard de administración de su subsitio.

Primero, debes asegurarte de habilitar esta opción en los ajustes de **Domain mapping**. Mira la captura de pantalla a continuación.

<!-- Captura de pantalla no disponible: Ajustes de Domain mapping que permiten a los usuarios de subsitios mapear dominios mediante el conmutador Customer DNS Management -->

También puedes establecer o configurar esta opción a nivel de **Plan** u opciones de producto en **Ultimate Multisite > Products**.

![Sección de dominios personalizados en la página de edición del producto](/img/config/product-custom-domains.png)

Cuando cualquiera de esas opciones está habilitada y un usuario de subsitio tiene permitido mapear nombres de dominio personalizados, el usuario de subsitio debería ver una metabox en la página **Account** llamada **Domains**.

<!-- Captura de pantalla no disponible: Metabox de dominios en la página Account del subsitio con el botón Add Domain -->

El usuario puede hacer clic en el botón **Add Domain** y se abrirá una ventana modal con algunas instrucciones.

<!-- Captura de pantalla no disponible: Modal Add Domain que muestra instrucciones de registro A de DNS para usuarios de subsitios -->

Luego, el usuario puede hacer clic en **Next Step** y continuar para añadir el nombre de dominio personalizado. También puede elegir si este será el dominio principal o no.

<!-- Captura de pantalla no disponible: Formulario Add Domain con campo de nombre de dominio personalizado y conmutador de dominio principal -->

<!-- Captura de pantalla no disponible: Paso de confirmación Add Domain que activa la verificación DNS -->

Hacer clic en **Add Domain** iniciará el proceso de verificar y obtener la información DNS del dominio personalizado.

### Acerca de Domain Syncing {#about-domain-syncing}

Domain Syncing es un proceso en el que Ultimate Multisite añade el nombre de dominio personalizado a tu cuenta de hosting como un dominio adicional **para que el mapeo de dominios funcione**.

La sincronización de dominios ocurre automáticamente si tu proveedor de hosting tiene integración con la función de mapeo de dominios de Ultimate Multisite. Actualmente, estos proveedores de hosting son _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ y _Cpanel._

Cuando una integración de proveedor de hosting está activa, Ultimate Multisite también puede poner en cola la tarea de creación de DNS o subdominio del lado del proveedor para sitios recién creados. Si ninguna integración está escuchando esa tarea, el trabajo en segundo plano se omite para evitar entradas de cola sin efecto. Las comprobaciones de DNS y SSL para dominios mapeados siguen ejecutándose mediante el proceso normal de etapa de dominio.

Tendrás que activar esta integración en los ajustes de Ultimate Multisite, en la pestaña **Integration**.

![Pestaña Integrations en los ajustes de Ultimate Multisite que muestra proveedores de hosting](/img/config/integrations-tab.png)

<!-- Captura de pantalla no disponible: Enlaces de configuración del proveedor de hosting en la pestaña de ajustes Integrations -->

_Ten en cuenta que si tu proveedor de hosting no es uno de los proveedores mencionados anteriormente, **tendrás que sincronizar manualmente o añadir el nombre de dominio** a tu cuenta de hosting._
