---
title: ການຍົກຍ້າຍໂໝດຂອງພາກສ່ວນທີສາມ
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# ການຍົກລະດັບໂໝດ Third-Party

Superdav AI Agent v1.12.0 ເຮັດໃຫ້ການຈັດການຄວາມສາມາດຂອງ bên thứ ba ປ່ຽນໄປ. **ໂໝດ third-party ຕອນນີ້ຖືກຕັ້ງຄ່າເປັນ auto ໂດຍອັດຕະໂນມັດ**, ຊຶ່ງເຮັດໃຫ້ສາມາດເຊື່ອມຕໍ່ກັບ WordPress Abilities API ແບບ Native ໃນ WordPress 7.0+ ໄດ້ໂດຍບໍ່ຕ້ອງຕັ້ງຄ່າໃດໆ.

## ມີຫຍັງປ່ຽນໄປ? {#what-changed}

### ກ່ອນ v1.12.0 {#before-v1120}

ຄວາມສາມາດຂອງ bên thứ ba ຮຽກຮ້ອງໃຫ້ມີການຕັ້ງຄ່າດ້ວຍຕົນເອງ:

- ທ່ານຕ້ອງເປີດໃຊ້ "third-party mode" ຢ່າງຊັດເຈນ
- ຄວາມສາມາດ (Abilities) ຖືກໂຫຼດມາຈາກ registry ທີ່ສ້າງຂຶ້ນเอง
- ການເຊື່ອມຕໍ່ກັບ WordPress Abilities API ແມ່ນທາງເລືອກ
- ໂໝດແບບເກົ່າ (Legacy mode) ເປັນຄ່າເລີ່ມຕົ້ນ

### ຫຼັງ v1.12.0 {#after-v1120}

ຄວາມສາມາດຂອງ bên thứ ba ຈະເຮັດວຽກໂດຍອັດຕະໂນມັດ:

- ໂໝດ third-party ຖືກຕັ້ງຄ່າເປັນ "auto" ອັດຕະໂນມັດ
- ຄວາມສາມາດເກັບຂໍ້ມູນເຂົ້າກັບ WordPress Abilities API ແບບ Native
- ບໍ່ຈຳເປັນຕ້ອງຕັ້ງຄ່າໃດໆໃນ WordPress 7.0+
- ໂໝດແບບເກົ່າ (Legacy mode) ຍັງມີໃຫ້ໃຊ້ສຳລັບ WordPress ເພີ່ມເຕີມ

## ໃຜທີ່ຈະໄດ້ຮັບຜົນກະທົບ? {#who-is-affected}

### ການຕິດຕັ້ງໃໝ່ (WordPress 7.0+) {#new-installations-wordpress-70}

**ບໍ່ຕ້ອງເຮັດຫຍັງ.** ໂໝດ third-party ຈະຖືກຕັ້ງຄ່າເປັນ "auto" ອັດຕະໂນມັດ ແລະ ຄວາມສາມາດຈະເຮັດວຽກໄດ້ທັນທີ.

### ການຕິດຕັ້ງທີ່ມີຢູ່ແລ້ວ {#existing-installations}

**ການຕັ້ງຄ່າຂອງທ່ານຈະຖືກເກັບໄວ້.** ຖ້າທ່ານເຄີຍໃຊ້:

- **Legacy mode**: ທ່ານຍັງຢູ່ໃນ legacy mode (ບໍ່ມີການປ່ຽນແປງ)
- **Manual third-party mode**: ທ່ານຍັງຢູ່ໃນ manual mode (ບໍ່ມີການປ່ຽນແປງ)
- **Auto mode**: ທ່ານຈະສືບຕໍ່ໃຊ້ auto mode (ບໍ່ມີການປ່ຽນແປງ)

### WordPress ເກ່ຍກວ່າ 7.0 {#wordpress-versions-before-70}

**ໂໝດແບບເກົ່າ (Legacy mode) ຍັງມີໃຫ້ໃຊ້.** ຖ້າທ່ານໃຊ້ WordPress 6.x ຫຼື ເກົ່າກວ່າ:

- ໂໝດ third-party ຈະຖືກຕັ້ງຄ່າເປັນ "legacy" ອັດຕະໂນມັດ
- ທ່ານສາມາດເປີດໃຊ້ third-party mode ດ້ວຍຕົນເອງໄດ້ຖ້າຕ້ອງການ
- ອັບເກຣດໄປໃຊ້ WordPress 7.0+ ເພື່ອໃຊ້ Abilities API ແບບ Native

## ການເຂົ້າໃຈໂໝດຕ່າງໆ {#understanding-the-modes}

### Auto Mode (ຄ່າເລີ່ມຕົ້ນໃໝ່) {#auto-mode-new-default}

**Auto mode** ໃຊ້ການເຊື່ອມຕໍ່ກັບ WordPress Abilities API ແບບ Native:

- ຄວາມສາມາດຈະຖືກລົງທະບຽນຜ່ານ WordPress hooks
- ມີຄວາມເຂົ້າກັນໄດ້ເຕັມຮູບແບບກັບ WordPress 7.0+ Abilities API
- ການຄົ້ນພົບ third-party abilities ອັດຕະໂນມັດ
- ບໍ່ຈຳເປັນຕ້ອງຕັ້ງຄ່າໃດໆ

**ຄວນໃຊ້ເມື່ອໃດ**: WordPress 7.0+ ພ້ອມກັບຄວາມສາມາດຂອງແພລັດຟອມທີສາມ (third-party)

### ໂໝດແບບແຮງດ້ວຍມື (Manual Mode) {#manual-mode}

**ໂໝດແບບແຮງດ້ວຍມື** ຮຽກຮ້ອງໃຫ້ມີການຕັ້ງຄ່າຢ່າງຊັດເຈນ:

- ເຈົ້າຈະລະບຸວ່າຕ້ອງການໂຫຼດຄວາມສາມາດຂອງແພລັດຟອມທີສາມໃດ
- ມີປະໂຫຍດໃນການທົດສອບ ຫຼື ການໂຫຼດຄວາມສາມາດທີ່ເລືອກໃຊ້ສະເພາະ
- ຮຽກຮ້ອງໃຫ້ຕ້ອງແກ້ໄຂໄຟລ໌ຕັ້ງຄ່າ (configuration files)
- ຄວບຄຸມໄດ້ຫຼາຍກວ່າ, ແຕ່ຕ້ອງມີການຕັ້ງຄ່າຫຼາຍກວ່າ

**ຄວນໃຊ້ເມື່ອໃດ**: ເພື່ອທົດສອບ, ການໂຫຼດຄວາມສາມາດທີ່ເລືອກໃຊ້ສະເພາະ, ຫຼື ການຕັ້ງຄ່າແບບສະເພາະເຈາະຈົງ

### ໂໝດເກົ່າ (Legacy Mode) {#legacy-mode}

**ໂໝດເກົ່າ** ໃຊ້ລະບົບຄວາມສາມາດຂອງແພລັດຟອມທີສາມແບບເກົ່າ:

- ປະຫວັດການຕັ້ງຄ່າຄວາມສາມາດທີ່ເປັນແບບສະເພາະເຈາະຈົງ (ບໍ່ແມ່ນ WordPress Abilities API)
- ຮອງຮັບກັບ WordPress ເພີ່ມເຕີມໃນເວລາກ່ອນ
- ບໍ່ມີການເຊື່ອມຕໍ່ໂດຍກົງກັບ WordPress ແບບດິບ (native integration)
- ເປັນໂໝດທີ່ຖືກຍຸຕິຍົດແລ້ວ ແຕ່ຍັງຮອງຮັບຢູ່

**ຄວນໃຊ້ເມື່ອໃດ**: ສຳລັບ WordPress 6.x ຫຼື ເກົ່າກວ່າ, ຫຼື ເມື່ອທ່ານຕ້ອງການຄວາມເຂົ້າກັນໄດ້ແບບເກົ່າ

## ການກວດສອບໂໝດປັດຈຸບັນຂອງທ່ານ {#checking-your-current-mode}

### ຜ່ານ Admin Panel {#via-admin-panel}

1. ໄປທີ່ **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. ຊອກຫາການຕັ້ງຄ່າ **Third-Party Mode** (ໂໝດຂອງແພລັດຟອມທີສາມ)
3. ເຈົ້າຈະເຫັນໂໝດປັດຈຸບັນຂອງເຈົ້າ ແລະ ທາງເລືອກໃນການປ່ຽນມັນ

### ຜ່ານ Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## ການປ່ຽນໂໝດຂອງທ່ານ {#changing-your-mode}

### ປ່ຽນໄປເປັນ Auto Mode (ໂໝດອັດຕະໂນມັດ) {#switch-to-auto-mode}

ຖ້າເຈົ້າໃຊ້ WordPress 7.0+ ແລະ ຕ້ອງການໃຊ້ auto mode:

1. ໄປທີ່ **Superdav AI Agent** → **Settings**
2. ຊອກຫາ **Third-Party Mode**
3. ເລືອກ **Auto (WordPress Abilities API)**
4. ກົດ **Save** (ບັນທຶກ)

Superdav AI Agent ຈະຊອກຫາ ແລະ ລົງທະບຽນຄວາມສາມາດຂອງແພລັດຟອມທີສາມໃຫ້ໂດຍອັດຕະໂນມັດ.

### ປ່ຽນໄປເປັນ Manual Mode (ໂໝດແບບແຮງດ້ວຍມື) {#switch-to-manual-mode}

ຖ້າເຈົ້າຕ້ອງການຄວບຄຸມວ່າຈະໂຫຼດຄວາມສາມາດໃດ:

1. ໄປທີ່ **Superdav AI Agent** → **Settings**
2. ຊອກຫາ **Third-Party Mode**
3. ເລືອກ **Manual**
4. ກົດ **Save** (ບັນທຶກ)
5. ແກ້ໄຂໄຟລ໌ຕັ້ງຄ່າຂອງເຈົ້າເພື່ອລະບຸວ່າຕ້ອງການໂຫຼດຄວາມສາມາດໃດ

### ປ່ຽນໄປເປັນ Legacy Mode (ໂໝດເກົ່າ) {#switch-to-legacy-mode}

ຖ້າເຈົ້າຕ້ອງການຄວາມເຂົ້າກັນໄດ້ແບບເກົ່າ:

1. ไปที่ **Superdav AI Agent** → **Settings**
2. ค้นหา **Third-Party Mode** (โหมดบุคคลที่สาม)
3. เลือก **Legacy** (แบบเก่า)
4. คลิก **Save** (บันทึก)

## ประโยชน์ของ Auto Mode (โหมดอัตโนมัติ) {#benefits-of-auto-mode}

### การค้นพบโดยอัตโนมัติ (Automatic Discovery) {#automatic-discovery}

ความสามารถต่างๆ จะถูกค้นพบโดยอัตโนมัติจาก:

- ปลั๊กอินที่ติดตั้งไว้
- ธีมที่กำลังใช้งานอยู่
- ปลั๊กอินที่ต้องใช้ (Must-use plugins)
- ปลั๊กอินแบบ Drop-in

ไม่ต้องลงทะเบียนด้วยตนเองเลยครับ

### การทำงานร่วมกับระบบหลักโดยตรง (Native Integration) {#native-integration}

ความสามารถต่างๆ จะเชื่อมต่อกับ WordPress Abilities API:

- สอดคล้องกับแกนหลักของ WordPress
- ใช้งานได้กับหน้า Admin ของ WordPress
- เข้ากันได้กับปลั๊กอินอื่นๆ ที่ใช้ Abilities API
- อนาคตที่มั่นคง เพราะเมื่อ WordPress พัฒนาไป ความเข้ากันได้ก็จะดีขึ้นตามไปด้วย

### การจัดการที่ง่ายขึ้น (Simplified Management) {#simplified-management}

- ไม่ต้องแก้ไขไฟล์ตั้งค่าใดๆ
- ไม่ต้องลงทะเบียนความสามารถด้วยตนเอง
- การควบคุมการมองเห็นของ Ability จะทำงานโดยอัตโนมัติ
- ระบบจะแจ้งเตือนคุณเกี่ยวกับ ability ที่ยังไม่ได้จัดหมวดหมู่

### ประสิทธิภาพที่ดีขึ้น (Better Performance) {#better-performance}

- ความสามารถต่างๆ จะถูกแคช (cache) ไว้
- โหลดแบบ Lazy-loaded เมื่อมีการเรียกใช้งานเท่านั้น
- ถูกปรับให้เหมาะสมกับ WordPress 7.0+ เป็นต้นไป

## เส้นทางการย้ายระบบ (Migration Path) {#migration-path}

### ถ้าคุณใช้ WordPress 6.x {#if-youre-on-wordpress-6x}

1. **อัปเกรดเป็น WordPress 7.0+** (เมื่อพร้อมแล้ว)
2. **อัปเดต Superdav AI Agent** เป็นเวอร์ชัน v1.12.0+
3. **เปลี่ยน third-party mode เป็น Auto** (ไม่บังคับ; โหมด legacy ยังใช้งานได้อยู่)
4. **ตรวจสอบการมองเห็นของ ability** เพื่อให้แน่ใจว่ามีการควบคุมการเข้าถึงที่ถูกต้อง

### ถ้าคุณใช้ WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **อัปเดต Superdav AI Agent** เป็นเวอร์ชัน v1.12.0+
2. **ตรวจสอบว่า third-party mode ถูกตั้งค่าเป็น Auto แล้ว** (โดยปกติจะเป็นแบบนี้อยู่แล้ว)
3. **ตรวจสอบการมองเห็นของ ability** เพื่อให้แน่ใจว่ามีการควบคุมการเข้าถึงที่ถูกต้อง
4. **ทดสอบ third-party abilities** เพื่อยืนยันว่าทำงานได้

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### ความสามารถไม่โหลดใน auto mode {#abilities-arent-loading-in-auto-mode}

- ตรวจสอบว่าคุณใช้ WordPress 7.0+ แล้วหรือยัง
- ตรวจสอบว่า third-party mode ถูกตั้งค่าเป็น "Auto" หรือไม่
- ตรวจสอบว่าปลั๊กอินที่ให้ความสามารถนั้นเปิดใช้งานอยู่หรือไม่
- ตรวจสอบ error logs ของ WordPress เพื่อหาข้อผิดพลาดในการลงทะเบียน

### ฉันต้องการเก็บ legacy mode ไว้ {#i-want-to-keep-legacy-mode}

- ไปที่ **Settings** → **Third-Party Mode**
- เลือก **Legacy**
- คลิก **Save**
- โหมด legacy จะยังคงทำงานต่อไปได้

### ความสามารถที่กำหนดเองของฉันไม่แสดงผล {#my-custom-abilities-arent-showing}

- ตรวจสอบว่าได้ลงทะเบียนผ่าน WordPress hooks แล้วหรือยัง
- ตรวจสอบว่าคุณใช้งาน Abilities API ได้ถูกต้องหรือไม่
- ตรวจสอบบันทึกข้อผิดพลาด (error logs) ของ WordPress
- ใช้หน้า admin **Ability Visibility** เพื่อดูความสามารถทั้งหมดที่ลงทะเบียนไว้

### ฉันได้รับแจ้งเตือน "ability ที่ไม่ถูกจัดประเภท" {#im-getting-unclassified-ability-notices}

- นี่เป็นเรื่องปกติสำหรับ ability ภายนอกตัวใหม่ๆ
- ตรวจสอบและจัดประเภทพวกมันใน notice ของ admin
- ดู **Ability Visibility** สำหรับรายละเอียดเกี่ยวกับการจัดประเภท

## ความเข้ากันได้ย้อนหลัง (Backward Compatibility) {#backward-compatibility}

### การตั้งค่าที่มีอยู่เดิม {#existing-configurations}

หากคุณมีการตั้งค่า ability ภายนอกที่มีอยู่แล้ว:

- **Legacy mode**: การตั้งค่าของคุณยังคงใช้งานได้ตามปกติ
- **Manual mode**: การตั้งค่าของคุณยังคงใช้งานได้ตามปกติ
- **Auto mode**: การตั้งค่าของคุณจะถูกละเลย (auto mode จะเข้ามาจัดการแทน)

หากต้องการเก็บการตั้งค่าที่กำหนดเองไว้ ให้ใช้โหมด Manual หรือ Legacy เท่านั้น

### กำหนดเวลาการยกเลิกการใช้งาน (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: โหมด Legacy และ Manual ยังคงรองรับอย่างเต็มรูปแบบ
- **v1.13.0+**: โหมด Legacy อาจแสดงข้อความแจ้งเตือนว่ากำลังจะถูกยกเลิก
- **v2.0.0**: โหมด Legacy อาจถูกนำออก (อยู่ระหว่างการพิจารณา)

## แนวทางปฏิบัติที่ดีที่สุด (Best Practices) {#best-practices}

### สำหรับการติดตั้งใหม่ {#for-new-installations}

- ใช้ Auto mode (เป็นค่าเริ่มต้น)
- ให้ Superdav AI Agent ค้นพบ ability โดยอัตโนมัติ
- ใช้ Ability Visibility เพื่อควบคุมการเข้าถึง

### สำหรับการติดตั้งที่มีอยู่แล้ว {#for-existing-installations}

- อัปเกรดเป็น WordPress 7.0+ เมื่อทำได้
- สลับไปใช้ Auto mode เพื่อให้จัดการง่ายขึ้น
- ตรวจสอบและจัดประเภท ability โดยใช้ Ability Visibility

### สำหรับ ability ที่กำหนดเอง {#for-custom-abilities}

- ลงทะเบียน ability ผ่าน WordPress hooks (Abilities API)
- หลีกเลี่ยงการสร้าง custom ability registries เอง
- ทดสอบบน WordPress 7.0+ ด้วย Auto mode

## ขั้นตอนต่อไป {#next-steps}

1. **ກວດສອບເວີຊັນ WordPress ຂອງທ່ານ**: ເພື່ອໃຊ້ Auto mode (ໂໝດອັດຕະໂນມັດ) ໃຫ້ແນ່ໃຈວ່າທ່ານໃຊ້ WordPress 7.0 ຫຼື ສູງກວ່າ

2. **ກວດເບິ່ງ Third-party mode ຂອງທ່ານ**: ໄປທີ່ Settings (ການຕັ້ງຄ່າ) ແລະ ກວດສອບໂໝດປັດຈຸບັນຂອງມັນ

3. **ອັບເດດຖ້າຈຳເປັນ**: ຖ້າທ່ານໃຊ້ WordPress 7.0 ຫຼື ສູງກວ່າ, ໃຫ້ສະຫຼັບໄປໃຊ້ Auto mode

4. **ຈັດປະເພດຄວາມສາມາດ (Classify abilities)**: ກວດສອບ ແລະ ຈັດປະເພດຄວາມສາມາດທີ່ຍັງບໍ່ໄດ້ຖືກຈັດປະເພດ

5. **ທົດສອບ**: ເພື່ອຢືນຢັນວ່າ Third-party abilities ຂອງທ່ານເຮັດວຽກຢ່າງຖືກຕ້ອງແລ້ວ
