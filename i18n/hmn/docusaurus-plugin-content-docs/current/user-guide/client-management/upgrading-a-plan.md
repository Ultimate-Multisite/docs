---
title: Kev tswj hmoov qhia txog qhov kev tswj hmoov plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# ປັບປຸງແຜນການ (v2) {#upgrading-a-plan-v2}

_**ໝາຍເຫດສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

ລູກຄ້າຂອງທ່ານສາມາດປ່ຽນແປງແຜນການຂອງເຂົາເຈົ້າໄດ້ທຸກເວລາ. ເຂົາເຈົ້າສາມາດເລືອກປ່ຽນໄປເປັນແຜນອື່ນ ຫຼື ຊື້ບໍລິການ ຫຼື ແພັກເກັດເພີ່ມເຕີມໃດໆທີ່ທ່ານມີຢູ່ໃນເຄືອຂ່າຍຂອງທ່ານ.

ໃນບົດຮຽນນີ້, ພວກເຮົາຈະມາສອນວິທີທີ່ເຂົາເຈົ້າສາມາດປັບປຸງແຜນການຂອງຕົນ ແລະ ສິ່ງທີ່ຈະເກີດຂຶ້ນຫຼັງຈາກຂະບວນການປ່ຽນແປງແລ້ວ.

ເພື່ອປັບປຸງແຜນການ, ລູກຄ້າຂອງທ່ານຄວນເຂົ້າໄປທີ່ dashboard ຂອງເຂົາເຈົ້າ ແລ້ວໄປທີ່ໜ້າ **Account** (ບັນຊີ).

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

ໃນໜ້າ Account, ເຂົາເຈົ້າຈະເຫັນສະມາຊິກປັດຈຸບັນຂອງເຂົາເຈົ້າ ແລະ ແຜນການທີ່ກ່ຽວຂ້ອງກັບມັນ. ເພື່ອປັບປຸງໄປເປັນແຜນອື່ນ, ພວກເຂົາຕ້ອງກົດທີ່ **Change** (ປ່ຽນ) ຢູ່ມຸມຂวามທາງເທິງຂອງສ່ວນ **Your Membership** (ສະມາຊິກຂອງທ່ານ).

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

ແລ້ວເຂົາເຈົ້າຈະຖືກນຳໄປທີ່ແບບຟອມຈ່າຍເງິນ (checkout form) ບ່ອນທີ່ແຜນການທັງໝົດທີ່ມີໃຫ້ຈະສະແດງອອກມາ.

ເຂົາເຈົ້າຍັງສາມາດເຫັນ **services and packages available for their current plan** (ບໍລິການ ແລະ ແພັກເກັດທີ່ມີໃຫ້ສຳລັບແຜນປັດຈຸບັນຂອງເຂົາເຈົ້າ) ເພື່ອໃນກໍລະນີທີ່ຕ້ອງການຊື້ບໍລິການ ຫຼື ແພັກເກັດໃດໜຶ່ງໂດຍສະເພາະ (ເຊັ່ນ: ການເຂົ້າເຖິງບໍ່ຈຳກັດ ຫຼື ພື້ນທີ່ໂຟລດໃນຕົວຢ່າງຂອງພວກເຮົາ), ແລະ ບໍ່ໄດ້ປ່ຽນແປງແຜນການ.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

ຫຼັງຈາກທີ່ເຂົາເຈົ້າເລືອກຜະລິດຕະພັນທີ່ຕ້ອງການຊື້ແລ້ວ, ເຂົາເຈົ້າຈະເຫັນວ່າຕ້ອງຈ່າຍເທົ່າໃດໃນຕອນນີ້ - ບໍ່ລວມຄ्रेडिटທີ່ມີຢູ່ແລ້ວ - ແລະ ຈຳນວນທີ່ຈະຖືກຫັກໃນວັນທີເກັບເງິນຄັ້ງຕໍ່ໄປ.

ປົກກະຕິ, ຖ້າຜະລິດຕະພັນແມ່ນແຜນການອື່ນ ແລະ ການຈ່າຍເງິນຈະເຮັດໃນລະຫວ່າງການເກັບຄ່າສະມາຊິກ, ເຂົາເຈົ້າຈະໄດ້ຮັບຄ्रेडिटສຳລັບຈຳນວນທີ່ຈ່າຍໄປໃນແຜນທຳອິດ.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

ຖ້າເຂົາເຈົ້າເລືອກແຜນ (plan) ຫຼື ຊຸດ (package) ທີ່ບໍ່ປ່ຽນແປງຫຍັງຈາກການສະໝັກໃຊ້ໃນຕອນນີ້, ເຂົາເຈົ້າຈະເຫັນຂໍ້ຄວາມອະທິບາຍກ່ຽວກັບເລື່ອງນັ້ນ.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

ຫຼັງຈາກທີ່ການຊື້ຈ່າຍສຳເລັດແລ້ວ, ຜະລິດຕະພັນໃໝ່ໆຈະຖືກເພີ່ມເຂົ້າໃນບັນຊີຂອງລູກຄ້າ ແລະ ຂີດຈຳກັດ ຫຼື ຄຸນສົມບັດທັງໝົດຂອງຜະລິດຕະພັນໃໝ່ນັ້ນຈະຖືກເພີ່ມເຂົ້າໄປທັນທີ: ການເຂົ້າເຖິງ (visits), ພື້ນທີ່ແ盘 (disk space), ເນື້ອຫາ (posts), ແລະ ອື່ນໆ...

##

##

## ທາງເລືອກໃນການອັບເກຣດ ແລະ ດາວເກຣດ (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

ໃນຜະລິດຕະພັນທຸກຢ່າງຂອງເຈົ້າ, ເຈົ້າຈະມີແຖບທີ່ເອີ້ນວ່າ **Up & Downgrades**. ຕົວເລືອກທຳອິດໃນແຖບນັ້ນແມ່ນຊ່ອງຂໍ້ມູນທີ່ເອີ້ນວ່າ **Plan Group**.

**Plan groups** ແມ່ນສິ່ງທີ່ເຮັດໃຫ້ Ultimate Multisite ຮູ້ວ່າແຜນໃດໜຶ່ງເປັນສ່ວນໜຶ່ງຂອງ "ຄອບຄົວ" ດຽວກັນ, ແລະ ດັ່ງນັ້ນຈຶ່ງຄວນຖືກໃຊ້ເພື່ອສ້າງທາງເລືອກການອັບເກຣດ/ດາວເກຣດ.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

ຕົວຢ່າງ, ເຈົ້າອາດຈະມີ **Free plan**, **Basic Plan**, ແລະ **Premium Plan** ໃຫ້ເລືອກ. ເຈົ້າຕ້ອງການໃຫ້ຜູ້ໃຊ້ທີ່ສະໝັກໃຊ້ໃນ **Free Plan** ສາມາດອັບເກຣດໄປເປັນ **Premium Plan** ເທົ່ານັ້ນ ແລະ ເຈົ້າບໍ່ຕ້ອງການໃຫ້ເຂົາເຈົ້າເຫັນ "Basic Plan" ເປັນທາງເລືອກໃນການອັບເກຣດ. ທັງໆນີ້, ເຈົ້າພຽງແຕ່ຕ້ອງກຳນົດຊື່ plan group ໃຫ້ຄືກັນສຳລັບ Free plan ແລະ Premium plan ຕາມທີ່ສະແດງຢູ່ໃນຮູບພາບຂ້າງລຸ່ມນີ້.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Qhov noዚ yuav tsum zaum txhua WordPress сайт (Ultimate Multisite) hais ti muau "family" ntawm cov plan hauv network zoo li **High End**. Tha uau tsis tuaj yeem txhua plan los ntawm family pibom ntawd yuav tsum tsim nyob hom phiaj rau user.
