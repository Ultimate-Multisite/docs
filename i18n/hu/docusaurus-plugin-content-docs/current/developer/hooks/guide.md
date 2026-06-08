---
title: Hooks Használati Útmutató
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Akció Hook-ok Használatoguide

Az Ultimate Multisite több mint 200 akció hook-ját és 280 passzív (filter) hook-ját biztosítja. Ezen az oldalon a leggyakrabban használt hook-okat találja gyakorlati példákkal. A teljes, automatikusan generált referenciához tekintse át ezen szakasz más oldalait.

## Akció Hook-ok

### Ügyfél Életciklus

#### Ügyfél Létrehozása Után

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 */
add_action('wu_customer_post_create', function($customer) {
    wp_mail(
        $customer->get_email(),
        'Welcome!',
        'Thanks for joining our platform!'
    );
});
```

#### Ügyfél Státuszváltása

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Reagáljon a státuszváltásokra
}, 10, 3);
```

### Oldal Hook-jai

#### Oldal Közzététele Után

```php
/**
 * @param WP_Ultimo\Models\Site $site
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_site_published', function($site, $membership) {
    switch_to_blog($site->get_id());
    activate_plugin('essential-plugin/essential-plugin.php');
    restore_current_blog();
}, 10, 2);
```

#### Sablon Alkalmazása Előtt

```php
/**
 * @param int $site_id
 * @param int $template_id
 */
add_action('wu_before_apply_template', function($site_id, $template_id) {
    switch_to_blog($site_id);

    if ($template_id === 5) {
        update_option('woocommerce_store_setup', 'complete');
    }

    restore_current_blog();
}, 10, 2);
```

### Tagság Hook-jai

#### Státuszváltások

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Tagság aktiválása
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Fizetési Hook-ok

#### Fizetés Sikeres / Sikertelen

```php
add_action('wu_payment_completed', function($payment) {
    // Kezelje a sikeres fizetést
});

add_action('wu_payment_failed', function($payment, $error_message) {
    $admin_email = get_option('admin_email');
    wp_mail(
        $admin_email,
        'Payment Failed',
        sprintf('Payment #%d failed: %s', $payment->get_id(), $error_message)
    );
}, 10, 2);
```

### Checkout Hook-ok

#### Feldolgozás Előtt / Befejezése Után

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Ellenőrizze vagy módosítsa a kosarat a feldolgozás előtt
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Követje a konverziót, küldje el értesítéseket stb.
}, 10, 3);
```

### Domain Hook-ok

```php
add_action('wu_domain_mapped', function($domain) {
    // Frissítse a CDN vagy DNS konfigurációját
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Az SSL tanúsítvány ellenőrizve a domain számára
});
```

## Passzív (Filter) Hook-ok

### Árazási Passzív Hook-ok

#### Kosár Összeg

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP kedvezmény
    }

    return $total;
}, 10, 2);
```

#### Ádavámok

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Sablon Passzív Hook-ok

```php
add_filter('wu_available_templates', function($templates, $customer) {
    if (!$customer->is_vip()) {
        foreach ($templates as $key => $template) {
            if ($template['category'] === 'premium') {
                unset($templates[$key]);
            }
        }
    }

    return $templates;
}, 10, 2);
```

### Korlátozási Passzív Hook-ok

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Extra 500MB hosszú távú ügyfelek számára
    }

    return $limit;
}, 10, 3);
```

### Gateway Passzív Hook-ok

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Formmező Passzív Hook-ok

```php
add_filter('wu_checkout_form_final_fields', function($fields, $form) {
    $fields['company'] = [
        'type' => 'text',
        'title' => 'Company Name',
        'required' => true,
        'placeholder' => 'Enter company name'
    ];

    return $fields;
}, 10, 2);
```

### E-mail Tartalom Passzív Hook-ok

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
