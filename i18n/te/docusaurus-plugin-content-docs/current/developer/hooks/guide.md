---
title: Hooks వినియోగ గైడ్
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# హుక్స్ వినియోగ గైడ్

Ultimate Multisite లో 200+ యాక్షన్ హుక్స్ మరియు 280+ ఫిల్టర్ హుక్స్ అందుబాటులో ఉన్నాయి. ఈ పేజీలో అత్యంత సాధారణంగా ఉపయోగించే హుక్స్ మరియు వాటి ఆచరణాత్మక ఉదాహరణలను కవర్ చేశాము. పూర్తి ఆటో-జనరేటెడ్ రిఫరెన్స్ కోసం, ఈ సెక్షన్లోని ఇతర పేజీలను చూడండి.

## యాక్షన్ హుక్స్ (Action Hooks) {#action-hooks}

### కస్టమర్ లైఫ్‌సైకిల్ (Customer Lifecycle) {#customer-lifecycle}

#### కస్టమర్ సృష్టించిన తర్వాత (After Customer Creation) {#after-customer-creation}

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

#### కస్టమర్ స్టేటస్ మార్పు (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // స్టేటస్ మార్పులకు ప్రతిస్పందించండి
}, 10, 3);
```

### సైట్ హుక్స్ (Site Hooks) {#site-hooks}

#### సైట్ ప్రచురించబడిన తర్వాత (After Site Published) {#after-site-published}

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

#### టెంప్లేట్ వర్తింపజేయడానికి ముందు (Before Template Application) {#before-template-application}

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

### సభ్యత్వం హుక్స్ (Membership Hooks) {#membership-hooks}

#### స్టేటస్ ట్రాన్సిషన్స్ (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // సభ్యత్వం యాక్టివేట్ చేయబడింది
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### చెల్లింపు హుక్స్ (Payment Hooks) {#payment-hooks}

#### చెల్లింపు పూర్తయిన / విఫలమైన (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // విజయవంతమైన చెల్లింపును నిర్వహించండి
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

### చెక్అవుట్ హుక్స్ (Checkout Hooks) {#checkout-hooks}

#### ప్రాసెసింగ్ చేయడానికి ముందు / పూర్తి అయిన తర్వాత (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // ప్రాసెసింగ్ చేయడానికి ముందు కార్ట్‌ను ధృవీకరించండి లేదా మార్చండి
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // కన్వర్షన్‌ను ట్రాక్ చేయండి, నోటిఫికేషన్‌లు పంపండి, మొదలైనవి.
}, 10, 3);
```

### డొమైన్ హుక్స్ (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN లేదా DNS కాన్ఫిగరేషన్‌ను అప్‌డేట్ చేయండి
});

add_action('wu_domain_ssl_verified', function($domain) {
    // డొమైన్ కోసం SSL సర్టిఫికేట్ ధృవీకరించబడింది
});
```

## ఫిల్టర్ హుక్స్ (Filter Hooks) {#filter-hooks}

### ధర నిర్ణయ ఫిల్టర్లు (Pricing Filters) {#pricing-filters}

#### కార్ట్ మొత్తం (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP డిస్కౌంట్
    }

    return $total;
}, 10, 2);
```

#### పన్ను రేట్లు (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### టెంప్లేట్ ఫిల్టర్లు (Template Filters) {#template-filters}

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

### పరిమితి ఫిల్టర్లు (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // దీర్ఘకాలిక కస్టమర్ల కోసం అదనంగా 500MB
    }

    return $limit;
}, 10, 3);
```

### గేట్‌వే ఫిల్టర్లు (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### చెక్అవుట్ ఫారమ్ ఫీల్డ్‌లు (Checkout Form Fields) {#checkout-form-fields}

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

### ఇమెయిల్ కంటెంట్ (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
