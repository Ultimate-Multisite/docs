---
title: Nhật ký thay đổi Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Nhật ký thay đổi Captcha

Phiên bản: 1.5.0 - Phát hành ngày 2026-05-22
* Mới: Bộ giới hạn tốc độ dừng cứng (Hard-stop rate limiter) — đếm mọi yêu cầu GET và POST trên các khu vực được bảo vệ bằng captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) và phản hồi bằng HTTP 429, tiêu đề `Retry-After`, và một độ trễ ngẫu nhiên (tarpit sleep) (1–5 giây, tối đa 15 giây).
* Mới: Cài đặt `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` để điều chỉnh khoảng thời gian độ trễ (tarpit window).
* Mới: Bộ lọc `wu_cap_rate_limit_whitelist_ip` để miễn trừ các dải IP đáng tin cậy.
* Mới: Hành động `wu_cap_rate_limit_will_block` được kích hoạt ngay trước khi phản hồi dừng cứng được gửi đi.
* Mới: Phát hiện IP máy khách chống giả mạo (Spoof-resistant client-IP detection). Hàm `Captcha_Core::get_client_ip()` (nguồn chân lý cho các khóa bucket giới hạn tốc độ, captcha siteverify `remoteip`, và các hash IP thống kê) hiện thực thi một mô hình tin cậy nghiêm ngặt: `REMOTE_ADDR` là mức cơ bản, `CF-Connecting-IP` chỉ được tôn trọng khi peer trực tiếp nằm trong dải IP Cloudflare hiện tại, và `X-Forwarded-For` chỉ được tôn trọng khi peer trực tiếp nằm trong danh sách proxy đáng tin cậy đã được cấu hình trong admin, với cơ chế duyệt từ phải sang trái, bỏ qua các bước nhảy của Cloudflare/proxy đáng tin cậy trước khi xác định IP của người truy cập.
* Mới: Cài đặt `cap_trust_cloudflare_headers` (mặc định TẮT) — cho phép tin cậy `CF-Connecting-IP` khi hoạt động phía sau Cloudflare. Plugin đi kèm một bản chụp nhanh (snapshot) CIDR của Cloudflare và làm mới nó hàng tuần qua wp-cron với cơ chế dự phòng đi kèm nếu việc làm mới thất bại.
* Mới: Cài đặt `cap_trusted_proxies` — một khu vực văn bản (textarea) chứa các CIDR hoặc IP thuần (mỗi dòng một, cho phép comment bằng `#`) liệt kê các proxy/load-balancer tuyến đầu của bạn. Nếu không có cài đặt này, `X-Forwarded-For` sẽ bị bỏ qua ngay cả khi bộ giới hạn tốc độ được bật.
* Mới: Tự động phát hiện lần đầu tiên về trạng thái Cloudflare/proxy có khả năng xảy ra với thông báo admin "Áp dụng cài đặt đã phát hiện" chỉ bằng một cú nhấp chuột. Plugin sẽ không bao giờ ghi đè các giá trị đã lưu của bạn; nếu lưu lượng truy cập sau này cho thấy cấu hình của bạn không còn khớp với thực tế (ví dụ: Cloudflare thay đổi dải CIDR và CIDR proxy của bạn đã lỗi thời), một thông báo không thể bỏ qua sẽ hiển thị đề xuất cập nhật.
* Sửa: Chế độ ẩn (Invisible mode) không còn tự động hạ cấp `cap_security_level` xuống FAST — cấp độ được cấu hình trong admin sẽ được tôn trọng. Một bộ lọc `wu_cap_server_security_level` mới có sẵn cho các trang web muốn logic tùy chỉnh.
* Sửa: Bộ đếm thống kê `rate_limits_triggered` hiện tăng lên mỗi khi bị chặn, chứ không chỉ trên đường dẫn dự phòng hiếm gặp sau khi thành công.
* Sửa: `Captcha_Core::get_client_ip()` hiện là nguồn chân lý duy nhất để xác định IP người truy cập trên toàn bộ các thành phần: bộ giới hạn tốc độ, các nhà cung cấp captcha (reCAPTCHA + hCaptcha `siteverify`), và thống kê — giúp đóng lỗ hổng giả mạo, nơi các yêu cầu trực tiếp từ origin-server mang tiêu đề `CF-Connecting-IP` giả mạo có thể bị tính vào bucket của IP giả mạo thay vì peer thực.
* Sửa: Cổng giới hạn tốc độ thanh toán cổ điển của WooCommerce hiện kích hoạt trên `template_redirect` (ưu tiên 1) thay vì `woocommerce_before_checkout_form`. Hook cấp độ form không bao giờ kích hoạt khi giỏ hàng trống, vì vậy lưu lượng truy cập giả mạo không thêm sản phẩm nào đã bỏ qua bộ giới hạn này hoàn toàn.
* Sửa: Cổng giới hạn tốc độ thanh toán theo đơn hàng của WooCommerce hiện kích hoạt trên `template_redirect` thay vì `woocommerce_before_pay_action`. Cái sau chỉ kích hoạt sau khi `wp_verify_nonce('woocommerce-pay')` thành công, nghĩa là những kẻ tấn công chưa xác thực (mô hình mối đe dọa thực tế) không bao giờ kích hoạt bộ giới hạn này.
* Sửa: Cổng giới hạn tốc độ thanh toán WooCommerce Store API (blocks) hiện kích hoạt trên `rest_pre_dispatch` thay vì `woocommerce_store_api_checkout_update_order_from_request`. Cái sau chỉ kích hoạt sau khi Store API xác thực giỏ hàng và các trường thanh toán, vì vậy các bot chưa xác thực đã nhận mã 400 từ bộ xác thực và không bao giờ làm tăng bộ giới hạn.
* Sửa: Cổng giới hạn tốc độ đăng nhập inline của Ultimate Multisite hiện kích hoạt trên `wu_ajax_nopriv_wu_inline_login` ưu tiên 1 (và bản sao cho người đã đăng nhập) thay vì `wu_before_inline_login`. Cái sau chỉ kích hoạt sau khi `check_ajax_referer('wu_checkout')` thành công, vì vậy các bot chưa xác thực không có nonce `wu_checkout` hợp lệ đã nhận mã 403 và không bao giờ làm tăng bộ giới hạn.
* Sửa: `Rate_Limiter::enforce()` hiện áp dụng một lớp bảo vệ chỉ một lần cho mỗi yêu cầu, được khóa bằng `surface|ip`, vì vậy các hook thượng nguồn kích hoạt hai lần mỗi lần render (đáng chú ý là `wu_setup_checkout` trong Ultimate Multisite) không còn làm giảm một nửa ngưỡng giới hạn tốc độ hiệu quả.
* Sửa: Các cổng giới hạn tốc độ không còn tham khảo `Captcha_Core::is_whitelisted()` (bộ lọc `wu_captcha_whitelisted`). Bộ lọc này báo hiệu "captcha đã được xử lý bởi một khu vực khác" và là độc lập với việc bảo vệ lũ lụt — tích hợp WooCommerce đã móc nó để bỏ qua captcha đăng nhập WordPress khi có nonce Woo, điều này đã ảnh hưởng đến việc đếm tốc độ và cho phép các POST của Woo tránh bộ giới hạn. Bộ lọc `wu_cap_rate_limit_whitelist_ip` dành riêng cho giới hạn tốc độ là cơ chế bỏ qua duy nhất hiện áp dụng.

Phiên bản: 1.3.2 - Phát hành ngày 2026-01-27
* Sửa: Widget Cap không hiển thị trên các form thanh toán sử dụng Elementor hoặc các page builder khác
* Sửa: Element tùy chỉnh cap-widget bị loại bỏ bởi việc làm sạch (sanitization) của wp_kses()
* Cải tiến: Sử dụng nội dung có thể gọi (callable content) cho trường captcha thanh toán để vượt qua bộ lọc HTML
* Cải tiến: Đơn giản hóa JavaScript với cơ chế dự phòng cho các trường hợp ngoại lệ

Phiên bản: 1.3.1 - Phát hành ngày 2026-01-26
* Sửa: Chế độ ẩn Captcha không tự động giải quyết trên các form thanh toán Ultimate Multisite động
* Cải tiến: Script thanh toán Cap hiện sử dụng MutationObserver để phát hiện các widget được tải động
* Cải tiến: Thêm việc chặn nút thanh toán để chờ token trước khi gửi

Phiên bản: 1.3.0 - Phát hành ngày 2026-01-27
* Mới: Tích hợp thanh toán WooCommerce Blocks với việc chặn truy vấn Store API
* Mới: Hỗ trợ captcha ẩn cho thanh toán WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Mới: Trang cài đặt độc lập để sử dụng mà không cần Ultimate Multisite
* Mới: Jetpack Autoloader để ngăn ngừa xung đột dependency
* Sửa: hCaptcha không hiển thị trên thanh toán Ultimate Multisite động (nội dung tải bằng AJAX)
* Sửa: Captcha không làm mới/reset khi xảy ra lỗi xác thực form
* Sửa: hCaptcha không hiển thị trên trang thanh toán WooCommerce
* Sửa: Lỗi không tìm thấy class reCAPTCHA (đã thêm thư viện PHP google/recaptcha)
* Cải tiến: Phát hiện lỗi thông qua các hook của WordPress, MutationObserver và AJAX interception
* Cải tiến: Mô tả cài đặt hiện bao gồm các URL dashboard cho các khóa API

Phiên bản: 1.2.2 - Phát hành ngày 2026-01-24
* Sửa: Captcha không hiển thị trên Element Form Đăng nhập Ultimate Multisite (tên filter form không khớp)
* Sửa: HTML của widget Cap bị loại bỏ bởi việc làm sạch (sanitization) của wp_kses()
* Sửa: Bộ chọn JavaScript không tìm thấy các form có dấu gạch chéo trong ID phần tử
* Thêm: Hook filter `wu_kses_allowed_html` cho classaddons để mở rộng các thẻ HTML được phép
* Loại bỏ: Các tệp JavaScript mã chết được thay thế bằng các script dành riêng cho nhà cung cấp

Phiên bản: 1.2.1 - Phát hành ngày 2026-01-23

* Sửa: Xác thực token Captcha thất bại trong môi trường multisite (bây giờ sử dụng transients toàn mạng)
* Sửa: Captcha hiện hiển thị nhất quán cho tất cả người dùng bất kể trạng thái đăng nhập
* Sửa: Sự không khớp giữa việc hiển thị và xác thực captcha đã gây ra lỗi thanh toán

Phiên bản: 1.2.0 - Phát hành ngày 2026-01-21

* Mới: Cap Captcha - captcha bằng chứng công việc (proof-of-work) tự lưu trữ, bật mặc định khi kích hoạt
* Mới: Bảo vệ cấu hình bằng không - kích hoạt addon và bạn được bảo vệ ngay lập tức
* Mới: Kiến trúc nhà cung cấp captcha đa hình (Polymorphic) để dễ dàng mở rộng
* Mới: Bảo vệ thanh toán WooCommerce Store API chống lại các cuộc tấn công kiểm tra thẻ (card testing)
* Mới: Bảng điều khiển theo dõi thống kê hiển thị các thử thách, xác minh và các cuộc tấn công bị chặn
* Mới: Các thiết lập sẵn mức độ bảo mật (Fast, Medium, Max) cho độ khó của Cap Captcha
* Mới: Các lớp cơ sở trừu tượng cho các nhà cung cấp reCAPTCHA và hCaptcha
* Cải tiến: Tái cấu trúc codebase thành các lớp nhà cung cấp module
* Cải tiến: Tách biệt mối quan tâm tốt hơn với lớp quản lý chuyên dụng
* Sửa: Cải thiện bảo mật cho việc làm sạch biến $_SERVER
* Sửa: Cấu hình kiểm thử PHPUnit cho quy ước đặt tên của WordPress

Phiên bản: 1.0.1 - Phát hành ngày 2025-09-28

* Đổi tiền tố thành ultimate-multisite; cập nhật text domain; tăng phiên bản.
