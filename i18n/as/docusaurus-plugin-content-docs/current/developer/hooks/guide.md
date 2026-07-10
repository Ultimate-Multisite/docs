---
title: Hooks ব্যৱহাৰৰ নির্দেশিকা
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hooks ব্যৱহাৰ কৰাৰ গাইড {#hooks-usage-guide}

Ultimate Multisite ত ২০০ তকৈ বেছি action hooks আৰু ২৮০ তকৈ বেছি filter hooks আছে। এই পৃষ্ঠাখনত আটাইতকৈ বেছি ব্যৱহৃত হুকসমূহক ব্যৱহাৰিক উদাহৰণৰ সৈতে কওঁ। সম্পূৰ্ণ স্বয়ংক্রিয় তথ্যৰ বাবে, এই অংশৰ আন পৃষ্ঠাবোৰ চাওক।

## Action Hooks {#action-hooks}

### Customer Lifecycle (ग्राहकৰ জীৱনচক্ৰ) {#customer-lifecycle}

#### After Customer Creation (ग्राहक সৃষ্টি হোৱাৰ পিছত) {#after-customer-creation}

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

#### Customer Status Change (ग्राहकৰ স্থিতি পৰিৱৰ্তন) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // স্থিতি পৰিৱৰ্তনৰ বাবে প্ৰতিক্ৰিয়া কৰক
}, 10, 3);
```

### Site Hooks (স্থানৰ হুকছ) {#site-hooks}

#### After Site Published (স্থান প্ৰকাশ হোৱাৰ পিছত) {#after-site-published}

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

#### Before Template Application (টেমপ্লেট প্ৰয়োগ কৰাৰ আগতে) {#before-template-application}

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

### Membership Hooks (সদস্যপদৰ হুকছ) {#membership-hooks}

#### Status Transitions (স্থিতি পৰিৱৰ্তন) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // সদস্যপদ সক্রিয় কৰা হ'ল
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment Hooks (পেমেন্ট হুকছ) {#payment-hooks}

#### Payment Completed / Failed (পেমেন্ট সম্পন্ন/ব্যৰ্থ) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // সফল পেমেন্ট ব্যৱস্থাপনা কৰক
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

### Checkout Hooks (চেকআউট হুকছ) {#checkout-hooks}

#### Before Processing / After Completion (প্ৰক্ৰম কৰাৰ আগতে / সম্পন্ন হোৱাৰ পিছত) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // প্ৰক্ৰম কৰাৰ আগতে ক্ৰাট (cart) বৈধ কৰক বা সলনি কৰক
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // কনভাৰচন ট্ৰেক কৰক, notificatioণ প্ৰেণ কৰক, আদি।
}, 10, 3);
```

### Domain Hooks (ডোমেইন হুকছ) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN বা DNS কনফিগাৰেচন আপডেট কৰক
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ডোমেইনৰ বাবে SSL সার্টিফিকেট পৰীক্ষিত
});
```

## Filter Hooks (ফিল্টাৰ হুকছ) {#filter-hooks}

### Pricing Filters (দামৰ ফিল্টাৰ) {#pricing-filters}

#### Cart Total (ক্ৰাটৰ মুঠ মূল্য) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // ১০% VIP छुट
    }

    return $total;
}, 10, 2);
```

#### Tax Rates (ট্যাক্স হাৰ) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters (টেমপ্লেট ফিল্টাৰ) {#template-filters}

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

### Limitation Filters (সীমাবদ্ধতা ফিল্টাৰ) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // দীৰ্ঘস্থায়ী ग्राहकৰ বাবে অতিৰিক্ত ৫০০MB
    }

    return $limit;
}, 10, 3);
```

### Gateway Filters (গেটেৱে ফিল্টাৰ) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Fields (চেকআউট ফৰ্মৰ ফিল্ডসমূহ) {#checkout-form-fields}

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

### Email Content (ইমেইলৰ বিষয়বস্তু) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
