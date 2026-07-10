---
title: Configuració dels pagaments manuals
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configuració de pagaments manuals (v2) {#setting-up-manual-payments-v2}

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Els pagaments manuals són una manera d’oferir altres mètodes de pagament si **Stripe** o **PayPal** no estan disponibles per als teus usuaris. Pot ser una transferència bancària o qualsevol altre mètode de pagament disponible localment per als teus usuaris.

## Com activar els pagaments manuals {#how-to-enable-manual-payments}

Configurar el pagament manual és molt fàcil. Només cal activar-lo a les passarel·les de pagament i introduir instruccions detallades sobre com l’usuari ha d’enviar el pagament.

Primer, ves a **Ultimate Multisite > Configuració > Pagaments**. A sota de **Passarel·les de pagament** , activa **Manual**. Veuràs que apareixerà un quadre d’**Instruccions de pagament**.

Afegeix en aquest quadre la informació que el teu client necessitarà per fer el pagament. Pot ser la informació del teu compte bancari i el teu correu electrònic perquè el client et pugui enviar la confirmació del pagament, per exemple.

![Activador de la passarel·la de pagament manual amb àrea de text d’Instruccions de pagament](/img/config/manual-gateway-expanded.png)

Aquesta és la interfície de configuració de la passarel·la manual:

![Configuració de la passarel·la manual](/img/config/manual-gateway-settings.png)

Després de configurar-ho, només cal fer clic a **Desa la configuració** i ja està. Quan els usuaris es registrin a la teva xarxa, veuran un missatge que els indicarà que rebran les teves instruccions per completar la compra.

![Missatge de confirmació de registre que indica a l’usuari que rebrà les instruccions de pagament](/img/frontend/registration-manual-notice.png)

I també rebran un missatge a la teva pàgina de **Gràcies** amb les teves instruccions de pagament.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmació de pagaments manuals {#confirming-manual-payments}

Per confirmar un pagament manual, ves al menú **Pagaments** de la barra esquerra. Allà pots veure tots els pagaments de la teva xarxa i els seus detalls, inclòs el seu **estat**. Un pagament manual sempre tindrà l’estat **Pendent** fins que el canviïs manualment.

![Llista de pagaments que mostra un pagament manual pendent](/img/admin/payments-list.png)

Entra a la pàgina del pagament fent clic al **codi de referència**. En aquesta pàgina tens tots els detalls del pagament pendent, com ara l’ID de referència, els productes, les marques temporals i més.

![Pàgina de detalls del pagament que mostra el codi de referència, els productes i els totals](/img/admin/payment-edit.png)

A la columna dreta, pots modificar l’estat del pagament. Canviar-lo a **Completat** i **activar l’opció Activa la membresia** activarà el lloc del teu client i la seva membresia quedarà activa.

![Pàgina d’edició del pagament amb l’Estat establert a Completat i l’activador Activa la membresia](/img/admin/payment-activate-membership.png)
