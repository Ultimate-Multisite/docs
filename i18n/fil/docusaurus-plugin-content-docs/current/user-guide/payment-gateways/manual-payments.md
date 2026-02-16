---
title: Pagse-set Up ng Manual Payments
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Pag-setup ng Manual na Pagbabayad (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay para sa Ultimate Multisite version 2.x.**_

Ang manual na pagbabayad ay isang paraan para makapag-alok ka ng ibang payment method kung sakaling hindi available ang **Stripe** o **PayPal** para sa iyong mga user. Maaari itong wire o bank transfer o kahit anong payment method na available sa iyong mga user sa kanilang lugar.

## Paano i-enable ang Manual na Pagbabayad

Napakadali lang mag-setup ng manual payment. Kailangan mo lang itong i-enable sa payment gateways at maglagay ng detalyadong instruksyon kung paano magpapadala ng bayad ang user.

Una, pumunta sa **Ultimate Multisite > Settings > Payments**. Sa ilalim ng **Payment Gateways**, i-toggle ang **Manual** para ma-on ito. Makikita mo na may lalabas na **Payment Instructions** box.

Ilagay sa box na ito ang impormasyon na kakailanganin ng iyong customer para makabayad. Halimbawa, pwede mong ilagay ang iyong bank account details at email para makapagpadala sila ng payment confirmation sa iyo.

![Manual payment gateway toggle at payment instructions box](/img/config/settings-payment-gateways.png)

Pagkatapos i-setup, i-click lang ang **Save Settings** at tapos na. Kapag nagparehistro ang mga user sa iyong network, makikita nila ang mensahe na makakatanggap sila ng instruksyon mo para makumpleto ang pagbili.

![Mensahe ng manual payment na ipinapakita habang nagpaparehistro](/img/config/settings-payment-gateways.png)

Makakatanggap din sila ng mensahe sa iyong **Thank You** page na may kasamang payment instructions.

![Thank You page na nagpapakita ng payment instructions](/img/config/settings-payment-gateways.png)

## Pagkumpirma ng manual na pagbabayad

Para kumpirmahin ang manual payment, pumunta sa **Payments** menu sa kaliwang sidebar. Doon makikita mo ang lahat ng payments sa iyong network at ang mga detalye nito, kasama na ang **status**. Ang manual payment ay laging may **Pending** na status hangga't hindi mo ito manu-manong binabago.

![Listahan ng payments na nagpapakita ng pending na manual payment](/img/admin/payments-list.png)

Pumasok sa payment page sa pamamagitan ng pag-click sa **reference code**. Sa page na ito, makikita mo ang lahat ng detalye ng pending payment, tulad ng reference ID, products, timestamps at iba pa.

![Payment details page na may reference code at products](/img/admin/payments-list.png)

Sa kanang column, maaari mong baguhin ang status ng payment. Kapag pinalitan mo ito ng **Completed** at **in-on ang Activate Membership** option, ma-e-enable ang site ng iyong customer at magiging active na ang kanilang membership.

![Pagbabago ng payment status sa Completed na may Activate Membership toggle](/img/admin/payments-list.png)
