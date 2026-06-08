---
title: Registra una compte a través de Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Event: Registrar una compte mit Zapier

En l'article [Integrar Ultimate Multisite amb Zapier](zapier.md), vam parlem de com utilitzar Zapier per fer diferents accions dins d'Ultimate Multisite basant en triggers i events. En aquest article, mostrarem com podes integrar aplicacions de tercers. Utilitzarem Google Sheets com a la font de dades i enviar la informació a Ultimate Multisite per registrar una compte.

Primer, has de crear una **Google Sheet** dins del teu Google Drive. Assureu-vos que defines cada columna correctament perquè puguis mapejar els dades més tard amb facilitat.

![Google Sheet amb colum per a dades del client](/img/admin/webhooks-list.png)Després de crear una Google Sheet, pots iniciar sessió a la teva compte de Zapier i començar a crear un zap.

![Dashboard de Zapier per començar a crear un zap](/img/admin/webhooks-list.png)Sota el camp de cerca per a **"App event"** selecciona **"Google Sheets"**.

![Seleccionar Google Sheets com a app event](/img/admin/webhooks-list.png)

Després, per al camp "**Event**", selecciona "**New spreadsheet row**" i fes clic en "**Continue**".

![Seleccionar l'event New spreadsheet row en Zapier](/img/admin/webhooks-list.png)El següent pas us demanarà que seleccions una **Google Account** on es troba la **Google Sheet**. Així que només assegureu-vos que es especifica la compte Google correcta.

![Seleccionar Google Account per a la Google Sheet](/img/admin/webhooks-list.png)

Bajo **"Configurar el disparador"** (Set up trigger), tendrás que seleccionar y especificar la hoja de cálculo y la hoja de cálculo de Google que usarás como fuente de los datos. Simplemente rellena esos campos y haz clic en "**Continuar**" (Continue).

![Configuración del disparador con selección de hoja de cálculo y hoja](/img/admin/webhooks-list.png)

A continuación, está el paso de "**probar tu disparador**" (test your trigger) para asegurarte de que tu hoja de cálculo está correctamente conectada.

![Paso de prueba del disparador en Zapier](/img/admin/webhooks-list.png)

Si la prueba es exitosa, deberías ver el resultado mostrando algunos valores de tus hojas de cálculo. Haz clic en "**Continuar**" (Continue) para seguir adelante.

![Prueba exitosa del disparador mostrando valores de la hoja de cálculo](/img/admin/webhooks-list.png)

El siguiente paso es configurar la segunda acción que creará o registrará una cuenta en Ultimate Multisite. En el campo de búsqueda, selecciona "**Ultimate Multisite(2.0.2)**".

![Seleccionando Ultimate Multisite como aplicación de acción](/img/admin/webhooks-list.png)

Bajo el campo "**Evento**" (Event), selecciona "**Registrar una cuenta en Ultimate Multisite**" (Register an Account in Ultimate Multisite) y luego haz clic en el botón "**Continuar**" (Continue).

![Evento de la acción Registrar una cuenta en Ultimate Multisite](/img/admin/webhooks-list.png)

Bajo "**Configurar una acción**" (Set up an action), verás diferentes campos disponibles para datos de clientes, membresías, productos, etc. Puedes mapear los valores de tu hoja de cálculo y asignarlos al campo adecuado donde deben aparecer, como se muestra en la captura de pantalla a continuación.

![Mapeo de valores de Google Sheet a los campos de Ultimate Multisite](/img/admin/webhooks-list.png)

Després de mapejar els valors, pots provar l'acció.

![Testant l'acció d'enregistrament de comptes Zapier](/img/admin/webhooks-list.png)
