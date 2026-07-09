---
title: Configurando o Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurando o gateway Stripe (v2)

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Você pode ativar até quatro métodos de pagamento na nossa página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com **Stripe**.

## Habilitando o Stripe

Para habilitar o Stripe como um gateway de pagamento disponível na sua rede, acesse **Ultimate Multisite > Settings > Payments** e marque o seletor ao lado de **Stripe** ou **Stripe Checkout** na seção Active Payment Gateways.

![Habilitando o Stripe nos gateways de pagamento ativos](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Este método mostrará um espaço para inserir o número do cartão de crédito durante o checkout.

![Campo inline de cartão de crédito do Stripe durante o checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Este método redirecionará o cliente para uma página do Stripe Checkout durante o checkout.

![Página de redirecionamento do Stripe Checkout durante o checkout](/img/config/settings-payment-gateways.png)

Obtendo suas chaves de API do Stripe

Depois que o Stripe estiver habilitado como gateway de pagamento, você precisará preencher os campos **Stripe Publishable Key** e **Stripe Secret Key** . Você pode obter isso fazendo login na sua conta Stripe.

_**Observação:** você pode ativar o **Sandbox mode** para testar se o método de pagamento está funcionando._

![Campos de chave de API do Stripe e seletor de modo sandbox](/img/config/settings-payment-gateways.png)

No seu Dashboard do Stripe, clique em **Developers** no canto superior direito e depois em **API Keys** no menu à esquerda.

![Seção Developers do Dashboard do Stripe com API Keys](/img/config/settings-payment-gateways.png)

Você pode usar **Test Data** (para testar se a integração está funcionando no seu site de produção) ou não. Para alterar isso, acione o seletor **Viewing test data**.

![Seletor Viewing test data do Stripe](/img/config/settings-payment-gateways.png)

Copie o valor da **Publishable key** e da **Secret key** , da coluna **Token**, e cole nos campos do Ultimate Multisite Stripe Gateway. Em seguida, clique em **Save Changes**.

![Valores de publishable key e secret key do Stripe](/img/config/settings-payment-gateways.png)

![Colando as chaves do Stripe nas configurações do Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configurando o Webhook do Stripe

O Stripe envia eventos de webhook que notificam o Ultimate Multisite sempre que um evento acontece em **sua conta Stripe**.

Clique em **Developers** e depois escolha o item **Webhooks** no menu à esquerda. Então, no lado direito, clique em **Add endpoint** *.*

![Página Webhooks do Stripe com botão Add endpoint](/img/config/settings-payment-gateways.png)

Você precisará de uma **Endpoint URL** *.* O Ultimate Multisite gera automaticamente a URL do endpoint, que você pode encontrar logo abaixo do campo **Webhook Listener URL** na seção **Ultimate Multisite Stripe Gateway**_._

![Campo Webhook Listener URL nas configurações do gateway Stripe](/img/config/settings-payment-gateways.png)

**Copie** a URL do endpoint e **cole** no campo **Endpoint URL** do Stripe.

![Colando a URL do endpoint na configuração de webhook do Stripe](/img/config/settings-payment-gateways.png)

Em seguida, é preciso selecionar um **Event** *.* Nesta opção, você só precisa marcar a caixa **Select all events** e clicar em **Add events**. Depois disso, clique em **Add Endpoint** para salvar as alterações.

![Selecionando todos os eventos e adicionando o endpoint do Stripe](/img/config/settings-payment-gateways.png)

Pronto, sua integração de pagamento com Stripe está concluída!
