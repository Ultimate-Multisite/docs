---
title: Formulários de Checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulários de Checkout

Formulários de Checkout são uma maneira fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes.

Ultimate Multisite 2.0 oferece um editor de Formulários de Checkout que permite criar quantos formulários você quiser, com diferentes campos, produtos em oferta etc.

Para acessar esse recurso, vá para o menu Checkout Forms, na barra lateral esquerda.

![Lista de Checkout Forms](/img/config/checkout-forms-list.png)

Nesta página, você pode ver todos os formulários de checkout que possui.

A tabela de lista inclui uma coluna **Status** para que você possa confirmar se cada formulário está disponível atualmente para os clientes:

| Status | Significado |
|---|---|
| **Active** | O formulário pode ser usado em qualquer lugar onde seu shortcode ou página de registro esteja publicado. |
| **Inactive** | O formulário está salvo, mas desativado. Os clientes não podem concluir o checkout com ele até que você o ative novamente. |

Use a coluna de status antes de editar um fluxo de registro público, especialmente quando você mantém formulários de checkout em rascunho ou sazonais junto com seus formulários ativos.

Se quiser criar um novo, basta clicar em Add Checkout Form no topo da página.

Você pode selecionar uma destas três opções como ponto de partida: etapa única, várias etapas ou em branco. Em seguida, clique para ir ao Editor.

Quando você escolhe **etapa única** ou **multi-step** como ponto de partida, o template de formulário agora inclui um campo **Seleção de Template** por padrão. Esse campo permite que seus clientes escolham um template de site durante o processo de registro. Você pode deixá-lo no lugar, removê-lo ou reposicioná-lo como qualquer outro campo no editor.

![Editor de Formulário de Checkout](/img/config/checkout-form-editor.png)

Como alternativa, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome deles. Lá, você também encontrará as opções para copiar o shortcode do formulário ou excluir o formulário.

![Ações ao passar o mouse sobre o formulário de checkout](/img/config/checkout-form-hover-actions.png)

#### Visão geral do Editor de Formulário de Checkout {#checkout-form-editor-overview}

O editor de formulário de checkout fornece uma interface abrangente para criar seus formulários de registro. Aqui está uma visão geral do layout do editor:

![Visão geral do editor de Formulário de Checkout](/img/config/checkout-form-editor-overview.png)

### Editando um Formulário de Checkout {#editing-a-checkout-form}

Você pode criar formulários de checkout para diferentes finalidades. Neste exemplo, trabalharemos em um formulário de registro.

Depois de navegar até o editor de formulário de checkout, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcodes, por exemplo).

![Editor de Formulário de Checkout](/img/config/checkout-form-editor.png)

Os formulários são compostos por etapas e campos. Você pode adicionar uma nova etapa clicando em Adicionar Nova Etapa de Checkout.

![Adicionar Nova Etapa de Checkout](/img/config/checkout-form-add-step.png)

Na primeira aba da janela modal, preencha o conteúdo da etapa do seu formulário. Dê a ela um ID, um nome e uma descrição. Esses itens são usados principalmente internamente.

![Aba de conteúdo da etapa do formulário de checkout](/img/config/checkout-form-step-content.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre "Sempre mostrar", "Mostrar apenas para usuários conectados" ou "Mostrar apenas para visitantes".

![Aba de visibilidade da etapa do formulário de checkout](/img/config/checkout-form-step-visibility.png)

Por fim, configure o estilo da etapa. Estes são campos opcionais.

![Aba de estilo da etapa do formulário de checkout](/img/config/checkout-form-step-style.png)

Agora, é hora de adicionar campos à nossa primeira etapa. Basta clicar em Adicionar Novo Campo e selecionar o tipo de seção que você deseja.

![Etapa do formulário de checkout com campos](/img/config/checkout-form-step-with-fields.png)

Cada campo tem diferentes parâmetros a serem preenchidos. Para esta primeira entrada, selecionaremos o campo "Username".

![Menu suspenso de seleção do tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

![Configurações de conteúdo do campo Username](/img/config/checkout-form-username-content.png)

![Configurações de visibilidade do campo Username](/img/config/checkout-form-username-visibility.png)

![Configurações de estilo do campo Username](/img/config/checkout-form-username-style.png)

Você pode adicionar quantas etapas e campos precisar. Para exibir seus produtos para que seus clientes escolham um, use o campo Tabela de Preços. Se quiser permitir que seus clientes escolham um template, adicione o campo Seleção de Template. E assim por diante.

![Caixa de diálogo Adicionar Novo Campo](/img/config/checkout-form-add-field-dialog.png)

_**Observação:** nome de usuário, email, senha, título do site, URL do site, resumo do pedido, pagamento e botão de envio são campos obrigatórios para criar um formulário de checkout._

Enquanto você estiver trabalhando no seu formulário de checkout, sempre poderá usar o botão Preview para ver como seus clientes verão o formulário. Você também pode alternar entre visualizar como um usuário existente ou um visitante

![Botão de pré-visualização do formulário de checkout](/img/config/checkout-form-preview-button.png)

![Modal de pré-visualização do formulário de checkout](/img/config/checkout-form-preview-modal.png)

Por fim, em Opções Avançadas, você pode configurar a mensagem para a página "Thank You", adicionar snippets para rastrear conversões, adicionar CSS personalizado ao seu formulário de checkout ou restringi-lo a determinados países.

![Opções Avançadas](/img/config/checkout-form-advanced.png)

Você também pode ativar ou desativar manualmente seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

![Alternância de ativo](/img/config/checkout-form-active.png)

Para excluir um formulário, clique na opção de exclusão nas ações do formulário:

![Opção de excluir formulário de checkout](/img/config/checkout-form-delete.png)

Não se esqueça de salvar seu formulário de checkout!

![Botão Salvar](/img/config/checkout-form-save.png)

Para obter o shortcode do seu formulário, clique em Generate Shortcode e copie o resultado exibido na janela modal.

![Botão Salvar com shortcode](/img/config/checkout-form-save.png)

### O Campo Tabela de Preços {#the-pricing-table-field}

O campo **Pricing Table** exibe seus produtos no formulário de checkout para que os clientes possam escolher um plano. Ao editar esse campo, você pode configurar várias opções:

![Configurações do campo Pricing Table](/img/config/pricing-table-field-settings.png)

Veja como a tabela de preços aparece no formulário de registro no frontend:

![Tabela de preços de checkout no frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produtos**: Selecione quais produtos exibir e a ordem em que aparecem.
  * **Forçar Durações Diferentes**: Quando ativado, todos os produtos são exibidos, independentemente de terem uma variação de preço correspondente ao período de cobrança selecionado no momento. Quando desativado (padrão), produtos sem uma variação para o período selecionado ficam ocultos.
    ![Opção para forçar durações na tabela de preços](/img/config/pricing-table-force-durations.png)
  * **Ocultar quando Pré-Selecionado**: Oculta a tabela de preços quando um plano já foi selecionado via URL (por exemplo, `/register/premium`).
  * **Template da Pricing Table**: Escolha o template visual para a tabela de preços (Lista Simples, Legado etc.).

Se você adicionar um produto à Pricing Table antes de o formulário incluir os campos necessários para concluir o fluxo de checkout desse produto, o editor agora exibirá um aviso. Use o aviso para adicionar o campo obrigatório ausente antes de publicar ou salvar alterações em um formulário de registro ativo.

### Adicionando um Alternador de Seleção de Período {#adding-a-period-selection-toggle}

If você configurou [Variações de Preço](creating-your-first-subscription-product#price-variations) nos seus produtos (ex.: preços mensal e anual), pode adicionar um campo **Seleção de Período** ao seu formulário de checkout. Esse campo exibe um alternador que permite que os clientes troquem entre períodos de cobrança, e a tabela de preços é atualizada dinamicamente em tempo real.

#### Etapa 1: Configure Variações de Preço nos Seus Produtos {#step-1-set-up-price-variations-on-your-products}

Antes de adicionar o campo Seleção de Período, certifique-se de que seus produtos tenham variações de preço configuradas. Acesse **Ultimate Multisite > Products**, edite um produto e navegue até a aba **Price Variations** para adicionar períodos de cobrança alternativos (ex.: Anual com preço com desconto).

![Aba Price Variations em um produto](/img/config/product-price-variations-tab.png)

#### Etapa 2: Adicione o Campo Seleção de Período ao Seu Formulário de Checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Acesse **Ultimate Multisite > Checkout Forms** e edite seu formulário de checkout.

2. Role para baixo até a etapa que contém seu campo **Tabela de Preços** e clique em **Adicionar novo Campo**.

3. Na caixa de diálogo de seleção de tipo de campo, clique em **Seleção de Período**.

![Caixa de diálogo Adicionar Novo Campo mostrando Seleção de Período](/img/config/checkout-form-add-field-dialog.png)

4. Configure as opções de período. Cada opção precisa de:
   * **Duração**: O número (ex.: `1`)
   * **Unidade de duração**: O tipo de período (Dias, Semanas, Meses ou Anos)
   * **Rótulo**: O texto que os clientes verão (ex.: "Mensal", "Anual")

5. Clique em **+ Adicionar Opção** para adicionar mais opções de período. Essas opções devem corresponder às variações de preço que você configurou nos seus produtos.

![Configurações do campo de Seleção de Período](/img/config/period-selection-field-settings.png)

6. Escolha um **Modelo do Seletor de Período** (Clean é o padrão, que renderiza um seletor simples com estilo, pronto para CSS personalizado).

7. Clique em **Salvar Campo**.

#### Etapa 3: Posicionar o Campo Acima da Tabela de Preços {#step-3-position-the-field-above-the-pricing-table}

Para a melhor experiência do usuário, certifique-se de que o campo de Seleção de Período apareça **antes** do campo de Tabela de Preços na sua etapa de checkout. Você pode arrastar os campos para reordená-los no editor do formulário de checkout. Dessa forma, os clientes primeiro escolhem um período de cobrança e depois veem os preços para esse período.

![Editor de formulário de checkout mostrando a ordem dos campos](/img/config/checkout-form-editor-with-fields.png)

#### Como Funciona no Frontend {#how-it-works-on-the-frontend}

Depois de configurado, os clientes que visitarem sua página de cadastro verão o seletor de período acima da tabela de preços. Quando clicarem em um período de cobrança diferente:

  * A tabela de preços é atualizada instantaneamente para mostrar os preços do período selecionado (sem necessidade de recarregar a página).
  * Se **Forçar Durações Diferentes** estiver desativado no campo de Tabela de Preços, os produtos sem uma variação de preço para o período selecionado serão ocultados.
  * Se **Forçar Durações Diferentes** estiver ativado, todos os produtos permanecerão visíveis mesmo que não tenham uma variação para o período selecionado (eles mostrarão o preço padrão).

#### Pré-selecionando um Período de Cobrança via URL {#pre-selecting-a-billing-period-via-url}

Você também pode pré-selecionar um produto e um período de cobrança pela URL. Ultimate Multisite oferece suporte a estes padrões de URL:

  * `/register/premium` — Pré-seleciona apenas o produto "Premium"
  * `/register/premium/12` — Pré-seleciona o produto e a duração de 12 meses
  * `/register/premium/1/year` — Pré-seleciona o produto com duração de 1 ano

### O campo de seleção de modelo {#the-template-selection-field}

O campo **Seleção de modelo** permite que os clientes escolham um modelo de site durante o checkout. Ele agora é incluído por padrão nos modelos de formulário de checkout de **etapa única** e **várias etapas** adicionados no Ultimate Multisite v2.6.1.

#### Adicionando o campo manualmente {#adding-the-field-manually}

Se você está trabalhando com um formulário criado antes da v2.6.1, ou iniciado a partir de um modelo em branco:

1. Vá para **Ultimate Multisite > Formulários de checkout** e edite seu formulário de checkout.
2. Na etapa em que os detalhes do site são coletados, clique em **Adicionar novo campo**.
3. Selecione **Seleção de modelo** na caixa de diálogo de tipo de campo.
4. Configure o campo:
   - **Rótulo** — O título que os clientes veem acima da grade de modelos (por exemplo, "Escolha um modelo de site").
   - **Obrigatório** — Se os clientes devem selecionar um modelo antes de prosseguir.

#### Como funciona {#how-it-works}

Quando um cliente escolhe um modelo durante o checkout, Ultimate Multisite o usa ao provisionar o novo site. Os modelos exibidos vêm da sua lista de **Modelos de site** (**Ultimate Multisite > Modelos de site**). Apenas modelos marcados como disponíveis para clientes aparecem aqui.

### Domínios base do formulário de checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 trata domínios configurados em campos **Site URL** do formulário de checkout como domínios base da rede. Use as configurações de domínios disponíveis do campo quando quiser que os clientes criem sites sob um ou mais domínios de registro compartilhados, como `example.com` e `sites.example.com`.

Domínios base compartilhados do formulário de checkout não são tratados como mapeamentos de domínio personalizado por site. Quando um cliente cria um site em subdiretório em uma dessas bases, Ultimate Multisite não cria um registro de domínio mapeado que faria com que o host compartilhado pertencesse somente a esse único site. O host compartilhado permanece disponível para sites irmãos que usam a mesma base do formulário de checkout.

Mantenha domínios personalizados para hosts mapeados por cliente, como `customer-example.com`. Mantenha domínios base do formulário de checkout para hosts de registro compartilhados que muitos sites podem usar.

#### Removendo o campo {#removing-the-field}

Se você não oferece modelos de site, remova o campo Template Selection do seu formulário. Os clientes então receberão o modelo padrão que estiver configurado em **Ultimate Multisite > Settings > Site Templates**.
