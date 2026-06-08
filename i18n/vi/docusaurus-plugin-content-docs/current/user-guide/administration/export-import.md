---
title: Xuất & Nhập
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Xuất & Nhập

Ultimate Multisite 2.9.0 bổ sung công cụ **Xuất & Nhập** dành cho trang đơn dưới mục **Tools > Export & Import**. Bạn nên sử dụng công cụ này khi cần đóng gói một trang WordPress thành tệp ZIP, khôi phục từ tệp ZIP đó, hoặc di chuyển một trang giữa các cài đặt WordPress Ultimate Multisite và trang đơn tương thích.

## Quyền hạn cần thiết

Bạn phải đăng nhập với tư cách quản trị viên có thể truy cập menu **Tools** của WordPress trên trang đang được xuất hoặc nhập. Trên mạng lưới multisite, hãy sử dụng tài khoản quản trị viên mạng khi xuất hoặc nhập các trang con từ các công cụ Ultimate Multisite cấp mạng.

Các tệp ZIP xuất sẽ được phục vụ qua một điểm cuối tải xuống đã xác thực, vì vậy hãy giữ phiên quản trị viên hoạt động cho đến khi quá trình tải xuống hoàn tất và không chia sẻ các URL tải xuống được tạo ra này công khai.

## Xuất trang thành tệp ZIP

1. Trong khu vực quản trị WordPress của trang bạn muốn sao chép, truy cập **Tools > Export & Import**.
2. Mở khu vực xuất và chọn trang bạn muốn đóng gói.
3. Chọn nội dung tùy chọn để bao gồm, chẳng hạn như uploads, plugins và themes, khi các tùy chọn này khả dụng.
4. Bắt đầu xuất và đợi quá trình hoàn tất. Các trang lớn có thể cần thời gian xử lý nền trước khi tệp ZIP sẵn sàng.
5. Tải xuống tệp ZIP đã hoàn thành từ danh sách xuất.

Hãy giữ tệp ZIP ở nơi an toàn. Nó có thể chứa nội dung trang, cài đặt, tệp media và các tài sản mã đã chọn.

## Nội dung xuất bao gồm

Một tệp ZIP xuất có thể bao gồm:

- Nội dung cơ sở dữ liệu và cấu hình của trang được chọn.
- Các tệp media đã tải lên khi bật tùy chọn uploads.
- Plugins và themes khi các tùy chọn này được chọn.
- Metadata nhập (import metadata) được công cụ Export & Import sử dụng để xây dựng lại trang trên cài đặt đích.

Kích thước tệp ZIP chính xác phụ thuộc vào lượng media, các plugins và themes được chọn, và kích thước các bảng cơ sở dữ liệu của trang.

## Nhập trang từ tệp ZIP

1. Truy cập **Tools > Export & Import** trên trang WordPress đích.
2. Mở khu vực nhập và tải lên tệp ZIP được tạo bởi công cụ Export & Import.
3. Nhập một URL thay thế nếu trang cần sử dụng địa chỉ mới, hoặc để trống trường này để giữ nguyên URL ban đầu.
4. Chọn xem có xóa tệp ZIP đã tải lên sau khi nhập xong hay không.
5. Nhấp vào **Begin Import**.
6. Theo dõi quá trình nhập đang chờ xử lý cho đến khi nó hoàn tất. Chỉ sử dụng **Cancel Import** nếu bạn cần dừng quá trình trước khi hoàn thành.
7. Xem lại trang đã nhập trước khi cho phép lưu lượng truy cập bình thường hoặc truy cập của khách hàng.

Trên cài đặt WordPress trang đơn, việc nhập một tệp ZIP sẽ thay thế trang hiện tại bằng trang đã nhập. Hãy tạo bản sao lưu đầy đủ của trang đích trước khi bạn bắt đầu, và tránh khởi động nhiều lần nhập cho cùng một trang cùng lúc.

## Hạn chế và lưu ý tương thích

- Các thư mục uploads hoặc thư viện media quá lớn có thể tạo ra các tệp ZIP dung lượng lớn. Vui lòng xác nhận giới hạn tải lên PHP, giới hạn thực thi, dung lượng đĩa, bộ nhớ và cài đặt timeout máy chủ trước khi xuất hoặc nhập các trang lớn.
- Các thư viện media quá lớn có thể cần được di chuyển trong một khoảng thời gian bảo trì có lưu lượng truy cập thấp.
- Cài đặt WordPress đích nên chạy các phiên bản tương thích của WordPress, PHP, Ultimate Multisite, plugin và theme.
- Việc nhập trang đơn sẽ thay thế trang đích. Đây không phải là công cụ hợp nhất (merge tool).
- Việc di chuyển từ multisite sang trang đơn và từ trang đơn sang multisite chỉ được hỗ trợ khi môi trường đích có thể chạy các plugin, themes, URL và các thành phần Ultimate Multisite cần thiết của trang đã xuất.
- Giữ tệp ZIP ở chế độ riêng tư. Nó có thể chứa nội dung cơ sở dữ liệu, các tệp đã tải lên và chi tiết cấu hình từ trang đã xuất.

Đối với các quy trình làm việc xuất cấp mạng cũ hơn, xem [Site Export](/user-guide/administration/site-export).
