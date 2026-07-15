---
title: Modelos de Sites
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelos de Site (v2)

_**OBSERVAÇÃO: Este artigo se refere ao Ultimate Multisite versão 2.x. Se você estiver usando a versão 1.x,**_ **veja este artigo** _**.**_

Nosso objetivo ao criar uma rede premium com Ultimate Multisite é automatizar o máximo possível de processos, ao mesmo tempo em que damos aos nossos clientes flexibilidade e diferentes opções para escolher ao criar seus sites. Uma maneira fácil de alcançar esse equilíbrio é usar o recurso Site Templates do Ultimate Multisite.

## O que é um Modelo de Site? {#what-is-a-site-template}

Como o nome sugere, um Modelo de Site é um site padrão que pode ser usado como base ao criar novos sites na sua rede.

Isso significa que você pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo da maneira que quiser. Então, quando seu cliente cria uma nova Account, em vez de receber um site WordPress padrão sem conteúdo significativo dentro dele, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já em seus devidos lugares.

Isso parece incrível, mas como eu crio um novo modelo de site? É o mais simples possível.

## Criando e editando um novo Modelo de Site {#creating-and-editing-a-new-site-template}

Site Templates são apenas sites normais na sua rede. Para criar um novo modelo, você pode simplesmente ir para **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Botão Add site na página de lista de Sites](/img/config/site-templates-list.png)**

Isso abrirá uma janela modal onde serão solicitados o **título do site, domínio/caminho do site,** e **tipo de site**. No campo suspenso **Site Type**, certifique-se de selecionar **Site Template** *.*

_![Modal Add site template com menu suspenso de tipo de site](/img/config/site-templates-list.png)_

Você também pode adicionar uma descrição voltada para o cliente para explicar o que o modelo inclui:

![Campo de descrição de modelo de site na tela de edição do modelo de site](/img/config/site-template-edit-description.png)

Na parte inferior do formulário, você notará um interruptor de alternância **Copy Site**. Isso permitirá que você crie um novo modelo de site com base em um modelo de site existente como ponto de partida, para ajudar você a economizar tempo em vez de criar um modelo de site do zero.

![Modal Add site template com alternância Copy Site](/img/config/site-templates-list.png)

### Personalizando os conteúdos de um Modelo de Site {#customizing-the-contents-of-a-site-template}

Para personalizar seu modelo de site, basta navegar até o painel do Dashboard dele e fazer as alterações necessárias. Você pode criar novos posts, páginas, ativar plugins e alterar o tema ativo. Você pode até acessar o Personalizador e alterar todos os tipos de opções de personalização.

![Interface de edição de modelo de site](/img/config/site-template-edit.png)

Todos esses dados serão copiados quando um cliente criar um novo site com base nesse Site Template.

### Opções avançadas {#advanced-options}

Se você entende de um pouco de código personalizado, pode usar nossa API de busca e substituição para substituir automaticamente informações no novo site após sua criação. Isso é útil para coisas como substituir nomes de empresas em uma página Sobre, substituir o e-mail de contato na página Contato etc.

### Usando Site Templates {#using-site-templates}

Ok, então você criou vários Site Templates diferentes com designs, temas e configurações diferentes. Como torná-los úteis na sua rede agora?

Basicamente, há duas abordagens que você pode usar agora (não simultaneamente):

  * Anexar um Site Template a cada um dos seus planos

**OU**

  * Permitir que seus clientes escolham os modelos de site por conta própria durante o cadastro.

#### Modo 1: Atribuir Site Template {#mode-1-assign-site-template}

Neste modo, seus clientes não poderão escolher um modelo quando criarem uma Account; em vez disso, você definirá qual modelo deve ser usado em cada um dos seus planos.

Para fazer isso, você precisará ir para **Ultimate Multisite > Products > Edit**.

![Editar produto para atribuir modelo de site](/img/config/product-site-templates.png)

Isso levará você à página **Edit Product**. Na seção **Product Options**, encontre a aba **Site template** e selecione a opção **Assign Site Template** no campo suspenso. Isso exibirá a lista de modelos de site disponíveis e permitirá que você selecione apenas um modelo de site dedicado ao produto.

![Aba de modelo de site do produto com opção Assign Site Template](/img/config/product-site-templates.png)

#### Modo 2: Escolher Site Template Disponível {#mode-2-choose-available-site-template}

Neste modo, você dará aos seus clientes uma escolha durante o processo de cadastro. Eles poderão selecionar entre diferentes modelos de site que você define nas configurações do produto. Você tem a opção de limitar os modelos de site entre os quais eles podem escolher no produto selecionado. Isso permitirá que você tenha diferentes conjuntos de modelos de site em cada produto, o que é ideal para destacar diferentes funções e recursos para um produto de preço mais alto.

Na página **Edit Product**. Na seção **Product Options**, encontre a aba **Site template** e selecione a opção **Choose Available Site Template** no campo suspenso. Isso exibirá a lista de modelos de site disponíveis e permitirá que você selecione o modelo de site que deseja disponibilizar. Você pode fazer isso escolhendo seu comportamento: **Available** se quiser que o modelo de site seja incluído na lista. _**Not Available**_ se quiser que o modelo de site não apareça como opção. E **Pre-selected** se desejar que um dos modelos de site listados seja o selecionado por padrão.

![Escolher modelos de site disponíveis com opções de comportamento](/img/config/product-site-templates.png)

### Modo padrão: seleção de modelo de site no formulário de Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Se você deseja que todos os seus modelos de site estejam disponíveis durante o registro, ou talvez prefira não fazer o trabalho extra de atribuir ou especificar modelos de site em cada produto que você cria. Então, você pode simplesmente definir a seleção de modelo de site no seu **Checkout Form**. Para fazer isso, vá para **Ultimate Multisite > Checkout Forms** e clique em **Edit** no formulário que deseja configurar.

Isso exibirá a página **Edit Checkout Form**. Encontre o campo **Template Selection** e clique em **Edit** abaixo dele.

Uma janela modal será exibida. No campo **Template Sites**, você pode selecionar e listar todos os templates de site que deseja disponibilizar durante o registro. Os templates de site que você especificar aqui estarão disponíveis independentemente do produto que o usuário selecionou.

![Campo de seleção de template no editor do formulário de checkout](/img/config/checkout-form-template-step.png)

No frontend, os clientes veem o seletor de template durante o checkout e podem escolher o design inicial para o novo site deles.

![Seletor de template no frontend durante o registro](/img/config/frontend-template-chooser.png)

### Opções de Template de Site {#site-template-options}

Há outras funções de templates de site disponíveis que você pode ativar ou desativar nas configurações do Ultimate Multisite.

![Opções de template de site nas configurações do Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permitir Troca de Template {#allow-template-switching}

Ativar esta opção permitirá que seus clientes troquem o template escolhido durante o processo de cadastro depois que o Account e o site forem criados. Isso é útil do ponto de vista do cliente, pois permite que ele selecione novamente um template caso descubra mais tarde que a escolha original não era a melhor para suas necessidades específicas.

#### Permitir que Usuários usem seu Site como templates {#allow-users-to-use-their-site-as-templates}

Como os usuários de subsites passaram tempo construindo e projetando seu próprio site, eles podem querer cloná-lo e usá-lo como um dos templates de site disponíveis ao criar outro subsite na sua rede. Esta opção permitirá que eles façam isso.

#### Copiar Mídia na Duplicação de Template {#copy-media-on-template-duplication}

Marcar esta opção copiará as mídias enviadas no site de template para o site recém-criado. Isso pode ser substituído em cada um dos planos.

#### **Impedir que Mecanismos de Busca indexem Templates de Site** {#prevent-search-engines-from-indexing-site-templates}

Os templates de site, conforme discutido neste artigo, são modelos-base, mas ainda fazem parte da sua rede, o que significa que ainda estão disponíveis para os mecanismos de busca encontrarem. Esta opção permitirá que você oculte os templates de site para que os mecanismos de busca possam indexá-los.

## Pré-preenchendo Templates de Site com busca e substituição automática {#pre-populating-site-templates-with-auto-search-and-replace}

Um dos recursos mais poderosos do Ultimate Multisite é a capacidade de adicionar campos arbitrários de texto, cor e seleção ao formulário de registro. Depois que tivermos esses dados capturados, podemos usá-los para pré-preencher o conteúdo em certas partes do template de site selecionado. Então, quando o novo site estiver sendo publicado, o Ultimate Multisite substituirá os placeholders pelas informações reais inseridas durante o registro.

Por exemplo, se você deseja obter o nome da empresa do seu usuário final durante o registro e colocar automaticamente o nome da empresa na página inicial. Na página inicial do seu site de template, você precisa adicionar os placeholders, como na imagem abaixo (os placeholders devem ser adicionados cercados por chaves duplas - {{placeholder_name}}).

![Página inicial com texto de placeholder entre chaves](/img/config/site-templates-list.png)

Então, você pode simplesmente adicionar um campo de registro correspondente ao seu formulário de checkout para capturar esses dados. O mesmo editor de formulário de checkout usado para seleção de template permite que você coloque campos personalizados ao lado do seletor de template:

![Seleção de template e campos de registro no editor do formulário de checkout](/img/config/checkout-form-template-step.png)

Seu cliente poderá então preencher esse campo durante o registro.

![Formulário de checkout no frontend com seletor de template](/img/config/frontend-template-chooser.png)

O Ultimate Multisite substituirá então os placeholders pelos dados fornecidos pelo cliente automaticamente.

![Placeholders substituídos por dados do cliente no site](/img/config/site-templates-list.png)

### Resolvendo o problema do "template cheio de placeholders" {#solving-the-template-full-of-placeholders-problem}

Tudo isso é ótimo, mas acabamos encontrando um problema feio: agora nossos templates de site - que podem ser visitados pelos nossos clientes - estão cheios de placeholders feios que não dizem muita coisa.

Para resolver isso, oferecemos a opção de definir valores fictícios para os placeholders, e usamos esses valores para buscar e substituir seus conteúdos nos sites de template enquanto seus clientes estão visitando.

Você pode ter acesso ao editor de placeholders de template acessando **Ultimate Multisite > Settings > Sites** e, em seguida, na barra lateral, clicando no link **Editar Placeholders**.

![Configurações de template de site na página de configurações de Sites](/img/config/settings-sites-templates-section.png)

Isso levará você ao editor de conteúdo dos placeholders, onde você pode adicionar placeholders e seus respectivos conteúdos.

![Ponto de entrada do editor de conteúdo de placeholders de template](/img/config/settings-sites-templates-section.png)
