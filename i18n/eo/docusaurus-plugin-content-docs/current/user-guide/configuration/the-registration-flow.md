---
title: La Registriĝo Flujo
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# La Flujo de Registración (v2) {#the-registration-flow-v2}

_**NOTE IMPORTANTE: Esta entrada se refiere a Ultimate Multisite versión 2.x.**_

Los usuarios pueden registrarse de diferentes maneras en tu red. Pueden usar tu formulario de registro o un enlace compartible para un plan preseleccionado. Aquí te mostraremos cómo tus clientes pueden registrarse en tu red usando las rutas disponibles y qué sucede después de que se registren en tu red.

## Usando el Formulario de Registro: {#using-the-registration-form}

Este es el proceso de registro estándar. Creas una página de registro con un **checkout form** (formulario de pago) y aquí es donde tus clientes irán para registrarse en tu red y suscribirse a un plan. Puedes tener varias páginas de registro, cada una con un formulario diferente si lo deseas.

La página predeterminada para el registro es [_**yourdomain.com/register**_](http://yourdomain.com/register), pero puedes cambiar esto en cualquier momento en **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Después de que un usuario llegue a tu página de registro (usualmente haciendo clic en un botón de **Sign in** o **Buy now**), verá allí tu formulario de registro.

![Formulario de registro mostrado en la página de registro](/img/frontend/registration-form.png)

Aquí tienes un ejemplo del formulario de pago tal como aparece en el frontend:

![Formulario de registro de checkout frontend](/img/config/checkout-frontend-registration.png)

Todo lo que tienen que hacer es rellenar todos los campos obligatorios - correo electrónico, nombre de usuario, contraseña, etc... - y pagar por el plan o confirmar su dirección de correo electrónico si se están registrando para un plan gratuito o un plan de pago con período de prueba sin información de pago.

En la página de "Gracias", verán un mensaje que les dirá si necesitan confirmar su dirección de correo electrónico o si su sitio web ya está activado y pueden empezar a usarlo.

![Dankeschön-siita po registriĝo](/img/frontend/registration-thank-you.png)

Se estas bezona konfirmaj lajnan adreson, ili devus iri al siaj e-poŝto-recepto kaj kliki sur la verifikila linko. Ilija sita ne aktivas se ilia e-poŝta adresoj ne estas verifikita.

Se ili registrisaj en pagita planon aŭ se e-poŝta verigo ne estas obligita en via retoj, ili al havas sian siton aktivan ĝuste post la checkout kaj al havas linkon por logi sin al sia dashboardo.

![Sito aktiva kun linko por logi sin al dashboardo](/img/frontend/site-activated.png)

## Uzo de Partabla Linko: {#using-a-shareable-link}

La proceso de registriĝo uzante partablan linkon estas esence la sama kiel la registriĝo per la formulon, la unika diferenco estas ke uzante partablan linkon, viaj klientoj povas havi produkon aŭ templaton de sita pre-selektita sur la checkout-formo (vidu la sekcion Pre-selecting products and templates via URL parameters) aŭ eble alteni kodon.

La registriĝo estas la sama: ili devas plenumi sian nomon, uzon nomon, e-poŝtan adreson, sita nomon kaj titolon, etc... sed la planon aŭ templaton de sita estu 이미 pre-selektita por ili.

### Registriĝo Uzante Manĝen Pagoj: {#registering-using-manual-payments}

Se vi ne volas uzi PayPal, Stripe aŭ iu alia pagamentan portogon ofretita de Ultimate Multisite aŭ ĝiaj adonaj integracoj, vi povas uzi manĝajn pagojn por viaj klientoj. Tio pervasvi vi povas generi fakturon por ili pli paŝi sur via preferita pagamenta procesoro post kiam ili registriĝas en via reto.

La registriĝo estas ekzakte la sama kiel above, sed sur la registriĝo-paĝo viaj klientoj vidos mesaĝon deklarante, ke ili ricevos e-poŝton kun pli da instruoj por plenumi la pagaj procesojn.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Kaj po tiske registriĝo finas, ili vidos instruktiojn pri pagamenton, kiujn vi setis (kaj ankaŭ ricevas ilin per e-mail).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Instrukcioj pri pagamenton povas ŝanĝiĝi en **Ultimate Multisite > Settings > Payments** post kiam vi aktivigas la opcio **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Post kiam viaj klientoj finas la manualan pagamenton kaj sendas al vi konfirma, vi bezonas **manueble konfirmi la pagamenton**, por aktivi la klientajn kredensojn kaj la viton.

Por tio, diru **Ultimate Multisite > Payments** kaj trovu la pagamenton de la klienton. Ĝi devas plibonigi statuson **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Klapu sur la pagamentnumero kaj vi alcastos ĝin ŝanĝi statuson al **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Post kiam vi ŝanĝas ĝian statuson al **Completed**, vi devas vidi la mesaĝon **Activate membership**. Aktivigu ĉi ti opcion **on** por aktivi la kredensojn kaj viton, kiun ili estas asociita kun ĉi tiu klienteco. Tiam kliku por **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Viaj klientoj nun devas povi aliri la dashboard kaj ĉiuj funkciojn, kiujn ili subskribis.
