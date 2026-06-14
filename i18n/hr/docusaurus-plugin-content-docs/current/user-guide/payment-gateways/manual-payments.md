---
title: Postavljanje ručnih plaćanja
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Postavljanje ručnih plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ručna plaćanja su način da ponudite druge metode plaćanja ako **Stripe** ili **PayPal** nisu dostupni za vaše korisnike. To može biti bankovni transfer, virenje ili bilo koja druga metoda plaćanja koja je dostupna vašim korisnicima lokalno.

## Kako omogućiti ručna plaćanja

Postavljanje ručnih plaćanja je vrlo jednostavno. Samo trebate omogućiti to pod payment gateways i unijeti detaljna uputstva kako će korisnik poslati plaćanje.

Prvo, idite na **Ultimate Multisite > Settings > Payments**. Ispod **Payment Gateways**, uključite opciju **Manual**. Primijetit ćete da će se pojaviti polje za **Payment Instructions** (Upute za plaćanje).

Dodajte u ovo polje informacije koje vaš kupac treba da koristi za plaćanje. To mogu biti detalji vašeg bankovnog računa i vaša e-mail adresa kako bi kupac mogao poslati vam potvrdu o uplati, na primjer.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ovo je sučelje za postavke ručnog gatewaya:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nakon što ga postavite, samo kliknite na **Save Settings** (Spremi postavke) i gotovo. Kada se korisnici prijave u vašu mrežu, oni će vidjeti poruku koja im govori da će dobiti vaše uputstva za dovršetak kupovine.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

I također će dobiti poruku na vašoj stranici **Thank You** (Hvala vam) s vašim uputstvima za plaćanje.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrđivanje ručnih plaćanja

Da biste potvrdili ručno plaćanje, idite u meni **Payments** na lijevoj traci. Tamo možete vidjeti sve plaćanja na vašoj mreži i njihove detalje, uključujući njihov **status**. Ručno plaćanje će uvijek imati status **Pending** (Očekuje se) dok ga ručno ne promijenite.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Unesite stranicu za plaćanje klikom na **reference code** (referentni kod). Na ovoj stranici imate sve detalje o čekajućem plaćanju, kao što su reference ID, proizvodi, vremenske oznake i još mnogo toga.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

U desnoj koloni možete promijeniti status plaćanja. Promijenite ga na **Completed** (Završeno) i uključivanjem opcije **Activate Membership** (Aktiviraj članstvo), omogućit ćete vašem klijentskom sajtu i njihovo članstvo će biti aktivno.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
