---
title: Nhật ký thay đổi Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Nhật ký thay đổi Domain Seller

Phiên bản 1.3.0 - Phát hành vào 2026-06-02
- Mới: Đã thêm cảnh báo quản trị mạng khi số dư đại lý HostAfrica xuống quá thấp
- Mới: Đã thêm tính năng tự động ánh xạ các tên miền mới đăng ký tới trang web mạng
- Sửa lỗi: Chỉ áp dụng yêu cầu trường người đăng ký khi đăng ký tên miền mới
- Sửa lỗi: Cho phép bỏ qua thông báo giám sát số dư
- Sửa lỗi: Đảm bảo chi tiết thanh toán của người đăng ký WooCommerce được giữ nguyên
- Sửa lỗi: Bắt buộc đáp ứng yêu cầu liên hệ người đăng ký trong quá trình đăng ký
- Sửa lỗi: Ngăn sản phẩm đăng ký tên miền được tạo với mức tăng giá 0%
- Sửa lỗi: Giữ nguyên lựa chọn tên miền và giá trong suốt luồng phiên thanh toán
- Sửa lỗi: Cải thiện hiển thị tiền tệ giá tên miền HostAfrica
- Sửa lỗi: Cải thiện hành vi form-action khi thanh toán để ngăn sai khớp query-var của WP-core
- Cải thiện: Liên kết tài liệu cấu hình đại lý HostAfrica trong hướng dẫn thiết lập

Phiên bản 1.2.0 - Phát hành vào 2026-05-25
- Mới: Đã thêm HostAfrica làm tích hợp bán tên miền với hỗ trợ thanh toán, trình hướng dẫn thiết lập, tra cứu, TLD/giá, đăng ký, gia hạn, chuyển nhượng, nameserver, DNS, mã EPP, khóa nhà đăng ký và bảo vệ ID
- Mới: Đã thêm Openprovider làm tích hợp bán tên miền với hỗ trợ giá đại lý, đăng ký, gia hạn, chuyển nhượng, nameserver, DNS, mã EPP, khóa nhà đăng ký, quyền riêng tư WHOIS và đồng bộ TLD
- Mới: Đã thêm Hostinger làm tích hợp bán tên miền sử dụng token Hostinger API dùng chung từ tích hợp lõi để kiểm tra khả dụng, đăng ký, cập nhật nameserver, khóa nhà đăng ký và quyền riêng tư WHOIS
- Cải thiện: Đã thêm docblock hành động và bộ lọc vòng đời tên miền để hướng dẫn tích hợp cho nhà phát triển
- Cải thiện: Đã cập nhật siêu dữ liệu tương thích plugin lên WordPress 7.0 trong readme của addon
- Cải thiện: Đã cập nhật các mẫu lập kế hoạch dùng cho điều phối bản phát hành sắp tới

Phiên bản 1.1.0 - Phát hành vào 2026-05-08
- Mới: Tạo bản ghi DNS (add_dns_record) đã được triển khai cho các nhà đăng ký ResellerClub, Enom và OpenSRS
- Sửa lỗi: Trình phân tích cú pháp DNS Records mặc định hiện chấp nhận token {DOMAIN} và {SITE_URL}
- Sửa lỗi: Slug của trường thanh toán chọn tên miền được đặt namespace để tránh xung đột với site_url

Phiên bản 1.0.8 - Phát hành vào 2026-05-07
- Sửa lỗi: Giá tên miền ResellerClub hiện lấy giá vốn trực tiếp từ endpoint API chính xác

Phiên bản 1.0.7 - Phát hành vào 2026-05-06
* Sửa lỗi: ResellerClub test_connection gửi tham số tlds bắt buộc (#224)

Phiên bản 1.0.6 - Phát hành vào 2026-05-05
* Sửa lỗi: Đăng ký tên miền ResellerClub hiện hoạt động chính xác với xử lý phản hồi API được cải thiện và định tuyến nhà cung cấp theo registry
* Sửa lỗi: Cải thiện UX trang quản trị Register Domain
* Đã gỡ bỏ: Tích hợp nhà đăng ký CyberPanel

Phiên bản 1.0.5 - Phát hành vào 2026-04-02
* Mới: Tích hợp nhà đăng ký GoDaddy để đăng ký và quản lý tên miền
* Mới: Tích hợp nhà đăng ký NameSilo
* Mới: Tích hợp nhà đăng ký ResellerClub
* Mới: Tự động xác minh tên miền gửi SES khi mua và ánh xạ tên miền
* Sửa lỗi: Bảo vệ hằng số plugin khỏi bị định nghĩa lại trong môi trường kiểm thử
* Sửa lỗi: Các cờ MySQL được tách từ đúng cách trong install-wp-tests.sh

Phiên bản 1.0.4 - Phát hành vào 2026-03-14
* **Sửa lỗi:** Một số tài nguyên css bị thiếu
* **Sửa lỗi:** Lỗi liên quan đến tlds không khả dụng

Phiên bản 1.0.3 - Phát hành vào 2026-03-09
* **Sửa lỗi:** Lỗi thuộc tính phản ứng Vue (domain_option, selected_domain, domain_provider) khi dùng mẫu đăng ký cũ với shortcode thanh toán
* **Sửa lỗi:** Trường nhập tên miền phụ bị lệch căn chỉnh và chữ quá lớn trong trường thanh toán chọn tên miền
* **Sửa lỗi:** Ẩn khối xem trước "URL của bạn sẽ là" khi trường chọn tên miền hiện diện

Phiên bản 1.0.2 - Phát hành vào 2026-03-01
* **Cải thiện:** Đã gỡ bỏ cài đặt mức tăng giá toàn cục khỏi trang cài đặt — giá hiện chỉ áp dụng theo từng sản phẩm
* **Cải thiện:** Đã thêm liên kết "Quản lý sản phẩm tên miền" trên trang cài đặt để điều hướng nhanh
* **Cải thiện:** Mô tả trường và chú giải công cụ rõ ràng hơn cho cài đặt sản phẩm tên miền (catch-all so với theo TLD, loại mức tăng giá, giá giới thiệu)
* **Cải thiện:** Mô tả tốt hơn trên toàn bộ trang cài đặt (tìm kiếm TLD, gia hạn, DNS, thông báo)

Phiên bản 1.0.1 - Phát hành vào 2026-02-27

* **Mới:** Công cụ nhập TLD để quản lý giá hàng loạt
* **Mới:** Hỗ trợ giá giới thiệu cho sản phẩm tên miền
* **Mới:** Bộ kiểm thử E2E với Cypress
* **Mới:** Mẫu email cho thông báo vòng đời tên miền
* **Mới:** Các trường địa chỉ người đăng ký trên modal đăng ký tên miền của quản trị viên, được điền sẵn từ cài đặt
* **Mới:** Giao diện quản lý DNS cho khách hàng với hỗ trợ thêm, chỉnh sửa và xóa bản ghi
* **Mới:** Tùy chọn checkout "mang tên miền của riêng bạn" với ánh xạ tên miền tự động
* **Mới:** Tự động tạo URL trang từ tên miền trong quá trình checkout
* **Mới:** Cấu hình nameserver và bản ghi DNS mặc định trong cài đặt
* **Mới:** Chi tiết đăng ký tên miền và quản lý DNS trên trang chỉnh sửa tên miền cốt lõi
* **Mới:** Trình hướng dẫn thiết lập tự động tạo một sản phẩm tên miền mặc định với các mặc định hợp lý
* **Mới:** Tự động đồng bộ TLD hằng ngày qua cron trên tất cả nhà cung cấp đã cấu hình
* **Mới:** Bảo vệ quyền riêng tư WHOIS với cấu hình theo từng sản phẩm (luôn bật, khách hàng lựa chọn hoặc tắt)
* **Mới:** Hộp kiểm quyền riêng tư WHOIS trong checkout với hiển thị giá và hỗ trợ chế độ tối
* **Mới:** Trang quản trị Register Domain để đăng ký tên miền thủ công
* **Mới:** Cập nhật plugin tự động qua máy chủ cập nhật Ultimate Multisite
* **Mới:** Tab lọc loại sản phẩm tên miền trong bảng danh sách sản phẩm với kiểu huy hiệu màu tím
* **Mới:** Các trường liên hệ người đăng ký (tên, địa chỉ, thành phố, bang/tỉnh, mã bưu chính, quốc gia, điện thoại) trên biểu mẫu checkout tên miền
* **Mới:** Xác thực trường người đăng ký trước khi gọi API nhà đăng ký với thông báo lỗi rõ ràng
* **Mới:** Kênh nhật ký theo từng nhà cung cấp cho sự kiện đăng ký tên miền (ví dụ: domain-seller-namecheap.log)
* **Mới:** Các trường liên hệ người đăng ký trên biểu mẫu checkout đăng ký/ghi danh chính (hiển thị khi đăng ký tên miền)
* **Cải thiện:** Đã thay thế trường checkout Tìm kiếm tên miền bằng trường Chọn tên miền thống nhất hỗ trợ các tab tên miền phụ, đăng ký và tên miền hiện có
* **Cải thiện:** Cài đặt sản phẩm tên miền hiển thị nội tuyến trên trang chỉnh sửa sản phẩm thông qua hệ thống widget cốt lõi
* **Cải thiện:** Thông tin tên miền của khách hàng nối vào widget ánh xạ tên miền cốt lõi thay vì metabox độc lập
* **Cải thiện:** Trình hướng dẫn nhập TLD được đơn giản hóa thành đồng bộ một cú nhấp từ tất cả nhà cung cấp
* **Cải thiện:** Kiểm tra khả dụng tên miền Namecheap sử dụng lệnh gọi API theo lô để tìm kiếm nhanh hơn
* **Cải thiện:** API định giá Namecheap sử dụng đúng tham số và phân tích phản hồi
* **Cải thiện:** Tập trung lưu trữ TLD trong một tùy chọn mạng duy nhất
* **Cải thiện:** Ghi nhật ký hoạt động tên miền cho các thay đổi DNS, chuyển nhượng và áp dụng cấu hình
* **Cải thiện:** Đồng bộ TLD đầy đủ cho OpenSRS bằng danh sách chính IANA với xác thực theo lô
* **Cải thiện:** Đồng bộ TLD đầy đủ cho Namecheap với yêu cầu API phân trang
* **Cải thiện:** Đã thay thế các lớp nhà cung cấp cũ bằng mẫu Integration Registry
* **Cải thiện:** Bảng cài đặt với cấu hình DNS và chuyển nhượng
* **Cải thiện:** Số điện thoại tự động được định dạng sang định dạng nhà đăng ký +CC.NNN
* **Cải thiện:** Xác thực trường điện thoại loại bỏ các ký tự định dạng trước khi gửi
* **Cải thiện:** Yêu cầu phiên bản được nâng lên Ultimate Multisite 2.4.12 với thông báo rõ ràng hơn
* **Cải thiện:** Quy trình CI sử dụng checkout phù hợp cho cả addon và plugin cốt lõi
* **Cải thiện:** prepare_registrant_info() đọc từ meta người dùng đã lưu ở checkout với dự phòng địa chỉ thanh toán
* **Đã sửa:** AJAX tìm kiếm tên miền bị lỗi đối với người dùng chưa đăng nhập trong quá trình checkout
* **Đã sửa:** AJAX định giá tên miền bị lỗi đối với người dùng chưa đăng nhập trong quá trình checkout
* **Đã sửa:** Lỗi nghiêm trọng khai báo lại lớp Spyc khi chạy lệnh WP-CLI
* **Đã sửa:** Thời gian chờ API sandbox Namecheap quá ngắn
* **Đã sửa:** Văn bản nút Chọn trong tìm kiếm tên miền không hiển thị trên nền xanh lá
* **Đã sửa:** Đăng ký tên miền bị lỗi "RegistrantFirstName is Missing" do thiếu thông tin liên hệ
* **Đã sửa:** Bản ghi tên miền được tạo với blog_id=0 khi trang chưa tồn tại tại thời điểm checkout
* **Đã sửa:** Cài đặt TLD mặc định trả về chuỗi thay vì mảng đã phân tích
* **Đã xóa:** Trang quản trị Domain Management độc lập — hiện được xử lý thông qua các trang tên miền cốt lõi

Phiên bản 1.0.0 - Phát hành vào 2025-09-28

**Viết lại lớn cho Ultimate Multisite v2**

* **Mới:** Viết lại hoàn chỉnh với kiến trúc PHP 7.4+ hiện đại
* **Mới:** Tích hợp liền mạch với hệ thống checkout Ultimate Multisite v2
* **Mới:** Quản lý sản phẩm tên miền với các tùy chọn giá linh hoạt
* **Mới:** Kiến trúc hỗ trợ nhiều nhà cung cấp tên miền
* **Mới:** Tích hợp tự động gia hạn và subscription
* **Mới:** Giao diện quản lý tên miền cho khách hàng
* **Mới:** Giám sát tên miền và nhật ký cho quản trị viên
* **Mới:** Hỗ trợ phiếu giảm giá cho sản phẩm tên miền
* **Mới:** Quản lý cài đặt toàn diện
* **Mới:** Cơ sở mã dễ mở rộng cho nhà phát triển
* **Cải thiện:** Đã cập nhật nhà cung cấp OpenSRS với hỗ trợ đầy đủ tính năng
* **Cải thiện:** UI hiện đại nhất quán với Ultimate Multisite v2
* **Đã sửa:** Tất cả mã v1 không còn được khuyến nghị đã được cập nhật theo tiêu chuẩn v2
* **Đã xóa:** Khả năng tương thích v1 cũ (thay đổi phá vỡ tương thích)

### Các phiên bản trước (v1 cũ)

### Phiên bản 0.0.3 - 20/08/2019

* Đã sửa: Không tương thích với Groundhogg CRM
* Ghi chú: Đây là bản phát hành cuối cùng tương thích với v1

### Phiên bản 0.0.2 - 07/12/2018

* Đã sửa: Đã xóa trường License Key
* Đã sửa: Thiếu tab gói khi plugin tính năng đang hoạt động
* Cải thiện: Đã thêm nút bỏ qua trên trường đăng ký

### Phiên bản 0.0.1 - Bản phát hành ban đầu

* Tích hợp OpenSRS cơ bản cho WP Ultimo v1
* Tìm kiếm và đăng ký tên miền đơn giản
* Quyền tên miền dựa trên gói
