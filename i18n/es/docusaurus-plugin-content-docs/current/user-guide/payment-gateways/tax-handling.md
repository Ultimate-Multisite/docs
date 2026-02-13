---
title: Manejo de Impuestos
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Manejo de impuestos

Ultimate Multisite tiene un módulo de recaudación de impuestos incorporado en nuestro plugin principal, por lo que si necesita recaudar impuestos sobre sus planes, paquetes y servicios, puede hacerlo fácilmente sin recurrir a la instalación de complementos.

Para las empresas ubicadas en Europa, ofrecemos un **add-on** que añade herramientas y funciones para mejorar el soporte de VAT.

Ultimate Multisite no presenta ni remite impuestos en su nombre al gobierno; simplemente le ayudamos a recaudar los impuestos apropiados en el momento de la transacción. **Todavía tendrá que remitir los impuestos por su cuenta.**

## Habilitando la recolección de impuestos

La recolección de impuestos no está habilitada por defecto. Para activarla, debe ir a **Ultimate Multisite > Settings > Taxes** y activar la opción Enable Taxes.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### Impuesto excluido vs. impuesto incluido

Por defecto, todos los precios de sus productos están excluidos de impuestos, lo que significa que los impuestos **no están incluidos** en el precio del producto. Si determinamos que un cliente debe pagar impuestos sobre una compra determinada, añadiremos los impuestos **sobre** el subtotal.

Si prefiere que los impuestos estén incluidos en el precio de su producto, puede hacerlo habilitando la opción **Inclusive Tax**.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

No olvide **guardar** los cambios que haya realizado.

## Creación de tasas de impuestos

Después de habilitar la recolección de impuestos, deberá crear tasas de impuestos para ubicaciones específicas utilizando nuestro editor de tasas de impuestos.

Puede acceder al editor haciendo clic en el botón **Manage Tax Rates** en la barra lateral de la página de configuración de impuestos.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

En la página del editor de tasas de impuestos, puede agregar nuevas Tasas de Impuestos haciendo clic en el botón **Add new Row**.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

Deberá asignar a cada tasa de impuesto un **title** (utilizado en las facturas). Luego puede elegir el **country** (obligatorio), el **state** y la **city** (ambos opcionales) donde se cobrará este impuesto. Finalmente, añada la **tax rate in percents**.

### Categorías de impuestos

También puede crear múltiples Categorías de Impuestos, para añadir diferentes tasas de impuestos para distintos tipos de productos.

Haga clic en **Add new Tax Category**, luego escriba el nombre de su categoría y presione **Create**.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Creating a new tax category](/img/config/settings-taxes.png)

Para navegar por las categorías, haga clic en **Switch** y seleccione la categoría a la que desea agregar nuevos impuestos.

![Switch between tax categories](/img/config/settings-taxes.png)

![Selecting a tax category to view](/img/config/settings-taxes.png)

Puede establecer la categoría de impuesto para un producto en particular yendo a la **Product edit page** y luego a la pestaña Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

En esa misma pantalla, puede desactivar el interruptor **Is Taxable?** para indicar a Ultimate Multisite que no debe recaudar impuestos sobre ese producto.

## Soporte de IVA europeo

Como se mencionó antes, tenemos un add-on disponible para clientes en la UE que tienen requisitos adicionales debido a las regulaciones de IVA europeo.

Nuestras herramientas de IVA ayudan con un par de cosas importantes:

  * Carga sencilla de tasas de IVA de la UE;
  * Recolección y validación de números de IVA - y cargo inverso para entidades exentas de IVA (como empresas con números de IVA válidos);

Para instalar ese add-on, vaya a **Ultimate Multisite > Settings** y luego haga clic en el enlace de la barra lateral **Check our Add-ons**.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

Será redirigido a nuestra página de complementos. Allí, puede buscar el **Ultimate Multisite VAT add-on** y instalarlo.

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

Luego, vaya a **Network Admin > Plugins** y active ese add-on a nivel de red.

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

Si vuelve a la pestaña **Tax Settings**, verá nuevas opciones disponibles. Active la opción **Enable VAT Support** para habilitar las nuevas herramientas de IVA. ¡No olvide **guardar** sus ajustes!

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

### Descargando tasas de impuestos de IVA

Una de las herramientas que añade nuestra integración es la capacidad de cargar las tasas de impuestos para los estados miembros de la UE. Esto se puede hacer visitando la página del editor de tasas de impuestos después de habilitar el soporte de IVA de la UE.

En la parte inferior de la página, verá las opciones de descarga de IVA. Seleccionar un tipo de tasa y hacer clic en el botón **Update EU VAT Rates** descargará y completará automáticamente la tabla con las tasas de impuestos para cada estado miembro de la UE. Luego, solo necesita guardarla.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

También puede editar los valores después de descargarlos. Para hacerlo, simplemente edite la línea de la tabla que necesite y haga clic para guardar los nuevos valores.

### Validación de IVA

Cuando el soporte de IVA está habilitado, Ultimate Multisite agregará un campo adicional al formulario de pago, debajo del campo de dirección de facturación. El campo solo aparecerá para clientes ubicados en la UE.

![VAT number field on the checkout form](/img/config/settings-taxes.png)

Ultimate Multisite luego validará el número de IVA y, si resulta ser válido, se aplicará el mecanismo de cargo inverso y la tasa de impuesto se establecerá en 0% en ese pedido.
