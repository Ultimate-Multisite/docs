---
title: Pàgina Account del client
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# La pàgina Account del vostre client (v2)

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Quan els clients se subscriuen a un pla a la vostra xarxa, obtenen accés a un lloc web i al seu dashboard amb informació important sobre els seus pagaments, membresies, dominis, limitacions del pla, etc...

En aquest tutorial, us guiarem per la pàgina Account del client i veureu què poden veure i fer-hi els vostres clients.

## La pàgina Account {#the-account-page}

La pàgina Account és accessible fent clic a **Account** dins del dashboard del vostre client.

![Menú Account al dashboard del client](/img/account-page/account-menu.png)

En xarxes de tenants sobirans, Ultimate Multisite v2.13.0 manté aquesta experiència de gestió de clients al lloc principal. Si un client obre accions d'Account, checkout, facturació, factura, gestió del lloc, canvi de plantilla o assignació de domini des d'un tenant sobirà, l'acció apunta de nou al panell de client del lloc principal perquè els registres de facturació i membresia de la xarxa continuïn sent autoritatius.

Quan el client arriba des d'un tenant sobirà, el panell de client del lloc principal pot incloure un enllaç de retorn al lloc del tenant. L'enllaç de retorn només es mostra quan Ultimate Multisite pot validar la destinació de retorn com un dels llocs del client, cosa que evita redireccions arbitràries alhora que preserva el flux de treball del tenant.

![Visió general de la pàgina Account del client](/img/account-page/overview.png)

Després que un client hi faci clic, veurà una visió general de la seva membresia, adreça de facturació, factures, dominis, limitacions del lloc, i també podrà canviar la ****Plantilla del lloc** (si està permès a la vostra xarxa)**.

També pot canviar la membresia a un altre pla, o comprar un altre paquet o servei que oferiu. Vegem cada secció per separat.

### Visió general de la vostra membresia: {#your-membership-overview}

El primer bloc just sota el nom del lloc web dels vostres clients mostra una visió general del seu pla actual i dels serveis/paquets que s'hi van comprar. El bloc també mostra el número de membresia, l'import inicial pagat, quant costen el pla i qualsevol servei/paquet, i quantes vegades se'ls ha facturat per aquesta membresia. També poden veure si la membresia està **Activa** , **Expirada** o **Cancel·lada**.

![Visió general de la membresia que mostra el pla, l'import i els detalls de facturació](/img/account-page/membership-card.png)

Just sota aquest bloc, els vostres clients poden veure els blocs **Sobre aquest lloc** i **Límits del lloc**. Aquests blocs els mostren totes les limitacions que inclou el seu pla: espai de disc, entrades, pàgines, visites, etc... Aquests límits es poden configurar a la pàgina de cada pla a **Ultimate Multisite > Products**.

![Blocs Sobre aquest lloc i Límits del lloc que mostren les limitacions del pla](/img/account-page/site-limits.png)

A la dreta de **La vostra membresia** , els clients poden fer clic a **Canvia**. Això els mostrarà tots els plans i paquets/serveis disponibles. Si trien un altre pla, les limitacions del pla s'aplicaran en lloc de les limitacions actuals de la membresia, tant si estan baixant com pujant de pla.

Ara bé, si els vostres clients decideixen comprar paquets o serveis per a aquesta membresia actual, com ara més espai de disc o visites, la membresia actual no es canviarà, sinó que només s'hi afegiran els paquets nous.

Tingueu en compte que no es poden afegir codis de cupó en aquesta pàgina de canvi de membresia. Si el client va utilitzar un codi de cupó en la primera compra de membresia, el codi també s'aplicarà a aquesta nova membresia.

### Actualització de l'adreça de facturació: {#updating-the-billing-address}

A la pàgina Account, els vostres clients també poden actualitzar la seva adreça de facturació. Només han de fer clic a **Actualitza** al costat de _Adreça de facturació_.

![Secció Adreça de facturació amb botó Actualitza](/img/account-page/billing-address.png)

Apareixerà una finestra nova per al vostre client. Tot el que ha de fer és emplenar la nova adreça i fer clic a _Desa els canvis_.

![Formulari d'actualització de l'adreça de facturació](/img/account-page/billing-address-form.png)

### Canvi de la plantilla del lloc: {#changing-the-site-template}

Per permetre que els vostres clients canviïn les plantilles dels seus llocs, heu d'anar a **Ultimate Multisite > Settings > Sites** i activar l'opció **Permet el canvi de plantilla**.

A més, a **Ultimate Multisite > Products**, seleccioneu els vostres plans i aneu a la pestanya **Plantilles del lloc**. Assegureu-vos que l'opció **Permet plantilles del lloc** estigui activada i que a **Mode de selecció de plantilles del lloc** , estigui seleccionada l'opció **Tria plantilles del lloc disponibles**.

![Pestanya de plantilles del lloc del producte amb el mode de selecció de plantilla](/img/config/product-site-templates.png)

Podreu veure totes les plantilles del lloc disponibles al vostre lloc web. Trieu quines voleu fer disponibles i quines no voleu que estiguin disponibles per als vostres clients subscrits a aquest pla. Tingueu en compte que aquestes opcions també afecten el formulari de checkout, de manera que qualsevol plantilla triada com a **No disponible** no apareixerà a la pàgina de registre d'aquest pla.

Ara els vostres clients poden fer clic a **Canvia la plantilla del lloc** dins de la seva pàgina Account.

![Botó Canvia la plantilla del lloc a la pàgina Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 mostra un panell de canvi de plantilla redissenyat. El panell comença amb una **targeta de plantilla actual** perquè els clients puguin veure quina plantilla està activa abans de triar-ne una de substitució.

Una graella persistent de plantilles del lloc disponibles roman visible mentre els clients revisen les seves opcions. Això els ajuda a comparar les plantilles permeses per al seu pla sense perdre de vista la selecció actual.

![Llista de plantilles del lloc disponibles per al pla](/img/config/site-templates-list.png)

Després de seleccionar la plantilla a la qual volen canviar, se'ls demanarà que confirmin el canvi.

![Diàleg de confirmació del canvi de plantilla del lloc](/img/account-page/template-switch-confirm.png)

Després d'activar la confirmació i fer clic a **Processa el canvi** , la nova plantilla del lloc s'utilitzarà al lloc web del vostre client.

Els clients també poden fer servir **Restableix la plantilla actual** des d’aquest panell quan necessitin restablir el lloc a la plantilla assignada actualment. Igual que en canviar a una altra plantilla, restablir una plantilla pot sobreescriure el contingut del lloc, així que els clients només ho haurien de confirmar quan entenguin l’acció de restabliment.

### Afegir dominis personalitzats: {#adding-custom-domains}

Els teus clients també tindran l’opció d’afegir un domini personalitzat per a aquest pla a la seva pàgina Account. Per permetre que els teus clients facin servir dominis personalitzats, ves a **Ultimate Multisite > Configuració >** **Mapatge de dominis**.

Activa l’opció **Activa el mapatge de dominis**. Això permetrà que els teus clients facin servir dominis personalitzats a nivell de xarxa.

No oblidis comprovar també si el mapatge de dominis està activat per producte, perquè pots limitar un producte perquè no permeti que els teus clients facin servir dominis personalitzats.

Ves a **Ultimate Multisite > Productes**. Selecciona el pla que vulguis i ves a la pestanya **Dominis personalitzats**. Activa l’opció **Permet dominis personalitzats**.

![Pestanya Dominis personalitzats amb el commutador Permet dominis personalitzats](/img/config/product-custom-domains.png)

Això permetrà que tots els clients subscrits a aquest pla específic facin servir dominis personalitzats. Ara, a la pàgina Account, els teus clients poden afegir un domini personalitzat fent clic a **Afegeix domini**.

![Botó Afegeix domini a la pàgina Account](/img/account-page/add-domain-button.png)

La primera finestra que s’obre mostrarà als teus clients un missatge amb instruccions sobre com actualitzar els seus registres DNS perquè aquest domini personalitzat funcioni a la teva xarxa.

![Instruccions DNS mostrades en afegir un domini personalitzat](/img/account-page/add-domain-dns.png)

Aquest missatge es pot editar (per tu) a **Ultimate Multisite > Configuració > Mapatge de dominis > Instruccions per afegir un domini nou**.

![Configuració Instruccions per afegir un domini nou a Mapatge de dominis](/img/config/settings-domain-mapping.png)

Aquí tens una vista completa de la pàgina de configuració del mapatge de dominis:

![Pàgina completa de configuració del mapatge de dominis](/img/config/settings-domain-mapping-full.png)

Després de fer clic a **Pas següent** , els teus clients poden afegir el nom del seu domini personalitzat i triar si aquest domini personalitzat serà el principal. Tingues en compte que els teus clients poden fer servir més d’un domini personalitzat per als seus llocs web, així que poden triar quin serà el principal.

![Introducció del nom de domini personalitzat amb opció de domini principal](/img/account-page/add-domain-primary.png)

Després de fer clic a **Afegeix domini** , el domini s’afegirà al compte del teu client. Ara l’únic que han de fer és canviar els registres DNS d’aquest domini personalitzat al seu registrador de dominis.

### Canviar la contrasenya: {#changing-password}

Dins del Dashboard del compte, els teus clients també poden canviar la seva contrasenya fent clic a **Canvia la contrasenya**.

![Botó Canvia la contrasenya a la pàgina Account](/img/account-page/change-password-button.png)

Això mostrarà una finestra nova on els teus clients hauran d’introduir la seva contrasenya actual i després introduir la contrasenya nova que volen fer servir.

![Formulari de canvi de contrasenya amb camps de contrasenya actual i nova](/img/account-page/change-password-form.png)

### Zona de perill: {#danger-zone}

També tenim dues opcions que es mostren a la part **Zona de perill**: **Suprimeix el lloc** i **Suprimeix el compte**. Totes dues són a la part Zona de perill perquè aquestes dues accions són irreversibles. Si els teus clients suprimeixen el seu lloc web o el seu compte, no els podran recuperar.

![Zona de perill amb les opcions Suprimeix el lloc i Suprimeix el compte](/img/account-page/danger-zone.png)

Si els teus clients fan clic a qualsevol d’aquestes dues opcions, se’ls mostrarà una finestra on hauran d’activar l’opció per eliminar el lloc web o el compte, i se’ls avisarà que aquesta acció no es pot desfer.

![Diàleg de confirmació de Suprimeix el lloc](/img/account-page/delete-site-confirm.png)

![Diàleg de confirmació de Suprimeix el compte](/img/account-page/delete-account-confirm.png)

Si suprimeixen el seu lloc web, el seu compte i la seva pertinença continuaran intactes. Només perdran tot el contingut del seu lloc web. Si suprimeixen el seu compte, es perdran tots els llocs web, pertinences i informació relacionats amb aquest compte.
