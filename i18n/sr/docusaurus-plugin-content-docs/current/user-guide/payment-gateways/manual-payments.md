---
title: Podešavanje ručnih plaćanja
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Podešćenje ručnih plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ručna plaćanja su način da ponudite druge metode plaćanja ako **Stripe** ili **PayPal** nisu dostupni za vaše korisnike. Može biti virenje, bankovni transfer ili bilo koja druga metoda plaćanja dostupna vašim korisnicima lokalno.

## Kako omogućiti ručna plaćanja

Podešavanje ručnih plaćanja je veoma jednostavno. Samo treba da ga uključite pod payment gateways i unesete detaljna uputstva kako će korisnik poslati plaćanje.

Prvo, idite na **Ultimate Multisite > Settings > Payments**. Ispod **Payment Gateways**, uključite opciju **Manual**. Doći će vam do prozora za **Payment Instructions** (Uputstva za plaćanje).

Unesite u ovaj prozor informacije koje vaš kupac treba da koristi za plaćanje. To mogu biti detalji vašeg bankovnog računa i vaš e-mail tako da korisnik može poslati vam potvrdu o uplati, na primer.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Evo interfejsa podešavanja ručnog gateway-a:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nakon što ga podesite, samo kliknite na **Save Settings** (Sačuvaj postavke) i gotovo je. Kada se korisnici prijave u vašu mrežu, dobiće poruku koja im govori da će dobiti vaše uputstva za obavljanje kupovine.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Takođe, dobiće poruku na vašoj stranici **Thank You** (Hvala vam) sa vašim uputstvima za plaćanje.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrđivanje ručnih plaćanja

Da biste potvrdili ručno plaćanje, idite u meni **Payments** na levom panelu. Tamo možete videti sve plaćanja na vašoj mreži i njihove detalje, uključujući njihov **status**. Ručno plaćanje će uvek imati status **Pending** (Očekuje se) dok ga vi ručno ne promenite.

![Lista plaćanja koja prikazuje čekajuće ručno plaćanje](/img/admin/payments-list.png)

Upišite stranicu za plaćanje klikom na **reference code**. Na ovoj stranici imate sve detalje o čekajućem plaćanju, kao što su reference ID, proizvodi, vremenske oznake i još mnogo toga.

![Stranica sa detaljima plaćanja koja prikazuje referentni kod, proizvode i ukupne iznose](/img/admin/payment-edit.png)

U desnoj koloni možete promeniti status plaćanja. Promenom na **Completed** (Završeno) i uključivanjem opcije **Activate Membership** (Aktiviraj članstvo) omogućićete slajder vašeg klijentskog sajta i njihov membership će biti aktivan.

![Stranica za uređivanje plaćanja sa Status postavljen na Completed i preklopom Activate Membership](/img/admin/payment-activate-membership.png)
