---
title: Cloudways Integration
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# การเชื่อมต่อ Cloudways

## ภาพรวม
Cloudways คือแพลตฟอร์ม managed cloud hosting ที่ช่วยให้คุณ deploy เว็บไซต์ WordPress บนผู้ให้บริการ cloud ต่างๆ เช่น DigitalOcean, AWS, Google Cloud และอื่นๆ การเชื่อมต่อนี้ช่วยให้สามารถซิงค์โดเมนอัตโนมัติและจัดการ SSL certificate ระหว่าง Ultimate Multisite และ Cloudways ได้

## คุณสมบัติ
- ซิงค์โดเมนอัตโนมัติ
- จัดการ SSL certificate
- รองรับโดเมนเพิ่มเติม
- ตรวจสอบ DNS สำหรับ SSL certificate

## ข้อกำหนดเบื้องต้น
คุณต้องกำหนด constants ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

นอกจากนี้ คุณยังสามารถกำหนดเพิ่มเติมได้:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## ขั้นตอนการตั้งค่า

### 1. รับข้อมูล API Credentials ของ Cloudways

1. เข้าสู่ระบบ dashboard ของ Cloudways
2. ไปที่ "Account" > "API Keys"
3. สร้าง API key หากคุณยังไม่มี
4. คัดลอกอีเมลและ API key ของคุณ

### 2. รับ Server ID และ Application ID

1. ใน dashboard ของ Cloudways ให้ไปที่ "Servers"
2. เลือกเซิร์ฟเวอร์ที่โฮสต์ WordPress multisite ของคุณ
3. Server ID จะปรากฏใน URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. ไปที่ "Applications" และเลือก WordPress application ของคุณ
5. App ID จะปรากฏใน URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. เพิ่ม Constants ใน wp-config.php

เพิ่ม constants ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

หากคุณมีโดเมนเพิ่มเติมที่ต้องการรวมไว้เสมอ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. เปิดใช้งานการเชื่อมต่อ

1. ในหน้า WordPress admin ให้ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการเชื่อมต่อ Cloudways
5. คลิก "Save Changes"

## วิธีการทำงาน

### การซิงค์โดเมน

เมื่อโดเมนถูก map ใน Ultimate Multisite:

1. ระบบจะดึงโดเมนทั้งหมดที่ถูก map ไว้ในปัจจุบัน
2. เพิ่มโดเมนใหม่เข้าไปในรายการ (รวมถึงเวอร์ชัน www หากมี)
3. ส่งรายการทั้งหมดไปยัง Cloudways ผ่าน API
4. Cloudways จะอัปเดต domain aliases สำหรับ application ของคุณ

หมายเหตุ: Cloudways API ต้องการให้ส่งรายการโดเมนทั้งหมดในแต่ละครั้ง ไม่ใช่แค่เพิ่มหรือลบโดเมนทีละรายการ

### การจัดการ SSL Certificate

หลังจากซิงค์โดเมนแล้ว:

1. ระบบจะตรวจสอบว่าโดเมนใดมี DNS record ที่ถูกต้องชี้มายังเซิร์ฟเวอร์ของคุณ
2. ส่งคำขอไปยัง Cloudways เพื่อติดตั้ง SSL certificate จาก Let's Encrypt สำหรับโดเมนเหล่านั้น
3. Cloudways จะจัดการการออกและติดตั้ง SSL certificate

## โดเมนเพิ่มเติม

constant `WU_CLOUDWAYS_EXTRA_DOMAINS` ช่วยให้คุณระบุโดเมนเพิ่มเติมที่ควรรวมไว้เสมอเมื่อซิงค์กับ Cloudways ซึ่งมีประโยชน์สำหรับ:

- โดเมนที่ไม่ได้จัดการโดย Ultimate Multisite
- Wildcard domains (เช่น `*.example.com`)
- โดเมนสำหรับ development หรือ staging

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่าอีเมลและ API key ของคุณถูกต้อง
- ตรวจสอบว่า server ID และ application ID ถูกต้อง
- ตรวจสอบว่าบัญชี Cloudways ของคุณมีสิทธิ์ที่จำเป็น

### ปัญหา SSL Certificate
- Cloudways ต้องการให้โดเมนมี DNS record ที่ถูกต้องชี้มายังเซิร์ฟเวอร์ของคุณก่อนจึงจะออก SSL certificate ได้
- ระบบจะตรวจสอบ DNS record ก่อนขอ SSL certificate
- หาก SSL certificate ไม่ได้ถูกออก ให้ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้อง

### ไม่สามารถเพิ่มโดเมนได้
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่าโดเมนยังไม่ได้ถูกเพิ่มใน Cloudways อยู่แล้ว
- ตรวจสอบว่าแพ็กเกจ Cloudways ของคุณรองรับจำนวนโดเมนที่คุณกำลังเพิ่ม
