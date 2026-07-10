---
title: Gestió d’impostos
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Gestió d'impostos {#tax-handling}

Ultimate Multisite té un mòdul de recaptació d'impostos integrat al nostre plugin principal, de manera que, si necessites recaptar impostos sobre les vendes dels teus plans, paquets i serveis, ho pots fer fàcilment sense haver de recórrer a instal·lar cap complement.

Per a les empreses ubicades a Europa, oferim un **complement** que afegeix eines i funcionalitats per **donar millor suport al compliment del VAT**.

Ultimate Multisite no presenta ni remet impostos al govern en nom teu; simplement t'ajudem a recaptar els impostos corresponents en el moment de la transacció. **Encara hauràs de remetre els impostos pel teu compte.**

## Activar la recaptació d'impostos {#enabling-tax-collection}

La recaptació d'impostos no està activada per defecte. Per activar-la, has d'anar a **Ultimate Multisite > Configuració > Impostos** i canviar l'opció per activar la configuració Activa els impostos.

![Commutador Activa els impostos a la part superior de la pàgina de configuració d'impostos](/img/config/settings-taxes-enable.png)

Aquí tens una vista completa de la pàgina de configuració d'impostos:

![Pàgina completa de configuració d'impostos](/img/config/settings-taxes-full.png)

També pots veure la configuració d'impostos per a productes individuals:

![Configuració d'impostos per a productes](/img/config/settings-taxes.png)

### Impost exclòs vs. impost inclòs {#tax-excluded-vs-tax-included}

Per defecte, tots els preus dels teus productes tenen els impostos exclosos, és a dir, els impostos **no estan inclosos** en el preu del producte. Si determinem que un client ha de pagar impostos en una compra determinada, afegirem els impostos **a sobre** del subtotal.

Si prefereixes que els impostos estiguin inclosos en el preu del producte, ho pots fer activant la configuració **Impost inclòs**.

![Fila del commutador Impost inclòs sota la configuració Activa els impostos](/img/config/settings-taxes-inclusive.png)

No oblidis **desar** els canvis que has fet.

###

## Crear tipus impositius {#creating-tax-rates}

Després d'activar la recaptació d'impostos, hauràs de crear tipus impositius per a ubicacions específiques utilitzant el nostre editor de tipus impositius.

Pots accedir a l'editor fent clic al botó **Gestiona els tipus impositius** a la barra lateral de la pàgina de configuració d'impostos.

![Enllaç Gestiona els tipus impositius al tauler Tipus impositius de la pàgina de configuració](/img/config/settings-taxes-manage-rates.png)

A la pàgina de l'editor de tipus impositius, pots afegir nous tipus impositius fent clic al botó **Afegeix una fila nova**.

![Taula de l'editor de tipus impositius amb el botó Afegeix una fila nova a la part superior](/img/config/tax-rates-editor.png)

Hauràs de donar a cada tipus impositiu un **títol** (utilitzat a les factures). Després pots triar el **país** (obligatori), l'**estat,** i la **ciutat** (tots dos opcionals) on es cobrarà aquest impost. Finalment, afegeix el **tipus impositiu en percentatge**.

### Categories d'impostos {#tax-categories}

També pots crear múltiples categories d'impostos, per afegir tipus impositius diferents per a diferents tipus de productes.

Fes clic a **Afegeix una nova categoria d'impostos** i, a continuació, escriu el nom de la categoria i prem **Crea**.

![Botó Afegeix una nova categoria d'impostos a la part superior de l'editor de tipus impositius](/img/config/tax-categories-add.png)

![Camp d'entrada Nom de la categoria d'impostos al modal de creació de categoria](/img/config/tax-categories-create-modal.png)

Per navegar per les categories, fes clic a **Canvia** i selecciona la categoria a la qual vols afegir nous impostos.

![Botó desplegable Canvia per canviar entre categories d'impostos](/img/config/tax-categories-switch.png)

![Desplegable selector de categories d'impostos que mostra les categories disponibles](/img/config/tax-categories-select.png)

Pots definir la categoria d'impostos d'un producte concret anant a la **pàgina d'edició del producte** i després a la pestanya Impostos.

![Pestanya d'impostos del producte amb categoria d'impostos i commutador imposable](/img/config/product-taxes.png)

En aquesta mateixa pantalla, pots desactivar el commutador **És imposable?** per fer saber a Ultimate Multisite que no ha de recaptar impostos sobre aquest producte concret.

## Suport de VAT europeu {#european-vat-support}

Com s'ha esmentat abans, tenim un complement disponible per a clients de la UE que tenen requisits addicionals a causa de la normativa europea del VAT.

Les nostres eines de VAT ajuden amb un parell de coses importants:

  * Càrrega fàcil dels tipus de VAT de la UE;

  * Recollida i validació del número de VAT, i inversió del subjecte passiu per a entitats exemptes de VAT (com ara empreses amb números de VAT vàlids);

Per instal·lar aquest complement, ves a **Ultimate Multisite > Configuració** i després fes clic a l'enllaç de la barra lateral **Consulta els nostres complements**.

![Barra lateral de la pàgina de configuració amb l'enllaç Consulta els nostres complements](/img/config/settings-taxes-addons-link.png)

Se't redirigirà a la nostra pàgina de complements. Allà, pots cercar el **complement de VAT d'Ultimate Multisite** i instal·lar-lo.

<!-- Captura de pantalla no disponible: mosaic del complement de VAT a la pàgina de complements -->

<!-- Captura de pantalla no disponible: diàleg Instal·la ara del complement de VAT -->

Després, ves a **Administració de la xarxa > Plugins** i activa aquest complement a tota la xarxa.

<!-- Captura de pantalla no disponible: acció Activa a la xarxa per al complement de VAT a la pàgina Plugins -->

Si tornes a la **pestanya Configuració d'impostos** , veuràs noves opcions disponibles. Activa l'opció **Activa el suport de VAT** per activar les noves eines de VAT. No oblidis **desar** la configuració!

<!-- Captura de pantalla no disponible: commutador Activa el suport de VAT a la configuració d'impostos després de l'activació del complement -->

### Importar els tipus impositius de VAT {#pulling-on-vat-tax-rates}

Una de les eines que afegeix la nostra integració és la capacitat de carregar els tipus impositius dels estats membres de la UE. Això es pot fer visitant la pàgina de l'editor de tipus impositius després d'activar el suport de VAT de la UE.

A la part inferior de la pàgina, veuràs les opcions d'importació de VAT. Seleccionar un tipus de tarifa i fer clic al botó **Actualitza els tipus de VAT de la UE** importarà i emplenarà automàticament la taula amb els tipus impositius de cada estat membre de la UE. Després, només cal desar-ho.

![Botó Actualitza els tipus de VAT de la UE a la part inferior de l'editor de tipus impositius](/img/config/tax-rates-vat-pull.png)

També pots editar els valors després d'importar-los. Per fer-ho, simplement edita la línia de la taula que necessitis i fes clic per desar els nous valors.

### Validació del VAT {#vat-validation}

Quan el suport de VAT està activat, Ultimate Multisite afegirà un camp addicional al formulari de checkout, sota el camp de l'adreça de facturació. El camp només es mostrarà als clients ubicats a la UE.

<!-- Captura de pantalla no disponible: camp Número de VAT al formulari de checkout del frontend sota l'adreça de facturació -->

Ultimate Multisite validarà llavors el número d’IVA i, si es confirma que és vàlid, s’aplicarà el mecanisme d’inversió del subjecte passiu i el tipus impositiu s’establirà al 0% en aquesta comanda.
