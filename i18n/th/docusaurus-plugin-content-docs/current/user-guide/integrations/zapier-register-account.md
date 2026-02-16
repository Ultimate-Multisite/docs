---
title: ลงทะเบียนบัญชีผ่าน Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Event: ลงทะเบียนบัญชีผ่าน Zapier

ในบทความ [การเชื่อมต่อ Ultimate Multisite กับ Zapier](zapier.md) เราได้พูดถึงวิธีใช้ Zapier เพื่อดำเนินการต่างๆ ภายใน Ultimate Multisite ตาม trigger และ event ในบทความนี้ เราจะแสดงวิธีเชื่อมต่อกับแอปพลิเคชันภายนอก โดยจะใช้ Google Sheets เป็นแหล่งข้อมูลและส่งข้อมูลไปยัง Ultimate Multisite เพื่อลงทะเบียนบัญชี

ก่อนอื่น คุณต้องสร้าง **Google Sheet** ใน Google Drive ของคุณ ตรวจสอบให้แน่ใจว่าคุณกำหนดชื่อคอลัมน์แต่ละคอลัมน์อย่างชัดเจน เพื่อให้สามารถจับคู่ข้อมูลได้ง่ายในภายหลัง

![Google Sheet พร้อมคอลัมน์สำหรับข้อมูลลูกค้า](/img/admin/webhooks-list.png)หลังจากสร้าง Google Sheet แล้ว คุณสามารถเข้าสู่ระบบบัญชี Zapier และเริ่มสร้าง zap ได้

![แดชบอร์ด Zapier เพื่อเริ่มสร้าง zap](/img/admin/webhooks-list.png)ในช่องค้นหา **"App event"** ให้เลือก **"Google Sheets"**

![เลือก Google Sheets เป็น app event](/img/admin/webhooks-list.png)

จากนั้นในช่อง "**Event**" ให้เลือก "**New spreadsheet row**" แล้วกด "**Continue**"

![เลือก event New spreadsheet row ใน Zapier](/img/admin/webhooks-list.png)ขั้นตอนถัดไปจะให้คุณเลือก **Google Account** ที่บันทึก **Google Sheet** ไว้ ตรวจสอบให้แน่ใจว่าเลือกบัญชี Google ที่ถูกต้อง

![เลือก Google Account สำหรับ Google Sheet](/img/admin/webhooks-list.png)

ในส่วน "**Set up trigger**" คุณจะต้องเลือกและระบุ Google Spreadsheet และ worksheet ที่คุณจะใช้เป็นแหล่งข้อมูล กรอกข้อมูลเหล่านั้นให้เรียบร้อยแล้วกด "**Continue**"

![ตั้งค่า trigger พร้อมการเลือก spreadsheet และ worksheet](/img/admin/webhooks-list.png)ขั้นตอนถัดไปคือ "**test your trigger**" เพื่อให้แน่ใจว่า Google Sheet ของคุณเชื่อมต่อได้อย่างถูกต้อง

![ขั้นตอนทดสอบ trigger ใน Zapier](/img/admin/webhooks-list.png)หากการทดสอบสำเร็จ คุณจะเห็นผลลัพธ์แสดงค่าบางส่วนจาก spreadsheet ของคุณ คลิก "**Continue**" เพื่อดำเนินการต่อ

![การทดสอบ trigger สำเร็จ แสดงค่าจาก spreadsheet](/img/admin/webhooks-list.png)ขั้นตอนถัดไปคือการตั้งค่า action ที่สองเพื่อสร้างหรือลงทะเบียนบัญชีใน Ultimate Multisite ในช่องค้นหาให้เลือก "**Ultimate Multisite(2.0.2)**"

![เลือก Ultimate Multisite เป็น action app](/img/admin/webhooks-list.png)

ในช่อง "**Event**" ให้เลือก "**Register an Account in Ultimate Multisite**" จากนั้นคลิกปุ่ม "**Continue**"

![event action Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)ในส่วน "**Set up an action**" คุณจะเห็นช่องข้อมูลต่างๆ สำหรับข้อมูลลูกค้า สมาชิก สินค้า ฯลฯ คุณสามารถจับคู่ค่าจาก Google Sheet และกำหนดให้กับช่องที่เหมาะสมที่ต้องการให้ข้อมูลปรากฏ ดังที่แสดงในภาพด้านล่าง

![จับคู่ค่าจาก Google Sheet กับช่องข้อมูลใน Ultimate Multisite](/img/admin/webhooks-list.png)

หลังจากจับคู่ค่าแล้ว คุณสามารถทดสอบ action ได้

![ทดสอบ action ลงทะเบียนบัญชีใน Zapier](/img/admin/webhooks-list.png)
