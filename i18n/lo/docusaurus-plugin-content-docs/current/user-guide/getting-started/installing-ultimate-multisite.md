---
title: ການຕິດຕັ້ງ Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ການຕິດຕັ້ງ Ultimate Multisite

:::note
ຄູ່ມືນີ້ສົມມຸດວ່າທ່ານໄດ້ຕິດຕັ້ງ ແລະ ຕັ້ງຄ່າ WordPress Multisite ແລ້ວ. ເພື່ອຮຽນຮູ້ວິທີເຮັດ, ກະລຸນາເບິ່ງ [ຄູ່ມືນີ້](https://www.wpbeginner.com/glossary/multisite/) ໂດຍ WP Beginner.
:::

## ການຕິດຕັ້ງ Plugin

Ultimate Multisite ມີໃຫ້ໃຊ້ຟຣີຢູ່ທີ່ [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

ຈາກ **Network Admin Dashboard** ຂອງທ່ານ, ໄປທີ່ **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

ຊອກຫາ **"Ultimate Multisite"** (ໃສ່ເຄື່ອງໝາຍ ngoặc képເພື່ອໃຫ້ຄືກັນທຸກຕົວອັກສອນ) ແລະ ມັນຈະປາກົດເປັນຜົນລໍາດັບທໍາອິດ. ກົດ **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ເມື່ອຕິດຕັ້ງແລ້ວ, ກົດ **Network Activate** ເພື່ອເປີດໃຊ້ plugin ນີ້ໃນທົ່ວເຄືອຂ່າຍຂອງທ່ານ.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

ຫຼັງຈາກເປີດໃຊ້ງານແລ້ວ, ທ່ານຈະຖືກປ່ຽນໄປທີ່ Setup Wizard ອັດຕະໂນມັດ.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard ຈະຊ່ວຍແນະນຳທ່ານໃນການຕັ້ງຄ່າ Ultimate Multisite ໃນເວລາປະມານ 10 ນາທີ.

### Welcome

ກົດ **Get Started** ເພື່ອເລີ່ມຕົ້ນ.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

ຂັ້ນຕອນນີ້ຈະກວດສອບຂໍ້ມູນລະບົບ ແລະ ການຕິດຕັ້ງ WordPress ຂອງທ່ານ ເພື່ອໃຫ້ແນ່ໃຈວ່າຮຽບຮ້ອຍຕາມຂໍ້ກຳນົດຂອງ Ultimate Multisite. ຖ້າທຸກຢ່າງເບິ່ງຄືວ່າດີ, ກົດ **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note ခလုတ် Network Activate (v2.6.1+)
ຖ້າ Ultimate Multisite ຖືກຕິດຕັ້ງແລ້ວ ແຕ່ **ຍັງບໍ່ທັນໄດ້ເປີດໃຊ້ເປັນເຄືອຂ່າຍ** — ເຊັ່ນ: ຖ້າທ່ານກົດ **Activate** (single-site) ແທນທີ່ຈະກົດ **Network Activate** ຈາກໜ້າ plugin ຂອງ network — ຂັ້ນຕອນ Pre-install Checks ຈະກວດພົບສິ່ງນີ້ ແລະ ສະແດງປຸ່ມ **Network Activate**.

ການກົດ **Network Activate** ຈະເປີດໃຊ້ plugin ນີ້ໃນເຄືອຂ່າຍ multisite ທັງໝົດຂອງທ່ານໂດຍອັດຕະໂນມັດ. ເມື່ອເປີດໃຊ້ແລ້ວ, wizard ຈະສືບຕໍ່ໄປຕາມປົກກະຕິສູ່ຂັ້ນຕອນການຕິດຕັ້ງ. ທ່ານບໍ່ຈຳເປັນຕ້ອງອອກຈາກ wizard ເພື່ອແກ້ໄຂສະຖານະການເປີດໃຊ້.
:::

### ການຕິດຕັ້ງ (Installation)

Installer ຈະສ້າງ database tables ທີ່ຈຳເປັນ ແລະ ຕິດຕັ້ງໄຟລ໌ `sunrise.php` ທີ່ Ultimate Multisite ຕ້ອງການເພື່ອເຮັດວຽກ. ກົດ **Install** ເພື່ອເລີ່ມຕໍ່ໄປ.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ບໍລິສັດຂອງທ່ານ (Your Company)

ໃຫ້ຂໍ້ມູນຂອງບໍລິສັດຂອງທ່ານ ແລະ ກໍານົດສະກຸນເງິນເລີ່ມຕົ້ນຂອງທ່ານ. ຂໍ້ມູນນີ້ຈະຖືກນຳໃຊ້ທົ່ວເວທີ WaaS ຂອງທ່ານ. ກົດ **Continue** ເມື່ອເຮັດສຳເລັດ.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ເນື້ອໃນເບື້ອງຕົ້ນ (Default Content)

ຂັ້ນຕອນນີ້ຈະຊ່ວຍໃຫ້ທ່ານຕິດຕັ້ງ template, product ແລະ ເນື້ອໃນເລີ່ມຕົ້ນອື່ນໆທີ່ກຳນົດໄວ້ລ່ວງໜ້າ. ນີ້ເປັນວິທີທີ່ດີທີ່ຈະເຮັດຄວາມຄຸ້ນເຄີຍກັບ features ຂອງ Ultimate Multisite. ກົດ **Install** ເພື່ອເພີ່ມເນື້ອໃນເບື້ອງຕົ້ນ, ຫຼື ຂ້າມຂັ້ນຕອນນີ້ຖ້າທ່ານຕ້ອງການເລີ່ມຈາກຈຸດສູນ.

![Default content installation step](/img/installation/wizard-default-content.png)

### Plugin ແນະນຳ (Recommended Plugins)

ຕິດຕັ້ງ plugin ຮ່ວມທີ່ແນະນຳເປັນທາງເລືອກ. ກົດ **Install** ເພື່ອເພີ່ມພວກມັນ ຫຼື ຂ້າມໄປຕໍ່ໄດ້.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### ພ້ອມແລ້ວ! (Ready!)

เสร็จเรียบร้อยแล้วครับ! การติดตั้ง Ultimate Multisite ของคุณเสร็จสมบูรณ์แล้ว ตอนนี้คุณสามารถเริ่มสร้างแพลตฟอร์ม Website as a Service ของคุณได้จาก **Network Admin Dashboard** ครับ

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

ลองสนุกกับการใช้งานดูนะครับ!
