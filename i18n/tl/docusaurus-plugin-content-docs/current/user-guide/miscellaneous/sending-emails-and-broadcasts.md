---
title: Pagpapadala ng mga Email at Broadcast
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Pagpapadala ng mga Email at Broadcast (v2) {#sending-emails-and-broadcasts-v2}

_**MAHALAGANG TANDAAN: Tumutukoy ang artikulong ito sa Ultimate Multisite bersyon 2.x.**_

May kasamang feature ang Ultimate Multisite na magbibigay-daan sa iyo na makipag-ugnayan sa iyong mga customer sa pamamagitan ng pagpapadala ng email sa isang target na user o grupo ng mga user, pati na rin pagpapadala ng mga abiso sa kanilang admin dashboard upang mag-broadcast ng mga anunsyo

## Magdagdag ng mga admin notice sa dashboard ng iyong mga customer gamit ang Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Gamit ang broadcast feature ng Ultimate Multisite, maaari kang magdagdag ng **mga admin notice** sa subsite admin dashboard ng iyong user.

Napakalaking tulong nito kung kailangan mong gumawa ng anunsyo tulad ng system maintenance o pag-aalok ng mga bagong produkto o serbisyo sa iyong kasalukuyang mga user. Ganito ang magiging hitsura ng admin notice sa dashboard ng iyong user.

<!-- Hindi available ang screenshot: Admin notice broadcast na ipinapakita sa subsite dashboard ng isang customer -->

Upang magsimula ng admin notice, pumunta sa iyong network admin dashboard at sa ilalim ng menu na **Ultimate Multisite**, makikita mo ang opsyong **Broadcasts**.

![Pahina ng listahan ng Broadcasts sa admin ng Ultimate Multisite](/img/admin/broadcasts-list.png)

Maaari mo ring i-edit ang mga umiiral na broadcast:

![Interface sa pag-edit ng broadcast](/img/admin/broadcast-edit.png)

Mula sa pahinang ito, i-click ang button na **Magdagdag ng Broadcast** sa itaas.

Ilalabas nito ang Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang nais mong ipadala.

Sige at piliin ang **Mensahe** pagkatapos ay i-click ang button na **Susunod na Hakbang**.

![Add broadcast modal na may napiling opsyong Mensahe](/img/admin/broadcast-add-message.png)

Hihingin sa iyo ng susunod na window ang alinman sa **Target na customer** o **Target na produkto**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Upang maghanap ng alinman sa isang user account o produkto, kailangan mong simulang i-type ang keyword sa loob ng field.

Sa ilalim ng field na **Uri ng mensahe**, maaari mong piliin ang kulay ng abiso. Bibigyang-diin nito ang pagkaapurahan ng iyong mensahe.

Maaari mo nang i-click ang **Susunod na Hakbang**.

![Mga field para sa target na mga customer, target na produkto at uri ng mensahe para sa Message broadcast](/img/admin/broadcast-message-targets.png)

Ang susunod na window ay kung saan maaari mong simulan ang paggawa ng iyong mensahe sa pamamagitan ng paglalagay ng subject at ng nilalaman/mensahe na nais mong i-broadcast sa mga user.

![Subject ng broadcast message at editor ng nilalaman sa hakbang ng pagbuo](/img/admin/broadcast-edit.png)

Pagkatapos gawin ang iyong mensahe, maaari mo nang pindutin ang button na **Ipadala**.

At iyon na iyon. Dapat agad na lumabas ang admin notice sa dashboard ng iyong user.

## Magpadala ng mga email sa iyong mga customer {#send-emails-to-your-customers}

Gamit ang broadcast feature ng Ultimate Multisite, maaari kang magpadala ng email sa iyong mga user. May opsyon kang ipadala ang email lamang sa mga partikular na user o mag-target ng partikular na grupo ng user batay sa produkto o plan na naka-subscribe sila.

Upang magsimula ng email broadcast, pumunta sa iyong network admin dashboard at sa ilalim ng menu ng Ultimate Multisite, makikita mo ang opsyong Broadcast.

![Pahina ng listahan ng Broadcasts na ginagamit bilang panimulang punto para sa email broadcast](/img/admin/broadcasts-list.png)

Mula sa pahinang ito, i-click ang button na **Magdagdag ng broadcast** sa itaas.

Ilalabas nito ang Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang nais mong ipadala. Sige at piliin ang **Email** pagkatapos ay i-click ang button na **Susunod na Hakbang**.

![Add broadcast modal na may napiling opsyong Email](/img/admin/broadcast-add-email.png)

Hihingin sa iyo ng susunod na window ang alinman sa **Target na customer** o **Target na produk** to. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Upang maghanap ng alinman sa isang user account o produkto, kailangan mong simulang i-type ang keyword sa loob ng field.

Kapag napili na ang iyong target na audience, maaari mong i-click ang **Susunod na Hakbang**.

![Pagpili ng target na mga customer at target na produkto para sa Email broadcast](/img/admin/broadcast-email-targets.png)

Ang susunod na window ay kung saan maaari mong simulan ang paggawa ng iyong email sa pamamagitan ng paglalagay ng subject at ng nilalaman/mensahe na nais mong ipadala sa mga user.

<!-- Hindi available ang screenshot: Subject ng email broadcast at editor ng nilalaman sa hakbang ng pagbuo -->

Pagkatapos gawin ang iyong mensahe, maaari mong pindutin ang button na **Ipadala**.

At ganoon kadaling magpadala ng email sa iyong mga end-user gamit ang broadcast feature.

## Mga system email {#system-emails}

Ang mga system email sa Ultimate Multisite ay ang mga **awtomatikong notification** na ipinapadala ng system pagkatapos ng ilang partikular na aksyon tulad ng registration, payment, domain mapping, atbp. Maaaring i-edit o baguhin ang mga email na ito mula sa settings ng Ultimate Multisite. May kasama rin itong feature na magbibigay-daan sa iyo na i-reset at i-import ang mga umiiral na setting mula sa isa pang installation ng Ultimate Multisite.

### Pag-reset at Pag-import {#resetting--importing}

Ang mga bagong bersyon ng Ultimate Multisite, pati na rin ang mga add-on, ay maaari at magrerehistro ng mga bagong email paminsan-minsan.

Upang maiwasan ang mga conflict at iba pang isyu, **hindi namin awtomatikong idaragdag ang mga bagong email template bilang System Emails sa iyong install** , maliban kung mahalaga ang mga ito sa tamang paggana ng isang partikular na feature.

Gayunpaman, maaaring i-import ng mga super admin at agent ang mga bagong rehistradong email na ito sa pamamagitan ng importer tool. Ang prosesong iyon ay gagawa ng bagong system email na may nilalaman at configuration ng bagong email template, na nagpapahintulot sa super admin na gumawa ng anumang pagbabago na nais nila o panatilihin ang mga ito kung ano ang kasalukuyan.

#### Paano mag-import ng mga system email {#how-to-import-system-emails}

Pumunta sa iyong pahina ng Ultimate Multisite Settings at magtungo sa tab na **Emails**.

![Tab na Emails sa settings ng Ultimate Multisite na nagpapakita ng seksyong System Emails](/img/config/settings-emails-tab.png)

Pagkatapos, sa sidebar, i-click ang button na **I-customize ang System Emails**.

<!-- Hindi available ang screenshot: Button na Customize System Emails sa sidebar panel ng System Emails -->

Sa pahina ng System Emails, makikita mo ang action button na **Reset & Import** sa itaas. Ang pag-click sa button na iyon ay dapat magbukas ng import at reset modal window.

![Action button na Reset o Import sa admin page ng System Emails](/img/admin/system-emails-reset-import.png)

Pagkatapos, maaari mong i-toggle ang mga opsyon ng Import Emails upang makita kung aling mga system email ang available na ma-import.

<!-- Hindi available ang screenshot: Reset at Import modal na may pinalawak na mga opsyon sa Import Emails -->

#### Pag-reset ng System Emails {#reseting-system-emails}

Sa ibang pagkakataon, mapapansin mong hindi na gumagana para sa iyo ang mga pagbabagong ginawa mo sa isang partikular na template ng email at nais mong i-reset ito sa **default state** nito.

Sa ganitong mga kaso, mayroon kang dalawang opsyon: maaari mo lamang burahin ang system email at i-import itong muli (gamit ang mga tagubilin sa itaas) - na magbubura ng send metrics at iba pang bagay, kaya ang paraang ito ang hindi gaanong inirerekomenda.

O maaari mong gamitin ang **Reset & Import tool** upang i-reset ang template ng email na iyon.

Upang i-reset ang isang template ng email, maaari mong sundin ang mga hakbang sa itaas hanggang makarating ka sa Reset & Import tool, at pagkatapos, i-toggle ang opsyong **Reset** at piliin ang mga email na gusto mong i-reset pabalik sa default na nilalaman ng mga ito.

<!-- Hindi available ang screenshot: Reset at Import modal na may pinalawak na mga opsyon sa Reset Emails -->
