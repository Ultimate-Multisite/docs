---
title: Creación do teu primeiro produto de suscripción
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Criar o seu Primeiro Produto de Subscrición (v2) {#creating-your-first-subscription-product-v2}

_**NOTA IMPORTANTE: Este artigo é apenas para utilizadores da versão 2.x do Ultimate Multisite. Se estiver a usar a versão 1.x,**_ **_ve este artigo**_**.

Para começar a executar a súa rede e empezar a vender os seus servizos a usuarios potentiais, necesita ter diferentes opcións de subscrición. Como é que crea estes produtos? Que tipos de produtos pode ofrecer? Neste artigo, vamos cubrir todo o que necesita saber sobre os produtos.

## Tipo de Produto {#product-type}

Con Ultimate Multisite pode ofrecer duas categorías de produtos aos seus clientes: **plans** (planos) e **add-ons** (extras/Order Bump). Os add-ons poden dividirse en dois tipos: **packages** (paquetes) e **services** (servizos). Veremos as suas diferencias e particularidades a continuación.

  * **Plans** : o produto fundamental de Ultimate Multisite. O seu cliente só poderá ter unha mensura se estivo ligado a un plano. Un plano proporciona aos seus clientes unha ou máis sitios (depende das configuracións do seu plano) con as limitacións que estableza na súa página de edición de produtos.

  * **Packages** : add-ons que afectan directamente á funcionalidade dos planos de Ultimate Multisite. Alteran limitacións ou adicionan novos recursos, plugins ou themes ao plano original que o seu cliente comprou. Por exemplo, un plano básico pode permitir 1.000 visitas mensais e pode ofrecer un paquete que estenda ese número a 10.000.

  * **Services:** add-ons que non alteran as funcionalidades de Ultimate Multisite. Son tarefas que realizará para o seu cliente ademais ao plano que comprou. Por exemplo, o seu cliente pode comprar un plano que permite un único sitio e pagar unha servizo extra que fará ese diseño do sitio.

## Gestionar Produtos {#managing-products}

Para muitos, a aba **Products** no Ultimate Multisite **(Ultimate Multisite > Products)** pode ser comparada com os planos num ambiente de alojamento tradicional.

Dentro do Ultimate Multisite, a aba Products define a estrutura e as limitações aplicáveis a um produto ou serviço específico. Tais estruturas estendem-se à descrição do produto ou serviço, preço, impostos e permissões.

Esta secção irá guiar a sua compreensão deste pilar essencial do Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Adicionar Produtos {#adding-products}

Seja um plano, pacote ou serviço, o ponto de entrada para definir um novo item é através de **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

A interface contém duas secções principais. À esquerda, existem várias abas que ajudam na definição do produto e à direita, há algumas secções para definir o preço base do produto, o seu estado ativo e a imagem do produto.

![Product edit page overview](/img/config/product-edit-full.png)

### Descrição {#description}

A informação básica do produto pode ser definida fornecendo um nome de produto e uma descrição. Estes identificadores são exibidos onde a informação do produto é necessária, como na seleção de planos e preços, faturas, upgrades e assim por diante.

![Product description section](/img/config/product-description.png)

### Tipo de Preço {#pricing-type}

No lado direito da interface, o preço base pode ser definido.

![Pricing and save section](/img/config/product-pricing-save.png)

O Ultimate Multisite suporta três tipos diferentes de preços. A opção **paid** solicita ao administrador da rede informações sobre o preço do produto e a frequência de faturação.

### Preço {#pricing}

O componente de preço define o preço base do produto e o intervalo de faturação.

![Pricing and save section](/img/config/product-pricing-save.png)

as tal, un exemplo de prezo de $29.99 con unha configuración de 1 mes se facturará $29.99 cada mes. Da mesma forma, un prezo de $89.97 con unha configuración de 3 meses se facturará ese importe cada trimestre.

### Ciclos de Facturación {#billing-cycles}

A sección de ciclos de facturación especifica a frequência do intervalo de facturación mencionado e se entiende, en xeral, no contexto de contratos ou períodos fixos.

![Pricing and save section](/img/config/product-pricing-save.png)

Por exemplo, un prezo de produto de $29.99 con un intervalo de 1 mes e 12 ciclos de facturación se facturará $29.99 por mes para o produto durante os 12 meses seguintes. Ou outra forma de decirlo, esta configuración establecería un período de prezo fixo de $29.99 por mes durante 12 meses e despois cesaría a facturación.

### Período de Proba (Trial Period) {#trial-period}

Activar o interruptor da oferta de prueba permite ao administrador da rede definir un período de prueba para o produto.

![Pricing and save section](/img/config/product-pricing-save.png)

Durante o período de prueba, os clientes están libres de usar o produto e non se les facturará hasta que o período de prueba se agote.

### Tarifa de Configuración (Setup Fee) {#setup-fee}

Tamén podes aplicar unha tarifa de configuración ao teu plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Isto significa que o teu cliente pagará un importe extra na primeira factura (adicional ao plan de prezo) que corresponde á tarifa que definiste en esta sección.

### Activo (Active) {#active}

O interruptor de activo define eficazmente se o produto está disponible para os clientes para novas inscricións.

![Active toggle](/img/config/product-active.png)

Se hai clientes existentes neste plan, activar o toggle para o estado desativado equivale a "grandear" o plan, retirando-o das futuras subscrições. **Os clientes existentes no plan continuarão a ser cobrados** até serem transicionados para um novo plan ou removidos do plan.

### Imagem do Produto {#product-image}

O botão **Upload Image** permite ao administrador da rede utilizar a biblioteca de mídia para selecionar ou carregar uma imagem do produto.

![Sección de imagen del producto](/img/config/product-image.png)

### Eliminar {#delete}

O botão **Delete Product** elimina o produto do sistema. Aparece assim que o produto for publicado.

![Sección de eliminar producto](/img/config/product-delete.png)

Diferentemente de outras eliminações, o produto não é colocado num estado de lixo. Assim, uma vez eliminado, a ação é irreversível.

### Opções do Produto {#product-options}

Depois de definida a informação básica do produto, as opções do produto ajudam o administrador da rede a definir os atributos específicos do produto.

#### Geral {#general}

A aba **General** define os atributos gerais do produto que não se aplicam a nenhuma das outras abas específicas do produto.

![Aba General](/img/config/product-general-tab.png)

O **product slug**, que é autoexplicativo, define o *slug* com o qual o produto é identificado nas URLs e noutras áreas do Ultimate Multisite.

O Ultimate Multisite suporta vários tipos de produtos, nomeadamente Plan, Package e Service. As abas **Product Options** são ajustadas dinamicamente dependendo do tipo de produto especificado.

O **Customer Role** especifica o papel que é atribuído ao cliente quando o site é criado. Tipicamente, para a maioria dos administradores da rede, este será o padrão Ultimate Multisite ou Administrator. O papel padrão do Ultimate Multisite pode ser definido em **Ultimate Multisite > Settings > Login & Registration**.

![Configuración de roles de cliente](/img/config/product-customer-role-settings.png)

#### Subir y Bajar de Nivel (Up & Downgrades) {#up--downgrades}

Esta pestaña especifica las rutas de actualización y bajada disponibles para un cliente dentro de su nivel específico.

Para entender este concepto, considera un ejemplo donde una instalación de Ultimate Multisite de nicho proporciona soluciones de gestión del aprendizaje a sus clientes. Para lograr esto, se definen estos tres planes (Básico, Plus y Premium) y se activan plugins específicos para cada plan (ver más adelante en esta sección las instrucciones sobre cómo activar los plugins).

Si la instalación de Ultimate Multisite también sirve sitios web comerciales o sitios de comercio electrónico, esos planes pueden requerir diferentes plugins instalados y activados.

Hasta este punto, sería indeseable y problemático permitir que los clientes de eLearning pasen a planes de comercio electrónico, ya que estos planes, precios y limitaciones pueden no ser adecuados para ellos.

Por lo tanto, para restringir la ruta del cliente y prevenir incidentes, el administrador de red puede definir un grupo de planes y dentro de ese grupo especificar a qué planes puede pasar el cliente.

![Pestaña Subir y Bajar](/img/config/product-upgrades.png)

Para definir un grupo de planes, especifica los planes compatibles dentro de la lista del **grupo de planes**. El **orden del producto** determina cómo se ordenan y muestran los planes del más bajo al más alto.

Ultimate Multisite también incluye una función de **subida de precio (order bump)** donde, cuando sea apropiado, se pueden añadir productos y servicios adicionales a los planes. Estos se ofrecen al cliente como artículos adicionales que se pueden añadir a los planes en el momento del pago o durante una actualización.

#### Variaciones de Precio {#price-variations}

As variacións de prezo permiten ao administrador da rede especificar diferentes niveles de precios dependendo da duración. Esta configuración permite ofrecer períodos de facturación mensais, trimestrais, anuais ou cualquier outro para o mesmo produto. Por exemplo, podes configurar un produto a $29.99/mês con unha opción anual descontada a $249.99/año.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Para establecer variacións de prezo, activa o interruptor **Enable Price Variations** e pulsa no botón **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Para introducir unha variación, establece a duración, o período e o prezo da variación. É posible introducir variacións adicionais pulando de novo no botón.

Por exemplo, se o prezo base do teu produto é de $29.99 por mes, podes añadir:

  * **3 Meses** a $79.99 (un pequeno desconto respecto ao mensual)
  * **1 Año** a $249.99 (un descuento significativo por compromiso anual)

:::tip Mostrar un Interruptor de Período de Facturación no Frontend

As variacións de prezo por si só non añaden un interruptor ou switch ao checkout do frontend. Para permitir que os clientes pasen entre períodos de facturación (por exemplo, Mensual / Anual), necesitas añadir un campo **Period Selection** ao teu formulario de checkout. Vede [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) para as instrución paso a paso.
:::

#### Impostos {#taxes}

A pestaña **Taxes** se alinea coas configuracións fiscais especificadas en **Ultimate Multisite > Settings > Taxes** e, de forma máis específica, coas taxas fiscais definidas. Para activar os impostos e definir as taxas aplicables, podes consultar a documentación en **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

N un exemplo anterior, definimos unha taxa de imposto local de 7.25% aplicable a clientes en California (Estados Unidos).

Uma vez que a taxa de imposto está definida en **Ultimate Multisite > Settings > Manage Tax Rates**, é seleccionable no nivel do produto.

![Taxes tab](/img/config/product-taxes.png)

Para indicar que un produto é móbil, pon o interruptor **Is Taxable** en activo e selecciona a taxa de imposto aplicable a partir do desplegable Tax Category.

#### Site Templates {#site-templates}

En esencia, os site templates son sitios web completos de WordPress que se clonan ao sitio do cliente no inicio da súa suscripción.

![Site Templates tab](/img/config/product-site-templates.png)

O administrador da rede crea e configura o sitio template como un sitio WordPress normal con temas, plugins e contido activados e configurados. O sitio template se clona exactamente ao cliente.

Esta pestaña permite ao administrador da rede especificar o comportamento dos site templates ao iniciar unha nova suscripción. Para utilizar os site templates para este plan, pon o interruptor **Allow Site Templates** en estado activo.

Quando **Allow Site Templates** está desativado, os clientes no plan non poden escoller templates ata se un formulario de checkout, un enlace partilhable ou un parámetro URL me haran os templates dispoñibles. Ultimate Multisite agora impoñe este límite a través dunha cadena de fallback entre os puntos de entrada dispoñibles: se comprén as configuración do plan, despois as configuración dos templates do formulario de checkout e, finalmente, os templates preseleccionados ou proporcionados por URL. Isto mantén os límites do plan consistentes e impide que aparezan templates para produtos que non deberían ofrecerlos.

O **site template selection mode** define o comportamento dos site templates durante o proceso de suscripción.

A configuración **D** **efault** segue os pasos do formulário de checkout. Se o administrador da rede definiu um passo de seleção de template no processo de checkout e esse passo foi definido com templates, esta configuração respeitará as diretivas estabelecidas nesse passo de checkout.

Especificar **A** **ssign Site Template** força a seleção do template especificado. Consequentemente, quaisquer passos de seleção de template no processo de checkout são removidos.

Por último, **C** **hoose Available Site Templates** substitui os templates especificados no passo de checkout pelos templates selecionados nesta configuração. Também pode ser definido um template pré-selecionado para ajudar o cliente na escolha.

No final, se o administrador da rede desejar que a seleção de templates ocorra nos passos de checkout, a configuração ' _default_ ' será suficiente. Alternativamente, para remover e bloquear a seleção de templates e delegar a seleção às configurações do plano, as opções ' _assign new template_ ' ou ' _choose available site templates_ ' podem ser desejáveis.

#### Sites {#sites}

A aba **Sites** faz parte da funcionalidade de limitações do Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Esta configuração especifica o número máximo de sites que um cliente pode criar sob a sua adesão.

Para ativar a limitação, defina o interruptor **limit sites** para o estado ativo e especifique o número máximo de sites no campo **site allowance**.

#### Visitas {#visits}

A aba **Visits** é outra parte do sistema de limitações do Ultimate Multisite. Esta configuração permite contabilizar e subsequentemente limitar os visitantes únicos do site de um cliente.

![Visits tab](/img/config/product-visits.png)

Do punto de vista de marketing, a rede e os administradores poden usar esta configuración como unha forma de animar os clientes a actualizar o seu plan unha vez que se alcale o límite. Esta configuración tamén pode axudar ao administrador da rede a controlar e prevenir o tráfego excesivo para os sitios para preservar os recursos do sistema.

Para usar esta característica, pon o interruptor **limit unique visits** no estado activo e especifica o número máximo de visitantes únicos no campo **unique visits quota**.

Una vez que este límite se alcance, Ultimate Multisite deixará de servir o sitio do cliente en lugar de mostrar unha mensaxe que indique que os límites se superaron.

#### Usuarios {#users}

As limitacións de 'Users' de Ultimate Multisite permiten ao administrador da rede imponer límites ao número de usuarios que se poden crear e asignar a roles.

![Users tab](/img/config/product-users.png)

Para activar a característica de limitación, pon o interruptor **limit user** no estado activo arrastrando-o a dereita.

A continuación, para cada rol que se limitar, pon o interruptor ao seu lado no estado activo e define o límite máximo en o campo apropiado.

#### Tipos de Post {#post-types}

A pestaña **Post Types** permite ao administrador da rede imponer límites granulares na vasta colección de tipos de post dentro de WordPress.

![Post Types tab](/img/config/product-post-types.png)

Debido á construción de WordPress, os posts e os tipos de post son un componente importante da súa funcionalidade principal, e así o sistema de limitacións de Ultimate Multisite está diseñado para axudar ao administrador da rede a establecer e manter os límites.

Para activar este subsistema de limitacións, pon o interruptor **limit post types** no estado activo arrastrando-o a dereita.

A continuación, para cada tipo de post que se limite, activelo deslizando hacia la derecha y especifique o límite máximo en el campo correspondiente.

#### Espacio en disco {#disk-space}

A esta pestaña **Disk Space** os permite aos administradores de rede restringir o espazo que os clientes consumen.

![Disk Space tab](/img/config/product-disk-space.png)

Normalmente, nun multisite de WordPress, os ficheiros centrais son compartidos entre todos os sitios e as directorios individuais creados para os ficheiros de medios e subida a que se aplican estas configuracións e limitacións.

Para activar a limitación do uso do disco, estableza o interruptor **limit disk size per site** no estado activo deslizando-o para a dereita.

A continuación, especifique o límite máximo en megabytes no campo **disk space allowance**.

#### Dominio personalizado {#custom-domain}

Ao activar esta opción, pode permitir dominios personalizados só nón plan específico.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temas {#themes}

A pestaña **Themes** dentro das opcións do produto permite ao administrador de rede que os temas estén dispoñibles para selección dos clientes e, opcionalmente, forzar o estado do tema.

![Themes tab](/img/config/product-themes.png)

_**Nota: Para que os temas estén dispoñibles aos clientes, deben estar habilitados na rede polo administrador de rede.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

A opción **visibility** define se este tema é visto ou non ao cliente ao ver a súa pestaña **Appearance > Themes** dentro do seu sitio. Establecer esta opción en **Hidden** remove o tema da vista e así restringe a capacidade de seleccionalo e activalo.

![Themes tab](/img/config/product-themes.png)

A selección **behavior** permite ao administrador de rede definir o estado do tema ao crear o sitio do cliente.

No estado **Disponível**, o tema fica disponível para que o cliente se ative sozinho. Por outro lado, no estado **Não Disponível**, remove-se ao cliente a capacidade de ativar o tema. Por último, a opção **Forçar Ativação** força a seleção e ativação do tema, definindo-o como padrão na criação do site.

#### Plugins {#plugins}

Semelhante à aba Temas, o Ultimate Multisite permite que o administrador da rede defina a visibilidade dos plugins para os clientes, bem como o seu estado na criação de um novo site.

![Plugins tab](/img/config/product-plugins.png)

O menu suspenso **visibilidade** permite que o plugin seja visível ou oculto para o cliente quando visualizado no seu site através da opção do menu Plugins.

O administrador da rede pode manipular ainda mais o comportamento dos plugins utilizando as opções no menu suspenso **comportamento**.

![Plugins tab](/img/config/product-plugins.png)

A seleção **Padrão** respeita o estado do plugin definido no modelo de site selecionado pelo cliente. Assim, os plugins que estão ativados dentro do modelo permanecerão ativos quando este for clonado para o site do cliente.

O **Forçar Ativação** coloca o plugin num estado ativo na criação do site e, inversamente, o **Forçar Inativação** desativa o plugin na criação do site. Em ambas as circunstâncias, o estado do plugin pode ser alterado manualmente pelo cliente através do seu menu Plugins do WordPress.

A configuración **Force Activate & Lock** funciona de maneira parecida, pero impide que o estado do plugin seja alterado pelo cliente. Así que, uma configuração de Force Activate e Lock forçará o plugin para o seu estado ativo e impedirá que o cliente o desative. Da mesma forma, a configuração **Force Inactivate & Lock** forçará o plugin para o seu estado inativo e impedirá que o utilizador o ative.

O administrador da rede pode querer considerar as configurações Force Activate & Lock e Force Inactivate & Lock em conjunto com os templates do site como plugins, e os estados dos plugins dentro dos templates podem ser afetados por estas configurações se forem selecionadas.

#### Limitações de Redefinição (Reset Limitations) {#reset-limitations}

A aba **Reset Limitations** redefine todos os limites personalizados definidos no produto. Para redefinir as limitações, clique no botão **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Para confirmar a ação, deslize o interruptor **confirm reset** para o estado ativo à direita e clique no botão **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Editar, Duplicar ou Apagar Produto {#edit-duplicate-or-delete-product}

Os produtos existentes podem ser editados, duplicados ou apagados navegando em **Ultimate Multisite > Products** e passando o rato sobre o nome do produto existente.

![Product hover actions](/img/config/product-hover-actions.png)
