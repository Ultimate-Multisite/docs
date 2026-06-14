---
title: ການເຊື່ອມຕໍ່ RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# ການເຊື່ອມຕໍ່ RunCloud

## ພາບລວມ
RunCloud ແມ່ນແພລັດຟອມຈັດການເຊີເວີໃນຄລາວ (cloud-based server management platform) ເຊິ່ງເຮັດໃຫ້ທ່ານສາມາດຕິດຕັ້ງ ແລະ ຈັດການ web applications ຂອງທ່ານໄດ້ງ່າຍໆ ຢູ່ເທິງເຊີເວີຄລາວຂອງຕົນເອງ. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ເກີດການສັງເກດໂດເມນ (domain syncing) ອັດຕະໂນມັດ ແລະ ການຈັດການໃບຢັ້ງຢືນ SSL (SSL certificate management) ລະຫວ່າງ Ultimate Multisite ແລະ RunCloud.

## ຄຸນສົມບັດ
- ການສັງເກດໂດເມນອັດຕະໂນມັດ (Automatic domain syncing)
- ການຈັດການໃບຢັ້ງຢືນ SSL (SSL certificate management)
- ການລຶບໂດເມນເມື່ອມີການລຶບການຈັບຄູ່ (Domain removal when mappings are deleted)

## ຂໍ້ກຳນົດ
ຄ່າຕ່າງໆຕໍ່ໄປນີ້ຕ້ອງຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ຄຳແນະນຳການຕັ້ງຄ່າ

### 1. ດຶງຂໍ້ມູນ API ຂອງທ່ານຈາກ RunCloud

1. ເຂົ້າສູ່ລະບົບ dashboard ຂອງ RunCloud ຂອງທ່ານ
2. ໄປທີ່ "User Profile" (ກົດໃສ່ຮູບໂປຣໄຟລ໌ຂອງທ່ານຢູ່ມຸມຂວາເທິງ)
3. ເລືອກ "API" ຈາກເມນູ
4. ກົດ "Generate API Key" (ສ້າງ API Key) ຖ້າທ່ານຍັງບໍ່ທັນມີ
5. ຄັດລອກ API Key ແລະ API Secret ຂອງທ່ານ

### 2. ດຶງ Server ID ແລະ App ID ຂອງທ່ານ

1. ໃນ dashboard ຂອງ RunCloud, ໄປທີ່ "Servers"
2. ເລືອກເຊີເວີທີ່ໂຮດ WordPress multisite ຂອງທ່ານຢູ່
3. Server ID ສາມາດເຫັນໄດ້ໃນ URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. ໄປທີ່ "Web Applications" ແລະ ເລືອກ application WordPress ຂອງທ່ານ
5. App ID ສາມາດເຫັນໄດ້ໃນ URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. ເພີ່ມຄ່າຕ່າງໆເຂົ້າໃນ wp-config.php

ເພີ່ມຄ່າຕ່າງໆຕໍ່ໄປນີ້ເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration)

1. ในแอดมินของ WordPress ของคุณ ให้ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping" (การจับคู่โดเมน)
3. เลื่อนลงมาที่ "Host Integrations" (การเชื่อมต่อโฮสต์)
4. เปิดใช้งานการเชื่อมต่อ RunCloud
5. คลิก "Save Changes" (บันทึกการเปลี่ยนแปลง)

## มันทำงานอย่างไร

เมื่อมีการจับคู่โดเมนใน Ultimate Multisite:

1. การเชื่อมต่อจะส่งคำขอไปยัง API ของ RunCloud เพื่อเพิ่มโดเมนของคุณเข้ากับแอปพลิเคชัน
2. หากเพิ่มโดเมนสำเร็จ การเชื่อมต่อก็จะทำการติดตั้งใบรับรอง SSL ใหม่ด้วย
3. เมื่อมีการลบการจับคู่โดเมน การเชื่อมต่อก็จะนำโดเมนนั้นออกจาก RunCloud

สำหรับการติดตั้งซับโดเมน (subdomain) การเชื่อมต่อจะจัดการสร้างซับโดเมนใน RunCloud โดยอัตโนมัติเมื่อมีการเพิ่มเว็บไซต์ใหม่เข้ากับเครือข่ายของคุณ

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่าข้อมูลรับรอง API ของคุณถูกต้องหรือไม่
- ตรวจสอบว่า Server ID และ App ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี RunCloud ของคุณมีสิทธิ์ที่จำเป็น

### ปัญหาใบรับรอง SSL
- RunCloud อาจใช้เวลาในการออกใบรับรอง SSL สักครู่
- ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
- ตรวจสอบการตั้งค่า SSL ของ RunCloud สำหรับแอปพลิเคชันของคุณ

### โดเมนไม่ถูกเพิ่ม
- ตรวจสอบบันทึก (logs) ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ตรวจสอบว่าโดเมนนั้นไม่ได้ถูกเพิ่มใน RunCloud แล้วหรือไม่
- ตรวจสอบให้แน่ใจว่าแผนของ RunCloud ของคุณรองรับหลายโดเมน
