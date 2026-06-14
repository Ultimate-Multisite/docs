---
title: Txhua qhov chaw tsim cov ntawv xpost (Site Builder Contact Forms)
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# ຜູ້ສ້າງເວັບໄຊທ໌ແບບຕິດຕໍ່ (Site Builder Contact Forms)

Superdav AI Agent v1.10.0 ເພີ່ມຄວາມສາມາດໃນການສ້າງແບບຟອມຕິດຕໍ່ໂດຍກົງຈາກໜ້າສົນທະນາ (chat interface) ໂດຍໃຊ້ Site Builder agent. ນີ້ເຮັດໃຫ້ເຈົ້າສາມາດເພີ່ມແບບຟອມຕິດຕໍ່ທີ່ເຮັດວຽກໄດ້ເຕັມຮູບແບບໃສ່ໜ້າໃດໆໂດຍບໍ່ຕ້ອງອອກຈາກການສົນທະນາເລີຍ.

## ພາບລວມ (Overview)

ຄວາມສາມາດໃນການສ້າງແບບຟອມຕິດຕໍ່ຂອງ Site Builder (`create_contact_form`) ຈະກວດພົບ plugin ແບບຟອມທີ່ຕິດຕັ້ງຢູ່ໃນເວັບໄຊຂອງເຈົ້າໂດຍອັດຕະໂນມັດ ແລະ ສ້າງແບບຟອມຕິດຕໍ່ໂດຍໃຊ້ຄວາມສາມາດທີ່ມີຢູ່ແລ້ວຂອງ plugin ນັ້ນ. Plugin ແບບຟອມທີ່ຮອງຮັບປະກອບມີ:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

ຜູ້ຊ່ວຍ (assistant) ຈະເລືອກ plugin ແບບຟອມທີ່ດີທີ່ສຸດທີ່ມີຢູ່ໃນເວັບໄຊຂອງເຈົ້າໂດຍອັດຕະໂນມັດ ແລະ ສ້າງແບບຟອມຕິດຕໍ່ທີ່ຖືກອອກແບບມາໃຫ້ເຂົ້າກັບ plugin ນັ້ນ.

## ການສ້າງແບບຟອມຕິດຕໍ່ (Creating a Contact Form)

ເພື່ອສ້າງແບບຟອມຕິດຕໍ່ໂດຍໃຊ້ Site Builder:

1. ເປີດແຜງສົນທະນາ **Gratis AI Agent** ໃນ WordPress admin.
2. ປ່ຽນໄປໃຊ້ agent **Site Builder** ໂດຍການກົດທີ່ icon agent ໃນ header ຂອງການສົນທະນາ.
3. ອະທິບາຍແບບຟອມຕິດຕໍ່ທີ່ເຈົ້າຕ້ອງການສ້າງ. ຕົວຢ່າງ:

   > "ເພີ່ມແບບຟອມຕິດຕໍ່ໃສ່ໜ້າ Contact ທີ່ມີຊ່ອງຂໍ້ມູນສຳລັບ ຊື່, ອີເມວ, ສານຂໍ້ຄວາມ ແລະ ເບີໂທລະສັບ."

   ຫຼື ພຽງແຕ່ເວົ້າງ່າຍໆວ່າ:

   > "ສ້າງແບບຟອມຕິດຕໍ່ສຳລັບໜ້າ Contact."

4. Site Builder ຈະສ້າງແບບຟອມຕິດຕໍ່ໃຫ້ເຈົ້າ ແລະ ສົ່ງ shortcode (shortcode) ທີ່ພ້ອມທີ່ຈະຝັງໃສ່ໃນໜ້າໄດ້.

## ການໃຊ້ Shortcode ທີ່ສ້າງຂຶ້ນມາ (Using the Generated Shortcode)

ຫຼັງຈາກ Site Builder ສ້າງແບບຟອມຕິດຕໍ່ແລ້ວ, ມັນຈະສົ່ງ shortcode ໃຫ້ເຈົ້າ (ຕົວຢ່າງ: `[contact-form-7 id="123"]`). ເຈົ້າສາມາດເຮັດໄດ້ດັ່ງນີ້:

1. **ຝັງໃສ່ໜ້າ ຫຼື Post** — ຄັດລອກ shortcode ແລ້ວໄປວາງໃນ যেকোনোໜ້າ ຫຼື post ໂດຍໃຊ້ block editor ຫຼື classic editor.
2. **ເພີ່ມມັນຜ່ານ Site Builder** — ສັ່ງໃຫ້ Site Builder ເພີ່ມແບບຟອມໃສ່ໜ້າສະເພາະໂດຍອັດຕະໂນມັດ:

   > "ເພີ່ມແບບຟອມຕິດຕໍ່ໃສ່ໜ້າ Contact."

3. **ໃຊ້ໃນ template** — ຖ້າເຈົ້າສະບາຍກັບ PHP, ເຈົ້າສາມາດໃສ່ shortcode ນັ້ນເຂົ້າໄປໃນ file theme template ໄດ້ເລີຍ.

## ການປັບແຕ່ງແບບຟອມຕິດຕໍ່ (Contact Form)

ຫຼັງຈາກ Site Builder ສ້າງແບບຟອມຕິດຕໍ່ໃຫ້ແລ້ວ, ເຈົ້າສາມາດປັບແຕ່ງມັນໄດ້ອີກ:

### ຜ່ານ Chat Interface

ຂໍໃຫ້ Site Builder ແກ້ໄຂແບບຟອມໂດຍການຖາມດັ່ງນີ້:

> "Update the contact form to add a subject field and make the message field required." (ອັບເດດແບບຟອມຕິດຕໍ່ເພີ່ມຊ່ອງໃສ່ຫົວຂໍ້ ແລະ ເຮັດໃຫ້ຊ່ອງສົ່ງຂໍ້ຄວາມເປັນທາງເລືອກ)

Site Builder ຈະອັບເດດແບບຟອມ ແລະ ສົ່ງ shortcode ທີ່ຖືກແກ້ໄຂກັບມາ.

### ຜ່ານ Admin Interface ຂອງ Form Plugin

ເຈົ້າສາມາດປັບແຕ່ງແບບຟອມໂດຍກົງໃນການຕັ້ງຄ່າຂອງ form plugin ຂອງເຈົ້າໄດ້ເລີຍ:

1. ໄປທີ່ **Contact Form 7** (ຫຼື form plugin ທີ່ຕິດຕັ້ງໄວ້) ໃນ WordPress admin.
2. ຊອກຫາແບບຟອມທີ່ Site Builder ສ້າງຂຶ້ນມາ.
3. ແກ້ໄຂ field ຂອງແບບຟອມ, validation rules ແລະ email notifications ເປັນໄປຕາມຄວາມຕ້ອງການ.

## Form Plugins ແລະ ຄວາມເຂົ້າກັນໄດ້ (Compatibility)

Site Builder ຈະກວດສອບໂດຍອັດຕະໂນມັດວ່າ form plugin ໃດຖືກຕິດຕັ້ງຢູ່ໃນເວັບໄຊຂອງເຈົ້າ ແລະ ໃຊ້ plugin ນັ້ນໃນການສ້າງແບບຟອມຕິດຕໍ່. ຖ້າມີຫຼາຍກວ່າໜຶ່ງ plugin, Site Builder ຈະຈັດລຳດັບຄວາມສຳຄັນຕາມລໍາດັບນີ້:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

ຖ້າບໍ່ມີ plugin ເຫຼົ່ານີ້ຕິດຕັ້ງຢູ່ເລີຍ, Site Builder ຈະແນະນຳໃຫ້ຕິດຕັ້ງໜຶ່ງອັນກ່ອນທີ່ຈະສ້າງແບບຟອມຕິດຕໍ່.

## ການແຈ້ງເຕືອນທາງ Email (Email Notifications)

Contact forms ທີ່ Site Builder ສ້າງຂຶ້ນມາແມ່ນຖືກຕັ້ງຄ່າໄວ້ເພື່ອສົ່ງ email notification ໄປຫາ site administrator ອັດຕະໂນມັດໂດຍຄ່າເລີ່ມຕົ້ນ. ເຈົ້າສາມາດປັບປ່ຽນ email address ຜູ້ຮັບ ແລະ message ການແຈ້ງເຕືອນໄດ້:

1. ໄປທີ່ admin interface ຂອງ form plugin ຂອງເຈົ້າ.
2. ຊອກຫາແບບຟອມທີ່ Site Builder ສ້າງຂຶ້ນມາ.
3. ແກ້ໄຂການຕັ້ງຄ່າ email notification.

ສຳລັບຄູ່ມືລາຍລະອຽດ, ເຈົ້າສາມາດເບິ່ງ documentation ຂອງ form plugin ຂອງເຈົ້າໄດ້ເລີຍ:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Ví dụການນໍາໃຊ້ (Example Use Cases)

### ແບບຟອມຕິດຕໍ່ແບບງ່າຍໆ (Simple Contact Form)

> "ສ້າງແບບຟອມຕິດຕໍ່ແບບງ່າຍໆ ທີ່ມີຊ່ອງຂໍ້ມູນ ຊື່, ອີເມວ, ແລະ ສານ."

### ແບບຟອມຫຼາຍຂັ້ນ (Multi-Step Form)

> "ສ້າງແບບຟອມຕິດຕໍ່ທີ່ມີຂັ້ນຕອນທໍາອິດສຳລັບຂໍ້ມູນຕິດຕໍ່ ແລະ ຂັ້ນຕອນທີສອງສຳລັບຂໍ້ຄວາມ ແລະ ວິທີຕິດຕໍ່ທີ່ຕ້ອງການ."

### ແບບຟອມທີ່ມີ logic ສໍາຄັນ (Form with Conditional Logic)

> "ສ້າງແບບຟອມຕິດຕໍ່ທີ່ສະແດງຊ່ອງຂໍ້ມູນຕ່າງໆ ອີງຕາມການເລືອກຂອງຜູ້ໃຊ້ໃນ dropdown."

### ແບບຟອມທີ່ມີການອັບໂຫຼດໄຟລ໌ (Form with File Upload)

> "ສ້າງແບບຟອມຕິດຕໍ່ທີ່ໃຫ້ຜູ້ໃຊ້ສາມາດອັບໂຫຼດໄຟລ໌ ຫຼື ຕິດໄຟລ໌ໄດ້."

:::note
ການສ້າງແບບຟອມຕິດຕໍ່ມີຢູ່ໃນ Superdav AI Agent v1.10.0 ແລະ ລ່າກວ່າ. ເຈົ້າຂອງ Site Builder agent ຕ້ອງເປີດໃຊ້ງານເພື່ອໃຊ້ຄວາມສາມາດນີ້.
:::
