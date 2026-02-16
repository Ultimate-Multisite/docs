---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite là một plugin WordPress Multisite cho phép bạn cung cấp dịch vụ WaaS (Websites as a Service - Website dưới dạng Dịch vụ) cho khách hàng. Trước khi đi sâu tìm hiểu cách Ultimate Multisite có thể hỗ trợ doanh nghiệp và khách hàng của bạn, chúng ta cần nắm được một số kiến thức nền tảng.

## WordPress Multisite

Hầu hết chúng ta đều quen thuộc với cách cài đặt WordPress thông thường. Bạn có thể tạo trang web thông qua bảng điều khiển của nhà cung cấp hosting hoặc, nếu muốn thử thách hơn, tự thiết lập máy chủ web và cơ sở dữ liệu mới, tải các file core về và bắt đầu quá trình cài đặt.

Cách này hoạt động tốt với hàng triệu trang WordPress trên toàn thế giới, nhưng từ góc nhìn của một agency hoặc nhà cung cấp hosting, hãy cùng bàn về vấn đề số lượng.

Việc tạo một trang WordPress hay thậm chí cả trăm trang qua bảng điều khiển tự động khá đơn giản, nhưng vấn đề bắt đầu xuất hiện khi phải quản lý các trang này. Nếu không quản lý, bạn sẽ trở thành mục tiêu hàng đầu cho malware. Còn nếu quản lý thì đòi hỏi nhiều công sức và nguồn lực. Dù có các công cụ bên ngoài và plugin hỗ trợ việc quản trị WordPress, nhưng việc khách hàng vẫn có quyền truy cập quản trị đồng nghĩa với việc mọi nỗ lực đó có thể dễ dàng bị vô hiệu hóa.

Trong core của mình, WordPress cung cấp một tính năng có tên đơn giản là 'Multisite', ra đời từ năm 2010 cùng với WordPress 3.0. Kể từ đó, tính năng này đã trải qua nhiều lần cập nhật để bổ sung tính năng mới và tăng cường bảo mật.

Về cơ bản, WordPress multisite có thể hiểu như sau: Một trường đại học duy trì một bản cài đặt WordPress duy nhất, nhưng mỗi khoa lại có trang WordPress riêng của mình.

Để hiểu rõ hơn, hãy cùng tìm hiểu một số thuật ngữ cơ bản không chỉ có trong tài liệu Ultimate Multisite mà còn được sử dụng rộng rãi trong cộng đồng WordPress.

### Mạng lưới (Network)

Trong WordPress, mạng multisite là nơi nhiều subsite có thể được quản lý từ một dashboard duy nhất. Mặc dù cách tạo mạng multisite khác nhau tùy theo nhà cung cấp hosting, kết quả cuối cùng thường là một vài directive bổ sung trong file wp-config.php để WordPress biết rằng nó đang hoạt động ở chế độ đặc biệt này.

Có một số điểm khác biệt rõ rệt giữa mạng multisite và cài đặt WordPress độc lập mà chúng ta sẽ thảo luận ngắn gọn.

#### Subdomain và Subdirectory

Một trong những quyết định đầu tiên bạn cần đưa ra là cài đặt multisite sẽ hoạt động với _subdirectory_ hay _subdomain_. Ultimate Multisite hoạt động tốt với cả hai lựa chọn, nhưng có một số khác biệt về kiến trúc giữa hai cấu hình này.

Với cấu hình _subdirectory_, các site trong mạng sẽ kế thừa đường dẫn dựa trên tên miền chính. Ví dụ, một site có tên 'site1' sẽ có URL đầy đủ là https://domain.com/site1. Với cấu hình _subdomain_, site sẽ có _subdomain_ riêng được tạo từ tên miền chính. Vì vậy, site có tên 'site1' sẽ có URL đầy đủ là https://site1.domain.com/.

Cả hai lựa chọn đều hoàn toàn hợp lệ, việc sử dụng _subdomain_ có một số ưu điểm nhưng cũng đòi hỏi nhiều suy nghĩ và lập kế hoạch hơn về kiến trúc.

Về DNS, việc sử dụng _subdirectory_ khá đơn giản. Vì các site trong mạng chỉ là các đường dẫn con của đường dẫn gốc, chỉ cần một bản ghi tên miền duy nhất cho tên miền chính. Với _subdomain_, thách thức phức tạp hơn một chút, đòi hỏi phải có bản ghi CNAME riêng cho từng site hoặc một bản ghi wildcard (*) trong DNS.

Một vấn đề cần cân nhắc nữa là SSL và việc cấp phát cũng như sử dụng chứng chỉ SSL. Với cấu hình _subdirectory_, có thể sử dụng một chứng chỉ tên miền đơn vì các site trong mạng chỉ là các đường dẫn của tên miền chính. Do đó, chứng chỉ cho domain.com sẽ cung cấp SSL đầy đủ cho https://domain.com/site1, https://domain.com/site2, v.v.

Với cấu hình _subdomain_, việc sử dụng chứng chỉ SSL wildcard là một trong những lựa chọn phổ biến nhất. Loại chứng chỉ SSL này cung cấp mã hóa cho tên miền và các _subdomain_ của nó. Vì vậy, chứng chỉ SSL wildcard sẽ cung cấp mã hóa cho https://site1.domain.com, https://site2.domain.com và cả https://domain.com.

Mặc dù có các lựa chọn khác, chúng thường bị giới hạn về phạm vi và ứng dụng, đồng thời đòi hỏi cấu hình và cân nhắc thêm về tính phù hợp.

#### Plugin và Theme

WordPress cho đi thì cũng lấy lại, ít nhất là từ góc nhìn của khách hàng. Trong cài đặt WordPress độc lập, nếu quản trị viên site cài đặt một plugin xấu hoặc không cập nhật trang web, nạn nhân và người chịu hậu quả duy nhất chính là họ. Tuy nhiên, khi quản trị viên site cài đặt một plugin xấu trên cài đặt multisite, mọi site trong mạng đều trở thành nạn nhân.

Vì lý do này, khi được cấu hình là multisite, WordPress loại bỏ quyền cài đặt plugin và theme của quản trị viên site và chuyển quyền này cho quản trị viên mạng hoặc vai trò 'super admin' mới được tạo. Vai trò đặc quyền này sau đó có thể quyết định có cho phép quản trị viên của các site trong mạng xem hoặc truy cập menu plugin trong dashboard của họ hay không, và nếu có, liệu các quyền đó có bao gồm việc _kích hoạt_ hoặc _vô hiệu hóa_ plugin hay không.

Ở mức độ này, quản trị viên mạng chịu trách nhiệm cài đặt plugin và theme vào mạng và ủy quyền sử dụng các plugin và theme này cho các site trong mạng. Quản trị viên site không thể cài đặt plugin và theme hoặc truy cập plugin và theme không được gán cho site của họ.

#### Người dùng và Quản trị viên

Trong WordPress Multisite, tất cả các site trong mạng chia sẻ cùng một cơ sở dữ liệu và do đó chia sẻ cùng người dùng, vai trò và quyền hạn. Cách hiểu phù hợp nhất là tất cả người dùng đều là thành viên của mạng chứ không phải của một site cụ thể.

Với sự hiểu biết này, có thể không mong muốn cho phép tạo người dùng và vì lý do này, WordPress Multisite loại bỏ quyền này của quản trị viên site và chuyển cho quản trị viên mạng. Đến lượt mình, quản trị viên mạng có thể ủy quyền cần thiết cho quản trị viên site để cho phép họ tạo tài khoản người dùng cho site của mình.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Nhắc lại điều trên, mặc dù các tài khoản người dùng có vẻ như liên quan đến site nhưng thực tế chúng được phân bổ cho mạng và do đó phải là duy nhất trong toàn mạng. Có thể có trường hợp tên người dùng không khả dụng để đăng ký vì lý do này.

Mặc dù không phải là khái niệm xa lạ trong các hệ thống doanh nghiệp, việc đăng ký và xác thực người dùng từ một nguồn duy nhất này thường là khái niệm khó hiểu đối với những người quen với cài đặt WordPress độc lập, nơi việc quản lý người dùng đơn giản hơn nhiều.

#### Media

Trong khi các site trong mạng chia sẻ một cơ sở dữ liệu duy nhất trong WordPress Multisite, chúng duy trì các đường dẫn riêng biệt trên hệ thống file cho các file media.

Vị trí WordPress chuẩn (wp-content/uploads) vẫn được giữ nguyên; tuy nhiên, đường dẫn của nó được thay đổi để phản ánh ID duy nhất của site trong mạng. Do đó, các file media cho một site trong mạng sẽ xuất hiện dưới dạng wp-contents/uploads/site/[id].

#### Permalink

Chúng ta đã đề cập trước đó rằng có những ưu điểm rõ rệt của cấu hình _subdomain_ so với _subdirectory_ và đây chính là điểm khác biệt: đường dẫn.

Trong cấu hình _subdirectory_, site chính (site đầu tiên được tạo khi thiết lập mạng) và các subsite trong mạng phải chia sẻ cùng đường dẫn từ tên miền. Điều này có thể gây ra nhiều xung đột.

Đối với bài viết, một đường dẫn bắt buộc /blog/ được thêm vào site chính để tránh xung đột với các site trong mạng. Điều này có nghĩa là các permalink đẹp như 'Post name' sẽ được hiển thị dưới dạng domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Trong cấu hình _subdomain_, hành động này không cần thiết vì mỗi site trong mạng được hưởng lợi từ việc tách biệt tên miền hoàn toàn và do đó không cần dựa vào một đường dẫn duy nhất. Thay vào đó, chúng duy trì các đường dẫn riêng biệt dựa trên _subdomain_ của mình.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Trang tĩnh

Trong cấu hình _subdirectory_, khả năng xung đột tên mở rộng đến các trang tĩnh vì site chính và các site trong mạng chia sẻ cùng đường dẫn.

Để ngăn chặn điều này, WordPress cung cấp phương tiện để đưa vào danh sách đen một số tên site nhất định để chúng không xung đột với tên của site đầu tiên. Thông thường, quản trị viên mạng sẽ nhập các đường dẫn gốc của các trang của site chính.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

Trong cấu hình _subdomain_, khả năng xung đột tên được giảm thiểu nhờ _subdomain_ vì nó là duy nhất cho site trong mạng và không liên quan theo bất kỳ cách nào đến site chính.

### Đăng ký

Trong cài đặt mạng của WordPress Multisite, có một số tùy chọn đăng ký người dùng mới, cho phép người dùng mới và hiện có tạo site.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Khác với cài đặt WordPress độc lập, các site trong mạng không có các tùy chọn quen thuộc để cho phép đăng ký người dùng hoặc gán các đăng ký đó cho vai trò.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Khi tài khoản người dùng được tạo, các tài khoản đó được tạo ở cấp độ mạng. Vì vậy, thay vì thuộc về bất kỳ site cụ thể nào, chúng thuộc về mạng. Điều này có một số ưu điểm và nhược điểm rõ rệt.

Ví dụ, giả sử WordPress Multisite của bạn hoạt động trong lĩnh vực tin tức và thông tin. Bạn sẽ thiết lập multisite và sau đó tạo các site trong mạng cho tài chính, công nghệ, giải trí và các lĩnh vực quan tâm khác trong khi vẫn duy trì quyền kiểm soát tổng thể về plugin và theme. Mỗi site trong mạng sẽ có mức độ kiểm soát cao hơn nhiều về giao diện và trải nghiệm người dùng của site so với custom post type hoặc danh mục bài viết thông thường.

Ở mức độ này, khi người dùng đăng nhập, họ đăng nhập vào mạng và cuối cùng cũng được đăng nhập vào mỗi site trong mạng để mang lại trải nghiệm liền mạch. Nếu trang tin tức của bạn dựa trên đăng ký, đây sẽ là giải pháp và kết quả lý tưởng.

Tuy nhiên, nếu bản chất và mục đích dự định của multisite là cung cấp các site trong mạng riêng biệt không có mối quan hệ với nhau, hầu như luôn cần các plugin bên ngoài hoặc bổ sung để điều chỉnh vai trò người dùng.

### Tên miền và SSL

Hãy nói về một cài đặt WordPress Multisite mà hầu như thoát khỏi sự chú ý của chúng ta - WordPress.com. Đây cho đến nay là ví dụ rộng lớn nhất về WordPress multisite và thể hiện khả năng tùy biến và điều chỉnh phong phú để hoàn thành một mục đích.

Ngày nay trên internet hiện đại, việc sử dụng SSL gần như là bắt buộc và quản trị viên mạng của WordPress multisite sớm phải đối mặt với những thách thức này.

Trong cấu hình _subdomain_, các site được tạo dựa trên tên miền gốc. Vì vậy, một site có tên 'site1' sẽ được tạo là 'site1.domain.com'. Sử dụng chứng chỉ SSL wildcard, quản trị viên mạng có thể giải quyết thành công thách thức này và cung cấp khả năng mã hóa SSL cho mạng.

WordPress Multisite chứa chức năng ánh xạ tên miền cho phép các site trong mạng được liên kết với tên miền tùy chỉnh hoặc tên miền khác với tên miền gốc của mạng.

Đối với quản trị viên mạng, điều này tạo ra một lớp phức tạp bổ sung cả trong cấu hình tên miền cũng như việc cấp phát và duy trì chứng chỉ SSL.

Ở mức độ này, trong khi WordPress Multisite cung cấp phương tiện cho phép [www.anotherdomain.com](http://www.anotherdomain.com) được ánh xạ đến 'site1', quản trị viên mạng phải tự mình quản lý các bản ghi DNS bên ngoài và triển khai chứng chỉ SSL.

## Ultimate Multisite

Với sự khác biệt giữa cài đặt WordPress độc lập và cài đặt Multisite đã được hiểu rõ, hãy xem Ultimate Multisite là vũ khí tối thượng như thế nào để cung cấp Websites as a Service.

### Giới thiệu

Ultimate Multisite là con dao Thụy Sĩ đa năng của bạn khi tạo Website as a Service (WaaS). Hãy nghĩ đến Wix.com, Squarespace, WordPress.com và sau đó nghĩ đến việc sở hữu dịch vụ của riêng bạn.

Bên trong, Ultimate Multisite sử dụng WordPress Multisite nhưng theo cách không chỉ giải quyết vô số thách thức mà quản trị viên mạng phải đối mặt với cài đặt multisite mà còn nâng cao khả năng cho phép hỗ trợ nhiều trường hợp sử dụng đa dạng.

Trong các phần sau, chúng ta sẽ xem xét một số trường hợp sử dụng phổ biến và các cân nhắc cần thiết để hỗ trợ những trường hợp đó.

### Các trường hợp sử dụng

#### Trường hợp 1: Agency

Thông thường, kỹ năng cốt lõi của một agency nằm ở thiết kế website, với các khía cạnh như hosting hoặc marketing được liệt kê là dịch vụ bổ sung.

Đối với các agency, Ultimate Multisite mang lại giá trị đáng kinh ngạc với khả năng lưu trữ và quản lý nhiều website trên một nền tảng duy nhất. Đặc biệt hơn nữa đối với các agency chuẩn hóa thiết kế của họ trên các theme cụ thể như GeneratePress, Astra, OceanWP hoặc những theme khác có thể tận dụng khả năng của Ultimate Multisite để tự động kích hoạt các theme này cho mỗi site mới.

Tương tự, với sự phong phú của các gói giá agency cho các plugin phổ biến, việc sử dụng Ultimate Multisite cho phép các agency tận dụng các khoản đầu tư hiện có bằng cách cung cấp một nền tảng chung để cài đặt, duy trì và sử dụng plugin.

Rất có thể bạn sẽ muốn sử dụng tên miền riêng và may mắn thay, Ultimate Multisite giúp việc ánh xạ tên miền và chứng chỉ SSL trở nên cực kỳ dễ dàng với các tích hợp cho nhiều nhà cung cấp hosting phổ biến cũng như các dịch vụ như Cloudflare và cPanel.

Do đó, bằng cách tận dụng một trong những nhà cung cấp này hoặc đặt Ultimate Multisite phía sau Cloudflare, các khía cạnh như quản lý tên miền và chứng chỉ SSL trở nên khá đơn giản.

Các agency muốn kiểm soát chặt chẽ việc tạo site sẽ đánh giá cao sự dễ dàng mà họ có thể tạo site và liên kết site với khách hàng và gói sản phẩm thông qua giao diện hợp lý của Ultimate Multisite.

![Giao diện quản lý site Ultimate Multisite](/img/admin/sites-list.png)

Việc kiểm soát chặt chẽ plugin và theme được duy trì trên cơ sở từng sản phẩm thông qua giao diện trực quan của Ultimate Multisite, cho phép plugin và theme được hiển thị hoặc ẩn cũng như trạng thái kích hoạt của chúng khi được tạo cho một site mới.

![Giao diện giới hạn plugin sản phẩm](/img/config/product-plugins.png)

Theme cung cấp chức năng tương tự, cho phép các theme cụ thể được kích hoạt hoặc ẩn khi tạo site.

![Giao diện giới hạn theme sản phẩm](/img/config/product-themes.png)

Các agency sẽ yên tâm với Ultimate Multisite, cho phép họ làm những gì họ làm tốt nhất - thiết kế website xuất sắc.

#### Trường hợp 2: Nhà cung cấp chuyên biệt

Có một câu nói cũ rằng, "làm một việc và làm thật tốt". Đối với nhiều chuyên gia, điều này có nghĩa là tạo ra sản phẩm hoặc dịch vụ xung quanh một ý tưởng cốt lõi duy nhất.

Có thể bạn là một người đam mê golf đang quảng bá website cho các câu lạc bộ hoặc bạn có thể là một game thủ esports cung cấp website cho các clan. Hay một cá nhân quảng bá dịch vụ đặt chỗ cho các nhà hàng?

Vì nhiều lý do, bạn muốn cung cấp dịch vụ dựa trên một framework và nền tảng chung. Có thể là bạn đã thiết kế hoặc đầu tư vào các plugin tùy chỉnh để cung cấp chức năng cần thiết hoặc có thể là các best practice trong ngành đòi hỏi một số cách tiếp cận chuẩn hóa trong thiết kế.

Một trong những tính năng đổi mới của Ultimate Multisite là việc sử dụng template site. Template site là nơi theme đã được cài đặt và kích hoạt, các plugin cần thiết đã được cài đặt và kích hoạt, và các bài viết hoặc trang mẫu đã được tạo. Khi khách hàng tạo site mới dựa trên template, nội dung và cài đặt của template được sao chép sang site mới tạo.

Đối với nhà cung cấp các site và dịch vụ chuyên biệt, điều này mang lại lợi thế vô song trong khả năng tạo ngay lập tức một site sẵn sàng hoạt động với plugin và thiết kế tùy chỉnh. Khách hàng chỉ cần cung cấp đầu vào tối thiểu nhất để hoàn thành dịch vụ.

Tùy thuộc vào yêu cầu, cả cấu hình _subdirectory_ hoặc _subdomain_ đều có thể phù hợp, trong trường hợp đó các lựa chọn kiến trúc sẽ là giữa chứng chỉ SSL đơn giản cho _subdirectory_ hoặc chứng chỉ SSL wildcard cho _subdomain_.

#### Trường hợp 3: Hosting WordPress

Có vô số cách để host các trang WordPress nhưng hiếm khi đơn giản như việc cung cấp không gian web cho khách hàng với phiên bản WordPress được cài đặt sẵn. Điều này là do nhiều quyết định và cân nhắc cần được kết hợp để cung cấp một dịch vụ có ý nghĩa.

Ultimate Multisite xuất sắc trong lĩnh vực này bằng cách cung cấp giải pháp turnkey toàn diện cho việc hosting các trang WordPress. Bao gồm trong giải pháp là các cơ chế cốt lõi để cung cấp dịch vụ đăng ký, thu thanh toán, form thanh toán, voucher giảm giá và giao tiếp với khách hàng.

Phần lớn công việc quan trọng cần thiết để cài đặt, cấu hình và duy trì WordPress Multisite đúng cách được Ultimate Multisite hỗ trợ đến mức quản trị viên mạng chỉ cần xem xét các khía cạnh liên quan đến dịch vụ hoặc lĩnh vực chuyên biệt của họ như các cấp sản phẩm, giá cả và ưu đãi dịch vụ.

Đối với các nhà phát triển muốn tích hợp với Ultimate Multisite, giải pháp cũng cung cấp API RESTful toàn diện và Webhook để thông báo sự kiện.

Không cần phụ thuộc vào vô số plugin và license bên ngoài, Ultimate Multisite cung cấp giải pháp giàu tính năng và tương đương với Wix, Squarespace, WordPress.com và các dịch vụ khác.

### Các cân nhắc về kiến trúc

Mặc dù không phải là hướng dẫn toàn diện, các mục sau đây sẽ đóng vai trò là hướng dẫn cho việc lựa chọn đúng công nghệ để hỗ trợ cài đặt Ultimate Multisite.

#### Shared Hosting và Dedicated Hosting

Thật không may, không phải tất cả các nhà cung cấp hosting đều như nhau và một số thực hiện mật độ máy chủ cực cao. Các nhà cung cấp giá rẻ thường tạo doanh thu bằng cách tối đa hóa mật độ máy chủ. Như vậy, cài đặt Ultimate Multisite của bạn có thể chỉ là một trong số hàng trăm site trên cùng một máy chủ.

Nếu không có các biện pháp bảo vệ thích hợp từ nhà cung cấp, các site trên máy chủ chia sẻ sẽ gặp phải vấn đề 'hàng xóm ồn ào'. Nghĩa là, một site trên cùng máy chủ tiêu thụ quá nhiều tài nguyên khiến các site khác phải cạnh tranh để có được tài nguyên còn lại. Điều này thường biểu hiện dưới dạng các site chậm hoặc không phản hồi kịp thời.

Với vai trò là nhà cung cấp web hosting, hiệu ứng lan tỏa sẽ có nghĩa là khách hàng của bạn trải nghiệm tốc độ kém, thứ hạng trang thấp và tỷ lệ thoát cao, thường dẫn đến khách hàng rời bỏ khi họ tìm kiếm dịch vụ ở nơi khác.

Nói ngắn gọn, rẻ không có nghĩa là tốt.

Ultimate Multisite được biết là hoạt động tốt với một số nhà cung cấp hosting tốt và tích hợp tốt với môi trường của họ để cung cấp các chức năng như ánh xạ tên miền và SSL tự động. Các nhà cung cấp này coi trọng hiệu suất và cung cấp dịch vụ cao cấp hơn shared hosting.

Để biết danh sách các nhà cung cấp tương thích và hướng dẫn thiết lập đầy đủ cho từng nhà cung cấp, vui lòng xem tài liệu Compatible Providers.

#### Các cân nhắc về hiệu suất

Ultimate Multisite không phải là ứng dụng chậm, thực tế, nó cực kỳ nhanh. Tuy nhiên, nó chỉ hoạt động tốt bằng ứng dụng và hạ tầng bên dưới và chỉ có thể tận dụng những gì nó có quyền truy cập.

Hãy xem xét điều này: Bạn là quản trị viên mạng của một cài đặt Ultimate Multisite với 100 site. Một số site đang hoạt động tốt và thu hút một số lượng khách truy cập mỗi ngày.

Kịch bản này sẽ khác ở quy mô nhỏ hơn, chẳng hạn từ một đến năm site, nhưng chẳng bao lâu các vấn đề về quy mô sẽ trở nên rõ ràng.

Nếu không được chú ý, một site Ultimate Multisite duy nhất sẽ chịu trách nhiệm đáp ứng các yêu cầu của tất cả khách truy cập vào các site. Các yêu cầu này có thể là cho các trang PHP động hoặc các tài sản tĩnh như stylesheet, javascript hoặc file media. Dù là một hay một trăm site, các tác vụ này trở nên lặp đi lặp lại, đơn điệu và lãng phí. Không cần thiết phải sử dụng năng lượng CPU và bộ nhớ để xử lý file PHP khi đầu ra là cùng một thông tin tĩnh cho mọi yêu cầu.

Tương tự, một yêu cầu cho trang PHP hoặc HTML lại tạo ra nhiều yêu cầu tiếp theo cho script, stylesheet và file hình ảnh. Những yêu cầu đó được nhắm trực tiếp đến máy chủ Ultimate Multisite của bạn.

Người ta có thể dễ dàng giải quyết vấn đề này bằng cách nâng cấp máy chủ nhưng điều đó không khắc phục được vấn đề thứ hai - độ trễ địa lý. Chỉ có nhiều máy chủ ở nhiều địa điểm mới có thể giải quyết đúng đắn vấn đề này.

Vì lý do này, hầu hết các quản trị viên mạng sử dụng các giải pháp caching front-end và mạng phân phối nội dung (CDN) để đáp ứng các yêu cầu cho các trang tĩnh. Việc đáp ứng các yêu cầu này và phục vụ tài sản trước khi yêu cầu đến máy chủ giúp tiết kiệm tài nguyên xử lý, loại bỏ độ trễ, tránh nâng cấp không cần thiết và tối đa hóa đầu tư công nghệ.

Ultimate Multisite bao gồm một add-on Cloudflare tinh vi cho phép quản trị viên mạng đặt cài đặt của họ phía sau Cloudflare và sử dụng không chỉ khả năng caching mà còn cả DNS hosting, chứng chỉ SSL và các cơ chế bảo mật.

#### Sao lưu

Người ta có thể hỏi 50 người về lời khuyên sao lưu và nhận được 50 ý kiến khác nhau về chiến lược sao lưu. Câu trả lời là, tùy thuộc.

Điều không thể tranh cãi là cần phải sao lưu và gần như không thể tưởng tượng được rằng những việc này không được quản lý bởi nhà cung cấp, cụ thể là những nhà cung cấp dịch vụ quản lý. Do đó, khách hàng sẽ trông đợi vào quản trị viên mạng để cung cấp và quản lý dịch vụ này. Còn quản trị viên mạng trông đợi vào ai lại là một vấn đề hoàn toàn khác.

Cho mục đích của phần này, hãy đồng ý rằng bản sao lưu là bản sao của trạng thái hệ thống tại thời điểm bản sao lưu được khởi tạo. Nói đơn giản, dù trạng thái của hệ thống là gì tại thời điểm sao lưu, trạng thái đó sẽ được ghi lại và lưu giữ trong bản sao lưu.

Với sự hiểu biết này, câu trả lời về cách thực hiện sao lưu và cái gì là tốt nhất cho môi trường của bạn sẽ phụ thuộc phần lớn vào yêu cầu của bạn và khả năng của nhà cung cấp hosting để đáp ứng những yêu cầu đó. Tuy nhiên, theo thứ tự từ có quan điểm rõ ràng nhất đến ít quan điểm nhất, các tùy chọn dưới đây sẽ cung cấp một số hướng dẫn.

#### Snapshot

Snapshot là viên đạn bạc cho việc sao lưu vì chúng dễ dàng, không phức tạp (cho đến khi bạn muốn khôi phục) và 'đơn giản là hoạt động'. Tuy nhiên, nó đòi hỏi sự hỗ trợ từ nhà cung cấp của bạn và chủ yếu chỉ áp dụng nếu bạn có VPS (Virtual Private Server) hoặc tương tự. Một số nhà cung cấp được liệt kê trong tài liệu 'Compatible Providers' của chúng tôi cung cấp sao lưu mà không cần sự can thiệp hoặc cân nhắc thêm từ quản trị viên mạng.

Trong khi các bản sao lưu truyền thống nhắm vào file và cơ sở dữ liệu, snapshot nhắm vào toàn bộ ổ đĩa. Điều này có nghĩa là không chỉ dữ liệu của site được ghi lại trong snapshot mà cả hệ điều hành và cấu hình nữa. Đối với nhiều người, đây là một lợi thế rõ rệt vì hệ thống mới có thể được tạo gần như ngay lập tức từ snapshot và được đưa vào hoạt động để thay thế một instance đang gặp sự cố. Tương tự, quá trình khôi phục để lấy file chỉ yêu cầu gắn ảnh snapshot dưới dạng ổ đĩa vào một instance hiện có để có thể truy cập và sao chép các file.

Snapshot có thể phát sinh chi phí bổ sung với nhà cung cấp hosting nhưng đó là chính sách bảo hiểm chống lại các sự cố.

#### Script bên ngoài

Dường như không thiếu các script và giải pháp bên ngoài để sao lưu tài nguyên WordPress và MySQL và những giải pháp này sẽ hoạt động tốt cho Ultimate Multisite vì đó là plugin WordPress sử dụng hệ thống file và cơ sở dữ liệu WordPress. Do đó, một giải pháp sao lưu các trang WordPress sẽ đáp ứng đầy đủ nhu cầu của Ultimate Multisite.

Chúng tôi không thể đề xuất một script cụ thể nào hơn script khác nhưng lời khuyên chung của chúng tôi là chạy nhiều bài test sao lưu và khôi phục để đảm bảo kết quả như mong muốn và 'chắc chắn thêm chắc' bằng cách liên tục đánh giá script và chức năng của nó, đặc biệt khi áp dụng một số hình thức chiến lược sao lưu chênh lệch.

Cần lưu ý rằng các script này, khi chạy, sẽ tăng tải hệ thống và điều này cần được tính đến.

#### Plugin

Gần như không có vấn đề nào trong WordPress mà không thể giải quyết bằng plugin và nếu việc quản lý script bên ngoài không phải là sở thích của bạn thì có lẽ plugin là lựa chọn tốt thứ hai.

Mặc dù các plugin khác nhau về tùy chọn và tính năng, chúng chủ yếu thực hiện cùng một chức năng và đó là tạo bản sao của các file WordPress và nội dung cơ sở dữ liệu. Sau đó, các chức năng khác nhau khi một số plugin có thể gửi bản sao lưu đến các dịch vụ bên ngoài như Google Drive hoặc Dropbox hoặc đến một số loại dịch vụ lưu trữ đối tượng tương thích như S3, Wasabi hoặc các dịch vụ khác. Các plugin toàn diện hơn cung cấp sao lưu chênh lệch hoặc một số loại chiến lược chỉ sao lưu dữ liệu đã thay đổi để tiết kiệm chi phí lưu trữ bên ngoài.

Khi chọn plugin của bạn, hãy cẩn thận xác minh rằng nó hỗ trợ multisite. Do bản chất hoạt động của nó, trong khi sao lưu đang chạy, bạn có thể mong đợi tải tạm thời trên máy chủ cho đến khi quá trình hoàn tất.

#### Tên miền và SSL

Nhiều điều đã được thảo luận về tên miền trong chế độ _subdomain_ của multisite. Một giải pháp gần như phổ quát cho quản trị viên mạng là sử dụng các bản ghi DNS wildcard.

![Ví dụ cấu hình bản ghi DNS wildcard](/img/config/settings-domain-mapping.png)

Loại bản ghi DNS này sẽ phân giải thành công các _subdomain_ như 'site1.domain.com' và 'site2.domain.com' đến địa chỉ IP 1.2.3.4, do đó hỗ trợ Ultimate Multisite và ở mức độ rộng hơn là WordPress Multisite sử dụng chế độ _subdomain_.

Điều này có thể hoạt động hoàn hảo cho HTTP vì máy chủ đích được đọc từ HTTP header, nhưng hiếm khi web đơn giản như vậy ngày nay khi các giao dịch HTTPS an toàn gần như là bắt buộc.

May mắn thay, có các tùy chọn dễ dàng cho chứng chỉ SSL. Trong chế độ _subdirectory_, có thể sử dụng chứng chỉ tên miền thông thường. Những chứng chỉ này có sẵn miễn phí từ các nhà cung cấp hosting có thể sử dụng dịch vụ LetsEncrypt miễn phí hoặc nguồn khác. Ngoài ra, chúng có sẵn thương mại từ các cơ quan cấp chứng chỉ nếu bạn có thể tạo yêu cầu ký chứng chỉ.

Đối với chế độ _subdomain_, việc sử dụng chứng chỉ SSL wildcard sẽ kết hợp hoàn hảo với tên miền wildcard và cho phép chứng chỉ có thẩm quyền cho tên miền gốc và tất cả _subdomain_ mà không cần cấu hình phức tạp.

Tuy nhiên, cần lưu ý rằng chứng chỉ SSL wildcard có thể không hoạt động với các dịch vụ như Cloudflare trừ khi bạn đang ở gói enterprise hoặc đặt bản ghi thành DNS only, trong trường hợp đó tất cả caching và tối ưu hóa sẽ bị bỏ qua.

Ultimate Multisite cung cấp sẵn giải pháp cho vấn đề này, thể hiện kinh nghiệm phong phú của chúng tôi với nhu cầu của WordPress multisite. Kích hoạt add-on đơn giản này sẽ giúp Ultimate Multisite sử dụng thông tin đăng nhập Cloudflare của bạn để tự động thêm các bản ghi DNS cho các site trong mạng trên Cloudflare và đặt chế độ của chúng thành 'proxied'. Theo cách này, mỗi subsite trong mạng, khi được tạo, sẽ có đầy đủ bảo vệ và lợi ích của Cloudflare bao gồm cả SSL.

Tùy thuộc vào bản chất và mục đích của cài đặt Ultimate Multisite của bạn, có thể cần cho phép khách hàng sử dụng tên miền riêng của họ. Trong trường hợp này, quản trị viên mạng được giao nhiệm vụ giải quyết hai vấn đề. Một là hosting tên miền và hai là chứng chỉ SSL cho tên miền.

Đối với nhiều người, việc sử dụng Cloudflare là một tùy chọn dễ dàng. Khách hàng chỉ cần đặt tên miền của họ trên Cloudflare, trỏ CNAME đến tên miền gốc của Ultimate Multisite và ánh xạ tên miền của họ trong Ultimate Multisite để bắt đầu tận dụng tên miền tùy chỉnh của họ.

Ngoài điều này, cần tìm kiếm các giải pháp thay thế, đó là lý do tại sao Ultimate Multisite đề xuất danh sách Compatible Providers. Điều này là do quy trình thiết lập DNS và SSL có thể là một quy trình không đơn giản. Tuy nhiên, với việc Ultimate Multisite tích hợp với các nhà cung cấp này, độ phức tạp được loại bỏ nhiều và quy trình được tự động hóa.

#### Plugin

Rất có thể bạn sẽ cần thêm plugin để cung cấp chức năng cho khách hàng hoặc các site trong mạng. Liệu tất cả các plugin có hoạt động với WordPress Multisite và Ultimate Multisite không? Điều đó tùy thuộc.

Mặc dù hầu hết các plugin có thể cài đặt được trong WordPress Multisite, việc kích hoạt và cấp phép của chúng khác nhau tùy từng tác giả.

Thách thức nằm ở cách cấp phép được áp dụng với một số plugin yêu cầu cấp phép trên cơ sở từng tên miền. Điều này có nghĩa là đối với một số plugin, quản trị viên mạng cần kích hoạt license thủ công cho mỗi plugin trên mỗi site mới.

Do đó, tốt nhất nên kiểm tra với tác giả plugin về cách plugin của họ hoạt động với WordPress Multisite và bất kỳ yêu cầu hoặc quy trình đặc biệt nào cần thiết để cấp phép cho nó.
