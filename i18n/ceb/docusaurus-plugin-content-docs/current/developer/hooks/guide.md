---
title: Giya sa Paggamit sa Hooks
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Giya sa Paggamit sa Hooks

Ang Ultimate Multisite naghatag og labaw pa sa 200+ action hooks ug 280+ filter hooks. Kini nga page naghisgot sa mga hook nga kasagarang gamiton uban ang praktikal nga mga pananglitan. Para sa kompleto nga reference nga gi-generate awtomatiko, palihog magtan-aw sa ubang mga pahina niini nga seksyon.

## Action Hooks

### Customer Lifecycle

#### Human sa Paghimo og Customer (After Customer Creation)

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 */
add_action('wu_customer_post_create', function($customer) {
    wp_mail(
        $customer->get_email(),
        'Welcome!',
        'Salamat sa pag-apil sa among platform!'
    );
});
```

#### Pagbag-o sa Status sa Customer (Customer Status Change)

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Mag-react sa mga pagbag-o sa status
}, 10, 3);
```

### Site Hooks

#### Human human sa Pag-publish sa Site (After Site Published)

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

#### Sa dili pa ang Aplikasyon sa Template (Before Template Application)

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

### Membership Hooks

#### Status Transitions

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Ang membership na-activate na
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment Hooks

#### Payment Completed / Failed

```php
add_action('wu_payment_completed', function($payment) {
    // Iproseso ang malampuson nga bayad
});

add_action('wu_payment_failed', function($payment, $error_message) {
    $admin_email = get_option('admin_email');
    wp_mail(
        $admin_email,
        'Payment Failed',
        sprintf('Payment #%d mapakyas: %s', $payment->get_id(), $error_message)
    );
}, 10, 2);
```

### Checkout Hooks

#### Before Processing / After Completion

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Mag-validate o mag-modify sa cart antes sa pagproseso
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // I-track ang conversion, magpadala og mga notification, ug uban pa.
}, 10, 3);
```

### Domain Hooks

```php
add_action('wu_domain_mapped', function($domain) {
    // Update sa CDN o DNS configuration
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL certificate gi-verify para sa domain
});
```

## Filter Hooks

### Pricing Filters

#### Cart Total

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP discount
    }

    return $total;
}, 10, 2);
```

#### Tax Rates

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters

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

### Mga Filter sa Limitasyon (Limitation Filters)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Dugang 500MB para sa mga long-term customer
    }

    return $limit;
}, 10, 3);
```

### Mga Filter sa Gateway (Gateway Filters)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Mga Field sa Checkout Form (Checkout Form Fields)

```php
add_filter('wu_checkout_form_final_fields', function($fields, $form) {
    $fields['company'] = [
        'type' => 'text',
        'title' => 'Company Name',
        'required' => true,
        'placeholder' => 'Ibutang ang ngalan sa kompanya'
    ];

    return $fields;
}, 10, 2);
```

### Sulod sa Email (Email Content)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Gamit ang code WELCOME10 para sa 10% discount!";
    }
    return $content;
}, 10, 3);
```
