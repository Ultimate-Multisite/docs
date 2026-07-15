---
title: El Flux de Registració
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# El Flux de Registre (v2)

_**NOTA IMPORTANT: Aquest article es refereix a Ultimate Multisite versió 2.x.**_

Els usuaris poden registrar-se a la vostra xarxa de diverses maneres. Poden utilitzar el vostre formulari de registre o un enllaç compartible a un pla preseleccionat. Aquí us mostrarem com poden registrar-se els vostres clients a la vostra xarxa utilitzant els camins disponibles i què passa després de registrar-se.

## Utilitzant el Formulari de Registre: {#using-the-registration-form}

Aquest és el procés de registre estàndard. Creu una pàgina de registre amb un **formulari de pagament** i és aquí on els vostres clients anaven a registrar-se a la vostra xarxa i a subscriure un pla. Podeu tenir múltiples pàgines de registre, cada una amb un formulari de registre diferent si ho desitgeu.

La pàgina de registre per defecte és [_**yourdomain.com/register**_](http://yourdomain.com/register), però podeu canviar-ho en qualsevol moment a **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Després que un usuari arribi a la vostra pàgina de registre (normalment fent clic a un botó de **Sign in** o **Buy now**), veurà el vostre formulari de registre allà.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Aquí teniu un exemple del formulari de pagament tal com apareix al *frontend*:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Tot el que han de fer és omplir tots els camps obligatoris — correu electrònic, nom d'usuari, contrasenya, etc... — i pagar el pla o confirmar la seva adreça de correu electrònic si es registren per un pla gratuït o un pla pagat amb període d'essai sense informació de pagament.

A la pàgina de "Gràcies", veuràn un missatge que els indica si han de confirmar la seva adreça de correu electrònic o si el seu lloc web ja està activat i poden començar a utilitzar-lo.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Si es requereix la confirmació d'una adreça de correu electrònic, haurà de veure la seva caixa d'entrada de correu electrònic i fer clic a l'enllaç de verificació. El seu lloc web no s'activarà si la seva adreça de correu electrònic no es verifica.

Si s'han registrat per un pla pagat o la verificació de correu electrònic no és obligatòria a la vostra xarxa, el seu lloc web s'activarà de seguida després del pagament i es mostrarà un enllaç per iniciar sessió al seu *dashboard*.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Utilitzant un Enllaç Compartible: {#using-a-shareable-link}

El procés de registre utilitzant un enllaç compartible és pràcticament el mateix que el formulari de registre; la única diferència és que, utilitzant un enllaç compartible, els vostres clients poden tenir un producte o una plantilla de lloc web preseleccionats al formulari de pagament (consultar la secció Pre-selecting products and templates via URL parameters) o potser un codi de cuon desdit (consultar la secció Using URL Parameters).

El procés de registre serà el mateix: haurà de rellenar el seu nom, nom d'usuari, adreça de correu electrònic, nom del lloc web i títol, etc... però el pla o la plantilla del lloc web ja estarà preseleccionat per ell.

### Registre utilitzant Pagaments Manuals: {#registering-using-manual-payments}

Si no voleu utilitzar PayPal, Stripe o qualsevol altre portal de pagament oferit per Ultimate Multisite o les seves integracions add-on, podeu utilitzar pagaments manuals per als vostres clients. D'aquesta manera, podeu generar una factura perquè paguin al vostre processador de pagament preferit després de registrar-se a la vostra xarxa.

El procés de registre serà exactament el mateix que l'anterior, però a la pàgina de registre els vostres clients veuràn un missatge que indica que rebran un correu electrònic amb més instruccions per completar el pagament.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

I després que es completi el registre, veuràn les instruccions de pagament que vostè ha configurat (i també les rebran per correu electrònic).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Les instruccions de pagament es poden canviar a **Ultimate Multisite > Settings > Payments** després d'activar l'opció de pagament **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Després que els vostres clients completin el pagament manual i us enviïn la confirmació, ha de **confirmar manualment el pagament** per activar la membresia i el lloc web del client.

Per fer-ho, aneu a **Ultimate Multisite > Payments** i trobareu el pagament del client. Hauria de mostrar encara un estat **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Falleu clic al número de pagament i podreu canviar el seu estat a **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Després de canviar el seu estat a **Completed**, haurà de veure un missatge d'**Activate membership**. Activeu aquesta opció **on** per activar la membresia i el lloc web associats a aquest client. Després, feu clic a **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

El seu client ja hauria de poder accedir al *dashboard* i a totes les funcionalitats a què s'ha subscrit.
