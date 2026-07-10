---
title: O Flujo de Registo
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# O Fluxo de Registo (v2) {#the-registration-flow-v2}

_**NOTA IMPORTANTE: Este artigo refere a Ultimate Multisite versão 2.x.**_

Os usuarios poden rexistrarse de diferentes maneras na vosa rede. Poden usar o vosso formulario de registo ou un enlace partilhable para un plan preseleccionado. Aquí mostramos como os vuestros clientes poden rexistrarse na vosa rede usando as rutas dispoñibles e que acontece despois de que se registren na vosa rede.

## Usando o Formulario de Registo: {#using-the-registration-form}

Este é o proceso de registo estándar. Crea unha páxina de registo con un **checkout form** (formulario de caixa) e aquí é onde os vuestros clientes irán para rexistrarse na vosa rede e suscribirse a un plan. Podéis ter varias páxinas de registo, cada unha con un formulario diferente se quere.

A páxina predeterminada para o registo é [_**yourdomain.com/register**_ (vosa-dominio.com/register), pero podes cambiar isto en cualquier momento en **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Despois de que un usuario chegue á páxina de registo (usualmente facendo clic nun botón de **Sign in** ou **Buy now**), verá o vosso formulario de registo allí.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Aquí ten un exemplo do formulario de caixa tal como aparece no frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Todo o que hai de facer é preencher todos os campos obrigatorios - email, nome de utilizador, contraseña, etc... - e pagar o plan ou confirmar a súa dirección de email se están rexistrando para un plan gratuito ou un plan de pago con período de prueba sen información de pagamento.

Na páxina "Thank you" (Gracias), verán unha mensaxe que llares se necesitan confirmar a súa dirección de email ou se o seu sitio web ya está activado e poden empezar a usarlo.

![Página de agradecimiento após o registo](/img/frontend/registration-thank-you.png)

Se for necesario confirmar un endereço de correo electrónico, deberán ir a la bandeja de entrada de su correo y hacer clic en el enlace de verificación. O seu sitio web non se activará se o seu endereço de correo non for verificado.

Se se registaron con un plan de pago ou se a verificación do correo electrónico non é obrigatório na súa rede, o seu sitio web se activará inmediatamente después do proceso de compra e moita se mostrará un enlace para iniciar sesión no seu dashboard.

![Sitio activado con enlace para iniciar sesión no dashboard](/img/frontend/site-activated.png)

## Usando un Enlace Compartible: {#using-a-shareable-link}

O proceso de registarse usando un enlace compartible é basicamente o mesmo que o formulario de registo, a única diferenza é que ao usar un enlace compartible, os seus clientes poderán tener preseleccionado un producto ou modelo de sitio web no formulario de compra (ve co sección Preselección de produtos e modelos vía parámetros URL) ou tal vez un código de cupón añadido (ve co sección Usando Parámetros URL).

O proceso de registo será o mesmo: deberán completar o seu nome, nome de utilizador, dirección de correo electrónico, nome do sitio web e título, etc... pero o plan ou modelo de sitio web ya estarán preseleccionados para eles.

### Registrarse Usando Pagamentos Manuais: {#registering-using-manual-payments}

Se non queira usar PayPal, Stripe ou algún otro portal de pagamento ofrecido por Ultimate Multisite ou as súas integracións adicionales, pode usar pagamentos manuais para os seus clientes. Así, poderá crear unha factura para que paguen no procesador de pagamento preferido después de se registaren na súa rede.

O proceso de registo será exactamente o mesmo como arriba, pero na página de registo os seus clientes verán unha mensaxe indicando que recibirán un correo electrónico con máis instrucións para completar o pago.

![Mensaxe de pago manual durante o rexistro](/img/frontend/registration-manual-notice.png)

E despois de completar o rexistro, verán as instrucións de pago que vostede estableceu (e tamén recibirán por email).

![Instrucións de pago mostradas após o rexistro](/img/frontend/registration-payment-instructions.png)

As instrucións de pago poden cambiar na **Ultimate Multisite > Settings > Payments** desativando a opción de pago **Manual**:

![Interruptor de pago manual con campo de instrucións de pago](/img/config/manual-gateway-settings.png)

Despois de que os vostros clientes completen o pago manual e envién a súa confirmación, vostede terás de **confirmar manualmente o pago** para activar a mensura do cliente e o sitio web.

Para facer isto, diríbase a **Ultimate Multisite > Payments** e ache o pagamento do cliente. Ainda debería mostrar un estado de **Pending** (Pendente).

![Lista de pagamentos con pago manual pendiente](/img/admin/payments-list.png)

Clique na número do pago e poderá cambiar o seu estado a **Completed** (Completado).

![Páxina de detalles do pagamento](/img/admin/payment-edit.png)

![Cambiar o estado do pagamento para Completed](/img/admin/payment-status-completed.png)

Despois de cambiar o seu estado a **Completed**, deverá ver unha mensaxe de **Activate membership** (Activar mensura). Ative esta opción **on** (activada) para activar a mensura e o sitio web asociados a este cliente. Despois, clique para **Save Payment** (Salvar pago).

![Interruptor de activación de mensura y botón Salvar Pago](/img/admin/payment-activate-membership.png)

O vostrado cliente agora deberá poder acceder ao dashboard e a todas as características que se suscribín.
