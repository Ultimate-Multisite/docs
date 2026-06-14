---
title: Nkwado Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Kết nối Ultimate Multisite với Zapier

Trong một bài viết, chúng tôi đã nói về [Webhooks](webhooks.md) và cách chúng có thể được dùng để kết nối với các ứng dụng bên thứ ba.

Sử dụng webhooks hơi phức tạp vì nó đòi hỏi kiến thức nâng cao về lập trình và bắt các dữ liệu gửi đi (payloads). Dùng **Zapier** là một cách giúp bạn vượt qua điều đó.

Zapier có tích hợp với hơn 5000+ ứng dụng, giúp việc giao tiếp giữa các ứng dụng khác nhau trở nên dễ dàng hơn nhiều.

Bạn có thể tạo ra các **Triggers** (Bộ kích hoạt) sẽ được kích hoạt khi có sự kiện xảy ra trên mạng của bạn (ví dụ: một tài khoản được tạo và kích hoạt sự kiện `account_create`) hoặc tạo ra các **Actions** (Hành động) trên mạng của bạn để phản ứng với các sự kiện bên ngoài (ví dụ: tạo thành viên mới trong mạng Ultimate Multisite của bạn).

Điều này khả thi vì các **triggers** và **actions** của **Ultimate Multisite Zapier** được cung cấp bởi [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cách bắt đầu

Đầu tiên, hãy tìm kiếm Ultimate Multisite trong danh sách ứng dụng của Zapier. Hoặc bạn có thể nhấp vào [đường dẫn này](https://zapier.com/apps/wp-ultimo/integrations).

Truy cập bảng điều khiển (dashboard) của bạn và nhấn nút **+** **Create Zap** ở thanh bên trái để thiết lập một Zap mới.

![Bảng điều khiển Zapier với nút Create Zap](/img/admin/webhooks-list.png)

Bạn sẽ được chuyển hướng đến trang tạo Zap.

Trong ô tìm kiếm, hãy gõ "wp ultimo". Nhấp vào đó để chọn tùy chọn phiên bản **Beta**.

![Tìm kiếm WP Ultimo trong danh sách ứng dụng Zapier](/img/admin/webhooks-list.png)

Sau khi chọn ứng dụng của chúng tôi, hãy chọn sự kiện có sẵn: **New Ultimate Multisite Event** (Sự kiện Ultimate Multisite mới).

![Chọn trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Bây giờ chúng ta cần cấp quyền cho Zapier truy cập vào **mạng của bạn**. Nhấp vào **Sign in** (Đăng nhập) sẽ mở một cửa sổ mới yêu cầu **API credentials** (Thông tin xác thực API).

![Prompt đăng nhập Zapier cho thông tin xác thực API](/img/admin/webhooks-list.png)

Đi đến bảng điều khiển quản trị mạng của bạn và tìm đến **Ultimate Multisite > Settings** > **API & Webhooks** rồi tìm phần Cài đặt API (API Settings).

Chọn tùy chọn **Enable API** vì nó là bắt buộc để kết nối này hoạt động được.

![Cài đặt API và Webhooks với các tùy chọn Cài đặt API và Bật API](/img/admin/settings-api-webhooks.png)

Sử dụng biểu tượng **Copy to Clipboard** (Sao chép vào Clipboard) trên các trường API Key và API Secret rồi dán các giá trị đó vào màn hình tích hợp (integration screen).

Trong ô URL, hãy nhập toàn bộ URL mạng của bạn, bao gồm cả giao thức (HTTP hoặc HTTPS).

![Màn hình tích hợp Zapier với các trường API Key, Secret và URL](/img/admin/webhooks-list.png)

Nhấn nút **Yes, Continue** (Có, Tiếp tục) để chuyển sang bước tiếp theo. Nếu mọi thứ hoạt động tốt, bạn sẽ được chào đón bởi tài khoản đã kết nối mới của mình! Nhấn vào **Continue** (Tiếp tục) để tạo một trigger mới.

## Cách tạo một Trigger mới

Bây giờ khi tài khoản của bạn đã được kết nối, bạn có thể xem các sự kiện khả dụng. Hãy chọn sự kiện **payment_received** cho hướng dẫn này nhé.

![Chọn sự kiện payment_received trong trigger Zapier](/img/admin/webhooks-list.png)

Sau khi đã chọn sự kiện và nhấn **continue**, một bước kiểm tra (test step) sẽ xuất hiện.

![Bước kiểm tra Zapier cho trigger](/img/admin/webhooks-list.png)

Ở giai đoạn này, Zapier sẽ kiểm tra xem Zap của bạn có thể **lấy được payload cụ thể cho sự kiện đó** hay không. Đối với các sự kiện cùng loại trong tương lai, thông tin với cấu trúc tương tự này sẽ được gửi đi.

![Kiểm tra trigger Zapier hoàn tất thành công với payload](/img/admin/webhooks-list.png)

Na tutorial của chúng tôi, bài kiểm tra đã được **hoàn thành thành công** và trả về thông tin ví dụ về payload. Thông tin ví dụ này sẽ hữu ích để hướng dẫn chúng ta khi tạo các hành động (actions). Trigger của bạn hiện đã được tạo và sẵn sàng để kết nối với các ứng dụng khác.

## Cách tạo Actions

Actions sử dụng thông tin từ các trigger khác để tạo các mục mới trong mạng lưới của bạn.

Trong phần **tạo một bước action**, bạn sẽ chọn Ultimate Multisite **Beta** và tùy chọn **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Ở bước tiếp theo, bạn sẽ tạo xác thực (authentication) của mình, giống như chúng ta đã làm trong **Cách bắt đầu**, hoặc chọn một xác thực đã được tạo. Trong tutorial này, chúng ta sẽ chọn cùng một xác thực đã tạo trước đó.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Thiết lập Action

Đây là **bước chính của action** và ở đây mọi thứ hơi khác một chút. Thông tin đầu tiên bạn sẽ chọn là **Item**. Item là **mô hình thông tin** của mạng lưới của bạn như **Customers (Khách hàng), Payments (Thanh toán), Sites (Trang web), Emails (Email)** và các mục khác.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Khi chọn một item, biểu mẫu sẽ **sắp xếp lại để đưa các trường bắt buộc và tùy chọn** cho item đã chọn lên.

Ví dụ, khi chọn item **Customer (Khách hàng)**, các trường biểu mẫu sẽ mang đến mọi thứ cần thiết để điền vào nhằm tạo một Khách hàng mới trong mạng lưới.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Sau khi điền tất cả các trường được đánh dấu là **required (bắt buộc)** và nhấn continue, một màn hình cuối sẽ hiển thị cho bạn các trường đã điền và các trường còn trống.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Ọ bụrụ na ịtinye ihe nwere ike ịgbanwe (test) ya ma ọ bụ a na-achị, ọnụmọpụta gị (action) ya bụrụ na a na-configure ya. Ọkụ dị mkpa ka ị chere ọkụ ụgbọ (network) gị ọ bụrụ na ihe ahụ aka nwere ike ịgbanwe (test) ya.
