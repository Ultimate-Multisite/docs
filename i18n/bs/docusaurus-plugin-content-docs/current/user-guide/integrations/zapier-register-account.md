---
title: Registrirajte Account putem Zapier-a
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Događaj: Registrirajte Account putem Zapier {#event-register-an-account-via-zapier}

U članku [Integracija Ultimate Multisite sa Zapier](zapier.md), razgovarali smo o tome kako koristiti Zapier za izvršavanje različitih radnji unutar Ultimate Multisite na osnovu okidača i događaja. U ovom članku ćemo pokazati kako možete integrisati aplikacije trećih strana. Koristit ćemo Google Sheets kao izvor podataka i poslati informacije u Ultimate Multisite za registraciju Accounta.

Prije povezivanja Zapier, idite na **Ultimate Multisite > Settings > API & Webhooks** i potvrdite da je API omogućen. Kopirajte API Key i API Secret s ovog ekrana kada Zapier zatraži akreditive za Ultimate Multisite Account.

![Postavke API i Webhooks sa API Key, API Secret i opcijama Enable API](/img/admin/settings-api-webhooks.png)

Prvo trebate kreirati **Google Sheet** u svom Google Driveu. Pobrinite se da pravilno definirate svaku kolonu kako biste kasnije mogli lako mapirati podatke.

Nakon kreiranja Google sheeta, možete se prijaviti na svoj Zapier account i početi kreirati zap.

Ispod polja za pretragu za **"App event"** odaberite **"Google Sheets"**


Zatim za polje "**Event** " odaberite "**New spreadsheet row** " i pritisnite "**Continue** "

Sljedeći korak će od vas tražiti da odaberete **Google Account** gdje je **Google Sheet** sačuvan. Zato samo provjerite da je naveden pravi google account.


Ispod **"Set up trigger** ", trebate odabrati i navesti google spreadsheet i worksheet koji ćete koristiti i iz kojeg će podaci dolaziti. Samo nastavite, popunite ta polja i pritisnite "**Continue** "

Sljedeće je da "**test your trigger** " kako biste se uvjerili da je vaš google sheet pravilno povezan.

Ako je vaš test uspješan, trebali biste vidjeti rezultat koji prikazuje neke vrijednosti iz vaših spreadsheets. Kliknite "**Continue** " za nastavak.

Sljedeći korak je postavljanje druge radnje koja će kreirati ili registrirati Account u Ultimate Multisite. U polju za pretragu odaberite "**Ultimate Multisite(2.0.2)** "


Ispod polja "**Event** ", odaberite "**Register an Account in Ultimate Multisite** ", zatim kliknite dugme "**Continue** ".

Ispod "**Set up an action** ", vidjet ćete različita polja dostupna za podatke kupca, članstva, proizvode itd. Možete mapirati vrijednosti iz vašeg google sheeta i dodijeliti ih odgovarajućem polju u koje trebaju biti popunjene, kao što je prikazano na snimku ekrana ispod.


Nakon mapiranja vrijednosti, možete testirati radnju.
