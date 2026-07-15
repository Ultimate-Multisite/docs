---
title: การย้ายโหมดบุคคลที่สาม
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# การย้ายโหมดสำหรับ Third-Party Mode

Superdav AI Agent v1.12.0 ได้ปรับเปลี่ยนวิธีการจัดการความสามารถ (abilities) ของ third-party ใหม่ **Third-party mode จะตั้งค่าเริ่มต้นเป็น auto** ทำให้สามารถผสานรวมกับ WordPress Abilities API แบบ native บน WordPress 7.0+ ได้โดยไม่ต้องตั้งค่าด้วยตนเอง

## มีอะไรเปลี่ยนแปลงไปบ้าง? {#what-changed}

### ก่อน v1.12.0 {#before-v1120}

ความสามารถของ third-party ต้องมีการตั้งค่าด้วยตนเอง:

- คุณต้องเปิดใช้งาน "third-party mode" อย่างชัดเจน
- ความสามารถจะถูกโหลดจาก registry ที่กำหนดเอง
- การผสานรวมกับ WordPress Abilities API เป็นทางเลือก
- โหมด Legacy เป็นค่าเริ่มต้น

### หลัง v1.12.0 {#after-v1120}

ความสามารถของ third-party จะทำงานโดยอัตโนมัติ:

- Third-party mode จะตั้งค่าเริ่มต้นเป็น "auto"
- ความสามารถจะผสานรวมกับ WordPress Abilities API แบบ native
- ไม่ต้องตั้งค่าด้วยตนเองบน WordPress 7.0+
- โหมด Legacy ยังคงใช้งานได้สำหรับ WordPress เวอร์ชันเก่า

## ใครได้รับผลกระทบ? {#who-is-affected}

### การติดตั้งใหม่ (WordPress 7.0+) {#new-installations-wordpress-70}

**ไม่ต้องดำเนินการใดๆ** Third-party mode จะถูกตั้งค่าเป็น "auto" โดยอัตโนมัติ และความสามารถก็จะใช้งานได้ทันที

### การติดตั้งที่มีอยู่แล้ว {#existing-installations}

**การตั้งค่าของคุณจะยังคงอยู่** หากคุณเคยใช้:

- **Legacy mode**: คุณจะยังคงอยู่ในโหมด Legacy (ไม่มีการเปลี่ยนแปลง)
- **Manual third-party mode**: คุณจะยังคงอยู่ในโหมด Manual (ไม่มีการเปลี่ยนแปลง)
- **Auto mode**: คุณจะใช้โหมด Auto ต่อไป (ไม่มีการเปลี่ยนแปลง)

### เวอร์ชัน WordPress ก่อน 7.0 {#wordpress-versions-before-70}

**โหมด Legacy ยังคงใช้งานได้** หากคุณใช้ WordPress 6.x หรือเวอร์ชันก่อนหน้า:

- Third-party mode จะตั้งค่าเริ่มต้นเป็น "legacy"
- คุณสามารถเปิดใช้งาน third-party mode ด้วยตนเองได้หากต้องการ
- อัปเกรดเป็น WordPress 7.0+ เพื่อใช้ Abilities API แบบ native

## ทำความเข้าใจโหมดต่างๆ {#understanding-the-modes}

### Auto Mode (ค่าเริ่มต้นใหม่) {#auto-mode-new-default}

**Auto mode** ใช้การผสานรวมกับ WordPress Abilities API แบบ native:

- ความสามารถจะถูกลงทะเบียนผ่าน WordPress hooks
- เข้ากันได้เต็มที่กับ WordPress 7.0+ Abilities API
- ค้นพบ third-party abilities โดยอัตโนมัติ
- ไม่ต้องตั้งค่าด้วยตนเอง

**ควรใช้เมื่อ**: ใช้ WordPress 7.0+ พร้อม third-party abilities

### Manual Mode {#manual-mode}

**Manual mode** ต้องมีการตั้งค่าที่ชัดเจน:

- คุณระบุว่าต้องการโหลด third-party abilities ตัวใด
- มีประโยชน์สำหรับการทดสอบหรือการโหลดความสามารถแบบเลือกสรร
- ต้องแก้ไขไฟล์การตั้งค่า
- ควบคุมได้มากกว่า แต่ต้องตั้งค่ามากกว่า

**ควรใช้เมื่อ**: การทดสอบ, การโหลดความสามารถแบบเลือกสรร, หรือการตั้งค่าแบบกำหนดเอง

### Legacy Mode {#legacy-mode}

**Legacy mode** ใช้ระบบ third-party ability แบบเก่า:

- Custom ability registry (ไม่ใช่ WordPress Abilities API)
- เข้ากันได้กับ WordPress เวอร์ชันเก่า
- ไม่มีการผสานรวมกับ WordPress แบบ native
- ถูกยกเลิกการใช้งานแล้วแต่ยังคงรองรับ

**ควรใช้เมื่อ**: ใช้ WordPress 6.x หรือก่อนหน้า, หรือเมื่อคุณต้องการความเข้ากันได้แบบ Legacy

## การตรวจสอบโหมดปัจจุบันของคุณ {#checking-your-current-mode}

### ผ่าน Admin Panel {#via-admin-panel}

1. ไปที่ **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. มองหาการตั้งค่า **Third-Party Mode**
3. คุณจะเห็นโหมดปัจจุบันและตัวเลือกในการเปลี่ยน

### ผ่านโค้ด {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', หรือ 'legacy'
```

## การเปลี่ยนโหมดของคุณ {#changing-your-mode}

### สลับไปที่ Auto Mode {#switch-to-auto-mode}

หากคุณใช้ WordPress 7.0+ และต้องการใช้ auto mode:

1. ไปที่ **Superdav AI Agent** → **Settings**
2. ค้นหา **Third-Party Mode**
3. เลือก **Auto (WordPress Abilities API)**
4. คลิก **Save**

Superdav AI Agent จะค้นพบและลงทะเบียน third-party abilities โดยอัตโนมัติ

### สลับไปที่ Manual Mode {#switch-to-manual-mode}

หากคุณต้องการควบคุมด้วยตนเองว่าความสามารถใดจะโหลด:

1. ไปที่ **Superdav AI Agent** → **Settings**
2. ค้นหา **Third-Party Mode**
3. เลือก **Manual**
4. คลิก **Save**
5. แก้ไขไฟล์การตั้งค่าของคุณเพื่อระบุว่าต้องการโหลดความสามารถใด

### สลับไปที่ Legacy Mode {#switch-to-legacy-mode}

หากคุณต้องการความเข้ากันได้แบบ Legacy:

1. ไปที่ **Superdav AI Agent** → **Settings**
2. ค้นหา **Third-Party Mode**
3. เลือก **Legacy**
4. คลิก **Save**

## ประโยชน์ของ Auto Mode {#benefits-of-auto-mode}

### การค้นพบอัตโนมัติ (Automatic Discovery) {#automatic-discovery}

ความสามารถจะถูกค้นพบโดยอัตโนมัติจาก:

- ปลั๊กอินที่ติดตั้ง
- ธีมที่ใช้งานอยู่
- Must-use plugins
- Drop-in plugins

ไม่จำเป็นต้องลงทะเบียนด้วยตนเอง

### การผสานรวมแบบ Native (Native Integration) {#native-integration}

ความสามารถจะผสานรวมกับ WordPress Abilities API:

- สอดคล้องกับ WordPress core
- ทำงานกับ WordPress admin
- เข้ากันได้กับปลั๊กอินอื่นที่ใช้ Abilities API
- รองรับการพัฒนาในอนาคตเมื่อ WordPress พัฒนาไป

### การจัดการที่ง่ายขึ้น (Simplified Management) {#simplified-management}

- ไม่ต้องแก้ไขไฟล์การตั้งค่า
- ไม่ต้องลงทะเบียนความสามารถด้วยตนเอง
- การควบคุม Ability Visibility ทำงานโดยอัตโนมัติ
- Admin notices จะแจ้งเตือนคุณเกี่ยวกับความสามารถที่ยังไม่ได้จัดประเภท

### ประสิทธิภาพที่ดีขึ้น (Better Performance) {#better-performance}

- ความสามารถจะถูกแคช (cached)
- โหลดแบบ Lazy-loaded เมื่อมีการเรียกใช้
- ปรับให้เหมาะสมสำหรับ WordPress 7.0+

## แนวทางการย้าย (Migration Path) {#migration-path}

### หากคุณใช้ WordPress 6.x {#if-youre-on-wordpress-6x}

1. **อัปเกรดเป็น WordPress 7.0+** (เมื่อพร้อม)
2. **อัปเดต Superdav AI Agent** เป็น v1.12.0+
3. **เปลี่ยน third-party mode เป็น Auto** (ไม่บังคับ; โหมด Legacy ยังคงใช้งานได้)
4. **ตรวจสอบ Ability visibility** เพื่อให้แน่ใจว่ามีการควบคุมการเข้าถึงที่เหมาะสม

### หากคุณใช้ WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **อัปเดต Superdav AI Agent** เป็น v1.12.0+
2. **ตรวจสอบว่า third-party mode ถูกตั้งค่าเป็น Auto** (ควรเป็นค่าเริ่มต้น)
3. **ตรวจสอบ Ability visibility** เพื่อให้แน่ใจว่ามีการควบคุมการเข้าถึงที่เหมาะสม
4. **ทดสอบ third-party abilities** เพื่อยืนยันว่าทำงานได้

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### ความสามารถไม่โหลดใน auto mode {#abilities-arent-loading-in-auto-mode}

- ตรวจสอบว่าคุณใช้ WordPress 7.0+
- ตรวจสอบว่า third-party mode ถูกตั้งค่าเป็น "Auto"
- ตรวจสอบว่าปลั๊กอินที่ให้ความสามารถนั้นทำงานอยู่
- ตรวจสอบ WordPress error logs สำหรับข้อผิดพลาดในการลงทะเบียน

### ฉันต้องการคงโหมด Legacy ไว้ {#i-want-to-keep-legacy-mode}

- ไปที่ **Settings** → **Third-Party Mode**
- เลือก **Legacy**
- คลิก **Save**
- โหมด Legacy จะยังคงทำงานต่อไป

### custom abilities ของฉันไม่แสดง {#my-custom-abilities-arent-showing}

- ตรวจสอบว่ามีการลงทะเบียนผ่าน WordPress hooks
- ตรวจสอบว่ามีการใช้งาน Abilities API อย่างถูกต้อง
- ตรวจสอบ WordPress error logs
- ใช้หน้า admin **Ability Visibility** เพื่อดูความสามารถที่ลงทะเบียนทั้งหมด

### ฉันได้รับข้อความแจ้งเตือน "unclassified ability" {#im-getting-unclassified-ability-notices}

- นี่เป็นเรื่องปกติสำหรับ third-party abilities ใหม่
- ตรวจสอบและจัดประเภทใน admin notice
- ดู **Ability Visibility** สำหรับรายละเอียดเกี่ยวกับการจัดประเภท

## ความเข้ากันได้แบบย้อนหลัง (Backward Compatibility) {#backward-compatibility}

### การตั้งค่าที่มีอยู่ {#existing-configurations}

หากคุณมีการตั้งค่า third-party ability ที่มีอยู่:

- **Legacy mode**: การตั้งค่าของคุณยังคงใช้งานได้
- **Manual mode**: การตั้งค่าของคุณยังคงใช้งานได้
- **Auto mode**: การตั้งค่าของคุณจะถูกละเลย (auto mode จะเข้ามาควบคุม)

หากต้องการเก็บการตั้งค่าแบบกำหนดเองไว้ ให้คงอยู่ในโหมด Manual หรือ Legacy

### ไทม์ไลน์การยกเลิกการใช้งาน (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: โหมด Legacy และ Manual ยังคงรองรับเต็มที่
- **v1.13.0+**: โหมด Legacy อาจแสดงข้อความแจ้งเตือนการยกเลิกการใช้งาน
- **v2.0.0**: โหมด Legacy อาจถูกลบออก (TBD)

## แนวทางปฏิบัติที่ดีที่สุด (Best Practices) {#best-practices}

### สำหรับการติดตั้งใหม่ {#for-new-installations}

- ใช้ Auto mode (เป็นค่าเริ่มต้น)
- ปล่อยให้ Superdav AI Agent ค้นพบ abilities โดยอัตโนมัติ
- ใช้ Ability Visibility เพื่อควบคุมการเข้าถึง

### สำหรับการติดตั้งที่มีอยู่ {#for-existing-installations}

- อัปเกรดเป็น WordPress 7.0+ เมื่อเป็นไปได้
- สลับไปใช้ Auto mode เพื่อการจัดการที่ง่ายขึ้น
- ตรวจสอบและจัดประเภท abilities โดยใช้ Ability Visibility

### สำหรับ Custom Abilities {#for-custom-abilities}

- ลงทะเบียน abilities ผ่าน WordPress hooks (Abilities API)
- หลีกเลี่ยงการใช้ custom ability registries
- ทดสอบบน WordPress 7.0+ ด้วย Auto mode

## ขั้นตอนต่อไป (Next Steps) {#next-steps}

1. **ตรวจสอบเวอร์ชัน WordPress ของคุณ**: ตรวจสอบว่าคุณใช้ 7.0+ สำหรับ Auto mode
2. **ตรวจสอบ third-party mode ของคุณ**: ไปที่ Settings และตรวจสอบโหมดปัจจุบัน
3. **อัปเดตหากจำเป็น**: สลับไปใช้ Auto mode หากคุณใช้ WordPress 7.0+
4. **จัดประเภท abilities**: ตรวจสอบและจัดประเภท abilities ที่ยังไม่ได้จัดประเภท
5. **ทดสอบ**: ยืนยันว่า third-party abilities ของคุณทำงานได้อย่างถูกต้อง

## หัวข้อที่เกี่ยวข้อง (Related Topics) {#related-topics}

- **Ability Visibility**: ควบคุมว่าความสามารถใดจะถูกเปิดเผยที่ใด
- **WordPress Abilities API**: เรียนรู้เกี่ยวกับการลงทะเบียนความสามารถแบบ native ของ WordPress
- **Third-Party Ability Development**: สร้างความสามารถที่ทำงานกับ Auto mode
