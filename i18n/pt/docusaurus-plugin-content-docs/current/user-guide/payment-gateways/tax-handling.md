---
title: Tratamento de impostos
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Tratamento de impostos

Ultimate Multisite tem um módulo de cobrança de impostos integrado no nosso plugin principal, por isso, se precisar de cobrar impostos sobre vendas nos seus planos, pacotes e serviços, pode fazê-lo facilmente sem recorrer à instalação de quaisquer complementos.

Para empresas localizadas na Europa, oferecemos um **complemento** que adiciona ferramentas e funcionalidades para melhor **apoiar a conformidade com o IVA**.

Ultimate Multisite não declara nem entrega impostos em seu nome ao governo; simplesmente ajudamo-lo a cobrar os impostos apropriados no momento da transação. **Ainda terá de entregar os impostos por conta própria.**

## Ativar a cobrança de impostos {#enabling-tax-collection}

A cobrança de impostos não está ativada por predefinição. Para a ativar, precisa de ir a **Ultimate Multisite > Definições > Impostos** e alternar para ativar a definição Ativar impostos.

![Alternância Ativar impostos no topo da página de definições de impostos](/img/config/settings-taxes-enable.png)

Aqui está uma vista completa da página de definições de impostos:

![Página completa de definições de impostos](/img/config/settings-taxes-full.png)

Também pode ver as definições de impostos para produtos individuais:

![Definições de impostos para produtos](/img/config/settings-taxes.png)

### Imposto excluído vs. imposto incluído {#tax-excluded-vs-tax-included}

Por predefinição, todos os preços dos seus produtos têm imposto excluído, o que significa que os impostos **não estão incluídos** no preço do produto. Se determinarmos que um cliente deve pagar impostos numa determinada compra, adicionaremos os impostos **por cima** do subtotal.

Se preferir ter os impostos incluídos no preço do seu produto, pode fazê-lo ativando a definição **Imposto inclusivo**.

![Linha da alternância Imposto inclusivo abaixo da definição Ativar impostos](/img/config/settings-taxes-inclusive.png)

Não se esqueça de **guardar** as alterações que fez.

###

## Criar taxas de imposto {#creating-tax-rates}

Depois de ativar a cobrança de impostos, terá de criar taxas de imposto para localizações específicas usando o nosso editor de taxas de imposto.

Pode aceder ao editor clicando no botão **Gerir taxas de imposto** na barra lateral da página de definições de impostos.

![Ligação Gerir taxas de imposto no painel Taxas de imposto na página de definições](/img/config/settings-taxes-manage-rates.png)

Na página do editor de taxas de imposto, pode adicionar novas taxas de imposto clicando no botão **Adicionar nova linha**.

![Tabela do editor de taxas de imposto com o botão Adicionar nova linha no topo](/img/config/tax-rates-editor.png)

Terá de atribuir a cada taxa de imposto um **título** (usado em faturas). Depois pode escolher o **país** (obrigatório), o **estado,** e a **cidade** (ambos opcionais) onde este imposto será cobrado. Por fim, adicione a **taxa de imposto em percentagem**.

### Categorias de impostos {#tax-categories}

Também pode criar várias categorias de impostos, para adicionar taxas de imposto diferentes para diferentes tipos de produtos.

Clique em **Adicionar nova categoria de imposto** , depois escreva o nome da sua categoria e prima **Criar**.

![Botão Adicionar nova categoria de imposto no topo do editor de taxas de imposto](/img/config/tax-categories-add.png)

![Campo de entrada Nome da categoria de imposto no modal de criação de categoria](/img/config/tax-categories-create-modal.png)

Para navegar pelas categorias, clique em **Alternar** e selecione a categoria à qual pretende adicionar novos impostos.

![Botão de menu suspenso Alternar para mudar entre categorias de impostos](/img/config/tax-categories-switch.png)

![Menu suspenso do seletor de categorias de impostos mostrando as categorias disponíveis](/img/config/tax-categories-select.png)

Pode definir a categoria de imposto para um produto específico indo à **página de edição do produto** e depois ao separador Impostos.

![Separador de impostos do produto com categoria de imposto e alternância tributável](/img/config/product-taxes.png)

Nesse mesmo ecrã, pode desativar a alternância **É tributável?** para informar Ultimate Multisite de que não deve cobrar impostos nesse produto específico.

## Suporte para IVA europeu {#european-vat-support}

Como mencionado antes, temos um complemento disponível para clientes na UE que têm requisitos adicionais devido aos regulamentos europeus de IVA.

As nossas ferramentas de IVA ajudam com algumas coisas importantes:

  * Carregamento fácil das taxas de IVA da UE;

  * Recolha e validação do número de IVA - e autoliquidação para entidades isentas de IVA (como empresas com números de IVA válidos);

Para instalar esse complemento, vá a **Ultimate Multisite > Definições** e depois clique na ligação da barra lateral **Ver os nossos complementos**.

![Barra lateral da página de definições com a ligação Ver os nossos complementos](/img/config/settings-taxes-addons-link.png)

Será redirecionado para a nossa página de complementos. Aí, pode procurar o **complemento de IVA Ultimate Multisite** e instalá-lo.

<!-- Captura de ecrã indisponível: bloco do complemento de IVA na página de complementos -->

<!-- Captura de ecrã indisponível: diálogo Instalar agora do complemento de IVA -->

Depois, vá a **Administração da rede > Extensões** e ative esse complemento em toda a rede.

<!-- Captura de ecrã indisponível: ação Ativar na rede para o complemento de IVA na página de Extensões -->

Se voltar ao **separador Definições de impostos** , verá novas opções disponíveis. Ative a opção **Ativar suporte para IVA** para ativar as novas ferramentas de IVA. Não se esqueça de **guardar** as suas definições!

<!-- Captura de ecrã indisponível: alternância Ativar suporte para IVA nas definições de impostos após a ativação do complemento -->

### Obter taxas de imposto de IVA {#pulling-on-vat-tax-rates}

Uma das ferramentas que a nossa integração adiciona é a capacidade de carregar as taxas de imposto para os Estados-Membros da UE. Isso pode ser feito visitando a página do editor de taxas de imposto depois de ativar o suporte para IVA da UE.

No fundo da página, verá as opções de obtenção de IVA. Selecionar um tipo de taxa e clicar no botão **Atualizar taxas de IVA da UE** irá obter e preencher automaticamente a tabela com as taxas de imposto de cada Estado-Membro da UE. Depois, só precisa de guardar.

![Botão Atualizar taxas de IVA da UE no fundo do editor de taxas de imposto](/img/config/tax-rates-vat-pull.png)

Também pode editar os valores depois de os obter. Para o fazer, basta editar a linha da tabela de que precisa e clicar para guardar os novos valores.

### Validação de IVA {#vat-validation}

Quando o suporte para IVA está ativado, Ultimate Multisite adicionará um campo adicional ao formulário de finalização da compra, abaixo do campo do endereço de faturação. O campo só aparecerá para clientes localizados na UE.

<!-- Captura de ecrã indisponível: campo Número de IVA no formulário de finalização da compra no frontend abaixo do endereço de faturação -->

Ultimate Multisite irá então validar o Número de IVA e, se ele for considerado válido, o mecanismo de autoliquidação será aplicado e a taxa de imposto será definida como 0% nesse pedido.
