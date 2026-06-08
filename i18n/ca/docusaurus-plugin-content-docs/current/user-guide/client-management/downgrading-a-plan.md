---
title: Desbaixar un pla
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Reduinar un pla (v2)

_**NOTA IMPORTANT: Aquest article es refereix a la versió 2.x d'Ultimate Multisite.**_

Reduinar un pla o subscripció és una acció comuna que els vostres clients poden realitzar si tenen un pressupost limitat o si han decidit que no necessitaran molts recursos per gestionar el seu subsite.

## Com reduir un pla

Els vostres clients poden reduir el seu pla en qualsevol moment accedint al *dashboard* d'administració del seu subsite i fent clic a **Change** (Canviar) a la pàgina de la seva compte.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

Després de fer clic al botó **Change**, l'usuari/client serà redirigit a la pàgina de *checkout* on pot seleccionar el pla al qual vol canviar la seva subscripció.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

En aquest exemple, estem reduint el pla de **Premium** a **Free**.

Per continuar, l'usuari només ha de fer clic al botó **Complete Checkout**. Això el portarà de nou a la pàgina de compte mostrant un missatge sobre el canvi pendents per la membresia. Els canvis entraràn en vigor al **pròxim cicle de facturació** del client.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Què passa quan un usuari redueix el seu pla

És important notar que reduir el pla no altera la configuració existent del subsite de l'usuari.

No canvia automàticament la plantilla del site, ja que canviar la plantilla del site erradicarà i reiniciaria completament el subsite. Això es fa per evitar pèrdues de dades innecessàries. Per tant, l'espai en disc, els *themes*, els *plugins*, etc., es mantindran intacts, excepte les publicacions (*posts*).

Entenem que la vostra principal preocupació serà els límits i les *quotas* que configureu sota cada pla, però hem de considerar el perjudici que faria al subsite de l'usuari si eliminà o canvià qualsevol de les seves configuracions.

Per a les publicacions que excedeixen el límit establert al pla, teniu 3 opcions diferents: **Keep the posts as it** *,* **Move the posts to trash** *,* o **Move the posts to draft** *.* Podeu configurar això a les configuracions d'Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Què passa amb el pagament

A la versió 2.0, ja no cal fer cap ajustament al pagament en termes de prorrateo.

Això és perquè el sistema esperarà que la membresia existent **completi el seu cicle de facturació abans** que el nou pla/membresia es facit efectiu. El nou import de facturació per la nova membresia s'aplicarà i es cobrarà automàticament al pròxim cicle de facturació.
