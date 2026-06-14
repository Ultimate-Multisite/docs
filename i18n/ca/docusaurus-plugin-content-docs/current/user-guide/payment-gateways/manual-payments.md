---
title: Configurar pagaments manuals
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Configurar Pagaments Manuals (v2)

_**NOTA IMPORTANTE: A aquest article es refere la versió 2.x d'Ultimate Multisite.**_

Els pagaments manuals són una manera de que tu puguis oferir altres mètodes de pagament si **Stripe** o **PayPal** no estan disponibles per als teus usuaris. Pot ser un transfer bancari, un wire o qualsevol altre mètode de pagament disponible localment per als teus usuaris.

## Com activar els Pagaments Manuals

Configurar un pagament manual és molt fàcil. Només has de habilitar-lo a les configuracions de passatges de pagaments i posar instruccions detallades sobre com el usuari ha de fer el pagament.

Primer, anomena a **Ultimate Multisite > Configuració > Pagaments**. Sota **Payment Gateways**, activa la opció **Manual**. Veuràs que apareixerà una caixa de **Payment Instructions** per a tu.

Aquesta caixa pot contenir la informació que el teu client necessitarà per fer el pagament. Poden ser els detalls de la teva conta bancària i el teu correu electrònic perquè el client t'envii la confirmació del pagament, per exemple.

![Toggle del passatge de pagaments manuals amb una zona de text d'Instruccions de Pagament](/img/config/manual-gateway-expanded.png)

Així tens l'interfície de configuració del passatge manual:

![Configuració del passatge manual](/img/config/manual-gateway-settings.png)

Després d'ho configurar, només has de fer clic a **Save Settings** i està fet. Quan els usuaris s'enregistren en la teva xarxa, veuraran un missatge que els dirà que tindran les instruccions per completar la compra.

![Missatge de confirmació d'enregistrament que li diu al usuari que tindrà instruccions de pagament](/img/frontend/registration-manual-notice.png)

I també tindran un missatge a la teva pàgina de **Gràcies** amb les instruccions del teu pagament.

<!-- Screenshot unavailable: Pàgina de Gràcies que mostra les instruccions de pagament després del checkout -->

## Confirmar pagaments manuals

Per confirmar un pagament manual, anomena al menú **Payments** a la barra lateral esquerra. Allà podràs veure tots els pagaments de la teva xarxa i els seus detalls, incloent el seu **estat**. Un pagament manual tindrà sempre l'estat **Pending** fins que ho canvisis tu manualment.

![Llista de pagaments que mostra un pagament manual pending](/img/admin/payments-list.png)

Entra a la pàgina de pagament fent clic al **còdic de referència**. En aquesta pàgina t'encapissaran tots els detalls del pagament pending, com l'ID de referència, els productes, les marques de temps i molts més.

![Pàgina de detalls de pagament que mostra el còdic de referència, els productes i els tot](/img/admin/payment-edit.png)

A la columna dreta, pots canviar l'estat del pagament. Canviant-lo a **Completed** i activant l'opció **Activate Membership**, habilitarà el site del teu client i la seva membresia estarà activa.

![Pàgina d'edició de pagament amb l'Estat set a Completed i l'activació de Activate Membership](/img/admin/payment-activate-membership.png)
