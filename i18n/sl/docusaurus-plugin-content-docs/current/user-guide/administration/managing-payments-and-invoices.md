---
title: Upravljanje plačil in računov
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Upravljanje plačil in računovanjem

## Nastavitve za plačilo {#payment-settings}

Preden začnete prejemati plačila boste morali nastavitviti podatke povezane z plačilom. Navigirajte do **Ultimate Multisite → Settings** in kliknite na tab **Payment**.

![Plačilna nastavitva](/img/admin/settings-payments-top.png)

Tukaj je celoten pregled strani za nastavitve plačila:

![Celota stran za nastavitve plačila](/img/admin/settings-payments-full.png)

### Splošne opcije za plačilo {#general-payment-options}

V splošnih nastavitvah lahko konfigurirate:

- **Valuta** — Predhodna valuta, ki se uporablja pri transakcijah
- **Postavitev valute** — Kje se pojavlja simbol valute (pred/za zneskom)

![Nastavitve plačilne brambe](/img/admin/settings-payments-options.png)

### Plačilne brambe (Payment Gateways) {#payment-gateways}

Ultimate Multisite podpira več različnih plačilnih bramb. Vsako lahko vključite in konfigurirate iz tabe za nastavitve plačila.

![Konfiguracija plačilne brambe](/img/admin/settings-payments-gateways.png)

Na voljo so:

- **Stripe** — Plačilo kartic preko Stripe
- **PayPal** — Plačilo preko PayPalja
- **Manual (Ručno)** — Za neprehodno ali prilagojeno obdelavo plačil

Vsaka bramba ima svoj oddel za konfiguracijo, kjer vnesete API ključe in druge nastavitve.

![Dodatne nastavitve brambe](/img/admin/settings-payments-gateways-2.png)

### Sandbox način (Sandbox Mode) {#sandbox-mode}

Lahko vključite **Sandbox Mode**, da preizkusite svoje integracijo plačil pred live uporabo. Ko je sandbox mode aktiven, ne bodo opravljene resnične stroške.

## Pregled plačil {#viewing-payments}

Navigirajte do strani **Payments** pod Ultimate Multisite, da vidite vse transakcije po vseh vaših omrežjih.

![Seznam plačil](/img/admin/payments-list.png)

Lahko lahko filtrirate plačila po stanju (končano, čakanje, neuspešno, vračeno) in iskanje specifičnih transakcij.

Kliknite na plačilo, da vidite njegove podrobnosti, vključno z seznamom artiklov, povezanimi naročninami, informacijami o stranki in podatki o plačilni bramni vrati (payment gateway).

## Računi {#invoices}

Ultimate Multisite lahko samodejno generira račune za plačila. V nastavitvah plačil lahko prilagodite šablon računa in format številk.

Opcije za prilagajanje shablona računa vključujejo:

- **Ime in naslov podjetja** prikazani na računi
- **Format in sekvenca številk računa**
- **Logo**, ki se prikazuje na zaglavju računa
- **Splošni tekst za stopnje, opombe ali pravne informacije** v spodnjem delu

Da bi prilagodili šablon računa, gre do **Ultimate Multisite → Settings → Payment** in poiščite nastavitve povezane z računom.
