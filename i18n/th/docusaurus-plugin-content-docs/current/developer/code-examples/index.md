---
title: ตัวอย่างโค้ดขั้นสูง
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# ตัวอย่างโค้ดขั้นสูง {#advanced-code-examples}

ตัวอย่างเหล่านี้แสดงรูปแบบการผสานรวม (integration patterns) ขั้นสูงกับ Ultimate Multisite

## Dynamic Pricing Engine {#dynamic-pricing-engine}

ระบบคำนวณราคาตามกฎเกณฑ์ที่สามารถใช้ส่วนลดตามปริมาณ (volume), ความภักดี (loyalty), และตามฤดูกาลได้:

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

## Advanced Site Provisioning {#advanced-site-provisioning}

การตั้งค่าเว็บไซต์ใหม่โดยอัตโนมัติด้วยปลั๊กอิน (plugins), SSL, CDN, ระบบสำรองข้อมูล (backups), และการตรวจสอบ (monitoring) ตามฟีเจอร์ของแผนบริการ:

```php
class Advanced_Site_Provisioner {

    public function __construct() {
        add_action('wu_site_published', [$this, 'provision_site'], 10, 2);
    }

    public function provision_site($site, $membership) {
        $plan = $membership->get_plan();

        switch_to_blog($site->get_id());

        // Install plugins based on plan
        $this->install_plan_plugins($plan);

        // Configure SSL
        if ($plan->has_feature('ssl')) {
            $this->setup_ssl($site);
        }

        // Setup CDN
        if ($plan->has_feature('cdn')) {
            $this->configure_cdn($site);
        }

        // Configure backups
        if ($plan->has_feature('backups')) {
            $this->setup_automated_backups($site, $plan->get_backup_frequency());
        }

        // Setup monitoring
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

## Custom Limitations System {#custom-limitations-system}

การติดตามและบังคับใช้ขีดจำกัดทรัพยากร พร้อมคำเตือนการใช้งาน:

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

## BerlinDB Atomic Counter with `increment_item()` {#berlindb-atomic-counter-with-incrementitem}

Ultimate Multisite v2.6.1 ได้เพิ่มเมธอด `increment_item()` ให้กับคลาส `Query` ของ BerlinDB คุณสามารถใช้เมธอดนี้เพื่อเพิ่มค่าตัวเลข (increment) ในคอลัมน์ต่างๆ ได้อย่างปลอดภัยและเป็นแบบอะตอมมิก (atomic) โดยไม่ต้องกังวลเรื่องการอ่าน-แก้ไข-เขียน (read-modify-write races) ซึ่งมีประโยชน์อย่างยิ่งสำหรับตัวนับ (counters), โควต้าการใช้งาน, และการตรวจสอบการจำกัดอัตรา (rate-limiting checks) ที่ทำงานภายใต้คำขอพร้อมกัน (concurrent requests)

### Method signature {#method-signature}

```php
/**
 * Atomically increment a numeric column for a specific item.
 *
 * @param int    $item_id   Primary key of the row to update.
 * @param string $column    Column name to increment (must be numeric).
 * @param int    $amount    Amount to add. Use a negative value to decrement.
 *                          Defaults to 1.
 * @return bool True on success, false on failure or if the column is invalid.
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### Basic usage {#basic-usage}

```php
// เพิ่ม 1 ให้กับคอลัมน์ `api_calls` สำหรับ membership ID 42
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// เพิ่ม 5 ให้กับตัวนับการใช้งาน
$memberships->increment_item( 42, 'api_calls', 5 );

// ลดค่า (ลบ 1)
$memberships->increment_item( 42, 'api_calls', -1 );
```

### Tracking API usage per membership {#tracking-api-usage-per-membership}

รูปแบบการใช้งานจริงสำหรับการบังคับใช้ขีดจำกัดอัตรา API ต่อสมาชิกแต่ละราย:

```php
class Membership_API_Limiter {

    /** Maximum API calls allowed per billing cycle. */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * Reject the request if the membership is over the limit;
     * otherwise count the call atomically.
     *
     * @param bool   $enabled
     * @param object $context  Object with a get_membership_id() method.
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
            return false;  // เกินโควต้า — ปฏิเสธคำขอ
        }

        // Atomic increment: ปลอดภัยแม้มีการเรียกใช้พร้อมกัน
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### Why `increment_item()` instead of `update_item()` {#why-incrementitem-instead-of-updateitem}

การใช้วิธีอ่าน-แก้ไข-เขียน (read-modify-write) แบบตรงไปตรงมานั้นไม่ปลอดภัยเมื่อมีการเรียกใช้พร้อมกัน:

```php
// ไม่ปลอดภัย — เกิด race condition ระหว่างการอ่านและการเขียน
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

คำขอพร้อมกันสองรายการสามารถอ่านค่าเดียวกันและเขียนค่าที่เพิ่มขึ้นกลับไปได้ทั้งคู่ ทำให้การนับค่าหายไปหนึ่งครั้ง `increment_item()` จะมอบหมายการคำนวณทางคณิตศาสตร์ให้แก่ database engine ด้วยคำสั่ง `UPDATE ... SET column = column + ?` เพียงครั้งเดียว ทำให้การดำเนินการนี้เป็นแบบอะตอมมิกโดยธรรมชาติ
