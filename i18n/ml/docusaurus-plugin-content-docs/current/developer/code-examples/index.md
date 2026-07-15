---
title: ഉയർന്ന കോഡ് ഉദാഹരണങ്ങൾ
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# Advanced Code Examples

ഈ ഉദാഹരണങ്ങൾ Ultimate Multisite-ൽ ഉപയോഗിക്കാവുന്ന അഡ്വാൻസ്ഡ് ഇന്റഗ്രേഷൻ പാറ്റേണുകൾ കാണിക്കുന്നു.

## Dynamic Pricing Engine {#dynamic-pricing-engine}

വോളിയം, ലോയൽറ്റി, സീസണൽ ഡിസ്‌കൗണ്ടുകൾ എന്നിവ പ്രയോഗിക്കുന്ന ഒരു റൂൾസ്-ബേസ്ഡ് പ്രൈസിംഗ് എഞ്ചിൻ:

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

പ്ലാൻ ഫീച്ചറുകൾ അനുസരിച്ച് പുതിയ സൈറ്റുകൾ ഓട്ടോമാറ്റിക്കായി configure ചെയ്യാൻ സഹായിക്കുന്ന കോഡ്. ഇതിൽ plugins, SSL, CDN, backups, monitoring എന്നിവ ഉൾപ്പെടുന്നു:

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

ഉപയോഗ പരിധികൾ (resource limits) ട്രാക്ക് ചെയ്യാനും, അതി ലംഘിക്കുമ്പോൾ മുന്നറിയിപ്പ് നൽകാനും ഉപയോഗിക്കുന്ന കോഡ്:

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

Ultimate Multisite v2.6.1-ൽ BerlinDB `Query` class-ലേക്ക് `increment_item()` എന്ന ഒരു method കൂട്ടിച്ചേർത്തിരിക്കുന്നു. ഇത് ഉപയോഗിച്ച്, വായിച്ച് മാറ്റുകയും വീണ്ടും എഴുതുകയും ചെയ്യുന്ന (read-modify-write) രീതിയിലുള്ള പ്രശ്നങ്ങൾ ഒഴിവാക്കി, numeric columns-ൽ സുരക്ഷിതമായി, atomic ആയി കൂട്ടിച്ചേർക്കാൻ സാധിക്കും. ഇത് കൗണ്ടറുകൾ, usage quotas, rate-limiting checks എന്നിവയ്ക്ക് വളരെ ഉപകാരപ്രദമാണ്.

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
// membership ID 42-ൻ്റെ `api_calls` column-ൽ 1 കൂട്ടിച്ചേർക്കുന്നു.
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// ഒരു usage counter-ൽ 5 കൂട്ടിച്ചേർക്കുന്നു.
$memberships->increment_item( 42, 'api_calls', 5 );

// കുറയ്ക്കുന്നു (1 കുറയ്ക്കുന്നു).
$memberships->increment_item( 42, 'api_calls', -1 );
```

### Tracking API usage per membership {#tracking-api-usage-per-membership}

ഓരോ membership-നും വേണ്ടിയുള്ള API rate limits enforce ചെയ്യുന്നതിനുള്ള ഒരു പ്രായോഗിക രീതി:

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
            return false;  // Quota കഴിഞ്ഞു — reject ചെയ്യുന്നു.
        }

        // Atomic increment: concurrent requests-ൽ സുരക്ഷിതം.
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### Why `increment_item()` instead of `update_item()` {#why-incrementitem-instead-of-updateitem}

ഒരു സാധാരണ read-modify-write approach, concurrent requests-ൽ സുരക്ഷിതമല്ല:

```php
// UNSAFE — read-ഉം write-ഉം തമ്മിൽ race condition ഉണ്ടാകാൻ സാധ്യതയുണ്ട്.
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

രണ്ട് ഒരേ സമയം വരുന്ന requests-ന് ഒരേ value വായിക്കാൻ കഴിഞ്ഞേക്കും, എന്നിട്ട് രണ്ടും ഒരേ കൂട്ടിച്ചേർത്ത (incremented) result വീണ്ടും എഴുതിത്തരും. ഇത് ഒരു കൗണ്ട് നഷ്ടപ്പെടാൻ കാരണമാകും. `increment_item()` എന്നത് അറിത്മെറ്റിക് കണക്കുകൂട്ടൽ ഡാറ്റാബേസ് engine-ലേക്ക് ഒരു single `UPDATE ... SET column = column + ?` statement വഴി കൈമാറുന്നു. ഇത് ഓപ്പറേഷൻ സ്വതവേ atomic ആക്കി മാറ്റുന്നു.
