---
title: แบบฟอร์มชำระเงิน
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# ฟอร์มชำระเงิน

ฟอร์มชำระเงินเป็นวิธีที่ง่ายและยืดหยุ่นในการทดลองแนวทางต่างๆ เพื่อเปลี่ยนผู้เยี่ยมชมให้กลายเป็นลูกค้าใหม่

Ultimate Multisite 2.0 มีตัวแก้ไขฟอร์มชำระเงินที่ให้คุณสร้างฟอร์มได้ไม่จำกัดจำนวน พร้อมฟิลด์ที่แตกต่างกัน สินค้าที่นำเสนอ และอื่นๆ

หากต้องการเข้าถึงฟีเจอร์นี้ ให้ไปที่เมนู Checkout Forms ที่แถบด้านข้างซ้าย

![Checkout Forms list](/img/config/checkout-forms-list.png)

ในหน้านี้ คุณจะเห็นฟอร์มชำระเงินทั้งหมดที่คุณมี

หากต้องการสร้างฟอร์มใหม่ เพียงคลิก Add Checkout Form ที่ด้านบนของหน้า

คุณสามารถเลือกหนึ่งในสามตัวเลือกนี้เป็นจุดเริ่มต้น: แบบขั้นตอนเดียว แบบหลายขั้นตอน หรือแบบว่างเปล่า จากนั้นคลิกเพื่อไปยังตัวแก้ไข

![Checkout Form editor](/img/config/checkout-form-editor.png)

นอกจากนี้ คุณยังสามารถแก้ไขหรือทำสำเนาฟอร์มที่มีอยู่แล้วโดยคลิกที่ตัวเลือกด้านล่างชื่อฟอร์ม ที่นั่นคุณจะพบตัวเลือกสำหรับคัดลอก shortcode ของฟอร์มหรือลบฟอร์มด้วย

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### การแก้ไขฟอร์มชำระเงิน

คุณสามารถสร้างฟอร์มชำระเงินสำหรับวัตถุประสงค์ต่างๆ ในตัวอย่างนี้ เราจะทำงานกับฟอร์มลงทะเบียน

หลังจากเข้าสู่ตัวแก้ไขฟอร์มชำระเงินแล้ว ให้ตั้งชื่อฟอร์มของคุณ (ซึ่งจะใช้สำหรับอ้างอิงภายในเท่านั้น) และ slug (ใช้สำหรับสร้าง shortcode เป็นต้น)

![Checkout Form editor](/img/config/checkout-form-editor.png)

ฟอร์มประกอบด้วยขั้นตอนและฟิลด์ต่างๆ คุณสามารถเพิ่มขั้นตอนใหม่โดยคลิกที่ Add New Checkout Step

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

ในแท็บแรกของหน้าต่างป๊อปอัพ ให้กรอกเนื้อหาของขั้นตอนในฟอร์ม ระบุ ID ชื่อ และคำอธิบาย รายการเหล่านี้ส่วนใหญ่ใช้ภายในระบบ

![Checkout form step](/img/config/checkout-form-step.png)

ถัดไป ตั้งค่าการแสดงผลของขั้นตอน คุณสามารถเลือกระหว่าง "แสดงเสมอ" "แสดงเฉพาะสำหรับผู้ใช้ที่เข้าสู่ระบบแล้ว" หรือ "แสดงเฉพาะสำหรับผู้เยี่ยมชม"

![Checkout form step](/img/config/checkout-form-step.png)

สุดท้าย ปรับแต่งรูปแบบของขั้นตอน ฟิลด์เหล่านี้เป็นตัวเลือกเสริม

![Checkout form step](/img/config/checkout-form-step.png)

ตอนนี้ ถึงเวลาเพิ่มฟิลด์ในขั้นตอนแรกของเรา เพียงคลิก Add New Field แล้วเลือกประเภทของส่วนที่คุณต้องการ

![Checkout form step with fields](/img/config/checkout-form-step.png)

แต่ละฟิลด์มีพารามิเตอร์ที่แตกต่างกันให้กรอก สำหรับฟิลด์แรกนี้ เราจะเลือกฟิลด์ "Username"

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

คุณสามารถเพิ่มขั้นตอนและฟิลด์ได้ตามต้องการ หากต้องการแสดงสินค้าให้ลูกค้าเลือก ให้ใช้ฟิลด์ Pricing Table หากต้องการให้ลูกค้าเลือกเทมเพลต ให้เพิ่มฟิลด์ Template Selection และอื่นๆ

_**หมายเหตุ:** username, email, password, site title, site URL, order summary, payment และ submit button เป็นฟิลด์ที่จำเป็นสำหรับการสร้างฟอร์มชำระเงิน_

ขณะที่คุณกำลังทำงานกับฟอร์มชำระเงิน คุณสามารถใช้ปุ่ม Preview เพื่อดูว่าลูกค้าจะเห็นฟอร์มอย่างไร คุณยังสามารถสลับมุมมองระหว่างผู้ใช้ที่มีอยู่แล้วหรือผู้เยี่ยมชมได้

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

สุดท้าย ใน Advanced Options คุณสามารถตั้งค่าข้อความสำหรับหน้า "ขอบคุณ" เพิ่มโค้ดสำหรับติดตาม conversion เพิ่ม CSS แบบกำหนดเองในฟอร์มชำระเงิน หรือจำกัดการแสดงผลเฉพาะบางประเทศ

![Advanced Options](/img/config/checkout-form-advanced.png)

คุณยังสามารถเปิดหรือปิดฟอร์มชำระเงินด้วยตนเองโดยสลับตัวเลือกนี้ในคอลัมน์ด้านขวา หรือลบฟอร์มอย่างถาวร

![Active toggle](/img/config/checkout-form-active.png)

อย่าลืมบันทึกฟอร์มชำระเงินของคุณ!

![Save button](/img/config/checkout-form-save.png)

หากต้องการรับ shortcode ของฟอร์ม ให้คลิก Generate Shortcode แล้วคัดลอกผลลัพธ์ที่แสดงในหน้าต่างป๊อปอัพ

![Save button with shortcode](/img/config/checkout-form-save.png)
