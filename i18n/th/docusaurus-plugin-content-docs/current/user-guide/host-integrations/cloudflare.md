---
title: Cloudflare Integration
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# การเชื่อมต่อกับ Cloudflare

## ภาพรวม
Cloudflare เป็นผู้ให้บริการ Content Delivery Network (CDN) และระบบรักษาความปลอดภัยชั้นนำ ที่ช่วยปกป้องและเร่งความเร็วเว็บไซต์ การเชื่อมต่อนี้ช่วยให้คุณจัดการโดเมนอัตโนมัติระหว่าง Ultimate Multisite และ Cloudflare โดยเฉพาะสำหรับการติดตั้ง multisite แบบ subdomain

## คุณสมบัติ
- สร้าง subdomain ใน Cloudflare โดยอัตโนมัติ
- รองรับ subdomain แบบ proxied
- จัดการ DNS record
- แสดงผล DNS record ที่ปรับปรุงแล้วในหน้าผู้ดูแลระบบของ Ultimate Multisite

## ความต้องการของระบบ
คุณต้องกำหนดค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## วิธีการตั้งค่า

### 1. รับ API Key ของ Cloudflare

1. เข้าสู่ระบบ dashboard ของ Cloudflare
2. ไปที่ "My Profile" (คลิกที่อีเมลของคุณที่มุมขวาบน)
3. เลือก "API Tokens" จากเมนู
4. สร้าง API token ใหม่พร้อมสิทธิ์ดังนี้:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. คัดลอก API token ของคุณ

### 2. รับ Zone ID

1. ใน dashboard ของ Cloudflare เลือกโดเมนที่คุณต้องการใช้งาน
2. Zone ID จะแสดงอยู่ในแท็บ "Overview" ที่แถบด้านขวาใต้หัวข้อ "API"
3. คัดลอก Zone ID

### 3. เพิ่มค่าคงที่ใน wp-config.php

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. เปิดใช้งานการเชื่อมต่อ

1. ในหน้าผู้ดูแลระบบ WordPress ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงไปที่ "Host Integrations"
4. เปิดใช้งานการเชื่อมต่อ Cloudflare
5. คลิก "Save Changes"

## วิธีการทำงาน

### การจัดการ Subdomain

เมื่อมีการสร้างเว็บไซต์ใหม่ในการติดตั้ง multisite แบบ subdomain:

1. ระบบจะส่งคำขอไปยัง API ของ Cloudflare เพื่อเพิ่ม CNAME record สำหรับ subdomain นั้น
2. subdomain จะถูกตั้งค่าให้ผ่าน proxy ของ Cloudflare โดยค่าเริ่มต้น (สามารถเปลี่ยนได้ด้วย filter)
3. เมื่อลบเว็บไซต์ ระบบจะลบ subdomain ออกจาก Cloudflare ด้วย

### การแสดงผล DNS Record

การเชื่อมต่อนี้ปรับปรุงการแสดงผล DNS record ในหน้าผู้ดูแลระบบของ Ultimate Multisite โดย:

1. ดึงข้อมูล DNS record โดยตรงจาก Cloudflare
2. แสดงสถานะว่า record นั้นเป็นแบบ proxied หรือไม่
3. แสดงข้อมูลเพิ่มเติมเกี่ยวกับ DNS record

## หมายเหตุสำคัญ

จากการอัปเดตล่าสุดของ Cloudflare ขณะนี้ wildcard proxying พร้อมใช้งานสำหรับลูกค้าทุกคนแล้ว ซึ่งหมายความว่าการเชื่อมต่อ Cloudflare มีความจำเป็นน้อยลงสำหรับการติดตั้ง multisite แบบ subdomain เพราะคุณสามารถตั้งค่า wildcard DNS record ใน Cloudflare ได้เลย

## การแก้ไขปัญหา

### ปัญหาการเชื่อมต่อ API
- ตรวจสอบว่า API token ถูกต้องและมีสิทธิ์ที่จำเป็น
- ตรวจสอบว่า Zone ID ถูกต้อง
- ตรวจสอบว่าบัญชี Cloudflare ของคุณมีสิทธิ์ที่จำเป็น

### Subdomain ไม่ถูกเพิ่ม
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาด
- ตรวจสอบว่า subdomain นั้นยังไม่ได้ถูกเพิ่มใน Cloudflare
- ตรวจสอบว่าแพ็กเกจ Cloudflare ของคุณรองรับจำนวน DNS record ที่คุณกำลังสร้าง

### ปัญหาเกี่ยวกับ Proxying
- หากคุณไม่ต้องการให้ subdomain ผ่าน proxy คุณสามารถใช้ filter `wu_cloudflare_should_proxy`
- บางฟีเจอร์อาจทำงานไม่ถูกต้องเมื่อผ่าน proxy (เช่น ฟังก์ชันบางอย่างในหน้าผู้ดูแลระบบ WordPress)
- ลองใช้ Page Rules ของ Cloudflare เพื่อข้าม cache สำหรับหน้าผู้ดูแลระบบ
