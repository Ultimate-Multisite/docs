---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cách sử dụng các đoạn mã Ultimate Multisite trên kho GitHub của chúng tôi

Có các đoạn mã có sẵn trên kho GitHub được người dùng Ultimate Multisite thường xuyên yêu cầu khi muốn thêm các chức năng nhỏ như thêm mã Google Analytics vào trang đăng ký hoặc ẩn một meta box khỏi bảng điều khiển quản trị.

Bài viết này sẽ hướng dẫn bạn cách sử dụng hoặc cụ thể hơn là nơi đặt các đoạn mã này.

Bạn có thể tìm thấy các đoạn mã tại liên kết bên dưới.

https://github.com/next-press/wp-ultimo-snippets/

Có 2 cách để bạn thêm mã

  1. Trong file functions.php của theme.

  2. Must-Use Plugins (mu-plugins)

# Cách thêm đoạn mã vào file functions.php của theme

  1. Đăng nhập vào bảng điều khiển quản trị WordPress Network và vào Themes > Theme Editor (Xem ảnh chụp màn hình bên dưới).

  2. Trên trang "Edit Themes", hãy đảm bảo rằng bạn đã chọn theme đang sử dụng trong trường dropdown nằm ở góc trên bên phải màn hình (#3 trên ảnh chụp màn hình bên dưới).

  3. Nhấp vào file functions.php trong phần "Theme Files" để tải file. Cuộn xuống cuối trang và dán đoạn mã Ultimate Multisite bạn lấy từ kho GitHub.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Cách tạo Must-Use Plugins (mu-plugins)

WordPress có một tính năng cho phép bạn tải các chức năng tùy chỉnh gọi là "Must-Use Plugins", hay viết tắt là "mu-plugins".

Các mu-plugins đặc biệt này được tải trước tất cả các plugin thông thường khác, và chúng không thể bị vô hiệu hóa. Trong một mạng multisite, mã trong các mu-plugins này sẽ được tải trên tất cả các trang web trong bản cài đặt của bạn.

1\. Sử dụng FTP hoặc SSH để truy cập hệ thống file của bản cài đặt WordPress.

2\. Bên trong thư mục wp-content của bản cài đặt WordPress, tạo một thư mục mới có tên: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Tạo một file PHP mới trên máy tính của bạn có tên wu-snippet.php bằng Notepad hoặc bất kỳ trình soạn thảo mã nào.

4\. Đặt đoạn mã Ultimate Multisite bạn lấy từ kho GitHub vào file và lưu lại. Bạn cũng có thể thêm đoạn mã này ở đầu đoạn mã snippet để đặt nhãn cho mu plugin của bạn.
