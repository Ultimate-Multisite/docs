---
title: Hooks အသုံးပြုမှု လမ်းညွှန်
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hooks အသုံးပြုပုံ လမ်းညွှန် {#hooks-usage-guide}

Ultimate Multisite မှာ action hooks ၂၀၀ ကျော်နဲ့ filter hooks ၂၈၀ ကျော် ရှိပါတယ်။ ဒီစာမျက်နှာမှာ အသုံးအများဆုံး hooks တွေကို လက်တွေ့ကျတဲ့ ဥပမာတွေနဲ့ ရှင်းပြထားပါတယ်။ အပြည့်အစုံ အလိုအလျောက် ထုတ်ပေးထားတဲ့ ကိုးကားစာအုပ်ကို ကြည့်ချင်ရင် ဒီအပိုင်းက တခြားစာမျက်နှာတွေကို ကြည့်ရှုနိုင်ပါတယ်။

## Action Hooks {#action-hooks}

### Customer ဘဝသံသရာ (Customer Lifecycle) {#customer-lifecycle}

#### Customer အသစ် ဖန်တီးပြီးနောက် {#after-customer-creation}

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

#### Customer အဆင့်အပြောင်းအလဲ {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // အဆင့်အပြောင်းအလဲတွေကို တုံ့ပြန်ပါ
}, 10, 3);
```

### Site အတွက် Hooks များ (Site Hooks) {#site-hooks}

#### Site ကို ထုတ်ဝေပြီးနောက် {#after-site-published}

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

#### Template အသုံးမပြုမီ {#before-template-application}

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

### Membership Hooks များ {#membership-hooks}

#### အဆင့်အပြောင်းအလဲများ {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Membership ကို အသက်သွင်းပါ
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### ငွေပေးချေမှု Hooks များ (Payment Hooks) {#payment-hooks}

#### ငွေပေးချေမှု ပြီးမြောက်ခြင်း / ပျက်ကွက်ခြင်း {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // အောင်မြင်တဲ့ ငွေပေးချေမှုကို ကိုင်တွယ်ပါ
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

### Checkout Hooks များ {#checkout-hooks}

#### လုပ်ဆောင်မှု မပြုမီ / ပြီးမြောက်ပြီးနောက် {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // လုပ်ဆောင်မှု မပြုမီ ကားတွဲကို စစ်ဆေးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်း
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Conversion ကို စောင့်ကြည့်ခြင်း၊ အကြောင်းကြားစာများ ပေးပို့ခြင်း စသည်တို့ကို လုပ်ဆောင်ပါ
}, 10, 3);
```

### Domain Hooks များ {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN သို့မဟုတ် DNS configuration ကို အပ်ဒိတ်လုပ်ပါ
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Domain အတွက် SSL certificate ကို စစ်ဆေးပြီးပါပြီ
});
```

## Filter Hooks များ {#filter-hooks}

### ဈေးနှုန်းသတ်မှတ်မှု Filter များ (Pricing Filters) {#pricing-filters}

#### ကားတွဲ စုစုပေါင်း (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP discount
    }

    return $total;
}, 10, 2);
```

#### အခွန်နှုန်းထားများ (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filter များ {#template-filters}

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

### ကန့်သတ်ချက် Filter များ (Limitation Filters) {#limitation-filters}

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

### Gateway Filter များ {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form နေရာများ {#checkout-form-fields}

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

### အီးမေးလ် အကြောင်းအရာ (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
