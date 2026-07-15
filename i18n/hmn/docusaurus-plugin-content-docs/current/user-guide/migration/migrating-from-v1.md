---
title: Tawm tsi rau V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# ពី V1-twb

## Ultimate Multisite ໄດ້ປ່ຽນຈາກຄອບຄົວການປ່ອຍ (releases) ເກົ່າຂອງມັນ 1.x ມາເປັນຄອບຄົວ 2.x ແລ້ວ. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite version 2.0 ແລະ ຂຶ້ນໄປ ແມ່ນການຂຽນໃໝ່ລະຫັດໂປຣແກຣມທັງໝົດ, ຊຶ່ງໝາຍຄວາມວ່າ ມີສ່ວນຮ່ວມໜ້ອຍຫຼາຍລະຫວ່າງສະບັບເກົ່າກັບໃໝ່. ເພາະດັ່ງນັ້ນ, ເມື່ອອັບເກຣດຈາກ 1.x ໄປເປັນ 2.x, ຂໍ້ມູນຂອງເຈົ້າຈະຕ້ອງຖືກຍ້າຍ (migrate) ໄປໃນຮູບແບບທີ່ສະບັບໃໝ່ສາມາດເຂົ້າໃຈໄດ້.

ຂອບໃຈກັບ Ultimate Multisite 2.0+ **ມີຕົວຊ່ວຍຍ້າຍຂໍ້ມູນ (migrator)** ຕິດຕັ້ງມາພ້ອມກັບ core ເອງ, ຊຶ່ງສາມາດກວດຫາຂໍ້ມູນຈາກສະບັບເກົ່າ ແລະ ປ່ຽນມັນເປັນຮູບແບບໃໝ່ໄດ້. ການຍ້າຍນີ້ຈະເກີດຂຶ້ນໃນລະຫວ່າງ **Setup Wizard** ຂອງ version 2.0+.

ບົດຮຽນນີ້ຈະກວມເອົາວິທີການເຮັດວຽກຂອງ migrator, ສິ່ງທີ່ຕ້ອງເຮັດໃນກໍລະນີເກີດຂໍ້ຜິດພາດ, ແລະ ວິທີແກ້ໄຂບັນຫາຕ່າງໆທີ່ອາດຈະເກີດຂຶ້ນໃນຂະບວນການນີ້.

_**ສຳຄັນ: ກ່ອນເຈົ້າຈະເລີ່ມອັບເກຣດຈາກ version 1.x ໄປເປັນ version 2.0, ກະລຸນາກກວດສອບໃຫ້ແນ່ໃຈວ່າເຈົ້າໄດ້ສ້າງ backup ຂອງ database ເຊື້ອຊາດ (site database) ຂອງເຈົ້າໄວ້ແລ້ວ**_

## ຂັ້ນຕອນທຳອິດ {#first-steps}

ຂັ້ນຕອນທຳອິດແມ່ນການດາວໂຫຼດໄຟລ໌ plugin .zip ແລະ ຕິດຕັ້ງ version 2.0 ໃນ dashboard ຂອງ network admin ຂອງເຈົ້າ.

ຫຼັງຈາກທີ່ເຈົ້າ [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), ລະບົບຈະກວດພົບໂດຍອັດຕະໂນມັດວ່າ Multisite ຂອງເຈົ້າກຳລັງໃຊ້ສະບັບເກົ່າ ແລະ ເຈົ້າຈະເຫັນຂໍ້ຄວາມນີ້ຢູ່ເທິງໜ້າ plugin.

_**ໝາຍເຫດ: ຖ້າເຈົ້າຕິດຕັ້ງ Ultimate Multisite 1.x ຢູ່ໃນ Multisite ຂອງເຈົ້າແລ້ວ, ເຈົ້າຈະມີທາງເລືອກທີ່ຈະປ່ຽນ plugin ກັບສະບັບທີ່ເຈົ້າໄດ້ດາວໂຫຼດມາໃໝ່. ກະລຸນາໄປກົດເພື່ອ **Replace current with uploaded** (ປ່ຽນກັບສະບັບທີ່ອັບໂຫຼດ) ໄດ້ເລີຍ._

<!-- ຮູບພາບບໍ່ມີ: ໜ້າ plugin ສະແດງທາງເລືອກໃນການປ່ຽນ v1 ດ້ວຍ v2 ທີ່ອັບໂຫຼດມາ -->

Page cas tsua yuav raugjau chu i hriat tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng. I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng.

I ngei i hria tamahawmaw zeng chu i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng i hria tamahawmaw zeng

## ຕອນນີ້, ການຍົກຍ້າຍ (Migration) {#now-the-migration}

Migrator ຂອງພວກເຮົາ có feature an safety built-in. ມັນຈະກວດສອບ multisite ທັງໝົດຂອງທ່ານ ເພື່ອໃຫ້ແນ່ໃຈວ່າຂໍ້ມູນ Ultimate Multisite ຂອງທ່ານສາມາດຍົກຍ້າຍໄດ້ໂດຍບໍ່ມີບັນຫາໃດໆ. ກົດປຸ່ມ **Run Check** ເພື່ອເລີ່ມຂະບວນການນີ້.

Sau khi chạy check ແລ້ວ, ທ່ານຈະມີສອງທາງເລືອກ: ຜົນລັບອາດຈະມາແບບ **with error** (ມີຂໍ້ຜິດພາດ) ຫຼື **without error** (ບໍ່ມີຂໍ້ຜິດພາດ).

### ມີຂໍ້ຜິດພາດ (With Error) {#with-error}

ຖ້າທ່ານໄດ້ຮັບຂໍ້ຄວາມຜິດພາດ, ທ່ານຈະຕ້ອງຕິດຕໍ່ທີມ support ຂອງພວກເຮົາ ເພື່ອໃຫ້ເຂົາເຈົ້າຊ່ວຍແກ້ໄຂຂໍ້ຜິດພາດນັ້ນ. ຢ່າລືມ **provide the error log** (ສະໜອງ error log) ເມື່ອສ້າງ ticket. ທ່ານສາມາດດາວໂຫຼດ log ຫຼື ກົດລິ້ງທີ່ຂຽນວ່າ contact our support team. ມັນຈະເປີດ help widget ຢູ່ທາງຂ້າງຂວາຂອງໜ້າຂອງທ່ານ, ໂດຍມີ field ຕ່າງໆ ທີ່ຕື່ມຂໍ້ມູນໃຫ້ແລ້ວ, ເຊິ່ງລວມມີ error logs ໄວ້ໃນ description.

_**ເນື່ອງຈາກລະບົບພົບຂໍ້ຜິດພາດ, ທ່ານຈະບໍ່ສາມາດໄປຕໍ່ຂະບວນການຍົກຍ້າຍເປັນ version 2.0 ໄດ້. ທ່ານສາມາດ roll back ກັບ version 1.x ເພື່ອໃຫ້ເຄືອຂ່າຍຂອງທ່ານເຮັດວຽກຕໍ່ໄປ ຈົນກວ່າຂໍ້ຜິດພາດຈະຖືກແກ້ໄຂ.**_

### ບໍ່ມີຂໍ້ຜິດພາດ (Without Error) {#without-error}

ຖ້າລະບົບບໍ່ພົບຂໍ້ຜິດພາດໃດໆ, ທ່ານຈະເຫັນ success message ແລະ ມີປຸ່ມ **Migrate** ຢູ່ທາງລຸ່ມ ເຊິ່ງຈະເຮັດໃຫ້ທ່ານສາມາດໄປຕໍ່ຂະບວນການຍົກຍ້າຍໄດ້. ໃນໜ້າພ这, ທ່ານຈະຖືກເຕືອນໃຫ້ create backup database ຂອງທ່ານ ກ່ອນທີ່ຈະໄປຕໍ່, ເຊິ່ງພວກເຮົາແນະນຳຢ່າງແຮງ. ກົດ **Migrate** ຖ້າທ່ານມີ backup ແລ້ວ.

ແລະ ນັ້ນກໍສິ!

你可以選擇繼續執行 Wizard 設置，來更新你網路上的 Logo 和其他東西；或者開始瀏覽你的 Ultimate Multisite 版本 2.0 選單和新的介面。去玩吧！
