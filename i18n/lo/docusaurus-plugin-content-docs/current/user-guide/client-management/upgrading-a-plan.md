---
title: ການອັບເກຣດແຜນການ
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# ການອັບເກຣດແຜນການ (v2) {#upgrading-a-plan-v2}

_**ຂໍ້ຄວນລະວັງ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

ລູກຄ້າຂອງທ່ານສາມາດອັບເກຣດແຜນການຂອງເຂົາເຈົ້າໄດ້ທຸກເວລາ. ເຂົາເຈົ້າສາມາດເລືອກອັບເກຣດໄປເປັນແຜນໃໝ່ ຫຼື ຊື້ບໍລິການ ຫຼື แพ็คเกจເພີ່ມເຕີມໃດໆທີ່ທ່ານມີຢູ່ໃນເຄືອຂ່າຍຂອງທ່ານ.

ໃນບົດສອນນີ້, ພວກເຮົາຈະມາເບິ່ງວິທີທີ່ເຂົາເຈົ້າສາມາດອັບເກຣດແຜນການຂອງຕົນ ແລະ ສິ່ງທີ່ຈະເກີດຂຶ້ນຫຼັງຈາກຂະບວນການອັບເກຣດສໍາເລັດ.

ເພື່ອອັບເກຣດແຜນການ, ລູກຄ້າຂອງທ່ານຄວນເຂົ້າໄປທີ່ dashboard ຂອງເຂົາເຈົ້າ ແລະ ໄປທີ່ໜ້າ **Account** (ບັນຊີ).

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

ໃນໜ້າ Account, ເຂົາເຈົ້າຈະເຫັນສະມາຊິກປັດຈຸບັນຂອງເຂົາເຈົ້າ ແລະ ແຜນການທີ່ກ່ຽວຂ້ອງກັບມັນ. ເພື່ອອັບເກຣດໄປເປັນແຜນໃໝ່, ເຂົາເຈົ້າຕ້ອງກົດທີ່ **Change** (ປ່ຽນ) ຢູ່ມຸມຂวามທາງເທິງຂອງສ່ວນ **Your Membership** (ສະມາຊິກຂອງທ່ານ).

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

ເຂົາເຈົ້າຈະຖືກນໍາໄປທີ່ແບບຟອມຈ່າຍເງິນ (checkout form) ບ່ອນທີ່ແຜນການທັງໝົດທີ່ມີໃຫ້ຈະສະແດງອອກ.

ເຂົາເຈົ້າຍັງສາມາດເຫັນ **services and packages available for their current plan** (ບໍລິການ ແລະ แพ็คเกจທີ່ມີໃຫ້ສຳລັບແຜນການປັດຈຸບັນຂອງເຂົາເຈົ້າ) ເພື່ອໃນກໍລະນີທີ່ເຂົາເຈົ້າຕ້ອງການຊື້ບໍລິການ ຫຼື แพ็คเกจໃດໜຶ່ງໂດຍສະເພາະ (ເຊັ່ນ: ການເຂົ້າເຖິງບໍ່ຈຳກັດ ຫຼື ພື້ນທີ່ đĩaໃນຕົວຢ່າງຂອງພວກເຮົາ), ແຕ່ບໍ່ໄດ້ອັບເກຣດແຜນການ.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

ຫຼັງຈາກທີ່ເຂົາເຈົ້າເລືອກຜະລິດຕະພັນທີ່ຕ້ອງການຊື້, ເຂົາເຈົ້າຈະເຫັນວ່າຕ້ອງຈ່າຍເທົ່າໃດໃນຕອນນີ້ - ບໍ່ລວມຄ्रेडिटທີ່ມີຢູ່ແລ້ວ - ແລະ ຈຳນວນທີ່ຈະຖືກຫັກໃນມື້ເກັບເງິນຄັ້ງຕໍ່ໄປ.

ໂດຍປົກກະຕິ, ຖ້າຜະລິດຕະພັນແມ່ນແຜນການອື່ນ ແລະ ການຈ່າຍເງິນຈະເຮັດລະຫວ່າງຄ່າທໍານຽມສະມາຊິກ, ເຂົາເຈົ້າຈະໄດ້ຮັບຄ्रेडिटໃນຈຳນວນທີ່ຈ່າຍໄປກັບແຜນການທໍາອິດ.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

ຖ້າເຂົາເຈົ້າເລືອກແຜນ ຫຼື ຊຸດໃດທີ່ບໍ່ປ່ຽນແປງຫຍັງຈາກການສະໝັກໃຊ້ໃນຕອນນີ້, ເຂົາເຈົ້າຈະເຫັນຂໍ້ຄວາມອະທິບາຍກ່ຽວກັບເລື່ອງນັ້ນ.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

ຫຼັງຈາກເຮັດການຊຳລະເງິນສຳເລັດແລ້ວ, ຜະລິດຕະພັນໃໝ່ໆຈະຖືກເພີ່ມເຂົ້າໃນບັນຊີຂອງລູກຄ້າ ແລະ ຂີດຈຳກັດ ຫຼື ຄຸນສົມບັດທັງໝົດຂອງຜະລິດຕະພັນໃໝ່ນັ້ນຈະຖືກເພີ່ມເຂົ້າໄປທັນທີ: ການເຂົ້າເຖິງ (visits), ພື້ນທີ່ໂພສ, ແລະ ອື່ນໆ...

##

##

## ລະບົບການອັບເກຣດ ແລະ ດາວເກຣດ (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

ໃນຜະລິດຕະພັນແຕ່ລະຊະນິດຂອງເຈົ້າ, ເຈົ້າຈະມີ tab ຊື່ວ່າ **Up & Downgrades**. ທາງເລືອກທຳອິດໃນ tab ນັ້ນແມ່ນຊ່ອງຂໍ້ມູນທີ່ເອີ້ນວ່າ **Plan Group**.

**Plan groups** ແມ່ນສິ່ງທີ່ເຮັດໃຫ້ Ultimate Multisite ຮູ້ວ່າແຜນໃດໜຶ່ງເປັນສ່ວນໜຶ່ງຂອງ "ຄອບຄົວ" ດຽວກັນ, ແລະ ດັ່ງນັ້ນຈຶ່ງຄວນຖືກໃຊ້ເພື່ອສ້າງທາງເລືອກການອັບເກຣດ/ດາວເກຣດ.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

ຕົວຢ່າງ, ເຈົ້າອາດຈະມີ **Free plan** (ແຜນຟຣີ), **Basic Plan** (ແຜນພື້ນຖານ), ແລະ **Premium Plan** (ແຜນພ्रीमियम). ເຈົ້າຕ້ອງການໃຫ້ຜູ້ໃຊ້ທີ່ສະໝັກໃຊ້ **Free Plan** ສາມາດອັບເກຣດໄປເປັນ **Premium Plan** ເທົ່ານັ້ນ, ແລະ ເຈົ້າບໍ່ຕ້ອງການໃຫ້ເຂົາເຈົ້າເຫັນ "Basic Plan" ເປັນທາງເລືອກໃນການອັບເກຣດ. ທັງໆນີ້, ເຈົ້າພຽງແຕ່ຕ້ອງກຳນົດຊື່ plan group ໃຫ້ຄືກັນສຳລັບ Free plan ແລະ Premium plan ຄືກັບທີ່ສະແດງຢູ່ໃນຮູບພາບຂ້າງລຸ່ມນີ້.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

สิ่งนี้ควรจะบอก Ultimate Multisite ว่ามีแพ็กเกจแผนต่างๆ ในเครือข่ายที่เรียกว่า **High End** เมื่อมีการเสนอการอัปเกรดหรือดาวน์เกรด แผนจากครอบครัวเดียวกันเท่านั้นที่จะถูกนำมาแสดงเป็นตัวเลือกให้ผู้ใช้
