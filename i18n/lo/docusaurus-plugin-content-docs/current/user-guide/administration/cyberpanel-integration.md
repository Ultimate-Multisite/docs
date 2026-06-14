---
title: ການເຊື່ອມຕໍ່ CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# การเชื่อมต่อ CyberPanel

คู่มือนี้จะอธิบายวิธีการตั้งค่าการเชื่อมต่อ Ultimate Multisite CyberPanel เพื่อให้โดเมนที่ถูกแมปในเครือข่ายของคุณถูกเพิ่ม (และลบ) เป็น virtual host ใน CyberPanel โดยอัตโนมัติ พร้อมตัวเลือกในการเตรียม SSL อัตโนมัติผ่าน Let's Encrypt

## มันทำอะไรได้บ้าง

- เมื่อมีการแมปโดเมนใน Ultimate Multisite การเชื่อมต่อนี้จะเรียกใช้ CyberPanel API เพื่อสร้าง virtual host สำหรับโดเมนนั้น
- เมื่อมีการลบการแมปโดเมน การเชื่อมต่อนี้จะเรียกใช้ API เพื่อลบ virtual host ที่เกี่ยวข้องออกไป
- เมื่อเปิดใช้งาน auto-SSL การเชื่อมต่อนี้จะสั่งให้ Let's Encrypt ออกใบรับรองทันทีหลังจากที่สร้าง virtual host เสร็จแล้ว
- สามารถเพิ่ม/ลบ alias `www.` ได้ตามการตั้งค่า "Auto-create www subdomain" ในการตั้งค่า Domain Mapping ของคุณ

## สิ่งที่ต้องมีก่อน (Prerequisites)

- มี instance ของ CyberPanel ที่กำลังทำงานอยู่ (แนะนำเวอร์ชัน v2.3 ขึ้นไป) ซึ่งสามารถเข้าถึงได้จากเซิร์ฟเวอร์ WordPress ของคุณ
- มีเว็บไซต์ที่มีอยู่แล้วใน CyberPanel ซึ่งทำหน้าที่เป็น root ของเครือข่าย WordPress ของคุณ การเชื่อมต่อนี้จะแนบ virtual host ใหม่ไปยังเซิร์ฟเวอร์นี้
- เปิดใช้งานการเข้าถึง CyberPanel API การยืนยันตัวตนใช้ชื่อผู้ใช้และรหัสผ่านแอดมินของ CyberPanel ของคุณ
- บันทึก DNS สำหรับโดเมนที่ถูกแมปจะต้องชี้ไปยัง IP address ของเซิร์ฟเวอร์ของคุณแล้ว ก่อนที่ auto-SSL จะสามารถออกใบรับรองที่ถูกต้องได้

## ข้อกำหนด (Requirements)

ค่าคงที่ต่อไปนี้ต้องถูกกำหนดในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

โดยทางเลือก คุณสามารถกำหนดเพิ่มเติมได้ดังนี้:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ค่าเริ่มต้น: true — จะมีการออก SSL ของ Let's Encrypt หลังจากสร้างโดเมนแล้ว
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ค่าเริ่มต้น: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // ใช้สำหรับติดต่อเรื่องใบรับรอง SSL

## คำแนะนำในการตั้งค่า

### 1. เปิดใช้งาน CyberPanel API

1. เข้าสู่ระบบแดชบอร์ดของ CyberPanel ในฐานะผู้ดูแลระบบ
2. ไปที่ **Security** > **SSL** และตรวจสอบว่า SSL ทำงานอยู่บนอินเทอร์เฟซของ CyberPanel เอง (จำเป็นสำหรับการเรียกใช้ API ที่ปลอดภัย)
3. โดยปกติแล้ว CyberPanel API จะพร้อมใช้งานที่ `https://your-server-ip:8090/api/` ไม่จำเป็นต้องมีขั้นตอนเพิ่มเติมในการเปิดใช้งาน เพราะสำหรับผู้ดูแลระบบจะเปิดใช้งานไว้โดยอัตโนมัติ

### 2. เพิ่มค่าคงที่ (Constants) ใน wp-config.php

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ ก่อนบรรทัด `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

หากต้องการเปิดใช้งาน auto-SSL (แนะนำ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. เปิดใช้งานการเชื่อมต่อ (Integration)

1. ในส่วนผู้ดูแลระบบเครือข่าย WordPress ของคุณ ให้ไปที่ **Ultimate Multisite** > **Settings**
2. ไปที่แท็บ **Domain Mapping**
3. เลื่อนลงมาที่ **Host Integrations**
4. เปิดใช้งานการผสานรวม **CyberPanel**
5. คลิก **Save Changes**

### 4. ตรวจสอบการเชื่อมต่อ

ใช้การทดสอบการเชื่อมต่อที่มีมาให้ในหน้าตั้งค่า:
```

1. ไปที่ **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**
2. คลิก **Test Connection** (ทดสอบการเชื่อมต่อ)
3. ข้อความแจ้งเตือนความสำเร็จจะยืนยันว่าปลั๊กอินสามารถเข้าถึง CyberPanel API และยืนยันตัวตนได้อย่างถูกต้อง

## มันทำงานอย่างไร

### Domain Mapping (การจับคู่โดเมน)

เมื่อมีการจับคู่โดเมนใน Ultimate Multisite:

1. การเชื่อมต่อจะส่งคำขอแบบ `POST` ไปที่ `/api/createWebsite` บนโฮสต์ CyberPanel ของคุณ
2. CyberPanel จะสร้าง virtual host ใหม่สำหรับโดเมนภายใต้แพ็กเกจที่คุณตั้งค่าไว้
3. Document root จะถูกตั้งค่าให้ชี้ไปยังไดเรกทอรีรากของเครือข่าย WordPress ของคุณ
4. เมื่อมีการลบการจับคู่โดเมน การเชื่อมต่อจะเรียกใช้ `/api/deleteWebsite` เพื่อทำความสะอาด virtual host นั้น

### Auto-SSL (SSL อัตโนมัติ)

เมื่อ `WU_CYBERPANEL_AUTO_SSL` เป็น `true`:

1. หลังจากที่สร้าง virtual host เสร็จแล้ว การเชื่อมต่อจะเรียกใช้ `/api/issueSSL` สำหรับโดเมนนั้น
2. CyberPanel จะขอใบรับรอง Let's Encrypt โดยใช้การท้าทาย ACME HTTP-01
3. CyberPanel จะทำการต่ออายุใบรับรองโดยอัตโนมัติก่อนที่มันจะหมดอายุ

> **สำคัญ:** DNS ต้องถูกเผยแพร่ไปยัง IP address ของเซิร์ฟเวอร์ของคุณให้สมบูรณ์ก่อนที่ Let's Encrypt จะสามารถตรวจสอบโดเมนได้ หากการออก SSL ล้มเหลวทันทีหลังจากจับคู่ ให้รอให้ DNS เผยแพร่และเรียกใช้ SSL ใหม่จากแดชบอร์ด CyberPanel ภายใต้ **SSL** > **Manage SSL**

### www Subdomain (ซับโดเมน www)

หากคุณเปิดใช้งาน **Auto-create www subdomain** ในการตั้งค่า Domain Mapping ของคุณ การเชื่อมต่อจะสร้าง virtual host alias สำหรับ `www.<domain>` ด้วย และเมื่อ Auto-SSL เปิดอยู่ มันก็จะออกใบรับรองที่ครอบคลุมทั้งแบบ apex และ www ครับ

### Email Forwarders (ตัวส่งอีเมล)

ເມື່ອ Addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ເປີດໃຊ້ງານຢູ່, CyberPanel ກໍສາມາດສະໜອງຄຸນສົມບັດການສົ່ງອີເມວໃຫ້ລູກຄ້າໄດ້ເລີດ. Forwarders ຈະຊ່ວຍສົ່ງຂໍ້ຄວາມຈາກທີ່ຢູ່ໂດເມນໜຶ່ງໄປຫາໃນ Inbox ອື່ນໂດຍບໍ່ຕ້ອງສ້າງ mailbox ໃໝ່, ເຊິ່ງມີປະໂຫຍດຫຼາຍສຳລັບ alias ເຊັ່ນ `info@customer-domain.test` ຫຼື `support@customer-domain.test`.

ກ່ອນທີ່ຈະເປີດໃຊ້ງານ forwarders ສຳລັບລູກຄ້າ:

1. ກວດສອບວ່າ constant ຂອງ CyberPanel ຂ້າງເທິງຖືກຕັ້ງຄ່າແລ້ວ ແລະ ການທົດສອບການເຊື່ອມຕໍ່ຜ່ານໄດ້.
2. ເປີດໃຊ້ Email provider ຂອງ CyberPanel ໃນການຕັ້ງຄ່າ Addon Emails.
3. ກວດສອບວ່າໂດເມນຂອງລູກຄ້າມີຢູ່ໃນ CyberPanel ແລ້ວກ່ອນທີ່ຈະສ້າງ forwarder.
4. ສ້າງ test forwarder ແລະ ສົ່ງຂໍ້ຄວາມຜ່ານມັນກ່ອນທີ່ຈະສະເໜີຟີເຈີນີ້ໃນ production plans.

ຖ້າການສ້າງ forwarder ລົ້ມເຫຼວ, ກະລຸນາກວດສອບ activity logs ຂອງ Ultimate Multisite ກ່ອນ, ແລ້ວກໍຢືນຢັນໃນ CyberPanel ວ່າ source domain ມີຢູ່ ແລະ API user ມີສິດການຈັດການອີເມວ.

## ອ້າງອີງການຕັ້ງຄ່າ

| Constant | ຕ້ອງການ | ຄ່າເລີ່ມຕົ້ນ | ຄຳອະທິບາຍ |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | ແມ່ນ | — | URL ໃໝ່ຂອງ CyberPanel instance ຂອງທ່ານລວມພອດ, ເຊັ່ນ: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | ແມ່ນ | — | Username ຂອງ admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | ແມ່ນ | — | Password ຂອງ admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | ແມ່ນ | `Default` | hosting package ຂອງ CyberPanelທີ່ຈະກຳນົດໃຫ້ກັບ virtual hosts ໃໝ່ |
| `WU_CYBERPANEL_AUTO_SSL` | ບໍ່ແມ່ນ | `true` | ສ້າງ Let's Encrypt SSL certificate ຫຼັງຈາກສ້າງ domain ແລ້ວ |
| `WU_CYBERPANEL_PHP_VERSION` | ບໍ່ແມ່ນ | `PHP 8.2` | PHP version ສຳລັບ virtual hosts ໃໝ່ (ຕ້ອງກົງກັບ version ທີ່ຕິດຕັ້ງຢູ່ໃນ CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | ບໍ່ແມ່ນ | — | ອີເມວຕິດຕໍ່ສຳລັບການລົງທະບຽນ SSL certificate |

## မှတ်ချက်ສຳຄັນ

API ຂອງ CyberPanel ໃຊ້การยืนยันตัวตนด้วย token ที่อิงตามเซสชัน (session-based token authentication) การผสานรวมนี้จะจัดการเรื่องการรับ token โดยอัตโนมัติในทุกครั้งที่มีการเรียก API

บัญชีผู้ดูแลระบบ CyberPanel ของคุณต้องมีสิทธิ์ในการสร้างและลบเว็บไซต์

CyberPanel ทำงานบนพอร์ต `8090` เป็นค่าเริ่มต้น หากเซิร์ฟเวอร์ของคุณมีการตั้งค่าไฟร์วอลล์ โปรดตรวจสอบให้แน่ใจว่าพอร์ตนี้สามารถเข้าถึงได้จากเว็บแอปพลิเคชันของ WordPress

การผสานรวมนี้ไม่ได้จัดการบันทึก DNS คุณต้องชี้ DNS ของโดเมนไปยังที่อยู่ IP ของเซิร์ฟเวอร์ก่อนที่จะแมปโดเมนใน Ultimate Multisite

หากคุณใช้ OpenLiteSpeed (OLS) การรีสตาร์ทอย่างสง่างามจะถูกเรียกโดยอัตโนมัติหลังจากมีการเปลี่ยนแปลง virtual host ไม่จำเป็นต้องเข้าไปจัดการด้วยตนเอง

## การแก้ไขปัญหา (Troubleshooting)

### API Connection Refused (ปฏิเสธการเชื่อมต่อ API)

- ตรวจสอบว่าพอร์ต `8090` เปิดอยู่บนไฟร์วอลล์ของเซิร์ฟเวอร์ของคุณหรือไม่
- ยืนยันว่าค่า `WU_CYBERPANEL_HOST` มีโปรโตคอล (`https://`) และพอร์ตที่ถูกต้อง
- ตรวจสอบว่าใบรับรอง SSL ของ CyberPanel ของคุณใช้งานได้หรือไม่ ใบรับรองที่ลงนามด้วยตัวเอง (self-signed certificates) อาจทำให้เกิดข้อผิดพลาดในการตรวจสอบ TLS ให้ตั้งค่า `WU_CYBERPANEL_VERIFY_SSL` เป็น `false` เฉพาะในสภาพแวดล้อมเครือข่ายส่วนตัวที่เชื่อถือได้เท่านั้น

### Authentication Errors (ข้อผิดพลาดในการยืนยันตัวตน)

- ตรวจสอบว่า `WU_CYBERPANEL_USERNAME` และ `WU_CYBERPANEL_PASSWORD` ของคุณถูกต้องหรือไม่ โดยการเข้าสู่ระบบ CyberPanel โดยตรง
- CyberPanel จะล็อกบัญชีหลังจากพยายามเข้าสู่ระบบล้มเหลวหลายครั้ง ให้ตรวจสอบ **Security** > **Brute Force Monitor** ใน CyberPanel หากมีการล็อกบัญชีเกิดขึ้น

### Domain Not Created (โดเมนไม่ถูกสร้าง)

- ตรวจสอบบันทึกกิจกรรมของ Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) สำหรับข้อความแสดงข้อผิดพลาดของ API
- ยืนยันว่าแพ็กเกจที่กำหนดใน `WU_CYBERPANEL_PACKAGE` มีอยู่ใน CyberPanel (**Packages** > **List Packages**) หรือไม่
- ตรวจสอบให้แน่ใจว่าโดเมนไม่ได้ถูกลงทะเบียนเป็นเว็บไซต์ใน CyberPanel แล้ว เพราะการสร้างเว็บไซต์ซ้ำจะทำให้เกิดข้อผิดพลาด

### SSL Certificate Not Issued (ยังไม่มีการออกใบรับรอง SSL)

- ตรวจสอบว่า DNS แพร่กระจายสมบูรณ์แล้วหรือไม่: คำสั่ง `dig +short your-domain.com` ควรจะแสดง IP ของเซิร์ฟเวอร์ของคุณออกมา

- Let's Encrypt มีการจำกัดอัตรา (rate limits) นะครับ ถ้าคุณเพิ่งออกใบรับรองหลายใบสำหรับโดเมนเดียวกัน ให้รอสักครู่ก่อนลองใหม่อีกครั้ง

- ตรวจสอบบันทึก SSL ของ CyberPanel ภายใต้ **Logs** > **Error Logs** เพื่อดูรายละเอียดเกี่ยวกับความล้มเหลวในการออกใบรับรอง

- ในกรณีฉุกเฉิน คุณสามารถออก SSL ด้วยตนเองจาก CyberPanel ได้: ไปที่ **SSL** > **Manage SSL** > เลือกโดเมน > **Issue SSL**

## เอกสารอ้างอิง

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
