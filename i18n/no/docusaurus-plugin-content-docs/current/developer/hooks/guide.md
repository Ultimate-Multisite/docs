---
title: Bruksveiledning for Hooks
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Veiledning for bruk av hooks

Ultimate Multisite tilbyr over 200 action hooks og over 280 filter hooks. Denne siden dekker de hooks som brukes oftest, med praktiske eksempler. For en komplett, automatisk generert referanse, se på de andre sidene i dette avsnittet.

## Action Hooks {#action-hooks}

### Customer Lifecycle (Kundens livssyklus) {#customer-lifecycle}

#### After Customer Creation (Etter opprettelse av kunde) {#after-customer-creation}

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

#### Customer Status Change (Endring av kundestatus) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Reager på statusoverganger
}, 10, 3);
```

### Site Hooks (Nettsteds-hooks) {#site-hooks}

#### After Site Published (Etter at nettstedet er publisert) {#after-site-published}

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

#### Before Template Application (Før mal brukes) {#before-template-application}

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

### Membership Hooks (Medlemskaps-hooks) {#membership-hooks}

#### Status Transitions (Statusoverganger) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Medlemskap aktivert
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Payment Hooks (Betalings-hooks) {#payment-hooks}

#### Payment Completed / Failed (Betaling fullført / mislykket) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // Håndter vellykket betaling
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

### Checkout Hooks (Kasse-hooks) {#checkout-hooks}

#### Before Processing / After Completion (Før behandling / Etter fullføring) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Valider eller modifiser handlekurven før behandling
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Spor konvertering, send varsler, osv.
}, 10, 3);
```

### Domain Hooks (Domene-hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // Oppdater CDN eller DNS-konfigurasjon
});

add_action('wu_domain_ssl_verified', function($domain) {
    // SSL-sertifikat verifisert for domenet
});
```

## Filter Hooks (Filter-hooks) {#filter-hooks}

### Pricing Filters (Prisfilter) {#pricing-filters}

#### Cart Total (Handlekurvtotal) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP-rabatt
    }

    return $total;
}, 10, 2);
```

#### Tax Rates (Skatterater) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Template Filters (Malfilter) {#template-filters}

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

### Limitation Filters (Begrensningsfiltre) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Ekstra 500MB for langsiktige kunder
    }

    return $limit;
}, 10, 3);
```

### Gateway Filters (Betalingsgateway-filtre) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Fields (Kasseformfelt) {#checkout-form-fields}

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

### Email Content (E-postinnhold) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
