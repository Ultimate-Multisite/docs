---
title: Cyflwyno Płatheby Manwl
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Rheoliad Mae Płatheirion Manwl (v2)

_**NOTIADOL BEYD: Mae ail ddefnyddio hwn yn cyfeiriad i Ultimate Multisite fersiwn 2.x.**_

Mae płatheirion manwl yn ffordd i chi offeru ffordd płatheirion arall os na **Stripe** neu **PayPal** nid yw ar gaelon i'ch benwyr. Gallai fod yn cyflwyniad llawer neu dros y banc neu unrhyw ffordd płatheirion arall a oes gennych eich benwyr ar leol.

## Sut i gymerchu płatheirion manwl

Mae setheddiad płatheir manwl yn rhy gymryd. Mae angen i chi ei chynllunio yn ystyried y cymerchu'n ddefnyddio'r gwahaniaethau płatheirion ac rhoi gyfarwyddiadau cyffredinol ar sut bydd y benwyr yn anfon y fpagt.

Cyndd, mynd i **Ultimate Multisite > Settings > Payments**. Os byddwch chi'n gweld y **Payment Gateways**, rhwng ychwanegu **Manual** arall. Byddwch yn gweld bod ystafell **Payment Instructions** yn dangos i chi.

Cynllunio y cyfieithiadau sydd angen i'r cyddee i wneud y fpagt i'r stafell hwnnw. Gallai fod yn ddefnyddio eich amgylchedd banc a'r e-bost, felly gall y benwyr anfon y cyfathrebu płatheirion i chi, er enghasz.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Dyma'r ffurf setheddiad y płatheir manwl:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Ar ôl ei setheddi, gwch on i **Save Settings** ac mae hi wedi cael ei wneud. Pan fydd y benwyr yn regrffennu i'ch rheiniad, bydd eu gweld message yn dweud wrth eu cael eich cyfarwyddiadau i gwblhau'r pryd.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ac bydd eu gael hefyd message ar eich **Thank You** page gyda'ch cyfarwyddiadau płatheirion.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Cynllunio płatheirion manwl

Iechyddu i'r ffurfiad manwl, mynd i'r menu **Payments** ar y llawr. Yn yma gallwch gweld pob ffurfiad ar eich rheini a'i adranau, gan gynnwys eu **status**. Bydd ffurfiad manwl yn cael ei status **Pending** allan yn cael ei newid yn manwl.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Rydych chi'n cyflwyno y dudalen ffurfiad gan clisi'r **reference code**. Ar y dudalen hwn, mae gennychu pob adran o'r ffurfiad manwl, fel ID gyfeiriad, cynnyrchau a chwaraeau a chwaraeau mwy.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ar y colwm o'r ddefnyddio, gallwch newid y status y ffurfiad. Mae newid ei fod yn **Completed** a chwarae'r opsiwn **Activate Membership** yn gael eich safle'r cydwyliau ac bydd eu cydwyliau yn cael eu cyflawni.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
