---
title: Nche Plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Downgrading a plan (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Việc hạ cấp gói dịch vụ hoặc đăng ký là một hành động mà khách hàng của bạn có thể thực hiện nếu họ có ngân sách hạn chế hoặc quyết định rằng họ không cần nhiều tài nguyên để chạy trang phụ (subsite) của mình nữa.

## Cách hạ cấp gói dịch vụ {#how-to-downgrade-a-plan}

Khách hàng của bạn có thể hạ cấp gói bất cứ lúc nào bằng cách đăng nhập vào bảng điều khiển quản trị (admin dashboard) của trang phụ và nhấp vào **Change** (Thay đổi) dưới trang tài khoản của họ.

![Trang tài khoản khách hàng với thẻ Thành viên của Bạn và nút Change](/img/account-page/membership-change-button.png)

Sau khi nhấn nút **Change**, người dùng/khách hàng sẽ được chuyển đến trang thanh toán (checkout page) nơi họ có thể chọn gói mà họ muốn thay đổi đăng ký.

![Trang tùy chọn hạ cấp gói trên phía khách hàng](/img/account-page/downgrade-picker.png)

Trong ví dụ này, chúng ta đang hạ cấp gói từ **Premium** xuống **Free**.

Để tiếp tục, người dùng chỉ cần nhấp vào nút **Complete Checkout** (Hoàn tất Thanh toán). Sau đó, nó sẽ đưa họ trở lại trang tài khoản hiển thị thông báo về thay đổi đang chờ xử lý đối với tư cách thành viên. Những thay đổi này sẽ có hiệu lực trong **chu kỳ thanh toán tiếp theo** của khách hàng.

![Trang tài khoản hiển thị biểu ngữ thay đổi thành viên đang chờ xử lý](/img/account-page/pending-change.png)

### Điều gì xảy ra khi người dùng hạ cấp gói dịch vụ {#what-happens-when-a-user-downgrades-their-plan}

Điều quan trọng cần lưu ý là việc hạ cấp gói không làm thay đổi cấu hình hiện có trong trang phụ của người dùng.

Nó sẽ không tự động thay đổi mẫu trang (site template) vì việc thay đổi mẫu trang sẽ xóa hoàn toàn và đặt lại trang phụ. Điều này nhằm tránh mất dữ liệu không cần thiết. Vì vậy, dung lượng đĩa, theme, plugin v.v. sẽ được giữ nguyên ngoại trừ các bài viết (posts).

Ọ dị mụrụ na nchekwa ọ bụ na ihe ị chọrọ akụkọ ya na quota ndị ị rataa ọkụkọ ọ bụrụ na ị ga-eme ihe ọ bụla na aka n'ime configuration ahụ, ọ ga-anọchịrị ike na ihe ọ bụla dị m n'ime subsite ya.

Ọ bụrụ na akụkọ ndị ọzọ ọ bụ na quota nke plan ahụ, ị mere 3 ihe dị iche iche: **Nche akụkọ ndị a** *,* **Move akụkọ ndị a n'ime trash** *,* ma ọ bụ **Move akụkọ ndị a n'ime draft** *. ị ga-eme ihe a n'ime settings Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ọ bụrụ na ihe ọ bụla na payment {#what-happens-to-the-payment}

N'ime version 2.0, ọ dịghị m nwere zarie anyị ga-eme ndụ na payment n'ime proration anọchịrị ike.

Ihe a bụ karibe system ahụ ga-anọ na membership ebe ya **nche sikiri billing (billing cycle) ya ga-akwụsịghị ma ọ bụrụ na plan/membership ọhụrụ ga-eme ihe.** Ọnụghị payment ọhụrụ nke new membership ahụ ga-eme ihe anọchịrị ike ma ga-akwụsịghị n'ime sikiri billing tupu.
