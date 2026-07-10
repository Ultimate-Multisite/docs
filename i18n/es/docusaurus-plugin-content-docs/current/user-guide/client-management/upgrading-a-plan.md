---
title: Actualizar un plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Actualizar un plan (v2) {#upgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Tus clientes pueden actualizar sus planes en cualquier momento. Pueden actualizar a otro plan o comprar cualquier servicio o paquete adicional que ofrezcas en tu red.

En este tutorial cubriremos cómo pueden actualizar su plan y qué ocurre después del proceso de actualización.

Para actualizar su plan, tus clientes deben acceder a su Dashboard e ir a la página **Account**.

![Dashboard del subsitio del cliente con el enlace del menú Account visible](/img/account-page/account-menu.png)

En la página Account, se les mostrará su membresía actual y el plan asociado a ella. Para actualizar a otro plan, deben hacer clic en **Cambiar** en la esquina superior derecha de la sección **Tu membresía**.

![Página Account, tarjeta Tu membresía con botón Cambiar](/img/account-page/membership-change-button.png)

Serán redirigidos a un formulario de pago donde se mostrarán todos los planes disponibles.

También podrán ver los **servicios y paquetes disponibles para su plan actual** , en caso de que solo quieran comprar un servicio o paquete específico (como visitas ilimitadas o espacio en disco en nuestro ejemplo aquí), y no actualizar el plan.

![Selector de actualización que muestra planes y paquetes disponibles del lado del cliente](/img/account-page/upgrade-picker.png)

Después de elegir el producto que quieren comprar, verán cuánto deberán pagar ahora mismo —excluyendo cualquier crédito existente— y cuánto se les cobrará en la próxima fecha de facturación.

Normalmente, si el producto es otro plan y el pago se va a realizar entre un cargo de membresía, recibirán un crédito por el importe pagado en el primer plan.

![Resumen de pago de actualización que muestra el crédito aplicado y el importe de la próxima facturación](/img/account-page/upgrade-summary.png)

Si seleccionan un plan o paquete que no cambiará nada de la suscripción actual, verán un mensaje que lo explica.

![Aviso cuando el plan seleccionado no cambia la suscripción](/img/account-page/upgrade-no-change.png)

Después de completar el pago, los nuevos productos se añadirán a la cuenta de tus clientes y todos los límites o funciones de los nuevos productos se añadirán al instante a ella: visitas, espacio en disco, entradas, etc...

##

##

## Rutas de actualización y degradación {#upgrade-and-downgrade-paths}

En cada uno de tus productos, tendrás una pestaña **Up & Downgrades**. La primera opción de esa pestaña es un campo llamado **Grupo de planes**.

**Los grupos de planes** son lo que te permite indicar a Ultimate Multisite que ciertos planes pertenecen a la misma "familia" y, por lo tanto, deben usarse para construir opciones de rutas de actualización/degradación.

![Pestaña Up and Downgrades de edición de producto con campo Grupo de planes](/img/config/product-upgrades-plan-group.png)

Por ejemplo, tienes un **plan gratuito** , un **Plan Básico** y un **Plan Premium** disponibles. Quieres que los usuarios suscritos al **Plan gratuito** puedan actualizar solo al **Plan Premium** y no quieres que vean el "Plan Básico" como opción de actualización. Lo único que necesitas hacer es asignar el mismo nombre de grupo de planes tanto para los planes Free como Premium, como se muestra en las capturas de pantalla a continuación.

![Página de producto Free Plan con el grupo de planes High End asignado](/img/config/product-upgrades-free.png)

![Página de producto Premium Plan con el grupo de planes High End asignado](/img/config/product-upgrades-premium.png)

Esto debería indicar a Ultimate Multisite que hay una "familia" de planes en la red llamada **High End**. Al ofrecer actualizaciones o degradaciones, solo los planes de la misma familia se presentarán como opción para el usuario.
