---
title: Konfigurera PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Konfigurera PayPal-betalningsgatewayen (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Du kan aktivera upp till fyra betalningsmetoder på vår sida för betalningsinställningar: Stripe, Stripe Checkout, PayPal och Manuell. I den här artikeln går vi igenom hur du integrerar med **PayPal**.

Precis som Stripe är PayPal ett populärt val för onlinebetalningar, särskilt på WordPress-webbplatser. Den här artikeln visar hur du gör PayPal tillgängligt som betalningsmetod i ditt nätverk.

Observera att du behöver ett **PayPal Business-konto** för att få de API-uppgifter som krävs för den här integrationen.

## Aktivera PayPal i ditt nätverk

För att aktivera PayPal som betalningsmetod i ditt nätverk går du till **Ultimate Multisite > Settings > Payments**-fliken och kryssar i rutan bredvid PayPal.

![Aktivera PayPal bland aktiva betalningsgateways](/img/config/settings-payment-gateways.png)

## Hämta API-uppgifterna för PayPal

När PayPal är aktiverat som betalningsgateway behöver du fylla i fälten för PayPal API **Username**, PayPal API **Password** och PayPal API **Signature**.

Du får dessa uppgifter genom att logga in på ditt PayPal-konto, antingen [Live](https://www.paypal.com/home) eller [Sandbox](https://www.sandbox.paypal.com/home).

(Kom ihåg att du kan använda **sandbox-läget** för att testa betalningar och kontrollera att gatewayen är korrekt konfigurerad. Slå bara på motsvarande inställning.)

![Fält för PayPal API-uppgifter och växlingsknapp för sandbox-läge](/img/config/settings-payment-gateways.png)

Så här begär du API Signature- eller Certificate-uppgifter för ditt PayPal-konto:

  1. Gå till dina [Kontoinställningar](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I avsnittet **API access** klickar du på **Update**.  
![PayPal-kontoinställningar med avsnittet API access](/img/config/settings-payment-gateways.png)

  3. Under **NVP/SOAP API integration (Classic)** klickar du på **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Om du redan har genererat en API Signature eller ett Certificate kommer du till en sida där du hittar dina uppgifter.

     * _**Obs:** Om du uppmanas att verifiera ditt PayPal-konto följer du instruktionerna på skärmen._

  4. Välj _ett_ av följande alternativ och klicka sedan på **Agree and Submit**.

     * **Request API Signature** – Välj detta för API Signature-autentisering.

     * **Request API Certificate** – Välj detta för API Certificate-autentisering.

  5. PayPal genererar dina API-uppgifter enligt följande:  
![PayPal-genererade API-uppgifter](/img/config/settings-payment-gateways.png)

     * **API Signature-uppgifter** inkluderar ett API Username, API Password och en Signature som inte går ut. Dessa värden är dolda som standard av säkerhetsskäl. Klicka på **Show/Hide** för att visa eller dölja dem. När du är klar klickar du på **Done**.

     * **API Certificate-uppgifter** inkluderar ett API Username, API Password och ett Certificate som automatiskt går ut efter tre år. Klicka på **Download Certificate** för att spara API-certifikatet på din dator.

Det var allt – din PayPal-betalningsintegration är klar!

Om du har frågor om PayPal-inställningar kan du besöka PayPals [Hjälpcenter](https://www.paypal.com/br/smarthelp/home).
