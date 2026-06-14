---
title: Formulários de checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulários de Checkout

Os Formulários de Checkout são uma maneira fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes.

O Ultimate Multisite 2.0 oferece um editor de Formulário de Checkout que permite criar quantos formulários você quiser, com campos diferentes, produtos disponíveis, etc.

Para acessar este recurso, vá para o menu Formulários de Checkout, na barra lateral esquerda.

![Lista de Formulários de Checkout](/img/config/checkout-forms-list.png)

Nesta página, você pode ver todos os formulários de checkout que possui.

A tabela da lista inclui uma coluna **Status** para você confirmar se cada formulário está atualmente disponível para os clientes:

| Status | Significado |
|---|---|
| **Ativo** | O formulário pode ser usado em qualquer lugar onde seu shortcode ou página de registro esteja publicado. |
| **Inativo** | O formulário está salvo, mas desabilitado. Os clientes não podem concluir o checkout com ele até que você o habilite novamente. |

Use a coluna status antes de editar um fluxo de registro público, especialmente quando mantém formulários de checkout rascunho ou sazonais ao lado dos seus formulários ativos.

Se quiser criar um novo, basta clicar em Adicionar Formulário de Checkout no topo da página.

Você pode selecionar uma destas três opções como ponto de partida: passo único (single step), multi-passo (multi-step) ou vazio (blank). Depois, clique para Ir para o Editor.

Quando você escolhe **passo único** ou **multi-passo** como seu ponto de partida, o modelo do formulário agora inclui um campo **Seleção de Modelo (Template Selection)** por padrão. Este campo permite que seus clientes escolham um modelo de site durante o processo de registro. Você pode mantê-lo no lugar, removê-lo ou reposicioná-lo como qualquer outro campo no editor.

![Editor de Formulário de Checkout](/img/config/checkout-form-editor.png)

Alternativamente, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome deles. Lá, também encontrará as opções para copiar o shortcode do formulário ou para excluir o formulário.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Visão Geral do Editor de Formulário de Checkout

O editor de formulário de checkout oferece uma interface completa para construir seus formulários de registro. Aqui está uma visão geral da disposição do editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Editando um Formulário de Checkout

Você pode criar formulários de checkout para diferentes finalidades. Neste exemplo, vamos trabalhar em um formulário de registro.

Após navegar até o editor de formulário de checkout, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcodes, por exemplo).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Os formulários são compostos por etapas e campos. Você pode adicionar uma nova etapa clicando em Adicionar Nova Etapa de Checkout.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na primeira aba da janela modal, preencha o conteúdo da etapa do seu formulário. Dê a ela um ID, nome e descrição. Estes itens são usados principalmente internamente.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre "Sempre mostrar", "Mostrar apenas para usuários logados" ou "Mostrar apenas para convidados".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Finalmente, configure o estilo da etapa. Estes são campos opcionais.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Agora, é hora de adicionar campos à nossa primeira etapa. Basta clicar em Adicionar Novo Campo e selecionar o tipo de seção que você deseja.

![Passo do formulário de checkout com campos](/img/config/checkout-form-step-with-fields.png)

Cada campo tem parâmetros diferentes para serem preenchidos. Para esta primeira entrada, selecionaremos o campo "Username" (Nome de Usuário).

![Menu suspenso de seleção de tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

![Configurações de conteúdo do campo Username](/img/config/checkout-form-username-content.png)

![Configurações de visibilidade do campo Username](/img/config/checkout-form-username-visibility.png)

![Configurações de estilo do campo Username](/img/config/checkout-form-username-style.png)

Você pode adicionar quantos passos e campos precisar. Para exibir seus produtos para que os clientes possam escolher um, use o campo Pricing Table (Tabela de Preços). Se você quiser permitir que seus clientes escolham um template, adicione o campo Template Selection (Seleção de Template). E assim por diante.

![Diálogo Adicionar Novo Campo](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, site title (título do site), site URL (URL do site), order summary (resumo do pedido), payment (pagamento) e submit button (botão de envio) são campos obrigatórios para criar um formulário de checkout._

Enquanto você trabalha no seu formulário de checkout, pode usar sempre o botão Preview (Visualizar) para ver como seus clientes verão o formulário. Você também pode alternar entre a visualização como usuário existente ou visitante.

![Botão de visualização do Formulário de Checkout](/img/config/checkout-form-preview-button.png)

![Modal de visualização do Formulário de Checkout](/img/config/checkout-form-preview-modal.png)

Finalmente, nas Opções Avançadas (Advanced Options), você pode configurar a mensagem para a página "Obrigado" (Thank You page), adicionar snippets para rastrear conversões, adicionar CSS personalizado ao seu formulário de checkout ou restringi-lo a certos países.

![Opções Avançadas](/img/config/checkout-form-advanced.png)

Você também pode ativar ou desativar manualmente seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

![Alternador Ativo](/img/config/checkout-form-active.png)

Para excluir um formulário, clique na opção de exclusão nas ações do formulário:

![Opção de exclusão do formulário de checkout](/img/config/checkout-form-delete.png)

Não se esqueça de salvar seu formulário de checkout!

![Botão Salvar](/img/config/checkout-form-save.png)

Para obter o shortcode do seu formulário, clique em Gerar Shortcode e copie o resultado que aparece na janela modal.

![Botão Salvar com shortcode](/img/config/checkout-form-save.png)

### O Campo Tabela de Preços

O campo **Tabela de Preços** exibe seus produtos no formulário de checkout para que os clientes possam escolher um plano. Ao editar este campo, você pode configurar várias opções:

![Configurações do campo da tabela de preços](/img/config/pricing-table-field-settings.png)

Veja como a tabela de preços aparece no formulário de registro frontend:

![Tabela de preços do checkout frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produtos**: Selecione quais produtos exibir e a ordem em que eles aparecerão.
  * **Forçar Duração Diferente**: Quando ativado, todos os produtos são mostrados independentemente de terem uma variação de preço correspondente ao período de faturamento atualmente selecionado. Quando desativado (padrão), produtos sem uma variação para o período selecionado ficam ocultos.
    ![Opção Forçar durações da tabela de preços](/img/config/pricing-table-force-durations.png)
  * **Ocultar quando Pré-Selecionado**: Oculta a tabela de preços quando um plano já foi selecionado via URL (ex: `/register/premium`).
  * **Modelo da Tabela de Preços**: Escolha o modelo visual para a tabela de preços (Lista Simples, Legado, etc.).

Se você adicionar um produto à Tabela de Preços antes que o formulário inclua os campos necessários para concluir o fluxo de checkout desse produto, o editor agora exibe um aviso. Use o aviso para adicionar o campo obrigatório que está faltando antes de publicar ou salvar as alterações para um formulário de registro ativo.

### Adicionando um Toggle de Seleção de Período

Se você configurou [Variações de Preço](creating-your-first-subscription-product#price-variations) nos seus produtos (por exemplo, preços mensal e anual), você pode adicionar um campo de **Seleção de Período** ao seu formulário de checkout. Este campo exibe um toggle que permite aos clientes alternar entre os períodos de faturamento, e a tabela de preços é atualizada dinamicamente em tempo real.

#### Passo 1: Configure as Variações de Preço nos Seus Produtos

Antes de adicionar o campo Seleção de Período, certifique-se de que seus produtos tenham variações de preço configuradas. Vá para **Ultimate Multisite > Products**, edite um produto e navegue até a aba **Price Variations** (Variações de Preço) para adicionar períodos de faturamento alternativos (por exemplo, Anual com um preço com desconto).

![Aba Price Variations em um produto](/img/config/product-price-variations-tab.png)

#### Passo 2: Adicione o Campo Seleção de Período ao Seu Formulário de Checkout

1. Vá para **Ultimate Multisite > Checkout Forms** e edite seu formulário de checkout.

2. Role a página até o passo que contém o campo **Pricing Table** (Tabela de Preços) e clique em **Add new Field** (Adicionar novo Campo).

3. No diálogo de seleção do tipo de campo, clique em **Period Select** (Selecionar Período).

![Diálogo Add New Field mostrando Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configure as opções de período. Cada opção precisa de:
   * **Duration** (Duração): O número (ex: `1`)
   * **Duration unit** (Unidade de Duração): O tipo de período (Dias, Semanas, Meses ou Anos)
   * **Label** (Rótulo): O texto que os clientes verão (ex: "Mensal", "Anual")

5. Clique em **+ Add Option** (Adicionar Opção) para adicionar mais escolhas de período. Essas opções devem corresponder às variações de preço que você configurou nos seus produtos.

![Configurações do campo Seleção de Período](/img/config/period-selection-field-settings.png)

6. Escolha um **Period Selector Template** (Modelo de Seletor de Período) (Clean é o padrão, que renderiza um seletor simples estilizado pronto para CSS personalizado).

7. Clique em **Salvar Campo**.

#### Passo 3: Posicione o Campo Acima da Tabela de Preços

Para a melhor experiência do usuário, certifique-se de que o campo Seleção de Período apareça **antes** do campo Tabela de Preços na sua etapa de checkout. Você pode arrastar os campos para reordená-los no editor do formulário de checkout. Desta forma, os clientes escolhem primeiro um período de faturamento e depois veem os preços para esse período.

![Editor do formulário de checkout mostrando a ordem dos campos](/img/config/checkout-form-editor-with-fields.png)

#### Como Funciona no Frontend

Depois de configurado, os clientes que visitarem sua página de registro verão o seletor de período acima da tabela de preços. Quando eles clicam em um período de faturamento diferente:

  * A tabela de preços é atualizada instantaneamente para mostrar os preços do período selecionado (não é necessário recarregar a página).
  * Se **Forçar Duração Diferente** estiver desabilitado no campo Tabela de Preços, produtos sem variação de preço para o período selecionado serão ocultados.
  * Se **Forçar Duração Diferente** estiver habilitado, todos os produtos permanecem visíveis mesmo que não tenham uma variação para o período selecionado (eles mostrarão o preço padrão).

#### Pré-selecionando um Período de Faturamento via URL

Você também pode pré-selecionar um produto e um período de faturamento através da URL. O Ultimate Multisite suporta estes padrões de URL:

  * `/register/premium` — Pré-seleciona apenas o produto "Premium"
  * `/register/premium/12` — Pré-seleciona o produto e a duração de 12 meses
  * `/register/premium/1/year` — Pré-seleciona o produto com duração de 1 ano

### O Campo de Seleção de Template

O campo **Seleção de Template** permite que os clientes escolham um template de site durante o checkout. Ele já está incluído por padrão nos templates de formulário de checkout de etapa única (*single step*) e múltiplas etapas (*multi-step*) adicionados no Ultimate Multisite v2.6.1.

#### Adicionando o campo manualmente

Se você estiver trabalhando com um formulário criado antes da v2.6.1 ou que começou a partir de um modelo em branco:

1. Vá para **Ultimate Multisite > Checkout Forms** e edite seu formulário de checkout.
2. Na etapa onde os detalhes do site são coletados, clique em **Adicionar novo Campo**.
3. Selecione **Template Selection** (Seleção de Modelo) no diálogo do tipo de campo.
4. Configure o campo:
   - **Label** — O título que os clientes veem acima da grade de modelos (exemplo: "Escolha um modelo de site").
   - **Required** — Se os clientes devem selecionar um modelo antes de prosseguir.

#### Como funciona

Quando um cliente escolhe um modelo durante o checkout, o Ultimate Multisite o utiliza ao provisionar o novo site dele. Os modelos exibidos vêm da sua lista de **Site Templates** (**Ultimate Multisite > Site Templates**). Apenas os modelos marcados como disponíveis para clientes aparecem aqui.

### Domínios base do formulário de checkout

O Ultimate Multisite v2.13.0 trata os domínios configurados nos campos **Site URL** do formulário de checkout como domínios base da rede. Use as configurações de domínio disponível do campo quando quiser que os clientes criem sites sob um ou mais domínios de registro compartilhados, como `example.com` e `sites.example.com`.

Domínios base do formulário de checkout compartilhados não são tratados como mapeamentos de domínio personalizado por site. Quando um cliente cria um site em subdiretório em uma dessas bases, o Ultimate Multisite não cria um registro de domínio mapeado que faria com que o host compartilhado pertences apenas àquele site. O host compartilhado permanece disponível para sites irmãos que usem a mesma base do formulário de checkout.

Mantenha os domínios personalizados para hosts mapeados por cliente, como `customer-example.com`. Mantenha os domínios base do formulário de checkout para hosts de registro compartilhados que muitos sites podem usar.

#### Remover o campo

Se você não oferece modelos de site, remova o campo Seleção de Modelo do seu formulário. Os clientes receberão o modelo padrão configurado em **Ultimate Multisite > Configurações > Modelos de Site**.
