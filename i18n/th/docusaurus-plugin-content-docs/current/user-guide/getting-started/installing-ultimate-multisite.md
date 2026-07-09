---
title: กำลังติดตั้ง Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# การติดตั้ง Ultimate Multisite {#installing-ultimate-multisite}

:::note
คู่มือนี้สมมติว่าคุณได้ติดตั้งและกำหนดค่า WordPress Multisite ไว้แล้ว หากต้องการเรียนรู้วิธีการ ให้ดู [คู่มือนี้](https://www.wpbeginner.com/glossary/multisite/) จาก WP Beginner
:::

## การติดตั้งปลั๊กอิน {#installing-the-plugin}

Ultimate Multisite มีให้ใช้งานฟรีบน [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

จาก **Network Admin Dashboard** ของคุณ ไปที่ **Plugins → Add New Plugin**.

![หน้า Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

ค้นหา "**Ultimate Multisite**" (โดยใส่เครื่องหมายคำพูดเพื่อให้ได้ผลลัพธ์ที่ตรงกัน) และปลั๊กอินจะปรากฏเป็นผลลัพธ์แรก คลิก **Install Now**.

![ผลการค้นหาแสดง Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

เมื่อติดตั้งเสร็จแล้ว ให้คลิก **Network Activate** เพื่อเปิดใช้งานปลั๊กอินในเครือข่ายทั้งหมดของคุณ

![ปลั๊กอินติดตั้งพร้อมปุ่ม Network Activate](/img/installation/plugin-installed.png)

หลังจากเปิดใช้งาน คุณจะถูกนำไปยัง Setup Wizard โดยอัตโนมัติ

![ปลั๊กอินเปิดใช้งานและเปลี่ยนเส้นทางไปยัง wizard](/img/installation/plugin-activated.png)

## Setup Wizard {#setup-wizard}

Setup Wizard จะแนะนำคุณในการกำหนดค่า Ultimate Multisite ภายในเวลาประมาณ 10 นาที

### ยินดีต้อนรับ {#welcome}

คลิก **Get Started** เพื่อเริ่มต้น

![หน้าจอ Setup Wizard ยินดีต้อนรับ](/img/installation/wizard-welcome.png)

### การตรวจสอบก่อนติดตั้ง {#pre-install-checks}

ขั้นตอนนี้จะตรวจสอบข้อมูลระบบและการติดตั้ง WordPress ของคุณเพื่อให้แน่ใจว่าเป็นไปตามข้อกำหนดของ Ultimate Multisite หากทุกอย่างเป็นไปด้วยดี ให้คลิก **Go to the Next Step**.

![การตรวจสอบก่อนติดตั้งแสดงข้อกำหนดของระบบ](/img/installation/wizard-pre-install-checks.png)

:::note ปุ่ม Network Activate (v2.6.1+)
หาก Ultimate Multisite ได้รับการติดตั้งแล้ว แต่ยัง **ไม่ได้เปิดใช้งานในระดับเครือข่าย** ตัวอย่างเช่น หากคุณคลิก **Activate** (สำหรับไซต์เดียว) แทนที่จะเป็น **Network Activate** จากหน้าจอปลั๊กอินของเครือข่าย ขั้นตอนการตรวจสอบก่อนติดตั้งจะตรวจพบสิ่งนี้และแสดงปุ่ม **Network Activate**.

การคลิก **Network Activate** จะเปิดใช้งานปลั๊กอินในเครือข่าย multisite ทั้งหมดของคุณโดยอัตโนมัติ เมื่อเปิดใช้งานแล้ว wizard จะดำเนินต่อไปตามปกติไปยังขั้นตอนการติดตั้ง คุณไม่จำเป็นต้องออกจาก wizard เพื่อแก้ไขสถานะการเปิดใช้งาน
:::

### การติดตั้ง {#installation}

ตัวติดตั้งจะสร้างตารางฐานข้อมูลที่จำเป็นและติดตั้งไฟล์ `sunrise.php` ที่ Ultimate Multisite ต้องการเพื่อทำงาน คลิก **Install** เพื่อดำเนินการต่อ

![ขั้นตอนการติดตั้งแสดงตารางฐานข้อมูลและ sunrise.php](/img/installation/wizard-installation.png)

### ข้อมูลบริษัทของคุณ {#your-company}

กรอกข้อมูลบริษัทของคุณและตั้งค่าสกุลเงินเริ่มต้น ข้อมูลนี้จะถูกใช้ทั่วทั้งแพลตฟอร์ม WaaS ของคุณ คลิก **Continue** เมื่อทำเสร็จแล้ว

![ขั้นตอนการกำหนดค่า Your Company](/img/installation/wizard-your-company.png)

### เนื้อหาเริ่มต้น {#default-content}

ขั้นตอนนี้นำเสนอให้ติดตั้งเทมเพลตที่กำหนดไว้ล่วงหน้า ผลิตภัณฑ์ และเนื้อหาเริ่มต้นอื่นๆ นี่เป็นวิธีที่ดีในการทำความคุ้นเคยกับคุณสมบัติของ Ultimate Multisite คลิก **Install** เพื่อเพิ่มเนื้อหาเริ่มต้น หรือข้ามขั้นตอนนี้หากคุณต้องการเริ่มต้นจากศูนย์

![ขั้นตอนการติดตั้งเนื้อหาเริ่มต้น](/img/installation/wizard-default-content.png)

### ปลั๊กอินที่แนะนำ {#recommended-plugins}

ติดตั้งปลั๊กอินเสริมที่แนะนำ หากต้องการ คลิก **Install** เพื่อเพิ่มหรือข้ามเพื่อดำเนินการต่อ

![ขั้นตอนปลั๊กอินที่แนะนำ](/img/installation/wizard-recommended-plugins.png)

### พร้อมแล้ว! {#ready}

เสร็จสิ้น! การติดตั้ง Ultimate Multisite ของคุณเสร็จสมบูรณ์ ตอนนี้คุณสามารถเริ่มสร้างแพลตฟอร์ม Website as a Service จาก **Network Admin Dashboard** ได้แล้ว

![การตั้งค่าเสร็จสมบูรณ์ - หน้าจอพร้อมใช้งาน](/img/installation/wizard-ready.png)

![Network Admin Dashboard ที่มี Ultimate Multisite เปิดใช้งาน](/img/installation/network-dashboard.png)

ลองสนุกกับการใช้งานได้เลย!
