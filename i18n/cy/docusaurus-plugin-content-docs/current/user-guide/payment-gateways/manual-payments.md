---
title: Sefydlu Taliadau â Llaw
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Sefydlu Taliadau â Llaw (v2)

_**NODYN PWYSIG: Mae’r erthygl hon yn cyfeirio at Ultimate Multisite fersiwn 2.x.**_

Mae taliadau â llaw yn ffordd i chi gynnig dulliau talu eraill os nad yw **Stripe** neu **PayPal** ar gael i’ch defnyddwyr. Gall fod yn drosglwyddiad gwifren neu fanc neu unrhyw ddull talu arall sydd ar gael i’ch defnyddwyr yn lleol.

## Sut i alluogi Taliadau â Llaw

Mae sefydlu taliad â llaw yn hawdd iawn. Dim ond ei alluogi o dan byrth talu sydd angen i chi ei wneud, a rhoi cyfarwyddiadau manwl ar sut y dylai’r defnyddiwr anfon y taliad.

Yn gyntaf, ewch i **Ultimate Multisite > Settings > Payments**. O dan **Payment Gateways** , trowch **Manual** ymlaen. Fe welwch y bydd blwch **Payment Instructions** yn ymddangos i chi.

Ychwanegwch at y blwch hwn yr wybodaeth y bydd ei hangen ar eich cwsmer i wneud y taliad. Gall fod yn fanylion eich cyfrif banc a’ch e-bost fel y gall y cwsmer anfon cadarnhad y taliad atoch, er enghraifft.

![Togl porth talu â llaw gydag ardal testun Cyfarwyddiadau Talu](/img/config/manual-gateway-expanded.png)

Dyma ryngwyneb gosodiadau’r porth â llaw:

![Gosodiadau porth â llaw](/img/config/manual-gateway-settings.png)

Ar ôl ei sefydlu, cliciwch ar **Save Settings** ac mae wedi’i wneud. Pan fydd defnyddwyr yn cofrestru i’ch rhwydwaith, byddant yn gweld neges yn dweud wrthynt y byddant yn derbyn eich cyfarwyddiadau i gwblhau’r pryniant.

![Neges cadarnhau cofrestru yn dweud wrth y defnyddiwr y bydd yn derbyn cyfarwyddiadau talu](/img/frontend/registration-manual-notice.png)

A byddant hefyd yn derbyn neges ar eich tudalen **Thank You** gyda’ch cyfarwyddiadau talu.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Cadarnhau taliadau â llaw

I gadarnhau taliad â llaw, ewch i’r ddewislen **Payments** ar y bar chwith. Yno gallwch weld yr holl daliadau ar eich rhwydwaith a’u manylion, gan gynnwys eu **status**. Bydd gan daliad â llaw statws **Pending** bob amser nes i chi ei newid â llaw.

![Rhestr taliadau yn dangos taliad â llaw sy’n aros](/img/admin/payments-list.png)

Ewch i mewn i dudalen y taliad trwy glicio’r **reference code**. Ar y dudalen hon mae gennych holl fanylion y taliad sy’n aros, megis ID cyfeirio, cynhyrchion, stampiau amser a mwy.

![Tudalen manylion taliad yn dangos cod cyfeirio, cynhyrchion, a chyfansymiau](/img/admin/payment-edit.png)

Yn y golofn dde, gallwch newid statws y taliad. Bydd ei newid i **Completed** a **thoglo’r opsiwn Activate Membership** yn galluogi gwefan eich cwsmer a bydd eu haelodaeth yn weithredol.

![Tudalen golygu taliad gyda Status wedi’i osod i Completed a thogl Activate Membership](/img/admin/payment-activate-membership.png)
