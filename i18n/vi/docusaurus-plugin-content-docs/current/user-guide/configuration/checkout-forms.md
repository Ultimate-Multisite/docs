---
title: Biểu mẫu thanh toán
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Checkout Forms

Checkout Forms là một cách dễ dàng và linh hoạt để thử nghiệm các phương pháp khác nhau khi cố gắng chuyển đổi khách hàng mới.

Ultimate Multisite 2.0 cung cấp một trình chỉnh sửa Checkout Form cho phép bạn tạo bao nhiêu biểu mẫu tùy ý, với các trường khác nhau, sản phẩm được cung cấp, v.v.

Để truy cập tính năng này, hãy vào menu Checkout Forms, ở thanh bên trái.

![Danh sách Checkout Forms](/img/config/checkout-forms-list.png)

Trên trang này, bạn có thể xem tất cả các biểu mẫu thanh toán mà mình có.

Bảng danh sách bao gồm một cột **Trạng thái** để bạn có thể xác nhận liệu từng biểu mẫu hiện có đang khả dụng cho khách hàng hay không:

| Trạng thái | Ý nghĩa |
|---|---|
| **Hoạt động** | Biểu mẫu có thể được sử dụng ở bất kỳ đâu mà shortcode hoặc trang đăng ký của nó được xuất bản. |
| **Không hoạt động** | Biểu mẫu đã được lưu nhưng bị tắt. Khách hàng không thể hoàn tất thanh toán với biểu mẫu này cho đến khi bạn bật lại. |

Hãy sử dụng cột trạng thái trước khi chỉnh sửa một luồng đăng ký công khai, đặc biệt khi bạn giữ các biểu mẫu thanh toán dạng nháp hoặc theo mùa cùng với các biểu mẫu đang hoạt động.

Nếu bạn muốn tạo một biểu mẫu mới, chỉ cần nhấp vào Add Checkout Form ở đầu trang.

Bạn có thể chọn một trong ba tùy chọn này làm điểm bắt đầu: một bước, nhiều bước hoặc trống. Sau đó, nhấp để Go to the Editor.

Khi bạn chọn **một bước** hoặc **nhiều bước** làm điểm bắt đầu, mẫu biểu mẫu hiện bao gồm trường **Template Selection** theo mặc định. Trường này cho phép khách hàng của bạn chọn một mẫu trang trong quá trình đăng ký. Bạn có thể để nguyên, xóa hoặc đặt lại vị trí của nó như bất kỳ trường nào khác trong trình chỉnh sửa.

![Trình chỉnh sửa Checkout Form](/img/config/checkout-form-editor.png)

Ngoài ra, bạn có thể chỉnh sửa hoặc sao chép các biểu mẫu hiện có bằng cách nhấp vào các tùy chọn bên dưới tên của chúng. Tại đó, bạn cũng sẽ tìm thấy các tùy chọn để sao chép shortcode của biểu mẫu hoặc xóa biểu mẫu.

![Các thao tác khi di chuột trên biểu mẫu thanh toán](/img/config/checkout-form-hover-actions.png)

#### Tổng quan về trình chỉnh sửa Checkout Form {#checkout-form-editor-overview}

Trình chỉnh sửa biểu mẫu thanh toán cung cấp một giao diện toàn diện để xây dựng các biểu mẫu đăng ký của bạn. Dưới đây là tổng quan về bố cục trình chỉnh sửa:

![Tổng quan trình chỉnh sửa Checkout Form](/img/config/checkout-form-editor-overview.png)

### Chỉnh sửa Checkout Form {#editing-a-checkout-form}

Bạn có thể tạo các biểu mẫu thanh toán cho nhiều mục đích khác nhau. Trong ví dụ này, chúng ta sẽ làm việc trên một biểu mẫu đăng ký.

Sau khi điều hướng đến trình chỉnh sửa biểu mẫu thanh toán, hãy đặt tên cho biểu mẫu của bạn (chỉ dùng để tham chiếu nội bộ) và một slug (dùng để tạo shortcode, chẳng hạn).

![Trình chỉnh sửa Checkout Form](/img/config/checkout-form-editor.png)

Biểu mẫu được tạo từ các bước và trường. Bạn có thể thêm một bước mới bằng cách nhấp vào Add New Checkout Step.

![Thêm bước thanh toán mới](/img/config/checkout-form-add-step.png)

Ở tab đầu tiên của cửa sổ modal, hãy điền nội dung cho bước của biểu mẫu. Đặt cho nó một ID, tên và mô tả. Các mục này chủ yếu được dùng nội bộ.

![Tab nội dung bước của biểu mẫu thanh toán](/img/config/checkout-form-step-content.png)

Tiếp theo, thiết lập khả năng hiển thị của bước. Bạn có thể chọn giữa "Luôn hiển thị", "Chỉ hiển thị cho người dùng đã đăng nhập" hoặc "Chỉ hiển thị cho khách".

![Tab khả năng hiển thị bước của biểu mẫu thanh toán](/img/config/checkout-form-step-visibility.png)

Cuối cùng, cấu hình kiểu dáng của bước. Đây là các trường tùy chọn.

![Tab kiểu dáng bước của biểu mẫu thanh toán](/img/config/checkout-form-step-style.png)

Bây giờ, đã đến lúc thêm các trường vào bước đầu tiên của chúng ta. Chỉ cần nhấp vào Add New Field và chọn loại phần bạn muốn.

![Bước biểu mẫu thanh toán có các trường](/img/config/checkout-form-step-with-fields.png)

Mỗi trường có các tham số khác nhau cần được điền. Với mục đầu tiên này, chúng ta sẽ chọn trường "Username".

![Danh sách thả xuống chọn loại trường](/img/config/checkout-form-field-type-dropdown.png)

![Cài đặt nội dung trường Username](/img/config/checkout-form-username-content.png)

![Cài đặt khả năng hiển thị trường Username](/img/config/checkout-form-username-visibility.png)

![Cài đặt kiểu dáng trường Username](/img/config/checkout-form-username-style.png)

Bạn có thể thêm bao nhiêu bước và trường tùy nhu cầu. Để hiển thị sản phẩm cho khách hàng của bạn chọn một gói, hãy dùng trường Pricing Table. Nếu bạn muốn cho phép khách hàng chọn một mẫu, hãy thêm trường Template Selection. Và tương tự.

![Hộp thoại Add New Field](/img/config/checkout-form-add-field-dialog.png)

_**Lưu ý:** username, email, password, tiêu đề trang, URL trang, tóm tắt đơn hàng, thanh toán và nút gửi là các trường bắt buộc để tạo một biểu mẫu thanh toán._

Trong khi làm việc trên biểu mẫu thanh toán của mình, bạn luôn có thể dùng nút Preview để xem khách hàng của bạn sẽ nhìn thấy biểu mẫu như thế nào. Bạn cũng có thể chuyển đổi giữa chế độ xem như một người dùng hiện có hoặc một khách truy cập

![Nút xem trước Checkout Form](/img/config/checkout-form-preview-button.png)

![Modal xem trước Checkout Form](/img/config/checkout-form-preview-modal.png)

Cuối cùng, trong Advanced Options bạn có thể cấu hình thông báo cho trang "Thank You", thêm các đoạn mã để theo dõi chuyển đổi, thêm CSS tùy chỉnh vào biểu mẫu thanh toán của bạn hoặc giới hạn nó ở một số quốc gia nhất định.

![Tùy chọn nâng cao](/img/config/checkout-form-advanced.png)

Bạn cũng có thể bật hoặc tắt thủ công biểu mẫu thanh toán của mình bằng cách chuyển đổi tùy chọn này ở cột bên phải, hoặc xóa vĩnh viễn biểu mẫu.

![Công tắc hoạt động](/img/config/checkout-form-active.png)

Để xóa một biểu mẫu, hãy nhấp vào tùy chọn xóa trong các thao tác của biểu mẫu:

![Tùy chọn xóa biểu mẫu thanh toán](/img/config/checkout-form-delete.png)

Đừng quên lưu biểu mẫu thanh toán của bạn!

![Nút lưu](/img/config/checkout-form-save.png)

Để lấy shortcode của biểu mẫu, hãy nhấp vào Generate Shortcode và sao chép kết quả được hiển thị trên cửa sổ modal.

![Nút lưu kèm shortcode](/img/config/checkout-form-save.png)

### Trường Pricing Table {#the-pricing-table-field}

Trường **Pricing Table** hiển thị các sản phẩm của bạn trên biểu mẫu thanh toán để khách hàng có thể chọn một gói. Khi chỉnh sửa trường này, bạn có thể cấu hình một số tùy chọn:

![Cài đặt trường Pricing Table](/img/config/pricing-table-field-settings.png)

Dưới đây là cách bảng giá xuất hiện trên biểu mẫu đăng ký ở giao diện frontend:

![Bảng giá checkout frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Sản phẩm**: Chọn sản phẩm nào sẽ hiển thị và thứ tự chúng xuất hiện.
  * **Buộc thời lượng khác nhau**: Khi bật, tất cả sản phẩm được hiển thị bất kể chúng có biến thể giá khớp với kỳ thanh toán hiện đang chọn hay không. Khi tắt (mặc định), sản phẩm không có biến thể cho kỳ đã chọn sẽ bị ẩn.
    ![Tùy chọn buộc thời lượng trong bảng giá](/img/config/pricing-table-force-durations.png)
  * **Ẩn khi đã chọn trước**: Ẩn bảng giá khi một gói đã được chọn qua URL (ví dụ: `/register/premium`).
  * **Mẫu bảng giá**: Chọn mẫu giao diện cho bảng giá (Danh sách đơn giản, Cũ, v.v.).

Nếu bạn thêm một sản phẩm vào Bảng giá trước khi biểu mẫu bao gồm các trường cần thiết để hoàn tất quy trình checkout của sản phẩm đó, trình chỉnh sửa hiện sẽ hiển thị cảnh báo. Sử dụng cảnh báo để thêm trường bắt buộc còn thiếu trước khi xuất bản hoặc lưu thay đổi cho biểu mẫu đăng ký đang hoạt động.

### Thêm nút chuyển chọn kỳ {#adding-a-period-selection-toggle}

Nếu bạn đã cấu hình [Biến thể giá](creating-your-first-subscription-product#price-variations) trên sản phẩm của mình (ví dụ: giá theo tháng và theo năm), bạn có thể thêm trường **Chọn kỳ** vào biểu mẫu checkout. Trường này hiển thị một nút chuyển cho phép khách hàng chuyển đổi giữa các kỳ thanh toán, và bảng giá sẽ cập nhật động theo thời gian thực.

#### Bước 1: Thiết lập biến thể giá trên sản phẩm của bạn {#step-1-set-up-price-variations-on-your-products}

Trước khi thêm trường Chọn kỳ, hãy đảm bảo sản phẩm của bạn đã được cấu hình biến thể giá. Đi tới **Ultimate Multisite > Sản phẩm**, chỉnh sửa một sản phẩm, và chuyển đến tab **Biến thể giá** để thêm các kỳ thanh toán thay thế (ví dụ: Hằng năm với giá chiết khấu).

![Tab Biến thể giá trên một sản phẩm](/img/config/product-price-variations-tab.png)

#### Bước 2: Thêm trường Chọn kỳ vào biểu mẫu checkout của bạn {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Đi tới **Ultimate Multisite > Biểu mẫu checkout** và chỉnh sửa biểu mẫu checkout của bạn.

2. Cuộn xuống bước chứa trường **Bảng giá** của bạn và nhấp **Thêm trường mới**.

3. Trong hộp thoại chọn loại trường, nhấp **Chọn kỳ**.

![Hộp thoại Thêm trường mới hiển thị Chọn kỳ](/img/config/checkout-form-add-field-dialog.png)

4. Cấu hình các tùy chọn kỳ. Mỗi tùy chọn cần:
   * **Thời lượng**: Con số (ví dụ: `1`)
   * **Đơn vị thời lượng**: Loại kỳ (Ngày, Tuần, Tháng hoặc Năm)
   * **Nhãn**: Văn bản khách hàng sẽ thấy (ví dụ: "Hằng tháng", "Hằng năm")

5. Nhấp **+ Thêm tùy chọn** để thêm nhiều lựa chọn kỳ hơn. Các tùy chọn này phải khớp với các biến thể giá bạn đã cấu hình trên sản phẩm của mình.

![Cài đặt trường Chọn kỳ](/img/config/period-selection-field-settings.png)

6. Chọn một **Mẫu bộ chọn kỳ** (Sạch là mặc định, hiển thị một bộ chọn có kiểu đơn giản, sẵn sàng cho CSS tùy chỉnh).

7. Nhấp **Lưu trường**.

#### Bước 3: Đặt trường phía trên Bảng giá {#step-3-position-the-field-above-the-pricing-table}

Để có trải nghiệm người dùng tốt nhất, hãy đảm bảo trường Chọn kỳ xuất hiện **trước** trường Bảng giá trong bước checkout của bạn. Bạn có thể kéo các trường để sắp xếp lại chúng trong trình chỉnh sửa biểu mẫu checkout. Bằng cách này, khách hàng trước tiên chọn một kỳ thanh toán rồi sau đó xem giá cho kỳ đó.

![Trình chỉnh sửa biểu mẫu checkout hiển thị thứ tự trường](/img/config/checkout-form-editor-with-fields.png)

#### Cách hoạt động trên frontend {#how-it-works-on-the-frontend}

Sau khi được cấu hình, khách hàng truy cập trang đăng ký của bạn sẽ thấy bộ chọn kỳ phía trên bảng giá. Khi họ nhấp vào một kỳ thanh toán khác:

  * Bảng giá cập nhật ngay lập tức để hiển thị giá cho kỳ đã chọn (không cần tải lại trang).
  * Nếu **Buộc thời lượng khác nhau** bị tắt trên trường Bảng giá, sản phẩm không có biến thể giá cho kỳ đã chọn sẽ bị ẩn.
  * Nếu **Buộc thời lượng khác nhau** được bật, tất cả sản phẩm vẫn hiển thị ngay cả khi chúng không có biến thể cho kỳ đã chọn (chúng sẽ hiển thị giá mặc định).

#### Chọn trước một kỳ thanh toán qua URL {#pre-selecting-a-billing-period-via-url}

Bạn cũng có thể chọn trước một sản phẩm và kỳ thanh toán thông qua URL. Ultimate Multisite hỗ trợ các mẫu URL sau:

  * `/register/premium` — Chỉ chọn trước sản phẩm "Premium"
  * `/register/premium/12` — Chọn trước sản phẩm và thời lượng 12 tháng
  * `/register/premium/1/year` — Chọn trước sản phẩm với thời lượng 1 năm

### Trường chọn mẫu {#the-template-selection-field}

Trường **Chọn mẫu** cho phép khách hàng chọn một mẫu trang trong khi checkout. Trường này hiện được bao gồm theo mặc định trong các mẫu biểu mẫu checkout **một bước** và **nhiều bước** được thêm trong Ultimate Multisite v2.6.1.

#### Thêm trường thủ công {#adding-the-field-manually}

Nếu bạn đang làm việc với một biểu mẫu được tạo trước v2.6.1, hoặc bắt đầu từ một mẫu trống:

1. Đi tới **Ultimate Multisite > Biểu mẫu checkout** và chỉnh sửa biểu mẫu checkout của bạn.
2. Trong bước thu thập thông tin chi tiết về trang, nhấp **Thêm trường mới**.
3. Chọn **Chọn mẫu** từ hộp thoại loại trường.
4. Cấu hình trường:
   - **Nhãn** — Tiêu đề khách hàng thấy phía trên lưới mẫu (ví dụ: "Chọn một mẫu trang").
   - **Bắt buộc** — Khách hàng có phải chọn một mẫu trước khi tiếp tục hay không.

#### Cách hoạt động {#how-it-works}

Khi khách hàng chọn một mẫu trong khi checkout, Ultimate Multisite sử dụng mẫu đó khi cung cấp trang mới của họ. Các mẫu hiển thị đến từ danh sách **Mẫu trang** của bạn (**Ultimate Multisite > Mẫu trang**). Chỉ những mẫu được đánh dấu là khả dụng cho khách hàng mới xuất hiện ở đây.

### Miền cơ sở của biểu mẫu checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 xem các miền được cấu hình trên trường **URL trang** của biểu mẫu checkout là miền cơ sở mạng. Sử dụng cài đặt miền khả dụng của trường khi bạn muốn khách hàng tạo trang dưới một hoặc nhiều miền đăng ký dùng chung, chẳng hạn như `example.com` và `sites.example.com`.

Các tên miền cơ sở checkout-form dùng chung không được xem là các ánh xạ tên miền tùy chỉnh theo từng site. Khi khách hàng tạo một site thư mục con trên một trong các tên miền cơ sở đó, Ultimate Multisite không tạo bản ghi tên miền được ánh xạ khiến máy chủ dùng chung chỉ thuộc về riêng site đó. Máy chủ dùng chung vẫn có sẵn cho các site cùng cấp sử dụng cùng tên miền cơ sở checkout form.

Giữ các tên miền tùy chỉnh cho các máy chủ được ánh xạ theo từng khách hàng, chẳng hạn như `customer-example.com`. Giữ các tên miền cơ sở checkout-form cho các máy chủ đăng ký dùng chung mà nhiều site có thể sử dụng.

#### Xóa trường {#removing-the-field}

Nếu bạn không cung cấp mẫu site, hãy xóa trường Template Selection khỏi biểu mẫu của bạn. Khi đó khách hàng sẽ nhận bất kỳ mẫu mặc định nào được cấu hình trong **Ultimate Multisite > Settings > Site Templates**.
