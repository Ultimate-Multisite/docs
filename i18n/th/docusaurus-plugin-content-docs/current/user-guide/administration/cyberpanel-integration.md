---
title: การผสานรวม CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# การผสานรวมกับ CyberPanel {#cyberpanel-integration}

คู่มือนี้จะอธิบายวิธีการตั้งค่าการผสานรวม Ultimate Multisite กับ CyberPanel เพื่อให้โดเมนที่แมปในเครือข่ายของคุณถูกเพิ่ม (และลบ) เป็น virtual host ใน CyberPanel โดยมีตัวเลือกในการตั้งค่า auto-SSL ผ่าน Let's Encrypt

## สิ่งที่ทำได้ {#what-it-does}

*   เมื่อมีการแมปโดเมนใน Ultimate Multisite ระบบจะเรียกใช้ CyberPanel API เพื่อสร้าง virtual host สำหรับโดเมนนั้น
*   เมื่อมีการลบการแมปโดเมน ระบบจะเรียกใช้ API เพื่อลบ virtual host ที่เกี่ยวข้อง
*   เมื่อเปิดใช้งาน auto-SSL ระบบจะเรียกใช้การออกใบรับรอง Let's Encrypt ทันทีหลังจากที่สร้าง virtual host เสร็จสิ้น
*   สามารถเพิ่ม/ลบ alias `www.` ได้ตามการตั้งค่า "Auto-create www subdomain" ในส่วน Domain Mapping

## สิ่งที่ต้องมี (Prerequisites) {#prerequisites}

*   ระบบ CyberPanel ที่ทำงานอยู่ (แนะนำเวอร์ชัน v2.3 ขึ้นไป) และสามารถเข้าถึงได้จาก WordPress server ของคุณ
*   เว็บไซต์ที่มีอยู่แล้วใน CyberPanel ซึ่งทำหน้าที่เป็น root ของ WordPress network ของคุณ การผสานรวมนี้จะแนบ virtual hosts ใหม่เข้ากับเซิร์ฟเวอร์นี้
*   เปิดใช้งานการเข้าถึง CyberPanel API การยืนยันตัวตนจะใช้ชื่อผู้ใช้และรหัสผ่านผู้ดูแลระบบ CyberPanel ของคุณ
*   บันทึก DNS records สำหรับโดเมนที่แมปแล้วจะต้องชี้ไปยัง IP address ของเซิร์ฟเวอร์ของคุณก่อนที่ auto-SSL จะสามารถออกใบรับรองที่ถูกต้องได้

## ข้อกำหนด (Requirements) {#requirements}

คุณต้องกำหนดค่าค่าคงที่ (constants) ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

คุณสามารถกำหนดค่าเพิ่มเติมได้ดังนี้:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ค่าเริ่มต้น: true — ออก SSL ของ Let's Encrypt หลังสร้างโดเมน
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ค่าเริ่มต้น: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // ใช้สำหรับติดต่อในการออกใบรับรอง SSL
```

## คำแนะนำการตั้งค่า (Setup Instructions) {#setup-instructions}

### 1. เปิดใช้งาน CyberPanel API {#1-enable-the-cyberpanel-api}

1. เข้าสู่ระบบ CyberPanel dashboard ในฐานะผู้ดูแลระบบ
2. ไปที่ **Security** > **SSL** และยืนยันว่า SSL เปิดใช้งานอยู่บนตัว CyberPanel interface เอง (จำเป็นสำหรับการเรียก API อย่างปลอดภัย)
3. โดยปกติแล้ว CyberPanel API จะอยู่ที่ `https://your-server-ip:8090/api/` ไม่จำเป็นต้องทำขั้นตอนเพิ่มเติมในการเปิดใช้งาน เพราะเปิดใช้งานโดยค่าเริ่มต้นสำหรับผู้ดูแลระบบ

### 2. เพิ่มค่าคงที่ใน wp-config.php {#2-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้ในไฟล์ `wp-config.php` ของคุณ ก่อนบรรทัด `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ในการเปิดใช้งาน auto-SSL (แนะนำ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. เปิดใช้งาน Integration {#3-enable-the-integration}

1. ในส่วน admin ของ WordPress network ให้ไปที่ **Ultimate Multisite** > **Settings**
2. ไปที่แท็บ **Domain Mapping**
3. เลื่อนลงมาที่ **Host Integrations**
4. เปิดใช้งานการผสานรวม **CyberPanel**
5. คลิก **Save Changes**

### 4. ตรวจสอบการเชื่อมต่อ (Verify Connectivity) {#4-verify-connectivity}

ใช้การทดสอบการเชื่อมต่อที่มาพร้อมกับหน้าตั้งค่า:

1. ไปที่ **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**
2. คลิก **Test Connection**
3. ข้อความแสดงความสำเร็จจะยืนยันว่า plugin สามารถเข้าถึง CyberPanel API และยืนยันตัวตนได้อย่างถูกต้อง

## วิธีการทำงาน (How It Works) {#how-it-works}

### Domain Mapping {#domain-mapping}

เมื่อมีการแมปโดเมนใน Ultimate Multisite:

1. ระบบจะส่งคำขอ `POST` ไปยัง `/api/createWebsite` บน host CyberPanel ของคุณ
2. CyberPanel จะสร้าง virtual host ใหม่สำหรับโดเมนภายใต้ package ที่กำหนดไว้
3. document root จะถูกตั้งค่าให้ชี้ไปยัง directory root ของ WordPress network ของคุณ
4. เมื่อมีการลบการแมปโดเมน ระบบจะเรียกใช้ `/api/deleteWebsite` เพื่อลบ virtual host นั้น

### Auto-SSL {#auto-ssl}

เมื่อ `WU_CYBERPANEL_AUTO_SSL` เป็น `true`:

1. หลังจากที่สร้าง virtual host แล้ว ระบบจะเรียกใช้ `/api/issueSSL` สำหรับโดเมนนั้น
2. CyberPanel จะร้องขอใบรับรอง Let's Encrypt โดยใช้ ACME HTTP-01 challenge
3. CyberPanel จะต่ออายุใบรับรองโดยอัตโนมัติก่อนที่ใบรับรองจะหมดอายุ

> **สำคัญ:** DNS จะต้องมีการเผยแพร่ (propagated) ไปยัง IP address ของเซิร์ฟเวอร์ของคุณอย่างสมบูรณ์ก่อนที่ Let's Encrypt จะสามารถตรวจสอบโดเมนได้ หากการออก SSL ล้มเหลวทันทีหลังจากการแมป ให้รอการเผยแพร่ DNS และเรียกใช้ SSL ซ้ำจาก dashboard ของ CyberPanel ภายใต้ **SSL** > **Manage SSL**

### www Subdomain {#www-subdomain}

หากเปิดใช้งาน **Auto-create www subdomain** ในการตั้งค่า Domain Mapping ระบบจะสร้าง virtual host alias สำหรับ `www.<domain>` ด้วย และเมื่อ auto-SSL เปิดใช้งาน จะออกใบรับรองที่ครอบคลุมทั้ง apex และ www variants

### Email Forwarders {#email-forwarders}

เมื่อ addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ทำงานอยู่ CyberPanel ยังสามารถให้บริการ email forwarders สำหรับลูกค้าได้ด้วย Forwarders จะทำการส่งต่อข้อความจากที่อยู่โดเมนหนึ่งไปยังกล่องจดหมายอื่นโดยไม่ต้องสร้าง mailbox เต็มรูปแบบ ซึ่งมีประโยชน์สำหรับ alias เช่น `info@customer-domain.test` หรือ `support@customer-domain.test`

ก่อนเปิดใช้งาน forwarders สำหรับลูกค้า:

1. ยืนยันว่าค่าคงที่ CyberPanel ข้างต้นถูกตั้งค่าเรียบร้อยแล้ว และการทดสอบการเชื่อมต่อผ่าน
2. เปิดใช้งานผู้ให้บริการอีเมล CyberPanel ในการตั้งค่า Emails addon
3. ยืนยันว่าโดเมนของลูกค้ามีอยู่ใน CyberPanel แล้วก่อนที่จะสร้าง forwarder
4. สร้าง forwarder ทดสอบและส่งข้อความผ่านมันก่อนที่จะนำฟีเจอร์นี้ไปใช้ในแผนบริการจริง

หากการสร้าง forwarder ล้มเหลว ให้ตรวจสอบ Ultimate Multisite activity logs ก่อน จากนั้นยืนยันใน CyberPanel ว่า source domain มีอยู่จริง และผู้ใช้ API มีสิทธิ์ในการจัดการอีเมล

## ข้อมูลอ้างอิงการตั้งค่า (Configuration Reference) {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | URL เต็มไปยัง CyberPanel instance ของคุณ รวมถึง port เช่น `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | ชื่อผู้ใช้ผู้ดูแลระบบ CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | รหัสผ่านผู้ดูแลระบบ CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | package การโฮสต์ของ CyberPanel ที่จะกำหนดให้กับ virtual hosts ใหม่ |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | ออกใบรับรอง SSL ของ Let's Encrypt หลังจากการสร้างโดเมน |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | เวอร์ชัน PHP สำหรับ virtual hosts ใหม่ (ต้องตรงกับเวอร์ชันที่ติดตั้งใน CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | อีเมลติดต่อสำหรับการลงทะเบียนใบรับรอง SSL |

## ข้อควรทราบที่สำคัญ (Important Notes) {#important-notes}

*   API ของ CyberPanel ใช้การยืนยันตัวตนแบบ token ที่อิงตาม session การผสานรวมนี้จะจัดการการรับ token โดยอัตโนมัติในการเรียก API แต่ละครั้ง
*   บัญชีผู้ดูแลระบบ CyberPanel ของคุณต้องมีสิทธิ์ในการสร้างและลบเว็บไซต์
*   โดยค่าเริ่มต้น CyberPanel ทำงานบน port `8090` หากเซิร์ฟเวอร์ของคุณใช้ firewall ให้ตรวจสอบให้แน่ใจว่าพอร์ตนี้สามารถเข้าถึงได้จาก WordPress application server
*   การผสานรวมนี้ไม่ได้จัดการ DNS records คุณต้องชี้ DNS ของโดเมนไปยัง IP address ของเซิร์ฟเวอร์ของคุณก่อนที่จะแมปโดเมนใน Ultimate Multisite
*   หากคุณใช้ OpenLiteSpeed (OLS) ระบบจะทำการ restart อย่างนุ่มนวลโดยอัตโนมัติหลังจากการเปลี่ยนแปลง virtual host ไม่จำเป็นต้องมีการแทรกแซงด้วยตนเอง

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

*   ตรวจสอบว่าพอร์ต `8090` เปิดอยู่หรือไม่ใน firewall ของเซิร์ฟเวอร์
*   ยืนยันว่าค่า `WU_CYBERPANEL_HOST` รวมถึง protocol (`https://`) และ port ที่ถูกต้อง
*   ตรวจสอบว่า SSL certificate ของ CyberPanel ของคุณถูกต้องแล้ว ใบรับรองที่สร้างด้วยตนเอง (self-signed certificates) อาจทำให้เกิดข้อผิดพลาดในการตรวจสอบ TLS ให้ตั้งค่า `WU_CYBERPANEL_VERIFY_SSL` เป็น `false` เฉพาะในสภาพแวดล้อมเครือข่ายส่วนตัวที่เชื่อถือได้เท่านั้น

### Authentication Errors {#authentication-errors}

*   ยืนยันว่า `WU_CYBERPANEL_USERNAME` และ `WU_CYBERPANEL_PASSWORD` ของคุณถูกต้องโดยการเข้าสู่ระบบ CyberPanel โดยตรง
*   CyberPanel จะล็อกบัญชีหลังจากพยายามเข้าสู่ระบบล้มเหลวหลายครั้ง หากเกิดการล็อกเอาต์ ให้ตรวจสอบ **Security** > **Brute Force Monitor** ใน CyberPanel

### Domain Not Created {#domain-not-created}

*   ตรวจสอบ Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) สำหรับข้อความข้อผิดพลาดของ API
*   ตรวจสอบว่า package ที่กำหนดใน `WU_CYBERPANEL_PACKAGE` มีอยู่ใน CyberPanel หรือไม่ (**Packages** > **List Packages**)
*   ตรวจสอบให้แน่ใจว่าโดเมนนั้นไม่ได้ถูกลงทะเบียนเป็นเว็บไซต์ใน CyberPanel อยู่แล้ว — การสร้างเว็บไซต์ซ้ำจะส่งคืนข้อผิดพลาด

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

*   ยืนยันว่า DNS ได้เผยแพร่สมบูรณ์แล้ว: `dig +short your-domain.com` ควรส่งคืน IP address ของเซิร์ฟเวอร์ของคุณ
*   Let's Encrypt มีการจำกัดอัตรา (rate limits) หากคุณออกใบรับรองหลายใบสำหรับโดเมนเดียวกันเมื่อเร็วๆ นี้ ให้รอก่อนที่จะลองอีกครั้ง
*   ตรวจสอบบันทึก SSL ของ CyberPanel ภายใต้ **Logs** > **Error Logs** เพื่อดูรายละเอียดความล้มเหลวในการออกใบรับรอง
*   ในกรณีที่จำเป็น คุณสามารถออก SSL ด้วยตนเองจาก CyberPanel ได้: **SSL** > **Manage SSL** > เลือกโดเมน > **Issue SSL**

## เอกสารอ้างอิง (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
