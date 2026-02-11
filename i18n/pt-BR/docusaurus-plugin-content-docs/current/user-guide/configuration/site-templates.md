---
title: Modelos de Site
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Modelos de Site (v2)

_**NOTA: Este artigo refere-se à Ultimate Multisite versão 2.x. Se você está usando a versão 1.x,**_ **veja este artigo** _**.**_

Nosso objetivo ao criar uma rede premium com Ultimate Multisite é automatizar o máximo de processos possível, ao mesmo tempo em que damos aos nossos clientes flexibilidade e diferentes opções para escolher ao criar seus sites. Uma maneira simples de alcançar esse equilíbrio é usar o recurso de Modelos de Site do Ultimate Multisite.

## O que é um Modelo de Site?

Como o nome indica, um Modelo de Site é um site modelo que pode ser usado como base ao criar novos sites em sua rede.

Isso significa que você pode criar um site base, ativar diferentes plugins, definir um tema ativo e personalizá-lo da maneira que desejar. Em seguida, quando seu cliente criar uma nova conta, em vez de receber um site WordPress padrão sem conteúdo significativo, ele receberá uma cópia do seu site base com todas as personalizações e conteúdos já configurados.

Isso parece incrível, mas como eu crio um novo modelo de site? É tão simples quanto pode ser.

## Criando e Editando um Novo Modelo de Site

Modelos de Site são apenas sites normais em sua rede. Para criar um novo modelo, basta acessar **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![add site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)**

Isso abrirá uma janela modal que solicitará o **Site title, Site Domain/path,** e **Site type**. No campo suspenso **Site Type**, certifique-se de selecionar **Site Template** *.*

_![Add site template modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)_

Na parte inferior do formulário, você verá um interruptor **Copy Site**. Isso permitirá que você crie um novo modelo de site com base em um modelo existente como ponto de partida, ajudando a economizar tempo em vez de criar um modelo do zero.

![Add site template modal 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Personalizando o Conteúdo de um Modelo de Site

Para personalizar seu modelo de site, basta navegar até o painel de controle e fazer as alterações necessárias. Você pode criar novas postagens, páginas, ativar plugins e alterar o tema ativo. Também pode acessar o Personalizador e mudar diversos tipos de opções de personalização.

Todos esses dados serão copiados quando um cliente criar um novo site baseado nesse Modelo de Site.

### Opções Avançadas

Se você tem experiência com código personalizado, pode usar nossa API de Busca e Substituição para substituir automaticamente informações no novo site após sua criação. Isso é útil para coisas como substituir nomes de empresas em uma página Sobre, trocar o e‑mail de contato na página Contato, etc.

### Usando Modelos de Site

Ok, então você criou vários Modelos de Site diferentes com designs, temas e configurações distintas. Como torná-los úteis em sua rede agora?

Basicamente, existem duas abordagens que você pode usar agora (não simultaneamente):

* Anexar um Modelo de Site a cada um de seus Planos
* OU
* Permitir que seus clientes escolham os modelos de site por conta própria durante o cadastro.

#### Modo 1: Atribuir Modelo de Site

Neste modo, seus clientes não poderão escolher um modelo ao criar uma conta, mas você definirá qual modelo deve ser usado em cada um de seus Planos.

Para fazer isso, você precisará acessar **Ultimate Multisite > Products > Edit**.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

Isso o levará à página **Edit Produc** t. Na seção **Product Options**, encontre a aba **Site template** e selecione a opção **Assign Site** **Template** no campo suspenso. Isso exibirá a lista de modelos de site disponíveis e permitirá que você selecione apenas um modelo dedicado ao produto.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Modo 2: Escolher Modelo de Site Disponível

Neste modo, você dará aos seus clientes uma escolha durante o processo de cadastro. Eles poderão selecionar entre diferentes modelos de site que você define nas configurações do produto. Você tem a opção de limitar os modelos que eles podem escolher sob o produto selecionado. Isso permitirá que você tenha conjuntos diferentes de modelos de site em cada produto, o que é ideal para destacar funções e recursos diferentes em um produto de preço mais alto.

Na página **Edit Product**. Na seção **Product Options**, encontre a aba **Site template** e selecione a opção **Choose Available Site Template** no campo suspenso. Isso exibirá a lista de modelos de site disponíveis e permitirá que você selecione o modelo que deseja disponibilizar. Você pode fazer isso escolhendo seu Comportamento: **Available** se quiser que o modelo seja incluído na lista. _**Not Available**_ se quiser que o modelo não apareça como opção. E **Pre-selected** se desejar que um dos modelos listados seja o padrão selecionado.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Modo Padrão: Seleção de Modelo de Site no Formulário de Checkout

Se você deseja que todos os seus modelos de site estejam disponíveis durante o registro, ou talvez não prefira fazer o trabalho extra de atribuir ou especificar modelos de site em cada produto que você cria, basta definir a seleção de modelo de site em seu **Checkout Form**. Para fazer isso, basta acessar **Ultimate Multisite > Checkout Forms**. Em seguida, clique em **Edit** no formulário que deseja configurar.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

Isso abrirá a página **Edit Checkout Form**. Encontre o campo **Template Selection** e clique em **Edit** abaixo dele.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

Uma janela modal aparecerá. No campo **Template Sites**, você pode selecionar e listar todos os modelos de site que deseja disponibilizar durante o registro. Os modelos de site que você especificar aqui estarão disponíveis independentemente do produto que o usuário selecionou.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Opções de Modelo de Site

Existem outras funções de modelos de site disponíveis que você pode ativar ou desativar nas configurações do Ultimate Multisite.

![Site template option](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Permitir Troca de Modelo

Ativar esta opção permitirá que seus clientes troquem o modelo escolhido durante o processo de cadastro após a conta e o site serem criados. Isso é útil do ponto de vista do cliente, pois permite que eles reescolham um modelo caso descubram mais tarde que a escolha original não era a melhor para suas necessidades específicas.

#### Permitir que Usuários usem seu Site como Modelos

Como os usuários de subsites gastaram tempo construindo e projetando seu próprio site, eles podem querer cloná-lo e usá-lo como um dos modelos de site disponíveis ao criar outro subsit na sua rede. Esta opção permitirá que eles façam isso.

#### Copiar Mídia na Duplicação de Modelo

Marcar esta opção copiará a mídia carregada no site modelo para o site recém‑criado. Isso pode ser sobrescrito em cada plano.

#### **Prevenir que Motores de Busca indexem Modelos de Site**

Modelos de site, conforme discutido neste artigo, são modelos, mas ainda fazem parte da sua rede, o que significa que ainda estão disponíveis para os motores de busca encontrarem. Esta opção permitirá que você esconda os modelos de site para que os motores de busca não os indexem.

## Pré‑preenchendo Modelos de Site com Busca e Substituição Automática

Uma das funcionalidades mais poderosas do Ultimate Multisite é a capacidade de adicionar texto arbitrário, cores e campos de seleção ao formulário de registro. Depois de capturarmos esses dados, podemos usá‑los para pré‑preencher o conteúdo em determinadas partes do modelo de site selecionado. Em seguida, quando o novo site for publicado, o Ultimate Multisite substituirá os espaços reservados pela informação real inserida durante o registro.

Por exemplo, se você deseja obter o nome da empresa do usuário final durante o registro e colocar automaticamente o nome da empresa na página inicial. Na página inicial do seu site modelo, você precisa adicionar os espaços reservados, como na imagem abaixo (os espaços reservados devem ser adicionados entre chaves duplas - {{placeholder_name}}).

![homepage placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

Em seguida, basta adicionar um campo de registro correspondente no seu formulário de checkout para capturar esses dados:

![checkout form](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

Seu cliente então poderá preencher esse campo durante o registro.

![registration field](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

O Ultimate Multisite então substituirá os espaços reservados pelos dados fornecidos pelo cliente automaticamente.

![replace placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Resolvendo o problema de “modelo cheio de espaços reservados”

Tudo isso é ótimo, mas enfrentamos um problema feio: agora nossos modelos de site — que podem ser visitados pelos nossos clientes — estão cheios de espaços reservados feios que não dizem muito.

Para resolver isso, oferecemos a opção de definir valores falsos para os espaços reservados, e usamos esses valores para buscar e substituir seus conteúdos nos sites modelo enquanto seus clientes estão visitando.

Você pode acessar o editor de espaços reservados do modelo indo para **Ultimate Multisite > Settings > Sites**, e então, na barra lateral, clicando no link **Edit Placeholders**.

![placeholder settings](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

Isso o levará ao editor de conteúdo dos espaços reservados, onde você pode adicionar espaços reservados e seu conteúdo respectivo.

![template placeholders](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)
