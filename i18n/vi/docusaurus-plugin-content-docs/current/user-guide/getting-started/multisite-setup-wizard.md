---
title: Trình hướng dẫn cài đặt Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Trình hướng dẫn cài đặt Multisite

Ultimate Multisite tích hợp sẵn một trình hướng dẫn giúp tự động chuyển đổi trang WordPress thông thường thành mạng lưới WordPress Multisite. Bạn không cần phải chỉnh sửa thủ công file `wp-config.php` hay chạy các lệnh database.

:::tip
Nếu trang WordPress của bạn đã chạy ở chế độ Multisite, bạn có thể bỏ qua bước này hoàn toàn. Trình hướng dẫn chỉ xuất hiện khi Multisite chưa được kích hoạt.
:::

## Khi nào trình hướng dẫn xuất hiện?

Khi bạn kích hoạt Ultimate Multisite trên một trang WordPress thông thường (chưa phải Multisite), plugin sẽ phát hiện Multisite chưa được bật và tự động chuyển bạn đến Trình hướng dẫn cài đặt Multisite thay vì trình hướng dẫn cài đặt thông thường.

Bạn cũng có thể truy cập trực tiếp tại **WP Admin > Ultimate Multisite > Multisite Setup**.

## Điều kiện tiên quyết

Trước khi chạy trình hướng dẫn, hãy đảm bảo:

- Bạn có **quyền quản trị viên** trên trang WordPress
- File `wp-config.php` trên server **có thể ghi được** bởi web server
- Bạn đã **sao lưu gần đây** các file và database

:::warning
Trình hướng dẫn sẽ chỉnh sửa file `wp-config.php` và tạo các bảng database mới. Hãy luôn tạo bản sao lưu trước khi tiếp tục.
:::

## Bước 1: Chào mừng

Màn hình đầu tiên giải thích WordPress Multisite là gì và trình hướng dẫn sẽ làm những gì:

- Kích hoạt tính năng Multisite trong cấu hình WordPress của bạn
- Tạo các bảng database cần thiết cho mạng lưới
- Thêm các hằng số multisite cần thiết vào `wp-config.php`
- Kích hoạt Ultimate Multisite trên toàn mạng lưới

![Trình hướng dẫn cài đặt Multisite - Bước chào mừng](/img/installation/multisite-wizard/wizard-welcome.png)

Nhấn **Continue** để tiếp tục.

## Bước 2: Cấu hình mạng lưới

Bước này yêu cầu bạn cấu hình các thiết lập cho mạng lưới.

### Cấu trúc site

Chọn cách tổ chức các site trong mạng lưới của bạn:

- **Sub-domains** (Khuyến nghị) — Mỗi site có subdomain riêng, ví dụ: `site1.yourdomain.com`
- **Sub-directories** — Các site được tạo dưới dạng đường dẫn, ví dụ: `yourdomain.com/site1`

:::note
Nếu bạn chọn sub-domains, bạn sẽ cần cấu hình **wildcard DNS** và **chứng chỉ SSL wildcard** cho tên miền. Hầu hết các nhà cung cấp hosting WordPress có quản lý sẽ tự động xử lý việc này. Xem [Ultimate Multisite 101](./ultimate-multisite-101) để so sánh chi tiết.
:::

### Tên mạng lưới

Nhập tên cho mạng lưới của bạn. Mặc định sẽ là tên site hiện tại với chữ "Network" được thêm vào sau. Bạn có thể thay đổi sau trong phần cài đặt mạng lưới.

### Email quản trị mạng lưới

Địa chỉ email dùng để nhận thông báo quản trị mạng lưới. Mặc định là email của người dùng hiện tại.

![Trình hướng dẫn cài đặt Multisite - Cấu hình mạng lưới](/img/installation/multisite-wizard/wizard-network-configuration.png)

Sau khi điền các trường, nhấn **Continue** để tiếp tục.

## Bước 3: Cài đặt

Nhấn nút **Install** để bắt đầu. Trình hướng dẫn sẽ thực hiện tuần tự năm bước tự động, mỗi bước đều hiển thị tiến trình theo thời gian thực:

![Trình hướng dẫn cài đặt Multisite - Đang chờ cài đặt](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Bước | Mô tả |
|------|-------|
| **Enable Multisite** | Thêm hằng số `WP_ALLOW_MULTISITE` vào `wp-config.php` |
| **Create Network** | Tạo các bảng database multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, v.v.) và điền cấu hình mạng lưới của bạn |
| **Update Configuration** | Thêm các hằng số multisite cuối cùng vào `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, v.v.) |
| **Fix Cookies** | Đảm bảo URL site chính xác trong metadata mạng lưới để tránh lỗi xác thực sau khi kích hoạt |
| **Network Activate Plugin** | Kích hoạt Ultimate Multisite trên toàn mạng lưới để chạy trên tất cả các site |

Mỗi bước hiển thị một trong các trạng thái sau:

- **Pending** — Đang chờ xử lý
- **Installing...** — Đang chạy
- **Success!** — Hoàn thành thành công
- **Error message** — Có lỗi xảy ra (thông báo sẽ mô tả vấn đề)

Khi tất cả các bước hoàn thành thành công, bạn sẽ thấy trạng thái "Success!" màu xanh cho từng mục:

![Trình hướng dẫn cài đặt Multisite - Cài đặt hoàn tất](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sau đó trình hướng dẫn sẽ tự động chuyển đến màn hình hoàn thành.

## Bước 4: Hoàn thành

Sau khi cài đặt hoàn tất, bạn sẽ thấy thông báo thành công xác nhận WordPress Multisite đã được kích hoạt.

![Trình hướng dẫn cài đặt Multisite - Cài đặt hoàn tất](/img/installation/multisite-wizard/wizard-complete.png)

Bây giờ bạn có thể tiếp tục với trình hướng dẫn cài đặt Ultimate Multisite để cấu hình nền tảng WaaS của mình (thông tin công ty, nội dung mặc định, cổng thanh toán, v.v.).

:::note
Sau khi cài đặt multisite hoàn tất, trình duyệt của bạn sẽ chuyển hướng qua trang quản trị mạng lưới mới được kích hoạt. Bạn có thể cần đăng nhập lại vì cookie xác thực được cập nhật cho môi trường multisite.
:::

## Phương án cài đặt thủ công

Nếu trình hướng dẫn không thể ghi vào file `wp-config.php` (do quyền file hoặc hạn chế server), nó sẽ hiển thị chính xác đoạn mã bạn cần thêm thủ công:

1. **Các hằng số wp-config.php** cần được thêm phía trên dòng `/* That's all, stop editing! */`
2. **Các quy tắc rewrite .htaccess** phù hợp với cấu trúc site bạn đã chọn (subdomain hoặc subdirectory)

Sau khi thực hiện các thay đổi thủ công, làm mới trang và trình hướng dẫn sẽ phát hiện multisite đã được kích hoạt.

## Xử lý sự cố

### Trình hướng dẫn báo wp-config.php không thể ghi

Tiến trình web server cần có quyền ghi vào file `wp-config.php`. Bạn có thể:

- Tạm thời thay đổi quyền file thành `644` hoặc `666`
- Sử dụng hướng dẫn cài đặt thủ công được cung cấp bởi trình hướng dẫn
- Liên hệ nhà cung cấp hosting để được hỗ trợ

### Không truy cập được các site sau khi cài đặt (subdomains)

Nếu bạn chọn cấu trúc subdomain, bạn cần cấu hình **wildcard DNS** cho tên miền. Thêm bản ghi DNS:

```
Type: A (or CNAME)
Host: *
Value: [IP server của bạn]
```

Liên hệ nhà cung cấp hosting nếu bạn không chắc cách cấu hình.

### Lỗi xác thực sau khi cài đặt

Nếu bạn bị đăng xuất hoặc gặp lỗi cookie sau khi cài đặt multisite:

1. Xóa cookie trình duyệt cho site
2. Đăng nhập lại tại `yourdomain.com/wp-login.php`
3. Nếu vấn đề vẫn tiếp diễn, kiểm tra xem `wp-config.php` của bạn không có `COOKIE_DOMAIN` được đặt thành `false` — đây là lỗi đã biết trên các cài đặt multisite subdomain

### Một bước bị lỗi trong quá trình cài đặt

Nếu một trong các bước cài đặt hiển thị lỗi:

1. Ghi lại thông báo lỗi được hiển thị
2. Quay lại bước cấu hình và thử lại
3. Nếu lỗi vẫn tiếp diễn, kiểm tra log lỗi PHP của server để biết thêm chi tiết
4. Các bước đã hoàn thành sẽ được bỏ qua trong các lần chạy tiếp theo (trình cài đặt có tính idempotent)
