---
title: การเชื่อมต่อ ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# การผสานการทำงานกับ ServerPilot

## ภาพรวม {#overview}
ServerPilot เป็นบริการคลาวด์สำหรับโฮสต์เว็บไซต์ WordPress และเว็บไซต์ PHP อื่นๆ บนเซิร์ฟเวอร์ของ DigitalOcean, Amazon, Google หรือผู้ให้บริการเซิร์ฟเวอร์รายอื่นๆ การผสานการทำงานนี้ช่วยให้สามารถซิงค์โดเมนและจัดการใบรับรอง SSL ระหว่าง Ultimate Multisite และ ServerPilot ได้โดยอัตโนมัติ

## คุณสมบัติ {#features}
- ซิงค์โดเมนอัตโนมัติ
- จัดการใบรับรอง SSL ด้วย Let's Encrypt
- ต่ออายุ SSL อัตโนมัติ

## ข้อกำหนดเบื้องต้น {#requirements}
ต้องกำหนดค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ขั้นตอนการตั้งค่า {#setup-instructions}

### 1. รับข้อมูลประจำตัว API ของ ServerPilot {#1-get-your-serverpilot-api-credentials}

1. เข้าสู่ระบบ dashboard ของ ServerPilot
2. ไปที่ "Account" > "API"
3. สร้าง API key ใหม่หากยังไม่มี
4. คัดลอก Client ID และ API Key ของคุณ

### 2. รับ App ID ของคุณ {#2-get-your-app-id}

1. ใน dashboard ของ ServerPilot ให้ไปที่ "Apps"
2. เลือกแอปที่โฮสต์ WordPress multisite ของคุณ
3. App ID จะแสดงอยู่ใน URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. เพิ่มค่าคงที่ใน wp-config.php {#3-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. เปิดใช้งานการผสานการทำงาน {#4-enable-the-integration}

1. ในหน้าผู้ดูแล WordPress ให้ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการผสานการทำงานกับ ServerPilot
5. คลิก "Save Changes"

## วิธีการทำงาน {#how-it-works}

### การซิงค์โดเมน {#domain-syncing}

เมื่อมีการ map โดเมนใน Ultimate Multisite:

1. ระบบจะดึงรายชื่อโดเมนปัจจุบันจาก ServerPilot
2. ระบบจะเพิ่มโดเมนใหม่ลงในรายการ (พร้อมกับเวอร์ชัน www หากมี)
3. ระบบจะส่งรายการที่อัปเดตไปยัง ServerPilot ผ่าน API
4. ServerPilot จะอัปเดตรายชื่อโดเมนสำหรับแอปพลิเคชันของคุณ

### การจัดการใบรับรอง SSL {#ssl-certificate-management}

หลังจากซิงค์โดเมนแล้ว:

1. ระบบจะเปิดใช้งาน AutoSSL สำหรับแอปพลิเคชันของคุณโดยอัตโนมัติ
2. ServerPilot จะดำเนินการออกและติดตั้งใบรับรอง SSL โดยใช้ Let's Encrypt
3. ServerPilot ยังดำเนินการต่ออายุใบรับรอง SSL โดยอัตโนมัติด้วย

## การตรวจสอบใบรับรอง SSL {#ssl-certificate-verification}

ระบบได้ถูกตั้งค่าให้เพิ่มจำนวนครั้งในการพยายามตรวจสอบใบรับรอง SSL สำหรับ ServerPilot เนื่องจาก ServerPilot อาจใช้เวลาสักพักในการออกและติดตั้งใบรับรอง SSL โดยค่าเริ่มต้น ระบบจะพยายามสูงสุด 5 ครั้ง แต่สามารถปรับได้โดยใช้ filter

## การแก้ไขปัญหา {#troubleshooting}

### ปัญหาการเชื่อมต่อ API {#api-connection-issues}
- ตรวจสอบว่า Client ID และ API Key ถูกต้อง
- ตรวจสอบว่า App ID ถูกต้อง
- ตรวจสอบว่าบัญชี ServerPilot ของคุณมีสิทธิ์ที่จำเป็น

### ปัญหาใบรับรอง SSL {#ssl-certificate-issues}
- ServerPilot กำหนดให้โดเมนต้องมีระเบียน DNS ที่ถูกต้องชี้ไปยังเซิร์ฟเวอร์ของคุณก่อนที่จะออกใบรับรอง SSL
- หากใบรับรอง SSL ไม่ถูกออก ให้ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้อง
- อาจใช้เวลาสักพักเพื่อให้ ServerPilot ออกและติดตั้งใบรับรอง SSL (โดยปกติ 5-15 นาที)

### โดเมนไม่ถูกเพิ่ม {#domain-not-added}
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่าโดเมนยังไม่ได้ถูกเพิ่มใน ServerPilot
- ตรวจสอบว่าแพ็กเกจ ServerPilot ของคุณรองรับจำนวนโดเมนที่คุณกำลังเพิ่ม

### การลบโดเมน {#domain-removal}
- ปัจจุบัน API ของ ServerPilot ไม่มีวิธีการลบโดเมนแต่ละรายการ
- เมื่อมีการลบการ map โดเมนใน Ultimate Multisite ระบบจะอัปเดตรายชื่อโดเมนใน ServerPilot โดยไม่รวมโดเมนที่ถูกลบ
