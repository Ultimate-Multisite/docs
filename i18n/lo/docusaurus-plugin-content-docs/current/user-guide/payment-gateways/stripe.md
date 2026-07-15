---
title: ການຕັ້ງຄ່າ Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# ການຕັ້ງຄ່າ Stripe Gateway (v2)

_**ໝາຍເຫດສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

ທ່ານສາມາດເປີດໃຊ້ວິທີການຊຳລະເງິນໄດ້ເຖິງສີ່ວິທີໃນໜ້າຕັ້ງຄ່າການຈ່າຍເງິນຂອງພວກເຮົາ: Stripe, Stripe Checkout, PayPal ແລະ ດ້ວຍມື (Manual). ໃນບົດຄວາມນີ້, ພວກເຮົາຈະມາເຫັນວິທີການເຊື່ອມຕໍ່ກັບ **Stripe**.

## ການເປີດໃຊ້ Stripe {#enabling-stripe}

ເພື່ອເປີດໃຊ້ Stripe ເປັນ gateway ຊຳລະເງິນທີ່ມີໃຫ້ໃນເຄືອຂ່າຍຂອງທ່ານ, ກະລຸນາໄປທີ່ **Ultimate Multisite > Settings > Payments** ແລະ ຕິກປຸ່ມເລືອກ (toggle) ຢູ່ຂ້າງ **Stripe** ຫຼື **Stripe Checkout** ໃນສ່ວນ Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe ທຽບກັບ Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** ວິທີນີ້ຈະສະແດງຊ່ອງຫວ່າງໃຫ້ທ່ານໃສ່ເລກບັດເຄຣດິດໃນລະຫວ່າງການຈ່າຍເງິນ (checkout).

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ວິທີນີ້ຈະປ່ຽນໜ້າຂອງລູກຄ້າໄປທີ່ໜ້າ Stripe Checkout ໃນລະຫວ່າງການຈ່າຍເງິນ (checkout).

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

ການໄດ້ຮັບ API keys ຂອງ Stripe

ເມື່ອທ່ານເປີດໃຊ້ Stripe ເປັນ gateway ຊຳລະເງິນແລ້ວ, ທ່ານຈະຕ້ອງຕື່ມຂໍ້ມູນໃນຊ່ອງ **Stripe Publishable Key** ແລະ **Stripe Secret Key**. ທ່ານສາມາດເອົາຂໍ້ມູນນີ້ໄດ້ໂດຍການເຂົ້າສູ່ລະບົບ (logging in) ບັນຊີ Stripe ຂອງທ່ານ.

_**ໝາຍເຫດ:** ທ່ານສາມາດເປີດໃຊ້ **Sandbox mode** ເພື່ອທົດສອບວ່າວິທີການຊຳລະເງິນເຮັດວຽກບໍ່._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ໃນ dashboard ຂອງ Stripe, ກະລຸນາຄລິກ **Developers** ຢູ່ມຸມຂวามือເທິງ, ແລະ ຈາກນັ້ນເລືອກ **API Keys** ໃນເມນູທາງຊ້າຍ.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

ທ່ານສາມາດເລືອກໃຊ້ **Test Data** (ເພື່ອທົດສອບວ່າການເຊື່ອມຕໍ່ເຮັດວຽກໃນເວັບໄຊ Producion ຂອງທ່ານບໍ່) ຫຼື ບໍ່ໃຊ້ก็ได้. ເພື່ອປ່ຽນອັນນີ້, ກະລຸນາປິດສະຫຼັບ **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

ຄັດລອກຄ່າຈາກ **Publishable key** ແລະ **Secret key**, ຈາກຄໍລຳ **Token** ແລ້ວໄປວາງໃສ່ໃນຊ່ອງຂອງ Ultimate Multisite Stripe Gateway. ຈາກນັ້ນໃຫ້ກົດເພື່ອ **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## ການຕັ້ງຄ່າ Stripe Webhook {#setting-up-stripe-webhook}

Stripe ສົ່ງ webhook events ເພື່ອແຈ້ງເຕືອນ Ultimate Multisite ທຸກຄັ້ງທີ່ມີເຫດການເກີດຂຶ້ນໃນ **ບັນຊີ stripe ຂອງທ່ານ**.

ກົດທີ່ **Developers** ແລ້ວເລືອກເອົາລາຍການ **Webhooks** ໃນເມນູທາງຊ້າຍ. ຈາກນັ້ນທາງດ້ານຂວາໃຫ້ກົດ **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ທ່ານຈະຕ້ອງການ **Endpoint URL** *.* Ultimate Multisite ຈະສ້າງ Endpoint URL ໃຫ້ໂດຍອັດຕະໂນມັດ ເຊິ່ງທ່ານສາມາດພົບໄດ້ຢູ່ໃຕ້ຊ່ອງ **Webhook Listener URL** ໃນສ່ວນ **Ultimate Multisite Stripe Gateway**..._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**ຄັດລອກ** endpoint URL ແລະ **ວາງ** ໃສ່ໃນຊ່ອງ **Endpoint URL** ຂອງ Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

ຕໍ່ໄປແມ່ນການເລືອກ **Event** *.* ພາຍໃຕ້ຕົວເລືອກນີ້, ທ່ານພຽງແຕ່ຕ້ອງກວດສອບຊ່ອງ **Select all events** ແລະ ກົດເພື່ອ **Add events**. ຫຼັງຈາກນັ້ນໃຫ້ກົດ **Add Endpoint** ເພື່ອບັນທຶກການປ່ຽນແປງ.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ສຳເລັດແລ້ວ! ການເຊື່ອມຕໍ່ການຈ່າຍເງິນຜ່ານ Stripe ຂອງທ່ານກັບ WordPress ສຳເລັດແລ້ວ!
