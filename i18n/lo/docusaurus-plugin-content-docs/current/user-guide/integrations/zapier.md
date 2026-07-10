---
title: ການເຊື່ອມຕໍ່ Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# ການເຊື່ອມຕໍ່ Ultimate Multisite ກັບ Zapier {#integrating-ultimate-multisite-with-zapier}

ໃນບົດຄວາມໜຶ່ງ, ພວກເຮົາໄດ້ເວົ້າເຖິງ [Webhooks](webhooks.md) ແລະ ວິທີທີ່ມັນສາມາດນຳໃຊ້ເພື່ອເຊື່ອມຕໍ່ກັບແອັບພລິເຄຊັນຂອງພາກສ່ວນທີສາມ.

ການໃຊ້ webhooks ອາດຈະມີຄວາມຫຍຸ້ງຍາກເລັກນ້ອຍ ເພາະວ່າຕ້ອງມີຄວາມຮູ້ດ້ານການຂຽນໂປຣແກຣມ ແລະ ການດັກຂໍ້ມູນ (payloads) ທີ່ຊັບຊ້ອນ. ການໃຊ້ **Zapier** ແມ່ນວິທີໜຶ່ງທີ່ຈະຊ່ວຍໃຫ້ທ່ານຫຼີກລ່ຽງບັນຫານີ້ໄດ້.

Zapier ມີການເຊື່ອມຕໍ່ກັບຫຼາຍກວ່າ 5000+ ແອັບ, ເຊິ່ງເຮັດໃຫ້ການສື່ສານລະຫວ່າງແອັບຕ່າງໆງ່າຍຂຶ້ນ.

ທ່ານສາມາດສ້າງ **Triggers** (ຕົວກະຕຸ້ນ) ເພື່ອໃຫ້ມັນເປີດໃຊ້ເມື່ອເກີດເຫດຕ່າງໆໃນເຄືອຂ່າຍຂອງທ່ານ (ເຊັ່ນ: ມີບັນຊີໃໝ່ຖືກສ້າງຂຶ້ນ ແລະ ກະຕຸ້ນເຫດການ `account_create`). ຫຼື ສາມາດສ້າງ **Actions** (ການກະທຳ) ໃນເຄືອຂ່າຍຂອງທ່ານເພື່ອຕອບສະໜອງຕໍ່ເຫດການພາຍນອກ (ເຊັ່ນ: ສ້າງສະມາຊິກໃໝ່ໃນເຄືອຂ່າຍ Ultimate Multisite ຂອງທ່ານ).

ເປັນໄປໄດ້ເພາະວ່າ **Ultimate Multisite Zapier's triggers** ແລະ actions ແມ່ນໃຊ້ພະລັງຈາກ [REST API](https://developer.ultimatemultisite.com/api/docs/).

## ວິທີເລີ່ມຕົ້ນ {#how-to-start}

ກ່ອນອື່ນ, ຊອກຫາ Ultimate Multisite ໃນລາຍການແອັບຂອງ Zapier. ຫຼື ອີກທາງໜຶ່ງ, ທ່ານສາມາດກົດທີ່ [ລິ້ງນີ້](https://zapier.com/apps/wp-ultimo/integrations).

ໄປທີ່ dashboard ຂອງທ່ານ ແລະ ກົດປຸ່ມ **+** **Create Zap** (ສ້າງ Zap) ຢູ່ແຖບດ້ານຊ້າຍເພື່ອຕັ້ງຄ່າ Zap ໃໝ່.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

ທ່ານຈະຖືກນຳໄປໜ້າສ້າງ Zap.

ໃນຊ່ອງຄົ້ນຫາໃຫ້ພິມ "wp ultimo". ກົດເລືອກຕົວເລືອກ **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

ຫຼັງຈາກທີ່ທ່ານເລືອກແອັບຂອງພວກເຮົາແລ້ວ, ໃຫ້ເລືອກເຫດການທີ່ມີຢູ່: **New Ultimate Multisite Event** (ເຫດການ Ultimate Multisite ໃໝ່).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

ຕໍ່ໄປ, ພວກເຮົາຕ້ອງເຮັດໃຫ້ Zapier ສາມາດເຂົ້າເຖິງ **ເຄືອຂ່າຍຂອງທ່ານ** ໄດ້. ການກົດທີ່ **Sign in** (ເຂົ້າສູ່ລະບົບ) ຈະເປີດໜ້າໃໝ່ທີ່ຮຽກຮ້ອງໃຫ້ມີ **API credentials** (ຂໍ້ມູນການເຂົ້າເຖິງ API).

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

ໄປที่ network admin panel ຂອງເຈົ້າ ແລ້ວໄປທີ່ **Ultimate Multisite > Settings** > **API & Webhooks** ແລະ ຊອກຫາສ່ວນ API Settings.

ເລືອກຕົວເລືອກ **Enable API** ເພາະມັນຈຳເປັນສຳລັບການເຊື່ອມຕໍ່ນີ້ຈະເຮັດວຽກໄດ້.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

ໃຊ້ໄອຄອນ **Copy to Clipboard** ຢູ່ຊ່ອງ API Key ແລະ API Secret ແລ້ວໄປວາງຄ່າເຫຼົ່ານັ້ນໃນໜ້າ integration.

ໃນຊ່ອງ URL, ໃສ່ full URL ຂອງ network ຂອງເຈົ້າ, ລວມທັງ protocol (HTTP ຫຼື HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

ກົດປຸ່ມ **Yes, Continue** ເພື່ອໄປຂັ້ນຕອນຕໍ່ໄປ. ຖ້າທຸກຢ່າງເຮັດໄດ້ດີ, ເຈົ້າຄວນຈະໄດ້ຮັບການຕ້ອນຮັບຈາກບັນຊີໃໝ່ທີ່ເຊື່ອມຕໍ່ແລ້ວ! ກົດເພື່ອ **Continue** ເພື່ອສ້າງ trigger ໃໝ່.

## ວິທີສ້າງ Trigger ໃໝ່ {#how-to-create-a-new-trigger}

ເມື່ອບັນຊີຂອງເຈົ້າເຊື່ອມຕໍ່ແລ້ວ, ເຈົ້າຈະເຫັນ events ທີ່ມີໃຫ້ເລືອກໄດ້. ໃນບົດຮຽນນີ້, ເຊິ່ງເຮົາຈະເລືອກ event ຊື່ວ່າ **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

ເມື່ອເລືອກ event ແລ້ວ ແລະ ກົດ **continue**, ຈະມີ **test step** (ຂັ້ນຕອນທົດສອບ) ປາກົດຂຶ້ນມາ.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

ໃນຂັ້ນຕອນນີ້, Zapier ຈະກວດສອບວ່າ Zap ຂອງເຈົ້າສາມາດ **ດຶງຂໍ້ມູນ (fetch) payload ສະເພາະສຳລັບ event ນັ້ນໄດ້ບໍ່**. ສຳລັບ events ຊະນິດດຽວກັນໃນອະນາຄົດ, ຂໍ້ມູນທີ່ມີໂຄງສ້າງແບບນີ້ຈະຖືກສົ່ງໄປ.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

ໃນບົດຮຽນຂອງພວກເຮົາ ການທົດສອບໄດ້ຖືກ **ເຮັດສໍາເລັດຢ່າງສຳເລັດ** ແລະ ໄດ້ສົ່ງຂໍ້ມູນຕົວຢ່າງຂອງ payload ກັບມາ. ຂໍ້ມູນຕົວຢ່າງນີ້ຈະເປັນປະໂຫຍດແກ່ພວກເຮົາໃນການຊີ້ແຈງຂັ້ນຕອນໃນການສ້າງ actions (ການກະທຳ). Trigger ຂອງທ່ານໄດ້ຖືກສ້າງຂຶ້ນແລ້ວ ແລະ ພ້ອມທີ່ຈະເຊື່ອມຕໍ່ກັບ application ອື່ນໆ.

## ວິທີການສ້າງ Actions {#how-to-create-actions}

Actions ແມ່ນໃຊ້ຂໍ້ມູນຈາກ trigger ອື່ນໆ ເພື່ອສ້າງ entries ໃໝ່ໃນ network ຂອງເຈົ້າ.

ໃນສ່ວນ **ການສ້າງ action step** ເຈົ້າຈະເລືອກ Ultimate Multisite **Beta** ແລະ ຕົວເລືອກ **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ໃນຂັ້ນຕອນຕໍ່ໄປ ເຈົ້າຈະສ້າງການຢັ້ງຢືນ (authentication) ຂອງເຈົ້າ, ຄືກັບທີ່ພວກເຮົາໄດ້ເຮັດໃນ **How to start**, ຫຼື ເລືອກ authentication ທີ່ມີຢູ່ແລ້ວ. ໃນບົດຮຽນນີ້ ພວກເຮົາຈະເລືອກ authentication ທີ່ເຄີຍສ້າງໄວ້ກ່ອນໜ້ານີ້.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ການຕັ້ງຄ່າ Action {#setting-up-the-action}

ນີ້ແມ່ນ **ຂັ້ນຕອນຫຼັກຂອງ action** ແລະ ອັນນີ້ມີຄວາມແຕກຕ່າງເລັກນ້ອຍ. ຂໍ້ມູນທໍາອິດທີ່ເຈົ້າຈະເລືອກແມ່ນ **Item**. Item ແມ່ນ **ແບບຈຳລອງຂໍ້ມູນ (information model)** ຂອງ network ເຊັ່ນ: **Customers, Payments, Sites, Emails** ແລະ ອື່ນໆ.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

ເມື່ອເລືອກ item, form ຈະ **ຈັດຮຽງໃໝ່ເພື່ອເອົາ field ທີ່ຕ້ອງການ ແລະ ເປັນທາງເລືອກ** ຂອງ item ທີ່ຖືກເລືອກມາ.

ຕົວຢ່າງເຊັ່ນ: ເມື່ອເລືອກ item **Customer**, field ຂອງ form ຈະສະແດງທຸກຢ່າງທີ່ຈຳເປັນຕ້ອງຕື່ມໃສ່ເພື່ອສ້າງ Customer ໃໝ່ໃນ network.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

ຫຼັງຈາກຕື່ມຂໍ້ມູນທຸກ field ທີ່ຖືກໝາຍວ່າ **required** (ຕ້ອງການ) ແລະ ກົດ continue, ໜ້າສຸດທ້າຍຈະສະແດງ field ທີ່ຕື່ມຂໍ້ມູນແລ້ວ ແລະ field ທີ່ຍັງບໍ່ໄດ້ຕື່ມໃສ່.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

ທັນທີທີ່ການທົດສອບຂອງທ່ານສຳເລັດ ແລະ ໂປ່ງໃສ, ການກະທຳ (action) ຂອງທ່ານກໍຖືກຕັ້ງຄ່າແລ້ວ. ສິ່ງສໍາຄັນອີກຢ່າງໜຶ່ງແມ່ນໃຫ້ກວດເບິ່ງໃນເຄືອຂ່າຍຂອງທ່ານວ່າຂໍ້ມູນນັ້ນໄດ້ຖືກສ້າງຂຶ້ນດ້ວຍການທົດສອບຂອງ action ຂອງທ່ານຫຼືບໍ່.
