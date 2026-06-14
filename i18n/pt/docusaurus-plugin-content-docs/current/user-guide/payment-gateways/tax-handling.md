---
title: Tratamento de Impostos
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Tratamento de Impostos

O Ultimate Multisite tem um módulo de coleta de impostos embutido no nosso plugin principal, então se você precisar coletar os impostos sobre vendas nos seus planos, pacotes e serviços, pode fazer isso facilmente sem precisar instalar nenhum add-on.

Para empresas localizadas na Europa, oferecemos um **add-on** que adiciona ferramentas e recursos para melhor **suportar a conformidade com o IVA (VAT)**.

O Ultimate Multisite não declara ou repassa impostos em seu nome ao governo; nós apenas ajudamos você a coletar os impostos apropriados no momento da transação. **Você ainda precisará repassar os impostos por conta própria.**

## Habilitando a Coleta de Impostos

A coleta de impostos não está habilitada por padrão. Para ativá-la, você precisa ir em **Ultimate Multisite > Settings > Taxes** e ativar a configuração Enable Taxes (Habilitar Impostos).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Aqui está uma visualização completa da página de configurações de impostos:

![Tax settings full page](/img/config/settings-taxes-full.png)

Você também pode visualizar as configurações de impostos para produtos individuais:

![Tax settings for products](/img/config/settings-taxes.png)

### Imposto excluído vs. Imposto incluído

Por padrão, todos os preços dos seus produtos estão com o imposto excluído, o que significa que os impostos **não estão inclusos** no preço do produto. Se determinarmos que um cliente deve pagar impostos em uma compra específica, adicionaremos os impostos **acima** do subtotal.

Se você preferir que os impostos estejam incluídos no preço do seu produto, pode fazer isso ativando a configuração Inclusive Tax (Imposto Incluído).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Não se esqueça de **salvar** as alterações que você fez.

###

## Criando Taxas de Imposto

Depois de habilitar a Coleta de Impostos, você precisará criar taxas de imposto para locais específicos usando nosso editor de taxas de imposto.

Você pode acessar o editor clicando no botão **Gerenciar Taxas** na barra lateral da página de configurações de impostos (Tax settings).

![Link Gerenciar Taxas no painel de Tax Rates na página de configurações](/img/config/settings-taxes-manage-rates.png)

Na página do editor de taxas, você pode adicionar novas Taxas clicando no botão **Adicionar nova Linha** (Add new Row).

![Tabela do editor de taxas com o botão Adicionar nova linha no topo](/img/config/tax-rates-editor.png)

Você precisará dar um **título** a cada taxa (usado nas faturas). Em seguida, você pode escolher o **país** (obrigatório), o **estado** e a **cidade** (ambos opcionais) onde este imposto será cobrado. Por fim, adicione a **taxa do imposto em porcentagem**.

### Categorias de Imposto

Você também pode criar múltiplas Categorias de Imposto para adicionar diferentes taxas de impostos para diferentes tipos de produtos.

Clique em **Adicionar nova Categoria de Imposto** (Add new Tax Category), digite o nome da sua categoria e clique em **Criar**.

![Botão Adicionar nova Categoria de Imposto no topo do editor de taxas](/img/config/tax-categories-add.png)

![Campo de entrada Nome da Categoria de Imposto no modal de criação de categoria](/img/config/tax-categories-create-modal.png)

Para navegar pelas categorias, clique em **Alternar** (Switch) e selecione a categoria para a qual deseja adicionar novos impostos.

![Botão dropdown Alternar para mudar entre categorias de imposto](/img/config/tax-categories-switch.png)

![Dropdown seletor de categoria de imposto mostrando as categorias disponíveis](/img/config/tax-categories-select.png)

Você pode definir a categoria de imposto para um produto específico indo até a **página de edição do Produto** e depois na aba Impostos (Taxes).

![Aba Impostos do produto com o toggle Categoria de imposto e tributável](/img/config/product-taxes.png)

Na mesma tela, você pode desativar o toggle **É Tributável?** (Is Taxable?) para avisar o Ultimate Multisite que não deve cobrar impostos sobre aquele produto específico.

## Suporte a IVA Europeu

Como mencionado antes, temos um add-on disponível para clientes na UE que têm requisitos adicionais devido às regulamentações de IVA europeias.

Nossas ferramentas de IVA ajudam com algumas coisas importantes:

  * Carregamento fácil das taxas de IVA da UE;

  * Coleta e validação do Número de IVA - e reversão de débito para entidades isentas de IVA (como empresas com números de IVA válidos);

Para instalar esse add-on, vá em **Ultimate Multisite > Settings** e depois clique no link na barra lateral **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Você será redirecionado para a página de add-ons. Lá, você pode procurar pelo **Ultimate Multisite VAT add-on** e instalá-lo.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Em seguida, vá em **Network Admin > Plugins** e ative esse add-on em toda a rede.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Se você voltar para a aba **Tax Settings**, verá novas opções disponíveis. Ative a opção **Enable VAT Support** (Habilitar Suporte ao IVA) para ativar as novas ferramentas de IVA. Não se esqueça de **salvar** suas configurações!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Carregando as Taxas de IVA

Uma das ferramentas que nossa integração adiciona é a capacidade de carregar as taxas de impostos para os estados membros da UE. Isso pode ser feito visitando a página do editor de taxas após habilitar o suporte ao IVA da UE.

Na parte inferior da página, você verá as opções de busca de IVA (VAT). Selecionando um tipo de taxa e clicando no botão **Atualizar Taxas de IVA da UE** (*Update EU VAT Rates*), a tabela será aberta e preenchida automaticamente com as taxas de imposto para cada estado-membro da UE. Depois, basta salvar.

![Botão Atualizar Taxas de IVA da UE na parte inferior do editor de taxas de impostos](/img/config/tax-rates-vat-pull.png)

Você também pode editar os valores depois que eles forem puxados. Para fazer isso, basta editar a linha da tabela que você precisa e clicar para salvar os novos valores.

### Validação do IVA

Quando o suporte ao IVA estiver ativado, o Ultimate Multisite adicionará um campo extra ao formulário de checkout, abaixo do campo de endereço de cobrança. Este campo só aparecerá para clientes localizados na UE.

<!-- Screenshot unavailable: Campo de Número de IVA no formulário de checkout frontend abaixo do endereço de cobrança -->

O Ultimate Multisite então validará o Número de IVA e, se ele for retornado como válido, o mecanismo de débito reversa (*reverse charge mechanism*) será aplicado e a taxa de imposto será definida como 0% naquele pedido.
