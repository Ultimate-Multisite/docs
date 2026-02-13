---
title: Página de la cuenta del cliente
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# La página de cuenta de tu cliente (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Cuando los clientes se suscriben a un plan en tu red, obtienen acceso a un sitio web y su panel de control con información importante sobre sus pagos, membresías, dominios, limitaciones del plan, etc...

En este tutorial, te guiaremos a través de la página de cuenta del cliente y verás lo que tus clientes pueden ver y hacer dentro de ella.

## La página de cuenta

La página de cuenta se accede haciendo clic en **Cuenta** dentro del panel de control de tu cliente.

![Menú de cuenta en el panel de control del cliente](/img/admin/dashboard.png)

![Vista general de la página de cuenta del cliente](/img/admin/dashboard.png)

Después de que un cliente haga clic en él, verá una visión general de su membresía, dirección de facturación, facturas, dominios, limitaciones del sitio y también podrá cambiar la ****Plantilla del sitio** (si está permitido en tu red)**.

También pueden cambiar la membresía a otro plan, o comprar otro paquete o servicio que ofrezcas. Veamos cada sección por separado.

### Visión general de tu membresía:

El primer bloque justo debajo del nombre del sitio web de tus clientes muestra una visión general de su plan actual y los servicios/paquetes que se compraron con él. El bloque también muestra el número de membresía, el monto inicial pagado, cuánto cuesta el plan y cualquier servicio/paquete, y cuántas veces se facturó esta membresía. También pueden ver si la membresía está **Activa**, **Expirada** o **Cancelada**.

![Vista general de la membresía mostrando plan, monto y detalles de facturación](/img/admin/memberships-list.png)

Justo debajo de este bloque, tus clientes pueden ver los bloques **Acerca de este sitio** y **Límites del sitio**. Estos bloques les muestran todas las limitaciones que vienen con su plan: espacio en disco, publicaciones, páginas, visitas, etc... Estas limitaciones se pueden configurar en cada página de plan en **Ultimate Multisite > Products**.

![Bloques Acerca de este sitio y Límites del sitio mostrando limitaciones del plan](/img/admin/dashboard.png)

En el lado derecho de **Tu Membresía**, los clientes pueden hacer clic en **Cambiar**. Esto les mostrará todos los planes y paquetes/servicios disponibles. Si eligen otro plan, las limitaciones del plan se aplicarán en lugar de las limitaciones actuales de la membresía, sin importar si están degradando o mejorando.

Ahora, si tus clientes eligen comprar paquetes o servicios para esta membresía actual, como más espacio en disco o visitas, la membresía actual no cambiará, solo se agregarán los nuevos paquetes.

Ten en cuenta que no se pueden agregar códigos de cupón en esta página de cambio de membresía. Si el cliente usó un código de cupón en la primera compra de membresía, el código también se aplicará a esta nueva membresía.

### Actualizar la dirección de facturación:

En la página de cuenta, tus clientes también pueden actualizar su dirección de facturación. Solo necesitan hacer clic en **Actualizar** junto a _Dirección de facturación_.

![Sección de Dirección de facturación con botón Actualizar](/img/admin/customers-list.png)

Se abrirá una nueva ventana para tu cliente. Todo lo que necesita hacer es completar la nueva dirección y hacer clic en _Guardar cambios_.

![Formulario de actualización de dirección de facturación](/img/admin/customers-list.png)

### Cambiar la Plantilla del sitio:

Para permitir que tus clientes cambien sus plantillas de sitio, debes ir a **Ultimate Multisite > Settings > Sites** y activar la opción **Permitir cambio de plantilla**.

Además, en **Ultimate Multisite > Products**, selecciona tus planes y ve a la pestaña **Plantillas del sitio**. Asegúrate de que la opción **Permitir plantillas del sitio** esté activada y en **Modo de selección de plantillas del sitio**, la opción **Seleccionar plantillas disponibles** esté seleccionada.

![Pestaña de plantillas de producto con modo de selección de plantillas](/img/config/product-site-templates.png)

Podrás ver todas las plantillas de sitio disponibles en tu sitio web. Elige cuáles quieres hacer disponibles y cuáles no quieres que estén disponibles para tus clientes suscritos a este plan. Ten en cuenta que estas opciones también afectan el formulario de pago, por lo que cualquier plantilla elegida como **No disponible** no aparecerá en la página de registro para este plan.

Ahora tus clientes pueden hacer clic en **Cambiar Plantilla del sitio** dentro de su página de cuenta.

![Botón Cambiar Plantilla del sitio en la página de cuenta](/img/admin/dashboard.png)

Se mostrará una lista de todas las Plantillas del sitio disponibles para este plan a tu cliente.

![Lista de plantillas de sitio disponibles para el plan](/img/config/site-templates-list.png)

Después de seleccionar la que desean cambiar, se les pedirá que confirmen el cambio.

![Diálogo de confirmación de cambio de plantilla de sitio](/img/admin/dashboard.png)

Después de activar la confirmación y hacer clic en **Procesar cambio**, la nueva plantilla de sitio se usará en el sitio web de tu cliente.

### Añadir dominios personalizados:

Tus clientes también tendrán la opción de agregar un dominio personalizado para este plan en su página de cuenta. Para permitir que tus clientes usen dominios personalizados, ve a **Ultimate Multisite > Settings >** **Mapeo de dominios**.

Activa la opción **Habilitar mapeo de dominios**. Esto permitirá que tus clientes usen dominios personalizados a nivel de red.

No olvides también verificar si el mapeo de dominios está habilitado a nivel de producto, ya que puedes limitar un producto para que no permita a tus clientes usar dominios personalizados.

Ve a **Ultimate Multisite > Products**. Selecciona el plan que elijas y ve a la pestaña **Dominios personalizados**. Activa la opción **Permitir dominios personalizados**.

![Pestaña Dominios personalizados con conmutador Permitir dominios personalizados](/img/config/product-custom-domains.png)

Esto permitirá que todos los clientes suscritos a este plan específico usen dominios personalizados. Ahora, en la página de Cuenta, tus clientes pueden agregar un dominio personalizado haciendo clic en **Agregar dominio**.

![Botón Agregar dominio en la página de cuenta](/img/admin/domains-list.png)

La primera ventana que se abre mostrará a tus clientes un mensaje que les indica cómo actualizar sus registros DNS para que este dominio personalizado funcione en tu red.

![Instrucciones DNS mostradas al agregar un dominio personalizado](/img/admin/domains-list.png)

Este mensaje se puede editar (por ti) en **Ultimate Multisite > Settings > Mapeo de dominios > Instrucciones para agregar nuevo dominio**.

![Configuración de Instrucciones para agregar nuevo dominio en Mapeo de dominios](/img/config/settings-domain-mapping.png)

Después de hacer clic en **Siguiente paso**, tus clientes pueden agregar su nombre de dominio personalizado y elegir si este dominio personalizado será el principal. Ten en cuenta que tus clientes pueden usar más de un dominio personalizado para sus sitios web, por lo que pueden elegir cuál será el principal.

![Entrada de nombre de dominio personalizado con opción de dominio principal](/img/admin/domains-list.png)

Después de hacer clic en **Agregar dominio**, el dominio se agregará a la cuenta de tu cliente. Todo lo que ahora necesiten hacer es cambiar los registros DNS de este dominio personalizado en su registrador de dominios.

### Cambiar contraseña:

Dentro del panel de cuenta, tus clientes también pueden cambiar su contraseña haciendo clic en **Cambiar contraseña**.

![Botón Cambiar contraseña en la página de cuenta](/img/admin/dashboard.png)

Esto mostrará una nueva ventana donde tus clientes deberán completar su contraseña actual y luego la nueva contraseña que deseen usar.

![Formulario de cambio de contraseña con campos de contraseña actual y nueva contraseña](/img/admin/dashboard.png)

### Zona de peligro:

También tenemos dos opciones que se muestran en la sección **Zona de peligro**: **Eliminar sitio** y **Eliminar cuenta**. Ambas están en la zona de peligro porque estas dos acciones son irreversibles. Si tus clientes eliminan su sitio web o su cuenta, no podrán recuperarlos.

![Zona de peligro con opciones Eliminar sitio y Eliminar cuenta](/img/admin/dashboard.png)

Si tus clientes hacen clic en cualquiera de estas dos opciones, se les mostrará una ventana donde deberán activar la opción para eliminar el sitio web o la cuenta y se les advertirá que esta acción no se puede deshacer.

![Diálogo de confirmación de eliminación de sitio](/img/admin/dashboard.png)

![Diálogo de confirmación de eliminación de cuenta](/img/admin/dashboard.png)

Si eliminan su sitio web, su cuenta y membresía seguirán intactas. Solo perderán todo el contenido de su sitio web. Si eliminan su cuenta, se perderán todos los sitios web, membresías e información relacionada con esa cuenta.
