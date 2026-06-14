---
title: Skattagerð
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Skattahandling

Ultimate Multisite hefur skattahandlingsmodul í kjarnstjórnunarþróunni okkar, svo þegar þér þarf að safna sjálfskatt á planum, pakka og þjónustum þínum, geturðu það auðveldlega án þess að þurfa að installa nokkrar add-ons.

Fyrir fyrirtæki sem eru staðsett í Evrópu býðum við **add-on** sem bætir verkfæri og eiginleikum til betri **stjórnun VAT** (mervaskatt).

Ultimate Multisite skilar ekki skattum fyrir þig til regjeringar; við hjálpum bara þér að safna viðeigandi skattir á sama tíma sem kaupinu. **Þú þurfa enn að skila skattir sjálfur.**

## Skilning skattasafnans

Skattasafn er ekki aktivert af raunverulegum settum. Til að aktíva hana þarf þig að ferðast yfir í **Ultimate Multisite > Settings > Taxes** og slá á innstillinguna Enable Taxes (Aktíva skattir).

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Hér er fullvitsmiðli yfir skattinnstillingar:

![Tax settings full page](/img/config/settings-taxes-full.png)

Þú getur aðeins skoðað skattinnstillingar fyrir einstaka vörur:

![Tax settings for products](/img/config/settings-taxes.png)

### Skattarútvallast vs. Skattarútvallast

Eftir raunverulegt settum eru allir verðir þín á vörum skattarútvallast, sem þýðir að skattir **eina ekki í** vörðarverði. Ef við áttum fyrir því að viðskiptavinur ætti að halda skattum á því kaupinu, munum við bæta skattum **á yfir** samantektarverði.

Ef þú vilt hafa skattir í vörðarverði þínum, geturðu það með því að aktíva innstillinguna Inclusive Tax (Inklusið skatt).

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Gleymðu ekki að **hugsa** endringunum sem þú hefur gerð.

###

## Skráning skattarútvallast

Eftir að þú aktívaðir Tax Collection, þurfaðu að skapa skattarútvallast fyrir sérstaka staði með notkun skattarútvallastjórnunar okkar.

Þú getur að hleðja editorinn með því að klikka á knappa **Manage Tax Rates** (Styring skattarratna) í sidfari Tax settings (Skattarinnstillingar) á hleðbergum.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Á editorum fyrir skattarratan geturðu bætt nýjum skattarratunum í viðbót með því að klikka á knappa **Add new Row** (Bæta nýja rutu).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Þú þarft að gefa hverjum skattarratann **title** (tittel) (sem notar á faktuðum). Þá geturðu velja **country** (landið) (kravandi), **state** (staðinn) og **city** (borg) (búið eða ekki) þar sem skatturinn mun verið reiknaður. Í lokum bæta við **tax rate in percents** (skattarratan í persentum).

### Tax Categories (Skattarhlutfall)

Þú getur einnig skapað fleiri Tax Categories (Skattarhlutfall), til að bæta ólíka skattarratunum fyrir ólíka möguleika vörum.

Klikka á **Add new Tax Category** (Bæta nýja skattarhlutfall) , þá skrifa nafn fyrir hlutaðann og trykkir **Create** (Skapa).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Til að skoða hlutaðann, klikka á **Switch** (Skipta) og velja hlutaðann sem þú vilt bæta nýjum skattum við.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Þú getur sett skattarhlutfall fyrir sérstakla vöru með því að ferðast yfir í **Product edit page** (Löggingarsíða vörunnar) og síðan til Taxes tab (Skattarflutningur).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Á sama skráningu geturðu sláð úr **Is Taxable?** (Er það skattlegt?) togglen til að láta Ultimate Multisite vita að það ætti ekki að krefjast skatta á þeirri vörunni.

## European VAT Support (Styring EU-skattar)

Eins og var sagt, er viðkominnur sem eru í EU og hafa ekstra kröfur vegna europeiskmraustöðu (VAT) aðgangur til viðbótum.

Þær VAT-hlutverki hjá okkur hjálpa með nokkrum mikilvægum þingum:

  * Einföld laðning af EU VAT -hlutfalli;

  * Samningur um VAT-númer og staðfesting - og bakgrunnar skipting fyrir einstaklinga sem eru ekki skipti (tíðar fyrir fyrirtæki með réttum VAT-númerum);

Til að installera þennan add-on, ferðu yfir **Ultimate Multisite > Settings** og klikka á linkinn í hítandi bandara **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Þú verður leiðréttur til yfirskrifar sínum add-onum. Þar geturð þú leita eftir **Ultimate Multisite VAT add-on** og installera hann.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Þá ferðu yfir í **Network Admin > Plugins** og aktiva þennan add-on nálægt hefðinu (network-wide).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ef þú ferðu aftur í **Tax Settings tab**, sjáðu þú nýjar möguleika sem eru til við. Skiptu **Enable VAT Support** (Aktiva VAT-stöd) mótlið til að aktiva nýja VAT hlutverki. Geymið ekki gleymt settir þín!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Draugning á VAT -hlutfalli

Eitt af hlutverkunum sem okkar samstarf er að geta laða í þáttarhlutfall fyrir EU-land. Þetta gerist með því að vitja yfir **tax rates editor** síðu eftir að aktiva VAT -stöd.

Í botninni undir yfirmsögnunum sjáttu þú veitir möguleika til að hlaða í uppfærðar VAT-tíðningarnar. Val á einum gildi fyrir tíðningartíðning og klikk á knappa **Update EU VAT Rates** mun sýna og sjálft fylla út tábluna með skattarútgjöfum fyrir hvert land í EU. Þegar það er gerð, þarf þú að hefja bara að hefja uppfærslu.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Þú getur einnig breytt gildi eftir að það er hlað út. Til þess, breyt bara linuna í tábluna sem þarf er og klikk á til að hefja uppfærslu nýrra gildi.

### VAT Validations

Þegar VAT stutði er á lausnu, mun Ultimate Multisite bæta við einn auðveldanlega fylgja felt í skattarformni, undir feltinu fyrir reikningarsíða. Feltið sýnist bara fyrir viðskiptavili sem eru í EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite mun þá staðfesta VAT-númerinn og ef hann er rétt, verður aðgerðarstefna fyrir tilbæra skattar (reverse charge mechanism) nýtt, og skattartíðningurinn blir settur á 0% á þessum bestelli.
