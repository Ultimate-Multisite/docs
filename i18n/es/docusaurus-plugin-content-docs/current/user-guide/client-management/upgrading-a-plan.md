---
title: Actualizando un Plan
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Actualizando un Plan (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Sus clientes pueden actualizar sus planes en cualquier momento. Pueden actualizar a otro plan o comprar cualquier servicio o paquete adicional que ofrezca en su red.

En este tutorial cubriremos cómo pueden actualizar su plan y qué sucede después del proceso de actualización.

Para actualizar su plan, sus clientes deben acceder a su panel de control y dirigirse a la página **Account**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4DK63Wc0iN.png)

En la página de Cuenta, se les mostrará su membresía actual y el plan asociado. Para actualizar a otro plan, deben hacer clic en **Change** en la esquina superior derecha de la sección **Your Membership**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RVPLZjr3nZ.png)

Serán redirigidos a un formulario de pago donde se mostrarán todos los planes disponibles.

También podrán ver los **services and packages available for their current plan**, en caso de que solo quieran comprar un servicio o paquete específico (como visitas ilimitadas o espacio en disco en nuestro ejemplo aquí), y no actualizar el plan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tDdSWzbvoZ.png)

Después de elegir el producto que desean comprar, verán cuánto deberán pagar ahora mismo, excluyendo cualquier crédito existente, y cuánto se les cobrará en la próxima fecha de facturación.

Generalmente, si el producto es otro plan y el pago se realizará entre un cargo de membresía, recibirán un crédito por el monto pagado en el primer plan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Th8i4hZGXz.png)

Si seleccionan un plan o paquete que no cambiará nada de la suscripción actual, verán un mensaje explicándolo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7PyuRlDmOs.png)

Después de completar el pago, el(los) nuevo(s) producto(s) se agregarán a la cuenta de sus clientes y todos los límites o características del(los) nuevo(s) producto(s) se agregarán instantáneamente: visitas, espacio en disco, publicaciones, etc...

## 

## 

## Rutas de Actualización y Degradación

En cada uno de sus productos, tendrá una pestaña **Up & Downgrades**. La primera opción en esa pestaña es un campo llamado **Plan Group**.

**Plan groups** es lo que le permite a Ultimate Multisite saber que ciertos planes pertenecen a la misma "family", y por lo tanto deben usarse para construir opciones de rutas de actualización/degradación.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KZFTDp2LlW.png)

Por ejemplo, tiene un **Free plan**, un **Basic Plan** y un **Premium Plan** disponibles. Quiere que los usuarios suscritos bajo el **Free Plan** puedan actualizar solo al **Premium Plan** y no quiera que vean el "Basic Plan" como una opción de actualización. Todo lo que necesita hacer es asignar el mismo nombre de grupo de planes tanto para Free como para Premium, como se muestra en las capturas de pantalla a continuación.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZApgTVPiPw.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dbabo1khAz.png)

Lo que esto debería hacer es indicar a Ultimate Multisite que existe una "family" de planes en la red llamada **High End**. Al ofrecer actualizaciones o degradaciones, solo se presentarán como opción al usuario los planes de la misma familia.
