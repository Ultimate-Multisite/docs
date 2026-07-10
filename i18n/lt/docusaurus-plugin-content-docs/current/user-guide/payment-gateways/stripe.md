---
title: Stripe nustatymas
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe bramai (v2) nustatymas {#setting-up-the-stripe-gateway-v2}

_**SVIRTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Jūs galite aktyvuoti iki keturi mokėjimo būdų savo mokėjimų nustatymų puslapyje: Stripe, Stripe Checkout, PayPal ir Manualus. Šiame straipsnyje pateiksime, kaip integruoti su **Stripe**.

## Stripe įjungimas {#enabling-stripe}

Kad Stripe tiktų naudoti kaip mokėjimo būdas jūsų tinkluose, eikite į **Ultimate Multisite > Settings > Payments** ir pažymėkite šį mygtuką (toggle) prie **Stripe** arba **Stripe Checkout** laukimoje „Active Payment Gateways“ sekcijoje.

![Stripe įjungimas aktyviose mokėjimo būdadeis](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Šis būdas rodo vietą įdėti kredito kortelės numerį during checkout (pameistymo procesą).

![Stripe įtrauktas kredito kortelės laukas during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Šis būdas nukrepus customer (klientą) į Stripe Checkout puslapį during checkout.

![Stripe Checkout nukreipimo puslapis during checkout](/img/config/settings-payment-gateways.png)

### Gaukite savo Stripe API raktus {#setting-up-stripe-webhook}

Kai Stripe bus įjungtas kaip mokėjimo būdas, turėsite užpildyti laukus **Stripe Publishable Key** ir **Stripe Secret Key**. Jūs galite gauti šiuose duomenys prisijungiant prie savo Stripe paskyros.

_**Pastaba:** Jūs galite aktyvuoti **Sandbox mode**, kad patestėtumėte, ar mokėjimo būdas veikia._

![Stripe API raktų laukai ir sandbox mode mygtukas](/img/config/settings-payment-gateways.png)

Jūsų Stripe dashboard'e spauskite **Developers** dešinėje viršuje, o tada **API Keys** kairėje meniu.

![Stripe dashboard Developers sekcija su API raktais](/img/config/settings-payment-gateways.png)

Galite naudoti arba ne naudoti **Test Data** (jei norite patikrint, ar integracija veikia jūsų produktivejame svetainėje). Šį nustatymą galite pakeisti išjungiant **Viewing test data** (Peržiūrėti testinius duomenis) mygtuką.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Nuskopirkite vertę iš laukų **Publishable key** (Publikavimo klavutė) ir **Secret key** (Slapta klavutė), iš laiko **Token**, ir įkleiskite ją į Ultimate Multisite Stripe Gateway laukus. Tada spauskite, kad pateiktumėte **Save Changes** (Išsaugoti pakeitimus).

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook nustatymas

Stripe siunčia webhook įvykius, kurie pranešami Ultimate Multisite kiekvienai kartą, kai įvyksta įvykis jūsų **stripe paskyroje**.

Spauskite **Developers** (Programatoriai), o tada pasirinkite elementą **Webhooks** (Webhookai) iš kairės meniu. Tada dešinėje pusėje spauskite **Add endpoint** (Pridėti endpointą) *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Jums reikalinga **Endpoint URL** (Endpoint URL) *.* Ultimate Multisite automatiškai generuoja endpointo URL, kurį galite rasti tiesiog po laiko **Webhook Listener URL** (Webhook priėmimo URL) lauko lauke sekcijoje **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Nuskopirkite** endpointo URL ir **įkleiskite** jį į Stripe **Endpoint URL** (Endpoint URL) lauką.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Ką daryti toliau – pasirinkti **Event** (Įvykį) *.* Šioje opsijono metu jums visai reikia pažymėti lauką **Select all events** (Pasirinkti visus įvykius) ir spauskite, kad pridėtumėte įvykius. Po to spauskite **Add Endpoint** (Pridėti endpointą), kad išsaugoti pakeitimus.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tai jau viskas – jūsų Stripe mokėjimo integracija yra užbaigta!
