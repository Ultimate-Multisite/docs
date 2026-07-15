---
title: Các Ví Dụ Mã Nâng Cao
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# Ví dụ Mã Nâng Cao

Các ví dụ này minh họa các mẫu tích hợp nâng cao với Ultimate Multisite.

## Công Cụ Định Giá Động (Dynamic Pricing Engine) {#dynamic-pricing-engine}

Một công cụ định giá dựa trên quy tắc, áp dụng các mức giảm giá theo số lượng, lòng trung thành và theo mùa:

```php
class Dynamic_Pricing_Engine {

    public function __construct() {
        add_filter('wu_cart_total', [$this, 'apply_dynamic_pricing'], 20, 2);
    }

    public function apply_dynamic_pricing($total, $cart) {
        $customer = $cart->get_customer();
        $rules = $this->get_pricing_rules();

        foreach ($rules as $rule) {
            if ($this->rule_applies($rule, $cart, $customer)) {
                $total = $this->apply_rule($rule, $total, $cart);
            }
        }

        return $total;
    }

    private function get_pricing_rules() {
        return [
            [
                'type' => 'volume_discount',
                'condition' => ['total_greater_than' => 100],
                'discount' => 0.1
            ],
            [
                'type' => 'loyalty_discount',
                'condition' => ['customer_tenure_months' => 12],
                'discount' => 0.15
            ],
            [
                'type' => 'seasonal_promo',
                'condition' => ['date_range' => ['2024-11-01', '2024-12-31']],
                'discount' => 0.2
            ]
        ];
    }

    private function rule_applies($rule, $cart, $customer) {
        foreach ($rule['condition'] as $condition => $value) {
            switch ($condition) {
                case 'total_greater_than':
                    if ($cart->get_total() <= $value) return false;
                    break;
                case 'customer_tenure_months':
                    if (!$customer || $customer->get_months_active() < $value) return false;
                    break;
                case 'date_range':
                    $now = current_time('Y-m-d');
                    if ($now < $value[0] || $now > $value[1]) return false;
                    break;
            }
        }
        return true;
    }

    private function apply_rule($rule, $total, $cart) {
        $discount_amount = $total * $rule['discount'];

        wu_log_add('pricing', sprintf(
            'Applied %s rule: %.2f discount on total %.2f',
            $rule['type'],
            $discount_amount,
            $total
        ));

        return $total - $discount_amount;
    }
}

new Dynamic_Pricing_Engine();
```

## Thiết Lập Trang Web Nâng Cao (Advanced Site Provisioning) {#advanced-site-provisioning}

Tự động cấu hình các site mới với các plugin, SSL, CDN, sao lưu và giám sát dựa trên các tính năng của gói dịch vụ:

```php
class Advanced_Site_Provisioner {

    public function __construct() {
        add_action('wu_site_published', [$this, 'provision_site'], 10, 2);
    }

    public function provision_site($site, $membership) {
        $plan = $membership->get_plan();

        switch_to_blog($site->get_id());

        // Cài đặt plugin dựa trên gói dịch vụ
        $this->install_plan_plugins($plan);

        // Cấu hình SSL
        if ($plan->has_feature('ssl')) {
            $this->setup_ssl($site);
        }

        // Thiết lập CDN
        if ($plan->has_feature('cdn')) {
            $this->configure_cdn($site);
        }

        // Cấu hình sao lưu
        if ($plan->has_feature('backups')) {
            $this->setup_automated_backups($site, $plan->get_backup_frequency());
        }

        // Thiết lập giám sát
        $this->setup_site_monitoring($site, $membership->get_customer());

        restore_current_blog();

        $this->send_provisioning_complete_email($site, $membership);
    }

    private function install_plan_plugins($plan) {
        $plugins = $plan->get_included_plugins();

        foreach ($plugins as $plugin_slug) {
            if ($this->plugin_exists($plugin_slug)) {
                activate_plugin($plugin_slug);
                $this->configure_plugin($plugin_slug, $plan);
            }
        }
    }

    private function setup_ssl($site) {
        $ssl_service = new SSL_Provider_API();
        $result = $ssl_service->request_certificate($site->get_domain());

        if ($result->success) {
            $site->add_meta('ssl_certificate_id', $result->certificate_id);
            $site->add_meta('ssl_status', 'active');
        }
    }

    private function configure_cdn($site) {
        $cdn_service = new CDN_Provider_API();

        $zone = $cdn_service->create_zone([
            'name' => $site->get_domain(),
            'type' => 'full'
        ]);

        if ($zone->success) {
            $site->add_meta('cdn_zone_id', $zone->id);
            $this->update_cdn_dns($site, $zone);
        }
    }

    private function setup_automated_backups($site, $frequency) {
        $backup_service = new Backup_Provider_API();

        $schedule = $backup_service->create_schedule([
            'site_id' => $site->get_id(),
            'frequency' => $frequency,
            'retention' => 30
        ]);

        $site->add_meta('backup_schedule_id', $schedule->id);
    }

    private function setup_site_monitoring($site, $customer) {
        $monitoring_service = new Monitoring_API();

        $monitor = $monitoring_service->create_monitor([
            'url' => $site->get_domain(),
            'customer_email' => $customer->get_email(),
            'check_interval' => 300
        ]);

        $site->add_meta('monitoring_id', $monitor->id);
    }
}

new Advanced_Site_Provisioner();
```

## Hệ Thống Giới Hạn Tùy Chỉnh (Custom Limitations System) {#custom-limitations-system}

Theo dõi và thực thi các giới hạn tài nguyên cùng với cảnh báo sử dụng:

```php
class Advanced_Limitations {

    public function __construct() {
        add_filter('wu_limitation_plugins_allowed', [$this, 'check_plugin_limit'], 10, 3);
        add_filter('wu_limitation_storage_allowed', [$this, 'check_storage_limit'], 10, 3);
    }

    public function check_plugin_limit($allowed, $site_id, $membership) {
        $plan = $membership->get_plan();
        $max_plugins = $plan->get_limit('max_plugins', 10);

        switch_to_blog($site_id);
        $active_plugins = count(get_option('active_plugins', []));
        restore_current_blog();

        if ($active_plugins >= $max_plugins) {
            $this->send_limit_warning($membership->get_customer(), 'plugins', $max_plugins);
            return false;
        }

        return true;
    }

    public function check_storage_limit($allowed, $site_id, $membership) {
        $plan = $membership->get_plan();
        $max_storage = $plan->get_limit('max_storage_mb', 1000);
        $current_usage = $this->get_site_storage_usage($site_id);

        if ($current_usage >= $max_storage) {
            wu_log_add('limitations', sprintf(
                'Site %d reached storage limit: %dMB/%dMB',
                $site_id,
                $current_usage,
                $max_storage
            ));
            return false;
        }

        if ($current_usage >= ($max_storage * 0.8)) {
            $this->send_storage_warning(
                $membership->get_customer(),
                $current_usage,
                $max_storage
            );
        }

        return true;
    }

    private function get_site_storage_usage($site_id) {
        $upload_dir = wp_upload_dir();
        $size = 0;
        $files = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($upload_dir['basedir'])
        );

        foreach ($files as $file) {
            if ($file->isFile()) {
                $size += $file->getSize();
            }
        }

        return round($size / 1024 / 1024, 2);
    }

    private function send_limit_warning($customer, $limit_type, $limit_value) {
        wu_mail_customer($customer, 'limit_warning', [
            'limit_type' => $limit_type,
            'limit_value' => $limit_value,
            'upgrade_url' => wu_get_current_url('upgrade')
        ]);
    }
}

new Advanced_Limitations();
```

## Bộ Đếm Nguyên Tử BerlinDB với `increment_item()` {#berlindb-atomic-counter-with-incrementitem}

Ultimate Multisite v2.6.1 đã thêm phương thức `increment_item()` vào lớp `Query` của BerlinDB. Hãy sử dụng nó để thực hiện các thao tác tăng giá trị (increment) an toàn, nguyên tử trên các cột số mà không gặp tình trạng tranh chấp đọc-sửa-ghi (read-modify-write races) — rất hữu ích cho bộ đếm, hạn ngạch sử dụng và kiểm tra giới hạn tốc độ chạy đồng thời.

### Cú pháp phương thức {#method-signature}

```php
/**
 * Tăng giá trị nguyên tử một cột số cho một mục cụ thể.
 *
 * @param int    $item_id   Khóa chính của hàng cần cập nhật.
 * @param string $column    Tên cột cần tăng (phải là kiểu số).
 * @param int    $amount    Số lượng cần thêm. Sử dụng giá trị âm để giảm.
 *                          Mặc định là 1.
 * @return bool True nếu thành công, false nếu thất bại hoặc cột không hợp lệ.
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### Cách sử dụng cơ bản {#basic-usage}

```php
// Tăng 1 vào cột `api_calls` cho membership ID 42.
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// Tăng 5 vào bộ đếm sử dụng.
$memberships->increment_item( 42, 'api_calls', 5 );

// Giảm giá trị (trừ 1).
$memberships->increment_item( 42, 'api_calls', -1 );
```

### Theo dõi mức sử dụng API theo membership {#tracking-api-usage-per-membership}

Một mẫu thực tế để thực thi giới hạn tốc độ API cho từng membership:

```php
class Membership_API_Limiter {

    /** Giới hạn tối đa các lần gọi API cho mỗi chu kỳ thanh toán. */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * Từ chối yêu cầu nếu membership vượt quá giới hạn;
     * nếu không, nó sẽ đếm lần gọi một cách nguyên tử.
     *
     * @param bool   $enabled
     * @param object $context  Đối tượng có phương thức get_membership_id().
     * @return bool
     */
    public function check_and_count( bool $enabled, $context ): bool {
        if ( ! $enabled ) {
            return false;
        }

        $membership_id = $context->get_membership_id();

        $memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
        $membership  = $memberships->get_item( $membership_id );

        if ( ! $membership ) {
            return false;
        }

        if ( (int) $membership->api_calls >= self::LIMIT ) {
            return false;  // Vượt hạn ngạch — từ chối.
        }

        // Tăng giá trị nguyên tử: an toàn khi có nhiều yêu cầu chạy đồng thời.
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### Tại sao dùng `increment_item()` thay vì `update_item()` {#why-incrementitem-instead-of-updateitem}

Cách tiếp cận đọc-sửa-ghi (read-modify-write) đơn giản là không an toàn khi có nhiều yêu cầu chạy đồng thời:

```php
// KHÔNG AN TOÀN — tình trạng tranh chấp giữa lúc đọc và lúc ghi.
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

Hai yêu cầu đồng thời có thể đọc cùng một giá trị và cả hai đều ghi lại kết quả tăng giá trị giống nhau, dẫn đến mất một lần đếm. `increment_item()` ủy quyền phép toán số học cho engine cơ sở dữ liệu bằng một câu lệnh `UPDATE ... SET column = column + ?` duy nhất, khiến thao tác này vốn dĩ là nguyên tử (atomic).
