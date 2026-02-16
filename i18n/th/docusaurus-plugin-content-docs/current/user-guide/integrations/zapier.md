---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# การเชื่อมต่อ Ultimate Multisite กับ Zapier

ในบทความก่อนหน้านี้ เราได้พูดถึง [Webhooks](webhooks.md) และวิธีการใช้งานเพื่อเชื่อมต่อกับแอปพลิเคชันภายนอก

การใช้ webhooks อาจค่อนข้างซับซ้อนเพราะต้องมีความรู้ขั้นสูงด้านการเขียนโค้ดและการรับ payload ข้อมูล การใช้ **Zapier** เป็นวิธีที่ช่วยให้คุณหลีกเลี่ยงความยุ่งยากเหล่านั้นได้

Zapier สามารถเชื่อมต่อกับแอปกว่า 5,000 แอป ทำให้การสื่อสารระหว่างแอปพลิเคชันต่างๆ ง่ายขึ้นมาก

คุณสามารถสร้าง **Triggers** (ตัวกระตุ้น) ที่จะทำงานเมื่อมีเหตุการณ์เกิดขึ้นบนเครือข่ายของคุณ (เช่น เมื่อมีการสร้างบัญชีใหม่จะกระตุ้น event account_create) หรือสร้าง **Actions** (การดำเนินการ) บนเครือข่ายของคุณเพื่อตอบสนองต่อเหตุการณ์ภายนอก (เช่น สร้างสมาชิกบัญชีใหม่ในเครือข่าย Ultimate Multisite ของคุณ)

สิ่งนี้เป็นไปได้เพราะ **triggers และ actions ของ Ultimate Multisite Zapier** ทำงานผ่าน [REST API](https://developer.ultimatemultisite.com/api/docs/)

## เริ่มต้นใช้งาน

ขั้นแรก ค้นหา Ultimate Multisite ในรายการแอปของ Zapier หรือคุณสามารถคลิก[ลิงก์นี้](https://zapier.com/apps/wp-ultimo/integrations)ได้โดยตรง

ไปที่ dashboard ของคุณแล้วกดปุ่ม **+** **Create Zap** ที่แถบด้านข้างซ้ายเพื่อตั้งค่า Zap ใหม่

![Zapier dashboard พร้อมปุ่ม Create Zap](/img/admin/webhooks-list.png)

คุณจะถูกนำไปยังหน้าสร้าง Zap

ในช่องค้นหา พิมพ์ "wp ultimo" แล้วคลิกเลือกตัวเลือก **Beta**

![การค้นหา WP Ultimo ในรายการแอป Zapier](/img/admin/webhooks-list.png)

หลังจากเลือกแอปของเราแล้ว ให้เลือก event ที่มี: **New Ultimate Multisite Event**

![การเลือก trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

ตอนนี้เราต้องให้สิทธิ์ Zapier เข้าถึง**เครือข่ายของคุณ** การคลิกที่ **Sign in** จะเปิดหน้าต่างใหม่ที่ต้องใส่ **API credentials**

![หน้าต่าง Sign in ของ Zapier สำหรับใส่ API credentials](/img/admin/webhooks-list.png)

ไปที่หน้าผู้ดูแลเครือข่ายของคุณแล้วไปที่ **Ultimate Multisite > Settings** > **API & Webhooks** และมองหาส่วน API Settings

เลือกตัวเลือก **Enable API** เนื่องจากจำเป็นต้องเปิดใช้งานเพื่อให้การเชื่อมต่อทำงานได้

![API Settings พร้อมตัวเลือก Enable API ใน Ultimate Multisite](/img/admin/webhooks-list.png)

ใช้ไอคอน **Copy to Clipboard** ในช่อง API Key และ API Secret แล้ววางค่าเหล่านั้นในหน้าจอการเชื่อมต่อ

ในช่อง URL ให้ใส่ URL เต็มของเครือข่ายของคุณ รวมถึง protocol (HTTP หรือ HTTPS)

![หน้าจอเชื่อมต่อ Zapier พร้อมช่อง API Key, Secret และ URL](/img/admin/webhooks-list.png)

คลิกปุ่ม **Yes, Continue** เพื่อไปยังขั้นตอนถัดไป หากทุกอย่างเรียบร้อย คุณจะเห็นบัญชีที่เชื่อมต่อใหม่ของคุณ! คลิก **Continue** เพื่อสร้าง trigger ใหม่

## วิธีสร้าง Trigger ใหม่

เมื่อบัญชีของคุณเชื่อมต่อแล้ว คุณจะเห็น events ที่มีให้เลือก ในบทเรียนนี้เราจะเลือก event **payment_received**

![การเลือก event payment_received ใน Zapier trigger](/img/admin/webhooks-list.png)

เมื่อเลือก event แล้วและคลิก **continue** จะปรากฏ **test step** (ขั้นตอนทดสอบ)

![ขั้นตอนทดสอบ trigger ของ Zapier](/img/admin/webhooks-list.png)

ในขั้นตอนนี้ Zapier จะทดสอบว่า Zap ของคุณสามารถ **ดึง payload ที่เฉพาะเจาะจงสำหรับ event นั้น** ได้หรือไม่ ใน events ครั้งต่อๆ ไปที่เป็นประเภทเดียวกัน ข้อมูลที่มีโครงสร้างแบบเดียวกันนี้จะถูกส่งมา

![การทดสอบ trigger ของ Zapier สำเร็จพร้อม payload](/img/admin/webhooks-list.png)

ในบทเรียนของเรา การทดสอบ **เสร็จสมบูรณ์** และส่งกลับข้อมูลตัวอย่างของ payload ข้อมูลตัวอย่างนี้จะเป็นประโยชน์ในการแนะนำเราขณะสร้าง actions ตอนนี้ trigger ของคุณถูกสร้างขึ้นแล้วและพร้อมเชื่อมต่อกับแอปพลิเคชันอื่นๆ

## วิธีสร้าง Actions

Actions ใช้ข้อมูลจาก triggers อื่นเพื่อสร้างรายการใหม่ในเครือข่ายของคุณ

ใน **ขั้นตอนการสร้าง action** คุณจะเลือก Ultimate Multisite **Beta** และตัวเลือก **Create Items on Ultimate Multisite**

![การสร้าง action ด้วย Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ในขั้นตอนถัดไป คุณจะต้องสร้างการยืนยันตัวตนใหม่ เหมือนที่เราทำใน **เริ่มต้นใช้งาน** หรือเลือกการยืนยันตัวตนที่สร้างไว้แล้ว ในบทเรียนนี้เราจะเลือกการยืนยันตัวตนที่สร้างไว้ก่อนหน้านี้

![การเลือกการยืนยันตัวตนสำหรับ Zapier action](/img/admin/webhooks-list.png)

### การตั้งค่า Action

นี่คือ **ขั้นตอนหลักของ action** และตรงนี้จะแตกต่างออกไปเล็กน้อย ข้อมูลแรกที่คุณจะเลือกคือ **Item** ซึ่ง Item คือ **รูปแบบข้อมูล** ของเครือข่ายของคุณ เช่น **Customers, Payments, Sites, Emails** และอื่นๆ

![การเลือกประเภท Item สำหรับ Zapier action](/img/admin/webhooks-list.png)

เมื่อเลือก item แล้ว ฟอร์มจะ **จัดเรียงใหม่เพื่อแสดงฟิลด์ที่จำเป็นและฟิลด์ที่เลือกได้** สำหรับ item ที่เลือก

ตัวอย่างเช่น เมื่อเลือก item **Customer** ฟิลด์ในฟอร์มจะแสดงทุกอย่างที่จำเป็นต้องกรอกเพื่อสร้าง Customer ใหม่ในเครือข่าย

![ฟิลด์ของ Customer item ในการตั้งค่า Zapier action](/img/admin/webhooks-list.png)

หลังจากกรอกฟิลด์ทั้งหมดที่ระบุว่า **required** และคลิก continue หน้าจอสุดท้ายจะแสดงฟิลด์ที่กรอกแล้วและฟิลด์ที่ยังไม่ได้กรอก

![การทดสอบ Zapier action แสดงฟิลด์ที่กรอกแล้วและยังไม่ได้กรอก](/img/admin/webhooks-list.png)

เมื่อการทดสอบเสร็จสิ้นและสำเร็จ action ของคุณก็ถูกตั้งค่าเรียบร้อยแล้ว สิ่งสำคัญคือควรตรวจสอบในเครือข่ายของคุณด้วยว่า item ถูกสร้างขึ้นจากการทดสอบ action ของคุณหรือไม่
