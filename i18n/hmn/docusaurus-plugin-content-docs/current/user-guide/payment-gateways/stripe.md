---
title: Tsim sijhawm Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# ຕັ້ງຄ່າ Stripe Gateway (v2)

_**ໝາຍເຫດສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

ເຈົ້າສາມາດເປີດໃຊ້ວິທີການຈ່າຍເງິນໄດ້ເຖິງສີ່ວິທີໃນໜ້າຕັ້ງຄ່າການຈ່າຍເງິນຂອງພວກເຮົາ: Stripe, Stripe Checkout, PayPal ແລະ ແບບຂຽນດ້ວຍມື (Manual). ໃນບົດຄວາມນີ້, ພວກເຮົາຈະມາເຫັນວິທີການເຊື່ອມຕໍ່ກັບ **Stripe**.

## ການເປີດໃຊ້ Stripe {#enabling-stripe}

ເພື່ອເປີດໃຊ້ Stripe ເປັນ gateway ຮັບຊຳນຸດທີ່ພ້ອມໃຫ້ໃຊ້ໃນເຄືອຂ່າຍຂອງເຈົ້າ, ໄປທີ່ **Ultimate Multisite > Settings > Payments** ແລ້ວໝາຍຖືກ (tick) ກ່ອນປຸ່ມສະຫຼັບ (toggle) ຢູ່ຂ້າງ **Stripe** ຫຼື **Stripe Checkout** ໃນສ່ວນ Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe ທຽບກັບ Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** ວິທີນີ້ຈະສະແດງຊ່ອງໃຫ້ເຈົ້າໃສ່ເລກບັດເຄຣດິດໃນເວລາຈ່າຍເງິນ (checkout).

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ວິທີນີ້ຈະປ່ຽນໜ້າຂອງລູກຄ້າໄປທີ່ໜ້າ Stripe Checkout ໃນຂະນະທີ່ຈ່າຍເງິນ.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

ການໄດ້ຮັບ API keys ຂອງເຈົ້າ

ເມື່ອເປີດໃຊ້ Stripe ເປັນ gateway ຮັບຊຳນຸດແລ້ວ, ເຈົ້າຈະຕ້ອງຕື່ມຂໍ້ມູນໃນຊ່ອງສຳລັບ **Stripe Publishable Key** ແລະ **Stripe Secret Key**. ເຈົ້າສາມາດເອົາຂໍ້ມູນນີ້ໄດ້ໂດຍການເຂົ້າສູ່ລະບົບຂອງບັນຊີ Stripe ຂອງເຈົ້າ.

_**ໝາຍເຫດ:** ເຈົ້າສາມາດເປີດໃຊ້ **Sandbox mode** ເພື່ອທົດສອບວ່າວິທີການຈ່າຍເງິນເຮັດວຽກບໍ່._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ໃນ dashboard ຂອງ Stripe, ໃຫ້ຄລິກທີ່ **Developers** ຢູ່ມຸມຂวามທາງເທິງ, ແລ້ວໄປທີ່ **API Keys** ໃນເມນູທາງຊ້າຍ.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

ታዲያ ቻይና (Test Data) - ንጽጽር እዩ (to test if the integration is working on your production site) - ንም ምውልቃም ወይስ ክም ምውልቃ ትችያት። ይህን ለመቀየር፣ **Viewing test data** toggle-ውን ፈልግ ይጥፋሉ።

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** (publishable key) 同 **Secret key** (secret key) - ን **Token** column-ከ ዝውር ኮፒ ንም ምውልቃ፣ ኣብ Ultimate Multisite Stripe Gateway fields-ላይ ምውልቃ። ድሕሪኡ ክትክእሉ **Save Changes** ንክሊክ።

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Setting up Stripe Webhook {#setting-up-stripe-webhook}

Stripe webhook events - ንUltimate Multisite anytime an event happens on **your stripe account** - ክሳብ ይልቁን።

**Developers** ንክሊክ፣ ድሕሪኡ ኣብ ዝለዎ ምዕራፍ (left menu) **Webhooks** ንም ምረባ። ድሕሪኡ ኣብ ቀጻሊ (right hand side) **Add endpoint** ንክሊክ *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ኣብ **Endpoint URL** *.* Ultimate Multisite ዝፈጥር URL - ን **Webhook Listener URL** field ኣብ **Ultimate Multisite Stripe Gateway** section-ታ ከምኡ እዩ።

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

ኣብ Endpoint URL ኮፒ ንም ምውልቃ፣ ኣብ Stripe **Endpoint URL** field -ላይ ንም ምውልቃ።

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

ድሕሪኡ, **Event** *.* ንም ምረባ። ኣብዚ ምርጫ (option) ኮይኑ፣ ን **Select all events** box -ታ ክትክእሉን ድሕሪኡ **Add events** ንክሊክ። ድሕሪኡ ንመቀያየር **Add Endpoint** ንክሊክ።

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tawm, tsis muaj! Tsis tasawm (payment) integration hauv Stripe chuem tam.
