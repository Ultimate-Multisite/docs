---
title: Configuración de pagos manuales
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Configurar Pagamentos Manuais (v2)

_**NOTA IMPORTANTE: Este artigo refere a Ultimate Multisite versão 2.x.**_

Os pagamentos manuais são uma forma de oferecer outros métodos de pagamento se o **Stripe** ou **PayPal** não estiverem disponíveis para os seus utilizadores. Pode ser uma transferência bancária, uma transferência por wire (wire transfer) ou qualquer outro método de pagamento disponível localmente para os seus utilizadores.

## Como ativar os Pagamentos Manuais

Configurar pagamentos manuais é muito fácil. Basta ativá-los em *payment gateways* e colocar instruções detalhadas sobre como o utilizador deve fazer o pagamento.

Primeiro, vá a **Ultimate Multisite > Settings > Payments**. Abaixo de **Payment Gateways**, ative **Manual**. Verá que aparecerá uma caixa de **Payment Instructions** (Instruções de Pagamento) para si.

Adicione à esta caixa as informações que o seu cliente precisará para fazer o pagamento. Pode ser os detalhes da sua conta bancária e o seu email, por exemplo, para que o cliente possa enviar-lhe a confirmação do pagamento.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Aqui está a interface de configuração dos pagamentos manuais:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Depois de configurado, basta clicar em **Save Settings** (Guardar Configurações) e está feito. Quando os utilizadores se registarem na sua rede, verão uma mensagem a dizer que receberão as suas instruções para concluir a compra.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

E eles também receberão uma mensagem na sua página de **Thank You** (Obrigado) com as suas instruções de pagamento.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmar pagamentos manuais

Para confirmar un pago manual, ve ao menú **Payments** na barra esquerda. Aí podes ver todos os pagamentos da tua rede e os seus detalhes, incluíndo o seu **status**. Un pago manual terá sempre o status **Pending** (Pendente) até que o mude manualmente.

![Lista de pagamentos mostrando pagamento manual pendente](/img/admin/payments-list.png)

Entra na páxina do pagamento facendo clic no **reference code** (código de referência). Nesta páxina terás todos os detalhes do pagamento pendente, como o ID de referência, os produtos, os *timestamps* e moito.

![Páxina de detalhes do pagamento mostrando código de referência, produtos e totais](/img/admin/payment-edit.png)

Na coluna da derecha, podes alterar o status do pagamento. Mudar para **Completed** (Completado) e activar a opción **Activate Membership** (Activar Membresía) permitirá que o sitio do teu cliente se active e a súa membresía ficará activa.

![Páxina de edición de pagamento com Status en Completed y o interruptor Activate Membership activado](/img/admin/payment-activate-membership.png)
