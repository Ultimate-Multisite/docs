---
title: Hạ cấp gói dịch vụ
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Hạ cấp gói dịch vụ (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Hạ cấp gói dịch vụ hoặc đăng ký là một thao tác phổ biến mà khách hàng của bạn có thể thực hiện khi họ có ngân sách hạn chế hoặc khi họ quyết định rằng không cần nhiều tài nguyên để vận hành subsite của mình.

## Cách hạ cấp gói dịch vụ

Khách hàng của bạn có thể hạ cấp gói dịch vụ bất cứ lúc nào bằng cách đăng nhập vào trang quản trị subsite và nhấp vào **Change** trong trang tài khoản của họ.

![Trang tài khoản với nút Change bên dưới thông tin thành viên](/img/admin/memberships-list.png)

Khi nhấp vào nút **Change**, người dùng/khách hàng sẽ được chuyển đến trang thanh toán, nơi họ có thể chọn gói dịch vụ mà họ muốn đổi sang.

![Trang thanh toán hiển thị các tùy chọn gói dịch vụ để hạ cấp](/img/admin/memberships-list.png)

Trong ví dụ này, chúng ta đang hạ cấp gói dịch vụ từ **Premium** xuống **Free**.

Để tiếp tục, người dùng chỉ cần nhấp vào nút **Complete Checkout**. Sau đó, họ sẽ được đưa trở lại trang tài khoản với thông báo về thay đổi đang chờ xử lý cho gói thành viên. Các thay đổi sẽ có hiệu lực vào **chu kỳ thanh toán tiếp theo** của khách hàng.

![Trang tài khoản hiển thị thông báo thay đổi gói thành viên đang chờ xử lý](/img/admin/memberships-list.png)

### Điều gì xảy ra khi người dùng hạ cấp gói dịch vụ

Điều quan trọng cần lưu ý là việc hạ cấp gói dịch vụ không làm thay đổi cấu hình hiện có trên subsite của người dùng.

Hệ thống không tự động thay đổi template của trang vì việc thay đổi template sẽ xóa hoàn toàn và đặt lại subsite. Điều này nhằm tránh mất dữ liệu không cần thiết. Vì vậy, dung lượng ổ đĩa, theme, plugin, v.v. sẽ được giữ nguyên, ngoại trừ các bài viết.

Chúng tôi hiểu rằng mối quan tâm chính của bạn sẽ là các giới hạn và hạn mức bạn đã thiết lập cho mỗi gói dịch vụ, nhưng chúng tôi phải cân nhắc đến những thiệt hại có thể xảy ra cho subsite của người dùng nếu chúng tôi xóa hoặc thay đổi bất kỳ cấu hình nào của họ.

Đối với các bài viết vượt quá giới hạn được thiết lập trong gói dịch vụ, bạn có 3 tùy chọn khác nhau: **Giữ nguyên các bài viết**, **Chuyển các bài viết vào thùng rác**, hoặc **Chuyển các bài viết sang bản nháp**. Bạn có thể cấu hình điều này trong phần cài đặt Ultimate Multisite.

![Các tùy chọn khi vượt quá giới hạn bài viết trong cài đặt Ultimate Multisite](/img/config/settings-sites.png)

### Điều gì xảy ra với khoản thanh toán

Trong phiên bản 2.0, hệ thống không còn yêu cầu bất kỳ điều chỉnh nào về thanh toán liên quan đến tính toán theo tỷ lệ.

Điều này là do hệ thống sẽ đợi gói thành viên hiện tại **hoàn thành chu kỳ thanh toán trước khi** gói dịch vụ/thành viên mới có hiệu lực. Số tiền thanh toán mới cho gói thành viên mới sẽ tự động được áp dụng và tính phí vào chu kỳ thanh toán tiếp theo.
