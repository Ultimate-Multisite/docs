---
title: การผสานการทำงานกับ Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# การผสาน Ultimate Multisite กับ Zapier

ในหนึ่งในบทความ เราได้พูดถึง [Webhooks](webhooks.md) และวิธีที่สามารถใช้เพื่อผสานกับแอปพลิเคชันของบุคคลที่สามได้

การใช้ webhooks ค่อนข้างซับซ้อน เพราะต้องมีความรู้ขั้นสูงด้านการเขียนโค้ดและการรับ payloads การใช้ **Zapier** เป็นวิธีหนึ่งที่ช่วยให้คุณหลีกเลี่ยงความซับซ้อนนั้นได้

Zapier มีการผสานกับแอปมากกว่า 5000+ แอป ซึ่งทำให้การสื่อสารระหว่างแอปพลิเคชันต่าง ๆ ง่ายขึ้น

คุณสามารถสร้าง **Triggers** ที่จะถูกเรียกใช้งานเมื่อมีเหตุการณ์เกิดขึ้นบนเครือข่ายของคุณ (เช่น Account ถูกสร้างและเรียกใช้งานเหตุการณ์ account_create) หรือสร้าง **Actions** บนเครือข่ายของคุณเพื่อตอบสนองต่อเหตุการณ์ภายนอก (เช่น สร้างสมาชิก Account ใหม่ในเครือข่าย Ultimate Multisite ของคุณ)

สิ่งนี้เป็นไปได้เพราะ **Triggers ของ Ultimate Multisite Zapier** และ Actions ขับเคลื่อนโดย [REST API](https://developer.ultimatemultisite.com/api/docs/)

## วิธีเริ่มต้น {#how-to-start}

ก่อนอื่น ให้ค้นหา Ultimate Multisite ในรายการแอปของ Zapier หรือคุณสามารถคลิก [ลิงก์นี้](https://zapier.com/apps/wp-ultimo/integrations) ได้

ไปที่ Dashboard ของคุณแล้วกดปุ่ม **+** **Create Zap** ที่แถบด้านข้างซ้ายเพื่อตั้งค่า Zap ใหม่

![Dashboard ของ Zapier พร้อมปุ่ม Create Zap](/img/admin/webhooks-list.png)

คุณจะถูกเปลี่ยนเส้นทางไปยังหน้าสร้าง Zap

ในช่องค้นหา ให้พิมพ์ "wp ultimo" คลิกเพื่อเลือกตัวเลือกเวอร์ชัน **Beta**

![การค้นหา WP Ultimo ในรายการแอปของ Zapier](/img/admin/webhooks-list.png)

หลังจากเลือกแอปของเราแล้ว ให้เลือกเหตุการณ์ที่มีให้ใช้: **New Ultimate Multisite Event**

![การเลือก Trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

ตอนนี้เราต้องให้ Zapier เข้าถึง **เครือข่ายของคุณ** การคลิกที่ **Sign in** จะเปิดหน้าต่างใหม่ที่ต้องใช้ **API credentials**

![ข้อความแจ้ง Sign in ของ Zapier สำหรับ API credentials](/img/admin/webhooks-list.png)

ไปที่แผงผู้ดูแลระบบเครือข่ายของคุณ แล้วไปที่ **Ultimate Multisite > Settings** > **API & Webhooks** และมองหาส่วน API Settings

เลือกตัวเลือก **Enable API** เนื่องจากจำเป็นสำหรับการเชื่อมต่อนี้ให้ทำงานได้

![การตั้งค่า API and Webhooks พร้อมตัวเลือก API Settings และ Enable API](/img/admin/settings-api-webhooks.png)

ใช้ไอคอน **Copy to Clipboard** บนช่อง API Key และ API Secret แล้ววางค่าเหล่านั้นบนหน้าจอการผสาน

ในช่อง URL ให้ใส่ URL เต็มของเครือข่ายของคุณ รวมถึงโปรโตคอล (HTTP หรือ HTTPS)

![หน้าจอการผสานของ Zapier พร้อมช่อง API Key, Secret และ URL](/img/admin/webhooks-list.png)

คลิกปุ่ม **Yes, Continue** เพื่อไปยังขั้นตอนถัดไป หากทุกอย่างทำงานได้ คุณควรได้รับการต้อนรับด้วย Account ที่เชื่อมต่อใหม่ของคุณ! คลิก **Continue** เพื่อสร้าง Trigger ใหม่

## วิธีสร้าง Trigger ใหม่ {#how-to-create-a-new-trigger}

ตอนนี้ Account ของคุณเชื่อมต่อแล้ว คุณจะเห็นเหตุการณ์ที่มีให้ใช้ มาเลือกเหตุการณ์ **payment_received** สำหรับบทช่วยสอนนี้

![การเลือกเหตุการณ์ payment_received ใน Trigger ของ Zapier](/img/admin/webhooks-list.png)

เมื่อเลือกเหตุการณ์แล้วและคุณคลิก **continue** จะมี **ขั้นตอนทดสอบ** ปรากฏขึ้น

![ขั้นตอนทดสอบของ Zapier สำหรับ Trigger](/img/admin/webhooks-list.png)

ในขั้นตอนนี้ Zapier จะทดสอบว่า Zap ของคุณสามารถ **ดึง payload เฉพาะสำหรับเหตุการณ์นั้น** ได้หรือไม่ ในเหตุการณ์ในอนาคตที่เป็นประเภทเดียวกัน ข้อมูลที่มีโครงสร้างเดียวกันนี้จะถูกส่งไป

![การทดสอบ Trigger ของ Zapier เสร็จสมบูรณ์สำเร็จพร้อม payload](/img/admin/webhooks-list.png)

ในบทช่วยสอนของเรา การทดสอบ **เสร็จสมบูรณ์สำเร็จ** และส่งคืนข้อมูลตัวอย่าง payload ข้อมูลตัวอย่างนี้จะเป็นประโยชน์ในการช่วยแนะนำเราในขณะที่สร้าง Actions ตอนนี้ Trigger ของคุณถูกสร้างแล้วและพร้อมเชื่อมต่อกับแอปพลิเคชันอื่น ๆ

## วิธีสร้าง Actions {#how-to-create-actions}

Actions ใช้ข้อมูลจาก Triggers อื่น ๆ เพื่อสร้างรายการใหม่ในเครือข่ายของคุณ

ใน **ขั้นตอนการสร้าง Action** คุณจะเลือก Ultimate Multisite **Beta** และตัวเลือก **Create Items on Ultimate Multisite**

![การสร้าง Action ด้วย Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

ในขั้นตอนถัดไป คุณจะสร้างการยืนยันตัวตนของคุณ เช่นเดียวกับที่เราทำใน **วิธีเริ่มต้น** หรือเลือกการยืนยันตัวตนที่สร้างไว้แล้ว ในบทช่วยสอนนี้ เราจะเลือกการยืนยันตัวตนเดียวกันที่สร้างไว้ก่อนหน้านี้

![การเลือกการยืนยันตัวตนสำหรับ Action ของ Zapier](/img/admin/webhooks-list.png)

### การตั้งค่า Action {#setting-up-the-action}

นี่คือ **ขั้นตอนหลักของ Action** และตรงนี้สิ่งต่าง ๆ จะแตกต่างออกไปเล็กน้อย ข้อมูลแรกที่คุณจะเลือกคือ **Item** Item คือ **โมเดลข้อมูล** ของเครือข่ายของคุณ เช่น **Customers, Payments, Sites, Emails** และอื่น ๆ

![การเลือกประเภท Item สำหรับ Action ของ Zapier](/img/admin/webhooks-list.png)

เมื่อเลือก Item แบบฟอร์มจะ **จัดเรียงใหม่เพื่อนำช่องที่จำเป็นและช่องที่ไม่บังคับ** สำหรับ Item ที่เลือกมาแสดง

ตัวอย่างเช่น เมื่อเลือก Item **Customer** ช่องแบบฟอร์มจะแสดงทุกอย่างที่จำเป็นต้องกรอกเพื่อสร้าง Customer ใหม่ในเครือข่าย

![ช่อง Item Customer ในการตั้งค่า Action ของ Zapier](/img/admin/webhooks-list.png)

หลังจากกรอกทุกช่องที่ทำเครื่องหมายว่า **required** และคลิก continue หน้าจอสุดท้ายจะแสดงช่องที่กรอกแล้วและช่องที่เว้นว่างไว้ให้คุณดู

![การทดสอบ Action ของ Zapier ที่แสดงช่องที่กรอกแล้วและยังไม่ได้กรอก](/img/admin/webhooks-list.png)

ทันทีที่การทดสอบของคุณเสร็จสมบูรณ์และสำเร็จ Action ของคุณก็จะถูกกำหนดค่าแล้ว นอกจากนี้ยังสำคัญที่ต้องตรวจสอบบนเครือข่ายของคุณว่า Item ถูกสร้างขึ้นด้วยการทดสอบ Action ของคุณหรือไม่
