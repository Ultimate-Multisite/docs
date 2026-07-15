---
title: மேம்பட்ட குறியீடு எடுத்துக்காட்டுகள்
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# மேம்பட்ட குறியீடு எடுத்துக்காட்டுகள்

இந்த எடுத்துக்காட்டுகள் Ultimate Multisite உடன் மேம்பட்ட ஒருங்கிணைப்பு முறைகளை (advanced integration patterns) விளக்குகின்றன.

## டைனமிக் விலை நிர்ணய இயந்திரம் (Dynamic Pricing Engine) {#dynamic-pricing-engine}

இது அளவு (volume), விசுவாசம் (loyalty), மற்றும் பருவகால தள்ளுபடிகளை (seasonal discounts) பயன்படுத்தும் விதிகளை அடிப்படையாகக் கொண்ட விலை நிர்ணய இயந்திரம்:

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

## மேம்பட்ட Site Provisioning (Advanced Site Provisioning) {#advanced-site-provisioning}

திட்டத்தின் அம்சங்களின் அடிப்படையில் (plan features) புதிய தளங்களை தானாகவே plugins, SSL, CDN, காப்புப்பிரதிகள் (backups), மற்றும் கண்காணிப்பு (monitoring) மூலம் கட்டமைக்கலாம்:

```php
class Advanced_Site_Provisioner {

    public function __construct() {
        add_action('wu_site_published', [$this, 'provision_site'], 10, 2);
    }

    public function provision_site($site, $membership) {
        $plan = $membership->get_plan();

        switch_to_blog($site->get_id());

        // Plan-ன் அடிப்படையில் plugins-களை நிறுவுதல்
        $this->install_plan_plugins($plan);

        // SSL-ஐ கட்டமைத்தல்
        if ($plan->has_feature('ssl')) {
            $this->setup_ssl($site);
        }

        // CDN-ஐ அமைத்தல்
        if ($plan->has_feature('cdn')) {
            $this->configure_cdn($site);
        }

        // காப்புப்பிரதிகளை (backups) கட்டமைத்தல்
        if ($plan->has_feature('backups')) {
            $this->setup_automated_backups($site, $plan->get_backup_frequency());
        }

        // கண்காணிப்பை (monitoring) அமைத்தல்
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

## தனிப்பயன் வரம்புகள் அமைப்பு (Custom Limitations System) {#custom-limitations-system}

பயன்பாட்டு எச்சரிக்கைகளுடன் (usage warnings) வள வரம்புகளை (resource limits) கண்காணித்து அமல்படுத்துதல்:

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

## BerlinDB இல் `increment_item()` உடன் அணுக்கமான கவுண்டர் (Atomic Counter) {#berlindb-atomic-counter-with-incrementitem}

Ultimate Multisite v2.6.1 ஆனது BerlinDB `Query` வகுப்புக்கு ஒரு `increment_item()` முறையைச் சேர்த்துள்ளது. இது, ஒரே நேரத்தில் பல கோரிக்கைகள் வரும்போது (concurrent requests) ஏற்படும் பிழைகளைத் தவிர்த்து, எண் நிரல்களில் (numeric columns) பாதுகாப்பான, அணுக்கமான அதிகரிப்புகளைச் செய்யப் பயன்படுகிறது. இது கவுண்டர்கள், பயன்பாட்டு ஒதுக்கீடுகள் (usage quotas), மற்றும் விகித வரம்பு (rate-limiting) சோதனைகளுக்கு மிகவும் பயனுள்ளதாக இருக்கும்.

### முறை கையொப்பம் (Method signature) {#method-signature}

```php
/**
 * ஒரு குறிப்பிட்ட பொருளுக்கான (item) எண் நிரலை அணுக்கமாக்கி அதிகரிக்கவும்.
 *
 * @param int    $item_id   புதுப்பிக்கப்பட வேண்டிய வரிசையின் முதன்மை விசை (Primary key).
 * @param string $column    அதிகரிக்க வேண்டிய நிரலின் பெயர் (இது எண்மாக இருக்க வேண்டும்).
 * @param int    $amount    சேர்க்க வேண்டிய அளவு. குறைப்பதற்காக எதிர்மறை மதிப்பை (negative value) பயன்படுத்தவும்.
 *                          இயல்புநிலை மதிப்பு 1.
 * @return bool வெற்றி பெற்றால் உண்மை (True), தோல்வியடைந்தால் அல்லது நிரல் தவறாக இருந்தால் தவறு (False).
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### அடிப்படைப் பயன்பாடு (Basic usage) {#basic-usage}

```php
// உறுப்பினர் ID 42-க்கான `api_calls` நிரலுக்கு 1 சேர்க்கவும்.
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// ஒரு பயன்பாட்டு கவுண்டருக்கு 5 சேர்க்கவும்.
$memberships->increment_item( 42, 'api_calls', 5 );

// குறைக்கவும் (1 கழிக்கவும்).
$memberships->increment_item( 42, 'api_calls', -1 );
```

### உறுப்பினர் வாரியான API பயன்பாட்டைக் கண்காணித்தல் (Tracking API usage per membership) {#tracking-api-usage-per-membership}

உறுப்பினர் வாரியான API வரம்புகளை அமல்படுத்த ஒரு நடைமுறை முறை:

```php
class Membership_API_Limiter {

    /** ஒவ்வொரு பில்லிங் சுழற்சிக்கும் அனுமதிக்கப்பட்ட அதிகபட்ச API அழைப்புகள். */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * உறுப்பினர் வரம்பை மீறினால் கோரிக்கையை நிராகரிக்கும்;
     * இல்லையெனில் அழைப்பைக் அணுக்கமாக்கி எண்ணும் (count).
     *
     * @param bool   $enabled
     * @param object $context  get_membership_id() என்ற முறையைக் கொண்ட பொருள் (Object).
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
            return false;  // ஒதுக்கீட்டை மீறுகிறது — நிராகரிப்பு.
        }

        // அணுக்கமான அதிகரிப்பு: ஒரே நேரத்தில் வரும் கோரிக்கைகளுக்கு பாதுகாப்பானது.
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### `update_item()` க்கு பதிலாக `increment_item()` ஏன்? {#why-incrementitem-instead-of-updateitem}

ஒரே நேரத்தில் வரும் கோரிக்கைகளின் கீழ் (under concurrent requests) ஒரு சாதாரணமான படிக்க-மாற்றி-எழுது (read-modify-write) அணுகுமுறை பாதுகாப்பானது அல்ல:

```php
// பாதுகாப்பற்றது — படிக்கவும் எழுதவும் இடையே ரேஸ் நிலை (race condition) ஏற்படும்.
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

இரண்டு ஒரே நேரத்தில் வரும் கோரிக்கைகள் ஒரே மதிப்பை படித்து, இரண்டுமே அதே அதிகரித்த முடிவை மீண்டும் எழுதக்கூடும். இதனால் ஒரு கவுண்ட் இழக்கப்படும். `increment_item()` ஆனது கணித செயல்பாட்டை தரவுத்தள இயந்திரத்திற்கு (database engine) ஒரே `UPDATE ... SET column = column + ?` அறிக்கையுடன் ஒப்படைக்கிறது, இதனால் இந்த செயல்பாடு இயல்பாகவே அணுக்கமானதாக (inherently atomic) மாறுகிறது.
