---
title: Registreer 'n Account via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Gebeurtenis: Registreer ’n Account via Zapier

In die artikel [Integrasie van Ultimate Multisite met Zapier](zapier.md), het ons bespreek hoe om Zapier te gebruik om verskillende aksies binne Ultimate Multisite uit te voer op grond van snellers en gebeurtenisse. In hierdie artikel sal ons wys hoe jy 3departy-toepassings kan integreer. Ons sal Google Sheets as die bron van data gebruik en die inligting na Ultimate Multisite stuur om ’n Account te registreer.

Voordat jy Zapier koppel, gaan na **Ultimate Multisite > Settings > API & Webhooks** en bevestig dat die API geaktiveer is. Kopieer die API Key en API Secret vanaf hierdie skerm wanneer Zapier vir die Ultimate Multisite-Account se aanmeldbesonderhede vra.

![API- en Webhooks-instellings met API Key, API Secret en Enable API-opsies](/img/admin/settings-api-webhooks.png)

Eerstens moet jy ’n **Google Sheet** onder jou Google Drive skep. Maak seker dat jy elke kolom behoorlik definieer sodat jy die data later maklik kan karteer.

Nadat jy ’n Google Sheet geskep het, kan jy by jou Zapier-Account aanmeld en begin om ’n zap te skep.

Onder die soekveld vir **"App event"** kies **"Google Sheets"**


Kies dan vir die "**Event** "-veld "**New spreadsheet row** " en klik "**Continue** "

Die volgende stap sal jou vra om ’n **Google Account** te kies waar die **Google Sheet** gestoor is. Maak dus net seker dat die regte Google Account gespesifiseer is.


Onder **"Set up trigger** " moet jy die Google-spreadsheet en worksheet kies en spesifiseer wat jy sal gebruik waarvandaan die data sal kom. Gaan voort en vul dit in en klik "**Continue** "

Volgende is om "**test your trigger** " om seker te maak dat jou Google Sheet behoorlik gekoppel is.

As jou toets suksesvol is, behoort jy die resultaat te sien wat sommige waardes uit jou spreadsheets wys. Klik "**Continue** " om voort te gaan.

Die volgende stap is om die tweede aksie op te stel wat ’n Account in Ultimate Multisite sal skep of registreer. Kies op die soekveld "**Ultimate Multisite(2.0.2)** "


Onder die "**Event** "-veld, kies "**Register an Account in Ultimate Multisite** " en klik dan die "**Continue** "-knoppie.

Onder "**Set up an action** " sal jy verskillende velde sien wat beskikbaar is vir kliëntdata, lidmaatskappe, produkte, ens. Jy kan die waardes onder jou Google Sheet karteer en hulle toewys aan die toepaslike veld waar hulle ingevul moet word, soos in die skermskoot hieronder gewys.


Nadat jy die waardes gekarteer het, kan jy die aksie toets.
