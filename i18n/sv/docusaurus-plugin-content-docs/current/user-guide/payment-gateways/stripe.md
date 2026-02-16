---
title: Konfigurera Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Konfigurera Stripe som betalgateway (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Du kan aktivera upp till fyra betalmetoder på vår sida för betalinställningar: Stripe, Stripe Checkout, PayPal och Manuell. I den här artikeln går vi igenom hur du integrerar med **Stripe**.

## Aktivera Stripe

För att aktivera Stripe som tillgänglig betalgateway på ditt nätverk går du till **Ultimate Multisite > Settings > Payments** och bockar i reglaget bredvid **Stripe** eller **Stripe Checkout** under sektionen Active Payment Gateways.

![Aktivera Stripe under aktiva betalgatewayer](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Med den här metoden visas ett fält där kunden kan ange sitt kortnummer direkt i kassan.

![Stripe-fält för kreditkort i kassan](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Med den här metoden skickas kunden vidare till en Stripe Checkout-sida under betalningen.

![Stripe Checkout-sida vid betalning](/img/config/settings-payment-gateways.png)

Hämta dina Stripe API-nycklar

När Stripe är aktiverad som betalgateway behöver du fylla i fälten för **Stripe Publishable Key** och **Stripe Secret Key**. Du hittar dessa genom att logga in på ditt Stripe-konto.

_**Obs:** Du kan aktivera **Sandbox mode** för att testa om betalmetoden fungerar._

![Fält för Stripe API-nycklar och reglage för sandboxläge](/img/config/settings-payment-gateways.png)

I din Stripe-panel klickar du på **Developers** uppe i högra hörnet och sedan på **API Keys** i vänstermenyn.

![Stripe-panelens Developers-sektion med API Keys](/img/config/settings-payment-gateways.png)

Du kan antingen använda **Test Data** (för att testa om integrationen fungerar på din produktionssajt) eller inte. Ändra detta genom att växla reglaget **Viewing test data**.

![Reglaget Viewing test data i Stripe](/img/config/settings-payment-gateways.png)

Kopiera värdena från **Publishable key** och **Secret key** i kolumnen **Token** och klistra in dem i Ultimate Multisite Stripe Gateway-fälten. Klicka sedan på **Save Changes**.

![Värden för Stripes publishable och secret key](/img/config/settings-payment-gateways.png)

![Klistra in Stripe-nycklar i Ultimate Multisite-inställningarna](/img/config/settings-payment-gateways.png)

## Konfigurera Stripe Webhook

Stripe skickar webhook-händelser som meddelar Ultimate Multisite varje gång något händer på **ditt Stripe-konto**.

Klicka på **Developers** och välj sedan **Webhooks** i vänstermenyn. Klicka därefter på **Add endpoint** på höger sida.

![Stripes Webhooks-sida med knappen Add endpoint](/img/config/settings-payment-gateways.png)

Du behöver en **Endpoint URL**. Ultimate Multisite genererar automatiskt en endpoint-URL som du hittar direkt under fältet **Webhook Listener URL** i sektionen **Ultimate Multisite Stripe Gateway**.

![Fältet Webhook Listener URL i Stripe gateway-inställningarna](/img/config/settings-payment-gateways.png)

**Kopiera** endpoint-URL:en och **klistra in** den i Stripes fält för **Endpoint URL**.

![Klistra in endpoint-URL i Stripes webhook-inställningar](/img/config/settings-payment-gateways.png)

Nästa steg är att välja en **Event**. Under det här alternativet behöver du bara bocka i rutan **Select all events** och klicka på **Add events**. Klicka sedan på **Add Endpoint** för att spara ändringarna.

![Välj alla händelser och lägg till Stripe-endpoint](/img/config/settings-payment-gateways.png)

Klart! Din Stripe-betalintegration är nu färdigkonfigurerad!
