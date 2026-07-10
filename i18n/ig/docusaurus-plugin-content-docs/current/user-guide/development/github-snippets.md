---
title: Nkwado GitHub
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Cara dùng các đoạn mã Ultimate Multisite trên kho GitHub của chúng tôi {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Có những đoạn mã (code snippets) có sẵn trong kho GitHub mà người dùng Ultimate Multisite hay yêu cầu để thêm các chức năng nhỏ như thêm script Google Analytics vào trang đăng ký hoặc ẩn một meta box khỏi bảng điều khiển admin.

Bài viết này sẽ chỉ cho bạn cách sử dụng hoặc cụ thể hơn là đặt các đoạn mã đó ở đâu.

Bạn có thể tìm thấy các đoạn mã trên đường link dưới đây:

https://github.com/next-press/wp-ultimo-snippets/

Có 2 cách để bạn thêm mã vào:

  1. Trong file functions.php của theme của bạn.

  2. Các Plugin Must-Use (mu-plugins).

# Cách thêm đoạn mã vào file functions.php của theme của bạn. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Đăng nhập vào bảng điều khiển admin Network WordPress của bạn và đi đến Themes > Theme Editor (Xem ảnh chụp màn hình bên dưới).

  2. Trên trang "Edit Themes", hãy đảm bảo rằng bạn đã chọn theme đang hoạt động của mình trong ô thả xuống ở phía trên bên phải màn hình (#3 trên ảnh chụp màn hình bên dưới).

  3. Nhấp vào file functions.php trong mục "Theme Files" để tải file lên. Cuộn xuống cuối và dán đoạn mã Ultimate Multisite mà bạn lấy từ kho GitHub.

<!-- Ảnh chụp màn hình không có sẵn: WordPress Theme Editor hiển thị việc chỉnh sửa file functions.php -->

# Cách tạo các Plugin Must-Use (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress có một tính năng cho phép bạn tải các chức năng tùy chỉnh được gọi là "Must-Use Plugins", hay viết tắt là "mu-plugins".

Các mu-plugins đặc biệt này sẽ được tải trước tất cả các plugin thông thường khác, và chúng không thể bị vô hiệu hóa. Trong mạng multisite, mã trong các mu-plugins này sẽ được tải trên tất cả các trang web trong cài đặt của bạn.

1. Sử dụng FTP hoặc SSH để truy cập vào hệ thống file (filesystem) của bản cài đặt WordPress của bạn.

2. Na içinde diretory wp-content na WordPress install của bạn, hãy tạo một thư mục mới tên là: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Tạo một file PHP mới trên máy tính của bạn tên là wu-snippet.php bằng Notepad hoặc bất kỳ trình soạn thảo code nào.

4. Đặt đoạn mã Ultimate Multisite mà bạn lấy từ GitHub repository vào file đó và lưu lại. Bạn cũng có thể thêm đoạn mã này lên trên đoạn mã snippet để đặt tên cho mu plugin của mình.
