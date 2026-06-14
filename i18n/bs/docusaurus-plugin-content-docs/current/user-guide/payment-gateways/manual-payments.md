---
title: Podešavanje ručnih plaćanja
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Postavljanje ručnih plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ručna plaćanja su način da ponudite druge metode plaćanja ako vašima korisnicima nisu dostupne **Stripe** ili **PayPal**. To može biti bankovni ili telegrafski transfer ili bilo koja druga metoda plaćanja dostupna vašim korisnicima na lokalnom nivou.

## Kako omogućiti ručna plaćanja

Postavljanje ručnih plaćanja je vrlo jednostavno. Samo morate ga omogućiti pod plaćanjima i unijeti detaljna uputstva o tome kako korisnik treba da izvrši plaćanje.

Prvo, idite na **Ultimate Multisite > Settings > Payments**. Ispod **Payment Gateways**, prebacite **Manual** na uključeno. Vidjet ćete da se pojavi kutija **Payment Instructions**.

U ovu kutiju dodajte informacije koje će vaš kupac trebati za plaćanje. To mogu biti detalji vašeg bankovnog računa i vaš e-mail, kako bi kupac mogao poslati potvrdu plaćanja, na primjer.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Evo interfejsa za podešavanje ručne kapije:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nakon podešavanja, samo kliknite na **Save Settings** i gotovo je. Kada se korisnici registruju na vašu mrežu, videće poruku koja ih obavještava da će dobiti vaše uputstvo za dovršavanje kupovine.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Takođe će dobiti poruku na vašoj stranici **Thank You** sa vašim uputstvima za plaćanje.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrđivanje ručnih plaćanja

Da biste potvrdili ručno plaćanje, idite na meni **Payments** na lijevoj traci. Tamo možete vidjeti sva plaćanja na vašoj mreži i njihove detalje, uključujući njihov **status**. Ručno plaćanje će uvijek imati status **Pending** sve dok ga ručno ne promijenite.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Pristupite stranici plaćanja klikom na **reference code**. Na ovoj stranici imate sve detalje o plaćanju u čekanju, kao što su ID reference, proizvodi, vremenske oznake i više.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Na desnoj koloni, možete promijeniti status plaćanja. Promjena statusa na **Completed** i prebacivanje opcije **Activate Membership** će omogućiti sajt vašem kupcu, a članstvo će mu biti aktivno.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
