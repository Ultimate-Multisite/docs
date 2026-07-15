---
title: Gestión de impuestos
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Gestión de impuestos

Ultimate Multisite tiene un módulo de recaudación de impuestos integrado en nuestro plugin principal, así que si necesitas recaudar impuestos sobre ventas en tus planes, paquetes y servicios, puedes hacerlo fácilmente sin recurrir a instalar ningún complemento.

Para empresas ubicadas en Europa, ofrecemos un **complemento** que añade herramientas y funciones para **dar mejor soporte al VAT** compliance.

Ultimate Multisite no presenta ni remite impuestos en tu nombre al gobierno; simplemente te ayudamos a recaudar los impuestos correspondientes en el momento de la transacción. **Aun así, tendrás que remitir los impuestos por tu cuenta.**

## Habilitar la recaudación de impuestos {#enabling-tax-collection}

La recaudación de impuestos no está habilitada de forma predeterminada. Para habilitarla, debes ir a **Ultimate Multisite > Settings > Taxes** y activar el ajuste Enable Taxes.

![Alternador Enable Taxes en la parte superior de la página de ajustes de impuestos](/img/config/settings-taxes-enable.png)

Aquí tienes una vista completa de la página de ajustes de impuestos:

![Página completa de ajustes de impuestos](/img/config/settings-taxes-full.png)

También puedes ver los ajustes de impuestos para productos individuales:

![Ajustes de impuestos para productos](/img/config/settings-taxes.png)

### Impuestos excluidos vs. impuestos incluidos {#tax-excluded-vs-tax-included}

De forma predeterminada, todos los precios de tus productos excluyen impuestos, lo que significa que los impuestos **no están incluidos** en el precio del producto. Si determinamos que un cliente debe pagar impuestos en una compra determinada, añadiremos los impuestos **encima** del subtotal.

Si prefieres que los impuestos estén incluidos en el precio de tu producto, puedes hacerlo habilitando el ajuste **Inclusive Tax**.

![Fila del alternador Inclusive Tax debajo del ajuste Enable Taxes](/img/config/settings-taxes-inclusive.png)

No olvides **guardar** los cambios que has realizado.

###

## Crear tasas impositivas {#creating-tax-rates}

Después de habilitar la recaudación de impuestos, tendrás que crear tasas impositivas para ubicaciones específicas usando nuestro editor de tasas impositivas.

Puedes acceder al editor haciendo clic en el botón **Manage Tax Rates** en la barra lateral de la página de ajustes de impuestos.

![Enlace Manage Tax Rates en el panel Tax Rates de la página de ajustes](/img/config/settings-taxes-manage-rates.png)

En la página del editor de tasas impositivas, puedes añadir nuevas tasas impositivas haciendo clic en el botón **Add new Row**.

![Tabla del editor de tasas impositivas con el botón Add new Row en la parte superior](/img/config/tax-rates-editor.png)

Tendrás que dar a cada tasa impositiva un **título** (usado en las facturas). Luego puedes elegir el **país** (obligatorio), el **estado,** y la **ciudad** (ambos opcionales) donde se cobrará este impuesto. Por último, añade la **tasa impositiva en porcentajes**.

### Categorías de impuestos {#tax-categories}

También puedes crear varias categorías de impuestos, para añadir diferentes tasas impositivas para distintos tipos de productos.

Haz clic en **Add new Tax Category** , luego escribe el nombre de tu categoría y pulsa **Create**.

![Botón Add new Tax Category en la parte superior del editor de tasas impositivas](/img/config/tax-categories-add.png)

![Campo de entrada Tax Category Name en el modal de creación de categoría](/img/config/tax-categories-create-modal.png)

Para navegar por las categorías, haz clic en **Switch** y selecciona la categoría a la que quieres añadir nuevos impuestos.

![Botón desplegable Switch para cambiar entre categorías de impuestos](/img/config/tax-categories-switch.png)

![Desplegable selector de categorías de impuestos que muestra las categorías disponibles](/img/config/tax-categories-select.png)

Puedes establecer la categoría de impuestos para un producto concreto yendo a la **página de edición del producto** y luego a la pestaña Taxes.

![Pestaña de impuestos del producto con categoría de impuestos y alternador taxable](/img/config/product-taxes.png)

En esa misma pantalla, puedes desactivar el alternador **Is Taxable?** para indicar a Ultimate Multisite que no debe recaudar impuestos en ese producto determinado.

## Soporte para VAT europeo {#european-vat-support}

Como se mencionó antes, tenemos un complemento disponible para clientes en la UE que tienen requisitos adicionales debido a las normativas europeas de VAT.

Nuestras herramientas de VAT ayudan con un par de cosas importantes:

  * Carga sencilla de las tasas de VAT de la UE;

  * Recopilación y validación del número de VAT, y aplicación de inversión del sujeto pasivo para entidades exentas de VAT (como empresas con números de VAT válidos);

Para instalar ese complemento, ve a **Ultimate Multisite > Settings** y luego haz clic en el enlace de la barra lateral **Check our Add-ons**.

![Barra lateral de la página de ajustes con el enlace Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Serás redirigido a nuestra página de complementos. Allí, puedes buscar el **complemento Ultimate Multisite VAT** e instalarlo.

<!-- Captura de pantalla no disponible: tarjeta del complemento VAT en la página de complementos -->

<!-- Captura de pantalla no disponible: diálogo Install Now del complemento VAT -->

Luego, ve a **Network Admin > Plugins** y activa ese complemento en toda la red.

<!-- Captura de pantalla no disponible: acción Network Activate para el complemento VAT en la página Plugins -->

Si vuelves a la **pestaña Tax Settings** , verás nuevas opciones disponibles. Activa la opción **Enable VAT Support** para habilitar las nuevas herramientas de VAT. ¡No olvides **guardar** tus ajustes!

<!-- Captura de pantalla no disponible: alternador Enable VAT Support en los ajustes de impuestos después de la activación del complemento -->

### Importar tasas impositivas de VAT {#pulling-on-vat-tax-rates}

Una de las herramientas que añade nuestra integración es la capacidad de cargar las tasas impositivas de los estados miembros de la UE. Esto se puede hacer visitando la página del editor de tasas impositivas después de habilitar el soporte para VAT de la UE.

En la parte inferior de la página, verás las opciones de importación de VAT. Seleccionar un tipo de tasa y hacer clic en el botón **Update EU VAT Rates** importará y rellenará automáticamente la tabla con las tasas impositivas de cada estado miembro de la UE. Luego, solo necesitas guardarlo.

![Botón Update EU VAT Rates en la parte inferior del editor de tasas impositivas](/img/config/tax-rates-vat-pull.png)

También puedes editar los valores después de importarlos. Para hacerlo, simplemente edita la línea de la tabla que necesites y haz clic para guardar los nuevos valores.

### Validación de VAT {#vat-validation}

Cuando el soporte para VAT está habilitado, Ultimate Multisite añadirá un campo adicional al formulario de pago, debajo del campo de dirección de facturación. El campo solo aparecerá para clientes ubicados en la UE.

<!-- Captura de pantalla no disponible: campo VAT Number en el formulario de pago del frontend debajo de la dirección de facturación -->

Ultimate Multisite validará entonces el número de IVA y, si resulta ser válido, se aplica el mecanismo de inversión del sujeto pasivo y la tasa impositiva se establece en 0 % en ese pedido.
