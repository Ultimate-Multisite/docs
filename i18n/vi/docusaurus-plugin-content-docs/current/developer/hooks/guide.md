---
title: Hướng dẫn sử dụng Hooks
sidebar_position: 1
_i18n_hash: 6da56fd5e6cd83c2056ce9cb7fbb4453
---
# Hướng dẫn sử dụng Hooks

Ultimate Multisite cung cấp hơn 200 action hooks và 280 filter hooks. Trang này tổng hợp các hooks được sử dụng phổ biến nhất kèm theo các ví dụ thực tế. Để xem tài liệu tham khảo đầy đủ, bạn hãy duyệt qua các trang khác trong mục này.

## Action Hooks {#action-hooks}

### Vòng đời khách hàng (Customer Lifecycle) {#customer-lifecycle}

#### Sau khi tạo khách hàng (After Customer Creation) {#after-customer-creation}

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

#### Thay đổi trạng thái khách hàng (Customer Status Change) {#customer-status-change}

```php
/**
 * @param WP_Ultimo\Models\Customer $customer
 * @param string $old_status
 * @param string $new_status
 */
add_action('wu_customer_status_change', function($customer, $old_status, $new_status) {
    // Phản ứng với các thay đổi trạng thái
}, 10, 3);
```

### Hooks cấp độ Website (Site Hooks) {#site-hooks}

#### Sau khi trang web được xuất bản (After Site Published) {#after-site-published}

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

#### Trước khi áp dụng template (Before Template Application) {#before-template-application}

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

### Hooks Tư cách thành viên (Membership Hooks) {#membership-hooks}

#### Chuyển đổi trạng thái (Status Transitions) {#status-transitions}

```php
add_action('wu_membership_status_to_active', function($membership) {
    // Thành viên được kích hoạt
});

add_action('wu_membership_status_to_expired', function($membership) {
    $sites = $membership->get_sites();
    foreach ($sites as $site) {
        $site->set_status('suspended');
        $site->save();
    }
});
```

### Hooks Thanh toán (Payment Hooks) {#payment-hooks}

#### Thanh toán hoàn tất / Thất bại (Payment Completed / Failed) {#payment-completed--failed}

```php
add_action('wu_payment_completed', function($payment) {
    // Xử lý thanh toán thành công
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

### Hooks Thanh toán (Checkout Hooks) {#checkout-hooks}

#### Trước khi xử lý / Sau khi hoàn tất (Before Processing / After Completion) {#before-processing--after-completion}

```php
/**
 * @param WP_Ultimo\Checkout\Cart $cart
 */
add_action('wu_checkout_before_processing', function($cart) {
    // Xác thực hoặc sửa đổi giỏ hàng trước khi xử lý
});

/**
 * @param WP_Ultimo\Models\Payment $payment
 * @param WP_Ultimo\Models\Customer $customer
 * @param WP_Ultimo\Models\Membership $membership
 */
add_action('wu_checkout_completed', function($payment, $customer, $membership) {
    // Theo dõi chuyển đổi, gửi thông báo, v.v.
}, 10, 3);
```

### Hooks Tên miền (Domain Hooks) {#domain-hooks}

```php
add_action('wu_domain_mapped', function($domain) {
    // Cập nhật cấu hình CDN hoặc DNS
});

add_action('wu_domain_ssl_verified', function($domain) {
    // Chứng chỉ SSL đã được xác minh cho tên miền
});
```

## Filter Hooks {#filter-hooks}

### Bộ lọc Giá cả (Pricing Filters) {#pricing-filters}

#### Tổng giỏ hàng (Cart Total) {#cart-total}

```php
add_filter('wu_cart_total', function($total, $cart) {
    $customer = $cart->get_customer();

    if ($customer && $customer->is_vip()) {
        $total = $total * 0.9; // Giảm giá 10% cho VIP
    }

    return $total;
}, 10, 2);
```

#### Thuế suất (Tax Rates) {#tax-rates}

```php
add_filter('wu_tax_rate', function($rate, $country, $state) {
    if ($country === 'US' && $state === 'CA') {
        return 0.0875;
    }

    return $rate;
}, 10, 3);
```

### Bộ lọc Template (Template Filters) {#template-filters}

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

### Bộ lọc Giới hạn (Limitation Filters) {#limitation-filters}

```php
add_filter('wu_limitation_feature_allowed', function($allowed, $site_id, $membership) {
    if ($membership->get_customer()->is_vip()) {
        return true;
    }

    return $allowed;
}, 10, 3);

add_filter('wu_disk_space_limit', function($limit, $site_id, $membership) {
    if ($membership->get_days_active() > 365) {
        $limit += 500; // Thêm 500MB cho khách hàng lâu năm
    }

    return $limit;
}, 10, 3);
```

### Bộ lọc Cổng thanh toán (Gateway Filters) {#gateway-filters}

```php
add_filter('wu_available_gateways', function($gateways, $cart) {
    if ($cart->get_total() > 1000) {
        unset($gateways['paypal']);
    }

    return $gateways;
}, 10, 2);
```

### Trường biểu mẫu Thanh toán (Checkout Form Fields) {#checkout-form-fields}

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

### Nội dung Email (Email Content) {#email-content}

```php
add_filter('wu_email_content', function($content, $type, $customer) {
    if ($type === 'welcome') {
        $content .= "\n\nSpecial offer: Use code WELCOME10 for 10% off!";
    }
    return $content;
}, 10, 3);
```
