---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# การผสานการทำงานกับ RunCloud

## ภาพรวม
RunCloud เป็นแพลตฟอร์มจัดการเซิร์ฟเวอร์บนคลาวด์ที่ช่วยให้คุณติดตั้งและจัดการเว็บแอปพลิเคชันบนเซิร์ฟเวอร์คลาวด์ของคุณเองได้อย่างง่ายดาย การผสานการทำงานนี้ช่วยให้สามารถซิงค์โดเมนและจัดการใบรับรอง SSL ระหว่าง Ultimate Multisite และ RunCloud ได้โดยอัตโนมัติ

## คุณสมบัติ
- ซิงค์โดเมนอัตโนมัติ
- จัดการใบรับรอง SSL
- ลบโดเมนเมื่อการแมปถูกลบ

## ความต้องการเบื้องต้น
จำเป็นต้องกำหนด constant ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ขั้นตอนการตั้งค่า

### 1. รับข้อมูลรับรอง API ของ RunCloud

1. เข้าสู่ระบบ dashboard ของ RunCloud
2. ไปที่ "User Profile" (คลิกที่รูปโปรไฟล์ของคุณที่มุมขวาบน)
3. เลือก "API" จากเมนู
4. คลิก "Generate API Key" หากคุณยังไม่มี
5. คัดลอก API Key และ API Secret ของคุณ

### 2. รับ Server ID และ App ID

1. ใน dashboard ของ RunCloud ไปที่ "Servers"
2. เลือกเซิร์ฟเวอร์ที่โฮสต์ WordPress multisite ของคุณ
3. Server ID จะปรากฏใน URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. ไปที่ "Web Applications" และเลือกแอปพลิเคชัน WordPress ของคุณ
5. App ID จะปรากฏใน URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. เพิ่ม Constant ลงใน wp-config.php

เพิ่ม constant ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. เปิดใช้งานการผสานการทำงาน

1. ในหน้าผู้ดูแลระบบ WordPress ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการผสานการทำงานกับ RunCloud
5. คลิก "Save Changes"

## วิธีการทำงาน

เมื่อโดเมนถูกแมปใน Ultimate Multisite:

1. ระบบจะส่งคำขอไปยัง API ของ RunCloud เพื่อเพิ่มโดเมนลงในแอปพลิเคชันของคุณ
2. หากเพิ่มโดเมนสำเร็จ ระบบจะทำการ redeploy ใบรับรอง SSL ด้วย
3. เมื่อการแมปโดเมนถูกลบ ระบบจะลบโดเมนออกจาก RunCloud

สำหรับการติดตั้งแบบ subdomain ระบบจะจัดการสร้าง subdomain ใน RunCloud โดยอัตโนมัติเมื่อมีการเพิ่มเว็บไซต์ใหม่ลงในเครือข่ายของคุณ

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่าข้อมูลรับรอง API ของคุณถูกต้อง
- ตรวจสอบว่า server ID และ app ID ถูกต้อง
- ตรวจสอบว่าบัญชี RunCloud ของคุณมีสิทธิ์ที่จำเป็น

### ปัญหาใบรับรอง SSL
- RunCloud อาจใช้เวลาสักครู่ในการออกใบรับรอง SSL
- ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้อง
- ตรวจสอบการตั้งค่า SSL ของ RunCloud สำหรับแอปพลิเคชันของคุณ

### โดเมนไม่ถูกเพิ่ม
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่าโดเมนยังไม่ได้ถูกเพิ่มใน RunCloud อยู่แล้ว
- ตรวจสอบว่าแผน RunCloud ของคุณรองรับหลายโดเมน
