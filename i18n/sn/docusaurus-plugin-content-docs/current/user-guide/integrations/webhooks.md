---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Kuona Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**CHINDIRA: Ndinoda kunyira kuti iye ndiri munhu anogona kuita zvinhu zvinokosha.**_

**Webhook** ndiyo nzira inoshandiswa kuti app kana software yakaita se Ultimate Multisite inopa maunhu anoramba (other applications) nguva yakakura. Webhook inopa data kana payloads kune apps dzine rudo, izviro chinotevera zvichitika, uye iye **unogona kuwana data mwedzi.**

Izviro zvinokwanisa kuti uone kuti unenge uchida kugadzirisa (integrate) kana kupasa data yakatika kubva kune Ultimate Multisite kune CRM kana system inotra mazuva onozuva, panguva dzose zvinhu dzinotevera. Zvinhu zvakasiyana, sei, unoda kuita kuti uropedzi (mailing list) uoneita nguva yakakura kana munhu wese anokwanisa kubva kune akaunti yakare.

## Sei kuita webhook {#how-to-create-a-webhook}

Kuti utore webhook, enda ku dashboard yezvinhu zvinogona kuita (network admin dashboard). Chibvumirano **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Uchipa nguva iwe kutaura (edit) configuration ya webhook:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Nekuti unenge uchida webhook wekuti, uingwa nekuona zvinhu zvakaita se **Name, URL,** uye **Event**. Unogona kuita kuti webhook yako inenge yakaita sei kunoita. Zvinotevera zvikuru ndiyo URL uye Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL ndiyo **endpoint kana chigai chinotevera** chinhu Ultimate Multisite chinotevera **payload kana data**. Iyi application inoziva data.

Zapier ndiyo solution yakasiyana yakaita kuti uone kugadzirisa (integration) neapplication dzine 3rd party zvinhu kune kuramba kwakawanda. Usi platform yakaita se Zapier, unofanira kuita kuti iwe uchigadzira function yakanaka (custom function) inoziva data uye inoshandisa. Saka shandisa iri article pamusoro **kuti uone kuti Ultimate Multisite webhook inoshandiswa ne Zapier.**

Muriro munini wese pamwe tinoviona kune chii chinotevera kune webhook inonyanya uye zvinhu zviri kuonekwa muUltimate Multisite. Tichachida kuita zvinotevera kubva mumwe site anotsanana wechinhu, [requestbin.com](https://requestbin.com/). Ichi site chinokupa kuti tione endpoint uye kunzire payload hondo tichatenderera kuratidza kune coding. _**Muriro: zvinoita zvakawanda ndiri kuona kuti data yakangobva yakangopfu.**_ Haichazviita kunzwisisa kana kufamba nepayload yese.

Enda kuenda ku [requestbin.com](https://requestbin.com/) uye chibvumira Create Request Bin.

Panguva unopfuura iyi button, ichadzviona kuti uingave kune account kana ukasavimbisa. Kungakabva na account, ichakupa zvinhu zvako zvinotevera ku dashboard yavo. Pa dashboard yavo, uchange uone endpoint kana URL unogona kushandisa kubva kunotsanana kwako kweUltimate Multisite webhook.

Chiramba uye chinjisa URL uye ndaenda pakanisse Ultimate Multisite. Chivimbisa endpoint pamusoro pe URL uye chinechigadzirwa (dropdown) chinotenderera event yakasiyana. Muoko iripo, tichachidzidzera **Payment Received**.

Iyi event inotsanana kana mutenda anogona kuita payment. Izvi events zvinotevera, maunhu anozivisa, uye payloads dzavo dzinotsanana pamusoro pe chishoma chepanyama. Chinechigadzirwa (button) Add New Webhook kuti uingire webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Ndatenda ndinogona kuita test event kune endpoint kuti tione kana webhook yakati yedu inoratidza zvinoita. Tinogona kutamba nekuita iyi chii neWebhook yakati yedu yakatenderwa. Tinogona kubva nekuita **Send Test Event** pamusoro pe webhook yakati yedu yakatenderwa.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Iyi inoratidza window ya kunyora kuti test yakangobva yakangopfu.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Nekuti tiri kuenda kune site ya _Requestbin_, tiri kuona kuti payload yakangoperekwa yakanaka ne dambudziko rekutest.

Iyi ndiyo nzira yakapfuma sei webhook uye endpoints dziri kuenda. Kana uchida kuita endpoint wako wakaunoda, unofanira kuita function wako wakaunoda kuti uonekane data inotevera kubva kune Ultimate Multisite.
