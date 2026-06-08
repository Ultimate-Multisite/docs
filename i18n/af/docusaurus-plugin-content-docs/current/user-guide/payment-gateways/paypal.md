---
title: Installeer PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Opstel van die PayPal Gateway (v2)

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Jy kan tot vier betalingsmetodes op ons betalingsinstellingsblad aktiveer: Stripe, Stripe Checkout, PayPal en Handmatig. In hierdie artikel sal ons kyk hoe om te integreer met **PayPal**.

Net soos Stripe, word PayPal wyd vir aanlyn betalingsgebruik, veral op WordPress-webwerwe. Hierdie artikel sal jou lei oor hoe om PayPal as 'n betalingsmetode te gebruik wat beskikbaar is op jou netwerk.

Onthou dat jy 'n **PayPal Business-rekening** benodig om die API-gegevens te verkry wat vir hierdie integrasie nodig is.

## PayPal op jou netwerk aktiveer

Om PayPal as 'n beskikbare betalingsmetode op jou netwerk te aktiveer, gaan na **Ultimate Multisite > Settings > Payments** en trek die blokieie langs PayPal aan.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Gebruik die begeleide opstelwenaar

Ultimate Multisite 2.10.0 voeg 'n begeleide PayPal-opstelwenaar by die betalingsgateway-instellings. Nadat jy PayPal aktiveer, gebruik die wenaar op **Ultimate Multisite > Settings > Payments** om te kies hoe jy die gateway wil verbind en om te bevestig watter gegevens nog nodig is voordat jy spaar.

Die wenaar ondersteun twee opstelpaaie:

* **Handmatige invoer van gegevens (Manual credential entry)**: Gebruik hierdie paai wanneer jy reeds PayPal API-gegevens het, wanneer OAuth-opstel nie vir jou rekening beskikbaar is nie, of wanneer jy verkies om die gegevens self van PayPal te kopieer. Voer die API Username, API Password, en API Signature in die PayPal velde in, en spaar dan die betalingsinstellings.
* **OAuth-verbindingspoort (OAuth connection gate)**: Gebruik hierdie paai slegs wanneer die OAuth-opsie beskikbaar en geaktiveer is vir jou installasie. Die wenaar wys die OAuth-vloei agter 'n funksie-vlag, sodat netwerke sonder die vlag voortgaan om die handmatige invoer van gegevens velde te gebruik.

As jy die OAuth-opsie nie in die wenaar sien nie, voltooi dan die handmatige invoer van gegevens-proses hieronder. Die gateway werk met dieselfde PayPal Business API-gegevens as vorige Ultimate Multisite 2.x-uitgawes.

## Die PayPal API-gegevens verkry

Sodra PayPal as 'n betalingsgateway geaktiveer is, sal jy die velde vir PayPal API **Username**, PayPal API **Password** en PayPal API **Signature** moet invul.

Jy kan dit kry deur in jou PayPal [Live](https://www.paypal.com/home) of [Sandbox](https://www.sandbox.paypal.com/home) rekening aan te meld.

(Onthou dat jy die **sandbox-modus** kan gebruik om betalings te toets en te sien of die gateway korrek opgestel is. Skakel net die ooreenstemmende afdeling aan.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Om API Signature of Sertifikaat-gegevens vir jou PayPal-rekening aan te vra:

  1. Gaan na jou [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Klik in die **API access** afdeling op **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. Onder **NVP/SOAP API integration (Classic)**, klik op **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * As jy reeds 'n API Signature of Sertifikaat gegenereer het, sal jy na 'n bladsy herlei word waar jy jou gegevens kan vind.

     * _**Let Wel:** Indien jy gevra word om jou PayPal-rekening te verifieer, volg dan die op skerm getoonde instruksies._

  4. Kies _een_ van die volgende opsies, en klik dan op **Agree and Submit**.

     * **Request API Signature** – Kies vir API Signature-wagwoordbeveiliging.

     * **Request API Certificate** – Kies vir API Sertifikaat-wagwoordbeveiliging.

  5. PayPal genereer jou API-gegevens soos volg:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature-gegevens** sluit 'n API Username, API Password, en Signature in, wat nie verloopt nie. Hierdie waardes word standaard verberg vir ekstra sekuriteit. Klik op **Show/Hide** om dit aan en af te skakel. Wanneer jy klaar is, klik op **Done**.

     * **API Sertifikaat-gegevens** sluit 'n API Username, API Password, en Sertifikaat in, wat outomaties na drie jaar verloopt. Klik op **Download Certificate** om die API Sertifikaat op jou skootblad te stoor.

Dit is dit, jou PayPal-betalingsintegrasie is voltooi!

As jy enige vrae het rakende PayPal-instellings, kan jy verwys na PayPal se [Help Center](https://www.paypal.com/br/smarthelp/home).
