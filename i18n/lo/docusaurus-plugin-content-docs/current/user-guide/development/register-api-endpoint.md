---
title: ลงทะเบียน API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# จุดเชื่อมต่อ API สำหรับลงทะเบียน Ultimate Multisite

ในคู่มือนี้ คุณจะได้เรียนรู้วิธีใช้ endpoint API ของ Ultimate Multisite /register เพื่อสร้างกระบวนการเริ่มต้นใช้งานทั้งหมดสำหรับลูกค้าใหม่ในเครือข่ายของคุณ และวิธีการทำสิ่งนั้นด้วย Zapier ด้วยครับ

Endpoint นี้ใช้เมธอด POST และถูกเรียกโดย URL _**https://yoursite.com/wp-json/wu/v2/register**_ ในการเรียกนี้ จะมีการดำเนินการ 4 อย่างภายในเครือข่ายของคุณ:

  * สร้างผู้ใช้ WordPress ใหม่ หรือระบุตัวตนผ่าน user ID
  * สร้างลูกค้าใหม่ใน Ultimate Multisite หรือระบุตัวตนผ่าน customer ID
  * สร้างเว็บไซต์ใหม่บนเครือข่าย WordPress
  * ในท้ายที่สุด จะมีการสร้าง Membership ใหม่ใน Ultimate Multisite

สำหรับกระบวนการนี้ คุณจะต้องมี API credentials ของคุณ เพื่อรับสิ่งเหล่านี้ ให้ไปที่แผงผู้ดูแลระบบเครือข่ายของคุณ ไปที่ **Ultimate Multisite > Settings** > **API & Webhooks,** และมองหาส่วน API Settings

![ส่วน API Settings ใน Ultimate Multisite](/img/config/settings-api.png)

นี่คือภาพรวมของหน้าการตั้งค่า API ทั้งหมด:

![หน้าการตั้งค่า API เต็มรูปแบบ](/img/config/settings-api-full.png)

เลือก **Enable API** และรับ API credentials ของคุณมาได้เลยครับ

ทีนี้ เรามาสำรวจ endpoint กัน แล้วสร้าง action การลงทะเบียนใน Zapier กันต่อเลย

## พารามิเตอร์ใน body ของ Endpoint {#endpoint-body-parameters}

เรามาดูภาพรวมของข้อมูลขั้นต่ำที่เราต้องส่งไปยัง endpoint กันนะครับ ที่ท้ายบทความนี้ คุณจะพบการเรียก (call) ฉบับเต็มครับ

### Customer {#customer}

นี่คือข้อมูลที่จำเป็นสำหรับกระบวนการสร้าง User และ Ultimate Multisite Customer:

"customer_id" : integer

ເປັນໄປໄດ້ທີ່ຈະສົ່ງ customer ID ທີ່ສ້າງຂຶ້ນໃນເຄືອຂ່າຍຂອງທ່ານໃຫ້ລູກຄ້າ. ຖ້າບໍ່ໄດ້ສົ່ງ, ແບບຈຳລອງຂໍ້ມູນខាងລຸ່ມນີ້ຈະຖືກນຳໃຊ້ເພື່ອສ້າງລູກຄ້າໃໝ່ ແລະ ຜູ້ໃຊ້ WordPress ໃໝ່. User ID ສາມາດສົ່ງໄປໃນແບບດຽວກັນກັບ customer ID ໄດ້ເລີຍ.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** (ການເປັນສະມາຊ) {#membership}

ຂໍ້ມູນດຽວທີ່ພວກເຮົາຕ້ອງການພາຍໃນ object ນີ້ແມ່ນ Membership Status.

"membership" { "status" : "string", // ເປັນໜຶ່ງໃນ "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** (ຜະລິດຕະພັນ) {#products}

Products ຈະໄດ້ຮັບ array ທີ່ມີ product ID ໜຶ່ງອັນ ຫຼື ຫຼາຍກວ່າຈາກເຄືອຂ່າຍຂອງທ່ານ. ຂໍໃຫ້ລະວັງ, endpoint ນີ້ບໍ່ໄດ້ສ້າງ products ເຊິ່ງ. ກວດເບິ່ງ documentation ຂອງ Ultimate Multisite ເພື່ອເຂົ້າໃຈ endpoint ການສ້າງ product ໃຫ້ດີກວ່າ.

**"products" : [1,2],**

### Payment (ການຈ່າຍເງິນ) {#payment}

ຄືກັບ Membership, ພວກເຮົາຕ້ອງການສະຖານະເທົ່ານັ້ນ.

**"payment" { "status" : "string", // ເປັນໜຶ່ງໃນ "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site (ເວັບໄຊ) {#site}

ແລະເພື່ອປິດ body ໃຫ້ສົມບູນ, ພວກເຮົາຕ້ອງການ URL ແລະ Title ຂອງເວັບໄຊນັ້ນທັງສອງຢ່າງພາຍໃນ Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

ການສົ່ງຄືນຂອງ register endpoint ຈະເປັນ array ທີ່ມີຂໍ້ມູນ membership ທີ່ຖືກສ້າງຂຶ້ນໃໝ່.

## ການສ້າງ action ໃນ Zapier (ການເຮັດວຽກໃນ Zapier) {#creating-an-action-in-zapier}

ດ້ວຍການເພີ່ມ endpoint ສ້າງບັນຊີໃໝ່ທີ່ແຮງກວ່າ ແລະ ທັນສະໄໝນີ້, ເຈົ້າຈະສາມາດເຂົ້າເຖິງ action ໃໝ່ໃນ Zapier ໄດ້ອີກ.

ເຈົ້າຮູ້ວິທີໃຊ້ ແລະ ເພີດເພີນກັບທຸກຢ່າງທີ່ Zapier ສະບັບໃໝ່ມີໃຫ້ບໍ? ຮຽນຮູ້ຕື່ມໄດ້ທີ່ນີ້. (link?)

### ການສ້າງ action {#creating-an-action}

เพื่อแสดงให้เห็นภาพชัดเจนขึ้นว่าเราจะใช้ registration endpoint กับ Zapier ได้อย่างไร เรามาสร้างการเชื่อมต่อกับ Google Forms กันครับ ทุกครั้งที่มีคนกรอกฟอร์มนี้และข้อมูลถูกบันทึกลงในชีตคำตอบของฟอร์ม จะมีการสร้างสมาชิกใหม่ในเครือ Ultimate Multisite

ใน Google Forms ให้สร้างฟอร์มที่มีช่องที่จำเป็นขั้นต่ำสำหรับการสร้างสมาชิกใหม่ในเครือ

<!-- รูปภาพไม่พร้อมใช้งาน: ฟอร์ม Google Forms พร้อมช่องสำหรับสร้างสมาชิกใหม่ -->

ทีนี้ใน Zapier ให้สร้าง Zap ใหม่ และเชื่อมต่อฟอร์มที่เราสร้างไว้ใน Google ผ่านสเปรดชีตที่ข้อมูลถูกบันทึกไว้

<!-- รูปภาพไม่พร้อมใช้งาน: การตั้งค่า trigger ใน Zapier เชื่อมต่อไปยังสเปรดชีตของ Google Forms -->

เสร็จแล้วครับ! ฟอร์ม Google Forms ถูกเชื่อมต่อกับ Zapier และพร้อมที่จะนำไปรวมเข้ากับเครือข่าย ตอนนี้เรามาดู Action ที่จะเกิดขึ้นหลังจาก Trigger ที่ Google Forms ทำงานทุกครั้งที่มีคนกรอกฟอร์มกันครับ

ค้นหาแอป Ultimate Multisite ใหม่และเลือกมัน สำหรับ Zap ประเภทนี้ ให้เลือกตัวเลือก Register (ลงทะเบียน)

<!-- รูปภาพไม่พร้อมใช้งาน: การเลือก action ใน Zapier แสดงแอป Ultimate Multisite พร้อมตัวเลือก Register -->

หลังจากขั้นตอนแรกนี้ ให้เลือกบัญชีที่จะเชื่อมต่อกับ Zap นี้

นี่คือส่วนที่ละเอียดอ่อนที่สุดของกระบวนการทั้งหมด เราต้องจับคู่ฟิลด์ที่มาจาก Google Forms กับช่องที่จำเป็นขั้นต่ำสำหรับ endpoint ลงทะเบียน ตามที่แสดงในส่วนก่อนหน้าของบทความนี้

ในตัวอย่างนี้ เราแค่ต้องตั้งค่าชื่อผู้ใช้ (username), อีเมล, รหัสผ่าน, ชื่อ และ URL ของเว็บไซต์ ส่วนที่เหลือจะถูกกำหนดไว้ล่วงหน้า เพื่อให้สมาชิกทั้งหมดที่สร้างจาก Google Forms นี้มีรูปแบบผลิตภัณฑ์และสถานะเหมือนกัน

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: การจับคู่ฟิลด์ระหว่าง Google Forms และ endpoint ลงทะเบียนของ Ultimate Multisite ใน Zapier -->

เมื่อตั้งค่าข้อมูลเรียบร้อยแล้ว ให้ดำเนินการทดสอบขั้นสุดท้ายครับ บนหน้าจอสุดท้าย คุณจะเห็นทุกฟิลด์ที่จะถูกส่งไปยัง endpoint ทั้งหมด ข้อมูลที่เกี่ยวข้อง และฟิลด์ที่จะถูกส่งเป็นค่าว่างด้วยครับ<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้าจอทดสอบ Zapier แสดงทุกฟิลด์ที่จะถูกส่งไปยัง endpoint ลงทะเบียน -->

ลองทดสอบ Zap ใหม่ของคุณดูนะครับ มันควรจะทำงานสำเร็จ หากเกิดข้อผิดพลาดขึ้น ให้ตรวจสอบทุกฟิลด์และดูว่ามีการส่งข้อมูลไปอย่างถูกต้องหรือไม่ เนื่องจากมีข้อมูลเยอะ บางอย่างอาจมองข้ามไปได้ครับ

### พารามิเตอร์ endpoint ทั้งหมด {#complete-endpoint-parameters}

นี่คือการเรียกทั้งหมดและทุกความเป็นไปได้ของฟิลด์ที่สามารถถูกส่งไปได้ครับ

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // หนึ่งใน "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // หนึ่งใน "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
