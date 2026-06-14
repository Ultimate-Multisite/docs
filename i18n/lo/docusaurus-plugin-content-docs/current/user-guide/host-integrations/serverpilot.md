---
title: ການເຊື່ອມຕໍ່ ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# การเชื่อมต่อกับ ServerPilot

## ภาพรวม
ServerPilot เป็นบริการคลาวด์สำหรับโฮสต์เว็บไซต์ WordPress และเว็บไซต์ PHP อื่นๆ บนเซิร์ฟเวอร์จาก DigitalOcean, Amazon, Google หรือผู้ให้บริการเซิร์ฟเวอร์อื่นๆ การเชื่อมต่อนี้นำไปสู่การซิงค์โดเมนอัตโนมัติและการจัดการใบรับรอง SSL ระหว่าง Ultimate Multisite กับ ServerPilot

## คุณสมบัติ
- ซิงค์โดเมนอัตโนมัติ
- การจัดการใบรับรอง SSL ด้วย Let's Encrypt
- การต่ออายุ SSL อัตโนมัติ

## ข้อกำหนดเบื้องต้น
คุณต้องกำหนดค่าคงที่ (constants) ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## คำแนะนำในการตั้งค่า

### 1. รับข้อมูล API ของ ServerPilot ของคุณ

1. เข้าสู่ระบบแดชบอร์ดของ ServerPilot
2. ไปที่ "Account" > "API"
3. สร้าง API key ใหม่หากคุณยังไม่มี
4. คัดลอก Client ID และ API Key ของคุณ

### 2. รับ App ID ของคุณ

1. ในแดชบอร์ดของ ServerPilot ให้ไปที่ "Apps"
2. เลือกแอปที่คุณโฮสต์ WordPress multisite ของคุณไว้
3. App ID จะแสดงอยู่ใน URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. เพิ่มค่าคงที่ใน wp-config.php

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. เปิดใช้งานการเชื่อมต่อ

1. ในแอดมินของ WordPress ให้ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงมาที่ "Host Integrations"
4. เปิดใช้งานการเชื่อมต่อ ServerPilot
5. คลิก "Save Changes"

## มันทำงานอย่างไร

### การซิงค์โดเมน

เมื่อมีการแมปโดเมนใน Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະດຶງລາຍຊື່ໂດເມນປັດຈຸບັນມາຈາກ ServerPilot
2. ມັນຈະເພີ່ມໂດເມນໃໝ່ເຂົ້າໃນລາຍຊື່ (ພ້ອມກັບເວີຊັນ www ຖ້າມີ)
3. ມັນຈະສົ່ງລາຍຊື່ທີ່ອັບເດດແລ້ວໄປຫາ ServerPilot ຜ່ານ API
4. ServerPilot ຈະອັບເດດລາຍຊື່ໂດເມນສຳລັບແອັບຂອງທ່ານ

### ການຈັດການໃບຢັ້ງຢືນ SSL (SSL Certificate Management)

ຫຼັງຈາກທີ່ໂດເມນຖືກซิงค์ແລ້ວ:

1. ການເຊື່ອມຕໍ່ນີ້ຈະເປີດໃຊ້ AutoSSL ໃຫ້ກັບແອັບຂອງທ່ານໂດຍອັດຕະໂນມັດ
2. ServerPilot ຈະຈັດການການອອກ ແລະ ຕິດຕັ້ງໃບຢັ້ງຢືນ SSL ໂດຍໃຊ້ Let's Encrypt
3. ServerPilot ຍັງຈັດການການຕໍ່ອາຍຸໃໝ່ຂອງໃບຢັ້ງຢືນ SSL ອັດຕະໂນມັດໃຫ້ອີກດ້ວຍ

## ການກວດສອບໃບຢັ້ງຢືນ SSL (SSL Certificate Verification)

ການເຊື່ອມຕໍ່ນີ້ຖືກຕັ້ງຄ່າເພື່ອເພີ່ມຈຳນວນຄັ້ງໃນການກວດສອບໃບຢັ້ງຢືນ SSL ສຳລັບ ServerPilot ເພາະວ່າອາດຈະໃຊ້ເວລາໃນການອອກ ແລະ ຕິດຕັ້ງໃບຢັ້ງຢືນ SSL. ໂດຍປົກກະຕິແລ້ວ, ມັນຈະພະຍາຍາມເຖິງ 5 ຄັ້ງ, ແຕ່ສາມາດປັບໄດ້ໂດຍໃຊ້ filters.

## ການແກ້ໄຂບັນຫາ (Troubleshooting)

### ปัญหาການເຊື່ອມຕໍ່ API (API Connection Issues)
- ກວດສອບວ່າ Client ID ແລະ API Key ຂອງທ່ານຖືກຕ້ອງບໍ່
- ກວດສອບວ່າ App ID ຂອງທ່ານຖືກຕ້ອງບໍ່
- ຮັບປະກັນວ່າບັນຊີ ServerPilot ຂອງທ່ານມີສິດທີ່ຈຳເປັນ

### ปัญหาໃບຢັ້ງຢືນ SSL (SSL Certificate Issues)
- ServerPilot ຮຽກຮ້ອງໃຫ້ໂດເມນມີ DNS records ທີ່ຖືກຕ້ອງຊີ້ໄປຫາ server ຂອງທ່ານກ່ອນທີ່ຈະອອກໃບຢັ້ງຢືນ SSL
- ຖ້າບໍ່ໄດ້ອອກໃບຢັ້ງຢືນ SSL, ກວດສອບວ່າໂດເມນຂອງທ່ານຊີ້ໄປຫາ IP address ຂອງ server ທ່ານຢ່າງຖືກຕ້ອງແລ້ວບໍ່
- ອາດຈະໃຊ້ເວລາໃນການອອກ ແລະ ຕິດຕັ້ງໃບຢັ້ງຢືນ SSL (ປົກກະຕິແມ່ນ 5-15 ນາທີ)

### ໂດເມນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໄປ (Domain Not Added)
- ກວດສອບ logs ຂອງ Ultimate Multisite ເພື່ອຫາຂໍ້ຄວາມຜິດພາດໃດໆ
- ກວດສອບວ່າໂດເມນນັ້ນບໍ່ໄດ້ຖືກເພີ່ມເຂົ້າໃນ ServerPilot ແລ້ວບໍ່
- ຮັບປະກັນວ່າแผน (plan) ຂອງທ່ານໃນ ServerPilot ຮອງຮັບຈຳນວນໂດເມນທີ່ທ່ານກຳລັງເພີ່ມເຂົ້າໄປ

### การลบโดเมน (Domain Removal)
- ปัจจุบัน API ของ ServerPilot ยังไม่มีวิธีให้เราสามารถลบโดเมนแต่ละตัวออกไปได้โดยตรง
- เมื่อคุณลบการจับคู่โดเมน (domain mapping) ใน Ultimate Multisite ระบบจะทำการอัปเดตรายการโดเมนใน ServerPilot ให้ไม่รวมโดเมนที่ถูกลบออกไป
