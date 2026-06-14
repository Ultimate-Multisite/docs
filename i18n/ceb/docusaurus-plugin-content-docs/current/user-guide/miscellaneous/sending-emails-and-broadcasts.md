---
title: Pagpadala og mga Email ug Broadcasts
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Pagpadala og Emails ug Broadcasts (v2)

_**MAHINONG PAHIBALO: Kini nga article nagtumong sa Ultimate Multisite version 2.x.**_

Ang Ultimate Multisite naa'y feature nga magtugot kanimo makig-istorya sa imong mga customer pinaagi sa pagpadala og email ngadto sa usa ka target nga user o grupo sa mga user, ug makapadala usab og mga pahibalo sa ilang admin dashboard para mag-broadcast og mga anunsyo.

## Pagdugang og admin notices sa dashboard sa imong mga customer gamit ang Broadcasts

Gamit ang Ultimate Multisite broadcast feature, pwede kang magdugang og **admin notices** sa subsite admin dashboard sa imong user.

Kini gyud makatabang kung kinahanglan nimo maghimo og anunsyo sama sa system maintenance o pagtanyag og bag-ong mga produkto o serbisyo ngadto sa imong mga kasamtangang users. Mao ni unsaon daw ang admin notice ipakita sa dashboard sa imong user.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Aron magsugod og admin notice, padulong sa imong network admin dashboard ug ubos sa menu nga **Ultimate Multisite**, makit-an nimo ang opsyon nga **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Pwede usab nimong i-edit ang mga existing broadcasts:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Gikan niining pahina, i-click ang **Add Broadcast** button sa taas.

Kini magdala og Add broadcast modal window diin pwede nimo pilion kung unsa nga klase sa broadcast ang gusto nimong ipadala.

Padulong ug piliha ang **Message** dayon unya i-click ang **Next Step** button.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Ang sunod nga window mangutana kanimo kung gusto nimo og **Target customer** o **Target product**. Ampingi nga pwede kang magpili og labaw pa kay sa usa ka user o labaw pa kay sa usa ka produkto.

Para maghanap og usa ka user account o produkto, kinahanglan nimo magsugod sa pag-type sa keyword sulod sa field.

Sa ilalom sa field nga **Message type**, pwede kang mopili sa kolor sa notice. Kini maghatag og emphasis sa kasukaran sa imong mensahe.

Unya, i-click ang **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Ang sunod nga window mao diin magsugod ka sa paghimo sa imong mensahe pinaagi sa pag-input sa subject ug ang content/message nga gusto nimong i-broadcast sa mga users.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Human makahimo ka og imong mensahe, mahimong i-hit ang **Send** button.

Ug mao na. Ang admin notice kinahanglan dayon ipakita sa dashboard sa imong user.

## Pagpadala og emails ngadto sa imong mga customer

Gamit ang Ultimate Multisite broadcast feature, pwede kang magpadala og email sa imong mga users. Aduna kay option nga ipadala ang email lang sa piho nga mga user o target ang usa ka piho nga grupo sa mga user basehan base sa produkto o plan nga ilang gisubtanon.

Aron magsugod sa usa ka email broadcast, adto sa imong network admin dashboard ug ubos sa Ultimate Multisite menu, makakita ka sa Broadcast option.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Gikan niining pahina, i-click ang **Add broadcast** button sa taas.

Kini magdala og Add broadcast modal window diin pwede nimong pilion kung unsa nga klase sa broadcast ang gusto nimo ipadala. Padayon ug piliha ang **Email** dayon unya i-click ang Next Step button.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Ang sunod nga window mangutana kanimo kung ang **Target customer** o **Target product**. Paalira, pwede kang mopili og labaw pa sa usa ka user o labaw pa sa usa ka produkto.

Para maghanap og user account o produkto, kinahanglan nimo magsugod sa pag-type sa keyword sulod sa field.

Pagkapili na nimo ang imong target audience, pwede nimong i-click ang **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Ang sunod nga window mao diin magsugod ka sa paghimo sa imong email pinaagi sa pag-input sa subject ug sa content/message nga gusto nimong ipadala sa mga user.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Human makahimo na nimo sa imong mensahe, pwede nimong i-hit ang **Send** button.

Ug mao na kung unsa ka dali ipadala ang email ngadto sa imong mga end-user gamit ang broadcast feature.

## System emails

Ang system emails sa Ultimate Multisite kay mga **automatic nga notipikasyon** nga gipadala sa sistema human sa pipila ka mga lihok sama sa pag-register, bayad, domain mapping, ug uban pa. Kini nga mga email pwede i-edit o usbon gikan sa Ultimate Multisite settings. Naa pud kini og feature nga magtugot kanimo sa pag-reset ug pag-import sa mga existing settings gikan sa lain nga instalasyon sa Ultimate Multisite.

### Resetting & Importing

Ang bag-ong mga bersyon sa Ultimate Multisite, pati na ang add-ons, pwede ug mahimong mag-register og bag-ong emails sa pipila ka higayon.

Aron mapugngan ang mga away (conflicts) ug uban pang problema, **dili nato i-add ang bag-ong email templates isip System Emails sa imong instalasyon awtomatiko**, gawas kung kini importante para sa husto nga paggana sa usa ka feature.

Bisan pa niana, ang super admins ug agents pwede mag-import niining bag-ong na-register nga emails pinaagi sa importer tool. Kini nga proseso maghimo og bag-ong system email uban sa content ug configuration sa bag-ong email template, nga nagtugot sa super admin sa paghimo bisan unsang mga kausaban nga gusto nila o pagpabilin niini sama ra.

#### Unsaon pag-import sa system emails

Moadto ang imong Ultimate Multisite Settings page ug padulong sa tab nga **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Dayon, sa sidebar, i-click ang button nga **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sa System Emails page, makita nimo ang action button nga **Reset & Import** sa taas. Ang pag-click niini magbukas sa import ug reset modal window.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Dayon, mahimo nimong i-toggle ang Import Emails options aron makita kung unsang system emails ang pwedeng i-import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Pag-reset sa System Emails

Usahay, mapansin nimo nga ang mga kausaban nga imong gihimo sa usa ka email template dili na nagtrabaho para nimo ug gusto nimong i-reset kini sa ilang **default state**.

Sa ingon niini, naa kay duha ka pamaagi: mahimo nimong simply i-delete ang system email ug i-import pagbalik (gamit ang mga instruksyon sa ibabaw) - apan kini magapahawa sa mga metrics sa pagpadala ug uban pa, nga naghimo niini nga labing dili gusto nga pamaagi.

O mahimong gamiton nimo ang **Reset & Import tool** aron i-reset ang email template.

Aron ma-reset ang usa ka email template, sundon lang nimo ang mga lakang sa ibabaw hangtod nga moabot ka sa Reset & Import tool, ug dayon, i-toggle ang **Reset** option ug piliha ang mga emails nga gusto nimong i-reset balik sa ilang default nga sulod.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
