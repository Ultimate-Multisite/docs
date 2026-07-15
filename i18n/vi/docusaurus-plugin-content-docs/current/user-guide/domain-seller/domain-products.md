---
title: Sản phẩm và Giá cả Tên miền
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Sản phẩm Tên miền và Bảng giá

Sản phẩm tên miền là nơi bạn kiểm soát giá cả, các TLD, quyền riêng tư WHOIS và việc lựa chọn nhà cung cấp. Mỗi sản phẩm tên miền là một sản phẩm tiêu chuẩn của Ultimate Multisite với một tab bổ sung là **Domain Settings**.

## Tạo sản phẩm tên miền {#creating-a-domain-product}

1. Truy cập **Network Admin › Ultimate Multisite › Products**
2. Nhấn **Add New**
3. Đặt loại sản phẩm là **Domain**
4. Cấu hình tab **Domain Settings** (xem bên dưới)
5. Lưu

Các sản phẩm tên miền sẽ hiển thị với huy hiệu **Domain** màu tím trong danh sách sản phẩm và có thể được lọc bằng tab **Domain Products**.

## Tab cài đặt tên miền (Domain settings tab) {#domain-settings-tab}

### Nhà cung cấp (Provider) {#provider}

Chọn nhà đăng ký (registrar) nào sẽ xử lý việc đăng ký cho sản phẩm này. Mặc định là **Default provider** toàn cầu được đặt trong cài đặt Domain Seller.

### TLD được hỗ trợ (Supported TLDs) {#supported-tlds}

Để trống để tạo một **sản phẩm chung (catch-all product)** áp dụng cho tất cả các TLD không được sản phẩm nào khác khớp.

Nhập danh sách TLD cách nhau bằng dấu phẩy (ví dụ: `.com, .net, .org`) để tạo một **sản phẩm dành riêng cho TLD (TLD-specific product)** chỉ áp dụng cho các phần mở rộng đó.

**Cách thức hoạt động của việc khớp sản phẩm:** Khi khách hàng tìm kiếm một tên miền, addon sẽ chọn sản phẩm khớp cụ thể nhất. Sản phẩm có `.com` trong danh sách TLD của nó sẽ được ưu tiên hơn sản phẩm chung. Nếu không có sản phẩm TLD cụ thể nào khớp, sản phẩm chung sẽ được sử dụng. Nếu không có sản phẩm nào tồn tại, tìm kiếm tên miền sẽ không được hiển thị.

### Loại tính phí (Markup type) {#markup-type}

Ba chế độ kiểm soát cách giá bán lẻ của bạn được tính toán từ chi phí bán buôn:

| Chế độ | Cách hoạt động |
|---|---|
| **Percentage** | Cộng thêm một phần trăm vào chi phí bán buôn. Tăng 20% trên tên miền bán buôn 10 đô la sẽ cho ra 12 đô la. |
| **Fixed markup** | Cộng thêm một khoản tiền cố định. Tăng 5 đô la trên tên miền 10 đô la sẽ cho ra 15 đô la. |
| **Fixed price** | Hoàn toàn bỏ qua chi phí bán buôn. Luôn tính số tiền bạn nhập. |

### Giá ưu đãi (Introductory pricing) {#introductory-pricing}

Bật tính năng này để cung cấp giá năm đầu giảm giá. Đặt **Introductory price** (giá năm thứ nhất) riêng biệt cùng với **Renewal price** (giá gia hạn năm 2 trở đi). Khách hàng sẽ thấy cả hai mức giá này khi thanh toán để biết họ cần chuẩn bị gì khi gia hạn.

### Quyền riêng tư WHOIS (WHOIS privacy) {#whois-privacy}

Kiểm soát việc liệu quyền riêng tư WHOIS có được cung cấp cho các tên miền được đăng ký thông qua sản phẩm này hay không.

| Cài đặt | Hành vi |
|---|---|
| **Disabled** | Không bao giờ cung cấp hoặc bật quyền riêng tư WHOIS. |
| **Always Included** | Quyền riêng tư WHOIS được tự động bật khi đăng ký mà không mất phí. |
| **Customer Choice** | Một ô kiểm sẽ xuất hiện khi thanh toán. Đặt **Privacy price** để tính phí theo năm, hoặc để nó ở mức $0 để cung cấp miễn phí. |

Đối với Namecheap, quyền riêng tư WHOIS sử dụng WhoisGuard (luôn miễn phí). Đối với OpenSRS, nó sử dụng dịch vụ quyền riêng tư OpenSRS (có thể có chi phí ở mức bán buôn).

---

## Nhập và đồng bộ TLD {#tld-import-and-sync}

Các sản phẩm tên miền hiển thị giá bán buôn theo thời gian thực được lấy từ nhà cung cấp đã kết nối. Để điều này hoạt động, các TLD phải được nhập.

- **Đồng bộ thủ công (Manual sync):** Settings › Domain Seller › Sync TLDs (theo nhà cung cấp)
- **Đồng bộ tự động (Automatic sync):** Chạy hàng ngày thông qua cron job theo lịch trình trên tất cả các nhà cung cấp đã được cấu hình

Sau khi đồng bộ, hãy truy cập tab Domain Settings của bất kỳ sản phẩm tên miền nào và sử dụng TLD picker để xem các TLD có sẵn cùng với giá bán buôn hiện tại của chúng.

---

## Tự động gia hạn (Auto-renewal) {#auto-renewal}

Việc gia hạn tên miền được liên kết với trạng thái thành viên của khách hàng:

- Khi thành viên gia hạn và tên miền được liên kết, việc gia hạn tên miền sẽ được xếp hàng tự động
- Các nỗ lực gia hạn sử dụng cổng thanh toán đang hoạt động của khách hàng
- Các lần gia hạn thất bại sẽ được thử lại tự động với cơ chế backoff hàm mũ (exponential backoff)
- Thông báo qua email được gửi cho các trường hợp gia hạn thành công, thất bại và sắp hết hạn

Các ID mẫu email cho các sự kiện vòng đời tên miền:

| Sự kiện | Template ID |
|---|---|
| Đăng ký tên miền | `domain_registered` |
| Gia hạn tên miền | `domain_renewed` |
| Gia hạn thất bại | `domain_renewal_failed` |
| Tên miền sắp hết hạn | `domain_expiring_soon` |

---

## Admin: Đăng ký tên miền thủ công {#admin-manual-domain-registration}

Để đăng ký tên miền thay mặt khách hàng mà không cần họ thực hiện qua quy trình thanh toán:

1. Truy cập **Network Admin › Ultimate Multisite › Register Domain**
2. Chọn khách hàng và nhập tên miền
3. Điền thông tin liên hệ của người đăng ký (tên, địa chỉ, điện thoại)
4. Nhấn **Register**

Hồ sơ tên miền sẽ được tạo và liên kết với tài khoản của khách hàng.
