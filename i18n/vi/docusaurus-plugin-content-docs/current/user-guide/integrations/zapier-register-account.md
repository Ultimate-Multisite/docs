---
title: Đăng ký Tài khoản qua Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Sự kiện: Đăng ký tài khoản qua Zapier

Trong bài viết [Tích hợp Ultimate Multisite với Zapier](zapier.md), chúng ta đã thảo luận về cách sử dụng Zapier để thực hiện các hành động khác nhau trong Ultimate Multisite dựa trên các trigger và sự kiện. Trong bài viết này, chúng tôi sẽ hướng dẫn bạn cách tích hợp với các ứng dụng bên thứ ba. Chúng ta sẽ sử dụng Google Sheets làm nguồn dữ liệu và gửi thông tin đến Ultimate Multisite để đăng ký tài khoản.

Trước tiên, bạn cần tạo một **Google Sheet** trong Google Drive của mình. Hãy đảm bảo bạn đặt tên rõ ràng cho từng cột để có thể dễ dàng ánh xạ dữ liệu sau này.

![Google Sheet với các cột chứa dữ liệu khách hàng](/img/admin/webhooks-list.png)Sau khi tạo Google Sheet, bạn có thể đăng nhập vào tài khoản Zapier và bắt đầu tạo một zap.

![Bảng điều khiển Zapier để bắt đầu tạo zap](/img/admin/webhooks-list.png)Trong trường tìm kiếm **"App event"**, chọn **"Google Sheets"**

![Chọn Google Sheets làm app event](/img/admin/webhooks-list.png)

Sau đó, trong trường "**Event**", chọn "**New spreadsheet row**" và nhấn "**Continue**"

![Chọn sự kiện New spreadsheet row trong Zapier](/img/admin/webhooks-list.png)Bước tiếp theo sẽ yêu cầu bạn chọn **Tài khoản Google** nơi lưu trữ **Google Sheet**. Vì vậy, hãy đảm bảo rằng bạn đã chọn đúng tài khoản Google.

![Chọn Tài khoản Google cho Google Sheet](/img/admin/webhooks-list.png)

Trong phần "**Set up trigger**", bạn cần chọn và chỉ định bảng tính Google và worksheet mà bạn sẽ sử dụng làm nguồn dữ liệu. Hãy điền các thông tin này và nhấn "**Continue**"

![Thiết lập trigger với lựa chọn bảng tính và worksheet](/img/admin/webhooks-list.png)Tiếp theo là "**test your trigger**" để đảm bảo rằng Google Sheet của bạn đã được kết nối đúng cách.

![Bước kiểm tra trigger trong Zapier](/img/admin/webhooks-list.png)Nếu kiểm tra thành công, bạn sẽ thấy kết quả hiển thị một số giá trị từ bảng tính của mình. Nhấn "**Continue**" để tiếp tục.

![Kiểm tra trigger thành công hiển thị các giá trị từ bảng tính](/img/admin/webhooks-list.png)Bước tiếp theo là thiết lập hành động thứ hai để tạo hoặc đăng ký tài khoản trong Ultimate Multisite. Trong trường tìm kiếm, chọn "**Ultimate Multisite(2.0.2)**"

![Chọn Ultimate Multisite làm ứng dụng hành động](/img/admin/webhooks-list.png)

Trong trường "**Event**", chọn "**Register an Account in Ultimate Multisite**" rồi nhấn nút "**Continue**".

![Sự kiện hành động Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)Trong phần "**Set up an action**", bạn sẽ thấy các trường khác nhau dành cho dữ liệu khách hàng, gói thành viên, sản phẩm, v.v. Bạn có thể ánh xạ các giá trị từ Google Sheet và gán chúng vào đúng trường tương ứng như được hiển thị trong ảnh chụp màn hình bên dưới.

![Ánh xạ giá trị Google Sheet vào các trường Ultimate Multisite](/img/admin/webhooks-list.png)

Sau khi ánh xạ các giá trị, bạn có thể kiểm tra hành động.

![Kiểm tra hành động đăng ký tài khoản trong Zapier](/img/admin/webhooks-list.png)
