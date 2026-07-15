---
title: Lỗi Tệp Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Lỗi Cài Đặt File Sunrise

File sunrise.php là một file đặc biệt mà WordPress sẽ tìm kiếm trong quá trình khởi động. Để WordPress có thể phát hiện file sunrise.php, file này cần được đặt trong **thư mục wp-content**.

Khi bạn kích hoạt Ultimate Multisite và thực hiện các bước trong trình hướng dẫn cài đặt như trong ảnh chụp màn hình, Ultimate Multisite sẽ cố gắng sao chép file sunrise.php của chúng tôi vào thư mục wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Trong hầu hết các trường hợp, chúng tôi có thể sao chép file thành công và mọi thứ hoạt động bình thường. Tuy nhiên, nếu có điều gì đó chưa được thiết lập đúng cách (ví dụ như quyền truy cập thư mục), bạn có thể gặp phải tình huống Ultimate Multisite không thể sao chép file.

Nếu bạn đọc thông báo lỗi mà Ultimo đưa ra, bạn sẽ thấy đó chính xác là điều đã xảy ra ở đây: **Sunrise copy failed** (Sao chép Sunrise thất bại).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Để khắc phục vấn đề này, bạn chỉ cần sao chép file sunrise.php từ thư mục plugin wp-ultimo và dán vào thư mục wp-content của bạn. Sau khi thực hiện xong, hãy tải lại trang hướng dẫn và các bước kiểm tra sẽ được thông qua.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Dù sao đi nữa, đây có thể là dấu hiệu cho thấy bạn nên kiểm tra tổng thể quyền truy cập thư mục để tránh gặp vấn đề trong tương lai (không chỉ với Ultimate Multisite mà còn với các plugin và theme khác).

**Công cụ Health Check** tích hợp sẵn trong WordPress (bạn có thể truy cập qua **trang quản trị chính > Tools > Health Check**) có khả năng cho bạn biết liệu quyền truy cập thư mục của bạn có được đặt ở các giá trị có thể gây ra vấn đề với WordPress hay không.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
