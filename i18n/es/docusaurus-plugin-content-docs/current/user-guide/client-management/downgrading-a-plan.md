---
title: Cambiar a un plan inferior
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Degradar un plan (v2) {#downgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Degradar un plan o suscripción es una acción común que tus clientes podrían realizar si tienen un presupuesto limitado o decidieron que no necesitarán muchos recursos para ejecutar su subsitio.

## Cómo degradar un plan {#how-to-downgrade-a-plan}

Tus clientes pueden degradar su plan en cualquier momento iniciando sesión en el dashboard de administración de su subsitio y haciendo clic en **Change** bajo su página de Account.

![Página de Account del cliente con la tarjeta Your Membership y el botón Change](/img/account-page/membership-change-button.png)

Al hacer clic en el botón **Change**, el usuario/cliente será redirigido a la página de checkout, donde puede seleccionar el plan al que quiere cambiar su suscripción.

![Página de opciones para degradar el plan en el lado del cliente](/img/account-page/downgrade-picker.png)

En este ejemplo, estamos degradando el plan de **Premium** a **Free**.

Para continuar, el usuario solo necesita hacer clic en el botón **Complete Checkout**. Luego lo llevará de vuelta a la página de Account, mostrando un mensaje sobre el cambio pendiente de la membership. Los cambios surtirán efecto en el **próximo ciclo de facturación** del cliente.

![Página de Account que muestra el banner de cambio pendiente de membership](/img/account-page/pending-change.png)

### Qué sucede cuando un usuario degrada su plan {#what-happens-when-a-user-downgrades-their-plan}

Es importante tener en cuenta que degradar el plan no altera la configuración existente en el subsitio del usuario.

No cambia automáticamente la plantilla del sitio, ya que cambiar la plantilla del sitio borrará y restablecerá completamente el subsitio. Esto es para evitar la pérdida innecesaria de datos. Por lo tanto, el espacio en disco, los themes, plugins, etc., permanecerán intactos excepto las entradas.

Entendemos que tu principal preocupación serían los límites y cuotas que estableces en cada plan, pero tenemos que considerar el daño que causaría al subsitio del usuario si elimináramos o cambiáramos cualquiera de sus configuraciones.

Para las entradas que superen el límite establecido en el plan, tienes 3 opciones diferentes: **Mantener las entradas tal como están** *,* **Mover las entradas a la papelera** *,* o **Mover las entradas a borrador** *.* Puedes configurar esto en los ajustes de Ultimate Multisite.

![Página Sites de Network Admin Settings que muestra las opciones de comportamiento para post-limit-exceeded](/img/account-page/settings-sites-post-limit.png)

### Qué sucede con el pago {#what-happens-to-the-payment}

En la versión 2.0, ya no requiere ningún ajuste en el pago en términos de prorrateo.

Esto se debe a que el sistema esperará a que la membership existente **complete su ciclo de facturación antes de que** el nuevo plan/membership entre en vigor. El nuevo importe de facturación para la nueva membership se aplicará y cobrará automáticamente en el siguiente ciclo de facturación.
