---
title: ໄດ້ຮັບເງິນ
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# การรับเงิน (v2)

_**ข้อควรระวังที่สำคัญ: บทความนี้อ้างถึง Ultimate Multisite เวอร์ชัน 2.x.**_

Ultimate Multisite มีระบบสมาชิกและการเรียกเก็บเงินมาให้ในตัวครับ เพื่อให้ระบบการเรียกเก็บเงินของเราทำงานได้ เราได้รวมช่องทางการชำระเงินที่ใช้กันมากที่สุดในอีคอมเมิร์ซเข้ามาด้วย ช่องทางการชำระเงินเริ่มต้นใน Ultimate Multisite คือ _Stripe_, _PayPal_ และ การชำระเงินแบบแมนนวล (Manual Payment) คุณยังสามารถใช้ _WooCommerce_, _GoCardless_ และ _Payfast_ เพื่อรับการชำระเงินได้โดยการติดตั้ง add-on ที่เกี่ยวข้อง

## การตั้งค่าพื้นฐาน

คุณสามารถตั้งค่าช่องทางการชำระเงินเหล่านี้ได้ภายในการตั้งค่าการชำระเงินของ Ultimate Multisite คุณสามารถเข้าไปดูได้ที่ **เมนู Ultimate Multisite > Settings > Payments**

![หน้าการตั้งค่าการชำระเงินใน Ultimate Multisite แสดงแผงการชำระเงิน](/img/config/payments-settings-page.png)

ก่อนที่คุณจะตั้งค่าช่องทางการชำระเงินของคุณ โปรดดูการตั้งค่าการชำระเงินพื้นฐานที่คุณสามารถกำหนดได้:

**Force auto-renew (บังคับต่ออายุอัตโนมัติ):** สิ่งนี้จะทำให้แน่ใจว่าการชำระเงินจะต่ออายุโดยอัตโนมัติเมื่อสิ้นสุดรอบบิล ตามความถี่ในการเรียกเก็บเงินที่ผู้ใช้เลือกไว้

<!-- Screenshot unavailable: การตั้งค่าปุ่ม Force Auto-Renew บนหน้าการตั้งค่าการชำระเงิน -->

Ultimate Multisite v2.13.0 จะตรวจสอบว่าช่องทางการชำระเงินที่ใช้งานอยู่มีข้อมูลสำหรับการต่ออายุที่นำกลับมาใช้ใหม่ได้หรือไม่ ก่อนที่จะบันทึกสมาชิกที่มีการต่ออายุอัตโนมัติเปิดใช้งาน ข้อมูลสำหรับการต่ออายุนี้อาจเป็นสิทธิ์การสมัครสมาชิกของช่องทาง, ข้อตกลงการเรียกเก็บเงิน, โทเค็นวอลท์ที่บันทึกไว้ หรือวิธีการชำระเงินที่นำกลับมาใช้ใหม่ได้เทียบเท่ากัน หากช่องทางการชำระเงินรายงานว่าไม่มีข้อมูลที่สามารถใช้งานได้ Ultimate Multisite จะบันทึกสถานะสมาชิกไว้ แต่จะปิดการต่ออายุอัตโนมัติ และจะบันทึกสถานะที่ขาดข้อมูลนั้นไว้ เพื่อให้ผู้ดูแลระบบหรือขั้นตอนสนับสนุนสามารถขอให้ลูกค้าทำการอนุญาตการชำระเงินใหม่อีกครั้งก่อนวันต่ออายุครับ

สิ่งนี้จะป้องกันไม่ให้สมาชิกแสดงว่าต่ออายุอัตโนมัติ เมื่อเกตเวย์รองรับการเก็บเงินแบบครั้งเดียวเท่านั้น ส่วน add-ons ของ Gateway ควรยืนยันว่าการชำระเงินแบบเรียกเก็บซ้ำ (recurring checkouts) จะจัดเก็บข้อมูลที่ใช้ซ้ำได้ โดยเฉพาะเมื่อ gateway รองรับทั้งโหมดการเก็บเงินแบบจ่ายครั้งเดียวและการเก็บเงินแบบ Vaulted/Subscription

**อนุญาตให้ทดลองใช้งานโดยไม่ต้องชำระเงิน** **วิธี:** เมื่อเปิดตัวเลือกนี้แล้ว ลูกค้าของคุณจะไม่ต้องกรอกข้อมูลทางการใดๆ ในระหว่างขั้นตอนการลงทะเบียน สิ่งนี้จะถูกเรียกใช้ก็ต่อเมื่อช่วงทดลองใช้งานสิ้นสุดลงเท่านั้น

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ส่งใบแจ้งหนี้เมื่อยืนยันการชำระเงิน:** ตัวเลือกนี้ให้คุณเลือกว่าจะส่งใบแจ้งหนี้หรือไม่หลังจากมีการชำระเงิน โปรดทราบว่าผู้ใช้จะสามารถเข้าถึงประวัติการชำระเงินของตนได้ภายใต้ dashboard ของ subsite นั้น ตัวเลือกนี้ไม่ใช้กับ Manual Gateway

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**รูปแบบการกำหนดหมายเลขใบแจ้งหนี้:** ในส่วนนี้ คุณสามารถเลือกได้ว่าจะใช้รหัสอ้างอิงการชำระเงิน (payment reference code) หรือรูปแบบตัวเลขเรียงลำดับ (sequential number scheme) หากคุณเลือกใช้รหัสอ้างอิงการชำระเงินสำหรับใบแจ้งหนี้ของคุณ คุณไม่จำเป็นต้องตั้งค่าอะไรเลย แต่ถ้าคุณเลือกใช้รูปแบบตัวเลขเรียงลำดับ คุณจะต้องตั้งค่า **หมายเลขใบแจ้งหนี้ถัดไป** (หมายเลขนี้จะถูกใช้เป็นหมายเลขใบแจ้งหนี้สำหรับใบแจ้งหนี้ถัดไปที่สร้างขึ้นในระบบ โดยจะเพิ่มขึ้นทีละหนึ่งทุกครั้งที่มีการสร้างใบแจ้งหนี้ใหม่) และ **คำนำหน้าหมายเลขใบแจ้งหนี้** คุณสามารถเปลี่ยนและบันทึกเพื่อรีเซ็ตลำดับหมายเลขใบแจ้งหนี้ให้เป็นค่าเฉพาะได้

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## ໄປຊອກຫາ gateway (Payment Gateways):

ເຈົ້າສາມາດຕັ້ງຄ່າ payment gateways ໄດ້ໃນໜ້າດຽວກັນ (**Ultimate Multisite > Settings > Payments**). ຢູ່ໃຕ້ **active payment gateways** ເຈົ້າຈະເຫັນ: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ແລະ _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

ພວກເຮົາໄດ້ມີບົດຄວາມສະເພາະສຳລັບ payment gateway ແຕ່ລະອັນທີ່ຈະຊ່ວຍແນະນຳຂັ້ນຕອນການຕັ້ງຄ່າໃຫ້ເຈົ້າ ເຊິ່ງເຈົ້າສາມາດພົບໄດ້ໃນລິ້ງລຸ່ມນີ້.

ເຈົ້າສາມາດເບິ່ງ ແລະ ແກ້ໄຂລາຍລະອຽດການຈ່າຍເງິນໄດ້:

![Payment edit interface](/img/admin/payment-edit.png)

ນີ້ແມ່ນພາບເຕັມຂອງໜ້າແກ້ໄຂການຈ່າຍເງິນ:

![Payment edit full interface](/img/admin/payment-edit-full.png)

ນີ້ແມ່ນພາບເຕັມຂອງການຕັ້ງຄ່າ payment gateways ເຊິ່ງມີຢູ່:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**ການຕັ້ງຄ່າ Stripe gateway**

**ການຕັ້ງຄ່າ PayPal gateway**** **

**ການຕັ້ງຄ່າການຈ່າຍເງິນແບບ Manual (Manual Payments)**

ດຽວນີ້, ຖ້າເຈົ້າຕ້ອງການໃຊ້ _WooCommerce_ , _GoCardless_ ຫຼື _Payfast_ ເປັນ payment gateway ຂອງເຈົ້າ, ເຈົ້າຈະຕ້ອງ **ຕິດຕັ້ງ ແລະ ຕັ້ງຄ່າ add-ons** ຂອງພວກມັນ.

### ວິທີການຕິດຕັ້ງ WooCommerce add-on:

ພວກເຮົາເຂົ້າໃຈວ່າ _Stripe_ ແລະ _PayPal_ ບໍ່ມີຢູ່ໃນບາງປະເທດ ເຊິ່ງເຮັດໃຫ້ຜູ້ໃຊ້ Ultimate Multisite ມີຂໍ້ຈຳກັດ ຫຼື ຂັດຂວາງໃນການນຳໃຊ້ plugin ຂອງພວກເຮົາຢ່າງມີປະສິດທິພາບ. ດັ່ງນັ້ນ, ພວກເຮົາຈຶ່ງໄດ້ສ້າງ add-on ເພື່ອເຊື່ອມຕໍ່ _WooCommerce_, ເຊິ່ງເປັນ plugin e-commerce ທີ່ໄດ້ຮັບຄວາມນິຍົມຫຼາຍ. ນັກພັດທະນາຢູ່ທົ່ວໂລກໄດ້ສ້າງ add-ons ເພື່ອເຊື່ອມຕໍ່ payment gateway ແຕກຕ່າງໆເຂົ້າກັບມັນ. ພວກເຮົາໄດ້ໃຊ້ຈຸດນີ້ເພື່ອຂະຫຍາຍ payment gateways ທີ່ເຈົ້າສາມາດໃຊ້ກັບລະບົບການເກັບຄ່າທຳນຽມຂອງ Ultimate Multisite ໄດ້.

_**สำคัญมาก:** การรวม Ultimate Multisite กับ WooCommerce ต้องเปิดใช้งาน WooCommerce บนเว็บไซต์หลักของคุณก่อน._

ขั้นแรก ไปที่หน้า Add-ons (ส่วนเสริม) ครับ คุณสามารถหาได้โดยไปที่ **Ultimate Multisite > Settings** (การตั้งค่า) คุณจะเห็นตาราง **Add-ons** (ส่วนเสริม) ให้คลิกที่ **Check our Add-ons** (ตรวจสอบส่วนเสริมของเรา)

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

หลังจากคลิกที่ **Check our Add-ons** คุณจะถูกนำไปยังหน้า add-ons ซึ่งคุณจะพบส่วนเสริมของ Ultimate Multisite ทั้งหมด ให้คลิกที่ส่วนเสริมชื่อ **Ultimate Multisite: WooCommerce Integration** (การรวม Ultimate Multisite กับ WooCommerce)

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

จะมีหน้าต่างเด้งขึ้นมาพร้อมรายละเอียดของส่วนเสริม เพียงแค่คลิกที่ **Install Now** (ติดตั้งเลย)

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกนำไปยังหน้า plugins (ปลั๊กอิน) ที่นี่ ให้คลิกที่ **Network Activate** (เปิดใช้งานเครือข่าย) และส่วนเสริมของ WooCommerce ก็จะถูกเปิดใช้งานบนเครือข่ายของคุณ

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

หลังจากเปิดใช้งานแล้ว หากคุณยังไม่ได้ติดตั้งและเปิดใช้งานปลั๊กอิน WooCommerce บนเว็บไซต์ของคุณ คุณจะได้รับการแจ้งเตือนครับ

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

หากต้องการอ่านข้อมูลเพิ่มเติมเกี่ยวกับส่วนเสริม WooCommerce Integration **คลิกที่นี่**

### วิธีติดตั้งส่วนเสริม GoCardless:

ขั้นตอนการติดตั้ง add-on _GoCardless_ ก็เหมือนกับการติดตั้ง add-on _WooCommerce_ เกือบทั้งหมดครับ ให้ไปที่หน้า add-ons แล้วเลือก add-on **Ultimate Multisite: GoCardless Gateway**

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

หน้าต่างของ add-on จะเด้งขึ้นมา ให้คลิกที่ **Install Now** (ติดตั้งเลย)

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า plugins ตรงนี้ แค่คลิกที่ **Network Activate** แล้ว add-on _GoCardless_ ก็จะเปิดใช้งานบนเครือข่ายของคุณครับ

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

หากต้องการเรียนรู้วิธีเริ่มต้นใช้งาน gateway _GoCardless_ ให้ **อ่านบทความนี้**

### วิธีติดตั้ง add-on Payfast:

ไปที่หน้า add-ons แล้วเลือก add-on **Ultimate Multisite: Payfast Gateway**

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

หน้าต่างของ add-on จะเด้งขึ้นมา ให้คลิกที่ **Install Now.** (ติดตั้งเลย)

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า plugins ตรงนี้ แค่คลิกที่ **Network Activate** แล้ว add-on _Payfast_ ก็จะเปิดใช้งานบนเครือข่ายของคุณครับ
