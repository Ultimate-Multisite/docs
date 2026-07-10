---
title: Receber pagamentos
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Receber Pagamentos (v2) {#getting-paid-v2}

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Ultimate Multisite tem um sistema integrado de adesões e faturação. Para o nosso sistema de faturação funcionar, integrámos os gateways de pagamento mais comuns usados em comércio eletrónico. Os gateways de pagamento predefinidos no Ultimate Multisite são _Stripe_ , _PayPal_ e Pagamento Manual. Também pode usar _WooCommerce_ , _GoCardless_ e _Payfast_ para receber pagamentos instalando os respetivos add-ons.

## Definições Básicas {#basic-settings}

Pode configurar qualquer um destes gateways de pagamento nas definições de pagamentos do Ultimate Multisite. Pode encontrá-las indo a **menu Ultimate Multisite > Definições > Pagamentos.**

![Página de definições de pagamentos no Ultimate Multisite mostrando o painel Pagamentos](/img/config/payments-settings-page.png)

Antes de configurar o seu gateway de pagamento, veja as definições básicas de pagamento que pode configurar:

**Forçar renovação automáti** **ca:** Isto garantirá que o pagamento se repita automaticamente no fim de cada ciclo de faturação, dependendo da frequência de faturação selecionada pelo utilizador.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 verifica se o gateway ativo tem uma credencial de renovação reutilizável antes de guardar uma adesão recorrente com renovação automática ativada. Uma credencial de renovação pode ser uma subscrição do gateway, um acordo de faturação, um token de cofre guardado ou um método de pagamento reutilizável equivalente. Se o gateway comunicar que não existe nenhuma credencial utilizável, Ultimate Multisite guarda a adesão, mas desativa a renovação automática e regista o estado de credencial em falta para que um administrador ou fluxo de suporte possa pedir ao cliente para reautorizar o pagamento antes da data de renovação.

Isto evita que uma adesão pareça renovar-se automaticamente quando o gateway só consegue cobrar pagamentos únicos. Os add-ons de gateway devem confirmar que os checkouts recorrentes guardam uma credencial reutilizável, especialmente quando o gateway suporta tanto captura única como modos de pagamento em cofre/subscrição.

**Permitir testes sem méto** **do de pagamento:** Com esta opção ativada, o seu cliente não terá de adicionar quaisquer informações financeiras durante o processo de registo. Isto só será necessário quando o período de teste expirar.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Enviar fatura na confirmação do pagamento:** Isto dá-lhe a opção de enviar ou não uma fatura após o pagamento. Note que os utilizadores terão acesso ao seu histórico de pagamentos no Dashboard do seu subsítio. Esta opção não se aplica ao Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeração de faturas:** Aqui, pode selecionar um código de referência de pagamento ou um esquema de numeração sequencial. Se optar por usar um código de referência de pagamento para as suas faturas, não precisa de configurar nada. Se optar por usar um esquema de numeração sequencial, terá de configurar o **próximo número de fatura** (Este número será usado como o número de fatura para a próxima fatura gerada no sistema. É incrementado em um sempre que uma nova fatura é criada. Pode alterá-lo e guardá-lo para repor o número sequencial de faturas para um valor específico) e o **prefixo do número de fatura.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Onde encontrar os gateways: {#where-to-find-the-gateways}

Pode configurar os gateways de pagamento na mesma página ( **Ultimate Multisite > Definições > Pagamentos**). Logo abaixo de **gateways de pagamento ativos** , poderá ver: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ e _Manual_.

![Secção Gateways de Pagamento Ativos listando Stripe, Stripe Checkout, PayPal e Manual](/img/config/payments-active-gateways.png)

Temos um artigo dedicado a cada gateway de pagamento que o guiará pelos passos para o configurar, que pode encontrar nos links abaixo.

Pode ver e editar os detalhes do pagamento:

![Interface de edição de pagamento](/img/admin/payment-edit.png)

Aqui está uma vista completa da página de edição de pagamento:

![Interface completa de edição de pagamento](/img/admin/payment-edit-full.png)

Aqui está também uma vista completa das definições dos gateways de pagamento:

![Página completa de definições dos gateways de pagamento](/img/config/settings-payments-gateways-full.png)

**Configurar o gateway Stripe**

**Configurar o gateway PayPal**** **

**Configurar pagamentos manuais**

Agora, se quiser usar _WooCommerce_ , _GoCardless_ ou _Payfast_ como o seu gateway de pagamento, terá de **instalar e configurar os respetivos add-ons**.

### Como instalar o add-on WooCommerce: {#how-to-install-the-woocommerce-add-on}

Entendemos que _Stripe_ e _PayPal_ não estão disponíveis em alguns países, o que limita ou dificulta que os utilizadores do Ultimate Multisite usem eficazmente o nosso plugin. Por isso, criámos um add-on para integrar _WooCommerce,_ que é um plugin de comércio eletrónico muito popular. Programadores de todo o mundo criaram add-ons para integrar diferentes gateways de pagamento nele. Aproveitámos isto para expandir os gateways de pagamento que pode usar com o sistema de faturação do Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration requer que WooCommerce esteja ativado pelo menos no seu site principal._

Primeiro, vá à página de add-ons. Pode encontrá-la indo a **Ultimate Multisite > Definições**. Deverá ver a tabela **Add-ons**. Clique em **Ver os nossos Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Depois de clicar em **Ver os nossos Add-ons** , será redirecionado para a página de add-ons. Aqui pode encontrar todos os add-ons do Ultimate Multisite. Clique no add-on **Ultimate Multisite: WooCommerce Integration**.

![Página de add-ons listando add-ons do Ultimate Multisite, incluindo WooCommerce Integration](/img/addons/addons-page.png)

Uma janela aparecerá com os detalhes do complemento. Basta clicar em **Instalar agora**.

<!-- Captura de ecrã indisponível: caixa de diálogo de detalhes do complemento Ultimate Multisite WooCommerce Integration com o botão Instalar agora -->

Depois de a instalação estar concluída, será redirecionado para a página de plugins. Aqui, basta clicar em **Ativar na rede** e o complemento WooCommerce será ativado na sua rede.

<!-- Captura de ecrã indisponível: página de plugins com a ligação Ativar na rede para o complemento WooCommerce Integration -->

Depois de o ativar, se ainda não tiver o plugin WooCommerce instalado e ativado no seu site, receberá um lembrete.

<!-- Captura de ecrã indisponível: aviso de administração a lembrar o administrador de instalar e ativar o plugin WooCommerce -->

Para ler mais sobre o complemento WooCommerce Integration, **clique aqui**.

### Como instalar o complemento GoCardless: {#how-to-install-the-gocardless-add-on}

Os passos para instalar o complemento _GoCardless_ são praticamente os mesmos que os do complemento _WooCommerce_. Vá à página de complementos e selecione o complemento **Ultimate Multisite: GoCardless Gateway**.

<!-- Captura de ecrã indisponível: página de complementos com o complemento Ultimate Multisite GoCardless Gateway destacado -->

A janela do complemento aparecerá. Clique em **Instalar agora**.

<!-- Captura de ecrã indisponível: caixa de diálogo de detalhes do complemento Ultimate Multisite GoCardless Gateway com o botão Instalar agora -->

Depois de a instalação estar concluída, será redirecionado para a página de plugins. Aqui, basta clicar em **Ativar na rede** e o complemento _GoCardless_ será ativado na sua rede.

<!-- Captura de ecrã indisponível: página de plugins com a ligação Ativar na rede para o complemento GoCardless Gateway -->

Para saber como começar a usar o gateway _GoCardless_, **leia este artigo**.

### Como instalar o complemento Payfast: {#how-to-install-the-payfast-add-on}

Vá à página de complementos e selecione o complemento **Ultimate Multisite: Payfast Gateway**.

<!-- Captura de ecrã indisponível: página de complementos com o complemento Ultimate Multisite Payfast Gateway destacado -->

A janela do complemento aparecerá. Clique em **Instalar agora.**

<!-- Captura de ecrã indisponível: caixa de diálogo de detalhes do complemento Ultimate Multisite Payfast Gateway com o botão Instalar agora -->

Depois de a instalação estar concluída, será redirecionado para a página de plugins. Aqui, basta clicar em **Ativar na rede** e o complemento _Payfast_ será ativado na sua rede.

<!-- Captura de ecrã indisponível: página de plugins com a ligação Ativar na rede para o complemento Payfast Gateway -->
