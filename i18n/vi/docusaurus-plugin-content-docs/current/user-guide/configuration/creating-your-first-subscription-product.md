---
title: Tạo Sản Phẩm Đăng Ký Đầu Tiên Của Bạn
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Tạo sản phẩm đăng ký đầu tiên (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này chỉ dành cho người dùng Ultimate Multisite phiên bản 2.x. Nếu bạn đang sử dụng phiên bản 1.x,**_ **_**xem bài viết này**_**.

Để bắt đầu vận hành mạng lưới và bán dịch vụ cho người dùng tiềm năng, bạn cần có các tùy chọn đăng ký khác nhau. Làm thế nào để tạo các sản phẩm này? Có những loại sản phẩm nào bạn có thể cung cấp? Trong bài viết này, chúng tôi sẽ hướng dẫn bạn mọi thứ cần biết về sản phẩm.

## Loại sản phẩm

Với Ultimate Multisite, bạn có thể cung cấp hai danh mục sản phẩm cho khách hàng: **gói cước** và **tiện ích bổ sung** **(Order Bump)**. Tiện ích bổ sung được chia thành hai loại: **gói mở rộng** và **dịch vụ**. Chúng ta sẽ tìm hiểu sự khác biệt và đặc điểm của từng loại ngay sau đây.

  * **Gói cước**: sản phẩm cơ bản của Ultimate Multisite. Khách hàng chỉ có thể có tư cách thành viên khi đăng ký một gói cước. Gói cước cung cấp cho khách hàng một hoặc nhiều trang web (tùy thuộc vào cấu hình gói cước) với các giới hạn mà bạn thiết lập trong trang chỉnh sửa sản phẩm.

  * **Gói mở rộng**: tiện ích bổ sung tác động trực tiếp đến chức năng của các gói cước Ultimate Multisite. Chúng thay đổi giới hạn hoặc bổ sung tài nguyên, plugin hoặc theme mới vào gói cước gốc mà khách hàng đã mua. Ví dụ, một gói cước cơ bản có thể cho phép 1.000 lượt truy cập mỗi tháng và bạn có thể cung cấp một gói mở rộng nâng con số này lên 10.000.

  * **Dịch vụ:** tiện ích bổ sung không làm thay đổi chức năng của Ultimate Multisite. Đây là các công việc bạn thực hiện cho khách hàng ngoài gói cước họ đã mua. Ví dụ, khách hàng có thể mua một gói cước cho phép một trang web duy nhất và trả thêm phí cho dịch vụ thiết kế trang web đó.

## Quản lý sản phẩm

Với nhiều người, tab **Sản phẩm** trong Ultimate Multisite **(Ultimate Multisite > Products)** có thể được xem tương đương với các gói cước trong môi trường hosting truyền thống.

Trong Ultimate Multisite, tab Sản phẩm định nghĩa cấu trúc và giới hạn áp dụng cho một sản phẩm hoặc dịch vụ cụ thể. Các cấu trúc này bao gồm mô tả sản phẩm hoặc dịch vụ, giá, thuế và quyền hạn.

Phần này sẽ giúp bạn hiểu rõ về thành phần quan trọng này của Ultimate Multisite.

![Trang danh sách sản phẩm](/img/config/products-list.png)

## Thêm sản phẩm

Dù là gói cước, gói mở rộng hay dịch vụ, điểm bắt đầu để tạo một mục mới là qua **Ultimate Multisite > Products > Add Product**.

![Nút Thêm sản phẩm](/img/config/product-add-button.png)

Giao diện có hai phần chính. Bên trái là các tab giúp định nghĩa sản phẩm, bên phải là các phần để thiết lập giá cơ bản, trạng thái hoạt động và hình ảnh sản phẩm.

![Tổng quan trang chỉnh sửa sản phẩm](/img/config/product-edit-full.png)

### Mô tả

Thông tin cơ bản của sản phẩm được định nghĩa bằng cách nhập tên và mô tả sản phẩm. Các thông tin này sẽ hiển thị ở bất cứ đâu cần thông tin sản phẩm như trang chọn gói cước và giá, hóa đơn, nâng cấp, v.v.

![Phần mô tả sản phẩm](/img/config/product-description.png)

### Loại giá

Ở phía bên phải giao diện, bạn có thể thiết lập giá cơ bản.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Ultimate Multisite hỗ trợ ba loại giá khác nhau. Tùy chọn **trả phí** yêu cầu quản trị viên mạng nhập thông tin về giá sản phẩm và chu kỳ thanh toán.

### Giá

Thành phần giá định nghĩa giá cơ bản của sản phẩm và khoảng thời gian thanh toán.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Ví dụ, giá $29.99 với thiết lập 1 tháng sẽ tính phí $29.99 mỗi tháng. Tương tự, giá $89.97 với thiết lập 3 tháng sẽ tính phí số tiền đó mỗi quý.

### Chu kỳ thanh toán

Phần chu kỳ thanh toán xác định tần suất của khoảng thời gian thanh toán đã đề cập và thường được hiểu theo hợp đồng hoặc kỳ hạn cố định.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Ví dụ, một sản phẩm giá $29.99 với khoảng thời gian 1 tháng và 12 chu kỳ thanh toán sẽ tính phí $29.99 mỗi tháng trong 12 tháng tiếp theo. Nói cách khác, thiết lập này tạo ra một kỳ hạn giá cố định $29.99 mỗi tháng trong 12 tháng rồi ngừng tính phí.

### Thời gian dùng thử

Bật tùy chọn dùng thử cho phép quản trị viên mạng định nghĩa thời gian dùng thử cho sản phẩm.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Trong thời gian dùng thử, khách hàng được tự do sử dụng sản phẩm và sẽ không bị tính phí cho đến khi hết thời gian dùng thử.

### Phí thiết lập

Bạn cũng có thể áp dụng phí thiết lập cho gói cước của mình.

![Phần giá và lưu](/img/config/product-pricing-save.png)

Điều này có nghĩa là khách hàng sẽ trả thêm một khoản tiền trong lần thanh toán đầu tiên (ngoài giá gói cước) tương ứng với mức phí bạn đã định nghĩa trong phần này.

### Trạng thái hoạt động

Nút bật/tắt trạng thái hoạt động xác định sản phẩm có khả dụng cho khách hàng đăng ký mới hay không.

![Nút bật/tắt trạng thái hoạt động](/img/config/product-active.png)

Nếu đã có khách hàng đang sử dụng gói cước này, việc tắt nút sẽ giữ nguyên quyền lợi cho họ nhưng loại bỏ gói cước khỏi danh sách đăng ký mới. **Khách hàng hiện tại trên gói cước sẽ tiếp tục bị tính phí** cho đến khi họ được chuyển sang gói cước mới hoặc bị xóa khỏi gói cước.

### Hình ảnh sản phẩm

Nút **Upload Image** cho phép quản trị viên mạng sử dụng thư viện media để chọn hoặc tải lên hình ảnh sản phẩm.

![Phần hình ảnh sản phẩm](/img/config/product-image.png)

### Xóa

Nút **Delete Product** xóa sản phẩm khỏi hệ thống. Nút này xuất hiện sau khi sản phẩm được xuất bản.

![Phần xóa sản phẩm](/img/config/product-delete.png)

Khác với các thao tác xóa khác, sản phẩm không được đưa vào thùng rác. Do đó, một khi đã xóa thì không thể hoàn tác.

### Tùy chọn sản phẩm

Sau khi định nghĩa thông tin cơ bản của sản phẩm, các tùy chọn sản phẩm giúp quản trị viên mạng định nghĩa thêm các thuộc tính cụ thể của sản phẩm.

#### Chung

Tab **General** định nghĩa các thuộc tính chung của sản phẩm không thuộc các tab cụ thể khác.

![Tab Chung](/img/config/product-general-tab.png)

**Product slug** định nghĩa slug để nhận dạng sản phẩm trong URL và các khu vực khác của Ultimate Multisite.

Ultimate Multisite hỗ trợ nhiều loại sản phẩm bao gồm Gói cước, Gói mở rộng và Dịch vụ. Các tab **Product Options** được điều chỉnh linh hoạt tùy thuộc vào loại sản phẩm được chỉ định.

**Customer Role** xác định vai trò được gán cho khách hàng khi trang web được tạo. Thông thường với hầu hết quản trị viên mạng, đây sẽ là vai trò mặc định của Ultimate Multisite hoặc Administrator. Vai trò mặc định của Ultimate Multisite có thể được thiết lập trong **Ultimate Multisite > Settings > Login & Registration**.

![Cài đặt vai trò khách hàng](/img/config/product-customer-role-settings.png)

#### Nâng cấp & Hạ cấp

Tab này xác định các đường dẫn nâng cấp và hạ cấp khả dụng cho khách hàng trong cấp bậc cụ thể của họ.

Để hiểu khái niệm này, hãy xem xét một ví dụ trong đó một cài đặt Ultimate Multisite chuyên biệt cung cấp giải pháp quản lý học tập cho khách hàng. Để thực hiện điều này, ba gói cước (Basic, Plus và Premium) được định nghĩa và các plugin cụ thể được kích hoạt cho từng gói cước (xem hướng dẫn kích hoạt plugin ở phần sau của bài viết này).

Nếu cài đặt Ultimate Multisite cũng phục vụ các trang web doanh nghiệp hoặc trang web thương mại điện tử, những gói cước đó có thể yêu cầu các plugin khác được cài đặt và kích hoạt.

Do đó, việc cho phép khách hàng eLearning chuyển sang gói cước eCommerce sẽ không phù hợp và gây ra vấn đề vì các gói cước, giá và giới hạn này có thể không thích hợp.

Vì vậy, để hạn chế lộ trình của khách hàng và ngăn ngừa sự cố, quản trị viên mạng có thể định nghĩa một nhóm gói cước và trong nhóm đó chỉ định các gói cước mà khách hàng có thể chuyển đổi.

![Tab Nâng cấp và Hạ cấp](/img/config/product-upgrades.png)

Để định nghĩa một nhóm gói cước, chỉ định các gói cước tương thích trong danh sách **plan group**. **Product order** xác định cách các gói cước được sắp xếp và hiển thị từ thấp đến cao.

Ultimate Multisite cũng bao gồm tính năng **order bump** cho phép thêm các sản phẩm và dịch vụ bổ sung phù hợp vào gói cước. Những mục này được đề xuất cho khách hàng như các mục bổ sung có thể thêm vào gói cước khi thanh toán hoặc trong quá trình nâng cấp.

#### Biến thể giá

Biến thể giá cho phép quản trị viên mạng chỉ định các mức giá thay thế tùy thuộc vào thời hạn. Thiết lập này giúp tạo các mức giá 3 tháng, 6 tháng hoặc hàng năm, hoặc bất kỳ thời hạn và tần suất nào khác tùy theo nhu cầu sử dụng.

![Tab Biến thể giá](/img/config/product-price-variations.png)

Để thiết lập biến thể giá, bật nút **enable price variations** và nhấp vào nút **Add new Price Variation**.

Để nhập một biến thể, thiết lập thời hạn, chu kỳ và giá của biến thể. Có thể thêm các biến thể bổ sung bằng cách nhấp lại vào nút.

![Tab Biến thể giá](/img/config/product-price-variations.png)

#### Thuế

Tab **Taxes** tương ứng với cài đặt thuế được chỉ định trong **Ultimate Multisite > Settings > Taxes** và cụ thể hơn là các mức thuế đã định nghĩa. Để bật thuế và định nghĩa các mức thuế áp dụng, vui lòng xem tài liệu tại **Ultimate Multisite: Settings**

![Tab Thuế](/img/config/product-taxes.png)

Trong ví dụ trước, chúng tôi đã định nghĩa mức thuế địa phương 7.25% áp dụng cho khách hàng tại California (Hoa Kỳ).

Sau khi mức thuế được định nghĩa trong **Ultimate Multisite > Settings > Manage Tax Rates**, nó có thể được chọn ở cấp sản phẩm.

![Tab Thuế](/img/config/product-taxes.png)

Để chỉ định rằng một sản phẩm là mục chịu thuế, bật nút **Is Taxable** và chọn mức thuế áp dụng từ dropdown Tax Category.

#### Mẫu trang web

Về cơ bản, mẫu trang web là các trang web WordPress hoàn chỉnh được sao chép sang trang web của khách hàng khi bắt đầu đăng ký.

![Tab Mẫu trang web](/img/config/product-site-templates.png)

Quản trị viên mạng tạo và cấu hình trang mẫu như một trang web WordPress thông thường với các theme, plugin và nội dung đã được kích hoạt và cấu hình. Trang mẫu được sao chép nguyên vẹn cho khách hàng.

Tab này cho phép quản trị viên mạng chỉ định hành vi của mẫu trang web khi có đăng ký mới. Để sử dụng mẫu trang web, bật nút **allow site templates**.

**Site template selection mode** định nghĩa hành vi của mẫu trang web trong quá trình đăng ký.

Thiết lập **Default** tuân theo các bước trong biểu mẫu thanh toán. Nếu quản trị viên mạng đã định nghĩa một bước chọn mẫu trong quy trình thanh toán và bước đó đã được định nghĩa với các mẫu, thiết lập này sẽ tuân theo các chỉ thị được thiết lập trong bước thanh toán.

Chỉ định **Assign Site Template** buộc phải chọn mẫu được chỉ định. Do đó, mọi bước chọn mẫu trong quy trình thanh toán sẽ bị loại bỏ.

Cuối cùng, **Choose Available Site Templates** ghi đè các mẫu được chỉ định trong bước thanh toán bằng các mẫu được chọn trong thiết lập này. Cũng có thể định nghĩa một mẫu được chọn trước để hỗ trợ khách hàng trong việc lựa chọn.

Tóm lại, nếu quản trị viên mạng muốn việc chọn mẫu diễn ra trong các bước thanh toán, thiết lập '_default_' là đủ. Ngoài ra, để loại bỏ và khóa việc chọn mẫu và ủy quyền việc chọn cho cài đặt gói cước, các tùy chọn '_assign new template_' hoặc '_choose available site templates_' có thể phù hợp hơn.

#### Trang web

Tab **Sites** là một phần của chức năng giới hạn của Ultimate Multisite.

![Tab Trang web](/img/config/product-sites.png)

Thiết lập này chỉ định số lượng trang web tối đa mà khách hàng có thể tạo trong tư cách thành viên của họ.

Để bật giới hạn, bật nút **limit sites** và chỉ định số lượng trang web tối đa trong trường **site allowance**.

#### Lượt truy cập

Tab **Visits** là một phần khác của hệ thống giới hạn của Ultimate Multisite. Thiết lập này cho phép theo dõi và sau đó hạn chế lượt truy cập duy nhất vào trang web của khách hàng.

![Tab Lượt truy cập](/img/config/product-visits.png)

Từ góc độ marketing, quản trị viên mạng có thể sử dụng thiết lập này như một cách để khuyến khích khách hàng nâng cấp gói cước khi đạt giới hạn. Thiết lập này cũng giúp quản trị viên mạng kiểm soát và ngăn chặn lưu lượng truy cập quá mức vào các trang web để bảo toàn tài nguyên hệ thống.

Để sử dụng tính năng này, bật nút **limit unique visits** và chỉ định số lượng khách truy cập duy nhất tối đa trong trường **unique visits quota**.

Khi đạt giới hạn này, Ultimate Multisite sẽ ngừng phục vụ trang web của khách hàng và thay vào đó hiển thị thông báo cho biết đã vượt quá giới hạn.

#### Người dùng

Giới hạn 'Users' của Ultimate Multisite cho phép quản trị viên mạng áp đặt giới hạn về số lượng người dùng có thể được tạo và gán cho các vai trò.

![Tab Người dùng](/img/config/product-users.png)

Để bật tính năng giới hạn, bật nút **limit user** bằng cách trượt sang phải.

Tiếp theo, với mỗi vai trò cần giới hạn, bật nút bên cạnh nó và định nghĩa giới hạn tối đa trong trường thích hợp.

#### Loại bài viết

Tab **Post Types** cho phép quản trị viên mạng áp đặt giới hạn chi tiết cho nhiều loại bài viết trong WordPress.

![Tab Loại bài viết](/img/config/product-post-types.png)

Do cấu trúc của WordPress, bài viết và loại bài viết là thành phần quan trọng của chức năng cốt lõi, và do đó hệ thống giới hạn của Ultimate Multisite được thiết kế để hỗ trợ quản trị viên mạng trong việc thiết lập và duy trì giới hạn.

Để bật hệ thống giới hạn này, bật nút **limit post types** bằng cách trượt sang phải.

Tiếp theo, với mỗi loại bài viết cần giới hạn, bật bằng cách trượt sang phải và chỉ định giới hạn tối đa trong trường thích hợp.

#### Dung lượng ổ đĩa

Tab **Disk Space** cho phép quản trị viên mạng hạn chế dung lượng mà khách hàng sử dụng.

![Tab Dung lượng ổ đĩa](/img/config/product-disk-space.png)

Thông thường trong WordPress multisite, các file lõi được chia sẻ giữa tất cả các trang web và các thư mục riêng được tạo cho file media và upload, đây là nơi các thiết lập và giới hạn này áp dụng.

Để bật giới hạn dung lượng ổ đĩa, bật nút **limit disk size per site** bằng cách trượt sang phải.

Tiếp theo, chỉ định giới hạn tối đa theo megabyte trong trường **disk space allowance**.

#### Tên miền tùy chỉnh

Bằng cách bật tùy chọn này, bạn có thể cho phép tên miền tùy chỉnh cụ thể cho gói cước này.

![Tab Tên miền tùy chỉnh](/img/config/product-custom-domains.png)

#### Theme

Tab **Themes** trong tùy chọn sản phẩm cho phép quản trị viên mạng cung cấp theme cho khách hàng lựa chọn và tùy chọn buộc trạng thái của theme.

![Tab Theme](/img/config/product-themes.png)

_**Lưu ý: Để theme khả dụng cho khách hàng, chúng phải được quản trị viên mạng bật trên toàn mạng.**_

![Trang theme mạng](/img/config/product-themes-network-enabled.png)

Tùy chọn **visibility** định nghĩa theme có hiển thị với khách hàng khi xem tab **Appearance > Themes** trong trang web của họ hay không. Đặt tùy chọn này thành **Hidden** sẽ ẩn theme khỏi chế độ xem và do đó hạn chế khả năng chọn và kích hoạt nó.

![Tab Theme](/img/config/product-themes.png)

Lựa chọn **behavior** cho phép quản trị viên mạng định nghĩa trạng thái của theme khi tạo trang web khách hàng.

Ở trạng thái **Available**, theme được cung cấp cho khách hàng để tự kích hoạt. Ngược lại, trạng thái **Not Available** loại bỏ khả năng kích hoạt theme của khách hàng. Cuối cùng, tùy chọn **Force Activate** buộc chọn và kích hoạt theme, do đó đặt nó làm mặc định khi tạo trang web.

#### Plugin

Tương tự như tab Themes, Ultimate Multisite cho phép quản trị viên mạng định nghĩa khả năng hiển thị của plugin với khách hàng cũng như trạng thái của chúng khi tạo trang web mới.

![Tab Plugin](/img/config/product-plugins.png)

Dropdown **visibility** cho phép plugin hiển thị hoặc ẩn khỏi khách hàng khi xem trên trang web của họ thông qua tùy chọn menu Plugins.

Quản trị viên mạng có thể điều chỉnh thêm hành vi của plugin bằng cách sử dụng các tùy chọn trong dropdown behavior.

![Tab Plugin](/img/config/product-plugins.png)

Lựa chọn **Default** tuân theo trạng thái plugin được định nghĩa trong mẫu trang web mà khách hàng đã chọn. Do đó, các plugin được kích hoạt trong mẫu sẽ vẫn được kích hoạt khi mẫu được sao chép sang trang web của khách hàng.

**Force Activate** đặt plugin ở trạng thái hoạt động khi tạo trang web và ngược lại **Force Inactivate** vô hiệu hóa plugin khi tạo trang web. Trong cả hai trường hợp này, trạng thái plugin có thể được khách hàng thay đổi thủ công thông qua menu WordPress Plugins.

Thiết lập **Force Activate & Lock** hoạt động tương tự nhưng ngăn không cho khách hàng thay đổi trạng thái plugin. Do đó, thiết lập Force Activate and Lock sẽ buộc plugin vào trạng thái hoạt động và ngăn khách hàng vô hiệu hóa nó. Tương tự, thiết lập **Force Inactivate & Lock** sẽ buộc plugin vào trạng thái không hoạt động và ngăn người dùng kích hoạt plugin.

Quản trị viên mạng có thể cân nhắc sử dụng thiết lập Force Activate & Lock và Force Inactivate & Lock kết hợp với mẫu trang web vì các plugin và trạng thái plugin trong mẫu có thể bị ảnh hưởng bởi các thiết lập này nếu được chọn.

#### Đặt lại giới hạn

Tab **Reset Limitations** đặt lại tất cả giới hạn tùy chỉnh được định nghĩa trên sản phẩm. Để đặt lại giới hạn, nhấp vào nút **reset limitations**.

![Tab Đặt lại giới hạn](/img/config/product-reset-limitations.png)

Để xác nhận hành động, trượt nút **confirm reset** sang phải và nhấp vào nút **reset limitations**.

![Tab Đặt lại giới hạn](/img/config/product-reset-limitations.png)

## Chỉnh sửa, Nhân bản hoặc Xóa sản phẩm

Các sản phẩm hiện có có thể được chỉnh sửa, nhân bản hoặc xóa bằng cách điều hướng đến **Ultimate Multisite > Products** và di chuột qua tên sản phẩm hiện có.

![Các hành động khi di chuột qua sản phẩm](/img/config/product-hover-actions.png)
