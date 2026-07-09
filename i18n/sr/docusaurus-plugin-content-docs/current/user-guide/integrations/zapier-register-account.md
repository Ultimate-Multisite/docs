---
title: Registrujte se putem Zapiera
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Registracija naloga putem Zapier-a {#event-register-an-account-via-zapier}

U članku [Integracija Ultimate Multisite sa Zapierom](zapier.md), razgovarali smo o tome kako koristiti Zapier za obavljanje različitih akcija unutar Ultimate Multisite na osnovu trigger-a i događaja. U ovom članku ćemo pokazati kako možete integrisati aplikacije treće strane. Koristićemo Google Sheets kao izvor podataka i šaljemo informacije u Ultimate Multisite da se registruje nalog.

Pre povezivanja Zapier-a, idite na **Ultimate Multisite > Settings > API & Webhooks** i potvrdite da je API uključen (enabled). Kopirajte API Key i API Secret sa ove stranice kada Zapier zatraži podatke za Ultimate Multisite nalog.

![Podešavanja API-ja i Webhook-ova sa API Ključem, API Tajnom i opcijom omogućavanja API-ja](/img/admin/settings-api-webhooks.png)

Prvo, potrebno je da kreirate **Google Sheet** unutar svog Google Drive-a. Uverite se da ste pravilno definisali svaki kolonu tako da možete kasnije lako mapirati podatke.

Nakon kreiranja Google Sheets-a, možete se ulogovati na svoj Zapier nalog i početi da kreirate zap (zap).

U polju za pretragu **"App event"** izaberite **"Google Sheets"**.

Zatim u polju "**Event** " izaberite **"New spreadsheet row** (Novi red u tablici) i kliknite na "**Continue**" (Nastavi).

Sledeći korak će vas pitati da izaberete **Google Account** gde je spreman Google Sheet. Dakle, samo uverite se da je navedena ispravna Google nalog.

Pod sekcijom **"Set up trigger"**, potrebno je da izaberete i navedete Google spreadsheet i radnu listu (worksheet) koju ćete koristiti kao izvor podataka. Samo nastavite sa popunjavanjem tih polja i kliknite na "**Continue**".

Sledeći korak je "**test your trigger**" (Testirajte svoj trigger) da biste proverili da li je vaš Google Sheet ispravno povezan.

Ako je test uspešan, trebalo bi da vidite rezultat koji prikazuje neke vrednosti iz vaših tablica. Kliknite na "**Continue**" da nastavite.

Следећи корак је да поставите другу акцију која ће креирати или регистровати насловну страницу (ако се ради о акаунту) у Ultimate Multisite-у. У полису за претрагу изаберите "**Ultimate Multisite(2.0.2)** ".

У полису "**Event** " изaberite "**Register an Account in Ultimate Multisite** " а zatim притисните дугме "**Continue** ".

Под "**Set up an action** ", ћете видети различите полисе доступне за податке клијента, чланице, производе и тако не. Можете мапирати вредности из своје Google Sheet-а и додати их у приреду поле где треба да буду попуњени, као што је показано на скрану испод.

Након што мапирате вредности, можете тестирати акцију.
