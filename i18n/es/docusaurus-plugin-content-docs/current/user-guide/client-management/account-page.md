---
title: Página de cuenta del cliente
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# La página de cuenta de tu cliente (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Cuando los clientes se suscriben a un plan en tu red, obtienen acceso a un sitio web y su panel con información importante sobre sus pagos, membresías, dominios, limitaciones del plan, etc...

En este tutorial, te guiaremos a través de la página de cuenta del cliente y verás lo que tus clientes pueden ver y hacer dentro de ella.

## La página de cuenta

La página de cuenta se accede haciendo clic en **Account** dentro del panel de tu cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LrGNKCDc8R.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FTDgqcwaO0.png)

Después de que un cliente haga clic en ella, verá una visión general de su membresía, dirección de facturación, facturas, dominios, limitaciones del sitio y también podrá cambiar el ****Site Template** (si está permitido en tu red)**.

También pueden cambiar la membresía a otro plan, o comprar otro paquete o servicio que ofrezcas. Echemos un vistazo a cada sección por separado.

### Visión general de tu membresía:

El primer bloque justo debajo del nombre del sitio web de tus clientes muestra una visión general de su plan actual y los servicios/paquetes que se compraron con él. El bloque también muestra el número de membresía, el monto inicial pagado, cuánto cuesta el plan y cualquier servicio/paquete, y cuántas veces se facturó esta membresía. También pueden ver si la membresía está **Active**, **Expired** o **Canceled**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-XNTPsXaqzp.png)

Justo debajo de este bloque, tus clientes pueden ver los bloques **About This Site** y **Site Limits**. Estos bloques muestran todas las limitaciones que vienen con su plan: espacio en disco, publicaciones, páginas, visitas, etc... Estos límites se pueden configurar en cada página de plan en **Ultimate Multisite > Products**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6kVmMDoiCU.png)

En el lado derecho de **Your Membership**, los clientes pueden hacer clic en **Change**. Esto les mostrará todos los planes y paquetes/servicios disponibles. Si eligen otro plan, las limitaciones del plan se aplicarán en lugar de las limitaciones actuales de la membresía, sin importar si están degradando o mejorando.

Ahora, si tus clientes eligen comprar paquetes o servicios para esta membresía actual - como más espacio en disco o visitas - la membresía actual no cambiará, solo se agregarán los nuevos paquetes.

Ten en cuenta que los códigos de cupón no se pueden agregar en esta página de cambio de membresía. Si el cliente usó un código de cupón en la primera compra de membresía, el código también se aplicará a esta nueva membresía.

### Actualizando la dirección de facturación:

En la página de cuenta, tus clientes también pueden actualizar su dirección de facturación. Solo necesitan hacer clic en **Update** junto a _Billing Address_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GLQ21kppU2.png)

Aparecerá una nueva ventana para tu cliente. Todo lo que necesita hacer es completar la nueva dirección y hacer clic en _Save Changes_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Z2nY05cYvD.png)

### Cambiando la plantilla del sitio:

Para permitir que tus clientes cambien sus plantillas de sitio, debes ir a **Ultimate Multisite > Settings > Sites** y activar la opción **Allow Template Switching**.

Además, en **Ultimate Multisite > Products**, selecciona tus planes y ve a la pestaña **Site Templates**. Asegúrate de que la opción **Allow Site Templates** esté activada y en **Site Template Selection Mode**, la opción **Choose Available Site Templates** esté seleccionada.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rjixD7iShD.png)

Podrás ver todas las plantillas de sitio disponibles en tu sitio web. Elige cuáles quieres hacer disponibles y cuáles no quieres que estén disponibles para tus clientes suscritos bajo este plan. Ten en cuenta que estas opciones también afectan el formulario de pago, por lo que cualquier plantilla elegida como **Not Available** no aparecerá en la página de registro para este plan.

Ahora tus clientes pueden hacer clic en **Change Site Template** dentro de su página de cuenta.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5pdvAuh6h3.png)  
Aparecerá una lista de todas las plantillas de sitio disponibles para este plan para tu cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bQSA663xNo.png)

Después de seleccionar la que desean cambiar, se les pedirá que confirmen el cambio.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6azvPydgAU.png)

Después de activar la confirmación y hacer clic en **Process Switch**, la nueva plantilla de sitio se usará en el sitio web de tu cliente.

### Añadiendo dominios personalizados:

Tus clientes también tendrán la opción de agregar un dominio personalizado para este plan en su página de cuenta. Para permitir que tus clientes usen dominios personalizados, ve a **Ultimate Multisite > Settings >** **Domain Mapping**.

Activa la opción **Enable Domain Mapping**. Esto permitirá que tus clientes usen dominios personalizados a nivel de red.

No olvides también verificar si el mapeo de dominios está habilitado a nivel de producto, ya que puedes limitar un producto para que no permita a tus clientes usar dominios personalizados.

Ve a **Ultimate Multisite > Products**. Selecciona el plan que elijas y ve a la pestaña **Custom Domains**. Activa la opción **Allow Custom Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J7mrCTfet6.png)

Esto permitirá que todos los clientes suscritos a este plan específico usen dominios personalizados. Ahora, en la página de cuenta, tus clientes pueden agregar un dominio personalizado haciendo clic en **Add Domain**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0mbLgC86SG.png)

La primera ventana que se abre mostrará a tus clientes un mensaje que les indica cómo actualizar sus registros DNS para que este dominio personalizado funcione en tu red.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-emhM26Abhn.png)

Este mensaje se puede editar (por ti) en **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6ZjI8Fk6Gw.png)

Después de hacer clic en **Next Step**, tus clientes pueden agregar su nombre de dominio personalizado y elegir si este dominio personalizado será el principal. Ten en cuenta que tus clientes pueden usar más de un dominio personalizado para sus sitios web, por lo que pueden elegir cuál será el principal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pSzZowjc2a.png)

Después de hacer clic en **Add Domain**, el dominio se agregará a la cuenta de tu cliente. Todo lo que necesiten hacer ahora es cambiar los registros DNS de este dominio personalizado en su registrador de dominios.

### Cambiando la contraseña:

Dentro del panel de cuenta, tus clientes también pueden cambiar su contraseña haciendo clic en **Change Password**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sihWaIk4B8.png)

Esto mostrará una nueva ventana donde tus clientes deberán ingresar su contraseña actual y luego la nueva contraseña que deseen usar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5zCgtcHfgB.png)

### Zona de peligro:

También tenemos dos opciones que se muestran en la sección **Danger Zone**: **Delete Site** y **Delete Account**. Ambas están en la zona de peligro porque estas dos acciones son irreversibles. Si tus clientes eliminan su sitio web o su cuenta, no podrán recuperarlos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FMNX249rFi.png)

Si tus clientes hacen clic en cualquiera de estas dos opciones, se les mostrará una ventana donde deberán activar la opción para eliminar el sitio web o la cuenta y se les advertirá que esta acción no se puede deshacer.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MRI6taFdJK.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-itpv48GPgY.png)

Si eliminan su sitio web, su cuenta y membresía seguirán intactas. Solo perderán todo el contenido de su sitio web. Si eliminan su cuenta, se perderán todos los sitios web, membresías e información relacionada con esta cuenta.
