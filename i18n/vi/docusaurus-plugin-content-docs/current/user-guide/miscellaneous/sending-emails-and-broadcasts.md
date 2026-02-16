---
title: Gửi Email và Bản Tin
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Gửi Email và Thông Báo Hàng Loạt (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite có tính năng giúp bạn giao tiếp với khách hàng bằng cách gửi email đến một người dùng cụ thể hoặc một nhóm người dùng, cũng như hiển thị thông báo trên trang quản trị của họ để phát đi các thông tin quan trọng.

## Thêm thông báo quản trị vào dashboard của khách hàng với Broadcasts

Sử dụng tính năng broadcast của Ultimate Multisite, bạn có thể thêm **thông báo quản trị** vào trang dashboard quản trị subsite của người dùng.

Điều này cực kỳ hữu ích khi bạn cần thông báo về việc bảo trì hệ thống hoặc giới thiệu sản phẩm, dịch vụ mới đến khách hàng hiện tại. Đây là cách thông báo quản trị sẽ hiển thị trên dashboard của người dùng.

![Thông báo broadcast hiển thị trên dashboard khách hàng](/img/admin/broadcasts-list.png)

Để tạo thông báo quản trị, vào trang network admin dashboard và trong menu **Ultimate Multisite**, bạn sẽ thấy mục **Broadcasts**.

![Menu Broadcasts trong trang quản trị Ultimate Multisite](/img/admin/broadcasts-list.png)

Từ trang này, nhấp vào nút **Add Broadcast** ở phía trên.

Cửa sổ Add broadcast sẽ xuất hiện, cho phép bạn chọn loại broadcast muốn gửi.

Chọn **Message** rồi nhấp nút **Next Step**.

![Cửa sổ Add broadcast với loại Message được chọn](/img/admin/broadcasts-list.png)

Cửa sổ tiếp theo sẽ yêu cầu bạn chọn **Target customer** hoặc **Target product**. Lưu ý rằng bạn có thể chọn nhiều người dùng hoặc nhiều sản phẩm cùng lúc.

Để tìm kiếm tài khoản người dùng hoặc sản phẩm, bạn cần bắt đầu gõ từ khóa vào ô tìm kiếm.

Trong trường **Message type**, bạn có thể chọn màu sắc cho thông báo. Điều này sẽ nhấn mạnh mức độ quan trọng của tin nhắn.

Sau đó nhấp **Next Step**.

![Chọn khách hàng và sản phẩm mục tiêu cho broadcast](/img/admin/broadcasts-list.png)

Cửa sổ tiếp theo là nơi bạn soạn thảo tin nhắn bằng cách nhập tiêu đề và nội dung muốn gửi đến người dùng.

![Trình soạn thảo tiêu đề và nội dung broadcast](/img/admin/broadcasts-list.png)

Sau khi hoàn thành tin nhắn, bạn có thể nhấn nút **Send**.

Vậy là xong. Thông báo quản trị sẽ hiển thị ngay lập tức trên dashboard của người dùng.

## Gửi email cho khách hàng

Sử dụng tính năng broadcast của Ultimate Multisite, bạn có thể gửi email cho người dùng. Bạn có thể chọn gửi email cho những người dùng cụ thể hoặc nhắm đến một nhóm người dùng dựa trên sản phẩm hoặc gói dịch vụ họ đang đăng ký.

Để bắt đầu gửi email broadcast, vào trang network admin dashboard và trong menu Ultimate Multisite, bạn sẽ thấy mục Broadcast.

![Trang Broadcasts trong quản trị Ultimate Multisite](/img/admin/broadcasts-list.png)

Từ trang này, nhấp vào nút **Add broadcast** ở phía trên.

Cửa sổ Add broadcast sẽ xuất hiện, cho phép bạn chọn loại broadcast muốn gửi. Chọn **Email** rồi nhấp nút **Next Step**.

![Cửa sổ Add broadcast với loại Email được chọn](/img/admin/broadcasts-list.png)

Cửa sổ tiếp theo sẽ yêu cầu bạn chọn **Target customer** hoặc **Target product**. Lưu ý rằng bạn có thể chọn nhiều người dùng hoặc nhiều sản phẩm cùng lúc.

Để tìm kiếm tài khoản người dùng hoặc sản phẩm, bạn cần bắt đầu gõ từ khóa vào ô tìm kiếm.

Sau khi chọn xong đối tượng mục tiêu, nhấp **Next Step**.

![Chọn khách hàng và sản phẩm mục tiêu cho email broadcast](/img/admin/broadcasts-list.png)

Cửa sổ tiếp theo là nơi bạn soạn thảo email bằng cách nhập tiêu đề và nội dung muốn gửi đến người dùng.

![Trình soạn thảo tiêu đề và nội dung email broadcast](/img/admin/broadcasts-list.png)

Sau khi hoàn thành tin nhắn, bạn có thể nhấn nút **Send**.

Đó là cách gửi email đến người dùng cuối bằng tính năng broadcast — thật đơn giản phải không.

## Email hệ thống

Email hệ thống trong Ultimate Multisite là những **thông báo tự động** được hệ thống gửi sau các hành động như đăng ký, thanh toán, ánh xạ domain, v.v. Những email này có thể được chỉnh sửa hoặc thay đổi từ cài đặt Ultimate Multisite. Ngoài ra còn có tính năng cho phép bạn đặt lại và nhập cài đặt từ một bản cài đặt Ultimate Multisite khác.

### Đặt lại & Nhập

Các phiên bản Ultimate Multisite mới, cũng như các add-on, có thể đăng ký thêm email mới theo thời gian.

Để tránh xung đột và các vấn đề khác, **chúng tôi sẽ không tự động thêm các mẫu email mới vào System Emails trên bản cài đặt của bạn**, trừ khi chúng cần thiết cho hoạt động đúng đắn của một tính năng nhất định.

Tuy nhiên, super admin và agent có thể nhập những email mới đăng ký này thông qua công cụ nhập. Quá trình này sẽ tạo một email hệ thống mới với nội dung và cấu hình của mẫu email mới, cho phép super admin chỉnh sửa theo ý muốn hoặc giữ nguyên.

#### Cách nhập email hệ thống

Vào trang Ultimate Multisite Settings và chuyển đến tab **Emails**.

![Tab Emails trong cài đặt Ultimate Multisite](/img/config/settings-emails.png)

Sau đó, ở thanh bên, nhấp vào nút **Customize System Emails**.

![Nút Customize System Emails trên thanh bên](/img/config/settings-emails.png)

Trên trang System Emails, bạn sẽ thấy nút **Reset & Import** ở phía trên. Nhấp vào nút đó sẽ mở cửa sổ nhập và đặt lại.

![Nút Reset and Import trên trang System Emails](/img/config/settings-emails.png)

Sau đó, bạn có thể bật tùy chọn Import Emails để xem những email hệ thống nào có sẵn để nhập.

![Tùy chọn Import Emails hiển thị các email hệ thống có sẵn](/img/config/settings-emails.png)

#### Đặt lại Email Hệ thống

Đôi khi, bạn nhận ra rằng những thay đổi đã thực hiện trên một mẫu email không còn phù hợp nữa và bạn muốn đặt lại về **trạng thái mặc định**.

Trong trường hợp này, bạn có hai lựa chọn: bạn có thể xóa email hệ thống rồi nhập lại (theo hướng dẫn ở trên) — cách này sẽ xóa các số liệu gửi và những thứ khác, nên đây là phương pháp ít được ưa chuộng hơn.

Hoặc bạn có thể sử dụng **công cụ Reset & Import** để đặt lại mẫu email đó.

Để đặt lại mẫu email, bạn làm theo các bước ở trên cho đến khi đến công cụ Reset & Import, sau đó bật tùy chọn **Reset** và chọn những email bạn muốn đặt lại về nội dung mặc định.

![Tùy chọn Reset để khôi phục mẫu email về mặc định](/img/config/settings-emails.png)
