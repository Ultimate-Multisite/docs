---
title: Biểu mẫu thanh toán
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Biểu mẫu thanh toán

Biểu mẫu thanh toán là cách dễ dàng và linh hoạt để thử nghiệm các phương pháp khác nhau khi bạn muốn chuyển đổi khách hàng mới.

Ultimate Multisite 2.0 cung cấp trình soạn thảo biểu mẫu thanh toán cho phép bạn tạo bao nhiêu biểu mẫu tùy thích, với các trường khác nhau, sản phẩm được chào bán khác nhau, v.v.

Để truy cập tính năng này, vào menu Checkout Forms ở thanh bên trái.

![Danh sách biểu mẫu thanh toán](/img/config/checkout-forms-list.png)

Trên trang này, bạn có thể xem tất cả các biểu mẫu thanh toán mà bạn đã có.

Nếu muốn tạo biểu mẫu mới, chỉ cần nhấp vào Add Checkout Form ở đầu trang.

Bạn có thể chọn một trong ba tùy chọn làm điểm bắt đầu: một bước, nhiều bước hoặc trống. Sau đó, nhấp vào Go to the Editor.

![Trình soạn thảo biểu mẫu thanh toán](/img/config/checkout-form-editor.png)

Ngoài ra, bạn có thể chỉnh sửa hoặc nhân bản các biểu mẫu đã có bằng cách nhấp vào các tùy chọn bên dưới tên biểu mẫu. Ở đó, bạn cũng sẽ tìm thấy tùy chọn sao chép shortcode của biểu mẫu hoặc xóa biểu mẫu.

![Các thao tác khi di chuột vào biểu mẫu thanh toán](/img/config/checkout-form-hover-actions.png)

### Chỉnh sửa biểu mẫu thanh toán

Bạn có thể tạo biểu mẫu thanh toán cho nhiều mục đích khác nhau. Trong ví dụ này, chúng ta sẽ làm việc với biểu mẫu đăng ký.

Sau khi vào trình soạn thảo biểu mẫu thanh toán, đặt tên cho biểu mẫu (chỉ dùng để tham khảo nội bộ) và slug (dùng để tạo shortcode, v.v.).

![Trình soạn thảo biểu mẫu thanh toán](/img/config/checkout-form-editor.png)

Biểu mẫu được tạo thành từ các bước và trường. Bạn có thể thêm bước mới bằng cách nhấp vào Add New Checkout Step.

![Thêm bước thanh toán mới](/img/config/checkout-form-add-step.png)

Ở tab đầu tiên của cửa sổ modal, điền nội dung cho bước của biểu mẫu. Đặt ID, tên và mô tả. Các mục này chủ yếu được sử dụng nội bộ.

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

Tiếp theo, thiết lập chế độ hiển thị của bước. Bạn có thể chọn giữa "Luôn hiển thị", "Chỉ hiển thị cho người dùng đã đăng nhập" hoặc "Chỉ hiển thị cho khách".

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

Cuối cùng, cấu hình kiểu dáng của bước. Đây là các trường tùy chọn.

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

Bây giờ, đã đến lúc thêm các trường vào bước đầu tiên. Chỉ cần nhấp vào Add New Field và chọn loại phần bạn muốn.

![Bước biểu mẫu thanh toán với các trường](/img/config/checkout-form-step.png)

Mỗi trường có các tham số khác nhau cần điền. Với mục đầu tiên này, chúng ta sẽ chọn trường "Username".

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

![Bước biểu mẫu thanh toán](/img/config/checkout-form-step.png)

Bạn có thể thêm bao nhiêu bước và trường tùy ý. Để hiển thị sản phẩm cho khách hàng chọn, hãy sử dụng trường Pricing Table. Nếu muốn cho khách hàng chọn template, hãy thêm trường Template Selection. Và cứ tiếp tục như vậy.

_**Lưu ý:** username, email, password, site title, site URL, order summary, payment và submit button là các trường bắt buộc để tạo biểu mẫu thanh toán._

Trong khi làm việc với biểu mẫu thanh toán, bạn luôn có thể sử dụng nút Preview để xem khách hàng sẽ nhìn thấy biểu mẫu như thế nào. Bạn cũng có thể chuyển đổi giữa chế độ xem như người dùng hiện có hoặc khách.

![Lưu biểu mẫu thanh toán](/img/config/checkout-form-save.png)

![Trình soạn thảo biểu mẫu thanh toán](/img/config/checkout-form-editor.png)

Cuối cùng, trong Advanced Options, bạn có thể cấu hình thông báo cho trang "Cảm ơn", thêm đoạn mã để theo dõi chuyển đổi, thêm CSS tùy chỉnh cho biểu mẫu thanh toán hoặc giới hạn biểu mẫu cho một số quốc gia nhất định.

![Tùy chọn nâng cao](/img/config/checkout-form-advanced.png)

Bạn cũng có thể bật hoặc tắt biểu mẫu thanh toán theo cách thủ công bằng cách chuyển đổi tùy chọn này ở cột bên phải, hoặc xóa vĩnh viễn biểu mẫu.

![Nút bật/tắt trạng thái hoạt động](/img/config/checkout-form-active.png)

Đừng quên lưu biểu mẫu thanh toán của bạn!

![Nút lưu](/img/config/checkout-form-save.png)

Để lấy shortcode của biểu mẫu, nhấp vào Generate Shortcode và sao chép kết quả hiển thị trong cửa sổ modal.

![Nút lưu với shortcode](/img/config/checkout-form-save.png)
