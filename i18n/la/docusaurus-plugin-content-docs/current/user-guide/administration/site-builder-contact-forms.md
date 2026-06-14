---
title: Formulari de contacti ad constructorem sititii
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulario de Contacto del Constructor de Sitios

Superdav AI Agent v1.10.0 añade la capacidad de crear formularios de contacto directamente desde la interfaz de chat usando el agente Site Builder. Esto te permite añadir formularios de contacto totalmente funcionales a cualquier página sin salir del chat.

## Resumen

La capacidad de formulario de contacto del Site Builder (`create_contact_form`) detecta automáticamente tu plugin de formulario instalado y crea un formulario de contacto utilizando las capacidades nativas de ese plugin. Los plugins de formulario compatibles incluyen:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

El asistente selecciona automáticamente el mejor plugin de formulario disponible en tu sitio y genera un formulario de contacto adaptado a ese plugin.

## Creación de un Formulario de Contacto

Para crear un formulario de contacto usando el Site Builder:

1. Abre el panel de chat del **Gratis AI Agent** en la administración de WordPress.
2. Cambia al agente **Site Builder** haciendo clic en el icono del agente en el encabezado del chat.
3. Describe el formulario de contacto que deseas crear. Por ejemplo:

   > "Añade un formulario de contacto a la página de Contacto con campos para nombre, correo electrónico, mensaje y número de teléfono."

   O simplemente:

   > "Crea un formulario de contacto para la página de Contacto."

4. El Site Builder generará el formulario de contacto y devolverá un shortcode listo para incrustar.

## Uso del Shortcode Generado

Después de que el Site Builder crea el formulario de contacto, devuelve un shortcode (por ejemplo, `[contact-form-7 id="123"]`). Puedes:

1. **Incrustarlo en una página o publicación** — Copia el shortcode y pégalo en cualquier página o publicación usando el block editor o el editor clásico.
2. **Añadirlo a través del Site Builder** — Pídele al Site Builder que añada el formulario automáticamente a una página específica:

   > "Añade el formulario de contacto a la página de Contacto."

3. **Usare in un template** — Se ti senti a tuo agio con PHP, puoi aggiungere lo shortcode al file del template del tema.

## Personalizzare il modulo di contatto

Dopo che il Site Builder crea il modulo di contatto, puoi personalizzarlo ulteriormente:

### Tramite l'Interfaccia Chat

Chiedi al Site Builder di modificare il modulo:

> "Aggiorna il modulo di contatto per aggiungere un campo oggetto e rendere obbligatoro il campo messaggio."

Il Site Builder aggiornerà il modulo e restituirà lo shortcode aggiornato.

### Tramite l'Interfaccia Admin del Plugin del Modulo

Puoi anche personalizzare direttamente il modulo nelle impostazioni del tuo plugin del modulo:

1. Vai a **Contact Form 7** (o al tuo plugin del modulo installato) nell'admin di WordPress.
2. Trova il modulo creato dal Site Builder.
3. Modifica i campi del modulo, le regole di validazione e le notifiche email come necessario.

## Plugin dei Moduli e Compatibilità

Il Site Builder rileva automaticamente quale plugin del modulo è installato sul tuo sito e lo utilizza per creare il modulo di contatto. Se sono installati più plugin del modulo, il Site Builder li dà la priorità in questo ordine:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Se nessuno di questi plugin è installato, il Site Builder ti consiglierà di installarne uno prima di creare il modulo di contatto.

## Notifiche Email

I moduli di contatto creati dal Site Builder sono configurati per inviare notifiche email all'amministratore del sito di default. Puoi personalizzare l'indirizzo email del destinatario e il messaggio della notifica:

1. Vai all'interfaccia admin del tuo plugin del modulo.
2. Trova il modulo creato dal Site Builder.
3. Modifica le impostazioni delle notifiche email.

Per istruzioni dettagliate, consulta la documentazione del tuo plugin del modulo:

- [Notificatio Email Form 7](https://contactform7.com/docs/)
- [Notificatio Email WPForms](https://wpforms.com/docs/)
- [Notificatio Email Fluent Forms](https://fluentforms.com/docs/)
- [Notificatio Email Gravity Forms](https://docs.gravityforms.com/)

## Exempla Usus

### Formulario de Contacto Simple

> "Crea un formulario de contacto simple con campos para nombre, correo electrónico y mensaje."

### Formulario de Múltiples Pasos

> "Crea un formulario de contacto con un primer paso para la información de contacto y un segundo paso para el mensaje y el método de contacto preferido."

### Formulario con Lógica Condicional

> "Crea un formulario de contacto que muestre campos diferentes según la selección del usuario en un menú desplegable."

### Formulario con Carga de Archivos

> "Crea un formulario de contacto que permita a los usuarios subir un archivo o adjunto."

:::note
La creación de formularios de contacto está disponible en Superdav AI Agent v1.10.0 y posteriores. El agente del Constructor de Sitios debe estar activo para usar esta capacidad.
:::
