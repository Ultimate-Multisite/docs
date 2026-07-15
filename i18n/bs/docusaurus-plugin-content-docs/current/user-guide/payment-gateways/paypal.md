---
title: Podešavanje PayPal-a
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Postavljanje PayPal Gateway-a (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Na stranici za postavke plaćanja možete aktivirati do četiri načina plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku, pogledat ćemo kako se integrisati sa **PayPal-om**.

Kao i Stripe, PayPal se široko koristi za online plaćanja, posebno na WordPress sajtovima. Ovaj članak će vam usmeriti kako koristiti PayPal kao način plaćanja dostupan na vašoj mreži.

Napomena: Morate imati **PayPal Business račun** kako biste dobili API vjerodajnice potrebne za ovu integraciju.

## Omogućavanje PayPal-a na vašoj mreži {#enabling-paypal-on-your-network}

Da biste omogućili PayPal kao dostupan način plaćanja na vašoj mreži, idite na **Ultimate Multisite > Settings > Payments** i označite polje pored PayPal-a.

![Omogućavanje PayPal-a u aktivnim gateway-ima za plaćanje](/img/config/settings-payment-gateways.png)

## Korištenje vođenog asistenta za postavljanje {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 dodaje vođeni PayPal asistent za postavke gateway-a za plaćanje. Nakon što omogućite PayPal, koristite asistent na **Ultimate Multisite > Settings > Payments** kako biste odabrali kako želite da povežete gateway i potvrdili koje su vjerodajnice i dalje potrebne prije spremanja.

Asistent podržava dva puta postavljanja:

* **Ručno unos vjerodajnica**: Koristite ovaj put kada već imate PayPal API vjerodajnice, kada OAuth postavljanje nije dostupno za vaš račun, ili kada preferirate da sami kopirate vjerodajnice iz PayPal-a. Unesite API Username, API Password i API Signature u polja PayPal-a, a zatim sačuvajte postavke plaćanja.
* **OAuth konekciona kapija**: Koristite ovaj put samo kada je opcija OAuth dostupna i omogućena za vašu instalaciju. Asistent prikazuje OAuth tok iza *feature flag*-a, tako da mreže bez tog *flag*-a nastavljaju koristiti polja za ručni unos vjerodajnica.

Ako ne vidite opciju OAuth u asistentu, završite proces ručnog unosa vjerodajnica ispod. Gateway radi sa istim PayPal Business API vjerodajnicama kao i prethodne Ultimate Multisite 2.x verzije.

## Dohvaćanje PayPal API vjerodajnica {#getting-the-paypal-api-credentials}

Nakon što je PayPal omogućen kao gateway za plaćanje, bit će vam potrebno popuniti polja za PayPal API **Username**, PayPal API **Password** i PayPal API **Signature**.

Možete ih dobiti prijavom na svoj PayPal [Live](https://www.paypal.com/home) ili [Sandbox](https://www.sandbox.paypal.com/home) račun.

(Zapamtite da možete koristiti **sandbox režim** za testiranje plaćanja i provjeru je li gateway ispravno postavljen. Samo uključite odgovarajući odjeljak.)

![Polja za PayPal API vjerodajnice i prekidač sandbox režima](/img/config/settings-payment-gateways.png)

Da biste zatražili API Signature ili Certificate vjerodajnice za svoj PayPal račun:

  1. Idite na [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. U odjeljku **API access**, kliknite **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. Pod **NVP/SOAP API integration (Classic)**, kliknite **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ako ste već generisali API Signature ili Certificate, bit ćete preusmjereni na stranicu gdje možete pronaći svoje vjerodajnice.

     * _**Napomena:** Ako vas traže da potvrdite svoj PayPal račun, slijedite uputstva na ekranu._

  4. Odaberite _jednu_ od sljedećih opcija, a zatim kliknite **Agree and Submit**.

     * **Request API Signature** – Odaberite za API Signature autentifikaciju.

     * **Request API Certificate** – Odaberite za API Certificate autentifikaciju.

  5. PayPal generiše vaše API vjerodajnice na sljedeći način:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature vjerodajnice** uključuju API Username, API Password i Signature, koji ne istežu. Ove vrijednosti su podrazumijevano skrivene radi dodatne sigurnosti. Kliknite **Show/Hide** da ih uključite i isključite. Kada završite, kliknite **Done**.

     * **API Certificate vjerodajnice** uključuju API Username, API Password i Certificate, koji automatski istežu nakon tri godine. Kliknite **Download Certificate** da sačuvate API Certificate na svoju radnu površinu.

To je sve, vaša PayPal integracija plaćanja je završena!

Ako imate bilo kakvih pitanja u vezi sa PayPal postavkama, možete se osvrnuti na PayPalov [Help Center](https://www.paypal.com/br/smarthelp/home).
