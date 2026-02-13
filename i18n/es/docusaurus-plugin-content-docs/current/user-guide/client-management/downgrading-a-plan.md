---
title: Reducir un plan
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Reducir un plan (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Reducir un plan o suscripción es una acción común que tus clientes podrían realizar si tienen un presupuesto limitado o han decidido que no necesitarán muchos recursos para ejecutar su subsitio.

## Cómo reducir un plan

Tus clientes pueden reducir su plan en cualquier momento iniciando sesión en el panel de administración de su subsitio y haciendo clic en **Change** bajo su página de cuenta.

![Página de cuenta con botón Change bajo la membresía](/img/admin/memberships-list.png)

Al hacer clic en el botón **Change**, el usuario/cliente será redirigido a la página de pago donde podrá seleccionar el plan al que desea cambiar su suscripción.

![Página de pago mostrando opciones de plan para reducir](/img/admin/memberships-list.png)

En este ejemplo, estamos reduciendo el plan de **Premium** a **Free**.

Para continuar, el usuario solo necesita hacer clic en el botón **Complete Checkout**. Luego será llevado de regreso a la página de cuenta mostrando un mensaje sobre el cambio pendiente de la membresía. Los cambios entrarán en vigor en el **siguiente ciclo de facturación** del cliente.

![Página de cuenta mostrando mensaje de cambio pendiente de membresía](/img/admin/memberships-list.png)

### Qué sucede cuando un usuario reduce su plan

Es importante señalar que reducir el plan no altera la configuración existente en el subsitio del usuario.

No cambia automáticamente la plantilla del sitio, ya que cambiar la plantilla del sitio borrará y restablecerá por completo el subsitio. Esto es para evitar pérdidas de datos innecesarias. Por lo tanto, el espacio en disco, los temas, los plugins, etc. permanecerán intactos excepto por las publicaciones.

Entendemos que tu principal preocupación serían los límites y cuotas que estableces bajo cada plan, pero debemos considerar el daño que causaría al subsitio del usuario si elimináramos o cambiáramos alguna de sus configuraciones.

Para las publicaciones que excedan el límite establecido en el plan, tienes 3 opciones diferentes: **Mantener las publicaciones tal cual** *,* **Mover las publicaciones a la papelera** *,* o **Mover las publicaciones a borrador** *.* Puedes configurar esto en la configuración de Ultimate Multisite.

![Opciones de límite de publicaciones excedidas en la configuración de Ultimate Multisite](/img/config/settings-sites.png)

### Qué sucede con el pago

En la versión 2.0, ya no se requieren ajustes en el pago en términos de prorrateo.

Esto se debe a que el sistema esperará a que la membresía existente **complete su ciclo de facturación antes** de que el nuevo plan/membresía entre en vigor. El nuevo importe de facturación para la nueva membresía se aplicará y cobrará automáticamente en el siguiente ciclo de facturación.
