---
title: Configuración de PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurar o Gateway PayPal (v2) {#setting-up-the-paypal-gateway-v2}

_**NOTA IMPORTANTE: Este artigo refere à versão 2.x do Ultimate Multisite.**_

Podes ativar até quatro métodos de pagamento na página de definições de pagamentos: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com o **PayPal**.

Tal como o Stripe, o PayPal é muito usado para pagamentos online, especialmente em websites WordPress. Este artigo irá guiar-te sobre como usar o PayPal como método de pagamento disponível na tua rede.

Nota que precisas ter uma **conta Business PayPal** para obter as credenciais da API necessárias para esta integração.

## Ativar o PayPal na tua rede {#enabling-paypal-on-your-network}

Para ativar o PayPal como um método de pagamento disponível na tua rede, vai a **Ultimate Multisite > Settings > Payments** e marca a caixa ao lado do PayPal.

![Ativar o PayPal nos gateways de pagamento ativos](/img/config/settings-payment-gateways.png)

## Usar o assistente de configuração guiado {#using-the-guided-setup-wizard}

O Ultimate Multisite 2.10.0 adiciona um assistente de configuração guiado para o PayPal nas definições do gateway de pagamento. Depois de ativares o PayPal, usa o assistente em **Ultimate Multisite > Settings > Payments** para escolher como queres ligar o gateway e confirmar quais as credenciais que ainda são necessárias antes de guardar.

O assistente suporta dois caminhos de configuração:

* **Ingreso manual de credenciales**: Usa este camiño si ya tienes las credenciales de la API de PayPal, si no está disponible la configuración OAuth para tu cuenta, o si prefieres copiar las credenciales directamente de PayPal. Introduce el Nombre de usuario de la API (API Username), la Contraseña de la API (API Password) y la Firma de la API (API Signature) en los campos de PayPal, y luego guarda la configuración de pago.
* **Puerta de conexión OAuth**: Usa este camiño solo cuando la opción OAuth esté disponible y activada para tu instalación. El asistente muestra el flujo OAuth detrás de un *feature flag*, así que las redes sin ese *flag* seguirán usando los campos de ingreso manual de credenciales.

Si no ves la opción OAuth en el asistente, completa el flujo de ingreso manual de credenciales a continuación. La pasarela funciona con las mismas credenciales de API de PayPal Business que en las versiones anteriores de Ultimate Multisite 2.x.

## Obtener las credenciales de la API de PayPal {#getting-the-paypal-api-credentials}

Una vez que hayas habilitado PayPal como pasarela de pago, necesitarás rellenar los campos para el **Nombre de usuario de la API** (PayPal API Username), la **Contraseña de la API** (PayPal API Password) y la **Firma de la API** (PayPal API Signature).

Puedes obtenerlas iniciando sesión en tu cuenta [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home).

(Recuerda que puedes usar el **modo sandbox** para probar los pagos y ver si la pasarela está configurada correctamente. Solo tienes que activar la sección correspondiente.)

![Campos de credenciales de API de PayPal y alternancia del modo sandbox](/img/config/settings-payment-gateways.png)

Para solicitar la Firma de la API o las credenciales de certificado para tu cuenta de PayPal:

  1. Ve a tu [Configuración de cuenta](https://www.paypal.com/businessmanage/account/accountAccess).

  2. En la sección **Acceso a la API** (API access), haz clic en **Actualizar** (Update).

3. Sob **integración NVP/SOAP API (Clássica)**, pulse **Manage API credentials** (Gestionar credenciais da API).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se já gerou uma Assinatura de API ou Certificado, será redirecionado para uma página onde poderá encontrar as suas credenciais.

     * _**Nota:** Se for solicitado a verificar a sua conta PayPal, siga as instruções que aparecem no ecrã._

  4. Selecione _uma_ das seguintes opções e depois clique em **Agree and Submit** (Concordar e Enviar).

     * **Request API Signature** (Solicitar Assinatura de API) – Selecione para autenticação por Assinatura de API.

     * **Request API Certificate** (Solicitar Certificado de API) – Selecione para autenticação por Certificado de API.

  5. O PayPal gera as suas credenciais de API da seguinte forma:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** (Credenciais de Assinatura de API) incluem um Nome de Utilizador de API, uma Palavra-passe de API e uma Assinatura, que não expira. Estes valores estão ocultos por defeito para maior segurança. Clique em **Show/Hide** (Mostrar/Ocultar) para os ativar ou desativar. Quando terminar, clique em **Done** (Concluído).

     * **API Certificate credentials** (Credenciais de Certificado de API) incluem um Nome de Utilizador de API, uma Palavra-passe de API e um Certificado, que expira automaticamente após três anos. Clique em **Download Certificate** (Descarregar Certificado) para guardar o Certificado de API no seu desktop.

Pronto, a sua integração de pagamento PayPal está completa!

Se tiver alguma dúvida sobre as configurações do PayPal, pode consultar o [Help Center](https://www.paypal.com/br/smarthelp/home) do PayPal.
