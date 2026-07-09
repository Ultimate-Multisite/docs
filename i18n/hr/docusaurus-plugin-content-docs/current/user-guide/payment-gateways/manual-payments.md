---
title: Postavljanje ručnih plaćanja
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Postavljanje ručnih plaćanja (v2)

_**VAŽNA NAPOMENA: Ovaj se članak odnosi na Ultimate Multisite verziju 2.x.**_

Ručna plaćanja način su da ponudite druge načine plaćanja ako **Stripe** ili **PayPal** nisu dostupni vašim korisnicima. To može biti doznaka ili bankovni prijenos ili bilo koji drugi način plaćanja koji je lokalno dostupan vašim korisnicima.

## Kako omogućiti ručna plaćanja

Postavljanje ručnog plaćanja vrlo je jednostavno. Samo ga trebate omogućiti pod pristupnicima za plaćanje i unijeti detaljne upute o tome kako korisnik treba poslati uplatu.

Najprije idite na **Ultimate Multisite > Postavke > Plaćanja**. Ispod **Pristupnici za plaćanje** uključite **Ručno**. Vidjet ćete da će se pojaviti okvir **Upute za plaćanje**.

U ovaj okvir dodajte informacije koje će vašem kupcu trebati za izvršenje plaćanja. To mogu biti podaci o vašem bankovnom računu i vaša e-mail adresa kako bi vam kupac mogao poslati potvrdu o uplati, na primjer.

![Prekidač za ručni pristupnik za plaćanje s tekstnim područjem Upute za plaćanje](/img/config/manual-gateway-expanded.png)

Ovo je sučelje postavki ručnog pristupnika:

![Postavke ručnog pristupnika](/img/config/manual-gateway-settings.png)

Nakon postavljanja samo kliknite **Spremi postavke** i gotovo je. Kada se korisnici registriraju na vašu mrežu, vidjet će poruku koja im govori da će primiti vaše upute za dovršetak kupnje.

![Poruka potvrde registracije koja korisniku govori da će primiti upute za plaćanje](/img/frontend/registration-manual-notice.png)

Također će primiti poruku na vašoj stranici **Hvala** s vašim uputama za plaćanje.

<!-- Snimka zaslona nije dostupna: stranica Hvala prikazuje upute za plaćanje nakon naplate -->

## Potvrđivanje ručnih plaćanja

Da biste potvrdili ručno plaćanje, idite na izbornik **Plaćanja** na lijevoj traci. Tamo možete vidjeti sva plaćanja na svojoj mreži i njihove pojedinosti, uključujući njihov **status**. Ručno plaćanje uvijek će imati status **Na čekanju** dok ga ručno ne promijenite.

![Popis plaćanja koji prikazuje ručno plaćanje na čekanju](/img/admin/payments-list.png)

Uđite na stranicu plaćanja klikom na **referentni kod**. Na ovoj stranici imate sve pojedinosti plaćanja na čekanju, kao što su referentni ID, proizvodi, vremenske oznake i drugo.

![Stranica pojedinosti plaćanja koja prikazuje referentni kod, proizvode i ukupne iznose](/img/admin/payment-edit.png)

U desnom stupcu možete promijeniti status plaćanja. Promjena statusa u **Dovršeno** i **uključivanje opcije Aktiviraj članstvo** omogućit će web-mjesto vašeg kupca i njegovo će članstvo biti aktivno.

![Stranica uređivanja plaćanja sa statusom postavljenim na Dovršeno i uključenom opcijom Aktiviraj članstvo](/img/admin/payment-activate-membership.png)
