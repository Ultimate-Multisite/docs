---
title: Tích hợp Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Tích hợp Ultimate Multisite với Zapier

Trong một bài viết trước, chúng tôi đã giới thiệu về [Webhooks](webhooks.md) và cách sử dụng chúng để tích hợp với các ứng dụng bên thứ ba.

Sử dụng webhooks có phần phức tạp vì đòi hỏi kiến thức lập trình nâng cao và khả năng xử lý payload. **Zapier** là giải pháp giúp bạn vượt qua rào cản này.

Zapier tích hợp với hơn 5000+ ứng dụng, giúp việc kết nối giữa các ứng dụng khác nhau trở nên dễ dàng hơn.

Bạn có thể tạo **Trigger** (sự kiện kích hoạt) để phản hồi khi có sự kiện xảy ra trên mạng lưới của bạn (ví dụ: khi một tài khoản được tạo sẽ kích hoạt sự kiện account_create), hoặc tạo **Action** (hành động) trên mạng lưới để phản hồi các sự kiện bên ngoài (ví dụ: tạo membership mới cho tài khoản trong mạng lưới Ultimate Multisite của bạn).

Điều này khả thi nhờ **trigger và action của Ultimate Multisite trên Zapier** được hỗ trợ bởi [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Bắt đầu như thế nào

Trước tiên, hãy tìm kiếm Ultimate Multisite trong danh sách ứng dụng của Zapier. Hoặc bạn có thể nhấp vào [đường link này](https://zapier.com/apps/wp-ultimo/integrations).

Vào dashboard và nhấn nút **+** **Create Zap** ở thanh bên trái để thiết lập một Zap mới.

![Dashboard Zapier với nút Create Zap](/img/admin/webhooks-list.png)

Bạn sẽ được chuyển đến trang tạo Zap.

Trong ô tìm kiếm, gõ "wp ultimo". Nhấp để chọn phiên bản **Beta**.

![Tìm kiếm WP Ultimo trong danh sách ứng dụng Zapier](/img/admin/webhooks-list.png)

Sau khi chọn ứng dụng của chúng tôi, hãy chọn sự kiện có sẵn: **New Ultimate Multisite Event**.

![Chọn trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Bây giờ chúng ta cần cấp quyền cho Zapier truy cập **mạng lưới của bạn**. Nhấp vào **Sign in** sẽ mở một cửa sổ mới yêu cầu **thông tin xác thực API**.

![Yêu cầu đăng nhập Zapier để nhập thông tin xác thực API](/img/admin/webhooks-list.png)

Vào trang quản trị mạng lưới của bạn và điều hướng đến **Ultimate Multisite > Settings** > **API & Webhooks**, tìm phần API Settings.

Chọn tùy chọn **Enable API** vì đây là yêu cầu bắt buộc để kết nối hoạt động.

![Cài đặt API với tùy chọn Enable API trong Ultimate Multisite](/img/admin/webhooks-list.png)

Sử dụng biểu tượng **Copy to Clipboard** ở các trường API Key và API Secret, sau đó dán các giá trị này vào màn hình tích hợp.

Ở trường URL, nhập đầy đủ URL mạng lưới của bạn, bao gồm cả giao thức (HTTP hoặc HTTPS).

![Màn hình tích hợp Zapier với các trường API Key, Secret và URL](/img/admin/webhooks-list.png)

Nhấp nút **Yes, Continue** để chuyển sang bước tiếp theo. Nếu mọi thứ hoạt động tốt, bạn sẽ thấy tài khoản vừa kết nối! Nhấp **Continue** để tạo trigger mới.

## Cách tạo Trigger mới

Sau khi tài khoản đã được kết nối, bạn có thể xem các sự kiện có sẵn. Hãy chọn sự kiện **payment_received** cho hướng dẫn này.

![Chọn sự kiện payment_received trong trigger Zapier](/img/admin/webhooks-list.png)

Sau khi chọn sự kiện và nhấp **continue**, **bước kiểm tra** sẽ xuất hiện.

![Bước kiểm tra trigger trong Zapier](/img/admin/webhooks-list.png)

Ở giai đoạn này, Zapier sẽ kiểm tra xem Zap của bạn có thể **lấy payload cụ thể cho sự kiện đó** hay không. Trong các sự kiện tương lai cùng loại, thông tin với cấu trúc tương tự sẽ được gửi đi.

![Kiểm tra trigger Zapier hoàn tất thành công với payload](/img/admin/webhooks-list.png)

Trong hướng dẫn này, bài kiểm tra đã **hoàn tất thành công** và trả về thông tin payload mẫu. Thông tin mẫu này sẽ hữu ích để hướng dẫn chúng ta khi tạo action. Trigger của bạn đã được tạo và sẵn sàng kết nối với các ứng dụng khác.

## Cách tạo Action

Action sử dụng thông tin từ các trigger khác để tạo các mục mới trong mạng lưới của bạn.

Trong **bước tạo action**, bạn sẽ chọn Ultimate Multisite **Beta** và tùy chọn **Create Items on Ultimate Multisite**.

![Tạo action với Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Ở bước tiếp theo, bạn có thể tạo xác thực mới giống như chúng ta đã làm trong phần **Bắt đầu như thế nào**, hoặc chọn một xác thực đã tạo trước đó. Trong hướng dẫn này, chúng ta sẽ chọn xác thực đã tạo trước đó.

![Chọn xác thực cho action Zapier](/img/admin/webhooks-list.png)

### Thiết lập Action

Đây là **bước chính của action** và ở đây mọi thứ hơi khác một chút. Thông tin đầu tiên bạn cần chọn là **Item**. Item là **mô hình dữ liệu** của mạng lưới như **Customers, Payments, Sites, Emails** và các loại khác.

![Chọn loại Item cho action Zapier](/img/admin/webhooks-list.png)

Khi chọn một item, form sẽ **tự động sắp xếp lại để hiển thị các trường bắt buộc và tùy chọn** cho item đã chọn.

Ví dụ, khi chọn item **Customer**, các trường trong form sẽ hiển thị tất cả thông tin cần điền để tạo một Customer mới trong mạng lưới.

![Các trường của item Customer trong thiết lập action Zapier](/img/admin/webhooks-list.png)

Sau khi điền tất cả các trường được đánh dấu **required** (bắt buộc) và nhấp continue, màn hình cuối cùng sẽ hiển thị các trường đã điền và các trường chưa điền.

![Kiểm tra action Zapier hiển thị các trường đã điền và chưa điền](/img/admin/webhooks-list.png)

Khi bài kiểm tra hoàn tất và thành công, action của bạn đã được cấu hình xong. Điều quan trọng là hãy kiểm tra trên mạng lưới của bạn xem item đã được tạo thông qua bài kiểm tra action hay chưa.
