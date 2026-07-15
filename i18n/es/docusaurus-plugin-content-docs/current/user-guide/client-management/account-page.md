---
title: Página de Account del cliente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# La página Account de tu cliente (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Cuando los clientes se suscriben a un plan en tu red, obtienen acceso a un sitio web y a su Dashboard con información importante sobre sus pagos, membresías, dominios, limitaciones del plan, etc...

En este tutorial, te guiaremos por la página Account del cliente y verás qué pueden ver y hacer tus clientes dentro de ella.

## La página Account {#the-account-page}

Se puede acceder a la página Account haciendo clic en **Account** dentro del Dashboard de tu cliente.

![Menú Account en el Dashboard del cliente](/img/account-page/account-menu.png)

En redes de inquilinos soberanos, Ultimate Multisite v2.13.0 mantiene esta experiencia de gestión de clientes en el sitio principal. Si un cliente abre acciones de Account, pago, facturación, factura, gestión del sitio, cambio de plantilla o asignación de dominio desde un inquilino soberano, la acción apunta de vuelta al panel de cliente del sitio principal para que los registros de facturación y membresía de la red sigan siendo autoritativos.

Cuando el cliente llega desde un inquilino soberano, el panel de cliente del sitio principal puede incluir un enlace de retorno al sitio del inquilino. El enlace de retorno solo se muestra cuando Ultimate Multisite puede validar el destino de retorno como uno de los sitios del cliente, lo que evita redirecciones arbitrarias mientras preserva el flujo de trabajo del inquilino.

![Vista general de la página Account del cliente](/img/account-page/overview.png)

Después de que un cliente haga clic en él, verá una vista general de su membresía, dirección de facturación, facturas, dominios, limitaciones del sitio y también podrá cambiar la ****plantilla del sitio** (si está permitido en tu red)**.

También puede cambiar la membresía a otro plan, o comprar otro paquete o servicio que ofrezcas. Veamos cada sección por separado.

### Vista general de tu membresía: {#your-membership-overview}

El primer bloque justo debajo del nombre del sitio web de tus clientes muestra una vista general de su plan actual y de los servicios/paquetes que se compraron con él. El bloque también muestra el número de membresía, el importe inicial pagado por ella, cuánto cuesta el plan y cualquier servicio/paquete, y cuántas veces se les facturó esta membresía. También pueden ver si la membresía está **Activa** , **Expirada** o **Cancelada**.

![Vista general de la membresía que muestra el plan, el importe y los detalles de facturación](/img/account-page/membership-card.png)

Justo debajo de este bloque, tus clientes pueden ver los bloques **Acerca de este sitio** y **Límites del sitio**. Estos bloques les muestran todas las limitaciones que vienen con su plan: espacio en disco, entradas, páginas, visitas, etc... Estos límites se pueden configurar en cada página de plan en **Ultimate Multisite > Productos**.

![Bloques Acerca de este sitio y Límites del sitio que muestran las limitaciones del plan](/img/account-page/site-limits.png)

En el lado derecho de **Tu membresía** , los clientes pueden hacer clic en **Cambiar**. Esto les mostrará todos los planes y paquetes/servicios disponibles. Si eligen otro plan, las limitaciones del plan reemplazarán las limitaciones actuales de la membresía, sin importar si están haciendo un downgrade o un upgrade.

Ahora bien, si tus clientes eligen comprar paquetes o servicios para esta membresía actual, como más espacio en disco o visitas, la membresía actual no se cambiará; solo se le añadirán los nuevos paquetes.

Ten en cuenta que no se pueden añadir códigos de cupón en esta página de cambio de membresía. Si el cliente usó un código de cupón en la primera compra de membresía, el código también se aplicará a esta nueva membresía.

### Actualizar la dirección de facturación: {#updating-the-billing-address}

En la página Account, tus clientes también pueden actualizar su dirección de facturación. Solo tienen que hacer clic en **Actualizar** junto a _Dirección de facturación_.

![Sección Dirección de facturación con botón Actualizar](/img/account-page/billing-address.png)

A tu cliente le aparecerá una nueva ventana. Todo lo que debe hacer es rellenar la nueva dirección y hacer clic en _Guardar cambios_.

![Formulario para actualizar la dirección de facturación](/img/account-page/billing-address-form.png)

### Cambiar la plantilla del sitio: {#changing-the-site-template}

Para permitir que tus clientes cambien las plantillas de sus sitios, debes ir a **Ultimate Multisite > Ajustes > Sitios** y activar la opción **Permitir cambio de plantilla**.

Además, en **Ultimate Multisite > Productos**, selecciona tus planes y ve a la pestaña **Plantillas del sitio**. Asegúrate de que la opción **Permitir plantillas del sitio** esté activada y de que en **Modo de selección de plantilla del sitio** , esté seleccionada la opción **Elegir plantillas del sitio disponibles**.

![Pestaña de plantillas del sitio del producto con modo de selección de plantilla](/img/config/product-site-templates.png)

Podrás ver todas las plantillas del sitio disponibles en tu sitio web. Elige cuáles quieres que estén disponibles y cuáles no quieres que estén disponibles para tus clientes suscritos a este plan. Ten en cuenta que estas opciones también afectan al formulario de pago, por lo que cualquier plantilla elegida como **No disponible** no aparecerá en la página de registro de este plan.

Ahora tus clientes pueden hacer clic en **Cambiar plantilla del sitio** dentro de su página Account.

![Botón Cambiar plantilla del sitio en la página Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 muestra un panel de cambio de plantilla rediseñado. El panel comienza con una **tarjeta de plantilla actual** para que los clientes puedan ver qué plantilla está activa antes de elegir un reemplazo.

Una cuadrícula persistente de plantillas del sitio disponibles permanece visible mientras los clientes revisan sus opciones. Esto les ayuda a comparar las plantillas permitidas para su plan sin perder de vista la selección actual.

![Lista de plantillas del sitio disponibles para el plan](/img/config/site-templates-list.png)

Después de seleccionar aquella a la que quieren cambiar, se les pedirá que confirmen el cambio.

![Cuadro de diálogo de confirmación de cambio de plantilla del sitio](/img/account-page/template-switch-confirm.png)

Después de activar la confirmación y hacer clic en **Procesar cambio** , la nueva plantilla del sitio se usará en el sitio web de tu cliente.

Los clientes también pueden usar **Reset current template** desde este panel cuando necesiten restablecer el sitio a la plantilla asignada actualmente. Al igual que cambiar a otra plantilla, restablecer una plantilla puede sobrescribir el contenido del sitio, por lo que los clientes solo deben confirmarlo cuando entiendan la acción de restablecimiento.

### Añadir dominios personalizados: {#adding-custom-domains}

Tus clientes también tendrán la opción de añadir un dominio personalizado para este plan en la página de su Account. Para permitir que tus clientes usen dominios personalizados, ve a **Ultimate Multisite > Settings >** **Domain Mapping**.

Activa la opción **Enable Domain Mapping**. Esto permitirá que tus clientes usen dominios personalizados a nivel de red.

No olvides comprobar también si el mapeo de dominios está habilitado por producto, porque puedes limitar un producto para no permitir que tus clientes usen dominios personalizados.

Ve a **Ultimate Multisite > Products**. Selecciona el plan que prefieras y ve a la pestaña **Custom Domains**. Activa la opción **Allow Custom Domains**.

![Pestaña Custom Domains con el interruptor Allow Custom Domains](/img/config/product-custom-domains.png)

Esto permitirá que todos los clientes suscritos a este plan específico usen dominios personalizados. Ahora, en la página Account, tus clientes pueden añadir un dominio personalizado haciendo clic en **Add Domain**.

![Botón Add Domain en la página Account](/img/account-page/add-domain-button.png)

La primera ventana que se abre mostrará a tus clientes un mensaje con instrucciones sobre cómo actualizar sus registros DNS para que este dominio personalizado funcione en tu red.

![Instrucciones DNS mostradas al añadir un dominio personalizado](/img/account-page/add-domain-dns.png)

Este mensaje puede ser editado (por ti) en **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Ajuste Add New Domain Instructions en Domain Mapping](/img/config/settings-domain-mapping.png)

Aquí tienes una vista completa de la página de ajustes de mapeo de dominios:

![Página completa de ajustes de mapeo de dominios](/img/config/settings-domain-mapping-full.png)

Después de hacer clic en **Next Step** , tus clientes pueden añadir el nombre de su dominio personalizado y elegir si este dominio personalizado será el principal. Ten en cuenta que tus clientes pueden usar más de un dominio personalizado para sus sitios web, por lo que pueden elegir cuál será el principal.

![Entrada de nombre de dominio personalizado con opción de dominio principal](/img/account-page/add-domain-primary.png)

Después de hacer clic en **Add Domain** , el dominio se añadirá a la Account de tu cliente. Todo lo que necesita hacer ahora es cambiar los registros DNS de este dominio personalizado en su registrador de dominios.

### Cambiar contraseña: {#changing-password}

Dentro del Account dashboard, tus clientes también pueden cambiar su contraseña haciendo clic en **Change Password**.

![Botón Change Password en la página Account](/img/account-page/change-password-button.png)

Esto mostrará una nueva ventana donde tus clientes tendrán que introducir su contraseña actual y luego introducir la nueva contraseña que quieren usar.

![Formulario para cambiar contraseña con campos de contraseña actual y nueva](/img/account-page/change-password-form.png)

### Zona de peligro: {#danger-zone}

También tenemos dos opciones que se muestran en la parte **Danger Zone**: **Delete Site** y **Delete Account**. Ambas están en la parte Danger Zone porque estas dos acciones son irreversibles. Si tus clientes eliminan su sitio web o su cuenta, no podrán recuperarlos.

![Danger Zone con opciones Delete Site y Delete Account](/img/account-page/danger-zone.png)

Si tus clientes hacen clic en cualquiera de estas dos opciones, se les mostrará una ventana donde tendrán que activar la opción para eliminar el sitio web o la Account y se les advertirá que esta acción no se puede deshacer.

![Diálogo de confirmación de Delete Site](/img/account-page/delete-site-confirm.png)

![Diálogo de confirmación de Delete Account](/img/account-page/delete-account-confirm.png)

Si eliminan su sitio web, su Account y membresía seguirán intactas. Solo perderán todo el contenido de su sitio web. Si eliminan su Account, se perderán todos los sitios web, membresías e información relacionada con esta Account.
