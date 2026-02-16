---
title: การรับเงิน
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# การรับชำระเงิน (v2)

_**หมายเหตุสำคัญ: บทความนี้อ้างอิงถึง Ultimate Multisite เวอร์ชัน 2.x**_

Ultimate Multisite มีระบบสมาชิกและการเรียกเก็บเงินในตัว เพื่อให้ระบบเรียกเก็บเงินทำงานได้ เราได้เชื่อมต่อกับช่องทางชำระเงินที่นิยมใช้มากที่สุดในอีคอมเมิร์ซ ช่องทางชำระเงินเริ่มต้นใน Ultimate Multisite ได้แก่ _Stripe_ , _PayPal_ และการชำระเงินด้วยตนเอง คุณยังสามารถใช้ _WooCommerce_ , _GoCardless_ และ _Payfast_ เพื่อรับชำระเงินได้โดยการติดตั้ง add-on ของแต่ละตัว

## การตั้งค่าเบื้องต้น

คุณสามารถกำหนดค่าช่องทางชำระเงินเหล่านี้ได้ที่การตั้งค่าการชำระเงินของ Ultimate Multisite โดยไปที่ **เมนู Ultimate Multisite > Settings > Payments**

![หน้าการตั้งค่าการชำระเงินใน Ultimate Multisite](/img/config/settings-payment-gateways.png)

ก่อนที่คุณจะตั้งค่าช่องทางชำระเงิน ลองดูการตั้งค่าการชำระเงินเบื้องต้นที่คุณสามารถกำหนดได้:

**Force auto-renew:** ตัวเลือกนี้จะทำให้การชำระเงินต่ออายุอัตโนมัติเมื่อสิ้นสุดรอบการเรียกเก็บเงินแต่ละรอบ ขึ้นอยู่กับความถี่ในการเรียกเก็บเงินที่ผู้ใช้เลือก

![การตั้งค่า Force auto-renew](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** เมื่อเปิดใช้งานตัวเลือกนี้ ลูกค้าของคุณไม่จำเป็นต้องเพิ่มข้อมูลทางการเงินในระหว่างขั้นตอนการลงทะเบียน ข้อมูลนี้จะถูกขอเมื่อช่วงทดลองใช้หมดอายุเท่านั้น

![การตั้งค่า Allow trials without payment method](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** ตัวเลือกนี้ให้คุณเลือกว่าจะส่งใบแจ้งหนี้หลังการชำระเงินหรือไม่ โปรดทราบว่าผู้ใช้จะสามารถเข้าถึงประวัติการชำระเงินได้ที่แดชบอร์ดของไซต์ย่อย ตัวเลือกนี้ไม่มีผลกับ Manual Gateway

![การตั้งค่า Send invoice on payment confirmation](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ที่นี่คุณสามารถเลือกใช้รหัสอ้างอิงการชำระเงินหรือระบบหมายเลขลำดับ หากคุณเลือกใช้รหัสอ้างอิงการชำระเงินสำหรับใบแจ้งหนี้ คุณไม่จำเป็นต้องตั้งค่าอะไรเพิ่มเติม หากคุณเลือกใช้ระบบหมายเลขลำดับ คุณจะต้องกำหนด **next invoice number** (หมายเลขนี้จะถูกใช้เป็นหมายเลขใบแจ้งหนี้สำหรับใบแจ้งหนี้ถัดไปที่สร้างในระบบ โดยจะเพิ่มขึ้นทีละหนึ่งทุกครั้งที่สร้างใบแจ้งหนี้ใหม่ คุณสามารถเปลี่ยนและบันทึกเพื่อรีเซ็ตหมายเลขลำดับใบแจ้งหนี้เป็นค่าที่ต้องการได้) และ **invoice number prefix**

![การเลือก Invoice numbering scheme](/img/config/settings-payment-gateways.png)

![การตั้งค่าหมายเลขใบแจ้งหนี้แบบลำดับและคำนำหน้า](/img/config/settings-payment-gateways.png)

## ช่องทางชำระเงินอยู่ที่ไหน:

คุณสามารถตั้งค่าช่องทางชำระเงินได้ที่หน้าเดียวกัน (**Ultimate Multisite > Settings > Payments**) ด้านล่างของ **active payment gateways** คุณจะเห็น: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ และ _Manual_

![รายการช่องทางชำระเงินที่เปิดใช้งาน](/img/config/settings-payment-gateways.png)

เรามีบทความเฉพาะสำหรับแต่ละช่องทางชำระเงินที่จะแนะนำขั้นตอนการตั้งค่า ซึ่งคุณสามารถดูได้จากลิงก์ด้านล่าง

**การตั้งค่า Stripe gateway**

**การตั้งค่า PayPal gateway**

**การตั้งค่าการชำระเงินด้วยตนเอง**

หากคุณต้องการใช้ _WooCommerce_ , _GoCardless_ หรือ _Payfast_ เป็นช่องทางชำระเงิน คุณจะต้อง **ติดตั้งและกำหนดค่า add-on ของพวกเขา**

### วิธีติดตั้ง WooCommerce add-on:

เราเข้าใจว่า _Stripe_ และ _PayPal_ ไม่พร้อมใช้งานในบางประเทศ ซึ่งจำกัดหรือขัดขวางผู้ใช้ Ultimate Multisite จากการใช้งาน plugin ของเราอย่างมีประสิทธิภาพ ดังนั้นเราจึงสร้าง add-on เพื่อเชื่อมต่อกับ _WooCommerce_ ซึ่งเป็น plugin อีคอมเมิร์ซที่ได้รับความนิยมอย่างมาก นักพัฒนาทั่วโลกได้สร้าง add-on เพื่อเชื่อมต่อช่องทางชำระเงินต่างๆ เข้ากับมัน เราใช้ประโยชน์จากสิ่งนี้เพื่อขยายช่องทางชำระเงินที่คุณสามารถใช้กับระบบเรียกเก็บเงินของ Ultimate Multisite

_**สำคัญ:** Ultimate Multisite: WooCommerce Integration ต้องการให้ WooCommerce เปิดใช้งานอย่างน้อยที่ไซต์หลักของคุณ_

ก่อนอื่น กรุณาไปที่หน้า add-ons โดยไปที่ **Ultimate Multisite > Settings** คุณจะเห็นตาราง **Add-ons** คลิกที่ **Check our Add-ons**

![หน้าการตั้งค่าพร้อมส่วน add-ons](/img/config/settings-general.png)

หลังจากคลิกที่ **Check our Add-ons** คุณจะถูกนำไปยังหน้า add-ons ที่นี่คุณจะพบ add-on ทั้งหมดของ Ultimate Multisite คลิกที่ add-on **Ultimate Multisite: WooCommerce Integration**

![หน้า add-ons แสดงรายการ add-on ที่มี](/img/config/settings-general.png)

หน้าต่างจะปรากฏขึ้นพร้อมรายละเอียดของ add-on เพียงคลิกที่ **Install Now**

![หน้าต่างติดตั้ง WooCommerce add-on](/img/config/settings-general.png)

หลังจากติดตั้งเสร็จ คุณจะถูกนำไปยังหน้า plugins ที่นี่ เพียงคลิกที่ **Network Activate** และ WooCommerce add-on จะถูกเปิดใช้งานบนเครือข่ายของคุณ

![Network Activate สำหรับ WooCommerce add-on](/img/config/settings-general.png)

หลังจากเปิดใช้งานแล้ว หากคุณยังไม่ได้ติดตั้งและเปิดใช้งาน WooCommerce plugin บนเว็บไซต์ของคุณ คุณจะได้รับการแจ้งเตือน

![การแจ้งเตือนให้เปิดใช้งาน WooCommerce](/img/config/settings-general.png)

หากต้องการอ่านเพิ่มเติมเกี่ยวกับ WooCommerce Integration add-on **คลิกที่นี่**

### วิธีติดตั้ง GoCardless add-on:

ขั้นตอนการติดตั้ง _GoCardless_ add-on เหมือนกับ _WooCommerce_ add-on เกือบทั้งหมด กรุณาไปที่หน้า add-ons และเลือก add-on **Ultimate Multisite: GoCardless Gateway**

![หน้า add-ons แสดงรายการ add-on ที่มี](/img/config/settings-general.png)

หน้าต่าง add-on จะปรากฏขึ้น คลิกที่ **Install Now**

![หน้าต่างติดตั้ง GoCardless add-on](/img/config/settings-general.png)

หลังจากติดตั้งเสร็จ คุณจะถูกนำไปยังหน้า plugins ที่นี่ เพียงคลิกที่ **Network Activate** และ _GoCardless_ add-on จะถูกเปิดใช้งานบนเครือข่ายของคุณ

![Network Activate สำหรับ GoCardless add-on](/img/config/settings-general.png)

หากต้องการเรียนรู้วิธีเริ่มต้นใช้งาน _GoCardless_ gateway **อ่านบทความนี้**

### วิธีติดตั้ง Payfast add-on:

ไปที่หน้า add-ons และเลือก add-on **Ultimate Multisite: Payfast Gateway**

![หน้า add-ons แสดงรายการ add-on ที่มี](/img/config/settings-general.png)

หน้าต่าง add-on จะปรากฏขึ้น คลิกที่ **Install Now**

![หน้าต่างติดตั้ง Payfast add-on](/img/config/settings-general.png)

หลังจากติดตั้งเสร็จ คุณจะถูกนำไปยังหน้า plugins ที่นี่ เพียงคลิกที่ **Network Activate** และ _Payfast_ add-on จะถูกเปิดใช้งานบนเครือข่ายของคุณ

![Network Activate สำหรับ Payfast add-on](/img/config/settings-general.png)
