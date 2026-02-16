---
title: Paghawak ng Buwis
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Pamamahala ng Buwis

May built-in na module para sa pagkolekta ng buwis ang Ultimate Multisite sa aming core plugin, kaya kung kailangan mong mangolekta ng sales taxes sa iyong mga plan, package, at serbisyo, madali mo itong magagawa nang hindi na kailangang mag-install ng anumang add-on.

Para sa mga kumpanyang nasa Europe, nag-aalok kami ng **add-on** na nagdadagdag ng mga tool at feature para mas mahusay na **suportahan ang pagsunod sa VAT**.

Hindi nagfa-file o nagre-remit ng buwis ang Ultimate Multisite sa gobyerno para sa iyo; tinutulungan ka lang naming mangolekta ng tamang buwis sa oras ng transaksyon. **Kailangan mo pa ring mag-remit ng buwis sa sarili mong paraan.**

## Pag-enable ng Pagkolekta ng Buwis

Hindi naka-enable bilang default ang pagkolekta ng buwis. Para i-enable ito, kailangan mong pumunta sa **Ultimate Multisite > Settings > Taxes** at i-toggle para i-enable ang Enable Taxes setting.

![Enable Taxes toggle sa tax settings](/img/config/settings-taxes.png)

### Buwis na hindi kasama vs. Buwis na kasama

Bilang default, lahat ng presyo ng iyong produkto ay tax excluded, ibig sabihin **hindi kasama** ang buwis sa presyo ng produkto. Kung matukoy naming dapat magbayad ng buwis ang isang customer sa isang partikular na pagbili, idadagdag namin ang buwis **sa ibabaw** ng subtotal.

Kung mas gusto mong kasama na ang buwis sa presyo ng iyong produkto, magagawa mo ito sa pamamagitan ng pag-enable ng **Inclusive Tax** setting.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

Huwag kalimutang **i-save** ang mga pagbabagong ginawa mo.

### 

## Paglikha ng Mga Tax Rate

Pagkatapos mong i-enable ang Pagkolekta ng Buwis, kailangan mong gumawa ng mga tax rate para sa mga partikular na lokasyon gamit ang aming tax rates editor.

Maa-access mo ang editor sa pamamagitan ng pag-click sa **Manage Tax Rates** button sa sidebar ng Tax settings page.

![Manage Tax Rates button sa sidebar](/img/config/settings-taxes.png)

Sa tax rates editor page, maaari kang magdagdag ng bagong Tax Rates sa pamamagitan ng pag-click sa **Add new Row** button.

![Tax rates editor na may Add new Row button](/img/config/settings-taxes.png)

Kailangan mong bigyan ng **title** ang bawat tax rate (ginagamit sa mga invoice). Pagkatapos ay maaari mong piliin ang **country** (kinakailangan), ang **state,** at ang **city** (parehong opsyonal) kung saan sisingilin ang buwis na ito. Panghuli, idagdag ang **tax rate sa porsyento**.

### Mga Tax Category

Maaari ka ring gumawa ng maraming Tax Category, para magdagdag ng iba't ibang tax rate para sa iba't ibang uri ng produkto.

I-click ang **Add new Tax Category**, pagkatapos ay isulat ang pangalan ng iyong category at pindutin ang **Create**.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Paggawa ng bagong tax category](/img/config/settings-taxes.png)

Para mag-browse sa mga category, i-click ang **Switch** at piliin ang category kung saan mo gustong magdagdag ng bagong buwis.

![Pagpapalit ng mga tax category](/img/config/settings-taxes.png)

![Pagpili ng tax category na titingnan](/img/config/settings-taxes.png)

Maaari mong i-set ang tax category para sa isang partikular na produkto sa pamamagitan ng pagpunta sa **Product edit page** at pagkatapos sa Taxes tab.

![Product taxes tab na may tax category at taxable toggle](/img/config/product-taxes.png)

Sa parehong screen na iyon, maaari mong i-toggle off ang **Is Taxable?** toggle para ipaalam sa Ultimate Multisite na hindi dapat mangolekta ng buwis sa partikular na produktong iyon.

## Suporta para sa European VAT

Gaya ng nabanggit kanina, mayroon kaming add-on na available para sa mga customer sa EU na may mga karagdagang kinakailangan dahil sa mga regulasyon ng European VAT.

Nakakatulong ang aming mga VAT tool sa ilang mahahalagang bagay:

  * Madaling pag-load ng EU VAT rates;

  * Pagkolekta at pag-validate ng VAT Number - at reverse charging para sa mga entity na exempt sa VAT (tulad ng mga kumpanyang may valid na VAT number);

Para i-install ang add-on na iyon, pumunta sa **Ultimate Multisite > Settings** at pagkatapos ay i-click ang **Check our Add-ons** sidebar link.

![Settings page na may add-ons sidebar link](/img/config/settings-taxes.png)

Ire-redirect ka sa aming add-ons page. Doon, maaari mong hanapin ang **Ultimate Multisite VAT add-on** at i-install ito.

![VAT add-on sa add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

Pagkatapos, pumunta sa **Network Admin > Plugins** at i-activate ang add-on na iyon sa buong network.

![Network Activate ang VAT add-on](/img/config/settings-taxes.png)

Kung babalik ka sa **Tax Settings tab**, makikita mo ang mga bagong opsyon na available. I-toggle ang **Enable VAT Support** option para i-enable ang mga bagong VAT tool. Huwag kalimutang **i-save** ang iyong mga setting!

![Enable VAT Support toggle sa tax settings](/img/config/settings-taxes.png)

### Pag-pull ng VAT Tax Rates

Isa sa mga tool na idinaragdag ng aming integration ay ang kakayahang i-load ang mga tax rate para sa mga EU member state. Magagawa ito sa pamamagitan ng pagbisita sa tax rates editor page pagkatapos i-enable ang EU VAT support.

Sa ibaba ng page, makikita mo ang mga VAT pulling option. Ang pagpili ng rate type at pag-click sa **Update EU VAT Rates** button ay magpu-pull at awtomatikong magpo-populate sa table ng mga tax rate para sa bawat EU member state. Pagkatapos, kailangan mo na lang itong i-save.

### ![VAT rates pulling options na may Update EU VAT Rates button](/img/config/settings-taxes.png)

Maaari mo ring i-edit ang mga value pagkatapos i-pull ang mga ito. Para gawin ito, i-edit lang ang linya ng table na kailangan mo at i-click para i-save ang mga bagong value.

### VAT Validation

Kapag naka-enable ang VAT support, magdadagdag ang Ultimate Multisite ng karagdagang field sa checkout form, sa ibaba ng billing address field. Lalabas lang ang field para sa mga customer na nasa EU.

![VAT number field sa checkout form](/img/config/settings-taxes.png)

Ive-validate ng Ultimate Multisite ang VAT Number at kung lumabas itong valid, ia-apply ang reverse charge mechanism at ise-set sa 0% ang tax rate sa order na iyon.
