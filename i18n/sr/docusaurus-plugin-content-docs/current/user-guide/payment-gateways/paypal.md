---
title: Podešavanje PayPal-a
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Podešćenje PayPal Gateway-a (v2) {#setting-up-the-paypal-gateway-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Na stranici podešavanja plaćanja možete aktivirati do četiri načina plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku ćemo videti kako da se integrišete sa **PayPal-om**.

Sobo je kao kod Stripe-a, PayPal veoma popularan za online plaćanja, pogotovo na WordPress sajtovima. Ovaj članak će vas voditi kako da koristite PayPal kao način plaćanja koji je dostupan u vašoj mreži.

Napomena: potrebno je imati **PayPal Business nalog** da biste dobili API kredencijale potrebne za ovu integraciju.

## Aktiviranje PayPala na vašoj mreži {#enabling-paypal-on-your-network}

Da biste omogućili PayPal kao dostupnu opciju plaćanja na svojoj mreži, idite na **Ultimate Multisite > Settings > Payments** tab i čekirajte polje pored PayPal-a.

![Aktiviranje PayPala u aktivnim platnim gateway-evima](/img/config/settings-payment-gateways.png)

## Korišćenje vodiča za podešavanje (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 dodaje vodič za podešavanje PayPala u podešavanjima platnog gateway-a. Nakon što aktivirate PayPal, koristite ovaj vodič na **Ultimate Multisite > Settings > Payments** da izaberete kako želite da povežete gateway i da potvrdite koje kredencijale su vam još potrebne pre nego što sačuvate.

Vodič podržava dva puta za podešavanje:

* **Руска ручно unosanje kredencijala**: Koristite ovaj put kada već imate PayPal API kredencijale, kada nije dostupna podešavanja OAuth za vaš nalog ili kada preferirate da sami kopirate kredencijale iz PayPal-a. Unesite API korisničko ime (API Username), API lozinku (API Password) i API potpis (API Signature) u polja za PayPal, a zatim sačuvajte podešavanja plaćanja.
* **Vrata za povezivanje putem OAuth**: Koristite ovaj put samo kada je opcija OAuth dostupna i omogućena za vaš instalaciju. Wizard prikazuje tok OAuth-a iza feature flag-a, tako da mreže bez tog flag-a nastavljaju da koriste polja za ručno unosanje kredencijala.

Ako ne vidite opciju OAuth u wizardu, završite proces ručnog unosanja kredencijala ispod. Gateway radi sa istim PayPal Business API kredencijalima kao i prethodne verzije Ultimate Multisite 2.x.

## Dobijanje PayPal API kredencijala {#getting-the-paypal-api-credentials}

Kada se PayPal aktivira kao plaćani gateway, moraćete da popunite polja za **API korisničko ime** (PayPal API Username), **API lozinku** (PayPal API Password) i **API potpis** (PayPal API Signature).

Možete dobiti ove podatke tako što ćete se ulogovati na svoj PayPal [Live](https://www.paypal.com/home) ili [Sandbox](https://www.sandbox.paypal.com/home) nalog.

(Zapamtite da možete koristiti **sandbox režim** za testiranje plaćanja i proveravanje da li je gateway ispravno podešen. Samo uključite odgovarajući odeljak.)

![Polja za PayPal API kredencijale i prebacivanje u sandbox režim](/img/config/settings-payment-gateways.png)

Da biste zatražili API potpis ili sertifikat kredencijala za vaš PayPal nalog:

  1. Idite na svoje [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. U sekciji **API access** (Pristup API-ju), kliknite na **Update** (Ažuriraj).
![PayPal Account Settings sa sekcijom za pristup API-ju](/img/config/settings-payment-gateways.png)

3. Pod **NVP/SOAP API integraciju (Classic)**, kliknite na **Manage API credentials** (Upravljanje API kredencijalima).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ako ste već generisali API Signature ili Certificate, preusmerenićete se na stranicu gde možete pronaći svoje kredencijale.

     * _**Napomena:** Ako vas sistem traži da potvrdite svoj PayPal nalog, pratite uputstva koja su prikazana na ekranu._

  4. Izaberite **jednu** od sledećih opcija, a zatim kliknite na **Agree and Submit** (Prihvati i pošalji).

     * **Request API Signature** – Izaberite za autentifikaciju putem API Signatures.

     * **Request API Certificate** – Izaberite za autentifikaciju putem API Certifikata.

  5. PayPal generiše vaše API kredencijale na sledeći način:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature kredencijali** uključuju API Username, API Password i Signature, koja ne istekne. Ove vrednosti su podrazumevano skrivene radi dodatne bezbednosti. Kliknite na **Show/Hide** (Prikaži/Sakrij) da ih uključite ili isključite. Kada završite, kliknite na **Done** (U redu).

     * **API Certificate kredencijali** uključuju API Username, API Password i Certificate, koji se automatski istekne nakon tri godine. Kliknite na **Download Certificate** (Preuzmi sertifikat) da sačuvate API Certificate na desktop.

To je to, vaša integracija plaćanja preko PayPala je završena!

Ako imate bilo kakvih pitanja u vezi podešavanja PayPala, možete se obratiti [PayPal Help Center](https://www.paypal.com/br/smarthelp/home).
