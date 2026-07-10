---
title: Tsoom tsoom site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# ការនាំចេញគេហទំព័រ (Site Export) {#site-export}

ໜ້າ **Site Export** ຂອງ admin ຈະຊ່ວຍໃຫ້ຜູ້ບໍລິຫານເຄືອຂ່າຍສາມາດເກັບຮັກສາເວັບໄຊທ໌ດຽວ, ຫຼື ເຄືອຂ່າຍທັງໝົດ, ໃສ່ໃນຮູບແບບ archive ທີ່ສາມາດດາວໂຫຼດໄດ້ ເພື່ອເຮັດການຍົກຍ້າຍ (migration), ສຳຮອງຂໍ້ມູນ (backup), ຫຼື ການມອບໝາຍວຽກ.

## ການនាំចេញເວັບໄຊທ໌ດຽວ {#exporting-one-site}

ໄປທີ່ **Ultimate Multisite > Site Export** ແລ້ວເລືອກ **Generate new Site Export**. ເລືອກ subsite ທີ່ເຈົ້າຢາກສົ່ງອອກ, ແລ້ວເລືອກວ່າ archive ນັ້ນຄວນມີຮູບພາບ (uploads), plugin, ແລະ theme ບໍ່.

ເມື່ອການនាំចេញສຳເລັດ, ໃຫ້ດາວໂຫຼດ ZIP ຈາກລາຍການ **Existing Exports**. ZIP ທີ່ໄດ້ມາເຫຼົ່ານີ້ຈະມີ `index.php` ທີ່ສາມາດ booting ໄດ້ດ້ວຍຕົນເອງ ແລະ `readme.txt`, ເຊິ່ງເຮັດໃຫ້ archive ນັ້ນສາມາດອັບໂຫຼດໄປໃສ່ host ໃໝ່ ແລະ ເລີ່ມໃຊ້ງານໄດ້ທັນທີໂດຍບໍ່ຕ້ອງຕິດຕັ້ງ plugin importer ແຍກໆ ກ່ອນ.

## ການនាំចេញເຄືອຂ່າຍທັງໝົດ {#exporting-the-whole-network}

ໃຊ້ **Network Export** ໃນໜ້າ Site Export ເມື່ອເຈົ້າຕ້ອງການ archiveດຽວທີ່ບັນຈຸ subsites ທັງໝົດໃນເຄືອຂ່າຍ. ອັນນີ້ມີປະໂຫຍດຫຼາຍກ່ອນການຍົກຍ້າຍ host, ການຝຶກຊ້ອມສຸກເສີນ (disaster-recovery drills), ຫຼື ການສ້າງເວັບໄຊທ໌ໃໝ່ແບບ staging ທີ່ subsites ທັງໝົດຕ້ອງໄປນຳກັນ.

ເນື່ອງຈາກ network export ອາດຈະໃຫຍ່ກວ່າການ export ເພື່ອ siteດຽວຫຼາຍ, ໃຫ້ເຮັດມັນໃນຊ່ວງເວລາທີ່ມີການເຂົ້າເຖິງໜ້ອຍ ແລະ ກວດສອບວ່າ target storage ມີພື້ນທີ່ຫວ່າງພຽງພໍສຳລັບການອັບໂຫຼດ plugin, theme, ແລະ file ZIP ທີ່ສ້າງຂຶ້ນ.

### Network Import Bundles {#network-import-bundles}

ເລີ່ມແຕ່ Ultimate Multisite 2.12.0, Site Exporter ສາມາດສ້າງ **network import bundles** — archive ແບບສະເພາະທີ່ອອກແບບມາເພື່ອການຟື້ນຟູເວັບໄຊທ໌ໃນເຄືອຂ່າຍທັງໝົດຢ່າງມີປະສິດທິພາບ. Network import bundle ໜຶ່ງຈະມີ file ແລະ metadata ທັງໝົດທີ່ຈຳເປັນ ເພື່ອຟື້ນຟູ subsites ຫຼາຍໆ ແລ້ວໄປໃສ່ການຕິດຕັ້ງເຄືອຂ່າຍໃໝ່.

#### ການສ້າງ Network Import Bundle {#generating-a-network-import-bundle}

1. ໄປທີ່ **Ultimate Multisite > Site Export**
2. ចុចលើ **Generate new Network Export** (បង្កើតការនាំចេញបណ្តាញថ្មី)
3. ជ្រើសរើស **Network Import Bundle** ជាប្រភេទនៃការនាំចេញ
4. ជ្រើសរើសថាតើត្រូវបញ្ចូលឯកសារបង្ហោះ (uploads), plugin, និង theme ឬយ៉ាងណា
5. ចុចលើ **Generate** (បង្កើត)
6. ទាញយក ZIP bundle ពីបញ្ជី **Existing Exports** (ការនាំចេញដែលមានស្រាប់)

#### ការស្តារឡើងវិញពី Network Import Bundle {#restoring-from-a-network-import-bundle}

ដើម្បីស្តារគេហទំព័រពី network import bundle៖

1. ដំឡើង Ultimate Multisite នៅលើ host ដែលអ្នកចង់ដាក់
2. បញ្ចប់ wizard នៃការរៀបចំ multisite
3. ទៅកាន់ **Ultimate Multisite > Site Export** នៅលើ network ថ្មី
4. ចុចលើ **Import Network Bundle** (នាំចូល Network Bundle)
5. អាប់ឡូតឯកសារ ZIP network import bundle
6. អនុវត្តតាមការណែនាំនៅលើអេក្រង់ដើម្បីនាំចូល
7. ដំណើរការនាំចូលនឹងស្តារគេហទំព័រទាំងអស់, เนื้อหาរបស់វា, និងការកំណត់រចនាសម្ព័ន្ធរបស់វា

Network import bundles រក្សាទុក៖
- เนื้อរកូដគេហទំព័រ (posts, pages, custom post types)
- ការកំណត់រចនាសម្ព័ន្ធ និងជម្រើសរបស់គេហទំព័រ
- តួនាទីអ្នកប្រើប្រាស់ និងការអនុញ្ញាត (User roles and permissions)
- Plugins និង themes (ប្រសិនបើត្រូវបានបញ្ចូលក្នុង bundle)
- ការបង្ហោះមេឌៀ (Media uploads) (ប្រសិនបើត្រូវបានបញ្ចូលក្នុង bundle)
- តុ database និងទិន្នន័យដែលបានកំណត់តាមបណ្តុំ

## ការដំឡើង ZIP export ដែលដំណើរការដោយខ្លួនឯង (self-booting) {#installing-a-self-booting-export-zip}

ដើម្បីស្តារ ZIP ដែលដំណើរការដោយខ្លួនឯងនៅលើ host ថ្មី៖

1. អាប់ឡូតខ្លឹមសារ ZIP ដែលបាននាំចេញទៅកាន់ web root គោលដៅ
2. បើក `index.php` ដែលបានអាប់ឡូតនៅក្នុង browser
3. អនុវត្តតាមការណែនាំអ្នកដំឡើងនៅលើអេក្រង់ពី package export ដែលបានបញ្ចូល។
4. មើលឯកសារ `readme.txt` ដែលបានបញ្ចូលសម្រាប់ចំណាំជាក់លាក់នៃការនាំចេញ មុននឹងលុបឯកសារបណ្តោះអាសន្ន។

សម្រាប់ការដំឡើង និងព័ត៌មានលម្អិតនៃការនាំចូលជាក់លាក់នៃ addon សូមមើល [Site Exporter addon documentation](/addons/site-exporter)។

សម្រាប់ឧបករណ៍ single-site ដែលបានបន្ថែមនៅក្នុង Ultimate Multisite 2.9.0 សូមមើល [Export & Import](/user-guide/administration/export-import)។
