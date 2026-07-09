---
title: Registrirajte račun preko Zapiera
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Dogodev: Registracija računa preko Zapierja {#event-register-an-account-via-zapier}

V članku [Integracija Ultimate Multisite z Zapierjem](zapier.md) smo pogovorili kako uporabiti Zapier za opravljanje različnih dejakov v Ultimate Multisite na podlagi triggerjev in dogodkov. V tem članku vam bom pokazal kako lahko integrirate tretji strani aplikacije. Uporabimo Google Sheets kot vir podatkov in pošljemo informacije v Ultimate Multisite za registracijo računa.

Pred povezavo Zapierja, gre do **Ultimate Multisite > Settings > API & Webhooks** in potrdite da je API omogočen. Kopirajte API Key in API Secret s tega zaslona, ko Zapier poobliga za podatke računa Ultimate Multisite.

![API in Webhooks nastavitve z API ključem, API sekretom in optajanjem API](/img/admin/settings-api-webhooks.png)

Predvsem morate ustvariti **Google Sheet** v svojem Google Driveu. Upe asegurarse, da ste pravilno definili vsoto stolpca, tako da lahko kasneje enostavno mapirate podatke.

Po ustvaritvi Google Sheets lahko se prijavite na svoj Zapier račun in začnete ustvarjati zap (zap).

Pod poljem iskanja za **"App event"** izberite **"Google Sheets"**.

Potem v polju "**Event** " izberite **"New spreadsheet row** " in kliknite na "**Continue** ".

Naslednji korak bo zahteval, da izberete **Google Account**, kjer je shranjen **Google Sheet**. Zato samo prepričajte se, da je naveden pravi Google račun.

Pod **"Set up trigger** ", boste morali izbrati in navesti Google spreadsheet in list (worksheet), ki ga budzite za uporabo, od katerih bodo podatki prihajali. Samo vnesite te informacije in kliknite na "**Continue** ".

Naslednji korak je **"test your trigger** ", da se prepričate, da je vaš Google Sheet pravilno povezan.

Če je test uspešen, boste videli rezultat z prikazom nekaterih vrednosti iz vaših list. Kliknite na "**Continue** " za nadaljevanje.

Naslednji korak je nastavit drugi dejanje, ki bo ustvarilo ali registriralo račun v Ultimate Multisite. Na polje za iskanje izberite "**Ultimate Multisite(2.0.2)** ".

Pod poljem "**Event** " izberite "**Register an Account in Ultimate Multisite** ", nato kliknite na gumb "**Continue** ".

Pod "**Set up an action** " boste videli različna polja, ki so na voljo za podatke o strankah, članstvi, izdelkih itd. Lahko lahko mapirate vrednosti pod vašo google sheet in jih dodelite na primerno polje, kjer bodo imenovane kot prikazano na spodnji sliki.

Po mapiranju vrednosti boste lahko preizkusili dejanje.
