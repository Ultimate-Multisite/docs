---
title: ການຕັ້ງຄ່າ Sunrise Constant ໃສ່ Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# ການຕັ້ງຄ່າ constant sunrise ເປັນ true ໃນ Closte

ຜູ້ໃຫ້ບໍລິການໂຮสต์ບາງรายล็อคไฟล์ wp-config.php ເພື່ອຄວາມປອດໄພ។ ນີ້ໝາຍຄວາມວ່າ Ultimate Multisite ບໍ່ສາມາດແກ້ໄຂໄຟລ໌ໄດ້ອັດຕະໂນມັດເພື່ອໃສ່ constant ທີ່ຈຳເປັນເພື່ອໃຫ້ການแมપໂດເມນ ແລະ ຄຸນສົມບັດອື່ນໆເຮັດວຽກໄດ້ຢ່າງຖືກຕ້ອງ। Closte ເປັນໜຶ່ງໃນຜູ້ໃຫ້ບໍລິການແບບນັ້ນ.

ແນວໃດກໍຕາມ, Closte ມີວິທີທີ່ຈະເພີ່ມ constant ໃສ່ wp-config.php ໄດ້ຢ່າງປອດໄພ។ ເຈົ້າພຽງແຕ່ຕ້ອງເຮັດຕາມຂັ້ນຕອນខាងລຸ່ມນີ້:

## ໃນ dashboard ຂອງ Closte {#on-the-closte-dashboard}

ກ່ອນອື່ນ, [ເຂົ້າສູ່ລະບົບ Closte account ຂອງເຈົ້າ](https://app.closte.com/), ຄລິກໃສ່ເມນູ Sites, ແລ້ວຄລິກໃສ່ລິ້ງ Dashboard ຢູ່ເທິງໄຟລ໌ທີ່ເຈົ້າກຳລັງເຮັດວຽກຢູ່:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ເຈົ້າຈະເຫັນເມນູໃໝ່ໆຈຳນວນໜຶ່ງຢູ່ທາງຊ້າຍຂອງໜ້າຈໍ। ໃຫ້ໄປທີ່ໜ້າ **Settings** (ການຕັ້ງຄ່າ) ໂດຍໃຊ້ເມນูนັ້ນ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ຈາກນັ້ນ, ໃນສ່ວນ **Settings**, ຊອກຫາ tab WP-Config, ແລະ ແລ້ວຊອກຫາຊ່ອງ "Additional wp-config.php content" (ເນື້ອໃນເພີ່ມເຕີມຂອງ wp-config.php) ຢູ່ເທິງ tab ນັ້ນ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

ໃນບໍລິບົດຂອງການຕິດຕັ້ງ Ultimate Multisite, ເຈົ້າຈະຕ້ອງເພີ່ມ constant sunrise ໃສ່ໃນຊ່ອງນັ້ນ។ ພຽງແຕ່ເພີ່ມແຖວໃໝ່ ແລະ ແທ້ໄຂຂໍ້ຄວາມຂ້າງລຸ່ມນີ້:

define('SUNRISE', true);

ເທົ່ານັ້ນ, ເຈົ້າເຮັດຖືກແລ້ວ। ກັບໄປທີ່ wizard ການຕິດຕັ້ງ Ultimate Multisite ແລະ ເຮັດ refresh ໜ້າເພື່ອສືບຕໍ່ຂັ້ນຕອນ.
