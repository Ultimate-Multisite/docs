---
title: ບ່ອນຂຽນລະຫັດ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets ສຳລັບ v2

ໂດຍພື້ນຖານແລ້ວ, code snippets ສຳລັບ **WordPress** ແມ່ນໃຊ້ເພື່ອເຮັດການກະທຳບາງຢ່າງທີ່ອາດຈະຕ້ອງການ plugin ຂະໜາດນ້ອຍສະເພາະ. ມັນສາມາດໃສ່ໃນໄຟລ໌ຫຼັກຂອງ WordPress ຫຼື theme (ໂດຍປົກກະຕິແມ່ນໄຟລ໌ functions.php ຂອງ theme ຂອງທ່ານ) ຫຼື ສາມາດໃຊ້ເປັນ MU plugin ກໍໄດ້.

ໃນບົດຄວາມນີ້, ພວກເຮົາຈະສະແດງ code snippets ສາມຢ່າງທີ່ສາມາດນຳໃຊ້ກັບ **Ultimate Multisite v2** ເປັນຕົວຢ່າງ:

  * [**ການປ່ຽນຕຳແໜ່ງຂອງເມນູ Account**](#changing-the-position-of-the-account-menu-item)

  * [**ວິທີກວດສອບວ່າຜູ້ໃຊ້ຢູ່ໃນແຜນທີ່ກຳນົດ ແລະ/ຫຼື ມີການສະໝັກໃຊ້ທີ່ເຄື່ອນໄຫວຢູ່ບໍ່**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ການແກ້ໄຂບັນຫາ CORS ກັບ Font-Icons ໃນ domain ທີ່ຖືກแมપ**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## ການປ່ຽນຕຳແໜ່ງຂອງເມນູ Account

ເພື່ອປ່ຽນຕຳແໜ່ງຂອງເມນູ Account ໃນ Dashboard ຂອງລູກຄ້າ, ເພີ່ມ code snippet ນີ້ໃສ່ໃນໄຟລ໌ functions.php ຂອງ themeຫຼັກຂອງທ່ານໄດ້ເລີຍ. ທ່ານກໍສາມາດເອົາ snippet ນີ້ໃສ່ໃນ mu-plugin ຫຼື custom plugin ໃດໜຶ່ງຂອງທ່ານກໍໄດ້.

add_filter('wu_my_account_menu_position', function() { return 10; // ປັບຄ່າສະເພາະນີ້ເພື່ອຈັດວາງເມນູໃນຕຳແໜ່ງທີ່ຕ້ອງການ.

## ວິທີກວດສອບວ່າຜູ້ໃຊ້ຢູ່ໃນແຜນທີ່ກຳນົດ ແລະ/ຫຼື ມີການສະໝັກໃຊ້ທີ່ເຄື່ອນໄຫວຢູ່ບໍ່

ໃນຖານະ network admin, ທ່ານອາດຈະຕ້ອງສ້າງ custom functions ເພື່ອເຮັດການກະທຳພື້ນຖານ ຫຼື ເຮັດໃຫ້ບໍລິການ/ຟີເຈີໃດໜຶ່ງມີໃຫ້ກຸ່ມຜູ້ສະໝັກ ຫຼື end-users ທີ່ເລືອກໄວ້ໃຊ້ໄດ້, ຂຶ້ນກັບສະຖານະການສະໝັກໃຊ້ ແລະ ແຜນທີ່ເຂົາເຈົ້າສະໝັກຢູ່.

ฟังก์ชันຂອງ Ultimate Multisite ພື້ນເມືອງ (native functions) ເຫຼົ່ານີ້ຈະຊ່ວຍທ່ານໃນເລື່ອງນີ້ໄດ້ດີ.

ເພື່ອກວດສອບວ່າຜູ້ໃຊ້ເປັນສະມາຊຂອງແຜນໃດໜຶ່ງ, ທ່ານສາມາດໃຊ້ຟັງຊັນນີ້ໄດ້:

wu_has_plan($user_id, $plan_id)

ເພາະວ່າຈະກວດສອບວ່າການສະໝັກໃຊ້ (subscription) ຍັງເປີດຢູ່ບໍ່, ເຈົ້າສາມາດໃຊ້ຟັງຊັນນີ້ໄດ້:

`wu_is_active_subscriber($user_id)`

ຂ້າງລຸ່ມນີ້ແມ່ນຕົວຢ່າງຂອງ code snippet ທີ່ກວດສອບວ່າຜູ້ໃຊ້ປັດຈຸບັນຢູ່ໃນແຜນສະເພາະ (_Plan ID 50_) ແລະ ການສະໝັກໃຊ້ຂອງຜູ້ໃຊ້ນັ້ນເປີດຢູ່ບໍ່.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ຜູ້ໃຊ້ເປັນສະມາຊຂອງແຜນ ແລະ ການສະໝັກໃຊ້ຂອງເຂົາເປິດຢູ່, ເຮັດສິ່ງທີ່ຕ້ອງການ } else { // ຜູ້ໃຊ້ບໍ່ແມ່ນສະມາຊຂອງແຜນ -- ຫຼື -- ການສະໝັກໃຊ້ຂອງເຂົາບໍ່ເປີດຢູ່, ເຮັດສິ່ງອື່ນ } // ສຸດທ້າຍ if;`

ຂໍໃຫ້ລະວັງວ່າ `_**wu_has_plan**_` ຕ້ອງການ "Plan ID" ເພື່ອໃຫ້ມັນເຮັດວຽກໄດ້.

ເພື່ອເອົາ ID ຂອງແຜນ, ເຈົ້າສາມາດໄປທີ່ **Ultimate Multisite > Products**. ID ຂອງຜະລິດຕະພັນແຕ່ລະອັນຈະສະແດຢູ່ທາງຂວາຂອງຕາຕະລາງ.

ຂໍໃຫ້ລະວັງວ່າ ຜູ້ໃຊ້ສາມາດສະໝັກໃຊ້ໄດ້ກັບ **Plan** ເທົ່ານັ້ນ, ບໍ່ແມ່ນ Package ຫຼື Service, ເພາະວ່າພວກມັນເປັນພຽງສ່ວນເພີ່ມເຕີມ (add-ons) ຂອງ **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## ການແກ້ໄຂບັນຫາ CORS ກັບ Font-Icons ໃນ domain ທີ່ຖືກแมપ
## Fixing CORS issues with Font-Icons in mapped domains

ຫຼັງຈາກທີ່ເຈົ້າໄດ້ map domain ເປັນ sub-site ແລ້ວ, ເຈົ້າອາດຈະພົບວ່າເວັບໄຊນັ້ນມີບັນຫາໃນການໂຫຼດ font ທີ່ເປັນແບບ custom. ນີ້ເກີດມາຈາກການກีดກ້ອງຂ้ามຕົ້ນສະໜາມ (cross-origin block) ໃນການຕັ້ງຄ່າ server ຂອງເຈົ້າ.

ເນື່ອງຈາກໄຟລ໌ font ສ່ວນໃຫຍ່ແມ່ນຖືກໂຫຼດໂດຍກົງຈາກ CSS, plugin map domain ຂອງເຮົາບໍ່ສາມາດຂຽນໃສ່ URL ເພື່ອໃຊ້ domain ທີ່ຖືກ map ແທນ domain ຕົ້ນສະບັບໄດ້, ດັ່ງນັ້ນເພື່ອແກ້ໄຂບັນຫານີ້, ເຈົ້າຈະຕ້ອງໄປแก้ไขໄຟລ໌ການຕັ້ງຄ່າ server ຂອງເຈົ້າ.

### Apache

ในไฟล์ .htaccess ของคุณ ให้เพิ่มบรรทัดนี้เข้าไป:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

ในไฟล์ตั้งค่าเซิร์ฟเวอร์ของคุณ (ตำแหน่งจะแตกต่างกันไปตามเซิร์ฟเวอร์) ให้เพิ่มส่วนนี้เข้าไป:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
