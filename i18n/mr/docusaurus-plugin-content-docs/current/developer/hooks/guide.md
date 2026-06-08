---
title: हुक्स वापर मार्गदर्शिका
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# हुक्स वापर मार्गदर्शिका

Ultimate Multisite मध्ये २००+ ॲक्शन हुक्स आणि २८०+ फिल्टर हुक्स उपलब्ध आहेत. या पानावर सर्वात जास्त वापरले जाणारे हुक्स आणि त्यांची व्यावहारिक उदाहरणे दिली आहेत. संपूर्ण स्वयंचलित संदर्भ (reference) हवा असल्यास, या विभागातील इतर पानांचा अभ्यास करा.

## Action Hooks (ॲक्शन हुक्स)

### Customer Lifecycle (ग्राहक जीवनचक्र)

#### After Customer Creation (ग्राहक तयार झाल्यानंतर)

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

#### Customer Status Change (ग्राहकाची स्थिती बदलणे)

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // स्थिती बदलांवर प्रतिक्रिया देणे
}, 10, 3);
```

### Site Hooks (साईट हुक्स)

#### After Site Published (साईट प्रकाशित झाल्यानंतर)

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

#### Before Template Application (टेम्पलेट लागू करण्यापूर्वी)

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

### Membership Hooks (सदस्यता हुक्स)

#### Status Transitions (स्थिती बदल)

```php
add_action('wu_membership_status_to_active', function($membership) {
    // सदस्यता सक्रिय झाली
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment Hooks (पेमेंट हुक्स)

#### Payment Completed / Failed (पेमेंट पूर्ण / अयशस्वी)

```php
add_action('wu_payment_completed', function($payment) {
    // यशस्वी पेमेंट हाताळा
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

### Checkout Hooks (चेकआउट हुक्स)

#### Before Processing / After Completion (प्रक्रिया करण्यापूर्वी / पूर्ण झाल्यानंतर)

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // प्रक्रिया करण्यापूर्वी कार्ट प्रमाणित करा किंवा त्यात बदल करा
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // कन्वर्जन ट्रॅक करा, सूचना पाठवा, इत्यादी.
}, 10, 3);
```

### Domain Hooks (डोमेन हुक्स)

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN किंवा DNS कॉन्फिगरेशन अपडेट करा
});

add_action('wu_domain_ssl_verified', function($domain) {
    // डोमेनसाठी SSL प्रमाणपत्र सत्यापित झाले
});
```

## Filter Hooks (फिल्टर हुक्स)

### Pricing Filters (किंमत निश्चिती फिल्टर)

#### Cart Total (कार्टची एकूण किंमत)

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // १०% VIP सूट
    }

    return $total;
}, 10, 2);
```

#### Tax Rates (कर दर)

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters (टेम्पलेट फिल्टर)

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

### Limitation Filters (मर्यादा फिल्टर)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // दीर्घकालीन ग्राहकांसाठी अतिरिक्त ५००MB
    }

    return $limit;
}, 10, 3);
```

### Gateway Filters (गेटवे फिल्टर)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Fields (चेकआउट फॉर्म फील्ड्स)

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

### Email Content (ईमेल सामग्री)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
