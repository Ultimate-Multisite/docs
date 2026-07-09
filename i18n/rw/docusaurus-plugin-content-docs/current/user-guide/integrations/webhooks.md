---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Umuhura ku Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**UMUTWE: Uruko cyangwa ubutumwa bwawe rwa hari ku bakoresha ubwujumbura bw'ubwoko bw'ibyo bishobora gukora (advanced users).**_

U **webhook** ni uburyo ushobora umuntu cyangwa software nk'Ultimate Multisite kugufasha ibindi by'ubwoko bwo gukora (applications) ubushobozi bwo kubigisha amakuru mu gihe cyiza. Webhook igenda data cyangwa payloads ku ngota z'ibindi by'ubwoko bwo gukora mu gihe cyiza, bitewe ko **ugira data mu gihe cyiza.**

Iki ni ikintu gikomeye niba wumva ubushobozi bwo gukoresha (integrate) cyangwa gufasha ibindi by'ubwoko bw'ibyo bishobora gukora ku Ultimate Multisite, kugira ngo ufungura data mu gihe cyiza ku CRM cyangwa mu gihe cyo kubyara ibindi. Urugero, ushobora gutuma izina ry'umuntu n'email yayo ku mailing list mu gihe cyose umuntu w'ibanire yashyirwaho.

## Uburyo bwo gukora webhook {#how-to-create-a-webhook}

Kugira webhook, gukora mu dashboard yawe ya network admin. Gukoresha **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Icyo cyangwa uburyo bwo gukora webhook, ushobora gufasha ubushobozi bwawe:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Iyo ugora webhook w'ibanire, uza kubazwamo ibindi nk'**Name (Izina), URL,** n'**Event (Icyemezo).** Ushobora gukoresha izina yose ushaka ku webhook yawe. Ibyo byiza cyane ni URL n'Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL ni **endpoint cyangwa igice cyo gukora** aho Ultimate Multisite izagenda gukoresha **payload cyangwa data.** Iki ni ubutumwa bwo kubona data.

Zapier ni uburyo bwiza bwo gukoresha umuntu kugira ngo gushobore gukora integration n'ibindi by'ubwoko bwo gukora (3rd party application) mu buryo bwiza. Ubwakozi ukoresheje platform nk'Zapier, uza gutegura uburyo bwawe gukora custom function itera data kandi igikorera. Gushobora kubona ubutumwa kuri **how to use Ultimate Multisite webhook with Zapier.**

Mu gihe, twandukira uburyo ubushobozi bwo webhook wishobora gukora kandi ibyerekeye ibyerekeye ibyerekeye Ultimate Multisite. Turakoze gukoresha umwe mu ntego y'umwe, [requestbin.com](https://requestbin.com/). Iyi ntego izakwibona uburyo wumva payload (data) nta kumenya cyangwa gukora code. _**Ubwumvikane: igihe cyose cyo gukora ni gufashisha ubushobozi bwo kubona ko data yashoboraga.*_ Nta gukora cyangwa gukora ibindi byo ku payload.

Gukoresha [requestbin.com](https://requestbin.com/) kandi ugukora "Create Request Bin".

Nyuma yo gukora ubuto, izakwibona ko ugomba gufasha (log in) niba wari uri mu muryango wawe cyangwa ukugira umwe. Niba wari uri mu muryango wawe, izakwibona ko igihe cyose cyo gukora ni gufashisha uburyo bwo kubona (dashboard). Ku dashboard yayo, uzakwibona imihi cyangwa URL ushobora gukoresha mu gukora webhook yawe ya Ultimate Multisite.

Gukoresha URL yose kandi ugusubira ku Ultimate Multisite. Gufasha ihiyi endpoint kuri field ya URL kandi uba umenye ibindi byo kwerekana (select) ku dropdown. Mu gihe cyacu, twagize **Payment Received**.

Iyi ere (event) igikorwa cyane iyo umuntu yikora amafaranga. Ibyo byose byo ere, uburyo bwo kubyereza ibyo, n'ibindi byo byo mu payload, byarashyizwe ku mwera wa ipage. Gukoresha button ya **Add New Webhook** kugira ngo ushye webhook yawe.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Yose twakwibona uburyo gukora ere (test event) ku endpoint kugira ngo twibone niba webhook twagize yashobora gukora. Tushobora gukora ibi bishoborwa binyuze mu gukoresha button ya **Send Test Event** hamwe n'iyo webhook twagize.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Iyi ikoresheje ko hari igice cyo kubona (confirmation window) kigira ko ere yikora neza.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Iyo turere mu site ya _Requestbin_, uza kura ko payload yashoboraga yari yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga yashoboraga y
