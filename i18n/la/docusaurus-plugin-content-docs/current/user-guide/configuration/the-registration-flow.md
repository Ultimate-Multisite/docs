---
title: Flūmen Registrātī
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Fluxus Registratus (v2)

_**NOTUM IMPORTANTEM: Hoc opus refertur ad Ultimate Multisite version 2.x.**_

Utientes in diversis modis in network tuam se registrare possunt. Possunt formam registrationem tuam vel link partibilis ad plan pre-selectum uti. Hic tibi mostraremos quommodo clienti tui in network tuo se registrari possunt per vias disponibles et quid post hoc accipiat.

## Utilizans Formam Registrationem:

Hic est processus standard registrationis. Creas paginam registrationis cum **formam checkout** et hic erunt ubi tui clienti ad registrare in network tuum et subscribere ad plan irent. Possuit habere plures paginas registrationis, omnis cum formam registratione diversa si vis.

Pagina default registracionis est [_**yourdomain.com/register**_](http://yourdomain.com/register), sed hoc potest mutare in quoquam tempore in **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Postquam utens ad tuam paginam registrationis (solum cliquando in botonem **Sign in** vel **Buy now**) pervenit, formam registrationem tuam viderunt.

![Forma registrationis exibitur in pagina registrationis](/img/frontend/registration-form.png)

Hic est exemplum formae checkout ut appareat in frontend:

![Forma checkout registrationis frontend](/img/config/checkout-frontend-registration.png)

Omnia quod debent facere sunt llenare omnia campos obligatoriae - email, username, password, etc... - et petere pro plan vel confirmare adrem suam si se registrant per plan liberum vel plan a pagato cum periodu testuti sine informatione pecuniaria.

In pagina "Thank you" (Gratias), verbent missa quae dicunt si debent confirmare adrem suam aut si situs suum iam activatus est et possunt uti.

![Pagina de agradecimiento después del registro](/img/frontend/registration-thank-you.png)

Si se requiere la confirmación de una dirección de correo electrónico, deberán ir a su bandeja de entrada y hacer clic en el enlace de verificación. Su sitio web no se activará si su dirección de correo electrónico no es verificada.

Si se han registrado en un plan de pago o si la verificación del correo electrónico no es obligatoria en su red, su sitio web se activará inmediatamente después del pago y se les mostrará un enlace para iniciar sesión en su dashboard.

![Sitio activado con enlace para iniciar sesión en el dashboard](/img/frontend/site-activated.png)

## Uso de un Enlace Compartible:

El proceso de registrarse usando un enlace compartible es básicamente el mismo que el formulario de registro; la única diferencia es que al usar un enlace compartido, sus clientes pueden tener un producto o plantilla de sitio preseleccionado en el formulario de pago (consulte la sección Preseleccionar productos y plantillas mediante parámetros de URL) o quizás se les añada un código de cupón (consulte la sección Uso de Parámetros de URL).

El proceso de registro será el mismo: deberán rellenar su nombre, nombre de usuario, dirección de correo electrónico, nombre del sitio web y título, etc... pero el plan o la plantilla del sitio ya estarán preseleccionados para ellos.

### Registro Usando Pagos Manuales:

Si no desea usar PayPal, Stripe o ninguna otra pasarela de pago ofrecida por Ultimate Multisite o sus integraciones adicionales, puede utilizar pagos manuales para sus clientes. De esta manera, puede generar una factura para que la paguen en su procesador de pagos preferido después de registrarse en su red.

El proceso de registro será exactamente el mismo que el anterior, pero en la página de registro sus clientes verán un mensaje indicando que recibirán un correo electrónico con instrucciones adicionales para completar el pago.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Postquam completum est registrātiō, ut instructi de pagamentō quos tu definis (et per e-mail suos recipiant) vident.

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Instructiones de pagamento possunt mutari in **Ultimate Multisite > Settings > Payments** postquam optionem pagamenti **Manual** activis es:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Postquam tuī clienti pagamentum manualem completant et tibi confirmationem mittunt, necesse est **pagamentum manualmente confirmare** ut membresiam clientis et website activetur.

Ad hoc facere, ad **Ultimate Multisite > Payments** adveniens et qua pagamentum clientis invenias. Status eius dum **Pending** (Inexpectus) ostendit.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Clicce in numerum pagamenti et status eius in **Completed** (Completus) mutare potueris.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Postquam status eius in **Completed** mutavi, ut message **Activate membership** (Activare membresiam) videris. Hoc optionem **on** (activis) toggla ut membresiam et website associatum cum hoc cliente activetur. Deinde, clica ad **Save Payment** (Salvare pagamentum).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Client tuus nunc debet ad dashboard et omnia features quae subscribit.
