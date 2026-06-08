---
title: Registreer 'n Rekening via Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Gebeurtenis: Registreer 'n rekening via Zapier

In die artikel [Integrating Ultimate Multisite with Zapier](zapier.md) het ons bespreek hoe om Zapier te gebruik om verskillende aksies binne Ultimate Multisite uit te voer op grond van aanjagers (triggers) en gebeurtenisse (events). In hierdie artikel sal ons wys hoe jy derde-partye toepassings kan integreer. Ons sal Google Sheets as die databron gebruik en die inligting na Ultimate Multisite stuur om 'n rekening te registreer.

Eerstens moet jy 'n **Google Sheet** onder jou Google Drive skep. Maak seker dat jy elke kolom korrek definieer sodat jy die data later maklik kan pas (map).

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)Nadat jy 'n Google Sheet geskep het, kan jy in jou Zapier-rekening aanmeld en begin met die skep van 'n zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)Onder die soekveld vir **"App event"** kies **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Dan vir die "**Event** " veld, kies "**New spreadsheet row** " en druk op "**Continue** "

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)Die volgende stap sal jou vra om 'n **Google Account** te kies waar die **Google Sheet** gestoor is. Maak dus net seker dat die regte Google-rekening gespesifiseer is.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Onder **"Set up trigger** ", moet jy die Google-spredsel en werkblad wat jy sal gebruik waar die data vandaan kom, kies en spesifiseer. Vul dit net in en druk op "**Continue** "

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Volgende is om jou "**test your trigger** " om seker te maak dat jou Google Sheet korrek gekoppel is.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)As jou toets suksesvol is, behoort jy die resultaat te sien wat sommige waardes uit jou spredkaarte toon. Klik op "**Continue** " om voort te gaan.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)Die volgende stap is om die tweede aksie op te stel wat 'n rekening in Ultimate Multisite sal skep of registreer. Kies op die soekveld "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Onder die "**Event** " veld, kies "**Register an Account in Ultimate Multisite** " en klik dan op die "**Continue** " knoppie.

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Onder "**Set up an action** ", sal jy verskillende velde sien wat beskikbaar is vir kliëntdata, lidmaatskapte, produkte, ens. Jy kan die waardes onder jou Google Sheet pas en dit toewys aan die korrekte veld waar dit ingevul moet word, soos getoon in die skermkiekie hieronder.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Nadat jy die waardes gepas het, kan jy die aksie toets.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
