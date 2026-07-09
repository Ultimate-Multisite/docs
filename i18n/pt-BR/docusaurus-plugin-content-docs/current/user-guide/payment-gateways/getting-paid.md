---
title: Recebendo pagamentos
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Como receber pagamentos (v2) {#getting-paid-v2}

_**OBSERVAÇÃO IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Ultimate Multisite tem um sistema integrado de membership e cobrança. Para que nosso sistema de cobrança funcione, integramos os gateways de pagamento mais comuns usados em e-commerce. Os gateways de pagamento padrão no Ultimate Multisite são _Stripe_ , _PayPal_ e Pagamento manual. Você também pode usar _WooCommerce_ , _GoCardless_ e _Payfast_ para receber pagamentos instalando seus respectivos add-ons.

## Configurações básicas {#basic-settings}

Você pode configurar qualquer um desses gateways de pagamento nas configurações de pagamento do Ultimate Multisite. Você pode encontrá-las acessando **menu Ultimate Multisite > Settings > Payments.**

![Página de configurações de pagamentos no Ultimate Multisite mostrando o painel de Pagamentos](/img/config/payments-settings-page.png)

Antes de configurar seu gateway de pagamento, veja as configurações básicas de pagamento que você pode configurar:

**Forçar renovação auto** **mática:** Isso garantirá que o pagamento será recorrente automaticamente ao final de cada ciclo de cobrança, dependendo da frequência de cobrança selecionada pelo usuário.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

O Ultimate Multisite v2.13.0 verifica se o gateway ativo tem uma credencial de renovação reutilizável antes de salvar uma membership recorrente com renovação automática ativada. Uma credencial de renovação pode ser uma assinatura do gateway, acordo de cobrança, token de cofre salvo ou método de pagamento reutilizável equivalente. Se o gateway informar que não existe nenhuma credencial utilizável, o Ultimate Multisite salva a membership, mas desativa a renovação automática e registra o estado de credencial ausente para que um administrador ou fluxo de suporte possa pedir ao cliente para reautorizar o pagamento antes da data de renovação.

Isso impede que uma membership pareça ser renovada automaticamente quando o gateway só consegue cobrar pagamentos únicos. Add-ons de gateway devem confirmar que checkouts recorrentes armazenam uma credencial reutilizável, especialmente quando o gateway oferece suporte tanto à captura única quanto a modos de pagamento em cofre/assinatura.

**Permitir testes sem método** **de pagamento:** Com esta opção ativada, seu cliente não precisará adicionar nenhuma informação financeira durante o processo de cadastro. Isso só será necessário quando o período de teste expirar.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Enviar fatura na confirmação do pagamento:** Isso dá a você a opção de enviar ou não uma fatura após o pagamento. Observe que os usuários terão acesso ao histórico de pagamentos no dashboard do subsite deles. Esta opção não se aplica ao Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeração de faturas:** Aqui, você pode selecionar um código de referência de pagamento ou um esquema de número sequencial. Se você optar por usar um código de referência de pagamento para suas faturas, não precisa configurar nada. Se optar por usar um esquema de número sequencial, você precisará configurar o **próximo número de fatura** (este número será usado como o número da fatura para a próxima fatura gerada no sistema. Ele é incrementado em um toda vez que uma nova fatura é criada. Você pode alterá-lo e salvá-lo para redefinir o número sequencial de faturas para um valor específico) e o **prefixo do número da fatura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Onde encontrar os gateways: {#where-to-find-the-gateways}

Você pode configurar os gateways de pagamento na mesma página ( **Ultimate Multisite > Settings > Payments**). Logo abaixo de **gateways de pagamento ativos** , você poderá ver: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ e _Manual_.

![Seção de Gateways de Pagamento Ativos listando Stripe, Stripe Checkout, PayPal e Manual](/img/config/payments-active-gateways.png)

Temos um artigo dedicado para cada gateway de pagamento que guiará você pelas etapas de configuração, que você pode encontrar nos links abaixo.

Você pode visualizar e editar detalhes de pagamento:

![Interface de edição de pagamento](/img/admin/payment-edit.png)

Aqui está uma visão completa da página de edição de pagamento:

![Interface completa de edição de pagamento](/img/admin/payment-edit-full.png)

Aqui também está uma visão completa das configurações dos gateways de pagamento:

![Página completa de configurações dos gateways de pagamento](/img/config/settings-payments-gateways-full.png)

**Configurando o gateway Stripe**

**Configurando o gateway PayPal**** **

**Configurando pagamentos manuais**

Agora, se você quiser usar _WooCommerce_ , _GoCardless_ ou _Payfast_ como seu gateway de pagamento, precisará **instalar e configurar seus add-ons**.

### Como instalar o add-on WooCommerce: {#how-to-install-the-woocommerce-add-on}

Entendemos que _Stripe_ e _PayPal_ não estão disponíveis em alguns países, o que limita ou impede que usuários do Ultimate Multisite usem nosso plugin de forma eficaz. Então criamos um add-on para integrar _WooCommerce,_ que é um plugin de e-commerce muito popular. Desenvolvedores ao redor do mundo criaram add-ons para integrar diferentes gateways de pagamento a ele. Aproveitamos isso para ampliar os gateways de pagamento que você pode usar com o sistema de cobrança do Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration exige que WooCommerce esteja ativado pelo menos no seu site principal._

Primeiro, acesse a página de add-ons. Você pode encontrá-la acessando **Ultimate Multisite > Settings**. Você deve ver a tabela **Add-ons**. Clique em **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Depois de clicar em **Check our Add-ons** , você será redirecionado para a página de add-ons. Aqui você pode encontrar todos os add-ons do Ultimate Multisite. Clique no add-on **Ultimate Multisite: WooCommerce Integration**.

![Página de add-ons listando add-ons do Ultimate Multisite, incluindo WooCommerce Integration](/img/addons/addons-page.png)

Uma janela aparecerá com os detalhes do add-on. Basta clicar em **Install Now**.

<!-- Captura de tela indisponível: caixa de diálogo de detalhes do add-on Ultimate Multisite WooCommerce Integration com botão Install Now -->

Após a instalação ser concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on WooCommerce será ativado na sua rede.

<!-- Captura de tela indisponível: página de plugins com o link Network Activate para o add-on WooCommerce Integration -->

Após ativá-lo, se você ainda não tiver o plugin WooCommerce instalado e ativado no seu site, receberá um lembrete.

<!-- Captura de tela indisponível: aviso de administrador lembrando o administrador de instalar e ativar o plugin WooCommerce -->

Para ler mais sobre o add-on WooCommerce Integration, **clique aqui**.

### Como instalar o add-on GoCardless: {#how-to-install-the-gocardless-add-on}

As etapas para instalar o add-on _GoCardless_ são praticamente as mesmas do add-on _WooCommerce_. Acesse a página de add-ons e selecione o add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura de tela indisponível: página de add-ons com o add-on Ultimate Multisite GoCardless Gateway destacado -->

A janela do add-on aparecerá. Clique em **Install Now**.

<!-- Captura de tela indisponível: caixa de diálogo de detalhes do add-on Ultimate Multisite GoCardless Gateway com botão Install Now -->

Após a instalação ser concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on _GoCardless_ será ativado na sua rede.

<!-- Captura de tela indisponível: página de plugins com o link Network Activate para o add-on GoCardless Gateway -->

Para saber como começar a usar o gateway _GoCardless_, **leia este artigo**.

### Como instalar o add-on Payfast: {#how-to-install-the-payfast-add-on}

Acesse a página de add-ons e selecione o add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Captura de tela indisponível: página de add-ons com o add-on Ultimate Multisite Payfast Gateway destacado -->

A janela do add-on aparecerá. Clique em **Install Now.**

<!-- Captura de tela indisponível: caixa de diálogo de detalhes do add-on Ultimate Multisite Payfast Gateway com botão Install Now -->

Após a instalação ser concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on _Payfast_ será ativado na sua rede.

<!-- Captura de tela indisponível: página de plugins com o link Network Activate para o add-on Payfast Gateway -->
