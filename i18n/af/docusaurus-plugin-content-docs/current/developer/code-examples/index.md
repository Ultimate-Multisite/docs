---
title: Gevorderde Kodevoorbeelde
sidebar_position: 1
_i18n_hash: 98addf6b26f4c19754fed6e4f64a1704
---
# Gevorderde Kodevoorbeelde

Hierdie voorbeelde demonstreer gevorderde integrasiëpatrone met Ultimate Multisite.

## Dinamiese Prysgestel Motoriese {#dynamic-pricing-engine}

'n Reëlsgebaseerde prysgestel wat volume-, lojaliteits- en seisoenale afslag toepas:

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

## Gevorderde Site-Verskaffing {#advanced-site-provisioning}

Konfigureer nuwe sites outomaties met plugins, SSL, CDN, back-ups en monitoring op grond van plan-kenmerke:

```php
class Advanced_Site_Provisioner {

    public function __construct() {
        add_action('wu_site_published', [$this, 'provision_site'], 10, 2);
    }

    public function provision_site($site, $membership) {
        $plan = $membership->get_plan();

        switch_to_blog($site->get_id());

        // Installeer plugins op grond van plan
        $this->install_plan_plugins($plan);

        // Konfigureer SSL
        if ($plan->has_feature('ssl')) {
            $this->setup_ssl($site);
        }

        // Stel CDN op
        if ($plan->has_feature('cdn')) {
            $this->configure_cdn($site);
        }

        // Konfigureer back-ups
        if ($plan->has_feature('backups')) {
            $this->setup_automated_backups($site, $plan->get_backup_frequency());
        }

        // Stel site-monitoring op
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

## Aangepaste Beperkingsstelsel {#custom-limitations-system}

Spoor en handhaaf hulpbronbeperkings met gebruikerswaarskuwings:

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
                'Site %d het stoorbeperking bereik: %dMB/%dMB',
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

## BerlinDB Atoomtelmer met `increment_item()` {#berlindb-atomic-counter-with-incrementitem}

Ultimate Multisite v2.6.1 het 'n `increment_item()` metode bygevoeg aan die BerlinDB `Query` klas. Gebruik dit om veilige, atoom-verhogings op numeriese kolomme uit te voer sonder lees-verander-skryf-wedloopkondiges (read-modify-write races) — nuttig vir telmers, gebruikkvote en rate-beperkingskontrolle wat onder gelyktydige versoek word uitgevoer word.

### Metodehandtekening {#method-signature}

```php
/**
 * Verhoog 'n numeriese kolom atoomaties vir 'n spesifieke item.
 *
 * @param int    $item_id   Primêre sleutel van die ry wat opgedateer moet word.
 * @param string $column    Kolomnaam om te verhoog (moet numeries wees).
 * @param int    $amount    Hoeveelheid om by te voeg. Gebruik 'n negatiewe waarde om te verminder.
 *                          Stel standaard op 1.
 * @return bool True by sukses, false by mislukking of as die kolom ongeldig is.
 */
public function increment_item( int $item_id, string $column, int $amount = 1 ): bool;
```

### Basiese gebruik {#basic-usage}

```php
// Voeg 1 by die `api_calls` kolom vir lidmaatskap ID 42.
$memberships = new WP_Ultimo\Database\Memberships\Memberships_Query();
$memberships->increment_item( 42, 'api_calls' );

// Voeg 5 by 'n gebruiktelmer by.
$memberships->increment_item( 42, 'api_calls', 5 );

// Verminder (trek 1 af).
$memberships->increment_item( 42, 'api_calls', -1 );
```

### Naspoor van API-gebruik per lidmaatskap {#tracking-api-usage-per-membership}

'n Praktiese patroon vir die handhawing van per-lidmaatskap API-ratebeperkings:

```php
class Membership_API_Limiter {

    /** Maksimum API-oproepe toegelaat per faktuurkring. */
    const LIMIT = 500;

    public function __construct() {
        add_filter( 'wu_is_api_enabled', [ $this, 'check_and_count' ], 10, 2 );
    }

    /**
     * Weier die versoek indien die lidmaatskap die limiet oorskry;
     * anders tel die oproep atoomaties.
     *
     * @param bool   $enabled
     * @param object $context  Objek met 'n get_membership_id() metode.
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
            return false;  // Oor kwota — weier.
        }

        // Atoom-verhoging: veilig onder gelyktydige versoeke.
        $memberships->increment_item( $membership_id, 'api_calls' );

        return true;
    }
}

new Membership_API_Limiter();
```

### Hoekom `increment_item()` en nie `update_item()` nie {#why-incrementitem-instead-of-updateitem}

'n Naïef lees-verander-skryf-benadering is onveilig onder gelyktydige versoeke:

```php
// ONVEILIG — wedloopkondisie tussen lees en skryf.
$membership = $memberships->get_item( $membership_id );
$new_count  = (int) $membership->api_calls + 1;
$memberships->update_item( $membership_id, [ 'api_calls' => $new_count ] );
```

Twee gelyktydige versoeke kan dieselfde waarde lees en albei dieselfde verhoogde resultaat terugskryf, wat een tel verloor. `increment_item()` delegeer die rekenkunde aan die databasis-motoriese met 'n enkele `UPDATE ... SET column = column + ?` stelling, wat die operasie inherent atoom maak.
