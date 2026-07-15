---
title: Ġestjoni tat-Taxxa
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Ġestjoni tat-Taxxa

Ultimate Multisite għandu modulu għall-ġbir tat-taxxa mibni fil-plugin ewlieni tagħna, għalhekk jekk għandek bżonn tiġbor taxxi fuq il-bejgħ fuq il-pjanijiet, il-pakketti u s-servizzi tiegħek, tista’ tagħmel dan faċilment mingħajr ma tirrikorri għall-installazzjoni ta’ xi add-ons.

Għal kumpaniji li jinsabu fl-Ewropa, noffru **add-on** li jżid għodod u karatteristiċi biex **jappoġġja aħjar il-konformità mal-VAT**.

Ultimate Multisite ma jippreżentax jew iħallas it-taxxi f’ismek lill-gvern; aħna sempliċement ngħinuk tiġbor it-taxxi xierqa fil-ħin tat-tranżazzjoni. **Xorta jkollok bżonn tħallas it-taxxi waħdek.**

## Attivazzjoni tal-Ġbir tat-Taxxa {#enabling-tax-collection}

Il-ġbir tat-taxxa mhuwiex attivat b’mod awtomatiku. Biex tattivah, trid tmur għal **Ultimate Multisite > Settings > Taxes** u taqleb biex tattiva s-setting Enable Taxes.

![Toggle Enable Taxes fin-naħa ta’ fuq tal-paġna tas-settings tat-Taxxa](/img/config/settings-taxes-enable.png)

Hawnhekk hawn dehra sħiħa tal-paġna tas-settings tat-taxxa:

![Paġna sħiħa tas-settings tat-taxxa](/img/config/settings-taxes-full.png)

Tista’ tara wkoll is-settings tat-taxxa għal prodotti individwali:

![Settings tat-taxxa għall-prodotti](/img/config/settings-taxes.png)

### Taxxa eskluża vs. Taxxa inkluża {#tax-excluded-vs-tax-included}

B’mod awtomatiku, il-prezzijiet kollha tal-prodotti tiegħek huma esklużi mit-taxxa, jiġifieri t-taxxi **mhumiex inklużi** fil-prezz tal-prodott. Jekk niddeterminaw li klijent għandu jħallas taxxi fuq xiri partikolari, inżidu t-taxxi **fuq** is-subtotal.

Jekk tippreferi li t-taxxi jkunu inklużi fil-prezz tal-prodott tiegħek, tista’ tagħmel dan billi tattiva s-setting **Inclusive Tax**.

![Ringiela tat-toggle Inclusive Tax taħt is-setting Enable Taxes](/img/config/settings-taxes-inclusive.png)

Tinsiex **issalva** l-bidliet li għamilt.

###

## Ħolqien ta’ Rati tat-Taxxa {#creating-tax-rates}

Wara li tattiva l-Ġbir tat-Taxxa, ikollok bżonn toħloq rati tat-taxxa għal postijiet speċifiċi billi tuża l-editur tar-rati tat-taxxa tagħna.

Tista’ taċċessa l-editur billi tikklikkja l-buttuna **Manage Tax Rates** fuq il-sidebar tal-paġna tas-settings tat-Taxxa.

![Link Manage Tax Rates fil-pannell Tax Rates fuq il-paġna tas-settings](/img/config/settings-taxes-manage-rates.png)

Fuq il-paġna tal-editur tar-rati tat-taxxa, tista’ żżid Tax Rates ġodda billi tikklikkja l-buttuna **Add new Row**.

![Tabella tal-editur tar-rati tat-taxxa bil-buttuna Add new Row fin-naħa ta’ fuq](/img/config/tax-rates-editor.png)

Ikollok bżonn tagħti lil kull rata tat-taxxa **titlu** (użat fuq il-fatturi). Imbagħad tista’ tagħżel il-**pajjiż** (meħtieġ), l-**istat,** u l-**belt** (it-tnejn mhux obbligatorji) fejn din it-taxxa se tiġi ċċarġjata. Fl-aħħar, żid ir-**rata tat-taxxa f’perċentwali**.

### Kategoriji tat-Taxxa {#tax-categories}

Tista’ wkoll toħloq diversi Kategoriji tat-Taxxa, biex iżżid rati tat-taxxa differenti għal tipi differenti ta’ prodotti.

Ikklikkja biex **Add new Tax Category** , imbagħad ikteb l-isem tal-kategorija tiegħek u agħfas **Create**.

![Buttuna Add new Tax Category fin-naħa ta’ fuq tal-editur tar-rati tat-taxxa](/img/config/tax-categories-add.png)

![Qasam tad-dħul Tax Category Name fil-modal tal-ħolqien tal-kategorija](/img/config/tax-categories-create-modal.png)

Biex tibbrawżja l-kategoriji, ikklikkja **Switch** u agħżel il-kategorija li magħha trid iżżid taxxi ġodda.

![Buttuna dropdown Switch biex tibdel bejn il-kategoriji tat-taxxa](/img/config/tax-categories-switch.png)

![Dropdown tal-għażla tal-kategorija tat-taxxa li juri l-kategoriji disponibbli](/img/config/tax-categories-select.png)

Tista’ tissettja l-kategorija tat-taxxa għal prodott partikolari billi tmur fil-**paġna tal-editjar tal-Prodott** u mbagħad fit-tab Taxes.

![Tab tat-taxxi tal-prodott b’kategorija tat-taxxa u toggle taxxabbli](/img/config/product-taxes.png)

Fuq dak l-istess skrin, tista’ titfi t-toggle **Is Taxable?** biex tgħarraf lil Ultimate Multisite li m’għandux jiġbor taxxi fuq dak il-prodott partikolari.

## Appoġġ għall-VAT Ewropea {#european-vat-support}

Kif imsemmi qabel, għandna add-on disponibbli għal klijenti fl-UE li għandhom rekwiżiti addizzjonali minħabba r-regolamenti tal-VAT Ewropea.

L-għodod tal-VAT tagħna jgħinu b’koppja ta’ affarijiet importanti:

  * Tagħbija faċli tar-rati tal-VAT tal-UE;

  * Ġbir u validazzjoni tan-Numru tal-VAT - u reverse charging għal entitajiet eżenti mill-VAT (bħal kumpaniji b’numri tal-VAT validi);

Biex tinstalla dak l-add-on, mur għal **Ultimate Multisite > Settings** u mbagħad ikklikkja l-link tal-sidebar **Check our Add-ons**.

![Sidebar tal-paġna tas-settings bil-link Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Se tiġi ridirett lejn il-paġna tal-add-ons tagħna. Hemmhekk, tista’ tfittex l-**Ultimate Multisite VAT add-on** u tinstallah.

<!-- Screenshot unavailable: maduma tal-VAT add-on fuq il-paġna tal-Add-ons -->

<!-- Screenshot unavailable: dialog Install Now tal-VAT add-on -->

Imbagħad, mur għal **Network Admin > Plugins** u attiva dak l-add-on fuq in-network kollu.

<!-- Screenshot unavailable: azzjoni Network Activate għall-VAT add-on fuq il-paġna tal-Plugins -->

Jekk terġa’ tmur fit-**tab Tax Settings** , tara għażliet ġodda disponibbli. Aqleb l-għażla **Enable VAT Support** biex tattiva l-għodod il-ġodda tal-VAT. Tinsiex **issalva** s-settings tiegħek!

<!-- Screenshot unavailable: toggle Enable VAT Support fis-settings tat-Taxxa wara l-attivazzjoni tal-add-on -->

### Ġbid tar-Rati tat-Taxxa tal-VAT {#pulling-on-vat-tax-rates}

Waħda mill-għodod li żżid l-integrazzjoni tagħna hija l-abbiltà li tgħabbi r-rati tat-taxxa għall-istati membri tal-UE. Dan jista’ jsir billi żżur il-paġna tal-editur tar-rati tat-taxxa wara li tattiva l-appoġġ għall-VAT tal-UE.

Fil-qiegħ tal-paġna, tara l-għażliet tal-ġbid tal-VAT. Meta tagħżel tip ta’ rata u tikklikkja l-buttuna **Update EU VAT Rates**, din tiġbed u timla awtomatikament it-tabella bir-rati tat-taxxa għal kull stat membru tal-UE. Imbagħad, trid biss issalvaha.

![Buttuna Update EU VAT Rates fil-qiegħ tal-editur tar-rati tat-taxxa](/img/config/tax-rates-vat-pull.png)

Tista’ wkoll teditja l-valuri wara li tiġbidhom. Biex tagħmel dan, sempliċement editja l-linja tat-tabella li għandek bżonn u kklikkja biex issalva l-valuri l-ġodda.

### Validazzjoni tal-VAT {#vat-validation}

Meta l-appoġġ għall-VAT ikun attivat, Ultimate Multisite se jżid qasam addizzjonali mal-formola taċ-checkout, taħt il-qasam tal-indirizz tal-kontijiet. Il-qasam jidher biss għall-klijenti li jinsabu fl-UE.

<!-- Screenshot unavailable: qasam tan-Numru tal-VAT fuq il-formola taċ-checkout frontend taħt l-indirizz tal-kontijiet -->

Ultimate Multisite imbagħad jivvalida n-Numru tal-VAT u jekk jirritorna bħala wieħed validu, jiġi applikat il-mekkaniżmu tar-reverse charge u r-rata tat-taxxa tiġi ssettjata għal 0% fuq dik l-ordni.
