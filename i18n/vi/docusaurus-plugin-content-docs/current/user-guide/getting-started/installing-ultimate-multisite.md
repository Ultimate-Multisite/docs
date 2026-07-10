---
title: Cài đặt Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Cài đặt Ultimate Multisite {#installing-ultimate-multisite}

:::note
Hướng dẫn này giả định rằng bạn đã cài đặt và cấu hình WordPress Multisite. Để tìm hiểu cách thực hiện, hãy xem [hướng dẫn này](https://www.wpbeginner.com/glossary/multisite/) của WP Beginner.
:::

## Cài đặt Plugin {#installing-the-plugin}

Ultimate Multisite có sẵn miễn phí trên [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Từ **Bảng điều khiển Quản trị Mạng** của bạn, hãy chuyển đến **Plugins → Thêm Plugin mới**.

![Trang "Thêm Plugin mới" trong Bảng điều khiển Quản trị Mạng](/img/installation/add-new-plugin.png)

Tìm kiếm **"Ultimate Multisite"** (sử dụng dấu ngoặc kép để tìm chính xác) và nó sẽ xuất hiện như kết quả đầu tiên. Nhấp vào **Cài đặt ngay**.

![Kết quả tìm kiếm hiển thị Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Sau khi cài đặt, nhấp vào **Kích hoạt trên Mạng** để kích hoạt plugin trên toàn bộ mạng của bạn.

![Plugin đã được cài đặt với nút "Kích hoạt trên Mạng"](/img/installation/plugin-installed.png)

Sau khi kích hoạt, bạn sẽ tự động được chuyển hướng đến Trình hướng dẫn Cài đặt.

![Plugin đã được kích hoạt và chuyển hướng đến trình hướng dẫn](/img/installation/plugin-activated.png)

## Trình hướng dẫn Cài đặt {#setup-wizard}

Trình hướng dẫn Cài đặt sẽ hướng dẫn bạn cấu hình Ultimate Multisite trong khoảng 10 phút.

### Chào mừng {#welcome}

Nhấp vào **Bắt đầu** để bắt đầu.

![Màn hình chào mừng của Trình hướng dẫn Cài đặt](/img/installation/wizard-welcome.png)

### Kiểm tra trước khi cài đặt {#pre-install-checks}

Bước này kiểm tra thông tin hệ thống và cài đặt WordPress của bạn để đảm bảo rằng nó đáp ứng các yêu cầu của Ultimate Multisite. Nếu mọi thứ đều ổn, hãy nhấp vào **Chuyển đến bước tiếp theo**.

![Kiểm tra trước khi cài đặt hiển thị các yêu cầu hệ thống](/img/installation/wizard-pre-install-checks.png)

:::note Nút "Kích hoạt trên Mạng" (phiên bản 2.6.1+)
Nếu Ultimate Multisite đã được cài đặt nhưng **chưa được kích hoạt trên mạng** — ví dụ: nếu bạn nhấp vào **Kích hoạt** (cho một trang web đơn lẻ) thay vì **Kích hoạt trên Mạng** từ màn hình plugin của mạng — bước Kiểm tra trước khi cài đặt sẽ phát hiện điều này và hiển thị nút **Kích hoạt trên Mạng**.

Nhấp vào **Kích hoạt trên Mạng** sẽ kích hoạt plugin trên toàn bộ mạng multisite của bạn một cách tự động. Sau khi kích hoạt, trình hướng dẫn sẽ tiếp tục bình thường đến bước cài đặt. Bạn không cần phải rời khỏi trình hướng dẫn để khắc phục trạng thái kích hoạt.
:::

### Cài đặt {#installation}

Trình cài đặt sẽ tạo các bảng cơ sở dữ liệu cần thiết và cài đặt tệp `sunrise.php` mà Ultimate Multisite cần để hoạt động. Nhấp vào **Cài đặt** để tiếp tục.

![Bước cài đặt hiển thị các bảng cơ sở dữ liệu và tệp sunrise.php](/img/installation/wizard-installation.png)

### Thông tin Công ty của bạn {#your-company}

Điền thông tin công ty của bạn và đặt đơn vị tiền tệ mặc định. Thông tin này sẽ được sử dụng trong toàn bộ nền tảng WaaS của bạn. Nhấp vào **Tiếp tục** khi hoàn tất.

![Bước cấu hình "Thông tin Công ty của bạn"](/img/installation/wizard-your-company.png)

### Nội dung Mặc định {#default-content}

Bước này cho phép bạn cài đặt các mẫu được xác định trước, sản phẩm và nội dung khởi đầu khác. Đây là một cách tuyệt vời để làm quen với các tính năng của Ultimate Multisite. Nhấp vào **Cài đặt** để thêm nội dung mặc định hoặc bỏ qua bước này nếu bạn muốn bắt đầu từ đầu.

![Bước cài đặt nội dung mặc định](/img/installation/wizard-default-content.png)

### Plugin Được Khuyến nghị {#recommended-plugins}

Tùy chọn cài đặt các plugin bổ trợ được khuyến nghị. Nhấp vào **Cài đặt** để thêm chúng hoặc bỏ qua để tiếp tục.

![Bước plugin được khuyến nghị](/img/installation/wizard-recommended-plugins.png)

### Hoàn tất! {#ready}

Vậy là xong! Quá trình cài đặt Ultimate Multisite của bạn đã hoàn tất. Bây giờ bạn có thể bắt đầu xây dựng nền tảng Website as a Service của mình từ **Bảng điều khiển Quản trị Mạng**.

![Cài đặt hoàn tất - Màn hình "Hoàn tất"](/img/installation/wizard-ready.png)

![Bảng điều khiển Quản trị Mạng với Ultimate Multisite đã được kích hoạt](/img/installation/network-dashboard.png)

Hãy bắt đầu và tận hưởng nhé!
