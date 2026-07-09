---
title: Đăng ký Account qua Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Sự kiện: Đăng ký tài khoản qua Zapier {#event-register-an-account-via-zapier}

Trong bài viết [Tích hợp Ultimate Multisite với Zapier](zapier.md), chúng ta đã thảo luận cách sử dụng Zapier để thực hiện các hành động khác nhau trong Ultimate Multisite dựa trên các trình kích hoạt và sự kiện. Trong bài viết này, chúng tôi sẽ chỉ cho bạn cách tích hợp các ứng dụng bên thứ ba. Chúng ta sẽ sử dụng Google Sheets làm nguồn dữ liệu và gửi thông tin đến Ultimate Multisite để đăng ký tài khoản.

Trước khi kết nối Zapier, hãy vào **Ultimate Multisite > Cài đặt > API & Webhooks** và xác nhận API đã được bật. Sao chép API Key và API Secret từ màn hình này khi Zapier yêu cầu thông tin đăng nhập Account Ultimate Multisite.

![Cài đặt API và Webhooks với các tùy chọn API Key, API Secret và Bật API](/img/admin/settings-api-webhooks.png)

Đầu tiên, bạn cần tạo một **Google Sheet** trong Google Drive của mình. Hãy đảm bảo bạn xác định đúng từng cột để có thể dễ dàng ánh xạ dữ liệu sau này.

Sau khi tạo Google sheet, bạn có thể đăng nhập vào tài khoản Zapier của mình và bắt đầu tạo một zap.

Trong trường tìm kiếm cho **"Sự kiện ứng dụng"** hãy chọn **"Google Sheets"**


Sau đó, với trường "**Sự kiện** " hãy chọn "**Hàng bảng tính mới** " và nhấn "**Tiếp tục** "

Bước tiếp theo sẽ yêu cầu bạn chọn một **tài khoản Google** nơi **Google Sheet** được lưu. Vì vậy, hãy đảm bảo rằng tài khoản Google phù hợp đã được chỉ định.


Trong **"Thiết lập trình kích hoạt** ", bạn sẽ cần chọn và chỉ định bảng tính Google và trang tính mà bạn sẽ sử dụng, nơi dữ liệu sẽ đến từ đó. Hãy tiếp tục điền các thông tin đó và nhấn "**Tiếp tục** "

Tiếp theo là "**kiểm tra trình kích hoạt của bạn** " để đảm bảo Google sheet của bạn đã được kết nối đúng cách.

Nếu kiểm tra của bạn thành công, bạn sẽ thấy kết quả hiển thị một số giá trị từ các bảng tính của mình. Nhấp "**Tiếp tục** " để tiếp tục.

Bước tiếp theo là thiết lập hành động thứ hai sẽ tạo hoặc đăng ký tài khoản trong Ultimate Multisite. Trong trường tìm kiếm, chọn "**Ultimate Multisite(2.0.2)** "


Trong trường "**Sự kiện** ", chọn "**Đăng ký Account trong Ultimate Multisite** " rồi nhấp vào nút "**Tiếp tục** ".

Trong "**Thiết lập một hành động** ", bạn sẽ thấy các trường khác nhau có sẵn cho dữ liệu khách hàng, gói membership, sản phẩm, v.v. Bạn có thể ánh xạ các giá trị trong Google sheet của mình và gán chúng cho trường phù hợp nơi chúng sẽ được điền vào như hiển thị trong ảnh chụp màn hình bên dưới.


Sau khi ánh xạ các giá trị, bạn có thể kiểm tra hành động.
