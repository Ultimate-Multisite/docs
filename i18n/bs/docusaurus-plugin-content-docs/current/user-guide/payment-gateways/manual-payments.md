---
title: Postavljanje ručnih plaćanja
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Postavljanje ručnih plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ručna plaćanja su način da ponudite druge metode plaćanja ako **Stripe** ili **PayPal** nisu dostupni vašim korisnicima. To može biti bankovna doznaka ili transfer na račun, ili bilo koja druga metoda plaćanja koja je lokalno dostupna vašim korisnicima.

## Kako omogućiti ručna plaćanja {#how-to-enable-manual-payments}

Postavljanje ručnog plaćanja je vrlo jednostavno. Samo ga trebate omogućiti pod pristupnicima plaćanja i unijeti detaljne upute o tome kako korisnik treba poslati uplatu.

Prvo idite na **Ultimate Multisite > Postavke > Plaćanja**. Ispod **Pristupnici plaćanja** uključite **Ručno**. Vidjet ćete da će se pojaviti okvir **Upute za plaćanje**.

U ovaj okvir dodajte informacije koje će vašem kupcu biti potrebne za izvršenje plaćanja. To mogu biti podaci o vašem bankovnom računu i vaš email kako bi vam kupac mogao poslati potvrdu o uplati, na primjer.

![Prekidač pristupnika za ručno plaćanje s tekstualnim poljem Upute za plaćanje](/img/config/manual-gateway-expanded.png)

Ovo je interfejs postavki ručnog pristupnika:

![Postavke ručnog pristupnika](/img/config/manual-gateway-settings.png)

Nakon što ga postavite, samo kliknite na **Sačuvaj postavke** i gotovo je. Kada se korisnici registruju na vašu mrežu, vidjet će poruku koja im govori da će dobiti vaše upute za dovršetak kupovine.

![Poruka potvrde registracije koja govori korisniku da će dobiti upute za plaćanje](/img/frontend/registration-manual-notice.png)

Također će dobiti poruku na vašoj stranici **Hvala vam** s vašim uputama za plaćanje.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potvrđivanje ručnih plaćanja {#confirming-manual-payments}

Da biste potvrdili ručno plaćanje, idite na meni **Plaćanja** na lijevoj traci. Tamo možete vidjeti sva plaćanja na vašoj mreži i njihove detalje, uključujući njihov **status**. Ručno plaćanje će uvijek imati status **Na čekanju** dok ga ručno ne promijenite.

![Lista plaćanja koja prikazuje ručno plaćanje na čekanju](/img/admin/payments-list.png)

Uđite na stranicu plaćanja klikom na **referentni kod**. Na ovoj stranici imate sve detalje plaćanja na čekanju, kao što su referentni ID, proizvodi, vremenske oznake i još mnogo toga.

![Stranica detalja plaćanja koja prikazuje referentni kod, proizvode i ukupne iznose](/img/admin/payment-edit.png)

U desnoj koloni možete promijeniti status plaćanja. Promjena na **Završeno** i **uključivanje opcije Aktiviraj članstvo** omogućit će web lokaciju vašeg kupca i njegovo članstvo će biti aktivno.

![Stranica za uređivanje plaćanja sa Statusom postavljenim na Završeno i prekidačem Aktiviraj članstvo](/img/admin/payment-activate-membership.png)
