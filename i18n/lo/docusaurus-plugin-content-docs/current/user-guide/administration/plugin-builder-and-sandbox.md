---
title: ຕົວສ້າງ Plugin ແລະ Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 ໄດ້ເພີ່ມລະບົບ **Plugin Builder & Sandbox System** ເຊິ່ງເຮັດໃຫ້ຜູ້ຊ່ວຍ AI ສາມາດສ້າງ, ຕັ້ງຄ່າ ແລະ ຄຸ້ມຄອງ WordPress plugins ໃນເຄືອຂ່າຍຂອງທ່ານໄດ້ — ທັງໝົດນີ້ແມ່ນຢູ່ໃນສະພາບແວດລ້ອມ sandbox ທີ່ປອດໄພ ແລະ ແຍກອອກຈາກກັນ.

## ภาพรวม (Overview) {#overview}

Plugin Builder ຊ່ວຍໃຫ້ຜູ້ຊ່ວຍ AI ສາມາດຂຽນ WordPress plugins ທີ່ເປັນແບບສະເພາະຕາມຄຳຮ້ອງຂໍດ້ວຍພາສາທຳມະຊາດ. Plugins ທີ່ສ້າງຂຶ້ນຈະຖືກກວດສອບ, ເກັບໄວ້ ແລະ ຕັ້ງຄ່າພາຍໃນ layer sandbox ກ່ອນທີ່ຈະສົ່ງຜົນກະທົບຕໍ່ການເຮັດວຽກຂອງເວັບໄຊທ໌ຕົວຈິງ.

Use cases (ກໍລະນີໃຊ້ງານ) ລວມມີ:

- ສ້າງ utility plugins ເບົາໆ ໂດຍບໍ່ຕ້ອງມີ developer ເຂົ້າຮ່ວມ.
- ທົດລອງ feature ທີ່ຕ້ອງການ WordPress hooks ຫຼື custom post types.
- ສ້າງ automation scripts ຊົ່ວຄາວສຳລັບການເຮັດວຽກແບບເປັນກຸ່ມ (batch operations).

## ການສ້າງ Plugin ຜ່ານ AI (Generating a Plugin via AI) {#generating-a-plugin-via-ai}

ເພື່ອສ້າງ plugin, ເປີດ interface ແຊັດຂອງ Gratis AI Agent ແລະ ອະທິບາຍວ່າທ່ານຕ້ອງການຫຍັງ. ຕົວຢ່າງເຊັ່ນ:

> "Create a plugin that adds a custom admin notice on the dashboard." (ສ້າງ plugin ທີ່ເພີ່ມ notification ພິເສດໃນ dashboard)

AI ຈະເຮັດສິ່ງເຫຼົ່ານີ້:

1. ສ້າງ code PHP ຂອງ plugin ໂດຍໃຊ້ structured code generation.
2. ກວດສອບ output ເພື່ອຫາຂໍ້ຜິດພາດທາງ syntax ແລະ pattern ທີ່ບໍ່ປອດໄພ.
3. ເກັບ plugin ທີ່ສ້າງຂຶ້ນໄວ້ໃນ sandbox store.
4. ສົ່ງການຢືນຢັນກັບ slug ຂອງ plugin ແລະ button **Activate in Sandbox** (ຕັ້ງຄ່າໃນ sandbox).

ທ່ານສາມາດປັບປຸງຜົນໄດ້ໂດຍການຕິດຕາມຕໍ່ໃນ thread ການສົນທະນາຄືກ່ອນທີ່ຈະເຮັດການ activate.

## ການຕັ້ງຄ່າ Sandbox (Sandbox Activation) {#sandbox-activation}

ການຕັ້ງຄ່າ plugin ທີ່ສ້າງຂຶ້ນໃນ sandbox ແມ່ນແຕກຕ່າງຈາກການຕັ້ງຄ່າໃນເຄືອຂ່າຍຕົວຈິງ. Sandbox ນີ້:

- ດໍາເນີນການ plugin ໃນ environment WordPress ທີ່ຖືກແຍກອອກ (wp-env).
- ຈັບເອົາຂໍ້ຜິດພາດ, ຄຳເຕືອນ ຫຼື ການຂັດແຍ່ງຂອງ hook ຕ່າງໆໃນ PHP.
- ລາຍງານຜົນການ activate ກັບຄືນໃນ interface ແຊັດ.

ເພື່ອ activate plugin ໃນ sandbox, ໃຫ້ກົດປຸ່ມ **Activate in Sandbox** ໃນການຕອບສະໜອງຂອງ AI chat, ຫຼືໃຊ້ slash command:

`/activate-plugin <plugin-slug>`

ຂໍ້ຄວາມສະຖານະຈະບອກວ່າການເປີດໃຊ້ງານສຳເລັດ ຫຼື ລົ້ມເຫຼວ. ຖ້າລົ້ມເຫຼວ, ບັນທຶກຂໍ້ຜິດພາດຈະສະແດງຢູ່ໃນແຖບສົນທະນາ.

## ການຈັດການ Plugin ທີ່ສ້າງຂຶ້ນມາ (Generated Plugins) {#managing-generated-plugins}

Plugin ທີ່ສ້າງຂຶ້ນມາຈະຖືກລາຍຊື່ໄວ້ໃນ **Gratis AI Agent → Plugin Builder → Manage Plugins**. ຈາກໜ້າຈໍນີ້, ເຈົ້າສາມາດເຮັດໄດ້ດັ່ງນີ້:

| ການກະທຳ | ຄຳອະທິບາຍ |
|---|---|
| **View source** (ເບິ່ງຊ່ອງໂຄງ) | ກວດສອບລະຫັດ PHP ຂອງ plugin ທັງໝົດ. |
| **Re-activate in sandbox** (ເປີດໃຊ້ງານໃໝ່ໃນ sandbox) | ດຳເນີນການກວດສອບການເປີດໃຊ້ງານໃນ sandbox ອີກຄັ້ງ. |
| **Install on network** (ຕິດຕັ້ງໃນເຄືອຂ່າຍ) | ຕິດຕັ້ງ plugin ເຂົ້າໃນ WordPress multisite ຕົວຈິງ (ຕ້ອງມີການຢືນຢັນດ້ວຍຕົນເອງ). |
| **Update** (ອັບເດດ) | ໃຫ້ເວີຊັນໃໝ່ຜ່ານ AI, ແທນທີ່ລະຫັດທີ່ມີຢູ່. |
| **Delete** (ລຶບ) | ລົບ plugin ອອກຈາກ sandbox store. ຈະເຮັດການ Deactivate ມັນອອກຈາກທຸກໄຊທ໌ກ່ອນ. |

:::warning
**Install on network** ແມ່ນການຕິດຕັ້ງ plugin ທີ່ສ້າງຂຶ້ນມາໃສ່ WordPress multisite ຕົວຈິງຂອງເຈົ້າ. ກະລຸນາກວດສອບລະຫັດ plugin ກ່ອນທີ່ຈະດຳເນີນການຕໍ່ໄປ. Gratis AI Agent ຈະຂໍການຢືນຢັນກ່ອນທີ່ຈະເຮັດການຕິດຕັ້ງໃນເວັບໄຊທ໌ຕົວຈິງ.
:::

## ການຕິດຕັ້ງ Plugin ທີ່ສ້າງຂຶ້ນມາໃສ່ເຄືອຂ່າຍ (Network) {#installing-a-generated-plugin-on-the-network}

ເມື່ອເຈົ້າພໍໃຈກັບ plugin ໃນ sandbox ແລ້ວ, ເຈົ້າສາມາດຕິດຕັ້ງມັນໃສ່ເຄືອຂ່າຍຕົວຈິງໄດ້:

1. ໄປທີ່ **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. ກົດ **Install on Network** ຢູ່ຂ້າງ plugin ທີ່ເຈົ້າຕ້ອງການ Deploy.
3. ຢືນຢັນ dialog ນັ້ນ. Plugin ຈະຖືກຕິດຕັ້ງໄວ້ໃນ thư mục `wp-content/plugins/` ແລະ ເປີດໃຊ້ງານໃນເຄືອຂ່າຍ.

ຫຼື ອີກທາງເລືອກໜຶ່ງ, ສາມາດໃຊ້ slash command ໃນ chat interface:

```
/install-plugin <plugin-slug>
```

## ການອັບເດດ Plugin {#plugin-updates}

ເພື່ອອັບເດດ plugin ທີ່ສ້າງຂຶ້ນມາ, ໃຫ້ອະທິບາຍການປ່ຽນແປງໃຫ້ຜູ້ຊ່ວຍ AI ໃນການສົນທະນາໃໝ່:

> "Update the dashboard-notice plugin to only show the notice to administrators." (ອັບເດດ plugin dashboard-notice ເພື່ອສະແດງແຕ່ຂໍ້ຄວາມແຈ້ງເຕືອນໃຫ້ກັບຜູ້ບໍລິຫານເທົ່ານັ້ນ)

AI ຈະສ້າງເວີຊັນໃໝ່ຂຶ້ນມາ, ເຊິ່ງຈະປາກົດຢູ່ໃນ sandbox ພ້ອມກັບເວີຊັນປັດຈຸບັນ. ເຈົ້າກວດສອບ diff ແລະ ຢືນຢັນກ່ອນທີ່ຈະນຳໃຊ້ການອັບເດດນັ້ນ.

## การรวม HookScanner {#hookscanner-integration}

Plugin Builder ใช้ **HookScanner** ที่รวมอยู่ เพื่อวิเคราะห์ hook และ filter ต่างๆ ที่ถูกลงทะเบียนโดยปลั๊กอินที่สร้างขึ้นแต่ละตัว ผลลัพธ์จาก HookScanner จะแสดงในข้อความแชทและประกอบด้วย:

- action hooks ที่ลงทะเบียนไว้ (`add_action` calls)
- filter hooks ที่ลงทะเบียนไว้ (`add_filter` calls)
- hook ใดๆ ที่พบใน dependencies ของปลั๊กอิน (จะข้ามไดเรกทอรี `vendor/` และ `node_modules/`)

สิ่งนี้ช่วยให้คุณเข้าใจพฤติกรรมของปลั๊กอินก่อนที่จะเปิดใช้งานมันครับ

## ข้อควรระวังด้านความปลอดภัย {#security-considerations}

- ปลั๊กอินที่สร้างขึ้นจะถูกเก็บแยกต่างหากจากปลั๊กอินที่คุณติดตั้งด้วยตนเอง และจะไม่สามารถเข้าถึงได้ผ่านหน้าจัดการปลั๊กอินมาตรฐานของ WordPress จนกว่าคุณจะติดตั้งปลั๊กอินเหล่านั้นบนเครือข่ายของคุณอย่างชัดเจน
- sandbox ใช้การตรวจสอบ path เพื่อป้องกันการเจาะเข้าไปในไดเรกทอรี (directory traversal) เมื่อเขียนไฟล์ปลั๊กอิน
- ปลั๊กอินที่มีการเรียกใช้ฟังก์ชันอันตราย (เช่น `eval`, `exec`, `system`) จะถูกแจ้งเตือนระหว่างการตรวจสอบและจะไม่ถูกเปิดใช้งาน
