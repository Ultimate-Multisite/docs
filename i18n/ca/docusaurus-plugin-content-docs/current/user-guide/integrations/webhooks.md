---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un primer cop d'ull als webhooks (v2)

_**ATENCIÓ: Tingueu en compte que aquesta funcionalitat o article és per a usuaris avançats.**_

Un **webhook** és una manera perquè una aplicació o programari com Ultimate Multisite proporcioni informació en temps real a altres aplicacions. Un webhook entrega dades o càrregues útils a altres aplicacions a mesura que es produeixen, cosa que vol dir que **obteniu les dades immediatament.**

Això és útil si necessiteu integrar o passar determinades dades des d'Ultimate Multisite cap a un altre CRM o sistema cada vegada que s'activa un esdeveniment. Per exemple, necessiteu enviar el nom i l'adreça electrònica de l'usuari a una llista de correu cada vegada que es crea un compte d'usuari nou.

## Com crear un webhook {#how-to-create-a-webhook}

Per crear un webhook, aneu al tauler d'administració de la vostra xarxa. Feu clic a **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pàgina de llista de webhooks buida amb el botó Add New Webhook](/img/admin/webhooks-list-empty.png)

A continuació, podeu editar la configuració del webhook:

![Formulari Add New Webhook amb camps de Name, Event i URL](/img/admin/webhook-add-modal.png)

Quan creeu un webhook nou, se us demanarà informació com **Name, URL,** i **Event**. Podeu utilitzar qualsevol nom que vulgueu per al vostre webhook. Els camps més importants són la URL i l'esdeveniment.

![Interfície d'edició del webhook que mostra el camp URL i la previsualització de la càrrega útil](/img/admin/webhook-url-field.png)

La URL és l'**endpoint o la destinació** a la qual Ultimate Multisite enviarà la **càrrega útil o dades**. Aquesta és l'aplicació que rebrà les dades.

Zapier és la solució més comuna que l'usuari utilitza per facilitar la integració amb aplicacions de tercers. Sense una plataforma com Zapier, haureu de crear manualment una funció personalitzada que capturi les dades i les processi. Consulteu aquest article sobre **com utilitzar el webhook d'Ultimate Multisite amb Zapier.**

En aquest article, veurem el concepte bàsic de com funciona un webhook i els esdeveniments disponibles a Ultimate Multisite. Utilitzarem un lloc de tercers anomenat [requestbin.com](https://requestbin.com/). Aquest lloc ens permetrà crear un endpoint i capturar la càrrega útil sense escriure cap codi. _**Avís legal: tot el que farà és mostrar-nos que les dades s'han rebut.**_ No hi haurà cap processament ni cap tipus d'acció feta sobre la càrrega útil.

Aneu a [requestbin.com](https://requestbin.com/) i feu clic a Create Request Bin.

Després de fer clic en aquest botó, us demanarà que inicieu sessió si ja teniu un compte o que us registreu. Si ja teniu un compte, us portarà directament al seu Dashboard. Al seu Dashboard, veureu immediatament l'endpoint o la URL que podeu utilitzar per crear el vostre webhook d'Ultimate Multisite.

Continueu i copieu la URL, i torneu a Ultimate Multisite. Col·loqueu l'endpoint al camp URL i seleccioneu un esdeveniment al desplegable. En aquest exemple, seleccionarem **Payment Received**.

Aquest esdeveniment s'activa sempre que un usuari fa un pagament. Tots els esdeveniments disponibles, la seva descripció i les càrregues útils apareixen a la part inferior de la pàgina. Feu clic al botó **Add New Webhook** per desar el webhook.

![Desplegable d'esdeveniments del webhook amb Payment Received seleccionat](/img/admin/webhook-event-picker.png)

Ara podem enviar un esdeveniment de prova a l'endpoint per veure si el webhook que hem creat funciona. Ho podem fer fent clic a **Send Test Event** sota el webhook que hem creat.

![Llista de webhooks que mostra un webhook configurat i l'acció Send Test](/img/admin/webhooks-list-populated.png)

Això mostra una finestra de confirmació que indica que la prova s'ha completat correctament.

![Resultat de l'esdeveniment de prova del webhook després d'enviar una càrrega útil de prova](/img/admin/webhook-test-result.png)

Ara, si tornem al lloc _Requestbin_, veurem que s'ha rebut la càrrega útil que conté algunes dades de prova.

Aquest és el principi bàsic de com funcionen els webhooks i els endpoints. Si heu de crear un endpoint personalitzat, haureu de crear una funció personalitzada per processar les dades que rebeu d'Ultimate Multisite.
