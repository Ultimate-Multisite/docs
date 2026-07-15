---
title: Registrar una Account mediante Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Evento: Registrar un Account mediante Zapier

En el artículo [Integrar Ultimate Multisite con Zapier](zapier.md), hablamos sobre cómo usar Zapier para realizar diferentes acciones dentro de Ultimate Multisite según activadores y eventos. En este artículo, mostraremos cómo puedes integrar aplicaciones de terceros. Usaremos Google Sheets como fuente de datos y enviaremos la información a Ultimate Multisite para registrar un Account.

Antes de conectar Zapier, ve a **Ultimate Multisite > Settings > API & Webhooks** y confirma que la API esté habilitada. Copia la API Key y API Secret de esta pantalla cuando Zapier solicite las credenciales del Account de Ultimate Multisite.

![Ajustes de API y Webhooks con opciones de API Key, API Secret y Enable API](/img/admin/settings-api-webhooks.png)

Primero, necesitas crear una **Google Sheet** en tu Google Drive. Asegúrate de definir correctamente cada columna para poder mapear fácilmente los datos más tarde.

Después de crear una Google sheet, puedes iniciar sesión en tu cuenta de Zapier y comenzar a crear un zap.

En el campo de búsqueda para **"App event"** selecciona **"Google Sheets"**


Luego, para el campo "**Event** " selecciona "**New spreadsheet row** " y pulsa "**Continue** "

El siguiente paso te pedirá que selecciones una **Google Account** donde esté guardada la **Google Sheet**. Así que asegúrate de que se haya especificado la cuenta de google correcta.


En **"Set up trigger** ", tendrás que seleccionar y especificar la hoja de cálculo y la hoja de trabajo de google que usarás y de donde provendrán los datos. Simplemente complétalos y pulsa "**Continue** "

Lo siguiente es "**test your trigger** " para asegurarte de que tu google sheet esté correctamente conectada.

Si tu prueba se realiza correctamente, deberías ver el resultado mostrando algunos valores de tus hojas de cálculo. Haz clic en "**Continue** " para continuar.

El siguiente paso es configurar la segunda acción, que creará o registrará un Account en Ultimate Multisite. En el campo de búsqueda selecciona "**Ultimate Multisite(2.0.2)** "


En el campo "**Event** ", selecciona "**Register an Account in Ultimate Multisite** " y luego haz clic en el botón "**Continue** ".

En "**Set up an action** ", verás diferentes campos disponibles para datos de clientes, membresías, productos, etc. Puedes mapear los valores de tu google sheet y asignarlos al campo adecuado donde deberían completarse, como se muestra en la captura de pantalla a continuación.


Después de mapear los valores, puedes probar la acción.
