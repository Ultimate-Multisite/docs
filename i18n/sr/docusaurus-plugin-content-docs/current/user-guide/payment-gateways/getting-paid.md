---
title: Dobijanje plaće
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Zaradanje plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite ima ugrađeni sistem za članstvo i fakturisanje. Da bi naš sistem za fakturisanje funkcionisao, integrisali smo najčešće korišćene platne gatewaye koje se koriste u e-trgovini. Podrazumevani platni gateway-i u Ultimate Multisite su _Stripe_, _PayPal_ i Ručno plaćanje (Manual Payment). Takođe možete koristiti _WooCommerce_, _GoCardless_ i _Payfast_ da biste primali plaćanja instaliranjem njihovih odgovarajućih dodataka.

## Osnovne postavke

Možete konfigurisati bilo koji od ovih platnih gateway-a pod Ultimate Multisite podešavanjima za plaćanje. Možete doći do njih idući na **Ultimate Multisite meni > Settings (Podešavanja) > Payments (Plaćanja).**

![Stranica sa podešavanjima plaćanja u Ultimate Multisite koja prikazuje panel za plaćanja](/img/config/payments-settings-page.png)

Pre nego što podesite svoj platni gateway, pogledajte osnovne postavke plaćanja koje možete konfigurisati:

**Force auto-renew (Forciranje automatskog obnove):** Ovo će osigurati da će plaćanje automatski ponavljati se na kraju svakog ciklusa fakturisanja u zavisnosti od frekvencije fakturisanja koju je korisnik izabrao.

<!-- Screenshot unavailable: Podešavanje prekidačem Force Auto-Renew na stranici sa podešavanjima plaćanja -->

Ultimate Multisite v2.13.0 proverava da li aktivan gateway ima ponovljivu kredencijalnu informaciju za obnovu pre nego što sačuva ponavljajuće članstvo sa aktivnom automatskom obnovom (auto-renewal). Kredencijalna informacija za obnovu može biti pretplata na gateway, ugovornje odredbe o fakturisanju, sačuvan token skladišta ili ekvivalentna ponovljiva metoda plaćanja. Ako gateway prijavi da ne postoji korisna kredencijalna informacija, Ultimate Multisite sačuva članstvo ali isključi automatsku obnovu i zabeleži stanje nedostatka kredencijala tako da administrator ili tok za podršku mogu tražiti od klijenta ponovno autorizaciju plaćanja pre datuma obnove.

Ovo sprečava da se članstvo automatski obnavlja kada gateway može prihvatiti samo jednokratne plaćanja. Dodaci za gateway treba da potvrde da li se ponavljaju plaćanja čuvaju kao ponovljiva kredencijalna informacija, pogotovo kada gateway podržava i jednorazno prihvatanje (one-time capture) i načine plaćanja sa skladištem/pretplatom (vaulted/subscription payment modes).

**Dozvola probnih perioda bez metode plaćanja:** Sa ovom opcijom uključenu, vaš klijent neće morati da unosi nikakva finansijska informacija tokom procesa registracije. Ovo će biti potrebno samo kada se probni period završi.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Slanje fakture na potvrdu plaćanja:** Ovo vam daje opciju da pošaljete fakturu ili ne nakon plaćanja. Napomena: korisnici će imati pristup istoriji plaćanja u dashboardu svog subsite. Ova opcija se ne primenjuje na Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sistem za brojanje faktura:** Ovde možete izabrati ili kod referentnog plaćanja (payment reference code) ili sistem sekvencijalnih brojeva. Ako odlučite da koristite kod referentnog plaćanja za svoje fakture, ne morate ništa konfigurirati. Ako odlučite da koristite sistem sekvencijalnih brojeva, moraćete da konfigurišete **sledeći broj fakture** (Ovaj broj će se koristiti kao broj fakture za sledeću generisanu fakturu u sistemu. On se povećava za jedan svaki put kada se kreira nova faktura. Možete ga promeniti i sačuvati kako biste resetovali sekvencijalni broj faktura na određenu vrednost) i **prefiks broja fakture**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

![Polje broja računa i prefiksa broja računa prikazani kada je odabrana Sekvencijalna broj](https://example.com/img/config/payments-invoice-sequential.png)

## Gde pronaći gateway-eve:

Možete postaviti payment gateways na istoj stranici (**Ultimate Multisite > Settings > Payments**). Direktno ispod **aktivnih payment gateway-eva**, videćete: _Stripe_, _Stripe_ Checkout, _PayPal_ i _Manual_.

![Sekcija Aktivni Payment Gateways sa listom Stripe, Stripe Checkout, PayPal i Manual](https://example.com/img/config/payments-active-gateways.png)

Imamo poseban članak za svaki payment gateway koji će vas voditi kroz korake podešavanja, a možete ga pronaći na linkovima ispod.

Možete pregledati i uređivati detalje plaćanja:

![Interfejs za uređivanje plaćanja](https://example.com/img/admin/payment-edit.png)

Evo kompletnog pregleda stranice za uređivanje plaćanja:

![Kompletan interfejs za uređivanje plaćanja](https://example.com/img/admin/payment-edit-full.png)

Ovde je i kompletan pregled podešavanja payment gateway-eva:

![Kompletna stranica podešavanja payment gateway-eva](https://example.com/img/config/settings-payments-gateways-full.png)

**Podešavanje Stripe gateway-a**

**Podešavanje PayPal gateway-a**** **

**Podešavanje ručnih plaćanja**

Sada, ako želite da koristite _WooCommerce_, _GoCardless_ ili _Payfast_ kao svoj payment gateway, moraćete da **instalirate i konfigurišete njihove add-on-ove**.

### Kako instalirati WooCommerce add-on:

Razumemo da su _Stripe_ i _PayPal_ dostupni u nekim zemljama koje ograničavaju ili otežavaju korišćenje naše Ultimate Multisite plugin-a. Zato smo kreirali add-on koji integriše _WooCommerce_, koji je veoma popularan e-commerce plugin. Programeri širom sveta su kreirali add-oneove za integraciju različitih payment gateway-eva sa njim. Koristili smo ovo da proširimo payment gateway-eve koje možete koristiti sa Ultimate Multisite sistemom za fakturisanje.

**VAŽNO:** Integracija Ultimate Multisite sa WooCommerce zahteva da je WooCommerce aktiviran bare na vašem glavnom sajtu.

Prvo, idite na stranicu dodataka (add-ons). Možete je pronaći tako što ćete otići na **Ultimate Multisite > Settings**. Trebalo bi da vidite tabelu **Add-ons** (Dodaci). Kliknite na **Check our Add-ons** (Proverite naše dodaci).

<!-- Screenshot unavailable: Tabela dodataka u bočnoj traci Ultimate Multisite podešavanja sa linkom Proverite naše dodaci -->

Nakon što kliknete na **Check our Add-ons**, preusmerićete se na stranicu dodataka. Ovde možete pronaći sve Ultimate Multisite dodake. Kliknite na dodatak **Ultimate Multisite: WooCommerce Integration**.

![Stranica dodataka koja prikazuje Ultimate Multisite dodake uključujući Integraciju sa WooCommerceom](/img/addons/addons-page.png)

Otvorit će se prozor sa detaljima dodatka. Samo kliknite na **Install Now** (Instaliraj sada).

<!-- Screenshot unavailable: Prozor sa detaljima dodatka Ultimate Multisite WooCommerce Integration sa dugmetom Instaliraj sada -->

Nakon što instalacija bude završena, preusmerićete se na stranicu pluginova. Ovde jednostavno kliknite na **Network Activate** (Aktiviraj mrežu), i dodatak za WooCommerce će biti aktiviran na vašoj mreži.

<!-- Screenshot unavailable: Stranica pluginova sa linkom Aktiviraj mrežu za dodatak Integracija sa WooCommerceom -->

Nakon što ga aktivirate, ako i dalje nemate instaliran i aktiviran WooCommerce plugin na svom sajtu, dobićete podsetnik.

<!-- Screenshot unavailable: Admin obaveštenje koje podseća administratoru da instalira i aktivira WooCommerce plugin -->

Za više informacija o dodetku Integracija sa WooCommerceom, **kliknite ovde**.

### Kako instalirati dodatak GoCardless:

Корак за инсталацију аддона _GoCardless_ је практично и с истом као и за аддон _WooCommerce_. Идите на страницу аддоновских програма (add-ons page) и изберете аддон **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Страница аддонова са означеним Ultimate Multisite GoCardless Gateway аддоном -->

Појавиће се прозорец за аддон. Кликните на **Install Now** (Инсталирај сада).

<!-- Screenshot unavailable: Диалог детаља Ultimate Multisite GoCardless Gateway аддона са дубом Install Now бутоном -->

Након што се инсталација заврши, бићете преусмерени на страницу плагинова (plugins page). Овде само кликните на **Network Activate** и аддон _GoCardless_ ће бити активиран на вашој мрежи.

<!-- Screenshot unavailable: Страница плагинова са линком Network Activate за GoCardless Gateway аддон -->

Да бисте научили како да почнете са _GoCardless_ штетивом (gateway), **прочитајте овај чланак**.

### Како инсталирати аддон Payfast:

Идите на страницу аддонова и изберите аддон **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Страница аддонова са означеним Ultimate Multisite Payfast Gateway аддоном -->

Појавиће се прозорец за аддон. Кликните на **Install Now** (Инсталирај сада).

<!-- Screenshot unavailable: Диалог детаља Ultimate Multisite Payfast Gateway аддона са дубом Install Now бутоном -->

Након што се инсталација заврши, бићете преусмерени на страницу плагинова. Овде само кликните на **Network Activate** и аддон _Payfast_ ће бити активиран на вашој мрежи.

<!-- Screenshot unavailable: Страница плагинова са линком Network Activate за Payfast Gateway аддон -->
