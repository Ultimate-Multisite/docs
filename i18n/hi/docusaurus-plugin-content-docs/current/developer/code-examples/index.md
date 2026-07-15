---
title: उन्नत कोड उदाहरण
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# उन्नत कोड उदाहरण

ये उदाहरण Ultimate Multisite के साथ उन्नत इंटीग्रेशन पैटर्न दिखाते हैं।

## डायनामिक प्राइसिंग इंजन {#dynamic-pricing-engine}

एक नियम-आधारित मूल्य निर्धारण इंजन जो वॉल्यूम, लॉयल्टी और मौसमी छूट लागू करता है:

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

## उन्नत साइट प्रोविजनिंग {#advanced-site-provisioning}

प्लान की सुविधाओं के आधार पर प्लगइन्स, SSL, CDN, बैकअप और मॉनिटरिंग के साथ नई साइटों को स्वचालित रूप से कॉन्फ़िगर करें:

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

## कस्टम लिमिटेशन सिस्टम {#custom-limitations-system}

उपयोग की सीमा (resource limits) को ट्रैक करें और लागू करें, साथ ही उपयोग चेतावनी भी दें:

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

## BerlinDB में `increment_item()` के साथ एटॉमिक काउंटर {#berlindb-atomic-counter-with-incrementitem}

Ultimate Multisite v2.6.1 में BerlinDB `Query` क्लास में एक `increment_item()` मेथड जोड़ा गया है। इसका उपयोग संख्यात्मक कॉलम पर सुरक्षित, एटॉमिक इंक्रीमेंट करने के लिए करें, बिना रीड-मॉडिफाई-राइट रेस (read-modify-write races) के — यह काउन्टर, उपयोग कोटा, और रेट-लिमिटिंग चेक के लिए उपयोगी है जो एक साथ चल रहे अनुरोधों (concurrent requests) के तहत चलते हैं।

### मेथड सिग्नेचर {#method-signature}

```php
/**
 * किसी विशिष्ट आइटम के लिए संख्यात्मक कॉलम को एटॉमिक रूप से बढ़ाएँ।
 *
 * @param int    $item_id   अपडेट करने वाली पंक्ति की प्राथमिक कुंजी।
 * @param string $column    बढ़ाने के लिए कॉलम का नाम (संख्यात्मक होना चाहिए)।
 * @param int    $amount    जोड़ने की राशि। घटाने के लिए नकारात्मक मान का उपयोग करें।
 *                          डिफ़ॉल्ट रूप से 1 होता है।
 * @return bool सफलता पर true, विफलता पर false या यदि कॉलम अमान्य है।
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### बुनियादी उपयोग {#basic-usage}

```php
// मेंबरशिप ID 42 के लिए `api_calls` कॉलम में 1 जोड़ें।
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// उपयोग काउंटर में 5 जोड़ें।
$memberships->increment_item( 42, 'api_calls', 5 );

// घटाएँ (1 घटाएँ)।
$memberships->increment_item( 42, 'api_calls', -1 );
```

### मेंबरशिप के अनुसार API उपयोग को ट्रैक करना {#tracking-api-usage-per-membership}

मेंबरशिप के लिए API रेट लिमिट लागू करने का एक व्यावहारिक पैटर्न:

```php
class Membership_API_Limiter {

    /** प्रति बिलिंग चक्र में अनुमत अधिकतम API कॉल। */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * अनुरोध को अस्वीकार करें यदि मेंबरशिप सीमा से अधिक है;
     * अन्यथा कॉल को एटॉमिक रूप से गिनें।
     *
     * @param bool   $enabled
     * @param object $context  get_membership_id() मेथड वाला ऑब्जेक्ट।
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
            return false;  // कोटा से अधिक — अस्वीकार करें।
        }

        // एटॉमिक इंक्रीमेंट: एक साथ चल रहे अनुरोधों के तहत सुरक्षित।
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### `update_item()` के बजाय `increment_item()` क्यों? {#why-incrementitem-instead-of-updateitem}

एक भोला (naive) रीड-मॉडिफाई-राइट अप्रोच एक साथ चल रहे अनुरोधों के तहत असुरक्षित होता है:

```php
// असुरक्षित — रीड और राइट के बीच रेस कंडीशन।
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

दो एक साथ अनुरोध एक ही मान पढ़ सकते हैं और दोनों वापस एक ही बढ़े हुए परिणाम को लिख सकते हैं, जिससे एक काउंट खो जाएगा। `increment_item()` अंकगणित को डेटाबेस इंजन को एक सिंगल `UPDATE ... SET column = column + ?` स्टेटमेंट के साथ सौंप देता है, जिससे ऑपरेशन स्वाभाविक रूप से एटॉमिक हो जाता है।
