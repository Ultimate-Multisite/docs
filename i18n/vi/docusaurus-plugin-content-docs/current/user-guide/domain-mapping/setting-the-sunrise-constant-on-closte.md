---
title: Thiết lập Hằng số Sunrise trên Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Thiết lập hằng số Sunrise thành true trên Closte

Một số nhà cung cấp hosting khóa file wp-config.php vì lý do bảo mật. Điều này có nghĩa là Ultimate Multisite không thể tự động chỉnh sửa file để thêm các hằng số cần thiết cho tính năng ánh xạ tên miền và các tính năng khác hoạt động. Closte là một trong những nhà cung cấp như vậy.

Tuy nhiên, Closte cung cấp cách thêm hằng số vào wp-config.php một cách an toàn. Bạn chỉ cần làm theo các bước dưới đây:

## Trên bảng điều khiển Closte

Đầu tiên, [đăng nhập vào tài khoản Closte của bạn](https://app.closte.com/), nhấp vào mục Sites trong menu, sau đó nhấp vào liên kết Dashboard trên trang web bạn đang làm việc:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Bạn sẽ thấy một số mục menu mới xuất hiện ở phía bên trái màn hình. Điều hướng đến trang **Settings** bằng menu đó:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Sau đó, trên trang **Settings**, tìm tab WP-Config, rồi tìm trường "Additional wp-config.php content" trong tab đó:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Trong quá trình cài đặt Ultimate Multisite, bạn cần thêm hằng số sunrise vào trường đó. Chỉ cần thêm một dòng mới và dán dòng code bên dưới. Sau đó, nhấp nút **Save All**.

define('SUNRISE', true);

Vậy là xong, bạn đã hoàn tất. Quay lại trình hướng dẫn cài đặt Ultimate Multisite và làm mới trang để tiếp tục quá trình.
