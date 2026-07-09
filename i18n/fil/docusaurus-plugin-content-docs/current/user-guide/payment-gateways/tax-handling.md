---
title: Pangangasiwa ng Buwis
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Pamamahala ng Buwis

Ang Ultimate Multisite ay may module para sa pagkolekta ng buwis na built-in sa aming core plugin, kaya kung kailangan mong mangolekta ng sales tax sa iyong mga plan, package, at serbisyo, madali mo itong magagawa nang hindi kinakailangang mag-install ng anumang add-on.

Para sa mga kumpanyang matatagpuan sa Europa, nag-aalok kami ng **add-on** na nagdaragdag ng mga tool at feature para mas mahusay na **suportahan ang pagsunod sa VAT**.

Hindi naghahain o nagbabayad ang Ultimate Multisite ng mga buwis sa pamahalaan sa ngalan mo; tinutulungan ka lang naming mangolekta ng naaangkop na mga buwis sa oras ng transaksyon. **Kakailanganin mo pa ring magbayad ng mga buwis nang mag-isa.**

## Pag-enable ng Pagkolekta ng Buwis

Hindi naka-enable ang pagkolekta ng buwis bilang default. Para i-enable ito, kailangan mong pumunta sa **Ultimate Multisite > Mga Setting > Mga Buwis** at i-toggle para i-enable ang setting na I-enable ang Mga Buwis.

![Toggle para I-enable ang Mga Buwis sa itaas ng pahina ng mga setting ng Buwis](/img/config/settings-taxes-enable.png)

Narito ang buong view ng pahina ng mga setting ng buwis:

![Buong pahina ng mga setting ng buwis](/img/config/settings-taxes-full.png)

Maaari mo ring tingnan ang mga setting ng buwis para sa mga indibidwal na produkto:

![Mga setting ng buwis para sa mga produkto](/img/config/settings-taxes.png)

### Hindi kasama ang buwis vs. kasama ang buwis

Bilang default, lahat ng presyo ng iyong produkto ay hindi kasama ang buwis, ibig sabihin, ang mga buwis ay **hindi kasama** sa presyo ng produkto. Kung matutukoy namin na dapat magbayad ng buwis ang isang customer sa isang partikular na pagbili, idaragdag namin ang mga buwis **sa ibabaw** ng subtotal.

Kung mas gusto mong kasama ang mga buwis sa presyo ng iyong produkto, magagawa mo ito sa pamamagitan ng pag-enable sa setting na **Inclusive Tax**.

![Row ng toggle ng Inclusive Tax sa ibaba ng setting na I-enable ang Mga Buwis](/img/config/settings-taxes-inclusive.png)

Huwag kalimutang **i-save** ang mga pagbabagong ginawa mo.

###

## Paglikha ng Mga Rate ng Buwis

Pagkatapos mong i-enable ang Pagkolekta ng Buwis, kakailanganin mong gumawa ng mga rate ng buwis para sa mga partikular na lokasyon gamit ang aming editor ng mga rate ng buwis.

Maaari mong ma-access ang editor sa pamamagitan ng pag-click sa button na **Pamahalaan ang Mga Rate ng Buwis** sa sidebar ng pahina ng mga setting ng Buwis.

![Link na Pamahalaan ang Mga Rate ng Buwis sa panel ng Mga Rate ng Buwis sa pahina ng mga setting](/img/config/settings-taxes-manage-rates.png)

Sa pahina ng editor ng mga rate ng buwis, maaari kang magdagdag ng bagong Mga Rate ng Buwis sa pamamagitan ng pag-click sa button na **Magdagdag ng bagong Row**.

![Talahanayan ng editor ng mga rate ng buwis na may button na Magdagdag ng bagong Row sa itaas](/img/config/tax-rates-editor.png)

Kakailanganin mong bigyan ang bawat rate ng buwis ng **pamagat** (ginagamit sa mga invoice). Pagkatapos ay maaari mong piliin ang **bansa** (kinakailangan), ang **estado,** at ang **lungsod** (parehong opsyonal) kung saan sisingilin ang buwis na ito. Panghuli, idagdag ang **rate ng buwis sa porsyento**.

### Mga Kategorya ng Buwis

Maaari ka ring gumawa ng maraming Kategorya ng Buwis, para magdagdag ng iba't ibang rate ng buwis para sa iba't ibang uri ng produkto.

I-click ang **Magdagdag ng bagong Kategorya ng Buwis** , pagkatapos ay isulat ang pangalan ng iyong kategorya at pindutin ang **Lumikha**.

![Button na Magdagdag ng bagong Kategorya ng Buwis sa itaas ng editor ng mga rate ng buwis](/img/config/tax-categories-add.png)

![Input field ng Pangalan ng Kategorya ng Buwis sa modal ng paggawa ng kategorya](/img/config/tax-categories-create-modal.png)

Para mag-browse sa mga kategorya, i-click ang **Lumipat** at piliin ang kategoryang gusto mong dagdagan ng mga bagong buwis.

![Dropdown button na Lumipat para magpalit sa pagitan ng mga kategorya ng buwis](/img/config/tax-categories-switch.png)

![Dropdown ng tagapili ng kategorya ng buwis na nagpapakita ng mga available na kategorya](/img/config/tax-categories-select.png)

Maaari mong itakda ang kategorya ng buwis para sa isang partikular na produkto sa pamamagitan ng pagpunta sa **pahina ng pag-edit ng Produkto** at pagkatapos ay sa tab na Mga Buwis.

![Tab ng mga buwis ng produkto na may kategorya ng buwis at taxable toggle](/img/config/product-taxes.png)

Sa parehong screen na iyon, maaari mong i-toggle off ang toggle na **Taxable ba?** para ipaalam sa Ultimate Multisite na hindi ito dapat mangolekta ng mga buwis sa partikular na produktong iyon.

## Suporta sa European VAT

Gaya ng nabanggit kanina, mayroon kaming add-on na available para sa customer sa EU na may karagdagang mga kinakailangan dahil sa mga regulasyon ng European VAT.

Nakakatulong ang aming mga tool sa VAT sa ilang mahahalagang bagay:

  * Madaling pag-load ng mga rate ng EU VAT;

  * Pagkolekta at validation ng VAT Number - at reverse charging para sa mga entity na exempt sa VAT (tulad ng mga kumpanyang may valid na VAT number);

Para i-install ang add-on na iyon, pumunta sa **Ultimate Multisite > Mga Setting** at pagkatapos ay i-click ang link sa sidebar na **Tingnan ang aming mga Add-on**.

![Sidebar ng pahina ng mga setting na may link na Tingnan ang aming mga Add-on](/img/config/settings-taxes-addons-link.png)

Ire-redirect ka sa aming pahina ng mga add-on. Doon, maaari mong hanapin ang **Ultimate Multisite VAT add-on** at i-install ito.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Pagkatapos, pumunta sa **Network Admin > Mga Plugin** at i-activate ang add-on na iyon sa buong network.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Kung babalik ka sa **tab ng Mga Setting ng Buwis** , makakakita ka ng mga bagong opsyon na available. I-toggle ang opsyong **I-enable ang Suporta sa VAT** para i-enable ang mga bagong tool sa VAT. Huwag kalimutang **i-save** ang iyong mga setting!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Pagkuha ng Mga Rate ng Buwis sa VAT

Isa sa mga tool na idinaragdag ng aming integration ay ang kakayahang i-load ang mga rate ng buwis para sa mga estado na kasapi ng EU. Magagawa iyon sa pamamagitan ng pagbisita sa pahina ng editor ng mga rate ng buwis pagkatapos i-enable ang suporta sa EU VAT.

Sa ibaba ng pahina, makikita mo ang mga opsyon sa pagkuha ng VAT. Ang pagpili ng uri ng rate at pag-click sa button na **I-update ang Mga Rate ng EU VAT** ay kukuha at awtomatikong maglalagay sa talahanayan ng mga rate ng buwis para sa bawat estado na kasapi ng EU. Pagkatapos, kailangan mo na lang itong i-save.

![Button na I-update ang Mga Rate ng EU VAT sa ibaba ng editor ng mga rate ng buwis](/img/config/tax-rates-vat-pull.png)

Maaari mo ring i-edit ang mga halaga pagkatapos kunin ang mga ito. Para gawin ito, i-edit lang ang linya ng talahanayan na kailangan mo at i-click para i-save ang mga bagong halaga.

### Validation ng VAT

Kapag naka-enable ang suporta sa VAT, magdaragdag ang Ultimate Multisite ng karagdagang field sa form ng pag-checkout, sa ibaba ng field ng billing address. Lalabas lang ang field para sa mga customer na matatagpuan sa EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Pagkatapos, ibe-validate ng Ultimate Multisite ang VAT Number at kung bumalik ito bilang balido, ilalapat ang reverse charge mechanism at itatakda ang tax rate sa 0% sa order na iyon.
