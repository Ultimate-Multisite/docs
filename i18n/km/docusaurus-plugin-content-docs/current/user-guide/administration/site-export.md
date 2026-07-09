---
title: ការនាំចេញគេហទំព័រ
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# ការនាំចេញគេហទំព័រ (Site Export) {#site-export}

ໜ້າຕອນ **Site Export** ຂອງ admin ຈະຊ່ວຍໃຫ້អ្នកគ្រប់គ្រងເຄືອຂ່າຍສາມາດវេចຟລ໌គេហທຳໜຶ່ງ ຫຼື ເຄືອຂ່າຍທັງໝົດ ໃຫ້ເປັນໄຟລ໌ archive ທີ່ສາມາດດາວໂຫຼດໄດ້ ເພື່ອການຍົກຍ້າຍ (migration), ສຳຮອງຂໍ້ມູນ (backup) ຫຼື ການມອບໝາຍວຽກ.

## ການនាំចេញគេហທຳໜຶ່ງ (Exporting one site) {#exporting-one-site}

ໄປທີ່ **Ultimate Multisite > Site Export** ແລະ ເລືອກ **Generate new Site Export**. ໃຫ້ເລືອກ subsite (ເວັບໄຊ່ຍ່ອຍ) ທີ່ທ່ານຕ້ອງການສົ່ງອອກ, ແລ້ວເລືອກວ່າ archive ນັ້ນຄວນມີການລວບລວມ file uploads, plugins, ແລະ themes ຫຼື ບໍ່.

ເມື່ອການនាំចេញສຳເລັດ, ໃຫ້ດາວໂຫຼດ ZIP ຈາກລາຍການ **Existing Exports**. ไฟล์ ZIP ທີ່ສົ່ງອອກໃນຕອນນີ້ຈະປະກອບມີ `index.php` ທີ່ສາມາດເປີດໃຊ້ງານໄດ້ດ້ວຍຕົນເອງ (self-booting) ແລະ `readme.txt`, ເພື່ອໃຫ້ archive ນັ້ນສາມາດອັບໂຫຼດໄປໃສ່ host ໃໝ່ ແລະ ເລີ່ມຕົ້ນການເຮັດວຽກໄດ້ໂດຍບໍ່ຕ້ອງຕິດຕັ້ງ plugin importer ແຍກຕ່າງຫາກກ່ອນ.

## ການនាំចេញເຄືອຂ່າຍທັງໝົດ (Exporting the whole network) {#exporting-the-whole-network}

ໃຊ້ **Network Export** ໃນໜ້າ Site Export ເມື່ອທ່ານຕ້ອງການ archive ດຽວທີ່ບັນຈຸ subsites ທັງໝົດໃນເຄືອຂ່າຍ. ສິ່ງນີ້ມີປະໂຫຍດຫຼາຍກ່ອນການຍົກຍ້າຍ host, ການຝຶກຊ້ອມສຸກເສີນ (disaster-recovery drills), ຫຼື ການສ້າງເວທີໃໝ່ (staging rebuilds) ບ່ອນທີ່ subsites ແຕ່ລະອັນຕ້ອງໄປຮ່ວມກັນ.

ເນື່ອງຈາກການ export ເຄືອຂ່າຍສາມາດໃຫຍ່ກວ່າການ export site ດຽວໄດ້ຫຼາຍ, ຄວນເຮັດໃນຊ່ວງເວລາທີ່ມີການເຂົ້າເຖິງໜ້ອຍ ແລະ ກວດສອບໃຫ້ແນ່ໃຈວ່າ target storage ມີພື້ນທີ່ຫວ່າງພຽງພໍສຳລັບການ upload, plugins, themes, ແລະ file ZIP ທີ່ສ້າງຂຶ້ນ.

### Network Import Bundles (ຊຸດການນຳເຂົ້າເຄືອຂ່າຍ) {#network-import-bundles}

ເລີ່ມຕົ້ນຕັ້ງແຕ່ Ultimate Multisite 2.12.0, Site Exporter ສາມາດສ້າງ **network import bundles** — ເປັນ archive ແບບພິເສດທີ່ອອກແບບມາເພື່ອການກູ້ຄືນ subsites ທົ່ວເຄືອຂ່າຍຢ່າງສະດວກ. Network import bundle ໜຶ່ງຈະມີໄຟລ໌ ແລະ metadata ທີ່ຈຳເປັນທັງໝົດເພື່ອສ້າງ Subsites ຫຼາຍແຫ່ງກັບການຕິດຕັ້ງເຄືອຂ່າຍໃໝ່.

#### ການສ້າງ Network Import Bundle (Generating a Network Import Bundle) {#generating-a-network-import-bundle}

១. ទៅកាន់ **Ultimate Multisite > Site Export**
២. ចុចលើ **Generate new Network Export**
៣. ជ្រើសរើស **Network Import Bundle** ជាប្រភេទនៃការនាំចូល (export type)
៤. ជ្រើសរើសថាតើត្រូវបញ្ចូលការបង្ហោះឯកសារ (uploads), plugin, និង theme ឬយ៉ាងណា
៥. ចុចលើ **Generate**
៦. ទាញយក file ZIP bundle ពីបញ្ជី **Existing Exports**

#### ការស្តារឡើងវិញពី Network Import Bundle {#restoring-from-a-network-import-bundle}

ដើម្បីស្តារគេហទំព័រពី network import bundle៖

១. ដំឡើង Ultimate Multisite នៅលើ host ដែលអ្នកចង់ដាក់វា
២. បញ្ចប់ការណែនាំដំឡើង multisite wizard
៣. ទៅកាន់ **Ultimate Multisite > Site Export** នៅលើ network ថ្មី
៤. ចុចលើ **Import Network Bundle**
៥. អាប់ឡូត file ZIP network import bundle
៦. អនុវត្តតាមការណែនាំនៅលើអេក្រង់ដើម្បីនាំចូល
៧. ដំណើរការនាំចូលនឹងស្តារគេហទំព័រទាំងអស់, เนื้อหา (content) និងការកំណត់រចនាសម្ព័ន្ធ (configurations) របស់វាឡើងវិញ

Network import bundles រក្សាទុកនូវ៖
- เนื้อរកាលនៃគេហទំព័រ (posts, pages, custom post types)
- ការកំណត់រចនាសម្ព័ន្ធ និងជម្រើសនៃគេហទំព័រ (Site settings and options)
- តួនាទីអ្នកប្រើប្រាស់ និងការអនុញ្ញាត (User roles and permissions)
- plugin និង theme (ប្រសិនបើត្រូវបានបញ្ចូលក្នុង bundle)
- ការបង្ហោះមេឌៀ (Media uploads) (ប្រសិនបើត្រូវបានបញ្ចូលក្នុង bundle)
- តុ database និងទិន្នន័យដែលបានកំណត់ជាពិសេស

## ការដំឡើង ZIP export ដែលដំណើរការដោយខ្លួនឯង (self-booting) {#installing-a-self-booting-export-zip}

ដើម្បីស្តារ ZIP ដែលដំណើរការដោយខ្លួនឯងនៅលើ host ថ្មី៖

១. អាប់ឡូតខ្លឹមសារ ZIP ដែលបាន export ទៅកាន់ web root គោលដៅ
២. បើក file `index.php` ដែលបានអាប់ឡូតនៅក្នុង browser
៣. អនុវត្តតាមការណែនាំអ្នកដំឡើងនៅលើអេក្រង់ពី package export ដែលត្រូវបានបញ្ចូល។
៤.ពិនិត្យមើល `readme.txt` ដែលត្រូវបានបញ្ចូលសម្រាប់ចំណាំជាក់លាក់នៃការ export មុនពេលលុប file យូរ (temporary files)។

សម្រាប់ការដំឡើង និងព័ត៌មានលម្អិតនៃការនាំចូលជាក់លាក់នៃ addon សូមមើល [Site Exporter addon documentation](/addons/site-exporter)។

សម្រាប់ឧបករណ៍ single-site ដែលបានបន្ថែមនៅក្នុង Ultimate Multisite 2.9.0 សូមមើល [Export & Import](/user-guide/administration/export-import)។
