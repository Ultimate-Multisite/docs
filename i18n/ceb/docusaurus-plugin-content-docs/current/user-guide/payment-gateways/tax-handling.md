---
title: Pagdumala sa Buwis
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Pag-handle sa Buwis (Tax Handling)

Ang Ultimate Multisite kay naay module para mangolekta og buwis nga naa na sa among core plugin, busa kung kinahanglan nimo magkolekta og sales taxes sa imong mga plano, package, ug serbisyo, dali ra nimo ni buhat bisan wala ka mag-install og mga add-on.

Para sa mga kompanya nga nagpuyo sa Europe, nagtanyag kami og usa ka **add-on** nga nagdadagdag og mga tools ug features para mas maayo ang pagsuporta sa pagsunod sa VAT (Value Added Tax).

Ang Ultimate Multisite dili mag-file o magpadala sa buwis alang kanimo sa gobyerno; tabang lang mi nimo sa pagkolekta sa angay nga buwis sa panahon sa transaksyon. **Kinahanglan gihapon nimo bayaran ang mga buwis mismo.**

## Pag-enable sa Tax Collection

Ang pag-collect og buwis dili aktibo (enabled) sa default. Aron ma-enable kini, kinahanglan ka moadto sa **Ultimate Multisite > Settings > Taxes** ug i-toggle ang Enable Taxes setting para ma-on kini.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ania ang bug-os nga tan-aw sa tax settings page:

![Tax settings full page](/img/config/settings-taxes-full.png)

Mahimo usab nimo tan-awon ang tax settings para sa mga indibidwal nga produkto:

![Tax settings for products](/img/config/settings-taxes.png)

### Tax excluded vs. Tax included

Sa default, tanan imong presyo sa produkto kay wala pa apil og buwis (tax excluded), nga nagpasabot nga ang mga buwis **wala na apil** sa presyo sa produkto. Kung atong mahukman nga kinahanglan bayran sa customer ang buwis sa usa ka pagpalit, aduna mi magdadagdag og buwis **sa ibabaw** sa subtotal.

Kung gusto nimo nga apil na ang mga buwis sa presyo sa imong produkto, pwede nimo kini pinaagi sa pag-enable sa Inclusive Tax setting.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ayaw kalimot **i-save** ang mga kausaban nga imong gihimo.

###

## Paghimo og Tax Rates

Human nimo ma-enable ang Tax Collection, kinahanglan nimo paghimo og tax rates para sa piho nga mga lokasyon gamit ang among tax rates editor.

Mahimo nimo ma-access sa editor pinaagi pag-click sa **Manage Tax Rates** button sa sidebar sa Tax settings page.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Sa tax rates editor page, pwede ka mag-add og bag-ong Tax Rates pinaagi pag-click sa **Add new Row** button.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Kinahanglan nimo hatagan og **title** ang matag tax rate (gamit kini sa mga invoice). Unya pwede ka magpili sa **country** (kinahanglan), ang **state**, ug ang **city** (pareho lang optional) diin kining tax ipawagtang. Sa katapusan, i-add ang **tax rate in percents**.

### Tax Categories

Pwede pud kang maghimo og dagkong mga Tax Categories para magdugang og lain-laing tax rates para sa lain-laing klase sa produkto.

I-click ang **Add new Tax Category**, unya isulat ang ngalan sa imong category ug i-press ang **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Para magtan-aw sa mga categories, i-click ang **Switch** ug piliha ang category diin gusto nimo magdugang og bag-ong mga tax.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Pwede nimong i-set ang tax category para sa usa ka piho nga produkto pinaagi sa pagadto sa **Product edit page** ug unya sa Taxes tab.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Sa parehas nga screen, pwede nimong i-toggle off ang **Is Taxable?** toggle para ipahibalo sa Ultimate Multisite nga dili kini kinahanglan mangolekta og mga tax sa gihatag nga produkto.

## European VAT Support

Gihapon, naa tay add-on para sa mga customer sa EU nga naay dugang requirements tungod sa European VAT regulations.

Ang among VAT tools makatabang sa pipila ka importante nga butang:

  * Sayon nga pag-load sa EU VAT rates;

  * Pagkolekta ug pag-validate sa VAT Number - ug reverse charging para sa mga entidad nga exempt sa VAT (sama sa mga kompanya nga naay balidong VAT numbers);

Para i-install ang add-on, pumunta sa **Ultimate Multisite > Settings** ug dayon i-click ang link sa sidebar nga **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Moad-redirect ka sa among add-ons page. Didto, mahimo nimong pangitaon ang **Ultimate Multisite VAT add-on** ug i-install kini.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Dayon, pumunta sa **Network Admin > Plugins** ug i-activate ang add-on nga maoy network-wide.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kung mobalik ka sa **Tax Settings tab**, makita nimo ang mga bag-ong option. I-toggle ang **Enable VAT Support** option para ma-enable ang bag-ong VAT tools. Ayaw kalimot nga i-**save** ang imong settings!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pagkuha sa VAT Tax Rates

Usa sa mga tool nga gi-add sa among integration mao ang abilidad sa pag-load sa tax rates para sa mga miyembro sa EU. Mahimo kini buhat pinaagi sa pagbisita sa tax rates editor page human ma-enable ninyo ang EU VAT support.

Sa ubos sa pahina, makita nimo ang mga opsyon para sa pagkuha (pull) sa VAT. Pagpili og klase sa rate ug pag-click sa **Update EU VAT Rates** button, awtomatikong mo-pop up ug magpuno sa table sa mga tax rates para sa matag miyembro sa EU. Unya, kinahanglan lang nimo i-save kini.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Mahimo pud nimong usbon ang mga values human nakuha nimo kini. Aron mahimo nimo, basta usbon ang linya sa table nga imong kinahanglan ug i-click para i-save ang bag-ong values.

### VAT Validation

Kung gi-enable ang VAT support, magdadag ang Ultimate Multisite og dugang field sa checkout form, ubos sa billing address field. Ang field ni moabot lang para sa mga customer nga nagpuyo sa EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Dayon, i-validate sa Ultimate Multisite ang VAT Number ug kung kini balik isip valid, ang reverse charge mechanism maaplay ug ang tax rate mahimong itakda sa 0% para sa order nga mao ni.
