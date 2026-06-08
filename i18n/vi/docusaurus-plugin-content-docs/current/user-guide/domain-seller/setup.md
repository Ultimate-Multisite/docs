---
title: Thiết lập và Cấu hình Nhà cung cấp
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Thiết lập và Cấu hình Nhà cung cấp

Addon Domain Seller đi kèm với một trình hướng dẫn thiết lập (setup wizard) giúp bạn đi qua từng bước cần thiết. Trang này sẽ hướng dẫn bạn về quy trình của trình hướng dẫn và cách cấu hình hoặc tái cấu hình các nhà cung cấp sau này.

## Yêu cầu

- **Ultimate Multisite** v2.4.12 trở lên, đã kích hoạt ở cấp độ mạng (network-activated)
- **PHP** 7.4+
- Thông tin xác thực API cho ít nhất một nhà đăng ký (registrar) được hỗ trợ

## Trình hướng dẫn thiết lập lần đầu

Trình hướng dẫn thiết lập sẽ tự động khởi chạy lần đầu tiên bạn kích hoạt plugin ở cấp độ mạng. Bạn cũng có thể truy cập nó bất cứ lúc nào tại **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Bước 1 — Chọn nhà cung cấp

Chọn nhà đăng ký mà bạn muốn kết nối. Các tùy chọn được hỗ trợ:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, miễn phí) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Bước 2 — Nhập thông tin xác thực

Mỗi nhà cung cấp có các trường thông tin xác thực khác nhau:

**OpenSRS** — Tên người dùng (Username) và khóa riêng (private key) (từ OpenSRS Reseller Control Panel)

**Namecheap** — Tên người dùng (Username) và khóa API (API key) (từ Account › Tools › API Access)

**GoDaddy** — Khóa API (API key) và bí mật (secret) (từ developer.godaddy.com)

**ResellerClub** — ID Nhà bán lại (Reseller ID) và khóa API (API key) (từ bảng điều khiển ResellerClub)

**NameSilo** — Khóa API (API key) (từ namesilo.com › Account › API Manager)

**Enom** — ID Tài khoản (Account ID) và Token API (API token)

Hãy kiểm tra **Sandbox mode** (Chế độ thử nghiệm) nếu có để kiểm tra trên môi trường thử nghiệm của nhà cung cấp trước khi đưa vào sử dụng thực tế.

### Bước 3 — Kiểm tra kết nối

Nhấp vào **Test Connection**. Trình hướng dẫn sẽ gửi một lệnh gọi API nhẹ để xác minh thông tin xác thực và khả năng kết nối. Vui lòng khắc phục mọi vấn đề về thông tin xác thực trước khi tiếp tục.

### Bước 4 — Nhập TLDs

Nhấp vào **Import TLDs** để kéo tất cả các TLD có sẵn và giá bán buôn từ nhà cung cấp đã kết nối. Thao tác này sẽ điền vào danh sách TLD được sử dụng bởi các sản phẩm tên miền. Việc nhập có thể mất từ 30–60 giây đối với các nhà cung cấp có danh mục TLD lớn.

Các TLD cũng sẽ được đồng bộ lại tự động một lần mỗi ngày thông qua một cron job theo lịch.

### Bước 5 — Tạo sản phẩm tên miền

Trình hướng dẫn sẽ tạo một sản phẩm tên miền mặc định (catch-all) với mức tăng giá 10%. Bạn có thể chỉnh sửa sản phẩm này ngay lập tức hoặc bỏ qua và tạo các sản phẩm thủ công tại **Ultimate Multisite › Products**.

Xem [Domain Products and Pricing](./domain-products) để biết hướng dẫn cấu hình sản phẩm đầy đủ.

---

## Tái cấu hình nhà cung cấp

Truy cập **Network Admin › Ultimate Multisite › Settings › Domain Seller** (hoặc nhấp vào **Settings** trong danh sách plugin).

Trang cài đặt này chứa:

- **Enable domain selling** — bật/tắt toàn bộ tính năng
- **Default provider** — nhà cung cấp được sử dụng cho việc tìm kiếm tên miền và các sản phẩm mới
- **Max TLDs per search** — số lượng TLD được kiểm tra khi khách hàng tìm kiếm; giá trị cao hơn sẽ hiển thị nhiều tùy chọn hơn nhưng chậm hơn
- **Availability cache duration** — thời gian lưu bộ nhớ đệm (cache) kết quả khả dụng và giá cả; giá trị thấp hơn sẽ chính xác hơn nhưng làm tăng số lượng cuộc gọi API
- **Manage domain products** — liên kết nhanh đến danh sách Sản phẩm
- **Configure providers** — mở Trình hướng dẫn Tích hợp (Integration Wizard) để thêm hoặc tái cấu hình các nhà cung cấp

### Thêm nhà cung cấp thứ hai

Nhấp vào **Configure providers** và chạy lại trình hướng dẫn cho nhà đăng ký mới. Bạn có thể cấu hình nhiều nhà cung cấp cùng lúc. Bạn có thể gán từng sản phẩm tên miền cho một nhà cung cấp cụ thể, hoặc để nó ở mặc định.

### Đồng bộ TLDs thủ công

Trong trang cài đặt, nhấp vào **Sync TLDs** bên cạnh bất kỳ nhà cung cấp nào đã được cấu hình để kéo giá mới nhất. Điều này hữu ích sau khi nhà cung cấp cập nhật giá bán buôn hoặc thêm TLD mới.

---

## Nhật ký (Logs)

Mỗi nhà cung cấp sẽ ghi nhật ký vào kênh riêng của nó. Nhật ký có thể xem tại **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Tất cả các lần thử đăng ký (thành công và thất bại) |
| `domain-seller-renewal` | Kết quả công việc gia hạn |
| `domain-seller-opensrs` | Hoạt động API thô của OpenSRS |
| `domain-seller-namecheap` | Hoạt động API thô của Namecheap |
| `domain-seller-godaddy` | Hoạt động API thô của GoDaddy |
| `domain-seller-resellerclub` | Hoạt động API thô của ResellerClub |
| `domain-seller-namesilo` | Hoạt động API thô của NameSilo |
| `domain-seller-enom` | Hoạt động API thô của Enom |
