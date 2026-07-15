---
title: Fụrụ Ọkụ Ebe-akụkọ na DNS Ọkụ Agha
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Quản lý Trường Thanh toán và DNS Khách hàng

## Trường Lựa chọn Tên miền (Domain Selection) {#the-domain-selection-checkout-field}

Trường **Domain Selection** là một thành phần trong thanh toán cho phép khách hàng lựa chọn cách họ muốn có tên miền cho trang web của mình. Thêm nó vào bất kỳ biểu mẫu thanh toán nào để bật tính năng bán tên miền.

### Thêm trường vào biểu mẫu thanh toán {#adding-the-field-to-a-checkout-form}

1. Đi đến **Network Admin › Ultimate Multisite › Checkout Forms**
2. Mở hoặc tạo một biểu mẫu thanh toán
3. Trong trình chỉnh sửa thanh toán, nhấp vào **Add Field** (Thêm Trường)
4. Chọn **Domain Selection** từ danh sách các trường
5. Cấu hình các tùy chọn của trường (xem bên dưới)
6. Lưu biểu mẫu

### Các tùy chọn của trường {#field-options}

**Các chế độ tên miền (Domain modes)** — Chọn những tab nào khách hàng sẽ thấy. Mỗi chế độ có thể được bật hoặc tắt độc lập:

| Chế độ | Nó làm gì |
|---|---|
| **Subdomain** (Tên miền phụ) | Khách hàng sử dụng một tên miền phụ miễn phí trên mạng của bạn (ví dụ: `mysite.yournetwork.com`). Không cần thanh toán. |
| **Register New Domain** (Đăng ký Tên miền Mới) | Khách hàng tìm kiếm một tên miền mới và đăng ký nó thông qua nhà cung cấp mà bạn đã cấu hình. Sử dụng sản phẩm tên miền phù hợp để định giá. |
| **Existing Domain** (Tên miền Hiện có) | Khách hàng ánh xạ một tên miền mà họ đã sở hữu. Không mất phí đăng ký. Tên miền sẽ được tự động liên kết với trang web của họ. |

**Chế độ mặc định (Default mode)** — Khi cả ba chế độ đều được bật, tab nào sẽ mở đầu tiên? Đặt thành **Subdomain** để giữ việc đăng ký tên miền là tùy chọn, hoặc **Register New Domain** để khuyến khích mua hàng.

**Sản phẩm tên miền (Domain product)** — Tùy chọn ghim trường này vào một sản phẩm tên miền cụ thể. Nếu không đặt, addon sẽ tự động chọn sản phẩm phù hợp dựa trên TLD mà khách hàng tìm kiếm.

### Các trường liên hệ người đăng ký {#registrant-contact-fields}

Khi khách hàng chọn tab **Register New Domain** (Đăng ký Tên miền Mới), biểu mẫu thanh toán sẽ thêm các trường liên hệ người đăng ký vào ngay trong đó:

- Tên và Họ
- Địa chỉ Email
- Địa chỉ (dòng 1, thành phố, tiểu bang/tỉnh, mã bưu điện, quốc gia)
- Số điện thoại

Nke a bụ ihe ndị a na-agbanwe na-enweghị anyị dị. Ọ na-achị ebe ọ bụrụ na API registration call ahụ na-akwere. Oge telefoni na-achị ebe ọ bụ naọchịrị (international format) `+CC.NNN` nke ndị nwere aka na-agbanwe na-enweghị anyị dị.

### Auto-generated site URL {#auto-generated-site-url}

Ọ bụrụ na onye ahụ na-register ma ọ bụ na-map domain, a na-achị ebe site URL ahụ na-achị ebe (automatically populated) n'ụzọ ahụ n'ụzọ ahụ nke domain ahụ. Onye ndị ahụ na-anaghị ịkwado ebe URL ọzọ.

### Search behaviour {#search-behaviour}

- Ọ bụrụ na onye ahụ na-type, availability domain ahụ na-achị ebe real-time na AJAX
- Ọ na-achị ebe suggestion TLD ndị ọzọ mgbe domain a na-agbanwe na-anwere
- Ọ na-achị ebe pricing live na-achị ebe n'ụzọ ahụ (registration price, renewal price, optional WHOIS privacy fee)
- Coupon codes na-achị ebe products domain na-achị ebe mgbe ọ bụrụ na onye ọzọ

**Tuning search responsiveness:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adding custom fields to the domain search form:**

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

## Customer DNS management {#customer-dns-management}

Onye ndị ahụ na-anọchị ebe DNS records nke domain ahụ na-achị ebe **My Account** page, mgbe ọ bụrụ na entry domain ahụ.

### Supported record types {#supported-record-types}

| Type | Use |
|---|---|
| **A** | Map hostname to IPv4 address |
| **AAAA** | Map hostname to IPv6 address |
| **CNAME** | Create an alias pointing to another hostname |
| **MX** | Set mail exchange server |
| **TXT** | Add SPF, DMARC, verification, or other text records |

### Which providers support DNS management? {#which-providers-support-dns-management}

Ime (DNS management) (add, edit, delete records) nwere available na **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, and **Openprovider**. Ịchị domain Hostinger nwere ike update nameservers ngụrụ Domain Seller; DNS records na hosted domains nwere manage na core Hostinger domain-mapping integration. Namecheap, GoDaddy, na NameSilo domains nwere display status na expiry information, deDNS phải nwere manage directly na control panel na registrar.

### Default DNS records {#default-dns-records}

Ịchị default DNS records ịkwado configure nke dị ike apply automatically mgbe ọ bụrụ na domain ahụ nwere register. Go to **Settings › Domain Seller › Default DNS Records**.

Default record values nwere ike support ikiwa:

| Token | Replaced with |
|---|---|
| `{DOMAIN}` | The registered domain name (e.g., `example.com`) |
| `{SITE_URL}` | The WordPress site URL for the customer's site |

**Example — point the apex domain and www to your server IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: viewing and editing DNS {#admin-viewing-and-editing-dns}

Network admins nwere ike ịhụ na iji edit DNS records nke ọ bụla customer domain n'edit page na **Network Admin › Ultimate Multisite › Domains**.
