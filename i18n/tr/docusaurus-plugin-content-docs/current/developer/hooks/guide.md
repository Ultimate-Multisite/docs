---
title: Hook Kullanım Rehberi
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hook Kullanım Rehberi {#hooks-usage-guide}

Ultimate Multisite, 200'den fazla aksiyon hook'u ve 280'den fazla filtre hook'u sağlamaktadır. Bu sayfa, en sık kullanılan hook'ları pratik örneklerle ele almaktadır. Tam otomatik oluşturulmuş bir referans için, bu bölümdeki diğer sayfalara göz atabilirsiniz.

## Aksiyon Hook'ları {#action-hooks}

### Müşteri Yaşam Döngüsü {#customer-lifecycle}

#### Müşteri Oluşturulduktan Sonra {#after-customer-creation}

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

#### Müşteri Durumu Değiştiğinde {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Durum geçişlerine tepki vermek
}, 10, 3);
```

### Site Hook'ları {#site-hooks}

#### Site Yayınlandıktan Sonra {#after-site-published}

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

#### Şablon Uygulanmadan Önce {#before-template-application}

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

### Üyelik Hook'ları {#membership-hooks}

#### Durum Geçişleri {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Üyelik etkinleştirildi
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Ödeme Hook'ları {#payment-hooks}

#### Ödeme Tamamlandı / Başarısız Oldu {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // Başarılı ödemeyi işlemek
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

### Checkout Hook'ları {#checkout-hooks}

#### İşlenmeden Önce / Tamamlandıktan Sonra {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // İşlemden önce sepeti doğrulamak veya değiştirmek
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Dönüşümü izlemek, bildirim göndermek vb.
}, 10, 3);
```

### Alan Adı Hook'ları {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // CDN veya DNS yapılandırmasını güncellemek
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Alan adı için SSL sertifikası doğrulandı
});
```

## Filtre Hook'ları {#filter-hooks}

### Fiyatlandırma Filtreleri {#pricing-filters}

#### Sepet Toplamı {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // %10 VIP indirimi
    }

    return $total;
}, 10, 2);
```

#### Vergi Oranları {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Şablon Filtreleri {#template-filters}

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

### Sınırlama Filtreleri {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Uzun süreli müşteriler için ekstra 500MB
    }

    return $limit;
}, 10, 3);
```

### Ağ Geçidi Filtreleri {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Checkout Form Alanları {#checkout-form-fields}

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

### E-posta İçeriği {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
