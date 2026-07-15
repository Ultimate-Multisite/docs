---
title: የመንጠቆዎች አጠቃቀም መመሪያ
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# የHooks አጠቃቀም መመሪያ

Ultimate Multisite ከ200 በላይ action hooks እና ከ280 በላይ filter hooks አሉት። ይህ ገጽ በጣም በተደጋጋሚ ጥቅም ላይ የሚውሉ hooks ምሳሌዎችን በመስጠት ይሸፍናል። ሙሉ በሙሉ በራስ-የተፈጠረ ማጣቀሻ (reference) የሚያስፈልግ ከሆነ፣ በዚህ ክፍል ውስጥ ያሉትን ሌሎች ገጾች ይመልከቱ።

## የድርጊት Hooks (Action Hooks) {#action-hooks}

### የደንበኛ የህይወት ዑደት (Customer Lifecycle) {#customer-lifecycle}

#### ከተጠቃሚ መረጃ በኋላ መፍጠር (After Customer Creation) {#after-customer-creation}

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

#### የደንበኛ ሁኔታ ለውጥ (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // የሁኔታ ለውጥን መከታተል
}, 10, 3);
```

### የጣቢያ Hooks (Site Hooks) {#site-hooks}

#### ጣቢያው ከተሰራ በኋላ (After Site Published) {#after-site-published}

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

#### የቴምፕሌት መተግበሪያ ከመሆኑ በፊት (Before Template Application) {#before-template-application}

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

### የአባልነት Hooks (Membership Hooks) {#membership-hooks}

#### የሁኔታ ሽግግሮች (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // የአባልነት መረጃው ሲንቀሳቀስ
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### የክፍያ Hooks (Payment Hooks) {#payment-hooks}

#### ክፍያ ሲጠናቀቅ / ሲሳሳት (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // ስኬታማ ክፍያ ሲፈጸም
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

### የቼክአው Hooks (Checkout Hooks) {#checkout-hooks}

#### ከመስራት በፊት / ከተጠናቀቀ በኋላ (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // ከመስራት በፊት ጋሪውን ማረጋገጥ ወይም ማስተካከል
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // የሽግግር መጠን መከታተል፣ ማሳወቂያ መላክ ወዘተ.
}, 10, 3);
```

### የዶሜን Hooks (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN ወይም DNS ቅንብር ማዘመን
});

add_action('wu_domain_ssl_verified', function($domain) {
    // ለዶሜኑ SSL ሰርተፍኬት መረጋገጡ
});
```

## የFilter Hooks (Filter Hooks) {#filter-hooks}

### የዋጋ መለያዎች (Pricing Filters) {#pricing-filters}

#### የጋሪ ጠቅላላ ዋጋ (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // 10% VIP ቅናሽ
    }

    return $total;
}, 10, 2);
```

#### የግብር መጠን (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### የቴምፕሌት ማጣሪያዎች (Template Filters) {#template-filters}

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

### ገደብ ማጣሪያዎች (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // ለረጅም ጊዜ ደንበኞች ተጨማሪ 500MB
    }

    return $limit;
}, 10, 3);
```

### የጌትዌይ ማጣሪያዎች (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### የቼክአው ቅጽ መስኮት ክፍሎች (Checkout Form Fields) {#checkout-form-fields}

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

### የኢሜይል ይዘት (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
