---
title: การผสานการทำงานกับ Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# การผสานรวม Cloudflare

## ภาพรวม {#overview}
Cloudflare เป็นผู้ให้บริการเครือข่ายส่งมอบเนื้อหา (CDN) และความปลอดภัยชั้นนำที่ช่วยปกป้องและเร่งความเร็วเว็บไซต์ การผสานรวมนี้ช่วยให้จัดการโดเมนอัตโนมัติระหว่าง Ultimate Multisite และ Cloudflare โดยเฉพาะสำหรับการติดตั้ง multisite แบบโดเมนย่อย

## คุณสมบัติ {#features}
- การสร้างโดเมนย่อยอัตโนมัติใน Cloudflare
- รองรับโดเมนย่อยแบบพร็อกซี
- การจัดการระเบียน DNS
- การแสดงระเบียน DNS ที่ดีขึ้นในผู้ดูแลระบบ Ultimate Multisite

## ข้อกำหนด {#requirements}
ต้องกำหนดค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## คำแนะนำการตั้งค่า {#setup-instructions}

### 1. รับ Cloudflare API Key ของคุณ {#1-get-your-cloudflare-api-key}

1. เข้าสู่ระบบ Cloudflare dashboard ของคุณ
2. ไปที่ "โปรไฟล์ของฉัน" (คลิกที่อีเมลของคุณที่มุมขวาบน)
3. เลือก "API Tokens" จากเมนู
4. สร้าง API token ใหม่พร้อมสิทธิ์ต่อไปนี้:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. คัดลอก API token ของคุณ

### 2. รับ Zone ID ของคุณ {#2-get-your-zone-id}

1. ใน Cloudflare dashboard ของคุณ ให้เลือกโดเมนที่คุณต้องการใช้
2. Zone ID จะแสดงอยู่ในแท็บ "ภาพรวม" ในแถบด้านขวาใต้ "API"
3. คัดลอก Zone ID

### 3. เพิ่มค่าคงที่ลงใน wp-config.php {#3-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. เปิดใช้งานการผสานรวม {#4-enable-the-integration}

1. ในผู้ดูแลระบบ WordPress ของคุณ ให้ไปที่ Ultimate Multisite > การตั้งค่า
2. ไปที่แท็บ "การแมปโดเมน"
3. เลื่อนลงไปที่ "การผสานรวมโฮสต์"
4. เปิดใช้งานการผสานรวม Cloudflare
5. คลิก "บันทึกการเปลี่ยนแปลง"

## วิธีการทำงาน {#how-it-works}

### การจัดการโดเมนย่อย {#subdomain-management}

เมื่อมีการสร้างไซต์ใหม่ในการติดตั้ง multisite แบบโดเมนย่อย:

1. การผสานรวมจะส่งคำขอไปยัง API ของ Cloudflare เพื่อเพิ่มระเบียน CNAME สำหรับโดเมนย่อย
2. โดเมนย่อยจะถูกกำหนดค่าให้พร็อกซีผ่าน Cloudflare โดยค่าเริ่มต้น (สามารถเปลี่ยนได้ด้วยตัวกรอง)
3. เมื่อไซต์ถูกลบ การผสานรวมจะลบโดเมนย่อยออกจาก Cloudflare

### การแสดงระเบียน DNS {#dns-record-display}

การผสานรวมช่วยปรับปรุงการแสดงระเบียน DNS ในผู้ดูแลระบบ Ultimate Multisite โดย:

1. ดึงระเบียน DNS โดยตรงจาก Cloudflare
2. แสดงว่าระเบียนถูกพร็อกซีหรือไม่
3. แสดงข้อมูลเพิ่มเติมเกี่ยวกับระเบียน DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ก่อนหน้านี้เรียกว่า "Cloudflare for SaaS") เป็นคุณสมบัติของ Cloudflare ที่ช่วยให้ลูกค้าของคุณใช้โดเมนของตนเองพร้อม SSL บนเครือข่าย multisite ของคุณได้ นี่เป็นแนวทางที่แนะนำสำหรับการติดตั้ง multisite แบบแมปโดเมนที่ใช้ Cloudflare เพราะ Cloudflare จะจัดการการออกและต่ออายุใบรับรอง SSL สำหรับแต่ละโดเมนแบบกำหนดเองโดยอัตโนมัติ

### แตกต่างจากการผสานรวม Cloudflare มาตรฐานอย่างไร {#how-it-differs-from-the-standard-cloudflare-integration}

| | การผสานรวมมาตรฐาน | Cloudflare Custom Hostnames |
|---|---|---|
| **วัตถุประสงค์** | สร้างระเบียน DNS สำหรับโดเมนย่อยโดยอัตโนมัติ | เปิดใช้งานโดเมนแบบกำหนดเอง (ที่แมปแล้ว) พร้อม SSL ที่จัดการโดย Cloudflare |
| **เหมาะที่สุดสำหรับ** | multisite แบบโดเมนย่อย | multisite แบบแมปโดเมน |
| **SSL** | จัดการแยกต่างหาก | จัดการโดย Cloudflare โดยอัตโนมัติ |

### การตั้งค่า Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. ใน Cloudflare dashboard ของคุณ ให้เปิดโซนสำหรับโดเมนหลักของคุณ
2. ไปที่ **SSL/TLS > Custom Hostnames**
3. เพิ่ม fallback origin ที่ชี้ไปยัง IP หรือชื่อโฮสต์ของเซิร์ฟเวอร์ของคุณ
4. สำหรับแต่ละโดเมนของลูกค้าที่แมปใน Ultimate Multisite ให้เพิ่มรายการ Custom Hostname ใน Cloudflare คุณสามารถทำขั้นตอนนี้ให้เป็นอัตโนมัติได้โดยใช้ Cloudflare API
5. Cloudflare จะออกและต่ออายุใบรับรอง TLS สำหรับแต่ละชื่อโฮสต์แบบกำหนดเองโดยอัตโนมัติเมื่อ DNS ของลูกค้าชี้มายังเครือข่ายของคุณ

สำหรับเอกสารอ้างอิง API ฉบับเต็ม โปรดดู [เอกสาร Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)

:::note การอัปเดตคำศัพท์
ตั้งแต่ Ultimate Multisite v2.6.1 เป็นต้นไป คุณสมบัตินี้ถูกเรียกว่า **Cloudflare Custom Hostnames** ในการตั้งค่าและป้ายกำกับทั้งหมดของ plugin เวอร์ชันก่อนหน้าใช้ชื่อ "Cloudflare for SaaS" ซึ่งเป็นชื่อผลิตภัณฑ์ Cloudflare พื้นฐาน
:::

## หมายเหตุสำคัญ {#important-notes}

ตามการอัปเดตล่าสุดของ Cloudflare ตอนนี้การพร็อกซีแบบ wildcard พร้อมใช้งานสำหรับลูกค้าทุกคนแล้ว ซึ่งหมายความว่าการผสานรวม DNS มาตรฐานของ Cloudflare มีความสำคัญน้อยลงสำหรับการติดตั้ง multisite แบบโดเมนย่อยเมื่อเทียบกับในอดีต เพราะคุณสามารถตั้งค่าระเบียน DNS แบบ wildcard ใน Cloudflare ได้อย่างง่ายดาย

## การแก้ไขปัญหา {#troubleshooting}

### ปัญหาการเชื่อมต่อ API {#api-connection-issues}
- ตรวจสอบว่า API token ของคุณถูกต้องและมีสิทธิ์ที่จำเป็น
- ตรวจสอบว่า Zone ID ของคุณถูกต้อง
- ตรวจสอบให้แน่ใจว่า Account Cloudflare ของคุณมีสิทธิ์ที่จำเป็น

### ไม่ได้เพิ่มโดเมนย่อย {#subdomain-not-added}
- ตรวจสอบบันทึก Ultimate Multisite เพื่อดูข้อความข้อผิดพลาดใด ๆ
- ตรวจสอบว่าโดเมนย่อยยังไม่ได้ถูกเพิ่มใน Cloudflare
- ตรวจสอบให้แน่ใจว่าแผน Cloudflare ของคุณรองรับจำนวนระเบียน DNS ที่คุณกำลังสร้าง

### ปัญหาการพร็อกซี {#proxying-issues}
- หากคุณไม่ต้องการให้โดเมนย่อยถูกพร็อกซี คุณสามารถใช้ตัวกรอง `wu_cloudflare_should_proxy`
- คุณสมบัติบางอย่างอาจทำงานไม่ถูกต้องเมื่อถูกพร็อกซี (เช่น ฟังก์ชันผู้ดูแลระบบ WordPress บางอย่าง)
- พิจารณาใช้ Page Rules ของ Cloudflare เพื่อข้ามแคชสำหรับหน้าผู้ดูแลระบบ
