---
title: Nkwado Ọrụ
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms na ọ dị mma vàmụrị n'ụ ahụ ị chọpụta ihe ndị dị iche iche mgbe ị na ị chọpụta ndị khách nwere ike ịbụ.

Ultimate Multisite 2.0 na-eme ka ị na-agba Checkout Form editor, nke na-eme ka ị chụkwa ọtụtụ form ị chụrụ anyị na-enweghị, na-eme ka ị na-enweghị fields dị iche iche, products ndị dị n'etiti, na ihe ndị ọzọ.

Ọ bụrụ na ị chọrọ ịnweta akụzi a, jupụ n'Menu Checkout Forms, na side-bar kedu.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Na akụzi a, ị ga-enweghị ọ bụla checkout forms ị nwere.

Table nke akụzi ahụ na-eme ka ọkụkọ **Status** ọ bụ, ọ dị mma ka ị chụrụ ihe ọ bụ na form ọ bụ na-enweghị ịga n'etiti ndị khách nwere ike ịgbanwe:

| Status | Ọ bụ ihe a na-eme |
|---|---|
| **Active** | Form ahụ ga-anọchịrị anya ọ bụrụ na shortcode na registration page ya na-enweghị. |
| **Inactive** | Form ahụ nwere, mana ọ dị mma. Ndị khách maara ịga checkout na-akpọ ya mgbe ị chọrọ ka ị ga-anọchịrị ya again. |

Jupụ akụzi status ahụ mgbe ị na-enweghị form registration public, karịsịrị mgbe ị na nwere draft or seasonal checkout forms a na live forms ha.

Ọ bụrụ na ị chọrọ ịchụkwa ọhụrụ, jupụ Add Checkout Form na akaụkọ ahụ.

Ị ga-enweghị ọ bụla akụzi dị iche iche a mgbe ị na-eme ka ọ bụ ihe ị nwere ike ịgbanwe: single step, multi-step, or blank. Ka ọ bụrụ na ị chụkwa **single step** ma ọ bụ **multi-step** mgbe ị na-enweghị akụzi ahụ, form template a ga-anọchịrị **Template Selection** field by default. Field a na-eme ka ndị khách nwere ike ịkpọ site template mgbe ị na-agbanwe registration. Ị chụrụ ya dị mma, ị gbagba ya, ma ọ bụ ịgba ya n'aka anyị mgbe ọ bụ ihe ọzọ dị n'etiti editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Maka, ị chọrọ ịgbagba ma ọ bụ dudu form ị mere na-akọwa. Ọ bụrụ na ị ga-edit ma ọ bụ kọwa duplikat form ị jikọta, ị chọrọ ịkpọ akụkọ ndị a mgbe ị kpọ akụkọ ahụ. Ọ bụrụ na ị chọrọ ịgbagba ma ọ bụ dudu form ị mere na-akọwa, ị chọrọ ịkpọ akụkọ a.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Onye Nche Form Checkout Editor Overview

Onye nche form checkout editor bụ interface ọma nke ịrụ form registration gị. Ọ bụ ihe atụmatụ nke layout onye nche ahụ:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Edit Checkout Form

Ị ga-arụta checkout forms maka ihe ndị ọzọ. Na ihe atụmatụ a, anyị ga-arụta form registration.

Ọ bụrụ na ị gidi na onye nche form checkout editor, gaa anọọ akụkọ (name) maka form ahụ (a ga-arị achọta ma ọ bụ ihe ndị ọzọ), ma ọ bụ slug (a aji maka ịrụ shortcodes, dịka ọ bụ na).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms bụ akụkọ na ụda (steps and fields). Ị ga-arụta akụkọ ọhụrụ ma ọ bụ kpọ "Add New Checkout Step".

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na tab ọkụ ahụ nke modal window, gaa mbinụ isi (content) nke akụkọ form ị mere. Gaa gị ID, name ma description. Ọ bụ ihe ndị a ga-arị achọta mgbe ọ bụ na.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Tetingba, ri dị n'ụ (visibility) nke akụkọ ahụ. Ị ga-achọ mma n'ime "Always show" (Nche ọ bụla), "Only show for logged in users" (Nche maka ndị na-akpọ aka), ma ọ bụ "Only show for guests" (Nche maka ndị na-agbaje).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Mma, ri ịse style nke akụkọ ahụ. Ọ bụ ihe ndị a dị mma ma ọ bụ ọ dịghị.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Gịnị na-agba fields maka akụkọ ọhụrụ anyị mere. Gaa gị click maka "Add New Field" ma chọrọ ihe ị chọrọ type nke section ahụ.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Mỗi trường có các tham số khác nhau cần điền vào. Đối với lần đầu tiên này, chúng ta sẽ chọn trường "Username" (Tên người dùng).

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Bạn có thể thêm bao nhiêu bước và trường tùy thích. Để hiển thị sản phẩm của bạn cho khách hàng chọn một cái, hãy sử dụng trường Pricing Table (Bảng giá). Nếu bạn muốn khách hàng chọn mẫu, hãy thêm trường Template Selection (Lựa chọn mẫu). Và cứ thế tiếp tục.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Lưu ý:** username, email, password, site title (tiêu đề trang web), site URL (địa chỉ trang web), order summary (tóm tắt đơn hàng), payment (thanh toán), và submit button (nút gửi) là các trường bắt buộc để tạo một form checkout._

Trong khi bạn đang làm việc với form checkout của mình, bạn luôn có thể sử dụng nút Preview (Xem trước) để xem khách hàng sẽ thấy form như thế nào. Bạn cũng có thể chuyển đổi giữa chế độ xem như người dùng hiện tại hoặc khách truy cập.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Cuối cùng, trong mục Advanced Options (Tùy chọn nâng cao), bạn có thể thiết lập thông báo cho trang "Thank You" (Cảm ơn), thêm các đoạn mã để theo dõi lượt chuyển đổi (conversions), thêm CSS tùy chỉnh cho form checkout của bạn hoặc giới hạn nó ở một số quốc gia nhất định.

![Advanced Options](/img/config/checkout-form-advanced.png)

Bạn cũng có thể bật hoặc tắt form checkout của mình bằng cách chuyển công tắc này ở cột bên phải, hoặc xóa vĩnh viễn form đó.

![Active toggle](/img/config/checkout-form-active.png)

Na anọkọmụ ihe (form) ahụ, klikere n'option delete (delete) na form actions:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Kwelte ị chọpụta form checkout-nwa gị!

![Save button](/img/config/checkout-form-save.png)

Na-akọwa shortcode (shortcode) na-agba ọsọ ahụ, klikere n'Generate Shortcode (Generate Shortcode) ma kwupụta ihe a nwere n'modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Field Pricing Table

Field **Pricing Table** na-akọwa ihe ndị gị na form checkout ahụ, onye ike ịhụ ụdị plan (plan) ị chọrọ. Mgbe ị nwere ịgbagba (edit) ọkụzi a, ị ga-agbagba ihe dị iche iche:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Ọ bụ ihe Pricing Table na-akọwa na form registration frontend ahụ:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Chụrụ ihe ị chọrọ ịhụ na ọ dị n'ịdị, ma ọ bụ ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n'ịdị ọ bụ na ọ dị n

### Hinzire Period Selection Toggle

Ka ị bụrụ na ị mere configuration [Price Variations](creating-your-first-subscription-product#price-variations) ọ bụla na products ha (nke a bụ ihe dị ka price monthly na annual), ị ga-agbaje **Period Selection** field n' checkout form ha. Field a ga-akọta toggle nke na-agbanwe ndị ahụ n'etiti billing periods, ma pricing table ga-agbaara dinamikanya real time.

#### Step 1: Set Up Price Variations on Your Products

Ma ị gbaaka Period Selection field, ka iji ịgbaghara na products ha na-agbaje price variations. Jup **Ultimate Multisite > Products**, edit product, ma jup tab **Price Variations** ka ị chọrọ alternate billing periods (nke a bụ ihe dị ka Annual na price dị ọnọdụ).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Add the Period Selection Field to Your Checkout Form

1. Jup **Ultimate Multisite > Checkout Forms** ma edit checkout form ha.

2. Scroll down n' step nke na enwe field **Pricing Table** ha ma click **Add new Field**.

3. Na dialog selection field type, click **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configure period options. Each option ga-eji:
   * **Duration**: Number (nke a bụ `1`)
   * **Duration unit**: Type of period (Days, Weeks, Months, or Years)
   * **Label**: Text ndị ahụ ga-akọta (nke a bụ "Monthly", "Annual")

5. Click **+ Add Option** ka ị gbaara options period ọzọ. Options ndị a ga-agbaje price variations ị mere na products ha.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Choose **Period Selector Template** (Clean bụ default, nke ga-akọta selector simple styled ready for custom CSS).

7. Click **Save Field**.

#### Bước 3: Đặt Trường Phía Trên Bảng Giá

Để có trải nghiệm tốt nhất cho người dùng, hãy đảm bảo rằng trường Lựa chọn Kỳ (Period Selection) xuất hiện **trước** trường Bảng Giá (Pricing Table) trong bước thanh toán của bạn. Bạn có thể kéo các trường để sắp xếp lại thứ tự chúng trong trình chỉnh sửa biểu mẫu thanh toán. Bằng cách này, khách hàng sẽ chọn kỳ thanh toán trước và sau đó mới thấy giá cho kỳ đó.

![Trình chỉnh sửa biểu mẫu thanh toán hiển thị thứ tự trường](/img/config/checkout-form-editor-with-fields.png)

#### Cách Nó Hoạt Động Ở Giao Diện (Frontend)

Sau khi đã thiết lập, khách hàng truy cập trang đăng ký của bạn sẽ thấy bộ chọn kỳ ở phía trên bảng giá. Khi họ nhấp vào một kỳ thanh toán khác:

  * Bảng giá sẽ tự động cập nhật ngay để hiển thị giá cho kỳ đã chọn (không cần tải lại trang).
  * Nếu **Force Different Durations** bị tắt trên trường Bảng Giá, các sản phẩm không có sự thay đổi về giá cho kỳ đã chọn sẽ bị ẩn đi.
  * Nếu **Force Different Durations** được bật, tất cả các sản phẩm vẫn hiển thị ngay cả khi chúng không có biến thể cho kỳ đã chọn (chúng sẽ hiển thị giá mặc định của chúng).

#### Chọn Kỳ Thanh Toán Sẵn Qua URL

Bạn cũng có thể chọn sẵn một sản phẩm và kỳ thanh toán thông qua URL. Ultimate Multisite hỗ trợ các mẫu URL này:

  * `/register/premium` — Chỉ chọn trước sản phẩm "Premium"
  * `/register/premium/12` — Chọn trước sản phẩm và thời hạn 12 tháng
  * `/register/premium/1/year` — Chọn trước sản phẩm với thời hạn 1 năm

### Trường Lựa Chọn Mẫu (Template Selection Field)

Trường **Chọn Mẫu (Template Selection)** cho phép khách hàng chọn mẫu trang web trong quá trình thanh toán. Nó hiện đã được bao gồm mặc định trong các mẫu biểu mẫu thanh toán một bước (single step) và nhiều bước (multi-step) được thêm vào trong Ultimate Multisite v2.6.1.

#### Thêm trường thủ công

Ka ị nwere ah ịrụrụ na form nke e ji ozi ọmụmọ ihe a bụrụbe mgbe ọ bụ v2.6.1 a bụ, ma ọ bụ mgbe ị rụrụ ya tunu:

1. Mene **Ultimate Multisite > Checkout Forms** ma jikọta checkout form-ie.
2. Na mgbọ ọ dị nwere ozi site ahụ, jikọta **Add new Field**.
3. Na dialog field type, chine **Template Selection**.
4. Jikọta field ahụ:
   - **Label** — Ọ bụ enyemọ ọmụmọ ihe ndị mmadụ na-agbaje mgbe ọ dị nwere grid template (nke a bụ "Chine site template").
   - **Required** — Ọ bụ ma mmadụ ga-alụsiye selection template karịta ịgụ egwu.

#### Ọ dị mma gaa jikọta

Mgbe mmadụ na-alụsiye template mgbe ọ dị nwere checkout, Ultimate Multisite ga-arị so na ya mgbe ọ na-provision site ọhụrụ ha. Templates ndị a ji eji na-agbaje na list **Site Templates**-ie (**Ultimate Multisite > Site Templates**). Ọ bụ templates ndị a a na-eme ka mmadụ nwere ike ịgụ.

### Checkout-form base domains

Ultimate Multisite v2.13.0 ga-arị so na domains ndị e ji ozi ọmụmọ ihe a na fields **Site URL** mgbe checkout form na-eme kawo domain dị ka network base domains. Jikọta settings available-domain nke field ahụ mgbe ị chọrọ mmadụ ịrụ site n'ime atọka kana ọkụkọ nhwere (shared registration domains), kama vile `example.com` na `sites.example.com`.

Shared checkout-form base domains ga-arị so na mappings custom domain per-site. Mgbe mmadụ na-alụsiye site subdirectory n'ime ọnụmọdụ ah, Ultimate Multisite ga-eji ọkụkọ mapped-domain nke ga-eme ka host shared ah bụrụ anaka site ọzọ ndị na-agbaje base checkout form ah. Host shared ah ga-enwe ike ịdị n'ime anọrọ ọzọ ndị na-agbaje base checkout form ebe a bụ.

Jikọta custom domains maka hosts per-customer mapped, kama vile `customer-example.com`. Jikọta checkout-form base domains maka hosts registration shared mgbe site ọtụ dị nwere ike ịgụ.

#### Ọkụkọ field ahụ

Ka ị ri dị mma na ịhapụ field ahụ

Hau gba ịkpọ m nọ, ma ọ bụ ihe ị chụrụ na anụ, baka ịkwere mẫu trang (site templates), biko hapụ ma hapụ 'Template Selection' field n' form-ah. Ọ bụrụ na ị kwesịrị, ndị khách nwere ike ịnwale mụ mẫu (default template) nke e ji **Ultimate Multisite > Settings > Site Templates** kọwa ya.
