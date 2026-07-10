---
title: 統合ガイド
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# 統合ガイド {#integration-guide}

このガイドでは、外部サービスへの接続、カスタム決済ゲートウェイの構築、webhook の処理など、Ultimate Multisite との一般的な統合パターンを扱います。

分離されたテナント基盤については、主権型テナントの初期構築、移行検証、SSO、破棄の手順を説明する [Multi-Tenancy Integration](./multi-tenancy) を参照してください。

## CRM 統合 {#crm-integration}

新しい顧客が登録したときに、顧客データを CRM に同期します。

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

## Analytics 統合 {#analytics-integration}

顧客ライフサイクル全体で重要なビジネスイベントを追跡します。

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

## 次のステップ {#next-steps}

- [カスタムゲートウェイ開発](./custom-gateway) — 独自の決済ゲートウェイを構築する
- [webhook の処理](./webhooks) — カスタム webhook エンドポイントを作成する
- [Multi-Tenancy Integration](./multi-tenancy) — 主権型テナントのライフサイクルフローと統合する
