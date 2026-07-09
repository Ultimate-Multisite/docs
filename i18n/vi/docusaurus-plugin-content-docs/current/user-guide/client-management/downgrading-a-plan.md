---
title: Hạ cấp gói
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Hạ cấp một gói (v2) {#downgrading-a-plan-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Hạ cấp một gói hoặc đăng ký là một thao tác phổ biến mà khách hàng của bạn có thể thực hiện nếu họ có ngân sách hạn chế hoặc họ đã quyết định rằng họ sẽ không cần nhiều tài nguyên để vận hành trang con của mình.

## Cách hạ cấp một gói {#how-to-downgrade-a-plan}

Khách hàng của bạn có thể hạ cấp gói của họ bất cứ lúc nào bằng cách đăng nhập vào dashboard quản trị trang con của họ và nhấp vào **Change** dưới trang account của họ.

![Trang account của khách hàng với thẻ Your Membership và nút Change](/img/account-page/membership-change-button.png)

Khi nhấp vào nút **Change**, người dùng/khách hàng sẽ được chuyển hướng đến trang thanh toán, nơi họ có thể chọn gói mà họ muốn đổi đăng ký của mình sang.

![Trang tùy chọn hạ cấp gói ở phía khách hàng](/img/account-page/downgrade-picker.png)

Trong ví dụ này, chúng ta đang hạ cấp gói từ **Premium** xuống **Free**.

Để tiếp tục, người dùng chỉ cần nhấp vào nút **Complete Checkout**. Sau đó, hệ thống sẽ đưa họ trở lại trang account, hiển thị thông báo về thay đổi đang chờ xử lý đối với membership. Các thay đổi sẽ có hiệu lực vào **chu kỳ thanh toán tiếp theo** của khách hàng.

![Trang Account hiển thị banner thay đổi membership đang chờ xử lý](/img/account-page/pending-change.png)

### Điều gì xảy ra khi người dùng hạ cấp gói của họ {#what-happens-when-a-user-downgrades-their-plan}

Điều quan trọng cần lưu ý là việc hạ cấp gói không làm thay đổi cấu hình hiện có trong trang con của người dùng.

Nó không tự động thay đổi mẫu trang vì việc thay đổi mẫu trang sẽ xóa hoàn toàn và đặt lại trang con. Điều này nhằm tránh mất dữ liệu không cần thiết. Vì vậy, dung lượng đĩa, giao diện, plugin, v.v. sẽ được giữ nguyên, ngoại trừ các bài viết.

Chúng tôi hiểu rằng mối quan tâm chính của bạn sẽ là các giới hạn và hạn ngạch mà bạn đặt dưới mỗi gói, nhưng chúng tôi phải cân nhắc thiệt hại có thể gây ra cho trang con của người dùng nếu chúng tôi xóa hoặc thay đổi bất kỳ cấu hình nào của nó.

Đối với các bài viết vượt quá giới hạn được đặt trong gói, bạn có 3 tùy chọn khác nhau: **Giữ nguyên các bài viết** *,* **Chuyển các bài viết vào thùng rác** *,* hoặc **Chuyển các bài viết sang bản nháp** *.* Bạn có thể cấu hình điều này trong cài đặt Ultimate Multisite.

![Trang Sites trong Network Admin Settings hiển thị các tùy chọn hành vi khi vượt quá giới hạn bài viết](/img/account-page/settings-sites-post-limit.png)

### Điều gì xảy ra với khoản thanh toán {#what-happens-to-the-payment}

Trong phiên bản 2.0, hệ thống không còn yêu cầu bất kỳ điều chỉnh nào đối với khoản thanh toán về mặt tính theo tỷ lệ.

Điều này là vì hệ thống sẽ chờ membership hiện tại **hoàn tất chu kỳ thanh toán trước khi** gói/membership mới có hiệu lực. Số tiền thanh toán mới cho membership mới sẽ tự động được áp dụng và tính phí vào chu kỳ thanh toán tiếp theo.
