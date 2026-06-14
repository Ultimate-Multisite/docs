---
title: Taxes-manado
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Taksadministriĝo

Ultimate Multisite havas modulu por kolekti taksas, kiu estas konstruita en nia bazaj plugino. Se vi bezonas kolekti vendaj taksajnajn taksas sur viajn planojn, paketojn kaj servojn, vi povas fari tion sen necesi instali okazas.

Por kompanio loĝantaj en Europo, ni ofersas **okazon**, kiu aĉetas instrumenton kaj funkciojn por pli bone **subteni VAT** konformancon.

Ultimate Multisite ne deklaras aŭ transmigras taksajn taksajn sur viajn nombone al la governeco; ni simple helpas vi kolekti la apropriajn taksajn taksajn en la tempe de la transakcio. **Vi noge bezonas transmigri taksajn taksajn mem.**

## Aktivado de taksa kolektado

Taksaj kolektado ne estas aktivita per default. Por aktivi, vi devas iri al **Ultimate Multisite > Settings > Taxes** kaj ŝanĝi la Enable Taxes (Aktivado de Takso) ĝin en aktiva.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Jen kompleta vidigo de la paĝo de taksa administriĝo:

![Tax settings full page](/img/config/settings-taxes-full.png)

Vi ankaŭ povas vidi la taksa administriĝon por individua produktaj temoj:

![Tax settings for products](/img/config/settings-taxes.png)

### Takso ekskludita kontraŭ takso inkluziva

Per default, ĉiuj viaj produktaj precoj estas taksajn taksajn ekskluditaj, tio signifas, ke taksaj taksaj **ne estas inkluzivaj** en la produktaj preco. Se ni determinas, ke klienteco devas pagui taksajn taksajn sur dada transakcio, ni aldonos la taksajn taksajn **super** la subtotalon.

Se vi preferas havi taksajn taksajn inkluzivajn en via produktaj preco, vi povas fari tion per aktiva la Enable Inclusive Tax (Inkluziva Takso) ŝanĝon.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ne forgi **salvi** la ŝanĝojn, kiujn vi faris.

###

## Kreo de taksa ratoj

Post kiam vi aktivas Taksa Kolektadon, vi bezonas krei taksajn ratojn por specifaj lokoj uzante nian redaktilon de taksa ratoj.

Vi povas akcesi redaktorin per klikadon la butono **Manage Tax Rates** (Administri Tarifojn de Taksaj Nivelo) sur la flanchoj de la paĝo de konfigura kaj taxaj niveloj.

![Link Manage Tax Rates en la panelo de Tax Rates sur la paĝo de konfigura](/img/config/settings-taxes-manage-rates.png)

Sur la paĝo de redaktoro de taxaj niveloj vi povas aĉoti novajn Tax Rates per klikado sur la butono **Add new Row** (Añadi novan rangon).

![Tablo de redaktoro de taxaj niveloj kun butono Add new Row en la supereco](/img/config/tax-rates-editor.png)

Vi bezonas doni ĉiu taxaj nivelo **titolon** (utilita sur fakturoj). Tiam vi povas elekti la **paŝton** (obbliga), la **staton**, kaj la **vicon** (ambe optionala), kie ĉi tiu takso sera plibondita. Finalkaj, aĉi la **taxajn nivelojn en procentoj**.

### Taxaj Kategorioj

Vi ankaŭ povas krei plurajn Taxaj Kategoriojn, por aĉoti diversajn taxajn nivelojn por diversajn tipojn produktoj.

Kliku sur **Add new Tax Category** (Añadi novan Taxajn Kategorion), tiam skribi la nomon de via kategorio kaj premi **Create** (Krei).

![Butono Add new Tax Category en la supereco de la redaktoro de taxaj niveloj](/img/config/tax-categories-add.png)

![Input-termo Nom de Taxa Kategorio en la modalita kreo de kategorio](/img/config/tax-categories-create-modal.png)

Por navigui tra kategorioj, kliku sur **Switch** (Mankovri) kaj elektu la kategorion, al kiu vi volas aĉi novajn taksojn.

![Butono Switch por ŝanĝi inter taxaj kategorioj](/img/config/tax-categories-switch.png)

![Dropdown-termo selektanto de taxaj kategorioj montrante disponibles kategorioj](/img/config/tax-categories-select.png)

Vi povas doni la taxajn kategoriojn por partikulan produkton per navigadon al **Product edit page** (Paĝo de redaktado de produkto) kaj tiam al la tabulo Taxes (Taxaj).

![Tabulo Taxaj produktoj kun taxaj kategorio kaj toggle Is Taxable?](/img/config/product-taxes.png)

Sur tiu sama skreena vi povas desligi la **Is Taxable?** (Estas taksa?) togglon por informi Ultimate Multisite, ke ĝi ne devas kolekti taksojn sur ti donitan produkton.

## Europaj VAT Subteno

Kiel a pred avante, ni temos un add-on ki estas dispona por klientoj en la UE kiuj havas pli da bezonado grun la reguligoj de IVA europeaj.

Niaj VAT instrumentoj helpas kun du importantaj aferoj:

  * Facila cargado de EU VAT ratoj;

  * Kolekto kaj validado de VAT-nombroj – kaj inversa akuzado por entitetoj sen IVA (tiel, kompanioj kun validadaj VAT-nombroj);

Por instali ti add-on, dirigi al **Ultimate Multisite > Settings** kaj tiam kliku sur la linko en la flanboŭlo **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Vi estu redirigitaj al nia add-on paĝo. Tiam vi povas cherui la **Ultimate Multisite VAT add-on** kaj instali ĝin.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Tiam, dirigi al **Network Admin > Plugins** kaj aktivi ti add-on per la tuta retoj.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Se vi revenas al la **Tax Settings tab**, vi vidos novajn opciojn. Turnu la opcio **Enable VAT Support** por aktivi la novajn VAT instrumentojn. Ne forgi **salvi** vian konfiguracion!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Tirado de VAT Ratoj

Un de la instrumentoj, kiun nia integriĝo adigas, estas la kapablo cargi la ratojn de akuzado por EU-membroj. Tio povas fariĝi per viziti la paĝon redaktado de akuzadratoj post aktivaŭi EU VAT support.

Al la baz de la paĝo vi vidos opcio por tirare la VAT (MVA). Se vi elektas tip raton kaj klikas sur butonon **Update EU VAT Rates** (Aktualizi EU MVA Ratojn), ĝi tiros kaj aŭtomate plenumi la tablon kun la turoj de akizoj por ĉiu EU-membroŝtato. Tiam vi nur bezonas salvi ĝin.

![Butono Update EU VAT Rates al baz de la editoraĵo de akizaj ratoj](/img/config/tax-rates-vat-pull.png)

Vi ankaŭ povas modifi la valorojn post kiam vi tiris ilin. Por tio, simple modifos la linion de la tablon necesan por vi kaj kliku por salvi novajn valorojn.

### VAT Valido

Kiam subteno de VAT estas aktivita, Ultimate Multisite aldonas plian kampon al la formo de akizo, sub la kampo de fakturaj adresoj. La kampo montrosĝos nur por klientoj loĝantaj en EU.

<!-- Screenshot unavailable: Campo Numero de VAT sur la antaŭa akizaj formo sub la faktura adreso -->

Ultimate Multisite tiam validas la Numero de VAT, kaj se ĝi revenas kiel valida, la mekanismo de inversaj akizoj (reverse charge mechanism) estas aplika kaj la turo de akizo estas setita al 0% por tiu ordem.
