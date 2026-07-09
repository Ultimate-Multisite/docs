---
title: PayPal instellen
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# De PayPal Gateway instellen (v2) {#setting-up-the-paypal-gateway-v2}

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Je kunt tot vier betaalmethoden activeren op onze pagina met betalingsinstellingen: Stripe, Stripe Checkout, PayPal en Handmatig. In dit artikel bekijken we hoe je integreert met **PayPal**.

Net als Stripe wordt PayPal veel gebruikt voor online betalingen, vooral op WordPress websites. Dit artikel begeleidt je bij het gebruik van PayPal als betaalmethode die beschikbaar is op je netwerk.

Let op dat je een **PayPal Business account** nodig hebt om de API-inloggegevens te verkrijgen die nodig zijn voor deze integratie.

## PayPal inschakelen op je netwerk {#enabling-paypal-on-your-network}

Om PayPal in te schakelen als beschikbare betaalmethode op je netwerk, ga je naar het tabblad **Ultimate Multisite > Settings > Payments** en vink je het vakje naast PayPal aan.

![PayPal inschakelen in actieve payment gateways](/img/config/settings-payment-gateways.png)

## De begeleide installatiewizard gebruiken {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 voegt een begeleide PayPal-installatiewizard toe aan de instellingen van de payment gateway. Nadat je PayPal hebt ingeschakeld, gebruik je de wizard op **Ultimate Multisite > Settings > Payments** om te kiezen hoe je de gateway wilt verbinden en te bevestigen welke inloggegevens nog nodig zijn voordat je opslaat.

De wizard ondersteunt twee installatiepaden:

* **Handmatige invoer van inloggegevens**: Gebruik dit pad wanneer je al PayPal API-inloggegevens hebt, wanneer OAuth-installatie niet beschikbaar is voor je account, of wanneer je de inloggegevens liever zelf vanuit PayPal kopieert. Voer de API Username, API Password en API Signature in de PayPal-velden in en sla daarna de betalingsinstellingen op.
* **OAuth-verbindingspoort**: Gebruik dit pad alleen wanneer de OAuth-optie beschikbaar en ingeschakeld is voor je installatie. De wizard toont de OAuth-flow achter een feature flag, zodat netwerken zonder de flag de velden voor handmatige invoer van inloggegevens blijven gebruiken.

Als je de OAuth-optie niet in de wizard ziet, voltooi dan de onderstaande flow voor handmatige invoer van inloggegevens. De gateway werkt met dezelfde PayPal Business API-inloggegevens als eerdere Ultimate Multisite 2.x-releases.

## De PayPal API-inloggegevens verkrijgen {#getting-the-paypal-api-credentials}

Zodra PayPal is ingeschakeld als payment gateway, moet je de velden voor PayPal API **Username**, PayPal API **Password** en PayPal API **Signature** invullen.

Je kunt deze verkrijgen door in te loggen op je PayPal [Live](https://www.paypal.com/home)- of [Sandbox](https://www.sandbox.paypal.com/home)-account.

(Onthoud dat je de **sandbox mode** kunt gebruiken om betalingen te testen en te zien of de gateway correct is ingesteld. Schakel gewoon de bijbehorende sectie in.)

![Velden voor PayPal API-inloggegevens en schakelaar voor sandbox mode](/img/config/settings-payment-gateways.png)

Om API Signature- of Certificate-inloggegevens voor je PayPal-account aan te vragen:

  1. Ga naar je [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Klik in de sectie **API access** op **Update**.
![PayPal Account Settings met API access-sectie](/img/config/settings-payment-gateways.png)

  3. Klik onder **NVP/SOAP API integration (Classic)** op **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Als je al een API Signature of Certificate hebt gegenereerd, word je doorgestuurd naar een pagina waar je je inloggegevens kunt vinden.

     * _**Opmerking:** Als je wordt gevraagd je PayPal-account te verifiëren, volg dan de instructies op het scherm._

  4. Selecteer _een_ van de volgende opties en klik daarna op **Agree and Submit**.

     * **Request API Signature** – Selecteer voor API Signature-authenticatie.

     * **Request API Certificate** – Selecteer voor API Certificate-authenticatie.

  5. PayPal genereert je API-inloggegevens als volgt:
![Door PayPal gegenereerde API-inloggegevens](/img/config/settings-payment-gateways.png)

     * **API Signature-inloggegevens** bevatten een API Username, API Password en Signature, die niet verlopen. Deze waarden zijn standaard verborgen voor extra beveiliging. Klik op **Show/Hide** om ze in en uit te schakelen. Klik op **Done** wanneer je klaar bent.

     * **API Certificate-inloggegevens** bevatten een API Username, API Password en Certificate, die na drie jaar automatisch verloopt. Klik op **Download Certificate** om het API Certificate op je bureaublad op te slaan.

Dat is alles, je PayPal-betalingsintegratie is voltooid!

Als je vragen hebt over PayPal-instellingen, kun je het [Help Center](https://www.paypal.com/br/smarthelp/home) van PayPal raadplegen.
