---
title: Whakawāhi waka
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# He Whakarongo Wānanga ki Webhooks (v2)

_**TŪPA: He tino whakamārama: tēnei āhuatanga he mō ngā mea whai whakamārama nui.**_

He **webhook** he heata he pēnei i te app he pēnei i Ultimate Multisite, he aha ana i te tino whakamahi ai ngā wāhi kē ki te whakarato mō ngā application kē. He webhook e whai data he data he ngā payload ki ngā application kē i te wakamārama, ahau te mea e **whakaahua data i runga i te wakamārama**.

He tino māhinaki ana ko te tino nui o ia he tino whakamahi ana koe i te whaiwhakarite (integrate) he data he tino tika ana i te Ultimate Multisite ki te CRM kē he tētahi system, me tētahi wakamārama ana i roto i te mea e whakatika i te atua. Hei mākete, he tino nui ko te whero ingoa o te kaurau (user) me te email i rite ana i te wakamārama he pō whenua hou e whakatika.

## He aha te whakamahi ki te whakauru webhook? {#how-to-create-a-webhook}

Kia whakawhanainga webhook, pono ki te dashboard o tō admin network. Whakawāke **Ultimate Multisite > Webhooks > Add New Webhook**.

![Whakaahua o te whānui o ngā webhook e pēnei i te button Add New Webhook](/img/admin/webhooks-list-empty.png)

I tētahi, he tino whakamūnga koe ki te whakarereke te configuration o te webhook:

![Whakaahua o te fōm Add New Webhook me ngā rohe Name, Event, me URL](/img/admin/webhook-add-modal.png)

I tēnei, ka whakatika koe i mōhioinga he tino whakamahi ana koe i **Name, URL**, me **Event**. He tino nui ngā URL me te Event.

![Whakaahua o te interface e whakawhiti webhook he tino whakamahi ana i te rohe URL me te preview o te payload](/img/admin/webhook-url-field.png)

He URL he **endpoint he wāhi whai mo** he Ultimate Multisite e whero te **payload he data**. He tēnei application he whakapā i te data.

Zapier he te whakatika tino whakahou ana he tino whakamahi ana ngā kaiwhai whakamahi ki te whakawhanainga (integration) me ngā application kē. I roto i te mea he nui te platforma pēnei i Zapier, ka taea e koe te whero te whakatika he function manawa (custom function) he whakapā i te data he whakaora ana i te tino whakamahi ana i te data. He whakataki tēnei me **he aha te whakamahi i webhook o Ultimate Multisite me Zapier**.

I roto i tēnei paketi, ka whakaaro atu tā mātou ki te whakamārama i te whakamārama taketake o te webhook ā, me ngā aua (events) e pai ana i Ultimate Multisite. Ka whakamahi tā mātou i wāhi pōuri (3rd party site) ahau, ko [requestbin.com](https://requestbin.com/). Ka taea ai tēnei wāhi pōuri atu te whaiaro endpoint he tino pai, me te whakatipu i te payload (data) i roto i te whakamahi i te whakaaturanga (coding) i runga i te mahi. _**Whakamārama: Ko te mea katoa e hoki ana ia ko te whakaatu ki a tātou o te pētea (data) he pētea ona tino pai.**_ Ka tautoko nei atu ahau i te whakamahi i te payload, me te kore akorua mahi au.

Pāinga ki [requestbin.com](https://requestbin.com/) ā, whakatipu i Create Request Bin.

I taiao i tēnei papai, ka whakaatu ia ki a koe mō te whakamahi i account he tino pai, ahau e pakihi atu. Ko i runga i tō dashboard, ka whakaahua i runga i te endpoint (URL) he tino pai, he ka taea ai i a koe te whakamahi i i te whakatipu i tō Ultimate Multisite webhook.

Kia mau i te URL ko whakawhiti ki te hoki ki Ultimate Multisite. Whakarite i te endpoint i te faahi URL ko whaiaro i te aua (event) e pai ana i te dropdown menu. I tēnei whakamārama, ka whaiaro tā mātou i **Payment Received**.

Ko aua aua (events) he whakakiko mai i roto i te wā e whakatere koe i pētea. Ka tautoko nei atu ahau i ngā aua katoa e pai ana, te whakamārama o ia, me ngā payload-sahi i te pētaki o te puta mai o te papai. Whakarite i te button **Add New Webhook** ko whakatipu i te webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Ka taea e tā mātou i te whaiaro aua (test event) ki te endpoint mō tā mātou hei whakaahua ahau, kia whakaaro ai ko te webhook he ka mahi. Ka taea tēnei i roto i te whakamahi i **Send Test Event** i runga i te webhook koe e whakatipu.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Ka whakaatu i tēnei hena whakahirahira (confirmation window) kei te pētea he tino pai ko te aua (test).

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

I te wā e whakaaroha ki te _Requestbin_ site, ka whakaatu ai i a koe he pūmanawa (payload) tino whakamārama, he mea nui ana i te whakamārama o te webhook me ngā endpoints. Ko te ao pūrākau (basic principle) o te pēpi (webhook) me ngā endpoint ahau. Ko ko te mea, ko mō te whai whakaaro ki te whakatō endpoint tino whiriwhiri (custom endpoint), ka taea e koe te whakatō he funktiwha (function) tino whiriwhiri kia whakahaa i te data kua pēpi atu ana i a Ultimate Multisite.
