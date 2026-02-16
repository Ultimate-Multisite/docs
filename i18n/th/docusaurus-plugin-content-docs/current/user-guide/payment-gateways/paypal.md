---
title: การตั้งค่า PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# การตั้งค่า PayPal Gateway (v2)

_**หมายเหตุสำคัญ: บทความนี้เกี่ยวข้องกับ Ultimate Multisite เวอร์ชัน 2.x**_

คุณสามารถเปิดใช้งานวิธีการชำระเงินได้สูงสุด 4 วิธีในหน้าตั้งค่าการชำระเงิน ได้แก่ Stripe, Stripe Checkout, PayPal และ Manual ในบทความนี้ เราจะมาดูวิธีการเชื่อมต่อกับ **PayPal**

เช่นเดียวกับ Stripe, PayPal เป็นที่นิยมใช้กันอย่างแพร่หลายสำหรับการชำระเงินออนไลน์ โดยเฉพาะบนเว็บไซต์ WordPress บทความนี้จะแนะนำวิธีการใช้ PayPal เป็นตัวเลือกการชำระเงินบนเครือข่ายของคุณ

โปรดทราบว่าคุณต้องมี **บัญชี PayPal Business** เพื่อขอรับข้อมูล API ที่จำเป็นสำหรับการเชื่อมต่อนี้

## การเปิดใช้งาน PayPal บนเครือข่ายของคุณ

หากต้องการเปิดใช้งาน PayPal เป็นตัวเลือกการชำระเงินบนเครือข่ายของคุณ ให้ไปที่ **Ultimate Multisite > Settings > Payments** แล้วทำเครื่องหมายในช่องถัดจาก PayPal

![การเปิดใช้งาน PayPal ในช่องทางการชำระเงิน](/img/config/settings-payment-gateways.png)

## การขอข้อมูล PayPal API

เมื่อเปิดใช้งาน PayPal เป็นช่องทางการชำระเงินแล้ว คุณจะต้องกรอกข้อมูลในช่อง PayPal API **Username**, PayPal API **Password** และ PayPal API **Signature**

คุณสามารถขอข้อมูลเหล่านี้ได้โดยเข้าสู่ระบบบัญชี PayPal [Live](https://www.paypal.com/home) หรือ [Sandbox](https://www.sandbox.paypal.com/home) ของคุณ

(โปรดจำไว้ว่าคุณสามารถใช้ **sandbox mode** เพื่อทดสอบการชำระเงินและตรวจสอบว่า gateway ถูกตั้งค่าอย่างถูกต้อง เพียงเปิดสวิตช์ในส่วนที่เกี่ยวข้อง)

![ช่องกรอกข้อมูล PayPal API และปุ่มเปิด-ปิด sandbox mode](/img/config/settings-payment-gateways.png)

วิธีขอข้อมูล API Signature หรือ Certificate สำหรับบัญชี PayPal ของคุณ:

  1. ไปที่ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)

  2. ในส่วน **API access** ให้คลิก **Update**  
![หน้า PayPal Account Settings พร้อมส่วน API access](/img/config/settings-payment-gateways.png)

  3. ใต้หัวข้อ **NVP/SOAP API integration (Classic)** ให้คลิก **Manage API credentials**  
![ส่วน PayPal NVP/SOAP API integration และ Manage API credentials](/img/config/settings-payment-gateways.png)

     * หากคุณเคยสร้าง API Signature หรือ Certificate ไว้แล้ว ระบบจะนำคุณไปยังหน้าที่แสดงข้อมูล credentials ของคุณ

     * _**หมายเหตุ:** หากระบบขอให้ยืนยันบัญชี PayPal ของคุณ ให้ทำตามคำแนะนำบนหน้าจอ_

  4. เลือก _หนึ่ง_ ตัวเลือกจากด้านล่าง แล้วคลิก **Agree and Submit**

     * **Request API Signature** – เลือกสำหรับการยืนยันตัวตนแบบ API Signature

     * **Request API Certificate** – เลือกสำหรับการยืนยันตัวตนแบบ API Certificate

  5. PayPal จะสร้างข้อมูล API credentials ของคุณดังนี้:  
![ข้อมูล PayPal API credentials ที่สร้างแล้ว](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ประกอบด้วย API Username, API Password และ Signature ซึ่งไม่มีวันหมดอายุ ค่าเหล่านี้จะถูกซ่อนไว้เพื่อความปลอดภัย คลิก **Show/Hide** เพื่อแสดงหรือซ่อน เมื่อเสร็จแล้วให้คลิก **Done**

     * **API Certificate credentials** ประกอบด้วย API Username, API Password และ Certificate ซึ่งจะหมดอายุโดยอัตโนมัติหลังจากสามปี คลิก **Download Certificate** เพื่อบันทึก API Certificate ไปยังเครื่องของคุณ

เพียงเท่านี้ การเชื่อมต่อการชำระเงินผ่าน PayPal ของคุณก็เสร็จสมบูรณ์แล้ว!

หากคุณมีคำถามเกี่ยวกับการตั้งค่า PayPal สามารถดูข้อมูลเพิ่มเติมได้ที่ [Help Center](https://www.paypal.com/br/smarthelp/home) ของ PayPal
