---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Am ystyriedd ar Webhooks (v2)

_**Gofalwg: Rhowdd ystafell honno neu'r ail-gwrnion yw ar gyferau cyflwynoedd uchel.**_

Mae **webhook** yn ffordd i'r app neu software fel Ultimate Multisite i ddarparu wybodaeth mewn amser byr i adeiladau eraill. Mae webhook yn dod â data neu payload i adeiladau eraill fel y mae hyn yn digwydd, gan ei fod, rydych chi **yn cael y data yn gyflym.**

Mae hyn yn ddefnyddiol os oes angen Rhinod neu drososi data penodol o Ultimate Multisite i'r CRM neu system arall eto bob amser sydd â'i gael. Ar enw, rydych chi angen anfon enw ybysgol a adran e-bost o'r benwr i'r llyfr cyflwyniad bob amser sydd â'i cael cyfathrebu newydd.

## Sut i creu webhook {#how-to-create-a-webhook}

I creu webhook, mynd i'r dashboard admin eich rheol cyd-gynlluniau. Clic ar **Ultimate Multisite > Webhooks > Add New Webhook.**

![Llyfr gyflwyniad Webhooks gwblhan gyda chwilio "Add New Webhook"](/img/admin/webhooks-list-empty.png)

Feach gallwch chi redig y cyfathrebu'r webhook:

![Form Add New Webhook gyda chyflwyniadau Enw, URL, a Event](/img/admin/webhook-add-modal.png)

Pan creu webhook newydd bydd eu cael cyfieithiadau fel **Enw, URL,** a **Event**. Gallwch ddefnyddio unrhyw enw eich hoffter ar gyfer eich webhook. Mae'r ffeillion hanfodol yn y URL a'r Event.

![Cyfathrebu redig Webhook yn dangos y ffeil URL a'r preif payload](/img/admin/webhook-url-field.png)

Mae URL yn **endpoint neu ddefnydd** i'r cyflwyniad i sydd â'i gael y **payload neu data**. Mae hyn yn adeilad sydd â'i cael y data.

Zapier yw'r ateb mwyaf cyffredinol a'r defnyddwyr yn ei ddefnyddio i wneud ychwanegiadau gyda chwaraeion trefniol (3rd party application) yn hanfodol. Heb platform fel Zapier, bydd angen Rhinod gynnig ffurfiad cyfathrebu newydd sydd â'i cael y data a procesio'r. Gweld y ail-gwrnion hon ar **sut i ddefnyddio Ultimate Multisite webhook gyda Zapier.**

Yn y ffurfiol hwn, byddwn ni'n gweld y cyd-deall cyffredin o beth yw webhook a'r digwyddiadau sydd ar gael yn Ultimate Multisite. Byddwn yn defnyddio safle trefedol o'r chwarae [requestbin.com](https://requestbin.com/). Bydd y safle hwn yn sylw i ni i creu endpoint a gael y payload heb ei codi. _**Disclaimer: bydd yr holl ddefnydd yw dangos i ni bod data wedi cael ei derbyn.**_ Nid fydd unrhyw prosesau neu unrhyw gweithrediad ar y payload.

Goedi i [requestbin.com](https://requestbin.com/) a chwarae Create Request Bin.

Ar ôl clisi'r bot hwn, bydd yn gofyn i chi log in os oes gennych account neu ddysgu. Os oes gennych account, bydd yn rhoi chi'n dros y dashboard eu. Ar eu dashboard, byddwch yn gweld yr endpoint neu URL sydd ar gael i'w defnyddio mewn creu eich webhook Ultimate Multisite.

Goedi a chopyll y URL a dod yn ôl i Ultimate Multisite. Rheoliwch y endpoint ar y field URL a chwaraewch digwyddiad o'r dropdown. Yn y مثال hwn, byddwn yn debyd **Payment Received** (Pryd wedi cael ei derbyn).

Mae'r digwyddiad hwn yn cael ei gweithredu dim ond pan mae dyn yn gwneud peidiad. Mae pob digwyddiad ar gael, eu disgrifiad a'r payloadau, wedi'u llisio yn y lle llwybr y pein. Chwaraewch y bot **Add New Webhook** i sicrhau'r webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Gallwn ni angen gyflwyno digwyddiad testol i'r endpoint i weld os yw'r webhook a ddatblygwch yn gweithio. Gallwn ni hyn gyda chwarae **Send Test Event** o dan y webhook a ddatblygwch.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Mae hyn yn dangos gwyrddiad cyfathrebu yn ddyfynnu bod y test wedi'i ddoddi.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Dw i'n ddim yn ôl y site _Requestbin_, byddwch yn gweld bod y payload wedi cael ei derbyn gyda rhywfaint o ddata test.

Dyma yw'r prin cyflwyniad o beth yw webhook a endpoints. Os ydych chi'n creu endpoint newydd, byddwch yn angen i chreu ffurf (function) newydd i procesio'r data sy mae'n cael ei derbyn o Ultimate Multisite.
