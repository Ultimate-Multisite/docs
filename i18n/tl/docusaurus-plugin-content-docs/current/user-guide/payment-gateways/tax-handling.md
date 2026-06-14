---
title: Paghawak ng Buwis
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Paghawak ng Buwis (Tax Handling)

May built-in na module ang Ultimate Multisite para sa pangongolekta ng buwis sa loob mismo ng core plugin namin. Kaya kung kailangan mo ng kolektahin ang sales taxes sa iyong mga plano, package, at serbisyo, madali mo itong magagawa nang hindi na kailangang mag-install ng anumang add-ons.

Para sa mga kumpanyang nasa Europa, nag-aalok kami ng isang **add-on** na nagdaragdag ng mga tool at feature para mas mapalakas ang pagsunod sa VAT compliance.

Hindi nagfafile o nagpapadala ng buwis ang Ultimate Multisite para sa iyo sa gobyerno; tinutulungan lang namin kayong kolektahin ang tamang buwis sa oras ng transaksyon. **Kailangan mo pa ring magbayad ng buwis nang sarili mo.**

## Pag-enable ng Tax Collection

Hindi ito naka-enable nang default. Para ma-enable ito, kailangan mong pumunta sa **Ultimate Multisite > Settings > Taxes** at i-toggle ang Enable Taxes setting para i-on ito.

![Enable Taxes toggle at itaas ng tax settings page](/img/config/settings-taxes-enable.png)

Narito ang buong tingin ng tax settings page:

![Tax settings full page](/img/config/settings-taxes-full.png)

Maaari mo ring tingnan ang mga tax setting para sa indibidwal na produkto:

![Tax settings for products](/img/config/settings-taxes.png)

### Tax excluded vs. Tax included

Sa default, lahat ng presyo ng iyong produkto ay hindi kasama ang buwis (tax excluded), ibig sabihin, **hindi kasama** ang buwis sa presyo ng produkto. Kung natukoy namin na dapat magbayad ang customer ng buwis sa isang partikular na pagbili, idadagdag namin ang mga buwis **sa itaas** ng subtotal.

Kung mas gusto mong isama ang buwis sa presyo ng iyong produkto, maaari mo itong gawin sa pamamagitan ng pag-enable ng Inclusive Tax setting.

![Inclusive Tax toggle row sa ibaba ng Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Huwag kalimutang **i-save** ang mga pagbabago na ginawa mo.

###

## Paglikha ng Tax Rates

Pagkatapos mong i-enable ang Tax Collection, kailangan mo nang gumawa ng tax rates para sa mga partikular na lokasyon gamit ang ating tax rates editor.

Maaari mong ma-access ang editor sa pamamagitan ng pag-click sa button na **Manage Tax Rates** sa sidebar ng tax settings page.

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Sa tax rates editor page, maaari kang magdagdag ng mga bagong Tax Rate sa pamamagitan ng pag-click sa button na **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Kailangan mong bigyan ang bawat tax rate ng **title** (ginagamit sa mga invoice). Pagkatapos, maaari mong piliin ang **country** (kinakailangan), ang **state**, at ang **city** (parehong optional) kung saan ito ipapataw na buwis. Panghuli, idagdag ang **tax rate in percents**.

### Tax Categories

Maaari ka ring gumawa ng maraming Tax Category para magdagdag ng iba't ibang tax rates para sa iba't ibang uri ng produkto.

I-click ang **Add new Tax Category**, pagkatapos ay isulat ang pangalan ng iyong category at pindutin ang **Create**.

![Add new Tax Category button at itaas ng tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field sa create category modal](/img/config/tax-categories-create-modal.png)

Para maghanap ng mga categories, i-click ang **Switch** at piliin ang category kung saan mo gustong magdagdag ng mga bagong buwis.

![Switch dropdown button para palitan sa pagitan ng tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown na nagpapakita ng mga available na categories](/img/config/tax-categories-select.png)

Maaari mong itakda ang tax category para sa isang partikular na produkto sa pamamagitan ng pagpunta sa **Product edit page** at pagkatapos ay sa Taxes tab.

![Product taxes tab na may tax category at taxable toggle](/img/config/product-taxes.png)

Sa parehong screen na iyon, maaari mong i-toggle off ang **Is Taxable?** toggle para ipaalam sa Ultimate Multisite na hindi dapat kumuha ng buwis sa ibinigay na produkto.

## European VAT Support

Gaya ng nabanggit ko kanina, mayroon tayong add-on para sa mga customer sa EU na may dagdag na pangangailangan dahil sa mga regulasyon ng European VAT.

Ang mga tool namin para sa VAT ay nakakatulong sa ilang mahahalagang bagay:

  * Madaling pag-load ng mga rate ng EU VAT;

  * Pangongolekta at pagpapatunay ng VAT Number - at reverse charging para sa mga entidad na exempt sa VAT (tulad ng mga kumpanyang may valid VAT numbers);

Para i-install ang add-on na iyan, pumunta ka sa **Ultimate Multisite > Settings** at pagkatapos ay i-click ang link sa sidebar na **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Maaaring ma-redirect ka sa aming add-ons page. Doon, maaari mong hanapin ang **Ultimate Multisite VAT add-on** at i-install ito.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Pagkatapos, pumunta ka sa **Network Admin > Plugins** at i-activate ang add-on na iyon sa buong network.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kung babalik ka sa **Tax Settings tab**, makikita mo ang mga bagong opsyon na available. I-toggle ang opsyong **Enable VAT Support** para i-enable ang mga bagong tool ng VAT. Huwag kalimutang **i-save** ang iyong settings!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pagkuha ng mga Rate ng VAT

Isa sa mga tool na idinadagdag ng aming integration ay ang kakayahang mag-load ng mga tax rate para sa mga miyembro ng EU. Maaari itong gawin sa pamamagitan ng pagbisita sa tax rates editor page pagkatapos i-enable ang EU VAT support.

Sa ibaba ng pahina, makikita mo ang mga opsyon para sa pagkuha ng VAT (Value Added Tax). Kapag pinili mo ang uri ng rate at pinindot ang **Update EU VAT Rates** button, awtomatikong lalabas at mapupunan nito ang table ng mga tax rate para sa bawat miyembro ng EU. Pagkatapos, kailangan mo lang itong i-save.

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

Maaari mo ring baguhin ang mga halaga pagkatapos mong kunin ito. Para gawin ito, i-edit lang ang linya ng table na kailangan mo at pindutin para i-save ang mga bagong halaga.

### VAT Validation

Kapag naka-enable ang suporta sa VAT, magdaragdag ang Ultimate Multisite ng karagdagang field sa checkout form, sa ibaba ng billing address field. Ang field na ito ay lalabas lamang para sa mga customer na nasa EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Pagkatapos, i-validate ng Ultimate Multisite ang VAT Number at kung magiging balido ito, ipapatupad ang reverse charge mechanism at itatakda ang tax rate sa 0% para sa order na iyon.
