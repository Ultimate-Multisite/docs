---
title: Xuất trang web
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Xuất Site {#site-export}

Trang quản trị **Site Export** (Xuất Site) cho phép quản trị viên mạng đóng gói một site đơn lẻ, hoặc toàn bộ mạng lưới, thành một file nén (archive) có thể tải xuống. File này dùng để di chuyển, sao lưu, hoặc bàn giao dự án.

## Xuất một site {#exporting-one-site}

Truy cập **Ultimate Multisite > Site Export** và chọn **Generate new Site Export** (Tạo Xuất Site mới). Chọn subsite (site con) bạn muốn xuất, sau đó chọn xem file nén có bao gồm uploads (tải lên), plugins (plugin), và themes (giao diện) hay không.

Khi quá trình xuất hoàn tất, bạn tải file ZIP từ danh sách **Existing Exports** (Các lần xuất đã có). Các file ZIP xuất hiện nay đã bao gồm một `index.php` tự khởi động và một `readme.txt`, nhờ đó bạn có thể tải file nén này lên một host mới và bắt đầu sử dụng mà không cần cài đặt thêm plugin nhập liệu riêng.

## Xuất toàn bộ mạng lưới {#exporting-the-whole-network}

Sử dụng **Network Export** (Xuất Mạng) trên trang Site Export khi bạn cần một file nén duy nhất chứa tất cả các subsite trong mạng lưới. Điều này rất hữu ích trước khi di chuyển host, thực hiện các buổi diễn tập khôi phục sau thảm họa, hoặc tái cấu trúc môi trường staging, nơi mà mỗi subsite cần phải di chuyển cùng nhau.

Vì việc xuất toàn bộ mạng lưới có thể lớn hơn nhiều so với xuất một site đơn lẻ, bạn nên chạy nó trong khoảng thời gian lưu lượng truy cập thấp và xác nhận rằng bộ nhớ lưu trữ đích có đủ dung lượng trống cho uploads, plugins, themes, và các file ZIP được tạo.

### Network Import Bundles (Gói nhập Mạng) {#network-import-bundles}

Bắt đầu từ Ultimate Multisite 2.12.0, Site Exporter có thể tạo ra **network import bundles** (gói nhập mạng) — các file nén chuyên dụng được thiết kế để khôi phục toàn bộ mạng lưới một cách suôn sẻ. Một gói nhập mạng chứa tất cả các file và metadata cần thiết để khôi phục nhiều site về một cài đặt mạng mới.

#### Tạo Gói Nhập Mạng {#generating-a-network-import-bundle}

1. Truy cập **Ultimate Multisite > Site Export**
2. Nhấp vào **Generate new Network Export** (Tạo Xuất Mạng mới)
3. Chọn **Network Import Bundle** làm loại xuất
4. Chọn xem có bao gồm uploads, plugins, và themes hay không
5. Nhấp vào **Generate** (Tạo)
6. Tải gói ZIP từ danh sách **Existing Exports** (Các lần xuất đã có)

#### Khôi phục từ Gói Nhập Mạng {#restoring-from-a-network-import-bundle}

Để khôi phục các site từ gói nhập mạng:

1. Cài đặt Ultimate Multisite trên host đích của bạn
2. Hoàn tất trình hướng dẫn thiết lập multisite
3. Truy cập **Ultimate Multisite > Site Export** trên mạng mới
4. Nhấp vào **Import Network Bundle** (Nhập Gói Mạng)
5. Tải file ZIP gói nhập mạng lên
6. Làm theo các hướng dẫn nhập liệu trên màn hình
7. Quá trình nhập sẽ khôi phục tất cả các site, nội dung và cấu hình của chúng

Các gói nhập mạng bảo toàn:
- Nội dung site (bài viết, trang, custom post types)
- Cài đặt và tùy chọn site
- Vai trò và quyền của người dùng
- Plugins và themes (nếu được bao gồm trong gói)
- Nội dung tải lên media (nếu được bao gồm trong gói)
- Các bảng và dữ liệu tùy chỉnh trong database

## Cài đặt file ZIP xuất tự khởi động {#installing-a-self-booting-export-zip}

Để khôi phục một file ZIP tự khởi động trên một host mới:

1. Tải nội dung của file ZIP đã xuất lên thư mục gốc web (web root) đích.
2. Mở `index.php` đã tải lên bằng trình duyệt.
3. Làm theo các hướng dẫn cài đặt trên màn hình từ gói xuất đã được đóng gói.
4. Xem lại file `readme.txt` được đóng gói để biết các lưu ý cụ thể khi xuất trước khi xóa các file tạm thời.

Để biết chi tiết về việc cài đặt và nhập liệu cho từng addon, xem [Site Exporter addon documentation](/addons/site-exporter).

Đối với công cụ single-site được thêm vào Ultimate Multisite 2.9.0, xem [Export & Import](/user-guide/administration/export-import).
