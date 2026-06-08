---
title: Nhật ký thay đổi của Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Nhật ký thay đổi của Admin Page Creator

### Phiên bản 1.9.0 - Phát hành ngày 2026-01-18

* Sửa: Khắc phục lỗi nghiêm trọng khi kích hoạt.
* Tái cấu trúc: Các lớp nguồn nội dung sử dụng Singleton trait với việc khởi tạo constructor của lớp cha đúng cách.
* Sửa: Khắc phục lỗi biên dịch template Vue.js, ngăn việc chọn loại nội dung (content type selector) hiển thị.
* Sửa: Khắc phục các thuộc tính dữ liệu Vue bị thiếu (template_id, external_link_url_embedable, external_link_url_checking).
* Sửa: Khắc phục trình soạn thảo TinyMCE không khởi tạo đúng cách khi tải trang.
* Sửa: Khắc phục file hỗ trợ Divi không được tự động tải qua Composer.
* Sửa: Khắc phục cú pháp PHP bị hỏng trong lớp hỗ trợ Divi.
* Cải thiện: Tổ chức và thu gọn (minification) tài sản JavaScript.
* Cải thiện: Tăng khả năng tương thích với các phiên bản WordPress và page builder mới nhất.

= Phiên bản: 1.8.8 - Phát hành ngày 2025-09-28

* Đổi tiền tố thành ultimate-multisite; cập nhật text domain; tăng phiên bản.

### Phiên bản 1.8.7 - 04/10/2023

* Sửa: Lỗi nghiêm trọng khi cố gắng thêm trang quản trị mới;
* Sửa: Khắc phục xung đột với tiền tố (prefix) của stylesheet Oxygen;

### Phiên bản 1.8.6 - 09/08/2023

* Bổ sung: Thêm tùy chọn hiển thị dữ liệu từ trang chính (main site) hoặc trang con hiện tại (sub-site).
* Bổ sung: Hỗ trợ Trình soạn thảo Block của WordPress (Gutenberg).
* Sửa: Khắc phục sự cố tài sản (assets) của trang Brizy không tải được.

### Phiên bản 1.8.5 - 09/12/2020

* Sửa: Sự cố với Screen Options khi ẩn menu không biến mất;

### Phiên bản 1.8.4 - 11/11/2020

* Sửa: Hỗ trợ Ultimate Multisite v2;

### Phiên bản 1.8.3 - 01/10/2020

* Sửa: Các điểm không tương thích với Beaver Builder từ bản dựng trước;
* Sửa: Các vấn đề về khoảng cách (margin) với WP 5.5;

### Phiên bản 1.8.2 - 21/09/2020

* Sửa: Các điểm không tương thích nhỏ với WP 5.5;

### Phiên bản 1.8.1 - 05/08/2020

* Sửa: Không tương thích với Brizy 2.0;
* Sửa: Các vấn đề hiệu suất nhỏ khi xây dựng danh sách menu;

### Phiên bản 1.8.0 - 27/04/2020

* Sửa: Thông báo (Notices) bị ẩn dưới thanh trên cùng khi không chọn chế độ margin;
* Bổ sung: Các trang tùy chỉnh giờ đây có thể thay thế nhiều trang cấp cao và trang con của WordPress cùng lúc;
* Bổ sung: Quản trị viên giờ đây có thể ẩn các trang quản trị bằng WP Admin Pages PRO;

### Phiên bản 1.7.9 - 01/04/2020

* Sửa: Brizy 1.10.118 trở lên làm hỏng hỗ trợ SVG trên các trang quản trị;

### Phiên bản 1.7.8 - 26/03/2020

* Sửa: Lỗi thoát (Escaping error) làm hỏng trang Editor khi sử dụng tiếng Pháp;

### Phiên bản 1.7.7 - 04/03/2020

* Sửa: Điểm không tương thích nhỏ với Brizy Builder;
* Cải thiện: Cập nhật Freemius SDK lên 2.3.2;

### Phiên bản 1.7.6 - 10/02/2020

* Sửa: Nút chỉnh sửa (edit button) trang quản trị ở góc dưới bên phải không hoạt động trên Dashboard Widgets;
* Sửa: Điểm không tương thích nhỏ với Astra;
* Sửa: Phiên bản mới của Brizy làm hỏng khả năng tương thích;

### Phiên bản 1.7.5 - 14/12/2019

* Sửa: Thêm bộ xử lý trường hợp biên (edge-case handler) mới để điền các mục menu trong tùy chọn Thay thế Trang (Replace Page);
* Sửa: Font Elementor không hoạt động;
* Cải thiện: Cập nhật Freemius SDK để hỗ trợ ẩn thông tin nhạy cảm khỏi trang Account;

### Phiên bản 1.7.4 - 29/11/2019

* Sửa: Không tương thích với WooCommerce Memberships;
* Sửa: Thành phần tab Oxygen Builder không hoạt động;
* Sửa: Beaver Themer không hoạt động;

### Phiên bản 1.7.3 - 12/07/2019

* Sửa: Các trang biến mất khi trang cha của chúng được chuyển thành một loại trang quản trị khác;
* Cải thiện: Các đường phân cách (dividers) danh sách bảng tốt hơn giữa các loại Admin Page;
* Cải thiện: Xem xét bảo mật toàn bộ codebase của plugin;
* Cải thiện: Lưu ý về cảnh báo tab Separator khi tính năng này không khả dụng cho một loại nguồn nội dung/menu nhất định;

### Phiên bản 1.7.2 - 01/07/2019

* Sửa: Cập nhật phiên bản Freemius SDK lên 2.3.0;
* Sửa: Vấn đề không tương thích với Flywheel;

### Phiên bản 1.7.1 - 27/06/2019

* Sửa: Widget Chào mừng (Welcome Widget) hiện được hiển thị cho tất cả các vai trò (roles);
* Sửa: Tùy chọn màn hình (Screen Option) để ẩn/hiện menu Admin Pages sẽ không được thêm vào nếu menu đó đang bị ẩn thông qua bộ lọc được ghi tài liệu tại https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Cải thiện: Việc ẩn menu Admin Pages giờ đây cũng ẩn các template được tạo từ danh sách template đã lưu của Beaver Builder trên giao diện builder;
* Bổ sung: Tùy chọn kích hoạt và vô hiệu hóa hàng loạt các trang quản trị;
* Bổ sung: Tùy chọn hiển thị các trang trên trang chính (main site) nữa;
* Bổ sung: Tùy chọn đổi tên nhãn menu cấp cao và cấp con trong chế độ Replace.

### Phiên bản 1.7.0 - 04/06/2019

* Sửa: Sự cố với các template Oxygen không hiển thị;
* Bổ sung: Hỗ trợ Tạo Widget!

### Phiên bản 1.6.1 - 22/05/2019

* Sửa: Lỗi chính tả;
* Sửa: Các trang con ghi đè các mục con trước đó có cùng giá trị thứ tự;
* Sửa: Tính năng nhân bản (Duplication) giờ đây đặt lại slug của trang được nhân bản;
* Cải thiện: Cập nhật các file po_BR và es_ES;
* Cải thiện: Danh sách bảng giờ đây liệt kê tên của các trang tùy chỉnh như các trang cha.

### Phiên bản 1.6.0 - 21/05/2019

* Bổ sung: Liên kết ngoài (External Links) giờ đây hỗ trợ tải iframe.

### Phiên bản 1.5.5 - 17/05/2019

* Sửa: Thông báo cảnh báo được phát ra khi một trang bị xóa hoặc nhân bản;
* Sửa: Cài đặt quyền (Permission settings) không được áp dụng cho Quản trị viên (Admins);

### Phiên bản 1.5.4 - 08/05/2019

* Sửa: Không tương thích với Sliced Invoices;
* Sửa: Sự cố nhỏ với Oxygen;
* Sửa: Placeholder trên trường tiêu đề trang quản trị mới không biến mất khi gõ phím (key-up);

### Phiên bản 1.5.3 - 03/05/2019

* Sửa: Không tương thích với các trang tùy chọn của Advanced Custom Field;
* Bổ sung: Tùy chọn thêm người dùng cụ thể làm mục tiêu của các trang quản trị tùy chỉnh;

### Phiên bản 1.5.2 - 30/04/2019

* Sửa: Không tương thích với các phiên bản Brizy mới hơn;
* Bổ sung: Thêm bản dịch tiếng Tây Ban Nha - nhờ John Rozzo. Cảm ơn John!
* Bổ sung: Hỗ trợ Beta cho Oxygen Builder;

### Phiên bản 1.5.1 - 15/04/2019

* Sửa: Sự cố với placeholder trên trình soạn thảo Normal và HTML;
* Sửa: Admin Pages không hiển thị trong Tools -> Export;
* Sửa: Chỉ tải scripts và styles trên các trang của chúng ta;
* Bổ sung: Super Admins giờ đây có thể nhân bản Admin Pages;

### Phiên bản 1.5.0 - 29/03/2019

* Sửa: Các lỗi nhỏ được Sentry phát hiện;
* Sửa: Nút Xóa (Delete button) không hoạt động trên màn hình chỉnh sửa Admin Page;
* Cải thiện: Đã thay đổi nút BeaverBuilder để làm rõ rằng giấy phép Standard BB cũng được hỗ trợ;
* Bổ sung: Quản trị viên cũng có thể đặt thứ tự của các menu con;
* Bổ sung: Chế độ Replace page giờ đây hỗ trợ tất cả các mục menu có sẵn;

### Phiên bản 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Bổ sung: Ra mắt dưới dạng plugin Stand-alone tại https://wpadminpagespro.com
* Bổ sung: Tùy chọn loại bỏ mục menu Admin Pages khỏi menu sau khi quá trình tạo trang hoàn tất;
* Bổ sung: Tùy chọn loại bỏ thông báo quản trị (admin notices) khỏi các trang quản trị;
* Bổ sung: Xử lý nội dung, cho phép bạn đặt các placeholder như {{user:first_name}} và hệ thống sẽ tự động thay thế bằng trường meta first_name của người dùng;
* Bổ sung: Trình soạn thảo Inline (Inline Editor);
* Bổ sung: Lớp cha nguồn nội dung được hợp nhất để việc thêm các Page Builder/Nguồn Nội dung mới trong tương lai trở nên dễ dàng;
* Bổ sung: Hỗ trợ URL ngoài (External URLs);

### Phiên bản 1.3.0 - 15/01/2019

* Sửa: Admin Pages không xuất hiện trên trang chính (main-site) trong môi trường multisite;
* Cải thiện: Loại bỏ các loại bài viết tùy chỉnh Multisite Ultimate khỏi màn hình export của các trang con;
* Bổ sung: Thanh trên cùng với các hành động nhanh cho quản trị viên mạng (network admins) trên các trang tạo;
* Bổ sung: LỚN! Hỗ trợ Elementor!
* Bổ sung: LỚN! Hỗ trợ Brizy!

### Phiên bản 1.2.1 - 17/11/2018

* Sửa: Giúp plugin tương thích với Multisite Ultimate 1.9.0;

### Phiên bản 1.2.0 - 10/09/2018

* Bổ sung: Hỗ trợ PHP được thêm vào nếu WU_APC_ALLOW_PHP_PROCESSING được đặt thành true trong wp-config.php. Điều này không sử dụng eval của PHP, nhưng vẫn có thể dẫn đến lỗ hổng bảo mật. Hãy sử dụng cẩn thận;
* Cải thiện: Trình cập nhật plugin add-on;
* Cải thiện: URL mới cho máy chủ cập nhật;

### Phiên bản 1.1.2 - 16/08/2018

* Sửa: Sự cố nhỏ với WP Engine;

### Phiên bản 1.1.1 - 16/08/2018

* Sửa: Quyền không được áp dụng chính xác cho các trang thay thế;

### Phiên bản 1.1.0 - 15/08/2018

* Bổ sung: Templates Beaver Builder hiện đã được hỗ trợ! Bạn có thể sử dụng page builder yêu thích của mình để tạo các trang quản trị tùy chỉnh;
* Bổ sung: Giờ đây có thể thay thế nội dung của các trang quản trị mặc định của WordPress;
* Bổ sung: Giờ đây cũng có thể thêm nội dung được tạo vào đầu hoặc cuối các trang quản trị mặc định của WordPress;

### 0.0.1
- Phát hành ban đầu
