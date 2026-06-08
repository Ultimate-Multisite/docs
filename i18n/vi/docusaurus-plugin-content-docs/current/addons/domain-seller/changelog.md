---
title: Bản ghi thay đổi của Domain Seller
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Nhật ký thay đổi của Domain Seller

Phiên bản 1.1.0 - Phát hành ngày 2026-05-08
- Mới: Đã triển khai tạo bản ghi DNS (add_dns_record) cho các nhà đăng ký ResellerClub, Enom và OpenSRS
- Sửa lỗi: Trình phân tích Bản ghi DNS mặc định hiện dung nạp các token {DOMAIN} và {SITE_URL}
- Sửa lỗi: Tên slug của trường chọn tên miền tại giỏ hàng đã được phân vùng (namespaced) để tránh xung đột với site_url

Phiên bản 1.0.8 - Phát hành ngày 2026-05-07
- Sửa lỗi: Giá tên miền của ResellerClub hiện lấy giá chi phí trực tiếp (live cost prices) từ điểm cuối API chính xác

Phiên bản 1.0.7 - Phát hành ngày 2026-05-06
* Sửa lỗi: Hàm test_connection của ResellerClub gửi tham số tlds bắt buộc (#224)

Phiên bản 1.0.6 - Phát hành ngày 2026-05-05
* Sửa lỗi: Đăng ký tên miền của ResellerClub hiện hoạt động chính xác với việc xử lý phản hồi API được cải thiện và định tuyến nhà cung cấp dựa trên registry
* Sửa lỗi: Cải thiện trải nghiệm người dùng (UX) trên trang quản trị Register Domain
* Gỡ bỏ: Tích hợp nhà đăng ký CyberPanel

Phiên bản 1.0.5 - Phát hành ngày 2026-04-02
* Mới: Tích hợp nhà đăng ký GoDaddy để đăng ký và quản lý tên miền
* Mới: Tích hợp nhà đăng ký NameSilo
* Mới: Tích hợp nhà đăng ký ResellerClub
* Mới: Tự động xác minh tên miền gửi SES khi mua tên miền và ánh xạ (mapping)
* Sửa lỗi: Bảo vệ các hằng số của plugin Guard khỏi việc định nghĩa lại trong môi trường thử nghiệm
* Sửa lỗi: MySQL xử lý đúng các từ bị tách (word-split) trong install-wp-tests.sh

Phiên bản 1.0.4 - Phát hành ngày 2026-03-14
* **Sửa lỗi:** Một số tài sản CSS bị thiếu
* **Sửa lỗi:** Lỗi liên quan đến các tlds không khả dụng

Phiên bản 1.0.3 - Phát hành ngày 2026-03-09
* **Sửa lỗi:** Lỗi thuộc tính reactive của Vue (domain_option, selected_domain, domain_provider) khi sử dụng mẫu đăng ký cũ với shortcode thanh toán
* **Sửa lỗi:** Căn chỉnh trường nhập subdomain và văn bản quá lớn trong trường chọn tên miền tại giỏ hàng
* **Sửa lỗi:** Ẩn khối xem trước "Your URL will be" khi trường chọn tên miền đã được thêm vào

Phiên bản 1.0.2 - Phát hành ngày 2026-03-01
* **Cải tiến:** Loại bỏ cài đặt markup toàn cục khỏi trang cài đặt — giá cả hiện chỉ tính theo từng sản phẩm
* **Cải tiến:** Thêm liên kết "Quản lý Sản phẩm Tên miền" trên trang cài đặt để điều hướng nhanh
* **Cải tiến:** Mô tả trường và tooltip rõ ràng hơn cho cài đặt sản phẩm tên miền (catch-all so với TLD-specific, loại markup, giá giới thiệu)
* **Cải tiến:** Mô tả tốt hơn trên toàn bộ trang cài đặt (tìm kiếm TLD, gia hạn, DNS, thông báo)

Phiên bản 1.0.1 - Phát hành ngày 2026-02-27

* **Mới:** Công cụ nhập TLD để quản lý giá hàng loạt
* **Mới:** Hỗ trợ giá giới thiệu cho sản phẩm tên miền
* **Mới:** Bộ kiểm thử E2E với Cypress
* **Mới:** Mẫu email cho thông báo vòng đời tên miền
* **Mới:** Các trường địa chỉ đăng ký trên modal đăng ký tên miền quản trị, được điền sẵn từ cài đặt
* **Mới:** Giao diện quản lý DNS của khách hàng với hỗ trợ thêm, chỉnh sửa và xóa bản ghi
* **Mới:** Tùy chọn thanh toán "Mang tên miền của riêng bạn" với ánh xạ tên miền tự động
* **Mới:** Tự động tạo URL trang web từ tên miền trong quá trình thanh toán
* **Mới:** Cấu hình nameserver và bản ghi DNS mặc định trong cài đặt
* **Mới:** Chi tiết đăng ký tên miền và quản lý DNS trên trang chỉnh sửa tên miền cốt lõi
* **Mới:** Trình hướng dẫn thiết lập tự động tạo một sản phẩm tên miền mặc định với các giá trị mặc định hợp lý
* **Mới:** Đồng bộ TLD tự động hàng ngày qua cron trên tất cả các nhà cung cấp đã cấu hình
* **Mới:** Bảo vệ quyền riêng tư WHOIS với cấu hình theo từng sản phẩm (luôn bật, tùy chọn của khách hàng, hoặc tắt)
* **Mới:** Hộp kiểm tra quyền riêng tư WHOIS tại giỏ hàng với hiển thị giá và hỗ trợ chế độ tối
* **Mới:** Trang quản trị Register Domain để đăng ký tên miền thủ công
* **Mới:** Cập nhật plugin tự động qua Ultimate Multisite update server
* **Mới:** Tab bộ lọc loại sản phẩm tên miền trong bảng danh sách sản phẩm với kiểu dáng huy hiệu màu tím
* **Mới:** Các trường liên hệ của người đăng ký (tên, địa chỉ, thành phố, tiểu bang, mã bưu điện, quốc gia, điện thoại) trên biểu mẫu thanh toán tên miền
* **Mới:** Xác thực trường người đăng ký trước khi gọi API của nhà đăng ký với thông báo lỗi rõ ràng
* **Mới:** Các kênh log dành riêng cho nhà cung cấp cho các sự kiện đăng ký tên miền (ví dụ: domain-seller-namecheap.log)
* **Mới:** Các trường liên hệ người đăng ký trên biểu mẫu thanh toán/đăng ký chính (hiển thị khi đăng ký tên miền)
* **Cải tiến:** Thay thế trường tìm kiếm Domain tại giỏ hàng bằng trường Chọn tên miền thống nhất hỗ trợ các tab subdomain, register và domain đã tồn tại
* **Cải tiến:** Cài đặt sản phẩm tên miền hiển thị nội tuyến trên trang chỉnh sửa sản phẩm thông qua hệ thống widget cốt lõi
* **Cải tiến:** Thông tin tên miền của khách hàng được tích hợp vào widget ánh xạ tên miền cốt lõi thay vì metabox độc lập
* **Cải tiến:** Trình hướng dẫn nhập TLD được đơn giản hóa thành đồng bộ một cú nhấp chuột từ tất cả các nhà cung cấp
* **Cải tiến:** Khả năng kiểm tra tên miền của Namecheap sử dụng lệnh gọi API hàng loạt để tìm kiếm nhanh hơn
* **Cải tiến:** API giá của Namecheap sử dụng các tham số và phân tích phản hồi chính xác
* **Cải tiến:** Lưu trữ TLD tập trung trong một tùy chọn mạng duy nhất
* **Cải tiến:** Ghi nhật ký hoạt động tên miền cho các thay đổi DNS, chuyển giao và áp dụng cấu hình
* **Cải tiến:** Đồng bộ TLD đầy đủ cho OpenSRS bằng danh sách master IANA với xác thực hàng loạt
* **Cải tiến:** Đồng bộ TLD đầy đủ cho Namecheap với yêu cầu API phân trang
* **Cải tiến:** Thay thế các lớp nhà cung cấp cũ bằng mẫu Integration Registry
* **Cải tiến:** Bảng cài đặt với cấu hình DNS và chuyển giao
* **Cải tiến:** Số điện thoại tự động định dạng thành định dạng nhà đăng ký +CC.NNN
* **Cải tiến:** Xác thực trường điện thoại loại bỏ các ký tự định dạng trước khi gửi
* **Cải tiến:** Yêu cầu phiên bản được tăng lên Ultimate Multisite 2.4.12 với thông báo rõ ràng hơn
* **Cải tiến:** Workflow CI sử dụng quy trình thanh toán thích hợp cho cả plugin addon và plugin cốt lõi
* **Cải tiến:** prepare_registrant_info() đọc từ user meta đã lưu tại giỏ hàng với fallback địa chỉ thanh toán
* **Đã sửa:** AJAX tìm kiếm tên miền bị lỗi đối với người dùng chưa đăng nhập trong quá trình thanh toán
* **Đã sửa:** AJAX giá tên miền bị lỗi đối với người dùng chưa đăng nhập trong quá trình thanh toán
* **Đã sửa:** Lỗi fatal khi khai báo lại class Spyc khi chạy lệnh WP-CLI
* **Đã sửa:** Timeout API sandbox của Namecheap quá ngắn
* **Đã sửa:** Văn bản nút Chọn tên miền trong tìm kiếm tên miền không hiển thị trên nền xanh lá
* **Đã sửa:** Đăng ký tên miền thất bại với lỗi "RegistrantFirstName is Missing" do thiếu thông tin liên hệ
* **Đã sửa:** Bản ghi tên miền được tạo với blog_id=0 khi trang web chưa tồn tại tại thời điểm thanh toán
* **Đã sửa:** Cài đặt TLD mặc định được trả về dưới dạng chuỗi thay vì mảng đã phân tích
* **Gỡ bỏ:** Trang quản trị Quản lý Tên miền độc lập — hiện được xử lý thông qua các trang tên miền cốt lõi

Phiên bản 1.0.0 - Phát hành ngày 2025-09-28

**Viết lại lớn cho Ultimate Multisite v2**

* **Mới:** Viết lại hoàn toàn với kiến trúc PHP 7.4+ hiện đại
* **Mới:** Tích hợp liền mạch với hệ thống thanh toán Ultimate Multisite v2
* **Mới:** Quản lý sản phẩm tên miền với các tùy chọn giá linh hoạt
* **Mới:** Kiến trúc hỗ trợ nhiều nhà cung cấp tên miền
* **Mới:** Tích hợp tự động gia hạn và đăng ký thuê bao
* **Mới:** Giao diện quản lý tên miền của khách hàng
* **Mới:** Giám sát và nhật ký tên miền quản trị
* **Mới:** Hỗ trợ coupon cho sản phẩm tên miền
* **Mới:** Quản lý cài đặt toàn diện
* **Mới:** Mã nguồn mở rộng thân thiện với nhà phát triển
* **Cải tiến:** Cập nhật nhà cung cấp OpenSRS với hỗ trợ đầy đủ tính năng
* **Cải tiến:** Giao diện người dùng hiện đại nhất quán với Ultimate Multisite v2
* **Sửa lỗi:** Tất cả mã v1 đã lỗi thời được cập nhật lên tiêu chuẩn v2
* **Gỡ bỏ:** Khả năng tương thích v1 cũ (thay đổi phá vỡ)

### Các phiên bản trước (v1 Legacy)

### Phiên bản 0.0.3 - 20/08/2019

* Sửa lỗi: Không tương thích với Groundhogg CRM
* Lưu ý: Đây là bản phát hành cuối cùng tương thích với v1

### Phiên bản 0.0.2 - 07/12/2018

* Sửa lỗi: Đã loại bỏ trường License Key
* Sửa lỗi: Các tab Plan bị thiếu khi plugin tính năng được kích hoạt
* Cải tiến: Thêm nút bỏ qua trên trường đăng ký

### Phiên bản 0.0.1 - Phát hành ban đầu

* Tích hợp OpenSRS cơ bản cho WP Ultimo v1
* Tìm kiếm và đăng ký tên miền đơn giản
* Quyền hạn tên miền dựa trên gói dịch vụ
