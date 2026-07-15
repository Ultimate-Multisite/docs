---
title: Nkwado na Admin Panel
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Tour Through Admin Panel

Ultimate Multisite na-akọrọ ịbụkọchịta dị kama ọpụrụ ego ma a-akọrọ ihe bụ ihe ndị ahụ, onye na-agba n'ime ihe a dị nwere ike ịkpọka okwu. Ka anyị gidi ya n'ime akụkọchịta admin ahụ ka maka gị ịbụ n'ime ihe ndị a.

## Dashboard {#dashboard}

**Dashboard** nke Ultimate Multisite na-akọrọ iheomụmụ dị mkpa ma ọ bụ ihe omume dị nwere, onye na-agba n'ime agha, ọgụgụ mmụta, akụkọ mmadụ, na data geografik.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Eee, ee bụ iheomume dị nwere nke dashboard ahụ:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Na akụkọ omume dashboard ahụ:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Eee, ee bụ iheomume dị nwere nke network dashboard ahụ:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms {#checkout-forms}

**Checkout Forms** na-agba gị ịdị mma ịkwado akụkọ mmadụ ọhụrụ. Ị ga-akwado ihe ndị a, ị chọrọ ihe dị nwere, ị chọrọ class na script ọhụrụ, ma ị chọrọ ịgbanwe ịga n'ime akụkọ mmadụ ahụ site n'ime nri ebe mmadụ ahụ na nri ebe.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Products {#products}

Akụkọ **Products** bụ onye ị chọrọ ihe dị iche iche, ọrụ, na awanni maka network gị. Ị ga-akwado ihe ndị a, ị ga-akwado ihe dị nwere, ị ga-akwado ihe dị nwere, na quota site n'ime product ahụ.

![Products list](/img/admin/products-list.png)

## Memberships {#memberships}

Akụkọ **Memberships** na-akọrọ onye ọ bụla akụkọ mmadụ n'ime network gị. Ị ga-akwado ma ị chọrọ ihe ndị a, onye ị chọrọ, ọrụ, ndepụ ebe, na oge ịkwado, ihe omume, na oge ịkwado.

![Memberships list](/img/admin/memberships-list.png)

## Payments {#payments}

Página **Payments** nọ cho bạn xem nhanh lịch sử thanh toán của toàn bộ mạng lưới của bạn, bao gồm thông tin giao dịch chi tiết như sản phẩm cụ thể và số tiền.

![Payments list](/img/admin/payments-list.png)

## Customers {#customers}

Trang **Customers** hiển thị tất cả các thành viên đã đăng ký trong mạng lưới của bạn với thông tin người dùng cơ bản bao gồm tên, địa chỉ email, lần đăng nhập cuối cùng, và một liên kết "chuyển sang" để đăng nhập vào trang phụ (subsite) của họ.

![Customers list](/img/admin/customers-list.png)

## Sites {#sites}

Trang **Sites** liệt kê tất cả các trang phụ trong mạng lưới của bạn bao gồm mẫu trang (site templates) và các trang do khách hàng sở hữu. Dễ dàng quản lý tên miền đã được ánh xạ (mapped domains), giới hạn & hạn mức (limits & quotas), plugin và theme, cùng với hình thu nhỏ trang (site thumbnails).

![Sites list](/img/admin/sites-list.png)

## Domains {#domains}

Trang **Domains** dành riêng cho các tên miền tùy chỉnh được ánh xạ tới các trang phụ. Với vai trò là siêu quản trị viên (super admin), bạn có thể tự thêm hoặc ánh xạ các tên miền tùy chỉnh và xem các bản ghi DNS cùng nhật ký (logs).

![Domains list](/img/admin/domains-list.png)

## Discount Codes {#discount-codes}

**Discount Codes** cho phép bạn tạo mã phiếu giảm giá để tặng ưu đãi cho người dùng cuối của mình. Hãy chỉ định giá trị giảm giá và nhắm mục tiêu vào những người dùng hoặc nhóm cụ thể.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Broadcasts {#broadcasts}

**Broadcasts** là công cụ giúp bạn gửi thông báo hoặc tin nhắn riêng đến người dùng của trang phụ. Hãy nhắm mục tiêu vào các nhóm người dùng cụ thể dựa trên gói (plan) hoặc sản phẩm mà họ đang đăng ký.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Settings {#settings}

Trang **Settings** là nơi bạn cấu hình Ultimate Multisite — cài đặt đăng ký, thanh toán, API và webhooks, ánh xạ tên miền, và các tích hợp khác.

Settings cho AI connector, liệt kê các nhóm OAuth provider được hỗ trợ hiện tại: Anthropic Max, OpenAI ChatGPT/Codex và Google AI Pro. Mỗi thẻ nhà cung cấp cho phép siêu quản trị viên kết nối tài khoản, làm mới tài khoản đã lưu, xóa tài khoản theo email, và sử dụng phương thức fallback OAuth thủ công khi môi trường sandbox chặn chuyển hướng trình duyệt. Các tùy chọn thiết lập của Cursor Pro đã bị loại bỏ khỏi bảng điều khiển quản trị.

Tài khoản ChatGPT/Codex hỗ trợ việc sử dụng công cụ được hỗ trợ bởi connector, nơi hoạt động cho phép sử dụng các công cụ, vì vậy các quy trình làm việc của quản trị viên phụ thuộc vào các thao tác được hỗ trợ bởi connector có thể sử dụng hành vi công cụ Codex sau khi tài khoản OpenAI đã được kết nối.

![Settings page](/img/admin/settings-general.png)

Đây là cái nhìn đầy đủ về trang cài đặt chung:

![Settings general full page](/img/admin/settings-general-full.png)

Và trang cài đặt email:

![Settings emails full page](/img/admin/settings-emails-full.png)

Và trang cài đặt thanh toán:

![Settings payments full page](/img/admin/settings-payments-full.png)

Và phần dưới của trang cài đặt thanh toán:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Và trang cài đặt trang web:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events (Sự kiện) {#events}

Trang **Events** giữ lại hồ sơ về tất cả các sự kiện và nhật ký trong mạng của bạn. Nó theo dõi các hoạt động như thay đổi gói, đăng ký và các chuyển động khác — hữu ích để giám sát hệ thống multisite của bạn.

![Events list](/img/admin/events-list.png)

## Webhooks (Webhook) {#webhooks}

**Webhooks** cho phép bạn gửi dữ liệu đến một ứng dụng khác. Hữu ích để gửi dữ liệu từ Ultimate Multisite đến các nền tảng như Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
