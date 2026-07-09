---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Kufotera kwa Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**KUFOTERA: Chifukwa choti chofotera ndi kuti mwayi wina wopanga software monga Ultimate Multisite ulemu lina mwayi wina wopanga software. Webhook imapereka malingaliro a real-time kwawo. Webhook imapereka data kapena payloads kwa applications zina monga momwe zimapangidwa, zomwezi ndi kuti **mupereke data mwachangu.**

Ilo ndi kofunika ngati mukufuna kupanga (integrate) kapena kupasa data zina kuchokera kwa Ultimate Multisite ku CRM kapena system inayo m'maka nthawi yomwe chinthu chimapangidwa. Mwachitsanzo, mukuwunika kupasa dzina ndi email ya m'muli kwa mailing list m'maka momwe muli ndi akaunti yomwe yenera imapangidwa.

## Kodi mwayi wopanga webhook? {#how-to-create-a-webhook}

Kuti upange webhook, ndi lero ku dashboard la admin la wopanga network wanu. Kuti **Ultimate Multisite > Webhooks > Add New Webhook.**

![Lero la list la Webhooks lolimba ndi button ya Add New Webhook](/img/admin/webhooks-list-empty.png)

Mmodzi, muli ndi ulemu wopanga webhook:

![Form ya Add New Webhook imodzi ndi fields za Name, Event, ndi URL](/img/admin/webhook-add-modal.png)

Poyenera webhook wosiyanasiyana m'maka momwe muli ndi **Name, URL,** ndipo **Event**. Muli ndi chifukwa chomwe muli ndi name yomwe mukuwunika kwa webhook wanu. Zinthu zofunika kwambiri ndi URL ndi Event.

![Interface ya edit webhook imodzi ndi field ya URL ndi preview ya payload](/img/admin/webhook-url-field.png)

URL ndi **endpoint kapena malo omwe Ultimate Multisite idzakhala kupasa payload kapena data.** Ilo ndi application lomwe lidzaphunzira data.

Zapier ndi mwayi wosiyanasiyana wopangidwa kwambiri womwe anthu amagwiritsa ntchito kuti muwone kupanga (integration) ndi applications zina zokhudzana kukhala luso kwambiri. Osati muli ndi platform monga Zapier, mukuwunika kupanga function yomwe yenera kuti idzakhale data ndipo idzathandizira. Onani ulemu wosiyanasiyana kwa **kodi mwayi wopanga Ultimate Multisite ndi Zapier.**

M'mulo ku muli m'mulo wa ndikufotera momwe webhook umakono, ndi momwe nkhani zosangalatsa (events) zomwe zili pansi pa Ultimate Multisite. Tili tikukonza kwa site yomwe imapereka data (3rd party site) yomwe ndi [requestbin.com](https://requestbin.com/). Site lili lopereka kuti tiye endpoint ndikupatsa payload osati tikufuna kulimbikitsa (coding). _**Kukhala kwa chidziwika: zomwe zimapereka ndi kukhala kwake ndi kuwonetsa kuti data imapereka.**_ Kodi kudziwika komwe kumapereka kapena kuchitika kukhala pansi pa payload.

Tiyendera ku [requestbin.com](https://requestbin.com/) ndikupseza Create Request Bin.

Pambuyo pomwe mukuphunzira, imapereka kuti mupseze (log in) ngati muli ndi account kapena mupseze. Ngati muli ndi account, zimapereka ku dashboard yanu monga momwe. Pa dashboard yanu, mudzindikira m'maka endpoint kapena URL yomwe mungayendera kuti mupereke webhook ya Ultimate Multisite yanu.

Mupereka URL ndikuyendera ku Ultimate Multisite. Yendera endpoint pansi pa field ya URL ndikupseza event yomwe muli pansi. M'maka, tili kupereka **Payment Received**.

Event ili limapereka pamene munthu amapereka malipiro. Zosangalatsa onse, maonero azi, ndi payload zazi zimapereka pansi pa ndau ya langizo. Kupseza button ya **Add New Webhook** kuti mupereke webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Muli ndi ule wina wopereka test event ku endpoint kuti tiwonetsani kuti webhook yomwe tikupereka imapereka. Timapereka izi monga momwe mungupseze **Send Test Event** pansi pa webhook yomwe tikupereka.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Ili limapereka window la kuyesa kuti test lili lolimba.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Tukumbuka m'ndoto ya _Requestbin_ site, mutazama kuti payload imerekeledwa kupita ndi ndalama zochezera.

Iyi ndiyo mfaridzi yopambana momwe webhook ndi endpoints amagwira ntchito. Ngati mukufuna kukhala ndi endpoint wanu wamene, mudzafuna kukhala ndi function wanu wamene adzakhazikitsa data yomwe muli imerekeledwa kuchokera kwa Ultimate Multisite.
