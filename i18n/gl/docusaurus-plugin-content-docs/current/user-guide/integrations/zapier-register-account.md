---
title: Registar unha conta vía Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Evento: Registrar unha conta vía Zapier {#event-register-an-account-via-zapier}

Na entrada [Integración de Ultimate Multisite con Zapier](zapier.md), discutimos como usar Zapier para realizar diferentes accións dentro de Ultimate Multisite, basándonos en gatilladores (triggers) e eventos. Nesta entrada, mostraremos como podes integrar aplicacións de terceiros. Usaremos Google Sheets como fonte de datos e enviar a información a Ultimate Multisite para registrar unha conta.

Antes de conectar Zapier, ve a **Ultimate Multisite > Settings > API & Webhooks** e confirma que a API está activada (enabled). Copia a API Key e o API Secret desta pantalla cuando Zapier te pida as credenciais da conta de Ultimate Multisite.

![Configuración de API y Webhooks con API Key, API Secret y Opción Habilitar API](/img/admin/settings-api-webhooks.png)

En primeiro lugar, necesitas crear unha **Google Sheet** dentro do teu Google Drive. Asegúrate de definir correctamente cada columna para poder mapear os datos con facilidad posteriormente.

Tras crear a Google Sheet, podes iniciar sesión na tu conta de Zapier e empezar a crear un zap (zap).

Debaixo do campo de búsqueda para **"App event"**, selecciona **"Google Sheets"**.

Luego, no campo "**Event**", selecciona "**New spreadsheet row**" y pulsa "**Continue**".

O próximo paso te pedirá que seleixes unha **Google Account** onde se está salvando a Google Sheet. Así que asegúrate de que se especifica a conta Google correcta.

Debaixo de **"Set up trigger"**, necesitarás seleccionar e especificar a Google Spreadsheet e a worksheet que usarás como fuente dos datos. Simplemente rellena esa información e pulsa "**Continue**".

A continuación, debes "**test your trigger**" para asegurarte de que a Google Sheet está correctamente conectada.

Se o teu test é exitoso, deberías ver o resultado mostrando algun valor das tes hojas de cálculo. Pulsa "**Continue**" para continuar.

O próximo paso é configurar a segunda acción que irá criar ou registar unha conta no Ultimate Multisite. No campo de búsqueda selecciona "**Ultimate Multisite(2.0.2)** ".

No campo "**Event** ", selecciona "**Register an Account in Ultimate Multisite** " e pulsa o botón "**Continue** ".

No apartado "**Set up an action** ", verás diferentes campos dispoñibles para datos do cliente, membros, produtos, etc. Podrás mapear os valores na túa google sheet e asignalos ao campo correcto onde deberían ser populados, como se mostra na captura de pantalla a continuación.

Tras mapear os valores, podes probar a acción.
