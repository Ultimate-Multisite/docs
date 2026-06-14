---
title: Configurando Pagamentos Manuais
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Configurando Pagamentos Manuais (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Pagamentos manuais são uma forma de você oferecer outros métodos de pagamento caso **Stripe** ou **PayPal** não estejam disponíveis para os seus usuários. Pode ser uma transferência bancária, TED ou qualquer outro método de pagamento disponível localmente para os seus usuários.

## Como ativar Pagamentos Manuais

Configurar pagamentos manuais é muito fácil. Você só precisa ativá-los em gateways de pagamento e colocar instruções detalhadas sobre como o usuário deve enviar o pagamento.

Primeiro, vá para **Ultimate Multisite > Settings > Payments**. Abaixo de **Payment Gateways**, ative a opção **Manual**. Você verá que uma caixa de **Payment Instructions** aparecerá para você.

Adicione a esta caixa as informações que seu cliente precisará para fazer o pagamento. Pode ser os detalhes da sua conta bancária e seu e-mail, por exemplo, para que o cliente possa enviar a confirmação do pagamento para você.

![Toggle do gateway de pagamento manual com área de texto de Instruções de Pagamento](/img/config/manual-gateway-expanded.png)

Aqui está a interface de configurações do gateway manual:

![Configurações do gateway manual](/img/config/manual-gateway-settings.png)

Depois de configurado, basta clicar em **Save Settings** (Salvar Configurações) e pronto. Quando os usuários se registrarem na sua rede, eles verão uma mensagem informando que receberão suas instruções para concluir a compra.

![Mensagem de confirmação de registro dizendo ao usuário que receberá as instruções de pagamento](/img/frontend/registration-manual-notice.png)

E eles também receberão uma mensagem na sua página de **Obrigado** (Thank You page) com suas instruções de pagamento.

<!-- Screenshot unavailable: Página de Obrigado mostrando as instruções de pagamento após o checkout -->

## Confirmando pagamentos manuais

Para confirmar um pagamento manual, vá para o menu **Payments** na barra lateral esquerda. Lá você poderá ver todos os pagamentos da sua rede e seus detalhes, incluindo o **status**. Um pagamento manual sempre terá o status **Pending** (Pendente) até que você o altere manualmente.

![Lista de pagamentos mostrando pagamento manual pendente](/img/admin/payments-list.png)

Insira a página de pagamento clicando no **reference code** (código de referência). Nesta página, você terá todos os detalhes do pagamento pendente, como ID de referência, produtos, carimbos de data e hora e muito mais.

![Página de detalhes do pagamento mostrando código de referência, produtos e totais](/img/admin/payment-edit.png)

Na coluna da direita, você pode alterar o status do pagamento. Alterando para **Completed** (Concluído) e ativando a opção **Activate Membership** (Ativar Membro), você habilita o site do seu cliente e sua associação ficará ativa.

![Página de edição de pagamento com Status definido como Completed e o seletor Activate Membership ligado](/img/admin/payment-activate-membership.png)
