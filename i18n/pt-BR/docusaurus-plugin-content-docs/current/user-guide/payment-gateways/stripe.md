---
title: Configurando o Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Configurando o Gateway Stripe (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Você pode ativar até quatro métodos de pagamento na nossa página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com **Stripe**.

## Habilitando o Stripe

Para habilitar o Stripe como um gateway de pagamento disponível em sua rede, vá para **Ultimate Multisite > Settings > Payments** e marque o alternador ao lado de **Stripe** ou **Stripe Checkout** na seção Active Payment Gateways.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Este método exibirá um espaço para inserir o número do cartão de crédito durante o checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Este método redirecionará o cliente para uma página Stripe Checkout durante o checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

Obtendo suas chaves API do Stripe

Uma vez que o Stripe esteja habilitado como gateway de pagamento, você precisará preencher os campos **Stripe Publishable Key** e **Stripe Secret Key**. Você pode obter isso fazendo login na sua conta Stripe.

_**Observação:** você pode ativar o **Sandbox mode** para testar se o método de pagamento está funcionando._ 

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

No painel do Stripe, clique em **Developers** no canto superior direito e, em seguida, em **API Keys** no menu à esquerda.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Você pode usar **Test Data** (para testar se a integração está funcionando no seu site de produção) ou não. Para alterar isso, altere o alternador **Viewing test data**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Copie o valor da **Publishable key** e da **Secret key**, da coluna **Token**, e cole nos campos do Gateway Stripe do Ultimate Multisite. Em seguida, clique em **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Configurando o Webhook Stripe

O Stripe envia eventos de webhook que notificam o Ultimate Multisite sempre que um evento acontece na **sua conta Stripe**.

Clique em **Developers** e, em seguida, escolha o item **Webhooks** no menu à esquerda. Em seguida, no lado direito, clique em **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Você precisará de um **Endpoint URL** *.* O Ultimate Multisite gera automaticamente o URL do endpoint, que você pode encontrar logo abaixo do campo **Webhook Listener URL** na seção **Ultimate Multisite Stripe Gateway**_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

Copie o URL do endpoint e cole no campo **Endpoint URL** do Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Em seguida, selecione um **Event** *.* Sob essa opção, basta marcar a caixa **Select all events** e clicar em **Add events**. Depois clique em **Add Endpoint** para salvar as alterações.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

Pronto, sua integração de pagamento Stripe está completa!
