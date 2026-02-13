---
title: Formulários de Checkout
sidebar_position: 19
_i18n_hash: 66bfff807dcb07f2c495741a4fa601b9
---
# Formulários de Checkout

Formulários de Checkout são uma maneira fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes.

Ultimate Multisite 2.0 oferece um editor de Formulário de Checkout que permite criar quantos formulários quiser, com diferentes campos, produtos em oferta, etc.

Para acessar este recurso, vá ao menu Formulários de Checkout, na barra lateral esquerda.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Nesta página, você pode ver todos os formulários de checkout que possui.

Se quiser criar um novo, basta clicar em **Add Checkout Form** no topo da página.

Você pode selecionar uma das três opções como ponto de partida: **single step**, **multi-step** ou **blank**. Em seguida, clique em **Go to the Editor**.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativamente, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome. Lá, você também encontrará as opções para copiar o shortcode do formulário ou excluir o formulário.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Editando um Formulário de Checkout

Você pode criar formulários de checkout para diferentes propósitos. Neste exemplo, trabalharemos em um formulário de registro.

Após navegar até o editor de formulário de checkout, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcodes, por exemplo).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Os formulários são compostos por etapas e campos. Você pode adicionar uma nova etapa clicando em **Add New Checkout Step**.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na primeira aba da janela modal, preencha o conteúdo da etapa do seu formulário. Dê a ela um ID, um nome e uma descrição. Esses itens são usados principalmente internamente.

![Checkout form step](/img/config/checkout-form-step.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre “Always show”, “Only show for logged in users” ou “Only show for guests”.

![Checkout form step](/img/config/checkout-form-step.png)

Por fim, configure o estilo da etapa. Esses campos são opcionais.

![Checkout form step](/img/config/checkout-form-step.png)

Agora, é hora de adicionar campos à nossa primeira etapa. Basta clicar em **Add New Field** e selecionar o tipo de seção desejado.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Cada campo possui diferentes parâmetros a serem preenchidos. Para esta primeira entrada, selecionaremos o campo **Username**.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Você pode adicionar quantas etapas e campos precisar. Para exibir seus produtos para que seus clientes escolham um, use o campo **Pricing Table**. Se quiser permitir que seus clientes escolham um modelo, adicione o campo **Template Selection**. E assim por diante.

_**Observação:** username, email, password, site title, site URL, order summary, payment, and submit button são campos obrigatórios para criar um formulário de checkout._

Enquanto trabalha no seu formulário de checkout, você pode sempre usar o botão **Preview** para ver como seus clientes verão o formulário. Você também pode alternar entre a visualização como usuário existente ou visitante

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Por fim, nas **Advanced Options** você pode configurar a mensagem da página “Thank You”, adicionar trechos para rastrear conversões, adicionar CSS personalizado ao seu formulário de checkout ou restringi-lo a determinados países.

![Advanced Options](/img/config/checkout-form-advanced.png)

Você também pode habilitar ou desabilitar manualmente seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

![Active toggle](/img/config/checkout-form-active.png)

Não se esqueça de salvar seu formulário de checkout!

![Save button](/img/config/checkout-form-save.png)

Para obter o shortcode do seu formulário, clique em **Generate Shortcode** e copie o resultado exibido na janela modal.

![Save button with shortcode](/img/config/checkout-form-save.png)
