---
title: Đa thuê Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Đa thuê (Multi-Tenancy) của Hostinger

Ultimate Multisite: Multi-Tenancy phiên bản 1.2.0 đã bổ sung tính năng đa thuê của Hostinger, cho phép các tên miền được lưu trữ tham gia vào việc cấp phát tenant chủ quyền (sovereign tenant provisioning) song song với tích hợp ánh xạ tên miền (domain-mapping integration) hiện có của Hostinger.

Sử dụng tính năng này khi tên miền của khách thuê và cơ sở hạ tầng khách thuê được quản lý thông qua hPanel của Hostinger.

## Ghi chú cài đặt {#setup-notes}

1. Cấu hình tích hợp Hostinger cốt lõi trong **Ultimate Multisite > Settings > Host Integrations**.
2. Xác nhận rằng mã API của Hostinger có thể quản lý tên miền hoặc tên miền phụ mục tiêu.
3. Bật addon Đa người thuê (Multi-Tenancy).

4. Cấu hình chiến lược cô lập tenant trước khi xuất bản tenant.
5. Chạy quy trình xác minh di chuyển (migration verification workflow) trước khi gửi lưu lượng truy cập sản xuất đến tenant.

Khả năng của Hostinger sử dụng kết nối Hostinger chia sẻ cho các thao tác phía máy chủ. Tuy nhiên, DNS vẫn phải trỏ đến tài khoản Hostinger chính xác và giới hạn tài khoản hPanel vẫn được áp dụng.

## Thay đổi cụ thể theo từng khả năng {#capability-specific-changes}

Có thể tạo các tenant chủ quyền (Sovereign tenants) bằng cách sử dụng các thao tác tên miền nhận biết máy chủ (host-aware domain operations).
Các chuỗi host cơ sở dữ liệu trên cùng một máy sẽ được chuẩn hóa trước khi xác minh cấp quyền.

Các tenant được quản lý bởi Hostinger nên sử dụng giá trị máy chủ cơ sở dữ liệu được hiển thị trong hPanel trừ khi môi trường WordPress của bạn yêu cầu ghi đè cục bộ.
Các lượt truy cập SSO (Single Sign-On) phụ thuộc vào việc tên miền của tenant phân giải về tenant được lưu trữ trên Hostinger.

## Khắc phục sự cố máy chủ Hostinger {#troubleshooting-hostinger-tenants}

Khi bạn gặp vấn đề với các tenant (khách thuê) trên Hostinger, đừng lo lắng. Dưới đây là một số bước cơ bản và cách xử lý phổ biến mà bạn có thể tham khảo để khắc phục sự cố:

**1. Kiểm tra trạng thái tài khoản và thanh toán:**

*   **Trạng thái thanh toán:** Đảm bảo rằng gói dịch vụ của bạn vẫn đang hoạt động và chưa bị tạm ngưng do lỗi thanh toán. Bạn hãy kiểm tra bảng điều khiển (dashboard) của Hostinger để xem thông tin này.
*   **Giới hạn tài nguyên:** Kiểm tra xem tenant của bạn có đang vượt quá giới hạn về băng thông, CPU hoặc dung lượng lưu trữ mà gói dịch vụ hiện tại cho phép hay không. Nếu bị quá tải, bạn cần nâng cấp gói dịch vụ.

**2. Xử lý lỗi liên quan đến WordPress/WooCommerce:**

*   **Lỗi Plugin/Theme:** Đôi khi sự cố xảy ra do một plugin hoặc theme nào đó xung đột với nhau. Hãy thử vô hiệu hóa tất cả các plugin và theme, sau đó bật lại từng cái để xác định xem có phải do plugin nào gây lỗi không.
*   **Cập nhật WordPress:** Luôn giữ cho phiên bản WordPress của bạn được cập nhật lên phiên bản mới nhất để đảm bảo tính tương thích và vá các lỗ hổng bảo mật.
*   **Kiểm tra Log lỗi (Error Logs):** Nếu trang web bị lỗi, hãy kiểm tra file `error_log` trong thư mục gốc của website hoặc thông qua bảng điều khiển Hostinger để xem có thông báo lỗi cụ thể nào không.

**3. Vấn đề về Cấu hình và Cơ sở dữ liệu (MySQL):**

*   **Cơ sở dữ liệu bị hỏng:** Nếu trang web không tải được, có thể cơ sở dữ liệu MySQL của bạn gặp vấn đề. Bạn nên liên hệ bộ phận hỗ trợ kỹ thuật của Hostinger để họ kiểm tra hoặc khôi phục lại database cho bạn.
*   **Lỗi cấu hình `.htaccess`:** File `.htaccess` là một file quan trọng điều khiển cách máy chủ xử lý các yêu cầu. Nếu bạn vô tình chỉnh sửa nó, có thể gây ra lỗi 404 hoặc lỗi chuyển hướng. Hãy thử đặt tên file này thành `htaccess_old` để xem trang web có hoạt động lại không.

**4. Vấn đề về Bảo mật:**

*   **Tên đăng nhập/Mật khẩu:** Nếu bạn quên thông tin đăng nhập cho tài khoản quản trị (cPanel hoặc giao diện Hostinger), hãy sử dụng chức năng "Quên mật khẩu" để khôi phục.
*   **Bảo mật SSL:** Đảm bảo rằng chứng chỉ SSL của website đã được cài đặt và kích hoạt đúng cách. Một trang web không có SSL sẽ khiến người dùng gặp cảnh báo bảo mật.

**5. Liên hệ với Hỗ trợ Kỹ thuật Hostinger:**

Nếu bạn đã thử tất cả các bước trên mà vẫn không khắc phục được vấn đề, đừng ngần ngại liên hệ trực tiếp với đội ngũ hỗ trợ kỹ thuật của Hostinger. Hãy cung cấp cho họ:
*   Mô tả chi tiết về lỗi bạn đang gặp phải (ví dụ: "Trang web bị trắng màn hình", "Không thể truy cập vào trang quản trị").
*   Thời điểm xảy ra sự cố.
*   Bất kỳ thông báo lỗi cụ thể nào mà bạn nhận được.

Việc cung cấp thông tin chi tiết sẽ giúp họ chẩn đoán và giải quyết vấn đề nhanh chóng hơn rất nhiều!

- Nếu việc cài đặt tenant thất bại, hãy kiểm tra xem tên miền đã được gắn vào tài khoản Hostinger chưa.
- Nếu xác minh cơ sở dữ liệu (database verification) không thành công, hãy so sánh tên người dùng DB của tenant, tên database và binding host với hPanel.
- Nếu **Visit (SSO)** thất bại, hãy xác nhận DNS và SSL đã được kích hoạt cho tên miền của tenant chưa.

Nếu quá trình gỡ bỏ (teardown) để lại các tài nguyên trên máy chủ, hãy xóa bất kỳ cơ sở dữ liệu, người dùng hoặc thư mục nào còn sót lại trong hPanel sau khi đã xác nhận việc sao lưu.
