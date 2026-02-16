---
title: Pagpapadala ng mga Email at Broadcast
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Pagpapadala ng mga Email at Broadcast (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

May feature ang Ultimate Multisite na magbibigay-daan sa iyo na makipag-ugnayan sa iyong mga customer sa pamamagitan ng pagpapadala ng email sa isang partikular na user o grupo ng mga user, pati na rin ang pagpapadala ng mga paunawa sa kanilang admin dashboard para mag-broadcast ng mga anunsyo.

## Magdagdag ng admin notices sa dashboard ng iyong mga customer gamit ang Broadcasts

Gamit ang broadcast feature ng Ultimate Multisite, maaari kang magdagdag ng **admin notices** sa subsite admin dashboard ng iyong user.

Lubhang kapaki-pakinabang ito kung kailangan mong mag-anunsyo tulad ng system maintenance o mag-alok ng mga bagong produkto o serbisyo sa iyong mga kasalukuyang user. Ganito ang magiging hitsura ng admin notice sa dashboard ng iyong user.

![Admin notice broadcast na ipinapakita sa customer dashboard](/img/admin/broadcasts-list.png)

Para magsimula ng admin notice, pumunta sa iyong network admin dashboard at sa ilalim ng menu na **Ultimate Multisite**, makikita mo ang opsyon na **Broadcasts**.

![Menu ng Broadcasts sa Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Mula sa pahinang ito, i-click ang button na **Add Broadcast** sa itaas.

Lalabas ang Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang gusto mong ipadala.

Piliin ang **Message** at i-click ang button na **Next Step**.

![Add broadcast modal na may napiling Message type](/img/admin/broadcasts-list.png)

Hihilingin sa iyo ng susunod na window ang **Target customer** o **Target product**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Para maghanap ng user account o produkto, kailangan mong magsimulang mag-type ng keyword sa loob ng field.

Sa ilalim ng field na **Message type**, maaari mong piliin ang kulay ng paunawa. Magbibigay-diin ito sa urgency ng iyong mensahe.

Pagkatapos, maaari mong i-click ang **Next Step**.

![Pagpili ng target customer at product para sa broadcast](/img/admin/broadcasts-list.png)

Sa susunod na window, maaari mo nang simulang buuin ang iyong mensahe sa pamamagitan ng paglalagay ng subject at ng content/mensaheng gusto mong i-broadcast sa mga user.

![Editor ng subject at content ng broadcast message](/img/admin/broadcasts-list.png)

Pagkatapos mong gawin ang iyong mensahe, maaari mo nang i-click ang button na **Send**.

Iyon lang! Agad na lalabas ang admin notice sa dashboard ng iyong user.

## Magpadala ng mga email sa iyong mga customer

Gamit ang broadcast feature ng Ultimate Multisite, maaari kang magpadala ng email sa iyong mga user. May opsyon kang magpadala ng email sa mga partikular na user lamang o mag-target ng partikular na grupo ng user batay sa produkto o plan kung saan sila naka-subscribe.

Para magsimula ng email broadcast, pumunta sa iyong network admin dashboard at sa ilalim ng menu ng Ultimate Multisite, makikita mo ang opsyon na Broadcast.

![Pahina ng Broadcasts sa Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Mula sa pahinang ito, i-click ang button na **Add broadcast** sa itaas.

Lalabas ang Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang gusto mong ipadala. Piliin ang **Email** at i-click ang button na **Next Step**.

![Add broadcast modal na may napiling Email type](/img/admin/broadcasts-list.png)

Hihilingin sa iyo ng susunod na window ang **Target customer** o **Target product**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Para maghanap ng user account o produkto, kailangan mong magsimulang mag-type ng keyword sa loob ng field.

Kapag napili na ang iyong target audience, maaari mong i-click ang **Next Step**.

![Pagpili ng target customer at product para sa email broadcast](/img/admin/broadcasts-list.png)

Sa susunod na window, maaari mo nang simulang buuin ang iyong email sa pamamagitan ng paglalagay ng subject at ng content/mensaheng gusto mong ipadala sa mga user.

![Editor ng subject at content ng email broadcast](/img/admin/broadcasts-list.png)

Pagkatapos mong gawin ang iyong mensahe, maaari mong i-click ang button na **Send**.

Ganoon kadali magpadala ng email sa iyong mga end-user gamit ang broadcast feature.

## Mga system email

Ang mga system email sa Ultimate Multisite ay mga **awtomatikong notipikasyon** na ipinapadala ng system pagkatapos ng ilang aksyon tulad ng registration, payment, domain mapping, at iba pa. Maaaring i-edit o baguhin ang mga email na ito mula sa mga setting ng Ultimate Multisite. Mayroon din itong feature na magbibigay-daan sa iyong i-reset at mag-import ng mga kasalukuyang setting mula sa ibang Ultimate Multisite installation.

### Pag-reset at Pag-import

Ang mga bagong bersyon ng Ultimate Multisite, pati na rin ang mga add-on, ay maaaring magdagdag ng mga bagong email paminsan-minsan.

Para maiwasan ang mga conflict at iba pang isyu, **hindi namin awtomatikong idaragdag ang mga bagong email template bilang System Emails sa iyong install**, maliban kung kritikal ang mga ito sa tamang paggana ng isang partikular na feature.

Gayunpaman, maaaring i-import ng mga super admin at agent ang mga bagong nakarehistrong email na ito gamit ang importer tool. Gagawa ang prosesong ito ng bagong system email na may content at configuration ng bagong email template, na magbibigay-daan sa super admin na gumawa ng anumang pagbabago o panatilihin ito sa kasalukuyang anyo.

#### Paano mag-import ng mga system email

Pumunta sa iyong Ultimate Multisite Settings page at pumunta sa tab na **Emails**.

![Tab ng Emails sa mga setting ng Ultimate Multisite](/img/config/settings-emails.png)

Pagkatapos, sa sidebar, i-click ang button na **Customize System Emails**.

![Button ng Customize System Emails sa sidebar](/img/config/settings-emails.png)

Sa pahina ng System Emails, makikita mo ang action button na **Reset & Import** sa itaas. Kapag na-click mo ang button na ito, dapat na magbukas ang import at reset modal window.

![Action button ng Reset at Import sa pahina ng System Emails](/img/config/settings-emails.png)

Pagkatapos, maaari mong i-toggle ang mga opsyon ng Import Emails para makita kung aling mga system email ang available para ma-import.

![Mga opsyon ng Import Emails na nagpapakita ng available na system emails](/img/config/settings-emails.png)

#### Pag-reset ng mga System Email

May mga pagkakataon na malalaman mo na ang mga pagbabagong ginawa mo sa isang email template ay hindi na gumagana para sa iyo at gusto mo itong i-reset sa **default na estado** nito.

Sa ganitong mga kaso, may dalawang opsyon ka: maaari mo lamang burahin ang system email at i-import itong muli (gamit ang mga tagubilin sa itaas) - ngunit mabubura nito ang mga send metrics at iba pang bagay, kaya hindi ito ang pinakamainam na paraan.

O maaari mong gamitin ang **Reset & Import tool** para i-reset ang email template na iyon.

Para mag-reset ng email template, maaari mong sundin ang mga hakbang sa itaas hanggang makarating ka sa Reset & Import tool, at pagkatapos, i-toggle ang opsyon na **Reset** at piliin ang mga email na gusto mong ibalik sa default na content.

![Opsyon ng Reset para ibalik ang mga email template sa default](/img/config/settings-emails.png)
