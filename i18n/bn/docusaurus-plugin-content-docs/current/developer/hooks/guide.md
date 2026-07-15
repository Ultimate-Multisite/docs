---
title: হুকস ব্যবহার নির্দেশিকা
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# হুকস ব্যবহারের নির্দেশিকা

Ultimate Multisite-এ ২০০টিরও বেশি অ্যাকশন হুক এবং ২৮০টিরও বেশি ফিল্টার হুক রয়েছে। এই পেজে আমরা সবচেয়ে বেশি ব্যবহৃত হুকগুলো ব্যবহারিক উদাহরণসহ আলোচনা করেছি। একটি সম্পূর্ণ স্বয়ংক্রিয় রেফারেন্সের জন্য, এই সেকশনের অন্যান্য পেজগুলো দেখুন।

## অ্যাকশন হুকস (Action Hooks) {#action-hooks}

### গ্রাহকের জীবনচক্র (Customer Lifecycle) {#customer-lifecycle}

#### গ্রাহক তৈরি হওয়ার পর (After Customer Creation) {#after-customer-creation}

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

#### গ্রাহকের স্ট্যাটাস পরিবর্তন (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // স্ট্যাটাস পরিবর্তনের সময় প্রতিক্রিয়া জানান
}, 10, 3);
```

### সাইট হুকস (Site Hooks) {#site-hooks}

#### সাইট প্রকাশিত হওয়ার পর (After Site Published) {#after-site-published}

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

#### টেমপ্লেট প্রয়োগ করার আগে (Before Template Application) {#before-template-application}

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

### মেম্বারশিপ হুকস (Membership Hooks) {#membership-hooks}

#### স্ট্যাটাস পরিবর্তন (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // মেম্বারশিপ সক্রিয় করা হয়েছে
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### পেমেন্ট হুকস (Payment Hooks) {#payment-hooks}

#### পেমেন্ট সম্পন্ন বা ব্যর্থ (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // সফল পেমেন্ট পরিচালনা করুন
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

### চেকআউট হুকস (Checkout Hooks) {#checkout-hooks}

#### প্রসেসিং করার আগে / সম্পন্ন হওয়ার পর (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // প্রসেসিং করার আগে কার্ট যাচাই করুন বা পরিবর্তন করুন
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // কনভার্সন ট্র্যাক করুন, নোটিফিকেশন পাঠান, ইত্যাদি।
}, 10, 3);
```

### ডোমেইন হুকস (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN বা DNS কনফিগারেশন আপডেট করুন
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ডোমেইনের জন্য SSL সার্টিফিকেট যাচাই করা হয়েছে
});
```

## ফিল্টার হুকস (Filter Hooks) {#filter-hooks}

### মূল্য নির্ধারণ ফিল্টার (Pricing Filters) {#pricing-filters}

#### কার্ট মোট (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // ১০% ভিআইপি ডিসকাউন্ট
    }

    return $total;
}, 10, 2);
```

#### ট্যাক্স রেট (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### টেমপ্লেট ফিল্টার (Template Filters) {#template-filters}

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

### সীমাবদ্ধতা ফিল্টার (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // দীর্ঘমেয়াদী গ্রাহকদের জন্য অতিরিক্ত ৫০০এমবি
    }

    return $limit;
}, 10, 3);
```

### গেটওয়ে ফিল্টার (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### চেকআউট ফর্ম ফিল্ড (Checkout Form Fields) {#checkout-form-fields}

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

### ইমেল কনটেন্ট (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
