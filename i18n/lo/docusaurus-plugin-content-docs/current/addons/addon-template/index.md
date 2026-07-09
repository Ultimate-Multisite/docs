---
title: ແມ່ແບບສ່ວນເສີມ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ແມ່ແບບສ່ວນເສີມ

{{ADDON_DESCRIPTION}}

## ຂໍ້ກຳນົດ

- WordPress 5.3 ຫຼືສູງກວ່າ
- PHP 7.4 ຫຼືສູງກວ່າ
- ປລັກອິນ Multisite Ultimate (ເປີດໃຊ້ງານ)

## ການຕິດຕັ້ງ

1. ອັບໂຫຼດໄຟລ໌ສ່ວນເສີມໄປຍັງໄດເຣັກທໍຣີ `/wp-content/plugins/` ຂອງທ່ານ
2. ເປີດໃຊ້ງານປລັກອິນຜ່ານເມນູ 'ປລັກອິນ' ໃນ WordPress
3. ກຳນົດຄ່າສ່ວນເສີມໃນຜູ້ດູແລເຄືອຂ່າຍ

## ການພັດທະນາ

### ການຕັ້ງຄ່າ

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### ໂຄງສ້າງໂຄງການ

```
ultimate-multisite-addon-template/
├── inc/                          # ຄລາສ PHP ແລະໄຟລ໌ລວມ
│   ├── class-multisite-ultimate-updater.php  # ຕົວຈັດການອັບເດດ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ຟັງຊັນຫຼັກ
├── tests/                        # ການທົດສອບຫົວໜ່ວຍ
│   ├── bootstrap.php            # ບູດສະແຕຣບການທົດສອບ
│   ├── class-*-base.php         # ຄລາສທົດສອບພື້ນຖານ
│   └── class-*-test.php         # ກໍລະນີທົດສອບ
├── views/                       # ໄຟລ໌ແມ່ແບບ
├── assets/                      # ຊັບພະຍາກອນສະແຕຕິກ
│   ├── css/                     # ສະໄຕລ໌ຊີດ
│   ├── js/                      # ໄຟລ໌ JavaScript
│   └── images/                  # ຮູບພາບ
├── lang/                        # ໄຟລ໌ພາສາ
├── composer.json                # ການພຶ່ງພາ PHP
├── package.json                 # ການພຶ່ງພາ Node.js
├── phpunit.xml.dist             # ການກຳນົດຄ່າ PHPUnit
├── .phpcs.xml.dist              # ການກຳນົດຄ່າມາດຕະຖານໂຄດ
└── rector.php                   # ກົດການປັບໂຄດໃຫ້ທັນສະໄໝ
```

### ການທົດສອບ

ສ່ວນເສີມນີ້ມີເຟຣມເວີກການທົດສອບທີ່ຄົບຖ້ວນ:

- **ການທົດສອບຫົວໜ່ວຍ**: ການທົດສອບທີ່ອີງໃສ່ PHPUnit ພ້ອມຊຸດທົດສອບ WordPress
- **ຄລາສທົດສອບພື້ນຖານ**: ສະໜອງເມທອດຊ່ວຍເຫຼືອສຳລັບສະຖານະການທົດສອບທົ່ວໄປ
- **ຄວາມຄອບຄຸມການທົດສອບ**: ກຳນົດຄ່າເພື່ອຕິດຕາມຄວາມຄອບຄຸມໂຄດ
- **ການທົດສອບ Multisite**: ການທົດສອບແລ່ນໃນສະພາບແວດລ້ອມ multisite

### ມາດຕະຖານໂຄດ

- **ມາດຕະຖານການຂຽນໂຄດ WordPress**: ບັງຄັບໃຊ້ຜ່ານ PHPCS
- **ຄວາມເຂົ້າກັນໄດ້ກັບ PHP 7.4+**: ຮອງຮັບຄຸນສົມບັດ PHP ສະໄໝໃໝ່
- **ການວິເຄາະສະແຕຕິກ**: ການລວມ PHPStan ສຳລັບການກວດປະເພດ
- **ການປັບໂຄດໃຫ້ທັນສະໄໝ**: ກົດ Rector ສຳລັບການອັບເກຣດ PHP

### ລະບົບບິວ

- **ການປະມວນຜົນຊັບພະຍາກອນ**: ການຫຍໍ້ຂະໜາດໄຟລ໌ CSS/JS
- **ການແປພາສາ**: ການສ້າງໄຟລ໌ POT
- **ການຈັດແພັກເກດ**: ການສ້າງອາຣ໌ຄາຍຟ໌ສຳລັບການແຈກຢາຍ
- **ໂໝດພັດທະນາ**: ຊັບພະຍາກອນທີ່ບໍ່ຖືກຫຍໍ້ຂະໜາດສຳລັບການດີບັກ

## ການກຳນົດຄ່າ

ສ່ວນເສີມຮອງຮັບຕົວເລືອກການກຳນົດຄ່າຫຼາຍຢ່າງທີ່ເຂົ້າເຖິງໄດ້ຜ່ານອິນເຕີເຟດຜູ້ດູແລເຄືອຂ່າຍ.

## Hooks ແລະ Filters

### Actions

- `ultimate-multisite-addon-template_init` - ຖືກເອີ້ນຫຼັງຈາກການເລີ່ມຕົ້ນສ່ວນເສີມ
- `ultimate-multisite-addon-template_loaded` - ຖືກເອີ້ນຫຼັງຈາກໄຟລ໌ສ່ວນເສີມທັງໝົດຖືກໂຫຼດແລ້ວ

### Filters

- `ultimate-multisite-addon-template_settings` - ແກ້ໄຂການຕັ້ງຄ່າສ່ວນເສີມ
- `ultimate-multisite-addon-template_enabled` - ຂຽນທັບສະຖານະເປີດ/ປິດການໃຊ້ງານສ່ວນເສີມ

## ໃບອະນຸຍາດ

ສ່ວນເສີມນີ້ໄດ້ຮັບໃບອະນຸຍາດພາຍໃຕ້ GPL v3 ຫຼືໃໝ່ກວ່າ.

## ການສະໜັບສະໜູນ

ສຳລັບການສະໜັບສະໜູນແລະເອກະສານ, ເຂົ້າເບິ່ງ [MultisiteUltimate.com](https://multisiteultimate.com)
## ບັນທຶກການປ່ຽນແປງ

- ເວີຊັນ 1.0.1 (2025-09-28): ປ່ຽນຊື່ຄຳນຳໜ້າເປັນ ultimate-multisite; ອັບເດດໂດເມນຂໍ້ຄວາມ; ເພີ່ມເວີຊັນ.


- ເວີຊັນ  (2025-09-28): ປ່ຽນຊື່ຄຳນຳໜ້າເປັນ ultimate-multisite; ອັບເດດໂດເມນຂໍ້ຄວາມ; ເພີ່ມເວີຊັນ.
