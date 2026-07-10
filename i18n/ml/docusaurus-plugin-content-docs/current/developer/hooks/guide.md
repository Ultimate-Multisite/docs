---
title: Hooks ഉപയോഗത്തിനുള്ള മാർഗ്ഗരേഖ
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hooks ഉപയോഗ ഗൈഡ് {#hooks-usage-guide}

Ultimate Multisite-ൽ 200-ൽ അധികം ആക്ഷൻ Hooks-ഉം 280-ൽ അധികം ഫിൽട്ടർ Hooks-ഉം ലഭ്യമാണ്. ഏറ്റവും സാധാരണയായി ഉപയോഗിക്കുന്ന Hooks-കൾ പ്രായോഗിക ഉദാഹരണങ്ങളോടുകൂടി ഈ പേജിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്നു. പൂർണ്ണമായ ഓട്ടോ-ജനറേറ്റഡ് റഫറൻസിനായി, ഈ വിഭാഗത്തിലെ മറ്റ് പേജുകൾ പരിശോധിക്കുക.

## ആക്ഷൻ Hooks (Action Hooks) {#action-hooks}

### ഉപഭോക്തൃ ജീവിതചക്രം (Customer Lifecycle) {#customer-lifecycle}

#### ഉപഭോക്താവ് സൃഷ്ടിച്ചതിന് ശേഷം (After Customer Creation) {#after-customer-creation}

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

#### ഉപഭോക്തൃ സ്റ്റാറ്റസ് മാറ്റം (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // സ്റ്റാറ്റസ് മാറ്റങ്ങളോട് പ്രതികരിക്കുക
}, 10, 3);
```

### സൈറ്റ് Hooks (Site Hooks) {#site-hooks}

#### സൈറ്റ് പ്രസിദ്ധീകരിച്ചതിന് ശേഷം (After Site Published) {#after-site-published}

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

#### ടെംപ്ലേറ്റ് അപ്ലയി ചെയ്യുന്നതിന് മുമ്പ് (Before Template Application) {#before-template-application}

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

### മെമ്പർഷിപ്പ് Hooks (Membership Hooks) {#membership-hooks}

#### സ്റ്റാറ്റസ് ട്രാൻസിഷനുകൾ (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // മെമ്പർഷിപ്പ് സജീവമാക്കി
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### പേയ്‌മെന്റ് Hooks (Payment Hooks) {#payment-hooks}

#### പേയ്‌മെന്റ് പൂർത്തിയായതോ പരാജയപ്പെട്ടതോ (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // വിജയകരമായ പേയ്‌മെന്റ് കൈകാര്യം ചെയ്യുക
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

### ചെക്ക്ഔട്ട് Hooks (Checkout Hooks) {#checkout-hooks}

#### പ്രോസസ്സ് ചെയ്യുന്നതിന് മുമ്പ് / പൂർത്തിയാക്കിയ ശേഷം (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // പ്രോസസ്സ് ചെയ്യുന്നതിന് മുമ്പ് കാർട്ട് സാധൂകരിക്കുകയോ മാറ്റങ്ങൾ വരുത്തുകയോ ചെയ്യുക
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // കൺവേർഷൻ ട്രാക്ക് ചെയ്യുക, അറിയിപ്പുകൾ അയക്കുക, തുടങ്ങിയ കാര്യങ്ങൾ ചെയ്യുക
}, 10, 3);
```

### ഡൊമെയ്ൻ Hooks (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN അല്ലെങ്കിൽ DNS കോൺഫിഗറേഷൻ അപ്ഡേറ്റ് ചെയ്യുക
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ഡൊമെയ്‌നിന് SSL സർട്ടിഫിക്കറ്റ് പരിശോധിച്ചു
});
```

## ഫിൽട്ടർ Hooks (Filter Hooks) {#filter-hooks}

### വിലനിർണ്ണയ ഫിൽട്ടറുകൾ (Pricing Filters) {#pricing-filters}

#### കാർട്ട് ടോട്ടൽ (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP കിഴിവ്
    }

    return $total;
}, 10, 2);
```

#### ടാക്സ് നിരക്കുകൾ (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### ടെംപ്ലേറ്റ് ഫിൽട്ടറുകൾ (Template Filters) {#template-filters}

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

### പരിമിതി ഫിൽട്ടറുകൾ (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // ദീർഘകാല ഉപഭോക്താക്കൾക്ക് അധികമായി 500MB
    }

    return $limit;
}, 10, 3);
```

### ഗേറ്റ്‌വേ ഫിൽട്ടറുകൾ (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### ചെക്ക്ഔട്ട് ഫോം ഫീൽഡുകൾ (Checkout Form Fields) {#checkout-form-fields}

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

### ഇമെയിൽ ഉള്ളടക്കം (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
