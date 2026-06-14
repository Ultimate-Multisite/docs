---
title: ການຕັ້ງຄ່າການຈ່າຍເງິນດ້ວຍມື
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ການຕັ້ງຄ່າການຈ່າຍເງິນດ້ວຍຕົນເອງ (v2)

_**ចំណាំສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

ການຈ່າຍເງິນດ້ວຍຕົນເອງ ແມ່ນວິທີໜຶ່ງທີ່ທ່ານສາມາດສະເໜີວິທີການຈ່າຍເງິນອື່ນໆໄດ້ ເມື່ອ **Stripe** ຫຼື **PayPal** ບໍ່ມີໃຫ້ຜູ້ໃຊ້ຂອງທ່ານ. ສາມາດເປັນການໂອນເງິນຜ່ານທາງສາຍWires, ທະນາຄານ ຫຼື ວິທີການຈ່າຍເງິນອື່ນໆທີ່ຜູ້ໃຊ້ຂອງທ່ານສາມາດໃຊ້ໄດ້ໃນທ້ອງຖິ່ນຂອງເຂົາເຈົ້າ.

## ວິທີການເປີດໃຊ້ການຈ່າຍເງິນດ້ວຍຕົນເອງ

ການຕັ້ງຄ່າການຈ່າຍເງິນດ້ວຍຕົນເອງແມ່ນງ່າຍຫຼາຍ. ທ່ານພຽງແຕ່ຕ້ອງເປີດໃຊ້ໃນສ່ວນ payment gateways ແລະໃສ່ຄຳແນະນຳລາຍລະອຽດວ່າຜູ້ໃຊ້ຄວນສົ່ງເງິນໄປທີ່ໃສ.

ກ່ອນອື່ນ, ໃຫ້ເຂົ້າໄປທີ່ **Ultimate Multisite > Settings > Payments**. ຢູ່ໃຕ້ສ່ວນ **Payment Gateways**, ໃຫ້ປິດສະວິດ (toggle) **Manual** ເປີດໃຊ້. ທ່ານຈະເຫັນຊ່ອງ **Payment Instructions** ປາກົດຂຶ້ນມາສຳລັບທ່ານ.

ເພີ່ມຂໍ້ມູນທີ່ລູກຄ້າຂອງທ່ານຕ້ອງການເພື່ອເຮັດການຈ່າຍເງິນໃສ່ໃນຊ່ອງນີ້. ສາມາດເປັນລາຍລະອຽດບັນຊີທະນາຄານຂອງທ່ານ ແລະ ອີເມວຂອງທ່ານ ເພື່ອໃຫ້ລູກຄ້າສາມາດສົ່ງຫຼັກຖານການຈ່າຍເງິນມາຢືນຢັນໃຫ້ທ່ານໄດ້, ຕົວຢ່າງເຊັ່ນ.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

ນີ້ແມ່ນໜ້າຕາການຕັ້ງຄ່າ manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

ຫຼັງຈາກຕັ້ງຄ່າແລ້ວ, ພຽງແຕ່ກົດ **Save Settings** ເປັນທີ່ສຳເລັດ. ເມື່ອຜູ້ໃຊ້ລົງທະບຽນເຂົ້າໃນເຄືອຂ່າຍຂອງທ່ານ, ພວກເຂົາຈະເຫັນຂໍ້ຄວາມທີ່ແຈ້ງວ່າ ພວກເຂົາຈະໄດ້ຮັບຄຳແນະນຳຈາກທ່ານເພື່ອເຮັດການຊື້ໃຫ້ສໍາເລັດ.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

ແລະ ພວກເຂົາກໍຈະໄດ້ຮັບຂໍ້ຄວາມໃນໜ້າ **Thank You** ຂອງທ່ານພ້ອມກັບຄຳແນະນຳການຈ່າຍເງິນຂອງທ່ານເຊັ່ນກັນ.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ການຢືນຢັນການຈ່າຍເງິນດ້ວຍຕົນເອງ

ເພື່ອຢືນຢັນການຈ່າຍເງິນດ້ວຍຕົນເອງ (manual payment), ໃຫ້ໄປທີ່ເມນูด้าน **Payments** ຢູ່ແຖບຊ້າຍ. ທ່ານຈະເຫັນທຸກການຈ່າຍເງິນໃນເຄືອຂ່າຍຂອງທ່ານພ້ອມກັບລາຍລະອຽດຂອງມັນ, ລວມທັງ **status** (ສະຖານະ) ຂອງມັນ. ການຈ່າຍເງິນດ້ວຍຕົນເອງຈະມີ **Pending** (ກຳລັງລໍຖ້າ) ເປັນສະຖານະเสมอ ຈົນກວ່າທ່ານຈະປ່ຽນມັນເປັນແບບໃໝ່ດ້ວຍຕົນເອງ.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

ໃຫ້ໃສ່ໜ້າຈ່າຍເງິນໂດຍການຄລິກທີ່ **reference code** (ລະຫັດອ້າງອີງ). ໃນໜ້ານີ້ ທ່ານຈະມີລາຍລະອຽດທັງໝົດຂອງການຈ່າຍເງິນທີ່ກຳລັງລໍຖ້າ, ເຊັ່ນ: reference ID, ສິນຄ້າ, ເວລາທີ່ເຮັດການຈ່າຍ ແລະ ອື່ນໆ.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

ຢູ່ຄໍຂວາ, ທ່ານສາມາດປ່ຽນສະຖານະຂອງການຈ່າຍເງິນໄດ້. ການປ່ຽນເປັນ **Completed** (ສຳເລັດ) ແລະ ການເປີດໃຊ້ຕົວເລືອກ **Activate Membership** (ເປີດໃຊ້ສະມາຊິກ) ຈະເຮັດໃຫ້ໄຊທ໌ຂອງລູກຄ້າຂອງທ່ານສາມາດເຂົ້າເຖິງໄດ້ ແລະ ສະມາຊິກຂອງເຂົາເຈົ້າກໍຈະຖືກເປີດໃຊ້.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
