---
title: Tự động Tìm kiếm và Thay thế trong Mẫu Trang web
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Tự động Tìm và Thay thế trong Mẫu trang web (v2)

_**Hướng dẫn này yêu cầu WP UItimo phiên bản 2.x.**_

Một trong những tính năng mạnh mẽ nhất của Ultimate Multisite là khả năng thêm các trường văn bản, màu sắc và lựa chọn tùy ý vào form đăng ký. Sau khi thu thập được dữ liệu này, chúng ta có thể sử dụng nó để điền sẵn nội dung vào một số phần nhất định của mẫu trang web được chọn. Khi trang web mới được xuất bản, Ultimate Multisite sẽ thay thế các placeholder bằng thông tin thực tế đã được nhập trong quá trình đăng ký.

Ví dụ, bạn có thể tạo các trang web mẫu với các placeholder. Placeholder nên được thêm vào và bao quanh bằng dấu ngoặc nhọn kép - {{placeholder_name}}.

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng để thu thập dữ liệu đó

Khách hàng của bạn sẽ có thể điền vào trường đó trong quá trình đăng ký.

Ultimate Multisite sau đó sẽ tự động thay thế các placeholder bằng dữ liệu do khách hàng cung cấp.

## **Giải quyết vấn đề "mẫu đầy placeholder"**

Tất cả những điều trên đều tuyệt vời, nhưng chúng ta gặp phải một vấn đề khó chịu: giờ đây các mẫu trang web của chúng ta - mà khách hàng có thể truy cập - lại đầy những placeholder xấu xí và không mang nhiều ý nghĩa.

Để giải quyết vấn đề này, chúng tôi cung cấp tùy chọn đặt các giá trị giả cho placeholder, và chúng tôi sử dụng những giá trị này để tìm và thay thế nội dung của chúng trên các trang web mẫu khi khách hàng của bạn đang truy cập.

Bạn có thể truy cập trình chỉnh sửa placeholder của mẫu bằng cách vào **Ultimate Multisite > Settings > Sites**, sau đó, ở thanh bên, nhấp vào liên kết Edit Placeholders.

![Liên kết Edit Placeholders trong thanh bên cài đặt Sites](/img/config/settings-sites.png)

Thao tác này sẽ đưa bạn đến trình chỉnh sửa nội dung placeholder, nơi bạn có thể thêm các placeholder và nội dung tương ứng của chúng.

![Trình chỉnh sửa nội dung placeholder với tên và giá trị placeholder](/img/config/settings-sites.png)
