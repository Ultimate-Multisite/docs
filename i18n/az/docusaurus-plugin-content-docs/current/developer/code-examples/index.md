---
title: Təkmil Kod Nümunələri
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# İrəli Kod Nümunələri

Bu nümunələr Ultimate Multisite ilə irəli inteqrasiya modellərini göstərir.

## Dinamik Qiymətləndirmə Mühərriki

Bu, həcm, sadiqlik və mövsimlə bağlı endirimləri tətbiq edən qaydalara əsaslanan bir qiymətləndirmə mühərrikindir:

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

## İrəli Sayt Təminatı

Plan xüsusiyyətlərinə əsasən yeni saytları pluginlər, SSL, CDN, backup və monitorinq vasitəsilə avtomatik konfiqurasiya edin:

```php
class Advanced_Site_Provisioner {

    public function __construct() {
        add_action('wu_site_published', [$this, 'provision_site'], 10, 2);
    }

    public function provision_site($site, $membership) {
        $plan = $membership->get_plan();

        switch_to_blog($site->get_id());

        // Planə əsasən pluginləri quraşdırın
        $this->install_plan_plugins($plan);

        // SSL konfiqurasiyası
        if ($plan->has_feature('ssl')) {
            $this->setup_ssl($site);
        }

        // CDN qurulması
        if ($plan->has_feature('cdn')) {
            $this->configure_cdn($site);
        }

        // Backup konfiqurasiyası
        if ($plan->has_feature('backups')) {
            $this->setup_automated_backups($site, $plan->get_backup_frequency());
        }

        // Monitorinq qurulması
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

## Xüsusi Məhdudiyyətlər Sistemi

İstifadə məhdudiyyətlərini izləyin və tətbiq edin, istifadə xəbərdarlığı ilə birlikdə:

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

## BerlinDB Atomik Sayğac `increment_item()` ilə

Ultimate Multisite v2.6.1, BerlinDB `Query` sinifinə `increment_item()` metodu əlavə edib. Bu metodu oxu-dəyişdir-yazma yarışları olmadan, rəqəmsal sütunlar üzərində təhlükəsiz, atomik artım yerinə yetirmək üçün istifadə edin — bu, sayğaclar, istifadə kvotaları və eyni anda gələn sorğular altında işləyən rate-limiting yoxlamaları üçün faydalıdır.

### Metod imzası

```php
/**
 * Bir məhdudiyyət üçün rəqəmsal sütunu atomik şəkildə artırır.
 *
 * @param int    $item_id   Yenilənəcək sətirin əsas açarı.
 * @param string $column    Artırılacaq sütun adı (rəqəmsal olmalıdır).
 * @param int    $amount    Əlavə ediləcək miqdar. Azaltmaq üçün mənfi dəyər istifadə edin.
 *                          Default dəyəri 1-dir.
 * @return bool Uğurda true, uğursuzluqda və ya sütun etibarsızdırsa false.
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### Əsas istifadə

```php
// 42 membership ID üçün `api_calls` sütununa 1 əlavə edin.
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// İstifadə sayğacına 5 əlavə edin.
$memberships->increment_item( 42, 'api_calls', 5 );

// Azaltmaq (1 çıxmaq).
$memberships->increment_item( 42, 'api_calls', -1 );
```

### Hər bir membership üçün API istifadəsinin izlənilməsi

Membership başına API rate limitlərini tətbiq etmək üçün praktik bir model:

```php
class Membership_API_Limiter {

    /** Hər hesab dövründə icazə verilən maksimum API çağırışları. */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * Əgər membership limitin öndədirsə sorğunu rədd edin;
     * əks halda çağırışı atomik şəkildə sayın.
     *
     * @param bool   $enabled
     * @param object $context  get_membership_id() metodu olan obyekt.
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
            return false;  // Kvota aşılıb — rədd edin.
        }

        // Atomik artım: eyni anda gələn sorğular altında təhlükəsizdir.
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### Niyə `increment_item()` və `update_item()` deyil?

Sadə bir oxu-dəyişdir-yazma yanaşması eyni anda gələn sorğular altında təhlükəsiz deyil:

```php
// TƏHLÜKƏLİ — oxuma və yazma arasında yarış vəziyyəti (race condition).
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

İki eyni anda gələn sorğu eyni dəyəri oxuya və hər ikisi eyni artırılmış nəticəni yazaraq bir sayğacı itirə bilər. `increment_item()` riyazi əməliyyatı birbaşa `UPDATE ... SET column = column + ?` ifadəsi ilə verilənlər bazası mühərrəkinə ötürür, bu da əməliyyatı təbii olaraq atomik edir.
