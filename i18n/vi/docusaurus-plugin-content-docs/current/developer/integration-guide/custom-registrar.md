---
title: Xây dựng tích hợp Registrar tùy chỉnh
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Xây dựng Tích hợp Registrar Tùy chỉnh {#building-a-custom-registrar-integration}

Addon Domain Seller sử dụng mô hình **Integration Registry** (Sổ đăng ký Tích hợp). Mỗi registrar là một class PHP triển khai `Domain_Selling_Capability` và tự đăng ký thông qua action hook `wu_domain_seller_register_capabilities`.

Hướng dẫn này sẽ chỉ cho bạn cách kết nối một registrar tùy chỉnh.

## Giao diện (The interface) {#the-interface}

Class của bạn phải triển khai `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` và kế thừa (extend) từ `WP_Ultimo\Integrations\Base_Capability_Module`.

Các phương thức bắt buộc:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Các phương thức định danh bắt buộc (từ Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // luôn là 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Các phương thức cốt lõi bắt buộc (từ Domain_Selling_Capability) ---

    /** Lấy tất cả các TLD và giá bán sỉ. */
    public function sync_tlds(): array { ... }

    /** Kiểm tra tính khả dụng của $domain_name trên các $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Lấy giá bán sỉ cho một TLD trong N năm. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Đăng ký một domain. Trả về ['success' => true, 'expiry_date' => '...'] nếu thành công. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Gia hạn một domain trong N năm. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Lấy thông tin đăng ký, ngày hết hạn, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Kiểm tra thông tin xác thực API và kết nối. */
    public function test_connection(): array { ... }
}
```

### Các phương thức tùy chọn (Optional methods) {#optional-methods}

Triển khai các phương thức này để mở khóa các tính năng bổ sung. Addon sẽ phát hiện hỗ trợ thông qua `method_exists()`:

| Method | Mở khóa |
|---|---|
| `supports_whois_privacy(): bool` | Tùy chọn WHOIS privacy trong cài đặt sản phẩm |
| `enable_whois_privacy(string $domain_name): array` | Tự động bật quyền riêng tư khi đăng ký |
| `get_dns_records(string $domain_name): array` | Tab xem DNS của khách hàng |
| `add_dns_record(string $domain_name, array $record_data): array` | Khách hàng có thể thêm các bản ghi DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Khách hàng có thể chỉnh sửa các bản ghi DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Khách hàng có thể xóa các bản ghi DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Quản lý nameservers |
| `get_epp_code(string $domain_name): array` | Chuyển giao domain (đi) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Chuyển giao domain (đến) |

### Quy ước giá trị trả về (Return value convention) {#return-value-convention}

Tất cả các phương thức đều trả về một mảng (array) với ít nhất một key là `success`:

```php
// Thành công
return ['success' => true, 'data' => [...]];

// Thất bại
return ['success' => false, 'message' => 'Lỗi dễ đọc bằng ngôn ngữ con người'];
```

---

## Đăng ký Capability của bạn {#registering-your-capability}

Hãy đăng ký class của bạn bằng action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Đối số đầu tiên của `add_capability()` là **provider ID** — một slug viết thường được dùng để nhận dạng registrar của bạn trong phần cài đặt, cấu hình sản phẩm và các kênh log. Hãy sử dụng một cái gì đó duy nhất (ví dụ: slug công ty của bạn).

---

## Thêm các trường thông tin xác thực vào Wizard {#adding-credential-fields-to-the-wizard}

Để cho phép quản trị viên nhập thông tin xác thực qua wizard thiết lập, hãy đăng ký integration của bạn:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Thông tin xác thực được lưu dưới dạng network options, sử dụng các field ID làm key. Bạn có thể lấy chúng trong class capability của mình bằng `wu_get_setting('my_registrar_api_key')`.

---

## Hooks cho các hành động sau khi đăng ký {#hooks-for-post-registration-actions}

Sử dụng các action này để kích hoạt webhooks, quy trình cấp phát (provisioning), thông báo, hoặc cập nhật CRM:

```php
// Sau khi đăng ký domain thành công
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: phản hồi thô từ registrar
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Sau khi đăng ký thất bại
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Đăng ký domain thất bại: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Sau khi gia hạn thành công
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Cập nhật hệ thống thanh toán, gửi biên lai, v.v.
}, 10, 3);

// Sau khi gia hạn thất bại
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Báo động, logic thử lại, v.v.
}, 10, 3);

// Sau khi chuyển giao domain hoàn tất
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain là một đối tượng WP_Ultimo\Models\Domain
}, 10, 2);

// Sau khi xác minh SES DKIM (nếu tích hợp SES đang hoạt động)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain là một đối tượng WP_Ultimo\Models\Domain
});
```

---

## Logging (Ghi nhật ký) {#logging}

Hãy ghi vào kênh log dành riêng cho provider của bạn bằng `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Đăng ký {$domain_name} thành công", 'info');
wu_log_add('domain-seller-my-registrar', "Đăng ký thất bại: {$error}", 'error');
```

Các log sẽ xuất hiện tại **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
