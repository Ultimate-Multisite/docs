---
title: Creando Códigos de Descuento
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Creando Códigos de Descuento (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Con Ultimate Multisite puedes crear códigos de descuento para ofrecer a tus clientes descuentos en sus suscripciones. ¡Y crearlos es fácil!

## Creando y Editando Códigos de Descuento

Para crear o editar un código de descuento, ve a **Ultimate Multisite > Discount Codes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

Allí tendrás una lista de los códigos de descuento que ya has creado.

Puedes hacer clic en **Add Discount** **Code** para crear un nuevo cupón o puedes editar los que tienes pasando el cursor sobre ellos y haciendo clic en **Edit**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

Serás redirigido a la página donde crearás o editarás tu código de cupón. En este ejemplo crearemos uno nuevo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

Echemos un vistazo a la configuración disponible aquí:

**Enter Discount Code:** Este es simplemente el nombre de tu código de descuento. No es el código que tus clientes deberán usar en el formulario de pago.

**Description:** Aquí, puedes describir brevemente para qué sirve este cupón.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** Aquí es donde defines el código que tus clientes deberán introducir durante el pago.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** Aquí puedes establecer ya sea un **percentage** o un **fixed amount** de dinero para tu código de descuento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** Si esta opción está desactivada, este código de descuento solo se aplicará al **first payment**. Todos los demás pagos no tendrán descuento. Si la opción está activada, el código de descuento será válido para todos los pagos futuros.

**Setup fee discount:** Si esta opción está desactivada, el código de cupón **no dará ningún descuento por la tarifa de configuración** del pedido. Si la opción está activada, puedes establecer el descuento (porcentaje o monto fijo) que este código de cupón aplicará a la tarifa de configuración de tus planes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** Activa o desactiva manualmente este código de cupón.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

Bajo **Advanced Optio ns**, tenemos las siguientes configuraciones:

**Limit uses:**

  * **Uses:** Aquí puedes ver cuántas veces se ha usado el código de descuento.

  * **Max uses:** Esto limitará la cantidad de veces que los usuarios pueden usar este código de descuento. Por ejemplo, si pones 10 aquí, el cupón solo podrá usarse 10 veces. Después de este límite, el código de cupón ya no podrá usarse.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)**Start & expiration dates:** Aquí tendrás la opción de añadir una fecha de inicio y/o una fecha de expiración a tu cupón.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** Si activas **Select products**, se mostrarán todos tus productos. Tendrás la opción de seleccionar manualmente (activando o desactivando) qué producto puede aceptar este código de cupón. Los productos que estén desactivados aquí no mostrarán ningún cambio si tus clientes intentan usar este código de cupón con ellos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

Después de configurar todas estas opciones, haz clic en **Save Discount Code** para guardar tu cupón y listo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

El cupón ahora está en tu lista y, desde allí, puedes hacer clic para **edit or delete**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### Usando Parámetros de URL:

Si deseas personalizar tus tablas de precios o crear una bonita página de código de cupón para tu sitio web y quieres aplicar un código de descuento al formulario de pago automáticamente, puedes hacerlo mediante parámetros de URL.

Primero, necesitas obtener el enlace compartible de tu plan. Para ello, ve a **Ultimate Multisite > Products** y selecciona un plan.

Haz clic en el botón **Click to Copy Shareable Link**. Esto te dará el enlace compartible de este plan específico. En nuestro caso, el enlace compartible dado fue [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

Para aplicar tu código de descuento a este plan específico, simplemente añade el parámetro **?discount_code=XXX** a la URL. Donde **XXX** es el código del cupón.

En nuestro ejemplo aquí, aplicaremos el código de cupón **50OFF** a este producto específico.

La URL para este plan específico y con el código de descuento 50OFF aplicado se verá así: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
