---
title: Recebendo Pagamento
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Recebendo Pagamentos (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

O Ultimate Multisite possui um sistema de associação e faturamento integrado. Para que nosso sistema de faturamento funcione, integramos os gateways de pagamento mais comuns usados no e-commerce. Os gateways de pagamento padrão no Ultimate Multisite são _Stripe_, _PayPal_ e Pagamento Manual. Você também pode usar _WooCommerce_, _GoCardless_ e _Payfast_ para receber pagamentos instalando seus respectivos add-ons (plugins).

## Configurações Básicas

Você pode configurar qualquer um desses gateways de pagamento nas configurações de pagamento do Ultimate Multisite. Você pode encontrá isso indo em **Menu Ultimate Multisite > Configurações > Pagamentos**.

![Página de configurações de pagamentos no Ultimate Multisite mostrando o painel de Pagamentos](/img/config/payments-settings-page.png)

Antes de configurar seu gateway de pagamento, dê uma olhada nas configurações básicas de pagamento que você pode ajustar:

**Forçar renovação automática** **w:** Isso garantirá que o pagamento se repita automaticamente no final de cada ciclo de faturamento, dependendo da frequência de faturamento selecionada pelo usuário.

<!-- Screenshot unavailable: Configuração do botão Forçar Renovação Automática na página de configurações de pagamentos -->

O Ultimate Multisite v2.13.0 verifica se o gateway ativo possui uma credencial de renovação reutilizável antes de salvar uma associação recorrente com renovação automática ativada. Uma credencial de renovação pode ser uma assinatura do gateway, um acordo de faturamento, um token de cofre salvo ou um método de pagamento reutilizável equivalente. Se o gateway relatar que não existe nenhuma credencial utilizável, o Ultimate Multisite salva a associação, mas desativa a renovação automática e registra o estado de credencial ausente para que um administrador ou fluxo de suporte possa pedir ao cliente para autorizar o pagamento novamente antes da data de renovação.

Isso impede que uma assinatura apareça como renovação automática quando o gateway só aceita pagamentos únicos. Os add-ons do gateway devem confirmar se os checkouts recorrentes armazenam um credencial reutilizável, especialmente quando o gateway suporta modos de pagamento de captura única e com cobrança guardada/assinatura.

**Permitir testes sem método de pagamento** **método:** Com esta opção ativada, seu cliente não precisará adicionar nenhuma informação financeira durante o processo de registro. Isso só será necessário depois que o período de teste expirar.

<!-- Screenshot unavailable: Toggle Permitir Testes Sem Método de Pagamento na página de configurações de Pagamentos -->

**Enviar fatura após a confirmação do pagamento:** Esta opção lhe dá a escolha se deseja ou não enviar uma fatura após o pagamento. Observe que os usuários terão acesso ao histórico de pagamentos no dashboard do subsite deles. Esta opção não se aplica ao Gateway Manual.

<!-- Screenshot unavailable: Toggle Enviar Fatura na Confirmação do Pagamento na página de configurações de Pagamentos -->

**Esquema de numeração de faturas:** Aqui, você pode selecionar um código de referência de pagamento ou um esquema de número sequencial. Se optar por usar um código de referência de pagamento para suas faturas, não precisa configurar nada. Se escolher usar um esquema de número sequencial, precisará configurar o **próximo número da fatura** (Este número será usado como o número da fatura para a próxima fatura gerada no sistema. Ele é incrementado em um a cada nova fatura criada. Você pode alterá-lo e salvá-lo para redefinir o número sequencial da fatura para um valor específico) e o **prefixo do número da fatura**.

<!-- Screenshot unavailable: Menu suspenso de esquema de numeração de faturas com opções Código de Referência de Pagamento e Número Sequencial -->

<!-- Screenshot unavailable: Campos de número da próxima fatura e prefixo do número da fatura exibidos quando Número Sequencial é selecionado -->

## Onde encontrar os gateways:

Você pode configurar os gateways de pagamento na mesma página (**Ultimate Multisite > Settings > Payments**). Logo abaixo de **active payment gateways** (gateways de pagamento ativos), você poderá ver: _Stripe_, _Stripe_ Checkout, _PayPal_ e _Manual_.

![Seção Gateways de Pagamento Ativos listando Stripe, Stripe Checkout, PayPal e Manual](/img/config/payments-active-gateways.png)

Temos um artigo dedicado para cada gateway de pagamento que irá guiá-lo pelos passos de configuração, os quais você pode encontrar nos links abaixo.

Você pode visualizar e editar os detalhes do pagamento:

![Interface de edição de pagamento](/img/admin/payment-edit.png)

Aqui está uma visualização completa da página de edição de pagamento:

![Interface completa de edição de pagamento](/img/admin/payment-edit-full.png)

Aqui também está uma visualização completa das configurações dos gateways de pagamento:

![Página completa das configurações dos gateways de pagamento](/img/config/settings-payments-gateways-full.png)

**Configurando o gateway Stripe**

**Configurando o gateway PayPal**** **

**Configurando pagamentos manuais**

Agora, se você quiser usar _WooCommerce_, _GoCardless_ ou _Payfast_ como seu gateway de pagamento, precisará **instalar e configurar os seus add-ons**.

### Como instalar o add-on do WooCommerce:

Entendemos que _Stripe_ e _PayPal_ não estão disponíveis em alguns países, o que limita ou dificulta o uso eficaz do nosso plugin pelos usuários do Ultimate Multisite. Por isso, criamos um add-on para integrar o _WooCommerce_, que é um plugin de e-commerce muito popular. Desenvolvedores de todo o mundo criaram add-ons para integrar diferentes gateways de pagamento a ele. Aproveitamos isso para estender os gateways de pagamento que você pode usar com o sistema de faturamento do Ultimate Multisite.

**IMPORTANTE:** A integração do WooCommerce no Ultimate Multisite exige que o WooCommerce esteja ativado pelo menos no seu site principal.

Primeiro, acesse a página de add-ons (plugins). Você pode encontrá-la indo em **Ultimate Multisite > Settings**. Lá você verá a tabela de **Add-ons**. Clique em **Check our Add-ons** (Ver nossos Add-ons).

<!-- Screenshot unavailable: Tabela de Add-ons nas configurações do Ultimate Multisite com o link Check our Add-ons -->

Após clicar em **Check our Add-ons**, você será redirecionado para a página de add-ons. Lá você encontrará todos os add-ons do Ultimate Multisite. Clique no add-on **Ultimate Multisite: WooCommerce Integration**.

![Página de add-ons listando os add-ons do Ultimate Multisite, incluindo WooCommerce Integration](/img/addons/addons-page.png)

Uma janela aparecerá com os detalhes do add-on. Basta clicar em **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite WooCommerce Integration com o botão Install Now -->

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Lá, basta clicar em **Network Activate** (Ativar na Rede), e o add-on do WooCommerce será ativado na sua rede.

<!-- Screenshot unavailable: Página de plugins com o link Network Activate para o add-on WooCommerce Integration -->

Após a ativação, se você ainda não tiver o plugin WooCommerce instalado e ativado no seu site, receberá um lembrete.

<!-- Screenshot unavailable: Aviso do administrador lembrando o administrador de instalar e ativar o plugin WooCommerce -->

Para saber mais sobre o add-on WooCommerce Integration, **clique aqui**.

### Como instalar o add-on GoCardless:

Os passos para instalar o add-on _GoCardless_ são praticamente os mesmos do add-on _WooCommerce_. Vá até a página de add-ons e selecione o add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Página de add-ons com o add-on Ultimate Multisite GoCardless Gateway destacado -->

A janela do add-on aparecerá. Clique em **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite GoCardless Gateway com o botão Install Now -->

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Lá, basta clicar em **Network Activate** (Ativar Rede) e o add-on _GoCardless_ será ativado na sua rede.

<!-- Screenshot unavailable: Página de plugins com o link Network Activate para o add-on GoCardless Gateway -->

Para saber como começar a usar o gateway _GoCardless_, **leia este artigo**.

### Como instalar o add-on Payfast:

Vá até a página de add-ons e selecione o add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Página de add-ons com o add-on Ultimate Multisite Payfast Gateway destacado -->

A janela do add-on aparecerá. Clique em **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite Payfast Gateway com o botão Install Now -->

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Lá, basta clicar em **Network Activate** (Ativar Rede) e o add-on _Payfast_ será ativado na sua rede.

<!-- Screenshot unavailable: Página de plugins com o link Network Activate para o add-on Payfast Gateway -->
