---
title: 集成指南
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# 集成指南

本指南涵盖了与 Ultimate Multisite 的常见集成模式，包括连接外部服务、构建自定义支付网关以及处理 Webhook。

## CRM 集成

当新客户注册时，将客户数据同步到您的 CRM：

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

## 分析集成

跟踪客户生命周期中的关键业务事件：

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

## 下一步

- [Custom Gateway Development](./custom-gateway) — 构建您自己的支付网关
- [Webhook Handling](./webhooks) — 创建自定义 Webhook 端点
