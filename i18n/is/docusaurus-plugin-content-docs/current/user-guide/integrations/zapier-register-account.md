---
title: Skráðu þig í reikning með Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Árangur: Skráðu þig í reikning með Zapier {#event-register-an-account-via-zapier}

Í greininni [Integrating Ultimate Multisite with Zapier](zapier.md) sem við ræfumum hvernig nota Zapier til að framkvæma ólíka aðgerðir í Ultimate Multisite eftir áhuga og viðburði. Í þessari greininni sýnamlegum við hvernig þú getur tengt yfirburðar app-ir (3rd party applications). Við munum nota Google Sheets sem kjelda upplýsinganna og sendast upp í Ultimate Multisite til að skrá sig.

Fyrst, áður en þú tengist Zapier, ferðu yfir í **Ultimate Multisite > Settings > API & Webhooks** og staðfesti að API sé aktivert. Kopla API Key og API Secret frá þessum skráningu þegar Zapier spyrir eftir reikningagöngum fyrir Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Fyrst þarfurðu að skapa **Google Sheet** undir Google Drive þínum. Skráðu þig í rétt hverja kolunn svo þú getur kleift að mappa upplýsingarnni auðveldlega seinna.

Eftir að hafa skráð þig í Google Sheet, geturðu logga inn í Zapier reikninginn þinn og byrja með sköpunum af zap-i.

Undir leitarstæð **"App event"** veldu **"Google Sheets"**.

Þá fyrir felt **"Event"** veldu **"New spreadsheet row"** og trykkju á **"Continue"**.

Næstu skref mun spyrja þig að velja **Google Account** sem er staðfest í Google Sheet-inum. Skráðu þér svo inn í rétta Google reikningi.

Undir **"Set up trigger"** þarftu að velja og beita sér fyrir þér google spreadsheet og worksheet sem notar til að fá upplýsingarnni. Bara fyll það út og trykkju á **"Continue"**.

Næstu skref eru **"test your trigger"** til að sjá að Google Sheet-inn er rétt tengd.

Ef testinn þinn er átturlegur, þurfaðu að sjá niðurstöður sem sýna nokkrar gildi frá spreadsheetum þínum. Trykkju á **"Continue"** til að halda fram.

Næsta skref er að sett upp bráðni sem mun skapa eða registreggja reikning í Ultimate Multisite. Í leitafältinu veldu "**Ultimate Multisite(2.0.2)** ".

Á feltum "**Event** " veldu "**Register an Account in Ultimate Multisite** " og klikka á knappa "**Continue** ".

Á "**Set up an action**" sjáðu yfirlið sem eru til að nota fyrir upplýsingar um viðskiptavinum, samstarf, vörur, osaf. Þú getur mappa gildi undir google sheet-inn og tekið þau í réttan felt þar sem þeir verða settir inn eins og sýnt í myndinni hér að neð.

Eftir að hafa mappa gildið, geturðu prófa bráðnina.
