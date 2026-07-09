---
title: PayPal nustatymas
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal bramkų nustatymas (v2) {#setting-up-the-paypal-gateway-v2}

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Jūsų mokėjimo nustatyjimo puslapyje galite aktyvuoti iki keturi mokėjimo būdų: Stripe, Stripe Checkout, PayPal ir Manualus. Šiame straipsnyje pateiksime instrukcijas, kaip integruoti su **PayPal**.

Tinkamai kaip ir Stripe, PayPal yra labai populiarus online mokėjimai, ypač WordPress svetainų kontekste. Šis straipsnis pabaigo jums, kaip naudoti PayPal kaip mokėjimo būdą, kuris bus jūsų tinklu prieinamas.

Pagalba, kad gautumėte reikiamas API kredencijas šiai integracijai, turite **PayPal Business paskyrą**.

## PayPal aktyvavimas jūsų tinklu {#enabling-paypal-on-your-network}

Kad įveiktu PayPal kaip prieinamą mokėjimo būdą savo tinklu, eikite į **Ultimate Multisite > Settings > Payments** (Nustatymai > Mokėjimai) ir pažymėkite lauką šalia PayPal.

![PayPal aktyvavimas aktyvijuojamu mokėjimo bramkų](/img/config/settings-payment-gateways.png)

## Naudojant vadiną nustatymo žaizdį (wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 pridėjo vadinį PayPal nustatymo žaidį į mokėjimo bramkų nustatyjimus. Po aktyvuotojo PayPal, naudokite šį žaidįje **Ultimate Multisite > Settings > Payments** pasirinkti, kaip norite sujungti bramkę ir patvirtinti, kokie kredencijai vis dar reikalinga prieš išsaugodami.

Žaizdis palaiko dvi nustatymo būdus:

* **Rodyti kredentales įvedimą rankiniu būdu**: Naudokite šį būdą, jei jau turite PayPal API kredentales, jei jūsų paskyrai nėra pasirinkta OAuth nustatymas arba jei norite kopijuoti kredentales tiesiog iš PayPal. Įveskite API vartotojo vardą (API Username), API slaptažodį (API Password) ir API parašą (API Signature) į PayPal laukus, o tada išsaugokite mokėjimo nustatymus.
* **OAuth jungimo uždaro**: Naudokite šį būdą tik tada, kai OAuth opsinai yra pasiekiami ir įjungti jūsų įrenginiui. Wizard rodo OAuth procesą po funkcijos žymė (feature flag), todėl tinklai be šios žymės tęsiasi naudojant rankinius kredentales įvedimo laukus.

Jei neperkriejote OAuth opsinio wizard'e, užpildykite rankinio kredentales įvedimo procesą iki aiškiau. Gateway veikia su tą pačia PayPal Business API kredentalėmis kaip ir kitose Ultimate Multisite 2.x versijose.

## Kai gauti PayPal API kredentales {#getting-the-paypal-api-credentials}

Kai PayPal bus įjungtas kaip mokėjimo gateway, turėsite užpildyti laukus: **PayPal API Username**, **PayPal API Password** ir **PayPal API Signature**.

Jūs galite gauti šiuose duomenys prisijungiant prie savo [Live](https://www.paypal.com/home) arba [Sandbox](https://www.sandbox.paypal.com/home) paskyros PayPal.

(Atkreipkite dėmesį, kad naudojant **sandbox režimą** galite patestoti mokėjimą ir pamatyti, ar gateway tinkamai nustatytas. Atšaukite atitinkamą sekciją.)

![PayPal API kredentalių laukus ir sandbox režimo įjungimas](/img/config/settings-payment-gateways.png)

Kad užklausytų API parašą arba sertifikato kredentales savo PayPal paskyrai:

  1. Eikite į savo [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. **API access** sekcijoje paspauskite **Update**.
![PayPal Paskyros nustatymai su API prieiga sekcija](/img/config/settings-payment-gateways.png)

3. Pake **Manage API credentials** (Vadykite API kredencijas) nustatymuose **NVP/SOAP API integration (Classic)**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Jei jau pateikėte API Signature arba Sertifikatą, būsite nukreipti į puslapį, kur galite rasti savo kredencijas.

     * _**Pastaba:** Jei jūsų prašys patvirtinti PayPal paskyrą, sekite ekrano instrukcijas._

  4. Pasirinkite **vieną** šių variantų ir spauskite **Agree and Submit** (Sutinku ir pateikiu).

     * **Request API Signature** – Pasirinkite, jei norite gauti API Signature autentifikavimą.

     * **Request API Certificate** – Pasirinkite, jei norite gauti API Sertifikatą.

  5. PayPal generuoja jūsų API kredencijas taip:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** apima API vartotojo vardą (API Username), slaptažodį (API Password) ir Signature, kuri neksiprieta. Šie skaičiai be valdymu yra paslėpti saugumo tikslais. Spauskite **Show/Hide** (Rodyti/Paslėpti), kad juos įjunkite ar išjunkite. Pasibaigę, spauskite **Done** (Atsiprašau).

     * **API Certificate credentials** apima API vartotojo vardą (API Username), slaptažodį (API Password) ir Sertifikatą (Certificate), kuris bevaldomai pasibaigus trijų metų laikotarpiui. Spauskite **Download Certificate** (Atsisiųsti sertifikatą), kad išsaugotumėte API Sertifikatą savo kompiuterio pertrašte.

Tai viskas! Jūsų PayPal mokėjimo integracija yra užbaigta!

Jei turite klausimų dėl PayPal nustatymų, galite susisiekti su PayPal [Help Center](https://www.paypal.com/br/smarthelp/home).
