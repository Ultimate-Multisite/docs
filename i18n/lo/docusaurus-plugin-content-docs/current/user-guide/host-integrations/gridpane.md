---
title: ການເຊື່ອມຕໍ່ GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# การรวมกับ GridPane (GridPane Integration)

## ภาพรวม {#overview}
GridPane เป็นแผงควบคุมโฮสติ้ง WordPress ที่ออกแบบมาโดยเฉพาะสำหรับมืออาชีพด้าน WordPress ที่จริงจัง การรวมนี้ช่วยให้สามารถซิงค์โดเมนและจัดการใบรับรอง SSL ระหว่าง Ultimate Multisite กับ GridPane ได้โดยอัตโนมัติ

## คุณสมบัติ {#features}
- ซิงค์โดเมนอัตโนมัติ
- การจัดการใบรับรอง SSL
- ตั้งค่า constant ของ SUNRISE โดยอัตโนมัติ

## ข้อกำหนดเบื้องต้น {#requirements}
คุณต้องกำหนดค่าคงที่ (constants) ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## วิธีการตั้งค่า {#setup-instructions}

### 1. รับข้อมูล API ของ GridPane ของคุณ {#1-get-your-gridpane-api-credentials}

1. เข้าสู่ระบบแดชบอร์ดของ GridPane ของคุณ
2. ไปที่ "Settings" > "API"
3. สร้าง API key หากคุณยังไม่มี
4. คัดลอก API key ของคุณ

### 2. รับ Server ID และ Site ID ของคุณ {#2-get-your-server-and-site-ids}

1. ในแดชบอร์ดของ GridPane ให้ไปที่ "Servers"
2. เลือกเซิร์ฟเวอร์ที่คุณโฮสต์ WordPress multisite ไว้
3. จดบันทึก Server ID (จะแสดงใน URL หรือหน้ารายละเอียดเซิร์ฟเวอร์)
4. ไปที่ "Sites" และเลือกเว็บไซต์ WordPress ของคุณ
5. จดบันทึก Site ID (จะแสดงใน URL หรือหน้ารายละเอียดไซต์)

### 3. เพิ่มค่าคงที่ลงใน wp-config.php {#3-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. เปิดใช้งานการรวมระบบ (Enable the Integration) {#4-enable-the-integration}

1. ในแอดมินของ WordPress ให้ไปที่ Ultimate Multisite > Settings
2. ไปที่แท็บ "Domain Mapping"
3. เลื่อนลงมาที่ "Host Integrations"
4. เปิดใช้งานการรวมกับ GridPane
5. คลิก "Save Changes"

1. การเชื่อมต่อจะส่งคำขอไปยัง API ของ GridPane เพื่อเพิ่มโดเมนของคุณเข้าสู่เว็บไซต์
2. GridPane จะจัดการเรื่องการออกใบรับรอง SSL ให้โดยอัตโนมัติ
3. เมื่อมีการลบการจับคู่โดเมน (domain mapping) ออก การเชื่อมต่อก็จะลบโดเมนนั้นออกจาก GridPane ด้วย

การเชื่อมต่อนี้ยังจัดการค่าคงที่ SUNRISE ในไฟล์ wp-config.php ของคุณให้โดยอัตโนมัติ ซึ่งเป็นสิ่งที่จำเป็นเพื่อให้การจับคู่โดเมนทำงานได้อย่างถูกต้องด้วย

## การจัดการค่าคงที่ SUNRISE (SUNRISE Constant Management) {#how-it-works}

จุดเด่นที่เป็นเอกลักษณ์ของการเชื่อมต่อ GridPane คือ มันจะทำการเปลี่ยนค่าคงที่ SUNRISE ในไฟล์ wp-config.php กลับไปเป็นค่าเริ่มต้นโดยอัตโนมัติ เพื่อป้องกันความขัดแย้งกับระบบการจับคู่โดเมนของ GridPane เอง สิ่งนี้ทำให้ทั้งสองระบบสามารถทำงานร่วมกันได้โดยไม่มีปัญหา

## การแก้ไขปัญหา (Troubleshooting) {#sunrise-constant-management}

### ปัญหาการเชื่อมต่อ API (API Connection Issues) {#troubleshooting}
- ตรวจสอบว่า API key ของคุณถูกต้องหรือไม่
- ตรวจสอบว่า server ID และ site ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี GridPane ของคุณมีสิทธิ์ที่จำเป็นครบถ้วน

### ปัญหาใบรับรอง SSL (SSL Certificate Issues) {#api-connection-issues}
- GridPane อาจใช้เวลาในการออกใบรับรอง SSL สักครู่
- ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
- ตรวจสอบการตั้งค่า SSL ของเว็บไซต์ใน GridPane สำหรับไซต์ของคุณ

### โดเมนไม่ถูกเพิ่ม (Domain Not Added) {#ssl-certificate-issues}
- ตรวจสอบไฟล์ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ตรวจสอบว่าโดเมนนั้นไม่ได้ถูกเพิ่มเข้าไปใน GridPane แล้วหรือไม่
- ตรวจสอบให้แน่ใจว่า DNS records ของโดเมนของคุณตั้งค่าไว้อย่างถูกต้อง
