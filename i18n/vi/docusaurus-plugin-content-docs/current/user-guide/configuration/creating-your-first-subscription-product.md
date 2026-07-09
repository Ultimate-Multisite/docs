---
title: Tạo sản phẩm đăng ký đầu tiên của bạn
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Tạo Product đăng ký đầu tiên của bạn (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này chỉ dành cho người dùng Ultimate Multisite phiên bản 2.x. Nếu bạn đang dùng phiên bản 1.x,**_ **_**hãy xem bài viết này**_**.

Để bắt đầu vận hành mạng của bạn và bắt đầu bán dịch vụ cho người dùng tiềm năng, bạn cần có các tùy chọn đăng ký khác nhau. Bạn tạo các product này như thế nào? Bạn có thể cung cấp những loại product nào? Trong bài viết này, chúng tôi sẽ trình bày mọi điều bạn cần biết về product.

## Loại Product

Với Ultimate Multisite, bạn có thể cung cấp hai danh mục product cho khách hàng của mình: **plan** và **add-on** **(Order Bump)**. Add-on có thể được chia thành hai loại:**package** và **service**. Tiếp theo, chúng ta sẽ xem các điểm khác biệt và đặc thù của chúng.

  * **Plan** : product nền tảng của Ultimate Multisite. Khách hàng của bạn chỉ có thể có membership nếu nó được gắn với một plan. Một plan cung cấp cho khách hàng của bạn một hoặc nhiều site (tùy thuộc vào cấu hình của plan của bạn) với các giới hạn mà bạn đặt trên trang chỉnh sửa product.

  * **Package** : add-on tác động trực tiếp đến các chức năng của plan Ultimate Multisite. Chúng thay đổi các giới hạn hoặc thêm tài nguyên, plugin hoặc theme mới vào plan gốc mà khách hàng của bạn đã mua. Ví dụ, một plan cơ bản có thể cho phép 1.000 lượt truy cập mỗi tháng và bạn có thể cung cấp một package mở rộng con số này lên 10.000.

  * **Service:** add-on không thay đổi các chức năng của Ultimate Multisite. Đây là các tác vụ mà bạn sẽ thực hiện cho khách hàng của mình ngoài plan họ đã mua. Ví dụ, khách hàng của bạn có thể mua một plan cho phép một site duy nhất và cũng trả tiền cho một service bổ sung sẽ thiết kế site này.

## Quản lý Product

Đối với nhiều người, tab **Products** trong Ultimate Multisite **(Ultimate Multisite > Products)** có thể được xem tương đương với plan trong môi trường hosting truyền thống.

Trong Ultimate Multisite, tab Products định nghĩa cấu trúc và các giới hạn áp dụng cho một product hoặc service cụ thể. Các cấu trúc đó bao gồm mô tả product hoặc service, giá, thuế và quyền.

Phần này sẽ hướng dẫn bạn hiểu về nền tảng thiết yếu này của Ultimate Multisite.

![Trang danh sách Products](/img/config/products-list.png)

## Thêm Product

Dù là plan, package hay service, điểm bắt đầu để định nghĩa một mục mới là thông qua **Ultimate Multisite > Products > Add Product**.

![Nút Add Product](/img/config/product-add-button.png)

Giao diện chứa hai phần chính. Bên trái là một số tab hỗ trợ việc định nghĩa product và bên phải là một vài phần để định nghĩa giá cơ bản của product, trạng thái hoạt động và hình ảnh product.

![Tổng quan trang chỉnh sửa Product](/img/config/product-edit-full.png)

### Mô tả

Thông tin product cơ bản có thể được định nghĩa bằng cách cung cấp tên product và mô tả. Các định danh này được hiển thị ở bất cứ nơi nào cần thông tin product, chẳng hạn như lựa chọn plan và giá, hóa đơn, nâng cấp, v.v.

![Phần mô tả Product](/img/config/product-description.png)

### Loại giá

Ở phía bên phải của giao diện, giá cơ bản có thể được định nghĩa.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Ultimate Multisite hỗ trợ ba loại giá khác nhau. Tùy chọn **paid** yêu cầu quản trị viên mạng nhập thông tin liên quan đến giá của product và tần suất thanh toán.

### Giá

Thành phần giá định nghĩa giá product cơ bản và khoảng thời gian thanh toán.

![Phần giá và lưu](/img/config/product-pricing-save.png)

vì vậy, một ví dụ về giá $29.99 với thiết lập 1 tháng sẽ tính phí $29.99 mỗi tháng. Tương tự, giá $89.97 với thiết lập 3 tháng sẽ tính số tiền đó mỗi quý.

### Chu kỳ thanh toán

Phần chu kỳ thanh toán chỉ định tần suất của khoảng thời gian thanh toán đã nêu ở trên và thường được hiểu theo góc độ hợp đồng hoặc kỳ hạn cố định.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Ví dụ, giá product là $29.99 với khoảng thời gian 1 tháng và 12 chu kỳ thanh toán sẽ tính phí $29.99 mỗi tháng cho product trong 12 tháng tiếp theo. Nói cách khác, thiết lập như vậy sẽ tạo một kỳ hạn giá cố định $29.99 mỗi tháng trong 12 tháng rồi ngừng tính phí.

### Thời gian dùng thử

Bật nút chuyển ưu đãi dùng thử cho phép quản trị viên mạng định nghĩa thời gian dùng thử cho product.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Trong thời gian dùng thử, khách hàng được tự do sử dụng product và sẽ không bị tính phí cho đến khi thời gian dùng thử kết thúc.

### Phí thiết lập

Bạn cũng có thể áp dụng phí thiết lập cho plan của mình.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Điều này có nghĩa là khách hàng của bạn sẽ trả thêm một khoản trong lần tính phí đầu tiên (ngoài giá plan), tương ứng với khoản phí bạn đã định nghĩa trong phần này.

### Hoạt động

Nút chuyển hoạt động về cơ bản định nghĩa liệu product có sẵn cho khách hàng đăng ký mới hay không.

![Nút chuyển hoạt động](/img/config/product-active.png)

Nếu đã có khách hàng hiện tại trên plan này, việc đặt nút chuyển sang trạng thái tắt về cơ bản sẽ giữ nguyên plan cho khách hàng cũ và loại bỏ nó khỏi các đăng ký trong tương lai. **Khách hàng hiện tại trên plan sẽ tiếp tục bị tính phí** cho đến khi họ được chuyển sang plan mới hoặc bị xóa khỏi plan.

### Hình ảnh Product

Nút **Upload Image** cho phép quản trị viên mạng sử dụng thư viện phương tiện để chọn hoặc tải lên hình ảnh product.

![Phần hình ảnh Product](/img/config/product-image.png)

### Xóa

Nút **Delete Product** xóa product khỏi hệ thống. Nút này xuất hiện sau khi product được xuất bản.

![Phần xóa product](/img/config/product-delete.png)

Không giống các thao tác xóa khác, product không được đưa vào bất kỳ trạng thái thùng rác nào. Vì vậy, một khi đã xóa, hành động này không thể hoàn tác.

### Tùy chọn Product

Sau khi thông tin sản phẩm ở cấp cơ sở được xác định, các tùy chọn sản phẩm giúp quản trị viên mạng xác định thêm các thuộc tính cụ thể của sản phẩm.

#### Chung

Tab **Chung** xác định các thuộc tính chung của sản phẩm không áp dụng cho bất kỳ tab dành riêng cho sản phẩm nào khác.

![Tab Chung](/img/config/product-general-tab.png)

**slug sản phẩm** có ý nghĩa tự giải thích, xác định slug mà sản phẩm được nhận diện trong URL và các khu vực khác của Ultimate Multisite.

Ultimate Multisite hỗ trợ nhiều loại sản phẩm, cụ thể là Gói, Gói sản phẩm và Dịch vụ. Các tab **Tùy chọn sản phẩm** được điều chỉnh động tùy theo loại sản phẩm đã chỉ định.

**Vai trò khách hàng** chỉ định vai trò được gán cho khách hàng khi trang web được tạo. Thông thường đối với hầu hết quản trị viên mạng, đây sẽ là mặc định của Ultimate Multisite hoặc Quản trị viên. Vai trò mặc định của Ultimate Multisite có thể được đặt trong **Ultimate Multisite > Cài đặt > Đăng nhập & Đăng ký**.

![Cài đặt vai trò khách hàng](/img/config/product-customer-role-settings.png)

#### Nâng cấp & Hạ cấp

Tab này chỉ định các lộ trình nâng cấp và hạ cấp có sẵn cho khách hàng trong cấp cụ thể của họ.

Để hiểu khái niệm này, hãy xem một ví dụ trong đó một cài đặt Ultimate Multisite chuyên biệt cung cấp các giải pháp quản lý học tập cho khách hàng của mình. Để đạt được điều này, ba gói (Cơ bản, Plus và Premium) được xác định và các plugin cụ thể được kích hoạt cho từng gói (xem phần sau trong mục này để biết hướng dẫn về cách kích hoạt plugin).

Nếu cài đặt Ultimate Multisite cũng phục vụ các trang web doanh nghiệp hoặc trang web eCommerce, các gói đó có thể yêu cầu các plugin khác nhau được cài đặt và kích hoạt.

Ở mức độ này, việc cho phép khách hàng eLearning chuyển sang các gói eCommerce sẽ là điều không mong muốn và gây vấn đề, vì các gói, giá cả và giới hạn này có thể không phù hợp.

Do đó, để giới hạn lộ trình của khách hàng và ngăn ngừa sự cố, quản trị viên mạng có thể xác định một nhóm gói và trong nhóm đó chỉ định các gói mà khách hàng có thể chuyển sang.

![Tab Nâng cấp và Hạ cấp](/img/config/product-upgrades.png)

Để xác định một nhóm gói, hãy chỉ định các gói tương thích trong danh sách **nhóm gói**. **thứ tự sản phẩm** xác định cách các gói được sắp xếp và hiển thị từ thấp nhất đến cao nhất.

Ultimate Multisite cũng bao gồm tính năng **order bump**, trong đó các sản phẩm và dịch vụ bổ sung phù hợp có thể được thêm vào các gói. Chúng được cung cấp cho khách hàng dưới dạng các mục bổ sung có thể được thêm vào gói khi thanh toán hoặc trong quá trình nâng cấp.

#### Biến thể giá

Biến thể giá cho phép quản trị viên mạng chỉ định các cấp giá thay thế tùy theo thời lượng. Cài đặt này cho phép cung cấp cùng một sản phẩm theo tháng, theo quý, theo năm hoặc bất kỳ kỳ thanh toán nào khác. Ví dụ, bạn có thể thiết lập một sản phẩm ở mức $29.99/tháng với tùy chọn theo năm được giảm giá ở mức $249.99/năm.

![Tab Biến thể giá](/img/config/product-price-variations-tab.png)

Để thiết lập biến thể giá, hãy đặt nút bật/tắt **Bật biến thể giá** sang trạng thái hoạt động và nhấp vào nút **Thêm biến thể giá mới**.

![Biến thể giá sản phẩm](/img/config/product-price-variations.png)

Để nhập một biến thể, hãy đặt thời lượng, kỳ hạn và giá của biến thể. Có thể nhập thêm các biến thể bằng cách nhấp lại vào nút.

Ví dụ, nếu giá sản phẩm cơ sở của bạn là $29.99 mỗi tháng, bạn có thể thêm:

  * **3 tháng** ở mức $79.99 (giảm giá nhẹ so với theo tháng)
  * **1 năm** ở mức $249.99 (giảm giá đáng kể cho cam kết theo năm)

:::tip Hiển thị nút chuyển đổi kỳ thanh toán trên giao diện người dùng

Chỉ riêng biến thể giá không thêm nút chuyển đổi hoặc công tắc vào quy trình thanh toán trên giao diện người dùng. Để cho phép khách hàng chuyển đổi giữa các kỳ thanh toán (ví dụ: Hàng tháng / Hàng năm), bạn cần thêm trường **Lựa chọn kỳ hạn** vào biểu mẫu thanh toán. Xem [Biểu mẫu thanh toán: Thêm nút chuyển đổi lựa chọn kỳ hạn](checkout-forms#adding-a-period-selection-toggle) để biết hướng dẫn từng bước.
:::

#### Thuế

Tab **Thuế** tương ứng với các cài đặt thuế được chỉ định trong **Ultimate Multisite > Cài đặt > Thuế** và cụ thể hơn là các mức thuế đã xác định. Để bật thuế và xác định các mức thuế áp dụng, vui lòng xem tài liệu tại **Ultimate Multisite: Cài đặt**

![Tab Thuế](/img/config/product-taxes.png)

Trong một ví dụ trước đó, chúng ta đã xác định một mức thuế địa phương 7.25% áp dụng cho khách hàng ở California (Hoa Kỳ).

Sau khi mức thuế được xác định trong **Ultimate Multisite > Cài đặt > Quản lý mức thuế**, mức đó có thể được chọn ở cấp sản phẩm.

![Tab Thuế](/img/config/product-taxes.png)

Để cho biết một sản phẩm là mặt hàng chịu thuế, hãy đặt nút bật/tắt **Có chịu thuế** sang trạng thái hoạt động và chọn mức thuế áp dụng từ menu thả xuống Danh mục thuế.

#### Mẫu trang web

Về cơ bản, mẫu trang web là các trang web WordPress hoàn chỉnh được sao chép sang trang web của khách hàng khi bắt đầu gói đăng ký của họ.

![Tab Mẫu trang web](/img/config/product-site-templates.png)

Quản trị viên mạng tạo và cấu hình trang web mẫu như một trang web WordPress thông thường với theme, plugin và nội dung đã được kích hoạt và cấu hình. Trang web mẫu được sao chép nguyên trạng cho khách hàng.

Tab này cho phép quản trị viên mạng chỉ định hành vi của mẫu trang web khi có gói đăng ký mới. Để sử dụng mẫu trang web cho gói này, hãy đặt nút bật/tắt **Cho phép mẫu trang web** sang trạng thái hoạt động.

Khi **Cho phép mẫu trang web** bị tắt, khách hàng trong gói không thể chọn mẫu ngay cả khi biểu mẫu thanh toán, liên kết có thể chia sẻ hoặc tham số URL nếu không sẽ làm cho mẫu có sẵn. Ultimate Multisite hiện thực thi giới hạn này thông qua một chuỗi dự phòng trên các điểm vào có sẵn: cài đặt gói được kiểm tra trước, sau đó đến cài đặt mẫu của biểu mẫu thanh toán, rồi đến các mẫu được chọn trước hoặc được cung cấp qua URL. Điều này giữ cho giới hạn gói nhất quán và ngăn mẫu xuất hiện cho các sản phẩm không nên cung cấp chúng.

**Chế độ lựa chọn mẫu trang web** xác định hành vi của các mẫu trang web trong quá trình đăng ký.

Thiết lập **M** **ặc định** tuân theo các bước trong biểu mẫu thanh toán. Nếu quản trị viên mạng đã xác định một bước lựa chọn mẫu trong quy trình thanh toán và bước đó đã được định nghĩa với các mẫu, thiết lập này sẽ tuân theo các chỉ thị được thiết lập trong bước thanh toán.

Việc chỉ định **G** **án Mẫu Trang Web** sẽ bắt buộc lựa chọn mẫu đã chỉ định. Do đó, mọi bước lựa chọn mẫu trong quy trình thanh toán sẽ bị xóa.

Cuối cùng, **C** **họn Các Mẫu Trang Web Có Sẵn** sẽ ghi đè các mẫu được chỉ định trong bước thanh toán bằng các mẫu được chọn trong thiết lập này. Một mẫu được chọn sẵn cũng có thể được xác định để hỗ trợ khách hàng trong việc lựa chọn.

Sau cùng, nếu quản trị viên mạng muốn việc lựa chọn mẫu diễn ra trong các bước thanh toán thì thiết lập ' _mặc định_ ' là đủ. Ngoài ra, để loại bỏ và khóa việc lựa chọn mẫu, đồng thời ủy quyền việc lựa chọn cho các thiết lập gói, các tùy chọn ' _gán mẫu mới_ ' hoặc ' _chọn các mẫu trang web có sẵn_ ' có thể là lựa chọn phù hợp.

#### Trang web

Tab **Trang web** là một phần trong chức năng giới hạn của Ultimate Multisite.

![Tab Trang web](/img/config/product-sites.png)

Thiết lập này chỉ định số lượng trang web tối đa mà khách hàng có thể tạo trong phạm vi tư cách thành viên của họ.

Để bật giới hạn, đặt công tắc **giới hạn trang web** sang trạng thái hoạt động và chỉ định số lượng trang web tối đa trong trường **hạn mức trang web**.

#### Lượt truy cập

Tab **Lượt truy cập** là một phần khác của hệ thống giới hạn của Ultimate Multisite. Thiết lập này cho phép tính toán và sau đó điều tiết số lượng khách truy cập duy nhất vào trang web của khách hàng.

![Tab Lượt truy cập](/img/config/product-visits.png)

Từ góc độ tiếp thị, quản trị viên mạng có thể sử dụng thiết lập này như một cách để khuyến khích khách hàng nâng cấp gói của họ khi đạt đến giới hạn. Thiết lập này cũng có thể hỗ trợ quản trị viên mạng hạn chế và ngăn chặn lưu lượng truy cập quá mức vào các trang web nhằm bảo toàn tài nguyên hệ thống.

Để sử dụng tính năng này, đặt công tắc **giới hạn lượt truy cập duy nhất** sang trạng thái hoạt động và chỉ định số lượng khách truy cập duy nhất tối đa trong trường **hạn ngạch lượt truy cập duy nhất**.

Khi đạt đến giới hạn này, Ultimate Multisite sẽ ngừng phục vụ trang web của khách hàng thay vì hiển thị thông báo cho biết rằng các giới hạn đã bị vượt quá.

#### Người dùng

Các giới hạn 'Người dùng' của Ultimate Multisite cho phép quản trị viên mạng áp đặt giới hạn về số lượng người dùng có thể được tạo và gán cho các vai trò.

![Tab Người dùng](/img/config/product-users.png)

Để bật tính năng giới hạn, đặt công tắc **giới hạn người dùng** sang trạng thái hoạt động bằng cách trượt nó sang phải.

Tiếp theo, đối với mỗi vai trò cần giới hạn, đặt công tắc bên cạnh vai trò đó sang trạng thái hoạt động và xác định giới hạn tối đa trong trường phù hợp.

#### Loại bài viết

Tab **Loại bài viết** cho phép quản trị viên mạng áp đặt các giới hạn chi tiết lên tập hợp rộng lớn các loại bài viết trong WordPress.

![Tab Loại bài viết](/img/config/product-post-types.png)

Do cấu trúc của WordPress, các bài viết và loại bài viết là một thành phần quan trọng trong chức năng cốt lõi của nó, và vì vậy hệ thống giới hạn của Ultimate Multisite được thiết kế để hỗ trợ quản trị viên mạng trong việc thiết lập và duy trì các giới hạn.

Để bật hệ thống giới hạn con này, đặt công tắc **giới hạn loại bài viết** sang trạng thái hoạt động bằng cách trượt nó sang phải.

Tiếp theo, đối với mỗi loại bài viết cần giới hạn, bật nó lên bằng cách trượt sang phải và chỉ định giới hạn tối đa trong trường phù hợp.

#### Dung lượng ổ đĩa

Tab **Dung lượng ổ đĩa** cho phép quản trị viên mạng hạn chế dung lượng mà khách hàng sử dụng.

![Tab Dung lượng ổ đĩa](/img/config/product-disk-space.png)

Thông thường trong một WordPress multisite, các tệp lõi được chia sẻ giữa tất cả các trang web, và các thư mục riêng lẻ được tạo cho tệp phương tiện và tệp tải lên, là những đối tượng mà các thiết lập và giới hạn này áp dụng.

Để bật giới hạn sử dụng ổ đĩa, đặt công tắc **giới hạn kích thước ổ đĩa cho mỗi trang web** sang trạng thái hoạt động bằng cách trượt nó sang phải.

Tiếp theo, chỉ định giới hạn tối đa tính bằng megabyte trong trường **dung lượng ổ đĩa cho phép**.

#### Tên miền tùy chỉnh

Bằng cách bật tùy chọn này, bạn có thể cho phép tên miền tùy chỉnh cụ thể trên gói này.

![Tab Tên miền tùy chỉnh](/img/config/product-custom-domains.png)

#### Giao diện

Tab **Giao diện** trong các tùy chọn sản phẩm cho phép quản trị viên mạng cung cấp các giao diện để khách hàng lựa chọn và tùy chọn bắt buộc trạng thái của giao diện.

![Tab Giao diện](/img/config/product-themes.png)

_**Lưu ý: Để giao diện được cung cấp cho khách hàng, chúng phải được quản trị viên mạng bật ở cấp mạng.**_

![Trang giao diện mạng](/img/config/product-themes-network-enabled.png)

Tùy chọn **khả năng hiển thị** xác định giao diện này có hiển thị với khách hàng khi họ xem tab **Appearance > Themes** trong trang web của họ hay không. Đặt tùy chọn này thành **Ẩn** sẽ loại bỏ giao diện khỏi chế độ xem và do đó hạn chế khả năng chọn và kích hoạt nó.

![Tab Giao diện](/img/config/product-themes.png)

Lựa chọn **hành vi** cho phép quản trị viên mạng xác định trạng thái của giao diện khi tạo trang web của khách hàng.

Ở trạng thái **K** **hả dụng**, giao diện được cung cấp cho khách hàng để tự kích hoạt. Ngược lại, trạng thái **Không khả dụng** loại bỏ khả năng kích hoạt giao diện khỏi khách hàng. Cuối cùng, tùy chọn **Bắt buộc kích hoạt** bắt buộc việc lựa chọn và kích hoạt giao diện, do đó đặt nó làm mặc định khi tạo trang web.

#### Plugin

Tương tự như tab Giao diện, Ultimate Multisite cho phép quản trị viên mạng xác định khả năng hiển thị của plugin đối với khách hàng cũng như trạng thái của chúng khi tạo một trang web mới.

![Tab Plugin](/img/config/product-plugins.png)

Danh sách thả xuống **khả năng hiển thị** cho phép plugin hiển thị hoặc bị ẩn khỏi khách hàng khi được xem trên trang web của họ thông qua tùy chọn menu Plugins.

Người quản trị mạng có thể tiếp tục điều chỉnh hành vi của các plugin bằng cách sử dụng các tùy chọn trong menu thả xuống hành vi.

![Tab Plugins](/img/config/product-plugins.png)

Lựa chọn **Default** sẽ tuân theo trạng thái plugin được định nghĩa trong mẫu trang do khách hàng chọn. Do đó, các plugin đã được kích hoạt trong mẫu sẽ vẫn được kích hoạt khi mẫu được sao chép sang trang của khách hàng.

**Force Activate** đặt plugin ở trạng thái hoạt động khi tạo trang và ngược lại, **Force Inactivate** vô hiệu hóa plugin khi tạo trang. Trong cả hai trường hợp này, trạng thái của plugin có thể được khách hàng thay đổi thủ công thông qua menu WordPress Plugins của họ.

Thiết lập **Force Activate & Lock** hoạt động tương tự nhưng ngăn khách hàng thay đổi trạng thái plugin. Do đó, thiết lập Force Activate and Lock sẽ buộc plugin ở trạng thái hoạt động và ngăn khách hàng vô hiệu hóa nó. Tương tự, thiết lập **Force Inactivate & Lock** sẽ buộc plugin ở trạng thái không hoạt động và ngăn người dùng kích hoạt plugin.

Người quản trị mạng có thể cân nhắc sử dụng các thiết lập Force Activate & Lock và Force Inactivate & Lock cùng với các mẫu trang, vì các plugin và trạng thái plugin trong mẫu có thể bị ảnh hưởng bởi các thiết lập này nếu được chọn.

#### Đặt lại Giới hạn

Tab **Reset Limitations** đặt lại tất cả các giới hạn tùy chỉnh được định nghĩa trên sản phẩm. Để đặt lại giới hạn, hãy nhấp vào nút **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

Để xác nhận hành động, hãy gạt nút chuyển **confirm reset** sang trạng thái hoạt động ở bên phải và nhấp vào nút **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

## Chỉnh sửa, Nhân bản hoặc Xóa Sản phẩm

Các sản phẩm hiện có có thể được chỉnh sửa, nhân bản hoặc xóa bằng cách điều hướng đến **Ultimate Multisite > Products** và di chuột lên tên sản phẩm hiện có.

![Hành động khi di chuột lên sản phẩm](/img/config/product-hover-actions.png)
