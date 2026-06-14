---
title: Pagpapadala ng mga Email at Broadcast
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Pagpapadala ng Emails at Broadcasts (v2)

_**MAHALAGANG PAUNA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

May feature ang Ultimate Multisite na magbibigay-daan sa iyo na makipag-ugnayan sa iyong mga customer sa pamamagitan ng pagpapadala ng email sa isang partikular na user o grupo ng mga user, pati na rin sa pagpapadala ng mga abiso sa kanilang admin dashboard para magbigay ng mga anunsyo.

## Magdagdag ng admin notices sa dashboard ng iyong mga customer gamit ang Broadcasts

Gamit ang feature ng broadcast ng Ultimate Multisite, maaari kang magdagdag ng **admin notices** sa subsite admin dashboard ng iyong user.

Napaka-kapaki nito kung kailangan mong gumawa ng anunsyo tulad ng system maintenance o pag-aalok ng mga bagong produkto o serbisyo sa iyong mga kasalukuyang user. Ganito magmumukha ang admin notice sa dashboard ng iyong user.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Para simulan ang isang admin notice, pumunta ka sa network admin dashboard mo at sa ilalim ng menu na **Ultimate Multisite**, makikita mo ang opsyon na **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Maaari mo ring i-edit ang mga kasalukuyang broadcast:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Mula sa pahinang ito, i-click ang button na **Add Broadcast** sa itaas.

Bubukas ito ng Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang gusto mong ipadala.

Pumili ka lang ng **Message** tapos i-click ang button na **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Ang susunod na window ay magtatanong sa iyo kung pipiliin mo ang **Target customer** o **Target product**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Para maghanap ng isang user account o produkto, kailangan mong magsimulang mag-type ng keyword sa field.

Sa ilalim ng field na **Message type**, maaari kang pumili ng kulay ng notice. Ito ay magbibigay-diin sa pagkaapurahan ng iyong mensahe.

Pagkatapos, i-click mo ang **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Ang susunod na window ay kung saan maaari ka nang magsimula sa pagbuo ng iyong mensahe sa pamamagitan ng paglalagay ng subject at ang content/mensaheng nais mong i-broadcast sa mga users.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Pagkatapos gumawa ng iyong mensahe, maaari mo nang pindutin ang **Send** button.

At iyon lang. Ang admin notice ay agad na dapat makita sa dashboard ng iyong user.

## Magpadala ng email sa iyong mga customer

Gamit ang Ultimate Multisite broadcast feature, maaari kang magpadala ng email sa iyong mga users. Mayroon kang opsyon na ipadala ang email lamang sa mga partikular na user o targetin ang isang partikular na grupo ng user batay sa produkto o plan na kanilang sinubukan (subscribed).

Para magsimula ng email broadcast, pumunta ka sa network admin dashboard mo at sa ilalim ng Ultimate Multisite menu, makikita mo ang opsyon na Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Mula sa pahinang ito, i-click ang **Add broadcast** button sa itaas.

Bubuksan nito ang Add broadcast modal window kung saan maaari mong piliin kung anong uri ng broadcast ang gusto mong ipadala. Pumili ka lang ng **Email** tapos i-click ang **Next Step** button.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Ang susunod na window ay magtatanong sa iyo kung alin ang iyong pipiliin: ang **Target customer** o **Target product**. Tandaan na maaari kang pumili ng higit sa isang user o higit sa isang produkto.

Para maghanap ng user account o produkto, kailangan mong magsimulang mag-type ng keyword sa field.

Kapag napili mo na ang iyong target audience, maaari mong i-click ang **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Ang susunod na window ay kung saan maaari ka nang magsimula gumawa ng iyong email sa pamamagitan ng paglalagay ng subject at ng content/mensaheng gusto mong ipadala sa mga user.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Pagkatapos mong gawin ang iyong mensahe, maaari mo nang pindutin ang **Send** button.

At ganoon pala kadali magpadala ng email sa iyong mga end-user gamit ang broadcast feature.

## System emails

Ang system emails sa Ultimate Multisite ay ang mga **awtomatikong abiso** na ipinapadala ng sistema pagkatapos ng ilang aksyon tulad ng registration, payment, domain mapping, atbp. Ang mga email na ito ay pwedeng i-edit o baguhin mula sa settings ng Ultimate Multisite. Mayroon din itong feature na magpapahintulot sa iyo na i-reset at i-import ang mga kasalukuyang setting mula sa ibang instalasyon ng Ultimate Multisite.

### Pag-reset at Pag-import

Ang mga bagong bersyon ng Ultimate Multisite, pati na rin ang add-ons, ay may kakayahang magparehistro ng mga bagong email paminsan-minsan.

Upang maiwasan ang mga aberya at iba pang problema, **hindi namin awtomatikong idadagdag ang mga bagong template ng email bilang System Emails sa iyong instalasyon** maliban kung ito ay mahalaga para sa tamang paggana ng isang partikular na feature.

Gayunpaman, ang mga super admin at agent ay maaaring mag-import ng mga bagong nairehistrong email gamit ang importer tool. Ang prosesong ito ay gagawa ng bagong system email na may nilalaman at configuration ng bagong template ng email, na nagbibigay-daan sa super admin na gumawa ng anumang pagbabago na gusto nila o panatilihin ito kung anong gaya nito.

#### Paano mag-import ng system emails

Pumunta sa iyong Ultimate Multisite Settings page at pumunta sa tab na **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Pagkatapos, sa sidebar, i-click ang button na **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sa System Emails page, makikita mo ang action button na **Reset & Import** sa itaas. Ang pag-click dito ay magbubukas ng import at reset modal window.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Pagkatapos, maaari mong i-toggle ang mga opsyon ng Import Emails para makita kung aling system emails ang pwedeng i-import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Pag-reset ng System Emails

Minsan, mapapansin mo na hindi na gumagana ang mga pagbabago na ginawa mo sa isang email template at gusto mong ibalik ito sa **default state** nito.

Sa ganitong mga pagkakataon, mayroon kang dalawang opsyon: maaari mo lang i-delete ang system email at i-import ulit (gamit ang mga instruksyon sa itaas) - na magbubura ng mga metrics ng pagpapadala at iba pang bagay, kaya ito ang pinaka hindi inirerekomendang paraan.

O maaari mong gamitin ang **Reset & Import tool** para i-reset ang email template na iyon.

Para ma-reset ang isang email template, sundin mo lang ang mga hakbang sa itaas hanggang sa maabot mo ang Reset & Import tool, at pagkatapos ay i-toggle ang opsyong **Reset** at piliin ang mga emails na gusto mong ibalik sa kanilang default na nilalaman.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
