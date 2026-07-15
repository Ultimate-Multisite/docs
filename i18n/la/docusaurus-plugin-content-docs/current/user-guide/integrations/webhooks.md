---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un Primer Vistazo a los Webhooks (v2)

_**ATENCIÓN: Tenga en cuenta que esta función o artículo es para usuarios avanzados.**_

Un **webhook** es una forma en que una aplicación o software como Ultimate Multisite puede proporcionar información en tiempo real a otras aplicaciones. Un webhook entrega datos o cargas útiles (*payloads*) a otras aplicaciones tan pronto como suceden, lo que significa que **recibe los datos inmediatamente**.

Esto es útil si necesita integrar o pasar ciertos datos de Ultimate Multisite a otro CRM o sistema cada vez que se active un evento. Por ejemplo, necesita enviar el nombre y la dirección de correo electrónico del usuario a una lista de correo cada vez que se crea una nueva cuenta de usuario.

## Cómo crear un webhook {#how-to-create-a-webhook}

Para crear un webhook, vaya al panel de administración de su red (*network admin dashboard*). Haga clic en **Ultimate Multisite > Webhooks > Add New Webhook**.

![Página vacía de la lista de webhooks con el botón Añadir Nuevo Webhook](/img/admin/webhooks-list-empty.png)

Luego puede editar la configuración del webhook:

![Formulario para añadir un nuevo webhook con campos Nombre, Evento y URL](/img/admin/webhook-add-modal.png)

Al crear un nuevo webhook se le pedirá información como **Nombre, URL** y **Evento**. Puede usar cualquier nombre que desee para su webhook. Los campos más importantes son la URL y el Evento.

![Interfaz de edición del webhook mostrando el campo URL y la vista previa de la carga útil](/img/admin/webhook-url-field.png)

La URL es el **punto final o el destino** al cual Ultimate Multisite enviará la **carga útil o los datos**. Esta es la aplicación que recibirá los datos.

Zapier es la solución más común que usan los usuarios para facilitar la integración con aplicaciones de terceros. Sin una plataforma como Zapier, deberá crear manualmente una función personalizada que capture los datos y los procese. Consulte este artículo sobre **cómo usar el webhook de Ultimate Multisite con Zapier**.

In hoc articulo, de conceptum primum de modo quo webhook operatur et de eventibus in Ultimate Multisite spectabimus. Utilizaremos sit tertii partes vocatum [requestbin.com](https://requestbin.com/). Hoc sit nobis permittit creandum endpoint et captandam payload sine aliqua codice scribendo. _**Exoneratio: hoc solum nos ostendit quod data recepta est.**_ Nulla processio aut aliquid actio in payload facienda erit.

Ad [requestbin.com](https://requestbin.com/) adveniat et clicce Create Request Bin.

Post hoc clic, te pettur si iam habes numerum (account) ut ad signum te registres. Si iam habes numerum, te ducat recte ad dashboard eorum. In dashboard suo, immediaque videbis endpoint aut URL quam possuris in creatione webhook Ultimate Multisite tuo usum.

Adde et copia URL et redi ad Ultimate Multisite. Endpoint in campo URL colloca et eventum ex menu déroulantie (dropdown) selecta. In hoc exemplo, **Payment Received** (Pagamentum Receptum) selectus erimus.

Hoc eventum activatur dum ut utilisateur solutum faciat. Omnia eventa disponenda, descriptio earum et payloads sunt in fundamentis paginae listata. Clicce in botonem **Add New Webhook** ad webhook salvare.

![Dropdown eventus webhoobi cum Payment Received selecto](/img/admin/webhook-event-picker.png)

Nunc potest eventum testem ad endpoint esse agere ut viderimus si webhook creatus operatur. Hoc facere possumus cliccando in **Send Test Event** sub webhook creato.

![Lista webhoobum ostendens unum webhook configuratum et actionem Send Test](/img/admin/webhooks-list-populated.png)

Hoc ostendit fenestrum confirmationis dicens quod test fuit successus.

![Resultat eventus testui webhoobi post inviendum payload testuum](/img/admin/webhook-test-result.png)

Nunc si redibimus ad situs _Requestbin_, videbis quod carga (payload) est recepta, quae aliquid testuale contineat.

Hoc est principium primum quo webhook et endpoints operant. Si tu endpoint custom creari debis, necesse tibi functionem custom creare ut data quam a Ultimate Multisite recipies processas.
