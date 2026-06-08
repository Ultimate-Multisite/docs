---
title: Webhooks
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Una primera mirada a los webhooks (v2)

_**ATENCIÓ: Ten en compte que aquesta funció o article és per a usuaris avançats.**_

Un **webhook** és una manera d'una app o software com Ultimate Multisite de proporcionar informació en temps real a altres aplicacions. Un webhook entrega dades o payloads a altres aplicacions així que es produeixen, cosa que significa que **obtens les dades immediatament**.

Això és útil si necessites integrar o passar certes dades de Ultimate Multisite a un CRM o sistema més cada vegada que es triggeixi un esdeveniment. Per exemple, pots necessitar enviar el nom i l'adreç electrònic de l'usuari a una llista de correus cada vegada que es crea una nova compte d'usuari.

## Com crear un webhook

Per crear un webhook, anomena al teu dashboard d'administració de xarxa (network admin dashboard). Clica en **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pàgina de la llista de webhooks amb el bot Add New Webhook](/img/admin/webhooks-list.png)

Després pots editar la configuració del webhook:

![Interfície d'edició de webhook](/img/admin/webhook-edit.png)

Quan creis un nou webhook, es teurà peticionar informació com **Nom, URL** i **Esdeveniment (Event)**. Pots utilitzar qualsevol nom que vulguis per al teu webhook. Els camps més importants són la URL i l'Esdeveniment (Event).

![Formulari de nou webhook amb els camps Nom, URL i Event](/img/admin/webhooks-list.png)

La URL és el **endpoint o el destinació** a la qual Ultimate Multisite enviarà el **payload o les dades**. Aquesta és l'aplicació que rebre les dades.

Zapier és la solució més comuna que els usuaris utilitzen per facilitar les integracions amb aplicacions de tercers. Sense una plataforma com Zapier, t'ureu que creis manualment una funció personalitzada que capti i processin els dades. Consulta aquest article sobre **com utilitzar el webhook de Ultimate Multisite amb Zapier**.

En aquest article, analitzarem el concepte bàsic de com funciona un webhook i els esdeveniments disponibles en Ultimate Multisite. Utilitzarem una web de tercers anomenada [requestbin.com](https://requestbin.com/). Aquesta web ens permetrà crear un endpoint i capturar la càrrega (payload) sense fer cap codi. _**Avis: tot que farà és mostrar-nos que les dades han estat rebudes.**_ No hi ha cap processament ni cap acció real sobre la càrrega.

Vés a [requestbin.com](https://requestbin.com/) i fes clic en Create Request Bin (Crear Request Bin).

![Botó Create Request Bin de requestbin.com](/img/admin/webhooks-list.png)

Després de fer clic en aquest botó, us preguntarà si ja teniu compte o si us registreu. Si ja teniu un compte, us dirigirà directament al seu dashboard. Al seu dashboard, veureu immediatament l'endpoint o URL que podreu utilitzar per crear el vostre webhook de Ultimate Multisite.

![Dashboard de RequestBin mostrant la URL dell'endpoint](/img/admin/webhooks-list.png)

Arriba, copia la URL i torna a Ultimate Multisite. Col·loca l'endpoint al camp URL i selecciona un esdeveniment des del desplegable. En aquest exemple, seleccionarem **Payment Received** (Pagament Rebut).

Aquest esdeveniment s'activa cada vegada que un usu realitza un pagament. A la part inferior de la pàgina trobareu tots els esdeveniments disponibles, la seva descripció i les càrregues (payloads). Clicueu al botó **Add New Webhook** per guardar el webhook.

![Webhook configurat amb l'esdeveniment Payment Received](/img/admin/webhooks-list.png)

Ara podrem enviar un esdeveniment de prova a l'endpoint per veure si el webhook que hem createix funciona. Podem fer això fent clic en **Send Test Event** sota el webhook que hem creat.

![Opció Send Test Event sota el webhook](/img/admin/webhooks-list.png)

Aquest mostra una finestra de confirmació que diu que la prova ha estat exitosa.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Ara, si tornem al lloc _Requestbin_, veurem que la càrrega (payload) s'ha rebut contenint algunes dades de prova.

![RequestBin mostrant les dades de la càrrega del webhook rebut](/img/admin/webhooks-list.png)

Aquest és el principi bàsic de com funcionen els webhooks i els endpoints. Si voleu crear un endpoint personalitzat, us cal crear una funció personalitzada per processar les dades que regeu de Ultimate Multisite.
