---
title: Trường thanh toán và DNS của khách hàng
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Quản lý Trường Thanh toán và DNS Khách hàng

## Trường chọn Tên miền (Domain Selection)

Trường **Domain Selection** là một yếu tố thanh toán giúp khách hàng lựa chọn cách thức sở hữu tên miền cho trang web của họ. Bạn có thể thêm trường này vào bất kỳ biểu mẫu thanh toán nào để bật tính năng bán tên miền.

### Thêm trường vào biểu mẫu thanh toán

1. Truy cập **Network Admin › Ultimate Multisite › Checkout Forms**
2. Mở hoặc tạo một biểu mẫu thanh toán
3. Trong trình chỉnh sửa thanh toán, nhấp vào **Add Field**
4. Chọn **Domain Selection** từ danh sách các trường
5. Cấu hình các tùy chọn của trường (xem bên dưới)
6. Lưu biểu mẫu

### Tùy chọn trường

**Domain modes** (Các chế độ tên miền) — Chọn các tab mà khách hàng sẽ thấy. Mỗi chế độ có thể được bật hoặc tắt độc lập:

| Mode | Chức năng |
|---|---|
| **Subdomain** | Khách hàng sử dụng một subdomain miễn phí trên mạng của bạn (ví dụ: `mysite.yournetwork.com`). Không cần thanh toán. |
| **Register New Domain** | Khách hàng tìm kiếm và đăng ký tên miền mới thông qua nhà cung cấp đã cấu hình của bạn. Sử dụng sản phẩm tên miền phù hợp để tính giá. |
| **Existing Domain** | Khách hàng liên kết một tên miền mà họ đã sở hữu. Không mất phí đăng ký. Tên miền sẽ được tự động liên kết với trang web của họ. |

**Default mode** (Chế độ mặc định) — Khi cả ba chế độ đều được bật, tab nào sẽ mở đầu tiên. Đặt là **Subdomain** để giữ việc đăng ký tên miền là tùy chọn, hoặc **Register New Domain** để khuyến khích mua hàng.

**Domain product** (Sản phẩm tên miền) — Tùy chọn ghim trường này vào một sản phẩm tên miền cụ thể. Nếu không đặt, addon sẽ tự động chọn sản phẩm phù hợp dựa trên TLD mà khách hàng tìm kiếm.

### Trường liên hệ của người đăng ký (Registrant contact fields)

Khi khách hàng chọn tab **Register New Domain**, biểu mẫu thanh toán sẽ tự động thêm các trường liên hệ của người đăng ký:

- Tên / Họ
- Địa chỉ email
- Địa chỉ (hàng 1, thành phố, tiểu bang/tỉnh, mã bưu điện, quốc gia)
- Số điện thoại

Các trường này là bắt buộc đối với tất cả các nhà đăng ký và sẽ được xác thực trước khi gọi API đăng ký. Số điện thoại sẽ được tự động định dạng theo định dạng quốc tế `+CC.NNN` mà các nhà đăng ký yêu cầu.

### URL trang web tự động tạo

Khi khách hàng đăng ký hoặc liên kết một tên miền, trường URL trang web sẽ được điền tự động từ tên miền đã chọn. Khách hàng không cần điền thêm trường URL riêng.

### Hành vi tìm kiếm

- Khả dụng của tên miền được kiểm tra theo thời gian thực bằng AJAX khi khách hàng gõ
- Các gợi ý TLD thay thế sẽ được hiển thị khi tên miền ưu tiên không khả dụng
- Giá cả được lấy trực tiếp và hiển thị rõ ràng (giá đăng ký, giá gia hạn, phí riêng tư WHOIS tùy chọn)
- Mã coupon áp dụng cho sản phẩm tên miền giống như bất kỳ sản phẩm nào khác

**Tối ưu hóa khả năng phản hồi tìm kiếm:**

```php
// Tăng độ trễ debounce (mili giây) để giảm số lượng cuộc gọi API trên các kết nối chậm
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // mặc định: 500
});
```

**Thêm trường tùy chỉnh vào biểu mẫu tìm kiếm tên miền:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Ghi chú bổ sung',
    ];
    return $fields;
});
```

---

## Quản lý DNS Khách hàng

Khách hàng có thể quản lý các bản ghi DNS cho tên miền đã đăng ký của họ từ trang **My Account**, trong mục tên miền của họ.

### Các loại bản ghi được hỗ trợ

| Loại | Công dụng |
|---|---|
| **A** | Liên kết hostname với địa chỉ IPv4 |
| **AAAA** | Liên kết hostname với địa chỉ IPv6 |
| **CNAME** | Tạo một bí danh trỏ đến hostname khác |
| **MX** | Thiết lập máy chủ trao đổi thư (mail exchange server) |
| **TXT** | Thêm các bản ghi văn bản SPF, DMARC, xác minh, hoặc các bản ghi văn bản khác |

### Nhà cung cấp nào hỗ trợ quản lý DNS?

Quản lý DNS (thêm, chỉnh sửa, xóa bản ghi) khả dụng với **OpenSRS**, **ResellerClub**, và **Enom**. Các tên miền từ Namecheap, GoDaddy, và NameSilo chỉ hiển thị trạng thái và thông tin hết hạn, nhưng DNS phải được quản lý trực tiếp trong bảng điều khiển của nhà đăng ký.

### Bản ghi DNS mặc định

Bạn có thể cấu hình các bản ghi DNS mặc định sẽ được áp dụng tự động khi một tên miền được đăng ký. Truy cập **Settings › Domain Seller › Default DNS Records**.

Các giá trị bản ghi mặc định hỗ trợ hai token:

| Token | Thay thế bằng |
|---|---|
| `{DOMAIN}` | Tên miền đã đăng ký (ví dụ: `example.com`) |
| `{SITE_URL}` | URL trang web WordPress của khách hàng |

**Ví dụ — trỏ tên miền gốc và www đến IP máy chủ của bạn:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Quản trị viên: xem và chỉnh sửa DNS

Quản trị viên mạng có thể xem và chỉnh sửa các bản ghi DNS cho bất kỳ tên miền khách hàng nào từ trang chỉnh sửa tên miền trong **Network Admin › Ultimate Multisite › Domains**.
