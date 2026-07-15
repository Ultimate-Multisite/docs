---
title: ການເຊື່ອມຕໍ່ Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# ການເຊື່ອມຕໍ່ Hostinger (hPanel)

## ພາບລວມ {#overview}

Hostinger ແມ່ນຜູ້ໃຫ້ບໍລິການໂຮດເວັບທີ່ໄດ້ຮັບຄວາມນິຍົມ ເຊິ່ງມີແຜງຄວບຄຸມແບບທັນສະໄໝຊື່ວ່າ hPanel. ການເຊື່ອມຕໍ່ Ultimate Multisite Hostinger ຊ່ວຍໃຫ້ສາມາດສັງເກດການເຮັດວຽກຂອງໂດເມນໂດຍອັດຕະໂນມັດລະຫວ່າງ Ultimate Multisite ແລະ hPanel ຂອງ Hostinger, ເຮັດໃຫ້ທ່ານສາມາດຈັດການການแมપໂດເມນ (domain mappings) ແລະ subdomain ໄດ້ໂດຍອັດຕະໂນມັດຈາກແຜງ WordPress admin ຂອງທ່ານ.

## ຄຸນສົມບັດ {#features}

- ສ້າງ addon domain ອັດຕະໂນມັດໃນ hPanel
- ສ້າງ subdomain ອັດຕະໂນມັດໃນ hPanel (ສຳລັບການຕິດຕັ້ງ subdomain multisite)
- ລຶບໂດເມນເມື່ອລຶບການแมપ
- ການເຊື່ອມຕໍ່ທີ່ບໍ່ມີຮອຍແຜ່ກັບ API ຂອງການຈັດການໂດເມນໃນ hPanel

## ຂໍ້ກຳນົດ {#requirements}

ເພື່ອໃຊ້ການເຊື່ອມຕໍ່ Hostinger, ທ່ານຕ້ອງການ:

1. ບັນຊີ Hostinger ທີ່ມີການເຂົ້າເຖິງ hPanel
2. API token ຈາກ Hostinger
3. ຄ່າ constant (ຄ່າຕັ້ງຄ່າ) ຕໍ່ໄປນີ້ທີ່ຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ທາງເລືອກແມ່ນທ່ານສາມາດກຳນົດເພີ່ມໄດ້:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // API endpoint ປົກກະຕິ
```

## ຄູ່ມືການຕັ້ງຄ່າ {#setup-instructions}

### 1. ສ້າງ Hostinger API Token ຂອງທ່ານ {#1-generate-your-hostinger-api-token}

1. ເຂົ້າສູ່ລະບົບບັນຊີ Hostinger ຂອງທ່ານ ແລະ ເຂົ້າເຖິງ hPanel
2. ໄປທີ່ **Account Settings** → **API Tokens**
3. ກົດ **Create New Token** (ສ້າງ Token ໃໝ່)
4. ຕັ້ງຊື່ໃຫ້ Token ຂອງທ່ານມີຄຳອະທິບາຍທີ່ຊັດເຈນ (ເຊັ່ນ: "Ultimate Multisite")
5. ເລືອກສິດທິທີ່ຈຳເປັນ:
   - Domain management (ການຈັດການໂດເມນ)
   - Subdomain management (ການຈັດການ subdomain)
6. ຄັດລອກ Token ທີ່ໄດ້ຮັບ ແລະ ເກັບຮັກສາໄວ້ຢ່າງປອດໄພ

### 2. ຊອກຫາ Account ID ຂອງທ່ານ {#2-find-your-account-id}

1. ໃນ hPanel, ໄປທີ່ **Account Settings** → **Account Information**
2. Account ID ຂອງທ່ານຈະສະແດງຢູ່ໃນໜ້າ这
3. ຄັດລອກ ແລະ ເກັບຮັກສາ ID ນີ້ໄວ້ສຳລັບຂັ້ນຕອນຕໍ່ໄປ

### 3. ເພີ່ມ Constants ໃນ wp-config.php {#3-add-constants-to-wp-configphp}

ເພີ່ມຄ່າ constant ຕໍ່ໄປນີ້ເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ຖ້າบัญชี Hostinger ຂອງທ່ານໃຊ້ endpoint API ផ្សេង, អ្នកអាចកំណត់វាเองໄດ້ដូចນີ້:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. เปิดใช้งานการเชื่อมต่อ (Enable the Integration) {#4-enable-the-integration}

1. ใน WordPress admin ของคุณ ให้ไปที่ **Ultimate Multisite > Settings**
2. ไปที่แท็บ **Domain Mapping**
3. เลื่อนลงมาที่ **Host Integrations**
4. เปิดใช้งานการเชื่อมต่อ **Hostinger (hPanel)**
5. คลิก **Save Changes**

## มันทำงานอย่างไร (How It Works) {#how-it-works}

### Addon Domains (โดเมนเสริม) {#addon-domains}

เมื่อคุณแมปโดเมนใน Ultimate Multisite:

1. การเชื่อมต่อจะส่งคำขอไปยัง API ของ Hostinger เพื่อเพิ่มโดเมนนั้นเป็น addon domain
2. โดเมนจะถูกตั้งค่าให้ชี้ไปยังไดเรกทอรีหลัก (root directory) ของคุณ
3. เมื่อมีการลบการแมปโดเมนออก การเชื่อมต่อจะทำการลบ addon domain ออกจาก hPanel โดยอัตโนมัติ

### Subdomains (โดเมนย่อย) {#subdomains}

สำหรับการติดตั้ง subdomain multisite เมื่อสร้างไซต์ใหม่:

1. การเชื่อมต่อจะดึงส่วนของ subdomain ออกมาจากชื่อโดเมนเต็ม
2. มันจะส่งคำขอไปยัง API ของ Hostinger เพื่อเพิ่ม subdomain นั้น
3. โดเมนย่อยจะถูกตั้งค่าให้ชี้ไปยังไดเรกทอรีหลัก (root directory) ของคุณ

## ข้อควรระวังที่สำคัญ (Important Notes) {#important-notes}

- การเชื่อมต่อนี้ใช้ REST API ของ Hostinger ในการสื่อสารกับบัญชีของคุณ
- API token ของคุณต้องมีสิทธิ์ที่จำเป็นสำหรับการจัดการโดเมนและ subdomain
- การเชื่อมต่อนี้ไม่ได้จัดการเรื่อง DNS configuration; โดเมนจะต้องถูกชี้ไปยังบัญชี Hostinger ของคุณแล้วก่อน
- คำขอ API จะถูกส่งอย่างปลอดภัยผ่าน HTTPS
- โปรดเก็บรักษา API token ของคุณให้ปลอดภัย และห้ามแชร์มันสู่สาธารณะเด็ดขาด

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### ปัญหาการเชื่อมต่อ API (API Connection Issues) {#api-connection-issues}

ตรวจสอบว่า API token ຂອງທ່ານถูกต้องและยังไม่หมดอายุ
ตรวจสอบว่า Account ID ของคุณถูกต้องหรือไม่
ตรวจสอบให้แน่ใจว่า API token ของคุณมีสิทธิ์ที่จำเป็นสำหรับการจัดการโดเมน
ตรวจสอบว่าบัญชี Hostinger ของคุณเปิดใช้งานอยู่และอยู่ในสถานะที่ดี

### โดเมนยังไม่ได้เพิ่ม {#domain-not-added}

- ตรวจสอบ log ของ Ultimate Multisite ว่ามีข้อความผิดพลาดอะไรหรือไม่
- ตรวจสอบว่าโดเมนนั้นยังไม่ได้ถูกเพิ่มในบัญชี Hostinger ของคุณ
- ตรวจสอบให้แน่ใจว่าบัญชี Hostinger ของคุณยังไม่ถึงขีดจำกัดสำหรับโดเมนเสริม (addon domains)
- ยืนยันว่าโดเมนนั้นชี้ไปยัง nameservers ของ Hostinger อย่างถูกต้อง

### ปัญหาใบรับรอง SSL (SSL Certificate Issues) {#ssl-certificate-issues}

- การเชื่อมต่อนี้ไม่ได้จัดการเรื่องการออกใบรับรอง SSL
- โดยปกติแล้ว Hostinger จะมีใบรับรอง SSL ฟรีผ่าน AutoSSL
- คุณสามารถจัดการใบรับรอง SSL ได้โดยตรงใน hPanel ภายใต้ส่วน **SSL/TLS**
- หรือจะใช้ Let's Encrypt ร่วมกับฟีเจอร์ AutoSSL ของ Hostinger ก็ได้

## การสนับสนุน (Support) {#support}

หากต้องการความช่วยเหลือเพิ่มเติมเกี่ยวกับการเชื่อมต่อกับ Hostinger โปรดดูที่:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
