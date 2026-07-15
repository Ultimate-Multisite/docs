---
title: Hooks کے استعمال کی گائیڈ
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# ہکس کا استعمال کرنے کی رہنمائی

Ultimate Multisite 200 سے زیادہ ایکشن ہکس (action hooks) اور 280 سے زیادہ فلٹر ہکس (filter hooks) فراہم کرتا ہے۔ یہ صفحہ سب سے زیادہ استعمال ہونے والے ہکس کو عملی مثالوں کے ساتھ کور کرتا ہے۔ مکمل خودکار طور پر تیار کردہ حوالہ کے لیے، اس سیکشن کے دیگر صفحات دیکھیں۔

## ایکشن ہکس (Action Hooks) {#action-hooks}

### کسٹمر کی زندگی کا چکر (Customer Lifecycle) {#customer-lifecycle}

#### کسٹمر بننے کے بعد (After Customer Creation) {#after-customer-creation}

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

#### کسٹمر اسٹیٹس میں تبدیلی (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // اسٹیٹس میں تبدیلی پر ردعمل ظاہر کریں
}, 10, 3);
```

### سائٹ ہکس (Site Hooks) {#site-hooks}

#### سائٹ کے پبلش ہونے کے بعد (After Site Published) {#after-site-published}

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

#### ٹیمپلیٹ لگانے سے پہلے (Before Template Application) {#before-template-application}

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

### ممبرشپ ہکس (Membership Hooks) {#membership-hooks}

#### اسٹیٹس کی منتقلی (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // ممبرشپ فعال ہو گئی ہے
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### ادائیگی کے ہکس (Payment Hooks) {#payment-hooks}

#### ادائیگی مکمل / ناکام (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // کامیاب ادائیگی کو ہینڈل کریں
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

### چیک آؤٹ ہکس (Checkout Hooks) {#checkout-hooks}

#### پروسیسنگ سے پہلے / مکمل ہونے کے بعد (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // پروسیسنگ سے پہلے کارٹ کو ویلیڈیٹ یا تبدیل کریں
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // کنورژن ٹریک کریں، نوٹیفیکیشن بھیجیں، وغیرہ
}, 10, 3);
```

### ڈومین ہکس (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN یا DNS کی ترتیب کو اپ ڈیٹ کریں
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ڈومین کے لیے SSL سرٹیفکیٹ کی تصدیق ہو گئی ہے
});
```

## فلٹر ہکس (Filter Hooks) {#filter-hooks}

### پرائسنگ فلٹرز (Pricing Filters) {#pricing-filters}

#### کارٹ کا کل (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP چھوٹ
    }

    return $total;
}, 10, 2);
```

#### ٹیکس ریٹس (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### ٹیمپلیٹ فلٹرز (Template Filters) {#template-filters}

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

### محدودیت فلٹرز (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // طویل مدتی صارفین کے لیے اضافی 500MB
    }

    return $limit;
}, 10, 3);
```

### گیٹ وے فلٹرز (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### چیک آؤٹ فارم کے فیلڈز (Checkout Form Fields) {#checkout-form-fields}

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

### ای میل مواد (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
