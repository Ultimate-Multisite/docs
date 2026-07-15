---
title: Pagpadala og mga Email ug Broadcasts
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Pagpadala og mga Email ug Broadcast (v2)

_**IMPORTANTE NGA PAHINUMDOM: Kini nga artikulo naghisgot sa Ultimate Multisite version 2.x.**_

Ang Ultimate Multisite adunay feature nga motugot kanimo nga makigkomunikar sa imong mga customer pinaagi sa pagpadala og email ngadto sa gitarget nga user o grupo sa mga user ingon man sa pagpadala og mga pahibalo sa ilang admin dashboard aron mag-broadcast og mga anunsyo

## Idugang ang admin notices sa dashboard sa imong mga customer gamit ang Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Gamit ang Ultimate Multisite broadcast feature, makadugang ka og **admin notices** sa subsite admin dashboard sa imong user.

Mapuslanon kaayo kini kung kinahanglan nimo maghimo og anunsyo sama sa system maintenance o pagtanyag og bag-ong mga produkto o serbisyo sa imong kasamtangang mga user. Mao kini ang hitsura sa admin notice sa dashboard sa imong user.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Aron magsugod og admin notice, adto sa imong network admin dashboard ug ubos sa **Ultimate Multisite** menu, makita nimo ang **Broadcasts** nga opsyon.

![Panid sa lista sa Broadcasts sa Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Mahimo usab nimo i-edit ang kasamtangang mga broadcast:

![Interface sa pag-edit sa broadcast](/img/admin/broadcast-edit.png)

Gikan niini nga panid, i-klik ang **Add Broadcast** nga button sa ibabaw.

Kini mopakita sa Add broadcast modal window diin makapili ka unsang klase sa broadcast ang gusto nimong ipadala.

Sige ug pilia ang **Message** unya i-klik ang **Next Step** nga button.

![Add broadcast modal nga napili ang Message nga opsyon](/img/admin/broadcast-add-message.png)

Ang sunod nga bintana mangutana kanimo alang sa **Target customer** o **Target product**. Timan-i nga makapili ka og labaw sa usa ka user o labaw sa usa ka produkto.

Aron mangita og user account o produkto, kinahanglan magsugod ka sa pag-type sa keyword sulod sa field.

Ubos sa **Message type** nga field, makapili ka sa kolor sa pahibalo. Kini mopasiugda sa pagka-dinalian sa imong mensahe.

Dayon mahimo nimong i-klik ang **Next Step**.

![Mga field sa target customers, target product ug message type alang sa Message broadcast](/img/admin/broadcast-message-targets.png)

Ang sunod nga bintana mao ang dapit diin makasugod ka sa pagsulat sa imong mensahe pinaagi sa pagsulod sa subject ug sa content/message nga gusto nimong i-broadcast ngadto sa mga user.

![Subject ug content editor sa broadcast message sa compose step](/img/admin/broadcast-edit.png)

Human nimo mahimo ang imong mensahe, mahimo nimong pinduton ang **Send** nga button.

Ug mao na kana. Ang admin notice kinahanglan dayong makita sa dashboard sa imong user.

## Pagpadala og mga email sa imong mga customer {#send-emails-to-your-customers}

Gamit ang Ultimate Multisite broadcast feature, makapadala ka og email sa imong mga user. Aduna kay opsyon nga ipadala ang email ngadto lamang sa piho nga mga user o targeton ang piho nga grupo sa user base sa produkto o plan diin sila naka-subscribe.

Aron magsugod og email broadcast, adto sa imong network admin dashboard ug ubos sa Ultimate Multisite menu, makita nimo ang Broadcast nga opsyon.

![Panid sa lista sa Broadcasts nga gigamit isip sugdanan alang sa email broadcast](/img/admin/broadcasts-list.png)

Gikan niini nga panid, i-klik ang **Add broadcast** nga button sa ibabaw.

Kini mopakita sa Add broadcast modal window diin makapili ka unsang klase sa broadcast ang gusto nimong ipadala. Sige ug pilia ang **Email** unya i-klik ang **Next Step** nga button.

![Add broadcast modal nga napili ang Email nga opsyon](/img/admin/broadcast-add-email.png)

Ang sunod nga bintana mangutana kanimo alang sa **Target customer** o **Target produc** t. Timan-i nga makapili ka og labaw sa usa ka user o labaw sa usa ka produkto.

Aron mangita og user account o produkto, kinahanglan magsugod ka sa pag-type sa keyword sulod sa field.

Sa higayon nga napili na ang imong target audience, mahimo nimong i-klik ang **Next Step**.

![Pagpili sa target customers ug target product alang sa Email broadcast](/img/admin/broadcast-email-targets.png)

Ang sunod nga bintana mao ang dapit diin makasugod ka sa pagsulat sa imong email pinaagi sa pagsulod sa subject ug sa content/message nga gusto nimong ipadala ngadto sa mga user.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Human nimo mahimo ang imong mensahe, mahimo nimong pinduton ang **Send** nga button.

Ug mao kana kadali ang pagpadala og email ngadto sa imong end-users gamit ang broadcast feature.

## Mga system email {#system-emails}

Ang mga system email sa Ultimate Multisite mao ang **awtomatikong mga pahibalo** nga gipadala sa system human sa piho nga mga aksyon sama sa registration, payment, domain mapping, ug uban pa. Kini nga mga email mahimong i-edit o usbon gikan sa Ultimate Multisite settings. Aduna usab kini feature nga motugot kanimo nga i-reset ug i-import ang kasamtangang settings gikan sa laing Ultimate Multisite installation.

### Pag-reset ug Pag-import {#resetting--importing}

Ang bag-ong mga Ultimate Multisite version, ingon man ang add-ons, mahimo ug mag-register og bag-ong mga email matag karon ug unya.

Aron malikayan ang mga conflict ug uban pang mga issue, **dili namo awtomatikong idugang ang bag-ong email templates isip System Emails sa imong install** , gawas kung importante kini alang sa hustong paglihok sa usa ka feature.

Apan, ang mga super admin ug agents makakaplag og paagi sa pag-import niining bag-ong gi-register nga mga email pinaagi sa importer tool. Kana nga proseso maghimo og bag-ong system email nga adunay content ug configuration sa bag-ong email template, nga motugot sa super admin sa paghimo sa bisan unsang mga modification nga ilang gusto o pagpabilin niini kung unsa na kini.

#### Unsaon pag-import sa system emails {#how-to-import-system-emails}

Adto sa imong Ultimate Multisite Settings page ug adto sa **Emails** nga tab.

![Emails tab sa Ultimate Multisite settings nga nagpakita sa System Emails section](/img/config/settings-emails-tab.png)

Dayon, sa sidebar, i-klik ang **Customize System Emails** nga button.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sa System Emails page, makita nimo ang **Reset & Import** nga action button sa ibabaw. Ang pag-klik niana nga button moabli sa import ug reset modal window.

![Reset o Import action button sa System Emails admin page](/img/admin/system-emails-reset-import.png)

Dayon, mahimo nimong i-toggle ang Import Emails options aron makita kung unsang system emails ang magamit nga ma-import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Pag-reset sa mga System Emails {#reseting-system-emails}

Usahay, imong mahibal-an nga ang mga kausaban nga imong gihimo sa usa ka gihatag nga email template dili na molihok para nimo ug gusto nimo kining i-reset balik sa ilang **default state**.

Sa ingon nga mga kaso, aduna kay duha ka kapilian: mahimo nimo nga yano ra nga i-delete ang system email ug i-import kini pagbalik (gamit ang mga panudlo sa ibabaw) - nga mopapas sa send metrics ug uban pang mga butang, nga naghimo niini nga pamaagi nga dili kaayo gipalabi.

O mahimo nimong gamiton ang **Reset & Import tool** aron i-reset kana nga email template.

Aron i-reset ang usa ka email template, mahimo nimong sundon ang mga lakang sa ibabaw hangtod maabot nimo ang Reset & Import tool, ug dayon, i-toggle ang **Reset** nga opsyon ug pilia ang mga email nga gusto nimong i-reset balik sa ilang default content.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
