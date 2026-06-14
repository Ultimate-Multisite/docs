---
title: >-
  Tsoj hmoov thiab txhais txhua yam uas muaj hauv Txheej txheem Ua Txhais thiab
  Tsoj Hmoov
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# ការគ្រប់គ្រងការទូទាត់ និងវិក្កយបត្រ

## ការកំណត់ការទូទាត់ (Payment Settings)

ກ່ອນທີ່ເຈົ້າຈະເລີ່ມຮັບການຈ່າຍເງິນ, ເຈົ້າຕ້ອງຕັ້ງຄ່າການຕັ້ງຄ່າທີ່ກ່ຽວຂ້ອງກັບການຈ່າຍເງິນ. ໄປທີ່ **Ultimate Multisite → Settings** ແລ້ວចុចໃສ່ແຖບ **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

ນີ້ແມ່ນພາບເຕັມຂອງໜ້າການຕັ້ງຄ່າການຈ່າຍເງິນ:

![Payment settings full page](/img/admin/settings-payments-full.png)

### ທາງເລືອກການຈ່າຍເງິນທົ່ວໄປ (General Payment Options)

ໃນການຕັ້ງຄ່າທົ່ວໄປ ເຈົ້າສາມາດຕັ້ງຄ່າສິ່ງເຫຼົ່ານີ້ໄດ້:

- **Currency** — ສະກຸນເງິນເລີ່ມຕົ້ນທີ່ໃຊ້ໃນທຸກການເຮັດທຸລະກໍາ
- **Currency Position** — ບ່ອນທີ່ສະໝາຍເງິນຈະໄປວາງ (ກ່ອນ ຫຼື ຫຼັງຈຳນວນເງິນ)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### ປະຕູການຈ່າຍເງິນ (Payment Gateways)

Ultimate Multisite ຮອງຮັບປະຕູການຈ່າຍເງິນໄດ້ຫຼາຍແບບ. ເຈົ້າສາມາດເປີດໃຊ້ ແລະ ຕັ້ງຄ່າແຕ່ລະອັນໄດ້ຈາກແຖບ Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

ປະຕູທີ່ພົບໃນປັດຈຸບັນປະກອບມີ:

- **Stripe** — ການຈ່າຍເງິນດ້ວຍບັດເຄຣດິດຜ່ານ Stripe
- **PayPal** — ການຈ່າຍເງິນຜ່ານ PayPal
- **Manual** — ສຳລັບການປະມວນຜົນການຈ່າຍເງິນແບບອອບໄລນ໌ ຫຼື ຕາມຄວາມຕ້ອງການສະເພາະ

ແຕ່ລະປະຕູມີສ່ວນຕັ້ງຄ່າຂອງມັນເອງ ເຊິ່ງເຈົ້າຈະໃສ່ API keys ແລະ ການຕັ້ງຄ່າອື່ນໆ.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### ໂໝດ Sandbox (Sandbox Mode)

ເຈົ້າສາມາດເປີດໃຊ້ **Sandbox Mode** ເພື່ອທົດສອບການເຊື່ອມຕໍ່ການຈ່າຍເງິນຂອງເຈົ້າກ່ອນທີ່ຈະដាក់ໃຫ້ໃຊ້ຕົວຈິງ. ເມື່ອໂໝດ sandbox ເປີດຢູ່, ຈະບໍ່ມີການຫັກເງິນຕົວຈິງໃດໆ.

## ການເບິ່ງການຈ່າຍເງິນ (Viewing Payments)

ໄປທີ່ໜ້າ **Payments** ພາຍໃຕ້ Ultimate Multisite ເພື່ອເບິ່ງທຸກທຸລະກໍາໃນເຄືອຂ່າຍຂອງເຈົ້າ.

![Payments list](/img/admin/payments-list.png)

ເຈົ້າສາມາດກັ່ນຕອງການຈ່າຍເງິນຕາມສະຖານະ (ສຳເລັດ, ລໍຖ້າ, ລົ້ມເຫຼວ, ຄືນເງິນ) ແລະ ຄົ້ນຫາທຸລະກໍາສະເພາະໄດ້.

Payment hauv txhua detal, yuav tsoom rau line items, membership uas hlub, customer info, thiab payment gateway data.

## Invoices

Ultimate Multisite yuav ua invoicing txog payments txawm tias. Kuv yuav customize invoice template thiab numbering format los ntawm Payment settings.

Invoice customization options muaj:

- **Company name and address** tsoom rau invoices
- **Invoice numbering** format thiab sequence
- **Logo** tsoom rau invoice header
- **Custom footer text** rau terms, notes, lossis legal information

Uauv los customize invoice template, yuav mus rau **Ultimate Multisite → Settings → Payment** thiab hloov rau settings uas hlub invoice.
