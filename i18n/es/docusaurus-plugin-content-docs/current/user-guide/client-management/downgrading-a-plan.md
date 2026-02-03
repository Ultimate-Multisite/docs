---
title: Reducir un Plan
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Downgrading a plan (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Reducir un plan o suscripción es una acción común que tus clientes pueden realizar si tienen un presupuesto limitado o han decidido que no necesitarán muchos recursos para ejecutar su subsitio.

## How to downgrade a plan

Tus clientes pueden reducir su plan en cualquier momento iniciando sesión en el panel de administración de su subsitio y haciendo clic en **Change** en la página de su cuenta.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sprLyB2iMU.png)

Al hacer clic en el botón **Change**, el usuario/cliente será redirigido a la página de pago donde podrá seleccionar el plan al que desea cambiar su suscripción.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aTnhJPFVFh.png)

En este ejemplo, estamos reduciendo el plan de **Premium** a **Free**.

Para continuar, el usuario solo necesita hacer clic en el botón **Complete Checkout**. Luego será llevado de regreso a la página de la cuenta mostrando un mensaje sobre el cambio pendiente de la membresía. Los cambios entrarán en vigor en el **siguiente ciclo de facturación** del cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E2qcjxzDDG.png)

### What happens when a user downgrades their plan

Es importante señalar que reducir el plan no altera la configuración existente en el subsitio del usuario.

No cambia automáticamente la plantilla del sitio, ya que cambiar la plantilla borraría y restablecería por completo el subsitio. Esto evita pérdidas de datos innecesarias. Por lo tanto, el espacio en disco, los temas, los plugins, etc., permanecerán intactos excepto por las publicaciones.

Entendemos que tu principal preocupación serían los límites y cuotas que estableces en cada plan, pero debemos considerar el daño que causaría al subsitio del usuario si elimináramos o cambiáramos alguna de sus configuraciones.

Para las publicaciones que excedan el límite establecido en el plan, tienes 3 opciones diferentes: **Keep the posts as it** *,* **Move the posts to trash** *,* o **Move the posts to draft** *.* Puedes configurar esto en la configuración de Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztHV8cZDG0.png)

### What happens to the payment

En la versión 2.0, ya no se requieren ajustes en el pago en términos de prorrateo.

Esto se debe a que el sistema esperará a que la membresía existente **complete su ciclo de facturación antes** de que el nuevo plan/membresía entre en vigor. El nuevo importe de facturación para la nueva membresía se aplicará y cobrará automáticamente en el siguiente ciclo de facturación.
