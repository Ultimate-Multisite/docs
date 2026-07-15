---
title: Lwm txai txhua lub fil buj
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error Installing the Sunrise File

ไฟล์ sunrise.php เป็นไฟล์พิเศษที่ WordPress ใช้อ่านตอนที่มันเริ่มทำงาน (bootstraps). ໃຫ້ WordPress ສາມາດຊອກຫາ file ນີ້ໄດ້, ມັນຕ້ອງຢູ່ພາຍໃນ **wp-content folder**.

ເວລາທີ່ເຈົ້າເປີດ Ultimate Multisite ແລ້ວເຮັດຕາມຂັ້ນຕອນ setup wizard ເຊັ່ນແບບທີ່ຢູ່ໃນ screenshot, Ultimate Multisite ຈະພະຍາຍາມຄັດລອກ file sunrise.php ຂອງພວກເຮົາໄປໃສ່ໃນ wp-content folder.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ສ່ວນຫຼາຍເວລາ, ພວກເຮົາສາມາດຄັດລອກ file ນັ້ນໄດ້ຢ່າງສຳເລັດ ແລະ ທຸກຢ່າງກໍໃຊ້ງານໄດ້ປົກກະຕິ. ແຕ່ຖ້າຫາກມີບາງຢ່າງທີ່ຕັ້ງບໍ່ຖືກຕ້ອງ (ເຊັ່ນ: ສິດໃນການເຂົ້າເຖິງ folder), ເຈົ້າອາດຈະเจอສະຖານະການທີ່ Ultimate Multisite ບໍ່ສາມາດຄັດລອກ file ນັ້ນໄດ້.

ຖ້າເຈົ້າໄປອ່ານຂໍ້ຄວາມ error message ທີ່ Ultimo ໃຫ້ມາ, ເຈົ້າຈະເຫັນວ່າເກີດຫຍັງຂຶ້ນແທ້: **Sunrise copy failed** (ການຄັດລອກ Sunrise ລົ້ມເຫຼວ).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ເພື່ອແກ້ໄຂບັນຫານີ້, ເຈົ້າສາມາດຄັດລອກ file sunrise.php ທີ່ຢູ່ໃນ folder plugin wp-ultimo ແລ້ວໄປວາງມັນໃສ່ໃນ wp-content folder ຂອງເຈົ້າໄດ້ເລີຍ. ຫຼັງຈາກເຮັດແບບນັ້ນແລ້ວ, ລອງ reload ໜ້າ wizard ອີກເທື່ອໜຶ່ງ ແລະ ການກວດສອບຄວນຈະຜ່ານ.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ໃນທຸກໆກໍລະນີ, ນີ້ອາດເປັນໂອກາດໃຫ້ເຈົ້າໄປກວດສອບສິດໃນການເຂົ້າເຖິງ folder ຂອງເຈົ້າໂດຍລວມ ເພື່ອຫຼີກລ່ຽງບັນຫາໃນອະນາຄົດ (ບໍ່ແມ່ນແຕ່ Ultimate Multisite ແຕ່ຍັງກັບ plugin ແລະ theme ອື່ນໆອີກ).

ເຄື່ອງມື **Health Check tool** ທີ່ເປັນສ່ວນໜຶ່ງຂອງ WordPress (ເຈົ້າສາມາດເຂົ້າເຖິງມັນໄດ້ຜ່ານ **admin panel > Tools > Health Check** ຂອງ site ຫຼັກຂອງເຈົ້າ) ສາມາດບອກເຈົ້າໄດ້ວ່າສິດໃນການເຂົ້າເຖິງ folder ຂອງເຈົ້າຖືກຕັ້ງຄ່າໄວ້ໃນຄ່າທີ່ອາດຈະເຮັດໃຫ້ WordPress ມີບັນຫາຫຼືບໍ່.

<!-- Tsa txhawm tsis muaj: WordPress Health Check tool tsoom txog status of folder permissions -->
