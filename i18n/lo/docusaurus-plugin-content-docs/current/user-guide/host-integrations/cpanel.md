---
title: ການເຊື່ອມຕໍ່ cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# การเชื่อมต่อกับ cPanel

## ภาพรวม
cPanel เป็นหนึ่งในแผงควบคุมโฮสติ้งเว็บที่ได้รับความนิยมมากที่สุด ซึ่งถูกใช้โดยผู้ให้บริการโฮสติ้งแบบแชร์และแบบเฉพาะทางหลายราย การเชื่อมต่อนี้ช่วยให้การซิงค์โดเมนระหว่าง Ultimate Multisite และ cPanel เป็นไปโดยอัตโนมัติ ทำให้คุณสามารถเพิ่มชื่อแทนโดเมน (domain aliases) และ subdomain เข้าไปในบัญชี cPanel ของคุณได้โดยอัตโนมัติ

## คุณสมบัติ
- สร้าง addon domain ใน cPanel โดยอัตโนมัติ
- สร้าง subdomain ใน cPanel โดยอัตโนมัติ (สำหรับการติดตั้งแบบ subdomain multisite)
- ลบโดเมนเมื่อมีการลบการแมป (mappings) ออกไป

## ข้อกำหนดเบื้องต้น
คุณต้องกำหนดค่าคงที่ (constants) ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

โดยทางเลือก คุณสามารถกำหนดค่าเพิ่มเติมได้ดังนี้:

```php
define('WU_CPANEL_PORT', 2083); // ค่าเริ่มต้นคือ 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ค่าเริ่มต้นคือ /public_html
```

## วิธีการตั้งค่า

### 1. รับข้อมูลประจำตัว cPanel ของคุณ

1. รับชื่อผู้ใช้ (username) และรหัสผ่าน (password) ของ cPanel จากผู้ให้บริการโฮสติ้งของคุณ
2. ตรวจสอบที่อยู่ host ของ cPanel ของคุณ (โดยปกติจะเป็น `cpanel.yourdomain.com` หรือ `yourdomain.com:2083`)

### 2. เพิ่มค่าคงที่ใน wp-config.php

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

โดยทางเลือก คุณสามารถปรับแต่งพอร์ตและไดเรกทอรีหลัก (root directory) ได้:

```php
define('WU_CPANEL_PORT', 2083); // เปลี่ยนถ้า cPanel ของคุณใช้พอร์ตอื่น
define('WU_CPANEL_ROOT_DIR', '/public_html'); // เปลี่ยนถ้า root directory ของเอกสารของคุณแตกต่างออกไป
```

### 3. เปิดใช้งานการเชื่อมต่อ

1. ໃນ WordPress admin ຂອງທ່ານ, ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping" (การจับคู่โดเมน)
3. เลื่อนลงไปที่ "Host Integrations" (การเชื่อมต่อโฮสต์)
4. เปิดใช้งานการเชื่อมต่อ cPanel
5. คลิก "Save Changes" (บันทึกการเปลี่ยนแปลง)

## มันทำงานอย่างไร

### Addon Domains (โดเมนเสริม)

เมื่อมีการจับคู่โดเมนใน Ultimate Multisite:

1. การเชื่อมต่อจะส่งคำขอไปยัง API ของ cPanel เพื่อเพิ่มโดเมนนั้นเป็นโดเมนเสริม
2. โดเมนจะถูกตั้งค่าให้ชี้ไปยังไดเรกทอรีหลัก (root directory) ของคุณ
3. เมื่อมีการลบการจับคู่โดเมนออก การเชื่อมต่อก็จะทำการลบโดเมนเสริมออกจาก cPanel

### Subdomains (โดเมนย่อย)

สำหรับการติดตั้งแบบ subdomain multisite เมื่อมีการสร้างเว็บไซต์ใหม่:

1. การเชื่อมต่อจะดึงส่วนของ subdomain ออกจากชื่อโดเมนเต็ม
2. มันจะส่งคำขอไปยัง API ของ cPanel เพื่อเพิ่ม subdomain นั้น
3. โดเมนย่อยจะถูกตั้งค่าให้ชี้ไปยังไดเรกทอรีหลัก (root directory) ของคุณ

## ข้อควรระวังที่สำคัญ

- การเชื่อมต่อนี้ใช้ API2 ของ cPanel ในการสื่อสารกับบัญชี cPanel ของคุณ
- บัญชี cPanel ของคุณต้องมีสิทธิ์ในการเพิ่มโดเมนเสริมและ subdomain
- ผู้ให้บริการโฮสติ้งบางรายอาจจำกัดจำนวนโดเมนเสริมหรือ subdomain ที่คุณสามารถสร้างได้
- การเชื่อมต่อนี้ไม่ได้จัดการการตั้งค่า DNS คุณยังคงต้องชี้โดเมนของคุณไปยัง IP address ของเซิร์ฟเวอร์

## การแก้ไขปัญหา (Troubleshooting)

### ปัญหาการเชื่อมต่อ API (API Connection Issues)
- ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่าน cPanel ของคุณถูกต้องหรือไม่
- ตรวจสอบว่าโฮสต์ cPanel ของคุณถูกต้องและเข้าถึงได้หรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี cPanel ของคุณมีสิทธิ์ที่จำเป็น
- ลองใช้ URL เต็มสำหรับโฮสต์ (เช่น `https://cpanel.yourdomain.com`)

### โดเมนไม่ถูกเพิ่ม (Domain Not Added)
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความผิดพลาดใดๆ
- ยืนยันว่าโดเมนนั้นยังไม่ได้ถูกเพิ่มใน cPanel อยู่แล้ว
- ตรวจสอบให้แน่ใจว่าบัญชี cPanel ของคุณยังไม่ถึงขีดจำกัดสำหรับโดเมนเสริมหรือ subdomain

### ปัญหาเกี่ยวกับใบรับรอง SSL (SSL Certificate Issues)
- การเชื่อมต่อนี้ไม่ได้จัดการเรื่องการออกใบรับรอง SSL เอง
- คุณจะต้องใช้เครื่องมือ SSL/TLS ของ cPanel หรือฟีเจอร์ AutoSSL เพื่อขอใบรับรอง SSL สำหรับโดเมนของคุณ
- อีกทางเลือกหนึ่ง คุณสามารถใช้บริการอย่าง Let's Encrypt ร่วมกับ AutoSSL ของ cPanel ได้
