---
title: Atualizando um Plano
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Atualizando um Plano (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Seus clientes podem atualizar seus planos a qualquer momento. Eles podem atualizar para outro plano ou adquirir quaisquer serviços ou pacotes adicionais que você ofereça em sua rede.

Neste tutorial, abordaremos como eles podem atualizar seu plano e o que acontece após o processo de atualização.

Para atualizar seu plano, seus clientes devem acessar seu painel e ir para a página **Account**.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Na página Account, eles verão sua associação atual e o plano associado a ela. Para atualizar para outro plano, eles devem clicar em **Change** no canto superior direito da seção **Your Membership**.

![Your Membership section with Change button](/img/admin/memberships-list.png)

Eles serão redirecionados para um formulário de checkout onde todos os planos disponíveis serão exibidos.

Eles também poderão ver os **services and packages available for their current plan**, caso queiram apenas adquirir um serviço ou pacote específico (como visitas ilimitadas ou espaço em disco, no nosso exemplo aqui), e não atualizar o plano.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

Depois que escolherem o produto que desejam adquirir, eles verão quanto precisarão pagar agora - excluindo qualquer crédito existente - e quanto serão cobrados na próxima data de faturamento.

Normalmente, se o produto for outro plano e o pagamento for feito entre uma cobrança de associação, eles receberão um crédito pelo valor pago no primeiro plano.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

Se selecionarem um plano ou pacote que não altere nada na assinatura atual, eles verão uma mensagem explicando isso.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

Após o checkout ser concluído, o(s) novo(s) produto(s) será(ão) adicionados à conta de seus clientes e todos os limites ou recursos do(s) novo(s) produto(s) serão adicionados instantaneamente: visitas, espaço em disco, posts, etc...

## 

## 

## Caminhos de Atualização e Redução

Em cada um de seus produtos, você terá uma aba **Atualizações e Reduções**. A primeira opção nessa aba é um campo chamado **Plan Group**.

**Plan groups** é o que permite que você informe ao Ultimate Multisite que certos planos pertencem à mesma "família", e portanto devem ser usados para construir opções de caminho de atualização/redução.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

Por exemplo, você tem um **Free plan**, um **Basic Plan** e um **Premium Plan** disponíveis. Você deseja que os usuários assinados sob o **Free Plan** possam atualizar apenas para o **Premium Plan** e não queira que eles vejam o "Basic Plan" como uma opção de atualização. Tudo o que você precisa fazer é atribuir o mesmo nome de grupo de plano para os planos Free e Premium, como mostrado nas capturas de tela abaixo.

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

O que isso deve fazer é informar ao Ultimate Multisite que há uma "família" de planos na rede chamada **High End**. Ao oferecer atualizações ou reduções, apenas planos da mesma família serão apresentados como opção para o usuário.
