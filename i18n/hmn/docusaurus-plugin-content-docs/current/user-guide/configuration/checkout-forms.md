---
title: Txhua qhov kev tso cai
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms णू customer mới thử nghiệm các cách khác nhau khi muốn chuyển đổi khách hàng mới một cách dễ dàng và linh hoạt.

Ultimate Multisite 2.0 có một trình chỉnh sửa Checkout Form cho phép bạn tạo bao nhiêu form tùy thích, với các trường khác nhau, sản phẩm được cung cấp, v.v.

Để truy cập tính năng này, hãy vào menu Checkout Forms ở thanh bên bên trái.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Trên trang này, bạn có thể xem tất cả các checkout form mà bạn đã tạo.

Bảng danh sách bao gồm một cột **Status** để bạn xác nhận liệu mỗi form hiện có sẵn cho khách hàng hay không:

| Status | Ý nghĩa |
|---|---|
| **Active** | Form có thể được sử dụng ở bất cứ đâu nơi shortcode hoặc trang đăng ký của nó được xuất bản. |
| **Inactive** | Form đã được lưu nhưng bị vô hiệu hóa. Khách hàng không thể hoàn tất thanh toán bằng form này cho đến khi bạn bật lại nó. |

Hãy dùng cột status trước khi chỉnh sửa một luồng đăng ký công khai, đặc biệt là khi bạn giữ các form checkout nháp hoặc theo mùa bên cạnh các form trực tiếp của mình.

Nếu bạn muốn tạo một cái mới, chỉ cần nhấp vào Add Checkout Form ở trên cùng của trang.

Bạn có thể chọn một trong ba tùy chọn này làm điểm bắt đầu: single step (một bước), multi-step (nhiều bước) hoặc blank (trống). Sau đó, hãy nhấp để Go to the Editor (Đi đến Trình chỉnh sửa).

Khi bạn chọn **single step** hoặc **multi-step** làm điểm bắt đầu, mẫu form bây giờ sẽ bao gồm một trường **Template Selection** (Lựa chọn Mẫu) theo mặc định. Trường này cho phép khách hàng của bạn chọn một mẫu trang web trong quá trình đăng ký. Bạn có thể để nó ở đó, xóa nó đi, hoặc di chuyển vị trí nó giống như bất kỳ trường nào khác trong editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ຫຼື ທ່ານສາມາດແກ້ໄຂ ຫຼື ເຄືອບແບບຟອມທີ່ມີຢູ່ແລ້ວໂດຍການກົດໃສ່ຕົວເລືອກທີ່ຢູ່ໃຕ້ຊື່ຂອງມັນໄດ້. ຢູ່ບ່ອນນັ້ນ, ທ່ານຍັງຈະພົບກັບຕົວເລືອກໃນການຄັດລອກ shortcode ຂອງແບບຟອມ ຫຼື ລຶບແບບຟອມນັ້ນໄດ້ອີກດ້ວຍ.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### ພາບລວມຂອງ Checkout Form Editor {#checkout-form-editor-overview}

Checkout form editor ນີ້ແມ່ນໜ້າຕາທີ່ຄົບຖ້ວນສຳລັບການສ້າງແບບຟອມລົງທະບຽນຂອງທ່ານ. ນີ້ແມ່ນພາບລວມຂອງການຈັດວາງຂອງ editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### ການແກ້ໄຂ Checkout Form {#editing-a-checkout-form}

ທ່ານສາມາດສ້າງ checkout forms ສຳລັບຈຸດປະສົງທີ່ແຕກຕ່າງກັນໄດ້. ໃນຕົວຢ່າງນີ້, ພວກເຮົາຈະເຮັດວຽກກັບແບບຟອມລົງທະບຽນ.

ຫຼັງຈາກທີ່ເຂົ້າໄປໃນ checkout form editor ແລ້ວ, ໃຫ້ຊື່ (name) ແລະ slug (ໃຊ້ສຳລັບການສ້າງ shortcode ເປັນຕົ້ນ) ໃຫ້ກັບແບບຟອມຂອງທ່ານ.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ແບບຟອມປະກອບດ້ວຍຂັ້ນຕອນ (steps) ແລະ ແຖບຂໍ້ມູນ (fields). ທ່ານສາມາດເພີ່ມຂັ້ນຕອນໃໝ່ໄດ້ໂດຍການກົດ Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

ໃນແຖບທຳອິດຂອງ modal window, ໃຫ້ຕື່ມເນື້ອໃນຂອງຂັ້ນຕອນແບບຟອມຂອງທ່ານ. ໃຫ້ມັນມີ ID, ຊື່ (name), ແລະ ຄຳອະທິບາຍ (description). ສິ່ງເຫຼົ່ານີ້ສ່ວນຫຼາຍແມ່ນໃຊ້ພາຍໃນລະບົບເທົ່ານັ້ນ.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

ຕໍ່ໄປ, ໃຫ້ຕັ້ງຄ່າການສະແດງຂອງຂັ້ນຕອນນັ້ນ. ທ່ານສາມາດເລືອກໄດ້ວ່າຈະເປັນ "Always show" (ສະແດງສະເໝີ), "Only show for logged in users" (ສະແດງໃຫ້ຜູ້ໃຊ້ທີ່ເຂົ້າສູ່ລະບົບແລ້ວເທົ່ານັ້ນ) ຫຼື "Only show for guests" (ສະແດງໃຫ້ແກ້ປັນ).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

ສຸດທ້າຍ, ໃຫ້ຕັ້ງຄ່າຮູບແບບຂອງຂັ້ນຕອນນັ້ນ. ສິ່ງເຫຼົ່ານີ້ແມ່ນຟິວທີ່ເປັນທາງເລືອກ (optional).

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

ດຽວນີ້, ເຖິງເວລາທີ່ຈະເພີ່ມ fields ໃສ່ຂັ້ນຕອນທຳອິດຂອງພວກເຮົາແລ້ວ. ພຽງແຕ່ກົດ Add New Field ແລະ ເລືອກປະເພດຂອງ section (ສ່ວນຂໍ້ມູນ) ທີ່ທ່ານຕ້ອງການ.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

प्रत्येक field တွင် ໃສ່ வேண்டிய parameter (ຄ່າ) ແຕກຕ່າງກັນ. ສຳລັບການເຂົ້າເຖິງຄັ້ງທຳອິດນີ້, ເຮົາຈະເລືອກ field ຊື່ "Username" (ຊື່ຜູ້ໃຊ້).

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

ເຈົ້າສາມາດເພີ່ມ step ແລະ field ໄດ້ຫຼາຍເທົ່າທີ່ເຈົ້າຕ້ອງການ. ເພື່ອສະແດງ product ຂອງເຈົ້າໃຫ້ລູກຄ້າເລືອກ, ໃຫ້ໃຊ້ field "Pricing Table". ຖ້າເຈົ້າຢາກໃຫ້ລູກຄ້າເລືອກ template, ໃຫ້ເພີ່ມ field "Template Selection" (ການເລືອກ template). ແລະ ອື່ນໆ.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**ໝາຍເຫດ:** username, email, password, site title, site URL, order summary, payment, ແລະ submit button ແມ່ນ field ທີ່ຈຳເປັນຕ້ອງມີເພື່ອສ້າງ checkout form._

ໃນຂະນະທີ່ເຈົ້າກຳລັງເຮັດວຽກກັບ checkout form ຂອງເຈົ້າ, ເຈົ້າສາມາດໃຊ້ປຸ່ມ Preview ເພື່ອເບິ່ງວ່າລູກຄ້າຈະເຫັນ form ແນວໃດ. ເຈົ້າສາມາດສະຫຼັບລະຫວ່າງການເບິ່ງໃນຖານະ user ທີ່ມີຢູ່ແລ້ວ ຫຼື visitor (ຜູ້ມາຢ້ຽມຢາມ) ໄດ້.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

ສຸດທ້າຍ, ໃນສ່ວນ Advanced Options (ຕົວເລືອກຂັ້ນສູງ), ເຈົ້າສາມາດຕັ້ງຄ່າ message ສຳລັບໜ້າ "Thank You" ໄດ້, ເພີ່ມ snippets ເພື່ອຕິດຕາມການປ່ຽນແປງ (conversions), ເພີ່ມ custom CSS ໃສ່ checkout form ຂອງເຈົ້າ ຫຼື ຈຳກັດມັນໃຫ້ຢູ່ໃນປະເທດໃດໜຶ່ງ.

![Advanced Options](/img/config/checkout-form-advanced.png)

ເຈົ້າສາມາດເປີດ ຫຼື ปิด checkout form ຂອງເຈົ້າດ້ວຍຕົນເອງໂດຍການປ່ຽນ toggle ນີ້ຢູ່ຄໍຂວາ, ຫຼື ລຶບ form ອອກຢ່າງຖາວອນໄດ້.

![Active toggle](/img/config/checkout-form-active.png)

Form い消す (Delete)

フォームの action の中で、delete option をクリックしてフォームを削除してください。

![Checkout form delete option](/img/config/checkout-form-delete.png)

チェックアウトフォームは保存するのを忘れないでください！

![Save button](/img/config/checkout-form-save.png)

フォームの shortcode を取得するには、「Generate Shortcode」をクリックして、モーダルウィンドウに表示された結果をコピーしてください。

![Save button with shortcode](/img/config/checkout-form-save.png)

### The Pricing Table Field (ລາຄາຕາຕະລາງ) {#the-pricing-table-field}

**Pricing Table** field ຈະສະແດງຜະລິດຕະພັນຂອງທ່ານໃນ checkout form ເພື່ອໃຫ້ລູກຄ້າເລືອກແຜນການໄດ້. ເມື່ອທ່ານແກ້ໄຂຟິລ໌ນີ້, ທ່ານສາມາດຕັ້ງຄ່າຕົວເລືອກຫຼາຍຢ່າງໄດ້:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

ນີ້ແມ່ນວິທີທີ່ pricing table ຈະສະແດງໃນ frontend registration form:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products (ຜະລິດຕະພັນ)**: ເລືອກວ່າຈະສະແດງຜະລິດຕະພັນໃດ ແລະ ລຳດັບທີ່ຈະປາກົດຢູ່ໃສ.
  * **Force Different Durations (ບັງຄັບໃຫ້ມີໄລຍະເວລາທີ່ແຕກຕ່າງກັນ)**: ເມື່ອເປີດໃຊ້, ຜະລິດຕະພັນທັງໝົດຈະຖືກສະແດງໂດຍບໍ່ວ່າພວກມັນຈະມີ variation ລາຄາທີ່ກົງກັບໄລຍະການເກັບເງິນທີ່ເລືອກຢູ່ຫຼືບໍ່. ເມື່ອປິດ (default), ຜະລິດຕະພັນທີ່ບໍ່ມີ variation ສຳລັບໄລຍະເວລາທີ່ເລືອກແມ່ນຈະຖືກເຊື່ອງໄວ້.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected (ເຊື່ອງເມື່ອໄດ້ເລືອກລ່ວງໜ້າ)**: ຈະເຊື່ອງ pricing table ເມື່ອມີການເລືອກແຜນການແລ້ວຜ່ານ URL (ຕົວຢ່າງ: `/register/premium`).
  * **Pricing Table Template (ແບບ template ຂອງ Pricing Table)**: ເລືອກ visual template ສຳລັບ pricing table (Simple List, Legacy, ແລະ ອື່ນໆ).

ຖ້າທ່ານເພີ່ມຜະລິດຕະພັນໃສ່ໃນ Pricing Table ກ່ອນທີ່ form ຈະມີ fields ທີ່ຈຳເປັນເພື່ອເຮັດໃຫ້ checkout flow ຂອງຜະລິດຕະພັນນັ້ນສໍາເລັດ, editor ຈະສະແດງຄຳເຕືອນ. ໃຫ້ໃຊ້ຄຳເຕືອນນີ້ເພື່ອເພີ່ມ field ที่ຂາດຫາຍໄປກ່ອນທີ່ຈະ publish ຫຼື save ການປ່ຽນແປງສຳລັບ live registration form.

### Thambahan Txiv Neegjaeb (Adding a Period Selection Toggle) {#adding-a-period-selection-toggle}

Yog koj muaj teeb meej [Price Variations](creating-your-first-subscription-product#price-variations) rau hauv neeg tua (o lus zoo li monthly thiab annual pricing), koj yuav tsis txhob txhob tsim **Period Selection** field mus rau lub forms checkout. Qhov field no tuaj tsim cov toggle uas tsim qub rau cov neeg thoob tshiab los ntawm cov txhais tshuab, thiab qhov tab tsim se tsis txhob txhob ua ntej hauv real time.

#### Step 1: Tsim Cov Price Variations Rau Neeg Tua {#step-1-set-up-price-variations-on-your-products}
Thaum tsis txhob tsim Period Selection field, tsis txhob tsis txhob tsim tias neeg tua muaj cov price variations rau. Qhia mus rau **Ultimate Multisite > Products**, edit neeg tua, thiab thov mus rau tab **Price Variations** los tsim cov txhais tshuab tshiab (o lus zoo li Annual hais nrhiav tsis txhob txhob tsim).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Tsim Period Selection Field Rau Forms Checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}
1. Qhia mus rau **Ultimate Multisite > Checkout Forms** thiab edit forms checkout cua koj.

2. Thov mus rau hauv step uas muaj cov field **Pricing Table** thiab thov tsim **Add new Field**.

3. Hau ntawm qhov dialog tsim tag nrho, thov tsim **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Tsim cov khoom period. Txhua option yuav muaj:
   * **Duration**: Cov tsawv (o lus zoo li `1`)
   * **Duration unit**: Qhov chaw ntawm qhov period (Days, Weeks, Months, lossis Years)
   * **Label**: Cov lus uas cov neeg yuav txhob txhob tsim (o lus zoo li "Monthly", "Annual")

5. Thov tsim **+ Add Option** los tsim cov khoom period tsis txhob txhob tsim. Cov option no yuav tsim hauv cov price variations uas koj tsim rau neeg tua.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Tsim **Period Selector Template** (Clean yog qhov tsis txhob tsim, uas tuaj tsim selector yuav zoo li tab tsim hauv CSS tshiab).

7. ປຸ່ມ **Save Field**- थांब (Save Field) ໃຫ້ຖືກກົດ.

#### ຂັ້ນຕອນທີ 3: ວາງຊ່ອງຂໍ້ມູນໄວ້ຂ້າງເທິງຕາຕະລາງລາຄາ {#step-3-position-the-field-above-the-pricing-table}

ເພື່ອໃຫ້ຜູ້ໃຊ້ໄດ້ປະສົບການທີ່ດີທີ່ສຸດ, ໃຫ້ແນ່ໃຈວ່າຊ່ອງຂໍ້ມູນ Period Selection (ເລືອກໄລຍະເວລາ) ປາກົດ **ກ່ອນ** ຊ່ອງຂໍ້ມູນ Pricing Table (ຕາຕະລາງລາຄາ) ໃນຂັ້ນຕອນ checkout ຂອງທ່ານ. ເຈົ້າສາມາດລາກຊ່ອງຂໍ້ມູນເພື່ອຈັດລຽງໃໝ່ໃນ checkout form editor. ແນວນີ້, ລູກຄ້າຈະເລືອກໄລຍະເວລາເກັບເງິນກ່ອນ ແລະ ຈາກນັ້ນເຫັນລາຄາສຳລັບໄລຍະເວລານັ້ນ.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### ມັນເຮັດວຽກແນວໃດໃນ Frontend (ໜ້າເວັບ) {#how-it-works-on-the-frontend}

ເມື່ອຕັ້ງຄ່າរួច, ລູກຄ້າທີ່ເຂົ້າເຖິງໜ້າລົງທະບຽນຂອງເຈົ້າຈະເຫັນຕົວເລືອກໄລຍະເວລາຢູ່ເທິງຕາຕະລາງລາຄາ. ເມື່ອພວກເຂົາກົດເລືອກໄລຍະເກັບເງິນແຕກຕ່າງກັນ:

  * ຕາຕະລາງລາຄາຈະອັບເດດທັນທີເພື່ອສະແດງລາຄາສຳລັບໄລຍະທີ່ເລືອກ (ບໍ່ຈຳເປັນຕ້ອງໂຫຼດໜ້າໃໝ່).
  * ຖ້າ **Force Different Durations** (ບັງຄັບໃຫ້ມີໄລຍະເວລາຕ່າງກັນ) ຖືກປິດໄວ້ໃນຊ່ອງຂໍ້ມູນ Pricing Table, ສິນຄ້າທີ່ບໍ່ມີການປ່ຽນລາຄາສຳລັບໄລຍະທີ່ເລືອກຈະຖືກເຊື່ອງໄວ້.
  * ຖ້າ **Force Different Durations** ເປີດໃຊ້ງານ, ສິນຄ້າທັງໝົດຍັງເຫັນໄດ້ ເຖິງແມ່ນວ່າພວກມັນຈະບໍ່ມີການປ່ຽນລາຄາສຳລັບໄລຍະທີ່ເລືອກ (ພວກມັນຈະສະແດງລາຄາເລີ່ມຕົ້ນຂອງມັນ).

#### ການເລືອກໄລຍະເວລາເກັບເງິນລ່ວງລ່ວງໜ້າຜ່ານ URL {#pre-selecting-a-billing-period-via-url}

ເຈົ້າສາມາດເລືອກຜະລິດຕະພັນ ແລະ ໄລຍະເວລາເກັບເງິນລ່ວງລ່ວງໜ້າຜ່ານ URL ໄດ້ຄືກັນ. Ultimate Multisite ຮອງຮັບຮູບແບບ URL ເຫຼົ່ານີ້:

  * `/register/premium` — ເລືອກສິນຄ້າ "Premium" ແຕ່ຢ່າງດຽວ
  * `/register/premium/12` — ເລືອກສິນຄ້າ ແລະ ໄລຍະເວລາ 12 ເດືອນ
  * `/register/premium/1/year` — ເລືອກສິນຄ້າດ້ວຍໄລຍະເວລາ 1 ປີ

### ຊ່ອງຂໍ້ມູນການເລືອກ Template (Template Selection Field) {#the-template-selection-field}

ຊ່ອງຂໍ້ມູນ **Template Selection** (ການເລືອກແມ່ແບບ) ອະນຸຍາດໃຫ້ລູກຄ້າເລືອກ template website ໃນລະຫວ່າງ checkout. ຕອນນີ້ມັນຖືກໃສ່ໄວ້ໂດຍອັດຕະໂນມັດໃນ checkout form templates ແບບ single step ແລະ multi-step ທີ່ເພີ່ມເຂົ້າໃນ Ultimate Multisite v2.6.1.

#### ການເພີ່ມຊ່ອງຂໍ້ມູນດ້ວຍຕົນເອງ (Adding the field manually) {#adding-the-field-manually}

ຖ້າເຈົ້າກຳລັງເຮັດວຽກກັບ form (ແບບຟອມ) ທີ່ສ້າງຂຶ້ນກ່ອນ v2.6.1, ຫຼື ເລີ່ມຈາກ template ຫວ່າງເປົ່າ:

1. ໄປທີ່ **Ultimate Multisite > Checkout Forms** ແລ້ວແກ້ໄຂ checkout form ຂອງເຈົ້າ.
2. ໃນຂັ້ນຕອນທີ່ຂໍ້ມູນ site (ຂໍ້ມູນເວັບໄຊ) ຖືກເກັບ, ໃຫ້ກົດ **Add new Field**.
3. ເລືອກ **Template Selection** ຈາກ dialog ຂອງ field type.
4. ຕັ້ງຄ່າ field ນີ້:
   - **Label** — ແມ່ນຫົວຂໍ້ທີ່ລູກຄ້າເຫັນຢູ່ເທິງຕາຕະລາງ template (ຕົວຢ່າງ: "ເລືອກ template site").
   - **Required** — ເປັນການບັງຄັບໃຫ້ລູກຄ້າຕ້ອງເລືອກ template ກ່ອນທີ່ຈະໄປຕໍ່ໄດ້ບໍ່.

#### ມັນເຮັດວຽກແນວໃດ {#how-it-works}

ເມື່ອລູກຄ້າເລືອກ template ໃນລະຫວ່າງ checkout, Ultimate Multisite ຈະໃຊ້ template ນັ້ນເວລາສ້າງ site ໃໝ່ຂອງເຂົາເຈົ້າ. Template ທີ່ສະແດງອອກມາແມ່ນມາຈາກ list **Site Templates** ຂອງເຈົ້າ (**Ultimate Multisite > Site Templates**). ມີພຽງ template ທີ່ຖືກຕັ້ງຄ່າໃຫ້ລູກຄ້າສາມາດໃຊ້ໄດ້ເທົ່ານັ້ນທີ່ຈະປາກົດຢູ່ບ່ອນນີ້.

### checkout-form base domains {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 ເອົາ domain ທີ່ຕັ້ງຄ່າໄວ້ໃນ field **Site URL** ຂອງ checkout form ເປັນ network base domains (domain ພື້ນຖານຂອງເຄືອຂ່າຍ). ໃຫ້ໃຊ້ການຕັ້ງຄ່າ available-domain ຂອງ field ນັ້ນ ເມື່ອເຈົ້າຕ້ອງການໃຫ້ລູກຄ້າສ້າງ site ໃໝ່ພາຍໃຕ້ shared registration domains ໜຶ່ງ ຫຼືຫຼາຍຢ່າງ, ເຊັ່ນ `example.com` ແລະ `sites.example.com`.

Shared checkout-form base domains ບໍ່ໄດ້ຖືກຈັດການເປັນ custom domain mapping ຂອງແຕ່ລະ site. ເມື່ອລູກຄ້າສ້າງ subdirectory site ໃນ base ນັ້ນໃດໜຶ່ງ, Ultimate Multisite ຈະບໍ່ສ້າງ record ທີ່ map domain ເຮັດໃຫ້ host ທີ່ໃຊ້ຮ່ວມນັ້ນເປັນຂອງ site ດຽວເທົ່ານັ້ນ. Host ທີ່ໃຊ້ຮ່ວມຍັງສາມາດໃຊ້ໄດ້ກັບ sibling sites (site ອື່ນໆ) ທີ່ໃຊ້ checkout form base ດຽວກັນ.

ຄວນເກັບ custom domainsໄວ້ສຳລັບ mapped hosts ຂອງລູກຄ້າແຕ່ລະຄົນ, ເຊັ່ນ `customer-example.com`. ຄວນເກັບ checkout-form base domains ໄວ້ສຳລັບ shared registration hosts ທີ່ຫຼາຍ site ສາມາດໃຊ້ໄດ້.

#### ການເອົາ field ອອກ {#removing-the-field}

Yog koj tsis muaj site templates (template) hauv lub forms, thov txhob tso siv lub Template Selection field (talentsau selection field) out. Sau ntawd, tus neeg uav yuav paub lub template default (default template) uas tau teb hauv **Ultimate Multisite > Settings > Site Templates**.
