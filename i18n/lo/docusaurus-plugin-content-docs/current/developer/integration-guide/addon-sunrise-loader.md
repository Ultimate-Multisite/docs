---
title: ຕົວໂຫຼດໄຟລ໌ Sunrise ຂອງຕົວເສີມ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# ຕົວໂຫຼດໄຟລ໌ Sunrise ຂອງ Addon

Ultimate Multisite 2.8.0 ເພີ່ມຕົວໂຫຼດສ່ວນຂະຫຍາຍ sunrise ສຳລັບ add-ons ແລະການຜະສານກັບ MU-plugin ແບບກຳນົດເອງທີ່ຕ້ອງການຣັນໃນລະຫວ່າງການບູດສະແຕຣັບ sunrise ຂອງ WordPress ໂດຍບໍ່ແກ້ໄຂໄຟລ໌ `wp-content/sunrise.php` ທີ່ຖືກສ້າງຂຶ້ນ.

## ເມື່ອໃດຄວນໃຊ້ມັນ {#when-to-use-it}

ໃຊ້ສ່ວນຂະຫຍາຍ sunrise ເມື່ອການຜະສານຂອງທ່ານຕ້ອງຣັນກ່ອນທີ່ plugin ປົກກະຕິຈະຖືກໂຫຼດ, ເຊັ່ນ ການກຳນົດເສັ້ນທາງໂດເມນແບບກຳນົດເອງ, ການຈັດການຄຳຂໍທີ່ຈຳເພາະຕາມໂຮສ, ຫຼືການປັບແກ້ bootstrap ເຄືອຂ່າຍແຕ່ເຊົ້າ.

ສຳລັບການຜະສານທົ່ວໄປ, ຄວນໃຊ້ WordPress plugins ປົກກະຕິ, MU-plugins, ແລະ hooks ຂອງ Ultimate Multisite ທີ່ມີເອກະສານອະທິບາຍໄວ້. ໂຄດ Sunrise ຣັນໄວຫຼາຍ ແລະຄວນມີຂະໜາດນ້ອຍ, ປ້ອງກັນຂໍ້ຜິດພາດໄດ້ດີ, ແລະບໍ່ພຶ່ງພາ dependency.

## ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ {#file-naming-convention}

ສ້າງໄຟລ໌ PHP ຊື່ `sunrise.php` ໃນໂຟນເດີ addon ທີ່ຊື່ເລີ່ມດ້ວຍ `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ຕົວໂຫຼດຈະສະແກນໂຟນເດີ plugins ເພື່ອຫາຮູບແບບນີ້:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ໄຟລ໌ທີ່ກົງກັນຈະຖືກໂຫຼດຕາມລຳດັບຕົວອັກສອນໂດຍເສັ້ນທາງ addon.

## ຄວນວາງໄຟລ໌ໄວ້ບ່ອນໃດ {#where-to-place-the-file}

ວາງໄຟລ໌ໄວ້ໃນໂຟນເດີຮາກຂອງ addon ທີ່ເປັນເຈົ້າຂອງພຶດຕິກຳ sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ການສະແກນຖືກຄຳນວນອ້າງອີງຕາມ `WP_CONTENT_DIR`, ບໍ່ແມ່ນຄ່າປັດຈຸບັນຂອງ `WP_PLUGIN_DIR`. ນີ້ຊ່ວຍໃຫ້ການຄົ້ນພົບມີຄວາມຄົງທີ່ ເມື່ອ multi-tenancy ຫຼືໂຄດ bootstrap ຂັ້ນຕົ້ນອື່ນໆ ປ່ຽນຄ່າຄົງທີ່ໂຟນເດີ plugin ໃນລະຫວ່າງ sunrise.

ຢ່າແກ້ໄຂໄຟລ໌ `wp-content/sunrise.php` ທີ່ຖືກສ້າງໂດຍກົງ. ຕົວໂຫຼດຊ່ວຍໃຫ້ໂຄດກຳນົດເອງຂະຫຍາຍພຶດຕິກຳ sunrise ໄດ້ ໂດຍບໍ່ຕ້ອງ fork ໄຟລ໌ sunrise ຫຼັກທີ່ Ultimate Multisite ຕິດຕັ້ງແລະອັບເດດ.

## Hooks ແລະ filters ທີ່ມີໃຫ້ໃຊ້ {#hooks-and-filters-available}

ໄຟລ໌ sunrise ຂອງ addon ຈະຣັນຫຼັງຈາກການແມັບໂດເມນຂອງ Ultimate Multisite ໂຫຼດແລ້ວ ແລະກ່ອນ WordPress ຈະຍິງ `ms_loaded`. ໃນຈຸດນີ້ ໄຟລ໌ sunrise ສາມາດ:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ກຳນົດຄ່າຄົງທີ່ຊ່ວງ sunrise ເຊັ່ນ `BLOG_ID_CURRENT_SITE` ເມື່ອຈຳເປັນ;
- ອ່ານສະຖານະຕົວຊ່ວຍ sunrise ຂອງ Ultimate Multisite, ລວມທັງສະຖານະການກຳນົດເສັ້ນທາງທີ່ໃຊ້ໂດຍການຜະສານ multi-tenancy.

Ultimate Multisite ຈະຍິງ `wu_sunrise_loaded` ຫຼັງຈາກຕົວໂຫຼດ sunrise ຂອງມັນສຳເລັດ. ໃຊ້ action ນັ້ນສຳລັບໂຄດທີ່ຄວນຣັນຫຼັງຈາກ bootstrap sunrise ສຳເລັດແລ້ວ ແຕ່ຍັງຢູ່ໃນວົງຈອນຊີວິດ sunrise.

ເອີ້ນໃຊ້ຟັງຊັນທີ່ຖືກໂຫຼດແລ້ວໃນຊ່ວງ sunrise ເທົ່ານັ້ນ. ຫຼີກລ້ຽງວຽກທີ່ໃຊ້ຖານຂໍ້ມູນຫຼາຍ, ການ render template, ຄຳຂໍ HTTP, ແລະໂຄດທີ່ສົມມຸດວ່າລຳດັບການໂຫຼດ plugin ປົກກະຕິໄດ້ສຳເລັດແລ້ວ.

## ຕົວຢ່າງຂັ້ນຕ່ຳ {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ຫຼັງຈາກນຳໄຟລ໌ໄປໃຊ້ແລ້ວ, ໂຫຼດໂດເມນທີ່ແມັບໄວ້ ແລະ URL ຂອງ main-site ທີ່ບໍ່ໄດ້ແມັບ ເພື່ອຢືນຢັນວ່າທັງສອງເສັ້ນທາງຍັງ bootstrap ໄດ້ຢ່າງຖືກຕ້ອງ.
