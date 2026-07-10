---
title: Tự động tìm kiếm và thay thế trong Mẫu trang web
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Tự động Tìm kiếm và Thay thế trong mẫu site (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Hướng dẫn này yêu cầu WP UItimo phiên bản 2.x.**_

Một trong những tính năng mạnh mẽ nhất của Ultimate Multisite là khả năng thêm các trường văn bản, màu sắc và lựa chọn tùy ý vào biểu mẫu đăng ký. Sau khi đã thu thập dữ liệu đó, chúng ta có thể dùng nó để điền sẵn nội dung vào một số phần nhất định của mẫu site đã chọn. Sau đó, khi site mới được xuất bản, Ultimate Multisite sẽ thay thế các phần giữ chỗ bằng thông tin thực tế đã được nhập trong quá trình đăng ký.

Ví dụ, bạn có thể tạo các site mẫu với các phần giữ chỗ. Các phần giữ chỗ nên được thêm vào và bao quanh bằng hai dấu ngoặc nhọn - {{placeholder_name}}.

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng để thu thập dữ liệu đó

Khách hàng của bạn sau đó sẽ có thể điền trường đó trong quá trình đăng ký.

Ultimate Multisite sau đó sẽ tự động thay thế các phần giữ chỗ bằng dữ liệu do khách hàng cung cấp.

## **Giải quyết vấn đề "mẫu đầy phần giữ chỗ"** {#solving-the-template-full-of-placeholders-problem}

Tất cả điều đó đều tuyệt vời, nhưng chúng ta sẽ gặp một vấn đề khó coi: giờ đây các mẫu site của chúng ta - vốn có thể được khách hàng truy cập - lại đầy những phần giữ chỗ xấu xí và không nói lên được nhiều điều.

Để giải quyết điều đó, chúng tôi cung cấp tùy chọn thiết lập các giá trị giả cho các phần giữ chỗ, và chúng tôi dùng các giá trị đó để tìm kiếm và thay thế nội dung của chúng trên các site mẫu trong khi khách hàng của bạn đang truy cập.

Bạn có thể truy cập trình chỉnh sửa phần giữ chỗ của mẫu bằng cách đi tới **Ultimate Multisite > Settings > Sites**, cuộn đến khu vực Tùy chọn Mẫu Site, rồi nhấp vào liên kết **Edit Placeholders**.

![Khu vực Tùy chọn Mẫu Site trong trang cài đặt Sites](/img/config/settings-sites-templates-section.png)

Thao tác đó sẽ đưa bạn đến trình chỉnh sửa nội dung của các phần giữ chỗ, nơi bạn có thể thêm các phần giữ chỗ và nội dung tương ứng của chúng.

![Điểm vào trình chỉnh sửa phần giữ chỗ của mẫu](/img/config/settings-sites-templates-section.png)
