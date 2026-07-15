---
title: ຊ່ອງໃສ່ຂໍ້ມູນການຈ່າຍເງິນ ແລະ DNS ຂອງລູກຄ້າ
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field ແລະ ການຈັດການ DNS ຂອງລູກຄ້າ

## ແຖບເລືອກໂດເມນໃນໜ້າຊຳລະເງິນ (Checkout field) {#the-domain-selection-checkout-field}

ແຖບ **Domain Selection** ແມ່ນສ່ວນໜຶ່ງຂອງໜ້າຊຳລະເງິນທີ່ໃຫ້ທາງລູກຄ້າເລືອກວິທີທີ່ຈະໄດ້ຮັບໂດເມນຂອງເວັບໄຊທ໌ຂອງເຂົາເຈົ້າ. ເພີ່ມມັນໃສ່ແບບຟອມຊຳລະເງິນໃດໆເພື່ອເປີດໃຊ້ການຂາຍໂດເມນ.

### ການເພີ່ມແຖບເຂົ້າໃນແບບຟອມຊຳລະເງິນ {#adding-the-field-to-a-checkout-form}

1. ໄປທີ່ **Network Admin › Ultimate Multisite › Checkout Forms**
2. ເປີດ ຫຼື ສ້າງແບບຟອມຊຳລະເງິນໃໝ່
3. ໃນຕົວຕັ້ງຄ່າ (editor) ຂອງການຊຳລະເງິນ, ໃຫ້ກົດ **Add Field**
4. ເລືອກ **Domain Selection** ຈາກລາຍການແຖບທີ່ມີຢູ່
5. ຕັ້ງຄ່າຕົວເລືອກຂອງແຖບ (ເບິ່ງខាងລຸ່ມນີ້)
6. ເກັບຮັກສາແບບຟອມ

### ຕົວເລືອກຂອງແຖບ {#field-options}

**Domain modes** — ເລືອກວ່າລູກຄ້າຈະເຫັນແທບໃດ. ແຕ່ລະໂໝດສາມາດເປີດໃຊ້ ຫຼື ປິດໄດ້ຢ່າງເປັນເອກະລາດ:

| Mode | ສິ່ງທີ່ມັນເຮັດ |
|---|---|
| **Subdomain** | ລູກຄ້າໃຊ້ subdomain ຟຣີໃນເຄືອຂ່າຍຂອງທ່ານ (ເຊັ່ນ: `mysite.yournetwork.com`). ບໍ່ຈຳເປັນຕ້ອງຈ່າຍເງິນ. |
| **Register New Domain** | ລູກຄ້າຄົ້ນຫາໂດເມນໃໝ່ ແລະ ລົງທະບຽນມັນຜ່ານຜູ້ໃຫ້ບໍລິການທີ່ທ່ານຕັ້ງຄ່າໄວ້. ໃຊ້ຜະລິດຕະພັນໂດເມນທີ່ກົງກັນກັບລາຄາ. |
| **Existing Domain** | ລູກຄ້າເຊື່ອມຕໍ່ (map) ໂດເມນທີ່ເຂົາເຈົ້າເປັນເຈົ້າຂອງຢູ່ແລ້ວ. ບໍ່ມີຄ່າທຳນຽມການລົງທະບຽນ. ໂດເມນຈະຖືກເຊື່ອມຕໍ່ກັບເວັບໄຊທ໌ຂອງເຂົາເຈົ້າໂດຍອັດຕະໂນມັດ. |

**Default mode** — ເມື່ອເປີດໃຊ້ທັງສາມໂໝດ, ແທບໃດຈະເປີດກ່ອນ? ຕັ້ງຄ່າເປັນ **Subdomain** ເພື່ອໃຫ້ການລົງທະບຽນໂດເມນເປັນທາງເລືອກ, ຫຼື **Register New Domain** ເພື່ອຊຸກຍູ້ໃຫ້ມີການຊື້.

**Domain product** — ສາມາດຕິດແຖບນີ້ເຂົ້າກັບຜະລິດຕະພັນໂດເມນສະເພາະໄດ້. ຖ້າບໍ່ໄດ້ຕັ້ງຄ່າ, Addon ຈະເລືອກຜະລິດຕະພັນທີ່ກົງກັນໂດຍອັດຕະໂນມັດຕາມ TLD (Top-Level Domain) ທີ່ລູກຄ້າຄົ້ນຫາ.

### ແຖບຕິດຕໍ່ຜູ້ລົງທະບຽນ (Registrant contact fields) {#registrant-contact-fields}

ເມື່ອລູກຄ້າເລືອກແທບ **Register New Domain**, ແບບຟອມຊຳລະເງິນຈະເພີ່ມແຖບຕິດຕໍ່ຜູ້ລົງທະບຽນເຂົ້າໄປໃນແບບຟອມໂດຍກົງ:

- ຊື່ ແລະ ນາມສະກຸນ (First name / Last name)
- ອີເມວ (Email address)
- ທີ່ຢູ່ (ຊ່ອງທີ 1, ເມືອງ, ແຂວງ/ແຂວງ, ລະຫັດໄປສະນີ, ປະເທດ)
- ເບີໂທລະສັບ

ສິ່ງເຫຼົ່ານີ້ແມ່ນຂໍ້ກຳນົດທີ່ຜູ້ລົງທະບຽນທຸກຄົນຕ້ອງເຮັດ ແລະ ໄດ້ຮັບການຢັ້ງຢືນກ່ອນທີ່ຈະສົ່ງ API call ເພື່ອລົງທະບຽນ. ເບີໂທລະສັບຈະຖືກຈັດຮູບແບບເປັນຮູບແບບສາກົນ `+CC.NNN` ອັດຕະໂນມັດຕາມທີ່ຜູ້ລົງທະບຽນຄາດຫວັງ.

### ໂປຣແກຣມ URL ຂອງໄຊທ໌ທີ່ສ້າງຂຶ້ນອັດຕະໂນມັດ (Auto-generated site URL) {#auto-generated-site-url}

ເມື່ອລູກຄ້າລົງທະບຽນ ຫຼື ເພີ່ມໂດເມນ, ແຖບ site URL ຈະຖືກຕື່ມຂໍ້ມູນໂດຍອັດຕະໂນມັດຈາກໂດເມນທີ່ເລືອກ. ລູກຄ້າບໍ່ຈຳເປັນຕ້ອງຕື່ມໃສ່ແຖບ URL ແຍກຕ່າງຫາກ.

### ພຶດຕິກຳການຄົ້ນຫາ (Search behaviour) {#search-behaviour}

- ການກວດສອບຄວາມຫວ່າງຂອງໂດເມນຈະເຮັດແບບ Real-time ໂດຍໃຊ້ AJAX ເມື່ອລູກຄ້າກຳລັງພິມ
- ຈະສະແດງຂໍ້ສະເໜີ TLD ທາງເລືອກອື່ນໆ ເມື່ອໂດເມນທີ່ຕ້ອງການບໍ່ມີໃຫ້ໃຊ້
- ລາຄາຈະຖືກດຶງມາແບບສົດໆ ແລະ ສະແດງຢ່າງຊັດເຈນ (ລາຄາລົງທະບຽນ, ລາຄາຕໍ່ການຕໍ່ອາຍຸ, ຄ່າບໍລິການ WHOIS ຄວາມເປັນສ່ວນຕົວທີ່ເປັນທາງເລືອກ)
- Coupon codes ຈະໃຊ້ໄດ້ກັບຜະລິດຕະພັນໂດເມນຄືກັບຜະລິດຕະພັນອື່ນໆ.

**ການປັບຕິແປງການຕອບສະໜອງຂອງການຄົ້ນຫາ (Tuning search responsiveness):**

```php
// ເພີ່ມເວລາ debounce delay (मिलीसेकнд) ເພື່ອຫຼຸດການໂທ API ໃນການເຊື່ອມຕໍ່ທີ່ຊ້າ
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // ຄ່າເລີ່ມຕົ້ນ: 500
});
```

**ການເພີ່ມ custom fields ເຂົ້າໃນແບບຟອມຄົ້ນຫາໂດເມນ:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## ການຈັດການ DNS ຂອງລູກຄ້າ (Customer DNS management) {#customer-dns-management}

ລູກຄ້າສາມາດຈັດການບັນທຶກ DNS ສຳລັບໂດເມນທີ່ໄດ້ລົງທະບຽນແລ້ວ ໄດ້ຈາກໜ້າ **My Account**, ພາຍໃຕ້ຂໍ້ມູນຂອງໂດເມນນັ້ນ.

### ປະເພດບັນທຶກທີ່ຮອງຮັບ (Supported record types) {#supported-record-types}

| Loại | ການນຳໃຊ້ |
|---|---|
| **A** | ເຊື່ອມຕໍ່ hostname ກັບ IPv4 address |
| **AAAA** | ເຊື່ອມຕໍ່ hostname ກັບ IPv6 address |
| **CNAME** | ສ້າງ alias ທີ່ຊີ້ໄປຫາ hostname ອື່ນ |
| **MX** | ກໍານົດ mail exchange server |
| **TXT** | ເພີ່ມ SPF, DMARC, ການຢັ້ງຢືນ (verification), ຫຼື ບັນທຶກຂໍ້ຄວາມອື່ນໆ |

### ຜູ້ໃຫ້ບໍລິການໃດທີ່ຮອງຮັບການຈັດການ DNS? {#which-providers-support-dns-management}

การจัดการ DNS (เพิ่ม, แก้ไข, ลบเรคคอร์ด) มีให้ใช้กับ **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** และ **Openprovider** ครับ สำหรับโดเมนของ **Hostinger** สามารถอัปเดตเซิร์ฟเวอร์เนมเซิร์ฟเวอร์ผ่าน Domain Seller ได้ครับ ส่วน DNS records ของโดเมนที่โฮสต์อยู่จะถูกจัดการโดยการผสานรวม (integration) การแมปโดเมนหลักของ Hostinger โดยตรงนะครับ สำหรับโดเมนจาก Namecheap, GoDaddy และ NameSilo จะแสดงสถานะและข้อมูลวันหมดอายุ แต่เราต้องจัดการ DNS โดยตรงในแผงควบคุมของผู้จดทะเบียนเองครับ

### DNS records เริ่มต้น (Default DNS records) {#default-dns-records}

คุณสามารถตั้งค่า DNS records เริ่มต้นที่ระบบจะนำไปใช้โดยอัตโนมัติเมื่อมีการลงทะเบียนโดเมนได้ ไปที่ **Settings › Domain Seller › Default DNS Records** ครับ

ค่าเริ่มต้นของ record จะรองรับโทเคน (token) สองแบบครับ:

| Token | แทนที่ด้วย |
|---|---|
| `{DOMAIN}` | ชื่อโดเมนที่ลงทะเบียนไว้ (เช่น `example.com`) |
| `{SITE_URL}` | URL ของเว็บไซต์ WordPress สำหรับไซต์ของลูกค้า |

**ตัวอย่าง — ชี้ apex domain และ www ไปยัง IP เซิร์ฟเวอร์ของคุณ:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### ผู้ดูแลระบบ: การดูและแก้ไข DNS {#admin-viewing-and-editing-dns}

ผู้ดูแลระบบเครือข่ายสามารถดูและแก้ไข DNS records สำหรับโดเมนของลูกค้าได้จากหน้าแก้ไขโดเมนใน **Network Admin › Ultimate Multisite › Domains** ครับ
