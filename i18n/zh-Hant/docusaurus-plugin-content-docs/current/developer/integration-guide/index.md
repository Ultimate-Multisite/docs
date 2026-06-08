---
title: 整合指南
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# 整合指南

本指南涵蓋了 Ultimate Multisite 的常見整合模式，包括連接外部服務、建構自訂支付閘道，以及處理 Webhooks。

## CRM 整合

當有新客戶註冊時，將客戶資料同步到您的 CRM：

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

## 分析整合

追蹤客戶生命週期中的關鍵業務事件：

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

## 下一步驟

- [自訂閘道開發](./custom-gateway) — 建構您自己的支付閘道
- [Webhook 處理](./webhooks) — 建立自訂 Webhook 端點
