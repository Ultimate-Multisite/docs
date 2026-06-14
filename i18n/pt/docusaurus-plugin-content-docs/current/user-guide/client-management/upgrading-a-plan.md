---
title: Atualizando um Plano
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Atualizando um Plano (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Seus clientes podem atualizar seus planos a qualquer momento. Eles podem fazer o upgrade para outro plano ou comprar quaisquer serviços ou pacotes adicionais que você ofereça na sua rede.

Neste tutorial, vamos mostrar como eles podem atualizar o plano e o que acontece depois do processo de atualização.

Para atualizar o plano, seus clientes devem acessar o dashboard deles e ir para a página **Conta** (Account).

![Dashboard do subsite do cliente com link do menu Conta visível](/img/account-page/account-menu.png)

Na página Conta, eles verão sua associação atual e o plano associado a ela. Para atualizar para outro plano, eles devem clicar em **Alterar** (Change) no canto superior direito da seção **Sua Associação** (Your Membership).

![Página Conta Cartão Sua Associação com botão Alterar](/img/account-page/membership-change-button.png)

Eles serão redirecionados para um formulário de checkout onde todos os planos disponíveis serão exibidos.

Eles também poderão ver os **serviços e pacotes disponíveis para o plano atual** , caso queiram apenas comprar um serviço ou pacote específico (como visitas ilimitadas ou espaço em disco no nosso exemplo aqui), e não atualizar o plano.

![Seletor de upgrade mostrando planos e pacotes disponíveis no lado do cliente](/img/account-page/upgrade-picker.png)

Depois que escolherem o produto que desejam comprar, eles verão quanto precisar pagar agora - excluindo qualquer crédito existente - e quanto serão cobrados na próxima data de faturamento.

Geralmente, se o produto for outro plano e o pagamento for feito entre uma cobrança de associação, eles receberão um crédito pelo valor pago no primeiro plano.

![Atualização do resumo de pagamento mostrando crédito aplicado e próximo valor de cobrança](/img/account-page/upgrade-summary.png)

Se eles selecionarem um plano ou pacote que não mudará nada da assinatura atual, aparecerá uma mensagem explicando isso.

![Aviso quando o plano selecionado não altera a assinatura](/img/account-page/upgrade-no-change.png)

Após a conclusão do checkout, os novos produto(s) serão adicionados à conta dos seus clientes e todos os limites ou recursos dos novos produtos serão instantaneamente aplicados a eles: visitas, espaço em disco, posts, etc...

##

## Caminhos de Upgrade e Downgrade

Em cada um dos seus produtos, você terá uma aba **Up & Downgrades** (Upgrade e Downgrade). A primeira opção nessa aba é um campo chamado **Plan Group** (Grupo de Plano).

Os **planos de grupo** são o que permite dizer ao Ultimate Multisite que certos planos pertencem à mesma "família" e, portanto, devem ser usados para construir as opções de caminho de upgrade/downgrade.

![Aba Editar Produto Up and Downgrades com campo Plan Group](/img/config/product-upgrades-plan-group.png)

Por exemplo, você tem um **Plano Gratuito**, um **Plano Básico** e um **Plano Premium** disponíveis. Você quer que os usuários assinados no **Plano Gratuito** possam fazer upgrade apenas para o **Plano Premium** e não quer que eles vejam o "Plano Básico" como uma opção de upgrade. Tudo o que você precisa fazer é atribuir o mesmo nome de grupo de plano tanto para o Plano Gratuito quanto para o Plano Premium, como mostrado nas capturas de tela abaixo.

![Página do produto do Plano Gratuito com grupo de plano High End atribuído](/img/config/product-upgrades-free.png)

![Página do produto do Plano Premium com grupo de plano High End atribuído](/img/config/product-upgrades-premium.png)

O que isso deve fazer é informar o Ultimate Multisite de que existe uma "família" de planos na rede chamada **High End**. Ao oferecer upgrades ou downgrades, apenas planos da mesma família serão apresentados como opção para o usuário.
