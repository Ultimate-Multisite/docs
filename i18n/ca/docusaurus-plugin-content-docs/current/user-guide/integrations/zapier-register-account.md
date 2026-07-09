---
title: Registra un Account mitjançant Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Esdeveniment: registra un Account via Zapier

A l’article [Integrar Ultimate Multisite amb Zapier](zapier.md), vam parlar de com utilitzar Zapier per dur a terme diferents accions dins d’Ultimate Multisite basades en desencadenants i esdeveniments. En aquest article, mostrarem com pots integrar aplicacions de tercers. Utilitzarem Google Sheets com a font de dades i enviarem la informació a Ultimate Multisite per registrar un Account.

Abans de connectar Zapier, ves a **Ultimate Multisite > Settings > API & Webhooks** i confirma que l’API estigui activada. Copia l’API Key i l’API Secret d’aquesta pantalla quan Zapier et demani les credencials del Account d’Ultimate Multisite.

![Configuració d’API i Webhooks amb opcions d’API Key, API Secret i Enable API](/img/admin/settings-api-webhooks.png)

Primer, has de crear un **Google Sheet** al teu Google Drive. Assegura’t de definir correctament cada columna perquè puguis mapar fàcilment les dades més endavant.

Després de crear un Google sheet, pots iniciar sessió al teu Account de Zapier i començar a crear un zap.

Sota el camp de cerca per a **"App event"** selecciona **"Google Sheets"**


Després, al camp "**Event** " selecciona "**New spreadsheet row** " i prem "**Continue** "

El pas següent et demanarà que seleccionis un **Google Account** on està desat el **Google Sheet**. Així doncs, assegura’t que s’hagi especificat el compte de Google correcte.


Sota **"Set up trigger** ", hauràs de seleccionar i especificar el full de càlcul i el full de treball de Google que utilitzaràs, d’on vindran les dades. Continua i omple aquests camps i prem "**Continue** "

A continuació, cal "**test your trigger** " per assegurar-te que el teu Google sheet està connectat correctament.

Si la prova és correcta, hauries de veure el resultat mostrant alguns valors dels teus fulls de càlcul. Fes clic a "**Continue** " per continuar.

El pas següent és configurar la segona acció que crearà o registrarà un Account a Ultimate Multisite. Al camp de cerca selecciona "**Ultimate Multisite(2.0.2)** "


Sota el camp "**Event** ", selecciona "**Register an Account in Ultimate Multisite** " i després fes clic al botó "**Continue** ".

Sota "**Set up an action** ", veuràs diferents camps disponibles per a dades del client, membresies, productes, etc. Pots mapar els valors del teu Google sheet i assignar-los al camp adequat on s’han d’omplir, tal com es mostra a la captura de pantalla següent.


Després de mapar els valors, pots provar l’acció.
