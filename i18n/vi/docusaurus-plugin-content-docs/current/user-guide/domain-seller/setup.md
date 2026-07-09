---
title: Thiết lập và cấu hình nhà cung cấp
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Trình bán tên miền: Thiết lập và cấu hình nhà cung cấp {#domain-seller-setup-and-provider-configuration}

Tiện ích bổ sung Trình bán tên miền đi kèm một trình hướng dẫn thiết lập có chỉ dẫn, dẫn bạn qua mọi bước bắt buộc. Trang này trình bày luồng trình hướng dẫn và cách cấu hình hoặc cấu hình lại nhà cung cấp sau đó.

## Yêu cầu {#requirements}

- **Multisite Ultimate** v2.4.12 trở lên, được kích hoạt trên mạng
- **PHP** 7.4+
- Thông tin xác thực API cho ít nhất một nhà đăng ký được hỗ trợ

## Trình hướng dẫn thiết lập lần chạy đầu tiên {#first-run-setup-wizard}

Trình hướng dẫn thiết lập tự động khởi chạy lần đầu tiên bạn kích hoạt plugin trên mạng. Nó cũng luôn có sẵn bất cứ lúc nào tại **Quản trị mạng › Ultimate Multisite › Thiết lập Trình bán tên miền**.

### Bước 1 — Chọn nhà cung cấp {#step-1--choose-a-provider}

Chọn nhà đăng ký bạn muốn kết nối. Các tùy chọn được hỗ trợ:

| Nhà cung cấp | Quản lý DNS | Quyền riêng tư WHOIS |
|---|---|---|
| OpenSRS | Có | Có |
| Namecheap | Không | Có (WhoisGuard, miễn phí) |
| HostAfrica | Có | Có (bảo vệ ID) |
| Openprovider | Có | Có |
| Hostinger | Thông qua ánh xạ tên miền Hostinger cốt lõi cho các tên miền được lưu trữ | Có |
| GoDaddy | Không | Không |
| ResellerClub | Có | Không |
| NameSilo | Không | Không |
| Enom | Có | Không |

### Bước 2 — Nhập thông tin xác thực {#step-2--enter-credentials}

Mỗi nhà cung cấp có các trường thông tin xác thực khác nhau:

**OpenSRS** — Tên người dùng và khóa riêng tư (từ OpenSRS Reseller Control Panel)

**Namecheap** — Tên người dùng và API key (từ Account › Công cụ › Truy cập API)

**HostAfrica** — Endpoint API đại lý tên miền và thông tin xác thực từ mô-đun đại lý HostAfrica. Hiện chưa có endpoint sandbox riêng được tài liệu hóa; hãy kiểm thử bằng các kiểm tra chỉ đọc an toàn trước khi chạy đăng ký trực tiếp.

**Openprovider** — Tên người dùng và mật khẩu với quyền truy cập API được bật. Chế độ sandbox tùy chọn sử dụng API sandbox của Openprovider, và một mã định danh khách hàng mặc định tùy chọn có thể được tái sử dụng cho các đăng ký.

**Hostinger** — Token API Hostinger hPanel dùng chung từ tích hợp Hostinger cốt lõi. Cùng token này vận hành ánh xạ tên miền cốt lõi và các thao tác đăng ký của Trình bán tên miền.

**GoDaddy** — API key và secret (từ developer.godaddy.com)

**ResellerClub** — ID đại lý và API key (từ bảng điều khiển ResellerClub)

**NameSilo** — API key (từ namesilo.com › Account › Trình quản lý API)

**Enom** — ID Account và token API

Chọn **Chế độ sandbox** khi có sẵn để kiểm thử với môi trường thử nghiệm của nhà cung cấp trước khi chạy trực tiếp.

### Bước 3 — Kiểm tra kết nối {#step-3--test-the-connection}

Nhấp **Kiểm tra kết nối**. Trình hướng dẫn gửi một lệnh gọi API nhẹ để xác minh thông tin xác thực và khả năng kết nối. Khắc phục mọi vấn đề về thông tin xác thực trước khi tiếp tục.

### Bước 4 — Nhập TLD {#step-4--import-tlds}

Nhấp **Nhập TLD** để kéo tất cả TLD có sẵn và giá bán buôn từ nhà cung cấp đã kết nối. Việc này điền danh sách TLD được dùng bởi các sản phẩm tên miền. Quá trình nhập có thể mất 30–60 giây đối với các nhà cung cấp có danh mục TLD lớn.

TLD cũng được đồng bộ lại tự động mỗi ngày một lần thông qua một tác vụ cron đã lên lịch.

### Bước 5 — Tạo một sản phẩm tên miền {#step-5--create-a-domain-product}

Trình hướng dẫn tạo một sản phẩm tên miền mặc định bao quát tất cả với mức tăng giá 10%. Bạn có thể chỉnh sửa sản phẩm này ngay lập tức hoặc bỏ qua và tạo sản phẩm thủ công trong **Ultimate Multisite › Sản phẩm**.

Xem [Sản phẩm tên miền và định giá](./domain-products) để biết hướng dẫn cấu hình sản phẩm đầy đủ.

---

## Cấu hình lại nhà cung cấp {#reconfiguring-a-provider}

Đi tới **Quản trị mạng › Ultimate Multisite › Cài đặt › Trình bán tên miền** (hoặc nhấp **Cài đặt** trong danh sách plugin).

Trang cài đặt chứa:

- **Bật bán tên miền** — bật/tắt toàn bộ tính năng
- **Nhà cung cấp mặc định** — nhà cung cấp được dùng cho tìm kiếm tên miền và sản phẩm mới
- **Số TLD tối đa mỗi lần tìm kiếm** — số lượng TLD cần kiểm tra khi khách hàng tìm kiếm; giá trị cao hơn hiển thị nhiều tùy chọn hơn nhưng chậm hơn
- **Thời lượng bộ nhớ đệm tình trạng khả dụng** — thời gian lưu vào bộ nhớ đệm kết quả tình trạng khả dụng và giá; giá trị thấp hơn chính xác hơn nhưng làm tăng số lệnh gọi API
- **Quản lý sản phẩm tên miền** — liên kết nhanh đến danh sách Sản phẩm
- **Cấu hình nhà cung cấp** — mở Trình hướng dẫn tích hợp để thêm hoặc cấu hình lại nhà cung cấp

### Thêm nhà cung cấp thứ hai {#adding-a-second-provider}

Nhấp **Cấu hình nhà cung cấp** và chạy lại trình hướng dẫn cho nhà đăng ký mới. Bạn có thể cấu hình nhiều nhà cung cấp đồng thời. Gán từng sản phẩm tên miền cho một nhà cung cấp cụ thể, hoặc để ở mặc định.

### Đồng bộ TLD thủ công {#syncing-tlds-manually}

Trong trang cài đặt, nhấp **Đồng bộ TLD** bên cạnh bất kỳ nhà cung cấp nào đã cấu hình để kéo giá mới nhất. Điều này hữu ích sau khi nhà cung cấp cập nhật giá bán buôn hoặc thêm TLD mới.

---

## Nhật ký {#logs}

Mỗi nhà cung cấp ghi vào kênh nhật ký riêng. Nhật ký có thể xem trong **Quản trị mạng › Ultimate Multisite › Nhật ký**:

| Kênh nhật ký | Nội dung |
|---|---|
| `domain-seller-registration` | Tất cả các lần thử đăng ký (thành công và thất bại) |
| `domain-seller-renewal` | Kết quả tác vụ gia hạn |
| `domain-seller-opensrs` | Hoạt động API OpenSRS thô |
| `domain-seller-namecheap` | Hoạt động API Namecheap thô |
| `domain-seller-hostafrica` | Hoạt động API HostAfrica thô |
| `domain-seller-openprovider` | Hoạt động API Openprovider thô |
| `domain-seller-hostinger` | Hoạt động API Hostinger thô |
| `domain-seller-godaddy` | Hoạt động API GoDaddy thô |
| `domain-seller-resellerclub` | Hoạt động API ResellerClub thô |
| `domain-seller-namesilo` | Hoạt động API NameSilo thô |
| `domain-seller-enom` | Hoạt động API Enom thô |

---

## Ghi chú về khả năng của nhà cung cấp {#provider-capability-notes}

Không phải API của mọi nhà đăng ký đều cung cấp cùng các thao tác. Tiện ích bổ sung hiển thị các thao tác không được hỗ trợ bằng lỗi rõ ràng hướng tới quản trị viên thay vì âm thầm thất bại.

- **HostAfrica** hỗ trợ quy trình đại lý trực tiếp rộng nhất, bao gồm tra cứu, đồng bộ TLD/giá, đăng ký, gia hạn, chuyển nhượng, cập nhật nameserver, bản ghi DNS, mã EPP, khóa nhà đăng ký và bảo vệ ID.
- **Openprovider** hỗ trợ đồng bộ TLD theo giá đại lý, đăng ký, gia hạn, chuyển nhượng, cập nhật nameserver, vùng DNS, mã EPP, khóa nhà đăng ký và quyền riêng tư WHOIS. Dịch vụ này xác thực bằng bearer token ngắn hạn mà addon tự động làm mới.
- **Hostinger** hỗ trợ tìm kiếm tính khả dụng, đăng ký, tra cứu danh mục, cập nhật nameserver, khóa nhà đăng ký và quyền riêng tư WHOIS thông qua hPanel API token dùng chung. Domains API công khai của Hostinger không cung cấp giá đại lý/bán buôn, chuyển nhượng đến, gia hạn rõ ràng hoặc truy xuất mã EPP; việc gia hạn chỉ là tự động gia hạn.
