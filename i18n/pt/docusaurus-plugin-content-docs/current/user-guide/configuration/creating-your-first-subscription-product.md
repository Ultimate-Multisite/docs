---
title: Criando Seu Primeiro Produto de Assinatura
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Criando seu Primeiro Produto de Assinatura (v2) {#creating-your-first-subscription-product-v2}

_**NOTA IMPORTANTE: Este artigo é apenas para usuários da versão 2.x do Ultimate Multisite. Se você estiver usando a versão 1.x,**_ **_ve este artigo**_**.

Para começar a rodar sua rede e começar a vender seus serviços para potenciais usuários, você precisa ter diferentes opções de assinatura. Como criar esses produtos? Que tipos de produtos você pode oferecer? Neste artigo, vamos cobrir tudo o que você precisa saber sobre os produtos.

## Tipo de Produto {#product-type}

Com o Ultimate Multisite, você pode oferecer duas categorias de produtos aos seus clientes: **planos** e **add-ons (Order Bump)**. Os add-ons podem ser divididos em dois tipos: **pacotes** e **serviços**. Veremos as diferenças e particularidades deles a seguir.

  * **Planos**: o produto fundamental do Ultimate Multisite. Seu cliente só poderá ter uma assinatura se ela estiver vinculada a um plano. Um plano fornece aos seus clientes um ou mais sites (depende das configurações do seu plano) com as limitações que você define na página de edição do seu produto.

  * **Pacotes**: add-ons que impactam diretamente nas funcionalidades dos planos do Ultimate Multisite. Eles alteram as limitações ou adicionam novos recursos, plugins ou temas ao plano original que o cliente comprou. Por exemplo, um plano básico pode permitir 1.000 visitas por mês e você pode disponibilizar um pacote que estende esse número para 10.000.

  * **Serviços**: add-ons que não alteram as funcionalidades do Ultimate Multisite. São tarefas que você realizará para o seu cliente além do plano que ele comprou. Por exemplo, seu cliente pode comprar um plano que permite apenas um site e também pagar por um serviço extra que fará o design deste site.

## Gerenciando Produtos {#managing-products}

Para muitos, a aba **Produtos** no Ultimate Multisite **(Ultimate Multisite > Produtos)** pode ser comparada com os planos em um ambiente de hospedagem tradicional.

Dentro do Ultimate Multisite, a aba Produtos define a estrutura e as limitações aplicáveis a um produto ou serviço específico. Tais estruturas se estendem à descrição do produto ou serviço, preço, impostos e permissões.

Esta seção irá guiá sua compreensão deste pilar essencial do Ultimate Multisite.

![Página de lista de produtos](/img/config/products-list.png)

## Adicionando Produtos {#adding-products}

Seja um plano, pacote ou serviço, o ponto de entrada para definir um novo item é através de **Ultimate Multisite > Produtos > Adicionar Produto**.

![Botão Adicionar Produto](/img/config/product-add-button.png)

A interface contém duas seções predominantes. À esquerda, há várias abas que ajudam na definição do produto e à direita, há algumas seções para definir o preço base do produto, seu estado ativo e a imagem do produto.

![Visão geral da página de edição de produto](/img/config/product-edit-full.png)

### Descrição {#description}

As informações básicas do produto podem ser definidas fornecendo um nome e uma descrição do produto. Esses identificadores são exibidos sempre que as informações do produto forem necessárias, como seleção de plano e preços, faturas, upgrades e assim por diante.

![Seção de descrição do produto](/img/config/product-description.png)

### Tipo de Preço {#pricing-type}

No lado direito da interface, o preço base pode ser definido.

![Seção de precificação e salvamento](/img/config/product-pricing-save.png)

O Ultimate Multisite suporta três tipos diferentes de preços. A opção **pago** solicita ao administrador da rede informações sobre o preço do produto e a frequência de faturamento.

### Preço {#pricing}

O componente de preço define o preço base do produto e o intervalo de faturamento.

![Pricing and save section](/img/config/product-pricing-save.png)

assim, um preço de exemplo de $29.99 com uma configuração de 1 mês será cobrado $29.99 por mês. Da mesma forma, um preço de $89.97 com uma configuração de 3 meses será cobrado esse valor a cada trimestre.

### Ciclos de Faturamento {#billing-cycles}

A seção Ciclos de Faturamento especifica a frequência do intervalo de faturamento mencionado acima e é geralmente entendida à luz de contratos ou termos fixos.

![Pricing and save section](/img/config/product-pricing-save.png)

Por exemplo, um preço de produto de $29.99 com um intervalo de 1 mês e 12 ciclos de faturamento será cobrado $29.99 por mês pelo produto durante os 12 meses seguintes. Em outras palavras, essa configuração estabeleceria um termo de preço fixo de $29.99 por mês por 12 meses e depois cessaria a cobrança.

### Período de Teste {#trial-period}

Ativar o seletor de oferta de teste permite que o administrador da rede defina um período de teste para o produto.

![Pricing and save section](/img/config/product-pricing-save.png)

Durante o período de teste, os clientes têm liberdade para usar o produto e não serão cobrados até que o período de teste seja esgotado.

### Taxa de Configuração (Setup Fee) {#setup-fee}

Você também pode aplicar uma taxa de configuração ao seu plano.

![Pricing and save section](/img/config/product-pricing-save.png)

Isso significa que seu cliente pagará um valor extra na primeira cobrança (além do plano de preço) que corresponde à taxa que você definiu nesta seção.

### Ativo {#active}

O seletor Ativo define efetivamente se o produto está disponível para novos cadastros dos clientes.

![Active toggle](/img/config/product-active.png)

Se houver clientes existentes neste plano, definir o toggle para o estado desabilitado efetivamente "envelhece" (grandfathers) o plano, removendo-o de novas inscrições futuras. **Clientes existentes no plano continuarão sendo faturados** até que sejam migrados para um novo plano ou removidos do plano.

### Imagem do Produto {#product-image}

O botão **Upload Image** permite que o administrador da rede utilize a biblioteca de mídia para selecionar ou fazer o upload de uma imagem do produto.

![Product image section](/img/config/product-image.png)

### Excluir {#delete}

O botão **Delete Product** remove o produto do sistema. Ele aparece assim que o produto é publicado.

![Delete product section](/img/config/product-delete.png)

Diferente de outras exclusões, o produto não é colocado em um estado de lixeira (trash). Assim, uma vez excluído, a ação é irreversível.

### Opções do Produto {#product-options}

Depois que as informações básicas do produto são definidas, as opções do produto ajudam o administrador da rede a definir os atributos específicos do produto.

#### Geral {#general}

A aba **General** define os atributos gerais do produto que não se aplicam a nenhuma das outras abas específicas do produto.

![General tab](/img/config/product-general-tab.png)

O **product slug** (slug do produto), autoexplicativo, define o slug com o qual o produto é identificado em URLs e outras áreas do Ultimate Multisite.

O Ultimate Multisite suporta vários tipos de produto, como Planos, Pacotes e Serviços. As abas **Product Options** são ajustadas dinamicamente dependendo do tipo de produto especificado.

O **Customer Role** (Função do Cliente) especifica o papel que é atribuído ao cliente quando o site é criado. Tipicamente, para a maioria dos administradores da rede, este será o padrão Ultimate Multisite ou Administrator. A função padrão do Ultimate Multisite pode ser definida em **Ultimate Multisite > Settings > Login & Registration**.

![Configuração de perfis de função do cliente](/img/config/product-customer-role-settings.png)

#### Atualizações e Rebaixamentos (Up & Downgrades) {#up--downgrades}

Esta aba especifica os caminhos de atualização e rebaixamento disponíveis para um cliente dentro do seu nível específico.

Para entender este conceito, considere um exemplo onde uma instalação Ultimate Multisite de nicho fornece soluções de gestão de aprendizagem aos seus clientes. Para alcançar esses três planos (Básico, Plus e Premium), eles são definidos e plugins específicos são ativados para cada plano (veja mais adiante nesta seção para instruções sobre como ativar os plugins).

Se a instalação Ultimate Multisite também atender sites comerciais ou sites de comércio eletrônico, esses planos podem exigir diferentes plugins instalados e ativados.

Nesse sentido, seria indesejável e problemático permitir que clientes de eLearning migrem para planos de comércio eletrônico, pois esses planos, preços e limitações podem não ser adequados.

Portanto, para restringir o caminho do cliente e prevenir incidentes, o administrador da rede pode definir um grupo de planos (plan group) e, dentro desse grupo, especificar os planos para os quais o cliente pode fazer a transição.

![Aba Atualizações e Rebaixamentos](/img/config/product-upgrades.png)

Para definir um grupo de planos, especifique os planos compatíveis na lista **grupo de planos** (plan group). A **ordem do produto** (product order) determina como os planos são ordenados e exibidos do mais baixo para o mais alto.

O Ultimate Multisite também inclui um recurso de **order bump** (aumento de pedido), onde produtos e serviços adicionais apropriados podem ser adicionados aos planos. Estes são oferecidos ao cliente como itens extras que podem ser adicionados aos planos no checkout ou durante uma atualização.

#### Variações de Preço {#price-variations}

As variações de preço permitem que o administrador da rede especifique faixas de preços alternativas dependendo da duração. Esta configuração possibilita oferecer diferentes períodos de faturamento, como mensal, trimestral, anual ou qualquer outro período de cobrança, para o mesmo produto. Por exemplo, você pode configurar um produto a $29,99/mês com uma opção anual com desconto a $249,99/ano.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Para criar variações de preço, ative o seletor **Enable Price Variations** (Habilitar Variações de Preço) e clique no botão **Add new Price Variation** (Adicionar nova variação de preço).

![Product price variations](/img/config/product-price-variations.png)

Para inserir uma variação, defina a duração, o período e o preço da variação. Variações adicionais podem ser inseridas clicando no botão novamente.

Por exemplo, se o preço base do seu produto for de $29,99 por mês, você pode adicionar:

  * **3 Meses** a $79,99 (um pequeno desconto sobre o mensal)
  * **1 Ano** a $249,99 (um desconto significativo pelo compromisso anual)

:::tip Exibindo um Seletor de Período no Frontend

As variações de preço sozinhas não adicionam um seletor ou interruptor ao checkout do frontend. Para permitir que os clientes mudem entre períodos de faturamento (por exemplo, Mensal / Anual), você precisa adicionar um campo **Period Selection** (Seleção de Período) ao seu formulário de checkout. Consulte [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) para instruções passo a passo.
:::

#### Impostos {#taxes}

A aba **Taxes** (Impostos) está alinhada com as configurações de imposto especificadas em **Ultimate Multisite > Settings > Taxes** e, mais especificamente, nas taxas de imposto definidas. Para ativar os impostos e definir as taxas aplicáveis, consulte a documentação em **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Em um exemplo anterior, definimos uma taxa de imposto local de 7,25% aplicável a clientes na Califórnia (Estados Unidos).

Depois que a taxa de imposto é definida em **Ultimate Multisite > Settings > Manage Tax Rates**, ela fica selecionável no nível do produto.

![Taxes tab](/img/config/product-taxes.png)

Para indicar que um produto é tributável, ative o seletor **Is Taxable** e selecione a taxa de imposto aplicável no menu suspenso Tax Category.

#### Modelos de Site (Site Templates) {#site-templates}

Em essência, modelos de site são sites WordPress completos que são clonados para o site de um cliente no início da assinatura dele.

![Site Templates tab](/img/config/product-site-templates.png)

O administrador da rede cria e configura o modelo de site como um site WordPress normal com temas, plugins e conteúdo ativados e configurados. O modelo de site é clonado exatamente como está para o cliente.

Esta aba permite que o administrador da rede especifique o comportamento dos modelos de site ao iniciar uma nova assinatura. Para usar os modelos de site neste plano, defina o seletor **Allow Site Templates** no estado ativo.

Quando **Allow Site Templates** está desativado, os clientes no plano não podem escolher modelos, mesmo que um formulário de checkout, link compartilhável ou parâmetro de URL tornem os modelos disponíveis. O Ultimate Multisite agora impõe esse limite através de uma cadeia de fallback (alternativa) entre os pontos de entrada disponíveis: as configurações do plano são verificadas primeiro, depois as configurações do modelo de formulário de checkout e, por fim, os modelos pré-selecionados ou fornecidos pela URL. Isso mantém os limites do plano consistentes e impede que modelos apareçam para produtos que não deveriam oferecê-los.

O **site template selection mode** define o comportamento dos modelos de site durante o processo de assinatura.

A configuração **D** **efault** segue os passos do formulário de checkout. Se o administrador da rede tiver definido uma etapa de seleção de template no processo de checkout e essa etapa tiver sido definida com templates, esta configuração respeitará as diretrizes estabelecidas na etapa de checkout.

Especificar **A** **ssign Site Template** força a seleção do template especificado. Consequentemente, quaisquer etapas de seleção de template no processo de checkout são removidas.

Por último, **C** **hoose Available Site Templates** substitui os templates especificados na etapa de checkout pelos templates selecionados nesta configuração. Um template pré-selecionado também pode ser definido para ajudar o cliente na escolha.

No final das contas, se o administrador da rede desejar que a seleção de templates ocorra nas etapas de checkout, a configuração ' _default_ ' será suficiente. Alternativamente, para remover e bloquear a seleção de templates e delegar a seleção às configurações do plano, as opções ' _assign new template_ ' ou ' _choose available site templates_ ' podem ser desejáveis.

#### Sites {#sites}

A aba **Sites** faz parte da funcionalidade de limitações do Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Esta configuração especifica o número máximo de sites que um cliente pode criar sob sua assinatura.

Para ativar a limitação, defina o seletor **limit sites** para o estado ativo e especifique o número máximo de sites no campo **site allowance**.

#### Visitas {#visits}

A aba **Visits** é outra parte do sistema de limitações do Ultimate Multisite. Esta configuração permite contabilizar e subsequentemente limitar os visitantes únicos do site de um cliente.

![Visits tab](/img/config/product-visits.png)

Do ponto de vista de marketing de rede, os administradores podem usar esta configuração como uma forma de incentivar os clientes a fazerem o upgrade do plano assim que os limites forem atingidos. Esta configuração também pode ajudar o administrador da rede a controlar e prevenir tráfego excessivo para os sites, preservando os recursos do sistema.

Para usar este recurso, ative o toggle **limit unique visits** (limite de visitas únicas) e especifique o número máximo de visitantes únicos no campo **unique visits quota** (cota de visitas únicas).

Uma vez que esse limite seja atingido, o Ultimate Multisite deixará de servir o site do cliente em vez de exibir uma mensagem indicando que os limites foram excedidos.

#### Usuários {#users}

As limitações de 'Usuários' do Ultimate Multisite permitem que o administrador da rede imponha limites ao número de usuários que podem ser criados e atribuídos a funções (roles).

![Users tab](/img/config/product-users.png)

Para ativar o recurso de limitação, ative o toggle **limit user** (limitar usuário) deslizando-o para a direita.

Em seguida, para cada função que será limitada, ative o toggle ao lado dela e defina o limite máximo no campo apropriado.

#### Tipos de Postagem (Post Types) {#post-types}

A aba **Post Types** (Tipos de Postagem) permite que o administrador da rede imponha limites granulares na vasta gama de tipos de postagem dentro do WordPress.

![Post Types tab](/img/config/product-post-types.png)

Devido à construção do WordPress, posts e tipos de postagem são um componente significativo da sua funcionalidade principal, e assim o sistema de limitação do Ultimate Multisite é projetado para ajudar o administrador da rede a estabelecer e manter limites.

Para ativar este subsistema de limites, ative o toggle **limit post types** (limitar tipos de postagem) deslizando-o para a direita.

A seguir, para cada tipo de post que você deseja limitar, ative-o deslizando-o para a direita e especificando o limite máximo no campo apropriado.

#### Espaço em Disco {#disk-space}

A aba **Espaço em Disco** permite que os administradores de rede restrinjam o espaço consumido pelos clientes.

![Disk Space tab](/img/config/product-disk-space.png)

Geralmente, em um multisite do WordPress, os arquivos principais são compartilhados entre todos os sites e os diretórios individuais criados para arquivos de mídia e uploads a que essas configurações e limitações se aplicam.

Para ativar a limitação de uso de disco, defina o toggle **limitar tamanho máximo por site** no estado ativo deslizando-o para a direita.

Em seguida, especifique o limite superior máximo em megabytes no campo **disk space allowanc**.

#### Domínio Personalizado {#custom-domain}

Ao ativar esta opção, você pode permitir domínios personalizados especificamente neste plano.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temas {#themes}

A aba **Temas** dentro das opções do produto permite que o administrador da rede disponibilize temas para seleção pelos clientes e, opcionalmente, force o estado do tema.

![Themes tab](/img/config/product-themes.png)

_**Nota: Para que os temas estejam disponíveis para os clientes, eles devem ser habilitados na rede pelo administrador da rede.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

A opção **visibilidade** define se este tema é visível ou não ao cliente ao visualizar a aba **Aparência > Temas** dentro do site dele. Definir esta opção como **Oculto** remove o tema da visualização e, assim, restringe a capacidade de selecioná-lo e ativá-lo.

![Themes tab](/img/config/product-themes.png)

A seleção **comportamento** permite que o administrador da rede defina o estado do tema após a criação do site do cliente.

No estado **Disponível**, o tema fica disponível para que o cliente o ative sozinho. Por outro lado, no estado **Não Disponível**, remove-se da capacidade do cliente de ativar o tema. Por último, a opção **Forçar Ativação** força a seleção e ativação do tema, definindo-o como padrão na criação do site.

#### Plugins {#plugins}

Assim como na aba Temas, o Ultimate Multisite permite que o administrador da rede defina a visibilidade dos plugins para os clientes, bem como o estado deles na criação de um novo site.

![Plugins tab](/img/config/product-plugins.png)

O menu suspenso **visibilidade** permite que o plugin seja visível ou oculto para o cliente ao ser visualizado no site dele através da opção do menu Plugins.

O administrador da rede pode manipular ainda mais o comportamento dos plugins utilizando as opções no menu suspenso de comportamento.

![Plugins tab](/img/config/product-plugins.png)

A seleção **Padrão** respeita o estado do plugin definido no modelo de site selecionado pelo cliente. Assim, os plugins que estiverem ativados dentro do modelo permanecerão ativos quando o modelo for clonado para o site do cliente.

O **Forçar Ativar** coloca o plugin em um estado ativo na criação do site e, inversamente, o **Forçar Desativar** desativa o plugin na criação do site. Em ambas as circunstâncias, o estado do plugin pode ser alterado manualmente pelo cliente através do menu Plugins do WordPress dele.

A configuração **Force Activate & Lock** funciona de maneira semelhante, mas impede que o estado do plugin seja alterado pelo cliente. Assim, uma configuração de Forçar Ativação e Bloqueio forçará o plugin ao seu estado ativo e impedirá que o cliente o desative. Da mesma forma, a configuração **Force Inactivate & Lock** forçará o plugin ao seu estado inativo e impedirá que o usuário ative o plugin.

O administrador da rede pode querer considerar as configurações Force Activate & Lock e Force Inactivate & Lock em conjunto com os modelos de site (site templates) como plugins, e os estados dos plugins dentro dos modelos podem ser afetados por essas configurações se selecionadas.

#### Limitações do Reset {#reset-limitations}

A aba **Reset Limitations** reseta todos os limites personalizados definidos no produto. Para redefinir as limitações, clique no botão **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Para confirmar a ação, deslize o seletor **confirm reset** para o estado ativo à direita e clique no botão **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Editar, Duplicar ou Excluir Produto {#edit-duplicate-or-delete-product}

Produtos existentes podem ser editados, duplicados ou excluídos navegando em **Ultimate Multisite > Products** e passando o mouse sobre o nome do produto existente.

![Product hover actions](/img/config/product-hover-actions.png)
