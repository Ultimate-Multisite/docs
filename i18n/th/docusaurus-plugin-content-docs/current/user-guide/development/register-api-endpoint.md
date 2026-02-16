---
title: ลงทะเบียน API Endpoint
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# API endpoint /register ของ Ultimate Multisite

ในบทแนะนำนี้ คุณจะได้เรียนรู้วิธีใช้ API endpoint /register ของ Ultimate Multisite เพื่อสร้างกระบวนการ onboarding ทั้งหมดสำหรับลูกค้าใหม่ในเครือข่ายของคุณ รวมถึงวิธีการทำผ่าน Zapier

endpoint นี้ใช้ method POST และเรียกใช้งานผ่าน URL _**https://yoursite.com/wp-json/wu/v2/register**_ ในการเรียกใช้งานนี้ จะมี 4 กระบวนการที่ทำงานภายในเครือข่ายของคุณ:

  * ระบบจะสร้างผู้ใช้ WordPress ใหม่ หรือระบุผู้ใช้ที่มีอยู่ผ่าน user ID

  * ระบบจะสร้าง Customer ใหม่ใน Ultimate Multisite หรือระบุลูกค้าที่มีอยู่ผ่าน customer ID

  * ระบบจะสร้างเว็บไซต์ใหม่บนเครือข่าย WordPress

  * สุดท้าย ระบบจะสร้าง Membership ใหม่ใน Ultimate Multisite

สำหรับกระบวนการนี้ คุณจะต้องใช้ API credentials ของคุณ ในการรับข้อมูลเหล่านี้ ให้ไปที่แผงควบคุมเครือข่ายของคุณ ไปที่ **Ultimate Multisite > Settings** > **API & Webhooks** และมองหาส่วน API Settings

![ส่วน API Settings ใน Ultimate Multisite](/img/config/settings-api.png)  
เลือก **Enable API** และรับ API credentials ของคุณ

ตอนนี้ มาดูรายละเอียดของ endpoint กัน จากนั้นจะสร้าง action สำหรับการลงทะเบียนใน Zapier

## พารามิเตอร์ body ของ endpoint

มาดูภาพรวมของข้อมูลขั้นต่ำที่เราต้องส่งไปยัง endpoint กัน ท้ายบทความนี้ คุณจะพบการเรียกใช้งานแบบเต็ม

### Customer

นี่คือข้อมูลที่จำเป็นสำหรับกระบวนการสร้าง User และ Customer ของ Ultimate Multisite:

"customer_id" : integer

คุณสามารถส่ง customer ID ที่สร้างไว้แล้วในเครือข่ายของคุณได้ หากไม่ส่ง ระบบจะใช้ข้อมูลด้านล่างเพื่อสร้างลูกค้าใหม่และผู้ใช้ WordPress ใหม่ user ID ก็สามารถส่งได้ในลักษณะเดียวกับ customer ID

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

ข้อมูลเดียวที่เราต้องการภายใน object นี้คือสถานะ Membership

"membership" { "status" : "string", // หนึ่งใน "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products จะรับ array ที่มี product ID 1 รายการขึ้นไปจากเครือข่ายของคุณ โปรดทราบว่า endpoint นี้ไม่ได้สร้าง products ดูเอกสารของ Ultimate Multisite เพื่อทำความเข้าใจ endpoint สำหรับการสร้าง product เพิ่มเติม

**"products" : [1,2],**

### Payment

เช่นเดียวกับ Membership เราต้องการเพียงสถานะเท่านั้น

**"payment" { "status" : "string", // หนึ่งใน "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

และเพื่อปิดท้าย body เราต้องการ URL และ Title ของเว็บไซต์ ทั้งคู่อยู่ภายใน object Site

**"site" : { "site_url" : "string", "site_title" : "string" }**

ค่าที่ส่งกลับจาก register endpoint จะเป็น array ที่มีข้อมูล membership ที่สร้างใหม่

## การสร้าง action ใน Zapier

ด้วยการเปิดตัว endpoint สำหรับสร้างบัญชีใหม่ที่มีประสิทธิภาพมากขึ้นนี้ คุณยังสามารถเข้าถึง action ใหม่ใน Zapier ได้อีกด้วย

คุณรู้วิธีใช้และใช้ประโยชน์จากทุกสิ่งที่ Zapier เวอร์ชันใหม่มอบให้หรือไม่? เรียนรู้เพิ่มเติมที่นี่ (link?)

### การสร้าง action

เพื่อแสดงให้เห็นวิธีใช้ registration endpoint กับ Zapier ได้ดียิ่งขึ้น มาสร้าง integration กับ Google Forms กัน ทุกครั้งที่มีการกรอกฟอร์มนี้และข้อมูลถูกบันทึกในชีตคำตอบของฟอร์ม จะมีการสร้าง membership ใหม่ในเครือข่าย Ultimate Multisite

ใน Google Forms ให้สร้างฟอร์มที่มีฟิลด์ขั้นต่ำที่จำเป็นในการสร้าง membership ใหม่ในเครือข่าย

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ตอนนี้ใน Zapier ให้สร้าง Zap ใหม่และเชื่อมต่อฟอร์มที่สร้างใน Google ผ่าน spreadsheet ที่ข้อมูลถูกบันทึกไว้

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

เรียบร้อย! ฟอร์ม Google Forms เชื่อมต่อกับ Zapier แล้วและพร้อมที่จะ integrate กับเครือข่าย ตอนนี้มาไปที่ Action ที่จะเป็นผลลัพธ์จาก Trigger ที่ Google Forms ส่งทุกครั้งที่มีการกรอก

ค้นหาแอป Ultimate Multisite ใหม่และเลือก สำหรับ Zap ประเภทนี้ให้เลือกตัวเลือก Register

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

หลังจากขั้นตอนแรกนี้ ให้เลือกบัญชีที่จะเชื่อมต่อกับ Zap นี้<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

นี่คือส่วนที่สำคัญที่สุดของกระบวนการทั้งหมด เราต้องจับคู่ฟิลด์ที่มาจาก Google Forms กับฟิลด์ขั้นต่ำที่จำเป็นสำหรับ register endpoint ตามที่แสดงในส่วนก่อนหน้าของบทความนี้

ในตัวอย่างนี้ เราต้องกำหนดค่า username, email, password, ชื่อ และ URL ของเว็บไซต์เท่านั้น ส่วนที่เหลือถูกกำหนดไว้ล่วงหน้าเพื่อให้ membership ทั้งหมดที่สร้างจาก Google Forms นี้ใช้ product และสถานะตามรูปแบบเดียวกัน

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

เมื่อตั้งค่าข้อมูลเรียบร้อยแล้ว ให้ดำเนินการทดสอบขั้นสุดท้าย ในหน้าจอสุดท้าย คุณจะเห็นฟิลด์ทั้งหมดที่จะถูกส่งไปยัง endpoint ข้อมูลที่เกี่ยวข้อง และฟิลด์ที่จะถูกส่งเป็นค่าว่าง<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

ทดสอบ Zap ใหม่ของคุณและควรจะเสร็จสมบูรณ์ หากเกิดข้อผิดพลาดใดๆ ให้ตรวจสอบฟิลด์ทั้งหมดว่าถูกส่งอย่างถูกต้องหรือไม่ เนื่องจากมีข้อมูลจำนวนมาก บางอย่างอาจถูกมองข้ามได้

### พารามิเตอร์ endpoint แบบเต็ม

นี่คือการเรียกใช้งานแบบเต็มและความเป็นไปได้ทั้งหมดของฟิลด์ที่สามารถส่งได้

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // หนึ่งใน "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // หนึ่งใน "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
