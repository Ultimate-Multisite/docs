---
title: Upravljanje plaćanjima i računima
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Upravljanje plaćanjima i računima

## Postavke za plaćanja

Prije nego što počnete primati plaćanja, trebat će vam postaviti sve podatke vezane uz plaćanje. Idite na **Ultimate Multisite → Settings** i kliknite na karticu **Payment**.

![Plaćanje postavkama tab](/img/admin/settings-payments-top.png)

Evo kompletnog pregleda stranice za postavke plaćanja:

![Plaćanje postavkama cijela stranice](/img/admin/settings-payments-full.png)

### Opće opcije za plaćanja

U općim postavkama možete konfigurirati:

- **Valutu** — Valutu koja se koristi kao podrazumevana valuta za transakcije
- **Poziciju valute** — Gdje se pojavljuje simbol valute (prije/nakon iznosa)

![Plaćanje gateway postavke](/img/admin/settings-payments-options.png)

### Plaćanja gateway-ji

Ultimate Multisite podržava više plaćanja gateway-ja. Možete omogućiti i konfigurirati svaki od njih s kartice za plaćanja.

![Konfiguracija plaćanja gateway-a](/img/admin/settings-payments-gateways.png)

Dostupni gateway-ji uključuju:

- **Stripe** — Plačanje putem kreditne kartice preko Stripe-a
- **PayPal** — PayPal plaćanja
- **Manual** — Za offline ili prilagođeno obračunavanje plaćanja

Svaki gateway ima svoj odjeljak za konfiguraciju gdje unosite API ključe i druge postavke.

![Dodatne postavke gateway-a](/img/admin/settings-payments-gateways-2.png)

### Sandbox način rada (Sandbox Mode)

Možete omogućiti **Sandbox Mode** kako biste testirali integraciju plaćanja prije nego što krenete u produkciju. Kada je sandbox mode aktivan, neće se vršiti nikakva stvarnih naplate.

## Pregled plaćanja

Idite na stranicu **Payments** pod Ultimate Multisite da vidite sve transakcije kroz vašu mrežu.

![Lista plaćanja](/img/admin/payments-list.png)

Možete filtrirati plaćanja po statusu (završeno, u obradi, neuspješno, vraćeno) i pretraživati specifične transakcije.

Kliknite na plaćanje kako biste vidjeli sve detalje, uključujući stavke, povezane članstva, informacije o kupcu i podatke o platnom gatewayu.

## Računi (Invoices)

Ultimate Multisite može automatski generirati račune za plaćanja. Možete prilagoditi šablon računa i format brojanja izravno u postavkama plaćanja.

Opcije za prilagođavanje računa uključuju:

- **Naziv i adresu tvrtke** koji se prikazuje na računima
- **Format i redoslijed brojanja** računa
- **Logo** koji se prikazuje u zaglavlju računa
- **Prilagodbeni tekst u podnožju** za uvjete, napomene ili pravne informacije

Da biste prilagodili šablon računa, idite na **Ultimate Multisite → Settings → Payment** i potražite postavke vezane uz račune.
