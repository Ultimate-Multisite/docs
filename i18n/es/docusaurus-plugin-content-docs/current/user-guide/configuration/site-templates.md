---
title: Plantillas de sitio
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Plantillas de sitio (v2)

_**NOTA: Este artículo se refiere a Ultimate Multisite versión 2.x. Si estás usando la versión 1.x,**_ **consulta este artículo** _**.**_

Nuestro objetivo al crear una red premium con Ultimate Multisite es automatizar tantos procesos como sea posible, a la vez que damos a nuestros clientes flexibilidad y diferentes opciones para elegir al crear sus sitios web. Una forma sencilla de lograr este equilibrio es usar la función Plantillas de sitio de Ultimate Multisite.

## ¿Qué es una plantilla de sitio? {#what-is-a-site-template}

Como su nombre indica, una plantilla de sitio es un sitio base que se puede usar como punto de partida al crear nuevos sitios en tu red.

Esto significa que puedes crear un sitio base, activar diferentes plugins, establecer un theme activo y personalizarlo de la forma que quieras. Luego, cuando tu cliente cree una nueva Account, en lugar de obtener un sitio WordPress predeterminado sin contenido significativo dentro, obtendrá una copia de tu sitio base con todas las personalizaciones y contenidos ya configurados.

Eso suena genial, pero ¿cómo creo una nueva plantilla de sitio? Es tan simple como puede ser.

## Crear y editar una nueva plantilla de sitio {#creating-and-editing-a-new-site-template}

Las plantillas de sitio son simplemente sitios normales en tu red. Para crear una nueva plantilla, simplemente puedes ir a **Administrador de red > Ultimate Multisite > Sitios > Añadir sitio.**

**![Botón Añadir sitio en la página de lista de sitios](/img/config/site-templates-list.png)**

Esto abrirá una ventana modal donde te pedirá el **título del sitio, dominio/ruta del sitio,** y **tipo de sitio**. En el campo desplegable **Tipo de sitio**, asegúrate de seleccionar **Plantilla de sitio** *.*

_![Modal de añadir plantilla de sitio con desplegable de tipo de sitio](/img/config/site-templates-list.png)_

También puedes añadir una descripción orientada al cliente para explicar qué incluye la plantilla:

![Campo de descripción de plantilla de sitio en la pantalla de edición de plantilla de sitio](/img/config/site-template-edit-description.png)

En la parte inferior del formulario, verás un interruptor de alternancia **Copiar sitio**. Esto te permitirá crear una nueva plantilla de sitio basada en una plantilla de sitio existente como punto de partida para ayudarte a ahorrar tiempo en lugar de crear una plantilla de sitio desde cero.

![Modal de añadir plantilla de sitio con interruptor de copiar sitio](/img/config/site-templates-list.png)

### Personalizar el contenido de una plantilla de sitio {#customizing-the-contents-of-a-site-template}

Para personalizar tu plantilla de sitio, simplemente navega a su panel de Dashboard y realiza los cambios que necesites. Puedes crear nuevas entradas, páginas, activar plugins y cambiar el theme activo. Incluso puedes ir al Personalizador y cambiar todo tipo de opciones de personalización.

![Interfaz de edición de plantilla de sitio](/img/config/site-template-edit.png)

Todos esos datos se copiarán cuando un cliente cree un nuevo sitio basado en esa plantilla de sitio.

### Opciones avanzadas {#advanced-options}

Si sabes manejar algo de código personalizado, puedes usar nuestra API de búsqueda y reemplazo para sustituir automáticamente información en el nuevo sitio después de su creación. Esto es útil para cosas como reemplazar nombres de empresa en una página Acerca de, reemplazar el correo electrónico de contacto en la página de Contacto, etc.

### Usar plantillas de sitio {#using-site-templates}

Bien, entonces creaste un montón de plantillas de sitio diferentes con distintos diseños, themes y ajustes. ¿Cómo las haces útiles en tu red ahora?

Básicamente, hay dos enfoques que puedes usar ahora (no simultáneamente):

  * Adjuntar una plantilla de sitio a cada uno de tus planes

**O**

  * Permitir que tus clientes elijan las plantillas de sitio ellos mismos durante el registro.

#### Modo 1: Asignar plantilla de sitio {#mode-1-assign-site-template}

En este modo, tus clientes no podrán elegir una plantilla cuando creen una Account, sino que tú definirás qué plantilla debe usarse en cada uno de tus planes.

Para hacerlo, tendrás que ir a **Ultimate Multisite > Productos > Editar**.

![Editar producto para asignar plantilla de sitio](/img/config/product-site-templates.png)

Esto te llevará a la página **Editar producto**. En la sección **Opciones del producto**, busca la pestaña **Plantilla de sitio** y selecciona la opción **Asignar plantilla de sitio** en el campo desplegable. Esto mostrará la lista de plantillas de sitio disponibles y te permitirá seleccionar solo una plantilla de sitio dedicada al producto.

![Pestaña de plantilla de sitio del producto con opción de asignar plantilla de sitio](/img/config/product-site-templates.png)

#### Modo 2: Elegir plantilla de sitio disponible {#mode-2-choose-available-site-template}

En este modo, darás a tus clientes una opción durante el proceso de registro. Podrán seleccionar entre diferentes plantillas de sitio que definas en los ajustes del producto. Tienes una opción para limitar la plantilla de sitio entre las que pueden elegir dentro del producto seleccionado. Esto te permitirá tener diferentes conjuntos de plantillas de sitio en cada producto, lo cual es ideal para destacar diferentes funciones y características en un producto de precio más alto.

En la página **Editar producto**. En la sección **Opciones del producto**, busca la pestaña **Plantilla de sitio** y selecciona la opción **Elegir plantilla de sitio disponible** en el campo desplegable. Esto mostrará la lista de plantillas de sitio disponibles y te permitirá seleccionar la plantilla de sitio que deseas que esté disponible. Puedes hacerlo eligiendo su comportamiento: **Disponible** si quieres que la plantilla de sitio se incluya en la lista. _**No disponible**_ si quieres que la plantilla de sitio no se muestre como opción. Y **Preseleccionada** si deseas que una de las plantillas de sitio listadas sea la seleccionada por defecto.

![Elegir plantillas de sitio disponibles con opciones de comportamiento](/img/config/product-site-templates.png)

### Modo predeterminado: selección de plantilla de sitio en el formulario de pago {#default-mode-site-template-selection-on-the-checkout-form}

Si deseas que todas tus plantillas de sitio estén disponibles durante el registro, o quizá prefieres no hacer el trabajo adicional de asignar o especificar plantillas de sitio en cada producto que crees. Entonces simplemente puedes establecer la selección de plantilla de sitio en tu **formulario de pago**. Para hacer esto, ve a **Ultimate Multisite > Formularios de pago** y haz clic en **Editar** bajo el formulario que deseas configurar.

Esto mostrará la página **Editar formulario de pago**. Busca el campo **Selección de plantilla** y haz clic en **Editar** bajo él.

Aparecerá una ventana modal. En el campo **Sitios de plantilla** puedes seleccionar y enumerar todas las plantillas de sitio que deseas que estén disponibles durante el registro. Las plantillas de sitio que especifiques desde aquí estarán disponibles independientemente del producto que haya seleccionado el usuario.

![Campo de selección de plantilla en el editor del formulario de checkout](/img/config/checkout-form-template-step.png)

En la parte pública, los clientes ven el selector de plantillas durante el checkout y pueden elegir el diseño inicial para su nuevo sitio.

![Selector de plantillas en la parte pública durante el registro](/img/config/frontend-template-chooser.png)

### Opciones de plantillas de sitio {#site-template-options}

Hay otras funciones de plantillas de sitio disponibles que puedes activar o desactivar en los ajustes de Ultimate Multisite.

![Opciones de plantillas de sitio en los ajustes de Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permitir el cambio de plantilla {#allow-template-switching}

Activar esta opción permitirá a tus clientes cambiar la plantilla que eligen durante el proceso de registro después de que se hayan creado la cuenta y el sitio. Esto es útil desde el punto de vista del cliente, ya que les permite volver a seleccionar una plantilla si más adelante descubren que su elección original no era la mejor para sus necesidades particulares.

#### Permitir que los usuarios usen su sitio como plantillas {#allow-users-to-use-their-site-as-templates}

Como los usuarios de subsitios dedicaron tiempo a construir y diseñar su propio sitio, quizá quieran clonarlo y usarlo como una de las plantillas de sitio disponibles al crear otro subsitio en tu red. Esta opción les permitirá lograrlo.

#### Copiar medios al duplicar la plantilla {#copy-media-on-template-duplication}

Marcar esta opción copiará los medios subidos en el sitio de plantilla al sitio recién creado. Esto se puede sobrescribir en cada uno de los planes.

#### **Evitar que los motores de búsqueda indexen las plantillas de sitio** {#prevent-search-engines-from-indexing-site-templates}

Las plantillas de sitio, como se comenta en este artículo, son una base inicial, pero siguen formando parte de tu red, lo que significa que aún están disponibles para que los motores de búsqueda las encuentren. Esta opción te permitirá ocultar las plantillas de sitio para que los motores de búsqueda puedan indexarlas.

## Rellenar previamente plantillas de sitio con búsqueda y reemplazo automáticos {#pre-populating-site-templates-with-auto-search-and-replace}

Una de las funciones más potentes de Ultimate Multisite es la capacidad de añadir texto arbitrario, color y campos de selección al formulario de registro. Una vez que hayamos capturado esos datos, podemos usarlos para rellenar previamente el contenido en ciertas partes de la plantilla de sitio seleccionada. Luego, cuando se publique el nuevo sitio, Ultimate Multisite reemplazará los marcadores de posición con la información real introducida durante el registro.

Por ejemplo, si deseas obtener el nombre de la empresa de tu usuario final durante el registro y colocar automáticamente el nombre de la empresa en la página de inicio. En la página de inicio de tu sitio de plantilla debes añadir los marcadores de posición, como en la imagen siguiente (los marcadores de posición deben añadirse rodeados por dobles llaves - {{placeholder_name}}).

![Página de inicio con texto de marcador de posición entre llaves](/img/config/site-templates-list.png)

Luego, puedes simplemente añadir un campo de registro coincidente en tu formulario de checkout para capturar esos datos. El mismo editor de formularios de checkout usado para la selección de plantillas te permite colocar campos personalizados junto al selector de plantillas:

![Selección de plantillas y campos de registro en el editor del formulario de checkout](/img/config/checkout-form-template-step.png)

Tu cliente podrá entonces rellenar ese campo durante el registro.

![Formulario de checkout en la parte pública con selector de plantillas](/img/config/frontend-template-chooser.png)

Ultimate Multisite reemplazará entonces automáticamente los marcadores de posición con los datos proporcionados por el cliente.

![Marcadores de posición reemplazados con datos del cliente en el sitio](/img/config/site-templates-list.png)

### Resolver el problema de la "plantilla llena de marcadores de posición" {#solving-the-template-full-of-placeholders-problem}

Todo eso está muy bien, pero nos encontramos con un problema desagradable: ahora nuestras plantillas de sitio, que pueden ser visitadas por nuestros clientes, están llenas de marcadores de posición feos que no dicen mucho.

Para resolverlo, ofrecemos la opción de establecer valores falsos para los marcadores de posición, y usamos esos valores para buscar y reemplazar su contenido en los sitios de plantilla mientras tus clientes los visitan.

Puedes acceder al editor de marcadores de posición de plantillas yendo a **Ultimate Multisite > Ajustes > Sitios** y luego, en la barra lateral, haciendo clic en el enlace **Editar marcadores de posición**.

![Ajustes de plantillas de sitio en la página de ajustes de Sitios](/img/config/settings-sites-templates-section.png)

Eso te llevará al editor de contenido de los marcadores de posición, donde puedes añadir marcadores de posición y su contenido respectivo.

![Punto de entrada del editor de contenido de marcadores de posición de plantillas](/img/config/settings-sites-templates-section.png)
