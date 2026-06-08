---
title: Gestió de taxes
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Gestió de Taxes (Impostos)

Ultimate Multisite té un mòdul per a la recollida d'impostos integrat al nostre plugin principal, així que si necessites recollir els impostos de venda als teus plans, paquets i serveis, pots fer-ho fàcilment sense tenir que instal·lis cap add-on.

Per a empreses ubicades en Europa, ofereixem un **add-on** que afegirà eines i funcions per millorar el suport al compliment de la normativa de IVA (VAT).

Ultimate Multisite no presenta ni rep taxess només a compte del govern; simplement ajudem a recollir els impostos adequats al moment de la transacció. **Tots tèries encara haurà que presentar les taxes per comptes propis.**

## Activar la Recollida d'Impostos

La recollida d'impostos no està activada per defecte. Per activar-la, has de navegar a **Ultimate Multisite > Configuració (Settings) > Taxes** i activar l'opció "Enable Taxes" (Activar taxes).

![Toggle Enable Taxes a la part superior de la pàgina de configuració d'impostos](/img/config/settings-taxes-enable.png)

Aquí teniu una vista completa de la pàgina de configuració d'impostos:

![Configuració completa de impostos](/img/config/settings-taxes-full.png)

També pots veure les configuracions d'impost per a productes individuals:

![Configuració d'impostos per a productes](/img/config/settings-taxes.png)

### Impost exclòs vs. Impost inclòs

Per defecte, tots els preus dels teus productes són sense impostos (tax excluded), cosa que significa que els impostos **no estan inclos** en el preu del producte. Si determinem que un client ha de pagar impostos per una compra determinada, afegirem els impostos **sobre** el subtotal.

Si prefereixes tenir els impostos inclos en el preu del teu producte, pots fer-ho activant l'opció "Inclusive Tax" (Impost inclòs).

![Filtre de IVA inclòs fila sota la configuració d'Activar Impostos](/img/config/settings-taxes-inclusive.png)

No oblidis **guardar** els canvis que has fet.

### Creació de tasques d'impost (Tax Rates)

Després d'activar la Recollida d'Impostos, necessaris crear tasques d'impost per a ubicacions específiques utilitzant el nostre editor de tasques d'impost.

 Pots accedir a l'editor fent clic al botó **Gestionar tasques d'impost** (Manage Tax Rates) del menú lateral de la pàgina de configuració d'Impostos.

![Enllaç Gestionar tasques d'impost en el panel de Tasques d'impost a la pàgina de configuració](/img/config/settings-taxes-manage-rates.png)

A la pàgina de l'editor de tasques d'impost, pots afegir noves tasques d'impost fent clic al botó **Afegir nova fila** (Add new Row).

![Taula de l'editor de tasques d'impost amb el botó Afegir nova fila a la part superior](/img/config/tax-rates-editor.png)

Has de donar a cada tasca d'impost un **títol** (que es utilitza en les factures). Després pots triar el **país** (obligatori), la **província** i la **ciutat** (ambdós opcionals) on es cobrirà aquest impost. Finalment, afegir la **tau d'impost en percentatge**.

### Categories d'Impost

També pots crear múltiples Categories d'Impost per afegir tasques d'impost diferents per a diferents tipus de productes.

Fent clic a **Afegir nova categoria d'impost** (Add new Tax Category), després escriu el nom de la teva categoria i fes clic en **Crear**.

![Botó Afegir nova categoria d'impost a la part superior de l'editor de tasques d'impost](/img/config/tax-categories-add.png)

![Camp de entrada del nom de la Categoria d'Impost al modal de crear categoria](/img/config/tax-categories-create-modal.png)

Per navegar per les categories, fes clic a **Canviar** (Switch) i selecciona la categoria a la qual vols afegir noves tasques d'impost.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Pots taxes per product en un product específic pots configurar anomenant anomenant i després anar a la **pàgina d'edició del producte** i després a la pestaña Taxes (Impostos).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

En aquesta mateixa pantalla, pots desactivar el interruptor **Is Taxable?** per avisar a Ultimate Multisite que no ha de recollir impostos sobre aquest producte concret.

## Soporte IVA Europeu

Com ho vam mencionar abans, tenim un add-on disponible per als clients de l'UE que tenen requisits addicionals dues a la regulació de l'IVA europea.

Les nostres eines d'IVA ajuden amb diverses coses importants:

  * Càrrega fàcil de tasques d'IVA de l'UE;

  * Recollida i validació del número d'IVA - i càrrega inversa per a entitats exemptes d'IVA (com empreses amb números d'IVA valides);

Per instal·lar aquest add-on, anar a **Ultimate Multisite > Settings** i després fer clic al llink de la barra lateral **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Serà redirigit a la nostra pàgina d'add-ons. Allà, pots buscar el **Ultimate Multisite VAT add-on** i instal·lar-lo.

![VAT add-on tile on the Add-ons page](/img/admin/addons-page-vat.png)

![VAT add-on Install Now dialog](/img/admin/addon-install-vat.png)

Després, ve a la secció **Administració de Xarxes > Plugins** i activa aquest add-on a nivell complet del sistema.

![Acció d'activació de xarxa per al plugin VAT en la pàgina de Plugins](/img/admin/addons-list-vat.png)

Si vuelves a la **pesta de Configuració de Taxes**, veurrà que hi ha noves opcions disponibles. Toca el commutador **Activar suport a IVA** per activar les noves eines d'IVA. No et distenguis de **guardar** els teus configuracions!

![Comutador Activar suport a IVA en la configuració de taxes després de l'activació del plugin](/img/config/settings-taxes-vat-toggle.png)

### Trencant les Rates d'IVA (Pulling on VAT Tax Rates)

Una de les eines que la nostra integració afegirà és la possibilitat de carregar les rates d'IVA per als països membres de l'UE. Això es pot fer visitant la pàgina de l'editor de rates d'IVA després d'activar el suport a IVA de l'UE.

A la part inferior de la pàgina, veuràs les opcions de trencament (pulling) de l'IVA. Seleccionant un tipus de taxa i fent clic al botó **Actualitzar Rates d'IVA de l'UE** s'obrirà i autocompletarà la taula amb les rates d'IVA per a cada país membre de l'UE. Després, només cal guardar-la.

![Botó Actualitzar Rates d'IVA al fons de l'editor de rates d'IVA](/img/config/tax-rates-vat-pull.png)

També pots editar els valors després de trencarr-los. Per fer-ho, simplement edita la línia de la taula que necessitis i fes clic per guardar els nous valors.

### Validació de l'IVA (VAT Validation)

Quan el suport a IVA està activat, Ultimate Multisite afegirà un camp addicional al formulari de càrrec (checkout), sota el camp de l'adreç de facturació. Aquest camp només apareixerà per als clients ubicats a la UE.

![Campos de número de IVA en el formulari de càrrec del front](img/frontend/checkout-vat-field.png)

Ultimate Multisite validarà el número de IVA i, si resulta ser un número valid, s'aplicarà el mecanisme de reversió de càrrecs i es setgeixà la taxa d'impost a 0% en aquell ordre.
