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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ICSEhm7yhk.png)

### Impuesto excluido vs. impuesto incluido

Por defecto, todos los precios de sus productos están excluidos de impuestos, lo que significa que los impuestos **no están incluidos** en el precio del producto. Si determinamos que un cliente debe pagar impuestos sobre una compra determinada, añadiremos los impuestos **sobre** el subtotal.

Si prefiere que los impuestos estén incluidos en el precio de su producto, puede hacerlo habilitando la opción **Inclusive Tax**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xiiaIXYI2c.png)

No olvide **guardar** los cambios que haya realizado.

## Creación de tasas de impuestos

Después de habilitar la recolección de impuestos, deberá crear tasas de impuestos para ubicaciones específicas utilizando nuestro editor de tasas de impuestos.

Puede acceder al editor haciendo clic en el botón **Manage Tax Rates** en la barra lateral de la página de configuración de impuestos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UZb6g2rvrs.png)

En la página del editor de tasas de impuestos, puede agregar nuevas Tasas de Impuestos haciendo clic en el botón **Add new Row**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZyJCSI6zLZ.png)

Deberá asignar a cada tasa de impuesto un **title** (utilizado en las facturas). Luego puede elegir el **country** (obligatorio), el **state** y la **city** (ambos opcionales) donde se cobrará este impuesto. Finalmente, añada la **tax rate in percents**.

### Categorías de impuestos

También puede crear múltiples Categorías de Impuestos, para añadir diferentes tasas de impuestos para distintos tipos de productos.

Haga clic en **Add new Tax Category**, luego escriba el nombre de su categoría y presione **Create**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-73biI4o8lj.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YhH2hLLvEC.png)

Para navegar por las categorías, haga clic en **Switch** y seleccione la categoría a la que desea agregar nuevos impuestos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xjghTq6ta4.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E5YLXeIsWH.png)

Puede establecer la categoría de impuesto para un producto en particular yendo a la **Product edit page** y luego a la pestaña Taxes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vkh5NXKplU.png)

En esa misma pantalla, puede desactivar el interruptor **Is Taxable?** para indicar a Ultimate Multisite que no debe recaudar impuestos sobre ese producto.

## Soporte de IVA europeo

Como se mencionó antes, tenemos un add-on disponible para clientes en la UE que tienen requisitos adicionales debido a las regulaciones de IVA europeo.

Nuestras herramientas de IVA ayudan con un par de cosas importantes:

  * Carga sencilla de tasas de IVA de la UE;
  * Recolección y validación de números de IVA - y cargo inverso para entidades exentas de IVA (como empresas con números de IVA válidos);

Para instalar ese add-on, vaya a **Ultimate Multisite > Settings** y luego haga clic en el enlace de la barra lateral **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AsMyAH5HKC.png)

Será redirigido a nuestra página de complementos. Allí, puede buscar el **Ultimate Multisite VAT add-on** y instalarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AQ6gWfdY5G.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iz8uncHiYa.png)

Luego, vaya a **Network Admin > Plugins** y active ese add-on a nivel de red.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PkWGMWlgVu.png)

Si vuelve a la pestaña **Tax Settings**, verá nuevas opciones disponibles. Active la opción **Enable VAT Support** para habilitar las nuevas herramientas de IVA. ¡No olvide **guardar** sus ajustes!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Gn1SspQZ0S.png)

### Descargando tasas de impuestos de IVA

Una de las herramientas que añade nuestra integración es la capacidad de cargar las tasas de impuestos para los estados miembros de la UE. Esto se puede hacer visitando la página del editor de tasas de impuestos después de habilitar el soporte de IVA de la UE.

En la parte inferior de la página, verá las opciones de descarga de IVA. Seleccionar un tipo de tasa y hacer clic en el botón **Update EU VAT Rates** descargará y completará automáticamente la tabla con las tasas de impuestos para cada estado miembro de la UE. Luego, solo necesita guardarla.

### ![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZKEqPBX5E.png)

También puede editar los valores después de descargarlos. Para hacerlo, simplemente edite la línea de la tabla que necesite y haga clic para guardar los nuevos valores.

### Validación de IVA

Cuando el soporte de IVA está habilitado, Ultimate Multisite agregará un campo adicional al formulario de pago, debajo del campo de dirección de facturación. El campo solo aparecerá para clientes ubicados en la UE.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ITUbFOIM4r.png)

Ultimate Multisite luego validará el número de IVA y, si resulta ser válido, se aplicará el mecanismo de cargo inverso y la tasa de impuesto se establecerá en 0% en ese pedido.
