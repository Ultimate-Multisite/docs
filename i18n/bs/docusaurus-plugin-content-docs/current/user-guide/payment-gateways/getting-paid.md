---
title: Primanje uplata
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Primanje uplata (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite ima ugrađen sistem članstva i naplate. Da bi naš sistem naplate funkcionisao, integrisali smo najčešće pristupnike plaćanja koji se koriste u e-trgovini. Zadani pristupnici plaćanja u Ultimate Multisite su _Stripe_ , _PayPal_ , i ručno plaćanje. Također možete koristiti _WooCommerce_ , _GoCardless_ i _Payfast_ za primanje uplata instaliranjem njihovih odgovarajućih add-onova.

## Osnovne postavke {#basic-settings}

Možete konfigurirati bilo koji od ovih pristupnika plaćanja u postavkama plaćanja za Ultimate Multisite. Možete ih pronaći tako što odete na **Ultimate Multisite meni > Settings > Payments.**

![Stranica postavki plaćanja u Ultimate Multisite koja prikazuje panel Plaćanja](/img/config/payments-settings-page.png)

Prije nego što postavite svoj pristupnik plaćanja, pogledajte osnovne postavke plaćanja koje možete konfigurirati:

**Prisili automatsko obnavlja** **nje:** Ovo će osigurati da se plaćanje automatski ponavlja na kraju svakog obračunskog ciklusa, ovisno o učestalosti naplate koju je korisnik odabrao.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 provjerava da li aktivni pristupnik ima višekratnu vjerodajnicu za obnovu prije spremanja ponavljajućeg članstva s omogućenim automatskim obnavljanjem. Vjerodajnica za obnovu može biti pretplata pristupnika, ugovor o naplati, sačuvani vault token ili ekvivalentan višekratni način plaćanja. Ako pristupnik prijavi da ne postoji upotrebljiva vjerodajnica, Ultimate Multisite sprema članstvo, ali isključuje automatsko obnavljanje i bilježi stanje nedostajuće vjerodajnice kako bi administrator ili tok podrške mogao zatražiti od kupca da ponovo autorizira plaćanje prije datuma obnove.

Ovo sprječava da članstvo izgleda kao da se automatski obnavlja kada pristupnik može naplatiti samo jednokratna plaćanja. Add-onovi pristupnika trebaju potvrditi da ponavljajući checkouti pohranjuju višekratnu vjerodajnicu, posebno kada pristupnik podržava i jednokratno terećenje i vault/subscription načine plaćanja.

**Dozvoli probne periode bez načina plaćanja:** Kada je ova opcija omogućena, vaš klijent neće morati dodavati nikakve finansijske informacije tokom procesa registracije. Ovo će biti potrebno tek kada probni period istekne.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Pošalji fakturu nakon potvrde plaćanja:** Ovo vam daje opciju da li želite poslati fakturu nakon plaćanja ili ne. Imajte na umu da će korisnici imati pristup svojoj historiji plaćanja u okviru Dashboarda svog podsitea. Ova opcija se ne primjenjuje na Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Šema numerisanja faktura:** Ovdje možete odabrati ili referentni kod plaćanja ili šemu sekvencijalnog broja. Ako odaberete korištenje referentnog koda plaćanja za svoje fakture, ne morate ništa konfigurirati. Ako odaberete korištenje šeme sekvencijalnog broja, morat ćete konfigurirati **sljedeći broj fakture** (Ovaj broj će se koristiti kao broj fakture za sljedeću fakturu generisanu u sistemu. Povećava se za jedan svaki put kada se kreira nova faktura. Možete ga promijeniti i sačuvati kako biste resetovali sekvencijalni broj fakture na određenu vrijednost) i **prefiks broja fakture.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gdje pronaći pristupnike: {#where-to-find-the-gateways}

Možete postaviti pristupnike plaćanja na istoj stranici ( **Ultimate Multisite > Settings > Payments**). Odmah ispod **aktivnih pristupnika plaćanja** , moći ćete vidjeti: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ i _Manual_.

![Odjeljak aktivnih pristupnika plaćanja koji navodi Stripe, Stripe Checkout, PayPal i Manual](/img/config/payments-active-gateways.png)

Imamo poseban članak za svaki pristupnik plaćanja koji će vas provesti kroz korake njegovog postavljanja, a koje možete pronaći na linkovima ispod.

Možete pregledati i uređivati detalje plaćanja:

![Interfejs za uređivanje plaćanja](/img/admin/payment-edit.png)

Evo punog prikaza stranice za uređivanje plaćanja:

![Puni interfejs za uređivanje plaćanja](/img/admin/payment-edit-full.png)

Evo također punog prikaza postavki pristupnika plaćanja:

![Puna stranica postavki pristupnika plaćanja](/img/config/settings-payments-gateways-full.png)

**Postavljanje Stripe pristupnika**

**Postavljanje PayPal pristupnika**** **

**Postavljanje ručnih plaćanja**

Sada, ako želite koristiti _WooCommerce_ , _GoCardless_ ili _Payfast_ kao svoj pristupnik plaćanja, morat ćete **instalirati i konfigurirati njihove add-onove**.

### Kako instalirati WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Razumijemo da _Stripe_ i _PayPal_ nisu dostupni u nekim zemljama, što ograničava ili otežava korisnicima Ultimate Multisite da učinkovito koriste naš plugin. Zato smo kreirali add-on za integraciju _WooCommerce,_ koji je vrlo popularan plugin za e-trgovinu. Programeri širom svijeta kreirali su add-onove za integraciju različitih pristupnika plaćanja s njim. Iskoristili smo to kako bismo proširili pristupnike plaćanja koje možete koristiti sa sistemom naplate Ultimate Multisite.

_**VAŽNO:** Ultimate Multisite: WooCommerce Integration zahtijeva da WooCommerce bude aktiviran barem na vašem glavnom sajtu._

Prvo, idite na stranicu add-onova. Možete je pronaći tako što odete na **Ultimate Multisite > Settings**. Trebali biste vidjeti tabelu **Add-ons**. Kliknite na **Provjerite naše add-onove**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nakon klika na **Provjerite naše add-onove** , bit ćete preusmjereni na stranicu add-onova. Ovdje možete pronaći sve Ultimate Multisite add-onove. Kliknite na add-on **Ultimate Multisite: WooCommerce Integration**.

![Stranica add-onova koja prikazuje Ultimate Multisite add-onove uključujući WooCommerce Integration](/img/addons/addons-page.png)

Pojavit će se prozor s detaljima add-on-a. Samo kliknite na **Install Now**.

<!-- Snimak ekrana nedostupan: dijalog s detaljima Ultimate Multisite WooCommerce Integration add-on-a s dugmetom Install Now -->

Nakon što se instalacija završi, bit ćete preusmjereni na stranicu plugin-a. Ovdje samo kliknite na **Network Activate** i WooCommerce add-on će biti aktiviran na vašoj mreži.

<!-- Snimak ekrana nedostupan: stranica plugin-a s linkom Network Activate za WooCommerce Integration add-on -->

Nakon aktivacije, ako još uvijek nemate instaliran i aktiviran WooCommerce plugin na svojoj web stranici, dobit ćete podsjetnik.

<!-- Snimak ekrana nedostupan: administratorska obavijest koja podsjeća administratora da instalira i aktivira WooCommerce plugin -->

Da pročitate više o WooCommerce Integration add-on-u, **kliknite ovdje**.

### Kako instalirati GoCardless add-on: {#how-to-install-the-gocardless-add-on}

Koraci za instaliranje _GoCardless_ add-on-a su uglavnom isti kao za _WooCommerce_ add-on. Idite na stranicu add-on-a i odaberite **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Snimak ekrana nedostupan: stranica add-on-a s istaknutim Ultimate Multisite GoCardless Gateway add-on-om -->

Pojavit će se prozor add-on-a. Kliknite na **Install Now**.

<!-- Snimak ekrana nedostupan: dijalog s detaljima Ultimate Multisite GoCardless Gateway add-on-a s dugmetom Install Now -->

Nakon što se instalacija završi, bit ćete preusmjereni na stranicu plugin-a. Ovdje samo kliknite na **Network Activate** i _GoCardless_ add-on će biti aktiviran na vašoj mreži.

<!-- Snimak ekrana nedostupan: stranica plugin-a s linkom Network Activate za GoCardless Gateway add-on -->

Da naučite kako početi koristiti _GoCardless_ gateway, **pročitajte ovaj članak**.

### Kako instalirati Payfast add-on: {#how-to-install-the-payfast-add-on}

Idite na stranicu add-on-a i odaberite **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Snimak ekrana nedostupan: stranica add-on-a s istaknutim Ultimate Multisite Payfast Gateway add-on-om -->

Pojavit će se prozor add-on-a. Kliknite na **Install Now.**

<!-- Snimak ekrana nedostupan: dijalog s detaljima Ultimate Multisite Payfast Gateway add-on-a s dugmetom Install Now -->

Nakon što se instalacija završi, bit ćete preusmjereni na stranicu plugin-a. Ovdje samo kliknite na **Network Activate** i _Payfast_ add-on će biti aktiviran na vašoj mreži.

<!-- Snimak ekrana nedostupan: stranica plugin-a s linkom Network Activate za Payfast Gateway add-on -->
