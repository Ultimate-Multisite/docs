---
title: Nkwado Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Install Ultimate Multisite

:::note
Tutorial này giả định bạn đã cài đặt và cấu hình WordPress Multisite rồi. Để tìm hiểu cách làm, bạn có thể xem hướng dẫn [này](https://www.wpbeginner.com/glossary/multisite/) của WP Beginner.
:::

## Cài Đặt Plugin

Ultimate Multisite miễn phí trên [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Từ **Network Admin Dashboard** (Bảng điều khiển Quản trị Mạng), hãy vào **Plugins → Add New Plugin**.

![Trang thêm plugin của Network Admin](/img/installation/add-new-plugin.png)

Tìm kiếm **"Ultimate Multisite"** (dùng dấu ngoặc kép để tìm chính xác) và nó sẽ hiện ra là kết quả đầu tiên. Nhấn **Install Now** (Cài đặt ngay).

![Kết quả tìm kiếm hiển thị Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Sau khi cài xong, hãy nhấn **Network Activate** (Kích hoạt Mạng) để kích hoạt plugin này trên toàn bộ mạng của bạn.

![Plugin đã được cài đặt với nút Network Activate](/img/installation/plugin-installed.png)

Sau khi kích hoạt, bạn sẽ tự động được chuyển đến Trình hướng dẫn Thiết lập (Setup Wizard).

![Plugin đã được kích hoạt và chuyển hướng đến trình hướng dẫn](/img/installation/plugin-activated.png)

## Trình Hướng Dẫn Thiết Lập (Setup Wizard)

Trình Hướng Dẫn Thiết Lập sẽ hướng dẫn bạn cấu hình Ultimate Multisite trong khoảng 10 phút.

### Chào Mừng

Nhấn **Get Started** (Bắt đầu) để bắt đầu.

![Màn hình chào mừng của Setup Wizard](/img/installation/wizard-welcome.png)

### Kiểm Tra Trước Khi Cài Đặt (Pre-install Checks)

Bước này sẽ kiểm tra thông tin hệ thống và cài đặt WordPress của bạn để đảm bảo nó đáp ứng các yêu cầu của Ultimate Multisite. Nếu mọi thứ đều ổn, hãy nhấn **Go to the Next Step** (Chuyển sang Bước Tiếp theo).

![Kiểm tra trước khi cài đặt hiển thị yêu cầu hệ thống](/img/installation/wizard-pre-install-checks.png)

:::note Button Activate Network (v2.6.1+)
Ka Ultimate Multisite nwere install but **ekwu na-akịta network** — ọ bụrụ na ị chọrọ **Activate** (single-site) ma ọ bụ **Network Activate** n'ụzọ dị ka na siri screen plugins network — Pre-install Checks step ahụ ga-adị n'ụzọ ahụ na ọ ga-nwe button **Network Activate**.

Ihe ị chọrọ **Network Activate** ga-nwere plugin ahụ dịka ọkụkọ (multisite) gị ma ọ bụrụ. Oge ị chọrọ, wizard ahụ ga-enwe onye na step installation. Ọ dịghị ihe ị chọrọ ịlụ, ka ị chọrọ ịgbanwe akụkọ activation state.
:::

### Installation

Installer ahụ ga-nwere database tables ndị dị mkpa ma ga-nwere file `sunrise.php` nke Ultimate Multisite na-agba n'ụzọ ahụ. Chọrọ **Install** ka ị chọrọ ịgbanwe.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company

Jiji maara ihe nkwado gị na information company gị ma ria set default currency (ara anyị mụta ihe dị n'ụzọ ahụ). Information a ga-e risiti n'ụzọ ahụ ọ bụrụ na ị na-agba WaaS platform gị. Chọrọ **Continue** mgbe ị chụrụ ihe ị chọrọ.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

Ihe a bụ step ahụ ga-nwe gị ịba templates, products, na ihe ndị ọzọ dị n'ụzọ ahụ. Oge a bụ ọ dị mma ịmata features Ultimate Multisite. Chọrọ **Install** ka ị chọrọ ịba content default, ma ọ bụ ria pasoọ step a ma ọ bụrụ na ị chọrọ ịgbanwe site n'ụzọ ahụ.

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins

Ọ dị mma ịba companion plugins ndị a mere. Chọrọ **Install** ka ị chọrọ ịba ha ma ọ bụ ria pasoọ ka ị chọrọ ịgbanwe.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready!

Done! Installation Ultimate Multisite của bạn đã hoàn tất rồi. Bây giờ bạn có thể bắt đầu xây dựng nền tảng Website as a Service của mình từ **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Cứ thoải mái thử nghiệm đi!
