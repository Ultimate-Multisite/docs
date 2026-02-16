---
title: การรวม GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# การผสานการทำงานกับ GridPane

## ภาพรวม
GridPane เป็นแผงควบคุมโฮสติ้ง WordPress ที่ออกแบบมาโดยเฉพาะสำหรับผู้เชี่ยวชาญด้าน WordPress การผสานการทำงานนี้ช่วยให้สามารถซิงค์โดเมนและจัดการใบรับรอง SSL โดยอัตโนมัติระหว่าง Ultimate Multisite และ GridPane

## คุณสมบัติ
- ซิงค์โดเมนโดยอัตโนมัติ
- จัดการใบรับรอง SSL
- ตั้งค่าค่าคงที่ SUNRISE โดยอัตโนมัติ

## ข้อกำหนด
คุณต้องกำหนดค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## ขั้นตอนการตั้งค่า

### 1. รับข้อมูลประจำตัว API ของ GridPane

1. เข้าสู่ระบบ dashboard ของ GridPane
2. ไปที่ "Settings" > "API"
3. สร้าง API key หากคุณยังไม่มี
4. คัดลอก API key ของคุณ

### 2. รับ Server ID และ Site ID

1. ใน dashboard ของ GridPane ไปที่ "Servers"
2. เลือกเซิร์ฟเวอร์ที่โฮสต์ WordPress multisite ของคุณ
3. จด Server ID (ดูได้จาก URL หรือหน้ารายละเอียดเซิร์ฟเวอร์)
4. ไปที่ "Sites" และเลือกเว็บไซต์ WordPress ของคุณ
5. จด Site ID (ดูได้จาก URL หรือหน้ารายละเอียดเว็บไซต์)

### 3. เพิ่มค่าคงที่ใน wp-config.php

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. เปิดใช้งานการผสานการทำงาน

1. ในหน้าผู้ดูแลระบบ WordPress ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการผสานการทำงานกับ GridPane
5. คลิก "Save Changes"

## วิธีการทำงาน

เมื่อมีการแมปโดเมนใน Ultimate Multisite:

1. ระบบจะส่งคำขอไปยัง API ของ GridPane เพื่อเพิ่มโดเมนลงในเว็บไซต์ของคุณ
2. GridPane จะจัดการออกใบรับรอง SSL โดยอัตโนมัติ
3. เมื่อลบการแมปโดเมน ระบบจะลบโดเมนออกจาก GridPane

การผสานการทำงานนี้ยังจัดการค่าคงที่ SUNRISE ในไฟล์ wp-config.php โดยอัตโนมัติ ซึ่งจำเป็นสำหรับการแมปโดเมนให้ทำงานได้อย่างถูกต้อง

## การจัดการค่าคงที่ SUNRISE

คุณสมบัติพิเศษของการผสานการทำงานกับ GridPane คือระบบจะคืนค่าค่าคงที่ SUNRISE ใน wp-config.php โดยอัตโนมัติ เพื่อป้องกันความขัดแย้งกับระบบแมปโดเมนของ GridPane เอง วิธีนี้ทำให้ทั้งสองระบบทำงานร่วมกันได้โดยไม่มีปัญหา

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่า API key ของคุณถูกต้อง
- ตรวจสอบว่า server ID และ site ID ถูกต้อง
- ตรวจสอบว่าบัญชี GridPane ของคุณมีสิทธิ์ที่จำเป็น

### ปัญหาใบรับรอง SSL
- GridPane อาจใช้เวลาสักครู่ในการออกใบรับรอง SSL
- ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้อง
- ตรวจสอบการตั้งค่า SSL ของ GridPane สำหรับเว็บไซต์ของคุณ

### โดเมนไม่ถูกเพิ่ม
- ตรวจสอบบันทึกของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่าโดเมนยังไม่ได้ถูกเพิ่มใน GridPane อยู่แล้ว
- ตรวจสอบว่าระเบียน DNS ของโดเมนได้รับการตั้งค่าอย่างถูกต้อง
