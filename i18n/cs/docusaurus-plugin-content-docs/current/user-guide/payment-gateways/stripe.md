---
title: Nastavení Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Nastavení platební brány Stripe (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Na stránce nastavení plateb můžete aktivovat až čtyři způsoby platby: Stripe, Stripe Checkout, PayPal a Manuální. V tomto článku si ukážeme, jak integrovat **Stripe**.

## Aktivace Stripe

Pokud chcete povolit Stripe jako dostupnou platební bránu ve vaší síti, přejděte do **Ultimate Multisite > Settings > Payments** a zaškrtněte přepínač u položky **Stripe** nebo **Stripe Checkout** v sekci Active Payment Gateways.

![Aktivace Stripe v dostupných platebních bránách](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Tato metoda zobrazí během pokladny pole pro zadání čísla kreditní karty.

![Pole pro kreditní kartu přímo v pokladně u metody Stripe](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Tato metoda přesměruje zákazníka během pokladny na stránku Stripe Checkout.

![Přesměrování na stránku Stripe Checkout během pokladny](/img/config/settings-payment-gateways.png)

Získání API klíčů pro Stripe

Jakmile je Stripe aktivován jako platební brána, budete muset vyplnit pole **Stripe Publishable Key** a **Stripe Secret Key**. Tyto klíče získáte po přihlášení do svého účtu Stripe.

_**Poznámka:** můžete aktivovat **Sandbox mode** a otestovat, zda platební metoda funguje._

![Pole pro API klíče Stripe a přepínač sandbox režimu](/img/config/settings-payment-gateways.png)

V dashboardu Stripe klikněte na **Developers** v pravém horním rohu a poté na **API Keys** v levém menu.

![Sekce Developers v dashboardu Stripe s položkou API Keys](/img/config/settings-payment-gateways.png)

Můžete použít buď **Test Data** (pro otestování, zda integrace funguje na vašem produkčním webu), nebo ne. Toto nastavení změníte přepínačem **Viewing test data**.

![Přepínač Viewing test data ve Stripe](/img/config/settings-payment-gateways.png)

Zkopírujte hodnotu **Publishable key** a **Secret key** ze sloupce **Token** a vložte je do polí platební brány Stripe v Ultimate Multisite. Poté klikněte na **Save Changes**.

![Hodnoty publishable a secret key ve Stripe](/img/config/settings-payment-gateways.png)

![Vložení klíčů Stripe do nastavení Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Nastavení Stripe Webhooku

Stripe odesílá webhook události, které informují Ultimate Multisite pokaždé, když se něco stane na **vašem Stripe účtu**.

Klikněte na **Developers** a poté vyberte položku **Webhooks** v levém menu. Na pravé straně pak klikněte na **Add endpoint**.

![Stránka Webhooks ve Stripe s tlačítkem Add endpoint](/img/config/settings-payment-gateways.png)

Budete potřebovat **Endpoint URL**. Ultimate Multisite automaticky generuje URL endpointu, které najdete hned pod polem **Webhook Listener URL** v sekci **Ultimate Multisite Stripe Gateway**.

![Pole Webhook Listener URL v nastavení brány Stripe](/img/config/settings-payment-gateways.png)

**Zkopírujte** URL endpointu a **vložte** ji do pole **Endpoint URL** ve Stripe.

![Vložení URL endpointu při nastavení webhooku ve Stripe](/img/config/settings-payment-gateways.png)

Dalším krokem je výběr **Event**. V této možnosti stačí zaškrtnout políčko **Select all events** a kliknout na **Add events**. Poté klikněte na **Add Endpoint** pro uložení změn.

![Výběr všech událostí a přidání endpointu ve Stripe](/img/config/settings-payment-gateways.png)

A to je vše, integrace platební brány Stripe je dokončena!
