---
title: Leiðarvísir um notkun króka
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Leiðarvísir um notkun hooks {#hooks-usage-guide}

Ultimate Multisite býður upp á 200+ action hooks og 280+ filter hooks. Þessi síða fjallar um algengustu hooks með hagnýtum dæmum. Fyrir fullkomna sjálfvirkt útbúna tilvísun skaltu skoða hinar síðurnar í þessum hluta.

## Action Hooks {#action-hooks}

### Lífsferill viðskiptavinar {#customer-lifecycle}

#### Eftir stofnun viðskiptavinar {#after-customer-creation}

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

#### Breyting á stöðu viðskiptavinar {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // React to status transitions
}, 10, 3);
```

### Hooks fyrir vefsvæði {#site-hooks}

#### Eftir að vefsvæði er birt {#after-site-published}

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

#### Fyrir beitingu sniðmáts {#before-template-application}

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

### Membership hooks {#membership-hooks}

#### Stöðubreytingar {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Membership activated
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment hooks {#payment-hooks}

#### Greiðsla lokið / mistókst {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // Handle successful payment
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

### Checkout hooks {#checkout-hooks}

#### Fyrir úrvinnslu / eftir lok {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Validate or modify cart before processing
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Track conversion, send notifications, etc.
}, 10, 3);
```

### Domain hooks {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // Update CDN or DNS configuration
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL certificate verified for domain
});
```

## Filter Hooks {#filter-hooks}

### Verðlagningarsíur {#pricing-filters}

#### Heildarupphæð körfu {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP discount
    }

    return $total;
}, 10, 2);
```

#### Skatthlutföll {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Sniðmátssíur {#template-filters}

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

### Takmarkanasíur {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Extra 500MB for long-term customers
    }

    return $limit;
}, 10, 3);
```

### Gateway filters {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout form reitir {#checkout-form-fields}

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

### Efni tölvupósts {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
