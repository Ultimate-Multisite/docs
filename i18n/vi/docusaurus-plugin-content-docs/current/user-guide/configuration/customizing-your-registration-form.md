---
title: Tùy chỉnh Biểu mẫu Đăng ký của Bạn
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Tùy chỉnh Biểu mẫu Đăng ký

Để tạo nên sự khác biệt cho mạng lưới của bạn so với các SaaS khác được xây dựng trên nền tảng WordPress, Ultimate Multisite cho phép bạn tùy chỉnh trang đăng ký và đăng nhập thông qua tính năng **Checkout Forms** (Biểu mẫu thanh toán).

Mặc dù đây là cách dễ dàng và linh hoạt để thử nghiệm nhiều phương pháp khác nhau nhằm chuyển đổi khách hàng mới, nhưng chúng chủ yếu được dùng để tạo các biểu mẫu đăng ký được cá nhân hóa. Bài viết này sẽ hướng dẫn bạn cách thực hiện điều đó.

## Trang đăng nhập và đăng ký:

Khi cài đặt Ultimate Multisite, plugin sẽ tự động tạo các trang đăng nhập và đăng ký tùy chỉnh trên trang web chính của bạn. Bạn có thể thay đổi các trang mặc định này bất cứ lúc nào bằng cách vào **Ultimate Multisite > Settings > Login & Registration**.

![Trang cài đặt Đăng nhập và Đăng ký](/img/config/settings-general.png)

Hãy cùng xem qua từng tùy chọn mà bạn có thể tùy chỉnh trên trang **Login & Registration**:

  * **Enable registration:** Tùy chọn này sẽ bật hoặc tắt chức năng đăng ký trên mạng lưới của bạn. Nếu tắt, khách hàng sẽ không thể đăng ký và mua các sản phẩm của bạn.

  * **Enable email verification:** Nếu tùy chọn này được bật, những khách hàng đăng ký gói miễn phí hoặc gói trả phí có thời gian dùng thử sẽ nhận được email xác minh và cần nhấp vào liên kết xác minh để website của họ được tạo.

  * **Default registration page:** Đây là trang đăng ký mặc định. Trang này cần được xuất bản trên website của bạn và có biểu mẫu đăng ký (còn gọi là checkout form) - nơi khách hàng sẽ đăng ký sử dụng sản phẩm của bạn. Bạn có thể tạo bao nhiêu trang đăng ký và checkout form tùy thích, chỉ cần nhớ đặt shortcode của checkout form vào trang đăng ký, nếu không biểu mẫu sẽ không hiển thị.

  * **Use custom login page:** Tùy chọn này cho phép bạn sử dụng trang đăng nhập tùy chỉnh, khác với trang wp-login.php mặc định. Nếu bật tùy chọn này, bạn có thể chọn trang sẽ được dùng để đăng nhập trong tùy chọn **Default login page** (ngay bên dưới).

  * **Obfuscate the original login url (wp-login.php)**: Nếu bạn muốn ẩn URL đăng nhập gốc, bạn có thể bật tùy chọn này. Điều này hữu ích để ngăn chặn các cuộc tấn công brute-force. Khi tùy chọn này được bật, Ultimate Multisite sẽ hiển thị lỗi 404 khi người dùng cố truy cập liên kết wp-login.php gốc.

  * **Force synchronous site publication:** Sau khi khách hàng đăng ký một sản phẩm trên mạng lưới, trang web đang chờ xử lý cần được chuyển đổi thành một trang mạng lưới thực sự. Quá trình xuất bản diễn ra qua Job Queue theo cách bất đồng bộ. Bật tùy chọn này để buộc quá trình xuất bản xảy ra trong cùng một request với quá trình đăng ký.

Bây giờ, hãy xem các tùy chọn khác vẫn liên quan đến quá trình đăng nhập và đăng ký. Chúng nằm ngay bên dưới **Other options** trên cùng trang Login & registration:

  * **Default role:** Đây là vai trò mà khách hàng sẽ có trên website của họ sau quá trình đăng ký.

  * **Add users to the main site as well:** Bật tùy chọn này sẽ thêm người dùng vào trang web chính của mạng lưới sau quá trình đăng ký. Nếu bạn bật tùy chọn này, một tùy chọn để đặt **default role** cho những người dùng này trên website của bạn cũng sẽ xuất hiện ngay bên dưới.

  * **Enable multiple accounts:** Cho phép người dùng có tài khoản ở nhiều trang web khác nhau trong mạng lưới của bạn với cùng một địa chỉ email. Nếu tắt tùy chọn này, khách hàng sẽ không thể tạo tài khoản trên các website khác trong mạng lưới của bạn với cùng địa chỉ email.

Và đó là tất cả các tùy chọn liên quan đến đăng nhập và đăng ký mà bạn có thể tùy chỉnh! Đừng quên lưu cài đặt sau khi bạn hoàn tất chỉnh sửa.

## Sử dụng nhiều biểu mẫu đăng ký:

Ultimate Multisite 2.0 cung cấp trình soạn thảo checkout form cho phép bạn tạo bao nhiêu biểu mẫu tùy thích, với các trường khác nhau, các sản phẩm được đề xuất khác nhau, v.v.

Cả trang đăng nhập và đăng ký đều được nhúng bằng shortcode: **[wu_login_form]** cho trang đăng nhập và **[wu_checkout]** cho trang đăng ký. Bạn có thể tùy chỉnh thêm trang đăng ký bằng cách xây dựng hoặc tạo các checkout form.

Để truy cập tính năng này, vào menu **Checkout Forms** ở thanh bên trái.

![Menu Checkout Forms ở thanh bên](/img/config/checkout-forms-list.png)

Trên trang này, bạn có thể xem tất cả các checkout form mà bạn có.

Nếu bạn muốn tạo một biểu mẫu mới, chỉ cần nhấp vào **Add Checkout Form** ở đầu trang.

Bạn có thể chọn một trong ba tùy chọn làm điểm bắt đầu: single step (một bước), multi-step (nhiều bước) hoặc blank (trống). Sau đó, nhấp **Go to the Editor**.

![Thêm Checkout Form với các tùy chọn single step, multi-step hoặc blank](/img/config/checkout-forms-list.png)

Ngoài ra, bạn có thể chỉnh sửa hoặc sao chép các biểu mẫu bạn đã có bằng cách nhấp vào các tùy chọn bên dưới tên của nó. Ở đó, bạn cũng sẽ tìm thấy các tùy chọn để sao chép shortcode của biểu mẫu hoặc xóa biểu mẫu.

![Các thao tác khi di chuột vào checkout form với chỉnh sửa, sao chép và xóa](/img/config/checkout-form-hover-actions.png)

Nếu bạn chọn single step hoặc multi-step, checkout form sẽ được điền sẵn các bước cơ bản để hoạt động. Sau đó, nếu muốn, bạn có thể thêm các bước bổ sung vào đó.

### Chỉnh sửa Checkout Form:

Như chúng tôi đã đề cập trước đó, bạn có thể tạo checkout form cho nhiều mục đích khác nhau. Trong ví dụ này, chúng ta sẽ làm việc với một biểu mẫu đăng ký.

Sau khi điều hướng đến trình soạn thảo checkout form, đặt tên cho biểu mẫu (chỉ dùng để tham khảo nội bộ) và một slug (được dùng để tạo shortcode, chẳng hạn).

![Trình soạn thảo checkout form với các trường tên và slug](/img/config/checkout-form-editor.png)

Các biểu mẫu được tạo thành từ các bước và trường. Bạn có thể thêm bước mới bằng cách nhấp vào **Add New Checkout Step**.

![Nút Add New Checkout Step](/img/config/checkout-form-add-step.png)

Trên tab đầu tiên của cửa sổ modal, điền nội dung cho bước của biểu mẫu. Đặt ID, tên và mô tả. Các mục này chủ yếu được sử dụng nội bộ.

![Tab nội dung bước checkout với ID, tên và mô tả](/img/config/checkout-form-step.png)

Tiếp theo, đặt chế độ hiển thị của bước. Bạn có thể chọn giữa **Always show** (Luôn hiển thị), **Only show for logged in users** (Chỉ hiển thị cho người dùng đã đăng nhập) hoặc **Only show for guests** (Chỉ hiển thị cho khách).

![Các tùy chọn hiển thị bước checkout](/img/config/checkout-form-step.png)

Cuối cùng, cấu hình kiểu dáng của bước. Đây là các trường tùy chọn.

![Cấu hình kiểu dáng bước checkout](/img/config/checkout-form-step.png)

Bây giờ, đã đến lúc thêm các trường vào bước đầu tiên của chúng ta. Chỉ cần nhấp **Add New Field** và chọn loại section bạn muốn.

![Nút Add New Field](/img/config/checkout-form-editor.png)![Dropdown chọn loại trường](/img/config/checkout-form-step.png)

Mỗi trường có các tham số khác nhau cần điền. Với mục nhập đầu tiên này, chúng ta sẽ chọn trường **Username**.

![Cấu hình trường Username](/img/config/checkout-form-step.png)![Các tham số trường Username](/img/config/checkout-form-step.png)![Cài đặt bổ sung trường Username](/img/config/checkout-form-step.png)

Bạn có thể thêm bao nhiêu bước và trường tùy theo nhu cầu. Để hiển thị các sản phẩm cho khách hàng chọn, hãy sử dụng trường Pricing Table. Nếu bạn muốn cho khách hàng chọn template, hãy thêm trường Template Selection. Và cứ thế tiếp tục.

_**Lưu ý:** Nếu bạn tạo sản phẩm sau khi tạo checkout form, bạn sẽ cần thêm sản phẩm vào phần Pricing table. Nếu bạn không thêm, sản phẩm sẽ không hiển thị cho khách hàng trên trang đăng ký._

_**Lưu ý 2:** username, email, password, site title, site URL, order summary, payment và submit button là các trường bắt buộc để tạo checkout form._

Trong khi làm việc với checkout form, bạn luôn có thể sử dụng nút Preview để xem khách hàng sẽ nhìn thấy biểu mẫu như thế nào. Bạn cũng có thể chuyển đổi giữa xem với tư cách người dùng hiện có hoặc khách truy cập.

![Nút Preview trên trình soạn thảo checkout form](/img/config/checkout-form-editor.png)![Xem trước checkout form với tư cách khách truy cập hoặc người dùng hiện có](/img/config/checkout-form-editor.png)

Cuối cùng, trong **Advanced Options** bạn có thể cấu hình thông báo cho trang **Thank You**, thêm các đoạn mã để theo dõi chuyển đổi, thêm CSS tùy chỉnh cho checkout form hoặc giới hạn theo một số quốc gia nhất định.

![Advanced Options với trang Thank You, theo dõi chuyển đổi và CSS tùy chỉnh](/img/config/checkout-form-advanced.png)

Bạn cũng có thể bật hoặc tắt checkout form theo cách thủ công bằng cách chuyển đổi tùy chọn này ở cột bên phải, hoặc xóa vĩnh viễn biểu mẫu.

![Công tắc Active và tùy chọn xóa cho checkout form](/img/config/checkout-form-active.png)

Đừng quên lưu checkout form của bạn!

![Nút Save Checkout Form](/img/config/checkout-form-save.png)

Để lấy shortcode của biểu mẫu, nhấp vào **Generate Shortcode** và sao chép kết quả hiển thị trên cửa sổ modal.

![Modal Generate Shortcode với shortcode để sao chép](/img/config/checkout-form-editor.png)

_**Lưu ý:** Bạn sẽ cần thêm shortcode này vào trang đăng ký của mình để checkout form được thêm vào đó._

## Chọn trước sản phẩm và template qua tham số URL:

Nếu bạn muốn tạo bảng giá tùy chỉnh cho sản phẩm và chọn trước trên checkout form sản phẩm hoặc template mà khách hàng chọn từ bảng giá hoặc trang template của bạn, bạn có thể sử dụng tham số URL cho việc này.

### **Đối với các gói:**

Vào **Ultimate Multisite > Products > Chọn một gói**. Bạn sẽ thấy nút **Click to copy Shareable Link** ở đầu trang. Đây là liên kết bạn có thể sử dụng để chọn trước gói cụ thể này trên checkout form của bạn.

![Trang sản phẩm với nút shareable link](/img/config/products-list.png)

Lưu ý rằng shareable link này chỉ hợp lệ cho **Plans** (Gói). Bạn không thể sử dụng shareable link cho packages hoặc services.

### Đối với template:

Nếu bạn muốn chọn trước các site template trên checkout form, bạn có thể sử dụng tham số: **?template_id=X** trên URL trang đăng ký của bạn. "X" cần được thay thế bằng **số ID của site template**. Để lấy số này, vào **Ultimate Multisite > Sites**.

Nhấp vào **Manage** ngay bên dưới site template bạn muốn sử dụng. Bạn sẽ thấy số SITE ID. Chỉ cần sử dụng số này để site template cụ thể này được chọn trước trên checkout form của bạn. Trong trường hợp của chúng ta ở đây, tham số URL sẽ là **?template_id=2**.

![Danh sách Sites hiển thị ID của site template](/img/config/site-templates-list.png)

Giả sử website mạng lưới của chúng ta là [**www.mynetwork.com**](http://www.mynetwork.com) và trang đăng ký với checkout form của chúng ta nằm ở trang **/register**. Toàn bộ URL với site template được chọn trước sẽ trông như [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Và nếu bạn muốn, bạn có thể chọn trước cả sản phẩm và template cho checkout form của mình. Tất cả những gì bạn cần làm là sao chép shareable link của gói và dán tham số template vào cuối. Nó sẽ trông như [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
