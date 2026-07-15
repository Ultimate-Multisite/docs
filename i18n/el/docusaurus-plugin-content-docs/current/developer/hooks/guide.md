---
title: Οδηγός Χρήσης Hooks
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Οδηγός Χρήσης Hooks

Το Ultimate Multisite παρέχει πάνω από 200 action hooks και πάνω από 280 filter hooks. Αυτή η σελίδα καλύπτει τους πιο συχνά χρησιμοποιούμενους hooks με πρακτικά παραδείγματα. Για μια πλήρη αυτοματοποιημένη αναφορά, περιηγηθείτε στις άλλες σελίδες αυτής της ενότητας.

## Action Hooks {#action-hooks}

### Ζω周期 του Πελάτη {#customer-lifecycle}

#### Μετά τη Δημιουργία του Πελάτη {#after-customer-creation}

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

#### Αλλαγή Κατάστασης Πελάτη {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Αντίδραση στις μεταβάσεις κατάστασης
}, 10, 3);
```

### Hooks Εμβãiς {#site-hooks}

#### Μετά την Δημοσίευση της Εμβãiς {#after-site-published}

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

#### Πριν την Εφαρμογή του Εμπρότυπου {#before-template-application}

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

### Hooks Μητρησίας {#membership-hooks}

#### Μεταβάσεις Κατάστασης {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Η μητρησία ενεργοποιήθηκε
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Hooks Πληρωμής {#payment-hooks}

#### Ολοκληρωμένη / Αποτυχημένη Πληρωμή {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // Διαχείριση επιτυχημένης πληρωμής
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

### Hooks Ταμείου {#checkout-hooks}

#### Πριν την Επεξεργασία / Μετά την Ολοκλήρωση {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Επικύρωση ή τροποποίηση του καλαθιού πριν την επεξεργασία
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Παρακολούθηση μετατροπής, αποστολή ειδοποιήσεων κ.λπ.
}, 10, 3);
```

### Hooks Τομέα {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // Ενημέρωση της διαμόρφωσης CDN ή DNS
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Επαληθεύσεις πιστοποιητικό SSL για το τομέα
});
```

## Filter Hooks {#filter-hooks}

### Φίλτρα Τιμολόγησης {#pricing-filters}

#### Συνολικό Καλάθι {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // Έκπτωση 10% VIP
    }

    return $total;
}, 10, 2);
```

#### Βαθμοί Φόρου {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Φίλτρα Εμπρότυπων {#template-filters}

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

### Φίλτρα Περιορισμών {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Επιπλέον 500MB για πελάτες μακροπρόθεσμα
    }

    return $limit;
}, 10, 3);
```

### Φίλτρα Πύλης {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Πεδία Φόρμας Ταμείου {#checkout-form-fields}

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

### Περιεχόμενο Email {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
