---
title: Tratamento de impostos
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Tratamento de impostos

Ultimate Multisite tem um módulo de coleta de impostos integrado ao nosso plugin principal, então, se você precisa coletar impostos sobre vendas em seus planos, pacotes e serviços, pode fazer isso facilmente sem recorrer à instalação de quaisquer complementos.

Para empresas localizadas na Europa, oferecemos um **complemento** que adiciona ferramentas e recursos para melhor **dar suporte à conformidade com VAT**.

Ultimate Multisite não declara nem repassa impostos ao governo em seu nome; nós simplesmente ajudamos você a coletar os impostos apropriados no momento da transação. **Você ainda precisará repassar os impostos por conta própria.**

## Habilitando a coleta de impostos

A coleta de impostos não é habilitada por padrão. Para habilitá-la, você precisa ir para **Ultimate Multisite > Configurações > Impostos** e alternar para habilitar a configuração Habilitar impostos.

![Alternância Habilitar impostos no topo da página de configurações de impostos](/img/config/settings-taxes-enable.png)

Aqui está uma visualização completa da página de configurações de impostos:

![Página completa de configurações de impostos](/img/config/settings-taxes-full.png)

Você também pode visualizar as configurações de impostos para produtos individuais:

![Configurações de impostos para produtos](/img/config/settings-taxes.png)

### Imposto excluído vs. imposto incluído

Por padrão, todos os preços dos seus produtos são sem imposto, o que significa que os impostos **não estão incluídos** no preço do produto. Se determinarmos que um cliente deve pagar impostos em uma determinada compra, adicionaremos os impostos **sobre** o subtotal.

Se você preferir ter os impostos incluídos no preço do seu produto, pode fazer isso habilitando a configuração **Imposto inclusivo**.

![Linha da alternância Imposto inclusivo abaixo da configuração Habilitar impostos](/img/config/settings-taxes-inclusive.png)

Não se esqueça de **salvar** as alterações que você fez.

###

## Criando alíquotas de imposto

Depois de habilitar a coleta de impostos, você precisará criar alíquotas de imposto para locais específicos usando nosso editor de alíquotas de imposto.

Você pode acessar o editor clicando no botão **Gerenciar alíquotas de imposto** na barra lateral da página de configurações de impostos.

![Link Gerenciar alíquotas de imposto no painel Alíquotas de imposto na página de configurações](/img/config/settings-taxes-manage-rates.png)

Na página do editor de alíquotas de imposto, você pode adicionar novas alíquotas clicando no botão **Adicionar nova linha**.

![Tabela do editor de alíquotas de imposto com o botão Adicionar nova linha no topo](/img/config/tax-rates-editor.png)

Você precisará dar a cada alíquota de imposto um **título** (usado em faturas). Depois, você pode escolher o **país** (obrigatório), o **estado,** e a **cidade** (ambos opcionais) onde esse imposto será cobrado. Por fim, adicione a **alíquota de imposto em porcentagem**.

### Categorias de imposto

Você também pode criar várias categorias de imposto, para adicionar alíquotas diferentes para diferentes tipos de produtos.

Clique em **Adicionar nova categoria de imposto** , então escreva o nome da sua categoria e pressione **Criar**.

![Botão Adicionar nova categoria de imposto no topo do editor de alíquotas de imposto](/img/config/tax-categories-add.png)

![Campo de entrada Nome da categoria de imposto no modal de criação de categoria](/img/config/tax-categories-create-modal.png)

Para navegar pelas categorias, clique em **Alternar** e selecione a categoria à qual você deseja adicionar novos impostos.

![Botão suspenso Alternar para mudar entre categorias de imposto](/img/config/tax-categories-switch.png)

![Menu suspenso seletor de categoria de imposto mostrando categorias disponíveis](/img/config/tax-categories-select.png)

Você pode definir a categoria de imposto para um produto específico indo para a **página de edição do produto** e depois para a aba Impostos.

![Aba de impostos do produto com categoria de imposto e alternância tributável](/img/config/product-taxes.png)

Nessa mesma tela, você pode desativar a alternância **É tributável?** para informar ao Ultimate Multisite que ele não deve coletar impostos sobre esse produto específico.

## Suporte a VAT europeu

Como mencionado antes, temos um complemento disponível para clientes na UE que têm requisitos adicionais devido às regulamentações europeias de VAT.

Nossas ferramentas de VAT ajudam com algumas coisas importantes:

  * Carregamento fácil de alíquotas de VAT da UE;

  * Coleta e validação de número de VAT - e cobrança reversa para entidades isentas de VAT (como empresas com números de VAT válidos);

Para instalar esse complemento, vá para **Ultimate Multisite > Configurações** e então clique no link da barra lateral **Confira nossos complementos**.

![Barra lateral da página de configurações com link Confira nossos complementos](/img/config/settings-taxes-addons-link.png)

Você será redirecionado para nossa página de complementos. Lá, você pode procurar o **complemento Ultimate Multisite VAT** e instalá-lo.

<!-- Captura de tela indisponível: cartão do complemento VAT na página de complementos -->

<!-- Captura de tela indisponível: diálogo Instalar agora do complemento VAT -->

Depois, vá para **Administração da rede > Plugins** e ative esse complemento em toda a rede.

<!-- Captura de tela indisponível: ação Ativar na rede para o complemento VAT na página Plugins -->

Se você voltar para a **aba Configurações de impostos** , verá novas opções disponíveis. Ative a opção **Habilitar suporte a VAT** para habilitar as novas ferramentas de VAT. Não se esqueça de **salvar** suas configurações!

<!-- Captura de tela indisponível: alternância Habilitar suporte a VAT nas configurações de impostos após a ativação do complemento -->

### Importando alíquotas de imposto de VAT

Uma das ferramentas que nossa integração adiciona é a capacidade de carregar as alíquotas de imposto para estados-membros da UE. Isso pode ser feito visitando a página do editor de alíquotas de imposto depois de habilitar o suporte a VAT da UE.

Na parte inferior da página, você verá as opções de importação de VAT. Selecionar um tipo de alíquota e clicar no botão **Atualizar alíquotas de VAT da UE** irá buscar e preencher automaticamente a tabela com as alíquotas de imposto para cada estado-membro da UE. Depois, você só precisa salvá-la.

![Botão Atualizar alíquotas de VAT da UE na parte inferior do editor de alíquotas de imposto](/img/config/tax-rates-vat-pull.png)

Você também pode editar os valores depois de importá-los. Para fazer isso, simplesmente edite a linha da tabela de que precisa e clique para salvar os novos valores.

### Validação de VAT

Quando o suporte a VAT estiver habilitado, Ultimate Multisite adicionará um campo adicional ao formulário de checkout, abaixo do campo de endereço de cobrança. O campo só aparecerá para clientes localizados na UE.

<!-- Captura de tela indisponível: campo Número de VAT no formulário de checkout do frontend abaixo do endereço de cobrança -->

Ultimate Multisite então validará o número de VAT e, se ele retornar como válido, o mecanismo de cobrança reversa será aplicado e a alíquota de imposto será definida como 0% nesse pedido.
