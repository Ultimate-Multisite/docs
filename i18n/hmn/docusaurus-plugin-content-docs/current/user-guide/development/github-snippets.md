---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# ວິທີໃຊ້ Ultimate Multisite snippets ໃນ GitHub repository ຂອງພວກເຮົາ {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub repository ຂອງພວກເຮົາ ມັນມີ code snippets (အပိုင်း代码) ທີ່ຜູ້ໃຊ້ Ultimate Multisite ມັກຂໍໃຊ້ ເພື່ອເພີ່ມຟັງຊັນນ້ອຍໆ ເຊັ່ນ: ການໃສ່ Google Analytics script ໃນໜ້າລົງທະບຽນ ຫຼື ການເຊື່ອງ meta box ອອກຈາກ admin dashboard.

Article ນີ້ ຈະສະແດງໃຫ້ເຫັນວ່າເຮົາຈະໃຊ້ code ພວກນີ້ໄດ້ແນວໃດ ຫຼື ໂດຍສະເພາະແມ່ນຄວນເອົາໄປໃສ.

ເຈົ້າສາມາດຊອກຫາ snippets ຢູ່ link ຂ້າງລຸ່ມນີ້:

https://github.com/next-press/wp-ultimo-snippets/

ມີ 2 ວິທີທີ່ເຈົ້າສາມາດເພີ່ມ code ນີ້ໄດ້:

  1. ໃນ file functions.php ຂອງ theme ຂອງເຈົ້າ.

  2. Must-Use Plugins (mu-plugins)

# ວິທີເພີ່ມ snippet ໃນ file functions.php ຂອງ theme ເຈົ້າ {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. ເຂົ້າສູ່ລະບົບ WordPress Network admin dashboard ຂອງເຈົ້າ ແລ້ວໄປທີ່ Themes > Theme Editor (ເບິ່ງ screenshot ຂ້າງລຸ່ມນີ້).

  2. ໃນໜ້າ "Edit Themes", ກວດໃຫ້ແນ່ວ່າເຈົ້າໄດ້ເລືອກ theme ທີ່ກຳລັງໃຊ້ຢູ່ໃນ dropdown field ທີ່ຢູ່ທາງຂ້າງຂວາເທິງຂອງຈໍ (ເບິ່ງ #3 ໃນ screenshot ຂ້າງລຸ່ມນີ້).

  3. ຄລິກ file functions.php ພາຍໃຕ້ສ່ວນ "Theme Files" ເພື່ອໂຫຼດ file ນັ້ນ. ລອຍລົງໄປທາງລຸ່ມສຸດ ແລະ ແທ້ໄຂ/ວາງ Ultimate Multisite snippet ທີ່ເຈົ້າໄດ້ຈາກ GitHub repository ໃສ່.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# ວິທີສ້າງ Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ມີ feature ຫນຶ່ງທີ່ຊ່ວຍໃຫ້ເຈົ້າສາມາດໂຫຼດ custom functionality ຊື່ວ່າ "Must-Use Plugins" ຫຼື "mu-plugins" ສັ້ນໆ.

mu-plugins ພິເສດເຫຼົ່ານີ້ຈະຖືກໂຫຼດກ່ອນ plugin ທັງໝົດ, ແລະ ເຮົາບໍ່ສາມາດ Deactivate (ປິດ) ມັນໄດ້. ໃນ multisite network, code ທີ່ຢູ່ໃນ mu-plugins ເຫຼົ່ານີ້ ຈະຖືກໂຫຼດໃນທຸກ site ໃນການຕິດຕັ້ງຂອງເຈົ້າ.

1. ໃຊ້ FTP ຫຼື SSH ເພື່ອເຂົ້າເຖິງ filesystem ຂອງ WordPress installation ຂອງເຈົ້າ.

2. WordPress installation-sau, `wp-content` folder-sa, thul, tswm chawm neej directory tshiab neej: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Computer-sau, Notepad or any code editor hauv, PHP file tshiab neej: `wu-snippet.php` chawm.

4. GitHub repository tom hmo Ultimate Multisite code snippet chuav, file ruu, thul, save laj. Tswm, chuav code snippet tom hmo add laj to label your mu plugin.
