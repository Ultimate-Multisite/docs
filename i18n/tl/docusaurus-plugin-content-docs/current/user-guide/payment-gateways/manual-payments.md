---
title: Pag-set Up ng Manu-manong Pagbabayad
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Pag-set Up ng Manual Payments (v2)

_**MAHALAGANG TALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Ang manual payments ay isang paraan para makapag-alok ka ng iba pang paraan ng pagbabayad kung hindi available ang **Stripe** o **PayPal** para sa iyong mga user. Maaari itong wire o bank transfer o anumang iba pang paraan ng pagbabayad na available sa iyong mga user sa kanilang lugar.

## Paano i-enable ang Manual Payments {#how-to-enable-manual-payments}

Napakadali ng pag-set up ng manual payment. Kailangan mo lang itong i-enable sa ilalim ng payment gateways at maglagay ng detalyadong mga tagubilin kung paano dapat ipadala ng user ang bayad.

Una, pumunta sa **Ultimate Multisite > Settings > Payments**. Sa ilalim ng **Payment Gateways** , i-toggle on ang **Manual**. Makikita mong lalabas para sa iyo ang kahong **Payment Instructions**.

Idagdag sa kahong ito ang impormasyong kakailanganin ng iyong customer para magbayad. Maaari itong mga detalye ng iyong bank account at iyong email para maipadala sa iyo ng customer ang kumpirmasyon ng pagbabayad, halimbawa.

![Toggle ng manual payment gateway na may text area para sa Payment Instructions](/img/config/manual-gateway-expanded.png)

Narito ang interface ng mga setting ng manual gateway:

![Mga setting ng manual gateway](/img/config/manual-gateway-settings.png)

Pagkatapos itong i-set up, i-click lang ang **Save Settings** at tapos na. Kapag nagrehistro ang mga user sa iyong network, makakakita sila ng mensaheng nagsasabi sa kanila na matatanggap nila ang iyong mga tagubilin para kumpletuhin ang pagbili.

![Mensahe ng kumpirmasyon sa pagrerehistro na nagsasabi sa user na matatanggap nila ang mga tagubilin sa pagbabayad](/img/frontend/registration-manual-notice.png)

At makakatanggap din sila ng mensahe sa iyong **Thank You** page kasama ang iyong mga tagubilin sa pagbabayad.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Pagkumpirma ng manual payments {#confirming-manual-payments}

Para kumpirmahin ang isang manual payment, pumunta sa menu na **Payments** sa kaliwang bar. Doon makikita mo ang lahat ng bayad sa iyong network at ang mga detalye ng mga ito, kabilang ang kanilang **status**. Ang manual payment ay palaging magkakaroon ng **Pending** na status hanggang manu-mano mo itong baguhin.

![Listahan ng Payments na nagpapakita ng nakabinbing manual payment](/img/admin/payments-list.png)

Pumasok sa page ng bayad sa pamamagitan ng pag-click sa **reference code**. Sa page na ito, nasa iyo ang lahat ng detalye ng nakabinbing bayad, tulad ng reference ID, mga produkto, timestamps, at iba pa.

![Page ng mga detalye ng bayad na nagpapakita ng reference code, mga produkto, at mga kabuuan](/img/admin/payment-edit.png)

Sa kanang column, maaari mong baguhin ang status ng bayad. Ang pagpapalit nito sa **Completed** at **pag-toggle sa Activate Membership** na opsyon ay mag-e-enable sa site ng iyong customer at magiging aktibo ang kanilang membership.

![Page sa pag-edit ng bayad na may Status na nakatakda sa Completed at toggle ng Activate Membership](/img/admin/payment-activate-membership.png)
