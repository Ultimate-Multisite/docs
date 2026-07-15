---
title: Auto Search and Replace na Site Templates
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace in Site Templates (v2)

_**Tutorial này yêu cầu WP UItimo phiên bản 2.x.**_

Một trong những tính năng mạnh mẽ nhất của Ultimate Multisite là khả năng thêm bất kỳ văn bản, màu sắc và chọn các trường nào vào biểu mẫu đăng ký. Khi chúng ta đã thu thập được dữ liệu đó, chúng ta có thể dùng nó để điền sẵn nội dung ở một số phần của template trang web đã chọn. Sau đó, khi trang web mới được xuất bản, Ultimate Multisite sẽ thay thế các chỗ giữ chỗ (placeholders) bằng thông tin thực tế mà khách hàng đã nhập trong quá trình đăng ký.

Ví dụ, bạn có thể tạo các trang template của mình với các chỗ giữ chỗ. Các chỗ giữ chỗ nên được đặt trong dấu ngoặc nhọn kép - {{placeholder_name}}.

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng để thu thập dữ liệu đó.

Khách hàng của bạn sau đó sẽ có thể điền vào trường đó trong quá trình đăng ký.

Ultimate Multisite sẽ tự động thay thế các chỗ giữ chỗ bằng dữ liệu do khách hàng cung cấp.

## **Giải quyết vấn đề "template đầy chỗ giữ chỗ"** {#solving-the-template-full-of-placeholders-problem}

Tất cả những điều trên đều tuyệt vời, nhưng chúng ta gặp một vấn đề khó chịu: bây giờ các template trang web của chúng ta - mà khách hàng có thể truy cập được - lại đầy rẫy các chỗ giữ chỗ xấu xí không nói lên nhiều điều.

Để giải quyết việc đó, chúng tôi cung cấp tùy chọn đặt các giá trị giả cho các chỗ giữ chỗ, và chúng tôi dùng những giá trị đó để tìm kiếm và thay thế nội dung của chúng trên các trang template trong khi khách hàng của bạn đang truy cập.

Bạn có thể truy cập trình chỉnh sửa các chỗ giữ chỗ bằng cách vào **Ultimate Multisite > Settings > Sites**, cuộn xuống khu vực Site Template Options, và sau đó nhấp vào liên kết **Edit Placeholders**.

![Khu vực Tùy chọn Template Trang web trong trang cài đặt Sites](/img/config/settings-sites-templates-section.png)

Điều đó sẽ đưa bạn đến trình chỉnh sửa nội dung của các chỗ giữ chỗ, nơi bạn có thể thêm các chỗ giữ chỗ và nội dung tương ứng của chúng.

![Entry point editor template placeholders](/img/config/settings-sites-templates-section.png)
