---
title: Kedu ihe na ịlanjiri WordPress Multisite?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Naa m ga-adị WordPress Multisite?

WordPress Multisite na-eme gị ịkwado mere site ndị dị n'ụ ha ọkụ ọkụ (single installation). O chebe bụ ihe a anọchịrị, mana ọ dịghịrụ ọrụ (not active) ma ọ bụ default.

:::tip
Ultimate Multisite na-eme ka ị chọpụta **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** nke na-eme ihe oru ahụ. O na-eme ka ihe niile a dị mma. Ka ọ bụrụ gị Ultimate Multisite, anyị na-eme ka ị ri dị mma ịrụ ihe oru ahụ na-eme ka ị chọpụta WordPress Multisite ọ byọ (manually). Ọ bụ ihe atazini na [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), nwere WPBeginner.

**Ihe ị chọrọ ịgba ọsọ ọkụ ka ọ bụrụ na gị na-eme Multisite network:**

  * Keti hosting WordPress nke ọma! Ụlọ ndị dị n'ụ ha site ndị dị n'ụ ha server resources dị sama.

  * Ma ọ bụrụ na ị nwere site abụọ dị nwere traffic ọkụ, shared hosting ga-adị mma gị.

  * Ọ bụ na ọtụtụ **Managed WordPress hosting providers** na-eme Multisite out-of-the-box (ha na-eme ka ha na-eme WordPress na-emeka Multisite dị nwere ma a-configure ya anọ). O bụ ihe a na WP Engine, Closte, Cloudways, na ihe ndị ọzọ. Ma ọ bụrụ na ị na-enwe mma gị na ihe a na hosting provider gị, keti ya support ma ọ bụrụ na ị ga-eme ihe oru ahụ a na tutorial a.

  * Ọ dịkwa na ị na-eme Multisite network na-eme WordPress site dị nwere FTP na ị chọpụta file ndị a.

_**IMPORTANT**_ **:** Ma ọ bụrụ na ị na-eme multisite network na-eme WordPress website dị nwere, ka ị chọrọ ịkọwa:

  * Keti backup toọala nke site WordPress gị

  * A-deactivate (na-eme ka ọ dịghị ọnụ) onye-onye plugins na site gị ma ị ga-akwụsị _Deactivate_ n'ime bulk actions a na sonra ị kpọta _Apply_.

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Na iweghị Multisite (Multisite) na-eme, ka ị chọr gị site-nwa n'ụzọ FTP client ma ọ bụ cPanel file manager, ka ị lewo file wp-config.php anọrọrị maka ị chọrịta.

Ma ọ bụ, a bụrụ na ị na-eme ihe ndị a, stop editing! Happy blogging.

Ka oge ị chọrịta, jiji code snippet a:

define('WP_ALLOW_MULTISITE', true);

Save (sọp) ma upload file wp-config.php anọrọrị gị geri n'ụzọ server ahụ.

Ma ọ bụ na ị chọrịta Multisite na site-nwa gị, oge ịmata network-nwa gị.

Go to **Tools » Network Setup** (Tụkwa » Network Setup)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Jiji, ị ga-eme ka WordPress ji gị gị ọrịa domain structure ị ga-eme maka sites ndị na network-nwa gị: subdomains (subdomain) ma ọ bụ subdirectories (subdirectory).

Ma ọ bụ na ị chọrọ subdomain, ị ga-eme zmiri settings DNS gị maka domain mapping ma ị gba ihe _**wildcard subdomains**_ maka network-nwa gị.

Geri n'Network Setup, gbaa oge aka maka enyemọrị (title) maka network-nwa gị ma jiji ka email address na Network admin email bụ ọchịchị. Click _Install_ (Install) maka ị continua.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Jiji, gbaa code a, nke WordPress ji gị gị anọrọrị:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Ma ọ bụ code a, nke WordPress ji gị gị file _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Sử dụng một FTP client hoặc trình quản lý tệp (nếu bạn đang dùng cái gì đó như cPanel, ví dụ) để sao chép và dán mã này vào hai tệp sau.

Cuối cùng, hãy đăng nhập lại vào trang WordPress của bạn để truy cập mạng multisite của mình.

**Điều quan trọng là phải kiểm tra và đảm bảo rằng bạn có thể tạo một subsite trên cài đặt WordPress Multisite của mình trước khi cài Ultimate Multisite.**

Để tạo một subsite:

  1. Mở wp-admin của các trang web của bạn

  2. Điều hướng đến My Sites > Sites (/wp-admin/network/sites.php)

  3. Nhấn Add New ở trên cùng

  4. Điền đầy đủ tất cả các trường:

  * Site Address — Tuyệt đối không dùng “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Tiêu đề của trang web, có thể thay đổi sau này

  * Admin Email — Đặt làm người dùng quản trị ban đầu cho subsite đó

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Sau khi điền đầy các trường, hãy nhấn nút "Add site" (Thêm trang web). Khi subsite mới được tạo, hãy truy cập nó để đảm bảo rằng subsite hoạt động tốt.

## Các Vấn đề Thường gặp:

### 1. Tôi có thể tạo trang web mới nhưng không truy cập được.

Nếu bạn chọn dùng subdomain, bạn cũng cần thiết lập các wildcard subdomain cho mạng multisite của mình.

Để làm điều đó, hãy vào bảng điều khiển (control panel) tài khoản lưu trữ trang web của bạn (ví dụ cPanel/Plesk/Direct Admin tùy thuộc vào nhà cung cấp dịch vụ lưu trữ của bạn).

Tìm một tùy chọn có tên là “Domains” (Tên miền) hoặc “Subdomains” (Subdomain). Trong một số bảng điều khiển, nó được dán nhãn là “Domain administration” (Quản trị tên miền).

Na campo tên phụ (subdomain), hãy nhập dấu sao (*). Sau đó, nó sẽ yêu cầu bạn chọn một tên miền mà bạn muốn thêm cái tên phụ vào dưới đó.

WordPress sẽ tự động nhận diện thư mục gốc (document root) của tên miền đã chọn. Hãy nhấn nút _Create_ hoặc _Save_ để thêm tên phụ đại diện (wildcard subdomain) của bạn. Mục nhập nên trông như thế này: “*.[mydomain.com](http://mydomain.com)”
