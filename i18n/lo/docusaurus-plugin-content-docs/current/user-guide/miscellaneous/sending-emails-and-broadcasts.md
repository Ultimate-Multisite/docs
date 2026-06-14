---
title: ການສົ່ງອີເມວ ແລະ ການផ្សាយພູມ
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ການສົ່ງອີເມວ ແລະ ການផ្សព្វផ្សាយ (v2)

_**ចំណាំສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite version 2.x.**_

Ultimate Multisite ມີຟັງຊັນໜຶ່ງທີ່ຊ່ວຍໃຫ້ທ່ານສາມາດຕິດຕໍ່ກັບລູກຄ້າຂອງເຈົ້າໄດ້ໂດຍການສົ່ງອີເມວໄປຫາຜູ້ໃຊ້ສະເພາະ ຫຼື ກຸ່ມຜູ້ໃຊ້, ເພື່ອສົ່ງຂໍ້ຄວາມແຈ້ງເຕືອນໃນ dashboard ຂອງພວກເຂົາເພື່ອផ្សព្វផ្សាយຂ່າວສານ.

## ເພີ່ມຂໍ້ຄວາມແຈ້ງເຕືອນໃຫ້ກັບ dashboard ຂອງລູກຄ້າດ້ວຍ Broadcasts

ໂດຍການໃຊ້ຟັງຊັນ broadcast feature ຂອງ Ultimate Multisite, ທ່ານສາມາດເພີ່ມ **admin notices** (ຂໍ້ຄວາມແຈ້ງເຕືອນຜູ້ເບິ່ງແຍງ) ໃສ່ໃນ subsite admin dashboard ຂອງຜູ້ໃຊ້.

ສິ່ງນີ້ມີປະໂຫຍດຫຼາຍ ເມື່ອທ່ານຕ້ອງການເຮັດການປະກາດຕ່າງໆ ເຊັ່ນ: ການບໍາລຸງຮັກສາລະບົບ (system maintenance), ການສະເໜີຜະລິດຕະພັນ ຫຼື ການບໍລິການໃໝ່ໃຫ້ກັບຜູ້ໃຊ້ທີ່ມີຢູ່ແລ້ວ. ນີ້ຄືວິທີທີ່ຂໍ້ຄວາມແຈ້ງເຕືອນຜູ້ເບິ່ງແຍງຈະປາກົດຢູ່ໃນ dashboard ຂອງຜູ້ໃຊ້.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

ເພື່ອເລີ່ມການສ້າງ admin notice, ໃຫ້ໄປທີ່ network admin dashboard ຂອງທ່ານ ແລະ ພາຍໃຕ້ເມນູ **Ultimate Multisite**, ທ່ານຈະພົບກັບຕົວເລືອກ **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

ທ່ານຍັງສາມາດແກ້ໄຂ broadcast ທີ່ມີຢູ່ແລ້ວໄດ້:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

ຈາກໜ້າພ这, ກົດປຸ່ມ **Add Broadcast** (ເພີ່ມ broadcast) ຢູ່ເທິງສຸດ.

ສິ່ງນີ້ຈະເປີດ cửa sổ modal ຊື່ Add broadcast ຂຶ້ນມາ ເຊິ່ງທ່ານສາມາດເລືອກໄດ້ວ່າຕ້ອງການສົ່ງ broadcast ແບບໃດ.

ໃຫ້ເລືອກ **Message** (ຂໍ້ຄວາມ) ແລ້ວກົດປຸ່ມ **Next Step** (ຂັ້ນຕອນຕໍ່ໄປ).

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

ໜ້າພທີ່ຈະຕາມມາຈະຖາມທ່ານວ່າຕ້ອງການເລືອກ **Target customer** (ລູກຄ້າເປົ້າໝາຍ) ຫຼື **Target product** (ຜະລິດຕະພັນເປົ້າໝາຍ). ເອົາໃຈໃສ່ວ່າທ່ານສາມາດເລືອກໄດ້ຫຼາຍກວ່າໜຶ່ງຜູ້ໃຊ້ ຫຼື ຫຼາຍກວ່າໜຶ່ງຜະລິດຕະພັນ.

ເພື່ອຊອກຫາບັນຊີຜູ້ໃຊ້ ຫຼື ຜະລິດຕະພັນໃດໜຶ່ງ, ເຈົ້າຕ້ອງເລີ່ມພິມຄຳສັບທີ່ຕ້ອງການເຂົ້າໄປໃນຊ່ອງຂໍ້ຄວາມນັ້ນ.

ຢູ່ໃຕ້ຊ່ອງ **Message type** (ປະເພດຂໍ້ຄວາມ), ເຈົ້າສາມາດເລືອກສີຂອງການແຈ້ງເຕືອນໄດ້. ສິ່ງນີ້ຈະເນັ້ນໜັກເຖິງຄວາມຮີບດ່ວນຂອງຂໍ້ຄວາມຂອງເຈົ້າ.

ຈາກນັ້ນ, ເຈົ້າສາມາດກົດ **Next Step** (ຂັ້ນຕອນຕໍ່ໄປ).

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

ໜ້າຕ່າງຕໍ່ໄປແມ່ນບ່ອນທີ່ເຈົ້າສາມາດເລີ່ມສ້າງຂໍ້ຄວາມຂອງເຈົ້າໄດ້ໂດຍການໃສ່ຫົວຂໍ້ (subject) ແລະເນື້ອໃນ/ຂໍ້ຄວາມທີ່ເຈົ້າຕ້ອງການສົ່ງຫາຜູ້ໃຊ້.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

ຫຼັງຈາກສ້າງຂໍ້ຄວາມແລ້ວ, ເຈົ້າສາມາດກົດປຸ່ມ **Send** (ສົ່ງ) ໄດ້ເລີຍ.

ແລະ ກໍພໍເທົ່ານັ້ນ. ແຈ້ງເຕືອນຂອງ অ্যাডມິນຄວນຈະສະແດງໃນ dashboard ຂອງຜູ້ໃຊ້ທັນທີ.

## ສົ່ງອີເມວຫາລູກຄ້າຂອງທ່ານ

ໂດຍໃຊ້ຄຸນສົມບັດ broadcast ຂອງ Ultimate Multisite, ເຈົ້າສາມາດສົ່ງອີເມວໄປຫາຜູ້ໃຊ້ຂອງເຈົ້າໄດ້. ເຈົ້າມີທາງເລືອກທີ່ຈະສົ່ງອີເມວໃຫ້ແຕ່ຜູ້ໃຊ້ສະເພາະ ຫຼື ເປົ້າໝາຍກຸ່ມຜູ້ໃຊ້ສະເພາະໂດຍອີງຕາມຜະລິດຕະພັນ ຫຼື ແຜນການທີ່ພວກເຂົາສະໝັກຢູ່.

ເພື່ອເລີ່ມການ broadcast ອີເມວ, ໄປທີ່ network admin dashboard ຂອງເຈົ້າ ແລະ ໃຕ້ເມນູ Ultimate Multisite, ເຈົ້າຈະພົບກັບຕົວເລືອກ Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

ຈາກໜ້າ này, ກົດປຸ່ມ **Add broadcast** (ເພີ່ມການ broadcast) ຢູ່ເທິງສຸດ.

ສິ່ງນີ້ຈະເປີດ modal window Add broadcast ທີ່ເຈົ້າສາມາດເລືອກໄດ້ວ່າຕ້ອງການສົ່ງ broadcast ແບບໃດ. ເລືອກ **Email** ແລ້ວຄລິກປຸ່ມ **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

ໜ້າຕ່າງຕໍ່ໄປຈະຖາມເຈົ້າວ່າຕ້ອງການເລືອກ **Target customer** (ລູກຄ້າເປົ້າໝາຍ) ຫຼື **Target product** (ຜະລິດຕະພັນເປົ້າໝາຍ). ເຈົ້າຄວນສັງເກດວ່າເຈົ້າສາມາດເລືອກໄດ້ຫຼາຍກວ່າໜຶ່ງຜູ້ໃຊ້ ຫຼື ຫຼາຍກວ່າໜຶ່ງຜະລິດຕະພັນ.

ដើម្បីស្វែងរកគណនីអ្នកប្រើប្រាស់ ឬផលិតផល អ្នកត្រូវចាប់ផ្តើមវាយពាក្យគន្លឹះនៅក្នុងវាលនោះ។

នៅពេលដែលអ្នកបានជ្រើសរើសទស្សនិកជនគោលដៅរបស់អ្នកហើយ អ្នកអាចចុច **Next Step** បាន។

![ការជ្រើសរើសអតិថិជនគោលដៅ និងផលិតផលគោលដៅសម្រាប់ការបញ្ជូនអ៊ីមែល](/img/admin/broadcast-email-targets.png)

បង្អួចបន្ទាប់គឺជាកន្លែងដែលអ្នកអាចចាប់ផ្តើមសរសេរអ៊ីមែលរបស់អ្នក ដោយបញ្ចូលប្រធានបទ (subject) និងខ្លឹមសារ/សារដែលអ្នកចង់ផ្ញើទៅកាន់អ្នកប្រើប្រាស់។

<!-- Screenshot unavailable: កម្មវិធីនិពន្ធប្រធានបទ និងខ្លឹមសារសម្រាប់ការបញ្ជូនអ៊ីមែលនៅជំហានបង្កើត -->

បន្ទាប់ពីបង្កើតសាររបស់អ្នករួច អ្នកអាចចុចប៊ូតុង **Send** បាន។

ហើយនេះគឺជាភាពងាយស្រួលនៃការផ្ញើអ៊ីមែលទៅកាន់អ្នកប្រើប្រាស់របស់អ្នកដោយប្រើមុខងារ broadcast។

## អ៊ីមែលប្រព័ន្ធ (System emails)

អ៊ីមែលប្រព័ន្ធនៅក្នុង Ultimate Multisite គឺជា **ការជូនដំណឹងស្វ័យប្រវត្តិ** ដែលត្រូវបានបញ្ជូនដោយប្រព័ន្ធបន្ទាប់ពីមានសកម្មភាពជាក់លាក់ណាមួយដូចជា ការចុះឈ្មោះ, ការបង់ប្រាក់, ការកំណត់ផែនទីដែន (domain mapping) ជាដើម។ អ៊ីមែលទាំងនេះអាចត្រូវបានកែសម្រួល ឬផ្លាស់ប្តូរបានពីការកំណត់រចនាសម្ព័ន្ធរបស់ Ultimate Multisite។ វាមានមុខងារមួយដែលអនុញ្ញាតឱ្យអ្នកកំណត់ឡើងវិញ និងនាំចូលការកំណត់រចនាសម្ព័ន្ធដែលមានស្រាប់ពីការដំឡើង Ultimate Multisite ផ្សេងទៀត។

### ការកំណត់ឡើងវិញ និងការនាំចូល (Resetting & Importing)

កំណែថ្មីនៃ Ultimate Multisite ក៏ដូចជា add-ons អាចនឹងចុះឈ្មោះអ៊ីមែលថ្មីម្តងម្កាលផងដែរ។

ដើម្បីការពារជម្លោះ និងបញ្ហាផ្សេងៗ យើង **នឹងមិនបន្ថែម قالبអ៊ីមែលថ្មីទាំងនេះជា System Emails នៅលើការដំឡើងរបស់អ្នកដោយស្វ័យប្រវត្តិទេ** លុះត្រាតែវាមានសារៈសំខាន់សម្រាប់ការដំណើរការត្រឹមត្រូវនៃមុខងារជាក់លាក់ណាមួយ។

ទោះយ៉ាងណាក៏ដោយ អ្នកគ្រប់គ្រងជាន់ខ្ពស់ (super admins) និងភ្នាក់ងារ (agents) អាចនាំចូលអ៊ីមែលដែលបានចុះឈ្មោះថ្មីនេះតាមរយៈឧបករណ៍ importer។ ដំណើរការនេះនឹងបង្កើត system email ថ្មីដែលមានខ្លឹមសារ និងការកំណត់រចនាសម្ព័ន្ធនៃ قالبអ៊ីមែលថ្មី ដែលអនុញ្ញាតឱ្យ super admin ធ្វើការកែប្រែណាមួយដែលពួកគេចង់ ឬរក្សាទុកវាដូចដើម។

#### របៀបនាំចូល system emails

ໄປທີ່ໜ້າການຕັ້ງຄ່າ Ultimate Multisite Settings ແລ້ວເຂົ້າໄປທີ່ແຖບ **Emails** (ອີເມວ).

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

ຈາກນັ້ນ, ຢູ່ເທິງແທັບ sidebar ໃຫ້ກົດປຸ່ມ **Customize System Emails** (ປັບແຕ່ງອີເມວລະບົບ).

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

ໃນໜ້າ System Emails, ເຈົ້າຈະເຫັນປຸ່ມການກະທຳ **Reset & Import** (ລ້າງ ແລະ ນຳເຂົ້າ) ຢູ່ເທິງສຸດ. ການກົດປຸ່ມນັ້ນຄວນຈະເປີດ cửa sổ modal ສຳລັບການນຳເຂົ້າ ແລະ ລ້າງຂໍ້ມູນ.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

ຈາກນັ້ນ, ເຈົ້າສາມາດបើកຕົວເລືອກ Import Emails (ນຳເຂົ້າອີເມວ) ເພື່ອເບິ່ງວ່າອີເມວລະບົບໃດທີ່ສາມາດນຳເຂົ້າໄດ້.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### ການລ້າງ System Emails

ໃນບາງຄັ້ງ, ເຈົ້າອາດຈະຮູ້ສຶກວ່າການປ່ຽນແປງທີ່ເຈົ້າເຮັດກັບ template ອີເມວໃດໜຶ່ງບໍ່ໄດ້ຜົນອີກ ແລະ ເຈົ້າຢາກທີ່ຈະກັບໄປໃຊ້ **default state** (ສະພາບເດີມ) ຂອງມັນ.

ໃນກໍລະນີແບບນີ້, ເຈົ້າສາມາດເລືອກໄດ້ສອງທາງ: ເຈົ້າສາມາດລຶບ system email ອອກແລ້ວນຳເຂົ້າໃສ່ຄືນ (ໂດຍໃຊ້ຄຳແນະນຳຂ້າງເທິງ) - ແຕ່ວິທີນີ້ຈະເຮັດໃຫ້ຂໍ້ມູນການສົ່ງອີເມວ ແລະ ສິ່ງອື່ນໆ ຖືກລຶບໝົດ, ເຊິ່ງເປັນວິທີທີ່ບໍ່ໄດ້ຮັບການພິຈາລະນາຫຼາຍທີ່ສຸດ.

ຫຼື ເຈົ້າສາມາດໃຊ້ **Reset & Import tool** (ເຄື່ອງມືລ້າງ ແລະ ນຳເຂົ້າ) ເພື່ອລ້າງ template ອີເມວ đó ແທນໄດ້.

ເພື່ອລ້າງ template ອີເມວ, ເຈົ້າສາມາດເຮັດຕາມຂັ້ນຕອນຂ້າງເທິງໄປຈົນຮອດ Reset & Import tool, ຈາກນັ້ນໃຫ້ເປີດຕົວເລືອກ **Reset** (ລ້າງ) ແລະ ເລືອກອີເມວທີ່ເຈົ້າຕ້ອງການທີ່ຈະກັບໄປໃຊ້ເນື້ອໃນສະພາບເດີມຂອງມັນ.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
