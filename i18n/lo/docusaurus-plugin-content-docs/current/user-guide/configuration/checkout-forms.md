---
title: ແບບຟອມຊໍາລະເງິນ
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# แบบฟอร์มชำระเงิน (Checkout Forms)

แบบฟอร์มชำระเงินเป็นวิธีที่ง่ายและยืดหยุ่นในการทดลองแนวทางต่างๆ เมื่อคุณพยายามเปลี่ยนลูกค้าใหม่ให้มาซื้อสินค้าครับ

Ultimate Multisite 2.0 มีตัวแก้ไข Checkout Form ที่ช่วยให้คุณสร้างแบบฟอร์มได้ตามใจชอบ ไม่ว่าจะมีช่องข้อมูล สินค้าที่จะเสนอ หรืออะไรก็ตามที่คุณต้องการ

หากต้องการเข้าถึงฟีเจอร์นี้ ให้ไปที่เมนู Checkout Forms ทางแถบด้านซ้ายมือครับ

![Checkout Forms list](/img/config/checkout-forms-list.png)

ในหน้านี้ คุณจะเห็นแบบฟอร์มชำระเงินทั้งหมดที่คุณมีอยู่ครับ

ตารางรายการจะมีคอลัมน์ **Status** (สถานะ) เพื่อให้คุณตรวจสอบได้ว่าแต่ละแบบฟอร์มพร้อมใช้งานสำหรับลูกค้าหรือไม่:

| Status | ความหมาย |
|---|---|
| **Active** (ใช้งานอยู่) | แบบฟอร์มนี้สามารถใช้ได้ทุกที่ที่มีการเผยแพร่ shortcode หรือหน้าลงทะเบียนของมันครับ |
| **Inactive** (ไม่ใช้งาน) | แบบฟอร์มถูกบันทึกไว้แต่ถูกปิดการใช้งาน ลูกค้าจะไม่สามารถทำรายการชำระเงินด้วยแบบฟอร์มนี้ได้จนกว่าคุณจะเปิดใช้งานมันอีกครั้งครับ |

ให้ใช้คอลัมน์สถานะก่อนที่จะแก้ไขขั้นตอนการลงทะเบียนสาธารณะ โดยเฉพาะอย่างยิ่งเมื่อคุณเก็บแบบฟอร์มชำระเงินฉบับร่างหรือตามฤดูกาลไว้คู่กับแบบฟอร์มที่ใช้งานจริงของคุณ

หากต้องการสร้างแบบฟอร์มใหม่ เพียงแค่คลิก Add Checkout Form ที่ด้านบนของหน้าครับ

คุณสามารถเลือกตัวเลือกใดตัวเลือกหนึ่งจากสามตัวนี้เป็นจุดเริ่มต้นได้: single step (ขั้นตอนเดียว), multi-step (หลายขั้นตอน) หรือ blank (ว่างเปล่า) จากนั้นคลิกเพื่อไปที่ Editor ครับ

เมื่อคุณเลือก **single step** หรือ **multi-step** เป็นจุดเริ่มต้น เทมเพลตแบบฟอร์มจะมีช่อง **Template Selection** (การเลือกเทมเพลต) รวมอยู่โดยอัตโนมัติ ช่องนี้จะช่วยให้ลูกค้าของคุณสามารถเลือกเทมเพลตเว็บไซต์ได้ในระหว่างกระบวนการลงทะเบียน คุณสามารถปล่อยมันไว้, ลบออก หรือจัดตำแหน่งใหม่เหมือนกับช่องอื่นๆ ใน editor ได้เลยครับ

![Checkout Form editor](/img/config/checkout-form-editor.png)

 alternatively, អ្នកអាចแก้ไข ឬចម្លងទម្រង់ដែលអ្នកមានរួចហើយបាន ដោយចុចលើជម្រើសនៅខាងក្រោមឈ្មោះរបស់វា។ នៅទីនោះ អ្នកក៏នឹងឃើញជម្រើសសម្រាប់ចម្លង shortcode នៃទម្រង់នោះ ឬដើម្បីលុបទម្រង់នោះផងដែរ។

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### ទិដ្ឋភាពទូទៅនៃ Checkout Form Editor {#checkout-form-editor-overview}

កម្មវិធីនិពន្ធទម្រង់ checkout (checkout form editor) ផ្តល់នូវចំណុចប្រទាក់ដ៏ពេញលេញសម្រាប់ការបង្កើតទម្រង់ចុះឈ្មោះរបស់អ្នក។ នេះគឺជាទិដ្ឋភាពទូទៅនៃការរៀបចំ layout របស់កម្មវិធីនិពន្ធនោះ៖

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### ការកែសម្រួល Checkout Form {#editing-a-checkout-form}

អ្នកអាចបង្កើត checkout forms សម្រាប់គោលបំណងផ្សេងៗគ្នា។ ក្នុងឧទាហរណ៍នេះ យើងនឹងធ្វើការជាមួយទម្រង់ចុះឈ្មោះមួយ។

បន្ទាប់ពីចូលទៅកាន់ checkout form editor សូមដាក់ឈ្មោះ (ដែលនឹងប្រើសម្រាប់ការយោងផ្ទៃក្នុងតែប៉ុណ្ណោះ) និង slug (ដែលប្រើដើម្បីបង្កើត shortcakes ជាដើម) ដល់ទម្រង់របស់អ្នក។

![Checkout Form editor](/img/config/checkout-form-editor.png)

ទម្រង់ត្រូវបានបង្កើតឡើងពីជំហាន (steps) និងវាល (fields)។ អ្នកអាចបន្ថែមជំហានថ្មីដោយចុចលើ Add New Checkout Step។

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

នៅលើផ្ទាំងទីមួយនៃ cửa sổ modal (modal window) សូមបំពេញខ្លឹមសារនៃជំហានរបស់ទម្រង់អ្នក។ ផ្តល់ ID, name និង description ដល់វា។ អង្គភាពទាំងនេះភាគច្រើនត្រូវបានប្រើសម្រាប់ការយោងផ្ទៃក្នុងប៉ុណ្ណោះ។

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

បន្ទាប់មក កំណត់ការមើលឃើញ (visibility) នៃជំហាននោះ។ អ្នកអាចជ្រើសរើសរវាង "Always show" (បង្ហាញជានិច្ច), "Only show for logged in users" (បង្ហាញសម្រាប់អ្នកដែលបានចូលគណនីរួចហើយតែប៉ុណ្ណោះ) ឬ "Only show for guests" (បង្ហាញសម្រាប់ភ្ញៀវតែប៉ុណ្ណោះ)។

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

ជាចុងក្រោយ កំណត់រចនាបថ (style) នៃជំហាននោះ។ អ្វីទាំងនេះគឺជាវាលដែលមិនចាំបាច់បន្ថែមទេ។

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

ឥឡូវនេះដល់ពេលបន្ថែមវាលទៅក្នុងជំហានទីមួយរបស់យើងហើយ។ ចុចដើម្បី Add New Field ហើយជ្រើសរើសប្រភេទផ្នែក (section type) ដែលអ្នកចង់បាន។

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

ແຕ່ລະຊ່ອງຂໍ້ມູນມີຄ່າຕ່າງກັນທີ່ຕ້ອງຕື່ມໃສ່. ສຳລັບການເຂົ້າເດືອນທຳອິດນີ້, ພວກເຮົາຈະເລືອກຊ່ອງ "Username" (ຊື່ຜູ້ໃຊ້).

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

ທ່ານສາມາດເພີ່ມຊ່ອງ ແລະ ຊ່ອງຂໍ້ມູນໄດ້ຫຼາຍເທົ່າທີ່ທ່ານຕ້ອງການ. ເພື່ອສະແດງຜະລິດຕະພັນຂອງທ່ານໃຫ້ລູກຄ້າເລືອກ, ໃຫ້ໃຊ້ຊ່ອງ Pricing Table (ຕາຕະລາງລາຄາ). ຖ້າທ່ານຢາກໃຫ້ລູກຄ້າເລືອກ template, ໃຫ້ເພີ່ມຊ່ອງ Template Selection (ການເລືອກ template) ແລະ ອື່ນໆ.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**ໝາຍເຫດ:** username, email, password, site title, site URL, order summary, payment, ແລະ submit button ແມ່ນຊ່ອງທີ່ຈຳເປັນຕ້ອງມີເພື່ອສ້າງ checkout form._

ໃນຂະນະທີ່ທ່ານກຳລັງເຮັດວຽກກັບ checkout form ຂອງທ່ານຢູ່, ທ່ານສາມາດໃຊ້ປຸ່ມ Preview ເພື່ອເບິ່ງວ່າລູກຄ້າຈະເຫັນ form ແນວໃດ. ທ່ານຍັງສາມາດສະຫຼັບລະຫວ່າງການເບິ່ງໃນຖານະຜູ້ໃຊ້ທີ່ມີຢູ່ແລ້ວ ຫຼື ການເບິ່ງໃນຖານະຜູ້ມາຢ້ຽມຢາມ (visitor) ໄດ້ອີກດ້ວຍ.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

ສຸດທ້າຍ, ໃນส่วน Advanced Options (ຕົວເລືອກຂັ້ນສູງ), ທ່ານສາມາດຕັ້ງຄ່າຂໍ້ຄວາມສຳລັບໜ້າ "Thank You" (ຂອບໃຈ), ເພີ່ມ snippet ເພື່ອຕິດຕາມການປ່ຽນແປງ (conversions), ເພີ່ມ CSS ທີ່ເປັນແບບສະເພາະຂອງ form checkout ຂອງທ່ານ ຫຼື ຈຳກັດມັນໃຫ້ຢູ່ໃນປະເທດໃດໜຶ່ງໄດ້.

![Advanced Options](/img/config/checkout-form-advanced.png)

ທ່ານຍັງສາມາດເປີດ ຫຼື ປິດ form checkout ຂອງທ່ານດ້ວຍຕົນເອງໂດຍການປ່ຽນ toggle ນີ້ຢູ່ຄໍຂວາ, ຫຼື ລຶບ form ອອກຢ່າງຖາວອນໄດ້.

![Active toggle](/img/config/checkout-form-active.png)

ການລຶບຟອມ (form) ໃຫ້ກົດເລືອກຕົວເລືອກ "delete" ໃນສ່ວນ actions ຂອງຟອມ:

![Checkout form delete option](/img/config/checkout-form-delete.png)

ຢ່າລືມບັນທຶກຟອມ checkout ຂອງທ່ານໄວ້!

![Save button](/img/config/checkout-form-save.png)

ເພື່ອເອົາ shortcode ຂອງຟອມໄປໃຊ້ ກົດທີ່ "Generate Shortcode" ແລ້ວຄັດລອກຜົນລັບທີ່ສະແດງຢູ່ໃນ modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### ສ່ວນ Pricing Table (ຕາຕະລາງລາຄາ) {#the-pricing-table-field}

ສ່ວນ **Pricing Table** ຈະສະແດງຜະລິດຕະພັນຂອງທ່ານໃນຟອມ checkout ເພື່ອໃຫ້ລູກຄ້າສາມາດເລືອກແຜນການໄດ້. ເມື່ອທ່ານແກ້ໄຂສ່ວນນີ້, ທ່ານສາມາດຕັ້ງຄ່າຕົວເລືອກໄດ້ຫຼາຍຢ່າງ:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

ນີ້ແມ່ນວິທີທີ່ຕາຕະລາງລາຄາສະແດງຢູ່ໃນຟອມລົງທະບຽນ (registration form) ຂອງ frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: ເລືອກວ່າຈະສະແດງຜະລິດຕະພັນໃດ ແລະ ລຳດັບທີ່ມັນຈະປາກົດ.
  * **Force Different Durations (ບັງຄັບໃຫ້ມີໄລຍະເວລາແຕກຕ່າງ)**: ເມື່ອເປີດໃຊ້ງານ, ຜະລິດຕະພັນທຸກຊະນິດຈະຖືກສະແດງອອກໂດຍບໍ່ວ່າພວກມັນຈະມີລາຄາທີ່ແຕກຕ່າງກັບໄລຍະການເກັບເງິນທີ່ເລືອກຢູ່ໃນປັດຈຸບັນ ຫຼື ບໍ່. ເມື່ອປິດ (ເປັນຄ່າເລີ່ມຕົ້ນ), ຜະລິດຕະພັນທີ່ບໍ່ມີ variation (ຄວາມແຕກຕ່າງ) ສຳລັບໄລຍະເວລາທີ່ເລືອກຈະຖືກເຊື່ອງໄວ້.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (ເຊື່ອງເມື່ອໄດ້ເລືອກລ່ວງໜ້າ)**: ຈະຊ່ອຍຕາຕະລາງລາຄາຖ້າແຜນການໃດໜຶ່ງໄດ້ຖືກເລືອກຜ່ານ URL ແລ້ວ (ຕົວຢ່າງ: `/register/premium`).
  * **Pricing Table Template**: ເລືອກຮູບແບບການສະແດງຜົນຂອງຕາຕະລາງລາຄາ (ເຊັ່ນ: Simple List, Legacy, ແລະ ອື່ນໆ).

ຖ້າທ່ານເພີ່ມຜະລິດຕະພັນໃສ່ Pricing Table ກ່ອນທີ່ຟອມຈະມີຊ່ອງຂໍ້ມູນທີ່ຈຳເປັນເພື່ອເຮັດໃຫ້ການ checkout ຂອງຜະລິດຕະພັນນັ້ນສໍາເລັດ, ເວລາແຕ່ງງານ (editor) ຈະສະແດງຄຳເຕືອນ. ໃຫ້ໃຊ້ຄຳເຕືອນນັ້ນເພື່ອກວດສອບ ແລະ ເພີ່ມຊ່ອງຂໍ້ມູນທີ່ຂາດຫາຍໄປກ່ອນທີ່ຈະເຜີຍແຜ່ ຫຼື ເກັບການປ່ຽນແປງສໍາລັບຟອມລົງທະບຽນທີ່ມີຊີວິດຢູ່.

### ການເພີ່ມປຸ່ມເລືອກໄລຍະເວລາ {#adding-a-period-selection-toggle}

ຖ້າທ່ານໄດ້ຕັ້ງຄ່າ [Price Variations](creating-your-first-subscription-product#price-variations) ໄວ້ໃນຜະລິດຕະພັນຂອງທ່ານ (ເຊັ່ນ: ລາຄາປະຈຳເດືອນ ແລະ ປະຈຳປີ), ທ່ານສາມາດເພີ່ມຊ່ອງ **Period Selection** ເຂົ້າໄປໃນແບບຟອມ checkout ຂອງທ່ານໄດ້. ຊ່ອງນີ້ຈະສະແດງປຸ່ມເລືອກທີ່ເຮັດໃຫ້ລູກຄ້າສາມາດປ່ຽນລະຫວ່າງໄລຍະການເກັບຄ່າທຳນຽມ, ແລະ ຕາຕະລາງລາຄາກໍຈະອັບເດດແບບສົດໆໃນເວລາຈິງ.

#### ຂັ້ນຕອນທີ 1: ຕັ້ງຄ່າ Price Variations ໃນຜະລິດຕະພັນຂອງທ່ານ {#step-1-set-up-price-variations-on-your-products}

ກ່ອນທີ່ຈະເພີ່ມຊ່ອງ Period Selection, ກວດສອບໃຫ້ແນ່ໃຈວ່າຜະລິດຕະພັນຂອງທ່ານໄດ້ຕັ້ງຄ່າ price variations ແລ້ວ. ໄປທີ່ **Ultimate Multisite > Products**, ເຮັດການແກ້ໄຂຜະລິດຕະພັນໜຶ່ງ, ແລະ ໄປທີ່ tab **Price Variations** ເພື່ອເພີ່ມໄລຍະເວລາເກັບຄ່າທຳນຽມທາງເລືອກ (ເຊັ່ນ: ປະຈຳປີໃນລາຄາສ່ວນຫຼຸດ).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### ຂັ້ນຕອນທີ 2: ເພີ່ມຊ່ອງ Period Selection ໃນແບບຟອມ checkout ຂອງທ່ານ {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. ໄປທີ່ **Ultimate Multisite > Checkout Forms** ແລະ ແກ້ໄຂແບບຟອມ checkout ຂອງທ່ານ.

2. ລາກລົງມາເຖິງຂັ້ນຕອນທີ່ມີຊ່ອງ **Pricing Table** ຂອງເຈົ້າ, ແລ້ວចុច **Add new Field**.

3. ໃນໜ້າເລືອກປະເພດຊ່ອງ (field type selection), ເລືອກ **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. ຕັ້ງຄ່າຕົວເລືອກໄລຍະເວລາ. ແຕ່ລະຕົວເລືອກຕ້ອງການ:
   * **Duration**: ຈຳນວນ (ເຊັ່ນ: `1`)
   * **Duration unit**: ປະເພດຂອງໄລຍະເວລາ (ມື້, ອາທິດ, ເດືອນ, ຫຼື ປີ)
   * **Label**: ຄຳທີ່ລູກຄ້າຈະເຫັນ (ເຊັ່ນ: "Monthly", "Annual")

5. ចុច **+ Add Option** ເພື່ອເພີ່ມຕົວເລືອກໄລຍະເວລາຕື່ມອີກ. ຕົວເລືອກເຫຼົ່ານີ້ຕ້ອງກົງກັບ price variations ທີ່ທ່ານໄດ້ຕັ້ງຄ່າໄວ້ໃນຜະລິດຕະພັນຂອງທ່ານ.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. ເລືອກ **Period Selector Template** (Clean ແມ່ນໂມເດວເລີ່ມຕົ້ນ, ເຊິ່ງຈະສະແດງເປັນຕົວເລືອກແບບງ່າຍໆທີ່ພ້ອມໃຫ້ CSS ປັບຮູບແບບຕາມໃຈ).

7. คลิก **Save Field** (บันทึกฟิลด์)

#### ขั้นตอนที่ 3: จัดตำแหน่งฟิลด์ให้อยู่เหนือตารางราคา {#step-3-position-the-field-above-the-pricing-table}

เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด ตรวจสอบให้แน่ใจว่าฟิลด์ Period Selection ปรากฏอยู่ **ก่อน** ฟิลด์ Pricing Table ในขั้นตอนการชำระเงินของคุณ คุณสามารถลากฟิลด์เพื่อจัดเรียงลำดับใหม่ใน checkout form editor ได้ วิธีนี้จะทำให้ลูกค้าเลือกช่วงเวลาเรียกเก็บเงินก่อน แล้วจึงเห็นราคาสำหรับช่วงเวลานั้น

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### มันทำงานอย่างไรบนหน้าบ้าน (Frontend) {#how-it-works-on-the-frontend}

เมื่อตั้งค่าเสร็จแล้ว ลูกค้าที่เข้ามาในหน้าลงทะเบียนของคุณจะเห็นตัวเลือกช่วงเวลาอยู่เหนือตารางราคา เมื่อพวกเขาคลิกช่วงเวลาเรียกเก็บเงินที่แตกต่างกัน:

  * ตารางราคาจะอัปเดตทันทีเพื่อแสดงราคาสำหรับช่วงเวลาที่เลือก (ไม่ต้องโหลดหน้าใหม่)
  * หาก **Force Different Durations** ถูกปิดใช้งานในฟิลด์ Pricing Table สินค้าที่ไม่มีการเปลี่ยนแปลงราคาสำหรับช่วงเวลาที่เลือกจะไม่แสดงขึ้นมา
  * หาก **Force Different Durations** เปิดใช้งานอยู่ สินค้าทั้งหมดจะยังคงมองเห็นได้แม้ว่าจะไม่มีตัวเลือกสำหรับการเปลี่ยนแปลงราคาสำหรับช่วงเวลาที่เลือก (สินค้าจะแสดงราคาเริ่มต้นของมัน)

#### การเลือกช่วงเวลาเรียกเก็บเงินล่วงหน้าผ่าน URL {#pre-selecting-a-billing-period-via-url}

คุณยังสามารถเลือกผลิตภัณฑ์และช่วงเวลาเรียกเก็บเงินล่วงหน้าผ่าน URL ได้ Ultimate Multisite รองรับรูปแบบ URL เหล่านี้:

  * `/register/premium` — เลือกเฉพาะผลิตภัณฑ์ "Premium" ล่วงหน้า
  * `/register/premium/12` — เลือกผลิตภัณฑ์และระยะเวลา 12 เดือนล่วงหน้า
  * `/register/premium/1/year` — เลือกผลิตภัณฑ์พร้อมระยะเวลา 1 ปีล่วงหน้า

### ฟิลด์การเลือกเทมเพลต (The Template Selection Field) {#the-template-selection-field}

ฟิลด์ **Template Selection** จะให้ลูกค้าเลือกเทมเพลตเว็บไซต์ระหว่างขั้นตอนการชำระเงิน ตอนนี้ฟิลด์นี้รวมอยู่ในค่าเริ่มต้นของทั้ง checkout form templates แบบ single step และ multi-step ที่เพิ่มเข้ามาใน Ultimate Multisite v2.6.1

#### การเพิ่มฟิลด์ด้วยตนเอง {#adding-the-field-manually}

ຖ້າທ່ານກຳລັງເຮັດວຽກກັບແບບຟອມທີ່ສ້າງຂຶ້ນກ່ອນ v2.6.1, ຫຼືເລີ່ມຈາກແມ່ແບບຫວ່າງ:

1. ໄປທີ່ **Ultimate Multisite > Checkout Forms** ແລະ ແກ້ໄຂແບບຟອມ checkout ຂອງທ່ານ.
2. ໃນຂັ້ນຕອນທີ່ເກັບຂໍ້ມູນລາຍລະອຽດຂອງເວັບໄຊທ໌, ໃຫ້ກົດ **Add new Field**.
3. ເລືອກ **Template Selection** ຈາກປ່ອງໂຕເລືອກປະເພດແບບຟອມ (field type dialog).
4. ຕັ້ງຄ່າແບບຟອມ:
   - **Label** — ແມ່ນຫົວຂໍ້ທີ່ລູກຄ້າເຫັນຢູ່ເທິງຕາຕະລາງແມ່ແບບ (ຕົວຢ່າງ: "ເລືອກແມ່ແບບເວັບໄຊທ໌").
   - **Required** — ວ່າລູກຄ້າຕ້ອງເລືອກແມ່ແບບກ່ອນທີ່ຈະດຳເນີນການຕໍ່ໄປຫຼືບໍ່.

#### ມັນເຮັດວຽກແນວໃດ {#how-it-works}

ເມື່ອລູກຄ້າເລືອກແມ່ແບບໃນລະຫວ່າງ checkout, Ultimate Multisite ຈະໃຊ້ແມ່ແບບນັ້ນເວລາສ້າງເວັບໄຊທ໌ໃໝ່ຂອງເຂົາເຈົ້າ. ແມ່ແບບທີ່ສະແດງອອກມາແມ່ນມາຈາກລາຍການ **Site Templates** ຂອງທ່ານ (**Ultimate Multisite > Site Templates**). ມີພຽງແມ່ແບບທີ່ຖືກຕັ້ງຄ່າໃຫ້ມີໃຫ້ລູກຄ້າເລືອກເທົ່ານັ້ນທີ່ຈະປາກົດຂຶ້ນຢູ່ບ່ອນນີ້.

### checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 ຖືວ່າໂດເມນທີ່ຕັ້ງຄ່າໄວ້ໃນຊ່ອງ **Site URL** ຂອງແບບຟອມ checkout ເປັນ network base domains (ໂດເມນພື້ນຖານຂອງເຄືອຂ່າຍ). ໃຫ້ໃຊ້ການຕັ້ງຄ່າ available-domain ຂອງຊ່ອງແບບຟອມນັ້ນ ເມື່ອທ່ານຕ້ອງການໃຫ້ລູກຄ້າສ້າງເວັບໄຊທ໌ພາຍໃຕ້ໂດເມນຈົດທະບຽນທີ່ແບ່ງປັນກັນໜຶ່ງ ຫຼື ຫຼາຍໂດເມນ, ເຊັ່ນ `example.com` ແລະ `sites.example.com`.

Shared checkout-form base domains ບໍ່ໄດ້ຖືກຈັດການເປັນ custom domain mappings ຂອງແຕ່ລະເວັບໄຊທ໌. ເມື່ອລູກຄ້າສ້າງເວັບໄຊທ໌ຍ່ອຍ (subdirectory site) ໃນໜຶ່ງໃນໂດເມນພື້ນຖານເຫຼົ່ານັ້ນ, Ultimate Multisite ຈະບໍ່ສ້າງ record ທີ່ເປັນ mapped-domain ເພື່ອເຮັດໃຫ້ host ແບ່ງປັນນັ້ນເປັນຂອງເວັບໄຊທ໌ດຽວເທົ່ານັ້ນ. Host ແບ່ງປັນຍັງຄົງມີໃຫ້ເວັບໄຊທ໌ອື່ນໆທີ່ໃຊ້ base checkout form ດຽວກັນໄດ້.

ຄວນເກັບ custom domainsໄວ້ສຳລັບ host ທີ່ແຕກຕ່າງກັນຂອງລູກຄ້າ, ເຊັ່ນ `customer-example.com`. ຄວນເກັບ checkout-form base domains ໄວ້ສຳລັບ host ທີ່ໃຊ້ຮ່ວມກັນຫຼາຍເວັບໄຊທ໌.

#### ການເອົາຊ່ອງອອກ {#removing-the-field}

ຖ້າທ່ານບໍ່ໄດ້ສະເໜີ template ຂອງເວັບໄຊທ໌, ໃຫ້ເອົາຊ່ອງ Template Selection ອອກຈາກ form ຂອງທ່ານ. ຫຼັງຈາກນັ້ນ, ລູກຄ້າຈະໄດ້ຮັບ template ປົກກະຕິທີ່ຖືກຕັ້ງຄ່າໄວ້ພາຍໃຕ້ **Ultimate Multisite > Settings > Site Templates**.
