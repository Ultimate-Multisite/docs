---
title: Đoạn mã
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Đoạn mã cho v2

Về cơ bản, đoạn mã cho **WordPress** được dùng để thực hiện các tác vụ nhất định mà nếu không có chúng, bạn sẽ cần một plugin nhỏ riêng biệt. Các đoạn mã này được đặt trong một trong các file lõi của WordPress hoặc file theme (thường là file functions.php của theme bạn đang dùng), hoặc có thể được sử dụng như một MU plugin.

Trong bài viết này, chúng tôi sẽ hướng dẫn bạn ba đoạn mã có thể sử dụng với **Ultimate Multisite v2**:

  * [**Thay đổi vị trí mục menu Tài khoản**](#changing-the-position-of-the-account-menu-item)

  * [**Cách kiểm tra xem người dùng có thuộc gói nào đó và/hoặc có đăng ký đang hoạt động hay không**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Khắc phục lỗi CORS với Font-Icons trên domain được ánh xạ**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Thay đổi vị trí mục menu Tài khoản

Để thay đổi vị trí mục menu Tài khoản trên Dashboard của khách hàng, bạn chỉ cần thêm đoạn mã sau vào file functions.php của theme đang kích hoạt trên site chính. Bạn cũng có thể đặt đoạn mã này trong một trong các mu-plugins hoặc plugin tùy chỉnh của bạn.

add_filter('wu_my_account_menu_position', function() { return 10; // Điều chỉnh giá trị này để đặt menu ở vị trí mong muốn.

## Cách kiểm tra xem người dùng có thuộc gói nào đó và/hoặc có đăng ký đang hoạt động hay không

Với vai trò quản trị viên mạng, bạn có thể cần tạo các hàm tùy chỉnh để thực hiện các tác vụ cơ bản hoặc cung cấp dịch vụ/tính năng cho một nhóm người đăng ký hoặc người dùng cuối được chọn, dựa trên trạng thái đăng ký và gói mà họ đang sử dụng.

Các hàm tích hợp sẵn của Ultimate Multisite sau đây sẽ giúp bạn làm điều đó.

Để kiểm tra xem người dùng có thuộc một gói cụ thể hay không, bạn có thể sử dụng hàm:

wu_has_plan($user_id, $plan_id)

Để kiểm tra xem đăng ký có đang hoạt động hay không, bạn có thể sử dụng hàm:

wu_is_active_subscriber($user_id)

Dưới đây là ví dụ đoạn mã kiểm tra xem người dùng hiện tại có thuộc một gói cụ thể (_Plan ID 50_) và đăng ký của họ có đang hoạt động hay không.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // NGƯỜI DÙNG LÀ THÀNH VIÊN CỦA GÓI VÀ ĐĂNG KÝ ĐANG HOẠT ĐỘNG, THỰC HIỆN TÁC VỤ} else { // NGƯỜI DÙNG KHÔNG THUỘC GÓI -- HOẶC -- ĐĂNG KÝ KHÔNG HOẠT ĐỘNG, THỰC HIỆN TÁC VỤ KHÁC} // end if;

Lưu ý rằng _**wu_has_plan**_ yêu cầu một "Plan ID" để có thể hoạt động.

Để lấy ID của một gói, bạn có thể vào **Ultimate Multisite > Products**. ID của mỗi sản phẩm sẽ được hiển thị ở bên phải bảng.

Lưu ý rằng người dùng chỉ có thể đăng ký một **Plan**, không phải Package hay Service, vì chúng chỉ là tiện ích bổ sung cho một **Plan**.

![Danh sách sản phẩm hiển thị ID của các gói](/img/admin/products-list.png)

## Khắc phục lỗi CORS với Font-Icons trên domain được ánh xạ
## Khắc phục lỗi CORS với Font-Icons trên domain được ánh xạ

Sau khi ánh xạ domain tới một sub-site, bạn có thể thấy site gặp vấn đề khi tải font tùy chỉnh. Nguyên nhân là do máy chủ của bạn chặn cross-origin trong cài đặt.

Vì các file font hầu như luôn được tải trực tiếp từ CSS, plugin ánh xạ domain của chúng tôi không thể viết lại URL để sử dụng domain đã ánh xạ thay vì domain gốc, vì vậy để khắc phục vấn đề này, bạn cần chỉnh sửa file cấu hình máy chủ.

Dưới đây là các đoạn mã để khắc phục vấn đề cho Apache và NGINX. Những thay đổi này yêu cầu kiến thức nâng cao về file cấu hình máy chủ (file .htaccess và file cấu hình NGINX). Nếu bạn không tự tin thực hiện những thay đổi này, hãy gửi trang này cho đội ngũ hỗ trợ của nhà cung cấp hosting khi yêu cầu trợ giúp.

### Apache

Trong file .htaccess của bạn, thêm:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Trong file cấu hình máy chủ (vị trí khác nhau tùy theo máy chủ), thêm:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
