---
title: Configurando pagamentos manuais
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configurando pagamentos manuais (v2)

_**OBSERVAÇÃO IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Pagamentos manuais são uma forma de oferecer outros métodos de pagamento caso **Stripe** ou **PayPal** não estejam disponíveis para seus usuários. Pode ser uma transferência bancária ou qualquer outro método de pagamento disponível localmente para seus usuários.

## Como habilitar pagamentos manuais

Configurar pagamento manual é muito fácil. Você só precisa habilitá-lo em gateways de pagamento e inserir instruções detalhadas sobre como o usuário deve enviar o pagamento.

Primeiro, acesse **Ultimate Multisite > Settings > Payments**. Abaixo de **Payment Gateways**, ative **Manual**. Você verá que uma caixa **Payment Instructions** será exibida para você.

Adicione a essa caixa as informações de que seu cliente precisará para fazer o pagamento. Podem ser os dados da sua conta bancária e seu e-mail para que o cliente possa enviar a confirmação do pagamento, por exemplo.

![Alternância do gateway de pagamento manual com área de texto Payment Instructions](/img/config/manual-gateway-expanded.png)

Esta é a interface de configurações do gateway manual:

![Configurações do gateway manual](/img/config/manual-gateway-settings.png)

Depois de configurar, basta clicar em **Save Settings** e pronto. Quando os usuários se registrarem na sua rede, eles verão uma mensagem informando que receberão suas instruções para concluir a compra.

![Mensagem de confirmação de registro informando ao usuário que ele receberá instruções de pagamento](/img/frontend/registration-manual-notice.png)

E eles também receberão uma mensagem na sua página de **Thank You** com suas instruções de pagamento.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmando pagamentos manuais

Para confirmar um pagamento manual, acesse o menu **Payments** na barra esquerda. Lá você pode ver todos os pagamentos da sua rede e seus detalhes, incluindo o **status**. Um pagamento manual sempre terá o status **Pending** até que você o altere manualmente.

![Lista de pagamentos mostrando pagamento manual pendente](/img/admin/payments-list.png)

Entre na página do pagamento clicando no **código de referência**. Nesta página, você tem todos os detalhes do pagamento pendente, como ID de referência, produtos, datas e horários e muito mais.

![Página de detalhes do pagamento mostrando código de referência, produtos e totais](/img/admin/payment-edit.png)

Na coluna da direita, você pode alterar o status do pagamento. Alterá-lo para **Completed** e **ativar a opção Activate Membership** habilitará o site do seu cliente e a assinatura dele ficará ativa.

![Página de edição do pagamento com Status definido como Completed e alternância Activate Membership](/img/admin/payment-activate-membership.png)
