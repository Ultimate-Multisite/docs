---
title: Downgradendo um Plano
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Downgradendo um plano (v2) {#downgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Downgradar um plano ou assinatura é uma ação comum que seus clientes podem fazer se tiverem um orçamento limitado ou decidirem que não precisam de muitos recursos para manter o subsistema deles.

## Como fazer o downgrade de um plano {#how-to-downgrade-a-plan}

Seus clientes podem mudar o plano a qualquer momento fazendo login no painel administrativo do subsistema e clicando em **Alterar** na página da conta.

![Página da conta do cliente com seu cartão de Membro e botão Alterar](/img/account-page/membership-change-button.png)

Ao clicar no botão **Alterar**, o usuário/cliente será redirecionado para a página de checkout, onde poderá selecionar o plano que deseja mudar sua assinatura.

![Página de opções de downgrade de plano no lado do cliente](/img/account-page/downgrade-picker.png)

N neste exemplo, estamos fazendo o downgrade do plano **Premium** para **Grátis**.

Para prosseguir, o usuário só precisa clicar no botão **Concluir Checkout**. Isso o levará de volta à página da conta mostrando uma mensagem sobre a alteração pendente para a associação. As alterações terão efeito no **próximo ciclo de faturamento** do cliente.

![Página da conta mostrando banner de alteração de associação pendente](/img/account-page/pending-change.png)

### O que acontece quando um usuário faz o downgrade do plano {#what-happens-when-a-user-downgrades-their-plan}

É importante notar que fazer o downgrade do plano não altera a configuração existente no subsistema do usuário.

Não muda automaticamente o template do site, pois mudar o template do site apagaria e redefiniria completamente o subsistema. Isso é para evitar perda desnecessária de dados. Portanto, espaço em disco, temas, plugins etc, permanecerão intactos, exceto pelos posts.

Entendemos que sua principal preocupação são os limites e cotas que você define em cada plano, mas precisamos considerar o dano que isso causaria ao subsite do usuário se deletarmos ou mudarmos alguma de suas configurações.

Para as postagens que excederem o limite definido no plano, você tem 3 opções: **Manter as postagens como estão** *,* **Mover as postagens para a lixeira** *,* ou **Mover as postagens para rascunho** *. Você pode configurar isso nas configurações do Ultimate Multisite.

![Página de Configurações de Sites do Administrador de Rede mostrando opções quando o limite de posts é excedido](/img/account-page/settings-sites-post-limit.png)

### O que acontece com o pagamento {#what-happens-to-the-payment}

Na versão 2.0, não é mais necessário fazer ajustes no pagamento em termos de prorrogação (proration).

Isso ocorre porque o sistema aguardará a **conclusão do ciclo de faturamento** da assinatura existente antes que o novo plano/assinatura entre em vigor. O valor de cobrança do novo plano será aplicado e cobrado automaticamente no próximo ciclo de faturamento.
