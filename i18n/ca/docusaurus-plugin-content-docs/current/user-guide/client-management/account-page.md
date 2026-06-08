---
title: Pàgina de compte del client
sidebar_position: 14
_i18n_hash: 5eabf7a1ac4c1e867c6e627bbf1f2954
---
# Pàgina de compte del vostre client (v2)

_**NOTA IMPORTANT: Aquest article es refereix a Ultimate Multisite versió 2.x.**_

Quan els clients es subscrien a un pla al vostre *network*, reben accés a un website i al seu *dashboard* amb informació important sobre els seus pagaments, membresdies, domini, limitacions del pla, etc...

En aquest tutorial, us guiarem per la pàgina de compte del client i veureu què poden veure i fer els vostres clients dins d'ella.

## La pàgina de compte

La pàgina de compte és accessible fent clic a **Account** dins del *dashboard* del vostre client.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

![Customer account page overview](/img/account-page/overview.png)

Després que el client faci clic, veurà un resum de la seva membresia, adreça de facturació, factures, domini, limitacions del site i també podrà canviar la **Plantilla del Site** (si és permès al vostre *network*).

També poden canviar la membresia per un altre pla, o comprar un altre paquet o servei que ofereu. Veiem cada secció separatament.

### Resum de la vostra membresia:

El primer bloc, just per sota el nom del website dels vostres clients, mostra un resum del pla actual i dels serveis/paquets que es van comprar amb ell. El bloc també mostra el número de membresia, el quantitat inicial pagada per aquesta, quant costa el pla i qualsevol servei/paquet, i quants paràsits es van facturar per aquesta membresia. També poden veure si la membresia és **Activa**, **Expirada** o **Cancelada**.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Just per sota aquest bloc, els vostres clients poden veure els blocs **About This Site** i **Site Limits**. Aquests blocs els mostren totes les limitacions que es refereixen al seu pla: espai en disc, *posts*, pàgines, visites, etc... Aquestes limitacions es poden configurar en cada pàgina de pla a **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

A la dreta de **Your Membership**, els clients poden fer clic a **Change**. Això els mostrarà tots els plans i paquets/serveis disponibles. Si trien un altre pla, les limitacions del pla es faran efectives en lloc de les limitacions actuals de la membresia, no importa si estan desplaçant o actualitzant el pla.

Ara, si els vostres clients es triguen a comprar paquets o serveis per a aquesta membresia actual – com més espai en disc o més visites – la membresia actual no es canviarà, però només els nous paquets s'afegeu a ella.

Teniu en compte que no es poden afegir codis de cupon en aquesta pàgina de canvi de membresia. Si el client va utilitzar un codi de cupon en la primera compra de membresia, el codi també s'aplicarà a aquesta nova membresia.

### Actualització de l'adreça de facturació:

A la pàgina de compte, els vostres clients també poden actualitzar la seva adreça de facturació. Només han de fer clic a **Update** a la pàgina de _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Aparirà una nova finestra per al vostre client. Tot el que ha de fer és omplir la nova adreça i fer clic a _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Canvi de la plantilla del site:

Per permetre als vostres clients canviar les seves plantilles de site, haureu de navegar a **Ultimate Multisite > Settings > Sites** i activar l'opció **Allow Template Switching**.

També, a **Ultimate Multisite > Products**, seleccioneu els vostres plans i aneu a la pestanya **Site Templates**. Assegureu-vos que l'opció **Allow Site Templates** està activada i en **Site Template Selection Mode**, s'ha seleccionat l'opció **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Patreu veure totes les plantilles de site disponibles al vostre website. Trieu quines voleu deixar disponibles i quines no voleu que els vostres clients subscrivers s'ho puguin veure. Tenete en compte que aquesta opció també afecta al formulari de *checkout*, així que qualsevol plantilla que es trii com a **Not Available** no apareixerà a la pàgina d'inscripció per a aquest pla.

Ara els vostres clients poden fer clic a **Change Site Template** dins de la seva pàgina de compte.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 mostra un panell de canvi de plantilla rediseñat. El panell comença amb una **current-template card** perquè els clients puguin veure quina plantilla és activa abans de triar un substitut.

Una *grid* persistent de plantilles de site disponibles es manté visible mentre els clients revisen les seves opcions. Això els ajuda a comparar les plantilles permeses per al seu pla sense perdre de vista la selecció actual.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Després de seleccionar aquella a la qual vol canviar, es demanarà que confirmin el canvi.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Després d'activar la confirmació i fer clic a **Process Switch**, la nova plantilla de site es farà servir al website del vostre client.

Els clients també poden utilitzar **Reset current template** des d'aquest panell quan necessiten tornar a la plantilla assignada actualment. Com canviar a una altra plantilla, resetejar una plantilla pot sobreescriure el contingut del site, així que els clients només haurien de confirmar-ho quan entenguin l'acció de reseteo.

### Afegir dominis personalitzats:

Els vostres clients també tindran la opció d'afegir un domini personalitzat per a aquest pla a la seva pàgina de compte. Per permetre als vostres clients utilitzar dominis personalitzats, aneu a **Ultimate Multisite > Settings >** **Domain Mapping**.

Activeu l'opció **Enable Domain Mapping**. Això permetrà als vostres clients utilitzar dominis personalitzats a nivell de *network*.

No us oublieu de revisar també si el mapeig de domini està activat per producte, ja que podeu limitar un producte per no permetre als vostres clients utilitzar dominis personalitzats.

Aneu a **Ultimate Multisite > Products**. Seleccioneu el pla de vostra elecció i aneu a la pestanya **Custom Domains**. Activeu l'opció **Allow Custom Domains**.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Això permetrà a tots els clients subscrivers a aquest pla específic utilitzar dominis personalitzats. Ara, a la pàgina de compte, els vostres clients poden afegir un domini personalitzat fent clic a **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

La primera finestra que s'obre mostrarà als vostres clients un missatge instruint-los sobre com actualitzar els seus registres DNS per fer funcionar aquest domini personalitzat al vostre *network*.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Aquest missatge es pot editar (per vosaltres) a **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Aquí teniu una vista completa de la pàgina de configuració de mapeig de domini:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Després de fer clic a **Next Step**, els vostres clients poden afegir el nom del seu domini personalitzat i triar si aquest domini personalitzat serà el principal. Tenete en compte que els vostres clients poden utilitzar més d'un domini personalitzat per els seus websites, així que poden triar qual serà el principal.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Després de fer clic a **Add Domain**, el domini s'afegirà al compte del vostre client. Tot el que ha de fer ara és canviar els registres DNS d'aquest domini personalitzat al seu registrador de dominis.

### Canvi de contrasenya:

Dins del *dashboard* de compte, els vostres clients també poden canviar la seva contrasenya fent clic a **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Això mostrarà una nova finestra on els vostres clients haurà de rebre la seva contrasenya actual i després omplir la nova contrasenya que volen utilitzar.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Zona de perill:

També tenim dues opcions que es mostren a la part de la **Danger Zone**: **Delete Site** i **Delete Account**. Estan amb les dues a la zona de perill perquè aquestes dues accions són irreversibles. Si els vostres clients eliminen el seu website o el seu compte, no poden recuperar-los.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Si els vostres clients fem clic a qualsevol de aquestes dues opcions, es mostrarà una finestra on haurà de veure l'opció per eliminar el website o el compte i es posaran en advertència que aquesta acció no es pot revertir.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Si eliminen el seu website, el seu compte i la seva membresia encara es quedaran intactes. Només perdran tot el contingut del seu website. Si eliminen el seu compte, es perdran tots els websites, membresdies i informació relativa a aquest compte.
