---
title: Trin Trethi
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Trin Trethi {#tax-handling}

Mae gan Ultimate Multisite fodiwl casglu trethi wedi’i gynnwys yn ein plugin craidd, felly os oes angen i chi gasglu trethi gwerthu ar eich cynlluniau, pecynnau a gwasanaethau, gallwch wneud hynny’n hawdd heb orfod gosod unrhyw ychwanegion.

I gwmnïau sydd wedi’u lleoli yn Ewrop, rydym yn cynnig **ychwanegyn** sy’n ychwanegu offer a nodweddion i **gefnogi cydymffurfiaeth VAT** yn well.

Nid yw Ultimate Multisite yn ffeilio nac yn talu trethi ar eich rhan i’r llywodraeth; rydym yn syml yn eich helpu i gasglu’r trethi priodol ar adeg y trafodiad. **Bydd angen i chi dalu trethi eich hun o hyd.**

## Galluogi Casglu Trethi {#enabling-tax-collection}

Nid yw casglu trethi wedi’i alluogi yn ddiofyn. I’w alluogi, mae angen i chi fynd i **Ultimate Multisite > Gosodiadau > Trethi** a thoglo i alluogi’r gosodiad Galluogi Trethi.

![Togl Galluogi Trethi ar frig tudalen gosodiadau Trethi](/img/config/settings-taxes-enable.png)

Dyma olwg lawn ar dudalen gosodiadau trethi:

![Tudalen lawn gosodiadau trethi](/img/config/settings-taxes-full.png)

Gallwch hefyd weld y gosodiadau trethi ar gyfer cynhyrchion unigol:

![Gosodiadau trethi ar gyfer cynhyrchion](/img/config/settings-taxes.png)

### Heb gynnwys treth vs. yn cynnwys treth {#tax-excluded-vs-tax-included}

Yn ddiofyn, nid yw holl brisiau eich cynhyrchion yn cynnwys treth, sy’n golygu nad yw trethi **wedi’u cynnwys** ym mhris y cynnyrch. Os byddwn yn penderfynu y dylai cwsmer dalu trethi ar bryniant penodol, byddwn yn ychwanegu’r trethi **ar ben** yr is-gyfanswm.

Os yw’n well gennych i drethi gael eu cynnwys ym mhris eich cynnyrch, gallwch wneud hynny drwy alluogi’r gosodiad **Treth Gynhwysol**.

![Rhes togl Treth Gynhwysol o dan y gosodiad Galluogi Trethi](/img/config/settings-taxes-inclusive.png)

Peidiwch ag anghofio **cadw** y newidiadau rydych wedi’u gwneud.

###

## Creu Cyfraddau Treth {#creating-tax-rates}

Ar ôl i chi alluogi Casglu Trethi, bydd angen i chi greu cyfraddau treth ar gyfer lleoliadau penodol gan ddefnyddio ein golygydd cyfraddau treth.

Gallwch gyrchu’r golygydd drwy glicio’r botwm **Rheoli Cyfraddau Treth** ar far ochr tudalen gosodiadau Trethi.

![Dolen Rheoli Cyfraddau Treth yn y panel Cyfraddau Treth ar y dudalen gosodiadau](/img/config/settings-taxes-manage-rates.png)

Ar dudalen y golygydd cyfraddau treth, gallwch ychwanegu Cyfraddau Treth newydd drwy glicio’r botwm **Ychwanegu Rhes newydd**.

![Tabl golygydd cyfraddau treth gyda botwm Ychwanegu Rhes newydd ar y brig](/img/config/tax-rates-editor.png)

Bydd angen i chi roi **teitl** i bob cyfradd treth (a ddefnyddir ar anfonebau). Yna gallwch ddewis y **wlad** (gofynnol), y **dalaith,** a’r **ddinas** (y ddau’n ddewisol) lle codir y dreth hon. Yn olaf, ychwanegwch y **gyfradd dreth mewn canrannau**.

### Categorïau Treth {#tax-categories}

Gallwch hefyd greu sawl Categori Treth, i ychwanegu cyfraddau treth gwahanol ar gyfer gwahanol fathau o gynhyrchion.

Cliciwch i **Ychwanegu Categori Treth newydd** , yna ysgrifennwch enw eich categori a gwasgwch **Creu**.

![Botwm Ychwanegu Categori Treth newydd ar frig y golygydd cyfraddau treth](/img/config/tax-categories-add.png)

![Maes mewnbwn Enw Categori Treth yn y modal creu categori](/img/config/tax-categories-create-modal.png)

I bori drwy gategorïau, cliciwch **Newid** a dewiswch y categori rydych am ychwanegu trethi newydd ato.

![Botwm cwymplen Newid i newid rhwng categorïau treth](/img/config/tax-categories-switch.png)

![Cwymplen dewis categori treth yn dangos categorïau sydd ar gael](/img/config/tax-categories-select.png)

Gallwch osod y categori treth ar gyfer cynnyrch penodol drwy fynd i’r **dudalen golygu Cynnyrch** ac yna i’r tab Trethi.

![Tab trethi Cynnyrch gyda chategori treth a thogl trethadwy](/img/config/product-taxes.png)

Ar yr un sgrin honno, gallwch ddiffodd y togl **A yw’n Drethadwy?** i roi gwybod i Ultimate Multisite na ddylai gasglu trethi ar y cynnyrch penodol hwnnw.

## Cefnogaeth VAT Ewropeaidd {#european-vat-support}

Fel y soniwyd o’r blaen, mae gennym ychwanegyn ar gael i gwsmeriaid yn yr UE sydd â gofynion ychwanegol oherwydd rheoliadau VAT Ewropeaidd.

Mae ein hoffer VAT yn helpu gyda chwpl o bethau pwysig:

  * Llwytho cyfraddau VAT yr UE yn hawdd;

  * Casglu a dilysu Rhif VAT - a chodi tâl gwrthdro ar gyfer endidau sydd wedi’u heithrio rhag VAT (megis cwmnïau â rhifau VAT dilys);

I osod yr ychwanegyn hwnnw, ewch i **Ultimate Multisite > Gosodiadau** ac yna cliciwch ar ddolen bar ochr **Gwiriwch ein Hychwanegion**.

![Bar ochr tudalen Gosodiadau gyda dolen Gwiriwch ein Hychwanegion](/img/config/settings-taxes-addons-link.png)

Byddwch yn cael eich ailgyfeirio i’n tudalen ychwanegion. Yno, gallwch chwilio am **ychwanegyn VAT Ultimate Multisite** a’i osod.

<!-- Sgrinlun ddim ar gael: teilsen ychwanegyn VAT ar y dudalen Ychwanegion -->

<!-- Sgrinlun ddim ar gael: deialog Gosod Nawr ychwanegyn VAT -->

Yna, ewch i **Gweinyddwr Rhwydwaith > Plugins** ac actifadwch yr ychwanegyn hwnnw ar draws y rhwydwaith.

<!-- Sgrinlun ddim ar gael: gweithred Actifadu Rhwydwaith ar gyfer ychwanegyn VAT ar y dudalen Plugins -->

Os ewch yn ôl i’r **tab Gosodiadau Treth** , fe welwch opsiynau newydd ar gael. Toglowch yr opsiwn **Galluogi Cefnogaeth VAT** i alluogi’r offer VAT newydd. Peidiwch ag anghofio **cadw** eich gosodiadau!

<!-- Sgrinlun ddim ar gael: togl Galluogi Cefnogaeth VAT yn y gosodiadau Treth ar ôl actifadu’r ychwanegyn -->

### Tynnu Cyfraddau Treth VAT i mewn {#pulling-on-vat-tax-rates}

Un o’r offer y mae ein hintegreiddiad yn ei ychwanegu yw’r gallu i lwytho’r cyfraddau treth ar gyfer aelod-wladwriaethau’r UE. Gellir gwneud hynny drwy ymweld â thudalen y golygydd cyfraddau treth ar ôl galluogi cefnogaeth VAT yr UE.

Ar waelod y dudalen, fe welwch yr opsiynau tynnu VAT i mewn. Bydd dewis math o gyfradd a chlicio’r botwm **Diweddaru Cyfraddau VAT yr UE** yn tynnu i fyny ac yn llenwi’r tabl yn awtomatig gyda’r cyfraddau treth ar gyfer pob aelod-wladwriaeth o’r UE. Yna, dim ond ei gadw sydd angen i chi ei wneud.

![Botwm Diweddaru Cyfraddau VAT yr UE ar waelod y golygydd cyfraddau treth](/img/config/tax-rates-vat-pull.png)

Gallwch hefyd olygu’r gwerthoedd ar ôl eu tynnu i mewn. I’w wneud, golygwch linell y tabl sydd ei hangen arnoch yn syml a chliciwch i gadw’r gwerthoedd newydd.

### Dilysu VAT {#vat-validation}

Pan fydd cefnogaeth VAT wedi’i galluogi, bydd Ultimate Multisite yn ychwanegu maes ychwanegol at y ffurflen checkout, o dan y maes cyfeiriad bilio. Dim ond i gwsmeriaid sydd wedi’u lleoli yn yr UE y bydd y maes yn ymddangos.

<!-- Sgrinlun ddim ar gael: maes Rhif VAT ar ffurflen checkout y frontend o dan y cyfeiriad bilio -->

Bydd Ultimate Multisite wedyn yn dilysu’r Rhif TAW ac os daw’n ôl fel un dilys, caiff y mecanwaith gwrthdaliad ei gymhwyso a gosodir y gyfradd dreth i 0% ar yr archeb honno.
