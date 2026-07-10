---
title: Tìm kiếm miền trong Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Tìm kiếm tên miền ở Header {#header-domain-search}

Sử dụng thiết lập này khi bạn muốn một biểu mẫu nhỏ ở header bắt đầu tìm kiếm tên miền, sau đó cho phép khách hàng chọn trong các tên miền khả dụng bên trong checkout của Ultimate Multisite.

## Yêu cầu {#requirements}

- Ultimate Multisite được kích hoạt trên mạng.
- Multisite Ultimate Domain Seller được kích hoạt trên mạng.
- Ít nhất một sản phẩm đăng ký tên miền đang hoạt động với:
  - `domain_provider` được đặt thành một nhà cung cấp đã cấu hình.
  - Các TLD được hỗ trợ đã cấu hình, ví dụ `com`, `net` và `org`.
- Một biểu mẫu checkout hợp lệ có chứa trường **Domain Selection**.

## Biểu mẫu checkout {#checkout-form}

1. Tạo hoặc chỉnh sửa biểu mẫu checkout được dùng bởi trang đăng ký.
2. Thêm các trường checkout/account bắt buộc thông thường, bao gồm **Username**. Một biểu mẫu checkout chỉ chứa trường tên miền sẽ bị Ultimate Multisite validation từ chối.
3. Thêm một trường **Domain Selection**.
4. Đặt chế độ Domain Selection thành **Register Only** khi luồng nên tập trung vào các tên miền đã đăng ký thay vì subdomain miễn phí hoặc tên miền hiện có.
5. Gán sản phẩm đăng ký tên miền cho trường đó.

Trang đăng ký nên hiển thị biểu mẫu checkout, ví dụ:

```text
[wu_checkout slug="domain-form"]
```

## Biểu mẫu header {#header-form}

Thêm một biểu mẫu `GET` nhỏ trong header của trang web để gửi cụm từ tìm kiếm đã nhập đến trang checkout dưới dạng `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Không chọn sẵn một tên miền trong JavaScript header tùy chỉnh. Header chỉ nên truyền cụm từ tìm kiếm. Script checkout của Domain Seller đọc `?domain_name=example`, điền vào ô tìm kiếm checkout và chạy tìm kiếm khả dụng để khách hàng có thể chọn từ các tên miền được trả về.

## Hành vi mong đợi {#expected-behaviour}

Tìm kiếm `example` trong header nên mở:

```text
/register/?domain_name=example
```

Checkout sau đó sẽ hiển thị các kết quả có thể chọn như:

- `example.com`
- `example.net`
- `example.org` không khả dụng
- các TLD khác được nhà cung cấp hỗ trợ

Sau khi chọn một kết quả khả dụng, tóm tắt đơn hàng nên bao gồm sản phẩm đăng ký tên miền và tên miền đã chọn.

## Xác minh {#verification}

1. Mở trang chủ.
2. Tìm kiếm một tên trần, ví dụ `example`.
3. Xác nhận URL checkout bao gồm `?domain_name=example`.
4. Xác nhận trường tên miền checkout chứa `example`.
5. Xác nhận danh sách lựa chọn tên miền xuất hiện.
6. Nhấp **Select** cho một tên miền khả dụng.
7. Xác nhận tóm tắt đơn hàng chứa `Domain Registration - example.com` hoặc tên miền đã chọn.

## Khắc phục sự cố {#troubleshooting}

- Nếu không có danh sách nào xuất hiện, hãy kiểm tra tab mạng của trình duyệt cho `admin-ajax.php?action=wu_domain_search` và xác nhận nó trả về `domains` hoặc `results` không rỗng.
- Nếu biểu mẫu checkout không vượt qua validation khi lưu, hãy thêm các trường account bắt buộc như **Username**.
- Nếu việc chọn tên miền không cập nhật giỏ hàng, hãy xác nhận `window.wu_checkout_form` tồn tại và các asset checkout của Domain Seller được tải trên trang checkout.
