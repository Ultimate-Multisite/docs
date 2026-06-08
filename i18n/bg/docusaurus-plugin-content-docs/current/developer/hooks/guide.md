---
title: Ръководство за използване на Hooks
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Ръководство за използване на хукове

Ultimate Multisite предоставя над 200 действияни хукове и над 280 филтърни хукове. Тази страница покрива най-често използваните хукове с практически примери. За пълно автоматично генерирано ръководство, прегледайте другите страници в този раздел.

## Действени хукове (Action Hooks)

### Жизнен цикъл на клиента

#### След създаване на клиента

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

#### Промяна на статуса на клиента

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Реагирайте на преминаването на статуса
}, 10, 3);
```

### Хукове за сайтове

#### След публикуване на сайта

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

#### Преди прилагане на шаблон

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

### Хукове за членство

#### Преминаване на статуси

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Членството е активирано
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Хукове за плащания

#### Плащане завършено / неуспешно

```php
add_action('wu_payment_completed', function($payment) {
    // Обработка на успешно плащане
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

### Хукове за процеса на плащане (Checkout Hooks)

#### Преди обработка / След завършване

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Валидирайте или модифицирайте количката преди обработка
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Проследяване на конверсии, изпращане на известия и др.
}, 10, 3);
```

### Хукове за домейни

```php
add_action('wu_domain_mapped', function($domain) {
    // Актуализирайте CDN или DNS конфигурацията
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL сертификатът е верифициран за домейните
});
```

## Филтърни хукове (Filter Hooks)

### Филтъри за ценообразуване

#### Обща стойност на количката

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP отстъпка
    }

    return $total;
}, 10, 2);
```

#### Стамерни ставки

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Филтъри за шаблони

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

### Филтъри за ограничения

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Допълнителни 500MB за дългосрочни клиенти
    }

    return $limit;
}, 10, 3);
```

### Филтъри за платежни шлюзове (Gateway Filters)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Полета на формуляра за процеса на плащане

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

### Съдържание на имейла

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
