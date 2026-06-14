---
title: Nastavenie Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Konfigurácia brány Stripe (v2)

_**DÔLEŽITÉ UPOZORNENIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Na našej stránke nastavení platob môžete aktivovať až štyri metódy platby: Stripe, Stripe Checkout, PayPal a Manuálne. V tomto článku si podime, ako sa integruje s **Stripe**.

## Aktivácia Stripe

Aby ste mohli Stripe použiť ako dostupnú bránu na platbu v sieti, prejdite do **Ultimate Multisite > Settings > Payments** a označte vypínač vedľa **Stripe** alebo **Stripe Checkout** v sekcii Aktívne platobné brány.

![Aktivácia Stripe v aktívnych platobných bránach](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Táto metóda zobrazí miesto na zadaní čísla kreditnej karty počas pokiaľ sa dokončujete objednávku.

![Inline pole pre kreditnú kartu v pokiaľ sa dokončujete objednávku](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Táto metóda presmeruje zákazníka na stránku Stripe Checkout počas pokiaľ sa dokončujete objednávku.

![Presmerovanie na stránku Stripe Checkout počas pokiaľ sa dokončujete objednávku](/img/config/settings-payment-gateways.png)

Získanie vašich API kľúčov Stripe

Keď je Stripe aktivovaný ako platobná brána, budete musieť vyplniť polia pre **Stripe Publishable Key** a **Stripe Secret Key**. Môžete si tieto kľúče získať pomocou prihlásenia do vášho účtu na Stripe.

_**Poznámka:** môžete aktivovať **Sandbox režim**, aby ste mohli testovať, či je metóda platby funkčná._

![Pole API kľúčov Stripe a vypínač sandboxového režimu](/img/config/settings-payment-gateways.png)

Na vašom dashboardu Stripe kliknite na **Developers** v pravom hornom rohu a potom na **API Keys** v ľavom menu.

![Sekcia Developers na dashboarde Stripe s API kľúčmi](/img/config/settings-payment-gateways.png)

Môžete použiť **Testné dáta** (aby skontrolovali, či integrácia funguje na vašom produkčnom sieti) alebo nie. Aby ste to zmenili, premiňte prepínač **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Skopírujte hodnotu z polí **Publishable key** a **Secret key**, z kolonne **Token** a vložte ju do polí Ultimate Multisite Stripe Gateway. Potom kliknite na **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Nastavenie Stripe Webhooku

Stripe posiela webhookové udalosti, ktoré informujú Ultimate Multisite o akomkoľvek udalosti na **vašom účte v Stripe**.

Kliknite na **Developers** a potom si vyberte položku **Webhooks** v ľavom menu. Potom kliknite na pravom boku na **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Potrebujete **Endpoint URL** *.* Ultimate Multisite automaticky generuje Endpoint URL, ktorý nájdete priamo pod polou **Webhook Listener URL** v sekcii **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Skopírujte** endpoint URL a **vložte** ho do polia **Endpoint URL** v Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Ďalej si vyberte **Event** *.* Pod touto možnosťou stačí označiť políčko **Select all events** a kliknúť na **Add events**. Potom kliknite na **Add Endpoint**, aby ste zmenili nastavenia.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

To dokončili sme integráciu s platbami Stripe!
