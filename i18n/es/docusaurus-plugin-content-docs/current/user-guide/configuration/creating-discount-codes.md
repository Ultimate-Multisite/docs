---
title: Creación de códigos de descuento
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Crear códigos de descuento (v2) {#creating-discount-codes-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Con Ultimate Multisite puedes crear códigos de descuento para dar descuentos a tus clientes en sus suscripciones. ¡Y crearlos es fácil!

## Crear y editar códigos de descuento {#creating-and-editing-discount-codes}

Para crear o editar un código de descuento, ve a **Ultimate Multisite > Códigos de descuento**.

![Lista de códigos de descuento — estado vacío antes de que exista ningún código](/img/config/discount-codes-empty.png)

Allí tendrás una lista de los códigos de descuento que ya has creado.

Puedes hacer clic en **Añadir descuento** **Código** para crear un nuevo cupón o puedes editar los que tienes pasando el cursor sobre ellos y haciendo clic en **Editar**.

![Lista de códigos de descuento con acciones al pasar el cursor que muestran enlaces de Editar y Eliminar](/img/config/discount-codes-list-hover.png)

![Botón Añadir código de descuento en el encabezado de la página](/img/config/discount-codes-add-button.png)

Serás redirigido a la página donde crearás o editarás tu código de cupón. En este ejemplo crearemos uno nuevo.

![Página de edición de código de descuento con todas las secciones visibles](/img/config/discount-code-edit.png)

Echemos un vistazo a los ajustes disponibles aquí:

**Introduce el código de descuento:** Este es simplemente el nombre de tu código de descuento. Este no es el código que tus clientes tendrán que usar en el formulario de checkout.

**Descripción:** Aquí puedes describir brevemente para qué sirve este cupón.

![Campos de nombre y descripción del código de descuento en la parte superior de la página de edición](/img/config/discount-code-description.png)

También puedes ver el código de descuento como activo o inactivo:

![Estado activo del código de descuento](/img/config/discount-code-active.png)

**Código de cupón:** Aquí es donde defines el código que tus clientes tendrán que introducir durante el checkout.

![Campo de código de cupón donde los clientes introducen el código en el checkout](/img/config/discount-code-coupon-field.png)

**Descuento:** Aquí puedes establecer un **porcentaje** o una **cantidad fija** de dinero para tu código de descuento.

![Ajuste de importe de descuento con desplegable de porcentaje o cantidad fija](/img/config/discount-code-amount.png)

**Aplicar a renovaciones:** Si esta opción está desactivada, este código de descuento solo se aplicará al **primer pago**. Todos los demás pagos no tendrán descuento. Si esta opción está activada, el código de descuento será válido para todos los pagos futuros.

**Descuento de tarifa de configuración:** Si esta opción está desactivada, el código de cupón **no dará ningún descuento para la tarifa de configuración** del pedido. Si esta opción está activada, puedes establecer el descuento (porcentaje o cantidad fija) que este código de cupón aplicará a la tarifa de configuración de tus planes.

![Opciones de alternancia de aplicar a renovaciones y descuento de tarifa de configuración](/img/config/discount-code-renewals.png)

**Activo:** Activa o desactiva manualmente este código de cupón.

![Alternancia Activo para habilitar o deshabilitar manualmente el código de descuento](/img/config/discount-code-active.png)

En **Opciones avanzadas**, tenemos los siguientes ajustes:

![Opciones avanzadas del código de descuento](/img/config/discount-code-advanced.png)

**Limitar usos:**

  * **Usos:** Aquí puedes ver cuántas veces se usó el código de descuento.

  * **Usos máximos:** Esto limitará la cantidad de veces que los usuarios pueden usar este código de descuento. Por ejemplo, si pones 10 aquí, el cupón solo podría usarse 10 veces. Después de este límite, el código de cupón ya no se podrá usar.

![Ajuste de limitar usos con recuento de usos actuales y campo de usos máximos](/img/config/discount-code-limit-uses.png)

**Fechas de inicio y caducidad:** Aquí tendrás la opción de añadir una fecha de inicio y/o una fecha de caducidad a tu cupón.

![Campos de fecha de inicio y caducidad para programar el código de descuento](/img/config/discount-code-dates.png)

**Limitar productos:** Si activas **Seleccionar productos**, se te mostrarán todos tus productos. Tendrás la opción de seleccionar manualmente (activando o desactivando) qué producto puede aceptar este código de cupón. Los productos que estén desactivados aquí no mostrarán ningún cambio si tus clientes intentan usar este código de cupón en ellos.

![Sección de limitar productos con interruptores de alternancia por producto](/img/config/discount-code-limit-products.png)

Después de configurar todas estas opciones, haz clic en **Guardar código de descuento** para guardar tu cupón y ¡listo!

![Botón Guardar código de descuento en la parte inferior de la página de edición](/img/config/discount-code-save.png)

El cupón ahora está en tu lista y, desde allí, puedes hacer clic para **editarlo o eliminarlo**.

![Fila de código de descuento en la lista con acciones de Editar y Eliminar al pasar el cursor](/img/config/discount-codes-list-hover.png)

###

### Usar parámetros de URL: {#using-url-parameters}

Si quieres personalizar tus tablas de precios o crear una bonita página de código de cupón para tu sitio web y quieres aplicar automáticamente un código de descuento a tu formulario de checkout, puedes hacerlo mediante parámetros de URL.

Primero, necesitas obtener el enlace compartible de tu plan. Para hacerlo, ve a **Ultimate Multisite > Productos** y selecciona un plan.

Haz clic en el botón **Haz clic para copiar enlace compartible**. Esto te dará el enlace compartible a este plan específico. En nuestro caso, el enlace compartible dado fue [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Página de producto con botón de enlace compartible](/img/config/products-list.png)

Para aplicar tu código de descuento a este plan específico, simplemente añade el parámetro **?discount_code=XXX** a la URL. Donde **XXX** es el código de cupón.

En nuestro ejemplo aquí, aplicaremos el código de cupón **50OFF** a este producto específico.

La URL para este plan específico y con el código de descuento 50OFF aplicado se verá así: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
