---
title: Criando códigos de desconto
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Criando códigos de desconto (v2)

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Com Ultimate Multisite, você pode criar códigos de desconto para oferecer descontos aos seus clientes nas assinaturas deles. E criá-los é fácil!

## Criando e editando códigos de desconto

Para criar ou editar um código de desconto, acesse **Ultimate Multisite > Discount Codes**.

![Lista de códigos de desconto — estado vazio antes de qualquer código existir](/img/config/discount-codes-empty.png)

Lá você terá uma lista dos códigos de desconto que já criou.

Você pode clicar em **Add Discount** **Code** para criar um novo cupom ou pode editar os que você tem passando o mouse sobre eles e clicando em **Edit**.

![Lista de códigos de desconto com ações ao passar o mouse mostrando links Edit e Delete](/img/config/discount-codes-list-hover.png)

![Botão Add Discount Code no cabeçalho da página](/img/config/discount-codes-add-button.png)

Você será redirecionado para a página onde criará ou editará seu código de cupom. Neste exemplo, criaremos um novo.

![Página de edição de código de desconto com todas as seções visíveis](/img/config/discount-code-edit.png)

Vamos dar uma olhada nas configurações disponíveis aqui:

**Enter Discount Code:** Este é apenas o nome do seu código de desconto. Este não é o código que seus clientes precisarão usar no formulário de checkout.

**Description:** Aqui, você pode descrever brevemente para que serve este cupom.

![Campos de nome e descrição do código de desconto no topo da página de edição](/img/config/discount-code-description.png)

Você também pode visualizar o código de desconto como ativo ou inativo:

![Status ativo do código de desconto](/img/config/discount-code-active.png)

**Coupon code:** Aqui é onde você define o código que seus clientes precisarão inserir durante o checkout.

![Campo de código do cupom onde os clientes inserem o código no checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Aqui, você pode definir uma **porcentagem** ou um **valor fixo** em dinheiro para seu código de desconto.

![Configuração do valor do desconto com menu suspenso de porcentagem ou valor fixo](/img/config/discount-code-amount.png)

**Apply to renewals:** Se esta opção estiver desativada, este código de desconto será aplicado apenas ao **primeiro pagamento**. Todos os outros pagamentos não terão desconto. Se esta opção estiver ativada, o código de desconto será válido para todos os pagamentos futuros.

**Setup fee discount:** Se esta opção estiver desativada, o código do cupom **não dará nenhum desconto para a taxa de configuração** do pedido. Se esta opção estiver ativada, você poderá definir o desconto (porcentagem ou valor fixo) que este código de cupom aplicará à taxa de configuração dos seus planos.

![Opções de alternância Apply to renewals e setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Ative ou desative manualmente este código de cupom.

![Alternância Active para ativar ou desativar manualmente o código de desconto](/img/config/discount-code-active.png)

Em **Advanced Options**, temos as seguintes configurações:

![Opções avançadas do código de desconto](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Aqui, você pode ver quantas vezes o código de desconto foi usado.

  * **Max uses:** Isso limitará a quantidade de vezes que os usuários podem usar este código de desconto. Por exemplo, se você colocar 10 aqui, o cupom só poderá ser usado 10 vezes. Após esse limite, o código do cupom não poderá mais ser usado.

![Configuração de limite de usos com contagem atual de usos e campo de máximo de usos](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Aqui você terá a opção de adicionar uma data de início e/ou uma data de expiração ao seu cupom.

![Campos de data de início e expiração para agendar o código de desconto](/img/config/discount-code-dates.png)

**Limit products:** Se você ativar **Select products**, todos os seus produtos serão exibidos para você. Você terá a opção de selecionar manualmente (ativando ou desativando) qual produto pode aceitar este código de cupom. Produtos que estiverem desativados aqui não mostrarão nenhuma alteração se seus clientes tentarem usar este código de cupom neles.

![Seção Limit products com interruptores de alternância por produto](/img/config/discount-code-limit-products.png)

Depois de configurar todas essas opções, clique em **Save Discount Code** para salvar seu cupom e pronto!

![Botão Save Discount Code na parte inferior da página de edição](/img/config/discount-code-save.png)

O cupom agora está na sua lista e, a partir dela, você pode clicar para **editá-lo ou excluí-lo**.

![Linha do código de desconto na lista com ações Edit e Delete ao passar o mouse](/img/config/discount-codes-list-hover.png)

###

### Usando parâmetros de URL:

Se você quiser personalizar suas tabelas de preços ou criar uma boa página de código de cupom para seu site e quiser aplicar um código de desconto ao seu formulário de checkout automaticamente, você pode fazer isso por meio de parâmetros de URL.

Primeiro, você precisa obter o link compartilhável do seu plano. Para fazer isso, acesse **Ultimate Multisite > Products** e selecione um plano.

Clique no botão **Click to Copy Shareable Link**. Isso fornecerá o link compartilhável para este plano específico. No nosso caso, o link compartilhável fornecido foi [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Página de produto com botão de link compartilhável](/img/config/products-list.png)

Para aplicar seu código de desconto a este plano específico, basta adicionar o parâmetro **?discount_code=XXX** à URL. Onde **XXX** é o código do cupom.

No nosso exemplo aqui, aplicaremos o código do cupom **50OFF** a este produto específico.

A URL para este plano específico e com o código de desconto 50OFF aplicado ficará assim: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
