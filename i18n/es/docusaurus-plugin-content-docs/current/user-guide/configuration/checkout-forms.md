---
title: Formularios de pago
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formularios de checkout

Los formularios de checkout son una forma fácil y flexible de experimentar con diferentes enfoques al intentar convertir nuevos clientes.

Ultimate Multisite 2.0 ofrece un editor de formularios de checkout que te permite crear tantos formularios como quieras, con diferentes campos, productos en oferta, etc.

Para acceder a esta función, ve al menú Checkout Forms, en la barra lateral izquierda.

![Lista de formularios de checkout](/img/config/checkout-forms-list.png)

En esta página, puedes ver todos los formularios de checkout que tienes.

La tabla de la lista incluye una columna **Status** para que puedas confirmar si cada formulario está disponible actualmente para los clientes:

| Status | Significado |
|---|---|
| **Active** | El formulario se puede usar en cualquier lugar donde se publique su shortcode o página de registro. |
| **Inactive** | El formulario está guardado pero desactivado. Los clientes no pueden completar el checkout con él hasta que lo habilites de nuevo. |

Usa la columna de estado antes de editar un flujo de registro público, especialmente cuando mantienes formularios de checkout en borrador o de temporada junto a tus formularios activos.

Si quieres crear uno nuevo, simplemente haz clic en Add Checkout Form en la parte superior de la página.

Puedes seleccionar una de estas tres opciones como punto de partida: un solo paso, varios pasos o en blanco. Luego, haz clic para Go to the Editor.

Cuando eliges **un solo paso** o **varios pasos** como punto de partida, la plantilla de formulario ahora incluye un campo **Selección de plantilla** por defecto. Este campo permite que tus clientes elijan una plantilla de sitio durante el proceso de registro. Puedes dejarlo donde está, eliminarlo o reposicionarlo como cualquier otro campo en el editor.

![Editor de formulario de pago](/img/config/checkout-form-editor.png)

Como alternativa, puedes editar o duplicar los formularios que ya tienes haciendo clic en las opciones debajo de su nombre. Allí también encontrarás las opciones para copiar el shortcode del formulario o eliminarlo.

![Acciones al pasar el cursor sobre el formulario de pago](/img/config/checkout-form-hover-actions.png)

#### Descripción general del editor de formularios de pago

El editor de formularios de pago proporciona una interfaz completa para crear tus formularios de registro. Aquí tienes una descripción general del diseño del editor:

![Descripción general del editor de formularios de pago](/img/config/checkout-form-editor-overview.png)

### Editar un formulario de pago

Puedes crear formularios de pago para diferentes propósitos. En este ejemplo trabajaremos en un formulario de registro.

Después de navegar al editor de formularios de pago, dale a tu formulario un nombre (que se usará solo como referencia interna) y un slug (usado para crear shortcodes, por ejemplo).

![Editor de formulario de pago](/img/config/checkout-form-editor.png)

Los formularios están compuestos por pasos y campos. Puedes añadir un nuevo paso haciendo clic en Añadir nuevo paso de pago.

![Añadir nuevo paso de pago](/img/config/checkout-form-add-step.png)

En la primera pestaña de la ventana modal, completa el contenido del paso de tu formulario. Asígnale un ID, un nombre y una descripción. Estos elementos se usan principalmente de forma interna.

![Pestaña de contenido del paso del formulario de checkout](/img/config/checkout-form-step-content.png)

A continuación, establece la visibilidad del paso. Puedes elegir entre "Mostrar siempre", "Mostrar solo para usuarios con sesión iniciada" o "Mostrar solo para invitados".

![Pestaña de visibilidad del paso del formulario de checkout](/img/config/checkout-form-step-visibility.png)

Por último, configura el estilo del paso. Estos son campos opcionales.

![Pestaña de estilo del paso del formulario de checkout](/img/config/checkout-form-step-style.png)

Ahora es momento de añadir campos a nuestro primer paso. Simplemente haz clic en Add New Field y selecciona el tipo de sección que quieras.

![Paso del formulario de checkout con campos](/img/config/checkout-form-step-with-fields.png)

Cada campo tiene diferentes parámetros que deben completarse. Para esta primera entrada, seleccionaremos el campo "Username".

![Desplegable de selección de tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

![Configuración de contenido del campo Username](/img/config/checkout-form-username-content.png)

![Configuración de visibilidad del campo Username](/img/config/checkout-form-username-visibility.png)

![Configuración de estilo del campo Username](/img/config/checkout-form-username-style.png)

Puedes añadir tantos pasos y campos como necesites. Para mostrar tus productos para que tus clientes elijan uno, usa el campo Pricing Table. Si quieres permitir que tus clientes elijan una plantilla, añade el campo Template Selection. Y así sucesivamente.

![Diálogo Add New Field](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, título del sitio, URL del sitio, resumen del pedido, pago y botón de envío son campos obligatorios para crear un formulario de checkout._

Mientras trabajas en tu formulario de checkout, siempre puedes usar el botón Preview para ver cómo tus clientes verán el formulario. También puedes alternar entre verlo como un usuario existente o un visitante

![Botón Preview del formulario de checkout](/img/config/checkout-form-preview-button.png)

![Modal de vista previa del formulario de checkout](/img/config/checkout-form-preview-modal.png)

Finalmente, en Advanced Options puedes configurar el mensaje para la página de "Thank You", añadir snippets para rastrear conversiones, añadir CSS personalizado a tu formulario de checkout o restringirlo a ciertos países.

![Advanced Options](/img/config/checkout-form-advanced.png)

También puedes habilitar o deshabilitar manualmente tu formulario de checkout activando o desactivando esta opción en la columna derecha, o eliminar permanentemente el formulario.

![Interruptor activo](/img/config/checkout-form-active.png)

Para eliminar un formulario, haz clic en la opción de eliminar en las acciones del formulario:

![Opción de eliminar formulario de checkout](/img/config/checkout-form-delete.png)

¡No olvides guardar tu formulario de checkout!

![Botón Save](/img/config/checkout-form-save.png)

Para obtener el shortcode de tu formulario, haz clic en Generate Shortcode y copia el resultado mostrado en la ventana modal.

![Botón Save con shortcode](/img/config/checkout-form-save.png)

### El campo de tabla de precios

El campo **Pricing Table** muestra tus productos en el formulario de checkout para que los clientes puedan elegir un plan. Cuando editas este campo, puedes configurar varias opciones:

![Ajustes del campo Pricing Table](/img/config/pricing-table-field-settings.png)

Así es como aparece la tabla de precios en el formulario de registro del frontend:

![Tabla de precios de checkout en el frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Productos**: Selecciona qué productos mostrar y el orden en que aparecen.
  * **Forzar duraciones diferentes**: Cuando está activado, se muestran todos los productos independientemente de si tienen una variación de precio coincidente para el período de facturación seleccionado actualmente. Cuando está desactivado (predeterminado), los productos sin una variación para el período seleccionado se ocultan.
    ![Opción de forzar duraciones en la tabla de precios](/img/config/pricing-table-force-durations.png)
  * **Ocultar cuando esté preseleccionado**: Oculta la tabla de precios cuando ya se ha seleccionado un plan mediante la URL (p. ej., `/register/premium`).
  * **Plantilla de Pricing Table**: Elige la plantilla visual para la tabla de precios (Lista simple, Legacy, etc.).

Si agregas un producto a la Pricing Table antes de que el formulario incluya los campos necesarios para completar el flujo de checkout de ese producto, el editor ahora muestra una advertencia. Usa la advertencia para agregar el campo obligatorio que falta antes de publicar o guardar cambios en un formulario de registro activo.

### Agregar un selector de selección de período

Si has configurado [Variaciones de precio](creating-your-first-subscription-product#price-variations) en tus productos (p. ej., precios mensuales y anuales), puedes añadir un campo de **Selección de período** a tu formulario de checkout. Este campo muestra un interruptor que permite a los clientes cambiar entre períodos de facturación, y la tabla de precios se actualiza dinámicamente en tiempo real.

#### Paso 1: Configura variaciones de precio en tus productos

Antes de añadir el campo de Selección de período, asegúrate de que tus productos tengan variaciones de precio configuradas. Ve a **Ultimate Multisite > Productos**, edita un producto y navega a la pestaña **Variaciones de precio** para añadir períodos de facturación alternativos (p. ej., anual con un precio con descuento).

![Pestaña Variaciones de precio en un producto](/img/config/product-price-variations-tab.png)

#### Paso 2: Añade el campo de Selección de período a tu formulario de checkout

1. Ve a **Ultimate Multisite > Formularios de checkout** y edita tu formulario de checkout.

2. Desplázate hacia abajo hasta el paso que contiene tu campo **Tabla de precios** y haz clic en **Añadir nuevo campo**.

3. En el diálogo de selección del tipo de campo, haz clic en **Seleccionar período**.

![Diálogo Añadir nuevo campo que muestra Seleccionar período](/img/config/checkout-form-add-field-dialog.png)

4. Configura las opciones de período. Cada opción necesita:
   * **Duración**: El número (p. ej., `1`)
   * **Unidad de duración**: El tipo de período (días, semanas, meses o años)
   * **Etiqueta**: El texto que verán los clientes (p. ej., "Mensual", "Anual")

5. Haz clic en **+ Add Option** para añadir más opciones de período. Estas opciones deben coincidir con las variaciones de precio que configuraste en tus productos.

![Configuración del campo de selección de período](/img/config/period-selection-field-settings.png)

6. Elige un **Period Selector Template** (Clean es el predeterminado, que muestra un selector sencillo con estilo, listo para CSS personalizado).

7. Haz clic en **Save Field**.

#### Paso 3: Posicionar el campo encima de la tabla de precios

Para una mejor experiencia de usuario, asegúrate de que el campo de selección de período aparezca **antes** del campo de tabla de precios en tu paso de checkout. Puedes arrastrar los campos para reordenarlos en el editor del formulario de checkout. De esta manera, los clientes primero eligen un período de facturación y luego ven los precios para ese período.

![Editor del formulario de checkout que muestra el orden de los campos](/img/config/checkout-form-editor-with-fields.png)

#### Cómo funciona en el frontend

Una vez configurado, los clientes que visiten tu página de registro verán el selector de período encima de la tabla de precios. Cuando hagan clic en un período de facturación diferente:

  * La tabla de precios se actualiza al instante para mostrar los precios del período seleccionado (sin necesidad de recargar la página).
  * Si **Force Different Durations** está desactivado en el campo de tabla de precios, los productos sin una variación de precio para el período seleccionado se ocultarán.
  * Si **Force Different Durations** está activado, todos los productos permanecerán visibles incluso si no tienen una variación para el período seleccionado (mostrarán su precio predeterminado).

#### Preseleccionar un período de facturación mediante URL

También puedes preseleccionar un producto y un período de facturación mediante la URL. Ultimate Multisite admite estos patrones de URL:

  * `/register/premium` — Preselecciona solo el producto "Premium"
  * `/register/premium/12` — Preselecciona el producto y una duración de 12 meses
  * `/register/premium/1/year` — Preselecciona el producto con una duración de 1 año

### El campo de selección de plantilla

El campo **Selección de plantilla** permite a los clientes elegir una plantilla de sitio durante el checkout. Ahora se incluye de forma predeterminada en las plantillas de formulario de checkout de **un solo paso** y **varios pasos** añadidas en Ultimate Multisite v2.6.1.

#### Añadir el campo manualmente

Si estás trabajando con un formulario creado antes de v2.6.1, o que comenzó desde una plantilla en blanco:

1. Ve a **Ultimate Multisite > Formularios de checkout** y edita tu formulario de checkout.
2. En el paso donde se recopilan los detalles del sitio, haz clic en **Añadir nuevo campo**.
3. Selecciona **Selección de plantilla** en el cuadro de diálogo de tipo de campo.
4. Configura el campo:
   - **Etiqueta** — El encabezado que los clientes ven encima de la cuadrícula de plantillas (p. ej., "Elige una plantilla de sitio").
   - **Obligatorio** — Si los clientes deben seleccionar una plantilla antes de continuar.

#### Cómo funciona

Cuando un cliente elige una plantilla durante el checkout, Ultimate Multisite la usa al aprovisionar su nuevo sitio. Las plantillas que se muestran provienen de tu lista de **Plantillas de sitio** (**Ultimate Multisite > Plantillas de sitio**). Solo aparecen aquí las plantillas marcadas como disponibles para clientes.

### Dominios base del formulario de checkout

Ultimate Multisite v2.13.0 trata los dominios configurados en los campos **Site URL** del formulario de checkout como dominios base de la red. Usa la configuración de dominios disponibles del campo cuando quieras que los clientes creen sitios bajo uno o más dominios de registro compartidos, como `example.com` y `sites.example.com`.

Los dominios base compartidos del formulario de checkout no se tratan como asignaciones de dominio personalizadas por sitio. Cuando un cliente crea un sitio de subdirectorio en una de esas bases, Ultimate Multisite no crea un registro de dominio asignado que haría que el host compartido perteneciera solo a ese sitio. El host compartido sigue disponible para sitios hermanos que usan la misma base del formulario de checkout.

Mantén los dominios personalizados para hosts asignados por cliente, como `customer-example.com`. Mantén los dominios base del formulario de checkout para hosts de registro compartidos que muchos sitios pueden usar.

#### Eliminar el campo

Si no ofreces plantillas de sitio, elimina el campo Selección de plantilla de tu formulario. Los clientes recibirán entonces la plantilla predeterminada que esté configurada en **Ultimate Multisite > Settings > Site Templates**.
