---
title: Пагляднік па ўжыванні хукаў
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Пагляд выкарыстання гэтыхкаў

Ultimate Multisite прапануе больш за 200 акцыйных гэтыкаў і больш за 280 фільтрацыйных гэтыкаў. Гэтая старонка ахоплівае найчарэй выкарыстоўваныя гэтыкі з практычнымі прыкладам. Для паўнавартасных аўтаматычна згенерававаных рэцэнтаў паглядзіце іншыя старонкі ў гэтай секцыі.

## Акцыйныя гэтыкі (Action Hooks)

### Жыцдарбы страўніка (Customer Lifecycle)

#### Пасля стварэння страўніка

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

#### Змяненне статусу страўніка

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Реагаванне на пераходы статусу
}, 10, 3);
```

### Гэтыкі сайта (Site Hooks)

#### Пасля публікацыі сайта

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

#### Педыставя пакінування шаблону

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

### Гэтыкі Членства (Membership Hooks)

#### Пераходы статусу

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Членства актывавана
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Гэтыкі Плацёжаў (Payment Hooks)

#### Аплатамнасць забіта / Неуможна

```php
add_action('wu_payment_completed', function($payment) {
    // Апрацоўка паспяховага плацёжу
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

### Гэтыкі Карыквання (Checkout Hooks)

#### Педыставя апрацоўкі / Пасля завяршэння

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Пракёрстка або змяненне карыквання перад апрацоўкай
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Адлік канверсіі, адпраўка паведамленняў і г.д.
}, 10, 3);
```

### Гэтыкі Доменаў (Domain Hooks)

```php
add_action('wu_domain_mapped', function($domain) {
    // Актуалізацыя CDN або DNS канфігурацыі
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Сертыфікат SSL правераны для домена
});
```

## Фільтрацыйныя гэтыкі (Filter Hooks)

### Фільтры Цэнаўтварэння (Pricing Filters)

#### Паганая карыквання (Cart Total)

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP зніжка
    }

    return $total;
}, 10, 2);
```

#### Стаўкі падатку (Tax Rates)

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Фільтры Шаблонаў (Template Filters)

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

### Фільтры Абмежаванняў (Limitation Filters)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Дадатковыя 500MB для доўгатэрміновых кліентаў
    }

    return $limit;
}, 10, 3);
```

### Фільтры Варот (Gateway Filters)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Паляў формы карыквання (Checkout Form Fields)

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

### Змест электроннай пашты (Email Content)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
