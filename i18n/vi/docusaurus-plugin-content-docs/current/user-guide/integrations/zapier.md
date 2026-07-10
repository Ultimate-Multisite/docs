---
title: Tích hợp Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Tích hợp Ultimate Multisite với Zapier {#integrating-ultimate-multisite-with-zapier}

Trong một bài viết, chúng ta đã thảo luận về [Webhooks](webhooks.md) và cách chúng có thể được dùng để tích hợp với các ứng dụng bên thứ 3.

Sử dụng webhooks hơi phức tạp vì cần kiến thức nâng cao về lập trình và bắt payload. Sử dụng **Zapier** là một cách để bạn vượt qua điều đó.

Zapier có tích hợp với hơn 5000+ ứng dụng, giúp việc giao tiếp giữa các ứng dụng khác nhau trở nên dễ dàng hơn.

Bạn có thể tạo **Triggers** sẽ được kích hoạt khi các sự kiện xảy ra trên mạng của bạn (ví dụ: một Account được tạo và kích hoạt sự kiện account_create) hoặc tạo **Actions** trên mạng của bạn để phản ứng với các sự kiện bên ngoài (ví dụ: tạo một membership Account mới trong mạng Ultimate Multisite của bạn).

Điều này có thể thực hiện được vì **triggers của Ultimate Multisite Zapier** và actions được vận hành bởi [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cách bắt đầu {#how-to-start}

Trước tiên, tìm kiếm Ultimate Multisite trong danh sách ứng dụng Zapier. Ngoài ra, bạn có thể nhấp vào [liên kết này](https://zapier.com/apps/wp-ultimo/integrations).

Đi tới Dashboard của bạn và nhấn nút **+** **Create Zap** trên thanh bên trái để thiết lập một Zap mới.

![Dashboard Zapier với nút Create Zap](/img/admin/webhooks-list.png)

Bạn sẽ được chuyển hướng đến trang tạo Zap.

Trong ô tìm kiếm, nhập "wp ultimo". Nhấp để chọn tùy chọn phiên bản **Beta**.

![Tìm kiếm WP Ultimo trong danh sách ứng dụng Zapier](/img/admin/webhooks-list.png)

Sau khi chọn ứng dụng của chúng tôi, chọn sự kiện có sẵn: **New Ultimate Multisite Event**.

![Chọn trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Bây giờ chúng ta cần cấp cho Zapier quyền truy cập vào **mạng của bạn**. Nhấp vào **Sign in** sẽ mở một cửa sổ mới yêu cầu **thông tin xác thực API**.

![Lời nhắc Sign in của Zapier cho thông tin xác thực API](/img/admin/webhooks-list.png)

Đi tới bảng quản trị mạng của bạn và điều hướng đến **Ultimate Multisite > Settings** > **API & Webhooks** rồi tìm phần API Settings.

Chọn tùy chọn **Enable API** vì tùy chọn này cần thiết để kết nối này hoạt động.

![Cài đặt API and Webhooks với các tùy chọn API Settings và Enable API](/img/admin/settings-api-webhooks.png)

Sử dụng biểu tượng **Copy to Clipboard** trên các trường API Key và API Secret rồi dán các giá trị đó vào màn hình tích hợp.

Trong trường URL, nhập URL đầy đủ của mạng của bạn, bao gồm giao thức (HTTP hoặc HTTPS).

![Màn hình tích hợp Zapier với các trường API Key, Secret và URL](/img/admin/webhooks-list.png)

Nhấp vào nút **Yes, Continue** để chuyển sang bước tiếp theo. Nếu mọi thứ hoạt động tốt, bạn sẽ được chào đón bởi Account mới được kết nối của mình! Nhấp **Continue** để tạo một trigger mới.

## Cách tạo một Trigger mới {#how-to-create-a-new-trigger}

Bây giờ Account của bạn đã được kết nối, bạn có thể xem các sự kiện có sẵn. Hãy chọn sự kiện **payment_received** cho hướng dẫn này.

![Chọn sự kiện payment_received trong trigger Zapier](/img/admin/webhooks-list.png)

Sau khi sự kiện đã được chọn và bạn nhấp **continue**, một **bước kiểm tra** sẽ xuất hiện.

![Bước kiểm tra Zapier cho trigger](/img/admin/webhooks-list.png)

Ở giai đoạn này, Zapier sẽ kiểm tra xem Zap của bạn có thể **lấy payload cụ thể cho sự kiện đó** hay không. Trong các sự kiện tương lai cùng loại, thông tin với cùng cấu trúc này sẽ được gửi đi.

![Kiểm tra trigger Zapier hoàn tất thành công với payload](/img/admin/webhooks-list.png)

Trong hướng dẫn của chúng tôi, bài kiểm tra đã **hoàn tất thành công** và trả về thông tin ví dụ về payload. Thông tin ví dụ này sẽ hữu ích để hướng dẫn chúng ta khi tạo actions. Trigger của bạn hiện đã được tạo và sẵn sàng để kết nối với các ứng dụng khác.

## Cách tạo Actions {#how-to-create-actions}

Actions sử dụng thông tin từ các triggers khác để tạo các mục nhập mới trong mạng của bạn.

Trong **bước tạo một action**, bạn sẽ chọn Ultimate Multisite **Beta** và tùy chọn **Create Items on Ultimate Multisite**.

![Tạo một action với Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Ở bước tiếp theo, bạn sẽ tạo xác thực của mình, giống như chúng ta đã làm trong **Cách bắt đầu**, hoặc chọn một xác thực đã được tạo. Trong hướng dẫn này, chúng ta sẽ chọn cùng xác thực đã tạo trước đó.

![Chọn xác thực cho action Zapier](/img/admin/webhooks-list.png)

### Thiết lập Action {#setting-up-the-action}

Đây là **bước chính của action** và ở đây mọi thứ hơi khác một chút. Thông tin đầu tiên bạn sẽ chọn là **Mục**. Mục là **mô hình thông tin** của mạng của bạn, chẳng hạn như **Khách hàng, Thanh toán, Trang, Email** và các mục khác.

![Chọn loại Mục cho action Zapier](/img/admin/webhooks-list.png)

Khi chọn một mục, biểu mẫu sẽ **sắp xếp lại để hiển thị các trường bắt buộc và tùy chọn** cho mục đã chọn.

Ví dụ, khi chọn mục **Khách hàng**, các trường biểu mẫu sẽ hiển thị mọi thứ cần điền để tạo một Khách hàng mới trong mạng.

![Các trường mục Khách hàng trong thiết lập action Zapier](/img/admin/webhooks-list.png)

Sau khi điền tất cả các trường được đánh dấu là **bắt buộc** và nhấp vào continue, một màn hình cuối cùng sẽ hiển thị cho bạn các trường đã điền và các trường bị bỏ trống.

![Kiểm tra action Zapier hiển thị các trường đã điền và chưa điền](/img/admin/webhooks-list.png)

Ngay khi bài kiểm tra của bạn hoàn tất và thành công, action của bạn đã được cấu hình. Điều quan trọng nữa là kiểm tra trên mạng của bạn xem mục đã được tạo bằng bài kiểm tra action của bạn hay chưa.
