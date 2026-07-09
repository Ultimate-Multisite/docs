---
title: ການຈັດການການຈ່າຍເງິນ ແລະ ໃບແຈ້ງໜີ້
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# ການຈັດການການຈ່າຍເງິນ ແລະ ໃບເກັບເງິນ {#managing-payments-and-invoices}

## ການຕັ້ງຄ່າການຈ່າຍເງິນ {#payment-settings}

ກ່ອນທີ່ທ່ານຈະເລີ່ມຮັບການຈ່າຍເງິນ, ທ່ານຈະຕ້ອງຕັ້ງຄ່າການຕັ້ງຄ່າທີ່ກ່ຽວຂ້ອງກັບການຈ່າຍເງິນ. ໃຫ້ໄປທີ່ **Ultimate Multisite → Settings** ແລະ ເລືອກແຖບ **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

ນີ້ແມ່ນພາບທັງໜ້າການຕັ້ງຄ່າການຈ່າຍເງິນ:

![Payment settings full page](/img/admin/settings-payments-full.png)

### ທາງເລືອກການຈ່າຍເງິນທົ່ວໄປ {#general-payment-options}

ໃນການຕັ້ງຄ່າທົ່ວໄປ, ທ່ານສາມາດກຳນົດສິ່ງເຫຼົ່ານີ້ໄດ້:

- **Currency** — ສະກຸນເງິນເລີ່ມຕົ້ນທີ່ໃຊ້ໃນທຸກທຸລະກໍາ
- **Currency Position** — ສະໝໍສັບສະກຸນເງິນຈະປາກົດຢູ່ໃສ (ກ່ອນ ຫຼື ຫຼັງຈຳນວນເງິນ)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite ຮອງຮັບລະບົບການຊໍາລະເງິນໄດ້ຫຼາຍແບບ. ທ່ານສາມາດເປີດໃຊ້ ແລະ ຕັ້ງຄ່າແຕ່ລະອັນໄດ້ຈາກແຖບ Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

ລະບົບທີ່ພ້ອມໃຫ້ເລືອກມີ:

- **Stripe** — ການຈ່າຍເງິນດ້ວຍບັດເຄຣດິດຜ່ານ Stripe
- **PayPal** — ການຈ່າຍເງິນຜ່ານ PayPal
- **Manual** — ສຳລັບການປະມວນຜົນການຈ່າຍເງິນແບບອອບໄລນ໌ ຫຼື ຕາມຄວາມຕ້ອງການສະເພາະ

ແຕ່ລະລະບົບມີສ່ວນຕ່າງໆໃນການຕັ້ງຄ່າ ເຊິ່ງທ່ານຈະໃສ່ API keys ແລະ ການຕັ້ງຄ່າອື່ນໆ.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

ທ່ານສາມາດເປີດໃຊ້ **Sandbox Mode** ເພື່ອທົດສອບການເຊື່ອມຕໍ່ການຈ່າຍເງິນຂອງທ່ານກ່ອນທີ່ຈະដាក់ໃຫ້ໃຊ້ຕົວຈິງ. ເມື່ອ Sandbox mode ຖືກເປີດໃຊ້, ຈະບໍ່ມີການຫັກເງິນຕົວຈິງໃດໆ.

## ການເບິ່ງການຈ່າຍເງິນ {#viewing-payments}

ໄປທີ່ໜ້າ **Payments** ພາຍໃຕ້ Ultimate Multisite ເພື່ອເບິ່ງທຸກທຸລະກໍາໃນເຄືອຂ່າຍຂອງທ່ານ.

![Payments list](/img/admin/payments-list.png)

ທ່ານສາມາດກັ່ນຕອງການຈ່າຍເງິນຕາມສະຖານະ (ສຳເລັດ, ລໍຖ້າ, ລົ້ມເຫຼວ, ຄືນເງິນ) ແລະ ຊອກຫາທຸລະກໍາສະເພາະໄດ້.

ກົດທີ່ການຈ່າຍເງິນເພື່ອເບິ່ງລາຍລະອຽດທັງໝົດ ລວມທັງລາຍການສິນຄ້າ, ການເປັນສະມາຊິກທີ່ກ່ຽວຂ້ອງ, ຂໍ້ມູນລູກຄ້າ ແລະ ຂໍ້ມູນຂອງ payment gateway.

## Invoices (ໃບບິນ) {#invoices}

Ultimate Multisite ສາມາດສ້າງໃບບິນໃຫ້ໂດຍອັດຕະໂນມັດເມື່ອມີການຈ່າຍເງິນ. ເຈົ້າສາມາດປັບແຕ່ງ template ໃບບິນ ແລະ ຮູບແບບການລໍາດັບເລກໃບບິນໄດ້ຈາກ Payment settings.

ຕົວເລືອກໃນການປັບແຕ່ງໃບບິນປະກອບມີ:

- **ຊື່ບໍລິສັດ ແລະ ທີ່ຢູ່**ທີ່ຈະສະແດງຢູ່ໃນໃບບິນ
- **ຮູບແບບ ແລະ ລຳດັບຂອງການລໍາດັບເລກໃບບິນ**
- **Logo** ທີ່ຈະສະແດງຢູ່ສ່ວນຫົວຂອງໃບບິນ
- **ຂໍ້ຄວາມຕີນໜ້າ (footer text) ທີ່ປັບเอง** ສຳລັບເງື່ອນໄຂ, ໝາຍເຫດ ຫຼື ຂໍ້ມູນທາງກົດໝາຍ

ເພື່ອປັບແຕ່ງ template ໃບບິນ, ເຈົ້າສາມາດໄປທີ່ **Ultimate Multisite → Settings → Payment** ແລະ ຊອກຫາການຕັ້ງຄ່າທີ່ກ່ຽວຂ້ອງກັບໃບບິນໄດ້ເລີຍ.
