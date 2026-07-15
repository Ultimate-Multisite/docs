---
title: Pagpapadala ng mga Email at Broadcast
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Pagpapadala ng mga Email at Broadcast (v2)

_**MAHALAGANG TALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Ang Ultimate Multisite ay may kasamang tampok na magbibigay-daan sa iyong makipag-ugnayan sa iyong mga customer sa pamamagitan ng pagpapadala ng email sa isang tinukoy na user o grupo ng mga user, pati na rin pagpapadala ng mga abiso sa kanilang admin Dashboard upang mag-broadcast ng mga anunsyo

## Magdagdag ng mga abiso ng admin sa Dashboard ng iyong mga customer gamit ang mga Broadcast {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Gamit ang tampok na broadcast ng Ultimate Multisite, maaari kang magdagdag ng **mga abiso ng admin** sa subsite admin Dashboard ng iyong user.

Napakalaking tulong nito kung kailangan mong gumawa ng anunsyo tulad ng pagpapanatili ng sistema o pag-aalok ng mga bagong produkto o serbisyo sa iyong kasalukuyang mga user. Ganito ang magiging hitsura ng abiso ng admin sa Dashboard ng iyong user.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Upang magsimula ng abiso ng admin, pumunta sa iyong network admin Dashboard at sa ilalim ng menu na **Ultimate Multisite**, makikita mo ang opsyong **Mga Broadcast**.

![Pahina ng listahan ng mga Broadcast sa admin ng Ultimate Multisite](/img/admin/broadcasts-list.png)

Maaari mo ring i-edit ang mga kasalukuyang broadcast:

![Interface sa pag-edit ng broadcast](/img/admin/broadcast-edit.png)

Mula sa pahinang ito, i-click ang button na **Magdagdag ng Broadcast** sa itaas.

Ilalabas nito ang modal window na Magdagdag ng broadcast kung saan maaari mong piliin kung anong uri ng broadcast ang nais mong ipadala.

Sige at piliin ang **Mensahe** pagkatapos ay i-click ang button na **Susunod na Hakbang**.

![Modal ng pagdagdag ng broadcast na may napiling opsyong Mensahe](/img/admin/broadcast-add-message.png)

Hihingin sa iyo ng susunod na window ang alinman sa **Target na customer** o **Target na produkto**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Upang maghanap ng user Account o produkto, kailangan mong simulang i-type ang keyword sa loob ng field.

Sa ilalim ng field na **Uri ng mensahe**, maaari mong piliin ang kulay ng abiso. Bibigyang-diin nito ang pagkaapurahan ng iyong mensahe.

Pagkatapos ay maaari mong i-click ang **Susunod na Hakbang**.

![Mga field para sa target na mga customer, target na produkto, at uri ng mensahe para sa isang broadcast na Mensahe](/img/admin/broadcast-message-targets.png)

Sa susunod na window, maaari mong simulang buuin ang iyong mensahe sa pamamagitan ng paglalagay ng paksa at nilalaman/mensahe na nais mong i-broadcast sa mga user.

![Editor ng paksa at nilalaman ng broadcast na mensahe sa hakbang ng pagbubuo](/img/admin/broadcast-edit.png)

Pagkatapos likhain ang iyong mensahe, maaari mo nang pindutin ang button na **Ipadala**.

At iyon na iyon. Dapat agad na lumitaw ang abiso ng admin sa Dashboard ng iyong user.

## Magpadala ng mga email sa iyong mga customer {#send-emails-to-your-customers}

Gamit ang tampok na broadcast ng Ultimate Multisite, maaari kang magpadala ng email sa iyong mga user. May opsyon kang ipadala ang email sa mga partikular na user lamang o mag-target ng partikular na grupo ng user batay sa produkto o plan na naka-subscribe sila.

Upang magsimula ng email broadcast, pumunta sa iyong network admin Dashboard at sa ilalim ng menu na Ultimate Multisite, makikita mo ang opsyong Broadcast.

![Pahina ng listahan ng mga Broadcast na ginagamit bilang panimulang punto para sa isang email broadcast](/img/admin/broadcasts-list.png)

Mula sa pahinang ito, i-click ang button na **Magdagdag ng broadcast** sa itaas.

Ilalabas nito ang modal window na Magdagdag ng broadcast kung saan maaari mong piliin kung anong uri ng broadcast ang nais mong ipadala. Sige at piliin ang **Email** pagkatapos ay i-click ang button na **Susunod na Hakbang**.

![Modal ng pagdagdag ng broadcast na may napiling opsyong Email](/img/admin/broadcast-add-email.png)

Hihingin sa iyo ng susunod na window ang alinman sa **Target na customer** o **Target na produk** to. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Upang maghanap ng user Account o produkto, kailangan mong simulang i-type ang keyword sa loob ng field.

Kapag napili na ang iyong target na audience, maaari mong i-click ang **Susunod na Hakbang**.

![Pagpili ng target na mga customer at target na produkto para sa isang Email broadcast](/img/admin/broadcast-email-targets.png)

Sa susunod na window, maaari mong simulang buuin ang iyong email sa pamamagitan ng paglalagay ng paksa at nilalaman/mensahe na nais mong ipadala sa mga user.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Pagkatapos likhain ang iyong mensahe, maaari mong pindutin ang button na **Ipadala**.

At ganoon kadaling magpadala ng email sa iyong mga end-user gamit ang tampok na broadcast.

## Mga system email {#system-emails}

Ang mga system email sa Ultimate Multisite ay yaong **mga awtomatikong abiso** na ipinapadala ng system pagkatapos ng ilang partikular na aksyon tulad ng pagpaparehistro, pagbabayad, domain mapping, atbp. Maaaring i-edit o baguhin ang mga email na ito mula sa mga setting ng Ultimate Multisite. May kasama rin itong tampok na magbibigay-daan sa iyong i-reset at i-import ang kasalukuyang mga setting mula sa ibang pag-install ng Ultimate Multisite.

### Pag-reset at Pag-import {#resetting--importing}

Ang mga bagong bersyon ng Ultimate Multisite, pati na rin ang mga add-on, ay maaaring at magrerehistro ng mga bagong email paminsan-minsan.

Upang maiwasan ang mga conflict at iba pang isyu, **hindi namin awtomatikong idaragdag ang mga bagong template ng email bilang mga System Email sa iyong install** , maliban kung mahalaga ang mga ito sa tamang paggana ng isang partikular na tampok.

Gayunpaman, maaaring i-import ng mga super admin at agent ang mga bagong narehistrong email na ito sa pamamagitan ng tool sa pag-import. Lilikha ang prosesong iyon ng bagong system email na may nilalaman at configuration ng bagong template ng email, na nagbibigay-daan sa super admin na gumawa ng anumang mga pagbabagong gusto nila o panatilihin ang mga ito kung ano na ang mga ito.

#### Paano mag-import ng mga system email {#how-to-import-system-emails}

Pumunta sa pahina ng Mga Setting ng Ultimate Multisite at pumunta sa tab na **Mga Email**.

![Tab na Mga Email sa mga setting ng Ultimate Multisite na nagpapakita ng seksyong System Emails](/img/config/settings-emails-tab.png)

Pagkatapos, sa sidebar, i-click ang button na **I-customize ang Mga System Email**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sa pahina ng System Emails, makikita mo ang action button na **I-reset at I-import** sa itaas. Dapat buksan ng pag-click sa button na iyon ang modal window para sa pag-import at pag-reset.

![Action button na I-reset o I-import sa admin page ng System Emails](/img/admin/system-emails-reset-import.png)

Pagkatapos, maaari mong i-toggle ang mga opsyon sa Import Emails upang makita kung aling mga system email ang available na ma-import.

<!-- Hindi available ang screenshot: modal na I-reset at I-import na nakabukas ang mga opsyon sa Pag-import ng Mga Email -->

#### Pagre-reset ng Mga Email ng System {#reseting-system-emails}

Sa ibang pagkakataon, mapapansin mong hindi na angkop sa iyo ang mga pagbabagong ginawa mo sa isang partikular na template ng email at nais mong ibalik ito sa **default na estado** nito.

Sa ganitong mga kaso, mayroon kang dalawang opsyon: maaari mo na lang burahin ang email ng system at i-import itong muli (gamit ang mga tagubilin sa itaas) - na magbubura sa mga sukatan ng pagpapadala at iba pang bagay, kaya ang paraang ito ang hindi gaanong inirerekomenda.

O maaari mong gamitin ang **tool na I-reset at I-import** upang i-reset ang template ng email na iyon.

Upang i-reset ang isang template ng email, maaari mong sundan ang mga hakbang sa itaas hanggang makarating ka sa tool na I-reset at I-import, at pagkatapos, i-toggle ang opsyong **I-reset** at piliin ang mga email na nais mong ibalik sa kanilang default na nilalaman.

<!-- Hindi available ang screenshot: modal na I-reset at I-import na nakabukas ang mga opsyon sa Pag-reset ng Mga Email -->
