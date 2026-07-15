---
title: Primanje uplata
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Primanje uplata (v2)

_**VAŽNA NAPOMENA: Ovaj se članak odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite ima ugrađen sustav članstva i naplate. Kako bi naš sustav naplate funkcionirao, integrirali smo najčešće pristupnike plaćanja koji se koriste u e-trgovini. Zadani pristupnici plaćanja u Ultimate Multisite su _Stripe_ , _PayPal_ i Ručno plaćanje. Također možete koristiti _WooCommerce_ , _GoCardless_ i _Payfast_ za primanje uplata instaliranjem njihovih odgovarajućih dodataka.

## Osnovne postavke {#basic-settings}

Bilo koji od ovih pristupnika plaćanja možete konfigurirati u postavkama plaćanja za Ultimate Multisite. Možete ih pronaći odlaskom na **Ultimate Multisite izbornik > Postavke > Plaćanja.**

![Stranica postavki plaćanja u Ultimate Multisite koja prikazuje panel Plaćanja](/img/config/payments-settings-page.png)

Prije nego što postavite svoj pristupnik plaćanja, pogledajte osnovne postavke plaćanja koje možete konfigurirati:

**Prisili automatsku obno** **vu:** Ovo će osigurati da se plaćanje automatski ponavlja na kraju svakog obračunskog ciklusa, ovisno o učestalosti naplate koju je korisnik odabrao.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 provjerava ima li aktivni pristupnik vjerodajnicu za obnovu koja se može ponovno koristiti prije spremanja ponavljajućeg članstva s omogućenom automatskom obnovom. Vjerodajnica za obnovu može biti pretplata pristupnika, ugovor o naplati, spremljeni vault token ili ekvivalentan način plaćanja koji se može ponovno koristiti. Ako pristupnik prijavi da ne postoji upotrebljiva vjerodajnica, Ultimate Multisite sprema članstvo, ali isključuje automatsku obnovu i bilježi stanje nedostajuće vjerodajnice kako bi administrator ili tijek podrške mogao zatražiti od kupca ponovnu autorizaciju plaćanja prije datuma obnove.

To sprječava da članstvo izgleda kao da se automatski obnavlja kada pristupnik može naplatiti samo jednokratna plaćanja. Dodaci za pristupnike trebali bi potvrditi da ponavljajuće naplate spremaju vjerodajnicu koja se može ponovno koristiti, posebno kada pristupnik podržava i jednokratnu naplatu i vault/pretplatničke načine plaćanja.

**Dopusti probna razdoblja bez načina** **plaćanja:** Kada je ova opcija omogućena, vaš klijent neće morati dodavati nikakve financijske podatke tijekom postupka registracije. To će biti potrebno tek nakon isteka probnog razdoblja.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Pošalji račun nakon potvrde plaćanja:** Ovo vam daje opciju hoćete li poslati račun nakon plaćanja ili ne. Imajte na umu da će korisnici imati pristup svojoj povijesti plaćanja u Dashboardu svog podmjesta. Ova se opcija ne odnosi na Ručni pristupnik.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Shema numeriranja računa:** Ovdje možete odabrati referentni kod plaćanja ili shemu uzastopnog broja. Ako za svoje račune odaberete koristiti referentni kod plaćanja, ne morate ništa konfigurirati. Ako odaberete koristiti shemu uzastopnog broja, morat ćete konfigurirati **sljedeći broj računa** (Taj će se broj koristiti kao broj računa za sljedeći račun generiran u sustavu. Povećava se za jedan svaki put kada se izradi novi račun. Možete ga promijeniti i spremiti kako biste uzastopni broj računa vratili na određenu vrijednost) i **prefiks broja računa.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gdje pronaći pristupnike: {#where-to-find-the-gateways}

Pristupnike plaćanja možete postaviti na istoj stranici ( **Ultimate Multisite > Postavke > Plaćanja**). Odmah ispod **aktivni pristupnici plaćanja** , moći ćete vidjeti: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ i _Ručno_.

![Odjeljak Aktivni pristupnici plaćanja s popisom Stripe, Stripe Checkout, PayPal i Ručno](/img/config/payments-active-gateways.png)

Imamo poseban članak za svaki pristupnik plaćanja koji će vas voditi kroz korake njegova postavljanja, a možete ih pronaći na poveznicama u nastavku.

Možete pregledavati i uređivati pojedinosti plaćanja:

![Sučelje za uređivanje plaćanja](/img/admin/payment-edit.png)

Evo punog prikaza stranice za uređivanje plaćanja:

![Puno sučelje za uređivanje plaćanja](/img/admin/payment-edit-full.png)

Evo također punog prikaza postavki pristupnika plaćanja:

![Puna stranica postavki pristupnika plaćanja](/img/config/settings-payments-gateways-full.png)

**Postavljanje Stripe pristupnika**

**Postavljanje PayPal pristupnika**** **

**Postavljanje ručnih plaćanja**

Sada, ako želite koristiti _WooCommerce_ , _GoCardless_ ili _Payfast_ kao svoj pristupnik plaćanja, morat ćete **instalirati i konfigurirati njihove dodatke**.

### Kako instalirati WooCommerce dodatak: {#how-to-install-the-woocommerce-add-on}

Razumijemo da _Stripe_ i _PayPal_ nisu dostupni u nekim zemljama, što ograničava ili otežava korisnicima Ultimate Multisite učinkovitu upotrebu našeg plugina. Zato smo izradili dodatak za integraciju _WooCommerce,_ koji je vrlo popularan plugin za e-trgovinu. Programeri diljem svijeta izradili su dodatke za integraciju različitih pristupnika plaćanja s njim. Iskoristili smo to kako bismo proširili pristupnike plaćanja koje možete koristiti sa sustavom naplate Ultimate Multisite.

_**VAŽNO:** Ultimate Multisite: WooCommerce Integration zahtijeva da WooCommerce bude aktiviran barem na vašoj glavnoj web-stranici._

Najprije idite na stranicu dodataka. Možete je pronaći odlaskom na **Ultimate Multisite > Postavke**. Trebali biste vidjeti tablicu **Dodaci**. Kliknite na **Provjerite naše dodatke**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nakon klika na **Provjerite naše dodatke** , bit ćete preusmjereni na stranicu dodataka. Ovdje možete pronaći sve Ultimate Multisite dodatke. Kliknite na dodatak **Ultimate Multisite: WooCommerce Integration**.

![Stranica dodataka s popisom Ultimate Multisite dodataka, uključujući WooCommerce Integration](/img/addons/addons-page.png)

Pojavit će se prozor s pojedinostima dodatka. Samo kliknite na **Instaliraj sada**.

<!-- Snimka zaslona nije dostupna: dijaloški okvir s pojedinostima dodatka Ultimate Multisite WooCommerce Integration s gumbom Instaliraj sada -->

Nakon što instalacija završi, bit ćete preusmjereni na stranicu dodataka. Ovdje samo kliknite na **Aktiviraj na mreži** i WooCommerce dodatak bit će aktiviran na vašoj mreži.

<!-- Snimka zaslona nije dostupna: stranica dodataka s poveznicom Aktiviraj na mreži za dodatak WooCommerce Integration -->

Nakon aktivacije, ako još uvijek nemate WooCommerce plugin instaliran i aktiviran na svojem web-mjestu, primit ćete podsjetnik.

<!-- Snimka zaslona nije dostupna: administratorska obavijest koja podsjeća administratora da instalira i aktivira WooCommerce plugin -->

Da biste pročitali više o dodatku WooCommerce Integration, **kliknite ovdje**.

### Kako instalirati GoCardless dodatak: {#how-to-install-the-gocardless-add-on}

Koraci za instaliranje dodatka _GoCardless_ gotovo su isti kao i za dodatak _WooCommerce_. Idite na stranicu dodataka i odaberite dodatak **Ultimate Multisite: GoCardless Gateway**.

<!-- Snimka zaslona nije dostupna: stranica dodataka s istaknutim dodatkom Ultimate Multisite GoCardless Gateway -->

Pojavit će se prozor dodatka. Kliknite na **Instaliraj sada**.

<!-- Snimka zaslona nije dostupna: dijaloški okvir s pojedinostima dodatka Ultimate Multisite GoCardless Gateway s gumbom Instaliraj sada -->

Nakon što instalacija završi, bit ćete preusmjereni na stranicu dodataka. Ovdje samo kliknite na **Aktiviraj na mreži** i dodatak _GoCardless_ bit će aktiviran na vašoj mreži.

<!-- Snimka zaslona nije dostupna: stranica dodataka s poveznicom Aktiviraj na mreži za dodatak GoCardless Gateway -->

Da biste saznali kako započeti s pristupnikom _GoCardless_, **pročitajte ovaj članak**.

### Kako instalirati Payfast dodatak: {#how-to-install-the-payfast-add-on}

Idite na stranicu dodataka i odaberite dodatak **Ultimate Multisite: Payfast Gateway**.

<!-- Snimka zaslona nije dostupna: stranica dodataka s istaknutim dodatkom Ultimate Multisite Payfast Gateway -->

Pojavit će se prozor dodatka. Kliknite na **Instaliraj sada.**

<!-- Snimka zaslona nije dostupna: dijaloški okvir s pojedinostima dodatka Ultimate Multisite Payfast Gateway s gumbom Instaliraj sada -->

Nakon što instalacija završi, bit ćete preusmjereni na stranicu dodataka. Ovdje samo kliknite na **Aktiviraj na mreži** i dodatak _Payfast_ bit će aktiviran na vašoj mreži.

<!-- Snimka zaslona nije dostupna: stranica dodataka s poveznicom Aktiviraj na mreži za dodatak Payfast Gateway -->
