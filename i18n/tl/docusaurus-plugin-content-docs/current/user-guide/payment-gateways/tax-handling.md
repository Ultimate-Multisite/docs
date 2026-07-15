---
title: Pamamahala ng Buwis
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Pangangasiwa ng Buwis

May module para sa pagkolekta ng buwis ang Ultimate Multisite na nakapaloob sa aming pangunahing plugin, kaya kung kailangan mong mangolekta ng mga buwis sa benta sa iyong mga plano, package at serbisyo, madali mo itong magagawa nang hindi kinakailangang mag-install ng anumang mga add-on.

Para sa mga kumpanyang matatagpuan sa Europe, nag-aalok kami ng **add-on** na nagdaragdag ng mga tool at feature upang mas mahusay na **suportahan ang VAT** compliance.

Hindi naghahain o nagre-remit ang Ultimate Multisite ng mga buwis sa gobyerno sa ngalan mo; tinutulungan ka lang naming mangolekta ng naaangkop na mga buwis sa oras ng transaksyon. **Kakailanganin mo pa ring mag-remit ng mga buwis nang mag-isa.**

## Pag-enable ng Pagkolekta ng Buwis {#enabling-tax-collection}

Hindi naka-enable bilang default ang pagkolekta ng buwis. Upang i-enable ito, kailangan mong pumunta sa **Ultimate Multisite > Mga Setting > Mga Buwis** at i-toggle upang i-enable ang setting na Enable Taxes.

![Toggle ng Enable Taxes sa itaas ng pahina ng mga setting ng Buwis](/img/config/settings-taxes-enable.png)

Narito ang buong view ng pahina ng mga setting ng buwis:

![Buong pahina ng mga setting ng buwis](/img/config/settings-taxes-full.png)

Maaari mo ring tingnan ang mga setting ng buwis para sa mga indibidwal na produkto:

![Mga setting ng buwis para sa mga produkto](/img/config/settings-taxes.png)

### Hindi kasama ang buwis vs. Kasama ang buwis {#tax-excluded-vs-tax-included}

Bilang default, hindi kasama ang buwis sa lahat ng presyo ng iyong produkto, ibig sabihin ay **hindi kasama** ang mga buwis sa presyo ng produkto. Kung matukoy naming dapat magbayad ng buwis ang isang customer sa isang partikular na pagbili, idaragdag namin ang mga buwis **sa ibabaw** ng subtotal.

Kung mas gusto mong kasama ang mga buwis sa presyo ng iyong produkto, magagawa mo ito sa pamamagitan ng pag-enable sa setting na **Inclusive Tax**.

![Row ng toggle ng Inclusive Tax sa ibaba ng setting na Enable Taxes](/img/config/settings-taxes-inclusive.png)

Huwag kalimutang **i-save** ang mga pagbabagong ginawa mo.

###

## Paglikha ng mga Rate ng Buwis {#creating-tax-rates}

Pagkatapos mong i-enable ang Pagkolekta ng Buwis, kakailanganin mong gumawa ng mga rate ng buwis para sa mga partikular na lokasyon gamit ang aming editor ng mga rate ng buwis.

Maa-access mo ang editor sa pamamagitan ng pag-click sa button na **Manage Tax Rates** sa sidebar ng pahina ng mga setting ng Buwis.

![Link na Manage Tax Rates sa panel ng Tax Rates sa pahina ng mga setting](/img/config/settings-taxes-manage-rates.png)

Sa pahina ng editor ng mga rate ng buwis, maaari kang magdagdag ng mga bagong Rate ng Buwis sa pamamagitan ng pag-click sa button na **Add new Row**.

![Talahanayan ng editor ng mga rate ng buwis na may button na Add new Row sa itaas](/img/config/tax-rates-editor.png)

Kakailanganin mong bigyan ang bawat rate ng buwis ng **pamagat** (ginagamit sa mga invoice). Pagkatapos ay maaari mong piliin ang **bansa** (kinakailangan), ang **estado,** at ang **lungsod** (parehong opsyonal) kung saan sisingilin ang buwis na ito. Panghuli, idagdag ang **rate ng buwis sa porsiyento**.

### Mga Kategorya ng Buwis {#tax-categories}

Maaari ka ring gumawa ng maraming Kategorya ng Buwis, upang magdagdag ng iba't ibang rate ng buwis para sa iba't ibang uri ng produkto.

I-click ang **Add new Tax Category** , pagkatapos ay isulat ang pangalan ng iyong kategorya at pindutin ang **Create**.

![Button na Add new Tax Category sa itaas ng editor ng mga rate ng buwis](/img/config/tax-categories-add.png)

![Input field ng Tax Category Name sa modal ng paggawa ng kategorya](/img/config/tax-categories-create-modal.png)

Upang mag-browse sa mga kategorya, i-click ang **Switch** at piliin ang kategoryang gusto mong dagdagan ng mga bagong buwis.

![Dropdown button na Switch upang magpalit sa pagitan ng mga kategorya ng buwis](/img/config/tax-categories-switch.png)

![Dropdown ng tagapili ng kategorya ng buwis na nagpapakita ng mga available na kategorya](/img/config/tax-categories-select.png)

Maaari mong itakda ang kategorya ng buwis para sa isang partikular na produkto sa pamamagitan ng pagpunta sa **Pahina ng pag-edit ng produkto** at pagkatapos ay sa tab na Mga Buwis.

![Tab ng buwis ng produkto na may kategorya ng buwis at taxable toggle](/img/config/product-taxes.png)

Sa parehong screen na iyon, maaari mong i-off ang toggle na **Is Taxable?** upang ipaalam sa Ultimate Multisite na hindi ito dapat mangolekta ng mga buwis sa partikular na produktong iyon.

## Suporta sa European VAT {#european-vat-support}

Gaya ng nabanggit dati, mayroon kaming add-on na available para sa mga customer sa EU na may karagdagang mga kinakailangan dahil sa mga regulasyon ng European VAT.

Tumutulong ang aming mga tool sa VAT sa ilang mahahalagang bagay:

  * Madaling pag-load ng mga rate ng EU VAT;

  * Pagkolekta at validation ng VAT Number - at reverse charging para sa mga entity na exempt sa VAT (tulad ng mga kumpanyang may valid na VAT number);

Upang i-install ang add-on na iyon, pumunta sa **Ultimate Multisite > Mga Setting** at pagkatapos ay i-click ang link sa sidebar na **Tingnan ang aming mga Add-on**.

![Sidebar ng pahina ng mga setting na may link na Tingnan ang aming mga Add-on](/img/config/settings-taxes-addons-link.png)

Ire-redirect ka sa aming pahina ng mga add-on. Doon, maaari mong hanapin ang **Ultimate Multisite VAT add-on** at i-install ito.

<!-- Hindi available ang screenshot: tile ng VAT add-on sa pahina ng mga Add-on -->

<!-- Hindi available ang screenshot: dialog na Install Now ng VAT add-on -->

Pagkatapos, pumunta sa **Network Admin > Mga Plugin** at i-activate ang add-on na iyon sa buong network.

<!-- Hindi available ang screenshot: aksyong Network Activate para sa VAT add-on sa pahina ng Plugins -->

Kung babalik ka sa **tab ng Mga Setting ng Buwis** , makakakita ka ng mga bagong opsyong available. I-toggle ang opsyong **Enable VAT Support** upang i-enable ang mga bagong tool sa VAT. Huwag kalimutang **i-save** ang iyong mga setting!

<!-- Hindi available ang screenshot: toggle ng Enable VAT Support sa mga setting ng Buwis pagkatapos ng pag-activate ng add-on -->

### Pagkuha ng mga Rate ng Buwis sa VAT {#pulling-on-vat-tax-rates}

Isa sa mga tool na idinaragdag ng aming integration ay ang kakayahang i-load ang mga rate ng buwis para sa mga estadong kasapi ng EU. Magagawa iyon sa pamamagitan ng pagbisita sa pahina ng editor ng mga rate ng buwis pagkatapos i-enable ang suporta sa EU VAT.

Sa ibaba ng pahina, makikita mo ang mga opsyon sa pagkuha ng VAT. Ang pagpili ng uri ng rate at pag-click sa button na **Update EU VAT Rates** ay kukuha at awtomatikong pupuno sa talahanayan ng mga rate ng buwis para sa bawat estadong kasapi ng EU. Pagkatapos, kailangan mo na lang itong i-save.

![Button na Update EU VAT Rates sa ibaba ng editor ng mga rate ng buwis](/img/config/tax-rates-vat-pull.png)

Maaari mo ring i-edit ang mga value pagkatapos makuha ang mga ito. Upang gawin ito, i-edit lang ang linya ng talahanayan na kailangan mo at i-click upang i-save ang mga bagong value.

### Validation ng VAT {#vat-validation}

Kapag naka-enable ang suporta sa VAT, magdaragdag ang Ultimate Multisite ng karagdagang field sa form ng checkout, sa ibaba ng field ng billing address. Lalabas lang ang field para sa mga customer na matatagpuan sa EU.

<!-- Hindi available ang screenshot: field ng VAT Number sa frontend checkout form sa ibaba ng billing address -->

Pagkatapos ay ibe-validate ng Ultimate Multisite ang VAT Number at kung bumalik ito bilang balido, ilalapat ang reverse charge mechanism at itatakda sa 0% ang tax rate sa order na iyon.
