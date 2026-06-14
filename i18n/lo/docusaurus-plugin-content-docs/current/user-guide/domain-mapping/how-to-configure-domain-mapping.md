---
title: ວິທີການຕັ້ງຄ່າການຈັບຊ່ອງໂດເມນ
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# ວິທີການຕັ້ງຄ່າການຈັບຊ່ອງໂດເມນ (v2)

_**ໝາຍເຫດສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite ເພື່ອໃຊ້ໃນເວີຊັນ 2.x.**_

ໜຶ່ງໃນຄຸນສົມບັດທີ່ທັນສະໄໝຂອງເຄືອຂ່າຍແບບ premium ແມ່ນຄວາມສາມາດໃນການໃຫ້ໂອກາດແກ່ລູກຄ້າຂອງພວກເຮົາທີ່ຈະຕິດໂດເມນລະດັບສູງ (top-level domain) ໃສ່ເວັບໄຊຂອງເຂົາເຈົ້າ. ເພາະວ່າ, ອັນໃດເບິ່ງເປັນມືອາຊີບກວ່າ: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ຫຼື [_**joesbikeshop.com**_? ນັ້ນຄືເຫດທີ່ Ultimate Multisite ມີຟັງຊັນນີ້ມາໃຫ້ແລ້ວ, ໂດຍບໍ່ຈຳເປັນຕ້ອງໃຊ້ plugin ຂອງຄົນທີສາມ.

## ການຈັບຊ່ອງໂດເມນແມ່ນຫຍັງ?

ຕາມຊື່ຂອງມັນ, ການຈັບຊ່ອງໂດເມນ (domain mapping) ແມ່ນຄວາມສາມາດທີ່ Ultimate Multisite ສະເໜີໃຫ້ ເພື່ອຮັບຄຳຮ້ອງຂໍໂດເມນທີ່ເປັນແບບສະເພາະ ແລະ ມັດທະນາການຮ້ອງຂໍນັ້ນເຂົ້າກັບເວັບໄຊໃນເຄືອຂ່າຍຂອງເຈົ້າໂດຍມີໂດເມນນັ້ນຕິດຢູ່.

### ວິທີການຕັ້ງຄ່າ domain mapping ໃນเครือข่าย Ultimate Multisite ຂອງທ່ານ

ການຈັບຊ່ອງໂດເມນຕ້ອງການການຕັ້ງຄ່າບາງຢ່າງຈາກຝ່າຍເຈົ້າເພື່ອໃຫ້ມັນເຮັດວຽກໄດ້. ແຕ່ຂອບໃຈ, Ultimate Multisite ຈະເຮັດວຽກທີ່ຍາກລຳບົບໃຫ້ເຈົ້າໂດຍອັດຕະໂນມັດ ເພື່ອໃຫ້ເຈົ້າສາມາດຕອບສະໜອງຕາມຂໍ້ກຳນົດງ່າຍໆ.

ໃນລະຫວ່າງການຕິດຕັ້ງ Ultimate Multisite, wizard (ໂຕຊ່ວຍ) ຈະສຳເນົາ ແລະ ຕິດຕັ້ງ **sunrise.php** ໄປໃນໂຟເल्ເດີ້ທີ່ກຳນົດໄວ້ໂດຍອັດຕະໂນມັດ. **wizard ຈະບໍ່ໃຫ້ເຈົ້າໄປຕໍ່ໄດ້ຈົນກວ່າຂັ້ນຕອນນີ້ຈະເຮັດສຳເລັດ.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

ໝາຍຄວາມວ່າ ເມື່ອ wizard ການຕິດຕັ້ງ Ultimate Multisite ສິ້ນສຸດການຕັ້ງຄ່າເຄືອຂ່າຍຂອງເຈົ້າແລ້ວ, ເຈົ້າສາມາດເລີ່ມຈັບຊ່ອງໂດເມນທີ່ເປັນແບບສະເພາະໄດ້ທັນທີ.

ຂໍໃຫ້ຮູ້ໄວ້ວ່າ domain mapping ໃນ Ultimate Multisite ບໍ່ແມ່ນສິ່ງທີ່ບັງຄັບໃຊ້ (mandatory). ເຈົ້າສາມາດເລືອກທີ່ຈະໃຊ້ຟັງຊັນ domain mapping ແບບ Native ຂອງ WordPress Multisite ຫຼື ວິທີການຈັບຊ່ອງໂດເມນອື່ນໆໄດ້.

ຖ້າທ່ານຕ້ອງການປິດການເຮັດ map ຂອງ Ultimate Multisite domain ເພື່ອໃຫ້ສາມາດໃຊ້ວິທີແກ້ໄຂການ map domain ອື່ນໄດ້, ທ່ານສາມາດປິດຄ່າສະເໜີນີ້ໄດ້ພາຍໃຕ້ **Ultimate Multisite > Settings > Domain Mapping**

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

ຢູ່ໃຕ້ຕົວເລືອກນີ້ ທ່ານຍັງຈະເຫັນຕົວເລືອກ **Force Admin Redirect** (ບັງຄັບປ່ຽນການແນະນຳຜູ້ໃຊ້). ຕົວເລືອກນີ້ຊ່ວຍໃຫ້ທ່ານສາມາດຄວບຄຸມໄດ້ວ່າລູກຄ້າຂອງເຈົ້າຈະເຂົ້າເຖິງ admin dashboard ໄດ້ທັງໃນ custom domain ແລະ subdomain ຫຼື ເຂົ້າເຖິງໄດ້ພຽງແຕ່ໜຶ່ງອັນເທົ່ານັ້ນ.

ຖ້າທ່ານເລືອກ **Force redirect to mapped domain** (ບັງຄັບປ່ຽນການແນະນຳໄປຫາ domain ທີ່ map ແລ້ວ), ລູກຄ້າຂອງທ່ານຈະສາມາດເຂົ້າເຖິງ admin dashboard ໄດ້ພຽງແຕ່ໃນ custom domain ຂອງເຂົາເຈົ້າເທົ່ານັ້ນ.

ຕົວເລືອກ **Force redirect to network domain** (ບັງຄັບປ່ຽນການແນະນຳໄປຫາ network domain) ຈະເຮັດຜິດກົງກັບຂ້າງເທິງ - ລູກຄ້າຂອງທ່ານຈະຖືກອະນຸຍາດໃຫ້ເຂົ້າເຖິງ dashboard ໄດ້ພຽງແຕ່ໃນ subdomain, ເຖິງແມ່ນວ່າເຂົາເຈົ້າຈະພະຍາຍາມເຂົ້າສູ່ລະບົບດ້ວຍ custom domain ກໍຕາມ.

ແລະ ຕົວເລືອກ **Allow access to the admin by both mapped domain domain and network domain** (ອະນຸຍາດໃຫ້ເຂົ້າເຖິງ admin ໂດຍໃຊ້ທັງ domain ທີ່ map ແລະ network domain) ອະນຸຍາດໃຫ້ເຂົາເຈົ້າເຂົ້າເຖິງ admin dashboard ໄດ້ທັງໃນ subdomain ແລະ custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

ມີສອງວິທີໃນການ map custom domain. ອັນທຳອິດແມ່ນການ map ຊື່ domain ຈາກ network admin dashboard ໃນຖານະ super admin ແລະ ອັນທີສອງແມ່ນຜ່ານ subsite admin dashboard ພາຍໃຕ້ໜ້າ account.

ແຕ່ກ່ອນທີ່ທ່ານຈະເລີ່ມ map custom domain ເຂົ້າກັບ subsites ໃດໜຶ່ງໃນ network ຂອງທ່ານ, ທ່ານຕ້ອງເຮັດໃຫ້ແນ່ໃຈວ່າ **DNS settings** (ການຕັ້ງຄ່າ DNS) ຂອງຊື່ domain ນັ້ນຖືກຕັ້ງຄ່າຢ່າງຖືກຕ້ອງ.

###

### ການເຮັດໃຫ້ແນ່ໃຈວ່າການຕັ້ງຄ່າ DNS ຂອງ domain ຖືກຕັ້ງຄ່າຢ່າງເໝາະສົມ

เพื่อให้การทำ mapping ใช้งานได้ คุณต้องแน่ใจว่าโดเมนที่คุณวางแผนจะ map นั้นชี้ไปยัง IP address ของเครือข่ายของคุณ โปรดทราบว่าคุณต้องการ Network IP address - คือ IP address ของโดเมนที่ติดตั้ง Ultimate Multisite ไว้ - ไม่ใช่ IP address ของ custom domain ที่คุณต้องการ map นะครับ หากต้องการค้นหา IP address ของโดเมนใดโดเมนหนึ่ง เราแนะนำให้ไปที่ [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) เป็นต้น

ในการ map โดเมนให้ถูกต้อง คุณต้องเพิ่ม **A RECORD** ในการตั้งค่า **DNS** ของคุณเพื่อชี้ไปยัง **IP address** นั้น การจัดการ DNS แตกต่างกันไปมากในผู้จดทะเบียนโดเมนแต่ละราย แต่ก็มีบทช่วยสอนออนไลน์มากมายที่ครอบคลุมเรื่องนี้ หากคุณค้นหาว่า " _Creating A Record on XXXX_ " โดยที่ XXXX คือชื่อผู้จดทะเบียนโดเมนของคุณ (เช่น " _Creating A Record on_ _GoDaddy_ ")

หากคุณพบปัญหาในการทำให้สิ่งนี้ใช้งานได้ **ให้ติดต่อฝ่ายสนับสนุนของผู้จดทะเบียนโดเมนของคุณ** และพวกเขาจะสามารถช่วยคุณในส่วนนี้ได้

หากคุณวางแผนที่จะอนุญาตให้ลูกค้า map โดเมนของตัวเอง พวกเขาจะต้องทำส่วนนี้ด้วยตัวเอง ให้พวกเขามุ่งหน้าไปยังระบบสนับสนุนของผู้จดทะเบียนโดเมนของตน หากพวกเขาไม่สามารถสร้าง A Record ได้

### การ map ชื่อโดเมนที่กำหนดเองเป็น Super Admin

เมื่อคุณเข้าสู่ระบบในฐานะ super admin บนเครือข่ายของคุณ คุณสามารถเพิ่มและจัดการชื่อโดเมนที่กำหนดเองได้อย่างง่ายดายโดยไปที่ **Ultimate Multisite > Domains**

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

ຢູ່ໜ້າTHIS, ທ່ານສາມາດກົດປຸ່ມ **Add Domain** (ເພີ່ມໂດເມນ) ຢູ່ເທິງສຸດ ແລະ ນີ້ຈະເປີດໜ້າຕ່າງແບບ modal window ເພື່ອໃຫ້ທ່ານສາມາດຕັ້ງຄ່າແລະໃສ່ຂໍ້ມູນຂອງ **custom domain name** (ຊື່ໂດເມນທີ່ເປັນສ່ວນຕົວ), **the subsite** (ໄຊ່ຍ່ອຍ) ທີ່ທ່ານຕ້ອງການໃຊ້ custom domain name ນັ້ນ, ແລະ ຕັດສິນໃຈວ່າທ່ານຕ້ອງການຕັ້ງມັນເປັນ **primary domain** (ໂດເມນຫຼັກ) ຫຼື ບໍ່ (ຂໍແຈ້ງວ່າທ່ານສາມາດ map **multiple domain names to one subsite** (map ຊື່ໂດເມນຫຼາຍອັນໃຫ້ກັບໄຊ່ຍ່ອຍດຽວໄດ້)).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

ຫຼັງຈາກໃສ່ຂໍ້ມູນທັງໝົດແລ້ວ, ທ່ານສາມາດກົດປຸ່ມ **Add Existing Domain** (ເພີ່ມໂດເມນທີ່ມີຢູ່ແລ້ວ) ຢູ່ດ້ານລຸ່ມໄດ້ເລີຍ.

ສິ່ງນີ້ຈະເລີ່ມຂະບວນການກວດສອບແລະດຶງຂໍ້ມູນ DNS ຂອງ custom domain ນັ້ນ. ທ່ານຍັງຈະເຫັນ log ຢູ່ດ້ານລຸ່ມຂອງໜ້າເພື່ອຕິດຕາມຂະບວນການທີ່ມັນກຳລັງເຮັດຢູ່. ຂະບວນການນີ້ອາດໃຊ້ເວລາສອງສາມນາທີຈຶ່ງຈະສຳເລັດ.

Ultimate Multisite v2.13.0 ຍັງສ້າງ record ໂດເມນພາຍໃນໂດຍອັດຕະໂນມັດ ເມື່ອມີໄຊ່ຍ່ອຍໃໝ່ຖືກສ້າງຂຶ້ນໃນ host ທີ່ຄວນຖືວ່າເປັນໂດເມນຕໍ່ໄຊ່ຍ່ອຍ (per-site domain). ຖ້າ host ນັ້ນແມ່ນໂດເມນຫຼັກຂອງເຄືອຂ່າຍ, ຫຼື ເປັນໜຶ່ງໃນ base domains ຂອງ checkout-form ທີ່ຖືກຕັ້ງຄ່າໄວ້ໃນ field **Site URL**, record mapped-domain ອັດຕະໂນມັດຈະຖືກຂ້າມໄປເພື່ອໃຫ້ base domain ແບ່ງປັນໃຊ້ໄດ້ກັບທຸກໄຊ່ຍ່ອຍທີ່ໃຊ້ມັນ.

**Stage** (ສະຖານະ) ຫຼື ស្ថានភាពຄວນປ່ຽນຈາກ **Checking DNS** (ກຳລັງກວດສອບ DNS) ເປັນ **Ready** (ພ້ອມແລ້ວ) ຖ້າຕັ້ງຄ່າທຸກຢ່າງຖືກຕ້ອງ.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

ຖ້າທ່ານກົດໃສ່ຊື່ໂດເມນ, ທ່ານຈະສາມາດເຫັນຕົວເລືອກຕ່າງໆຢູ່ພາຍໃນມັນໄດ້. ເອົາລອງເບິ່ງແບບໄວໆ:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** ນີ້ແມ່ນສະຖານະທີ່ໂດເມນ (domain) ຢູ່ໃນຈຸດນີ້. ເມື່ອທ່ານເພີ່ມໂດເມນໃໝ່, ມັນອາດຈະຢູ່ທີ່ສະຖານະ **Checking DNS**. ຂັ້ນຕອນນີ້ຈະກວດສອບການບັນທຶກ DNS ແລະ ຢືນຢັນວ່າຖືກຕ້ອງແລ້ວ. ຈາກນັ້ນ, ໂດເມນຈະຖືກຍົກໄປທີ່ສະຖານະ **Checking SSL**. Ultimate Multisite ຈະກວດສອບວ່າໂດເມນມີ SSL ຫຼື ບໍ່ ແລະ ຈັດປະເພດໂດເມນຂອງທ່ານເປັນ **Ready** (ພ້ອມໃຊ້) ຫຼື **Ready (without SSL)** (ພ້ອມໃຊ້ໂດຍບໍ່ມີ SSL).

**Site:** ແມ່ນ subdomain (ຊື່ຍ່ອຍ) ທີ່ກ່ຽວຂ້ອງກັບໂດເມນນີ້. ໂດເມນທີ່ຖືກแมັບ (mapped domain) ຈະສະແດງເນື້ອໃນຂອງໄຊທ໌ສະເພາະນີ້.

**Active:** ທ່ານສາມາດເປີດ ຫຼື ປິດຕົວເລືອກນີ້ເພື່ອເປີດໃຊ້ ຫຼື ປິດການໃຊ້ງານໂດເມນໄດ້ຕາມຕ້ອງການ.

**Is Primary Domain?:** ລູກຄ້າຂອງທ່ານສາມາດມີໂດເມນທີ່ຖືກแมັບໄດ້ຫຼາຍກວ່າໜຶ່ງໂດເມນສຳລັບໄຊທ໌ແຕ່ລະໄຊທ໌. ໃຫ້ໃຊ້ຕົວເລືອກນີ້ເພື່ອເລືອກວ່າອັນໃດແມ່ນໂດເມນຫຼັກ (primary domain) ສຳລັບໄຊທ໌ສະເພາະນັ້ນ.

**Is Secure?:** ເຖິງແມ່ນວ່າ Ultimate Multisite ຈະກວດສອບວ່າໂດເມນມີใบรับรอง SSL ຫຼື ບໍ່ກ່ອນທີ່ຈະເປີດໃຊ້, ແຕ່ທ່ານຍັງສາມາດເລືອກດ້ວຍຕົນເອງເພື່ອໂຫຼດໂດເມນທີ່ມີຫຼືບໍ່ມີใบรับรอง SSL. ເອົາໃຈໃສ່ວ່າຖ້າເວັບໄຊທ໌ບໍ່ມີใบรับรอง SSL ແລະ ທ່ານພະຍາຍາມບັງຄັບໃຫ້ມັນໂຫຼດດ້ວຍ SSL, ອາດຈະເກີດຂໍ້ຜິດພາດໄດ້.

### ການแมັບ custom domain name ເປັນ Subsite user

ຜູ້ບໍລິຫານ subsite ກໍສາມາດแมັບ custom domain names ຈາກ dashboard ຂອງ subsite admin ຂອງເຂົາເຈົ້າໄດ້ເຊັ່ນກັນ.

ກ່ອນອື່ນ, ທ່ານຕ້ອງເຮັດໃຫ້ແນ່ໃຈວ່າໄດ້ເປີດໃຊ້ຕົວເລືອກນີ້ພາຍໃຕ້ການຕັ້ງຄ່າ **Domain mapping**. ເບິ່ງຮູບພາບຂ້າງລຸ່ມນີ້.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

ທ່ານຍັງສາມາດຕັ້ງຄ່າ ຫຼື ຈັດການຕົວເລືອກນີ້ພາຍໃຕ້ລະດັບ **Plan** ຫຼື ຕົວເລືອກຜະລິດຕະພັນໃນໜ້າ **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

ເມື່ອเปิดใช้งานตัวเลือกใดตัวเลือกหนึ่ง และอนุญาตให้ผู้ใช้ของ subsite สามารถแมปชื่อโดเมนที่กำหนดเองได้ ผู้ใช้ของ subsite จะเห็น metabox ภายใต้หน้า **Account** ที่ชื่อว่า **Domains**

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

ผู้ใช้สามารถคลิกปุ่ม **Add Domain** และจะมีหน้าต่าง modal ปรากฏขึ้นพร้อมคำแนะนำบางอย่าง

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

จากนั้น ผู้ใช้สามารถคลิก **Next Step** และดำเนินการเพิ่มชื่อโดเมนที่กำหนดเองได้ พวกเขาสามารถเลือกได้ว่าจะให้เป็นโดเมนหลักหรือไม่

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

การคลิกที่ **Add Domain** จะเริ่มกระบวนการตรวจสอบและดึงข้อมูล DNS ของโดเมนที่กำหนดเอง

### เกี่ยวกับการซิงค์โดเมน (About Domain Syncing)

Domain Syncing คือกระบวนการที่ Ultimate Multisite จะเพิ่มชื่อโดเมนที่กำหนดเองของคุณเข้าไปในบัญชีโฮสติ้งของคุณเป็นโดเมนเสริม **เพื่อให้การแมปโดเมนทำงานได้**

การซิงค์โดเมนจะเกิดขึ้นโดยอัตโนมัติหากผู้ให้บริการโฮสติ้งของคุณมีการเชื่อมต่อกับฟีเจอร์การแมปโดเมนของ Ultimate Multisite ในปัจจุบัน ผู้ให้บริการโฮสติ้งเหล่านี้คือ _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ และ _Cpanel._

เมื่อการเชื่อมต่อกับผู้ให้บริการโฮสติ้งเปิดใช้งาน Ultimate Multisite ยังสามารถใส่ task การสร้าง DNS หรือ subdomain ฝั่งผู้ให้บริการสำหรับไซต์ที่สร้างขึ้นใหม่ได้ หากไม่มีการเชื่อมต่อใดรับงานนั้น งานเบื้องหลังจะถูกข้ามไปเพื่อหลีกเลี่ยงรายการคิวที่เป็น no-op การตรวจสอบ DNS และ SSL สำหรับโดเมนที่แมปไว้จะยังคงทำงานผ่านกระบวนการขั้นตอนโดเมนตามปกติ

ທ່ານຈະຕ້ອງເປີດໃຊ້ການເຊື່ອມຕໍ່ນີ້ໃນການຕັ້ງຄ່າ Ultimate Multisite ພາຍໃຕ້ແທັບ **Integration** (ການເຊື່ອມຕໍ່).

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_ໝາຍເຫດວ່າ ຖ້າຜູ້ໃຫ້ບໍລິການໂຮດ (hosting provider) ຂອງທ່ານບໍ່ແມ່ນໜຶ່ງໃນຜູ້ໃຫ້ບໍລິການທີ່ກ່າວມາຂ້າງເທິງ, **ທ່ານຈະຕ້ອງສັງເກດ ແລະ ເຮັດການ đồng bộ ຫຼື ເພີ່ມຊື່ໂດເມນ (domain name)** ໃນບັນຊີໂຮດຂອງທ່ານດ້ວຍຕົນເອງ._
