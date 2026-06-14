---
title: ການຈັດການພາສີ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# การจัดการภาษี

Ultimate Multisite มีโมดูลเก็บภาษีมาให้ในปลั๊กอินหลักของเรา ดังนั้น หากคุณต้องการเก็บภาษีการขายสำหรับแผน บริการ และแพ็กเกจของคุณ คุณสามารถทำได้ง่ายๆ โดยไม่ต้องติดตั้ง add-ons ใดๆ เลย

สำหรับบริษัทที่ตั้งอยู่ในยุโรป เรามี **add-on** ที่เพิ่มเครื่องมือและฟีเจอร์เพื่อช่วยให้การปฏิบัติตามข้อกำหนดของ VAT ดีขึ้น

Ultimate Multisite ไม่ได้ยื่นหรือส่งภาษีแทนคุณไปยังรัฐบาล เราแค่ช่วยคุณเก็บภาษีที่เหมาะสมในเวลาที่มีการทำธุรกรรม คุณยังคงต้องรับผิดชอบในการนำส่งภาษีด้วยตัวเอง

## การเปิดใช้งานการเก็บภาษี

การเก็บภาษีไม่ได้ถูกเปิดใช้งานเป็นค่าเริ่มต้น หากต้องการเปิดใช้งาน คุณต้องไปที่ **Ultimate Multisite > Settings > Taxes** แล้วสลับเพื่อเปิดการตั้งค่า Enable Taxes

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

นี่คือมุมมองเต็มของหน้าการตั้งค่าภาษี:

![Tax settings full page](/img/config/settings-taxes-full.png)

คุณยังสามารถดูการตั้งค่าภาษีสำหรับผลิตภัณฑ์แต่ละรายการได้ด้วย:

![Tax settings for products](/img/config/settings-taxes.png)

### ภาษีไม่รวม vs. ภาษีรวม

โดยค่าเริ่มต้น ราคาผลิตภัณฑ์ทั้งหมดของคุณจะ **ไม่รวม** ภาษี ซึ่งหมายความว่าภาษี **ไม่ได้ถูกรวมอยู่ใน** ราคาสินค้า หากเราพิจารณาว่าลูกค้าควรต้องจ่ายภาษีสำหรับการซื้อนั้น เราจะเพิ่มภาษี **ต่อยอดจาก** ยอดรวมย่อย (subtotal)

หากคุณต้องการให้ภาษีรวมอยู่ในราคาสินค้าของคุณ คุณสามารถทำได้โดยการเปิดใช้งานการตั้งค่า **Inclusive Tax**

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

อย่าลืม **บันทึก** การเปลี่ยนแปลงที่คุณทำไป

ທ່ານສາມາດເຂົ້າເຖິງ editor ໄດ້ໂດຍການចុចປຸ່ມ **Manage Tax Rates** (ຈັດການອັດຕາພາສີ) ຢູ່ແຖບດ້ານຊ້າຍຂອງໜ້າ Tax settings (ການຕັ້ງຄ່າພາສີ).

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

ໃນໜ້າ editor ອັດຕາພາສີ, ເຈົ້າສາມາດເພີ່ມອັດຕາພາສີໃໝ່ໄດ້ໂດຍການចុចປຸ່ມ **Add new Row** (ເພີ່ມແຖວໃໝ່).

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

ເຈົ້າຈະຕ້ອງກຳນົດ **title** (ຊື່) ໃຫ້ກັບອັດຕາພາສີແຕ່ລະອັນ (ໃຊ້ໃນໃບເກັບເງິນ). ຈາກນັ້ນ ເຈົ້າສາມາດເລືອກ **country** (ປະເທດ) (ເປັນຫທີ່ຕ້ອງການ), **state** (ແຂວງ), ແລະ **city** (ເມືອງ) (ທັງສອງແມ່ນທາງເລືອກ) ທີ່ຈະມີການຄິດໄລ່ພາສີນີ້. ສຸດທ້າຍ, ເພີ່ມ **tax rate in percents** (ອັດຕາພາສີເປັນເປີເຊັນ).

### Tax Categories (ໝວດໝູ່ພາສີ)

ເຈົ້າສາມາດສ້າງ Tax Categories (ໝວດໝູ່ພາສີ) ໄດ້ຫຼາຍອັນ ເພື່ອເພີ່ມອັດຕາພາສີທີ່ແຕກຕ່າງກັນໃຫ້ກັບຜະລິດຕະພັນຊະນິດທີ່ແຕກຕ່າງກັນ.

ចុច **Add new Tax Category** (ເພີ່ມໝວດໝູ່ພາສີໃໝ່), ແລ້ວພິມຊື່ຂອງໝວດໝູ່ຂອງເຈົ້າ ແລະ ກົດ **Create** (ສ້າງ).

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

ເພື່ອເລືອກໝວດໝູ່, ໃຫ້ກົດ **Switch** (ປ່ຽນ) ແລະ ເລືອກໝວດໝູ່ທີ່ເຈົ້າຕ້ອງການເພີ່ມພາສີໃໝ່.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

ເຈົ້າສາມາດກຳນົດ Tax Category ໃຫ້ກັບຜະລິດຕະພັນສະເພາະໂດຍການໄປທີ່ **Product edit page** (ໜ້າແກ້ໄຂຜະລິດຕະພັນ) ແລະ ຈາກນັ້ນໄປທີ່ tab Taxes (ພາສີ).

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

ໃນໜ້າດຽວກັນ, ເຈົ້າສາມາດປິດ (toggle off) **Is Taxable?** (ແມ່ນພາສີໄດ້ບໍ່?) ເພື່ອບອກ Ultimate Multisite ວ່າບໍ່ຄວນເກັບພາສີໃສ່ຜະລິດຕະພັນທີ່ກຳນົດໄວ້ນັ້ນ.

## European VAT Support (ການສະໜັບສະໜູນ VAT ຂອງເອີຣົບ)

ដូចທີ່បាន đề cập trước đây, chúng tôi có một add-on dành cho khách hàng ở EU có các yêu cầu bổ sung do quy định về VAT của Châu Âu.

Các công cụ VAT của chúng tôi giúp bạn thực hiện một vài việc quan trọng:

* Tải dễ dàng các mức thuế VAT của EU;
* Thu thập và xác thực Số VAT - và tính ngược (reverse charging) cho các đơn vị được miễn VAT (như các công ty có số VAT hợp lệ);

Để cài đặt add-on đó, hãy vào **Ultimate Multisite > Settings** và sau đó nhấp vào liên kết ở thanh bên **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Bạn sẽ được chuyển hướng đến trang add-on của chúng tôi. Ở đó, bạn có thể tìm kiếm **Ultimate Multisite VAT add-on** và cài đặt nó.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sau đó, hãy đến **Network Admin > Plugins** và kích hoạt add-on đó trên toàn mạng.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Nếu bạn quay lại tab **Tax Settings**, bạn sẽ thấy các tùy chọn mới có sẵn. Bật tùy chọn **Enable VAT Support** để kích hoạt các công cụ VAT mới. Đừng quên **save** (lưu) cài đặt của bạn nhé!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Việc kéo thả vào Mức Thuế VAT

Một trong những công cụ mà tích hợp của chúng tôi bổ sung là khả năng tải các mức thuế cho các quốc gia thành viên EU. Bạn có thể thực hiện điều này bằng cách truy cập trang chỉnh sửa mức thuế sau khi đã bật hỗ trợ VAT của EU.

ที่ด้านล่างของหน้า คุณจะเห็นตัวเลือกในการดึงข้อมูล VAT (ภาษีมูลค่าเพิ่ม) เมื่อคุณเลือกประเภทอัตราและคลิกปุ่ม **Update EU VAT Rates** ระบบจะดึงตารางพร้อมกับกรอกอัตราภาษีสำหรับแต่ละประเทศสมาชิกสหภาพยุโรปให้โดยอัตโนมัติ จากนั้นคุณก็แค่บันทึกเท่านั้น

![ปุ่ม Update EU VAT Rates ที่ด้านล่างของตัวแก้ไขอัตราภาษี](/img/config/tax-rates-vat-pull.png)

คุณสามารถแก้ไขค่าหลังจากดึงข้อมูลมาแล้วได้เช่นกัน เพียงแค่แก้ไขบรรทัดตารางที่คุณต้องการ แล้วคลิกเพื่อบันทึกค่าใหม่

### การตรวจสอบความถูกต้องของ VAT (VAT Validation)

เมื่อเปิดใช้งานการรองรับ VAT, Ultimate Multisite จะเพิ่มช่องเพิ่มเติมในแบบฟอร์มชำระเงิน ใต้ช่องที่อยู่สำหรับเรียกเก็บเงิน ช่องนี้จะปรากฏให้เห็นเฉพาะลูกค้าที่อยู่ในสหภาพยุโรปเท่านั้น

<!-- Screenshot unavailable: ช่องหมายเลข VAT บนแบบฟอร์มชำระเงินส่วนหน้าด้านล่างที่อยู่สำหรับเรียกเก็บเงิน -->

จากนั้น Ultimate Multisite จะตรวจสอบหมายเลข VAT และหากผลการตรวจสอบเป็นหมายเลขที่ถูกต้อง ระบบจะใช้กลไกการเรียกเก็บภาษีกลับ (reverse charge mechanism) และตั้งอัตราภาษีเป็น 0% สำหรับคำสั่งซื้อนั้น
