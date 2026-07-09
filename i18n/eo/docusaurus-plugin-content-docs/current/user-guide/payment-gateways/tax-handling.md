---
title: Imposta traktado
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Imposta Traktado

Ultimate Multisite havas impostkolektan modulon enkonstruitan en nia kerna plugin, do se vi bezonas kolekti vendimpostojn por viaj planoj, pakaĵoj kaj servoj, vi povas facile fari tion sen devi instali iujn ajn aldonaĵojn.

Por kompanioj situantaj en Eŭropo, ni ofertas **aldonaĵon** kiu aldonas ilojn kaj funkciojn por pli bone **subteni VAT**-konformecon.

Ultimate Multisite ne deklaras aŭ transdonas impostojn nome de vi al la registaro; ni simple helpas vin kolekti la taŭgajn impostojn je la tempo de la transakcio. **Vi ankoraŭ devos transdoni impostojn memstare.**

## Ebligi Impostkolektadon

Impostkolektado ne estas ebligita defaŭlte. Por ebligi ĝin, vi devas iri al **Ultimate Multisite > Agordoj > Impostoj** kaj ŝalti por ebligi la agordon Ebligi Impostojn.

![Ŝaltilo Ebligi Impostojn ĉe la supro de la paĝo pri impostaj agordoj](/img/config/settings-taxes-enable.png)

Jen plena vido de la paĝo pri impostaj agordoj:

![Plena paĝo de impostaj agordoj](/img/config/settings-taxes-full.png)

Vi ankaŭ povas vidi la impostajn agordojn por individuaj produktoj:

![Impostaj agordoj por produktoj](/img/config/settings-taxes.png)

### Imposto ekskludita kontraŭ imposto inkluzivita

Defaŭlte, ĉiuj viaj produktaj prezoj estas sen imposto, kio signifas, ke impostoj **ne estas inkluzivitaj** en la prezo de la produkto. Se ni determinas, ke kliento devas pagi impostojn por donita aĉeto, ni aldonos la impostojn **super** la subtuto.

Se vi preferas havi impostojn inkluzivitajn en la prezo de via produkto, vi povas fari tion ebligante la agordon **Inkluziva Imposto**.

![Vico de ŝaltilo Inkluziva Imposto sub la agordo Ebligi Impostojn](/img/config/settings-taxes-inclusive.png)

Ne forgesu **konservi** la ŝanĝojn, kiujn vi faris.

###

## Krei Impostajn Tarifojn

Post kiam vi ebligas Impostkolektadon, vi devos krei impostajn tarifojn por specifaj lokoj uzante nian redaktilon de impostaj tarifoj.

Vi povas aliri la redaktilon alklakante la butonon **Administri Impostajn Tarifojn** en la flankobreto de la paĝo pri impostaj agordoj.

![Ligilo Administri Impostajn Tarifojn en la panelo Impostaj Tarifoj sur la agorda paĝo](/img/config/settings-taxes-manage-rates.png)

Sur la paĝo de la redaktilo de impostaj tarifoj, vi povas aldoni novajn Impostajn Tarifojn alklakante la butonon **Aldoni novan Vicon**.

![Tabelo de redaktilo de impostaj tarifoj kun butono Aldoni novan Vicon supre](/img/config/tax-rates-editor.png)

Vi devos doni al ĉiu imposta tarifo **titolon** (uzatan sur fakturoj). Poste vi povas elekti la **landon** (deviga), la **ŝtaton,** kaj la **urbon** (ambaŭ nedevigaj) kie ĉi tiu imposto estos ŝargata. Fine, aldonu la **impostan tarifon en procentoj**.

### Impostaj Kategorioj

Vi ankaŭ povas krei plurajn Impostajn Kategoriojn, por aldoni malsamajn impostajn tarifojn por malsamaj specoj de produktoj.

Alklaku por **Aldoni novan Impostan Kategorion** , poste skribu la nomon de via kategorio kaj premu **Krei**.

![Butono Aldoni novan Impostan Kategorion ĉe la supro de la redaktilo de impostaj tarifoj](/img/config/tax-categories-add.png)

![Eniga kampo Nomo de Imposta Kategorio en la modalo krei kategorion](/img/config/tax-categories-create-modal.png)

Por foliumi kategoriojn, alklaku **Ŝanĝi** kaj elektu la kategorion al kiu vi volas aldoni novajn impostojn.

![Falmenua butono Ŝanĝi por ŝanĝi inter impostaj kategorioj](/img/config/tax-categories-switch.png)

![Falmenuo de impostkategoria elektilo montranta disponeblajn kategoriojn](/img/config/tax-categories-select.png)

Vi povas agordi la impostan kategorion por specifa produkto irante al la **paĝo de redaktado de produkto** kaj poste al la langeto Impostoj.

![Produkta impostlangeto kun imposta kategorio kaj impostebla ŝaltilo](/img/config/product-taxes.png)

Sur tiu sama ekrano, vi povas malŝalti la ŝaltilon **Ĉu Impostebla?** por informi Ultimate Multisite, ke ĝi ne kolektu impostojn por tiu donita produkto.

## Eŭropa VAT-Subteno

Kiel menciite antaŭe, ni havas aldonaĵon disponeblan por klientoj en la EU kiuj havas aldonajn postulojn pro eŭropaj VAT-regularoj.

Niaj VAT-iloj helpas pri kelkaj gravaj aferoj:

  * Facila ŝargado de EU VAT-tarifoj;

  * Kolektado kaj validigo de VAT-Numero - kaj inversa ŝargado por VAT-esceptitaj entoj (kiel kompanioj kun validaj VAT-numeroj);

Por instali tiun aldonaĵon, iru al **Ultimate Multisite > Agordoj** kaj poste alklaku la flankobretan ligilon **Kontrolu niajn Aldonaĵojn**.

![Flankobreto de agorda paĝo kun ligilo Kontrolu niajn Aldonaĵojn](/img/config/settings-taxes-addons-link.png)

Vi estos redirektita al nia paĝo de aldonaĵoj. Tie, vi povas serĉi la **Ultimate Multisite VAT-aldonaĵon** kaj instali ĝin.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Poste, iru al **Reta Administrado > Plugins** kaj aktivigu tiun aldonaĵon tra la tuta reto.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Se vi revenas al la **langeto Impostaj Agordoj** , vi vidos novajn disponeblajn opciojn. Ŝaltu la opcion **Ebligi VAT-Subtenon** por ebligi la novajn VAT-ilojn. Ne forgesu **konservi** viajn agordojn!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Elŝuti VAT-Impostajn Tarifojn

Unu el la iloj, kiujn nia integriĝo aldonas, estas la kapablo ŝargi la impostajn tarifojn por EU-membroŝtatoj. Tio povas esti farita vizitante la paĝon de la redaktilo de impostaj tarifoj post ebligo de EU VAT-subteno.

Ĉe la malsupro de la paĝo, vi vidos la VAT-elŝutajn opciojn. Elekti tarifan tipon kaj alklaki la butonon **Ĝisdatigi EU VAT-Tarifojn** elŝutos kaj aŭtomate plenigos la tabelon per la impostaj tarifoj por ĉiu EU-membroŝtato. Poste, vi nur bezonas konservi ĝin.

![Butono Ĝisdatigi EU VAT-Tarifojn ĉe la malsupro de la redaktilo de impostaj tarifoj](/img/config/tax-rates-vat-pull.png)

Vi ankaŭ povas redakti la valorojn post elŝuti ilin. Por fari tion, simple redaktu la tabelan linion, kiun vi bezonas, kaj alklaku por konservi la novajn valorojn.

### VAT-Validigo

Kiam VAT-subteno estas ebligita, Ultimate Multisite aldonos plian kampon al la pagoformularo, sub la fakturadadresa kampo. La kampo aperos nur por klientoj situantaj en la EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite tiam validigos la VAT Number kaj, se ĝi revenas kiel valida, la inversa ŝargomekanismo estas aplikata kaj la imposttarifo estas agordita al 0% por tiu mendo.
