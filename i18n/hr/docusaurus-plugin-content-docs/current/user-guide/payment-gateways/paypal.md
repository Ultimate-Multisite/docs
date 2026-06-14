---
title: Postavljanje PayPal-a
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Postavljanje PayPal Gatewaya (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Možete aktivirati do četiri načina plaćanja na stranici postavki plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku ćemo vidjeti kako se integrirati s **PayPalom**.

Slično kao i Stripe, PayPal je široko korišten za online plaćanja, pogotovo na WordPress web stranicama. Ovaj članak će vas voditi kako koristiti PayPal kao način plaćanja dostupni u vašoj mreži.

Napomena: trebate imati **PayPal poslovnu račun** kako biste dobili API kredencijale potrebne za ovu integraciju.

## Aktiviranje PayPala na vašoj mreži

Da biste omogućili PayPal kao dostupni način plaćanja na svojoj mreži, idite na karticu **Ultimate Multisite > Settings > Payments** i označite polje pored PayPal-a.

![Aktiviranje PayPala u aktivnim plaćanjima](/img/config/settings-payment-gateways.png)

## Korištenje vodiča za postavljanje (guided setup wizard)

Ultimate Multisite 2.10.0 dodaje vodič za postavljanje PayPala u postavke plaćanja. Nakon što aktivirate PayPal, koristite ovaj vodič na **Ultimate Multisite > Settings > Payments** kako biste odabrali kako želite povezati gateway i potvrdili koje kredencijale su vam još potrebne prije spremanja.

Vodič podržava dva puta za postavljanje:

* **Ručno unos kredencijala**: Koristite ovaj put kada već imate PayPal API kredencijale, kada OAuth podešavanje nije dostupno za vašu imalat, ili kada preferirate da sami kopirate kredencijale iz PayPal-a. Unesite API korisničko ime (API Username), API lozinku (API Password) i API potpis (API Signature) u polja za PayPal, a zatim spremite postavke plaćanja.
* **Vrata za OAuth povezivanje**: Koristite ovaj put samo kada je opcija OAuth dostupna i omogućena za vaš instalaciju. Wizard prikazuje protok OAuth-a iza fitur flag-a, tako da mreže bez tog flag-a nastavljaju koristiti polja za ručni unos kredencijala.

Ako ne vidite opciju OAuth u wizardu, dovršite postupak ručnog unosa kredencijala ispod. Gateway radi s istim PayPal Business API kredencijalima kao i prethodne verzije Ultimate Multisite 2.x.

## Dobijanje PayPal API kredencijala

Kada se PayPal aktivira kao plaćanje gateway, morat ćete popuniti polja za **API korisničko ime** (Username), **API lozinku** (Password) i **API potpis** (Signature) PayPal API-a.

Možete dobiti ove podatke prijavljujući se na svoj [Live](https://www.paypal.com/home) ili [Sandbox](https://www.sandbox.paypal.com/home) račun.

(Sjetite se da možete koristiti **sandbox način** za testiranje plaćanja i provjeriti je li gateway ispravno postavljen. Samo uključite odgovarajući odjeljak.)

![Polja za PayPal API kredencijale i prebacivanje sandbox načina](/img/config/settings-payment-gateways.png)

Za zahtjev API potpisa ili certifikat credencijala za vaš PayPal račun:

  1. Idite na [Postavke računa](https://www.paypal.com/businessmanage/account/accountAccess).

  2. U odjeljku **API pristup** (API access), kliknite na **Ažuriraj** (Update).
![Postavke PayPal računa s odjeljkom za API pristup](/img/config/settings-payment-gateways.png)

3. Pod **NVP/SOAP API integraciju (Classic)**, kliknite na **Manage API credentials** (Upravljanje ovisnostima za API).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ako ste već generirali API Signature ili Certificate, preusmjerite se na stranicu gdje možete pronaći svoje podatke.

     * _**Napomena:** Ako vas sistem zamoli za provjeru PayPal računa, slijedite uputstva koja su prikazana na ekranu._

  4. Odaberite **jednu** od sljedećih opcija, a zatim kliknite na **Agree and Submit** (Prihvaćam i podnosim).

     * **Request API Signature** – Odaberite za autentifikaciju putem API Signatures.

     * **Request API Certificate** – Odaberite za autentifikaciju putem API Certifikat.

  5. PayPal generira vaše API podatke na sljedeći način:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentijalni podaci** uključuju API Username, API Password i Signature, koji ne isteku. Ove vrijednosti su po defaultu skrivene radi dodatne sigurnosti. Kliknite na **Show/Hide** (Prikaži/Sakrij) da ih možete uključiti ili isključiti. Kada završite, kliknite na **Done** (U redu).

     * **API Certificate credentijalni podaci** uključuju API Username, API Password i Certificate, koji se automatski isteku nakon tri godine. Kliknite na **Download Certificate** (Preuzmi certifikat) da biste sačuvali API Certifikat na svom računalu.

Samo to, vaša integracija plaćanja putem PayPal-a je gotova!

Ako imate bilo kakvih pitanja u vezi s postavkama PayPal-a, možete se obratiti [PayPal Help Centeru](https://www.paypal.com/br/smarthelp/home).
