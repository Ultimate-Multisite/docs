---
title: การผสานรวม cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# การผสานรวม cPanel

## ภาพรวม
cPanel เป็นหนึ่งในแผงควบคุมเว็บโฮสติ้งที่ได้รับความนิยมมากที่สุด ซึ่งผู้ให้บริการโฮสติ้งแบบแชร์และแบบเฉพาะจำนวนมากใช้งานกัน การผสานรวมนี้ช่วยให้สามารถซิงค์โดเมนระหว่าง Ultimate Multisite และ cPanel ได้โดยอัตโนมัติ ทำให้คุณสามารถเพิ่ม domain alias และ subdomain ไปยังบัญชี cPanel ของคุณได้อัตโนมัติ

## ฟีเจอร์
- สร้าง addon domain ใน cPanel โดยอัตโนมัติ
- สร้าง subdomain ใน cPanel โดยอัตโนมัติ (สำหรับการติดตั้ง multisite แบบ subdomain)
- ลบโดเมนเมื่อมีการลบ mapping

## ข้อกำหนดเบื้องต้น
คุณต้องกำหนด constant ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

นอกจากนี้ คุณยังสามารถกำหนดค่าเพิ่มเติมได้ (ไม่บังคับ):

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## คำแนะนำการตั้งค่า

### 1. รับข้อมูลรับรอง cPanel ของคุณ

1. ขอ username และ password สำหรับ cPanel จากผู้ให้บริการโฮสติ้งของคุณ
2. ระบุ host ของ cPanel (โดยปกติจะเป็น `cpanel.yourdomain.com` หรือ `yourdomain.com:2083`)

### 2. เพิ่ม Constant ลงใน wp-config.php

เพิ่ม constant ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

นอกจากนี้ คุณยังสามารถปรับแต่ง port และ root directory ได้ (ไม่บังคับ):

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. เปิดใช้งานการผสานรวม

1. ในหน้าผู้ดูแลระบบ WordPress ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการผสานรวม cPanel
5. คลิก "Save Changes"

## วิธีการทำงาน

### Addon Domain

เมื่อมีการ map โดเมนใน Ultimate Multisite:

1. การผสานรวมจะส่งคำขอไปยัง API ของ cPanel เพื่อเพิ่มโดเมนเป็น addon domain
2. โดเมนจะถูกตั้งค่าให้ชี้ไปยัง root directory ของคุณ
3. เมื่อมีการลบ domain mapping การผสานรวมจะลบ addon domain ออกจาก cPanel

### Subdomain

สำหรับการติดตั้ง multisite แบบ subdomain เมื่อมีการสร้างไซต์ใหม่:

1. การผสานรวมจะแยกส่วน subdomain ออกจากโดเมนแบบเต็ม
2. ส่งคำขอไปยัง API ของ cPanel เพื่อเพิ่ม subdomain
3. subdomain จะถูกตั้งค่าให้ชี้ไปยัง root directory ของคุณ

## หมายเหตุสำคัญ

- การผสานรวมนี้ใช้ API2 ของ cPanel เพื่อสื่อสารกับบัญชี cPanel ของคุณ
- บัญชี cPanel ของคุณต้องมีสิทธิ์ในการเพิ่ม addon domain และ subdomain
- ผู้ให้บริการโฮสติ้งบางรายอาจจำกัดจำนวน addon domain หรือ subdomain ที่คุณสามารถสร้างได้
- การผสานรวมนี้ไม่ได้จัดการการตั้งค่า DNS คุณยังคงต้องชี้โดเมนของคุณไปยัง IP address ของเซิร์ฟเวอร์ด้วยตัวเอง

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่า username และ password ของ cPanel ถูกต้อง
- ตรวจสอบว่า host ของ cPanel ถูกต้องและสามารถเข้าถึงได้
- ตรวจสอบให้แน่ใจว่าบัญชี cPanel ของคุณมีสิทธิ์ที่จำเป็น
- ลองใช้ URL แบบเต็มสำหรับ host (เช่น `https://cpanel.yourdomain.com`)

### โดเมนไม่ถูกเพิ่ม
- ตรวจสอบ log ของ Ultimate Multisite สำหรับข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่าโดเมนนั้นยังไม่ได้ถูกเพิ่มลงใน cPanel อยู่แล้ว
- ตรวจสอบให้แน่ใจว่าบัญชี cPanel ของคุณยังไม่ถึงขีดจำกัดของ addon domain หรือ subdomain

### ปัญหาใบรับรอง SSL
- การผสานรวมนี้ไม่ได้จัดการการออกใบรับรอง SSL
- คุณจะต้องใช้เครื่องมือ SSL/TLS ของ cPanel หรือฟีเจอร์ AutoSSL เพื่อออกใบรับรอง SSL สำหรับโดเมนของคุณ
- หรือคุณสามารถใช้บริการเช่น Let's Encrypt ร่วมกับ AutoSSL ของ cPanel
