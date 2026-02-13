---
title: Formularios de Pago
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Formularios de Pago

Los Formularios de Pago son una forma sencilla y flexible de experimentar con diferentes enfoques al intentar convertir nuevos clientes.

Ultimate Multisite 2.0 ofrece un editor de Formularios de Pago que te permite crear tantos formularios como desees, con diferentes campos, productos en oferta, etc.

Para acceder a esta función, ve al menú Formularios de Pago, en la barra lateral izquierda.

![Lista de Formularios de Pago](/img/config/checkout-forms-list.png)

En esta página, puedes ver todos los formularios de pago que tienes.

Si deseas crear uno nuevo, simplemente haz clic en Añadir Formulario de Pago en la parte superior de la página.

Puedes seleccionar una de estas tres opciones como punto de partida: paso único, multi-paso o en blanco. Luego, haz clic en Ir al Editor.

![Editor de Formulario de Pago](/img/config/checkout-form-editor.png)

Alternativamente, puedes editar o duplicar los formularios que ya tienes haciendo clic en las opciones debajo de su nombre. Allí también encontrarás las opciones para copiar el shortcode del formulario o eliminar el formulario.

![Acciones al pasar el cursor sobre el formulario de pago](/img/config/checkout-form-hover-actions.png)

### Edición de un Formulario de Pago

Puedes crear formularios de pago para diferentes propósitos. En este ejemplo trabajaremos en un formulario de registro.

Después de navegar al editor de formularios de pago, asigna a tu formulario un nombre (que se usará solo como referencia interna) y un slug (utilizado para crear shortcodes, por ejemplo).

![Editor de Formulario de Pago](/img/config/checkout-form-editor.png)

Los formularios están compuestos por pasos y campos. Puedes agregar un nuevo paso haciendo clic en Añadir Nuevo Paso de Pago.

![Añadir Nuevo Paso de Pago](/img/config/checkout-form-add-step.png)

En la primera pestaña de la ventana modal, completa el contenido del paso de tu formulario. Asigna un ID, un nombre y una descripción. Estos elementos se usan principalmente de forma interna.

![Paso del formulario de pago](/img/config/checkout-form-step.png)

A continuación, establece la visibilidad del paso. Puedes elegir entre "Mostrar siempre", "Mostrar solo a usuarios conectados" o "Mostrar solo a invitados".

![Paso del formulario de pago](/img/config/checkout-form-step.png)

Finalmente, configura el estilo del paso. Estos son campos opcionales.

![Paso del formulario de pago](/img/config/checkout-form-step.png)

Ahora es el momento de agregar campos a nuestro primer paso. Simplemente haz clic en Añadir Nuevo Campo y selecciona el tipo de sección que deseas.

![Paso del formulario de pago con campos](/img/config/checkout-form-step.png)

Cada campo tiene diferentes parámetros que rellenar. Para esta primera entrada, seleccionaremos el campo 'Nombre de usuario'.

![Paso del formulario de pago](/img/config/checkout-form-step.png)

![Paso del formulario de pago](/img/config/checkout-form-step.png)

![Paso del formulario de pago](/img/config/checkout-form-step.png)

Puedes agregar tantos pasos y campos como necesites. Para mostrar tus productos para que tus clientes elijan uno, utiliza el campo Tabla de Precios. Si deseas que tus clientes elijan una plantilla, agrega el campo Selección de Plantilla. Y así sucesivamente.

_**Nota:** nombre de usuario, correo electrónico, contraseña, título del sitio, URL del sitio, resumen del pedido, pago y botón de enviar son campos obligatorios para crear un formulario de pago._

Mientras trabajas en tu formulario de pago, siempre puedes usar el botón Vista previa para ver cómo lo verán tus clientes. También puedes alternar entre la vista como usuario existente o como visitante

![Guardar Formulario de Pago](/img/config/checkout-form-save.png)

![Editor de Formulario de Pago](/img/config/checkout-form-editor.png)

Finalmente, en Opciones Avanzadas puedes configurar el mensaje para la página 'Gracias', agregar fragmentos para rastrear conversiones, añadir CSS personalizado a tu formulario de pago o restringirlo a ciertos países.

![Opciones Avanzadas](/img/config/checkout-form-advanced.png)

También puedes habilitar o deshabilitar manualmente tu formulario de pago alternando esta opción en la columna derecha, o eliminar permanentemente el formulario.

![Alternar activo](/img/config/checkout-form-active.png)

¡No olvides guardar tu formulario de pago!

![Botón Guardar](/img/config/checkout-form-save.png)

Para obtener el shortcode de tu formulario haz clic en Generar Shortcode y copia el resultado que aparece en la ventana modal.

![Botón Guardar con shortcode](/img/config/checkout-form-save.png)
