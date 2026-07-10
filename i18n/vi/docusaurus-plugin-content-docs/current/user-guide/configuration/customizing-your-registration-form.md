---
title: Tùy chỉnh biểu mẫu đăng ký của bạn
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Tùy chỉnh Biểu mẫu đăng ký của bạn {#customizing-your-registration-form}

Để làm cho mạng của bạn trông độc đáo so với tất cả các SaaS khác được xây dựng trên nền tảng WordPress, Ultimate Multisite cho phép bạn tùy chỉnh các trang đăng ký và đăng nhập bằng tính năng **Biểu mẫu thanh toán** của chúng tôi.

Mặc dù chúng là một cách dễ dàng và linh hoạt để thử nghiệm các phương pháp khác nhau khi cố gắng chuyển đổi khách hàng mới, chúng chủ yếu được dùng để tạo các biểu mẫu đăng ký được cá nhân hóa. Bài viết này nhằm chỉ cho bạn cách thực hiện điều đó.

## Trang đăng nhập và đăng ký: {#login-and-registration-pages}

Khi cài đặt Ultimate Multisite, nó tự động tạo các trang đăng nhập và đăng ký tùy chỉnh trên trang chính của bạn. Bạn có thể thay đổi các trang mặc định này bất cứ lúc nào bằng cách vào trang **Ultimate Multisite > Cài đặt > Đăng nhập & Đăng ký**.

![Trang cài đặt Đăng nhập và Đăng ký](/img/config/settings-general.png)

Dưới đây là chế độ xem đầy đủ của trang cài đặt đăng nhập và đăng ký:

![Trang đầy đủ cài đặt Đăng nhập và Đăng ký](/img/config/settings-login-registration-full.png)

Hãy xem từng tùy chọn bạn có thể tùy chỉnh trên trang **Đăng nhập & Đăng ký**:

  * **Bật đăng ký:** Tùy chọn này sẽ bật hoặc tắt đăng ký trên mạng của bạn. Nếu tùy chọn này bị tắt, khách hàng của bạn sẽ không thể đăng ký và đăng ký theo dõi các sản phẩm của bạn.

  * **Bật xác minh email:** Nếu tùy chọn này được bật, khách hàng đăng ký theo dõi gói miễn phí hoặc gói trả phí có thời gian dùng thử sẽ nhận được email xác minh và sẽ cần nhấp vào liên kết xác minh để các website của họ được tạo.

  * **Trang đăng ký mặc định:** Đây là trang mặc định cho đăng ký. Trang này cần được xuất bản trên website của bạn và có một biểu mẫu đăng ký (còn được gọi là biểu mẫu thanh toán) - nơi khách hàng của bạn sẽ đăng ký theo dõi các sản phẩm của bạn. Bạn có thể tạo bao nhiêu trang đăng ký và biểu mẫu thanh toán tùy ý, chỉ cần nhớ đặt shortcode biểu mẫu thanh toán trên trang đăng ký, nếu không nó sẽ không xuất hiện.

  * **Sử dụng trang đăng nhập tùy chỉnh:** Tùy chọn này cho phép bạn sử dụng một trang đăng nhập đã tùy chỉnh, khác với trang wp-login.php mặc định. Nếu tùy chọn này được bật, bạn có thể chọn trang nào sẽ được dùng để đăng nhập trong tùy chọn **Trang đăng nhập mặc định** (ngay bên dưới).

  * **Làm rối url đăng nhập gốc (wp-login.php)** : Nếu bạn muốn ẩn URL đăng nhập gốc, bạn có thể bật tùy chọn này. Điều này hữu ích để ngăn chặn các cuộc tấn công brute-force. Nếu tùy chọn này được bật, Ultimate Multisite sẽ hiển thị lỗi 404 khi người dùng cố gắng truy cập liên kết wp-login.php gốc

  * **Buộc xuất bản site đồng bộ:** Sau khi khách hàng đăng ký theo dõi một sản phẩm trên một mạng, site mới đang chờ xử lý cần được chuyển đổi thành một site mạng thực sự. Quá trình xuất bản diễn ra thông qua Job Queue, không đồng bộ. Bật tùy chọn này để buộc việc xuất bản diễn ra trong cùng yêu cầu với đăng ký.

Bây giờ, hãy xem các tùy chọn khác vẫn liên quan đến quy trình đăng nhập và đăng ký. Chúng nằm ngay bên dưới **Tùy chọn khác** trên cùng trang Đăng nhập & đăng ký:

  * **Vai trò mặc định:** Đây là vai trò mà khách hàng của bạn sẽ có trên website của họ sau quy trình đăng ký.

  * **Bật Jumper:** Bật lối tắt Jumper trong khu vực quản trị. Jumper cho phép quản trị viên nhanh chóng nhảy đến các màn hình Ultimate Multisite, đối tượng mạng và các đích được hỗ trợ khác mà không cần duyệt qua từng menu. Tắt tùy chọn này nếu bạn muốn ẩn công cụ điều hướng nhanh đó khỏi giao diện quản trị.

  * **Thêm người dùng vào trang chính nữa:** Bật tùy chọn này cũng sẽ thêm người dùng vào trang chính của mạng của bạn sau quy trình đăng ký. Nếu bạn bật tùy chọn này, một tùy chọn để đặt **vai trò mặc định** của những người dùng này trên website của bạn cũng sẽ xuất hiện ngay bên dưới.

  * **Bật nhiều tài khoản:** Cho phép người dùng có tài khoản ở các site khác nhau trong mạng của bạn với cùng một địa chỉ email. Nếu tùy chọn này tắt, khách hàng của bạn sẽ không thể tạo tài khoản trên các website khác đang chạy trên mạng của bạn bằng cùng một địa chỉ email.

Và đó là tất cả các tùy chọn liên quan đến đăng nhập và đăng ký mà bạn có thể tùy chỉnh! Đừng quên lưu cài đặt sau khi bạn chỉnh sửa xong.

## Sử dụng nhiều biểu mẫu đăng ký: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 cung cấp một trình chỉnh sửa biểu mẫu thanh toán cho phép bạn tạo bao nhiêu biểu mẫu tùy ý, với các trường khác nhau, sản phẩm được cung cấp, v.v.

Cả trang đăng nhập và đăng ký đều được nhúng bằng shortcode: **[wu_login_form]** trên trang đăng nhập và**[wu_checkout]** cho trang đăng ký. Bạn có thể tùy chỉnh thêm trang đăng ký bằng cách xây dựng hoặc tạo các biểu mẫu thanh toán.

Để truy cập tính năng này, hãy đi tới menu **Biểu mẫu thanh toán**, ở thanh bên trái.

![Menu Biểu mẫu thanh toán trong thanh bên](/img/config/checkout-forms-list.png)

Trên trang này, bạn có thể thấy tất cả các biểu mẫu thanh toán bạn có.

Nếu bạn muốn tạo một biểu mẫu mới, chỉ cần nhấp vào **Thêm Biểu mẫu thanh toán** ở đầu trang.

Bạn có thể chọn một trong ba tùy chọn này làm điểm bắt đầu: một bước, nhiều bước hoặc trống. Sau đó, nhấp vào **Đi tới Trình chỉnh sửa**.

![Thêm Biểu mẫu thanh toán với các tùy chọn một bước, nhiều bước hoặc trống](/img/config/checkout-forms-list.png)

Ngoài ra, bạn có thể chỉnh sửa hoặc nhân bản các biểu mẫu bạn đã có bằng cách nhấp vào các tùy chọn bên dưới tên của nó. Ở đó, bạn cũng sẽ tìm thấy các tùy chọn để sao chép shortcode của biểu mẫu hoặc xóa biểu mẫu.

![Các hành động khi rê chuột trên biểu mẫu thanh toán với chỉnh sửa, nhân bản và xóa](/img/config/checkout-form-hover-actions.png)

Nếu bạn chọn một bước hoặc nhiều bước, biểu mẫu thanh toán sẽ đã được điền sẵn các bước cơ bản để nó hoạt động. Sau đó, nếu muốn, bạn có thể thêm các bước bổ sung vào đó.

### Chỉnh sửa Biểu mẫu thanh toán: {#editing-a-checkout-form}

Như chúng tôi đã đề cập trước đó, bạn có thể tạo biểu mẫu thanh toán cho các mục đích khác nhau. Trong ví dụ này, chúng ta sẽ làm việc trên một biểu mẫu đăng ký.

Sau khi điều hướng đến trình chỉnh sửa biểu mẫu thanh toán, hãy đặt tên cho biểu mẫu của bạn (chỉ được dùng để tham chiếu nội bộ) và một slug (được dùng để tạo shortcakes, chẳng hạn).

![Trình chỉnh sửa biểu mẫu thanh toán với các trường tên và slug](/img/config/checkout-form-name-slug.png)

Biểu mẫu được tạo từ các bước và trường. Bạn có thể thêm một bước mới bằng cách nhấp vào **Thêm bước thanh toán mới**.

![Nút Thêm bước thanh toán mới](/img/config/checkout-form-add-step.png)

Trên tab đầu tiên của cửa sổ modal, hãy điền nội dung cho bước trong biểu mẫu của bạn. Đặt cho nó một ID, một tên và một mô tả. Các mục này chủ yếu được sử dụng nội bộ.

![Tab nội dung bước thanh toán với ID, tên và mô tả](/img/config/checkout-form-step-content.png)

Tiếp theo, thiết lập khả năng hiển thị của bước. Bạn có thể chọn giữa **Luôn hiển thị** , **Chỉ hiển thị cho người dùng đã đăng nhập** hoặc **Chỉ hiển thị cho khách**.

![Các tùy chọn hiển thị bước thanh toán](/img/config/checkout-form-step-visibility.png)

Cuối cùng, cấu hình kiểu của bước. Đây là các trường tùy chọn.

![Cấu hình kiểu bước thanh toán](/img/config/checkout-form-step-style.png)

Bây giờ, đã đến lúc thêm các trường vào bước đầu tiên của chúng ta. Chỉ cần nhấp vào **Thêm trường mới** và chọn loại phần bạn muốn.

![Nút Thêm trường mới](/img/config/checkout-form-add-field-button.png)![Menu thả xuống chọn loại trường](/img/config/checkout-form-field-type-dropdown.png)

Mỗi trường có các tham số khác nhau cần được điền. Với mục đầu tiên này, chúng ta sẽ chọn trường **Tên người dùng**.

![Cấu hình trường Tên người dùng](/img/config/checkout-form-username-content.png)![Tham số trường Tên người dùng](/img/config/checkout-form-username-visibility.png)![Cài đặt bổ sung của trường Tên người dùng](/img/config/checkout-form-username-style.png)

Bạn có thể thêm bao nhiêu bước và trường tùy nhu cầu. Để hiển thị các sản phẩm cho khách hàng chọn, hãy dùng trường Bảng giá. Nếu bạn muốn cho phép khách hàng chọn một mẫu, hãy thêm trường Chọn mẫu. Và tương tự.

![Trình chỉnh sửa biểu mẫu thanh toán với trường chọn mẫu](/img/config/checkout-form-with-template-field.png)

_**Lưu ý:** Nếu bạn tạo một sản phẩm sau khi tạo biểu mẫu thanh toán, bạn sẽ cần thêm sản phẩm đó vào phần Bảng giá. Nếu bạn không thêm, sản phẩm sẽ không xuất hiện cho khách hàng trên trang đăng ký._

_**Lưu ý 2:** tên người dùng, email, mật khẩu, tiêu đề website, URL website, tóm tắt đơn hàng, thanh toán và nút gửi là các trường bắt buộc để tạo một biểu mẫu thanh toán._

Trong khi bạn đang làm việc với biểu mẫu thanh toán, bạn luôn có thể dùng nút Xem trước để xem khách hàng sẽ nhìn thấy biểu mẫu như thế nào. Bạn cũng có thể chuyển đổi giữa chế độ xem như một người dùng hiện có hoặc một khách truy cập.

![Nút Xem trước trên trình chỉnh sửa biểu mẫu thanh toán](/img/config/checkout-form-preview-button.png)![Xem trước biểu mẫu thanh toán dưới dạng khách truy cập hoặc người dùng hiện có](/img/config/checkout-form-preview-modal.png)

Cuối cùng, trong **Tùy chọn nâng cao**, bạn có thể cấu hình thông báo cho trang **Cảm ơn**, thêm đoạn mã để theo dõi chuyển đổi, thêm CSS tùy chỉnh vào biểu mẫu thanh toán hoặc giới hạn biểu mẫu ở một số quốc gia nhất định.

![Tùy chọn nâng cao với trang Cảm ơn, theo dõi chuyển đổi và CSS tùy chỉnh](/img/config/checkout-form-advanced.png)

Bạn cũng có thể bật hoặc tắt thủ công biểu mẫu thanh toán bằng cách bật/tắt tùy chọn này ở cột bên phải, hoặc xóa vĩnh viễn biểu mẫu.

![Công tắc kích hoạt và tùy chọn xóa cho biểu mẫu thanh toán](/img/config/checkout-form-active.png)

Đừng quên lưu biểu mẫu thanh toán của bạn!

![Nút Lưu biểu mẫu thanh toán](/img/config/checkout-form-save.png)

Để lấy shortcode của biểu mẫu, hãy nhấp vào **Tạo shortcode** và sao chép kết quả hiển thị trên cửa sổ modal.

![Modal Tạo shortcode với shortcode để sao chép](/img/config/checkout-form-editor.png)

_**Lưu ý:** Bạn sẽ cần thêm shortcode này vào trang đăng ký để biểu mẫu thanh toán này được thêm vào đó._

## Chọn trước sản phẩm và mẫu thông qua tham số URL: {#pre-selecting-products-and-templates-via-url-parameters}

Nếu bạn muốn tạo các bảng giá tùy chỉnh cho sản phẩm của mình và chọn trước trên biểu mẫu thanh toán sản phẩm hoặc mẫu mà khách hàng chọn từ bảng giá hoặc trang mẫu của bạn, bạn có thể dùng tham số URL cho việc này.

### **Đối với gói:** {#for-plans}

Đi tới **Ultimate Multisite > Sản phẩm > Chọn một gói**. Bạn sẽ thấy nút **Nhấp để sao chép liên kết có thể chia sẻ** ở đầu trang. Đây là liên kết bạn có thể dùng để chọn trước gói cụ thể này trên biểu mẫu thanh toán.

![Trang sản phẩm với nút liên kết có thể chia sẻ](/img/config/products-list.png)

Lưu ý rằng liên kết có thể chia sẻ này chỉ hợp lệ cho **Gói**. Bạn không thể dùng liên kết có thể chia sẻ cho các gói sản phẩm hoặc dịch vụ.

### Đối với mẫu: {#for-templates}

Nếu bạn muốn chọn trước mẫu website trên biểu mẫu thanh toán, bạn có thể dùng tham số: **?template_id=X** trên URL trang đăng ký của bạn. "X" cần được thay bằng **số ID mẫu website**. Để lấy số này, hãy đi tới **Ultimate Multisite > Website**.

Nhấp vào **Quản lý** ngay bên dưới mẫu website bạn muốn dùng. Bạn sẽ thấy số SITE ID. Chỉ cần dùng số này cho mẫu website cụ thể đó để nó được chọn trước trên biểu mẫu thanh toán. Trong trường hợp của chúng ta ở đây, tham số URL sẽ là **?template_id=2**.

![Danh sách website hiển thị ID mẫu website](/img/config/site-templates-list.png)

Giả sử website mạng của chúng ta là [**www.mynetwork.com**](http://www.mynetwork.com) và trang đăng ký với biểu mẫu thanh toán của chúng ta nằm ở trang **/register**. URL đầy đủ với mẫu website này được chọn trước sẽ trông như [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Và nếu muốn, bạn có thể chọn trước cả sản phẩm và mẫu cho biểu mẫu thanh toán. Tất cả những gì bạn cần làm là sao chép liên kết có thể chia sẻ của gói và dán tham số mẫu vào cuối. Nó sẽ trông như [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
