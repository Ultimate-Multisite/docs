---
title: Đăng ký API Endpoint
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# API endpoint Đăng ký của Ultimate Multisite

Trong hướng dẫn này, bạn sẽ học cách sử dụng API endpoint /register của Ultimate Multisite để tạo toàn bộ quy trình đăng ký cho khách hàng mới trong mạng của bạn, và cách thực hiện điều này với Zapier.

Endpoint này sử dụng phương thức POST và được gọi thông qua URL _**https://yoursite.com/wp-json/wu/v2/register**_. Trong lệnh gọi này, 4 quy trình sẽ được thực hiện trong mạng của bạn:

  * Một người dùng WordPress mới sẽ được tạo, hoặc người dùng hiện có sẽ được xác định thông qua user ID.

  * Một Khách hàng mới trong Ultimate Multisite sẽ được tạo, hoặc khách hàng hiện có sẽ được xác định thông qua customer ID.

  * Một site mới trên mạng WordPress sẽ được tạo.

  * Cuối cùng, một Membership mới trong Ultimate Multisite sẽ được tạo.

Để thực hiện quy trình này, bạn cần có thông tin xác thực API. Để lấy thông tin này, hãy vào bảng điều khiển quản trị mạng, điều hướng đến **Ultimate Multisite > Settings** > **API & Webhooks,** và tìm phần API Settings.

![Phần API Settings trong Ultimate Multisite](/img/config/settings-api.png)  
Chọn **Enable API** và lấy thông tin xác thực API của bạn.

Bây giờ, hãy cùng tìm hiểu endpoint này và sau đó tạo một action đăng ký trong Zapier.

## Các tham số body của endpoint

Hãy xem tổng quan về những thông tin tối thiểu cần gửi đến endpoint. Ở cuối bài viết này, bạn sẽ tìm thấy lệnh gọi đầy đủ.

### Customer

Đây là thông tin cần thiết cho quy trình tạo User và Customer trong Ultimate Multisite:

"customer_id" : integer

Bạn có thể gửi customer ID đã được tạo trong mạng của bạn. Nếu không gửi, thông tin bên dưới sẽ được sử dụng để tạo khách hàng mới và người dùng WordPress mới. User ID cũng có thể được gửi theo cách tương tự như customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Thông tin duy nhất chúng ta cần trong object này là Trạng thái Membership.

"membership" { "status" : "string", // một trong các giá trị "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products được truyền dưới dạng mảng với 1 hoặc nhiều product ID từ mạng của bạn. Lưu ý, endpoint này không tạo sản phẩm. Hãy xem tài liệu của Ultimate Multisite để hiểu rõ hơn về endpoint tạo sản phẩm.

**"products" : [1,2],**

### Payment

Giống như Membership, chúng ta chỉ cần trạng thái.

**"payment" { "status" : "string", // một trong các giá trị "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Và để hoàn tất phần body, chúng ta cần URL và Tiêu đề của site, cả hai đều nằm trong object Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Kết quả trả về từ endpoint register sẽ là một mảng chứa thông tin membership vừa được tạo.

## Tạo action trong Zapier

Với sự ra mắt của endpoint tạo tài khoản mới mạnh mẽ hơn này, bạn cũng sẽ có quyền truy cập vào một action mới trong Zapier.

Bạn đã biết cách sử dụng và tận dụng mọi tính năng mà phiên bản mới của Zapier mang lại chưa? Tìm hiểu thêm tại đây. (link?)

### Tạo action

Để minh họa rõ hơn cách sử dụng endpoint đăng ký với Zapier, hãy tạo một tích hợp với Google Forms. Mỗi khi form này được điền và thông tin được lưu vào bảng trả lời của form, một membership mới sẽ được tạo trong mạng Ultimate Multisite.

Trong Google Forms, tạo một form với các trường tối thiểu cần thiết để tạo membership mới trong mạng.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Bây giờ trong Zapier, tạo một Zap mới và kết nối form đã tạo trong Google thông qua bảng tính nơi dữ liệu được lưu.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Xong! Form Google Forms đã được kết nối với Zapier và sẵn sàng để tích hợp với mạng. Bây giờ hãy chuyển sang Action sẽ được thực hiện khi Trigger từ Google Forms được kích hoạt mỗi khi form được điền.

Tìm ứng dụng Ultimate Multisite mới và chọn nó. Với loại Zap này, hãy chọn tùy chọn Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Sau bước đầu tiên này, chọn tài khoản sẽ được kết nối với Zap này.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Đây là phần quan trọng nhất của toàn bộ quy trình. Chúng ta cần khớp các trường từ Google Forms với các trường tối thiểu cần thiết cho endpoint register, như đã trình bày ở phần trước của bài viết này.

Trong ví dụ này, chúng ta chỉ cần cấu hình username, email, password, tên và URL của website. Phần còn lại được để sẵn giá trị mặc định để tất cả membership được tạo từ Google Forms này đều theo cùng một mẫu sản phẩm và trạng thái.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Sau khi thiết lập xong thông tin, tiến hành kiểm tra cuối cùng. Trên màn hình cuối, bạn có thể thấy tất cả các trường sẽ được gửi đến endpoint, thông tin tương ứng của chúng và các trường sẽ được gửi trống.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Kiểm tra Zap mới của bạn và nó sẽ hoàn thành thành công. Nếu có lỗi xảy ra, hãy kiểm tra tất cả các trường và xem chúng có được gửi đúng không. Vì có nhiều thông tin, một số thứ có thể bị bỏ sót.

### Tham số endpoint đầy đủ

Đây là lệnh gọi đầy đủ và tất cả các trường có thể gửi.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // một trong các giá trị "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // một trong các giá trị "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
