---
title: ການເຊື່ອມຕໍ່ Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# ການເຊື່ອມຕໍ່ກັບ Cloudflare {#cloudflare-integration}

## ພາບລວມ {#overview}
Cloudflare ແມ່ນຜູ້ໃຫ້ບໍລິການເຄືອຂ່າຍສົ່ງເນື້ອຫາ (CDN) ແລະ ຄວາມປອດໄພຊັ້ນນໍາທີ່ຊ່ວຍປົກປ້ອງ ແລະ ເຮັດໃຫ້ເວັບໄຊທ໌ໄວຂຶ້ນ. ການເຊື່ອມຕໍ່ນີ້ເຮັດໃຫ້ສາມາດຈັດການໂດເມນໂດຍອັດຕະໂນມັດລະຫວ່າງ Ultimate Multisite ແລະ Cloudflare, ໂດຍສະເພາະສຳລັບການຕິດຕັ້ງ subdomain multisite.

## ຄຸນສົມບັດ {#features}
- ສ້າງ subdomain ອັດຕະໂນມັດໃນ Cloudflare
- ຮອງຮັບ subdomain ທີ່ເປັນ Proxy (Proxied subdomain support)
- ການຈັດການ DNS record
- ການສະແດງ DNS record ທີ່ດີຂຶ້ນໃນ Ultimate Multisite admin

## ຂໍ້ກຳນົດ {#requirements}
ຄ່າ constant ຕໍ່ໄປນີ້ຕ້ອງຖືກກຳນົດໄວ້ໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ຄຳແນະນຳການຕັ້ງຄ່າ {#setup-instructions}

### 1. ດຶງເອົາ Cloudflare API Key ຂອງທ່ານ {#1-get-your-cloudflare-api-key}

1. ເຂົ້າສູ່ລະບົບ dashboard ຂອງ Cloudflare ຂອງທ່ານ
2. ໄປທີ່ "My Profile" (ກົດໃສ່ອີເມວຂອງທ່ານຢູ່ມຸມຂວາເທິງ)
3. ເລືອກ "API Tokens" ຈາກເມນູ
4. ສ້າງ API token ໃໝ່ດ້ວຍສິດທິຕໍ່ໄປນີ້:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. ຄັດລອກ API token ຂອງທ່ານ

### 2. ດຶງເອົາ Zone ID ຂອງທ່ານ {#2-get-your-zone-id}

1. ໃນ dashboard ຂອງ Cloudflare, ເລືອກໂດເມນທີ່ທ່ານຕ້ອງການໃຊ້
2. Zone ID ສາມາດເຫັນໄດ້ໃນ tab "Overview", ຢູ່ແຖບຂ້າງຂວາພາຍໃຕ້ "API"
3. ຄັດລອກ Zone ID

### 3. ເພີ່ມ Constants ໃນ wp-config.php {#3-add-constants-to-wp-configphp}

ເພີ່ມ constant ຕໍ່ໄປນີ້ເຂົ້າໃນໄຟລ໌ `wp-config.php` ຂອງທ່ານ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ເປີດການເຊື່ອມຕໍ່ (Enable the Integration) {#4-enable-the-integration}

1. ໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ໄປທີ່ tab "Domain Mapping"
3. เลื่อนລົງມາຫາ "Host Integrations"
4. ເປີດການເຊື່ອມຕໍ່ Cloudflare
5. ກົດ "Save Changes"

## ມັນເຮັດວຽກແນວໃດ {#how-it-works}

### ການຈັດການ Subdomain {#subdomain-management}

ເມື່ອມີການສ້າງໄຊທ໌ໃໝ່ໃນການຕິດຕັ້ງ subdomain multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະສົ່ງຄຳຮ້ອງຂໍໄປຫາ API ຂອງ Cloudflare ເພື່ອເພີ່ມລະຫັດ CNAME ສຳລັບ subdomain ນັ້ນໆ
2. Subdomain ນີ້ຖືກຕັ້ງຄ່າໃຫ້ເປັນ proxy ຜ່ານ Cloudflare by default (ສິ່ງນີ້ສາມາດປ່ຽນໄດ້ດ້ວຍ filters)
3. ເມື່ອ site ຖືກລຶບ, ການເຊື່ອມຕໍ່ນີ້ຈະເອົາ subdomain ອອກຈາກ Cloudflare

### ການສະແດງ DNS Record {#dns-record-display}

ການເຊື່ອມຕໍ່ນີ້ເຮັດໃຫ້ການສະແດງ DNS record ໃນ Ultimate Multisite admin ດີຂຶ້ນໂດຍ:

1. ເອົາ DNS records ມາໂດຍກົງຈາກ Cloudflare
2. ສະແດງວ່າ record ນັ້ນເປັນ proxy ຫຼື ບໍ່
3. ສະແດງຂໍ້ມູນເພີ່ມເຕີມກ່ຽວກັບ DNS records ນັ້ນໆ

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ທີ່ເຄີຍເອີ້ນວ່າ "Cloudflare for SaaS") ແມ່ນຟີເຈີຂອງ Cloudflare ທີ່ຊ່ວຍໃຫ້ລູກຄ້າຂອງທ່ານສາມາດໃຊ້ domain ເອງທີ່ມີ SSL ໃນ network multisite ຂອງທ່ານໄດ້. ນີ້ແມ່ນວິທີທີ່ແນະນຳສຳລັບການຕິດຕັ້ງ multisite ທີ່ map domain ໂດຍໃຊ້ Cloudflare, ເພາະວ່າ Cloudflare ຈະຈັດການການອອກ ແລະ ການຕໍ່ອາຍຸໃບຢັ້ງ (SSL certificate) ສຳລັບ domain custom ແຕ່ລະອັນໂດຍອັດຕະໂນມັດ.

### ມັນແຕກຕ່າງຈາກການເຊື່ອມຕໍ່ Cloudflare ປົກກະຕິແນວໃດ {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **ຈຸດປະສົງ** | ສ້າງ DNS records ອັດຕະໂນມັດສຳລັບ subdomain | ເປີດໃຊ້ domain custom (ທີ່ map) ໂດຍມີ SSL ທີ່ຈັດການໂດຍ Cloudflare |
| **ເໝາະສຳລັບ** | Multisite ທີ່ມີ subdomain | Multisite ທີ່ map domain |
| **SSL** | ຈັດການແຍກອອກໄປ | ຖືກຈັດການໂດຍ Cloudflare ອັດຕະໂນມັດ |

### ການຕັ້ງຄ່າ Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. ຢູ່ໃນแดชบอร์ดของ Cloudflare ของคุณ ให้เปิดโซน (zone) สำหรับโดเมนหลักของคุณ

2. ไปที่ **SSL/TLS > Custom Hostnames**

3. เพิ่ม origin สำรอง (fallback origin) ที่ชี้ไปยัง IP หรือ hostname ของเซิร์ฟเวอร์ของคุณ

4. สำหรับโดเมนลูกค้าแต่ละรายที่แมปไว้ใน Ultimate Multisite ให้เพิ่มรายการ Custom Hostname ใน Cloudflare คุณสามารถทำให้ขั้นตอนนี้เป็นอัตโนมัติโดยใช้ Cloudflare API ได้

5. Cloudflare จะออกและต่ออายุใบรับรอง TLS สำหรับ custom hostname แต่ละตัวโดยอัตโนมัติเมื่อ DNS ของลูกค้านั้นชี้มาที่เครือข่ายของคุณ

สำหรับเอกสารอ้างอิง API ฉบับเต็ม ดูได้ที่ [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)

:::note การอัปเดตคำศัพท์
ตั้งแต่ Ultimate Multisite v2.6.1 เป็นต้นไป ฟีเจอร์นี้จะถูกเรียกว่า **Cloudflare Custom Hostnames** ในการตั้งค่าและป้ายกำกับของปลั๊กอินทั้งหมด เวอร์ชันก่อนหน้าใช้ชื่อ "Cloudflare for SaaS" ซึ่งเป็นชื่อผลิตภัณฑ์ Cloudflare ที่อยู่เบื้องหลัง

## ข้อควรทราบที่สำคัญ {#important-notes}

ตามการอัปเดตล่าสุดของ Cloudflare ปัจจุบันสามารถใช้งาน wildcard proxying สำหรับลูกค้าทุกคนได้ หมายความว่า การผสานรวม DNS มาตรฐานของ Cloudflare ไม่มีความสำคัญเท่าเดิมสำหรับการติดตั้งซับโดเมนแบบ multisite เนื่องจากคุณสามารถตั้งค่า record DNS แบบ wildcard ใน Cloudflare ได้เลย

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

### ปัญหาการเชื่อมต่อ API {#api-connection-issues}
- ตรวจสอบให้แน่ใจว่า API token ของคุณถูกต้องและมีสิทธิ์ที่จำเป็น
- ตรวจสอบว่า Zone ID ของคุณถูกต้องหรือไม่
- ตรวจสอบให้แน่ใจว่าบัญชี Cloudflare ของคุณมีสิทธิ์ที่จำเป็นครบถ้วน

### ไม่มีการเพิ่มซับโดเมน {#subdomain-not-added}
- ตรวจสอบ log ของ Ultimate Multisite เพื่อดูข้อความแสดงข้อผิดพลาดใดๆ
- ตรวจสอบว่าซับโดเมนนั้นไม่ได้ถูกเพิ่มเข้าไปใน Cloudflare แล้วหรือไม่
- ตรวจสอบให้แน่ใจว่าแผนของ Cloudflare ที่คุณใช้อยู่รองรับจำนวน record DNS ที่คุณกำลังสร้างอยู่

### ปัญหาเรื่อง Proxy {#proxying-issues}

- ถ้าคุณไม่ต้องการให้ subdomain ถูก proxy คุณสามารถใช้ฟิลเตอร์ `wu_cloudflare_should_proxy` ได้เลยครับ/ค่ะ
- บางฟีเจอร์อาจจะไม่ทำงานถูกต้องเมื่อมีการทำ proxy (เช่น ฟังก์ชันบางอย่างของ WordPress admin)
- ลองพิจารณาใช้ Page Rules ของ Cloudflare เพื่อข้ามการแคชสำหรับหน้าแอดมินดูนะครับ/คะ
