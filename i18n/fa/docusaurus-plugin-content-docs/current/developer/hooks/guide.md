---
title: راهنمای استفاده از هوک‌ها
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# راهنمای استفاده از هوک‌ها

Ultimate Multisite بیش از ۲۰۰ هوک اکشن و ۲۸۰ هوک فیلتر ارائه می‌دهد. این صفحه به پوشش هوک‌های پرکاربردتر با مثال‌های عملی می‌پردازد. برای مرجع کامل و خودکار، صفحات دیگر این بخش را مرور کنید.

## هوک‌های اکشن (Action Hooks)

### چرخه عمر مشتری (Customer Lifecycle)

#### پس از ایجاد مشتری (After Customer Creation)

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

#### تغییر وضعیت مشتری (Customer Status Change)

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // واکنش به تغییر وضعیت
}, 10, 3);
```

### هوک‌های سایت (Site Hooks)

#### پس از انتشار سایت (After Site Published)

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

#### قبل از اعمال قالب (Before Template Application)

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

### هوک‌های عضویت (Membership Hooks)

#### تغییر وضعیت (Status Transitions)

```php
add_action('wu_membership_status_to_active', function($membership) {
    // فعال شدن عضویت
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### هوک‌های پرداخت (Payment Hooks)

#### تکمیل / ناموفق بودن پرداخت (Payment Completed / Failed)

```php
add_action('wu_payment_completed', function($payment) {
    // مدیریت پرداخت موفق
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

### هوک‌های تسویه حساب (Checkout Hooks)

#### قبل از پردازش / پس از تکمیل (Before Processing / After Completion)

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // اعتبارسنجی یا تغییر سبد خرید قبل از پردازش
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // ردیابی تبدیل، ارسال اعلان و غیره.
}, 10, 3);
```

### هوک‌های دامنه (Domain Hooks)

```php
add_action('wu_domain_mapped', function($domain) {
    // به‌روزرسانی پیکربندی CDN یا DNS
});

add_action('wu_domain_ssl_verified', function($domain) {
    // تأیید گواهی SSL برای دامنه
});
```

## هوک‌های فیلتر (Filter Hooks)

### فیلترهای قیمت‌گذاری (Pricing Filters)

#### کل سبد خرید (Cart Total)

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // تخفیف ۱۰٪ برای VIP
    }

    return $total;
}, 10, 2);
```

#### نرخ مالیات (Tax Rates)

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### فیلترهای قالب (Template Filters)

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

### فیلترهای محدودیت (Limitation Filters)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // ۵۰۰ مگابایت اضافی برای مشتریان بلندمدت
    }

    return $limit;
}, 10, 3);
```

### فیلترهای درگاه پرداخت (Gateway Filters)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### فیلدهای فرم تسویه حساب (Checkout Form Fields)

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

### محتوای ایمیل (Email Content)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
