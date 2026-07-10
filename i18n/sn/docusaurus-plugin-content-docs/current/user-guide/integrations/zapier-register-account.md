---
title: Rendisa Akaunti kuparamusika neZapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Regista akaonto kuparamusoro neZapier {#event-register-an-account-via-zapier}

Muninga mweya [Integrating Ultimate Multisite with Zapier](zapier.md), tinagadzirisa kuti tiri kuenda sei zvakanaka nemashoko anogona kutamba zvinhu munzvimbo dzinotevera (triggers) uye zvinotevera (events) muUltimate Multisite neZapier. Muneweye wekuru iri, tinoone sei kunge kutaura (integrate) zvinhu zvekuita kubva mumapuatoraniso ekutanga (3rd party applications). Tichakasiita kuti Google Sheets iwe yakwanisa kuita zvinodiwa uye tichatamba nekuita akaunti muUltimate Multisite.

Panguva panobva kutaura neZapier, enda ku **Ultimate Multisite > Settings > API & Webhooks** uye tsanidza kuti API inenge yakati (enabled). Chinjisa API Key uye API Secret kubva munzvimbo iyi kana Zapier inenge inoda zvinhlocha zveakaunti ya Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Mune mweya, unofanira kuita **Google Sheet** mumapuatoraniso yako (Google Drive). Zvinhu zvakakosha kuti ufanane zvakanaka necolumn dzako kuti ufanane data nekuti zvichatanga zvakanaka panguva uchitamba.

Panguva unapfura Google sheet, unogona kuenda muakaunti yako ya Zapier uye kutanga kuita zap.

Panguva inotamba (search field) yakanaka kune **"App event"**, chinechigadzirwa **"Google Sheets"**.

Zvakanaka kuti kana "Event", chinechigadzirwa **"New spreadsheet row"** uye tsanidza **"Continue"**.

Mupfungwa iyi, inoda kuita **"test your trigger"** kuti uone kuti Google Sheet yako yakati zvakanaka.

Kana test yako inenge yakapfuura, unofanira kuona zvinoreva zvinhlocha dzinogara mumapuatoraniso yako (spreadsheets). Chinjisa **"Continue"** kuti utanga.

Ndivo ndiri kuita chii chete, kuita zvinotanga chii cha chero cha chero cha akaunti (account) kuno Ultimate Multisite. Pa search field, chibvumira "**Ultimate Multisite(2.0.2)** ".

Pasi field "Event", chibvumira "**Register an Account in Ultimate Multisite**" uye ndichida kuita click pa button "Continue".

Pasi "Set up an action", uchaona zvinhu zvakasiyana-isina zvinogona kuonekwa kuti data ya mutsafiri (customer data), memberships, products, uye zvinhu zvakasiyana-isina chinobva. Unogona kutaura (map) zvinhu izvi mumwe Google Sheet uye kuzivaka pa field yakati yakachengetedza (proper field) pamwe nekuita kuti zvinopfuire se munzvimbo inowanikwa mu screenshot inotangura.

Pasi kuita mapping ye zvinhu, unogona kutaura action iye.
