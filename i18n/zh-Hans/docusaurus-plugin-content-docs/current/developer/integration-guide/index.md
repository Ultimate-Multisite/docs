---
title: 集成指南
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# 集成指南

本指南涵盖与 Ultimate Multisite 的常见集成模式，包括连接到外部服务、构建自定义支付网关，以及处理 webhooks。

对于隔离的租户基础设施，请参阅 [Multi-Tenancy 集成](./multi-tenancy)，了解主权租户启动、迁移验证、SSO 和拆除指导。

## CRM 集成

当新客户注册时，将客户数据同步到你的 CRM：

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

## Analytics 集成

跟踪整个客户生命周期中的关键业务事件：

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

- [自定义网关开发](./custom-gateway) — 构建你自己的支付网关
- [Webhook 处理](./webhooks) — 创建自定义 webhook endpoints
- [Multi-Tenancy 集成](./multi-tenancy) — 与主权租户生命周期流程集成
