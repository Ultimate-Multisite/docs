---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# มาทำความรู้จัก Webhooks (v2) กัน

_**หมายเหตุ: ฟีเจอร์หรือบทความนี้เหมาะสำหรับผู้ใช้ขั้นสูง**_

**Webhook** คือวิธีที่แอปหรือซอฟต์แวร์อย่าง Ultimate Multisite ใช้ส่งข้อมูลแบบเรียลไทม์ไปยังแอปพลิเคชันอื่น ๆ Webhook จะส่งข้อมูลหรือ payload ไปยังแอปพลิเคชันอื่นทันทีที่เกิดเหตุการณ์ขึ้น หมายความว่าคุณ**จะได้รับข้อมูลทันที**

สิ่งนี้มีประโยชน์มากหากคุณต้องการเชื่อมต่อหรือส่งข้อมูลบางอย่างจาก Ultimate Multisite ไปยัง CRM หรือระบบอื่น ๆ ทุกครั้งที่มีเหตุการณ์เกิดขึ้น ตัวอย่างเช่น คุณต้องการส่งชื่อและอีเมลของผู้ใช้ไปยังรายชื่อผู้รับจดหมายทุกครั้งที่มีการสร้างบัญชีผู้ใช้ใหม่

## วิธีสร้าง webhook

ในการสร้าง webhook ให้ไปที่หน้าแดชบอร์ดผู้ดูแลเครือข่าย คลิกที่ **Ultimate Multisite > Webhooks > Add New Webhook**

![หน้ารายการ Webhooks พร้อมปุ่ม Add New Webhook](/img/admin/webhooks-list.png)

เมื่อสร้าง webhook ใหม่ ระบบจะถามข้อมูลต่าง ๆ เช่น **Name, URL,** และ **Event** คุณสามารถตั้งชื่อ webhook ได้ตามต้องการ ฟิลด์ที่สำคัญที่สุดคือ URL และ Event

![แบบฟอร์มสร้าง webhook ใหม่พร้อมฟิลด์ Name, URL และ Event](/img/admin/webhooks-list.png)

URL คือ **endpoint หรือปลายทาง** ที่ Ultimate Multisite จะส่ง **payload หรือข้อมูล** ไปให้ นี่คือแอปพลิเคชันที่จะรับข้อมูล

Zapier เป็นโซลูชันที่ผู้ใช้นิยมใช้มากที่สุดเพื่อให้การเชื่อมต่อกับแอปพลิเคชันภายนอกทำได้ง่ายขึ้น หากไม่มีแพลตฟอร์มอย่าง Zapier คุณจะต้องสร้างฟังก์ชันแบบกำหนดเองเพื่อรับข้อมูลและประมวลผลด้วยตัวเอง ดูบทความนี้เกี่ยวกับ **วิธีใช้ webhook ของ Ultimate Multisite กับ Zapier**

ในบทความนี้ เราจะมาดูแนวคิดพื้นฐานของการทำงานของ webhook และ event ต่าง ๆ ที่มีใน Ultimate Multisite โดยเราจะใช้เว็บไซต์ภายนอกที่ชื่อ [requestbin.com](https://requestbin.com/) เว็บไซต์นี้จะช่วยให้เราสร้าง endpoint และรับ payload ได้โดยไม่ต้องเขียนโค้ด _**ข้อจำกัด: สิ่งที่ทำได้คือแสดงให้เห็นว่าได้รับข้อมูลแล้ว**_ จะไม่มีการประมวลผลหรือดำเนินการใด ๆ กับ payload

ไปที่ [requestbin.com](https://requestbin.com/) แล้วคลิก Create Request Bin

![เว็บไซต์ RequestBin พร้อมปุ่ม Create Request Bin](/img/admin/webhooks-list.png)

หลังจากคลิกปุ่มนั้น ระบบจะขอให้คุณเข้าสู่ระบบหากมีบัญชีอยู่แล้ว หรือสมัครสมาชิก หากคุณมีบัญชีอยู่แล้ว ระบบจะพาคุณไปยังแดชบอร์ดทันที บนแดชบอร์ด คุณจะเห็น endpoint หรือ URL ที่สามารถใช้ในการสร้าง webhook ของ Ultimate Multisite ได้ทันที

![แดชบอร์ด RequestBin แสดง endpoint URL](/img/admin/webhooks-list.png)

คัดลอก URL แล้วกลับไปที่ Ultimate Multisite วาง endpoint ในฟิลด์ URL และเลือก event จากดรอปดาวน์ ในตัวอย่างนี้ เราจะเลือก **Payment Received**

Event นี้จะถูกเรียกใช้ทุกครั้งที่ผู้ใช้ทำการชำระเงิน Event ทั้งหมดที่มี คำอธิบาย และ payload ต่าง ๆ จะแสดงอยู่ที่ด้านล่างของหน้า คลิกปุ่ม **Add New Webhook** เพื่อบันทึก webhook

![Webhook ที่กำหนดค่าด้วย event Payment Received](/img/admin/webhooks-list.png)

ตอนนี้เราสามารถส่ง test event ไปยัง endpoint เพื่อดูว่า webhook ที่สร้างทำงานได้หรือไม่ เราทำได้โดยคลิก **Send Test Event** ใต้ webhook ที่เราสร้างไว้

![ตัวเลือก Send Test Event ใต้ webhook](/img/admin/webhooks-list.png)

จะปรากฏหน้าต่างยืนยันว่าการทดสอบสำเร็จ

![การยืนยันว่า webhook test event สำเร็จ](/img/admin/webhooks-list.png)

ตอนนี้หากเรากลับไปที่เว็บไซต์ _Requestbin_ เราจะเห็นว่าได้รับ payload แล้ว ซึ่งประกอบด้วยข้อมูลทดสอบบางส่วน

![RequestBin แสดงข้อมูล payload ของ webhook ที่ได้รับ](/img/admin/webhooks-list.png)

นี่คือหลักการพื้นฐานของการทำงานของ webhook และ endpoint หากคุณต้องการสร้าง endpoint แบบกำหนดเอง คุณจะต้องสร้างฟังก์ชันแบบกำหนดเองเพื่อประมวลผลข้อมูลที่ได้รับจาก Ultimate Multisite
