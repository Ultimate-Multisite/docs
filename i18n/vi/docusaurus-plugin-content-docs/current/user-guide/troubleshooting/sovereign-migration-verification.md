---
title: Xác minh Di chuyển Chủ quyền
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Xác minh Di chuyển Chủ quyền (Sovereign Migration) {#sovereign-migration-verification}

Ultimate Multisite phiên bản 1.2.0 đã bao gồm các lệnh kiểm tra WP-CLI cho việc di chuyển khách thuê chủ quyền (sovereign tenant migrations). Hãy sử dụng chúng khi quá trình di chuyển khách thuê, truy cập SSO hoặc cài đặt biệt lập không hoạt động như mong đợi.

## Các lệnh cần chạy {#commands-to-run}

Chạy xác minh từ cài đặt WordPress trên mạng:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Sử dụng ID trang web (site ID) của tenant bạn đang di chuyển. Lệnh đầu tiên kiểm tra xem tenant đó đã không còn phụ thuộc vào dữ liệu cũ ở phía mạng nữa. Lệnh thứ hai xác minh rằng các job sovereign push có thể xử lý và dọn dẹp được.

## Các lỗi thường gặp {#common-failures}

### Quyền truy cập cơ sở dữ liệu không khớp với máy chủ {#database-grants-do-not-match-the-host}

Nếu báo cáo xác minh cho thấy lỗi cấp quyền (grant) hoặc lỗi người dùng viết (writer-user), hãy kiểm tra máy chủ cơ sở dữ liệu đã được cấu hình. `localhost`, `127.0.0.1` và tên dịch vụ container là các máy chủ MySQL khác nhau. Hãy cập nhật việc liên kết máy chủ tenant hoặc quyền cơ sở dữ liệu, sau đó chạy lại quá trình xác minh.

### Cài đặt trên Bedrock hoặc cục bộ không kết nối được {#bedrock-or-local-installs-cannot-connect}

Các bản cài đặt Bedrock và socket cục bộ có thể báo cáo cơ sở dữ liệu là `localhost` trong khi thời gian chạy kết nối thông qua một địa chỉ được chuẩn hóa. Phiên bản 1.2.0 sẽ chuẩn hóa các chuỗi host trên cùng một máy, nhưng các tùy chỉnh host tùy chỉnh vẫn có thể xung đột với quyền truy cập cơ sở dữ liệu.

### Hàng đợi đẩy bất đồng bộ không được dọn sạch {#async-push-queue-does-not-drain}

Nếu `verify-sovereign-push` không hoàn thành, hãy kiểm tra Action Scheduler hoặc trình chạy (runner) bất đồng bộ đã được cấu hình. Chỉ xóa các job thất bại sau khi xác nhận chúng an toàn để thử lại hoặc bỏ qua.

### Số lượng người dùng của Tenant bị sai {#tenant-user-count-is-wrong}

Việc di chuyển nên cấp tài khoản cho tenant chủ quyền. Nếu người dùng dự kiến cài đặt bị thiếu, hãy chạy lại bước cấp tài khoản trước khi thử lại SSO.

### Truy cập SSO bị từ chối {#sso-visit-is-rejected}

Đăng nhập tự động cho người thuê không trạng thái (stateless tenant autologin) yêu cầu tên miền của người thuê, mã PIN nguồn gốc (origin pin), mục đích token, nonce và thời gian hết hạn phải khớp nhau. Hãy xác nhận URL của người thuê là chính xác và việc đăng nhập sẽ được thực hiện ngay sau khi tạo phiên truy cập SSO.

## Khi nào cần thử lại {#when-to-retry}

Thử xác minh lại sau mỗi lần thay đổi cơ sở hạ tầng. Không chuyển lưu lượng truy cập sản xuất, xóa dữ liệu nguồn hoặc gỡ bỏ thông tin đăng nhập di chuyển cho đến khi tất cả các kiểm tra xác minh đều vượt qua.
