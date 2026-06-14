---
title: ການຕັ້ງຄ່າ PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# ການຕັ້ງຄ່າ PayPal Gateway (v2)

_**ໝາຍເຫດສຳຄັນ: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite ເພື່ອໃຊ້ໃນເວີຊັນ 2.x.**_

ທ່ານສາມາດເປີດໃຊ້ວິທີການຊຳລະເງິນໄດ້ເຖິງສີ່ວິທີໃນໜ້າຕັ້ງຄ່າການຈ່າຍເງິນຂອງພວກເຮົາ: Stripe, Stripe Checkout, PayPal ແລະ ແບບຂຽນດ້ວຍມື (Manual). ໃນບົດຄວາມນີ້, ພວກເຮົາຈະມາເຫັນວິທີການເຊື່ອມຕໍ່ກັບ **PayPal**.

ຄືກັບ Stripe, PayPal ແມ່ນໄດ້ຮັບການນຳໃຊ້ຢ່າງກວ້າງຂວາງສຳລັບການຈ່າຍເງິນອອນລາຍ, ໂດຍສະເພາະໃນເວັບໄຊທ໌ WordPress. ບົດຄວາມນີ້ຈະແນະນຳວິທີການໃຊ້ PayPal ເປັນວິທີການຊຳລະເງິນທີ່ມີຢູ່ໃນເຄືອຂ່າຍຂອງທ່ານ.

ຂໍໃຫ້ສັງເກດວ່າ ທ່ານຕ້ອງມີ **PayPal Business account** ເພື່ອໄດ້ຮັບ API credential (ຂໍ້ມູນເຂົ້າລະຫັດ) ທີ່ຈຳເປັນສຳລັບການເຊື່ອມຕໍ່ນີ້.

## ການເປີດໃຊ້ PayPal ໃນເຄືອຂ່າຍຂອງທ່ານ

ເພື່ອເປີດໃຊ້ PayPal ເປັນວິທີການຊຳລະເງິນທີ່ມີໃຫ້ໃນເຄືອຂ່າຍຂອງທ່ານ, ກະລຸນາໄປທີ່ **Ultimate Multisite > Settings > Payments** ແລ້ວໝາຍກ່ອງ (tick) ໃສ່ແຖບPayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## ການໃຊ້ setup wizard ແນະນຳ

Ultimate Multisite 2.10.0 ເພີ່ມ setup wizard ສຳລັບ PayPal ອອກມາໃນການຕັ້ງຄ່າ payment gateway. ຫຼັງຈາກທີ່ທ່ານເປີດໃຊ້ PayPal ແລ້ວ, ໃຫ້ໃຊ້ wizard ນີ້ໃນ **Ultimate Multisite > Settings > Payments** ເພື່ອເລືອກວິທີທີ່ທ່ານຕ້ອງການເຊື່ອມຕໍ່ gateway ແລະ ຢືນຢັນວ່າຂໍ້ມູນໃດທີ່ຍັງຕ້ອງການກ່ອນບັນທຶກ.

Wizard ນີ້ຮອງຮັບສອງຊ່ອງທາງການຕັ້ງຄ່າ:

* **การกรอกข้อมูลรับรองด้วยตนเอง (Manual credential entry)**: ให้ใช้เส้นทางนี้เมื่อคุณมีข้อมูล API ของ PayPal อยู่แล้ว, เมื่อไม่มีตัวเลือก OAuth สำหรับบัญชีของคุณ หรือเมื่อคุณต้องการคัดลอกข้อมูลรับรองจาก PayPal ด้วยตัวเอง กรุณากรอก API Username, API Password และ API Signature ในช่องของ PayPal จากนั้นบันทึกการตั้งค่าการชำระเงิน

* **ประตูเชื่อมต่อ OAuth (OAuth connection gate)**: ให้ใช้เส้นทางนี้เฉพาะเมื่อตัวเลือก OAuth มีให้ใช้งานและเปิดใช้งานสำหรับการติดตั้งของคุณเท่านั้น ตัว Wizard จะแสดงขั้นตอน OAuth ที่อยู่เบื้องหลัง feature flag ดังนั้นเครือข่ายที่ไม่มีแฟล็กนี้จะยังคงใช้ช่องกรอกข้อมูลรับรองด้วยตนเอง

หากคุณไม่เห็นตัวเลือก OAuth ใน Wizard ให้ทำตามขั้นตอนการกรอกข้อมูลรับรองด้วยตนเองด้านล่าง เกตเวย์นี้ทำงานกับข้อมูล API ของ PayPal Business เหมือนกับการปล่อยเวอร์ชัน Ultimate Multisite 2.x ก่อนหน้านี้

## การรับข้อมูล API ของ PayPal (Getting the PayPal API credentials)

เมื่อคุณเปิดใช้งาน PayPal เป็นเกตเวย์การชำระเงินแล้ว คุณจะต้องกรอกช่องสำหรับ **Username** ของ PayPal API, **Password** ของ PayPal API และ **Signature** ของ PayPal API

คุณสามารถรับสิ่งเหล่านี้ได้โดยการเข้าสู่ระบบบัญชี [Live](https://www.paypal.com/home) หรือ [Sandbox](https://www.sandbox.paypal.com/home) ของคุณ (จำไว้ว่าคุณสามารถใช้ **sandbox mode** เพื่อทดสอบการชำระเงินและดูว่าเกตเวย์ตั้งค่าถูกต้องหรือไม่ เพียงแค่เปิดส่วนที่เกี่ยวข้อง)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

ในการขอ API Signature หรือข้อมูลรับรองสำหรับบัญชี PayPal ของคุณ:

  1. ไปที่ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ของคุณ

  2. ในส่วน **API access** ให้คลิก **Update**
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. ภายใต้ **NVP/SOAP API integration (Classic)** ให้คลิกที่ **Manage API credentials** (จัดการข้อมูลรับรอง API)

![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * ถ้าคุณเคยสร้าง API Signature หรือ Certificate ไว้แล้ว คุณจะถูกนำไปยังหน้าที่คุณสามารถค้นหาข้อมูลรับรองของคุณได้

     * _**หมายเหตุ:** หากระบบแจ้งให้คุณยืนยันบัญชี PayPal ให้ทำตามคำแนะนำบนหน้าจอ_

  4. เลือกตัวเลือก **หนึ่งอย่าง** จากด้านล่างนี้ แล้วคลิก **Agree and Submit** (ตกลงและส่ง)

     * **Request API Signature** – เลือกสำหรับวิธีการยืนยันตัวตนด้วย API Signature

     * **Request API Certificate** – เลือกสำหรับวิธีการยืนยันตัวตนด้วย API Certificate

  5. PayPal จะสร้างข้อมูลรับรอง API ของคุณดังนี้:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * ข้อมูลรับรอง **API Signature credentials** ประกอบด้วย API Username, API Password และ Signature ซึ่งจะไม่หมดอายุ ค่าเหล่านี้จะถูกซ่อนไว้โดยค่าเริ่มต้นเพื่อความปลอดภัยที่เพิ่มขึ้น ให้คลิก **Show/Hide** (แสดง/ซ่อน) เพื่อเปิดหรือปิดการแสดงผล เมื่อเสร็จแล้ว ให้คลิก **Done** (เสร็จสิ้น)

     * ข้อมูลรับรอง **API Certificate credentials** ประกอบด้วย API Username, API Password และ Certificate ซึ่งจะหมดอายุโดยอัตโนมัติหลังจากสามปี ให้คลิก **Download Certificate** (ดาวน์โหลดใบรับรอง) เพื่อบันทึก API Certificate ลงในคอมพิวเตอร์ของคุณ

แค่นั้นก็เสร็จเรียบร้อยแล้ว การเชื่อมต่อการชำระเงิน PayPal ของคุณสมบูรณ์แล้ว!

หากคุณมีคำถามเกี่ยวกับตั้งค่า PayPal คุณสามารถดูได้ที่ [Help Center](https://www.paypal.com/br/smarthelp/home) ของ PayPal
