---
title: Configuración de pagamentos manuais
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configuración de pagamentos manuais (v2) {#setting-up-manual-payments-v2}

_**NOTA IMPORTANTE: Este artigo refírese a Ultimate Multisite versión 2.x.**_

Os pagamentos manuais son unha forma de ofrecer outros métodos de pagamento se **Stripe** ou **PayPal** non están dispoñibles para os teus usuarios. Pode ser unha transferencia bancaria ou calquera outro método de pagamento dispoñible localmente para os teus usuarios.

## Como activar os pagamentos manuais {#how-to-enable-manual-payments}

Configurar o pagamento manual é moi sinxelo. Só tes que activalo en pasarelas de pagamento e introducir instrucións detalladas sobre como o usuario debe enviar o pagamento.

Primeiro, vai a **Ultimate Multisite > Settings > Payments**. Debaixo de **Payment Gateways** , activa **Manual**. Verás que aparecerá unha caixa de **Instrucións de pagamento** para ti.

Engade nesta caixa a información que o teu cliente necesitará para realizar o pagamento. Pode ser a información da túa conta bancaria e o teu correo electrónico para que o cliente poida enviarche a confirmación do pagamento, por exemplo.

![Conmutador da pasarela de pagamento manual con área de texto de Instrucións de pagamento](/img/config/manual-gateway-expanded.png)

Esta é a interface de configuración da pasarela manual:

![Configuración da pasarela manual](/img/config/manual-gateway-settings.png)

Despois de configurala, só tes que facer clic en **Gardar configuración** e xa está feito. Cando os usuarios se rexistren na túa rede, verán unha mensaxe que lles indicará que recibirán as túas instrucións para completar a compra.

![Mensaxe de confirmación do rexistro que lle indica ao usuario que recibirá instrucións de pagamento](/img/frontend/registration-manual-notice.png)

E tamén recibirán unha mensaxe na túa páxina de **Thank You** coas túas instrucións de pagamento.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmar pagamentos manuais {#confirming-manual-payments}

Para confirmar un pagamento manual, vai ao menú **Payments** da barra esquerda. Alí podes ver todos os pagamentos da túa rede e os seus detalles, incluído o seu **estado**. Un pagamento manual sempre terá o estado **Pendente** ata que o cambies manualmente.

![Lista de pagamentos que mostra un pagamento manual pendente](/img/admin/payments-list.png)

Entra na páxina do pagamento facendo clic no **código de referencia**. Nesta páxina tes todos os detalles do pagamento pendente, como o ID de referencia, produtos, marcas de tempo e máis.

![Páxina de detalles do pagamento que mostra o código de referencia, produtos e totais](/img/admin/payment-edit.png)

Na columna dereita, podes modificar o estado do pagamento. Cambialo a **Completed** e **activar a opción Activate Membership** habilitará o sitio do teu cliente e a súa subscrición estará activa.

![Páxina de edición do pagamento co estado configurado como Completed e o conmutador Activate Membership](/img/admin/payment-activate-membership.png)
