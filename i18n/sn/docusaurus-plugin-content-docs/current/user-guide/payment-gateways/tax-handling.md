---
title: Mabatiro eMitero
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Kubata Mitero

Ultimate Multisite ine module yekuunganidza mutero yakavakirwa muplugin yedu yepakati, saka kana uchida kuunganidza mitero yekutengesa pazvirongwa zvako, mapakeji nemasevhisi, unogona kuzviita zviri nyore pasina kuisa chero maadd-on.

Kumakambani ari muEurope, tinopa **add-on** rinowedzera maturusi nezvimiro kuti zvinyatsotsigira kutevedzera **VAT**.

Ultimate Multisite haifayeri kana kutumira mitero kuhurumende pachinzvimbo chako; isu tinongokubatsira kuunganidza mitero yakakodzera panguva yekutengeserana. **Ucharamba uchifanira kutumira mitero wega.**

## Kugonesa Kuunganidzwa kweMitero {#enabling-tax-collection}

Kuunganidzwa kwemitero hakugoneswi nekusarudzika. Kuti uku ugonese, unofanira kuenda ku **Ultimate Multisite > Settings > Taxes** wobva wachinja kuti ugonese marongero eEnable Taxes.

![Chinja cheEnable Taxes pamusoro peji remarongero eMitero](/img/config/settings-taxes-enable.png)

Heino maonero akazara epeji remarongero emitero:

![Peji rakazara remarongero emitero](/img/config/settings-taxes-full.png)

Unogonawo kuona marongero emitero ezvigadzirwa zvakasiyana:

![Marongero emitero ezvigadzirwa](/img/config/settings-taxes.png)

### Mutero usina kubatanidzwa vs. Mutero wakabatanidzwa {#tax-excluded-vs-tax-included}

Nekusarudzika, mitengo yose yezvigadzirwa zvako haina mutero wakabatanidzwa, zvichireva kuti mitero **haina kubatanidzwa** mumutengo wechigadzirwa. Kana tikaona kuti mutengi anofanira kubhadhara mitero pakutenga kwakapiwa, tichawedzera mitero **pamusoro** pehuwandu hwepasi.

Kana uchida kuti mitero ibatanidzwe mumutengo wechigadzirwa chako, unogona kuzviita nekugonesa marongero e **Inclusive Tax**.

![Mutsara wechinja cheInclusive Tax pazasi pemarongero eEnable Taxes](/img/config/settings-taxes-inclusive.png)

Usakanganwa **kuchengetedza** shanduko dzawaita.

###

## Kugadzira Mareti eMitero {#creating-tax-rates}

Mushure mekugonesa Kuunganidzwa kweMitero, uchafanira kugadzira mareti emitero enzvimbo dzakananga uchishandisa mupepeti wedu wemareti emitero.

Unogona kuwana mupepeti nekudzvanya bhatani re **Manage Tax Rates** pasidebar repeji remarongero eMitero.

![Link yeManage Tax Rates mupanel yeTax Rates papeji remarongero](/img/config/settings-taxes-manage-rates.png)

Papeji remupepeti wemareti emitero, unogona kuwedzera Tax Rates matsva nekudzvanya bhatani re **Add new Row**.

![Tafura yemupepeti wemareti emitero ine bhatani reAdd new Row pamusoro](/img/config/tax-rates-editor.png)

Uchafanira kupa reti yemutero imwe neimwe **zita** (rinoshandiswa pama invoice). Wobva wasarudza **nyika** (inodiwa), **dunhu,** uye **guta** (zvose zviviri hazvisungirwi) uko mutero uyu uchachajwa. Pakupedzisira, wedzera **reti yemutero muzvikamu kubva muzana**.

### Mapoka eMitero {#tax-categories}

Unogonawo kugadzira Mapoka eMitero akawanda, kuti uwedzere mareti emitero akasiyana kumhando dzakasiyana dzezvigadzirwa.

Dzvanya kuti **Add new Tax Category** , wobva wanyora zita reboka rako wodzvanya **Create**.

![Bhatani reAdd new Tax Category pamusoro pemupepeti wemareti emitero](/img/config/tax-categories-add.png)

![Munda wekuisa Tax Category Name mumodal yekugadzira boka](/img/config/tax-categories-create-modal.png)

Kuti uongorore mumapoka, dzvanya **Switch** uye sarudza boka raunoda kuwedzera mitero mitsva kwariri.

![Bhatani redropdown reSwitch rekuchinja pakati pemapoka emitero](/img/config/tax-categories-switch.png)

![Dropdown yesarudzo yeboka remutero ichiratidza mapoka aripo](/img/config/tax-categories-select.png)

Unogona kuseta boka remutero rechigadzirwa chakati nekuenda ku **Product edit page** wobva waenda kutab yeTaxes.

![Tab yemitero yechigadzirwa ine boka remutero nechinja chetaxable](/img/config/product-taxes.png)

Pachiratidziro chimwe chete ichocho, unogona kudzima chinja che **Is Taxable?** kuti uzivise Ultimate Multisite kuti haifaniri kuunganidza mitero pachigadzirwa icho chakapiwa.

## Rutsigiro rweEuropean VAT {#european-vat-support}

Sezvambotaurwa, tine add-on riripo revatengi vari muEU vane zvinodiwa zvakawedzerwa nekuda kwemitemo yeEuropean VAT.

Maturusi edu eVAT anobatsira nezvinhu zviviri zvakakosha:

  * Kurodha nyore mareti eEU VAT;

  * Kuunganidzwa nekusimbiswa kweVAT Number - uye reverse charging kune masangano asiri kubhadhariswa VAT (akadai semakambani ane nhamba dzeVAT dzinoshanda);

Kuti uise add-on iroro, enda ku **Ultimate Multisite > Settings** wobva wadzvanya link yepasidebar ye **Check our Add-ons**.

![Sidebar yepeji reSettings ine link yeCheck our Add-ons](/img/config/settings-taxes-addons-link.png)

Uchaendeswa kupeji redu readd-ons. Ipapo, unogona kutsvaga **Ultimate Multisite VAT add-on** woriisa.

<!-- Mufananidzo hausipo: tile yeVAT add-on papeji reAdd-ons -->

<!-- Mufananidzo hausipo: dialog yeInstall Now yeVAT add-on -->

Wobva waenda ku **Network Admin > Plugins** uye ugonese add-on iroro panetiweki yese.

<!-- Mufananidzo hausipo: chiito cheNetwork Activate cheVAT add-on papeji rePlugins -->

Kana ukadzokera ku **Tax Settings tab** , uchaona sarudzo itsva dziripo. Chinja sarudzo ye **Enable VAT Support** kuti ugonese maturusi matsva eVAT. Usakanganwa **kuchengetedza** marongero ako!

<!-- Mufananidzo hausipo: chinja cheEnable VAT Support mumarongero eMitero mushure mekugonesa add-on -->

### Kudhonza Mareti eVAT Tax {#pulling-on-vat-tax-rates}

Rimwe rematurusi anowedzerwa neintegration yedu kugona kurodha mareti emitero enyika dziri nhengo dzeEU. Izvi zvinogona kuitwa nekushanyira peji remupepeti wemareti emitero mushure mekugonesa rutsigiro rweEU VAT.

Pazasi peji, uchaona sarudzo dzekudhonza VAT. Kusarudza mhando yereti uye kudzvanya bhatani re **Update EU VAT Rates** kuchadhonza uye kuzadza tafura otomatiki nemareti emitero enyika imwe neimwe iri nhengo yeEU. Wobva wangoda kuichengetedza.

![Bhatani reUpdate EU VAT Rates pazasi pemupepeti wemareti emitero](/img/config/tax-rates-vat-pull.png)

Unogonawo kugadzirisa mavalue mushure mekuadhonza. Kuti uzviite, ingogadzirisa mutsara wetafura waunoda wodzvanya kuti uchengetedze mavalue matsva.

### Kusimbiswa kweVAT {#vat-validation}

Kana rutsigiro rweVAT rwagoneswa, Ultimate Multisite ichawedzera munda wekuwedzera kufomu rechekauti, pazasi pemunda wekero yekubhadharisa. Munda wacho ucharatidzwa chete kuvatengi vari muEU.

<!-- Mufananidzo hausipo: munda weVAT Number pafomu rechekauti refrotendi pazasi pekero yekubhadharisa -->

Ultimate Multisite ichabva yasimbisa VAT Number uye kana ikadzoka iri inoshanda, nzira ye reverse charge inoshandiswa uye tax rate inoiswa ku0% paodha iyoyo.
