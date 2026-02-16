---
title: Tích hợp Bảng điều khiển Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Tích hợp Hestia Control Panel

Hướng dẫn này giải thích cách cấu hình tích hợp Hestia trong Ultimate Multisite để các domain được ánh xạ trong mạng của bạn tự động được thêm (và xóa) dưới dạng Web Domain Alias trong Hestia.

- Tham khảo Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Tài liệu REST API chính thức: https://hestiacp.com/docs/server-administration/rest-api.html

## Tính năng
- Khi một domain được ánh xạ trong Ultimate Multisite, tích hợp sẽ gọi API của Hestia để chạy:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Khi một ánh xạ domain bị xóa, nó sẽ chạy:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Tùy chọn thêm/xóa alias `www.` tùy thuộc vào cài đặt "Tự động tạo subdomain www" trong phần cài đặt Domain Mapping.

## Yêu cầu trước khi bắt đầu
- Một Hestia Web Domain đã tồn tại và trỏ đến cài đặt WordPress của bạn. Tích hợp sẽ gắn các alias vào domain gốc này.
- Đã bật quyền truy cập API của Hestia. Bạn có thể xác thực bằng mật khẩu hoặc API hash/token.

Xem tài liệu REST API của Hestia để biết cách bật quyền truy cập API và chi tiết xác thực:
https://hestiacp.com/docs/server-administration/rest-api.html

## Cấu hình (Wizard → Integrations → Hestia)
Cung cấp các giá trị sau:

- `WU_HESTIA_API_URL` (bắt buộc)
  - Endpoint API gốc, thường là `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (bắt buộc)
  - Người dùng Hestia được sử dụng cho các lệnh API (thường là `admin`).
- `WU_HESTIA_API_PASSWORD` hoặc `WU_HESTIA_API_HASH` (ít nhất một trong hai)
  - Chọn một phương thức xác thực: mật khẩu hoặc API hash/token.
- `WU_HESTIA_ACCOUNT` (bắt buộc)
  - Tài khoản (chủ sở hữu) của Web Domain trong Hestia; đây là tham số đầu tiên của lệnh CLI.
- `WU_HESTIA_WEB_DOMAIN` (bắt buộc)
  - Hestia Web Domain hiện có đang phục vụ WordPress của bạn (các alias sẽ được gắn vào đây).
- `WU_HESTIA_RESTART` (tùy chọn; mặc định `yes`)
  - Có khởi động lại/tải lại các dịch vụ sau khi thay đổi alias hay không.

Bạn có thể để wizard tự động thêm các hằng số này vào `wp-config.php`, hoặc tự định nghĩa thủ công.

## Xác minh cài đặt
- Trong bước "Testing" của wizard, plugin sẽ gọi `v-list-web-domains <WU_HESTIA_ACCOUNT> json` qua API. Phản hồi thành công xác nhận kết nối và xác thực đã hoạt động.
- Sau khi ánh xạ domain, kiểm tra trong Hestia: Web > domain gốc > Aliases. Bạn sẽ thấy alias mới được thêm vào.

## Lưu ý & Mẹo
- Đảm bảo `WU_HESTIA_WEB_DOMAIN` đã tồn tại và thuộc sở hữu của `WU_HESTIA_ACCOUNT`.
- Nếu cần SSL, hãy quản lý chứng chỉ trong Hestia. Tích hợp này hiện chỉ xử lý alias.
- Plugin cũng có thể thêm/xóa `www.<domain>` tùy thuộc vào cài đặt "www subdomain" trong Domain Mapping.

## Ví dụ gọi API (cURL)
Dưới đây là ví dụ minh họa (điều chỉnh theo môi trường của bạn). Tham khảo tài liệu chính thức để biết chính xác các tham số.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (hoặc &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias cần thêm)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Để xóa, sử dụng `cmd=v-delete-web-domain-alias` với các tham số tương tự.

## Xử lý sự cố
- Lỗi HTTP từ API: kiểm tra `WU_HESTIA_API_URL` có thể truy cập được và có chứa `/api`.
- Lỗi xác thực: xác nhận `WU_HESTIA_API_USER` và `WU_HESTIA_API_PASSWORD` hoặc `WU_HESTIA_API_HASH`.
- "Missing account/base domain" trong log: đảm bảo `WU_HESTIA_ACCOUNT` và `WU_HESTIA_WEB_DOMAIN` đã được đặt và hợp lệ trong Hestia.

## Tài liệu tham khảo
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Tham khảo Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
