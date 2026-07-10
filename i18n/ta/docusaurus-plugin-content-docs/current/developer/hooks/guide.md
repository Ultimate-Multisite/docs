---
title: Hooks பயன்பாட்டு வழிகாட்டி
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# ஹூக்குகள் பயன்பாட்டு வழிகாட்டி {#hooks-usage-guide}

Ultimate Multisite ஆனது 200-க்கும் மேற்பட்ட action hooks மற்றும் 280-க்கும் மேற்பட்ட filter hooks-ஐ வழங்குகிறது. இந்தப் பக்கம் மிகவும் பொதுவாகப் பயன்படுத்தப்படும் ஹூக்குகளை நடைமுறை உதாரணங்களுடன் விளக்குகிறது. முழுமையான தானாக உருவாக்கப்பட்ட குறிப்புக்கு, இந்தப் பிரிவில் உள்ள மற்ற பக்கங்களைப் பார்க்கவும்.

## Action Hooks (செயல் ஹூக்குகள்) {#action-hooks}

### Customer Lifecycle (வாடிக்கையாளர் வாழ்க்கைச் சுழற்சி) {#customer-lifecycle}

#### After Customer Creation (வாடிக்கையாளர் உருவாக்கப்பட்ட பிறகு) {#after-customer-creation}

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

#### Customer Status Change (வாடிக்கையாளர் நிலை மாற்றம்) {#customer-status-change}

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

### Site Hooks (தள ஹூக்குகள்) {#site-hooks}

#### After Site Published (தளம் வெளியிடப்பட்ட பிறகு) {#after-site-published}

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

#### Before Template Application (டெம்ப்ளேட் பயன்படுத்தப்படுவதற்கு முன்) {#before-template-application}

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

### Membership Hooks (உறுப்பினர் ஹூக்குகள்) {#membership-hooks}

#### Status Transitions (நிலை மாற்றங்கள்) {#status-transitions}

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

### Payment Hooks (பணம் செலுத்தும் ஹூக்குகள்) {#payment-hooks}

#### Payment Completed / Failed (பணம் செலுத்துதல் நிறைவு / தோல்வி) {#payment-completed--failed}

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

### Checkout Hooks (செக்அவுட் ஹூக்குகள்) {#checkout-hooks}

#### Before Processing / After Completion (செயலாக்கப்படுவதற்கு முன் / நிறைவுக்குப் பிறகு) {#before-processing--after-completion}

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

### Domain Hooks (டொமைன் ஹூக்குகள்) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // Update CDN or DNS configuration
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL certificate verified for domain
});
```

## Filter Hooks (ஃபில்டர் ஹூக்குகள்) {#filter-hooks}

### Pricing Filters (விலை நிர்ணய ஃபில்டர்கள்) {#pricing-filters}

#### Cart Total (கார்ட் மொத்தத் தொகை) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP discount
    }

    return $total;
}, 10, 2);
```

#### Tax Rates (வரி விகிதங்கள்) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters (டெம்ப்ளேட் ஃபில்டர்கள்) {#template-filters}

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

### Limitation Filters (வரம்பு ஃபில்டர்கள்) {#limitation-filters}

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

### Gateway Filters (கேட்வே ஃபில்டர்கள்) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Fields (செக்அவுட் படிவ புலங்கள்) {#checkout-form-fields}

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

### Email Content (மின்னஞ்சல் உள்ளடக்கம்) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
