---
title: Creando Códigos de Descuento
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Creación de Códigos de Descuento (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Con Ultimate Multisite puedes crear códigos de descuento para ofrecer a tus clientes descuentos en sus suscripciones. ¡Y crearlos es fácil!

## Creación y Edición de Códigos de Descuento

Para crear o editar un código de descuento, ve a **Ultimate Multisite > Códigos de Descuento**.

![](/img/config/discount-codes-list.png)

Allí tendrás una lista de los códigos de descuento que ya has creado.

Puedes hacer clic en **Agregar Código de Descuento** para crear un nuevo cupón o editar los que tienes pasando el cursor sobre ellos y haciendo clic en **Editar**.

![Lista de códigos de descuento con acciones al pasar el cursor](/img/config/discount-codes-list.png)

![Botón Agregar Código de Descuento](/img/config/discount-codes-list.png)

Serás redirigido a la página donde crearás o editarás tu código de cupón. En este ejemplo crearemos uno nuevo.

![Página de edición de código de descuento](/img/config/discount-codes-list.png)

Echemos un vistazo a la configuración disponible aquí:

**Ingresar Código de Descuento:** Este es solo el nombre de tu código de descuento. No es el código que tus clientes deberán usar en el formulario de pago.

**Descripción:** Aquí, puedes describir brevemente para qué sirve este cupón.

![Campos de nombre y descripción del código de descuento](/img/config/discount-codes-list.png)

**Código de Cupón:** Aquí es donde defines el código que tus clientes deberán ingresar durante el pago.

![Campo de código de cupón](/img/config/discount-codes-list.png)

**Descuento:** Aquí puedes establecer un **porcentaje** o una **cantidad fija** de dinero para tu código de descuento.

![Configuración de porcentaje o cantidad fija de descuento](/img/config/discount-codes-list.png)

**Aplicar a renovaciones:** Si esta opción está desactivada, este código de descuento solo se aplicará al **primer pago**. Todos los demás pagos no tendrán descuento. Si está activada, el código de descuento será válido para todos los pagos futuros.

**Descuento de tarifa de configuración:** Si esta opción está desactivada, el código de cupón **no dará ningún descuento en la tarifa de configuración** del pedido. Si está activada, puedes establecer el descuento (porcentaje o cantidad fija) que este código de cupón aplicará a la tarifa de configuración de tus planes.

![Opciones de aplicar a renovaciones y descuento de tarifa de configuración](/img/config/discount-codes-list.png)

**Activo:** Activa o desactiva manualmente este código de cupón.

![Alternar activo para código de descuento](/img/config/discount-codes-list.png)

En **Opciones Avanzadas**, tenemos las siguientes configuraciones:

**Limitar usos:**

  * **Usos:** Aquí puedes ver cuántas veces se ha usado el código de descuento.
  * **Máx. usos:** Esto limitará la cantidad de veces que los usuarios pueden usar este código de descuento. Por ejemplo, si pones 10 aquí, el cupón solo podrá usarse 10 veces. Después de este límite, el código de cupón ya no podrá usarse.

![Configuración de límite de usos con campos de usos y máximo de usos](/img/config/discount-codes-list.png)

**Fechas de inicio y expiración:** Aquí tendrás la opción de agregar una fecha de inicio y/o una fecha de expiración a tu cupón.

![Campos de fecha de inicio y expiración](/img/config/discount-codes-list.png)

**Limitar productos:** Si activas **Seleccionar productos**, se mostrarán todos tus productos. Tendrás la opción de seleccionar manualmente (activando o desactivando) qué producto puede aceptar este código de cupón. Los productos desactivados aquí no mostrarán ningún cambio si tus clientes intentan usar este código de cupón con ellos.

![Alternadores de selección de productos limitados](/img/config/discount-codes-list.png)

Después de configurar todas estas opciones, haz clic en **Guardar Código de Descuento** para guardar tu cupón y listo.

![Botón Guardar Código de Descuento](/img/config/discount-codes-list.png)

El cupón ahora está en tu lista y, desde allí, puedes hacer clic para **editar o eliminar**.

![Código de descuento en la lista con opciones de editar y eliminar](/img/config/discount-codes-list.png)

### 

### Uso de Parámetros de URL:

Si deseas personalizar tus tablas de precios o crear una bonita página de código de cupón para tu sitio web y quieres aplicar un código de descuento al formulario de pago automáticamente, puedes hacerlo mediante parámetros de URL.

Primero, necesitas obtener el enlace compartible de tu plan. Para ello, ve a **Ultimate Multisite > Productos** y selecciona un plan.

Haz clic en el botón **Haga clic para copiar el enlace compartible**. Esto te dará el enlace compartible de este plan específico. En nuestro caso, el enlace compartible proporcionado fue [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Página de producto con botón de enlace compartible](/img/config/products-list.png)

Para aplicar tu código de descuento a este plan específico, simplemente agrega el parámetro **?discount_code=XXX** a la URL. Donde **XXX** es el código del cupón.

En nuestro ejemplo aquí, aplicaremos el código de cupón **50OFF** a este producto específico.

La URL para este plan específico y con el código de descuento 50OFF aplicado se verá así: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
