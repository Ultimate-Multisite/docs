---
title: Obtención de pagos
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Como Cobrar (v2)

_**NOTA IMPORTANTE: Este artigo refere a Ultimate Multisite versão 2.x.**_

O Ultimate Multisite tem un sistema embutido de adesão e faturação. Para que o nosso sistema de fatura funcione, integramos os portais de pagamento mais comuns usados no comércio eletrónico. Os portais de pagamento padrão no Ultimate Multisite são _Stripe_, _PayPal_ e Pagamento Manual. Também podes usar _WooCommerce_, _GoCardless_ e _Payfast_ para receber pagamentos instalando os seus respectivos add-ons.

## Configurações Básicas

Podes configurar qualquer um destes portais de pagamento nas configurações de pagamento do Ultimate Multisite. Podes encontrá-los indo a **Menu Ultimate Multisite > Settings > Payments.**

![Página de configurações de pagamento no Ultimate Multisite mostrando o painel de Pagamentos](/img/config/payments-settings-page.png)

Antes de configurares o teu portal de pagamento, dá uma vista de olhos às configurações básicas de pagamento que podes configurar:

**Force auto-rene** **w:** Isto vai garantir que o pagamento se renova automaticamente no final de cada ciclo de faturação, dependendo da frequência de faturação que o utilizador selecionou.

<!-- Screenshot unavailable: Configuração do interruptor Force Auto-Renew na página de configurações de pagamentos -->

O Ultimate Multisite v2.13.0 verifica se o portal ativo tem uma credencial de renovação reutilizável antes de guardar uma adesão recorrente com auto-renovação ativada. Uma credencial de renovação pode ser uma subscrição do portal, um acordo de faturação, um token de cofre guardado ou um método de pagamento reutilizável equivalente. Se o portal indicar que não existe uma credencial utilizável, o Ultimate Multisite guarda a adesão mas desativa a auto-renovação e regista o estado de credencial ausente para que um administrador ou fluxo de suporte possa pedir ao cliente que autorize novamente o pagamento antes da data de renovação.

Isto impede que unha mensura se renove automáticamente se o *gateway* só pode recoñecer pagamentos únicos. Os add-ons do *gateway* deben confirmar que os chequecos de cobro recurrente almacenan un credencial reutilizable, especialmente cuando o *gateway* suporta tanto modos de captura única como métodos de pagamento en *vault* (almacenados)/suscripción.

**Permitir pruebas sen método de pago:** Con esta opción activada, o seu cliente non terá que introducir ninguna información financeira durante o proceso de registo. Isto só será necesario unha vez que expire o período de prueba.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Enviar factura na confirmación do pago:** Esta opción dáche a opción de enviar unha factura ou non despois do pagamento. Ten en cuenta que os usuarios terán acceso ao seu historial de pagamentos no *dashboard* do seu subsite. Esta opción non se aplica ao *Manual Gateway*.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Esquema de numeración de facturas:** Aquí, podes seleccionar unha referencia de pago ou un esquema de números sequenciais. Se escolles usar unha referencia de pago para as vuestras facturas, non hai que configurar nada. Se escolles usar un esquema de números sequenciais, terás que configurar o **próximo número de factura** (Este número se utilizará como o número da factura para a próxima factura que se cree no sistema. Se incrementa en un cada vez que se crea unha nova factura. Podrás cambiálo e guardalo para reiniciar o esquema de numeración sequencial da factura a un valor específico) e o **prefijo do número de factura**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Onde encontrar os gateways:

Podes configurar os gateways de pagamento na mesma páxina (**Ultimate Multisite > Settings > Payments**). Logo abaixo de **active payment gateways**, podes ver: _Stripe_, _Stripe_ Checkout, _PayPal_ e _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Temos un artigo dedicado para cada gateway de pagamento que te guiará pelos pasos para o configurar, que podes encontrar nos enlaces abaixo.

Podes ver e editar os detalhes do pagamento:

![Payment edit interface](/img/admin/payment-edit.png)

Aqui tens uma vista completa da páxina de edição de pagamento:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Aquí tes también unha vista completa das configuración dos gateways de pagamento:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Configurar o gateway Stripe**

**Configurar o gateway PayPal**** **

**Configurar pagamentos manuais**

Agora, se queres usar _WooCommerce_, _GoCardless_ ou _Payfast_ como o teu gateway de pagamento, terás que **instalar e configurar os seus add-ons**.

### Como instalar o add-on WooCommerce:

Entendemos que _Stripe_ e _PayPal_ non están disponíveis en todos os países, o que limita ou dificulta o uso do nuestro plugin para os usuarios de Ultimate Multisite. Por tanto, creamos un add-on para integrar _WooCommerce_, que é un plugin de comercio electrónico moi popular. Os desarrolladores de todo o mundo crearon add-ons para integrarse con diferentes gateways de pagamento e nós aprovexemos isto para expandir os gateways de pagamento que podes usar co sistema de facturación Ultimate Multisite.

_**IMPORTANTE:** A integración do WooCommerce no Ultimate Multisite requiere que o WooCommerce este activado ao menos no seu sitio principal._

Primeiro, diríxase á páxina de add-ons. Pode encontralo indo a **Ultimate Multisite > Settings**. Deverá ver a tábula **Add-ons**. Clicade en **Check our Add-ons** (Verificar os nos nos).

<!-- Screenshot unavailable: Tabela de add-ons nas configurações do Ultimate Multisite com o enlace Check our Add-ons -->

Após clicar en **Check our Add-ons**, será redireixado á páxina de add-ons. Aquí poderá encontrar todos os add-ons do Ultimate Multisite. Clicade no add-on **Ultimate Multisite: WooCommerce Integration**.

![Páxina de add-ons listando os add-ons do Ultimate Multisite, incluíndo a Integración WooCommerce](/img/addons/addons-page.png)

Abrirá unha ventán con os detalles do add-on. Basta clicar en **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite WooCommerce Integration con o botón Install Now -->

Após a instalación, será redireixado á páxina de plugins. Aquí, basta clicar en **Network Activate** (Activar Rede) e o add-on WooCommerce será activado na súa rede.

<!-- Screenshot unavailable: Páxina de plugins con o enlace Network Activate para o add-on WooCommerce Integration -->

Após activalo, se todavía non ten o plugin WooCommerce instalado e activado no seu sitio web, recibirá un recordatorio.

<!-- Screenshot unavailable: Aviso administrativo que recuerda ao administrador instalar e activar o plugin WooCommerce -->

Para saber máis sobre o add-on de Integración WooCommerce, **clique aquí**.

### Como instalar o add-on GoCardless:

Os pasos para instalar o add-on _GoCardless_ son praticamente os mesmos que para o add-on _WooCommerce_. Vada para a página de add-ons e selecione o add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Página de add-ons com o add-on Ultimate Multisite GoCardless Gateway destacado -->

A janela do add-on abrirá. Clique en **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite GoCardless Gateway com o botão Install Now -->

Depois da instalação, será redirecionado para a página de plugins. Lá, basta clicar em **Network Activate** (Ativar Rede), e o add-on _GoCardless_ ficará ativo na súa rede.

<!-- Screenshot unavailable: Página de plugins com o link Network Activate para o GoCardless Gateway add-on -->

Para saber como empezar con o gateway _GoCardless_, **lea este artigo**.

### Como instalar o add-on Payfast:

Vada para a página de add-ons e selecione o add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Página de add-ons com o add-on Ultimate Multisite Payfast Gateway destacado -->

A janela do add-on abrirá. Clique en **Install Now** (Instalar Agora).

<!-- Screenshot unavailable: Diálogo de detalhes do add-on Ultimate Multisite Payfast Gateway com o botão Install Now -->

Depois da instalación, será redireccionado para a página de plugins. Lá, basta clicar en **Network Activate** (Ativar Rede), e o add-on _Payfast_ ficará ativo na súa rede.

<!-- Screenshot unavailable: Página de plugins com o link Network Activate para o Payfast Gateway add-on -->
