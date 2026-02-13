---
title: PayPal instellen
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Het Instellen van de PayPal Gateway (v2)

_**BELANGRIJK: Deze artikel verwijst naar Ultimate Multisite versie 2.x.**_

Je kunt tot vier betaalmethoden activeren op onze betaalinstellingenpagina: Stripe, Stripe Checkout, PayPal en Handmatig. In dit artikel bekijken we hoe je integreert met **PayPal**.

Net als Stripe wordt PayPal veel gebruikt voor online betalingen, vooral op WordPress-websites. Dit artikel begeleidt je hoe je PayPal als betaalmethode beschikbaar maakt op je netwerk.

Let op dat je een **PayPal Business account** nodig hebt om de API-gegevens te verkrijgen die nodig zijn voor deze integratie.

## PayPal inschakelen op je netwerk

Om PayPal als beschikbare betaalmethode op je netwerk in te schakelen, ga je naar **Ultimate Multisite > Settings > Payments** tab en vink je het vakje naast PayPal aan.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## De PayPal API-gegevens verkrijgen

Zodra PayPal is ingeschakeld als betaalgateway, moet je de velden voor PayPal API **Username**, PayPal API **Password** en PayPal API **Signature** invullen.

Je kunt dit verkrijgen door in te loggen op je PayPal [Live](https://www.paypal.com/home) of [Sandbox](https://www.sandbox.paypal.com/home) account.

_(Onthoud dat je de **sandbox mode** kunt gebruiken om betalingen te testen en te zien of de gateway correct is ingesteld. Schakel gewoon de overeenkomstige sectie in.)_

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Om API Signature of Certificate-gegevens voor je PayPal-account aan te vragen:

1. Ga naar je [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

2. In de sectie **API access**, klik op **Update**.  
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Onder **NVP/SOAP API integration (Classic)**, klik op **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

   * Als je al een API Signature of Certificate hebt gegenereerd, word je doorgestuurd naar een pagina waar je je gegevens kunt vinden.
   * _**Opmerking:** Als je wordt gevraagd om je PayPal-account te verifiëren, volg dan de instructies op het scherm._

4. Selecteer _één_ van de volgende opties, en klik vervolgens op **Agree and Submit**.

   * **Request API Signature** – Selecteer voor API Signature authenticatie.
   * **Request API Certificate** – Selecteer voor API Certificate authenticatie.

5. PayPal genereert je API-gegevens als volgt:  
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

   * **API Signature credentials** bevatten een API Username, API Password en Signature, die niet verlopen. Deze waarden zijn standaard verborgen voor extra beveiliging. Klik op **Show/Hide** om ze in en uit te schakelen. Wanneer je klaar bent, klik op **Done**.
   * **API Certificate credentials** bevatten een API Username, API Password en Certificate, die automatisch na drie jaar verloopt. Klik op **Download Certificate** om het API Certificate op je desktop op te slaan.

Dat is het, je PayPal-betalingsintegratie is voltooid!

Als je vragen hebt over PayPal-instellingen, kun je verwijzen naar PayPal's [Help Center](https://www.paypal.com/br/smarthelp/home).
