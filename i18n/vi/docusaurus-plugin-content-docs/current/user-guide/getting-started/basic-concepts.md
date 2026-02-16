---
title: Khái niệm cơ bản
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Các khái niệm cơ bản

Đối với người mới sử dụng WordPress Multisite và mới bắt đầu làm quen với Ultimate Multisite, ban đầu có khá nhiều thuật ngữ và khái niệm mới cần tìm hiểu. Việc nắm vững những khái niệm này rất quan trọng vì bạn cần hiểu rõ nền tảng và cách thức hoạt động tổng thể của nó.

Trong bài viết này, chúng tôi sẽ giải thích một số khái niệm chính trong WordPress. Một số khái niệm phù hợp hơn với người dùng, một số dành cho lập trình viên, và một số dành cho cả hai.

## WordPress Multisite

WordPress **Multisite** là một kiểu cài đặt WordPress cho phép bạn tạo và quản lý một mạng lưới gồm nhiều website từ một bảng điều khiển WordPress duy nhất. Bạn có thể quản lý mọi thứ bao gồm số lượng site, tính năng, theme và vai trò người dùng. Hoàn toàn có thể quản lý hàng trăm đến hàng nghìn site.

## Network

Trong WordPress, một mạng lưới multisite là nơi mà nhiều **subsite** có thể được quản lý từ một bảng điều khiển duy nhất. Mặc dù cách tạo mạng lưới multisite khác nhau tùy theo nhà cung cấp hosting, kết quả cuối cùng thường là một vài chỉ thị bổ sung trong file **wp-config.php** để WordPress biết rằng nó đang hoạt động ở chế độ đặc biệt này.

Có một số điểm khác biệt rõ rệt giữa mạng lưới multisite và cài đặt WordPress độc lập mà chúng ta sẽ thảo luận ngắn gọn.

## Database

Database là một tập hợp dữ liệu được tổ chức và cấu trúc có hệ thống. Trong thuật ngữ máy tính, database là phần mềm được sử dụng để lưu trữ và tổ chức dữ liệu. Hãy hình dung nó như một tủ hồ sơ nơi bạn lưu trữ dữ liệu trong các ngăn khác nhau gọi là bảng (table).

WordPress Multisite sử dụng một database và mỗi subsite có các bảng riêng với blog id trong tiền tố, vì vậy khi bạn cài đặt một mạng lưới và tạo subsite, bạn sẽ có các bảng như sau:

_wp_1_options_ \- bảng options cho subsite thứ nhất

_wp_2_options_ \- bảng options cho subsite thứ hai

## Nhà cung cấp hosting

Nhà cung cấp hosting là công ty giúp doanh nghiệp và cá nhân đưa website của họ lên mạng Internet. Các dịch vụ mà nhà cung cấp hosting cung cấp sẽ khác nhau nhưng thường bao gồm thiết kế website, không gian lưu trữ trên máy chủ và kết nối Internet.

## Domain

Tên miền (domain) là địa chỉ mà mọi người sử dụng để truy cập website của bạn. Nó cho trình duyệt web biết nơi cần tìm website của bạn. Giống như địa chỉ nhà, domain là cách mọi người truy cập website của bạn trên mạng. Và giống như có một biển hiệu trước cửa hàng của bạn. Nếu bạn muốn truy cập website của chúng tôi, bạn cần gõ địa chỉ web trên trình duyệt là [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ trong đó [**ultimatemultisite.com**](http://ultimatemultisite.com) là tên miền.

## Subdomain

Subdomain là một loại cấu trúc phân cấp website nằm dưới domain chính, nhưng thay vì sử dụng thư mục để tổ chức nội dung trên website, nó giống như có một website riêng. Nó được trình bày dưới dạng [**https://site1.domain.com/**](https://site1.domain.com/) trong đó _site1_ là tên subdomain và [_domain.com_](http://domain.com) là domain chính.

## Subdirectory

Subdirectory là một loại cấu trúc phân cấp website nằm dưới domain gốc, sử dụng thư mục để tổ chức nội dung trên website. Subdirectory tương tự như subfolder và hai tên này có thể dùng thay thế cho nhau. Nó được trình bày dưới dạng [**https://domain.com/site1**](https://domain.com/site1) trong đó _site1_ là tên subdirectory và [_domain.com_](http://domain.com) là domain chính.

## Subsite

Subsite là một site con mà bạn tạo trên mạng lưới Multisite. Nó có thể là **subdomain** hoặc **subdirectory** tùy thuộc vào cách cài đặt WordPress Multisite của bạn được cấu hình.

## Super Admin

WordPress Super Admin là vai trò người dùng có toàn quyền quản lý tất cả các subsite trên mạng lưới Multisite. Đối với người dùng Multisite, đây là **cấp độ truy cập cao nhất** mà bạn có thể cấp cho cài đặt WordPress của mình.

## Plugin

Nói chung, plugin là một tập hợp mã nguồn bổ sung thêm chức năng cho website WordPress của bạn. Điều này có thể đơn giản như thay đổi logo đăng nhập hoặc phức tạp như thêm chức năng thương mại điện tử. _Woocommerce và Contact Form_ là những ví dụ về plugin.

Trên WordPress Multisite, plugin chỉ có thể được cài đặt từ bảng điều khiển quản trị mạng bởi Super Admin. Admin của subsite chỉ có thể kích hoạt và tắt plugin trong phạm vi subsite của họ.

## Theme

WordPress theme là một nhóm các file (_đồ họa, style sheet và mã nguồn_) quy định giao diện tổng thể của website. Nó cung cấp tất cả các kiểu dáng giao diện như font chữ, bố cục trang, màu sắc, v.v.

Giống như plugin, theme trong WordPress Multisite chỉ có thể được cài đặt bởi Super Admin và có thể được kích hoạt ở cấp subsite bởi admin của subsite.

## Site Template

**Site Template** là một site mẫu có thể được sử dụng làm nền tảng khi tạo các site mới trong mạng lưới của bạn.

Điều này có nghĩa là bạn có thể tạo một site cơ sở, kích hoạt các plugin khác nhau, đặt theme đang hoạt động và tùy chỉnh theo bất kỳ cách nào bạn muốn. Sau đó, khi khách hàng của bạn tạo tài khoản mới, thay vì nhận được một site WordPress mặc định không có nội dung có ý nghĩa bên trong, họ sẽ nhận được một bản sao của site cơ sở với tất cả các tùy chỉnh và nội dung đã sẵn sàng.

## Domain Mapping

**Domain mapping** trong WordPress là cách chuyển hướng người dùng đến đúng máy chủ thông qua địa chỉ website. Trong WordPress Multisite, các subsite được tạo bằng subdirectory hoặc subdomain. Domain mapping cho phép người dùng subsite sử dụng tên miền cấp cao như [**joesbikeshop.com**](http://joesbikeshop.com) để làm cho địa chỉ site của họ trông chuyên nghiệp hơn.

## SSL

SSL là viết tắt của **Secure Sockets Layer**. Đây là chứng chỉ số xác thực danh tính của website và cho phép kết nối được mã hóa. Ngày nay, nó được sử dụng như công nghệ tiêu chuẩn để giữ kết nối internet an toàn và bảo vệ mọi dữ liệu nhạy cảm được gửi giữa hai hệ thống, ngăn chặn tội phạm đọc và sửa đổi bất kỳ thông tin nào được truyền đi, bao gồm cả thông tin cá nhân tiềm năng. Các trình duyệt hiện đại yêu cầu SSL, điều này khiến nó trở nên thiết yếu khi tạo và vận hành website.

## Media

Media là hình ảnh, âm thanh, video và các file khác tạo nên một website.

Các site trong mạng lưới chia sẻ một database duy nhất trong WordPress Multisite, nhưng chúng duy trì các đường dẫn riêng biệt trên hệ thống file cho các file media.

Vị trí WordPress tiêu chuẩn (wp-content/uploads) vẫn được giữ nguyên; tuy nhiên, đường dẫn của nó được thay đổi để phản ánh ID duy nhất của site trong mạng lưới. Do đó, các file media cho một site trong mạng lưới sẽ xuất hiện dưới dạng wp-contents/uploads/site/[id].

## Permalink

Permalink là các URL cố định của từng bài viết blog hoặc trang riêng lẻ trong website của bạn. Permalink còn được gọi là **pretty link**. Theo mặc định, URL của WordPress sử dụng định dạng query string trông giống như thế này:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite là một plugin WordPress, được tạo ra cho các cài đặt WordPress Multisite, biến cài đặt WordPress của bạn thành một mạng lưới site cao cấp – giống như [WordPress.com](https://WordPress.com) – cho phép khách hàng tạo site thông qua phí hàng tháng, hàng quý hoặc hàng năm (bạn cũng có thể tạo các gói Miễn phí).

## Checkout Form

Checkout Form là form đặt hàng một bước hoặc nhiều bước liên quan đến việc tạo subsite, membership và tài khoản người dùng thông qua đăng ký Ultimate Multisite. Nó bao gồm các trường khác nhau và form thanh toán mà người dùng phải gửi trong quá trình đăng ký.

## Webhook

Webhook (còn gọi là web callback hoặc HTTP push API) là cách để một ứng dụng cung cấp thông tin thời gian thực cho các ứng dụng khác. Webhook gửi dữ liệu đến các ứng dụng khác ngay khi sự kiện xảy ra, nghĩa là bạn nhận được dữ liệu ngay lập tức.

**Webhook của Ultimate Multisite** mở ra vô số khả năng, cho phép admin mạng lưới thực hiện đủ loại tích hợp hữu ích, đặc biệt khi kết hợp với các dịch vụ như _Zapier và IFTTT_.

## Event

Event là một hành động xảy ra do người dùng hoặc nguồn khác thực hiện, chẳng hạn như nhấp chuột. Ultimate Multisite lưu giữ bản ghi tất cả các event và log đang xảy ra trong toàn bộ mạng lưới của bạn. Nó theo dõi các hoạt động khác nhau đang diễn ra trong multisite của bạn, như thay đổi gói dịch vụ.
