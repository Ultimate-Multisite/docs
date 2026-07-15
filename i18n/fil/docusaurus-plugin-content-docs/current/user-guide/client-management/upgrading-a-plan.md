---
title: Pag-upgrade ng Plano
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Pag-upgrade ng Plano (v2)

_**MAHALAGANG TALA: Tumutukoy ang artikulong ito sa Ultimate Multisite version 2.x.**_

Maaaring i-upgrade ng iyong mga customer ang kanilang mga plano anumang oras. Maaari silang mag-upgrade sa ibang plano o bumili ng anumang karagdagang mga serbisyo o package na iniaalok mo sa iyong network.

Sa tutorial na ito, tatalakayin natin kung paano nila mai-upgrade ang kanilang plano at kung ano ang mangyayari pagkatapos ng proseso ng pag-upgrade.

Para i-upgrade ang kanilang plano, dapat buksan ng iyong mga customer ang kanilang Dashboard at pumunta sa pahinang **Account**.

![Dashboard ng subsite ng customer na nakikita ang link ng menu na Account](/img/account-page/account-menu.png)

Sa pahina ng Account, ipapakita sa kanila ang kanilang kasalukuyang pagiging miyembro at ang planong kaugnay nito. Para mag-upgrade sa ibang plano, kailangan nilang i-click ang **Baguhin** sa kanang itaas na sulok ng seksyong **Iyong Pagiging Miyembro**.

![Card na Iyong Pagiging Miyembro sa pahina ng Account na may button na Baguhin](/img/account-page/membership-change-button.png)

Ire-redirect sila sa isang form ng pag-checkout kung saan ipapakita ang lahat ng available na plano.

Makikita rin nila ang **mga serbisyo at package na available para sa kanilang kasalukuyang plano** , kung sakaling gusto lang nilang bumili ng partikular na serbisyo o package (tulad ng walang limitasyong mga pagbisita o disk space sa halimbawa natin dito), at hindi i-upgrade ang plano.

![Tagapili ng upgrade na nagpapakita ng mga available na plano at package sa panig ng customer](/img/account-page/upgrade-picker.png)

Pagkatapos nilang piliin ang produktong gusto nilang bilhin, makikita nila kung magkano ang kailangan nilang bayaran ngayon - hindi kasama ang anumang umiiral na credit - at kung magkano ang sisingilin sa kanila sa susunod na petsa ng billing.

Karaniwan, kung ang produkto ay ibang plano at ang bayad ay gagawin sa pagitan ng singil sa pagiging miyembro, makakatanggap sila ng credit para sa halagang binayaran sa unang plano.

![Buod ng bayad sa upgrade na nagpapakita ng inilapat na credit at halaga sa susunod na billing](/img/account-page/upgrade-summary.png)

Kung pipili sila ng plano o package na walang babaguhin mula sa kasalukuyang suskripsyon, makakakita sila ng mensaheng nagpapaliwanag nito.

![Abiso kapag hindi binabago ng napiling plano ang suskripsyon](/img/account-page/upgrade-no-change.png)

Pagkatapos makumpleto ang pag-checkout, idaragdag ang (mga) bagong produkto sa account ng iyong mga customer at agad na idaragdag dito ang lahat ng limitasyon o feature ng (mga) bagong produkto: mga pagbisita, disk space, mga post, atbp...

##

##

## Mga Path ng Pag-upgrade at Pag-downgrade {#upgrade-and-downgrade-paths}

Sa bawat isa sa iyong mga produkto, magkakaroon ka ng tab na **Mga Pag-upgrade at Pag-downgrade**. Ang unang opsyon sa tab na iyon ay isang field na tinatawag na **Grupo ng Plano**.

Ang **mga grupo ng plano** ang nagbibigay-daan sa iyo na ipaalam sa Ultimate Multisite na ang ilang partikular na plano ay kabilang sa parehong "pamilya", at samakatuwid ay dapat gamitin upang bumuo ng mga opsyon sa path ng pag-upgrade/pag-downgrade.

![Tab na Mga Pag-upgrade at Pag-downgrade sa pag-edit ng produkto na may field na Grupo ng Plano](/img/config/product-upgrades-plan-group.png)

Halimbawa, mayroon kang available na **Libreng plano** , isang **Basic Plan** at isang **Premium Plan**. Gusto mong ang mga user na naka-subscribe sa ilalim ng **Free Plan** ay makapag-upgrade lamang sa **Premium Plan** at ayaw mong makita nila ang "Basic Plan" bilang opsyon sa pag-upgrade. Ang kailangan mo lang gawin ay italaga ang parehong pangalan ng grupo ng plano para sa parehong Free at Premium na mga plano gaya ng ipinapakita sa mga screenshot sa ibaba.

![Pahina ng produkto ng Free Plan na may nakatalagang grupo ng plano na High End](/img/config/product-upgrades-free.png)

![Pahina ng produkto ng Premium Plan na may nakatalagang grupo ng plano na High End](/img/config/product-upgrades-premium.png)

Ang dapat nitong gawin ay ipaalam sa Ultimate Multisite na mayroong "pamilya" ng mga plano sa network na tinatawag na **High End**. Kapag nag-aalok ng mga upgrade o downgrade, tanging mga plano mula sa parehong pamilya ang ipapakita bilang opsyon para sa user.
