---
title: Nastavitve PayPal-a
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Uporaba PayPal vgateya (v2)

_**POMEMBNO: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Na strani nastavitev plačil naših plačilnih nastavitv lahko aktivirate do štirih metod plačanja: Stripe, Stripe Checkout, PayPal in Ručno (Manual). V tem članku bomo videli, kako se integrirati z **PayPalom**.

Kot je tudi pri Stripeu, PayPal je široko uporabljen za spletne plačbe, zlasti na WordPress spletnih strani. Ta članek vam bo vodil, kako uporabiti Paypala kot možnost plačanja, ki je na vaših omrežjih na voljo.

Opazite, da potrebujete **PayPal poslovno račun** (PayPal Business account), da bi dobili API podatke, ki jih potrebuje za to integracijo.

## Omogočanje Paypala na vašem omrežju {#enabling-paypal-on-your-network}

Da bi omogočili PayPal kot možnost plačanja na vašem omrežju, gre do **Ultimate Multisite > Settings > Payments** in označite polje ob strani PayPal.

![Omogočanje Paypala v aktivnih plačilnih vgatevah](/img/config/settings-payment-gateways.png)

## Uporaba vodnega asistenta za nastavitve (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 dodaja vodni asistent za nastavitve Paypala v nastavitve plačilne vgateve. Po tem ko aktivirate Paypala, uporabite vodni asistent na **Ultimate Multisite > Settings > Payments**, da izberete kako želite povezati vgatevijo in potrdite, kakšne podatke še potrebujejo pred shranjevanjem.

Asistent podpira dve načini nastavitve:

* **Ručno vnos podatkov za identiteto (Manual credential entry)**: Uporabite to pot, če že imate PayPal API podatke, ko ni na voljo nastavitve OAuth za vaš račun ali če previdno želite kopirati podatke iz PayPal. V polja PayPal vnesite API **Username**, API **Password** in API **Signature**, nato pa shranite nastavitve plačanja.
* **Vrata povezave OAuth (OAuth connection gate)**: Uporabite to pot le ko je možnost OAuth na voljo in aktivna za vašo instalacijo. Wizard prikazuje tok OAuthja z uporabo feature flag, zato mreže brez tega flag uporabljajo polja za ručni vnos podatkov za identiteto.

Če ne vidite možnosti OAuth v wizardu, dokončajte postopek ručne vnosov podatkov za identiteto na spodaj. Gateway deluje z tistimi sličnimi PayPal Business API podatki kot pri prejšnjih verzij Ultimate Multisite 2.x.

## Dobavo PayPal API podatkov za identiteto {#getting-the-paypal-api-credentials}

Ko je PayPal aktiv, potrebujete, da vnesete polja za PayPal API **Username**, PayPal API **Password** in PayPal API **Signature**.

To lahko dobite, se prijavljanjem na svoj [Live](https://www.paypal.com/home) ali [Sandbox](https://www.sandbox.paypal.com/home) račun.

(Opomnimo, da lahko v **sandbox načinu** preizkusite plačanja in vidite, ali je gateway pravilno nastavljen. Samo ga preklicate na odgovarjajočo sekcijo.)

![Polja za PayPal API podatke in preprek za sandbox mode](/img/config/settings-payment-gateways.png)

Za zahtevo API Signature ali sertifikatov podatkov za vaš PayPal račun:

  1. Pojdite v svoje [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. V sekciji **API access** kliknite na **Update**.

3. Pod **NVP/SOAP API integracijo (Classic)**, kliknite na **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Če ste že ustvarili API Signature ali Certificate, boste preusmerjeni na stran, kjer lahko najdete svoje podatke.

     * _**Opomba:** Če vas bo zahtevala potrditev vašega PayPal računa, sledite navodilom na obrazcu._

  4. Izberite **enako** od naslednjih možnosti in nato kliknite na **Agree and Submit**.

     * **Request API Signature** – Izberite za autentikacijo z API Signaturo.

     * **Request API Certificate** – Izberite za autentikacijo z API Certificate.

  5. PayPal generira vaše API podatke kot so navedeni:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature podatki** vključujejo API Username, API Password in Signature, ki ne poteka na zastarevanje. Ti vrednosti so po zadebljanih varnosti opomogljene skrita. Kliknite na **Show/Hide**, da jih lahko vklopite ali izklopite. Ko boste končali, kliknite na **Done**.

     * **API Certificate podatki** vključujejo API Username, API Password in Certificate, ki se samodejno zastare po treh letih. Kliknite na **Download Certificate**, da shranite API Certificate na svojem desktopu.

To je to, vaš PayPal plačilni integracijski del je končan!

Če imate kakšne vprašanja glede nastavitv PayPal, lahko uporabite [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal Help Center.
