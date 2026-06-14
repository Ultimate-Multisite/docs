---
title: Còmhlaidachd Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# A' Chluainteachadh le Ultimate Multisite agus Zapier

Duis a' chluainteach, rinn am ceann de na stiùirichean a' sgrùdadh [Webhooks](webhooks.md) agus faic a tha iad a lasachadh le app-eichemhan a tha a' chluainteachd.

Tha a' uile a' sgrùdadh webhooks a' tòiseachadh gu mòr, is dòlaidh eadar-dheargas a' chluainteachd agus a' ghràdh payload-iomcha. Tha **Zapier** sealladh airson an t-aithreach seo.

Tha Zapier le sgrùdadh le mòran de 5000 app, a tha a' sgrùdadh a' chluainteachd eadar-dheargas a' chluainteachd a' chluainteachd a' chluainteachd.

Is e conaltradh **Triggers** a tha thu a' chluainteach gu lèir nuair a thàth a' chluainteach ar do ngràdh (e.g, tha sgeulachd a' tòiseachadh agus a' chluainteach an ìomcha_a_chluainteach) no a' gineadh **Actions** ar do ngràdh a' tòiseachadh le eichemhan a' chluainteachd (e.g, gnìomhach ùr-a-chluainteach a' chluainteach iair a' chluainteach Ultimate Multisite).

Tha seo a' fàs gu sònraidh air fud chun **Ultimate Multisite Zapier triggers** agus actions a tha a' chluainteachd de [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Conaichean airson a bhith a' fháil air an t-aithreach

Tha eadar-dheargas, leugh airson Ultimate Multisite anns a' leas a Zapier. Mar a tha thu a' chluainteach, is dòlaidh eadar-dheargas a' chluainteachd a' chluainteach a' chluainteach a' chluainteach a' chluainteach a' chluainteach a' chluainteach.

Thànaidh thu air do dashboard agus thaigh an **+** **Create Zap** a' chluainteach ar an leas a' chluainteach airson a' sgrùdadh ùr.

![Zapier dashboard le nút Create Zap](/img/admin/webhooks-list.png)

Bhaidh thu a' chluainteachd gu fhaighinn air an seòl a' chluainteach.

Tha "wp ultimo" a' chluainteach anns an seòl a' chluainteach. Tha eanach airson a thobadh an t-aithreach **Beta**.

![Sealladh airson WP Ultimo anns an leas a' chluainteach](/img/admin/webhooks-list.png)

Tha thu a' chluainteachd air a' chluainteachadh, tha thu a' chluainteach a' chluainteach: **New Ultimate Multisite Event**.

![Sealladh airson New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

An uair seo, rinn am fhaighinn Zapier air do **ngràdh**. Tha an t-aithreach a' chluainteach le "Sign in" a' chluainteach a' chluainteach a' chluainteach a' chluainteach.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Ràdh an t-sìth air a' chùlchnaichean (network admin panel) agus tha thu a' chluin air **Ultimate Multisite > Settings** > **API & Webhooks** a' chluin, agus gheibh seachdaidh an seachdainn API.

Taisg an t-seachdainn **Enable API** a' chluin gu is dòlaidh, is eadar-dhearg a tha thu a' chluin air a' sgaidh an t-sìth seo a' sgaidh.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Usgaidh an seachdainn **Copy to Clipboard** air na fhaisghean API Key agus API Secret, agus gheibh thu an sin a' chluin air an seachdainn a' chluin.

Air an t-seachdainn URL, duileadh an URL fhuilinn a tha thu a' chluin, a' tismainn (HTTP) no HTTPS.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Taisg an t-seachdainn **Yes, Continue** gu leith air an t-sgaidh sin. Má tha eanach thu, rinn thu a' chluin air an t-sìth a' chluin a' chluin! Taisg air **Continue** gu leith air a' sgaidh ùr.

## Conas a thrascall a' sgaidh ùr

An uair a tha thu a' chluin a' chluin, is eadar-dhearg a tha eanachdaidhean a' tòisich. Ghile an **payment_received** air an seachdainn seo airson an tòisich seo.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Air dè an tòisich a thrascall agus tha thu a' chluin air **continue**, tha seachdainn **test** a' chluin.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Air an t-seachdainn seo, tha Zapier a' chluin a' chluin gu faic a' chluin a tha thu a' sgaidh air an tòisich sin. Air a' chluin a tha eanachdaidhean a' sgaidh a' chluin a' chluin seo, byrgeas a thann fiosrachadh gu sin.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Th' test a bhith agad **a' chluichdachadh gu sònraichte** agus tha e ag roinn an eisimpleil fhaisg. Bidh an eisimpleil fhaisg seo a bhith a' chùineachadh leat air a' chlàradh gu lèir chì thuairidh is eadar a dhèanamh air. Tha an t-trigger agad air a chluichdachadh agus tha e ag iarraidh a bhith a' chluichdachadh le sgaidhinean eile.

## Conaichem airson Aighean (Actions) a chur i obair

Tha aighean a' faighinn fhaisginn a' chùineachadh air t-triggers eile gu nàchairtasan ùra anns an t-nàchairtadh agad.

Mar a tha thu a' chluichdachadh air **a chur i obair sealladh aighean**, rinn thu a' chluichdachadh Ultimate Multisite **Beta** agus an am fhaighinn **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Mar a tha eairt, bidh tu ag chur i obair tòiseachadh air do chluichdachadh, mar a robh sinn a' chluichdachadh **Ais eadar a chur i obair**, no a thabhairt sealladh a chur i obair. Mar a tha sinn a' chluichdachadh, rinn sinn an am fhaighinn a chur i obair a chur i obair a chur i obair a chur i obair.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### A chur i obair an Aighean (Setting up the Action)

Tha seo **an sealladh buntainneachd an aighean** agus tha e gu tric a' churaidhean a' tòiseachadh. An t-fhaisg a thabhairt tu ag iarraidh is dòigh, tha an t-fhaisg a chur i obair **Item**. Is e **Model fhaisginn** agad anns an t-nàchairtadh agad, mar **Customers, Payments, Sites, Emails** agus eile.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Nuair a thabhairt tu air an item, beidh an fòram a' chlàradh gu leathan airson na fhaisginn a tha riatach agus a tha riatach a tha a' tòiseachadh airson an item a thabhairt.

Mar eisimpleir, nuair a thabhairt tu air an item **Customer**, beidh na fhaisginn a chur i obair a bhith a' chlàradh gu lèir a tha riatach airson a chur i obair Customer ùr anns an t-nàchairtadh.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

An uair a thabhairt tu air a bhith a' chluichdachadh na fhaisginn riatach agus a' chlàradh air, beidh sealladh a chur i obair a' tòiseachadh le fhaisginn a tha a' chlàradh.

![Zapier action test a' chlàradh agus fhaighinn na faighinn](/img/admin/webhooks-list.png)

Rinn a tha thu sgrùth a' chlàradh agus a' chlàradh a' tòiseachadh gu sònraichte, tha an t-aithris agad a' chlàradh. Is e cudromach as fhaighinn air a bheachd ar do ngrath (network) gu siù a bha an ìomha a' chlàradh a' chlàradh a' thu sgrùth.
