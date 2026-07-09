---
title: Modelos de Site
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelos de Site (v2) {#site-templates-v2}

_**NOTA: Este artigo refere-se à versão 2.x do Ultimate Multisite. Se você estiver usando a versão 1.x,** _ **consulte este artigo.**_

Nosso objetivo ao criar uma rede premium com o Ultimate Multisite é automatizar o máximo de processos possível, dando aos nossos clientes flexibilidade e diferentes opções para escolher ao criar seus sites. Uma maneira fácil de alcançar esse equilíbrio é usar o recurso Modelos de Site (Site Templates) do Ultimate Multisite.

## O que é um Modelo de Site? {#what-is-a-site-template}

Como o nome sugere, um Modelo de Site é um site base (boilerplate) que pode ser usado como modelo ao criar novos sites na sua rede.

Isso significa que você pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo do jeito que quiser. Então, quando seu cliente criar uma nova conta, em vez de receber um site WordPress padrão sem conteúdo significativo, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já configurados.

Parece ótimo, mas como eu crio um novo modelo de site? É tão simples quanto pode ser.

## Criando e Editando um novo Modelo de Site {#creating-and-editing-a-new-site-template}

Os Modelos de Site são apenas sites normais na sua rede. Para criar um novo modelo, você pode simplesmente ir em **Network Admin > Ultimate Multisite > Sites > Add Site**.

**![Botão Adicionar site na página da lista de Sites](/img/config/site-templates-list.png)**

Isso abrirá uma janela modal onde ele pedirá o **Título do Site, Domínio/caminho do Site** e **Tipo de Site**. No campo suspenso **Tipo de Site**, certifique-se de selecionar **Site Template** *.

_![Modal de adicionar modelo de site com menu suspenso de tipo de site](/img/config/site-templates-list.png)_

Você também pode adicionar uma descrição voltada para o cliente para explicar o que o modelo inclui:

![campo de descrição do modelo de site na tela de edição do modelo de site](/img/config/site-template-edit-description.png)

Na parte inferior do formulário, você verá um interruptor **Copiar Site** (Copy Site). Isso permitirá que você crie um novo modelo de site baseado em um modelo de site existente como ponto de partida para economizar tempo, em vez de criar um modelo do zero.

![modal de adição de modelo de site com o seletor copiar site](/img/config/site-templates-list.png)

### Personalizando o conteúdo de um Modelo de Site {#customizing-the-contents-of-a-site-template}

Para personalizar seu modelo de site, basta navegar até o painel dele e fazer as alterações que você precisa. Você pode criar novos posts, páginas, ativar plugins e mudar o tema ativo. Você pode até ir ao Customizer e alterar todos os tipos de opções de personalização.

![interface de edição do modelo de site](/img/config/site-template-edit.png)

Todos esses dados serão copiados quando um cliente criar um novo site baseado nesse Modelo de Site.

### Opções Avançadas {#advanced-options}

Se você sabe fazer algum código personalizado, pode usar nossa API de Busca e Substituição (Search and Replace API) para substituir automaticamente informações no novo site após a criação dele. Isso é útil para coisas como trocar nomes de empresas em uma página Sobre, mudar o e-mail de contato na página de Contato, etc.

### Usando Modelos de Site {#using-site-templates}

Ok, então você criou vários Modelos de Site com diferentes designs, temas e configurações. Como torná-los úteis na sua rede agora?

Basicamente, existem duas abordagens que você pode usar agora (não ao mesmo tempo):

  * Anexar um Modelo de Site a cada um dos seus Planos

**OU**

  * Permitir que seus clientes escolham os modelos de site por conta própria durante o cadastro.

#### Modo 1: Atribuir Modelo de Site {#mode-1-assign-site-template}

Neste modo, seus clientes não poderão escolher um template ao criar uma conta, mas sim você definirá qual template deve ser usado em cada um dos seus Planos.

Para fazer isso, você precisará ir em **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Isso o levará para a página **Edit Product** (Editar Produto). Na seção **Product Options** (Opções do Produto), encontre a aba **Site template** (Template de Site) e selecione a opção **Assign Site Template** (Atribuir Template de Site) no campo suspenso. Isso abrirá a lista de templates de site disponíveis e permitirá que você selecione apenas um template de site dedicado ao produto.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modo 2: Escolher Template de Site Disponível {#mode-2-choose-available-site-template}

Neste modo, você dará uma escolha aos seus clientes durante o processo de inscrição. Eles poderão selecionar entre os diferentes templates de site que você definiu nas configurações do produto. Você tem a opção de limitar os templates de site que eles podem escolher sob o produto selecionado. Isso permitirá que você tenha conjuntos diferentes de templates de site sob cada produto, o que é ideal para destacar diferentes funções e recursos em um produto com preço mais alto.

Na página **Editar Produto**. Na seção **Opções do Produto**, encontre a aba **Modelo de Site** e selecione a opção **Escolher Modelo de Site Disponível** no campo suspenso. Isso abrirá a lista dos modelos de site disponíveis e permitirá que você selecione o modelo de site que deseja disponibilizar. Você pode fazer isso escolhendo seu Comportamento: **Disponível** se quiser que o modelo de site seja incluído na lista, **Não Disponível** se quiser que o modelo de site não apareça como opção, e **Pré-selecionado** se desejar que um dos modelos de site listados seja o padrão selecionado.

![Escolha os modelos de site disponíveis com opções de comportamento](/img/config/product-site-templates.png)

### Modo Padrão: Seleção do modelo de site no formulário de Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Se você deseja que todos os seus modelos de site estejam disponíveis durante o registro, ou talvez não prefira fazer o trabalho extra de atribuir ou especificar modelos de site em cada produto que você criar. Então você pode simplesmente definir a seleção do modelo de site na sua **Formulário de Checkout**. Para fazer isso, vá para **Ultimate Multisite > Formulários de Checkout** e clique em **Editar** sob o formulário que deseja configurar.

Isso abrirá a página **Editar Formulário de Checkout**. Encontre o campo **Seleção de Modelo** e clique em **Editar** nele.

Uma janela modal aparecerá. No campo **Sites de Modelo**, você pode selecionar e listar todos os modelos de site que deseja disponibilizar durante o registro. Os modelos de site que você especificar aqui estarão disponíveis independentemente do produto que o usuário selecionou.

![Campo de seleção de modelo no editor do formulário de checkout](/img/config/checkout-form-template-step.png)

No frontend, os clientes veem o seletor de modelos durante o checkout e podem escolher o design inicial para o novo site deles.

![Seletor de modelo de frontend durante o registro](/img/config/frontend-template-chooser.png)

### Opções de Modelo de Site {#site-template-options}

Existem outras funções de modelos de site disponíveis que você pode ativar ou desativar nas configurações do Ultimate Multisite.

![Opções de modelo de site nas configurações do Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permitir Troca de Modelos {#allow-template-switching}

Ativar esta opção permitirá que seus clientes troquem o modelo escolhido durante o processo de inscrição após a criação da conta e do site. Isso é útil do ponto de vista do cliente, pois permite que eles reselecionem um modelo se descobrirem mais tarde que a escolha original não era a melhor para suas necessidades específicas.

#### Permitir que os Usuários usem seu Site como modelos {#allow-users-to-use-their-site-as-templates}

Como os usuários dos subsites gastam tempo construindo e projetando seus próprios sites, eles podem querer cloná-lo e usá-lo como um dos modelos de site disponíveis ao criar outro subsite na sua rede. Esta opção permitirá que eles façam isso.

#### Copiar Mídia na Duplicação do Modelo {#copy-media-on-template-duplication}

Marcar esta opção copiará a mídia carregada no site modelo para o site recém-criado. Isso pode ser sobrescrito em cada um dos planos.

#### **Impedir que Motores de Busca indexem Modelos de Site** {#prevent-search-engines-from-indexing-site-templates}

Os modelos de site, conforme discutido neste artigo, são estruturas básicas (boilerplate), mas ainda fazem parte da sua rede, o que significa que eles continuam disponíveis para os motores de busca encontrarem. Esta opção permitirá que você oculte os modelos de site para que os motores de busca possam indexá-los.

## Pré-preenchimento de Modelos de Site com pesquisa e substituição automática {#pre-populating-site-templates-with-auto-search-and-replace}

Uma das funcionalidades mais poderosas do Ultimate Multisite é a capacidade de adicionar texto, cores e campos selecionáveis ao formulário de registro. Depois que capturamos esses dados, podemos usá-los para preencher o conteúdo em certas partes do template do site selecionado. Então, quando o novo site for publicado, o Ultimate Multisite substituirá os espaços reservados pelas informações reais inseridas durante o registro.

Por exemplo, se você deseja obter o nome da empresa do seu usuário final durante o registro e colocar automaticamente o nome da empresa na página inicial. No template da sua página inicial do site, você precisa adicionar os placeholders, como na imagem abaixo (os placeholders devem ser adicionados cercados por chaves duplas - {{nome_do_placeholder}}).

![Página inicial com texto placeholder em chaves](/img/config/site-templates-list.png)

Em seguida, você pode simplesmente adicionar um campo de registro correspondente ao seu formulário de checkout para capturar esses dados. O mesmo editor de formulário de checkout usado para a seleção do template permite que você coloque campos personalizados ao lado do seletor de templates:

![Seleção de template e campos de registro no editor de formulário de checkout](/img/config/checkout-form-template-step.png)

Seu cliente poderá então preencher esse campo durante o registro.

![Formulário de checkout frontend com seletor de template](/img/config/frontend-template-chooser.png)

O Ultimate Multisite substituirá os placeholders pelas informações fornecidas pelo cliente automaticamente.

![Placeholders substituídos pelos dados do cliente no site](/img/config/site-templates-list.png)

### Resolvendo o problema de "template cheio de placeholders" {#solving-the-template-full-of-placeholders-problem}

Tudo isso é ótimo, mas encontramos um problema feio: agora nossos templates de site - que podem ser visitados pelos nossos clientes - estão cheios de placeholders feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores falsos para os placeholders e usamos esses valores para pesquisar e substituir seus conteúdos nos sites modelo enquanto seus clientes estão visitando.

Você pode acessar o editor de placeholders do template indo em **Ultimate Multisite > Settings > Sites** e, em seguida, na barra lateral, clicando no link **Edit Placeholders**.

![Configurações do template do site na página de configurações dos Sites](/img/config/settings-sites-templates-section.png)

Isso o levará ao editor de conteúdo dos placeholders, onde você pode adicionar os placeholders e seus respectivos conteúdos.

![Ponto de entrada para o editor de conteúdo dos placeholders do template](/img/config/settings-sites-templates-section.png)
