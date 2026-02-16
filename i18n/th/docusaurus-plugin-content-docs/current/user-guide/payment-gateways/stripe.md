---
title: การตั้งค่า Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# การตั้งค่า Stripe Gateway (v2)

_**หมายเหตุสำคัญ: บทความนี้อ้างอิงถึง Ultimate Multisite เวอร์ชัน 2.x**_

คุณสามารถเปิดใช้งานวิธีการชำระเงินได้สูงสุด 4 วิธีในหน้าการตั้งค่าการชำระเงิน ได้แก่ Stripe, Stripe Checkout, PayPal และ Manual ในบทความนี้ เราจะมาดูวิธีเชื่อมต่อกับ **Stripe**

## การเปิดใช้งาน Stripe

หากต้องการเปิดใช้งาน Stripe เป็นช่องทางชำระเงินในเครือข่ายของคุณ ให้ไปที่ **Ultimate Multisite > Settings > Payments** แล้วติ๊กปุ่มสลับข้าง **Stripe** หรือ **Stripe Checkout** ในส่วน Active Payment Gateways

![การเปิดใช้งาน Stripe ในช่องทางชำระเงินที่ใช้งานได้](/img/config/settings-payment-gateways.png)

### Stripe กับ Stripe Checkout:

**Stripe:** วิธีนี้จะแสดงช่องสำหรับกรอกหมายเลขบัตรเครดิตระหว่างการชำระเงิน

![ช่องกรอกบัตรเครดิตแบบ inline ของ Stripe ระหว่างการชำระเงิน](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** วิธีนี้จะเปลี่ยนเส้นทางลูกค้าไปยังหน้า Stripe Checkout ระหว่างการชำระเงิน

![หน้าเปลี่ยนเส้นทางไปยัง Stripe Checkout ระหว่างการชำระเงิน](/img/config/settings-payment-gateways.png)

การรับ API keys ของ Stripe

เมื่อเปิดใช้งาน Stripe เป็นช่องทางชำระเงินแล้ว คุณจะต้องกรอกข้อมูลในช่อง **Stripe Publishable Key** และ **Stripe Secret Key** โดยสามารถรับ key เหล่านี้ได้จากการเข้าสู่ระบบบัญชี Stripe ของคุณ

_**หมายเหตุ:** คุณสามารถเปิดใช้งาน **Sandbox mode** เพื่อทดสอบว่าวิธีการชำระเงินทำงานได้หรือไม่_

![ช่องกรอก API key ของ Stripe และปุ่มสลับ sandbox mode](/img/config/settings-payment-gateways.png)

ในหน้า dashboard ของ Stripe ให้คลิก **Developers** ที่มุมขวาบน จากนั้นคลิก **API Keys** ในเมนูด้านซ้าย

![ส่วน Developers ในหน้า dashboard ของ Stripe พร้อม API Keys](/img/config/settings-payment-gateways.png)

คุณสามารถใช้ **Test Data** (เพื่อทดสอบว่าการเชื่อมต่อทำงานได้บนเว็บไซต์จริงของคุณ) หรือไม่ก็ได้ หากต้องการเปลี่ยน ให้สลับปุ่ม **Viewing test data**

![ปุ่มสลับ Viewing test data ของ Stripe](/img/config/settings-payment-gateways.png)

คัดลอกค่าจาก **Publishable key** และ **Secret key** จากคอลัมน์ **Token** แล้ววางในช่อง Stripe Gateway ของ Ultimate Multisite จากนั้นคลิก **Save Changes**

![ค่า publishable key และ secret key ของ Stripe](/img/config/settings-payment-gateways.png)

![การวาง Stripe keys ในการตั้งค่า Ultimate Multisite](/img/config/settings-payment-gateways.png)

## การตั้งค่า Stripe Webhook

Stripe จะส่ง webhook events เพื่อแจ้ง Ultimate Multisite ทุกครั้งที่มีเหตุการณ์เกิดขึ้นใน **บัญชี Stripe ของคุณ**

คลิก **Developers** จากนั้นเลือก **Webhooks** ในเมนูด้านซ้าย แล้วคลิก **Add endpoint** ทางด้านขวา

![หน้า Stripe Webhooks พร้อมปุ่ม Add endpoint](/img/config/settings-payment-gateways.png)

คุณจะต้องมี **Endpoint URL** โดย Ultimate Multisite จะสร้าง endpoint URL ให้โดยอัตโนมัติ ซึ่งคุณสามารถหาได้ที่ใต้ช่อง **Webhook Listener URL** ในส่วน **Ultimate Multisite Stripe Gateway**

![ช่อง Webhook Listener URL ในการตั้งค่า Stripe gateway](/img/config/settings-payment-gateways.png)

**คัดลอก** endpoint URL แล้ว **วาง** ในช่อง **Endpoint URL** ของ Stripe

![การวาง endpoint URL ในการตั้งค่า Stripe webhook](/img/config/settings-payment-gateways.png)

ขั้นตอนถัดไปคือการเลือก **Event** ในตัวเลือกนี้ คุณแค่ติ๊กช่อง **Select all events** แล้วคลิก **Add events** จากนั้นคลิก **Add Endpoint** เพื่อบันทึกการเปลี่ยนแปลง

![การเลือก events ทั้งหมดและเพิ่ม Stripe endpoint](/img/config/settings-payment-gateways.png)

เพียงเท่านี้ การเชื่อมต่อการชำระเงินผ่าน Stripe ของคุณก็เสร็จสมบูรณ์แล้ว!
