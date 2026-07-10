---
title: Formularios de pago
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formularios de Pago (Checkout Forms) {#checkout-forms}

Os Formularios de Pago son unha forma fácil e flexible de experimentar diferentes enfoques ao intentar converter novos clientes.

Ultimate Multisite 2.0 ofrece un editor de Formularios de Pago que te permite crear tantas formas como queares, con diferentes campos, produtos oferecidos, etc.

Para acceder a esta función, diríxete ao menú Checkout Forms, na barra lateral esquerda.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Nesta página podes ver todos os formularios de pago que tes.

A tábula da lista incluí unha columna **Status** para que podes confirmar se cada formulario está actualmente disponible para os clientes:

| Status | Significado |
|---|---|
| **Active** (Activo) | O formulario pode ser usado en cualquier lugar onde se publique o seu shortcode ou página de rexistro. |
| **Inactive** (Inactivo) | O formulario está salvo pero deshabilitado. Os clientes non poden completar o pago con ele ata que o vuelvas a activar. |

Usa a columna Status antes de editar un flujo de rexistro público, especialmente cando mantes formularios de pago em borrador ou sazonais ao lado dos teus formularios en vivo.

Se queres crear uno novo, basta con clicar en Add Checkout Form na parte superior da página.

Podrás seleccionar unha destas tres opción como punto de partida: single step (paso único), multi-step (múltiplo paso) ou blank (en branco). Aínda así, clica para ir ao Editor.

Cando escollines **single step** ou **multi-step** como punto de partida, o modelo do formulario incluí agora un campo **Template Selection** por defecto. Este campo permite que os teus clientes elixan un modelo de sitio durante o proceso de rexistro. Podrás deixalo así, removerlo ou reposicionalo como cualquier outro campo no editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativamente, podes editar ou duplicar os formularios que já tens facendo clic nas opcións abaixo do seu nome. Aí, tamén encontrarás as opcións para copiar o shortcode do formulario ou para deletar o formulario.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Visión Geral do Editor de Formularios de Checkout {#checkout-form-editor-overview}

O editor de formularios de checkout proporciona unha interfaz completa para construir os teus formularios de registo. Aquí tes unha visión geral do enxeito:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Editar un Formulario de Checkout {#editing-a-checkout-form}

Podés crear formularios de checkout para diferentes propósitos. Neste exemplo traballaremos con un formulario de registo.

Tras navegar ao editor de formularios de checkout, dás nome ao teu formulario (que se utilizará só para referencia interna) e a súa slug (utilizada para crear shortcodes, por exemplo).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Os formularios están compostos de pasos e campos. Podés añadir un novo paso facendo clic en Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na primeira pestaña da ventana modal, rellena o contenido do paso do teu formulario. Dás lle unha ID, un nome e unha descripción. Estes elementos se utilizan principalmente internamente.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

A continuación, establece a visibilidade do paso. Podés escoller entre "Mostrar sempre", "Mostrar só para usuarios logados" ou "Mostrar só para convidados".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Finalmente, configura o estilo do paso. Estes son campos opcionais.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Agora, é hora de añadir campos ao noso primeiro paso. Basta clicar en Add New Field e seleccionar o tipo de sección que queres.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Cada campo ten diferentes parámetros para ser preenchidos. Para esta primeira entrada, seleccionaremos el campo "Username" (Nombre de usuario).

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Podes añadir tantos pasos e campos como precises. Para mostrar os teus produtos para que os clientes elixan uno, usa o campo Pricing Table (Tabela de Precios). Se queres deixar os teus clientes escoller un modelo, añade o campo Template Selection (Selección de Plantilla). E así sucesivamente.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, site title (título do sitio), site URL (URL do sitio), order summary (resumo do pedido), payment (pago) e submit button (botón de enviar) son campos obrigatórios para crear un checkout form._

Mientras traballas no teu checkout form, podes usar sempre o botón Preview (Previsualizar) para ver como os teus clientes van a ver o form. Podes tamén alternar entre ver como usuario existente ou visitante.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Finalmente, nas Advanced Options (Opciones Avançadas) podes configurar a mensagem para a página "Thank You" (Gracias), añadir snippets para rastrexar conversios, añadir CSS personalizado ao teu checkout form ou restringílo a certos países.

![Advanced Options](/img/config/checkout-form-advanced.png)

Podes tamén activar ou desativar o teu checkout form manualmente toggling esta opción na columna da derecha, ou deletelo permanentemente.

![Active toggle](/img/config/checkout-form-active.png)

Para apagar un formulario, pulsa a la opción de eliminar nas accións do formulario:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Non te esquezas de salvar o teu formulario de checkout!

![Save button](/img/config/checkout-form-save.png)

Para obter o shortcode do teu formulario, pulsa en "Generate Shortcode" (Xerar Shortcode) e copia o resultado que aparece na ventana modal.

![Save button with shortcode](/img/config/checkout-form-save.png)

### O Campo da Tabela de Precios {#the-pricing-table-field}

O campo **Pricing Table** (Tabela de Precios) mostra os teus produtos no formulario de checkout para que os clientes puedan escoller un plan. Ao editar este campo, podes configurar varias opcións:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Así é como aparece a tabela de precios no formulario de registo do frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produtos): Seleita que produtos mostrar e a ordem na que aparecen.
  * **Force Different Durations** (Forzar Duracións Diferentes): Quando está activado, todos os produtos son mostrados independentemente de se tenn o mesmo valor de variación para o período de facturación seleccionado. Quando está desativado (o padrão), os produtos sen variación para o período seleccionado son ocultados.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Ocultar ao Ser Preseleccionado): Oculta a tabela de precios cuando un plan ya está seleccionado vía URL (ex: `/register/premium`).
  * **Pricing Table Template** (Modelo da Tabela de Precios): Escolhe o modelo visual para a tabela de precios (Lista Simple, Legacy, etc.).

Se adicionares un produto á Tabela de Precios antes de que o formulario incluí os campos necesarios para completar o flujo de checkout daquele produto, o editor agora mostra unha advertencia. Usa esa advertencia para añadir o campo necesario que falta antes de publicar ou salvar as modificacións para un formulario de registo en vivo.

### Añadir un Interruptor de Selección de Período {#adding-a-period-selection-toggle}

Se asina configurado [Price Variations](creating-your-first-subscription-product#price-variations) nos tus produtos (por exemplo, precios mensuales y anuales), podes añadir un campo de **Selección de Período** ao teu formulario de checkout. Este campo mostra un interruptor que permite aos clientes cambiar entre períodos de facturación, e a tábula de precios actualiza dinamicamente en tempo real.

#### Passo 1: Configurar as Variantes de Prezo nos Teus Produtos {#step-1-set-up-price-variations-on-your-products}

Antes de añadir o campo Selección de Período, asegúrate de que os teus produtos ten variantes de prezo configuradas. Ve a **Ultimate Multisite > Products**, edita un produto e navega á pestaña **Price Variations** para añadir períodos de facturación alternativos (por exemplo, Anual con un prezo descontado).

![Pestaña Price Variations en un producto](/img/config/product-price-variations-tab.png)

#### Passo 2: Añadir o Campo Selección de Período ao Teu Formulario de Checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Ve a **Ultimate Multisite > Checkout Forms** e edita o teu formulario de checkout.

2. Desplázate até á fase que contén o teu campo **Pricing Table** e pulsa en **Add new Field**.

3. No diálogo de selección de tipo de campo, pulsa en **Period Select**.

![Diálogo Add New Field mostrando Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configura as opcións do período. Cada opción necesita:
   * **Duration**: O número (por exemplo, `1`)
   * **Duration unit**: O tipo de período (Días, Semanas, Meses ou Anos)
   * **Label**: O texto que os clientes verán (por exemplo, "Mensual", "Anual")

5. Pulsa en **+ Add Option** para añadir máis eleccións de período. Estas opcións deben coincidir coas variantes de prezo que configuraste nos teus produtos.

![Configuración del campo Period Selection](/img/config/period-selection-field-settings.png)

6. Escolhe un **Period Selector Template** (Clean é o predefecto, que renderiza un selector simple estilizado listo para CSS personalizado).

7. Clicar en **Save Field**.

#### Passo 3: Posicionar o Campo Acima da Tabela de Preços {#step-3-position-the-field-above-the-pricing-table}

Para a melhor experiência do utilizador, certifique-se de que o campo Seleção de Período aparece **antes** do campo Tabela de Preços no seu passo de checkout. Pode arrastar os campos para reordená-los no editor do formulário de checkout. Desta forma, os clientes escolhem primeiro um período de fatura e depois veem os preços para esse período.

![Editor do formulário de checkout mostrando a ordem dos campos](/img/config/checkout-form-editor-with-fields.png)

#### Como Funciona no Frontend {#how-it-works-on-the-frontend}

Depois de configurado, os clientes que visitarem a sua página de registo verão o seletor de período acima da tabela de preços. Quando clicam num período de fatura diferente:

  * A tabela de preços atualiza instantaneamente para mostrar os preços do período selecionado (não é necessário recarregar a página).
  * Se **Force Different Durations** estiver desativado no campo Tabela de Preços, os produtos sem variação de preço para o período selecionado ficarão ocultos.
  * Se **Force Different Durations** estiver ativado, todos os produtos permanecem visíveis mesmo que não tenham uma variação para o período selecionado (mostrarão o seu preço padrão).

#### Pré-selecionar um Período de Fatura através da URL {#pre-selecting-a-billing-period-via-url}

Também pode pré-selecionar um produto e um período de fatura através da URL. O Ultimate Multisite suporta estes padrões de URL:

  * `/register/premium` — Pré-seleciona apenas o produto "Premium"
  * `/register/premium/12` — Pré-seleciona o produto e a duração de 12 meses
  * `/register/premium/1/year` — Pré-seleciona o produto com uma duração de 1 ano

### O Campo de Seleção de Modelo (Template Selection Field) {#the-template-selection-field}

O campo **Seleção de Modelo** permite aos clientes escolher um modelo de site durante o checkout. Este campo está agora incluído por padrão nos modelos de formulário de checkout de passo único (*single step*) e de múltiplos passos (*multi-step*) adicionados no Ultimate Multisite v2.6.1.

#### Adicionar o campo manualmente {#adding-the-field-manually}

Se estás a traballar con un formulario que se creou antes da v2.6.1, ou que se iniciou a partir de un modelo en branco:

1. Ve a **Ultimate Multisite > Checkout Forms** e edita o teu formulario de checkout.
2. Na fase onde se recoleitan os detalles do sitio, pulsa en **Add new Field**.
3. Seleita **Template Selection** no diálogo do tipo de campo.
4. Configura o campo:
   - **Label** — O título que veen os clientes arriba da grelha de modelos (exemplo: "Escolña un modelo de sitio").
   - **Required** — Se os clientes deben seleccionar un modelo antes de continuar.

#### Como funciona {#how-it-works}

Cando un cliente escolle un modelo durante o checkout, Ultimate Multisite usa ese modelo ao configurar o seu novo sitio. Os modelos que se mostran vixen da lista de **Site Templates** (**Ultimate Multisite > Site Templates**). Só os modelos marcados como dispoñibles para os clientes aparecen aquí.

### Domínios base do formulario de checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 trata os domínios configurados nos campos **Site URL** do formulario de checkout como domínios base de rede. Usa as configuración de dominio disponible do campo cando que queres que os clientes creen sitios en dominios de registo compartidos, como `example.com` e `sites.example.com`.

Os domínios base compartidos do formulario de checkout non se tratan como mapeamentos de dominios personalizados por sitio. Cando un cliente crea un sitio subdirectorio en unha destas bases, Ultimate Multisite non crea un registro de dominio mapeado que faría que o host compartido pertenza só a ese único sitio. O host compartido permanece dispoñible para sitios irmáns que usen o mesmo base do formulario de checkout.

Guarda os domínios personalizados para hosts mapeados por cliente, como `customer-example.com`. Guarda os domínios base do formulario de checkout para hosts de registo compartidos que moitos sitios poden usar.

#### Remover o campo {#removing-the-field}

Se non ofrezces plantillas de sitio, remove o campo Selección de Plantilla do teu formulario. Os clientes recibirán a plantilla predeterminada que este configurada en **Ultimate Multisite > Settings > Site Templates**.
