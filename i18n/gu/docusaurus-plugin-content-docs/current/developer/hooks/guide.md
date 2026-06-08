---
title: હૂક્સ ઉપયોગ માર્ગદર્શિકા
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hooks નો ઉપયોગ કેવી રીતે કરવો

Ultimate Multisite 200+ action hooks અને 280+ filter hooks પ્રદાન કરે છે. આ પેજમાં સૌથી વધુ ઉપયોગમાં લેવાતા hooks ને વ્યવહારુ ઉદાહરણો સાથે આવરી લેવામાં આવ્યા છે. સંપૂર્ણ સ્વચાલિત સંદર્ભ માટે, આ વિભાગમાં અન્ય પેજીસ જુઓ.

## Action Hooks

### Customer Lifecycle (ગ્રાહક જીવનચક્ર)

#### After Customer Creation (ગ્રાહક બનાવ્યા પછી)

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

#### Customer Status Change (ગ્રાહકની સ્થિતિમાં ફેરફાર)

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // સ્થિતિમાં થયેલા ફેરફારો પર પ્રતિક્રિયા આપવી
}, 10, 3);
```

### Site Hooks (સાઇટ સંબંધિત hooks)

#### After Site Published (સાઇટ પ્રકાશિત થયા પછી)

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

#### Before Template Application (ટેમ્પલેટ લાગુ કરતાં પહેલાં)

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

### Membership Hooks (સભ્યપદ hooks)

#### Status Transitions (સ્થિતિ સંક્રમણ)

```php
add_action('wu_membership_status_to_active', function($membership) {
    // સભ્યપદ સક્રિય થયું
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment Hooks (ચુકવણી hooks)

#### Payment Completed / Failed (ચુકવણી પૂર્ણ / નિષ્ફળ)

```php
add_action('wu_payment_completed', function($payment) {
    // સફળ ચુકવણીને હેન્ડલ કરવી
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

### Checkout Hooks (ચેકઆઉટ hooks)

#### Before Processing / After Completion (પ્રક્રિયા પહેલાં / પૂર્ણ થયા પછી)

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // પ્રક્રિયા કરતા પહેલા કાર્ટને વેલિડેટ અથવા મોડિફાય કરવો
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // કન્વર્ઝન ટ્રેક કરવું, નોટિફિકેશન મોકલવા, વગેરે.
}, 10, 3);
```

### Domain Hooks (ડોમેન hooks)

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN અથવા DNS કન્ફિગરેશન અપડેટ કરવું
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ડોમેન માટે SSL સર્ટિફિકેટ વેરિફાય થયું
});
```

## Filter Hooks (ફિલ્ટર hooks)

### Pricing Filters (ભાવ નિર્ધારણ ફિલ્ટર્સ)

#### Cart Total (કાર્ટનું કુલ કિંમત)

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP ડિસ્કાઉન્ટ
    }

    return $total;
}, 10, 2);
```

#### Tax Rates (કર દરો)

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters (ટેમ્પલેટ ફિલ્ટર્સ)

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

### Limitation Filters (મર્યાદા ફિલ્ટર્સ)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // લાંબા ગાળાના ગ્રાહકો માટે વધારાના 500MB
    }

    return $limit;
}, 10, 3);
```

### Gateway Filters (ગેટવે ફિલ્ટર્સ)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Fields (ચેકઆઉટ ફોર્મ ફીલ્ડ્સ)

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

### Email Content (ઈમેલ કન્ટેન્ટ)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
