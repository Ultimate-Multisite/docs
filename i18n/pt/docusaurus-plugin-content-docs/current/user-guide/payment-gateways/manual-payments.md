---
title: Configurar pagamentos manuais
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configurar pagamentos manuais (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Os pagamentos manuais são uma forma de oferecer outros métodos de pagamento caso **Stripe** ou **PayPal** não estejam disponíveis para os seus utilizadores. Pode ser uma transferência bancária ou qualquer outro método de pagamento disponível localmente para os seus utilizadores.

## Como ativar pagamentos manuais {#how-to-enable-manual-payments}

Configurar o pagamento manual é muito fácil. Só precisa de o ativar em gateways de pagamento e inserir instruções detalhadas sobre como o utilizador deve enviar o pagamento.

Primeiro, vá a **Ultimate Multisite > Definições > Pagamentos**. Abaixo de **Gateways de pagamento**, ative **Manual**. Verá que uma caixa de **Instruções de pagamento** será apresentada para si.

Adicione a esta caixa as informações de que o seu cliente precisará para efetuar o pagamento. Pode ser os dados da sua conta bancária e o seu email para que o cliente possa enviar-lhe a confirmação de pagamento, por exemplo.

![Alternador de gateway de pagamento manual com área de texto de Instruções de pagamento](/img/config/manual-gateway-expanded.png)

Aqui está a interface de definições do gateway manual:

![Definições do gateway manual](/img/config/manual-gateway-settings.png)

Depois de o configurar, basta clicar em **Guardar definições** e está feito. Quando os utilizadores se registarem na sua rede, verão uma mensagem a informar que receberão as suas instruções para concluir a compra.

![Mensagem de confirmação de registo a informar o utilizador de que receberá instruções de pagamento](/img/frontend/registration-manual-notice.png)

E também receberão uma mensagem na sua página de **Obrigado** com as suas instruções de pagamento.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmar pagamentos manuais {#confirming-manual-payments}

Para confirmar um pagamento manual, vá ao menu **Pagamentos** na barra esquerda. Aí pode ver todos os pagamentos na sua rede e os respetivos detalhes, incluindo o seu **estado**. Um pagamento manual terá sempre o estado **Pendente** até que o altere manualmente.

![Lista de pagamentos mostrando pagamento manual pendente](/img/admin/payments-list.png)

Entre na página do pagamento clicando no **código de referência**. Nesta página, tem todos os detalhes do pagamento pendente, como ID de referência, produtos, carimbos de data/hora e muito mais.

![Página de detalhes do pagamento mostrando código de referência, produtos e totais](/img/admin/payment-edit.png)

Na coluna da direita, pode alterar o estado do pagamento. Alterá-lo para **Concluído** e **ativar a opção Ativar subscrição** irá ativar o site do seu cliente e a sua subscrição ficará ativa.

![Página de edição de pagamento com Estado definido como Concluído e alternador Ativar subscrição](/img/admin/payment-activate-membership.png)
