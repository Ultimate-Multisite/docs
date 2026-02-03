---
title: Registrar una cuenta vía Zapier
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Evento: Registrar una cuenta vía Zapier

En el artículo [Integrating Ultimate Multisite with Zapier](zapier.md), discutimos cómo usar Zapier para realizar diferentes acciones dentro de Ultimate Multisite basadas en disparadores y eventos. En este artículo, mostraremos cómo puedes integrar aplicaciones de terceros. Usaremos Google Sheets como fuente de datos y enviaremos la información a Ultimate Multisite para registrar una cuenta.

Primero, necesitas crear una **Google Sheet** en tu Google Drive. Asegúrate de definir correctamente cada columna para que puedas mapear los datos fácilmente más adelante.

Después de crear una hoja de Google, puedes iniciar sesión en tu cuenta de Zapier y comenzar a crear un zap.

En el campo de búsqueda para **"App event"** selecciona **"Google Sheets"**

Luego, en el campo **"Event"** selecciona **"New spreadsheet row"** y pulsa **"Continue"**

El siguiente paso te pedirá que selecciones una **Google Account** donde esté guardada la **Google Sheet**. Así que simplemente asegúrate de que se haya especificado la cuenta de Google correcta.

En **"Set up trigger"**, necesitarás seleccionar y especificar la hoja de cálculo de Google y la hoja de trabajo que usarás, donde provendrán los datos. Simplemente rellena esos campos y pulsa **"Continue"**

A continuación, debes "**prueba tu disparador**" para asegurarte de que tu hoja de Google esté conectada correctamente. Si tu prueba es exitosa, deberías ver el resultado mostrando algunos valores de tus hojas de cálculo. Haz clic en **"Continuar"** para continuar.

El siguiente paso es configurar la segunda acción que creará o registrará una cuenta en Ultimate Multisite. En el campo de búsqueda selecciona **Ultimate Multisite(2.0.2)**

En el campo **"Evento"** selecciona **"Registrar una cuenta en Ultimate Multisite"** y luego haz clic en el botón **"Continuar"**.

En **"Configurar una acción"** verás diferentes campos disponibles para datos de clientes, membresías, productos, etc. Puedes mapear los valores de tu hoja de Google y asignarlos al campo correspondiente donde deben ser poblados, como se muestra en la captura de pantalla a continuación.

Después de mapear los valores, puedes probar la acción.
