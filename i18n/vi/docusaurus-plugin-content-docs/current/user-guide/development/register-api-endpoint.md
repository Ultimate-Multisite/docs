---
title: Đăng ký API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Điểm cuối API đăng ký Ultimate Multisite

Trong hướng dẫn này, bạn sẽ học cách sử dụng điểm cuối API /register của Ultimate Multisite để tạo toàn bộ quy trình onboarding cho một khách hàng mới trong mạng của bạn và cách thực hiện điều đó với Zapier.

Điểm cuối sử dụng phương thức POST và được gọi bằng URL _**https://yoursite.com/wp-json/wu/v2/register**_. Trong lệnh gọi này, 4 quy trình sẽ được thực thi trong mạng của bạn:

  * Một người dùng WordPress mới hoặc việc nhận diện người dùng đó thông qua ID người dùng sẽ được tạo.

  * Một Khách hàng mới trong Ultimate Multisite hoặc việc nhận diện khách hàng đó thông qua ID khách hàng sẽ được tạo.

  * Một trang mới trên mạng WordPress sẽ được tạo.

  * Cuối cùng, một Tư cách thành viên mới trong Ultimate Multisite sẽ được tạo.

Đối với quy trình này, bạn sẽ cần thông tin xác thực API của mình. Để lấy chúng, hãy đi tới bảng quản trị mạng của bạn, điều hướng đến **Ultimate Multisite > Cài đặt** > **API & Webhooks,** và tìm phần Cài đặt API.

![Phần Cài đặt API trong Ultimate Multisite](/img/config/settings-api.png)

Đây là chế độ xem đầy đủ của trang cài đặt API:

![Toàn bộ trang cài đặt API](/img/config/settings-api-full.png)

Chọn **Bật API** và lấy thông tin xác thực API của bạn.

Bây giờ, hãy khám phá điểm cuối rồi tạo một hành động đăng ký trong Zapier.

## Tham số phần thân của điểm cuối

Hãy xem tổng quan về thông tin tối thiểu mà chúng ta cần gửi đến điểm cuối. Ở cuối bài viết này, bạn sẽ tìm thấy lệnh gọi đầy đủ.

### Khách hàng

Đây là thông tin cần thiết cho quy trình tạo Người dùng và Khách hàng Ultimate Multisite:

"customer_id" : integer

Có thể gửi ID khách hàng đã được tạo trong mạng của bạn. Nếu không được gửi, thông tin bên dưới sẽ được dùng để tạo một khách hàng mới và một người dùng WordPress mới. ID người dùng cũng có thể được gửi theo cùng cách như ID khách hàng.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Tư cách thành viên**

Thông tin duy nhất chúng ta cần bên trong đối tượng này là Trạng thái Tư cách thành viên.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Sản phẩm**

Sản phẩm được cung cấp dưới dạng một mảng với 1 hoặc nhiều ID sản phẩm từ mạng của bạn. Lưu ý, điểm cuối này không tạo sản phẩm. Hãy xem tài liệu của Ultimate Multisite để hiểu rõ hơn về điểm cuối tạo sản phẩm.

**"products" : [1,2],**

### Thanh toán

Cũng như với Tư cách thành viên, chúng ta chỉ cần trạng thái.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Trang

Và để hoàn tất phần thân, chúng ta cần URL và Tiêu đề của trang, cả hai đều nằm trong đối tượng Trang.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Kết quả trả về của điểm cuối đăng ký sẽ là một mảng chứa thông tin tư cách thành viên vừa được tạo.

## Tạo một hành động trong Zapier

Với việc giới thiệu điểm cuối tạo tài khoản mới và mạnh mẽ hơn này, bạn cũng sẽ truy cập được một hành động mới trong Zapier.

Bạn có biết cách sử dụng và tận dụng mọi thứ mà phiên bản mới của Zapier cung cấp không? Tìm hiểu thêm tại đây. (liên kết?)

### Tạo một hành động

Để minh họa rõ hơn cách sử dụng điểm cuối đăng ký với Zapier, hãy tạo một tích hợp với Google Forms. Mỗi khi biểu mẫu này được điền và thông tin được lưu trong trang tính câu trả lời của biểu mẫu, một tư cách thành viên mới sẽ được tạo trong mạng Ultimate Multisite.

Trong Google Forms, hãy tạo một biểu mẫu với các trường tối thiểu cần thiết để tạo một tư cách thành viên mới trong mạng.

<!-- Không có ảnh chụp màn hình: Biểu mẫu Google Forms với các trường để tạo một tư cách thành viên mới -->

Bây giờ trong Zapier, hãy tạo một Zap mới và kết nối biểu mẫu đã tạo trong Google thông qua bảng tính nơi dữ liệu được lưu.

<!-- Không có ảnh chụp màn hình: Cấu hình trình kích hoạt Zapier kết nối với bảng tính Google Forms -->

Xong! Biểu mẫu Google Forms đã được kết nối với Zapier và sẵn sàng được tích hợp với mạng. Bây giờ hãy chuyển sang Hành động sẽ là kết quả từ Trình kích hoạt mà Google Forms kích hoạt mỗi khi biểu mẫu được điền.

Tìm ứng dụng Ultimate Multisite mới và chọn ứng dụng đó. Đối với loại Zap này, hãy chọn tùy chọn Đăng ký.

<!-- Không có ảnh chụp màn hình: Lựa chọn hành động Zapier hiển thị ứng dụng Ultimate Multisite với tùy chọn Đăng ký -->

Sau bước đầu tiên này, hãy chọn tài khoản sẽ được kết nối với Zap này.<!-- Không có ảnh chụp màn hình: Bước kết nối tài khoản Zapier cho Ultimate Multisite -->

Đây là phần nhạy cảm nhất của toàn bộ quy trình. Chúng ta cần khớp các trường đến từ Google Forms với các trường tối thiểu cần thiết cho điểm cuối đăng ký, như đã trình bày trong phần trước của bài viết này.

Trong ví dụ này, chúng ta chỉ cần cấu hình tên người dùng, email, mật khẩu, tên và URL của trang web. Phần còn lại được để mặc định để tất cả tư cách thành viên được tạo trên Google Forms này tuân theo cùng một mẫu sản phẩm và trạng thái.

<!-- Không có ảnh chụp màn hình: Ánh xạ trường Zapier giữa Google Forms và điểm cuối đăng ký Ultimate Multisite -->

Sau khi thiết lập thông tin, hãy tiếp tục đến bài kiểm tra cuối cùng. Trên màn hình cuối cùng, bạn có thể thấy tất cả các trường sẽ được gửi đến điểm cuối, thông tin tương ứng của chúng và các trường sẽ được gửi trống.<!-- Không có ảnh chụp màn hình: Màn hình kiểm tra Zapier hiển thị tất cả các trường sẽ được gửi đến điểm cuối đăng ký -->

Kiểm tra Zap mới của bạn và nó sẽ hoàn tất thành công. Nếu có bất kỳ lỗi nào xảy ra, hãy kiểm tra tất cả các trường và xem chúng có đang được gửi đúng cách hay không. Vì có rất nhiều thông tin, một số điều có thể bị bỏ sót.

### Tham số điểm cuối đầy đủ

Đây là lệnh gọi đầy đủ và tất cả các khả năng của các trường có thể được gửi.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
