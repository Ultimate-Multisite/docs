---
title: Hướng dẫn tích hợp
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# Hướng dẫn tích hợp

Hướng dẫn này bao gồm các mẫu tích hợp phổ biến với Ultimate Multisite, bao gồm kết nối với các dịch vụ bên ngoài, xây dựng cổng thanh toán tùy chỉnh và xử lý webhooks.

Đối với hạ tầng tenant biệt lập, xem [Tích hợp Multi-Tenancy](./multi-tenancy) để biết hướng dẫn bootstrap tenant có chủ quyền, xác minh migration, SSO và teardown.

## Tích hợp CRM

Đồng bộ dữ liệu khách hàng vào CRM của bạn khi khách hàng mới đăng ký:

```php
add_action('wu_customer_post_create', 'sync_customer_to_crm');

function sync_customer_to_crm($customer) {
    $crm_api = new Your_CRM_API();

    $crm_api->create_contact([
        'email' => $customer->get_email(),
        'name' => $customer->get_display_name(),
        'signup_date' => $customer->get_date_registered(),
        'plan' => $customer->get_membership()->get_plan()->get_name()
    ]);

    // Store CRM ID for future reference
    $customer->add_meta('crm_contact_id', $crm_api->get_last_contact_id());
}
```

## Tích hợp Analytics

Theo dõi các sự kiện kinh doanh quan trọng trong suốt vòng đời khách hàng:

```php
add_action('wu_checkout_completed', 'track_conversion', 10, 3);
add_action('wu_membership_status_to_cancelled', 'track_churn');
add_action('wu_payment_failed', 'track_payment_failure');

function track_conversion($payment, $customer, $membership) {
    // Google Analytics 4
    gtag('event', 'purchase', [
        'transaction_id' => $payment->get_id(),
        'value' => $payment->get_total(),
        'currency' => $payment->get_currency(),
        'items' => [
            [
                'item_id' => $membership->get_plan()->get_id(),
                'item_name' => $membership->get_plan()->get_name(),
                'category' => 'subscription',
                'quantity' => 1,
                'price' => $payment->get_total()
            ]
        ]
    ]);
}
```

## Các bước tiếp theo

- [Phát triển Custom Gateway](./custom-gateway) — Xây dựng cổng thanh toán của riêng bạn
- [Xử lý Webhook](./webhooks) — Tạo các endpoint webhook tùy chỉnh
- [Tích hợp Multi-Tenancy](./multi-tenancy) — Tích hợp với các luồng vòng đời tenant có chủ quyền
