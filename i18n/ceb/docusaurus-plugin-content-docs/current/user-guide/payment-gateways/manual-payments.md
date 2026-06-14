---
title: Pag-set Up sa Manual Payments
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Pag-set Up sa Manual Payments (v2)

_**MAHINUNGAN: Kini nga article nagtumong sa Ultimate Multisite version 2.x.**_

Ang manual payments kay usa ka paagi aron makahatag ka og ubang mga pama sa pagbayad kung wala magamit ang **Stripe** o **PayPal** para sa imong mga user. Mahimo kini usa ka wire transfer, bank transfer, o bisan unsang pama sa pagbayad nga available sa inyong mga user lokal.

## Unsaon pag-enable sa Manual Payments

Ang pag-set up sa manual payment dali ra kaayo. Kinahanglan lang nimo i-enable kini ubos sa payment gateways ug magbutang og detalyado nga instruksyon kung unsaon ang pagpadala sa bayad sa user.

Una, pumunta sa **Ultimate Multisite > Settings > Payments**. Ubos sa **Payment Gateways**, i-toggle ang **Manual** sa on. Makita nimo nga adunay moabot nga **Payment Instructions** box para kanimo.

Ibutang niini sa box ang impormasyon nga kinahanglan gamiton sa imong customer aron makabayad. Mahimong kini ang detalye sa imong bank account ug email nimo aron ang customer makapadala kanimo og kumpirmasyon sa bayad, pananglitan.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Ania ang interface sa manual gateway settings:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Human ma-set up na nimo, i-click lang ang **Save Settings** ug tapos na. Kung mag-register ang mga user sa imong network, makakita sila og mensahe nga nagsulti kanila nga madawat nila ang imong mga instruksyon aron mahuman ang pagpalit.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ug makadawat usab sila og mensahe sa imong **Thank You** page uban ang imong mga instruksyon sa bayad.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Pagpamatuod sa manual payments

Para i-confirm ang usa ka manual nga bayad, adto sa menu nga **Payments** sa wala nga bar. Didto nimo makita ang tanang mga bayad sa imong network ug ang ilang mga detalye, lakip na ang ilang **status**. Ang usa ka manual nga bayad kanunay adunay status nga **Pending** hangtod nga ikaw mismo kini i-change.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

I-enter ang pahina sa bayad pinaagi sa pag-click sa **reference code**. Sa pahinang ni nimo tanan nga detalye sa pending nga bayad, sama sa reference ID, mga produkto, timestamps ug uban pa.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sa tuig nga column, mahimo nimong usbon ang status sa bayad. Ang pag-change niini ngadto sa **Completed** ug ang pag-toggle sa option nga **Activate Membership** magabukas sa site sa imong customer ug ang ilang membership mahimong aktibo.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
