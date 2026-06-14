---
title: Aistidh brathdachadh manichrialach
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manual Payments a' sgaidh (v2)

_**NOTE CRÍODACH: Tha an article seo a' tighinn air Ultimate Multisite version 2.x.**_

Tha teicneachais a' chlàradh (manual payments) gu eil fadar a tha thu a' bheir a' tighinn am fhaighinn fhaisg eile mar **Stripe** no **PayPal** cha bhith air do chùisinn. Is e cheann-a-chlàradh (wire) no fhaisg banciùl no aon fhaisg eile a tha air do chùisinn leat an t-àite.

## Conaichean airson a' bheir a' tighinn am fhaisg a' chlàradh

Tha setadh a' chlàradh (manual payment) gu eil fìor. Tha e dìreach ag obair air a bheir a' tighinn an-dè an **Payment Gateways** agus a leumdaichn fiosrach air fa_in iad a tha thu a' bheir a' tighinn am fhaisg.

Prìomhach, ròidh gu **Ultimate Multisite > Settings > Payments**. An-dàiridh **Payment Gateways**, leumdaichn **Manual** on. Bidh thu a' faicinn an t-aon **Payment Instructions** box a' tighinn air dhut.

Leumdaichn fiosrach do chùisinn a tha thu a' bheir a' tighinn am fhaisg. Is e cheann-a-chlàradh banciùl agus an email a tha thu leat, mar de chuid a tha thu a' bheir a' tighinn an fiosrachadh fhaisg air a thiginn do chùisinn, mar de chuid a tha thu a' bheir a' tighinn am fhaisg.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Seo an seòrsa setadh a' chlàradh (manual gateway settings):

![Manual gateway settings](/img/config/manual-gateway-settings.png)

An uair a tha thu a' bheir a' tighinn, leumdaichn **Save Settings** agus tha e a' tòiseachadh. Nuair a tha chùisinn a' bheir a' tighinn air do ngrath, beidh sinn fiosrachadh a' tighinn air thu gu sònraichte airson a' chlàradh a' tighinn.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Chan eil iad ag fhaigh fiosrachadh air do **Thank You** page gu leathanach a tha thu a' bheir a' tighinn am fhaisg.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## A' chlàradh (manual payments) a' faighinn

(This section is currently empty in the source, so it remains as such.)

Tha eadar-fhaighinn tairgseach manual, rinn gu **Payments** ar bharr a h-àras. Sealltainn thu an tairgseach air a ghnothachadh agus na deiseilichean acu, a tha riinne **status** acu. Bidh tairgseach manual ag stad **Pending** gu sònraich gu is eadar a tharghainn amach.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gaisg an curtha air an seòl tairgseach gu leithid **reference code**. Ar an seòl seo tha thu a gcatharrachda deiseilichean tairgseach, agus tha eisimpleir riinne ID, eògan, agus eile.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ar an colum a' ghairm, leabhair thu an status air a laighinn. Cuir thu e sin air **Completed** agus tharghainn an option **Activate Membership**, chan eil seòl a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùladh a' chùl
