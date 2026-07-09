---
title: Tham quan Bảng quản trị
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Tham quan Bảng quản trị {#touring-the-admin-panel}

Ultimate Multisite hướng tới sự đơn giản và dễ hiểu nhất có thể, nhưng với một công cụ mạnh mẽ như vậy, một chuyến tham quan có hướng dẫn sẽ rất hữu ích. Hãy cùng đi qua các trang quản trị để giúp bạn làm quen.

## Dashboard {#dashboard}

**Dashboard** của Ultimate Multisite hiển thị các báo cáo và phân tích cơ bản bao gồm doanh thu, hoạt động site, tăng trưởng membership, số lượng khách truy cập và dữ liệu địa lý.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Đây là chế độ xem đầy đủ của Dashboard:

![Trang đầy đủ Ultimate Multisite Dashboard](/img/admin/um-dashboard-full.png)

Và phần dưới cùng của Dashboard:

![Phần dưới cùng Ultimate Multisite Dashboard](/img/admin/um-dashboard-bottom.png)

Đây cũng là chế độ xem đầy đủ của Dashboard mạng:

![Trang đầy đủ Network Dashboard](/img/admin/network-dashboard-full-page.png)

## Biểu mẫu thanh toán {#checkout-forms}

**Biểu mẫu thanh toán** mang đến cho bạn sự linh hoạt để tạo các trang đăng ký tùy chỉnh. Bạn có thể tùy chỉnh các trường, chèn các lớp và script tùy chỉnh, cũng như hạn chế quyền truy cập dựa trên quốc gia hoặc vị trí của khách truy cập.

![Danh sách biểu mẫu thanh toán](/img/admin/checkout-forms-list.png)

## Sản phẩm {#products}

Phần **Sản phẩm** là nơi bạn tạo các gói, bộ gói và dịch vụ khác nhau cho mạng của mình. Xác định giá, tần suất thanh toán, cũng như giới hạn & hạn mức ở cấp sản phẩm.

![Danh sách sản phẩm](/img/admin/products-list.png)

## Memberships {#memberships}

Trang **Memberships** hiển thị tất cả subscription trong mạng của bạn. Xem lại và chỉnh sửa chi tiết subscription bao gồm gói, sản phẩm, số tiền và tần suất thanh toán, lịch sử thanh toán và dấu thời gian.

![Danh sách Memberships](/img/admin/memberships-list.png)

## Thanh toán {#payments}

Trang **Thanh toán** cung cấp chế độ xem nhanh lịch sử thanh toán trên toàn bộ mạng của bạn, với thông tin giao dịch chi tiết bao gồm các sản phẩm và số tiền cụ thể.

![Danh sách thanh toán](/img/admin/payments-list.png)

## Khách hàng {#customers}

Trang **Khách hàng** hiển thị tất cả thành viên đã đăng ký trong mạng của bạn với thông tin người dùng cơ bản bao gồm tên, địa chỉ email, lần đăng nhập gần nhất và liên kết "chuyển sang" để đăng nhập vào subsite của họ.

![Danh sách khách hàng](/img/admin/customers-list.png)

## Site {#sites}

Trang **Site** liệt kê tất cả subsite trong mạng của bạn, bao gồm các mẫu site và site thuộc sở hữu của khách hàng. Dễ dàng quản lý tên miền đã ánh xạ, giới hạn & hạn mức, plugin và theme, cũng như hình thu nhỏ của site.

![Danh sách site](/img/admin/sites-list.png)

## Tên miền {#domains}

Trang **Tên miền** dành riêng cho các tên miền tùy chỉnh được ánh xạ tới subsite. Với vai trò super admin, bạn có thể thêm hoặc ánh xạ thủ công tên miền tùy chỉnh và xem bản ghi DNS cũng như nhật ký.

![Danh sách tên miền](/img/admin/domains-list.png)

## Mã giảm giá {#discount-codes}

**Mã giảm giá** cho phép bạn tạo mã coupon để cung cấp giảm giá cho người dùng cuối. Chỉ định giá trị giảm giá và nhắm mục tiêu đến người dùng hoặc nhóm cụ thể.

![Danh sách mã giảm giá](/img/admin/discount-codes-list.png)

## Thông báo phát sóng {#broadcasts}

**Thông báo phát sóng** là công cụ để triển khai thông báo hoặc gửi tin nhắn riêng tư đến người dùng subsite của bạn. Nhắm mục tiêu các nhóm người dùng cụ thể dựa trên gói hoặc sản phẩm mà họ đã đăng ký.

![Danh sách thông báo phát sóng](/img/admin/broadcasts-list.png)

## Cài đặt {#settings}

Trang **Cài đặt** là nơi bạn cấu hình Ultimate Multisite — cài đặt đăng ký, thanh toán, API và webhook, ánh xạ tên miền và các tích hợp khác.

Cài đặt trình kết nối AI liệt kê các nhóm nhà cung cấp OAuth hiện được hỗ trợ: Anthropic Max, OpenAI ChatGPT/Codex và Google AI Pro. Mỗi thẻ nhà cung cấp cho phép super admin kết nối Account, làm mới Account đã lưu, xóa Account theo email và sử dụng phương án dự phòng OAuth thủ công khi môi trường sandbox chặn chuyển hướng trình duyệt. Các tùy chọn thiết lập Cursor Pro đã được gỡ khỏi bảng quản trị.

Account ChatGPT/Codex hỗ trợ sử dụng công cụ dựa trên trình kết nối khi thao tác cho phép công cụ, vì vậy các quy trình quản trị phụ thuộc vào thao tác được trình kết nối hỗ trợ có thể sử dụng hành vi công cụ Codex sau khi Account OpenAI được kết nối.

![Trang cài đặt](/img/admin/settings-general.png)

Đây là chế độ xem đầy đủ của trang cài đặt chung:

![Trang đầy đủ cài đặt chung](/img/admin/settings-general-full.png)

Và trang cài đặt email:

![Trang đầy đủ cài đặt email](/img/admin/settings-emails-full.png)

Và trang cài đặt thanh toán:

![Trang đầy đủ cài đặt thanh toán](/img/admin/settings-payments-full.png)

Và phần dưới cùng của cài đặt thanh toán:

![Phần dưới cùng cài đặt thanh toán](/img/admin/settings-payments-bottom.png)

Và trang cài đặt site:

![Trang đầy đủ cài đặt site](/img/admin/settings-sites-full.png)

## Sự kiện {#events}

Trang **Sự kiện** lưu giữ bản ghi của tất cả sự kiện và nhật ký trong mạng của bạn. Trang này theo dõi các hoạt động như thay đổi gói, đăng ký mới và các thay đổi khác — hữu ích cho việc giám sát multisite của bạn.

![Danh sách sự kiện](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks** cho phép bạn gửi dữ liệu đến một ứng dụng khác. Hữu ích để gửi dữ liệu từ Ultimate Multisite đến các nền tảng như Zapier.

![Danh sách Webhooks](/img/admin/webhooks-list.png)
