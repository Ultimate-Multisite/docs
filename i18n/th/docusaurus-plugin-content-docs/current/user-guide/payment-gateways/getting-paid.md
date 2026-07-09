---
title: การรับเงิน
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# การรับเงิน (v2)

_**หมายเหตุสำคัญ: บทความนี้อ้างอิงถึง Ultimate Multisite เวอร์ชัน 2.x**_

Ultimate Multisite มีระบบ membership และการเรียกเก็บเงินในตัว เพื่อให้ระบบการเรียกเก็บเงินของเราทำงานได้ เราได้ผสานรวม payment gateways ที่ใช้กันทั่วไปที่สุดใน e-commerce payment gateways เริ่มต้นใน Ultimate Multisite คือ _Stripe_ , _PayPal_ , และการชำระเงินแบบ Manual คุณยังสามารถใช้ _WooCommerce_ , _GoCardless_ และ _Payfast_ เพื่อรับการชำระเงินได้โดยติดตั้ง add-ons ที่เกี่ยวข้อง

## การตั้งค่าพื้นฐาน

คุณสามารถกำหนดค่า payment gateways ใด ๆ เหล่านี้ได้ภายใต้การตั้งค่าการชำระเงินของ Ultimate Multisite คุณสามารถพบได้โดยไปที่ **เมนู Ultimate Multisite > Settings > Payments.**

![หน้าการตั้งค่า Payments ใน Ultimate Multisite ที่แสดงแผง Payments](/img/config/payments-settings-page.png)

ก่อนที่คุณจะตั้งค่า payment gateway ของคุณ โปรดดูการตั้งค่าการชำระเงินพื้นฐานที่คุณสามารถกำหนดค่าได้:

**บังคับ auto-rene** **w:** ตัวเลือกนี้จะทำให้แน่ใจว่าการชำระเงินจะเกิดซ้ำโดยอัตโนมัติเมื่อสิ้นสุดรอบการเรียกเก็บเงินแต่ละรอบ ขึ้นอยู่กับความถี่การเรียกเก็บเงินที่ผู้ใช้เลือก

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 ตรวจสอบว่า gateway ที่ใช้งานอยู่มี renewal credential ที่ใช้ซ้ำได้หรือไม่ ก่อนบันทึก membership แบบเกิดซ้ำที่เปิดใช้งาน auto-renewal อยู่ renewal credential อาจเป็น subscription ของ gateway, billing agreement, vault token ที่บันทึกไว้ หรือวิธีการชำระเงินที่ใช้ซ้ำได้ที่เทียบเท่า หาก gateway รายงานว่าไม่มี credential ที่ใช้งานได้ Ultimate Multisite จะบันทึก membership แต่ปิด auto-renewal และบันทึกสถานะ credential ที่ขาดหายไป เพื่อให้ผู้ดูแลระบบหรือขั้นตอน support สามารถขอให้ลูกค้าอนุมัติการชำระเงินอีกครั้งก่อนวันที่ต่ออายุ

สิ่งนี้ช่วยป้องกันไม่ให้ membership ดูเหมือนว่าจะ auto-renew เมื่อ gateway สามารถเก็บเงินได้เฉพาะการชำระเงินครั้งเดียว add-ons ของ gateway ควรยืนยันว่า checkouts แบบเกิดซ้ำจัดเก็บ credential ที่ใช้ซ้ำได้ โดยเฉพาะเมื่อ gateway รองรับทั้งโหมดการรับชำระเงินแบบครั้งเดียวและโหมดการชำระเงินแบบ vaulted/subscription

**อนุญาตให้ทดลองใช้งานโดยไม่มี payment** **method:** เมื่อเปิดใช้งานตัวเลือกนี้ client ของคุณจะไม่ต้องเพิ่มข้อมูลทางการเงินใด ๆ ระหว่างกระบวนการลงทะเบียน ข้อมูลนี้จะจำเป็นก็ต่อเมื่อช่วงทดลองใช้หมดอายุแล้วเท่านั้น

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ส่งใบแจ้งหนี้เมื่อยืนยันการชำระเงิน:** ตัวเลือกนี้ให้คุณเลือกว่าจะส่งใบแจ้งหนี้หลังการชำระเงินหรือไม่ โปรดทราบว่าผู้ใช้จะเข้าถึงประวัติการชำระเงินได้ภายใต้ Dashboard ของ subsite ของตน ตัวเลือกนี้ใช้ไม่ได้กับ Manual Gateway

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**รูปแบบการออกเลขใบแจ้งหนี้:** ที่นี่ คุณสามารถเลือกได้ระหว่างรหัสอ้างอิงการชำระเงินหรือรูปแบบเลขลำดับ หากคุณเลือกใช้รหัสอ้างอิงการชำระเงินสำหรับใบแจ้งหนี้ของคุณ คุณไม่จำเป็นต้องกำหนดค่าใด ๆ หากคุณเลือกใช้รูปแบบเลขลำดับ คุณจะต้องกำหนดค่า **เลขใบแจ้งหนี้ถัดไป** (เลขนี้จะถูกใช้เป็นเลขใบแจ้งหนี้สำหรับใบแจ้งหนี้ถัดไปที่สร้างในระบบ โดยจะเพิ่มขึ้นทีละหนึ่งทุกครั้งที่มีการสร้างใบแจ้งหนี้ใหม่ คุณสามารถเปลี่ยนและบันทึกเพื่อรีเซ็ตเลขลำดับใบแจ้งหนี้เป็นค่าที่ระบุได้) และ **คำนำหน้าเลขใบแจ้งหนี้**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## จะหา gateway ได้ที่ไหน:

คุณสามารถตั้งค่า payment gateways ได้ในหน้าเดียวกัน ( **Ultimate Multisite > Settings > Payments**) ด้านล่าง **active payment gateways** คุณจะสามารถเห็น: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ และ _Manual_

![ส่วน Active Payment Gateways ที่แสดงรายการ Stripe, Stripe Checkout, PayPal และ Manual](/img/config/payments-active-gateways.png)

เรามีบทความเฉพาะสำหรับ payment gateway แต่ละตัว ซึ่งจะแนะนำคุณผ่านขั้นตอนการตั้งค่า โดยคุณสามารถพบได้จากลิงก์ด้านล่าง

คุณสามารถดูและแก้ไขรายละเอียดการชำระเงินได้:

![อินเทอร์เฟซแก้ไขการชำระเงิน](/img/admin/payment-edit.png)

นี่คือมุมมองแบบเต็มของหน้าการแก้ไขการชำระเงิน:

![อินเทอร์เฟซแก้ไขการชำระเงินแบบเต็ม](/img/admin/payment-edit-full.png)

นี่คือมุมมองแบบเต็มของการตั้งค่า payment gateways ด้วยเช่นกัน:

![หน้าการตั้งค่า payment gateways แบบเต็ม](/img/config/settings-payments-gateways-full.png)

**การตั้งค่า Stripe gateway**

**การตั้งค่า PayPal gateway**** **

**การตั้งค่าการชำระเงินแบบ manual**

ตอนนี้ หากคุณต้องการใช้ _WooCommerce_ , _GoCardless_ หรือ _Payfast_ เป็น payment gateway ของคุณ คุณจะต้อง **ติดตั้งและกำหนดค่า add-ons ของพวกเขา**

### วิธีติดตั้ง WooCommerce add-on:

เราเข้าใจว่า _Stripe_ และ _PayPal_ ไม่มีให้บริการในบางประเทศ ซึ่งจำกัดหรือขัดขวางผู้ใช้ Ultimate Multisite ไม่ให้ใช้ plugin ของเราได้อย่างมีประสิทธิภาพ ดังนั้นเราจึงสร้าง add-on เพื่อผสานรวม _WooCommerce,_ ซึ่งเป็น plugin e-commerce ที่ได้รับความนิยมอย่างมาก นักพัฒนาทั่วโลกได้สร้าง add-ons เพื่อผสานรวม payment gateways ต่าง ๆ เข้ากับ WooCommerce เราใช้ประโยชน์จากสิ่งนี้เพื่อขยาย payment gateways ที่คุณสามารถใช้กับระบบการเรียกเก็บเงินของ Ultimate Multisite

_**สำคัญ:** Ultimate Multisite: WooCommerce Integration ต้องเปิดใช้งาน WooCommerce อย่างน้อยบน site หลักของคุณ_

ก่อนอื่น โปรดไปที่หน้า add-ons คุณสามารถพบได้โดยไปที่ **Ultimate Multisite > Settings** คุณควรเห็นตาราง **Add-ons** คลิกที่ **ดู Add-ons ของเรา**

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

หลังจากคลิกที่ **ดู Add-ons ของเรา** , คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า add-ons ที่นี่คุณจะพบ add-ons ทั้งหมดของ Ultimate Multisite คลิกที่ add-on **Ultimate Multisite: WooCommerce Integration**

![หน้า Add-ons ที่แสดงรายการ add-ons ของ Ultimate Multisite รวมถึง WooCommerce Integration](/img/addons/addons-page.png)

หน้าต่างจะแสดงรายละเอียดของส่วนเสริมขึ้นมา เพียงคลิกที่ **ติดตั้งตอนนี้**

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: กล่องโต้ตอบรายละเอียดส่วนเสริม Ultimate Multisite WooCommerce Integration พร้อมปุ่มติดตั้งตอนนี้ -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า plugin ที่นี่ เพียงคลิกที่ **เปิดใช้งานบนเครือข่าย** แล้วส่วนเสริม WooCommerce จะถูกเปิดใช้งานบนเครือข่ายของคุณ

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้า Plugins พร้อมลิงก์เปิดใช้งานบนเครือข่ายสำหรับส่วนเสริม WooCommerce Integration -->

หลังจากเปิดใช้งานแล้ว หากคุณยังไม่ได้ติดตั้งและเปิดใช้งาน plugin WooCommerce บนเว็บไซต์ของคุณ คุณจะได้รับการเตือน

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: ประกาศสำหรับผู้ดูแลระบบที่เตือนให้ติดตั้งและเปิดใช้งาน plugin WooCommerce -->

หากต้องการอ่านเพิ่มเติมเกี่ยวกับส่วนเสริม WooCommerce Integration **คลิกที่นี่**

### วิธีติดตั้งส่วนเสริม GoCardless:

ขั้นตอนในการติดตั้งส่วนเสริม _GoCardless_ แทบจะเหมือนกับส่วนเสริม _WooCommerce_ โปรดไปที่หน้าส่วนเสริมและเลือกส่วนเสริม **Ultimate Multisite: GoCardless Gateway**

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้าส่วนเสริมที่เน้นส่วนเสริม Ultimate Multisite GoCardless Gateway -->

หน้าต่างส่วนเสริมจะแสดงขึ้นมา คลิกที่ **ติดตั้งตอนนี้**

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: กล่องโต้ตอบรายละเอียดส่วนเสริม Ultimate Multisite GoCardless Gateway พร้อมปุ่มติดตั้งตอนนี้ -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า plugin ที่นี่ เพียงคลิกที่ **เปิดใช้งานบนเครือข่าย** แล้วส่วนเสริม _GoCardless_ จะถูกเปิดใช้งานบนเครือข่ายของคุณ

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้า Plugins พร้อมลิงก์เปิดใช้งานบนเครือข่ายสำหรับส่วนเสริม GoCardless Gateway -->

หากต้องการเรียนรู้วิธีเริ่มต้นใช้งานเกตเวย์ _GoCardless_ **อ่านบทความนี้**

### วิธีติดตั้งส่วนเสริม Payfast:

ไปที่หน้าส่วนเสริมและเลือกส่วนเสริม **Ultimate Multisite: Payfast Gateway**

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้าส่วนเสริมที่เน้นส่วนเสริม Ultimate Multisite Payfast Gateway -->

หน้าต่างส่วนเสริมจะแสดงขึ้นมา คลิกที่ **ติดตั้งตอนนี้**

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: กล่องโต้ตอบรายละเอียดส่วนเสริม Ultimate Multisite Payfast Gateway พร้อมปุ่มติดตั้งตอนนี้ -->

หลังจากติดตั้งเสร็จแล้ว คุณจะถูกเปลี่ยนเส้นทางไปยังหน้า plugin ที่นี่ เพียงคลิกที่ **เปิดใช้งานบนเครือข่าย** แล้วส่วนเสริม _Payfast_ จะถูกเปิดใช้งานบนเครือข่ายของคุณ

<!-- ภาพหน้าจอไม่พร้อมใช้งาน: หน้า Plugins พร้อมลิงก์เปิดใช้งานบนเครือข่ายสำหรับส่วนเสริม Payfast Gateway -->
