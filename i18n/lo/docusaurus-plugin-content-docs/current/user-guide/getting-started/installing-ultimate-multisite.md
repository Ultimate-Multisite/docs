---
title: ການຕິດຕັ້ງ Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ການຕິດຕັ້ງ Ultimate Multisite {#installing-ultimate-multisite}

:::note
ຄຳແນະນຳນີ້ສົມມຸດວ່າທ່ານໄດ້ຕິດຕັ້ງ ແລະຕັ້ງຄ່າ WordPress Multisite ແລ້ວ. ເພື່ອຮຽນຮູ້ວິທີການ, ກະລຸນາເບິ່ງ [ຄຳແນະນຳນີ້](https://www.wpbeginner.com/glossary/multisite/) ໂດຍ WP Beginner.
:::

## ການຕິດຕັ້ງ Plugin {#installing-the-plugin}

Ultimate Multisite ສາມາດດາວໂຫຼດໄດ້ຟຣີຈາກ [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

ຈາກ **Network Admin Dashboard** ຂອງທ່ານ, ໄປທີ່ **Plugins → Add New Plugin**.

![ໜ້າ Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

ຄົ້ນຫາ **"Ultimate Multisite"** (ໃສ່ເຄື່ອງໝາຍອັ໋ບເພື່ອໃຫ້ໄດ້ຜົນການຄົ້ນຫາທີ່ຖືກຕ້ອງ) ແລະມັນຈະປະກົດເປັນຜົນການຄົ້ນຫາກັ້ງທຳອິດ. ກົດ **Install Now**.

![ຜົນການຄົ້ນຫາສະແດງ Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ເມື່ອຕິດຕັ້ງສຳເລັດ, ກົດ **Network Activate** ເພື່ອເປີດໃຊ້ plugin ທົ່ວທັງເຄືອຂ່າຍຂອງທ່ານ.

![Plugin ຖືກຕິດຕັ້ງດ້ວຍປຸ່ມ Network Activate](/img/installation/plugin-installed.png)

ຫຼັງຈາກເປີດໃຊ້ແລ້ວ, ທ່ານຈະຖືກນຳໄປຍັງ Setup Wizard ອັດຕະໂນມັດ.

![Plugin ເປີດໃຊ້ ແລະ ນຳໄປສູ່ wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard ຈະຊີ້ ນຳ ທ່ານໃນການຕັ້ງຄ່າ Ultimate Multisite ໃນເວລາປະມານ 10 ນາທີ.

### ຍິນດີຕ້ອນຮັບ {#welcome}

ກົດ **Get Started** ເພື່ອເລີ່ມຕົ້ນ.

![ໜ້າຈໍ Setup Wizard ທີ່ສະແດງຂໍ້ຄວາມຍິນດີຕ້ອນຮັບ](/img/installation/wizard-welcome.png)

### ການກວດສອບກ່ອນຕິດຕັ້ງ {#pre-install-checks}

ຂັ້ນຕອນນີ້ຈະກວດເບິ່ງຂໍ້ມູນລະບົບ ແລະການຕິດຕັ້ງ WordPress ຂອງທ່ານ ເພື່ອໃຫ້ແນ່ໃຈວ່າເປັນໄປຕາມຂໍ້ກຳນົດຂອງ Ultimate Multisite. ຖ້າທຸກຢ່າງດີ, ກົດ **Go to the Next Step**.

![ການກວດສອບກ່ອນຕິດຕັ້ງສະແດງຂໍ້ກຳນົດລະບົບ](/img/installation/wizard-pre-install-checks.png)

:::note ປຸ່ມ Network Activate (v2.6.1+)
ຖ້າ Ultimate Multisite ຖືກຕິດຕັ້ງແຕ່ **ຍັງບໍ່ທັນເປີດໃຊ້ໃນເຄືອຂ່າຍ** - ເຊັ່ນ: ຖ້າທ່ານກົດ **Activate** (ສຳລັບເວັບໄຊດຽວ) ແທນທີ່ຈະເປັນ **Network Activate** ຈາກໜ້າຈໍ plugins ໃນເຄືອຂ່າຍ - ຂັ້ນຕອນການກວດສອບກ່ອນຕິດຕັ້ງຈະຮັບຮູ້ເຖິງເລື່ອງນີ້ ແລະສະແດງປຸ່ມ **Network Activate**.

ການກົດ **Network Activate** ຈະເປີດໃຊ້ plugin ທົ່ວທັງເຄືອຂ່າຍ multisite ຂອງທ່ານໂດຍອັດຕະໂນມັດ. ເມື່ອເປີດໃຊ້ແລ້ວ, wizard ຈະສືບຕໍ່ໄປຫາຂັ້ນຕອນການຕິດຕັ້ງຕາມປົກກະຕິ. ທ່ານບໍ່ຈຳເປັນຕ້ອງອອກຈາກ wizard ເພື່ອແກ້ໄຂສະຖານະການເປີດໃຊ້.
:::

### ການຕິດຕັ້ງ {#installation}

ຕົວຕິດຕັ້ງຈະສ້າງຕາຕະລາງຖານຂໍ້ມູນທີ່ຈຳເປັນ ແລະຕິດຕັ້ງໄຟລ໌ `sunrise.php` ທີ່ Ultimate Multisite ຈຳເປັນຕ້ອງມີເພື່ອເຮັດວຽກ. ກົດ **Install** ເພື່ອດຳເນີນການຕໍ່.

![ຂັ້ນຕອນການຕິດຕັ້ງສະແດງຕາຕະລາງຖານຂໍ້ມູນ ແລະ sunrise.php](/img/installation/wizard-installation.png)

### ບໍລິສັດຂອງທ່ານ {#your-company}

ປ້ອນຂໍ້ມູນຂອງບໍລິສັດຂອງທ່ານ ແລະກຳນົດເງິນຕາທີ່ໃຊ້ຕາມຄ່າເລີ່ມຕົ້ນ. ຂໍ້ມູນນີ້ຈະຖືກນໍາໃຊ້ທົ່ວທັງເວທີ WaaS ຂອງທ່ານ. ກົດ **Continue** ເມື່ອເຮັດສຳເລັດ.

![ຂັ້ນຕອນການຕັ້ງຄ່າ Your Company](/img/installation/wizard-your-company.png)

### ເນື້ອໃນເລີ່ມຕົ້ນ {#default-content}

ຂັ້ນຕອນນີ້ຊ່ວຍໃຫ້ທ່ານຕິດຕັ້ງແມ່ແບບທີ່ກຳນົດໄວ້ລ່ວງໜ້າ, ຜະລິດຕະພັນ ແລະເນື້ອໃນອື່ນໆເພື່ອເປັນຈຸດເລີ່ມຕົ້ນ. ນີ້ແມ່ນວິທີທີ່ດີທີ່ຈະເຮັດຄວາມຄຸ້ນເຄີຍກັບຄຸນສົມບັດຂອງ Ultimate Multisite. ກົດ **Install** ເພື່ອເພີ່ມເນື້ອໃນເລີ່ມຕົ້ນ, ຫຼືຂ້າມຂັ້ນຕອນນີ້ຖ້າທ່ານຕ້ອງການເລີ່ມຕົ້ນຈາກສູນ.

![ຂັ້ນຕອນການຕິດຕັ້ງເນື້ອໃນເລີ່ມຕົ້ນ](/img/installation/wizard-default-content.png)

### Plugins ທີ່ແນະນຳ {#recommended-plugins}

ຕິດຕັ້ງ plugins ເພື່ອນຮ່ວມງານທີ່ແນະນຳທາງເລືອກ. ກົດ **Install** ເພື່ອເພີ່ມພວກມັນ ຫຼືຂ້າມໄປເພື່ອສືບຕໍ່.

![ຂັ້ນຕອນ plugins ທີ່ແນະນຳ](/img/installation/wizard-recommended-plugins.png)

### ສໍາເລັດ! {#ready}

ສຳເລັດແລ້ວ! ການຕິດຕັ້ງ Ultimate Multisite ຂອງທ່ານສຳເລັດຮູບ. ດຽວນີ້ທ່ານສາມາດເລີ່ມຕົ້ນສ້າງເວທີ Website as a Service ຂອງທ່ານຈາກ **Network Admin Dashboard**.

![Setup ສຳເລັດ - ໜ້າຈໍ Ready](/img/installation/wizard-ready.png)

![ໜ້າ Network Admin Dashboard ທີ່ມີ Ultimate Multisite ເປີດໃຊ້](/img/installation/network-dashboard.png)

ໄປເດີ, ເລີ່ມຕົ້ນມ່ວນໆ!
