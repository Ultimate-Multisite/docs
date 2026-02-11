---
title: Criando Seu Primeiro Produto de Assinatura
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Criando seu Primeiro Produto de Assinatura (v2)

_**NOTA IMPORTANTE: Este artigo é apenas para usuários da Ultimate Multisite versão 2.x. Se você está usando a versão 1.x,**_ **_**veja este artigo**_**._

Para começar a operar sua rede e começar a vender seus serviços para usuários potenciais, você precisa ter diferentes opções de assinatura. Como criar esses produtos? Quais são os tipos de produtos que você pode oferecer? Neste artigo, abordaremos tudo que você precisa saber sobre produtos.

## Tipo de Produto

Com Ultimate Multisite, você pode oferecer duas categorias de produtos aos seus clientes: **plans** e **add-ons** **(Order Bump)**. Add-ons podem ser divididos em dois tipos: **packages** e **services**. Veremos suas diferenças e particularidades a seguir.

  * **Plans** : o produto fundamental do Ultimate Multisite. Seu cliente só pode ter uma assinatura se estiver vinculado a um plano. Um plano fornece aos seus clientes um ou mais sites (depende das configurações do seu plano) com as limitações que você define na página de edição do produto.

  * **Packages** : add-ons que impactam diretamente nas funcionalidades dos planos do Ultimate Multisite. Eles alteram limitações ou adicionam novos recursos, plugins ou temas ao plano original que seu cliente comprou. Por exemplo, um plano básico pode permitir 1.000 visitas por mês e você pode disponibilizar um pacote que estenda esse número para 10.000.

  * **Services:** add-ons que não alteram as funcionalidades do Ultimate Multisite. São tarefas que você realizará para seu cliente além do plano que ele comprou. Por exemplo, seu cliente pode comprar um plano que permite um único site e também pagar por um serviço extra que fará o design desse site.

## Gerenciando Produtos

Para muitos, a aba **Products** no Ultimate Multisite **(Ultimate Multisite > Products)** pode ser equivalente a planos em um ambiente de hospedagem tradicional.

Dentro do Ultimate Multisite, a aba Products define a estrutura e as limitações aplicáveis a um produto ou serviço específico. Essas estruturas se estendem à descrição do produto ou serviço, preço, impostos e permissões.

Esta seção guiará sua compreensão dessa pedra angular essencial do Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Adicionando Produtos

Seja um plano, pacote ou serviço, o ponto de entrada para definir um novo item é via **Ultimate Multisite > Products > Add Product**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

A interface contém duas seções predominantes. À esquerda há várias abas que auxiliam na definição do produto e à direita há algumas seções para definir o preço base do produto, seu estado ativo e a imagem do produto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WRwYrlk0BS.png)

### Descrição

As informações básicas do produto podem ser definidas fornecendo um nome e descrição do produto. Esses identificadores são exibidos sempre que a informação do produto é necessária, como seleção de plano e preço, faturas, upgrades e similares.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Tipo de Preço

No lado direito da interface, o preço base pode ser definido.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oHwhlrBFC9.png)

O Ultimate Multisite suporta três tipos diferentes de precificação. A opção **paid** solicita ao administrador da rede informações sobre o preço do produto e a frequência de cobrança.

### Preço

O componente de preço define o preço base do produto e o intervalo de cobrança.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

portanto, um preço de $29,99 com configuração de 1 mês cobrará $29,99 a cada mês. Da mesma forma, um preço de $89,97 com configuração de 3 meses cobrará esse valor a cada trimestre.

### Ciclos de Cobrança

A seção de ciclos de cobrança especifica a frequência do intervalo de cobrança mencionado e geralmente é entendida à luz de contratos ou termos fixos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

Por exemplo, um preço de produto de $29,99 com intervalo de 1 mês e 12 ciclos de cobrança cobraria $29,99 por mês pelo produto durante os 12 meses seguintes. Em outras palavras, essa configuração estabeleceria um prazo de preço fixo de $29,99 por mês por 12 meses e então cessaria a cobrança.

### Período de Teste

Ativar o toggle de oferta de teste permite ao administrador da rede definir um período de teste para o produto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

Durante o período de teste, os clientes podem usar o produto livremente e não serão cobrados até que o período de teste seja esgotado.

### Taxa de Configuração

Você também pode aplicar uma taxa de configuração ao seu plano.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

Isso significa que seu cliente pagará um valor extra na primeira cobrança (além do preço do plano) que corresponde à taxa que você definiu nesta seção.

### Ativo

O toggle ativo define efetivamente se o produto está disponível para clientes em novos cadastros.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

Se houver clientes existentes neste plano, definir o toggle para o estado desativado efetivamente faz o plano ficar obsoleto, removendo-o de futuros cadastros. **Clientes existentes no plano continuarão sendo cobrados** até que sejam transferidos para um novo plano ou removidos do plano.

### Imagem do Produto

O botão **Upload Image** permite ao administrador da rede usar a biblioteca de mídia para selecionar ou fazer upload de uma imagem do produto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Excluir

O botão **Delete Product** exclui o produto do sistema. Ele aparece uma vez que o produto é publicado.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

Ao contrário de outras exclusões, o produto não é colocado em nenhum estado de lixeira. Assim, uma vez excluído, a ação é irreversível.

### Opções do Produto

Uma vez que as informações básicas do produto estejam definidas, as opções do produto ajudam o administrador da rede a definir ainda mais os atributos específicos do produto.

#### Geral

A aba **General** define os atributos gerais do produto que não se aplicam a nenhuma das outras abas específicas do produto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-z32g4XQeyT.png)

O **product slug** autoexplicativo define o slug com o qual o produto é identificado em URLs e outras áreas do Ultimate Multisite.

O Ultimate Multisite suporta vários tipos de produto, nomeadamente Plan, Package e Service. As abas **Product Options** são ajustadas dinamicamente dependendo do tipo de produto especificado.

O **Customer Role** especifica a função que o cliente recebe quando o site é criado. Normalmente, para a maioria dos administradores de rede, isso será o padrão do Ultimate Multisite ou Administrador. O papel padrão do Ultimate Multisite pode ser definido em **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Up & Downgrades

Esta aba especifica os caminhos de upgrade e downgrade disponíveis para um cliente dentro de seu nível específico.

Para entender esse conceito, considere um exemplo em que uma instalação de Ultimate Multisite especializada fornece soluções de gerenciamento de aprendizado aos seus clientes. Para isso, três planos (Basic, Plus e Premium) são definidos e plugins específicos são ativados para cada plano (veja mais adiante nesta seção para instruções sobre como ativar plugins).

Se a instalação do Ultimate Multisite também atender a sites corporativos ou de comércio eletrônico, esses planos podem exigir plugins diferentes para serem instalados e ativados.

Até esse ponto, seria indesejável e problemático permitir que clientes de eLearning façam transição para planos de eCommerce, pois esses planos, preços e limitações podem não ser adequados.

Assim, para restringir o caminho do cliente e prevenir incidentes, o administrador da rede pode definir um grupo de planos e, dentro desse grupo, especificar os planos para os quais o cliente pode transitar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JnrZ4fWFEC.png)

Para definir um grupo de planos, especifique os planos compatíveis na lista **plan group**. O **product order** determina como os planos são ordenados e exibidos do menor para o maior.

O Ultimate Multisite também inclui um recurso **order bump** onde produtos e serviços adicionais apropriados podem ser adicionados aos planos. Esses são oferecidos ao cliente como itens adicionais que podem ser adicionados aos planos no checkout ou durante um upgrade.

#### Variações de Preço

Variações de preço permitem ao administrador da rede especificar faixas de preço alternativas dependendo da duração. Essa configuração torna possível estabelecer faixas de preço de 3 meses, 6 meses ou anuais, ou qualquer outra duração e frequência determinada pelo caso de uso.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-d75YUO3opm.png)

Para estabelecer variações de preço, ative o toggle **enable price variations** e clique no botão **Add new Price Variation**.

Para inserir uma variação, defina a duração, período e preço da variação. Variações adicionais podem ser inseridas clicando no botão novamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Impostos

A aba **Taxes** se alinha com as configurações de imposto especificadas em **Ultimate Multisite > Settings > Taxes** e, mais especificamente, as taxas de imposto definidas. Para habilitar impostos e definir taxas de imposto aplicáveis, consulte a documentação em **Ultimate Multisite: Settings**

**![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)**

Em um exemplo anterior, definimos uma taxa de imposto local de 7,25% aplicável a clientes na Califórnia (Estados Unidos da América).

Uma vez que a taxa de imposto é definida em **Ultimate Multisite > Settings > Manage Tax Rates**, ela pode ser selecionada no nível do produto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Sh1BVGVj6i.png)

Para indicar que um produto é um item tributável, ative o toggle **Is Taxable** e selecione a taxa de imposto aplicável no menu suspenso Tax Category.

#### Modelos de Site

Em essência, os modelos de site são sites WordPress completos que são clonados para o site do cliente no início de sua assinatura.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-llMSMXCDt4.png)

O administrador da rede cria e configura o site modelo como um site WordPress regular com temas, plugins e conteúdo ativados e configurados. O site modelo é clonado literalmente para o cliente.

Esta aba permite ao administrador da rede especificar o comportamento dos modelos de site em uma nova assinatura. Para usar modelos de site, ative o toggle **allow site templates**.

O **site template selection mode** define o comportamento dos modelos de site durante o processo de assinatura.

A configuração **D** **efault** segue os passos no formulário de checkout. Se o administrador da rede definiu uma etapa de seleção de modelo no processo de checkout e a etapa foi definida com modelos, essa configuração respeitará as diretrizes estabelecidas na etapa de checkout.

Especificar **A** **ssign Site Template** força a seleção do modelo especificado. Consequentemente, quaisquer etapas de seleção de modelo no processo de checkout são removidas.

Por fim, **C** **hoose Available Site Templates** substitui os modelos especificados na etapa de checkout pelos modelos selecionados nesta configuração. Um modelo pré-selecionado também pode ser definido para ajudar o cliente na seleção.

Em última análise, se o administrador da rede deseja que a seleção de modelo ocorra nas etapas de checkout, a configuração de ‘_default_’ será suficiente. Alternativamente, para remover e bloquear a seleção de modelo e delegar a seleção às configurações do plano, as opções ‘_assign new template_’ ou ‘_choose available site templates_’ podem ser desejáveis.

#### Sites

A aba **Sites** faz parte da funcionalidade de limitações do Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-A8fzNucGyC.png)

Esta configuração especifica o número máximo de sites que um cliente pode criar sob sua assinatura.

Para habilitar a limitação, ative o toggle **limit sites** e especifique o número máximo de sites no campo **site allowance**.

#### Visitas

A aba **Visits** é outra parte do sistema de limitações do Ultimate Multisite. Esta configuração permite a contabilidade e a subsequente limitação de visitantes únicos ao site do cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e7f5otg89m.png)

Do ponto de vista de marketing, os administradores de rede podem usar essa configuração como meio de incentivar os clientes a atualizarem seu plano quando os limites forem atingidos. Essa configuração também pode ajudar o administrador da rede a conter e prevenir tráfego excessivo nos sites para preservar os recursos do sistema.

Para usar esse recurso, ative o toggle **limit unique visits** e especifique o número máximo de visitantes únicos no campo **unique visits quota**.

Uma vez que esse limite seja atingido, o Ultimate Multisite deixará de servir o site do cliente em vez de exibir uma mensagem indicando que os limites foram excedidos.

#### Usuários

As limitações de 'Users' do Ultimate Multisite permitem ao administrador da rede impor limites no número de usuários que podem ser criados e atribuídos a funções.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-maGYqW7WlP.png)

Para habilitar o recurso de limitações, ative o toggle **limit user** deslizando-o para a direita.

Em seguida, para cada função a ser limitada, ative o toggle ao lado e defina o limite máximo no campo apropriado.

#### Tipos de Postagem

A aba **Post Types** permite ao administrador da rede impor limites granulares na extensa variedade de tipos de postagem dentro do WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZELQvvqyvn.png)

Devido à construção do WordPress, posts e tipos de postagem são um componente significativo de sua funcionalidade central, e assim o sistema de limitações do Ultimate Multisite foi projetado para ajudar o administrador da rede a estabelecer e manter limites.

Para habilitar esse subsistema de limites, ative o toggle **limit post types** deslizando-o para a direita.

Em seguida, para cada tipo de postagem a ser limitado, ative-o deslizando-o para a direita e especificando o limite máximo no campo apropriado.

#### Espaço em Disco

A aba **Disk Space** permite aos administradores de rede restringir o espaço consumido pelos clientes.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-EqlaLO0ebw.png)

Tipicamente, em um WordPress multisite, os arquivos principais são compartilhados entre todos os sites e diretórios individuais criados para arquivos de mídia e uploads aos quais essas configurações e limitações se aplicam.

Para habilitar a limitação de uso de disco, ative o toggle **limit disk size per site** deslizando-o para a direita.

Em seguida, especifique o limite máximo em megabytes no campo **disk space allowanc** e.

#### Domínio Personalizado

Ao alternar esta opção, você pode permitir domínios personalizados neste plano especificamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KEMuUG76Fg.png)

#### Temas

A aba **Themes** dentro das opções do produto permite ao administrador da rede disponibilizar temas aos clientes para seleção e, opcionalmente, forçar o estado do tema.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rkyVSGnDqo.png)

_**Observação: Para que os temas sejam disponibilizados aos clientes, eles devem ser habilitados na rede pelo administrador da rede.**_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HAQShYB7Y1.png)

A opção **visibility** define se o tema é ou não visível para o cliente ao visualizar a aba **Appearance > Themes** dentro de seu site. Definir esta opção como **Hidden** remove o tema da visualização e, portanto, restringe a capacidade de selecionar e ativá-lo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ivsGIABl55.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

A seleção **behavior** permite ao administrador da rede definir o estado do tema na criação do site do cliente.

No estado **A** **vailable** o tema é disponibilizado ao cliente para autoativação. Por outro lado, o estado **Not Available** remove da capacidade do cliente de ativar o tema. Por fim, a opção **Force Activate** força a seleção e ativação do tema, configurando-o como padrão na criação do site.

#### Plugins

Semelhante à aba Themes, o Ultimate Multisite permite ao administrador da rede definir a visibilidade dos plugins para os clientes, bem como seu estado na criação de um novo site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ipzv31FIb6.png)

O menu suspenso **visibility** permite que o plugin seja visível ou oculto para o cliente quando visualizado em seu site através da opção de menu Plugins.

O administrador da rede pode manipular ainda mais o comportamento dos plugins usando as opções no menu suspenso behavior.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

A seleção **Default** respeita o estado do plugin definido no modelo de site selecionado pelo cliente. Assim, os plugins que são ativados dentro do modelo permanecerão ativados quando o modelo for clonado para o site do cliente.

O **Force Activate** coloca o plugin em estado ativo na criação do site e, por outro lado, o **Force Inactivate** desativa o plugin na criação do site. Em ambos os casos, o estado do plugin pode ser alterado manualmente pelo cliente através do menu Plugins do WordPress.

A configuração **Force Activate & Lock** funciona de maneira semelhante, mas impede que o estado do plugin seja alterado pelo cliente. Assim, uma configuração de Force Activate and Lock forçará o plugin em seu estado ativo e impedirá que o cliente o desative. Da mesma forma, a configuração **Force Inactivate & Lock** forçará o plugin em seu estado inativo e impedirá que o usuário o ative.

O administrador da rede pode desejar considerar as configurações Force Activate & Lock e Force Inactivate & Lock em conjunto com os modelos de site, pois os plugins e seus estados dentro dos modelos podem ser afetados por essas configurações se selecionadas.

#### Redefinir Limitações

A aba **Reset Limitations** redefine todos os limites personalizados definidos no produto. Para redefinir as limitações, clique no botão **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

Para confirmar a ação, deslize o toggle **confirm reset** para o estado ativo à direita e clique no botão **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Opções Legadas

A aba **Legacy Options** observa certas opções e comportamentos definidos no Ultimate Multisite 1.x.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Fn3BjwTH4r.png)

Essas opções são oferecidas para compatibilidade e facilidade de transição e serão descontinuadas em versões futuras.

## Editar, Duplicar ou Excluir Produto

Produtos existentes podem ser editados, duplicados ou excluídos navegando até **Ultimate Multisite > Products** e passando o mouse sobre o nome do produto existente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GcHtJl6WmV.png)

## 

###
