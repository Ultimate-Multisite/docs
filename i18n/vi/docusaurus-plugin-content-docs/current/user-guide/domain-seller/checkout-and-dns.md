---
title: Trường thanh toán và DNS của khách hàng
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Trường thanh toán và quản lý DNS của khách hàng

## Trường thanh toán Lựa chọn tên miền

Trường **Lựa chọn tên miền** là một phần tử thanh toán cho khách hàng lựa chọn cách nhận tên miền của trang của họ. Thêm trường này vào bất kỳ biểu mẫu thanh toán nào để bật tính năng bán tên miền.

### Thêm trường vào biểu mẫu thanh toán

1. Đi tới **Network Admin › Ultimate Multisite › Biểu mẫu thanh toán**
2. Mở hoặc tạo một biểu mẫu thanh toán
3. Trong trình chỉnh sửa thanh toán, nhấp **Thêm trường**
4. Chọn **Lựa chọn tên miền** từ danh sách trường
5. Cấu hình các tùy chọn trường (xem bên dưới)
6. Lưu biểu mẫu

### Tùy chọn trường

**Chế độ tên miền** — Chọn các tab mà khách hàng sẽ thấy. Mỗi chế độ có thể được bật hoặc tắt độc lập:

| Chế độ | Chức năng |
|---|---|
| **Tên miền phụ** | Khách hàng sử dụng một tên miền phụ miễn phí trên mạng của bạn (ví dụ: `mysite.yournetwork.com`). Không cần thanh toán. |
| **Đăng ký tên miền mới** | Khách hàng tìm kiếm một tên miền mới và đăng ký thông qua nhà cung cấp bạn đã cấu hình. Sử dụng sản phẩm tên miền phù hợp để định giá. |
| **Tên miền hiện có** | Khách hàng ánh xạ một tên miền mà họ đã sở hữu. Không có phí đăng ký. Tên miền được tự động ánh xạ tới trang của họ. |

**Chế độ mặc định** — Khi cả ba chế độ đều được bật, tab nào sẽ mở trước. Đặt thành **Tên miền phụ** để giữ đăng ký tên miền là tùy chọn, hoặc **Đăng ký tên miền mới** để khuyến khích mua hàng.

**Sản phẩm tên miền** — Tùy chọn ghim trường này vào một sản phẩm tên miền cụ thể. Nếu không đặt, addon sẽ tự động chọn sản phẩm phù hợp dựa trên TLD mà khách hàng tìm kiếm.

### Trường liên hệ của người đăng ký

Khi khách hàng chọn tab **Đăng ký tên miền mới**, biểu mẫu thanh toán sẽ thêm các trường liên hệ của người đăng ký ngay trong dòng:

- Tên / Họ
- Địa chỉ email
- Địa chỉ (dòng 1, thành phố, tiểu bang/tỉnh, mã bưu chính, quốc gia)
- Số điện thoại

Các thông tin này được tất cả nhà đăng ký yêu cầu và được xác thực trước khi lệnh gọi API đăng ký được thực hiện. Số điện thoại được tự động định dạng theo định dạng quốc tế `+CC.NNN` mà các nhà đăng ký yêu cầu.

### URL trang được tạo tự động

Khi khách hàng đăng ký hoặc ánh xạ một tên miền, trường URL trang sẽ được tự động điền từ tên miền đã chọn. Khách hàng không cần điền một trường URL riêng.

### Hành vi tìm kiếm

- Tính khả dụng của tên miền được kiểm tra theo thời gian thực bằng AJAX khi khách hàng nhập
- Các gợi ý TLD thay thế được hiển thị khi tên miền mong muốn không khả dụng
- Giá được lấy trực tiếp và hiển thị rõ ràng (giá đăng ký, giá gia hạn, phí quyền riêng tư WHOIS tùy chọn)
- Mã giảm giá áp dụng cho sản phẩm tên miền giống như bất kỳ sản phẩm nào khác

**Tinh chỉnh độ phản hồi của tìm kiếm:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Thêm trường tùy chỉnh vào biểu mẫu tìm kiếm tên miền:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Quản lý DNS của khách hàng

Khách hàng có thể quản lý bản ghi DNS cho các tên miền đã đăng ký của họ từ trang **My Account**, bên dưới mục của tên miền đó.

### Loại bản ghi được hỗ trợ

| Loại | Mục đích |
|---|---|
| **A** | Ánh xạ tên máy chủ tới địa chỉ IPv4 |
| **AAAA** | Ánh xạ tên máy chủ tới địa chỉ IPv6 |
| **CNAME** | Tạo một bí danh trỏ tới tên máy chủ khác |
| **MX** | Đặt máy chủ trao đổi thư |
| **TXT** | Thêm SPF, DMARC, xác minh hoặc các bản ghi văn bản khác |

### Những nhà cung cấp nào hỗ trợ quản lý DNS?

Quản lý DNS (thêm, chỉnh sửa, xóa bản ghi) khả dụng với **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** và **Openprovider**. Tên miền **Hostinger** có thể cập nhật nameserver thông qua Domain Seller; bản ghi DNS cho các tên miền được lưu trữ được quản lý bởi tích hợp ánh xạ tên miền Hostinger cốt lõi. Tên miền Namecheap, GoDaddy và NameSilo hiển thị thông tin trạng thái và ngày hết hạn nhưng DNS phải được quản lý trực tiếp trong bảng điều khiển của nhà đăng ký.

### Bản ghi DNS mặc định

Bạn có thể cấu hình các bản ghi DNS mặc định được tự động áp dụng khi một tên miền được đăng ký. Đi tới **Settings › Domain Seller › Default DNS Records**.

Giá trị bản ghi mặc định hỗ trợ hai token:

| Token | Được thay thế bằng |
|---|---|
| `{DOMAIN}` | Tên miền đã đăng ký (ví dụ: `example.com`) |
| `{SITE_URL}` | URL trang WordPress cho trang của khách hàng |

**Ví dụ — trỏ tên miền apex và www tới IP máy chủ của bạn:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Quản trị viên: xem và chỉnh sửa DNS

Quản trị viên mạng có thể xem và chỉnh sửa bản ghi DNS cho bất kỳ tên miền khách hàng nào từ trang chỉnh sửa của tên miền trong **Network Admin › Ultimate Multisite › Domains**.
