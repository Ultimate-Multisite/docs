---
title: Khuaws Integrasi
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## Tổng quan (Overview) {#overview}
Cloudways هو platform hosting cloud management, णू allows you to deploy WordPress sites on various cloud providers like DigitalOcean, AWS, Google Cloud, and more. Integration นี้ทำให้การซิงค์ domain อัตโนมัติและการจัดการ SSL certificate ระหว่าง Ultimate Multisite กับ Cloudways เป็นไปได้

## คุณสมบัติ (Features) {#features}
- Automatic domain syncing:  automatics sync domain
- SSL certificate management: จัดการใบรับรอง SSL
- Support for extra domains: รองรับ domain เพิ่มเติม
- DNS validation for SSL certificates: ตรวจสอบ DNS สำหรับ SSL certificates

## ข้อกำหนดเบื้องต้น (Requirements) {#requirements}
คุณต้องกำหนดค่าคงที่ (constants) เหล่านี้ในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

โดยทางเลือก คุณสามารถกำหนดค่าเพิ่มเติมได้ด้วย:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## คำแนะนำในการตั้งค่า (Setup Instructions) {#setup-instructions}

### 1. รับ Cloudways API Credentials ของคุณ (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. เข้าสู่ระบบ dashboard ของ Cloudways ของคุณ
2. ไปที่ "Account" > "API Keys"
3. สร้าง API key ถ้าคุณยังไม่มี
4. คัดลอกอีเมลและ API key ของคุณ

### 2. รับ Server ID และ Application IDs ของคุณ (Get Your Server and Application IDs) {#2-get-your-server-and-application-ids}

1. ใน dashboard ของ Cloudways ให้ไปที่ "Servers"
2. เลือกเซิร์ฟเวอร์ที่คุณติดตั้ง WordPress multisite ไว้
3. Server ID จะปรากฏอยู่ใน URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. ไปที่ "Applications" และเลือกแอปพลิเคชัน WordPress ของคุณ
5. App ID จะปรากฏอยู่ใน URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. เพิ่ม Constants เข้าไปใน wp-config.php (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

เพิ่มค่าคงที่ต่อไปนี้เข้าไปในไฟล์ `wp-config.php` ของคุณ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ຖ້າເຈົ້າ có **domain ຕ່າງໆ** ອື່ນໆ (ທີ່ຢູ່ນອກເຄືອຂ່າຍ multisite ຂອງເຈົ້າ) ທີ່ຕ້ອງມີຢູ່ໃນ list aliases ຂອງ Cloudways ເທື່ອລະຄັ້ງ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning ຢ່າໃສ່ wildcard ຂອງເຄືອຂ່າຍເຈົ້າເອງ
**ຢ່າ** ເພີ່ມ `*.your-network.com` (ຫຼື pattern subdomain ໃດໆຂອງເຄືອຂ່າຍເຈົ້າ) ໃສ່ໃນ `WU_CLOUDWAYS_EXTRA_DOMAINS`. ເບິ່ງ [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) ຂ້າງລຸ່ມເພື່ອເຫດຜົນວ່າເປັນຫຍັງຈຶ່ງປ້ອງກັນບໍ່ໃຫ້ມີການອອກໃບຢັ້ງຢືນ SSL ຂອງແຕ່ລະ tenant.
:::

### 4. ເປີດໃຊ້ການເຊື່ອມຕໍ່ (Enable the Integration) {#4-enable-the-integration}

1. ໃນ WordPress admin, ໄປທີ່ Ultimate Multisite > Settings
2. ໄປທີ່ tab "Domain Mapping"
3. ລໍຖ້າໃຫ້ມັນລົງມາຈົນເຖິງ "Host Integrations"
4. ເປີດໃຊ້ການເຊື່ອມຕໍ່ Cloudways (Enable the Cloudways integration)
5. ກົດ "Save Changes"

## ວິທີການເຮັດວຽກ (How It Works) {#how-it-works}

### ການ đồng bộ Domain (Domain Syncing) {#domain-syncing}

ເມື່ອ domain ຖືກ map ໃນ Ultimate Multisite:

1. ການເຊື່ອມຕໍ່ນີ້ຈະດຶງເອົາ domain ທັງໝົດທີ່ຖືກ map ຢູ່ໃນປັດຈຸບັນ
2. ມັນຈະເພີ່ມ domain ໃໝ່ເຂົ້າໃນ list (ພ້ອມກັບ www version ຖ້າມີ)
3. ມັນຈະສົ່ງ list ທັງໝົດໄປຫາ Cloudways ຜ່ານ API
4. Cloudways ຈະອັບເດດ aliases ຂອງ domain ສຳລັບ application ຂອງເຈົ້າ

ໝາຍເຫດ: API ຂອງ Cloudways ຮຽກຮ້ອງໃຫ້ສົ່ງ list domain ທັງໝົດໃນທຸກໆຄັ້ງ, ບໍ່ແມ່ນພຽງແຕ່ເພີ່ມ ຫຼື ລຶບ domain ແຕ່ລະອັນ.

### ການຈັດການໃບຢັ້ງຢືນ SSL (SSL Certificate Management) {#ssl-certificate-management}

ຫຼັງຈາກທີ່ domain ຖືກ đồng bộແລ້ວ:

1. ການເຊື່ອມຕໍ່ນີ້ຈະກວດສອບວ່າ domain ໃດມີ DNS records ທີ່ຊີ້ໄປຫາ server ຂອງເຈົ້າຢ່າງຖືກຕ້ອງ
2. ມັນຈະສົ່ງຄຳຮ້ອງຂໍໄປຫາ Cloudways ເພື່ອຕິດຕັ້ງ Let's Encrypt SSL certificates ສຳລັບ domain download ນັ້ນໆ
3. Cloudways ຈະເປັນຜູ້ຈັດການໃນການອອກ ແລະ ຕິດຕັ້ງໃບຢັ້ງຢືນ SSL

ການເຊື່ອມຕໍ່ (integration) ຂໍໃບຢັ້ງຢືນ **standard** (ບໍ່ແມ່ນ wildcard) ຈາກ Let's Encrypt ຈາກ Cloudways ເທື່ອລະຄັ້ງ. ຖ້າເຈົ້າໃສ່ pattern wildcard ໃນ `WU_CLOUDWAYS_EXTRA_DOMAINS`, ຕົວເລີ່ມຕົ້ນທີ່ເປັນ `*.` ຈະຖືກຕັດອອກກ່ອນການຮ້ອງຂໍ SSL — ຕົວ wildcard ນັ້ນບໍ່ໄດ້ຖືກຕິດຕັ້ງໂດຍ integration ນີ້. ເພື່ອໃຊ້ໃບຢັ້ງຢືນ wildcard ໃນ Cloudways, ເຈົ້າຕ້ອງຕິດຕັ້ງມັນດ້ວຍຕົນເອງ, ແຕ່ການເຮັດແບບນັ້ນຈະຂັດຂວາງການອອກ Let's Encrypt ຕໍ່ໂດເມນສຳລັບ custom domains ທີ່ຖືກ map (ເບິ່ງກັບກັບຈຸດອ່ອນລົ້ມຂອງໃບຢັ້ງຢືນ wildcard ຂ້າງລຸ່ມນີ້).

## Extra Domains (ໂດເມນເພີ່ມເຕີມ) {#extra-domains}

ຄ່າ constant `WU_CLOUDWAYS_EXTRA_DOMAINS` ອະນຸຍາດໃຫ້ເຈົ້າລະບຸ external domains ເພີ່ມເຕີມທີ່ຄວນຈະຖືກເກັບໄວ້ໃນ list aliases ຂອງ application Cloudways ສະເໝີ. ໃຊ້ສິ່ງນີ້ເພື່ອ:

- External domains ທີ່ບໍ່ໄດ້ຖືກຈັດການໂດຍ Ultimate Multisite (ເຊັ່ນ: website ການຕະຫຼາດແຍກຕ່າງຫາກທີ່ໃຊ້ application Cloudways ດຽວກັນ).
- external domains ຫຼື staging domains ທີ່ເຈົ້າຢາກໃຫ້ເກັບໄວ້ໃນ list aliases ຂອງ application.

**ຢ່າ**ໃຊ້ constant ນີ້ສຳລັບ subdomain wildcard ຂອງເຄືອຂ່າຍຂອງເຈົ້າເອງ (ເຊັ່ນ: `*.your-network.com`). ເບິ່ງ pitfall ຂອງ SSL wildcard ຂ້າງລຸ່ມນີ້.

## ສິ່ງທີ່ສຳຄັນ — Pitfall ຂອງ Wildcard SSL {#important--wildcard-ssl-pitfall}

ຂໍ້ຜິດພາດທົ່ວໄປເວລາທີ່ເຮັດຕາມການຕັ້ງຄ່າເລີ່ມຕົ້ນຂອງ Cloudways ແມ່ນການເພີ່ມ wildcard ເຊັ່ນ `*.your-network.com` ໃສ່ໃນ `WU_CLOUDWAYS_EXTRA_DOMAINS`, ຫຼື ການຕິດຕັ້ງໃບຢັ້ງຢືນ SSL wildcard ຂອງ Cloudways ສຳລັບ wildcard ນັ້ນດ້ວຍຕົນເອງ.

**ຖ້າເຈົ້າເຮັດແບບນີ້, Cloudways ຈະປະຕິເສດທີ່ຈະອອກ Let's Encrypt certificates ສຳລັບ custom domains ຕໍ່ tenant ທີ່ Ultimate Multisite map.** Cloudways ຈະປ່ຽນໃບຢັ້ງຢືນ SSL ທີ່ກຳລັງໃຊ້ຢູ່ເທິງ application ທຸກຄັ້ງ, ແລະ wildcard certificate ທີ່ມີຢູ່ແລ້ວໃນ application ຈະຂັດຂວາງການອອກ Let's Encrypt ຕໍ່ໂດເມນສຳລັບ integration ນີ້.

### ການຕັ້ງຄ່າ Cloudways SSL ແນະນຳສຳລັບເຄືອຂ່າຍ Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application-aaj **SSL Certificate** tab-tsh, install **standard Let's Encrypt certificate** onej, which cover only `your-network.com` thiab `www.your-network.com` — **tsaw** wildcard.

2. **Tsaw** put `*.your-network.com` (or any subdomain pattern of your own network) haws `WU_CLOUDWAYS_EXTRA_DOMAINS`. Keep that constant for **external** domains only.

3. Create the per-tenant subdomain wildcard at the **DNS** level only (an `A` record for `*.your-network.com` pointing at your Cloudways server IP) so subsites resolve. SSL for individual mapped custom domains is then issued automatically by the integration via Let's Encrypt.

If tenants' custom domains of yee stuck without SSL, check the Cloudways SSL tab. If a wildcard certificate active there, remove it, reissue a standard Let's Encrypt certificate for the main network domain only, thiab remove any wildcard entries from `WU_CLOUDWAYS_EXTRA_DOMAINS`. Then re-trigger a domain mapping (or wait for the next one) thiab the integration will start issuing per-domain certificates again.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Verify that your email thiab API key is correct
- Check that your server thiab application IDs is correct
- Ensure that your Cloudways account has the necessary permissions

### ปัญหาเกี่ยวกับ SSL Certificate {#ssl-certificate-issues}
- Cloudways ຕ້ອງການໃຫ້โดเมนมี DNS records ที่ชี้ไปที่เซิร์ฟเวอร์ของคุณก่อนที่จะออก SSL certificates
- การเชื่อมต่อนี้จะตรวจสอบ DNS records ก่อนที่จะขอ SSL certificates
- ถ้าไม่ได้รับ SSL certificates ให้เช็คว่าโดเมนของคุณชี้ไปยัง IP address ของเซิร์ฟเวอร์ถูกต้องหรือไม่
- **โดเมนแบบ custom ที่เป็นของแต่ละคนติดปัญหาเรื่อง SSL?** ให้ไปดูที่แท็บ SSL Certificate ในแอปพลิเคชัน Cloudways หากมี wildcard certificate (ติดตั้งด้วยมือ หรือครอบคลุม `*.your-network.com`) ทำงานอยู่ Cloudways จะไม่สามารถออก Let's Encrypt certificates สำหรับโดเมน custom ที่แมปแยกกันได้ ให้เปลี่ยนเป็น Let's Encrypt certificate มาตรฐานที่ครอบคลุมเฉพาะโดเมนหลักของเครือข่าย (`your-network.com`, `www.your-network.com`) และลบรายการ wildcard ใดๆ ออกจาก `WU_CLOUDWAYS_EXTRA_DOMAINS` จากนั้นให้ลองสร้างการแมปโดเมนใหม่ (หรือรอครั้งต่อไป) แล้วระบบเชื่อมต่อจะขอ certificates สำหรับแต่ละโดเมน

### ไม่ได้เพิ่มโดเมน {#domain-not-added}
- เช็ค logs ของ Ultimate Multisite ว่ามีข้อความ error อะไรไหม
- ตรวจสอบว่าโดเมนนั้นไม่ได้ถูกเพิ่มเข้าไปใน Cloudways แล้ว
- ตรวจสอบให้แน่ใจว่าแผน Cloudways ของคุณรองรับจำนวนโดเมนที่คุณกำลังจะเพิ่ม
