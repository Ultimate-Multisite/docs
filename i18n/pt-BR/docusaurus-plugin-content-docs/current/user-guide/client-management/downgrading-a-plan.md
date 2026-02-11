---
title: Reduzindo um Plano
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Reduzindo um plano (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Reduzir um plano ou assinatura é uma ação comum que seus clientes podem fazer se tiverem um orçamento limitado ou decidirem que não precisarão de muitos recursos para executar seu subsite.

## Como reduzir um plano

Seus clientes podem reduzir seu plano a qualquer momento, fazendo login no painel administrativo do subsite e clicando em **Change** na página da conta.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sprLyB2iMU.png)

Ao clicar no botão **Change**, o usuário/cliente será redirecionado para a página de checkout, onde poderá selecionar o plano para o qual deseja mudar a assinatura.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aTnhJPFVFh.png)

Neste exemplo, estamos reduzindo o plano de **Premium** para **Free**.

Para prosseguir, o usuário só precisa clicar no botão **Complete Checkout**. Ele será então levado de volta à página da conta, exibindo uma mensagem sobre a alteração pendente da assinatura. As mudanças entrarão em vigor no **próximo ciclo de faturamento** do cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E2qcjxzDDG.png)

### O que acontece quando um usuário reduz seu plano

É importante observar que reduzir o plano não altera a configuração existente no subsite do usuário.

Ele não muda automaticamente o modelo do site, pois mudar o modelo do site apagaria e redefiniria completamente o subsite. Isso evita perda de dados desnecessária. Assim, espaço em disco, temas, plugins etc permanecerão intactos, exceto pelos posts.

Entendemos que sua principal preocupação seriam os limites e cotas que você define em cada plano, mas precisamos considerar o dano que causaria ao subsite do usuário caso excluíssemos ou alterássemos alguma de suas configurações.

Para os posts que excedem o limite definido no plano, você tem 3 opções diferentes: **Manter os posts como estão**, **Mover os posts para a lixeira** ou **Mover os posts para rascunho**. Você pode configurar isso nas configurações do Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztHV8cZDG0.png)

### O que acontece com o pagamento

Na versão 2.0, não é mais necessário fazer ajustes no pagamento em termos de prorrogação.

Isso ocorre porque o sistema aguardará que a assinatura existente **complete seu ciclo de faturamento antes** do novo plano/assinatura entrar em vigor. O novo valor de faturamento para a nova assinatura será aplicado e cobrado automaticamente no próximo ciclo de faturamento.
