---
title: Cách Cài Đặt WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Làm thế nào để cài đặt WordPress Multisite?

WordPress Multisite cho phép bạn có một mạng lưới các trang web trên cùng một bản cài đặt. Đây là tính năng có sẵn, nhưng không được kích hoạt mặc định.

:::tip
Ultimate Multisite có sẵn **[Trình hướng dẫn thiết lập Multisite](./multisite-setup-wizard)** giúp tự động hóa toàn bộ quy trình này. Nếu bạn đã cài đặt Ultimate Multisite, chúng tôi khuyên bạn nên sử dụng trình hướng dẫn thay vì làm theo các bước thủ công bên dưới.
:::

Vì Ultimate Multisite là plugin chỉ hoạt động trên mạng lưới, trong hướng dẫn này, bạn sẽ học cách cài đặt và thiết lập WordPress Multisite thủ công. Nội dung này dựa trên bài viết [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) từ WPBeginner.

**Những điều cần lưu ý trước khi tạo mạng lưới multisite:**

  * Chọn dịch vụ hosting WordPress chất lượng! Các trang web trong mạng lưới dùng chung tài nguyên máy chủ.

  * Nếu bạn chỉ có vài trang web với lưu lượng truy cập thấp, shared hosting có thể đáp ứng được nhu cầu của bạn.

  * Hầu hết các **nhà cung cấp Managed WordPress hosting** đều hỗ trợ Multisite sẵn (họ cài đặt WordPress với Multisite đã được kích hoạt và cấu hình sẵn cho bạn). Đây là trường hợp của WP Engine, Closte, Cloudways, v.v. Nếu bạn không chắc nhà cung cấp hosting của mình có hỗ trợ hay không, hãy liên hệ bộ phận hỗ trợ của họ trước khi tiếp tục với hướng dẫn này.

  * Bạn cũng nên làm quen với việc cài đặt WordPress và chỉnh sửa file bằng FTP.

_**QUAN TRỌNG**_ **:** Nếu bạn đang thiết lập mạng lưới multisite trên một trang WordPress đã có sẵn, đừng quên:

  * Tạo bản sao lưu đầy đủ cho trang WordPress của bạn

  * Tắt tất cả các plugin trên trang bằng cách vào trang plugins, chọn _Deactivate_ từ bulk actions rồi nhấn _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Để kích hoạt Multisite, trước tiên hãy kết nối với trang web của bạn bằng FTP client hoặc trình quản lý file của cPanel, rồi mở file wp-config.php để chỉnh sửa.

Trước dòng _*That's all, stop editing! Happy blogging.*_, thêm đoạn code sau:

define('WP_ALLOW_MULTISITE', true);

Lưu và tải file wp-config.php lên lại máy chủ.

Sau khi đã kích hoạt tính năng multisite trên trang web, bây giờ là lúc thiết lập mạng lưới của bạn.

Vào **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Bây giờ bạn cần cho WordPress biết cấu trúc domain bạn sẽ sử dụng cho các trang trong mạng lưới: subdomain hay subdirectory.

Nếu bạn chọn subdomain, bạn phải thay đổi cài đặt DNS để ánh xạ domain và đảm bảo thiết lập _**wildcard subdomains**_ cho mạng lưới multisite của bạn.

Quay lại Network Setup, đặt tiêu đề cho mạng lưới và đảm bảo địa chỉ email trong ô Network admin email là chính xác. Nhấn _Install_ để tiếp tục.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Thêm đoạn code này (do WordPress cung cấp) vào file _**wp-config.php**_ của bạn:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Và đoạn code này (cũng do WordPress cung cấp) vào file _**.htaccess**_ của bạn:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# thêm dấu gạch chéo vào cuối /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Sử dụng FTP client hoặc trình quản lý file (nếu bạn đang dùng cPanel chẳng hạn) để sao chép và dán đoạn code vào hai file này.

Cuối cùng, đăng nhập lại vào trang WordPress của bạn để truy cập mạng lưới multisite.

**Điều quan trọng là phải kiểm tra và đảm bảo rằng bạn có thể tạo subsite trên bản cài đặt WordPress Multisite trước khi cài đặt Ultimate Multisite.**

Để tạo một subsite:

  1. Mở wp-admin của trang web

  2. Điều hướng đến My Sites > Sites (/wp-admin/network/sites.php)

  3. Nhấn Add New ở phía trên

  4. Điền đầy đủ các trường:

  * Site Address — Không bao giờ sử dụng "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Tiêu đề của trang, có thể thay đổi sau

  * Admin Email — Được đặt làm người dùng admin ban đầu cho subsite

![Biểu mẫu thêm trang mới trong WordPress Multisite](/img/admin/sites-list.png)

Sau khi điền đầy đủ các trường, nhấn nút "Add site". Khi subsite mới được tạo, hãy truy cập vào nó để đảm bảo subsite hoạt động bình thường.

## Các vấn đề thường gặp:

### 1\. Tôi có thể tạo trang mới nhưng không truy cập được.

Nếu bạn chọn subdomain, bạn cũng cần thiết lập wildcard subdomains cho mạng lưới multisite của mình.

Để làm điều này, hãy vào bảng điều khiển của tài khoản hosting trang web (ví dụ: cPanel/Plesk/Direct Admin tùy thuộc vào nhà cung cấp hosting của bạn).

Tìm tùy chọn "Domains" hoặc "Subdomains". Trong một số bảng điều khiển, nó được gọi là "Domain administration".

Trong trường subdomain, nhập dấu hoa thị (*). Sau đó, hệ thống sẽ yêu cầu bạn chọn tên domain mà bạn muốn thêm subdomain vào.

Document root cho tên domain đã chọn sẽ được phát hiện tự động. Nhấn nút _Create_ hoặc _Save_ để thêm wildcard subdomain. Mục nhập sẽ hiển thị dạng "*.[mydomain.com](http://mydomain.com)"
