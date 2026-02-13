---
title: Actualizando un Plan
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Actualizando un Plan (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Sus clientes pueden actualizar sus planes en cualquier momento. Pueden actualizar a otro plan o comprar cualquier servicio o paquete adicional que ofrezca en su red.

En este tutorial cubriremos cómo pueden actualizar su plan y qué sucede después del proceso de actualización.

Para actualizar su plan, sus clientes deben acceder a su panel de control y dirigirse a la página **Cuenta**.

![Panel de control del cliente con enlace a la página Cuenta](/img/admin/memberships-list.png)

En la página **Cuenta**, se les mostrará su membresía actual y el plan asociado. Para actualizar a otro plan, deben hacer clic en **Cambiar** en la esquina superior derecha de la sección **Tu Membresía**.

![Sección Tu Membresía con botón Cambiar](/img/admin/memberships-list.png)

Serán redirigidos a un formulario de pago donde se mostrarán todos los planes disponibles.

También podrán ver los **servicios y paquetes disponibles para su plan actual**, en caso de que solo quieran comprar un servicio o paquete específico (como visitas ilimitadas o espacio en disco en nuestro ejemplo aquí), y no actualizar el plan.

![Formulario de pago mostrando planes y paquetes disponibles](/img/admin/memberships-list.png)

Después de elegir el producto que desean comprar, verán cuánto deberán pagar ahora mismo - excluyendo cualquier crédito existente - y cuánto se les cobrará en la próxima fecha de facturación.

Usualmente, si el producto es otro plan y el pago se realizará entre un cargo de membresía, recibirán un crédito por el monto pagado en el primer plan.

![Resumen de pago de actualización con crédito y monto de la próxima facturación](/img/admin/memberships-list.png)

Si seleccionan un plan o paquete que no cambiará nada en la suscripción actual, verán un mensaje explicándolo.

![Mensaje cuando el plan seleccionado no cambia la suscripción](/img/admin/memberships-list.png)

Después de que se complete el pago, el(los) nuevo(s) producto(s) se agregarán a la cuenta de sus clientes y todos los límites o características del(los) nuevo(s) producto(s) se agregarán instantáneamente: visitas, espacio en disco, publicaciones, etc...

## 

## 

## Rutas de Actualización y Degradación

En cada uno de sus productos, tendrá una pestaña **Actualizaciones y Degradaciones**. La primera opción en esa pestaña es un campo llamado **Grupo de Planes**.

**Grupos de Planes** es lo que le permite a Ultimate Multisite saber que ciertos planes pertenecen a la misma "familia", y por lo tanto deben usarse para construir opciones de rutas de actualización/degradación.

![Pestaña Actualizaciones y Degradaciones con campo Grupo de Planes](/img/config/product-upgrades.png)

Por ejemplo, tiene un **Free plan**, un **Basic Plan** y un **Premium Plan** disponibles. Quiere que los usuarios suscritos bajo el **Free Plan** puedan actualizar solo al **Premium Plan** y no quiera que vean el "Basic Plan" como una opción de actualización. Todo lo que necesita hacer es asignar el mismo nombre de grupo de planes tanto al Free como al Premium, como se muestra en las capturas de pantalla a continuación.

![Free Plan con grupo de plan High End asignado](/img/config/product-upgrades.png)

![Premium Plan con grupo de plan High End asignado](/img/config/product-upgrades.png)

Esto debería indicar a Ultimate Multisite que existe una "familia" de planes en la red llamada **High End**. Al ofrecer actualizaciones o degradaciones, solo se presentarán como opción a los planes de la misma familia.
