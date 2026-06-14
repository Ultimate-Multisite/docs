---
title: Kupasa Imelo ndi Kufamba kwa M'mbala
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Kupatsa Email ndi Kufamba kwa Mwachidwe (v2)

_**CHONCHO CHOPSE: Izi zikufotokozera kwa Ultimate Multisite version 2.x.**_

Ultimate Multisite imapereka chinthu chomwe chimapereka kuti muponeka ndi wamene mukuphunzira mwachidwe mwa kupereka email kwa munthu wosankha kapena kwa wamene m’maka, komanso kupereka chitsanzo pa dashboard ya admin yawo kuti muphakamize zofunso.

## Kupereka chitsanzo cha admin ku dashboard ya wamene mukuphunzira ndi Broadcasts

Monga mukuphuka kwa Ultimate Multisite broadcast feature, muli ndi ulimi wopereka **admin notices** pa dashboard ya admin ya user wanu m’maka.

Izi zimapereka nkhau kwambiri ngati mukufuna kupereka chitsanzo monga kukhazikitsa mfundo (system maintenance) kapena kuphera zinthu zatsana kapena zinthu zatsana kwa wamene mukuphunzira. Izi ndi momwe admin notice idzakhala pa dashboard ya user wanu.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Kuti mutambale admin notice, ndi lankhula ku dashboard ya network admin yanu ndipo m’moyo wa **Ultimate Multisite**, mudzindikira option ya **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Muli ndi ulimi wopereka broadcasts:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Kuchokera pa lankhula lili, mupereka button ya **Add Broadcast** m’moyo wopambuyo.

Izi zimapereka modal window ya Add broadcast pamene muli ndi ulimi wopereka kuti mufotokozere kuti mukuphuna chifukwa chiyani.

Mupereka ndikupereka **Message** thandiza ndipo mupambale button ya **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Lankhula lili lili ndi chifukwa chomwe kukuphuna **Target customer** kapena **Target product**. Kodi mukuphunzira kuti muli ndi wamene wosankha kwambiri kapena zatsana kwambiri.

Kuti kuti kuli kuti mupereka chisoni kwa user account kapena product, musa muanira kuingira nkhani (keyword) m'malo.

M'malo wa **Message type**, muli mupatira chinthu cha rangi cha notis (notice). Izii zikukumbutsa kuti meseji yanu ndi kukhala kofunika kwambiri.

Muli mupatira kuingira **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

M'malo wosiyanasiya ndi chonde muli mupatira kuti mupereke meseji yanu monga subject (chitsanzo cha meseji) ndi content/message yomwe mukuona kwa users.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Panda mukupeza meseji yanu, muli mupereka **Send** button.

Ndipo ndipo. Notisi ya admin imalimbikira m'dashboard ya user yanu monga momwe mungayambe.

## Kufotokozera email kwa makalata anu

Mukuphatikiza feature ya broadcast ya Ultimate Multisite, muli mupereka email kwa users wanu. Muli ndi chagera luso kuti mupereke email kwa users wosonyeza kapena mupereke kwa group ya users yomwe imaperekedwa pa product kapena plan yomwe ali m'malo.

Kuti mukhale ndi broadcast ya email, ndi mupita ku network admin dashboard yanu ndipo m'malo wa Ultimate Multisite, mudzindikira Broadcast option.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Kuchokera kwa nthawi yomwe, mupereka **Add broadcast** button m'malo wosiyanasiya.

Izi zimaperekera modal window ya Add broadcast pamene muli ndi chonde kuti mupereke kuti ndalama yomwe mukuona. Mupereka kuti **Email** ndipo mupereka Next Step button.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

M'malo wosiyanasiya uli mupereke chinthu cha **Target customer** kapena **Target product**. Kodi muli ndi chonde kuti mupereke kuwoneza users wambiri kapena products wambiri.

Kuti kuti muli kudzidya akaunti ya mtumiaji kapena wopaka (product), mukuya kukhala m'mulo wa nkhani (field).

Pamene utselewa wanu wamukwera, mufufu **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

M'mulo wosamba uli ndi malo muli kuti mupatula email yanu monga mukuya mavuto (subject) ndi mawu/message monga mukuwoneza kwa mtumiaji.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Pambuyo pamene mupanga message yanu, mufufu **Send** button.

Ndiyo ndi momwe ndi luso kukhala mupatula email kwa mtumiaji wanu monga mukuwoneza (broadcast feature).

## System emails

System emails m'Ultimate Multisite ndi zimene ndi **notifications zosavuta** zomwe system imapereka pambuyo pa zinthu zina monga kukhala, kulipira, kupanga domain, nzeru. Emailszi zina zikhoza kudziperekedwa kapena kuwera kuchokera m'Ultimate Multisite settings. Zili ndi feature yomwe idzakuthandiza kuti muperekeze pano (reset) ndukumbutsa settings zomwe zili pansi m'Ultimate Multisite installation ine.

### Resetting & Importing

M'Ultimate Multisite zinthu zatsopano, komanso add-ons, zimene zikhoza ndi kukhala kuti zipereke email zatsopano m'maka.

Kuti mutambira mavuto ena ndipo kutenga mavuto ena, **tsatambira templates zatsopano za email monga System Emails pa installation yanu m'maka** , ngakhale zimene si zofunika kwambiri kuti zina zikufune kukhala ndi mfundo ya zinthu zina.

Komabe, super admins ndi agents angayere import emails zomwe zikuyenera pambuyo pa importer tool. Izi zimapanga email yosavuta (new system email) ndi mawu ndi mfundo za template ya email yatsopano, kuyesa kuti super admin iye amupereke zinthu zonse zomwe ali m'mulo kapena kuphera.

#### How to import system emails

Tumpa ku kwa Settings ya Ultimate Multisite, kulienda kwenye tab ya **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Kisha, kwenye sidebar, piga kitufe cha **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Kwenye ukurasa wa System Emails, utaona kitufe cha hatua cha **Reset & Import** juu. Kupiga kitufe hicho kitafungua dirisha la import na reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Kisha, unaweza kubadilisha (toggle) chaguo la Import Emails ili kuona ni emails gani za mfumo zinaweza kuingizwa.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Kufuta System Emails

Wakati mwingine, utagundua kwamba maboresho uliyofanya kwenye template ya email fulani hayajafanya kazi kwako tena na unataka kuiweka katika hali yake ya **default**.

Katika hali kama hiyo, una chaguo mbili: unaweza kufuta system email na kuifungua tena (kutumia maelekezo yaliyotolewa hapo juu) - hii itafuta metrics za kutuma na vitu vingine, hivyo njia hii haipendekezwi zaidi.

Au unaweza kutumia **Reset & Import tool** ili kurekebisha template hiyo ya email.

Ili kurekebisha template ya email, unaweza kufuatilia hatua hapo juu mpaka ufikie Reset & Import tool, na kisha, weka (toggle) chaguo la **Reset** na chagua emails unazotaka kurudishwa kwenye maudhui yake ya default.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
