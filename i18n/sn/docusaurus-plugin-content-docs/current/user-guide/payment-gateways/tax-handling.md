---
title: Kugadzirisa Zaka
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Kutiwe Kwotakisa Zaka (Tax Handling)

Ultimate Multisite inenge yakati ye plugin yedu inenge yakati kune chivimbo chekuti kunge kuita zaka dzinogona pa plans, packages ne services dzako, unogona kunoita zvakanaka pane kuti usazivikanwa kuita add-ons.

Kune makomborero ekurimo Europe, tinotenderera **add-on** inenge inenge ine zvirimo nezvinhu zvakawanda kuti zvinenge zvichibatsira kudzidzisa VAT (Value Added Tax).

Ultimate Multisite haunenge mupfura kana kuita remittance dzakaaka paunenge wese. Tinenge tinenge tichibatsira kunge kuita zaka dzinogona paunenge unenge uchitenda panguva yekuti transaction ine. **Unofanira kuteenda zaka dzinogona wako wechokwadi.**

## Kuita Zaka Dzinogona (Enabling Tax Collection)

Kuti zaka dzinogona dzine zvichibvumira pane, unofanira kuenda ku **Ultimate Multisite > Settings > Taxes** uye kuita Enable Taxes seting.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Iyi ndiyo nzira yakawanda yekuti onge kuona settings dzaka dzinogona:

![Tax settings full page](/img/config/settings-taxes-full.png)

Unogonawo kunge kuona settings dzakaaka paunenge unenge uchitenda panguva yekuti products dzako dzine zaka.

![Tax settings for products](/img/config/settings-taxes.png)

### Zaka dzinogona dzakave neZaka dzinogona (Tax excluded vs. Tax included)

By default, zvose zvinhu zveprices dzako dzine zaka dzinogona dzakave neZaka dzinogona, izvi rinoreva kuti zaka **hanenge dziri kuita** muprice ya product. Kana tikagadzira kuti munhu anofanira kuita zaka pa transaction yakati, tinenge tichingira zaka **pamwe** nemashoko ekubatsirwa (subtotal).

Kana unoda kuti zaka dzinogona dzine zvakave neZaka dzinogona muprice ya product yako, unogona kunoita izvi nekuita Enable Inclusive Tax setting.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Usazovikanwa kuita **save** (kufamba) zvinenge zvakagadzirwa.

###

## Kuita Zaka Dzinogona (Creating Tax Rates)

Apana unenge wakaita Enable Tax Collection, unofanira kuita rates dzaka dzinogona pa locations dzakasiyana-siyana nekuti unenge uchitenda zaka dzine zvinhu pane tax dzako mu tax rates editor.

Unogona unogona wekuti unogona kuenda kune editori nekuti unokuti button **Manage Tax Rates** uyu sidebar ye page ya Tax settings.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ku page ya tax rates editor, unogona kuenda kune Add new Row neku kuita irowu dzinotsi dzine **Add new Row** button.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Unoda kuipa kila tax rate **title** (inogona kuita kune invoices). Ndapana, unogona kutenda **country** (unoda), **state**, uye **city** (zvinogone) inozivikanwa kuti iye tax izvi dzichigadzirwa. Hekuti zvakare, shandisa **tax rate in percents**.

### Tax Categories

Unogona kuita ookikuru dze Tax Categories, kuti uipa rates dzakasiyana-siyana kune zvinoda dzinogona (products).

Chinjisa kuti **Add new Tax Category**, ndipo unenge ukuti upere category yako nekuita **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kuti uonde kuita browsing dze categories, chinjisa **Switch** uye chine select category unoda kuipa rates dzakasiyana-siyana.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Unogona kuita set tax category kune product yakati nekuenda kune **Product edit page** uye ndipo kune Taxes tab.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Mune screen yese, unogona kuita off **Is Taxable?** toggle kuti Ultimate Multisite inoziva kuti haizvi dzinoda kutora taxes kune product iye.

## European VAT Support

Kufanenge kuitika, tiriine kune add-on inotiriwe kuti vana vekuti vana vachine zvinoda zvinhu zvakawanda nekuda kweregalendero (VAT) ya Europa.

Maitiro ekuti VAT tools dzinotenderera zvinhu zvakakosha:

  * Kuti utore zvinhu zveVAT ya EU zvinhu,
  * Kutora nekuona VAT Number uye kuona kuti vana vanovaka (reverse charging) kune vanhu vanoita zvinotevera VAT (kune vanhu vanoita zvinotevera VAT, se kuratidza vanhu vanoita zvinotevera VAT).

Kuti utore add-on iye, ndonga kuenda ku **Ultimate Multisite > Settings** uye ndonga kutaura link ya sidebar inoti **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Utaonekwa munyore wenyika wenyu we add-on. Pamusoro, unogona kutsvaga **Ultimate Multisite VAT add-on** uye utore iye.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Zvakanaka, ndonga kuenda ku **Network Admin > Plugins** uye tsanidza iye network-wide (kune nzvimbo yese).

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kana uri kurema ku **Tax Settings tab**, uona zvinhu zvinotevera. Tsanidza option ya **Enable VAT Support** kuti utore VAT tools dzakare. Usi ngausina **save** settings yako!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Kuti unzire (Pulling on) ku Rates dzeVAT

Moyo we tools inotendererwa neintegration yedu ndiri kutora rates dzeVAT dzemakore anonyanya. Izvi zvichitwa nekutenda page ya tax rates editor pangu pamusoro pekuita VAT support ya EU.

Muviri wechivho chekuche chakanangwa, muna kuona zvinovhu zveVAT (Value Added Tax). Kana uchigadzirisa uri wote (rate type) uye uingava uchikira button **Update EU VAT Rates**, izvi zvichakupa uye zvichakabatsira kutaura table nekuita rates dzemukati weEU. Ndiyo, unofanira kurasa chete.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Unogona kunge kuenda kutaura zvinhu panguva dzinovhu dzakubva. Kuti urambe iiri, ndichida kuti uedze line yekuita rudo raunoda uye uchikire kuti urase zvinhu zvinobva.

### VAT Validation

Kana support yeVAT inenge inogona kuenda, Ultimate Multisite ichakira field ingava inoshandiswa munzira dzekutaurira (checkout form), panguva dzinovhu dzemabasa (billing address field). Field iyi ichakupa chete kunyange vanhu vachiti vachipa EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ichakira VAT Number uye kana inobva yakaita kuti iwe iwe ine zvinhu zvakanaka, mechanism yereverse charge inogadzirwa uye rate yaVAT inogadzirwa kuva 0% pamusoro peorder iyi.
