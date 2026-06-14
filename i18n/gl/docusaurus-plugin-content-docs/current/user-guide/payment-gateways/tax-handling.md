---
title: Maneixo dos impostos
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Tratamento de Impostos

O Ultimate Multisite tem un módulo de recollección de impostos integrado no noso plugin principal, así que se pode recoñer fácilmente os impostos de venda nos seus plans, paquetes e servizos sen instalar ningún add-on.

Para as empresas que están en Europa, ofrecemos un **add-on** que añade ferramentas e características para mellorar o **soporte da IVA**.

O Ultimate Multisite non presenta nin remite impostos en nome do Goberno; nós simplemente axuda a recoñer os impostos apropiados no momento da transacción. **Voi ter que remitar os impostos por vós mesmos.**

## Activar a Recollección de Impostos

A recollección de impostos non está activada por defecto. Para activala, hai que ir a **Ultimate Multisite > Settings > Taxes** e activar o setting Enable Taxes.

![Toggle para Activar Impostos na parte superior da páxina de configuración dos impostos](/img/config/settings-taxes-enable.png)

Aquí ten un visto completo da páxina de configuración dos impostos:

![Páxina completa de configuración dos impostos](/img/config/settings-taxes-full.png)

Tamén podes ver os configuracións dos impostos para produtos individuais:

![Configuración de impuestos para productos](/img/config/settings-taxes.png)

### Imposto excluído vs. Imposto incluído

Por defecto, todos os precios dos seus produtos son excluídos do imposto, o que significa que os impostos **non están incluídos** no preço do produto. Se determinamos que un cliente debe pagar impostos por unha compra determinada, nós añadecemos os impostos **sobre** o subtotal.

Se preferes que os impostos estén incluídos no precio do teu produto, podes facelo activando o setting Inclusive Tax.

![Fila de toggle para Imposto Incluido abaixo del setting Activar Impostos](/img/config/settings-taxes-inclusive.png)

Non te esquezas de **salvar** as modificacións que hai feito.

###

## Creación de Tipos de Imposto

Despois de activar a Recollección de Impostos, terás que crear tipos de imposto para lugares específicos usando o noso editor de tipos de imposto.

Pode acceder ao editor facendo clic no botão **Manage Tax Rates** (Gestionar Taxas) na barra lateral da página de configurações de impostos.

![Link Manage Tax Rates no painel de Taxas na página de configurações](/img/config/settings-taxes-manage-rates.png)

Na página do editor de taxas de impostos, pode adicionar novas Taxas de Imposto (Tax Rates) clicando no botão **Add new Row** (Adicionar nova Linha).

![Tabela do editor de taxas de impostos com o botão Add new Row no topo](/img/config/tax-rates-editor.png)

Vai ter de dar a cada taxa de imposto un **título** (usado nas faturas). Depois, podes escolher o **país** (obrigatório), o **estado**, e a **cidade** (ambos opcionais) onde este imposto será cobrado. Finalmente, adiciona a **taxa de imposto em percentagem**.

### Categorias de Imposto

Também podes criar múltiplas Categorias de Imposto para adicionar diferentes taxas de imposto para diferentes tipos de produtos.

Clica em **Add new Tax Category** (Adicionar nova Categoria de Imposto), depois escreve o nome da tua categoria e clica em **Create** (Criar).

![Botão Add new Tax Category no topo do editor de taxas de impostos](/img/config/tax-categories-add.png)

![Campo de entrada Tax Category Name no modal de criação de categoria](/img/config/tax-categories-create-modal.png)

Para navegar pelas categorias, clica em **Switch** (Alternar) e seleciona a categoria para a qual queres adicionar novos impostos.

![Botão Switch dropdown para mudar entre categorias de imposto](/img/config/tax-categories-switch.png)

![Dropdown seletor Tax category mostrando as categorias disponíveis](/img/config/tax-categories-select.png)

Podes definir a categoria de imposto para um produto em particular indo para a **Product edit page** (Página de edição do Produto) e depois para a aba Taxes (Impostos).

![Aba Product taxes com o toggle Tax category e taxable](/img/config/product-taxes.png)

Na mesma tela, podes desativar o toggle **Is Taxable?** (É Tributável?) para dizer ao Ultimate Multisite que não deve cobrar impostos nesse produto específico.

## Suporte a IVA Europeu

Como mencionamos antes, temos un add-on disponível para clientes na UE que têm requisitos adicionais devido aos regulamentos de IVA europeus.

As nossas ferramentas de IVA ajudam com algumas coisas importantes:

  * Carregamento fácil das taxas de IVA da UE;

  * Recolha e validação do Número de IVA - e cobrança reversa para entidades isentas de IVA (como empresas com números de IVA válidos);

Para instalar esse add-on, vá a **Ultimate Multisite > Settings** e depois clique no link na barra lateral **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Será redirecionado para a página dos nossos add-ons. Lá, pode procurar o **Ultimate Multisite VAT add-on** e instalá-lo.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Depois, vá a **Network Admin > Plugins** e ative esse add-on em toda a rede.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Se voltar para a aba **Tax Settings**, verá novas opções disponíveis. Ative a opção **Enable VAT Support** (Ativar Suporte de IVA) para ativar as novas ferramentas de IVA. Não se esqueça de **save** (guardar) as suas configurações!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Carregar as Taxas de IVA

Uma das ferramentas que a nossa integração adiciona é a capacidade de carregar as taxas de IVA dos estados membros da UE. Isto pode ser feito visitando a página do editor de taxas após ativar o suporte ao IVA da UE.

No fondo da páxina verás as opcións para puxar os IVA (VAT). Seleccionando un tipo de taxa e facendo clic no botón **Update EU VAT Rates** se abrirá e preencherá automáticamente a tábula coas taxas fiscais para cada estado membro da UE. Aínda só hai que salvalo.

![Botón Update EU VAT Rates ao fondo do editor de taxas](/img/config/tax-rates-vat-pull.png)

Poderás tamén editar os valores despois de puxalos. Para facelo, basta editar a linha da tábula que precisas e clicar para salvar os novos valores.

### Validación do IVA (VAT Validation)

Cando o soporte de IVA está activado, Ultimate Multisite añadirá un campo adicional ao formulario de checkout, abaixo do campo da morada de facturación. O campo só aparecerá para os clientes localizados na UE.

<!-- Screenshot unavailable: Campo de Número de IVA no formulario de checkout frontal abaixo da morada de facturación -->

Ultimate Multisite aínda validará o Número de IVA e, se retorna como válido, se aplicará o mecanismo de carga inversa (reverse charge mechanism) e a taxa fiscal será establecida en 0% para esa encomenda.
