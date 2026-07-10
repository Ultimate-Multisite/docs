---
title: Upravljanje plaćanjima i računima
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Upravljanje plaćanjima i računima {#managing-payments-and-invoices}

## Postavke plaćanja {#payment-settings}

Prije nego što počnete primati plaćanja, morat ćete podesiti postavke vezane za plaćanja. Idite na **Ultimate Multisite → Settings** i kliknite na karticu **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Ovo je pregled stranice postavki plaćanja:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opće opcije plaćanja {#general-payment-options}

U općim postavkama možete podesiti:

- **Currency** — Zadana valuta koja se koristi za transakcije
- **Currency Position** — Gdje se valutni simbol pojavljuje (prije/poslije iznosa)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Plačilne kapije (Payment Gateways) {#payment-gateways}

Ultimate Multisite podržava više plaćilnih kapija. Možete aktivirati i podesiti svaku od njih s kartice Postavke plaćanja.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Dostupne kapije uključuju:

- **Stripe** — Plaćanja kreditnom karticom putem Stripe-a
- **PayPal** — Plaćanja putem PayPal-a
- **Manual** — Za plaćanje koje se obavlja van linije ili na drugi način

Svaka kapija ima vlastiti odjeljak za konfiguraciju gdje unosite API ključeve i druge postavke.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox režim {#sandbox-mode}

Možete aktivirati **Sandbox Mode** kako biste testirali integraciju plaćanja prije nego što je pokrenete u stvarnom okruženju. Kada je sandbox režim aktivan, neće se izvršiti stvarni naplati.

## Pregled plaćanja {#viewing-payments}

Idite na stranicu **Payments** unutar Ultimate Multisite kako biste vidjeli sve transakcije na cijeloj vašoj mreži.

![Payments list](/img/admin/payments-list.png)

Možete filtrirati plaćanja po statusu (zaključano, u čekanju, neuspješno, povraćeno) i pretraživati specifične transakcije.

Kliknite na plaćanje kako biste vidjeli sve detalje, uključujući stavke računa, povezano članstvo, informacije o klijentu i podatke o plaćalnoj kapiji.

## Računi (Invoices) {#invoices}

Ultimate Multisite može automatski generirati račune za plaćanja. Možete prilagoditi predložak računa i format brojanja iz Postavki plaćanja.

Opcije za prilagođavanje računa uključuju:

- **Naziv i adresa tvrtke** prikazani na računima
- Format i sekvenca **brojanja računa**
- **Logo** prikazan u zaglavlju računa
- **Prilagođeni tekst u podnožju** za uvjete, napomene ili pravne informacije

Da biste prilagodili predložak računa, idite na **Ultimate Multisite → Settings → Payment** i potražite postavke vezane za račune.
