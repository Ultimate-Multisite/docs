---
title: Actualis planum
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plan Actualizándote (v2) {#upgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Tus clientes pueden actualizar sus planes en cualquier momento. Pueden optar por actualizar a otro plan o comprar cualquier servicio o paquete adicional que ofrezcas en tu red.

En este tutorial veremos cómo pueden actualizar su plan y qué sucede después del proceso de actualización.

Para actualizar su plan, tus clientes deben acceder a su dashboard y dirigirse a la página **Account** (Cuenta).

![Dashboard del subsitio del cliente con el enlace del menú Account visible](/img/account-page/account-menu.png)

En la página Account, se les mostrará su membresía actual y el plan asociado a ella. Para actualizar a otro plan, deben hacer clic en **Change** (Cambiar) en la esquina superior derecha de la sección **Your Membership** (Tu Membresía).

![Página Account Tarjeta Your Membership con botón Change](/img/account-page/membership-change-button.png)

Serán redirigidos a un formulario de pago donde se mostrarán todos los planes disponibles.

También podrán ver los **services and packages available for their current plan** (servicios y paquetes disponibles para su plan actual), en caso de que solo deseen comprar un servicio o paquete específico (como visitas ilimitadas o espacio en disco en nuestro ejemplo aquí) y no actualizar el plan.

![Selector de actualización mostrando planes y paquetes disponibles del lado del cliente](/img/account-page/upgrade-picker.png)

Después de elegir el producto que desean comprar, verán cuánto tendrán que pagar ahora —excluyendo cualquier crédito existente— y cuánto se les cobrará en la próxima fecha de facturación.

Normalmente, si el producto es otro plan y el pago se realiza entre un cargo de membresía, recibirán un crédito por el monto pagado en el primer plan.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Si eligunt un plan o paquete que no cambie nada de la suscripción actual, verán un mensaje explicando eso.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Después de completar el pago, los nuevos producto(s) se añadirán a la cuenta de sus clientes y todos los límites o características del nuevo producto(s) se añadirán instantáneamente: visitas, espacio en disco, entradas, etc...

##

## Rutas de Actualización y Desactualización (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

En cada uno de tus productos, tendrás una pestaña llamada **Up & Downgrades**. La primera opción en esa pestaña es un campo llamado **Plan Group** (Grupo de Plan).

Los **Plan groups** son lo que te permite decirle a Ultimate Multisite que ciertos planes pertenecen a la misma "familia", y por lo tanto deben usarse para construir las opciones de ruta de actualización/desactualización.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Por ejemplo, tienes un **Free plan** (Plan Gratuito), un **Basic Plan** (Plan Básico) y un **Premium Plan** (Plan Premium) disponibles. Quieres que los usuarios suscritos bajo el **Free Plan** solo puedan actualizar al **Premium Plan** y no quieres que vean el "Basic Plan" como una opción de actualización. Todo lo que necesitas hacer es asignar el mismo nombre de grupo de plan tanto para el Free Plan como para el Premium Plan, como se muestra en las capturas de pantalla a continuación.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Iudicium hoc est dicere Ultimate Multisite quod in rete est familia planum appellata **High End**. Quando offeres incrementa vel diminuenda, solum plana edem familia ad utrumque utrero ut optio ad usum utriusque ponantur.
