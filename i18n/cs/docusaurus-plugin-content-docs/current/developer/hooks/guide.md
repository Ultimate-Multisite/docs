---
title: Průvodce použitím hooků
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Průvodce použitím hooků

Ultimate Multisite poskytuje více než 200 akčních hooků a více než 280 filtračních hooků. Tato stránka pokrývá nejpoužívanější hooky s praktickými příklady. Pro kompletní automaticky vygenerovaný seznam se podívejte na ostatní stránky v této sekci.

## Akční hooky (Action Hooks)

### Životní cyklus zákazníka

#### Po vytvoření zákazníka

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

#### Změna stavu zákazníka

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Reagování na změny stavu
}, 10, 3);
```

### Hooky pro stránky (Site Hooks)

#### Po publikaci stránky

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

#### Před aplikací šablony

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

### Hooky pro členství (Membership Hooks)

#### Přechody stavů

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Členství aktivováno
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Hooky pro platby (Payment Hooks)

#### Úspěšná / Selhání platby

```php
add_action('wu_payment_completed', function($payment) {
    // Zpracování úspěšné platby
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

### Hooky pro pokladnu (Checkout Hooks)

#### Před zpracováním / Po dokončení

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Validace nebo modifikace košíku před zpracováním
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Sledování konverzí, odesílání oznámení atd.
}, 10, 3);
```

### Hooky pro domény (Domain Hooks)

```php
add_action('wu_domain_mapped', function($domain) {
    // Aktualizace konfigurace CDN nebo DNS
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL certifikát ověřený pro doménu
});
```

## Filtrační hooky (Filter Hooks)

### Filtry cenotvorby (Pricing Filters)

#### Celkový součet košíku (Cart Total)

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP sleva
    }

    return $total;
}, 10, 2);
```

#### Danní sazby (Tax Rates)

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Filtry šablon (Template Filters)

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

### Filtry omezení (Limitation Filters)

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Extra 500MB pro dlouhodobé zákazníky
    }

    return $limit;
}, 10, 3);
```

### Filtry brány (Gateway Filters)

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Pole formuláře pokladny (Checkout Form Fields)

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

### Obsah e-mailu (Email Content)

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
