---
title: Criando Códigos de Desconto
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Criando Códigos de Desconto (v2) {#creating-discount-codes-v2}

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Com o Ultimate Multisite, você pode criar códigos de desconto para oferecer descontos aos seus clientes nas assinaturas deles. E criá-los é fácil!

## Criando e Editando Códigos de Desconto {#creating-and-editing-discount-codes}

Para criar ou editar um código de desconto, vá em **Ultimate Multisite > Discount Codes**.

![Lista de códigos de desconto — estado vazio antes da existência de quaisquer códigos](/img/config/discount-codes-empty.png)

Lá você terá uma lista dos códigos de desconto que já criou.

Você pode clicar em **Adicionar Código de Desconto** para criar um novo cupom ou editar os existentes passando o mouse sobre eles e clicando em **Editar**.

![Lista de códigos de desconto com ações ao passar o mouse mostrando links Editar e Excluir](/img/config/discount-codes-list-hover.png)

![Botão Adicionar Código de Desconto no cabeçalho da página](/img/config/discount-codes-add-button.png)

Você será redirecionado para a página onde criará ou editará seu código de cupom. Neste exemplo, vamos criar um novo.

![Página de edição do código de desconto com todas as seções visíveis](/img/config/discount-code-edit.png)

Vamos dar uma olhada nas configurações disponíveis aqui:

**Inserir Código de Desconto:** Este é apenas o nome do seu código de desconto. Este não é o código que seus clientes precisarão usar no formulário de checkout.

**Descrição:** Aqui, você pode descrever brevemente para que serve este cupom.

![Campos de nome e descrição do código de desconto no topo da página de edição](/img/config/discount-code-description.png)

Você também pode visualizar o código de desconto como ativo ou inativo:

![Status de ativo do código de desconto](/img/config/discount-code-active.png)

**Código do Cupom:** É aqui que você define o código que seus clientes precisarão inserir durante o checkout.

![Campo de código de cupom onde os clientes inserem o código no checkout](/img/config/discount-code-coupon-field.png)

**Desconto:** Aqui, você pode definir uma **porcentagem** ou um **valor fixo** em dinheiro para o seu código de desconto.

![Configuração do valor do desconto com menu suspenso de porcentagem ou valor fixo](/img/config/discount-code-amount.png)

**Aplicar a renovações:** Se esta opção estiver desativada, este código de desconto será aplicado apenas ao **primeiro pagamento**. Todos os outros pagamentos não terão desconto. Se esta opção estiver ativada, o código de desconto será válido para todos os pagamentos futuros.

**Desconto na taxa de configuração (Setup fee):** Se esta opção estiver desativada, o código de cupom **não dará nenhum desconto na taxa de configuração** do pedido. Se esta opção estiver ativada, você pode definir o desconto (porcentagem ou valor fixo) que este código de cupom aplicará à taxa de configuração dos seus planos.

![Opções de alternância para aplicar a renovações e desconto na taxa de configuração](/img/config/discount-code-renewals.png)

**Ativo:** Ative ou desative manualmente este código de cupom.

![Alternador ativo para habilitar ou desabilitar o código de desconto manualmente](/img/config/discount-code-active.png)

Em **Opções Avançadas**, temos as seguintes configurações:

![Opções avançadas do código de desconto](/img/config/discount-code-advanced.png)

**Limite de usos:**

  * **Usos:** Aqui, você pode ver quantas vezes o código de desconto foi usado.

  * **Máximo de usos:** Isso limitará quantas vezes os usuários podem usar este código de desconto. Por exemplo, se você colocar 10 aqui, o cupom só poderá ser usado 10 vezes. Após esse limite, o código de cupom não poderá mais ser usado.

![Configuração de limite de usos com contagem de usos atuais e campo máximo de usos](/img/config/discount-code-limit-uses.png)

**Datas de início e expiração:** Aqui você terá a opção de adicionar uma data de início e/ou uma data de expiração ao seu cupom.

![Campos de data de início e expiração para agendar o código de desconto](/img/config/discount-code-dates.png)

**Limitar produtos:** Se você ativar **Selecionar produtos**, todos os seus produtos serão exibidos para você. Você terá a opção de selecionar manualmente (ativando ou desativando) qual produto pode aceitar este código de cupom. Os produtos que estiverem desativados aqui não mudarão nada se seus clientes tentarem usar este código de cupom neles.

![Seção Limitar produtos com interruptores por produto](/img/config/discount-code-limit-products.png)

Depois de configurar todas essas opções, clique em **Salvar Código de Desconto** para salvar seu cupom e pronto!

![Botão Salvar Código de Desconto na parte inferior da página de edição](/img/config/discount-code-save.png)

O cupom agora está na sua lista e, a partir daí, você pode clicar para **editar ou excluir** ele.

![Linha do código de desconto na lista com ações de passar o mouse Editar e Excluir](/img/config/discount-codes-list-hover.png)

###

### Usando Parâmetros de URL: {#using-url-parameters}

Se você quiser personalizar suas tabelas de preços ou criar uma página bonita para seu site com um código de cupom e aplicar automaticamente um código de desconto no formulário de checkout, você pode fazer isso através dos parâmetros de URL.

Primeiro, você precisa obter o link compartilhável do seu plano. Para fazer isso, vá em **Ultimate Multisite > Produtos** e selecione um plano.

Clique no botão **Clicar para Copiar Link Compartilhável**. Isso lhe dará o link compartilhável para este plano específico. No nosso caso, o link compartilhável fornecido foi [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Página do produto com botão de link compartilhável](/img/config/products-list.png)

Para aplicar seu código de desconto a este plano específico, basta adicionar o parâmetro **?discount_code=XXX** à URL. Onde **XXX** é o código do cupom.

No nosso exemplo aqui, vamos aplicar o código de cupom **50OFF** a este produto específico.

A URL para este plano específico com o código de desconto 50OFF aplicada ficará assim: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.
