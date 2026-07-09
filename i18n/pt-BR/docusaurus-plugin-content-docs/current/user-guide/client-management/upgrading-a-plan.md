---
title: Fazendo upgrade de um plano
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Fazendo upgrade de um plano (v2)

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Seus clientes podem fazer upgrade de seus planos a qualquer momento. Eles podem fazer upgrade para outro plano ou comprar quaisquer serviços ou pacotes adicionais que você oferece na sua rede.

Neste tutorial, veremos como eles podem fazer upgrade do plano e o que acontece após o processo de upgrade.

Para fazer upgrade do plano, seus clientes devem acessar o Dashboard e ir para a página **Account**.

![Dashboard do subsite do cliente com link do menu Account visível](/img/account-page/account-menu.png)

Na página Account, eles verão a assinatura atual e o plano associado a ela. Para fazer upgrade para outro plano, eles devem clicar em **Alterar** no canto superior direito da seção **Sua assinatura**.

![Página Account, cartão Sua assinatura com botão Alterar](/img/account-page/membership-change-button.png)

Eles serão redirecionados para um formulário de finalização de compra onde todos os planos disponíveis serão exibidos.

Eles também poderão ver os **serviços e pacotes disponíveis para o plano atual** , caso queiram apenas comprar um serviço ou pacote específico (como visitas ilimitadas ou espaço em disco no nosso exemplo aqui), e não fazer upgrade do plano.

![Seletor de upgrade mostrando planos e pacotes disponíveis no lado do cliente](/img/account-page/upgrade-picker.png)

Depois que escolherem o produto que desejam comprar, eles verão quanto precisarão pagar agora — excluindo qualquer crédito existente — e quanto será cobrado na próxima data de cobrança.

Normalmente, se o produto for outro plano e o pagamento for feito entre uma cobrança de assinatura, eles receberão um crédito pelo valor pago no primeiro plano.

![Resumo de pagamento do upgrade mostrando crédito aplicado e valor da próxima cobrança](/img/account-page/upgrade-summary.png)

Se eles selecionarem um plano ou pacote que não alterará nada na assinatura atual, verão uma mensagem explicando isso.

![Aviso quando o plano selecionado não altera a assinatura](/img/account-page/upgrade-no-change.png)

Após a finalização da compra ser concluída, o(s) novo(s) produto(s) serão adicionados à conta dos seus clientes e todos os limites ou recursos do(s) novo(s) produto(s) serão adicionados instantaneamente a ela: visitas, espaço em disco, posts, etc...

##

##

## Caminhos de upgrade e downgrade

Em cada um dos seus produtos, você terá uma aba **Upgrades e Downgrades**. A primeira opção nessa aba é um campo chamado **Grupo de planos**.

**Grupos de planos** é o que permite que você informe ao Ultimate Multisite que certos planos pertencem à mesma "família" e, portanto, devem ser usados para construir opções de caminhos de upgrade/downgrade.

![Edição de produto, aba Upgrades e Downgrades com campo Grupo de planos](/img/config/product-upgrades-plan-group.png)

Por exemplo, você tem um **Plano gratuito** , um **Plano Basic** e um **Plano Premium** disponíveis. Você quer que usuários assinantes do **Plano gratuito** possam fazer upgrade apenas para o **Plano Premium** e não quer que eles vejam o "Plano Basic" como uma opção de upgrade. Tudo o que você precisa fazer é atribuir o mesmo nome de grupo de planos para os planos Free e Premium, conforme mostrado nas capturas de tela abaixo.

![Página do produto Plano Free com grupo de planos High End atribuído](/img/config/product-upgrades-free.png)

![Página do produto Plano Premium com grupo de planos High End atribuído](/img/config/product-upgrades-premium.png)

O que isso deve fazer é informar ao Ultimate Multisite que há uma "família" de planos na rede chamada **High End**. Ao oferecer upgrades ou downgrades, somente planos da mesma família serão apresentados como opção para o usuário.
