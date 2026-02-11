---
title: Criando Códigos de Desconto
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Criando Códigos de Desconto (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Com o Ultimate Multisite, você pode criar códigos de desconto para oferecer descontos aos seus clientes em suas assinaturas. E criá-los é fácil!

## Criando e Editando Códigos de Desconto

Para criar ou editar um código de desconto, vá para **Ultimate Multisite > Códigos de Desconto**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

Você terá uma lista dos códigos de desconto que já criou.

Você pode clicar em **Adicionar Código de Desconto** para criar um novo cupom ou editar os que já possui passando o mouse sobre eles e clicando em **Editar**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

Você será redirecionado para a página onde poderá criar ou editar seu código de cupom. Neste exemplo, criaremos um novo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

Vamos dar uma olhada nas configurações disponíveis aqui:

**Digite o Código de Desconto:** Este é apenas o nome do seu código de desconto. Este não é o código que seus clientes precisarão usar no formulário de checkout.

**Descrição:** Aqui, você pode descrever brevemente para que serve este cupom.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Código do Cupom:** Aqui é onde você define o código que seus clientes precisarão inserir durante o checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Desconto:** Aqui, você pode definir um **percentual** ou um **valor fixo** de dinheiro para seu código de desconto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Aplicar às renovações:** Se esta opção estiver desativada, o código de desconto será aplicado apenas ao **primeiro pagamento**. Todos os demais pagamentos não terão desconto. Se esta opção estiver ativada, o código de desconto será válido para todos os pagamentos futuros.

**Desconto na taxa de configuração:** Se esta opção estiver desativada, o código do cupom **não oferecerá nenhum desconto na taxa de configuração** do pedido. Se esta opção estiver ativada, você pode definir o desconto (percentual ou valor fixo) que este código de cupom aplicará à taxa de configuração de seus planos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Ativo:** Ative ou desative manualmente este código de cupom.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

Under **Advanced Options**, we have the following settings:

**Limitar usos:**

  * **Usos:** Aqui, você pode ver quantas vezes o código de desconto foi usado.

  * **Máx. usos:** Isso limitará a quantidade de vezes que os usuários podem usar este código de desconto. Por exemplo, se você colocar 10 aqui, o cupom só poderá ser usado 10 vezes. Após esse limite, o código de desconto não poderá mais ser usado.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)**Datas de início e expiração:** Aqui você terá a opção de adicionar uma data de início e/ou uma data de expiração ao seu cupom.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limitar produtos:** Se você ativar **Selecionar produtos**, todos os seus produtos serão exibidos. Você terá a opção de selecionar manualmente (ativando ou desativando) quais produtos podem aceitar este código de cupom. Produtos que estiverem desativados aqui não mostrarão nenhuma alteração se seus clientes tentarem usar este código de cupom neles.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

Depois de configurar todas essas opções, clique em **Salvar Código de Desconto** para salvar seu cupom e pronto!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

O cupom agora está em sua lista e, a partir daí, você pode clicar para **editar ou excluir**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### Usando Parâmetros de URL:

Se você deseja personalizar suas tabelas de preços ou criar uma página de código de cupom agradável para seu site e deseja aplicar um código de desconto ao seu formulário de checkout automaticamente, você pode fazer isso por meio de parâmetros de URL.

Primeiro, você precisa obter o link compartilhável do seu plano. Para fazer isso, vá para **Ultimate Multisite > Produtos** e selecione um plano.

Clique no botão **Clique para Copiar Link Compartilhável**. Isso lhe dará o link compartilhável para este plano específico. No nosso caso, o link compartilhável fornecido foi [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

Para aplicar seu código de desconto a este plano específico, basta adicionar o parâmetro **?discount_code=XXX** ao URL. Onde **XXX** é o código do cupom.

No nosso exemplo aqui, aplicaremos o código de cupom **50OFF** a este produto específico.

O URL para este plano específico e com o código de desconto 50OFF aplicado ficará assim: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
