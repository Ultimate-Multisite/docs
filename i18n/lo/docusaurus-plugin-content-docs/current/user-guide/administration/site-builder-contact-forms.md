---
title: ແບບຟອມຕິດຕໍ່ຜູ້ສ້າງເວັບໄຊທ໌
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# แบบฟอร์มติดต่อของ Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 เพิ่มความสามารถในการสร้างแบบฟอร์มติดต่อได้โดยตรงจากหน้าแชท โดยใช้ตัวแทน (agent) ของ Site Builder สิ่งนี้ช่วยให้คุณเพิ่มแบบฟอร์มติดต่อที่ใช้งานได้เต็มรูปแบบลงในทุกหน้าได้โดยไม่ต้องออกจากหน้าแชท

## ภาพรวม {#overview}

ความสามารถในการสร้างแบบฟอร์มติดต่อของ Site Builder (`create_contact_form`) จะตรวจจับปลั๊กอินแบบฟอร์มที่คุณติดตั้งไว้โดยอัตโนมัติ และจะสร้างแบบฟอร์มติดต่อโดยใช้ความสามารถพื้นฐานของปลั๊กอินนั้น ปลั๊กอินแบบฟอร์มที่รองรับ ได้แก่:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

ผู้ช่วย (assistant) จะเลือกปลั๊กอินแบบฟอร์มที่ดีที่สุดที่มีอยู่บนเว็บไซต์ของคุณโดยอัตโนมัติ และสร้างแบบฟอร์มติดต่อที่ปรับให้เข้ากับปลั๊กอินนั้น

## การสร้างแบบฟอร์มติดต่อ {#creating-a-contact-form}

ในการสร้างแบบฟอร์มติดต่อโดยใช้ Site Builder:

1. เปิดแผงแชท **Gratis AI Agent** ใน WordPress admin
2. สลับไปใช้ตัวแทน (agent) **Site Builder** โดยคลิกที่ไอคอน agent ในส่วนหัวของแชท
3. อธิบายแบบฟอร์มติดต่อที่คุณต้องการสร้าง ตัวอย่างเช่น:

   > "เพิ่มแบบฟอร์มติดต่อลงในหน้า Contact พร้อมช่องสำหรับชื่อ อีเมล ข้อความ และเบอร์โทรศัพท์"

   หรือแค่พูดว่า:

   > "สร้างแบบฟอร์มติดต่อสำหรับหน้า Contact"

4. Site Builder จะสร้างแบบฟอร์มติดต่อและส่งโค้ดสั้น (shortcode) ที่พร้อมสำหรับการฝัง (embed) กลับมาให้คุณ

## การใช้ Shortcode ที่สร้างขึ้น {#using-the-generated-shortcode}

หลังจากที่ Site Builder สร้างแบบฟอร์มติดต่อเสร็จแล้ว มันจะส่ง shortcode กลับมาให้ (เช่น `[contact-form-7 id="123"]`) คุณสามารถ:

1. **ฝังลงในหน้าหรือโพสต์** — คัดลอก shortcode นั้น แล้วนำไปวางในหน้าหรือโพสต์ใดก็ได้โดยใช้ block editor หรือ classic editor
2. **เพิ่มผ่าน Site Builder** — สั่งให้ Site Builder เพิ่มแบบฟอร์มไปยังหน้าเฉพาะโดยอัตโนมัติ:

   > "เพิ่มแบบฟอร์มติดต่อลงในหน้า Contact"

3. **ໃຊ້ໃນ template** — ຖ້າເຈົ້າສະບາຍໆກັບ PHP, ເຈົ້າສາມາດເພີ່ມ shortcode ນັ້ນໃສ່ໄຟລ໌ template ຂອງ theme ໄດ້ເລີຍ.

## ການປັບແຕ່ງແບບຟອມຕິດຕໍ່ (Contact Form) {#customizing-the-contact-form}

ຫຼັງຈາກ Site Builder ສ້າງແບບຟອມຕິດຕໍ່ແລ້ວ, ເຈົ້າສາມາດປັບແຕ່ງມັນຕື່ມອີກໄດ້:

### ຜ່ານ Chat Interface {#via-the-chat-interface}

ໃຫ້ Site Builder ແນະນຳການແກ້ໄຂແບບຟອມ:

> "ອັບເດດແບບຟອມຕິດຕໍ່ເພີ່ມຊ່ອງໃສ່ຫົວຂໍ້ (subject field) ແລະ ເຮັດໃຫ້ຊ່ອງຂໍ້ຄວາມ (message field) ຕ້ອງຕື່ມ."

Site Builder ຈະອັບເດດແບບຟອມ ແລະ ສົ່ງ shortcode ທີ່ຖືກປັບແຕ່ງແລ້ວຄືນມາ.

### ຜ່ານ Admin Interface ຂອງ Form Plugin {#via-the-form-plugins-admin-interface}

ເຈົ້າສາມາດປັບແຕ່ງແບບຟອມໂດຍກົງໃນການຕັ້ງຄ່າຂອງ form plugin ຂອງເຈົ້າໄດ້ເລີຍ:

1. ໄປທີ່ **Contact Form 7** (ຫຼື form plugin ທີ່ຕິດຕັ້ງໄວ້) ໃນ WordPress admin.
2. ຊອກຫາແບບຟອມທີ່ Site Builder ສ້າງຂຶ້ນມາ.
3. ແກ້ໄຂ field ຂອງແບບຟອມ, ກົດລະບຽບການຢັ້ງຢືນ (validation rules), ແລະ ການແຈ້ງເຕືອນທາງອີເມວຕາມຄວາມເໝາະສົມ.

## Form Plugins ແລະ ຄວາມເຂົ້າກັນໄດ້ (Compatibility) {#form-plugins-and-compatibility}

Site Builder ສາມາດກວດສອບໄດ້ໂດຍອັດຕະໂນມັດວ່າ form plugin ໃດຖືກຕິດຕັ້ງຢູ່ໃນເວັບໄຊຂອງເຈົ້າ ແລະ ໃຊ້ plugin ນັ້ນໃນການສ້າງແບບຟອມຕິດຕໍ່. ຖ້າມີຫຼາຍກວ່າໜຶ່ງ form plugin ທີ່ຕິດຕັ້ງຢູ່, Site Builder ຈະຈັດລຳດັບຄວາມສຳຄັນຕາມລໍາດັບນີ້:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

ຖ້າບໍ່ມີ plugin ເຫຼົ່ານີ້ຕິດຕັ້ງຢູ່ເລີຍ, Site Builder ຈະແນະນຳໃຫ້ຕິດຕັ້ງໜຶ່ງອັນກ່ອນທີ່ຈະສ້າງແບບຟອມຕິດຕໍ່.

## ການແຈ້ງເຕືອນທາງອີເມວ (Email Notifications) {#email-notifications}

Contact forms ທີ່ສ້າງໂດຍ Site Builder ຖືກຕັ້ງຄ່າໄວ້ເພື່ອສົ່ງການແຈ້ງເຕືອນທາງອີເມວໄປຫາ site administrator ໂດຍຄ່າເລີ່ມຕົ້ນ. ເຈົ້າສາມາດປັບແຕ່ງອີເມວຜູ້ຮັບ ແລະ ສານແຈ້ງເຕືອນໄດ້:

1. ໄປທີ່ admin interface ຂອງ form plugin ຂອງເຈົ້າ.
2. ຊອກຫາແບບຟອມທີ່ Site Builder ສ້າງຂຶ້ນມາ.
3. ແກ້ໄຂການຕັ້ງຄ່າການແຈ້ງເຕືອນທາງອີເມວ.

ສຳລັບຄູ່ມືລາຍລະອຽດ, ເຈົ້າສາມາດເບິ່ງ documentation ຂອງ form plugin ຂອງເຈົ້າໄດ້ເລີຍ:

- [การแจ้งเตือนอีเมลของ Contact Form 7](https://contactform7.com/docs/)
- [การแจ้งเตือนอีเมลของ WPForms](https://wpforms.com/docs/)
- [การแจ้งเตือนอีเมลของ Fluent Forms](https://fluentforms.com/docs/)
- [การแจ้งเตือนอีเมลของ Gravity Forms](https://docs.gravityforms.com/)

## ตัวอย่างการใช้งาน {#example-use-cases}

### แบบฟอร์มติดต่อแบบง่าย {#simple-contact-form}

> "สร้างแบบฟอร์มติดต่อแบบง่ายที่มีช่องสำหรับชื่อ อีเมล และข้อความ"

### แบบฟอร์มหลายขั้นตอน (Multi-Step Form) {#multi-step-form}

> "สร้างแบบฟอร์มติดต่อที่มีขั้นตอนแรกสำหรับข้อมูลติดต่อ และขั้นตอนที่สองสำหรับข้อความและวิธีการติดต่อที่ต้องการ"

### แบบฟอร์มที่มีเงื่อนไข (Form with Conditional Logic) {#form-with-conditional-logic}

> "สร้างแบบฟอร์มติดต่อที่แสดงช่องต่างๆ แตกต่างกันตามสิ่งที่ผู้ใช้เลือกในเมนูแบบเลื่อนลง (dropdown)"

### แบบฟอร์มที่มีการอัปโหลดไฟล์ (Form with File Upload) {#form-with-file-upload}

> "สร้างแบบฟอร์มติดต่อที่อนุญาตให้ผู้ใช้สามารถอัปโหลดไฟล์หรือเอกสารได้"

:::note
การสร้างแบบฟอร์มติดต่อสามารถทำได้ใน Superdav AI Agent เวอร์ชัน v1.10.0 และใหม่กว่าเท่านั้น ต้องเปิดใช้งาน Site Builder agent เพื่อใช้ความสามารถนี้
:::
