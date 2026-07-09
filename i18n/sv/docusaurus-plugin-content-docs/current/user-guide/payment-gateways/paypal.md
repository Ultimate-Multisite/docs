---
title: Konfigurera PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Konfigurera PayPal-gatewayen (v2) {#setting-up-the-paypal-gateway-v2}

_**VIKTIGT MEDDELANDE: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Du kan aktivera upp till fyra betalningsmetoder på vår sida för betalningsinställningar: Stripe, Stripe Checkout, PayPal och Manuell. I den här artikeln kommer vi att se hur du integrerar med **PayPal**.

Precis som Stripe används PayPal i stor utsträckning för onlinebetalningar, särskilt på WordPress-webbplatser. Den här artikeln guidar dig i hur du använder PayPal som en betalningsmetod tillgänglig i ditt nätverk.

Observera att du behöver ha ett **PayPal Business-konto** för att få de API-uppgifter som behövs för denna integration.

## Aktivera PayPal i ditt nätverk {#enabling-paypal-on-your-network}

För att aktivera PayPal som en tillgänglig betalningsmetod i ditt nätverk går du till fliken **Ultimate Multisite > Settings > Payments** och markerar rutan bredvid PayPal.

![Aktivera PayPal i aktiva betalningsgateways](/img/config/settings-payment-gateways.png)

## Använda den guidade konfigurationsguiden {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 lägger till en guidad PayPal-konfigurationsguide i inställningarna för betalningsgateway. När du har aktiverat PayPal använder du guiden på **Ultimate Multisite > Settings > Payments** för att välja hur du vill ansluta gatewayen och bekräfta vilka uppgifter som fortfarande behövs innan du sparar.

Guiden stöder två konfigurationsvägar:

* **Manuell inmatning av uppgifter**: Använd den här vägen när du redan har PayPal API-uppgifter, när OAuth-konfiguration inte är tillgänglig för ditt konto, eller när du föredrar att kopiera uppgifter från PayPal själv. Ange API-användarnamn, API-lösenord och API-signatur i PayPal-fälten och spara sedan betalningsinställningarna.
* **OAuth-anslutningsgrind**: Använd den här vägen endast när OAuth-alternativet är tillgängligt och aktiverat för din installation. Guiden visar OAuth-flödet bakom en funktionsflagga, så nätverk utan flaggan fortsätter att använda fälten för manuell inmatning av uppgifter.

Om du inte ser OAuth-alternativet i guiden slutför du flödet för manuell inmatning av uppgifter nedan. Gatewayen fungerar med samma PayPal Business API-uppgifter som tidigare Ultimate Multisite 2.x-versioner.

## Hämta PayPal API-uppgifter {#getting-the-paypal-api-credentials}

När PayPal har aktiverats som betalningsgateway behöver du fylla i fälten för PayPal API **Username**, PayPal API **Password** och PayPal API **Signature**.

Du kan få detta genom att logga in på ditt PayPal [Live](https://www.paypal.com/home)- eller [Sandbox](https://www.sandbox.paypal.com/home)-konto.

(Kom ihåg att du kan använda **sandbox-läget** för att testa betalningar och se om gatewayen är korrekt konfigurerad. Slå bara på motsvarande avsnitt.)

![Fält för PayPal API-uppgifter och växling för sandbox-läge](/img/config/settings-payment-gateways.png)

För att begära API Signature- eller Certificate-uppgifter för ditt PayPal-konto:

  1. Gå till dina [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I avsnittet **API access** klickar du på **Update**.
![PayPal Account Settings med API access-avsnitt](/img/config/settings-payment-gateways.png)

  3. Under **NVP/SOAP API integration (Classic)** klickar du på **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Om du redan har genererat en API Signature eller ett Certificate kommer du att omdirigeras till en sida där du kan hitta dina uppgifter.

     * _**Obs:** Om du uppmanas att verifiera ditt PayPal-konto följer du instruktionerna på skärmen._

  4. Välj _ett_ av följande alternativ och klicka sedan på **Agree and Submit**.

     * **Request API Signature** – Välj för API Signature-autentisering.

     * **Request API Certificate** – Välj för API Certificate-autentisering.

  5. PayPal genererar dina API-uppgifter enligt följande:
![PayPal-genererade API-uppgifter](/img/config/settings-payment-gateways.png)

     * **API Signature-uppgifter** inkluderar ett API Username, API Password och Signature, som inte upphör att gälla. Dessa värden är dolda som standard för ökad säkerhet. Klicka på **Show/Hide** för att slå dem på och av. När du är klar klickar du på **Done**.

     * **API Certificate-uppgifter** inkluderar ett API Username, API Password och Certificate, som upphör att gälla automatiskt efter tre år. Klicka på **Download Certificate** för att spara API Certificate på ditt skrivbord.

Det var allt, din PayPal-betalningsintegration är klar!

Om du har några frågor om PayPal-inställningar kan du läsa PayPals [Help Center](https://www.paypal.com/br/smarthelp/home).
