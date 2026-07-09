---
title: Plantillas do sitio
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Model de Plantillas do Sitio (v2) {#site-templates-v2}

_**NOTA: Este artigo refere a Ultimate Multisite versão 2.x. Se estiver a usar a versão 1.x,**_ **ve este artigo** _**.**_

O nosso objetivo ao criar uma rede premium com o Ultimate Multisite é automatizar o máximo de processos possível, dando aos nossos clientes flexibilidade e diferentes opções para escolher quando criam os seus websites. Uma maneira fácil de alcançar esse equilíbrio é usar a funcionalidade de Modelos de Site (Site Templates) do Ultimate Multisite.

## O que é um Modelo de Site? {#what-is-a-site-template}

Como o nome diz, um Modelo de Site é um site base (boilerplate) que pode ser usado como ponto de partida ao criar novos sites na sua rede.

Isto significa que pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo como quiser. Depois, quando o seu cliente criar uma nova conta, em vez de receber um site WordPress padrão sem conteúdo significativo, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já configurados.

Parece ótimo, mas como crio um novo modelo de site? É tão simples quanto pode ser.

## Criar e Editar um Novo Modelo de Site {#creating-and-editing-a-new-site-template}

Os Modelos de Site são apenas sites normais na sua rede. Para criar um novo modelo, basta ir a **Network Admin > Ultimate Multisite > Sites > Add Site**.

**![Botão Adicionar site na página da lista de Sites](/img/config/site-templates-list.png)**

Isto abrirá uma janela modal onde lhe serão pedidos o **Título do Site, Domínio/caminho do Site** e o **Tipo de Site**. No campo suspenso **Site Type**, certifique-se de selecionar **Site Template** *.

_![Modal de adicionar modelo de site com menu suspenso de tipo de site](/img/config/site-templates-list.png)_

Também pode adicionar uma descrição visível para o cliente a explicar o que o modelo inclui:

![Campo de descrição do modelo de site na pantalla de edição do modelo de site](/img/config/site-template-edit-description.png)

No final do formulário, notarás um interruptor **Copiar Site** (Copy Site). Isto permite-te criar um novo modelo de site baseado num modelo de site existente como ponto de partida para poupar tempo em vez de criáres um modelo do zero.

![Modal de adição de modelo de site com o interruptor copiar site](/img/config/site-templates-list.png)

### Personalizar o conteúdo de un Modelo de Site {#customizing-the-contents-of-a-site-template}

Para personalizar o teu modelo de site, basta navegar até ao seu painel e fazer as alterações que precisas. Podes criar novos posts, páginas, activar plugins e cambiar o tema activo. Podes até ir ao Customizer e mudar todas as sortes de opción de personalización.

![Interface de edição do modelo de site](/img/config/site-template-edit.png)

Todos esses dados serão copiados quando un cliente criar um novo site baseado nesse Modelo de Site.

### Opcións Avançadas {#advanced-options}

Se sabes lidar com algun codificación personalizada, podes aproveitar a nosa API de Pesquisa e Substituição (Search and Replace API) para substituir automaticamente información no novo site después da súa creación. Isto é útil para cousas como substituir nomes de empresa na páxina "Sobre nós" (About page), substituir o email de contacto na páxina de Contacto, etc.

### Usando Modelos de Site {#using-site-templates}

Ok, así que creaste uns moitos Modelos de Site diferentes con distintos diseños, temas e configuracións. Como é que os makes útiles na tua rede agora?

Basicamente, hai dúas abordaxas que podes usar ahora (non simultaneamente):

  * A pintar un Modelo de Site a cada unha dos teus Planes

**OU**

  * Permitir aos teus clientes que elixan os modelos de site eles mesmos durante o rexistro.

#### Modo 1: Asignar Modelo de Site {#mode-1-assign-site-template}

N este modo, os seus clientes non poderán escoller un modelo de plantilla ao crear unha conta, senón que vostede definirá que modelo de plantilla debe ser usado en cada un dos seus Plans.

Para facer isto, deberá ir a **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Isto levará á página **Edit Product** (Editar Produto). Na sección **Product Options** (Opción do Produto), ache o tab **Site template** (Modelo de sitio) e seleccione a opción **Assign Site Template** (Asignar Modelo de Sitio) do campo desplegable. Isto abrirá a lista dos modelos de sitio dispoñibles e permitirá seleccionar un único modelo de sitio dedicado ao produto.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modo 2: Escoller Modelo de Sitio Disponible {#mode-2-choose-available-site-template}

N estede modo, darás opción aos seus clientes durante o proceso de registo. Eles poderán seleccionar entre diferentes modelos de sitio que vostede defina nas configuración do produto. Tén a opción de limitar os modelos de sitio que poden escoller dentro do produto seleccionado. Isto permitirá ter diferentes conjuntos de modelos de sitio para cada produto, o que é ideal para destacar diferentes funcións e características dunha oferta con un prezo máis alto.

Na páxina **Editar Produto**. Debaixo da sección **Product Options** (Opción do Produto), busca a pestaña **Site template** (Modelo de sitio) e selecciona a opción **Choose Available Site Template** (Escollez a Modelo de Sitio Disponible) do campo desplegable. Isto abrirá a lista dos modelos de sitio dispoñibles e permitirá seleccionar o modelo que queres que este este disponible. Podás facelo escolhendo o seu Comportamento: **Available** (Dispoñible) se queres que o modelo de sitio este incluído na lista, _**Not Available**_ (Non Disponible) se queres que o modelo de sitio non apareza como opción e **Pre-selected** (Preselecionado) se desexes que un dos modelos de sitio listados sexa o predeterminado seleccionado.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Modo Predeterminado: Selección do modelo de sitio no formulario de Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Se queres que todos os teus modelos de sitio estean dispoñibles durante o rexistro, ou tal vez non preferes hacer traballo extra asignando ou especificando modelos de sitio debaixo de cada produto que crentes. Aínda podes establecer a selección do modelo de sitio no teu **Checkout Form** (Formulario de Checkout). Para isto, diríxete a **Ultimate Multisite > Checkout Forms** e clica en **Edit** (Editar) debaixo do formulario que queres configurar.

Isto abrirá a páxina **Edit Checkout Form** (Editar Formulario de Checkout). Busca o campo **Template Selection** (Selección de Modelo) e clica en **Edit** (Editar) debaixo dele.

Aparecerá unha ventana modal. Debaixo do campo **Template Sites** (Sitios Modelo), podes seleccionar e listar todos os modelos de sitio que queres que estean dispoñibles durante o rexistro. Os modelos de sitio que especifiques aquí estarán dispoñibles independientemente de que produto seleccione o usuario.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

No frontend, os clientes veen o selector de modelos durante o checkout e poden picar o diseño inicial para o seu novo sitio.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opciones de Plantillas do Sitio {#site-template-options}

Existe outras funcións de plantillas de sitio que podes activar ou desactivar nas configuración Ultimate Multisite.

![Opciones de plantilla do sitio nas configuración Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permitir a troca de plantillas {#allow-template-switching}

Activar esta opción permitirá aos teus clientes trocar a plantilla que escollen durante o proceso de registo, despois de o conta e do sitio estaren creados. Isto é útil do punto de vista do cliente, porque permite que el re-selecionen unha plantilla se descoñecen que a súa elección inicial non era a mellor para as súas necesidades específicas.

#### Permitir que os usuarios utilicen o seu Sitio como plantillas {#allow-users-to-use-their-site-as-templates}

Como os usuarios dos subsitios dedicaron tempo a construir e diseñar o seu propio sitio, poden querer clonalo e utilizalo como unha das plantillas de sitio dispoñibles ao crear outro subsitio na súa rede. Esta opción permitirá que alcaren ese objetivo.

#### Copiar medios na duplicación da plantilla {#copy-media-on-template-duplication}

Verificar esta opción copiará os medios cargados no sitio plantilla para o sitio recién creado. Isto pode ser anulado en cada un dos planes.

#### **Prevenir que os motores de búsqueda indexen as Plantillas do Sitio** {#prevent-search-engines-from-indexing-site-templates}

As plantillas do sitio, como se discutiu neste artigo, son modelos (boilerplate), pero siguen sendo parte da súa rede, o que significa que siguen estando dispoñibles para que os motores de búsqueda as encontren. Esta opción permitirá ocultar as plantillas do sitio para que os motores de búsqueda poidan indexalas.

## Preencher Plantillas do Sitio con auto busca e reemplazo {#pre-populating-site-templates-with-auto-search-and-replace}

Uma das características mais potentes do Ultimate Multisite é a capacidade de adicionar texto, cores e campos arbitrários ao formulário de registo. Depois de termos essa informação capturada, podemos usá-la para preencher automaticamente o conteúdo em certas partes do template do site selecionado. Quando o novo site for publicado, o Ultimate Multisite substituirá os espaços reservados pela informação que foi introduzida durante o registo.

Por exemplo, se quiser obter o nome da empresa do seu utilizador final durante o registo e colocar automaticamente o nome da empresa na página inicial. No template da sua página inicial, precisa de adicionar os *placeholders*, como na imagem abaixo (os *placeholders* devem ser adicionados rodeados por chaves duplas - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Depois, pode simplesmente adicionar um campo de registo correspondente ao seu formulário de checkout para capturar esses dados. O mesmo editor de formulário de checkout usado para a seleção do template permite-lhe colocar campos personalizados ao lado do seletor de templates:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

O seu cliente poderá então preencher esse campo durante o registo.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

O Ultimate Multisite substituirá então os *placeholders* pelos dados fornecidos pelo cliente automaticamente.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Resolvendo o problema de "template cheio de *placeholders*" {#solving-the-template-full-of-placeholders-problem}

Tudo isso é ótimo, mas encontramos um problema feio: agora os nossos templates de site - que os nossos clientes podem visitar - estão cheios de *placeholders* feios que não dizem muito.

Para resolver isto, oferecemos a opção de definir valores falsos para os *placeholders* (espaços reservados), e usamos esses valores para procurar e substituir o seu conteúdo nos sites modelo enquanto os seus clientes estão a visitar.

Pode aceder ao editor dos *template placeholders* indo a **Ultimate Multisite > Settings > Sites**, e depois, na barra lateral, clicando no link **Edit Placeholders**.

![Configurações do template de site na página de configurações de Sites](/img/config/settings-sites-templates-section.png)

Isto levará-lo ao editor de conteúdo dos *placeholders*, onde pode adicionar os *placeholders* e o seu respetivo conteúdo.

![Ponto de entrada para o editor de conteúdo dos placeholders do template](/img/config/settings-sites-templates-section.png)
