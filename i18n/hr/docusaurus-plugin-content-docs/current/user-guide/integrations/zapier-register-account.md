---
title: Registrirajte račun putem Zapiera
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Registrirajte se putem Zapier-a

U članku [Integracija Ultimate Multisite s Zapierom](zapier.md), razgovarali smo o tome kako koristiti Zapier za obavljanje različitih radnji unutar Ultimate Multisite na temelju triggera i događaja. U ovom članku pokazat ćemo vam kako možete integrirati aplikacije treće strane. Koristit ćemo Google Sheets kao izvor podataka i poslati informacije u Ultimate Multisite za registraciju računa.

Prije povezivanja Zapier-a, odraste do **Ultimate Multisite > Settings > API & Webhooks** i potvrdite da je API omogućena. Kopirajte API Key i API Secret s ovog ekrana kada Zapier traži podatke za Ultimate Multisite račun.

![API i Webhook postavke s API ključem, API tajnom i opcijama omogućavanja API-ja](/img/admin/settings-api-webhooks.png)

Prvo, trebate kreirati **Google Sheet** unutar vašeg Google Drivea. Provjerite da ste pravilno definirali svaku kolonu kako biste kasnije olakšali mapiranje podataka.

Nakon što stvorite Google sheet, možete se ulogirati na svoj Zapier račun i početi stvarati zap (zap).

U polju za pretraživanje **"App event"** odaberite **"Google Sheets"**.

Zatim u polju "**Event** " odaberite **"New spreadsheet row** " i pritisnite "**Continue** ".

Slijedeći korak će vas pitati da odaberete **Google Account** gdje je spremljen Google Sheet. Dakle, samo provjerite da je navedena ispravna Google račun.

Pod **"Set up trigger** ", trebat će vam odabrati i specificirati Google spreadsheet i radnu listu (worksheet) koju ćete koristiti kao izvor podataka. Samo nastavite s popunjavanjem tih polja i pritisnite "**Continue** ".

Slijedeći korak je "**test your trigger** " kako biste provjerili da je vaš Google Sheet pravilno povezan.

Ako je test uspješan, trebali biste vidjeti rezultat koji prikazuje neke vrijednosti iz vaših spreadsheetova. Kliknite na "**Continue** " za nastavak.

Slijede korak je postavljanje druge akcije koja će kreirati ili registrirati račun u Ultimate Multisite. U polju za pretragu odaberite "**Ultimate Multisite(2.0.2)** ".

U polju "**Event** ", odaberite "**Register an Account in Ultimate Multisite** " zatim kliknite na dugme "**Continue** ".

Pod "**Set up an action** ", vidjet ćete različita polja dostupna za podatke kupaca, članstva, proizvode itd. Možete mapirati vrijednosti s vašeg Google Sheetsa i dodijeliti ih odgovarajućem polju gdje bi trebale biti popunjene, kao što je prikazano na slici ispod.

Nakon što mapirate vrijednosti, možete testirati akciju.
