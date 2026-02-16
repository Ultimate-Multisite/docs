---
title: WordPress Multisite là gì?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite là gì?

Ngay trong phần lõi, WordPress cung cấp một tính năng gọi là 'Multisite', có nguồn gốc từ năm 2010 khi WordPress 3.0 ra mắt. Kể từ đó, tính năng này đã trải qua nhiều lần cập nhật nhằm bổ sung tính năng mới và tăng cường bảo mật.

Về cơ bản, bạn có thể hình dung WordPress multisite như sau: Một trường đại học chỉ cần duy trì một bản cài đặt WordPress duy nhất, nhưng mỗi khoa có thể quản lý trang WordPress riêng của mình.

## 

## WordPress Multisite chính xác là gì?

Multisite là một tính năng của WordPress cho phép nhiều trang web dùng chung một bản cài đặt WordPress. Khi multisite được kích hoạt, trang WordPress ban đầu sẽ được chuyển đổi để hỗ trợ cái thường được gọi là **mạng lưới các trang web**.

Mạng lưới này dùng chung hệ thống tệp (nghĩa là **plugin và theme cũng được dùng chung**), cơ sở dữ liệu, các tệp lõi WordPress, tệp wp-config.php, v.v.

Điều này có nghĩa là việc cập nhật WordPress, theme và plugin chỉ cần thực hiện một lần cho tất cả các trang trong mạng lưới vì chúng dùng chung các tệp trên hệ thống.

Đây là một trong những ưu điểm chính của multisite, cho phép bạn mở rộng số lượng trang web quản lý trong khi khối lượng công việc bảo trì cho khách hàng vẫn giữ nguyên.

## 

## Subdomain hay Subdirectory?

Có hai chế độ chạy WordPress multisite – và bạn cần chọn một trong hai khi chuyển đổi bản cài đặt WordPress thông thường sang multisite:

**Subdomain:** ví dụ: [site.domain.com](http://site.domain.com)

…hoặc

**Subdirectory:** ví dụ: [yourdomain.com/site](http://yourdomain.com/site)

Mỗi chế độ đều có ưu và nhược điểm mà bạn cần cân nhắc khi đưa ra quyết định.

Có một điều quan trọng cần lưu ý: một khi đã quyết định, việc chuyển đổi mạng lưới từ subdirectory sang subdomain hoặc ngược lại là rất khó – đặc biệt nếu bạn đã tạo sẵn một số trang web.

Trước khi đưa ra quyết định, hãy ghi nhớ một số điểm sau:

**Chế độ Subdirectory** là chế độ dễ nhất về mặt thiết lập và bảo trì. Điều này là do tất cả các trang chỉ là đường dẫn gắn vào domain chính (ví dụ: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kết quả là bạn chỉ cần **một chứng chỉ SSL** cho domain chính và nó sẽ bao phủ toàn bộ mạng lưới.

Đồng thời, do cấu trúc URL, Google và hầu hết các công cụ tìm kiếm khác sẽ coi tất cả các trang con trên mạng lưới subdirectory của bạn như một trang web khổng lồ. Do đó, nội dung được thêm vào các trang con bởi khách hàng của bạn có thể ảnh hưởng đến hiệu suất SEO của trang landing chính, chẳng hạn. Mức độ ảnh hưởng còn gây tranh cãi và có ý kiến cho rằng cách sắp xếp này thậm chí có thể có lợi cho hiệu suất SEO.

**Chế độ Subdomain** phức tạp hơn một chút khi thiết lập, nhưng cấu trúc URL của nó (ví dụ: [subsite.yournetwork.com](http://subsite.yournetwork.com)) thường được coi là "chuyên nghiệp hơn".

Một trong những thách thức chính khi thiết lập chế độ subdomain là bao phủ SSL (HTTPS) cho toàn bộ mạng lưới. Vấn đề nằm ở chỗ các trình duyệt coi subdomain là các thực thể riêng biệt. Do đó, bạn sẽ cần một chứng chỉ SSL khác cho mỗi subdomain trên mạng lưới, hoặc một loại chứng chỉ đặc biệt gọi là **Wildcard SSL certificate**. Trong những năm gần đây, các nhà cung cấp hosting và panel đang nâng cấp khả năng cấp phát SSL và một số cung cấp wildcard certificate chỉ với một cú nhấp chuột, thu hẹp khoảng cách giữa hai chế độ về độ phức tạp khi thiết lập.

Ngược lại với chế độ subdirectory, các trang con trên mạng lưới subdomain được các công cụ tìm kiếm coi là các trang web riêng biệt, nghĩa là nội dung trên một trang con không ảnh hưởng đến hiệu suất SEO của các trang con khác.

## Super Admin

Các bản cài đặt WordPress đơn trang cho phép bạn thêm số lượng người dùng không giới hạn và gán cho họ các vai trò khác nhau với các quyền khác nhau.

Trong WordPress Multisite, một loại người dùng mới được mở khóa: **super admin** – và một bảng quản trị mới cũng được mở khóa: **bảng quản trị mạng lưới**.

Đúng như tên gọi, super admin có siêu quyền hạn trên mạng lưới, có khả năng quản lý tất cả các trang con, plugin, theme, mọi thứ!

Khi bạn chuyển đổi bản cài đặt WordPress đơn trang sang multisite, admin gốc của trang đơn sẽ tự động được nâng cấp thành super admin.

Plugin và theme chỉ có thể được cài đặt hoặc gỡ cài đặt từ bảng quản trị mạng lưới bởi super admin. Admin của trang con sau đó có thể chọn kích hoạt hoặc hủy kích hoạt các plugin hoặc theme đó, trừ khi super admin kích hoạt cho toàn mạng lưới một plugin, điều này buộc plugin đó phải hoạt động trên tất cả các trang con mọi lúc.

_Lưu ý: như bạn thấy, việc mời ai đó vào mạng lưới và cấp cho họ quyền super admin nghĩa là trao cho người dùng đó toàn quyền kiểm soát mạng lưới của bạn. Ví dụ, các super admin khác thậm chí có thể xóa quyền super admin của bạn, khiến bạn bị khóa khỏi bảng quản trị mạng lưới của chính mình. Để cho phép khách hàng Ultimate Multisite có quyền kiểm soát chi tiết những gì các super admin bổ sung có thể làm, chúng tôi có một add-on gọi là Support Agents. Add-on này cho phép bạn tạo thêm một loại người dùng khác – agent – chỉ với những quyền họ cần để thực hiện công việc trên mạng lưới._

## Những gì được chia sẻ giữa các trang con và những gì không

Như đã đề cập trước đó, một trong những ưu điểm chính của WordPress multisite là tất cả các trang con dùng chung cấu hình, tệp lõi, theme, plugin, các tệp lõi WordPress, v.v.

Tuy nhiên, có những yếu tố được phân tách riêng cho từng trang con.

\- Ví dụ, mỗi trang con có thư mục uploads riêng. Do đó, các tệp được tải lên bởi người dùng của một trang con cụ thể không thể truy cập được từ trang con khác.

\- Mỗi trang con có bảng quản trị riêng và có thể kích hoạt hoặc hủy kích hoạt plugin hoặc theme, trừ khi chúng đã được super admin kích hoạt cho toàn mạng lưới.

\- Hầu hết các bảng cơ sở dữ liệu được tạo riêng cho mỗi trang con, nghĩa là bài viết, bình luận, trang, cài đặt và nhiều thứ khác được phân tách cho từng trang con.

## Quản lý người dùng trên WordPress Multisite

Một chủ đề nhạy cảm trên WordPress multisite là quản lý người dùng. Bảng người dùng WordPress là một trong số ít bảng được chia sẻ giữa tất cả các trang con.

Cách sắp xếp này có thể gây ra một số vấn đề tùy thuộc vào mục đích bạn xây dựng mạng lưới. Ví dụ dưới đây giúp minh họa vấn đề cấp bách nhất.

Hãy tưởng tượng kịch bản sau:

Bạn tạo một mạng lưới WordPress multisite và bắt đầu cung cấp các trang con với phí hàng tháng cho những người muốn có cửa hàng thương mại điện tử.

Bạn có khách hàng trả phí đầu tiên – John. Bạn tạo một trang cho John trên mạng lưới, cài đặt tất cả các plugin cần thiết, sau đó tạo tài khoản người dùng cho John để anh ấy có thể quản lý cửa hàng của mình.

Sau đó đến khách hàng thứ hai – Alice. Bạn làm tương tự cho cô ấy và giờ cô ấy cũng có một cửa hàng trên mạng lưới của bạn.

John và Alice đều là khách hàng của bạn, nhưng họ không biết nhau. Quan trọng hơn, nếu một trong hai người truy cập trang web cửa hàng của người kia, không có cách nào để biết rằng cửa hàng này đang được lưu trữ trên cùng một mạng lưới.

Một ngày, John cần mua một đôi giày mới và anh ấy tìm thấy đôi hoàn hảo trong cửa hàng của Alice. Khi cố gắng hoàn tất việc mua hàng, anh ấy nhận được thông báo lỗi "email đã được sử dụng", điều này rất kỳ lạ vì John chắc chắn 100% đây là lần đầu tiên anh ấy truy cập trang web của Alice.

Điều xảy ra ở đây là tài khoản người dùng của John được chia sẻ trên toàn bộ mạng lưới, vì vậy khi anh ấy cố tạo tài khoản để thanh toán trên trang của Alice, WordPress sẽ phát hiện rằng một người dùng có cùng địa chỉ email đã tồn tại và báo lỗi.

_Lưu ý: Chúng tôi hiểu điều này có thể tệ đến mức nào tùy thuộc vào trường hợp sử dụng của bạn, vì vậy Ultimate Multisite có một tùy chọn bỏ qua các kiểm tra thông thường về người dùng đã tồn tại, cho phép tạo nhiều tài khoản sử dụng cùng một địa chỉ email. Mỗi tài khoản được gắn với một trang con, nên rủi ro xung đột được giữ ở mức tối thiểu. Trong ví dụ trên, John sẽ không nhận được thông báo lỗi và có thể mua đôi giày đó mà không gặp vấn đề gì. Tùy chọn này được gọi là Enable Multiple Accounts, và có thể kích hoạt tại Ultimate Multisite → Settings → Login & Registration._

Mặc dù bảng người dùng được chia sẻ, người dùng có thể được thêm vào hoặc xóa khỏi các trang con bởi admin trang con hoặc super admin, và họ thậm chí có thể có các vai trò người dùng khác nhau trên các trang con khác nhau.

## Cân nhắc về hiệu suất

WordPress multisite thực sự mạnh mẽ về số lượng trang web mà nó có thể hỗ trợ. Điều này có thể được chứng minh bởi thực tế rằng [WordPress.com](https://WordPress.com), Edublogs và Campuspress đều là các dịch vụ dựa trên multisite và mỗi dịch vụ lưu trữ hàng nghìn trang web.

Mặc dù về lý thuyết không có số lượng trang tối đa mà bạn có thể lưu trữ trên một bản cài đặt WordPress multisite, nhưng trên thực tế, số lượng trang bạn có thể chạy một cách ổn định có thể thay đổi rất nhiều tùy thuộc vào nhiều yếu tố khác nhau: mức độ động của các trang, plugin nào có sẵn cho các trang con, v.v.

Theo nguyên tắc chung, mạng lưới của bạn càng đơn giản càng tốt. Ưu tiên các trang mà nội dung không thực sự động (điều này làm cho chúng trở thành ứng viên tuyệt vời cho các chiến lược caching mạnh mẽ) và giữ cho stack plugin càng nhẹ càng tốt (số lượng plugin đang hoạt động càng thấp càng tốt) có thể tăng đáng kể số lượng trang con bạn có thể lưu trữ.

Phần tuyệt vời nhất là vì đây đều là WordPress, các công cụ bạn đã biết và yêu thích để cải thiện hiệu suất cũng sẽ hoạt động cho mạng lưới multisite.

Nút thắt cổ chai chính của multisite là cơ sở dữ liệu, nhưng nếu mọi thứ khác được thiết lập đúng cách, có thể đạt đến vài nghìn trang trước khi bạn cần lo lắng về điều đó. Ngay cả khi đó, vẫn có các giải pháp có thể được thêm dần dần ở thời điểm đó (như các giải pháp database sharding chẳng hạn).
