---
title: Tratamento de Impostos
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Tax Handling

Ultimate Multisite has a tax collection module built into our core plugin, so if you need to collect sales taxes on your plans, packages and services, you can easily do so without resorting to installing any add-ons.

For companies located in Europe, we offer an **add-on** that adds tools and features to better **support VAT** compliance.

Ultimate Multisite does not file or remit taxes on your behalf to the government; we simply help you collect the appropriate taxes at the time of the transaction. **You’ll still need to remit taxes on your own.**

## Habilitando a Coleta de Impostos

A coleta de impostos não está habilitada por padrão. Para habilitá-la, você precisa ir em **Ultimate Multisite > Settings > Taxes** e alternar para habilitar a configuração Enable Taxes.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### Imposto excluído vs. Imposto incluído

Por padrão, todos os preços dos seus produtos são excluídos de impostos, significando que os impostos **não estão incluídos** no preço do produto. Se determinarmos que um cliente deve pagar impostos sobre uma compra específica, adicionaremos os impostos **sobre** o subtotal.

Se preferir que os impostos estejam incluídos no preço do seu produto, você pode fazer isso habilitando a configuração **Inclusive Tax**.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

Não se esqueça de **salvar** as alterações que você fez.

### 

## Criando Taxas de Imposto

Depois de habilitar a Coleta de Impostos, você precisará criar taxas de imposto para locais específicos usando nosso editor de taxas de imposto.

Você pode acessar o editor clicando no botão **Manage Tax Rates** na barra lateral da página de configurações de Impostos.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

Na página do editor de taxas de imposto, você pode adicionar novas Taxas de Imposto clicando no botão **Add new Row**.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

Você precisará dar a cada taxa de imposto um **title** (usado nas faturas). Em seguida, pode escolher o **country** (obrigatório), o **state** e a **city** (ambos opcionais) onde este imposto será cobrado. Por fim, adicione a **tax rate in percents**.

### Categorias de Imposto

Você também pode criar várias Categorias de Imposto, para adicionar diferentes taxas de imposto para diferentes tipos de produtos.

Clique em **Add new Tax Category**, depois escreva o nome da sua categoria e pressione **Create**.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Creating a new tax category](/img/config/settings-taxes.png)

Para navegar pelas categorias, clique em **Switch** e selecione a categoria à qual deseja adicionar novos impostos.

![Switch between tax categories](/img/config/settings-taxes.png)

![Selecting a tax category to view](/img/config/settings-taxes.png)

Você pode definir a categoria de imposto para um produto específico indo à **Product edit page** e depois à aba Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Na mesma tela, você pode desativar o toggle **Is Taxable?** para informar ao Ultimate Multisite que ele não deve coletar impostos naquele produto específico.

## Suporte ao IVA Europeu

Como mencionado anteriormente, temos um add-on disponível para clientes na UE que têm requisitos adicionais devido às regulamentações do IVA europeu.

Nossas ferramentas de IVA ajudam com algumas coisas importantes:

* Carregamento fácil das taxas de IVA da UE;
* Coleta e validação de número de IVA - e cobrança reversa para entidades isentas de IVA (como empresas com números de IVA válidos);

Para instalar esse add-on, vá em **Ultimate Multisite > Settings** e clique no link da barra lateral **Check our Add-ons**.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

Você será redirecionado para a nossa página de add-ons. Lá, pode pesquisar pelo **Ultimate Multisite VAT add-on** e instalá-lo.

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

Em seguida, vá para **Network Admin > Plugins** e ative esse add-on em toda a rede.

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

Se você voltar à aba **Tax Settings**, verá novas opções disponíveis. Ative a opção **Enable VAT Support** para habilitar as novas ferramentas de IVA. Não se esqueça de **save** suas configurações!

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

### Obtendo Taxas de IVA

Uma das ferramentas que nossa integração adiciona é a capacidade de carregar as taxas de imposto para os estados membros da UE. Isso pode ser feito visitando a página do editor de taxas de imposto após habilitar o suporte ao IVA da UE.

Na parte inferior da página, você verá as opções de obtenção de IVA. Selecionar um tipo de taxa e clicar no botão **Update EU VAT Rates** fará com que a tabela seja preenchida automaticamente com as taxas de imposto de cada estado membro da UE. Em seguida, você só precisa salvar.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

Você também pode editar os valores após obtê-los. Para fazer isso, basta editar a linha da tabela que você precisa e clicar para salvar os novos valores.

### Validação de IVA

Quando o suporte ao IVA estiver habilitado, o Ultimate Multisite adicionará um campo adicional ao formulário de checkout, abaixo do campo de endereço de cobrança. O campo aparecerá apenas para clientes localizados na UE.

![VAT number field on the checkout form](/img/config/settings-taxes.png)

O Ultimate Multisite então validará o número de IVA e, se ele for válido, o mecanismo de cobrança reversa será aplicado e a taxa de imposto será definida como 0% nesse pedido.
