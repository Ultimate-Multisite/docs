---
title: Recebendo Pagamento
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Recebendo Pagamentos (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

O Ultimate Multisite possui um sistema de assinatura e faturamento integrado. Para que nosso sistema de faturamento funcione, integramos os gateways de pagamento mais comuns usados no comércio eletrônico. Os gateways de pagamento padrão no Ultimate Multisite são _Stripe_, _PayPal_ e Pagamento Manual. Você também pode usar _WooCommerce_, _GoCardless_ e _Payfast_ para receber pagamentos instalando seus respectivos add-ons.

## Configurações Básicas

Você pode configurar qualquer um desses gateways de pagamento nas configurações de pagamento do Ultimate Multisite. Você pode encontrá-las navegando até **Ultimate Multisite menu > Settings > Payments.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

Antes de configurar seu gateway de pagamento, dê uma olhada nas configurações básicas de pagamento que você pode configurar:

**Force auto-rene** **w:** Isso garantirá que o pagamento seja renovado automaticamente no final de cada ciclo de faturamento, dependendo da frequência de faturamento selecionada pelo usuário.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Allow trials without payment** **method:** Com esta opção habilitada, seu cliente não precisará adicionar nenhuma informação financeira durante o processo de registro. Isso só será necessário quando o período de teste expirar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Send invoice on payment confirmation:** Enviar fatura na confirmação de pagamento: Isso lhe dá a opção de enviar ou não uma fatura após o pagamento. Observe que os usuários terão acesso ao histórico de pagamentos em seu painel de subsitio. Esta opção não se aplica ao Gateway Manual.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Invoice numbering scheme:** Aqui, você pode selecionar um código de referência de pagamento ou um esquema de número sequencial. Se você escolher usar um código de referência de pagamento para suas faturas, não precisará configurar nada. Se escolher usar um esquema de número sequencial, precisará configurar o **próximo número de fatura** (Este número será usado como o número da fatura para a próxima fatura gerada no sistema. Ele é incrementado em um a cada nova fatura criada. Você pode alterá-lo e salvá-lo para redefinir o número sequencial da fatura para um valor específico) e o **prefixo do número da fatura.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## Onde encontrar os gateways:

Você pode configurar os gateways de pagamento na mesma página ( **Ultimate Multisite > Settings > Payments**). Logo abaixo de **active payment gateways**, você poderá ver: _Stripe_, _Stripe Checkout_, _PayPal_ e _Manual_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

Temos um artigo dedicado para cada gateway de pagamento que irá guiá-lo pelos passos de configuração, que você pode encontrar nos links abaixo.

**Setting up the Stripe gateway**

**Setting up the PayPal gateway**** **

**Setting up manual payments**

Agora, se você quiser usar _WooCommerce_, _GoCardless_ ou _Payfast_ como seu gateway de pagamento, precisará **instalar e configurar seus add-ons**.

### Como instalar o add-on WooCommerce:

Entendemos que _Stripe_ e _PayPal_ não estão disponíveis em alguns países, o que limita ou impede os usuários do Ultimate Multisite de usar efetivamente nosso plugin. Por isso, criamos um add-on para integrar _WooCommerce_, que é um plugin de comércio eletrônico muito popular. Desenvolvedores ao redor do mundo criaram add-ons para integrar diferentes gateways de pagamento a ele. Aproveitamos isso para ampliar os gateways de pagamento que você pode usar com o sistema de faturamento do Ultimate Multisite.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce Integration requer que o WooCommerce esteja ativado pelo menos no seu site principal._

Primeiro, vá para a página de add-ons. Você pode encontrá-la navegando até **Ultimate Multisite > Settings**. Você deve ver a tabela **Add-ons**. Clique em **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

Depois de clicar em **Check our Add-ons**, você será redirecionado para a página de add-ons. Aqui você pode encontrar todos os add-ons do Ultimate Multisite. Clique no add-on **Ultimate Multisite: WooCommerce Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Uma janela aparecerá com os detalhes do add-on. Basta clicar em **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on WooCommerce será ativado em sua rede.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

Após ativá-lo, se você ainda não tiver o plugin WooCommerce instalado e ativado em seu site, receberá um lembrete.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

Para saber mais sobre o add-on WooCommerce Integration, **clique aqui**.

### Como instalar o add-on GoCardless:

Os passos para instalar o add-on _GoCardless_ são praticamente os mesmos do add-on _WooCommerce_. Por favor, vá para a página de add-ons e selecione o add-on **Ultimate Multisite: GoCardless Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

A janela do add-on aparecerá. Clique em **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on _GoCardless_ será ativado em sua rede.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

Para aprender como começar com o gateway _GoCardless_, **leia este artigo**.

### Como instalar o add-on Payfast:

Vá para a página de add-ons e selecione o add-on **Ultimate Multisite: Payfast Gateway**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

A janela do add-on aparecerá. Clique em **Install Now.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

Depois que a instalação for concluída, você será redirecionado para a página de plugins. Aqui, basta clicar em **Network Activate** e o add-on _Payfast_ será ativado em sua rede.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
