---
title: 整合指南
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# 整合指南 {#integration-guide}

本指南涵蓋 Ultimate Multisite 的常見整合模式，包括連接外部服務、建立自訂付款閘道，以及處理 webhooks。

如需隔離的租戶基礎架構，請參閱 [Multi-Tenancy 整合](./multi-tenancy)，以取得主權租戶啟動、遷移驗證、SSO 與拆除指南。

## CRM 整合 {#crm-integration}

當新客戶註冊時，將客戶資料同步到你的 CRM：

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

## 分析整合 {#analytics-integration}

追蹤整個客戶生命週期中的關鍵業務事件：

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

## 下一步 {#next-steps}

- [自訂閘道開發](./custom-gateway) — 建立你自己的付款閘道
- [Webhook 處理](./webhooks) — 建立自訂 webhook endpoints
- [Multi-Tenancy 整合](./multi-tenancy) — 與主權租戶生命週期流程整合
