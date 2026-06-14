---
title: Pagtatakda ng mga Manual na Pagbabayad
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Pag-set Up ng Manual Payments (v2)

_**MAHALAGANG PAUNAWA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Ang manual payments ay paraan para mag-alok ka ng ibang paraan ng pagbabayad kung wala o hindi available ang **Stripe** o **PayPal** para sa mga user mo. Maaari itong wire transfer, bank transfer, o anumang ibang paraan ng pagbabayad na available sa inyong lugar.

## Paano i-enable ang Manual Payments

Napakadali lang mag-set up ng manual payment. Kailangan mo lang itong i-enable sa ilalim ng payment gateways at maglagay ng detalyadong mga tagubilin kung paano dapat ipadala ng user ang bayad.

Una, pumunta ka sa **Ultimate Multisite > Settings > Payments**. Sa ilalim ng **Payment Gateways**, i-toggle ang **Manual** sa on. Makikita mo na lalabas ang isang kahon para sa **Payment Instructions**.

Ilagay sa kahong ito ang impormasyon na kailangan ng customer mo para magbayad. Maaari itong mga detalye ng iyong bank account at email mo para makapagpadala sila ng confirmation ng bayad, halimbawa.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Narito ang interface ng manual gateway settings:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Pagkatapos mong i-set up, i-click mo lang ang **Save Settings** at tapos na. Kapag nagre-register ang mga user sa network mo, makikita nila ang mensahe na sasabihan silang tatanggap sila ng iyong mga tagubilin para matapos ang pagbili.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

At makakatanggap din sila ng mensahe sa iyong **Thank You** page na may kasamang iyong mga tagubilin sa pagbabayad.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Pagpapatibay (Confirming) ng manual payments

Para kumpirmahin ang isang manual na bayad, pumunta sa menu ng **Payments** sa kaliwang bar. Diyan mo makikita lahat ng mga bayad sa iyong network at ang kanilang mga detalye, kasama ang kanilang **status**. Ang isang manual na bayad ay palaging may katayong **Pending** hanggang hindi mo ito mano-manong binabago.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Ilagay ang payment page sa pamamagitan ng pag-click sa **reference code**. Sa pahinang ito, makikita mo lahat ng detalye ng nakabinbing bayad, tulad ng reference ID, mga produkto, timestamps at iba pa.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sa kanang column, maaari mong baguhin ang status ng bayad. Ang pagbabago nito sa **Completed** at ang pag-toggle sa opsyong **Activate Membership** ay magpapatakbo (enable) sa site ng iyong customer at magiging aktibo ang kanilang membership.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
