---
title: ການເຊື່ອມຕໍ່ Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# ການເຊື່ອມຕໍ່ກັບ Cloudways

## ພາບລວມ {#overview}
Cloudways ແມ່ນເວທີໂຮດHosting ເປັນການຈັດການ (managed cloud hosting platform) ທີ່ຊ່ວຍໃຫ້ທ່ານສາມາດຕິດຕັ້ງເວັບໄຊ WordPress ໃສ່ຜູ້ໃຫ້ບໍລິການຄລາວຕ່າງໆ ເຊັ່ນ DigitalOcean, AWS, Google Cloud ແລະ ອື່ນໆ. ການເຊື່ອມຕໍ່ນີ້ຈະເຮັດໃຫ້ເກີດການ đồng bộ domain ໂດຍອັດຕະໂນມັດ ແລະ ການຈັດການໃບຢັ້ງຢືນ SSL (SSL certificate management) រវាង Ultimate Multisite ແລະ Cloudways.

## ຄຸນສົມບັດ {#features}
- ການđồng bộ domain ອັດຕະໂນມັດ
- ການຈັດການໃບຢັ້ງຢືນ SSL
- ຮອງຮັບ domain ເພີ່ມເຕີມ
- ການກວດສອບ DNS ສຳລັບໃບຢັ້ງຢືນ SSL

## ຂໍ້ກຳນົດ {#requirements}
ຄ່າຕ່າງໆຕໍ່ໄປນີ້ຕ້ອງຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ທາງເລືອກແມ່ນທ່ານສາມາດກຳນົດເພີ່ມເຕີມໄດ້:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'ລາຍຊື່ domain ແຍກດ້ວຍເຄື່ອງໝາຍ comma');
```

## ຄູ່ມືການຕັ້ງຄ່າ {#setup-instructions}

### 1. ເອົາຂໍ້ມູນ API ຂອງ Cloudways ຂອງທ່ານ {#1-get-your-cloudways-api-credentials}

1. ລॉगिनເຂົ້າສູ່ແດັດບອດ (dashboard) ຂອງ Cloudways ຂອງທ່ານ
2. ໄປທີ່ "Account" > "API Keys"
3. ສ້າງ API key ຖ້າທ່ານຍັງບໍ່ມີ
4. ຄັດລອກອີເມວ ແລະ API key ຂອງທ່ານ

### 2. ເອົາ Server ID ແລະ Application ID ຂອງທ່ານ {#2-get-your-server-and-application-ids}

1. ໃນແດັດບອດ Cloudways ຂອງທ່ານ, ໄປທີ່ "Servers"
2. ເລືອກ server ທີ່ທ່ານຕິດຕັ້ງ WordPress multisite ໄວ້
3. Server ID ສາມາດເຫັນໄດ້ໃນ URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. ໄປທີ່ "Applications" ແລະ ເລືອກ application WordPress ຂອງທ່ານ
5. App ID ສາມາດເຫັນໄດ້ໃນ URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. ເພີ່ມຄ່າຕ່າງໆເຂົ້າໃນ wp-config.php {#3-add-constants-to-wp-configphp}

ເພີ່ມຄ່າຕ່າງໆຕໍ່ໄປນີ້ເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ຖ້າທ່ານມີ **domain ພາຍນອກ** ອື່ນໆ (ທີ່ຢູ່ນອກເຄືອຂ່າຍ multisite ຂອງທ່ານ) ដែលຕ້ອງຖືກເກັບໄວ້ໃນລາຍການ alias ຂອງ Cloudways เสมอ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning ຫ້າມໃສ່ wildcard ເຄືອຂ່າຍຂອງທ່ານເອງ
**ຢ່າ**ເພີ່ມ `*.your-network.com` (ຫຼື ຮູບແບບ subdomain ໃດໆຂອງເຄືອຂ່າຍທ່ານ) ໃສ່ໃນ `WU_CLOUDWAYS_EXTRA_DOMAINS`។ សូមເບິ່ງ [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) ຂ້າງລຸ່ມນີ້ ເພື່ອຮູ້ວ່າເປັນຫຍັງຈຶ່ງບໍ່ຄວນເຮັດແບບນັ້ນ ເພາະມັນจะทำให้ไม่สามารถออกใบรับรอง SSL ໃຫ້ແຕ່ລະ tenant (per-tenant SSL certificates) ໄດ້។
:::

### 4. ຕັ້ງຄ່າການເຊື່ອມຕໍ່ (Enable the Integration) {#4-enable-the-integration}

1. ໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ເລືອກໄປທີ່ tab "Domain Mapping"
3. เลื่อนລົງມາที่ "Host Integrations"
4. ເປີດໃຊ້ງານการเชื่อมต่อ Cloudways (Cloudways integration)
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ (How It Works) {#how-it-works}

### ການđồng bộ Domain (Domain Syncing) {#domain-syncing}

ເມື່ອມີການ map domain ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະເອົາລາຍຊື່ domain ທັງໝົດທີ່ຖືກ map ຢູ່ໃນປັດຈຸບັນມາ
2. ມັນຈະເພີ່ມ domain ໃໝ່ເຂົ້າໃນລາຍການ (ພ້ອມກັບ www version ຖ້າມີ)
3. ມັນຈະສົ່ງລາຍຊື່ທັງໝົດໄປຫາ Cloudways ຜ່ານ API
4. Cloudways ຈະອັບເດດ alias domain ສຳລັບ application ຂອງທ່ານ

ໝາຍເຫດ: API ຂອງ Cloudways ຮຽກຮ້ອງໃຫ້ສົ່ງລາຍຊື່ domain ທັງໝົດໃນທຸກໆຄັ້ງ, ບໍ່ແມ່ນການເພີ່ມ ຫຼື ລຶບ domain ແຕ່ລະອັນເທົ່ານັ້ນ។

### ການຈັດການใบรับรอง SSL (SSL Certificate Management) {#ssl-certificate-management}

ຫຼັງຈາກທີ່ domain ເປັນການ đồng bộແລ້ວ:

1. ການເຊື່ອມຕໍ່ນີ້ຈະກວດສອບວ່າ domain ໃດມີ DNS record ທີ່ຊີ້ໄປຫາ server ຂອງທ່ານຢ່າງຖືກຕ້ອງ
2. ມັນຈະສົ່ງຄຳຮ້ອງຂໍໄປຫາ Cloudways ເພື່ອຕິດຕັ້ງ Let's Encrypt SSL certificates ສຳລັບ domain download ນັ້ນໆ
3. Cloudways ຈະເປັນຜູ້ຈັດການໃນການອອກ ແລະ ຕິດຕັ້ງใบรับรอง SSL

การเชื่อมต่อนี้จะขอใบรับรอง Let's Encrypt แบบ **มาตรฐาน** (ไม่ใช่แบบ wild card) จาก Cloudways เสมอ หากคุณใส่รูปแบบ wildcard ใน `WU_CLOUDWAYS_EXTRA_DOMAINS` ส่วนนำ `*.` จะถูกตัดออกก่อนคำขอ SSL ใบรับรองแบบ wildcard นั้นจะไม่ถูกติดตั้งโดยการเชื่อมต่อนี้เลย หากต้องการใช้ใบรับรองแบบ wildcard บน Cloudways คุณจะต้องติดตั้งด้วยตนเอง แต่การทำเช่นนั้นจะบล็อกการออก Let's Encrypt สำหรับโดเมนที่กำหนดเอง (custom domains) ของแต่ละโดเมนที่คุณแมปไว้ (ดูข้อควรระวังด้านล่าง)

## โดเมนเพิ่มเติม (Extra Domains) {#extra-domains}

ค่าคงที่ `WU_CLOUDWAYS_EXTRA_DOMAINS` ช่วยให้คุณสามารถระบุโดเมน **ภายนอก** เพิ่มเติมที่ควรเก็บไว้ในรายการ alias ของแอปพลิเคชัน Cloudways เสมอ ใช้มันสำหรับ:

- โดเมนภายนอกที่ไม่ได้รับการจัดการโดย Ultimate Multisite (เช่น เว็บไซต์ทางการตลาดแยกต่างหากที่ใช้แอปพลิเคชัน Cloudways เดียวกัน)
- โดเมนที่จอดไว้ (parked domains) หรือโดเมน staging ที่คุณต้องการเก็บไว้ในรายการ alias ของแอปพลิเคชัน

**อย่า** ใช้ค่าคงที่นี้สำหรับ subdomain wildcard ของเครือข่ายของคุณเอง (เช่น `*.your-network.com`) ดูข้อควรระวังเรื่อง SSL wildcard ด้านล่าง

## สำคัญ — ข้อควรระวังเกี่ยวกับ Wildcard SSL {#important--wildcard-ssl-pitfall}

ความผิดพลาดที่พบบ่อยเมื่อทำตามการตั้งค่าเริ่มต้นของ Cloudways คือการเพิ่ม wildcard เช่น `*.your-network.com` เข้าไปใน `WU_CLOUDWAYS_EXTRA_DOMAINS` หรือติดตั้งใบรับรอง SSL แบบ wildcard ของ Cloudways ด้วยตนเองสำหรับ wildcard นั้น

**ถ้าคุณทำเช่นนี้ Cloudways จะปฏิเสธที่จะออกใบรับรอง Let's Encrypt สำหรับโดเมนที่กำหนดเองของแต่ละผู้เช่า (per-tenant custom domains) ที่ Ultimate Multisite แมปไว้** Cloudways จะแทนที่ใบรับรอง SSL ที่ใช้งานอยู่บนแอปพลิเคชันทุกครั้ง และใบรับรอง wildcard ที่มีอยู่ก่อนแล้วบนแอปพลิเคชันจะบล็อกการออก Let's Encrypt สำหรับโดเมนนั้นๆ ที่การเชื่อมต่อนี้พึ่งพา

### การตั้งค่า Cloudways SSL ที่แนะนำสำหรับเครือข่าย Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. ໄປที่แท็บ **SSL Certificate** ในแอปพลิเคชัน Cloudways แล้วติดตั้งใบรับรอง **Let's Encrypt มาตรฐาน** ที่ครอบคลุมเฉพาะ `your-network.com` และ `www.your-network.com` เท่านั้น — ไม่ใช่แบบ wildcard (เช่น `*.your-network.com`)

2. อย่าใส่ `*.your-network.com` (หรือรูปแบบ subdomain อื่นๆ ของเครือข่ายคุณ) ในช่อง `WU_CLOUDWAYS_EXTRA_DOMAINS` เก็บค่าคงที่นั้นไว้สำหรับโดเมน **ภายนอก** เท่านั้น

3. สร้าง wildcard subdomain สำหรับแต่ละ tenant ที่ระดับ **DNS** เท่านั้น (เป็น record ชนิด `A` สำหรับ `*.your-network.com` ที่ชี้ไปที่ IP ของเซิร์ฟเวอร์ Cloudways ของคุณ) เพื่อให้ subsites สามารถเชื่อมต่อได้ จากนั้นการออก SSL สำหรับโดเมนที่กำหนดเองรายตัวจะถูกดำเนินการโดยอัตโนมัติผ่านการผสานรวม (integration) ด้วย Let's Encrypt

หากโดเมนที่กำหนดเองของ tenant ติดปัญหาเรื่อง SSL ให้ตรวจสอบแท็บ Cloudways SSL หากมีใบรับรองแบบ wildcard ทำงานอยู่ ให้ลบออก ออกใบรับรอง Let's Encrypt มาตรฐานสำหรับโดเมนหลักของเครือข่ายเท่านั้น และลบรายการ wildcard ใดๆ ออกจาก `WU_CLOUDWAYS_EXTRA_DOMAINS` จากนั้นให้สั่งทำ domain mapping ใหม่ (หรือรอการทำครั้งถัดไป) แล้วระบบผสานรวมจะเริ่มออกใบรับรองสำหรับแต่ละโดเมนอีกครั้ง

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### ปัญหาการเชื่อมต่อ API {#api-connection-issues}
- ตรวจสอบว่าอีเมลและ API key ของคุณถูกต้องหรือไม่
- ตรวจสอบว่า Server ID และ Application ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี Cloudways ของคุณมีสิทธิ์ที่จำเป็นครบถ้วน

### ปัญหาเกี่ยวกับ SSL Certificate {#ssl-certificate-issues}
- Cloudways ต้องการให้โดเมนมี DNS records ที่ถูกต้องชี้ไปยังเซิร์ฟเวอร์ของคุณก่อนที่จะออกใบรับรอง SSL
- การเชื่อมต่อนี้จะตรวจสอบ DNS records ก่อนที่จะขอใบรับรอง SSL
- หากยังไม่ได้รับใบรับรอง SSL ให้ตรวจสอบว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์อย่างถูกต้องหรือไม่
- **โดเมนที่กำหนดเองสำหรับแต่ละผู้เช่าติดปัญหาโดยไม่มี SSL?** ให้ตรวจสอบแท็บ SSL Certificate ในแอปพลิเคชัน Cloudways หากมีใบรับรองแบบ wildcard (ติดตั้งด้วยตนเอง หรือครอบคลุม `*.your-network.com`) กำลังใช้งานอยู่ Cloudways จะไม่สามารถออกใบรับรอง Let's Encrypt สำหรับโดเมนที่กำหนดเองแต่ละรายการได้ ให้เปลี่ยนเป็นใบรับรอง Let's Encrypt มาตรฐานที่ครอบคลุมเฉพาะโดเมนหลักของเครือข่าย (`your-network.com`, `www.your-network.com`) และลบรายการ wildcard ใดๆ ออกจาก `WU_CLOUDWAYS_EXTRA_DOMAINS` จากนั้นให้สั่งสร้างการแมปโดเมนใหม่ (หรือรอครั้งถัดไป) และระบบเชื่อมต่อจะขอใบรับรองสำหรับแต่ละโดเมน

### ไม่ได้เพิ่มโดเมน {#domain-not-added}
- ตรวจสอบ logs ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ยืนยันว่าโดเมนนั้นยังไม่ได้ถูกเพิ่มใน Cloudways
- ตรวจสอบให้แน่ใจว่าแผน Cloudways ของคุณรองรับจำนวนโดเมนที่คุณกำลังจะเพิ่ม
