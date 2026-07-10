---
title: ແມ່ແບບເວັບໄຊທ໌
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**หมายเหตุ: บทความนี้อ้างถึง Ultimate Multisite เวอร์ชัน 2.x หากคุณกำลังใช้เวอร์ชัน 1.x โปรดดูบทความนี้แทน**_

เป้าหมายของเราเมื่อสร้างเครือข่ายระดับพรีเมียมด้วย Ultimate Multisite คือการทำให้กระบวนการต่างๆ เป็นอัตโนมัติให้ได้มากที่สุด พร้อมทั้งมอบความยืดหยุ่นและตัวเลือกที่หลากหลายให้กับลูกค้าเมื่อพวกเขาต้องการสร้างเว็บไซต์ของตัวเอง วิธีง่ายๆ ในการบรรลุสมดุลนี้คือการใช้ฟีเจอร์ Site Templates ของ Ultimate Multisite

## Site Template คืออะไร? {#what-is-a-site-template}

ตามชื่อเลยครับ Site Template ก็คือโครงสร้างพื้นฐาน (boilerplate site) ที่สามารถใช้เป็นฐานในการสร้างเว็บไซต์ใหม่ในเครือข่ายของคุณได้

นั่นหมายความว่าคุณสามารถสร้างเว็บไซต์หลักขึ้นมา, เปิดใช้งานปลั๊กอินต่างๆ, ตั้งค่าธีมที่ใช้งานอยู่, และปรับแต่งมันได้อย่างอิสระ จากนั้น เมื่อลูกค้าของคุณสร้างบัญชีใหม่ แทนที่จะได้รับเว็บไซต์ WordPress เริ่มต้นที่ไม่มีเนื้อหาที่มีความหมายอยู่ข้างใน พวกเขาจะได้รับสำเนาของไซต์หลักของคุณ ซึ่งมีทุกการปรับแต่งและเนื้อหาพร้อมใช้งานแล้ว

ฟังดูเจ๋งมากเลยครับ แต่ฉันจะสร้าง Site Template ใหม่ได้อย่างไร? มันง่ายที่สุดเท่าที่จะเป็นไปได้เลยครับ

## การสร้างและแก้ไข Site Template ใหม่ {#creating-and-editing-a-new-site-template}

Site Templates ก็เหมือนกับเว็บไซต์ปกติบนเครือข่ายของคุณเท่านั้น ในการสร้างเทมเพลตใหม่ คุณสามารถเข้าไปที่ **Network Admin > Ultimate Multisite > Sites > Add Site** ได้เลยครับ

**![ปุ่มเพิ่มไซต์ในหน้ารายการ Sites](/img/config/site-templates-list.png)**

สิ่งนี้จะเปิดหน้าต่างแบบ modal ขึ้นมา ซึ่งจะขอให้คุณกรอก **Site title (ชื่อเว็บไซต์), Site Domain/path (โดเมน/พาธของเว็บไซต์),** และ **Site type (ประเภทของไซต์)** ภายใต้ช่องดรอปดาวน์ **Site Type** ให้แน่ใจว่าคุณเลือกเป็น **Site Template***

_![หน้าต่าง modal สำหรับเพิ่ม site template พร้อมตัวเลือก site type](/img/config/site-templates-list.png)_

คุณยังสามารถเพิ่มคำอธิบายที่ลูกค้าจะเห็นเพื่ออธิบายว่าเทมเพลตนี้มีอะไรบ้างได้ด้วยครับ

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

ที่ด้านล่างของฟอร์ม คุณจะเห็นสวิตช์ **Copy Site** (คัดลอกไซต์) ซึ่งจะช่วยให้คุณสร้างเทมเพลตไซต์ใหม่โดยใช้เทมเพลตไซต์ที่มีอยู่เป็นจุดเริ่มต้น เพื่อช่วยประหยัดเวลา แทนที่จะต้องสร้างเทมเพลตไซต์ขึ้นมาใหม่ทั้งหมด

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### การปรับแต่งเนื้อหาของ Site Template {#customizing-the-contents-of-a-site-template}

ในการปรับแต่งเทมเพลตไซต์ของคุณ เพียงแค่เข้าไปที่แผงควบคุม (dashboard panel) ของมัน แล้วทำการเปลี่ยนแปลงที่คุณต้องการ คุณสามารถสร้างโพสต์ใหม่, หน้าเว็บ, เปิดใช้งานปลั๊กอิน และเปลี่ยนธีมที่กำลังใช้งานได้ นอกจากนี้ คุณยังสามารถไปที่ Customizer เพื่อเปลี่ยนตัวเลือกการปรับแต่งต่างๆ ได้อีกมากมาย

![Site template edit interface](/img/config/site-template-edit.png)

ข้อมูลทั้งหมดเหล่านี้จะถูกคัดลอกไปโดยอัตโนมัติเมื่อลูกค้าสร้างไซต์ใหม่โดยอิงจาก Site Template นั้นๆ

### ตัวเลือกขั้นสูง (Advanced Options) {#advanced-options}

ถ้าคุณมีความรู้เกี่ยวกับการเขียนโค้ดแบบกำหนดเองบ้าง คุณสามารถใช้ Search and Replace API ของเราเพื่อแทนที่ข้อมูลต่างๆ บนไซต์ใหม่โดยอัตโนมัติหลังจากที่มันถูกสร้างขึ้นแล้ว สิ่งนี้มีประโยชน์สำหรับงานอย่างการเปลี่ยนชื่อบริษัทในหน้าเกี่ยวกับเรา, การเปลี่ยนอีเมลติดต่อในหน้าติดต่อ เป็นต้น

### การใช้ Site Templates {#using-site-templates}

โอเคครับ คุณได้สร้าง Site Template หลายแบบที่มีการออกแบบ ธีม และการตั้งค่าที่แตกต่างกัน ตอนนี้จะนำไปใช้อย่างไรในเครือข่ายของคุณ?

โดยพื้นฐานแล้ว ตอนนี้คุณมีสองแนวทางที่คุณสามารถเลือกใช้ได้ (แต่ไม่พร้อมกัน):

  * แนบ Site Template หนึ่งอันเข้ากับแต่ละแผน (Plan) ของคุณ

**หรือ**

  * อนุญาตให้ลูกค้าของคุณเลือก Site Templates ด้วยตัวเองในระหว่างการลงทะเบียน

#### โหมดที่ 1: กำหนด Site Template (Assign Site Template) {#mode-1-assign-site-template}

ໃນໂໝດນີ້, ລູກຄ້າຂອງເຈົ້າຈະບໍ່ສາມາດເລືອກ Template ເມື່ອເຂົາເຈົ້າສ້າງບັນຊີໄດ້ ແຕ່ເປັນການທີ່ເຈົ້າຈະເປັນຜູ້ກຳນົດວ່າ Template ໃດຄວນຖືກໃຊ້ກັບແຜນ (Plan) ໃດໜຶ່ງ.

ເພື່ອເຮັດແບບນັ້ນ, ເຈົ້າຈະຕ້ອງເຂົ້າໄປທີ່ **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

ສິ່ງນີ້ຈະພາເຈົ້າໄປທີ່ໜ້າ **Edit Product**. ພາຍໃຕ້ສ່ວນ **Product Options**, ຊອກຫາ tab **Site template** ແລ້ວເລືອກຕົວເລືອກ **Assign Site Template** ຈາກຊ່ອງ drop-down. ສິ່ງນີ້ຈະສະແດງລາຍການຂອງ site templates ທີ່ມີໃຫ້ ແລະ ເຈົ້າສາມາດເລືອກໄດ້ພຽງ template site template ໜຶ່ງທີ່ສຸມໃສ່ຜະລິດຕະພັນນັ້ນໆເທົ່ານັ້ນ.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### ໂໝດທີ 2: ເລືອກ Site Template ທີ່ມີໃຫ້ {#mode-2-choose-available-site-template}

ໃນໂໝດນີ້, ເຈົ້າຈະໃຫ້ທາງເລືອກກັບລູກຄ້າໃນຂະບວນການສະໝັກໃຊ້ (sign-up). ເຂົາເຈົ້າຈະສາມາດເລືອກໄດ້ຈາກ site templates ຕ່າງໆທີ່ເຈົ້າໄດ້ກຳນົດໄວ້ພາຍໃຕ້ການຕັ້ງຄ່າຜະລິດຕະພັນ. ເຈົ້າຈະມີທາງເລືອກທີ່ຈະຈຳກັດວ່າເຂົາເຈົ້າສາມາດເລືອກ template site template ໃດໄດ້ພາຍໃຕ້ຜະລິດຕະພັນທີ່ຖືກເລືອກນັ້ນໆ. ສິ່ງນີ້ຈະຊ່ວຍໃຫ້ເຈົ້າສາມາດມີຊຸດຂອງ site templates ແຕກຕ່າງກັນພາຍໃຕ້ຜະລິດຕະພັນແຕ່ລະອັນ ເຊິ່ງເໝາະສົມກັບການເນັ້ນໜັກເຖິງຟັງຊັນ ແລະ ຄຸນສົມບັດທີ່ແຕກຕ່າງກັນສຳລັບຜະລິດຕະພັນທີ່ມີລາຄາສູງກວ່າ.

ໃນໜ້າ **Edit Product** (ແກ້ໄຂຜະລິດຕະພັນ). ຢູ່ພາຍໃຕ້ສ່ວນ **Product Options** (ຕົວເລືອກຜະລິດຕະພັນ), ຊອກຫາ tab **Site template** (ແມ່ແບບໄຊທ໌) ແລະ ເລືອກຕົວເລືອກ **Choose Available Site Template** (ເລືອກແມ່ແບບໄຊທ໌ທີ່ມີໃຫ້) ຈາກຊ່ອງ drop-down. ສິ່ງນີ້ຈະສະແດງລາຍການຂອງ site templates ທີ່ມີຢູ່ ແລະ ຈະເຮັດໃຫ້ທ່ານສາມາດເລືອກ site template ທີ່ທ່ານຕ້ອງການໃຫ້ມີໃຊ້ງານໄດ້. ທ່ານສາມາດເຮັດໄດ້ໂດຍການເລືອກ Behavior (ພຶດຕິກຳ) ຂອງມັນ: **Available** (ມີໃຫ້) ຖ້າທ່ານຕ້ອງການໃຫ້ site template ນັ້ນຢູ່ໃນລາຍການ. _**Not Available**_ (ບໍ່ມີໃຫ້) ຖ້າທ່ານບໍ່ຕ້ອງການໃຫ້ site template ນັ້ນສະແດງເປັນຕົວເລືອກ. ແລະ **Pre-selected** (ຖືກເລືອກໄວ້ລ່ວງໜ້າ) ຖ້າທ່ານຕ້ອງການໃຫ້ site template ໃດໜຶ່ງໃນລາຍການທີ່ສະແດງນັ້ນເປັນຄ່າເລີ່ມຕົ້ນທີ່ຖືກເລືອກ.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form (ໂໝດເລີ່ມຕົ້ນ: ການເລືອກ site template ໃນແບບຟອມ Checkout) {#default-mode-site-template-selection-on-the-checkout-form}

ຖ້າທ່ານຕ້ອງການໃຫ້ site templates ທັງໝົດຂອງທ່ານມີໃຫ້ໃຊ້ງານໃນລະຫວ່າງການລົງທະບຽບ, ຫຼື ອາດຈະບໍ່ຕ້ອງການເຮັດວຽກເພີ່ມເຕີມໃນການກຳນົດ ຫຼື ລະບຸ site templates ໃສ່ແຕ່ລະຜະລິດຕະພັນທີ່ທ່ານສ້າງຂຶ້ນ. ແລ້ວທ່ານສາມາດຕັ້ງຄ່າການເລືອກ site template ໄວ້ພາຍໃຕ້ **Checkout Form** (ແບບຟອມ Checkout) ຂອງທ່ານໄດ້ເລີຍ. ເພື່ອເຮັດແບບນັ້ນ, ໄປທີ່ **Ultimate Multisite > Checkout Forms** ແລະ ກົດ **Edit** ໃສ່ແບບຟອມທີ່ທ່ານຕ້ອງການຕັ້ງຄ່າ.

ສິ່ງນີ້ຈະສະແດງໜ້າ **Edit Checkout Form** (ແກ້ໄຂແບບຟອມ Checkout). ຊອກຫາຊ່ອງ **Template Selection** (ການເລືອກແມ່ແບບ) ແລະ ກົດ **Edit** ໃສ່ມັນ.

จะมี cửa sổ modal (ປ່ອງໂຕ້ຕອບ) ເປີດຂຶ້ນມາ. ພາຍໃຕ້ຊ່ອງ **Template Sites** (Site templates), ທ່ານສາມາດເລືອກ ແລະ ລາຍການ site templates ທັງໝົດທີ່ທ່ານຕ້ອງການໃຫ້ມີໃຊ້ງານໃນລະຫວ່າງການລົງທະບຽບໄດ້. Site templates ທີ່ທ່ານກຳນົດຈາກນີ້ຈະມີໃຫ້ໃຊ້ງານໂດຍບໍ່ວ່າຜູ້ໃຊ້ຈະເລືອກຜະລິດຕະພັນໃດກໍຕາມ.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

ໃນສ່ວນ frontend (ໜ້າເບິ່ງຂອງເວັບໄຊ), ລູກຄ້າຈະເຫັນຕົວເລືອກ template ໃນລະຫວ່າງການ Checkout ແລະ ສາມາດເລືອກ design ເລີ່ມຕົ້ນສຳລັບ site ໃໝ່ຂອງເຂົາເຈົ້າໄດ້.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### ตัวเลือกเทมเพลตเว็บไซต์ (Site Template Options) {#site-template-options}

ยังมีฟังก์ชันเทมเพลตเว็บไซต์อื่นๆ ที่คุณสามารถเปิดหรือปิดได้ภายในการตั้งค่า Ultimate Multisite ครับ

![ตัวเลือกเทมเพลตเว็บไซต์ใน Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### อนุญาตให้สลับเทมเพลต (Allow Template Switching) {#allow-template-switching}

การเปิดตัวเลือกนี้จะอนุญาตให้ลูกค้าสามารถเปลี่ยนเทมเพลตที่พวกเขาเลือกในระหว่างขั้นตอนการลงทะเบียนได้ หลังจากที่บัญชีและเว็บไซต์ถูกสร้างขึ้นแล้ว สิ่งนี้มีประโยชน์จากมุมมองของลูกค้า เพราะช่วยให้พวกเขาสามารถเลือกเทมเพลตใหม่ได้ หากภายหลังพบว่าตัวเลือกเดิมไม่เหมาะกับความต้องการเฉพาะของพวกเขา

#### อนุญาตให้ผู้ใช้ใช้ไซต์ของตนเป็นเทมเพลต (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

เนื่องจากผู้ใช้ในซับไซต์ใช้เวลาในการสร้างและออกแบบเว็บไซต์ของตัวเอง พวกเขาอาจต้องการคัดลอกและนำไปใช้เป็นหนึ่งในเทมเพลตเว็บไซต์ที่มีอยู่ เมื่อมีการสร้างซับไซต์ใหม่ในเครือของคุณ ตัวเลือกนี้จะช่วยให้พวกเขาทำสิ่งนั้นได้

#### คัดลอกสื่อเมื่อทำสำเนาเทมเพลต (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

การติ๊กตัวเลือกนี้จะทำการคัดลอกไฟล์สื่อที่อัปโหลดบนเว็บไซต์เทมเพลตไปยังไซต์ที่สร้างขึ้นใหม่ ซึ่งสามารถยกเลิกการตั้งค่านี้ได้ในแต่ละแผนบริการครับ

#### **ป้องกันไม่ให้ Search Engines ทำดัชนี Site Templates (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

ตามที่ได้กล่าวไว้ในบทความนี้ เทมเพลตเว็บไซต์เป็นเหมือนโครงร่างพื้นฐาน (boilerplate) แต่ก็ยังเป็นส่วนหนึ่งของเครือข่ายของคุณ ซึ่งหมายความว่ามันยังสามารถถูกค้นหาโดย search engines ได้ ตัวเลือกนี้จะช่วยให้คุณซ่อนเทมเพลตเว็บไซต์ เพื่อไม่ให้ search engines เข้าไปทำดัชนีครับ

## การใส่ข้อมูลเริ่มต้นให้กับ Site Templates ด้วย auto search-and-replace (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

ฟีเจอร์ที่ทรงพลังที่สุดอย่างหนึ่งของ Ultimate Multisite คือความสามารถในการเพิ่มข้อความ สี และช่องเลือกต่างๆ ลงในแบบฟอร์มลงทะเบียน เมื่อเราเก็บข้อมูลเหล่านั้นได้แล้ว เราก็สามารถนำไปใช้เพื่อเติมเนื้อหาล่วงหน้าในส่วนต่างๆ ของเทมเพลตไซต์ที่เราเลือกได้ จากนั้น เมื่อเว็บไซต์ใหม่ถูกเผยแพร่ Ultimate Multisite จะแทนที่ตัวยึดตำแหน่ง (placeholders) ด้วยข้อมูลจริงที่กรอกระหว่างการลงทะเบียน

ตัวอย่างเช่น หากคุณต้องการให้ได้ชื่อบริษัทของผู้ใช้งานปลายทางของคุณระหว่างการลงทะเบียน และใส่ชื่อบริษัทนั้นลงในหน้าแรกโดยอัตโนมัติ ในหน้าแรกของเทมเพลตไซต์ของคุณ คุณต้องเพิ่มตัวยึดตำแหน่งเหล่านั้น เช่น ในรูปภาพด้านล่าง (ควรเพิ่มตัวยึดตำแหน่งโดยมีเครื่องหมายวงเล็บปีกกาคู่ล้อมรอบ - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

จากนั้น คุณสามารถเพิ่มช่องลงทะเบียนที่ตรงกันบนแบบฟอร์มชำระเงินของคุณเพื่อเก็บข้อมูลนั้นได้ เครื่องมือแก้ไขแบบฟอร์มชำระเงินเดียวกันที่ใช้ในการเลือกเทมเพลตช่วยให้คุณวางช่องที่กำหนดเองไว้ข้างตัวเลือกเทมเพลต:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

ลูกค้าของคุณจะสามารถกรอกฟิลด์นั้นได้ระหว่างการลงทะเบียน

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite จะแทนที่ตัวยึดตำแหน่งด้วยข้อมูลที่ลูกค้าให้มาโดยอัตโนมัติ

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### การแก้ปัญหา "เทมเพลตเต็มไปด้วยตัวยึดตำแหน่ง" {#solving-the-template-full-of-placeholders-problem}

ทั้งหมดนี้ดีมากครับ แต่เราก็เจอปัญหาที่น่ารำคาญ: ตอนนี้เทมเพลตไซต์ของเรา ซึ่งลูกค้าสามารถเข้าชมได้ เต็มไปด้วยตัวยึดตำแหน่งที่ดูไม่สวยงามและไม่ได้บอกอะไรมากเลย

ເພື່ອແກ້ໄຂບັນຫານີ້, ພວກເຮົາມີທາງເລືອກໃນການຕັ້ງຄ່າຄ່າປອມ (fake values) ສຳລັບ placeholder ແລະ ໃຊ້ຄ່ານັ້ນໃນການຄົ້ນຫາແລະປ່ຽນເນື້ອໃນຂອງພວກມັນໃນ template sites ໃນຂະນະທີ່ລູກຄ້າຂອງທ່ານກຳລັງເຂົ້າເບິ່ງ.

ທ່ານສາມາດເຂົ້າເຖິງ editor ຂອງ template placeholders ໄດ້ໂດຍການໄປທີ່ **Ultimate Multisite > Settings > Sites**, ແລະ ຈາກນັ້ນ, ໃນ sidebar, ເລືອກລິ້ງ **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

ສິ່ງນີ້ຈະພາທ່ານໄປຫາ content editor ຂອງ placeholders, ບ່ອນທີ່ທ່ານສາມາດເພີ່ມ placeholders ແລະ ເນື້ອໃນທີ່ກ່ຽວຂ້ອງກັບມັນໄດ້.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
