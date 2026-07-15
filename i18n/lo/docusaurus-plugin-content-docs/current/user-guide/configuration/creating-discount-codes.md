---
title: ການສ້າງລະຫັດສ່ວນຫຼຸດ
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ການສ້າງລະຫັດສ່ວນຫຼຸດ (v2)

_**ຂໍ້ຄວນຈື່: ບົດຄວາມນີ້ອ້າງອີງເຖິງ Ultimate Multisite ເພື່ອໃຊ້ໃນເວີຊັນ 2.x.**_

ດ້ວຍ Ultimate Multisite, ເຈົ້າສາມາດສ້າງລະຫັດສ່ວນຫຼຸດເພື່ອໃຫ້ລູກຄ້າຂອງເຈົ້າໄດ້ຮັບສ່ວນຫຼຸດໃນການສະໝັກໃຊ້ບໍລິການຂອງເຂົາເຈົ້າ. ແລະ ການສ້າງມັນນັ້ນງ່າຍຫຼາຍ!

## ການສ້າງ ແລະ ແກ້ໄຂລະຫັດສ່ວນຫຼຸດ (Discount Codes) {#creating-and-editing-discount-codes}

ເພື່ອສ້າງ ຫຼື ແກ້ໄຂລະຫັດສ່ວນຫຼຸດ, ໃຫ້ໄປທີ່ **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

ຢູ່ບ່ອນນັ້ນ ເຈົ້າຈະເຫັນລາຍການຂອງລະຫັດສ່ວນຫຼຸດທີ່ເຈົ້າໄດ້ສ້າງໄວ້ແລ້ວ.

ເຈົ້າສາມາດກົດໃສ່ **Add Discount Code** (ເພີ່ມລະຫັດສ່ວນຫຼຸດ) ເພື່ອສ້າງຄूपໃໝ່ ຫຼື ສາມາດແກ້ໄຂອັນທີ່ມີຢູ່ແລ້ວໂດຍການເອົາເມົ້າໄປວາງໄວ້ ແລະ ກົດ **Edit** (ແກ້ໄຂ).

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

ເຈົ້າຈະຖືກນໍາໄປໜ້າທີ່ເຈົ້າສາມາດສ້າງ ຫຼື ແກ້ໄຂລະຫັດຄूपຂອງເຈົ້າໄດ້. ໃນຕົວຢ່າງນີ້ ເຮົາຈະສ້າງໃໝ່.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

ມາເບິ່ງການຕັ້ງຄ່າທີ່ມີຢູ່ທີ່ນີ້:

**Enter Discount Code (ໃສ່ລະຫັດສ່ວນຫຼຸດ):** ນີ້ແມ່ນພຽງຊື່ຂອງລະຫັດສ່ວນຫຼຸດຂອງເຈົ້າເທົ່ານັ້ນ. ອັນນີ້ບໍ່ແມ່ນລະຫັດທີ່ລູກຄ້າຂອງເຈົ້າຈະຕ້ອງໃຊ້ໃນແບບຟອມຈ່າຍເງິນ (checkout form).

**Description (ຄໍາອະທິບາຍ):** ຢູ່ບ່ອນນີ້ ເຈົ້າສາມາດອະທິບາຍໂດຍສັ້ນໆໄດ້ວ່າຄूपນີ້ແມ່ນເພື່ອຫຍັງ.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

ເຈົ້າກໍສາມາດເບິ່ງລະຫັດສ່ວນຫຼຸດໄດ້ວ່າເປັນແບບ active (ໃຊ້ງານໄດ້) ຫຼື inactive (ບໍ່ໃຊ້ງານ):

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code (ລະຫັດຄूप):** ນີ້ແມ່ນບ່ອນທີ່ເຈົ້າຈະກຳນົດລະຫັດທີ່ລູກຄ້າຂອງເຈົ້າຈະຕ້ອງໃສ່ໃນເວລາຈ່າຍເງິນ.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**ส่วนลด:** ตรงนี้ คุณสามารถตั้งค่าได้ทั้งเป็น **เปอร์เซ็นต์ (%)** หรือเป็น **จำนวนเงินคงที่** สำหรับโค้ดส่วนลดของคุณ

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**ใช้กับใบต่ออายุ (Apply to renewals):** ถ้าปิดตัวเลือกนี้ โค้ดส่วนลดนี้จะถูกใช้ได้เฉพาะกับการ **ชำระเงินครั้งแรก** เท่านั้น การชำระเงินอื่น ๆ จะไม่มีส่วนลดเลย แต่ถ้าเปิดตัวเลือกนี้ โค้ดส่วนลดจะมีผลสำหรับทุกการชำระเงินในอนาคต

**ส่วนลดค่าธรรมเนียมการตั้งค่า (Setup fee discount):** ถ้าปิดตัวเลือกนี้ โค้ดคูปองจะไม่ **ให้ส่วนลดสำหรับค่าธรรมเนียมการตั้งค่า** ของคำสั่งซื้อ แต่ถ้าเปิดตัวเลือกนี้ คุณสามารถกำหนดส่วนลด (เป็นเปอร์เซ็นต์หรือจำนวนเงินคงที่) ที่โค้ดคูปองนี้จะใช้กับค่าธรรมเนียมการตั้งค่าของแผนของคุณได้

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**เปิดใช้งาน (Active):** เปิดหรือปิดการใช้งานโค้ดส่วนลดนี้ด้วยตนเอง

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

ภายใต้ **ตัวเลือกขั้นสูง (Advanced Options)** เรามีการตั้งค่าดังต่อไปนี้:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**จำกัดจำนวนการใช้งาน (Limit uses):**

  * **การใช้งาน (Uses):** ตรงนี้ คุณจะเห็นว่าโค้ดส่วนลดถูกใช้ไปแล้วกี่ครั้ง

  * **จำนวนการใช้งานสูงสุด (Max uses):** สิ่งนี้จะจำกัดจำนวนครั้งที่ผู้ใช้สามารถใช้โค้ดส่วนลดนี้ได้ ตัวอย่างเช่น ถ้าคุณใส่ 10 ที่นี่ คูปองนั้นจะสามารถใช้ได้เพียง 10 ครั้งเท่านั้น หลังจากถึงขีดจำกัดนี้ โค้ดส่วนลดจะไม่สามารถใช้งานได้อีก

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**วันที่เริ่มต้นและวันหมดอายุ:** ตรงนี้คุณจะมีตัวเลือกในการเพิ่มวันที่เริ่มต้นและ/หรือวันที่สิ้นสุดสำหรับคูปองของคุณได้เลยครับ

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**จำกัดสินค้า:** ถ้าคุณเปิด **Select products** (เลือกสินค้า) คุณจะเห็นสินค้าทั้งหมดของคุณ คุณสามารถเลือกด้วยตนเอง (โดยการเปิดหรือปิดสวิตช์) ว่าสินค้าชิ้นไหนที่สามารถใช้โค้ดคูปองนี้ได้ สินค้าที่ถูกปิดไว้ตรงนี้จะไม่แสดงการเปลี่ยนแปลงใดๆ หากลูกค้าพยายามใช้โค้ดคูปองนี้กับสินค้านั้น

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

หลังจากตั้งค่าตัวเลือกทั้งหมดเหล่านี้เสร็จแล้ว ให้คลิกที่ **Save Discount Code** (บันทึกโค้ดส่วนลด) เพื่อบันทึกคูปองของคุณ และเรียบร้อย!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

ตอนนี้คูปองของคุณจะอยู่ในรายการแล้ว และจากตรงนั้น คุณสามารถคลิกเพื่อ **edit or delete** (แก้ไขหรือลบ) ได้เลยครับ

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### การใช้ URL Parameters: {#using-url-parameters}

ถ้าคุณต้องการปรับแต่งตารางราคาของคุณ หรือสร้างหน้าโค้ดส่วนลดที่สวยงามสำหรับเว็บไซต์ของคุณ และต้องการให้ระบบนำโค้ดส่วนลดไปใช้กับฟอร์มชำระเงินโดยอัตโนมัติ คุณสามารถทำสิ่งนี้ได้ผ่าน URL parameters ครับ

ก่อนอื่น คุณต้องขอลิงก์ที่แชร์ได้ (shareable link) สำหรับแผนของคุณก่อนครับ ในการทำเช่นนั้น ให้ไปที่ **Ultimate Multisite > Products** และเลือกแผนที่คุณต้องการ

คลิกที่ปุ่ม **Click to Copy Shareable Link** (คลิกเพื่อคัดลอกลิงก์ที่แชร์ได้) สิ่งนี้จะให้ลิงก์ที่แชร์ได้สำหรับแผนนั้นๆ ในกรณีของเรา ลิงก์ที่แชร์ได้ที่ได้รับคือ [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

ເພາະເຈົ້າຕ້ອງການໃຊ້ລະຫັດສ່ວນຫຼຸດນີ້ກັບແຜນການສະເພາະ, ເພື່ອເຮັດແບບງ່າຍໆ ໃຫ້ເອົາຄ່າ **?discount_code=XXX** ໄປໃສ່ໃນ URL. ໂດຍທີ່ **XXX** ແມ່ນລະຫັດຄूप (coupon code) ນັ້ນເອງ.

ໃນຕົວຢ່າງຂອງພວກເຮົາ, ພວກເຮົາຈະໃຊ້ລະຫັດຄूप **50OFF** ກັບຜະລິດຕະພັນສະເພາະນີ້.

URL ສຳລັບແຜນການສະເພາະນີ້ ແລະ ພ້ອມກັບລະຫັດສ່ວນຫຼຸດ 50OFF ຈະມີລັກສະນະດັ່ງນີ້: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
