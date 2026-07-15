---
title: Salgyt dolandyrylyşy
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Salgyt dolandyryşy

Ultimate Multisite esasy plaginimize salgyt ýygnamak moduly girizilendir, şonuň üçin planlaryňyz, paketleriňiz we hyzmatlaryňyz boýunça satuw salgytlaryny ýygnamak gerek bolsa, muny hiç hili goşmaça modul gurmazdan aňsatlyk bilen edip bilersiňiz.

Ýewropada ýerleşýän kompaniýalar üçin **VAT goldawyny** has gowy üpjün etmek üçin gurallary we aýratynlyklary goşýan **goşmaça modul** hödürleýäris.

Ultimate Multisite siziň adyňyzdan hökümete salgyt tabşyrmaýar ýa-da geçirmeýär; biz diňe amalyň wagtynda degişli salgytlary ýygnamaga kömek edýäris. **Salgytlary özbaşdak geçirmeli bolarsyňyz.**

## Salgyt ýygnamagy işletmek {#enabling-tax-collection}

Salgyt ýygnamak deslapky ýagdaýda işledilen däldir. Ony işletmek üçin **Ultimate Multisite > Sazlamalar > Salgytlar** bölümine geçip, Enable Taxes sazlamasyny işletmeli.

![Salgyt sazlamalary sahypasynyň ýokarsynda Enable Taxes açyp-ýapgyjy](/img/config/settings-taxes-enable.png)

Ine, salgyt sazlamalary sahypasynyň doly görnüşi:

![Salgyt sazlamalarynyň doly sahypasy](/img/config/settings-taxes-full.png)

Aýry-aýry önümler üçin salgyt sazlamalaryny hem görüp bilersiňiz:

![Önümler üçin salgyt sazlamalary](/img/config/settings-taxes.png)

### Salgyt goşulmadyk vs. Salgyt goşulan {#tax-excluded-vs-tax-included}

Deslapky ýagdaýda, ähli önüm bahalaryňyz salgyt goşulmadyk görnüşdedir, ýagny salgytlar önümiň bahasyna **goşulan däldir**. Eger müşderiniň belli bir satyn alyş boýunça salgyt tölemelidigini kesgitlesek, salgytlary aralyk jemiň **üstüne** goşarys.

Salgytlaryň önümiňiziň bahasyna goşulmagyny isleseňiz, muny **Inclusive Tax** sazlamasyny işletmek arkaly edip bilersiňiz.

![Enable Taxes sazlamasynyň aşagyndaky Inclusive Tax açyp-ýapgyç setiri](/img/config/settings-taxes-inclusive.png)

Eden üýtgeşmeleriňizi **ýatdan çykarman saklaň**.

###

## Salgyt möçberlerini döretmek {#creating-tax-rates}

Salgyt ýygnamagy işledeniňizden soň, salgyt möçberleri redaktorymyzyň kömegi bilen anyk ýerler üçin salgyt möçberlerini döretmeli bolarsyňyz.

Redaktora Salgyt sazlamalary sahypasynyň gapdal panelindäki **Salgyt möçberlerini dolandyr** düwmesine basyp girip bilersiňiz.

![Sazlamalar sahypasyndaky Salgyt möçberleri panelinde Salgyt möçberlerini dolandyr salgysy](/img/config/settings-taxes-manage-rates.png)

Salgyt möçberleri redaktory sahypasynda **Täze setir goş** düwmesine basyp täze salgyt möçberlerini goşup bilersiňiz.

![Ýokarsynda Täze setir goş düwmesi bolan salgyt möçberleri redaktorynyň tablisasy](/img/config/tax-rates-editor.png)

Her salgyt möçberine **at** bermeli bolarsyňyz (hasap-fakturalarda ulanylýar). Soňra bu salgytyň alynjak **ýurduny** (hökmany), **ştatyny,** we **şäherini** (ikisi hem islege bagly) saýlap bilersiňiz. Ahyrynda, **salgyt möçberini göterimlerde** goşuň.

### Salgyt kategoriýalary {#tax-categories}

Dürli görnüşli önümler üçin dürli salgyt möçberlerini goşmak maksady bilen birnäçe salgyt kategoriýasyny hem döredip bilersiňiz.

**Täze salgyt kategoriýasyny goş** düwmesine basyň, soňra kategoriýaňyzyň adyny ýazyň we **Döret** düwmesine basyň.

![Salgyt möçberleri redaktorynyň ýokarsyndaky Täze salgyt kategoriýasyny goş düwmesi](/img/config/tax-categories-add.png)

![Kategoriýa döretmek modal penjiresindäki Salgyt kategoriýasynyň ady giriş meýdany](/img/config/tax-categories-create-modal.png)

Kategoriýalaryň arasynda gezmek üçin **Çalyş** düwmesine basyň we täze salgytlary goşmak isleýän kategoriýaňyzy saýlaň.

![Salgyt kategoriýalarynyň arasynda çalyşmak üçin Çalyş açylýan sanaw düwmesi](/img/config/tax-categories-switch.png)

![Elýeterli kategoriýalary görkezýän salgyt kategoriýasy saýlaýjy açylýan sanaw](/img/config/tax-categories-select.png)

Belli bir önüm üçin salgyt kategoriýasyny **Önüm redaktirleme sahypasyna** geçip, soňra Salgytlar goýmasyna girip belläp bilersiňiz.

![Salgyt kategoriýasy we salgyt salynýan açyp-ýapgyjy bolan önüm salgytlary goýmasy](/img/config/product-taxes.png)

Şol bir ekranda, Ultimate Multisite-e şol berlen önüm boýunça salgyt ýygnamaly däldigini bildirmek üçin **Salgyt salynýarmy?** açyp-ýapgyjyny öçürip bilersiňiz.

## Ýewropa VAT goldawy {#european-vat-support}

Öň aýdylyşy ýaly, European VAT düzgünleri sebäpli goşmaça talaplary bolan EU-daky müşderiler üçin elýeterli goşmaça modulymyz bar.

VAT gurallarymyz birnäçe möhüm meselede kömek edýär:

  * EU VAT möçberlerini aňsat ýüklemek;

  * VAT belgisi ýygnamak we barlamak — şeýle hem VAT-dan boşadylan guramalar üçin (meselem, dogry VAT belgileri bolan kompaniýalar) tersine salgytlandyrmak;

Şol goşmaça moduly gurmak üçin **Ultimate Multisite > Sazlamalar** bölümine geçiň we soňra gapdal paneldäki **Goşmaçalarymyzy barlaň** salgysyna basyň.

![Goşmaçalarymyzy barlaň salgysy bolan Sazlamalar sahypasynyň gapdal paneli](/img/config/settings-taxes-addons-link.png)

Siz goşmaçalar sahypamyza ugradylar. Şol ýerde **Ultimate Multisite VAT goşmaça modulyny** gözläp, ony gurup bilersiňiz.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Soňra **Tor administratory > Plaginler** bölümine geçiň we şol goşmaça moduly tutuş tor boýunça işjeňleşdiriň.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

**Salgyt sazlamalary goýmasyna** gaýdyp barsaňyz, täze elýeterli opsiýalary görersiňiz. Täze VAT gurallaryny işletmek üçin **VAT goldawyny işlet** opsiýasyny işlediň. Sazlamalaryňyzy **ýatdan çykarman saklaň**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT salgyt möçberlerini çekmek {#pulling-on-vat-tax-rates}

Integrasiýamyzyň goşýan gurallarynyň biri EU agza döwletleri üçin salgyt möçberlerini ýüklemek ukybydyr. Muny EU VAT goldawyny işledeniňizden soň salgyt möçberleri redaktory sahypasyna baryp edip bolýar.

Sahypanyň aşagynda VAT çekmek opsiýalaryny görersiňiz. Möçber görnüşini saýlap, **EU VAT möçberlerini täzele** düwmesine basmak, her EU agza döwleti üçin salgyt möçberleri bilen tablisany çekip alar we awtomatik doldurar. Soňra diňe ony saklamagyňyz gerek.

![Salgyt möçberleri redaktorynyň aşagyndaky EU VAT möçberlerini täzele düwmesi](/img/config/tax-rates-vat-pull.png)

Olary çekeniňizden soň bahalary hem redaktirläp bilersiňiz. Muny etmek üçin, diňe gerek bolan tablisa setiriňizi redaktirläň we täze bahalary saklamak üçin basyň.

### VAT barlagy {#vat-validation}

VAT goldawy işledilende, Ultimate Multisite töleg görnüşine, hasaplaşyk salgysy meýdanynyň aşagyna goşmaça meýdan goşar. Bu meýdan diňe EU-da ýerleşýän müşderiler üçin görkeziler.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite soňra VAT Number-i barlar we ol dogry diýip gaýdyp gelse, reverse charge mehanizmi ulanylar we şol sargytda salgyt derejesi 0% edilip belleniler.
