---
title: Plaćanje
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Primanje novca (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite ima ugrađeni sustav za članstvo i naplatu. Da bi naš sustav za naplatu funkcionirao, integrirali smo najčešće korištene platne gatewaye koje se koriste u e-trgovini. Podrazumijevani platni gatewayi u Ultimate Multisite su _Stripe_, _PayPal_ i Ručna plaćanja (Manual Payment). Također možete koristiti _WooCommerce_, _GoCardless_ i _Payfast_ za primanje plaćanja instaliranjem njihovih odgovarajućih dodataka.

## Osnovne postavke

Možete konfigurirati bilo koji od ovih platnih gatewaya pod Ultimate Multisite postavkama za plaćanja. Možete doći tamo idući na **Ultimate Multisite meni > Postavke (Settings) > Plačanja (Payments).**

![Stranica s postavkama plaćanja u Ultimate Multisite koja prikazuje panel za plaćanja](/img/config/payments-settings-page.png)

Prije nego što postavite svoj platni gateway, pogledajte osnovne postavke plaćanja koje možete konfigurirati:

**Force auto-renew (Forciiranje automatskog obnavljanja):** Ovo će osigurati da će se plaćanje automatski ponoviti na kraju svakog ciklusa naplate ovisno o frekvenciji naplate koju je korisnik odabrao.

<!-- Screenshot unavailable: Postavka prekidač Force Auto-Renew na stranici s postavkama plaćanja -->

Ultimate Multisite v2.13.0 provjerava je li aktivni gateway ima ponovljivu kredencijalnu podatke za obnavljanje prije spremanja ponavljajućeg članstva s omogućeno automatskim obnavljanjem. Ponovljiva kredencijalna podaci mogu biti pretplata na gateway, ugovor o naplati, spremljeni vault token ili ekvivalentna ponovljiva metoda plaćanja. Ako gateway prijavi da ne postoji korisne kredencijalne podatke, Ultimate Multisite sprema članstvo ali isključuje automatsko obnavljanje i bilježi stanje s nedostupnim podacima kako bi administrator ili sustav podrške mogli zamoliti klijenta ponovno autorizaciju plaćanja prije datuma obnavljanja.

Ovo sprečava da se članstvo automatski obnavlja kada gateway može prihvatiti samo jednokratne plaćanja. Gateway add-onovi bi trebali potvrditi da li ponavljajuće pročitavanja (recurring checkouts) čuvaju ponovljivu kredencijalnu podatke, pogotovo kada gateway podržava i jednorazno prikupljanje sredstava te način plaćanja sa pohranjenim podacima/pretplatom.

**Dozvolite probne razdoblje bez metode plaćanja** **metoda:** Kada je ova opcija uključena, vaš klijent neće morati unijeti nikakve financijske podatke tijekom procesa registracije. Ovo će biti potrebno samo kada istekne probno razdoblje.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Pošaljite račun na potvrdu plaćanja:** Ovo vam daje opciju da pošaljete račun nakon plaćanja ili ne. Napomena: korisnici će imati pristup svojoj povijesti plaćanja u dashboardu svog subsite. Ova opcija se ne primjenjuje na Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sustav brojanja računa:** Ovdje možete odabrati ili kod referencije plaćanja ili sekvencijalni sistem brojanja. Ako odlučite koristiti kod referencije plaćanja za svoje račune, ne morate ništa konfigurirati. Ako odlučite koristiti sekvencijalni sistem brojanja, trebat će vam konfigurirati **sljedeći broj računa** (Ovaj broj se koristi kao broj računa za sljedeći račun koji generira sustav. On se povećava za jedan svaki put kada se kreira novi račun. Možete ga promijeniti i spremiti kako biste resetirali sekvencijalni broj računa na određenu vrijednost) i **prefiks broja računa**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Polje broj računa i prefiks broja računa prikazani kada je odabran Sekvencijalni broj -->

## Gdje pronaći gateway-eve:

Možete postaviti payment gateway-eve na istoj stranici (**Ultimate Multisite > Settings > Payments**). Direktno ispod **aktivnih payment gateway-eva**, videćete: _Stripe_, _Stripe_ Checkout, _PayPal_ i _Manual_.

![Sekcija Aktivni Payment Gateway-evi prikazuje Stripe, Stripe Checkout, PayPal i Manual](/img/config/payments-active-gateways.png)

Imamo zasebnu stranicu za svaki payment gateway koji će vas voditi kroz korake konfiguriranja, koju možete pronaći na linkovima ispod.

Možete pregledati i uređivati detalje plaćanja:

![Interfejs za uređivanje plaćanja](/img/admin/payment-edit.png)

Evo kompletnog pregleda stranice za uređivanje plaćanja:

![Kompletan interfejs za uređivanje plaćanja](/img/admin/payment-edit-full.png)

Ovdje je i kompletan pregled postavki payment gateway-eva:

![Kompletna stranica postavki payment gateway-eva](/img/config/settings-payments-gateways-full.png)

**Konfiguriranje Stripe gateway-a**

**Konfiguriranje PayPal gateway-a**** **

**Konfiguriranje ručnih plaćanja**

Sada, ako želite koristiti _WooCommerce_, _GoCardless_ ili _Payfast_ kao svoj payment gateway, trebat će vam **instalirati i konfigurirati njihove add-onove**.

### Kako instalirati WooCommerce add-on:

Razumijemo da su _Stripe_ i _PayPal_ nisu dostupni u nekim zemljama koje ograničavaju ili ometaju Ultimate Multisite korisnike pri efikasnom korištenju našeg plugin-a. Zato smo kreirali add-on koji integrira _WooCommerce_, što je vrlo popularan e-commerce plugin. Programeri širom svijeta su kreirali add-oneove za integraciju različitih payment gateway-eva s njim. Koristili smo to kako bismo proširili payment gateway-eve koje možete koristiti s Ultimate Multisite sustavom za fakturiranje.

**VAŽNO:** Ultimate Multisite: Integracija s WooCommerce zahtijeva da je WooCommerce aktiviran bare na vašoj glavnoj stranici.

Prvo, idite na stranicu dodataka (add-ons). Možete je pronaći idući putem **Ultimate Multisite > Settings**. Trebali biste vidjeti tabelu **Add-ons** (Dodaci). Kliknite na **Check our Add-ons** (Provjerite naše dodatke).

<!-- Screenshot unavailable: Tabela dodataka na lijevoj traci Ultimate Multisite podešavanja s linkom Provjerite naše dodatke -->

Nakon što kliknete na **Check our Add-ons**, preusmjerit ćete se na stranicu dodataka. Tamo možete pronaći sve Ultimate Multisite dodatke. Kliknite na dodatak **Ultimate Multisite: WooCommerce Integration**.

![Stranica dodataka koja prikazuje Ultimate Multisite dodatke uključujući Integraciju s WooCommerceom](/img/addons/addons-page.png)

Otvorit će se prozor s detaljima dodatka. Samo kliknite na **Install Now** (Instaliraj sada).

<!-- Screenshot unavailable: Dialog s detaljima dodatka Ultimate Multisite WooCommerce Integration s gumbom Instaliraj sada -->

Nakon što instalacija bude završena, preusmjerit ćete se na stranicu pluginova. Tamo jednostavno kliknite na **Network Activate** (Aktiviraj mrežu), i dodatak WooCommerce će biti aktiviran na vašoj mreži.

<!-- Screenshot unavailable: Stranica pluginova s linkom Aktiviraj mrežu za dodatak Integracija s WooCommerceom -->

Nakon što ga aktivirate, ako još uvijek nemate instaliran i aktiviran WooCommerce plugin na svojoj web stranici, dobit ćete podsjetnik.

<!-- Screenshot unavailable: Admin obavijest koja podse administratoru da instalira i aktivira WooCommerce plugin -->

Za više informacija o dodatku Integracija s WooCommerceom, **kliknite ovdje**.

### Kako instalirati dodatak GoCardless:

Koraci za instalaciju dodatka _GoCardless_ su gotovo isti kao i za dodatak _WooCommerce_. Idite na stranicu dodataka i odaberite dodatak **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Stranica dodataka s naglašenim Ultimate Multisite GoCardless Gateway dodatkom -->

Otvorit će se prozor za dodatak. Kliknite na **Install Now** (Instaliraj sada).

<!-- Screenshot unavailable: Detaljni prozor za Ultimate Multisite GoCardless Gateway dodatak s gumbom Install Now -->

Nakon što instalacija bude završena, preusmjerit ćete se na stranicu pluginova. Tamo jednostavno kliknite na **Network Activate** (Aktiviraj mrežu), i _GoCardless_ dodatak će biti aktiviran na vašoj mreži.

<!-- Screenshot unavailable: Stranica pluginova s linkom Network Activate za GoCardless Gateway dodatak -->

Da biste saznali kako početi s _GoCardless_ gateway-em, **pročitajte ovaj članak**.

### Kako instalirati dodatak Payfast:

Idite na stranicu dodataka i odaberite dodatak **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Stranica dodataka s naglašenim Ultimate Multisite Payfast Gateway dodatkom -->

Otvorit će se prozor za dodatak. Kliknite na **Install Now** (Instaliraj sada).

<!-- Screenshot unavailable: Detaljni prozor za Ultimate Multisite Payfast Gateway dodatak s gumbom Install Now -->

Nakon što instalacija bude završena, preusmjerit ćete se na stranicu pluginova. Tamo jednostavno kliknite na **Network Activate** (Aktiviraj mrežu), i _Payfast_ dodatak će biti aktiviran na vašoj mreži.

<!-- Screenshot unavailable: Stranica pluginova s linkom Network Activate za Payfast Gateway dodatak -->
