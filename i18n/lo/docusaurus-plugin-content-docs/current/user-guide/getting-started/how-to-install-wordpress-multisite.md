---
title: ວິທີຕິດຕັ້ງ WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# ວິທີການຕິດຕັ້ງ WordPress Multisite?

WordPress Multisite ຊ່ວຍໃຫ້ທ່ານມີເວັບໄຊທ໌ຫຼາຍແຫ່ງຢູ່ໃນການຕິດຕັ້ງດຽວ. ນີ້ແມ່ນຟີເຈີທີ່ມີມາແລ້ວ, ແຕ່ໂດຍປົກກະຕິມັນຈະບໍ່ເປີດໃຊ້ງານຢູ່.

:::tip
Ultimate Multisite ປະກອບມີ **[Built-in Multisite Setup Wizard](./multisite-setup-wizard)** ເຊິ່ງເຮັດໃຫ້ຂັ້ນຕອນທັງໝົດນີ້ເປັນອັດຕະໂນມັດ. ຖ້າທ່ານຕິດຕັ້ງ Ultimate Multisite ແລ້ວ, ພວກເຮົາແນະນຳໃຫ້ໃຊ້ wizard ນີ້ ແທນທີ່ຈະເຮັດຕາມຂັ້ນຕອນດ້ວຍຕົນເອງຂ້າງລຸ່ມນີ້.
:::

ເນື່ອງຈາກ Ultimate Multisite ເປັນ plugin ທີ່ເຮັດວຽກໃນເຄືອຂ່າຍເທົ່ານັ້ນ, ໃນບົດຮຽນນີ້, ທ່ານຈະໄດ້ຮຽນຮູ້ວິທີຕິດຕັ້ງ ແລະ ຕັ້ງຄ່າ WordPress Multisite ដោយໃສ່ມືເອງ. ຂໍ້ຄວາມນີ້ອີງຕາມ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), ຈາກ WPBeginner.

**ສິ່ງທີ່ຄວນເອົາໃຈໃສ່ກ່ອນທີ່ຈະສ້າງເຄືອຂ່າຍ multisite ຂອງທ່ານ:**

  * ໃຫ້ເລືອກ hosting WordPress ທີ່ດີ! ເວັບໄຊທ໌ໃນເຄືອຂ່າຍຈະໃຊ້ຊັບພະຍາກອນຂອງ server ດຽວກັນ.

  * ໃນກໍລະນີທີ່ທ່ານມີເວັບໄຊທ໌ໜ້ອຍໆທີ່ມີການເຂົ້າເຖິງບໍ່ຫຼາຍ, shared hosting ກໍອາດຈະໃຊ້ໄດ້ກັບທ່ານ.

  * **Managed WordPress hosting providers** ສ່ວນໃຫຍ່ມີ Multisite ມາໃຫ້ແບບ plug-and-play (ພວກເຂົາຕິດຕັ້ງ WordPress ພ້ອມກັບ Multisite ທີ່ເປີດໃຊ້ງານ ແລະ ຕັ້ງຄ່າໄວ້ໃຫ້ແລ້ວ). ນີ້ແມ່ນກໍລະນີຂອງ WP Engine, Closte, Cloudways ແລະ ອື່ນໆ. ຖ້າທ່ານບໍ່ແນ່ໃຈວ່າຜູ້ໃຫ້ບໍລິການ hosting ຂອງທ່ານເປັນແບບນັ້ນຫຼືບໍ່, ຄວນຕິດຕໍ່ຫາ support ຂອງເຂົາເຈົ້າກ່ອນທີ່ຈະໄປຕໍ່ໃນບົດຮຽນນີ້.

  * ການເຮັດຄວາມເຂົ້າໃຈກັບການຕິດຕັ້ງ WordPress ແລະ ການແກ້ໄຂໄຟລ໌ໂດຍໃຊ້ FTP ກໍເປັນສິ່ງທີ່ດີ.

_**ສຳຄັນ**_ **:** ຖ້າທ່ານກຳລັງຕັ້ງຄ່າເຄືອຂ່າຍ multisite ໃນເວັບໄຊທ໌ WordPress ທີ່ມີຢູ່ແລ້ວ, ຢ່າລືມເຮັດສອງຢ່າງນີ້:

  * ສ້າງ backup ຄົບຖ້ວນຂອງເວັບໄຊທ໌ WordPress ຂອງທ່ານ.

  * ປິດ (Deactivate) plugin ທັງໝົດໃນເວັບໄຊທ໌ຂອງທ່ານໂດຍການໄປທີ່ໜ້າ plugins ແລະ ເລືອກ _Deactivate_ ຈາກ bulk actions ແລ້ວຈຶ່ງກົດ _Apply_.

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้าปลั๊กอิน WordPress แสดงการดำเนินการปิดใช้งานแบบกลุ่ม -->

เพื่อให้เปิดใช้งาน Multisite คุณต้องเชื่อมต่อกับเว็บไซต์ของคุณก่อนโดยใช้ FTP client หรือ cPanel file manager แล้วเปิดไฟล์ wp-config.php เพื่อแก้ไข

ก่อนบรรทัด _*จบแล้ว หยุดแก้ไข! ขอให้สนุกกับการเขียนบล็อกนะ.*_ ให้เพิ่มโค้ดสั้นๆ ต่อไปนี้:

define('WP_ALLOW_MULTISITE', true);

บันทึกและอัปโหลดไฟล์ wp-config.php กลับไปยังเซิร์ฟเวอร์ของคุณ

เมื่อเปิดใช้งานคุณสมบัติ multisite บนเว็บไซต์ของคุณ ก็ถึงเวลาตั้งค่าเครือข่ายของคุณแล้ว

ไปที่ **Tools » Network Setup** (เครื่องมือ » การตั้งค่าเครือข่าย)

ตอนนี้คุณต้องบอก WordPress ว่าคุณจะใช้โครงสร้างโดเมนแบบไหนสำหรับไซต์ในเครือข่ายของคุณ: subdomain หรือ subdirectory

หากคุณเลือก subdomains คุณต้องเปลี่ยนการตั้งค่า DNS สำหรับการแมปโดเมน และตรวจสอบให้แน่ใจว่าได้ตั้งค่า _**wildcard subdomains**_ (subdomain แบบ wildcard) สำหรับเครือข่าย multisite ของคุณแล้ว

กลับไปที่ Network Setup ตั้งชื่อสำหรับเครือข่ายของคุณ และตรวจสอบให้แน่ใจว่าอีเมลในช่องอีเมลผู้ดูแลระบบของ Network นั้นถูกต้อง คลิก _Install_ เพื่อดำเนินการต่อ

เพิ่มโค้ดนี้ ซึ่งจัดเตรียมโดย WordPress ไปยังไฟล์ _**wp-config.php**_ ของคุณ:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

และโค้ดนี้ ซึ่งจัดเตรียมโดย WordPress ไปยังไฟล์ _**.htaccess**_ ของคุณด้วย:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# เพิ่มเครื่องหมายทับท้ายให้กับ /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ໃຊ້ FTP client ຫຼື file manager (ຖ້າເຈົ້າໃຊ້ program ເຊັ່ນ cPanel) ໄປຄັດລອກ ແລະ ວາງ code ໃນສອງໄຟລ໌ນີ້.

ສຸດທ້າຍ, ລົງຊື່ເຂົ້າ WordPress site ຂອງເຈົ້າອີກເທື່ອໜຶ່ງເພື່ອເຂົ້າເຖິງ network multisite ຂອງເຈົ້າ.

**ມັນສຳຄັນທີ່ຈະຕ້ອງທົດສອບ ແລະ ເພີ່ມຄວາມແນ່ໃຈວ່າເຈົ້າສາມາດສ້າງ subsite ໃນການຕິດຕັ້ງ WordPress Multisite ຂອງເຈົ້າໄດ້ ກ່ອນທີ່ຈະຕິດຕັ້ງ Ultimate Multisite.**

ເພື່ອສ້າງ subsite:

  1. ເປີດ wp-admin website ຂອງເຈົ້າ

  2. ໄປທີ່ My Sites > Sites (/wp-admin/network/sites.php)

  3. ກົດ Add New ຢູ່ເທິງສຸດ

  4. ຕື່ມຂໍ້ມູນທຸກຢ່າງ:

  * Site Address — ຫ້າມໃຊ້ “www” ເລີຍ

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ຊື່ຂອງ site, ສາມາດປ່ຽນໄດ້ໃນພາຍຫຼັງ

  * Admin Email — ຕັ້ງເປັນຜູ້ໃຊ້ admin ເລີ່ມຕົ້ນສຳລັບ subsite ນັ້ນ

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

ຫຼັງຈາກຕື່ມຂໍ້ມູນແລ້ວ, ກົດປຸ່ມ "Add site". ເມື່ອສ້າງ subsite ໃໝ່ສໍາເລັດແລ້ວ, ໃຫ້ເຂົ້າໄປເບິ່ງມັນເພື່ອຢືນຢັນວ່າ subsite ນັ້ນເຮັດວຽກໄດ້.

## ปัญหาທົ່ວໄປ: {#common-problems}

### 1. ຂ້ອຍສາມາດສ້າງ site ໃໝ່ໄດ້ ແຕ່ບໍ່ສາມາດເຂົ້າເຖິງໄດ້. {#1-i-can-create-new-sites-but-they-are-not-accessible}

ຖ້າເຈົ້າເລືອກໃຊ້ subdomain, ເຈົ້າກໍຕ້ອງຕັ້ງຄ່າ wildcard subdomains ສຳລັບ network multisite ຂອງເຈົ້າດ້ວຍ.

ເພື່ອເຮັດແບບນັ້ນ, ໃຫ້ໄປທີ່ control panel ຂອງ hosting website ຂອງເຈົ້າ (ເຊັ່ນ cPanel/Plesk/Direct Admin ຂຶ້ນກັບຜູ້ໃຫ້ບໍລິການ hosting ຂອງເຈົ້າ).

ຊອກຫາຕົວເລືອກສຳລັບ “Domains” ຫຼື “Subdomains”. ໃນບາງ control panel, ມັນອາດຈະຖືກເອີ້ນວ່າ “Domain administration”.

ໃນຊ່ອງ subdomain (ຊື່ໂດເມນຍ่อย) ໃຫ້ໃສ່ເຄື່ອງໝາຍດາວ (*) ເລີຍ ແລ້ວມັນຈະຖາມເຈົ້າເລືອກຊື່ໂດເມນທີ່ຢາກເພີ່ມ subdomain ນັ້ນเข้าไปຢູ່ໃຕ້.

WordPress ຈະກວດພົບ root directory (ໂຟເल्ດຫຼັກ) ຂອງຊື່ໂດເມນທີ່ເຈົ້າເລືອກໃຫ້ໂດຍອັດຕະໂນມັດ. ເລືອກປຸ່ມ _Create_ ຫຼື _Save_ ເພື່ອເພີ່ມ wildcard subdomain ຂອງເຈົ້າໄດ້ເລີຍ. ການໃສ່ຂໍ້ມູນຄວນຈະມີຮູບແບບຄື “*.[mydomain.com](http://mydomain.com)”
