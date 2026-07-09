---
title: Fazendo downgrade de um Plano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Fazendo downgrade de um plano (v2) {#downgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Fazer downgrade de um plano ou assinatura é uma ação comum que seus clientes podem realizar se tiverem um orçamento limitado ou decidirem que não precisarão de muitos recursos para executar o subsite deles.

## Como fazer downgrade de um plano {#how-to-downgrade-a-plan}

Seus clientes podem fazer downgrade do plano a qualquer momento fazendo login no Dashboard de administração do subsite e clicando em **Alterar** na página Account deles.

![Página Account do cliente com o cartão Sua assinatura e o botão Alterar](/img/account-page/membership-change-button.png)

Ao clicar no botão **Alterar**, o usuário/cliente será redirecionado para a página de finalização de compra, onde poderá selecionar o plano para o qual deseja alterar sua assinatura.

![Página de opções de downgrade de plano no lado do cliente](/img/account-page/downgrade-picker.png)

Neste exemplo, estamos fazendo downgrade do plano de **Premium** para **Gratuito**.

Para prosseguir, o usuário só precisa clicar no botão **Finalizar compra**. Em seguida, ele será levado de volta à página Account, exibindo uma mensagem sobre a alteração pendente da assinatura. As alterações entrarão em vigor no **próximo ciclo de cobrança** do cliente.

![Página Account exibindo o banner de alteração pendente da assinatura](/img/account-page/pending-change.png)

### O que acontece quando um usuário faz downgrade do plano {#what-happens-when-a-user-downgrades-their-plan}

É importante observar que fazer downgrade do plano não altera a configuração existente no subsite do usuário.

Isso não altera automaticamente o modelo do site, pois alterar o modelo do site apagará completamente e redefinirá o subsite. Isso evita a perda desnecessária de dados. Portanto, espaço em disco, temas, plugins etc. permanecerão intactos, exceto pelas publicações.

Entendemos que sua principal preocupação seriam os limites e cotas que você definiu em cada plano, mas precisamos considerar o dano que isso causaria ao subsite do usuário caso excluíssemos ou alterássemos qualquer uma de suas configurações.

Para as publicações que excederem o limite definido no plano, você tem 3 opções diferentes: **Manter as publicações como estão** *,* **Mover as publicações para a lixeira** *,* ou **Mover as publicações para rascunho** *.* Você pode configurar isso nas configurações do Ultimate Multisite.

![Página Sites das configurações do Network Admin mostrando as opções de comportamento para limite de publicações excedido](/img/account-page/settings-sites-post-limit.png)

### O que acontece com o pagamento {#what-happens-to-the-payment}

Na versão 2.0, não é mais necessário fazer ajustes no pagamento em termos de rateio proporcional.

Isso acontece porque o sistema aguardará a assinatura existente **concluir seu ciclo de cobrança antes** que o novo plano/assinatura entre em vigor. O novo valor de cobrança para a nova assinatura será aplicado e cobrado automaticamente no próximo ciclo de cobrança.
