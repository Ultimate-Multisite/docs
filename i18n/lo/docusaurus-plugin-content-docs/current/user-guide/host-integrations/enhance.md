---
title: ເພີ່ມການເຊື່ອມຕໍ່ Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# ປັບປຸງການເຊື່ອມຕໍ່ Control Panel

## ภาพรวม {#overview}
Enhance ເປັນ control panel ແບບທັນສະໄໝທີ່ໃຫ້ຄວາມສາມາດໃນການເຮັດວຽກອັດຕະໂນມັດ ແລະ ການຈັດການ hosting ທີ່ຊົງພະລັງ. ການເຊື່ອມຕໍ່ນີ້ຈະຊ່ວຍໃຫ້ເກີດການສຳຮອງຂໍ້ມູນ domain ອັດຕະໂນມັດ ແລະ ການຈັດການ SSL certificate ລະຫວ່າງ Ultimate Multisite ແລະ Enhance Control Panel.

**ການສົນທະນາທີ່ກ່ຽວຂ້ອງ:** ເບິ່ງ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ເພື່ອເບິ່ງຄຳແນະນຳຂອງຊຸມຊົນ ແລະ ຂໍ້ມູນເພີ່ມເຕີມ.

## ຄຸນສົມບັດ {#features}
- ການສຳຮອງ domain ອັດຕະໂນມັດເມື່ອໄດ້ map domain ໃນ Ultimate Multisite
- ການຈັດຫາ SSL certificate ອັດຕະໂນມັດຜ່ານ LetsEncrypt ເມື່ອ DNS ແລ່ນໄດ້ (resolve)
- ຮອງຮັບ subdomain ສຳລັບເຄືອຂ່າຍທີ່ເຮັດວຽກໃນໂໝດ subdomain
- ການເອົາ domain ອອກເມື່ອລຶບການ map ຂໍ້ມູນ
- ການທົດສອບການເຊື່ອມຕໍ່ເພື່ອຢັ້ງຢືນຂໍ້ມູນ API credentials

## ຂໍ້ກຳນົດ {#requirements}

### ຂໍ້ກຳນົດຂອງລະບົບ {#system-requirements}
- Enhance Control Panel ຕ້ອງໄດ້ຕິດຕັ້ງ ແລະ ເຂົ້າເຖິງໄດ້
- WordPress Multisite ຕ້ອງຖືກ host ຫຼື ເຊື່ອມຕໍ່ກັບ server ຂອງ Enhance
- Apache web server (Enhance ຮອງຮັບການຕັ້ງຄ່າແບບ Apache; LiteSpeed Enterprise ມີໃຫ້ໃນລາຄາທີ່ຫຼຸດລົງ)

### ການເຂົ້າເຖິງ API {#api-access}
ທ່ານຕ້ອງມີສິດເປັນ administrator ໃນ Enhance Control Panel ເພື່ອສ້າງ API tokens.

## ການດຶງເອົາ API Credentials ຂອງທ່ານ {#getting-your-api-credentials}

### 1. ສ້າງ API Token {#1-create-an-api-token}

1. ລັອກເຂົ້າສູ່ລະບົບ Enhance Control Panel ໃນຖານະ administrator
2. ກົດທີ່ **Settings** ໃນເມນູການນຳທາງ (navigation menu)
3. ເຂົ້າໄປທີ່ **Access Tokens**
4. ກົດ **Create Token**
5. ຕັ້ງຊື່ໃຫ້ token ນັ້ນມີຄຳອະທິບາຍທີ່ຊັດເຈນ (ເຊັ່ນ: "Ultimate Multisite Integration")
6. ມອບໝາຍຮອງຮັບບົດບາດ (role) ເປັນ **System Administrator**
7. ສຳລັບວັນໝົດອາຍຸ:
   - ປ່ອຍຫວ່າງໄວ້ຖ້າທ່ານຕ້ອງການໃຫ້ token ນັ້ນບໍ່ມີวันหมดอายุເລີຍ
   - ຫຼື ຕັ້ງວັນໝົດອາຍຸສະເພາະເພື່ອຈຸດປະສົງດ້ານຄວາມປອດໄພ
8. ກົດ **Create**

หลังจากสร้างเสร็จแล้ว คุณจะเห็น **Access Token** และ **Organization ID** แสดงขึ้นมา **โปรดบันทึกสิ่งเหล่านี้ทันที** เพราะโทเค็นนี้จะแสดงให้ดูแค่ครั้งเดียวเท่านั้น

### 2. รับ Organization ID ของคุณ {#2-get-your-organization-id}

Organization ID จะแสดงอยู่ในหน้า Access Tokens ในกล่องข้อมูลสีน้ำเงินที่มีป้ายกำกับว่า "Org ID: {your_id}"

Organization ID จะมีรูปแบบเป็น UUID คือ: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

คุณยังสามารถหา Organization ID ของลูกค้าได้โดยทำตามขั้นตอนเหล่านี้:
1. ไปที่หน้า **Customers**
2. คลิก **Manage customer** สำหรับลูกค้ารายนั้น
3. ดูที่ URL - Organization ID คือตัวอักษรและตัวเลขที่อยู่หลัง `/customers/`

### 3. รับ Server ID ของคุณ {#3-get-your-server-id}

ในการหา Server ID (ซึ่งจำเป็นสำหรับการดำเนินการเกี่ยวกับ domain):

1. ใน Enhance Control Panel ให้ไปที่ **Servers**
2. คลิกที่เซิร์ฟเวอร์ที่คุณติดตั้ง WordPress ไว้
3. Server ID (รูปแบบ UUID) จะปรากฏอยู่ใน URL หรือรายละเอียดของเซิร์ฟเวอร์
4. หรือคุณสามารถใช้ API เพื่อแสดงรายการเซิร์ฟเวอร์ได้ดังนี้:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID จะมีรูปแบบ UUID คือ: `00000000-0000-0000-0000-000000000000`

### 4. รับ API URL ของคุณ {#4-get-your-api-url}

API URL ของคุณคือ URL ของ Enhance Control Panel ของคุณพร้อมต่อท้ายด้วย `/api/`:

```
https://your-enhance-panel.com/api/
```

**สำคัญ:** ต้องมีพาธ `/api/` ด้วย ข้อผิดพลาดที่พบบ่อย ได้แก่:
- การใช้แค่ชื่อโดเมนโดยไม่มี `/api/`
- การใช้ HTTP แทน HTTPS (ต้องใช้ HTTPS เพื่อความปลอดภัย)

## การตั้งค่า {#configuration}

### ค่าคงที่ที่จำเป็น {#required-constants}

เพิ่มค่าคงที่ต่อไปนี้ลงในไฟล์ `wp-config.php` ของคุณ:

// ເພີ່ມການເຊື່ອມຕໍ່ກັບ Control Panel ໃຫ້ດີຂຶ້ນ
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### ການຕັ້ງຄ່າຜ່ານ Integration Wizard (ຕົວຊີ້ມືການເຊື່ອມຕໍ່) {#setup-via-integration-wizard}

1. ໃນ WordPress admin ຂອງທ່ານ, ໄປທີ່ **Ultimate Multisite** > **Settings**
2. ເລືອກໄປທີ່ tab **Integrations**
3. ຊອກຫາ **Enhance Control Panel Integration** ແລ້ວចុច **Configuration** (ຕັ້ງຄ່າ)
4. Wizard ຈະຊ່ວຍທ່ານໃນການຕັ້ງຄ່າ:
   - **Step 1:** ການແນະນຳ ແລະ ສະຫຼຸບຟີເຈີຕ່າງໆ
   - **Step 2:** ໃສ່ຂໍ້ມູນ API ຂອງທ່ານ (Token, API URL, Server ID)
   - **Step 3:** ທົດສອບການເຊື່ອມຕໍ່
   - **Step 4:** ກວດສອບ ແລະ ເປີດໃຊ້ງານ

ທ່ານສາມາດເລືອກໄດ້ວ່າ:
- ໃຫ້ wizard ສ່ວນຕົວໃສ່ constant တွေကို `wp-config.php` file ຂອງທ່ານໂດຍອັດຕະໂນມັດ
- ຄັດລອກຄ່າ constant ແລ້ວເພີ່ມມັນດ້ວຍຕົນເອງ

## ການຕັ້ງຄ່າ WordPress ເພີ່ມເຕີມ {#additional-wordpress-configuration}

ອີງຕາມຄວາມຄິດເຫັນຂອງຊຸມຊົນ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ທ່ານອາດຈະຕ້ອງຕັ້ງຄ່າການຕັ້ງຄ່າເພີ່ມເຕີມເຫຼົ່ານີ້:

### ການຕັ້ງຄ່າ .htaccess {#htaccess-configuration}

ຖ້າທ່ານ gặp ปัญหาเกี่ยวกับการแมપโดเมน (domain mapping):
1. ລຶບ file Enhance `.htaccess` ຕົ້ນສະບັບອອກ
2. ແທນມັນດ້ວຍ standard WordPress Multisite `.htaccess` file

### Cookie Constants {#cookie-constants}

ເພີ່ມ constant ເຫຼົ່ານີ້ເຂົ້າໃນ `wp-config.php` ເພື່ອຮັບປະກັນການຈັດການ cookie ທີ່ຖືກຕ້ອງໃນ domain ທີ່ແຕກຕ່າງກັນ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ເມື່ອມີການแมપโดเมน (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. ผู้ใช้ทำการแมปโดเมนที่กำหนดเองใน Ultimate Multisite (หรือสร้างเว็บไซต์ใหม่ในโหมด subdomain)
2. การเชื่อมต่อจะส่งคำขอ POST ไปยัง API ของ Enhance: `/servers/{server_id}/domains`
3. Enhance จะเพิ่มโดเมนนั้นเข้าไปในการตั้งค่าเซิร์ฟเวอร์ของคุณ
4. เมื่อ DNS ชี้มาที่เซิร์ฟเวอร์ของคุณ Enhance จะทำการติดตั้งใบรับรอง SSL โดยอัตโนมัติผ่าน LetsEncrypt
5. โดเมนจะพร้อมใช้งานด้วย HTTPS

### เมื่อมีการลบโดเมนออก {#when-a-domain-is-removed}

1. ลบการแมปโดเมนใน Ultimate Multisite
2. การเชื่อมต่อจะสอบถาม Enhance เพื่อหา ID ของโดเมนนั้น
3. จะมีการส่งคำขอ DELETE ไปยัง: `/servers/{server_id}/domains/{domain_id}`
4. Enhance จะลบโดเมนออกจากรายการตั้งค่าเซิร์ฟเวอร์ของคุณ

### การตรวจสอบ DNS และ SSL {#dns-and-ssl-checking}

Ultimate Multisite มีการตรวจสอบ DNS และ SSL มาให้ในตัวครับ:
- คุณสามารถตั้งค่าช่วงเวลาในการตรวจสอบได้ที่ **Domain Mapping Settings** (ค่าเริ่มต้น: 300 วินาที/5 นาที)
- ระบบจะตรวจสอบการแพร่กระจายของ DNS ก่อนที่จะทำเครื่องหมายว่าโดเมนนั้นใช้งานได้จริง
- ความถูกต้องของใบรับรอง SSL จะถูกตรวจสอบโดยอัตโนมัติ
- Enhance จัดการเรื่องการติดตั้ง SSL ให้เองทั้งหมด ดังนั้นจึงไม่จำเป็นต้องตั้งค่า SSL ด้วยตัวเอง

## การตรวจสอบการตั้งค่า {#verifying-setup}

### ทดสอบการเชื่อมต่อ {#test-the-connection}

1. ใน Integration Wizard ให้ใช้ขั้นตอน **Test Connection** (ทดสอบการเชื่อมต่อ)
2. ปลั๊กอินจะพยายามแสดงรายการโดเมนบนเซิร์ฟเวอร์ของคุณ
3. ข้อความแจ้งเตือนความสำเร็จจะยืนยันว่า:
   - API credentials ถูกต้อง
   - API URL เข้าถึงได้
   - Server ID มีความถูกต้อง
   - สิทธิ์ถูกตั้งค่าอย่างเหมาะสม

### หลังจากแมปโดเมนแล้ว {#after-mapping-a-domain}

1. แมปโดเมนทดสอบใน Ultimate Multisite
2. ตรวจสอบ Log ของ Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. ตรวจสอบใน Enhance Control Panel ว่ามีการเพิ่มโดเมนเข้าไปแล้วหรือไม่:
   - ไปที่ **Servers** > **Your Server** > **Domains**
   - โดเมนใหม่ควรปรากฏอยู่ในรายการ
4. เมื่อ DNS แพร่กระจายเสร็จแล้ว ให้ตรวจสอบว่า SSL ถูกติดตั้งโดยอัตโนมัติเรียบร้อยแล้ว

## ການແກ້ໄຂບັນຫາ (Troubleshooting) {#troubleshooting}

### ບັນຫາການເຊື່ອມຕໍ່ API (API Connection Issues) {#api-connection-issues}

**ຂໍ້ຜິດພາດ: "Failed to connect to Enhance API"** (ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບ Enhance API ໄດ້)
- ກວດສອບວ່າ `WU_ENHANCE_API_URL` ມີ `/api/` ຢູ່ທ້າຍຊື່ຫຼືບໍ່.
- ໃຫ້ແນ່ໃຈວ່າທ່ານກຳລັງໃຊ້ HTTPS, ບໍ່ແມ່ນ HTTP.
- ກວດເບິ່ງວ່າສາມາດເຂົ້າເຖິງແຜງການຕັ້ງຄ່າ (Enhance panel) ໄດ້ຈາກເຊີເວີ WordPress ຂອງທ່ານບໍ່.
- ກວດສອບວ່າບໍ່ມີກົດລະບຽບ Firewall ໃດໆທີ່ກຳລັງຂັດຂວາງການເຊື່ອມຕໍ່.

**ຂໍ້ຜິດພາດ: "Enhance API Token not found"** (ບໍ່ພົບ Enhance API Token)
- ໃຫ້ແນ່ໃຈວ່າ `WU_ENHANCE_API_TOKEN` ຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php`.
- ກວດສອບວ່າ Token ນັ້ນບໍ່ໄດ້ຖືກລຶບ ຫຼື ເກມໝົດອາຍຸຢູ່ໃນ Enhance ແລ້ວບໍ່.
- ກວດເບິ່ງຂໍ້ຜິດພิมพ์ຂອງຄ່າ Token.

**ຂໍ້ຜິດພາດ: "Server ID is not configured"** (Server ID ບໍ່ໄດ້ຖືກຕັ້ງຄ່າ)
- ກວດສອບວ່າ `WU_ENHANCE_SERVER_ID` ຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php`.
- ໃຫ້ແນ່ໃຈວ່າ Server ID ນັ້ນຢູ່ໃນຮູບແບບ UUID (Unique Universal Identifier) ທີ່ຖືກຕ້ອງ.
- ຢືນຢັນວ່າເຊີເວີດັ່ງກ່າວມີຢູ່ໃນແຜງການຕັ້ງຄ່າ (Enhance panel) ຂອງທ່ານ.

### ບໍ່ໄດ້ເພີ່ມ Domain (Domain Not Added) {#domain-not-added}

**ກວດເບິ່ງ Log:**
1. ໄປທີ່ **Ultimate Multisite** > **Logs**.
2. ກອງຂໍ້ມູນ (Filter) ຕາມ **integration-enhance**.
3. ຊອກຫາຂໍ້ຄວາມຜິດພາດທີ່ຊີ້ໃຫ້ເຫັນບັນຫາ.

**ສາເຫດທົ່ວໄປ:**
- ຮູບແບບຂອງຊື່ Domain ບໍ່ຖືກຕ້ອງ.
- Domain ນັ້ນມີຢູ່ໃນ Enhance ແລ້ວ.
- ສິດໃນການເຂົ້າເຖິງ API ບໍ່ພຽງພໍ (ໃຫ້ແນ່ໃຈວ່າ Token ມີບົດບາດ System Administrator).
- Server ID ບໍ່ກົງກັບເຊີເວີຕົວຈິງໃນ Enhance.

### ບັນຫາໃບຢັ້ງຢືນ SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL ຍັງບໍ່ທັນຖືກສ້າງຂຶ້ນ:**
- ກວດສອບວ່າ DNS ຊີ້ໄປທີ່ IP address ຂອງເຊີເວີຂອງທ່ານແລ້ວບໍ່.
- ກວດເບິ່ງວ່າ Domain ນັ້ນສະແດງຜົນໄດ້ຖືກຕ້ອງ: `nslookup yourdomain.com`.
- Enhance ຮຽກຮ້ອງໃຫ້ DNS ແລ່ນ (resolve) ກ່ອນທີ່ຈະສາມາດສ້າງ SSL ໄດ້.
- ການສ້າງ SSL ໂດຍທົ່ວໄປຈະໃຊ້ເວລາ 5-10 ນາທີຫຼັງຈາກ DNS ເປັນການແຜ່ກະຈາຍຂໍ້ມູນແລ້ວ.
- ກວດເບິ່ງ Log ຂອງ Enhance Control Panel ເພື່ອຫາຂໍ້ຜິດພາດສະເພາະກ່ຽວກັບ SSL.

**ການແກ້ໄຂບັນຫາ SSL ແບບເປີດເຜີຍໃນ Enhance:**
1. ໄປທີ່ **Servers** > **Your Server** > **Domains**.
2. ຊອກຫາ Domain ຂອງທ່ານ ແລະ ກວດສອບສະຖານະ SSL ຂອງມັນ.
3. ຖ້າຈຳເປັນ, ທ່ານສາມາດເລີ່ມການສ້າງ SSL ໄດ້ດ້ວຍຕົນເອງ (manually trigger).

### ໄລຍະເວລາໃນການກວດສອບ DNS (DNS Check Interval) {#dns-check-interval}

ຖ້າโดเมน (domains) ຫຼື ใบรับรอง SSL ใช้เวลานานในการเปิดใช้งาน:
1. ไปที่ **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. หาการตั้งค่า **DNS Check Interval**
3. ปรับจากค่าเริ่มต้น 300 วินาที เป็นค่าน้อยกว่า (ขั้นต่ำ: 10 วินาที)
4. **หมายเหตุ:** ช่วงเวลาที่สั้นลง หมายถึงการตรวจสอบบ่อยขึ้น แต่จะทำให้เซิร์ฟเวอร์ทำงานหนักขึ้น

### ข้อผิดพลาดในการยืนยันตัวตน (Authentication Errors) {#authentication-errors}

**ข้อผิดพลาด HTTP 401/403:**
- สร้าง API token ใหม่ใน Enhance
- ตรวจสอบว่าโทเค็นนั้นมีบทบาทเป็น **System Administrator** หรือไม่
- ตรวจสอบว่าโทเค็นยังไม่หมดอายุ
- ตรวจสอบให้แน่ใจว่าคุณใช้ Organization ID ที่ถูกต้อง (แม้ว่าโดยปกติจะไม่จำเป็นต้องใส่ใน URL ก็ตาม)

### การวิเคราะห์ Log {#log-analysis}

เปิดการบันทึกแบบละเอียด:
```php
// เพิ่มใน wp-config.php เพื่อดีบักที่ดียิ่งขึ้น
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

จากนั้นตรวจสอบ log ที่:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: มีให้ดูในหน้า admin ของ Enhance

## API Reference (ข้อมูลอ้างอิง API) {#api-reference}

### การยืนยันตัวตน (Authentication) {#authentication}
คำขอ API ทั้งหมดใช้การยืนยันตัวตนแบบ Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint ที่ใช้บ่อย {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Add a Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### เอกสาร API ฉบับเต็ม {#full-api-documentation}
เอกสาร API ฉบับสมบูรณ์: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (แนวทางปฏิบัติที่ดีที่สุด) {#best-practices}

### ความปลอดภัย (Security) {#security}
- **ห้ามใส่ API tokens ลงใน version control เด็ดขาด**
- เก็บ token ไว้ในไฟล์ `wp-config.php` ซึ่งควรถูกยกเว้นจากการใช้ Git
- ใช้ token ที่มีสิทธิ์ที่เหมาะสม (System Administrator สำหรับการเชื่อมต่อเต็มรูปแบบ)
- ตั้งค่าวันหมดอายุของ token สำหรับสภาพแวดล้อม production
- หมุนเวียน (Rotate) token เป็นระยะ

### ประสิทธิภาพ (Performance) {#performance}
- ใช้ช่วงเวลาตรวจสอบ DNS เริ่มต้น (300 วินาที) เพื่อหลีกเลี่ยงการเรียก API มากเกินไป
- เฝ้าดูทรัพยากรของเซิร์ฟเวอร์ Enhance เมื่อมีการดำเนินการโดเมนขนาดใหญ่
- พิจารณาจัดลำดับการเพิ่มโดเมนหากต้องแมปโดเมนจำนวนมากพร้อมกัน

### การตรวจสอบ (Monitoring) {#monitoring}
- ตรวจสอบ log ของ Ultimate Multisite เป็นประจำเพื่อหาข้อผิดพลาดในการเชื่อมต่อ
- ตั้งค่าการเฝ้าดูสำหรับการเพิ่มโดเมนที่ล้มเหลว
- ตรวจสอบว่าใบรับรอง SSL ถูกติดตั้งอย่างถูกต้องหรือไม่
- เฝ้าดูความจุของเซิร์ฟเวอร์ Enhance และขีดจำกัดของโดเมน

## แหล่งข้อมูลเพิ่มเติม (Additional Resources) {#additional-resources}

- **เอกสารทางการของ Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **เอกสาร API ของ Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **ฟอรัมชุมชน Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **การพูดคุยบน GitHub:** [Issue #265 - เคล็ดลับการเชื่อมต่อ Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **คู่มือการแมปโดเมน Ultimate Multisite:** ดูหน้า wiki "วิธีการตั้งค่า Domain Mapping v2"

## การสนับสนุน (Support) {#support}

หากคุณพบปัญหา:
1. ตรวจสอบส่วน Troubleshooting ด้านบน
2. ทบทวน log ของ Ultimate Multisite
3. ปรึกษา [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. ติดต่อฝ่ายสนับสนุนของ Enhance สำหรับปัญหาเฉพาะของแผงควบคุม (panel-specific issues)
5. สร้างการสนทนาใหม่พร้อม log ข้อผิดพลาดโดยละเอียดเพื่อขอความช่วยเหลือจากชุมชน

## หมายเหตุ (Notes) {#notes}

- ການເຊື່ອມຕໍ່ນີ້ຈັດການແຕ່ຊື່ໂດເມນສະຫຼາກເທົ່ານັ້ນ; ລະບົບ Enhance ຈະຈັດການໃບຢັ້ງຢືນ SSL ອັດຕະໂນມັດໃຫ້
- ການເຊື່ອມຕໍ່ນີ້ຮອງຮັບທັງການแมપໂດເມນທີ່ເປັນແບບສະເພາະ ແລະ ເຊື້ອຊ້ອນ (subdomain) site
- ສາມາດຕັ້ງຄ່າການສ້າງ subdomain www ໂດຍອັດຕະໂນມັດໄດ້ໃນການຕັ້ງຄ່າ Domain Mapping
- Enhance ໃນປັດຈຸບັນຮອງຮັບການຕັ້ງຄ່າ Apache (ມີ LiteSpeed Enterprise ໃຫ້ໃຊ້ງານເພີ່ມເຕີມ)
- ການລຶບໂດເມນອອກຈາກ Ultimate Multisite ຈະເຮັດໃຫ້ໂດເມນດັ່ງກ່າວຖືກເອົາອອກຈາກ Enhance ແຕ່ອາດຈະບໍ່ໄດ້ລຶບໃບຢັ້ງຢືນ SSL ທີ່ກ່ຽວຂ້ອງທັນທີ
