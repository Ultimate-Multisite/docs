---
title: Criando seu primeiro produto de assinatura
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Criando seu Primeiro Produto de Assinatura (v2) {#creating-your-first-subscription-product-v2}

_**NOTA IMPORTANTE: Este artigo é apenas para usuários da versão 2.x do Ultimate Multisite. Se você estiver usando a versão 1.x,**_ **_**veja este artigo**_**.

Para começar a operar sua rede e começar a vender seus serviços para usuários potenciais, você precisa ter diferentes opções de assinatura. Como você cria esses produtos? Quais são os tipos de produtos que você pode oferecer? Neste artigo, abordaremos tudo o que você precisa saber sobre produtos.

## Tipo de Produto {#product-type}

Com Ultimate Multisite, você pode oferecer duas categorias de produtos aos seus clientes: **planos** e **add-ons** **(Order Bump)**. Add-ons podem ser divididos em dois tipos:**pacotes** e **serviços**. Veremos suas diferenças e particularidades a seguir.

  * **Planos** : o produto fundamental do Ultimate Multisite. Seu cliente só pode ter uma associação se ela estiver vinculada a um plano. Um plano fornece aos seus clientes um ou mais sites (depende das configurações do seu plano) com as limitações que você define na página de edição do seu produto.

  * **Pacotes** : add-ons que impactam diretamente as funcionalidades dos planos do Ultimate Multisite. Eles alteram limitações ou adicionam novos recursos, plugins ou temas ao plano original que seu cliente comprou. Por exemplo, um plano básico pode permitir 1.000 visitas por mês e você pode disponibilizar um pacote que estende esse número para 10.000.

  * **Serviços:** add-ons que não alteram as funcionalidades do Ultimate Multisite. São tarefas que você realizará para seu cliente além do plano que ele comprou. Por exemplo, seu cliente pode comprar um plano que permite um único site e também pagar por um serviço extra que fará o design desse site.

## Gerenciando Produtos {#managing-products}

Para muitos, a aba **Produtos** no Ultimate Multisite **(Ultimate Multisite > Products)** pode ser equiparada a planos em um ambiente de hospedagem tradicional.

Dentro do Ultimate Multisite, a aba Products define a estrutura e as limitações aplicáveis a um produto ou serviço específico. Essas estruturas se estendem à descrição do produto ou serviço, preço, impostos e permissões.

Esta seção guiará seu entendimento sobre este pilar essencial do Ultimate Multisite.

![Página de lista de produtos](/img/config/products-list.png)

## Adicionando Produtos {#adding-products}

Seja um plano, pacote ou serviço, o ponto de entrada para definir um novo item é via **Ultimate Multisite > Products > Add Product**.

![Botão Add Product](/img/config/product-add-button.png)

A interface contém duas seções predominantes. À esquerda, há várias abas que ajudam na definição do produto e, à direita, há algumas seções para definir o preço base do produto, seu estado ativo e a imagem do produto.

![Visão geral da página de edição do produto](/img/config/product-edit-full.png)

### Descrição {#description}

As informações básicas do produto podem ser definidas fornecendo um nome e uma descrição do produto. Esses identificadores são exibidos onde quer que as informações do produto sejam necessárias, como seleção de plano e preços, faturas, upgrades e similares.

![Seção de descrição do produto](/img/config/product-description.png)

### Tipo de Preço {#pricing-type}

No lado direito da interface, o preço base pode ser definido.

![Seção de preço e salvar](/img/config/product-pricing-save.png)

Ultimate Multisite oferece suporte a três tipos de preço diferentes. A opção **pago** solicita ao administrador da rede informações sobre o preço do produto e a frequência de cobrança.

### Preço {#pricing}

O componente de preço define o preço base do produto e o intervalo de cobrança.

![Seção de preço e salvar](/img/config/product-pricing-save.png)

assim, um preço de exemplo de $29.99 com uma configuração de 1 mês cobrará $29.99 a cada mês. Da mesma forma, um preço de $89.97 com uma configuração de 3 meses cobrará esse valor a cada trimestre.

### Ciclos de Cobrança {#billing-cycles}

A seção de ciclos de cobrança especifica a frequência do intervalo de cobrança mencionado anteriormente e geralmente é entendida à luz de contratos ou prazos fixos.

![Seção de preço e salvar](/img/config/product-pricing-save.png)

Por exemplo, um preço de produto de $29.99 com um intervalo de 1 mês e 12 ciclos de cobrança cobraria $29.99 por mês pelo produto ao longo dos 12 meses seguintes. Em outras palavras, essa configuração estabeleceria um prazo de preço fixo de $29.99 por mês por 12 meses e então encerraria a cobrança.

### Período de Teste {#trial-period}

Ativar o alternador de oferta de teste permite que o administrador da rede defina um período de teste para o produto.

![Seção de preço e salvar](/img/config/product-pricing-save.png)

Durante o período de teste, os clientes ficam livres para usar o produto e não serão cobrados até que o período de teste tenha se esgotado.

### Taxa de Configuração {#setup-fee}

Você também pode aplicar uma taxa de configuração ao seu plano.

![Seção de preço e salvar](/img/config/product-pricing-save.png)

Isso significa que seu cliente pagará um valor extra na primeira cobrança (além do preço do plano) que corresponde à taxa que você definiu nesta seção.

### Ativo {#active}

O alternador de ativo define efetivamente se o produto está disponível para clientes em novas inscrições.

![Alternador de ativo](/img/config/product-active.png)

Se houver clientes existentes neste plano, definir o alternador para o estado desativado efetivamente mantém o plano apenas para clientes antigos, removendo-o de inscrições futuras. **Clientes existentes no plano continuarão sendo cobrados** até que sejam transferidos para um novo plano ou removidos do plano.

### Imagem do Produto {#product-image}

O botão **Upload Image** permite que o administrador da rede use a biblioteca de mídia para selecionar ou enviar uma imagem do produto.

![Seção de imagem do produto](/img/config/product-image.png)

### Excluir {#delete}

O botão **Delete Product** exclui o produto do sistema. Ele aparece quando o produto é publicado.

![Seção de exclusão do produto](/img/config/product-delete.png)

Diferente de outras exclusões, o produto não é colocado em nenhum estado de lixeira. Portanto, uma vez excluído, a ação é irreversível.

### Opções do Produto {#product-options}

Depois que as informações básicas do produto forem definidas, as opções do produto ajudam o administrador da rede a definir melhor os atributos específicos do produto.

#### Geral {#general}

A aba **Geral** define os atributos gerais do produto que não se aplicam a nenhuma das outras abas específicas do produto.

![Aba Geral](/img/config/product-general-tab.png)

O autoexplicativo **slug do produto** define o slug com o qual o produto é identificado em URLs e outras áreas do Ultimate Multisite.

O Ultimate Multisite oferece suporte a vários tipos de produto, especificamente Plano, Pacote e Serviço. As abas de **Opções do produto** são ajustadas dinamicamente dependendo do tipo de produto especificado.

A **Função do cliente** especifica a função atribuída ao cliente quando o site é criado. Normalmente, para a maioria dos administradores de rede, essa será a função padrão do Ultimate Multisite ou Administrador. A função padrão do Ultimate Multisite pode ser definida em **Ultimate Multisite > Settings > Login & Registration**.

![Configurações da função do cliente](/img/config/product-customer-role-settings.png)

#### Upgrades e downgrades {#up--downgrades}

Esta aba especifica os caminhos de upgrade e downgrade disponíveis para um cliente dentro de seu nível específico.

Para entender esse conceito, considere um exemplo em que uma instalação de nicho do Ultimate Multisite fornece soluções de gestão de aprendizagem para seus clientes. Para isso, três planos (Básico, Plus e Premium) são definidos e plugins específicos são ativados para cada plano (veja mais adiante nesta seção as instruções sobre como ativar plugins).

Se a instalação do Ultimate Multisite também atende sites de negócios ou sites de eCommerce, esses planos podem exigir que plugins diferentes sejam instalados e ativados.

Nesse sentido, seria indesejável e problemático permitir que clientes de eLearning migrem para planos de eCommerce, pois esses planos, preços e limitações podem não ser adequados.

Assim, para restringir o caminho do cliente e evitar incidentes, o administrador da rede pode definir um grupo de planos e, dentro desse grupo, especificar os planos para os quais o cliente pode migrar.

![Aba Upgrades e downgrades](/img/config/product-upgrades.png)

Para definir um grupo de planos, especifique os planos compatíveis na lista **grupo de planos**. A **ordem do produto** determina como os planos são ordenados e exibidos do menor para o maior.

O Ultimate Multisite também inclui um recurso de **order bump**, no qual produtos e serviços complementares apropriados podem ser adicionados aos planos. Eles são oferecidos ao cliente como itens adicionais que podem ser adicionados aos planos na finalização de compra ou durante um upgrade.

#### Variações de preço {#price-variations}

As variações de preço permitem que o administrador da rede especifique faixas de preço alternativas dependendo da duração. Essa configuração possibilita oferecer períodos de cobrança mensais, trimestrais, anuais ou qualquer outro período para o mesmo produto. Por exemplo, você pode configurar um produto a $29.99/mês com uma opção anual com desconto a $249.99/ano.

![Aba Variações de preço](/img/config/product-price-variations-tab.png)

Para estabelecer variações de preço, defina o alternador **Ativar variações de preço** como ativo e clique no botão **Adicionar nova variação de preço**.

![Variações de preço do produto](/img/config/product-price-variations.png)

Para inserir uma variação, defina a duração, o período e o preço da variação. Variações adicionais podem ser inseridas clicando novamente no botão.

Por exemplo, se o preço base do seu produto for $29.99 por mês, você pode adicionar:

  * **3 meses** por $79.99 (um pequeno desconto em relação ao mensal)
  * **1 ano** por $249.99 (um desconto significativo pelo compromisso anual)

:::tip Displaying a Billing Period Toggle on the Frontend

As variações de preço por si só não adicionam um alternador ou chave à finalização de compra no frontend. Para permitir que os clientes alternem entre períodos de cobrança (por exemplo, Mensal / Anual), você precisa adicionar um campo de **Seleção de período** ao seu formulário de finalização de compra. Consulte [Formulários de finalização de compra: Adicionando um alternador de seleção de período](checkout-forms#adding-a-period-selection-toggle) para instruções passo a passo.
:::

#### Impostos {#taxes}

A aba **Impostos** se alinha às configurações de impostos especificadas em **Ultimate Multisite > Settings > Taxes** e, mais especificamente, às alíquotas de imposto definidas. Para ativar impostos e definir as alíquotas aplicáveis, consulte a documentação em **Ultimate Multisite: Settings**

![Aba Impostos](/img/config/product-taxes.png)

Em um exemplo anterior, definimos uma alíquota de imposto local de 7,25% aplicável a clientes na Califórnia (Estados Unidos da América).

Depois que a alíquota de imposto é definida em **Ultimate Multisite > Settings > Manage Tax Rates**, ela fica selecionável no nível do produto.

![Aba Impostos](/img/config/product-taxes.png)

Para indicar que um produto é um item tributável, defina o alternador **É tributável** como ativo e selecione a alíquota aplicável no menu suspenso Categoria de imposto.

#### Modelos de site {#site-templates}

Em essência, modelos de site são sites WordPress completos que são clonados para o site de um cliente no início da assinatura.

![Aba Modelos de site](/img/config/product-site-templates.png)

O administrador da rede cria e configura o site modelo como um site WordPress comum, com temas, plugins e conteúdo ativados e configurados. O site modelo é clonado literalmente para o cliente.

Esta aba permite que o administrador da rede especifique o comportamento dos modelos de site em uma nova assinatura. Para usar modelos de site neste plano, defina o alternador **Permitir modelos de site** para seu estado ativo.

Quando **Permitir modelos de site** está desativado, os clientes no plano não podem escolher modelos, mesmo que um formulário de finalização de compra, link compartilhável ou parâmetro de URL tornasse os modelos disponíveis de outra forma. O Ultimate Multisite agora aplica esse limite por meio de uma cadeia de fallback nos pontos de entrada disponíveis: as configurações do plano são verificadas primeiro, depois as configurações de modelo do formulário de finalização de compra e, em seguida, modelos pré-selecionados ou fornecidos por URL. Isso mantém os limites do plano consistentes e impede que modelos apareçam para produtos que não deveriam oferecê-los.

O **modo de seleção de modelo de site** define o comportamento dos modelos de site durante o processo de assinatura.

A configuração **P** **adrão** segue as etapas no formulário de finalização de compra. Se o administrador da rede tiver definido uma etapa de seleção de modelo no processo de finalização de compra e a etapa tiver sido definida com modelos, essa configuração respeitará as diretrizes estabelecidas na etapa de finalização de compra.

Especificar **A** **tribuir Modelo de Site** força a seleção do modelo especificado. Consequentemente, quaisquer etapas de seleção de modelo no processo de finalização de compra são removidas.

Por fim, **E** **scolher Modelos de Site Disponíveis** substitui os modelos especificados na etapa de finalização de compra pelos modelos selecionados nesta configuração. Um modelo pré-selecionado também pode ser definido para auxiliar o cliente na seleção.

Em última análise, se o administrador da rede deseja que a seleção de modelo ocorra nas etapas de finalização de compra, a configuração ' _padrão_ ' será suficiente. Como alternativa, para remover e bloquear a seleção de modelo e delegar a seleção às configurações do plano, as opções ' _atribuir novo modelo_ ' ou ' _escolher modelos de site disponíveis_ ' podem ser desejáveis.

#### Sites {#sites}

A aba **Sites** faz parte da funcionalidade de limitações do Ultimate Multisite.

![Aba Sites](/img/config/product-sites.png)

Esta configuração especifica o número máximo de sites que um cliente pode criar em sua assinatura.

Para ativar a limitação, defina o alternador **limitar sites** para seu estado ativo e especifique o número máximo de sites no campo **cota de sites**.

#### Visitas {#visits}

A aba **Visitas** é outra parte do sistema de limitações do Ultimate Multisite. Esta configuração permite a contabilização e a limitação subsequente de visitantes únicos ao site de um cliente.

![Aba Visitas](/img/config/product-visits.png)

Do ponto de vista de marketing, os administradores da rede podem usar esta configuração como um meio de incentivar os clientes a fazer upgrade do plano quando os limites forem atingidos. Esta configuração também pode ajudar o administrador da rede a conter e prevenir tráfego excessivo para os sites, preservando os recursos do sistema.

Para usar este recurso, defina o alternador **limitar visitas únicas** para seu estado ativo e especifique o número máximo de visitantes únicos no campo **cota de visitas únicas**.

Quando esse limite for atingido, o Ultimate Multisite deixará de servir o site do cliente em vez de exibir uma mensagem indicando que os limites foram excedidos.

#### Usuários {#users}

As limitações de 'Usuários' do Ultimate Multisite permitem que o administrador da rede imponha limites ao número de usuários que podem ser criados e atribuídos a funções.

![Aba Usuários](/img/config/product-users.png)

Para ativar o recurso de limitações, defina o alternador **limitar usuário** para seu estado ativo deslizando-o para a direita.

Em seguida, para cada função a ser limitada, defina o alternador ao lado dela para um estado ativo e defina o limite máximo no campo apropriado.

#### Tipos de Post {#post-types}

A aba **Tipos de Post** permite que o administrador da rede imponha limites granulares à ampla variedade de tipos de post no WordPress.

![Aba Tipos de Post](/img/config/product-post-types.png)

Devido à construção do WordPress, posts e tipos de post são um componente significativo de sua funcionalidade principal e, portanto, o sistema de limitações do Ultimate Multisite foi projetado para ajudar o administrador da rede a estabelecer e manter limites.

Para ativar este subsistema de limites, defina o alternador **limitar tipos de post** para seu estado ativo deslizando-o para a direita.

Em seguida, para cada tipo de post a ser limitado, ative-o deslizando para a direita e especificando o limite máximo no campo apropriado.

#### Espaço em Disco {#disk-space}

A aba **Espaço em Disco** permite que administradores da rede restrinjam o espaço consumido pelos clientes.

![Aba Espaço em Disco](/img/config/product-disk-space.png)

Normalmente, em um WordPress multisite, os arquivos principais são compartilhados entre todos os sites e diretórios individuais são criados para arquivos de mídia e uploads, aos quais estas configurações e limitações se aplicam.

Para ativar a limitação de uso de disco, defina o alternador **limitar tamanho do disco por site** para seu estado ativo deslizando-o para a direita.

Em seguida, especifique o limite máximo em megabytes no campo **cota de espaço em disc** o.

#### Domínio Personalizado {#custom-domain}

Ao alternar esta opção, você pode permitir domínios personalizados neste plano especificamente.

![Aba Domínios Personalizados](/img/config/product-custom-domains.png)

#### Temas {#themes}

A aba **Temas** dentro das opções do produto permite que o administrador da rede disponibilize temas para seleção pelos clientes e, opcionalmente, force o estado do tema.

![Aba Temas](/img/config/product-themes.png)

_**Observação: Para que os temas sejam disponibilizados aos clientes, eles devem ser habilitados na rede pelo administrador da rede.**_

![Página de temas da rede](/img/config/product-themes-network-enabled.png)

A opção **visibilidade** define se este tema fica visível ou não para o cliente ao visualizar a aba **Aparência > Temas** dentro do site dele. Definir esta opção como **Oculto** remove o tema da visualização e, assim, restringe a capacidade de selecioná-lo e ativá-lo.

![Aba Temas](/img/config/product-themes.png)

A seleção **comportamento** permite que o administrador da rede defina o estado do tema após a criação do site do cliente.

No estado **D** **isponível**, o tema é disponibilizado ao cliente para autoativação. Por outro lado, o estado **Não Disponível** remove do cliente a capacidade de ativar o tema. Por fim, a opção **Forçar Ativação** força a seleção e ativação do tema, definindo-o como padrão após a criação do site.

#### Plugins {#plugins}

Semelhante à aba Temas, o Ultimate Multisite permite que o administrador da rede defina a visibilidade dos plugins para os clientes, bem como seu estado após a criação de um novo site.

![Aba Plugins](/img/config/product-plugins.png)

O menu suspenso **visibilidade** permite que o plugin fique visível ou oculto para o cliente quando visualizado no site dele por meio da opção de menu Plugins.

O administrador da rede pode manipular ainda mais o comportamento dos plugins usando as opções no menu suspenso de comportamento.

![Aba Plugins](/img/config/product-plugins.png)

A seleção **Default** respeita o estado do plugin definido no template do site selecionado pelo cliente. Assim, os plugins que estão ativados dentro do template permanecerão ativados quando o template for clonado para o site do cliente.

A opção **Force Activate** coloca o plugin em um estado ativo após a criação do site e, inversamente, a **Force Inactivate** desativa o plugin após a criação do site. Em ambas as circunstâncias, o estado do plugin pode ser alterado manualmente pelo cliente por meio do menu Plugins do WordPress.

A configuração **Force Activate & Lock** funciona de forma semelhante, mas impede que o estado do plugin seja alterado pelo cliente. Assim, uma configuração de Force Activate and Lock forçará o plugin para seu estado ativo e impedirá que o cliente o desative. Da mesma forma, a configuração **Force Inactivate & Lock** forçará o plugin para seu estado inativo e impedirá que o usuário ative o plugin.

O administrador da rede pode querer considerar as configurações Force Activate & Lock e Force Inactivate & Lock em conjunto com os templates de site, pois os plugins e os estados dos plugins dentro dos templates podem ser impactados por essas configurações, se selecionadas.

#### Redefinir limitações {#reset-limitations}

A aba **Reset Limitations** redefine todos os limites personalizados definidos no produto. Para redefinir as limitações, clique no botão **reset limitations**.

![Aba Reset Limitations](/img/config/product-reset-limitations.png)

Para confirmar a ação, deslize o alternador **confirm reset** para seu estado ativo à direita e clique no botão **reset limitations**.

![Aba Reset Limitations](/img/config/product-reset-limitations.png)

## Editar, duplicar ou excluir produto {#edit-duplicate-or-delete-product}

Produtos existentes podem ser editados, duplicados ou excluídos navegando até **Ultimate Multisite > Products** e passando o cursor sobre o nome do produto existente.

![Ações ao passar o cursor sobre o produto](/img/config/product-hover-actions.png)
