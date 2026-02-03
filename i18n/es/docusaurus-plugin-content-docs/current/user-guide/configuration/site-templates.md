---
title: Plantillas del sitio
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Plantillas de Sitio (v2)

_**NOTA: Este artículo se refiere a Ultimate Multisite versión 2.x. Si está usando la versión 1.x,**_ **ver este artículo** _**.**_

Nuestro objetivo al crear una red premium con Ultimate Multisite es automatizar tantos procesos como sea posible mientras damos a nuestros clientes flexibilidad y diferentes opciones para elegir al crear sus sitios web. Una forma sencilla de lograr este equilibrio es aprovechar la función Plantillas de Sitio de Ultimate Multisite.

## ¿Qué es una Plantilla de Sitio?

Como su nombre indica, una Plantilla de Sitio es un sitio base que se puede usar como base al crear nuevos sitios en su red.

Esto significa que puede crear un sitio base, activar diferentes plugins, establecer un tema activo y personalizarlo de la manera que desee. Luego, cuando su cliente crea una nueva cuenta, en lugar de obtener un sitio WordPress predeterminado sin contenido significativo, obtendrá una copia de su sitio base con todas las personalizaciones y contenidos ya en su lugar.

Suena genial, pero ¿cómo crear una nueva plantilla de sitio? Es tan simple como puede ser.

## Creando y Editando una nueva Plantilla de Sitio

Las Plantillas de Sitio son simplemente sitios normales en su red. Para crear una nueva plantilla, simplemente vaya a **Network Admin > Ultimate Multisite > Sites > Add Site.**

![añadir plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)

Esto abrirá una ventana modal donde le pedirá el **Site title, Site Domain/path,** y **Site type**. En el campo desplegable **Site Type** asegúrese de seleccionar **Site Template** *.*

![Modal de añadir plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)

En la parte inferior del formulario, notará un interruptor **Copy Site**. Esto le permitirá crear una nueva plantilla de sitio basada en una plantilla de sitio existente como punto de partida para ayudarle a ahorrar tiempo en lugar de crear una plantilla de sitio desde cero.

![Modal de añadir plantilla de sitio 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Personalizando el contenido de una Plantilla de Sitio

Para personalizar su plantilla de sitio, simplemente navegue al panel de su tablero y realice los cambios que necesite. Puede crear nuevas publicaciones, páginas, activar plugins y cambiar el tema activo. Incluso puede ir al Personalizador y cambiar todo tipo de opciones de personalización.

Todos esos datos se copiarán cuando un cliente cree un nuevo sitio basado en esa Plantilla de Sitio.

### Opciones Avanzadas

Si conoce el manejo de algún código personalizado, puede aprovechar nuestra API de Búsqueda y Reemplazo para reemplazar automáticamente la información en el nuevo sitio después de su creación. Esto es útil para cosas como reemplazar nombres de empresas en una página Acerca de, reemplazar el correo electrónico de contacto en la página Contacto, etc.

### Usando Plantillas de Sitio

Bien, así que creó un montón de Plantillas de Sitio diferentes con distintos diseños, temas y configuraciones. ¿Cómo las hace útiles en su red ahora?

Básicamente, hay dos enfoques que puede usar ahora (no simultáneamente):

  * Adjuntar una Plantilla de Sitio a cada uno de sus Planes

**O**

  * Permitir que sus clientes elijan las plantillas de sitio por sí mismos durante el registro.

#### Modo 1: Asignar Plantilla de Sitio

En este modo, sus clientes no podrán elegir una plantilla al crear una cuenta, sino que usted definirá qué plantilla debe usarse en cada uno de sus Planes.

Para hacer eso, deberá ir a **Ultimate Multisite > Products > Edit**.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

Esto lo llevará a la página **Edit Produc** t. En la sección **Product Options**, busque la pestaña **Site template** y seleccione la opción **Assign Site** **Template** del campo desplegable. Esto mostrará la lista de plantillas de sitio disponibles y le permitirá seleccionar solo una plantilla de sitio dedicada al producto.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Modo 2: Elegir Plantilla de Sitio Disponible

En este modo, dará a sus clientes una opción durante el proceso de registro. Podrán seleccionar entre diferentes plantillas de sitio que defina bajo la configuración del producto. Tiene la opción de limitar la plantilla de sitio que pueden elegir bajo el producto seleccionado. Esto le permitirá tener diferentes conjuntos de plantillas de sitio bajo cada producto, lo cual es ideal para resaltar diferentes funciones y características de un producto de mayor precio.

En la página **Edit Product**. En la sección **Product Options**, busque la pestaña **Site template** y seleccione la opción **Choose Available Site Template** del campo desplegable. Esto mostrará la lista de plantillas de sitio disponibles y le permitirá seleccionar la plantilla de sitio que desee que esté disponible. Puede hacer esto eligiendo su comportamiento: **Available** si desea que la plantilla de sitio esté incluida en la lista. _**Not Available**_ si desea que la plantilla de sitio no se muestre como opción. Y **Pre-selected** si desea que una de las plantillas de sitio listadas sea la seleccionada por defecto.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Modo Predeterminado: Selección de Plantilla de Sitio en el formulario de pago

Si desea que todas sus plantillas de sitio estén disponibles durante el registro, o quizá no prefiera hacer el trabajo adicional de asignar o especificar plantillas de sitio bajo cada producto que crea, entonces puede simplemente configurar la selección de plantilla de sitio bajo su **Checkout Form**. Para hacer esto, simplemente vaya a **Ultimate Multisite > Checkout Forms**. Luego haga clic en **Edit** bajo el formulario que desee configurar.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

Esto mostrará la página **Edit Checkout Form**. Busque el campo **Template Selection** y haga clic en **Edit** debajo de él.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

Aparecerá una ventana modal. En el campo **Template Sites** puede seleccionar y enumerar todas las plantillas de sitio que desee que estén disponibles durante el registro. Las plantillas de sitio que especifique desde aquí estarán disponibles independientemente del producto que el usuario haya seleccionado.

![Asignar plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Opciones de Plantilla de Sitio

Hay otras funciones de plantillas de sitio disponibles que puede activar o desactivar en la configuración de Ultimate Multisite.

![Opción de plantilla de sitio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Permitir Cambio de Plantilla

Habilitar esta opción permitirá a sus clientes cambiar la plantilla que elijan durante el proceso de registro después de que la cuenta y el sitio se hayan creado. Esto es útil desde el punto de vista del cliente, ya que le permite volver a seleccionar una plantilla si más tarde descubre que su elección original no era la mejor para sus necesidades particulares.

#### Permitir a los usuarios usar su sitio como plantillas

Dado que los usuarios de subsitios pasan tiempo construyendo y diseñando su propio sitio, pueden querer clonarlo y usarlo como una de las plantillas de sitio disponibles al crear otro subsitio en su red. Esta opción les permitirá lograrlo.

#### Copiar Medios en la Duplicación de Plantilla

Al marcar esta opción, se copiará el contenido multimedia subido en la plantilla de sitio al sitio recién creado. Esto se puede anular en cada uno de los planes.

#### **Prevenir que los Motores de Búsqueda indexen Plantillas de Sitio**

Las plantillas de sitio, tal como se discute en este artículo, son plantillas base pero siguen siendo parte de su red, lo que significa que todavía están disponibles para que los motores de búsqueda las encuentren. Esta opción le permitirá ocultar las plantillas de sitio para que los motores de búsqueda las indexen.

## Pre-llenado de Plantillas de Sitio con búsqueda y reemplazo automático

Una de las características más poderosas de Ultimate Multisite es la capacidad de agregar texto arbitrario, color y campos de selección al formulario de registro. Una vez que tenemos esos datos capturados, podemos usarlos para pre-llenar el contenido en ciertas partes de la plantilla de sitio seleccionada. Luego, cuando el nuevo sitio se publica, Ultimate Multisite reemplazará los marcadores de posición con la información real ingresada durante el registro.

Por ejemplo, si desea obtener el nombre de la empresa de su usuario final durante el registro y colocar automáticamente el nombre de la empresa en la página de inicio. En la página de inicio de su plantilla de sitio debe agregar los marcadores de posición, como en la imagen de abajo (los marcadores de posición deben agregarse rodeados por llaves dobles - {{placeholder_name}}).

![marcador de posición de la página de inicio](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

Luego, simplemente puede agregar un campo de registro coincidente en su formulario de pago para capturar esos datos:

![formulario de pago](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

Su cliente podrá llenar ese campo durante el registro.

![campo de registro](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

Ultimate Multisite reemplazará automáticamente los marcadores de posición con los datos proporcionados por el cliente.

![reemplazar marcador de posición](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Solucionando el problema de "plantilla llena de marcadores de posición"

Todo eso es genial, pero nos encontramos con un problema feo: ahora nuestras plantillas de sitio - que pueden ser visitadas por nuestros clientes - están llenas de marcadores de posición feos que no dicen mucho.

Para resolver eso, ofrecemos la opción de establecer valores falsos para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en las plantillas de sitio mientras sus clientes están visitando.

Puede acceder al editor de marcadores de posición de la plantilla yendo a **Ultimate Multisite > Settings > Sites**, y luego, en la barra lateral, haciendo clic en el enlace **Edit Placeholders**.

![configuración de marcadores de posición](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

Eso lo llevará al editor de contenido de los marcadores de posición, donde puede agregar marcadores de posición y su contenido respectivo.

![marcadores de posición de la plantilla](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)
