---
title: Nastavitve Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Uporaba Stripe Gatewaya (v2) {#setting-up-the-stripe-gateway-v2}

_**POMEMBNO: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Na strani nastavitev plačil na našem spletnem mestu lahko aktivirate do štirih metod plačanja: Stripe, Stripe Checkout, PayPal in Ručno (Manual). V tem članku bomo videli, kako se integrirati z **Stripe**.

## Aktiviranje Stripe-a {#enabling-stripe}

Da bi Stripe bil na voljo kot možnost plačilne bramke na vašeta omrežju, gre do strani **Ultimate Multisite > Settings > Payments** in označite preklic (toggle) ob strani **Stripe** ali **Stripe Checkout** v razdelku Aktive plačilne bramke.

![Aktiviranje Stripe-a v aktivnih plačilnih bramkah](/img/config/settings-payment-gateways.png)

### Stripe nasprotje Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ta metoda bo prikazala prostor za vnos številke kreditne kartice med plačilom.

![Inline polje za kreditno kartico na Stripe pri plačovanju](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ta metoda bo strank redirektirala na stran Stripe Checkout med plačilom.

![Redirekcijska stran Stripe Checkout med plačilom](/img/config/settings-payment-gateways.png)

Dobavo vaše Stripe API ključe

Ko je Stripe aktiviran kot možnost plačilne bramke, boste morali zapolniti polja za **Stripe Publishable Key** in **Stripe Secret Key**. To lahko dobite, če se prijavite na svoj Stripe račun.

_**Opomba:** lahko aktivirate **Sandbox mode**, da preizkusite, ali delovanje metode plačanja deluje._

![Polja API ključa Stripe-a in preklic za sandbox mode](/img/config/settings-payment-gateways.png)

Na vašem Stripe dashboardu kliknite na **Developers** v zgornjem desnem kot, nato na **API Keys** v levi meniju.

![Razdel Stripe dashboard Developers z API ključi](/img/config/settings-payment-gateways.png)

Morda lahko uporabite **Testne podatke** (da preverite, ali integracija deluje na vašem produkcijskem spletni strani) ali ne. Da bi to spremenili, preklopite preklic **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopirajte vrednost iz polja **Publishable key** in **Secret key**, iz kolonne **Token** in jo vstavite v polja Ultimate Multisite Stripe Gateway. Nato kliknite na **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Uporaba Webhooka za Stripe {#setting-up-stripe-webhook}

Stripe pošlje webhook naloge, ki obvestijo Ultimate Multisite vsakrat, ko se nekaj zgodi na **vašem stripe računu**.

Kliknite na **Developers** in nato izberite element **Webhooks** v levi meniji. Nato na desni strani kliknite na **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Budzete potrebovali **Endpoint URL** *.* Ultimate Multisite sam generira Endpoint URL, ki ga lahko najdete neposredno pod poljem **Webhook Listener URL** v sekciji **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopirajte** endpoint URL in jo **vstavite** v polje **Endpoint URL** na Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Naslednje je izbrati **Event** *.* Pod tem možnostjo samo morate označiti polje **Select all events** in klikniti na **Add events**. Po tem kliknite na **Add Endpoint**, da shranite spremembe.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

To je to, va integracija plačil preko Stripe je dokončana!
