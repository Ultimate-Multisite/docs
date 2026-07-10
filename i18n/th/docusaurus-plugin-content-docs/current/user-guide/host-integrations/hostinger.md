---
title: การเชื่อมต่อกับ Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# การเชื่อมต่อกับ Hostinger (hPanel) {#hostinger-hpanel-integration}

## ภาพรวม {#overview}

Hostinger เป็นผู้ให้บริการโฮสติ้งเว็บไซต์ยอดนิยมที่มีแผงควบคุมที่ทันสมัยชื่อว่า hPanel การเชื่อมต่อ Ultimate Multisite กับ Hostinger ช่วยให้คุณสามารถซิงค์โดเมนได้โดยอัตโนมัติระหว่าง Ultimate Multisite และ hPanel ของ Hostinger ทำให้คุณสามารถจัดการการแมปโดเมนและซับโดเมนได้โดยตรงจากหน้าแอดมิน WordPress ของคุณ

## คุณสมบัติ {#features}

- สร้างโดเมนเสริม (addon domain) ใน hPanel โดยอัตโนมัติ
- สร้างซับโดเมนใน hPanel โดยอัตโนมัติ (สำหรับการติดตั้งแบบ multisite ที่ใช้ซับโดเมน)
- ลบโดเมนเมื่อมีการลบการแมปโดเมน
- ทำงานร่วมกับ API การจัดการโดเมนของ hPanel ได้อย่างราบรื่น

## ข้อกำหนด {#requirements}

ในการใช้การเชื่อมต่อ Hostinger คุณต้องมี:

1. บัญชี Hostinger ที่สามารถเข้าถึง hPanel ได้
2. โทเค็น API (API token) จาก Hostinger
3. กำหนดค่าค่าคงที่ (constants) ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

นอกจากนี้ คุณยังสามารถกำหนดค่าเพิ่มเติมได้:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint เริ่มต้น
```

## คำแนะนำในการตั้งค่า {#setup-instructions}

### 1. สร้างโทเค็น API ของ Hostinger {#1-generate-your-hostinger-api-token}

1. เข้าสู่ระบบบัญชี Hostinger ของคุณและเข้าถึง hPanel
2. ไปที่ **Account Settings** → **API Tokens**
3. คลิก **Create New Token**
4. ตั้งชื่อโทเค็นให้สื่อความหมาย (เช่น "Ultimate Multisite")
5. เลือกสิทธิ์ที่จำเป็น:
   - Domain management
   - Subdomain management
6. คัดลอกโทเค็นที่สร้างขึ้นและจัดเก็บไว้ในที่ปลอดภัย

### 2. ค้นหา Account ID ของคุณ {#2-find-your-account-id}

1. ใน hPanel ให้ไปที่ **Account Settings** → **Account Information**
2. Account ID ของคุณจะแสดงอยู่ในหน้านี้
3. คัดลอกและบันทึก ID นี้สำหรับขั้นตอนถัดไป

### 3. เพิ่มค่าคงที่ใน wp-config.php {#3-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

หากบัญชี Hostinger ของคุณใช้ API endpoint อื่น คุณสามารถปรับแต่งได้:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. เปิดใช้งานการเชื่อมต่อ {#4-enable-the-integration}

1. ในหน้าแอดมิน WordPress ของคุณ ไปที่ **Ultimate Multisite > Settings**
2. ไปที่แท็บ **Domain Mapping**
3. เลื่อนลงมาที่ **Host Integrations**
4. เปิดใช้งานการเชื่อมต่อ **Hostinger (hPanel)**
5. คลิก **Save Changes**

## วิธีการทำงาน {#how-it-works}

### โดเมนเสริม (Addon Domains) {#addon-domains}

เมื่อคุณแมปโดเมนใน Ultimate Multisite:

1. การเชื่อมต่อจะส่งคำขอไปยัง API ของ Hostinger เพื่อเพิ่มโดเมนนั้นเป็นโดเมนเสริม
2. โดเมนจะถูกตั้งค่าให้ชี้ไปยัง root directory ของคุณ
3. เมื่อมีการลบการแมปโดเมน การเชื่อมต่อจะลบโดเมนเสริมออกจาก hPanel โดยอัตโนมัติ

### ซับโดเมน (Subdomains) {#subdomains}

สำหรับการติดตั้งแบบ multisite ที่ใช้ซับโดเมน เมื่อมีการสร้างไซต์ใหม่:

1. การเชื่อมต่อจะแยกส่วนซับโดเมนออกจากโดเมนเต็ม
2. มันจะส่งคำขอไปยัง API ของ Hostinger เพื่อเพิ่มซับโดเมนนั้น
3. ซับโดเมนจะถูกตั้งค่าให้ชี้ไปยัง root directory ของคุณ

## ข้อควรทราบที่สำคัญ {#important-notes}

- การเชื่อมต่อนี้ใช้ Hostinger's REST API ในการสื่อสารกับบัญชีของคุณ
- โทเค็น API ของคุณต้องมีสิทธิ์ที่จำเป็นสำหรับการจัดการโดเมนและซับโดเมน
- การเชื่อมต่อนี้ไม่ได้จัดการการตั้งค่า DNS; โดเมนจะต้องชี้ไปยังบัญชี Hostinger ของคุณอยู่แล้ว
- คำขอ API จะถูกส่งอย่างปลอดภัยผ่าน HTTPS
- โปรดเก็บรักษา API token ของคุณให้ปลอดภัยและห้ามแชร์สู่สาธารณะโดยเด็ดขาด

## การแก้ไขปัญหา {#troubleshooting}

### ปัญหาการเชื่อมต่อ API {#api-connection-issues}

- ตรวจสอบว่า API token ของคุณถูกต้องและยังไม่หมดอายุ
- ตรวจสอบว่า Account ID ของคุณถูกต้อง
- ตรวจสอบให้แน่ใจว่า API token มีสิทธิ์ที่จำเป็นสำหรับการจัดการโดเมน
- ตรวจสอบว่าบัญชี Hostinger ของคุณใช้งานได้และอยู่ในสถานะปกติ

### โดเมนไม่ถูกเพิ่ม {#domain-not-added}

- ตรวจสอบบันทึก (logs) ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใด ๆ
- ตรวจสอบว่าโดเมนนั้นไม่ได้ถูกเพิ่มเข้าไปในบัญชี Hostinger ของคุณแล้ว
- ตรวจสอบให้แน่ใจว่าบัญชี Hostinger ของคุณยังไม่ถึงขีดจำกัดของโดเมนเสริม
- ยืนยันว่าโดเมนชี้ไปยัง nameservers ของ Hostinger อย่างถูกต้อง

### ปัญหา SSL Certificate {#ssl-certificate-issues}

- การเชื่อมต่อนี้ไม่ได้จัดการการออก SSL certificate
- โดยปกติแล้ว Hostinger จะให้ SSL certificate ฟรีผ่าน AutoSSL
- คุณสามารถจัดการ SSL certificate ได้โดยตรงใน hPanel ภายใต้ **SSL/TLS**
- หรือใช้ Let's Encrypt ร่วมกับฟีเจอร์ AutoSSL ของ Hostinger

## การสนับสนุน {#support}

หากต้องการความช่วยเหลือเพิ่มเติมเกี่ยวกับการเชื่อมต่อ Hostinger โปรดดูที่:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
