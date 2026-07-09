---
title: ເວັບຮູກ
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# ការមើល Webhooks ជាលើកដំបូង (v2) {#a-first-look-on-webhooks-v2}

_**ចំណាំ: ฟีเจอร์หรือบทความนี้สำหรับผู้ใช้ขั้นสูงเท่านั้น**_

**Webhook** คือวิธีที่แอปพลิเคชันหรือซอฟต์แวร์อย่าง Ultimate Multisite สามารถส่งข้อมูลแบบเรียลไทม์ไปยังแอปพลิเคชันอื่นได้ Webhook จะส่งข้อมูลหรือ payload ไปยังแอปพลิเคชันอื่นทันทีที่มีเหตุการณ์เกิดขึ้น ซึ่งหมายความว่าคุณจะ**ได้รับข้อมูลทันที**

สิ่งนี้มีประโยชน์มากหากคุณต้องการเชื่อมต่อหรือส่งข้อมูลบางอย่างจาก Ultimate Multisite ไปยัง CRM หรือระบบอื่น ๆ ทุกครั้งที่มีเหตุการณ์ถูกกระตุ้น ตัวอย่างเช่น คุณจำเป็นต้องส่งชื่อและอีเมลของผู้ใช้ไปยัง mailing list ทุกครั้งที่มีการสร้างบัญชีผู้ใช้ใหม่

## วิธีการสร้าง webhook {#how-to-create-a-webhook}

ในการสร้าง webhook ให้ไปที่หน้า dashboard ของ network admin ของคุณ คลิกที่ **Ultimate Multisite > Webhooks > Add New Webhook**

![หน้าแสดงรายการ Webhooks ว่าง พร้อมปุ่ม Add New Webhook](/img/admin/webhooks-list-empty.png)

จากนั้นคุณสามารถแก้ไขการตั้งค่า webhook ได้:

![ฟอร์ม Add New Webhook ที่มีช่อง Name, Event และ URL](/img/admin/webhook-add-modal.png)

เมื่อสร้าง webhook ใหม่ คุณจะต้องกรอกข้อมูลต่างๆ เช่น **Name (ชื่อ), URL,** และ **Event (เหตุการณ์)** คุณสามารถใช้ชื่ออะไรก็ได้ที่คุณต้องการสำหรับ webhook ของคุณ แต่ฟิลด์ที่สำคัญที่สุดคือ URL และ Event

![อินเทอร์เฟซแก้ไข Webhook แสดงช่อง URL และตัวอย่าง payload](/img/admin/webhook-url-field.png)

URL คือ **endpoint หรือปลายทาง** ที่ Ultimate Multisite จะส่ง **payload หรือข้อมูล** ไป ซึ่งเป็นแอปพลิเคชันที่จะได้รับข้อมูลนั้น

Zapier เป็นโซลูชันที่คนส่วนใหญ่ใช้เพื่อทำให้การเชื่อมต่อกับแอปพลิเคชันภายนอกง่ายขึ้น หากไม่มีแพลตฟอร์มอย่าง Zapier คุณจะต้องสร้างฟังก์ชันที่กำหนดเองด้วยตนเองเพื่อดักจับและประมวลผลข้อมูล ดูบทความนี้เกี่ยวกับ **วิธีการใช้ Ultimate Multisite webhook กับ Zapier**

ໃນບົດຄວາມນີ້, ພວກເຮົາຈະมาดูแนวคิดพื้นฐานว่า webhook ເຮັດວຽກແນວໃດ ແລະ ມີ events (ເຫດການຕ່າງໆ) ອะไรໃຫ້ໃຊ້ໃນ Ultimate Multisite บ้าง. ພວກເຮົາຈະໃຊ້ເວັບໄຊທ໌ຂອງພາກສ່ວນທີສາມຊື່ວ່າ [requestbin.com](https://requestbin.com/). ເວັບໄຊນີ້ຈະເຮັດໃຫ້ເຮົາສາມາດສ້າງ endpoint ແລະ ຮັບ payload (ຂໍ້ມູນທີ່ສົ່ງມາ) ໂດຍບໍ່ຕ້ອງຂຽນ code ໃດໆ. _**ຂໍແຈ້ງເຕືອນ: ສິ່ງທີ່ມັນເຮັດໄດ້ແມ່ນພຽງແຕ່ສະແດງໃຫ້ເຫັນວ່າຂໍ້ມູນໄດ້ຖືກຮັບແລ້ວເທົ່ານັ້ນ.**_ ຈະບໍ່ມີການປະມວນຜົນ ຫຼື ການກະທຳໃດໆຕໍ່ payload ນັ້ນ.

ໄປທີ່ [requestbin.com](https://requestbin.com/) ແລະ ກົດ Create Request Bin.

ຫຼັງຈາກກົດປຸ່ມນັ້ນ, ມັນຈະຖາມໃຫ້ທ່ານເຂົ້າສູ່ລະບົບ (log in) ຖ້າທ່ານມີບັນຊີຢູ່ແລ້ວ ຫຼື ລົງທະບຽນໃໝ່. ຖ້າທ່ານມີບັນຊີຢູ່ແລ້ວ, ມັນຈະພາທ່ານໄປທີ່ dashboard ຂອງເຂົາເຈົ້າໂດຍກົງ. ໃນ dashboard ນັ້ນ, ທ່ານຈະເຫັນ endpoint ຫຼື URL ທີ່ຈະໃຊ້ໃນການສ້າງ Ultimate Multisite webhook ໄດ້ທັນທີເລີຍ.

ເອົາມາຄັດລອກ URL ນັ້ນ ແລະ ກັບໄປທີ່ Ultimate Multisite. ວາງ endpoint ໃສ່ໃນຊ່ອງ URL ແລະ ເລືອກ event (ເຫດການ) ຈາກ dropdown ລົງມາ. ໃນຕົວຢ່າງນີ້, ພວກເຮົາຈະເລືອກ **Payment Received** (ໄດ້ຮັບການຈ່າຍເງິນ).

Event ນີ້ຈະຖືກກະຕຸ້ນທຸກຄັ້ງທີ່ມີຜູ້ໃຊ້ทำการຈ່າຍເງິນ. Event ທັງໝົດທີ່ມີຢູ່, ຄຳອະທິບາຍຂອງມັນ ແລະ payload ຕ່າງໆ ຈະຖືກລຽງລຽງໄວ້ຢູ່ດ້ານລຸ່ມຂອງໜ້າ. ກົດປຸ່ມ **Add New Webhook** ເພື່ອບັນທຶກ webhook ນັ້ນ.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

ດຽວນີ້, ເຮົາສາມາດສົ່ງ test event ໄປທີ່ endpoint ເພື່ອເບິ່ງວ່າ webhook ທີ່ເຮົາສ້າງຂຶ້ນນັ້ນເຮັດວຽກບໍ່. ເຮົາເຮັດໄດ້ໂດຍການກົດ **Send Test Event** (ສົ່ງ test event) ຢູ່ໃຕ້ webhook ທີ່ເຮົາສ້າງຂຶ້ນ.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

ນີ້ຈະສະແດງປ່ອງຢ້ຽມຢືນຢັນວ່າການທົດສອບປະສົບຜົນສໍາເລັດ.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

ເມື່ອເຮົາກັບໄປທີ່ໄຊທ໌ _Requestbin_ ເຮົາຈະເຫັນວ່າ payload ໄດ້ຮັບຂໍ້ມູນແລ້ວ ເຊິ່ງມີຂໍ້ມູນທົດສອບນຳໜ
