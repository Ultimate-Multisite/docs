---
title: Configuración de Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurar o Gateway Stripe (v2)

_**NOTA IMPORTANTE: Este artigo refere a Ultimate Multisite versão 2.x.**_

Podes activar até quatro métodos de pagamento na páxina de configuración de pagamentos: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com o **Stripe**.

## Activar o Stripe {#enabling-stripe}

Para activar o Stripe como un gateway de pagamento disponible na tua rede, ve a **Ultimate Multisite > Settings > Payments** e marca o interruptor ao lado de **Stripe** ou **Stripe Checkout** na sección Active Payment Gateways.

![Activar o Stripe nos gateways de pagamento activos](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Este método mostrará un espacio para introducir o número do cartão de crédito durante o proceso de compra (checkout).

![Campo inline de cartão de crédito Stripe durante o checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Este método redireixará o cliente para unha páxina de Stripe Checkout durante o proceso de compra.

![Páxina de redireixement do Stripe Checkout durante o checkout](/img/config/settings-payment-gateways.png)

Obtendo as tes API do Stripe

Uma vez que o Stripe este activado como gateway de pagamento, terás que preencher os campos para a **Stripe Publishable Key** e a **Stripe Secret Key**. Podes obtener estas claves iniciando sesión na tua conta do Stripe.

_**Nota:** podes activar o **Sandbox mode** para comprobar se o método de pagamento funciona._

![Campos das tes API do Stripe e interruptor do modo sandbox](/img/config/settings-payment-gateways.png)

No teu dashboard do Stripe, pulsa en **Developers** no canto superior direito, e a súa menú esquerdo, **API Keys**.

![Sección Developers do dashboard do Stripe con API Keys](/img/config/settings-payment-gateways.png)

Pode usar os **Test Data** (para comprobar se a integración funciona no seu sitio de produção) ou não. Para mudar isto, basta ligar o interruptor **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copie o valor da **Publishable key** e da **Secret key**, na coluna **Token**, e cole-o nos campos do Ultimate Multisite Stripe Gateway. Depois clique em **Save Changes** (Guardar Alterações).

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Configurar Webhook do Stripe {#setting-up-stripe-webhook}

O Stripe envia eventos de webhook que notifican o Ultimate Multisite sempre que algo acontece na **sua conta Stripe**.

Clique em **Developers** (Desenvolvedores) e depois escolha a opção **Webhooks** no menu esquerdo. Depois, à direita, clique em **Add endpoint** (Adicionar ponto final). *

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Vai precisar de uma **Endpoint URL**. O Ultimate Multisite gera automaticamente a Endpoint URL, que podes encontrar logo abaixo do campo **Webhook Listener URL** na secção **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copia** a endpoint URL e **cole-a** no campo **Endpoint URL** do Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

A seguir, tens de selecionar um **Event** (Evento). Nesta opção, basta marcar a caixa **Select all events** (Selecionar todos os eventos) e clicar em **Add events** (Adicionar eventos). Depois, clica em **Add Endpoint** para guardar as alterações.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

¡Listo! A integración de pagamento do Stripe está completa!
