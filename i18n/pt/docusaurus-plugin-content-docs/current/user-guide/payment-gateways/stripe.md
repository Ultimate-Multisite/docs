---
title: Configurando o Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurando o Gateway Stripe (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Você pode ativar até quatro métodos de pagamento na página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com o **Stripe**.

## Habilitando o Stripe {#enabling-stripe}

Para habilitar o Stripe como um gateway de pagamento disponível na sua rede, vá para **Ultimate Multisite > Configurações > Pagamentos** e marque a chave ao lado de **Stripe** ou **Stripe Checkout** na seção Gateway de Pagamento Ativo.

![Habilitando o Stripe nos gateways de pagamento ativos](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Este método mostrará um espaço para inserir o número do cartão de crédito durante o checkout.

![Campo de cartão de crédito inline no Stripe durante o checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Este método redirecionará o cliente para uma página do Stripe Checkout durante o checkout.

![Página de redirecionamento do Stripe Checkout durante o checkout](/img/config/settings-payment-gateways.png)

Obtendo suas chaves de API do Stripe

Depois que o Stripe estiver habilitado como gateway de pagamento, você precisará preencher os campos para **Chave Pública do Stripe** e **Chave Secreta do Stripe**. Você pode obter isso fazendo login na sua conta Stripe.

_**Nota:** você pode ativar o **modo Sandbox** para testar se o método de pagamento está funcionando._

![Campos de chave de API do Stripe e alternância do modo sandbox](/img/config/settings-payment-gateways.png)

No seu painel do Stripe, clique em **Desenvolvedores** no canto superior direito e depois em **Chaves de API** no menu à esquerda.

![Seção Desenvolvedores do painel do Stripe com Chaves de API](/img/config/settings-payment-gateways.png)

Você pode usar os **Dados de Teste** (para testar se a integração está funcionando no seu site de produção) ou não. Para mudar isso, ligue o botão **Visualizar dados de teste**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copie o valor da chave **Publishable key** e da chave **Secret key**, na coluna **Token**, e cole nos campos do Ultimate Multisite Stripe Gateway. Depois, clique em **Salvar Alterações**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Configurando o Webhook do Stripe {#setting-up-stripe-webhook}

O Stripe envia eventos de webhook que notificam o Ultimate Multisite sempre que algo acontece na **sua conta do stripe**.

Clique em **Developers** e depois escolha o item **Webhooks** no menu à esquerda. Em seguida, clique com o botão direito em **Adicionar endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Você precisará de uma **Endpoint URL** *. O Ultimate Multisite gera automaticamente a Endpoint URL, que você pode encontrar logo abaixo do campo **Webhook Listener URL** na seção **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Copie** a endpoint URL e **cole** no campo **Endpoint URL** do Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Em seguida, selecione um **Evento** *. Nesta opção, basta marcar a caixa **Selecionar todos os eventos** e clicar em **Adicionar eventos**. Depois disso, clique em **Adicionar Endpoint** para salvar as alterações.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Isso mesmo, sua integração de pagamento com o Stripe está completa!
