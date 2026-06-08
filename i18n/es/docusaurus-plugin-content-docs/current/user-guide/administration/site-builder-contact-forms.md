---
title: Formularios de contacto del constructor de sitios
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formularios de contacto con el Constructor de Sitios

Superdav AI Agent v1.10.0 añade la capacidad de crear formularios de contacto directamente desde la interfaz de chat utilizando el agente Site Builder. Esto te permite añadir formularios de contacto totalmente funcionales a cualquier página sin salir del chat.

## Descripción general

La capacidad de formularios de contacto del Constructor de Sitios (`create_contact_form`) detecta automáticamente el plugin de formularios que tienes instalado y crea un formulario de contacto utilizando las capacidades nativas de ese plugin. Los plugins de formularios compatibles incluyen:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

El asistente selecciona automáticamente el mejor plugin de formularios disponible en tu sitio y genera un formulario de contacto adaptado a ese plugin.

## Creación de un formulario de contacto

Para crear un formulario de contacto usando el Constructor de Sitios:

1. Abre el panel de chat de **Gratis AI Agent** en el administrador de WordPress.
2. Cambia al agente **Site Builder** haciendo clic en el icono del agente en el encabezado del chat.
3. Describe el formulario de contacto que deseas crear. Por ejemplo:

   > "Añade un formulario de contacto a la página de Contacto con campos para nombre, correo electrónico, mensaje y número de teléfono."

   O simplemente:

   > "Crea un formulario de contacto para la página de Contacto."

4. El Constructor de Sitios generará el formulario de contacto y devolverá un shortcode listo para incrustar.

## Uso del shortcode generado

Después de que el Constructor de Sitios crea el formulario de contacto, devuelve un shortcode (por ejemplo, `[contact-form-7 id="123"]`). Puedes:

1. **Incrustarlo en una página o entrada** — Copia el shortcode y pégalo en cualquier página o entrada usando el editor de bloques o el editor clásico.
2. **Añadirlo mediante el Constructor de Sitios** — Pídele al Constructor de Sitios que añada el formulario a una página específica automáticamente:

   > "Añade el formulario de contacto a la página de Contacto."

3. **Usarlo en una plantilla** — Si te sientes cómodo con PHP, puedes añadir el shortcode a un archivo de plantilla del tema.

## Personalización del formulario de contacto

Después de que el Constructor de Sitios crea el formulario de contacto, puedes personalizarlo aún más:

### A través de la interfaz de chat

Pídele al Constructor de Sitios que modifique el formulario:

> "Actualiza el formulario de contacto para añadir un campo de asunto y hacer obligatorio el campo de mensaje."

El Constructor de Sitios actualizará el formulario y devolverá el shortcode actualizado.

### A través del panel de administración del plugin de formularios

También puedes personalizar el formulario directamente en la configuración de tu plugin de formularios:

1. Ve a **Contact Form 7** (o tu plugin de formularios instalado) en el panel de administración de WordPress.
2. Encuentra el formulario creado por el Constructor de Sitios.
3. Edita los campos del formulario, las reglas de validación y las notificaciones por correo electrónico según sea necesario.

## Plugins de formularios y compatibilidad

El Constructor de Sitios detecta automáticamente qué plugin de formularios está instalado en tu sitio y lo utiliza para crear el formulario de contacto. Si hay varios plugins de formularios instalados, el Constructor de Sitios los prioriza en este orden:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Si no se ha instalado ninguno de estos plugins, el Constructor de Sitios recomendará instalar uno antes de crear el formulario de contacto.

## Notificaciones por correo electrónico

Los formularios de contacto creados por el Constructor de Sitios están configurados para enviar notificaciones por correo electrónico al administrador del sitio por defecto. Puedes personalizar la dirección de correo electrónico del destinatario y el mensaje de notificación:

1. Ve al panel de administración de tu plugin de formularios.
2. Encuentra el formulario creado por el Constructor de Sitios.
3. Edita la configuración de las notificaciones por correo electrónico.

Para obtener instrucciones detalladas, consulta la documentación de tu plugin de formularios:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Casos de uso de ejemplo

### Formulario de contacto simple

> "Crea un formulario de contacto simple con campos para nombre, correo electrónico y mensaje."

### Formulario de varios pasos

> "Crea un formulario de contacto con un primer paso para la información de contacto y un segundo paso para el mensaje y el método de contacto preferido."

### Formulario con lógica condicional

> "Crea un formulario de contacto que muestre diferentes campos según la selección del usuario en un menú desplegable."

### Formulario con carga de archivos

> "Crea un formulario de contacto que permita a los usuarios subir un archivo o adjunto."

:::note
La creación de formularios de contacto está disponible en Superdav AI Agent v1.10.0 y versiones posteriores. El agente Site Builder debe estar activo para usar esta capacidad.
:::
