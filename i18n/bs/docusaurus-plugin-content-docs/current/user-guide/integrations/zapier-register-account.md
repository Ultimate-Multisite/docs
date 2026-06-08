---
title: Registracija računa preko Zapiera
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Događaj: Registracija računa putem Zapiera

U članku [Integrating Ultimate Multisite with Zapier](zapier.md), razgovarali smo o tome kako koristiti Zapier za izvršavanje različitih radnji unutar Ultimate Multisite, bazirano na okidačima (triggers) i događajima (events). U ovom članku, pokazaćemo kako možete integrirati aplikacije trećih strana. Koristićemo Google Sheets kao izvor podataka i slati te informacije u Ultimate Multisite radi registracije računa.

Prvo, morate kreirati **Google Sheet** u svom Google Drive-u. Pazite da pravilno definišete svaku kolonu kako biste kasnije lako mapirali podatke.

![Google Sheet with columns for customer data](/img/admin/webhooks-list.png)Nakon kreiranja Google Sheet-a, možete se prijaviti na svoj Zapier nalog i početi kreirati zap.

![Zapier dashboard to start creating a zap](/img/admin/webhooks-list.png)U polje za pretragu **"App event"** odaberite **"Google Sheets"**

![Selecting Google Sheets as the app event](/img/admin/webhooks-list.png)

Zatim, za polje "**Event** " odaberite "**New spreadsheet row** " i kliknite na "**Continue** "

![Selecting New spreadsheet row event in Zapier](/img/admin/webhooks-list.png)Sljedeći korak će vas pitati da odaberete **Google Account** gdje je sačuvan **Google Sheet**. Dakle, samo se pobrinite da je naveden ispravan Google nalog.

![Selecting Google Account for the Google Sheet](/img/admin/webhooks-list.png)

Pod **"Set up trigger** ", morat ćete odabrati i specificirati Google Sheet i radni list (worksheet) koji ćete koristiti, s kojeg će dolaziti podaci. Samo nastavite i popunite te podatke, a zatim kliknite na "**Continue** "

![Set up trigger with spreadsheet and worksheet selection](/img/admin/webhooks-list.png)Sljedeće je "**test your trigger** " kako biste bili sigurni da je vaš Google Sheet pravilno povezan.

![Test your trigger step in Zapier](/img/admin/webhooks-list.png)Ako je test uspješan, trebali biste vidjeti rezultat koji prikazuje neke vrijednosti iz vaših hojašita. Kliknite na "**Continue** " da nastavite.

![Successful trigger test showing spreadsheet values](/img/admin/webhooks-list.png)Sljedeći korak je postavljanje druge akcije koja će kreirati ili registrirati račun u Ultimate Multisite. Na polje za pretragu odaberite "**Ultimate Multisite(2.0.2)** "

![Selecting Ultimate Multisite as the action app](/img/admin/webhooks-list.png)

Pod poljem "**Event** " odaberite "**Register an Account in Ultimate Multisite** " a zatim kliknite na gumb "**Continue** "

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Pod "**Set up an action** ", vidjet ćete različita polja dostupna za podatke o korisnicima, članstvima, proizvodima, itd. Možete mapirati vrijednosti iz vašeg Google Sheet-a i dodijeliti ih odgovarajućem polju gdje bi trebalo biti popunjeno, kao što je prikazano u snimku zaslona ispod.

![Mapping Google Sheet values to Ultimate Multisite fields](/img/admin/webhooks-list.png)

Nakon mapiranja vrijednosti, možete testirati akciju.

![Testing the register account Zapier action](/img/admin/webhooks-list.png)
