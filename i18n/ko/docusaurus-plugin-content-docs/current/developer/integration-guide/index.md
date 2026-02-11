---
title: 통합 가이드
sidebar_position: 1
_i18n_hash: 4196aeba91300afc6b4cecd78747deff
---
# 통합 가이드

이 가이드는 Ultimate Multisite와 함께 사용할 수 있는 일반적인 통합 패턴을 다루며, 외부 서비스 연결, 맞춤형 결제 게이트웨이 구축, 웹훅 처리 등을 포함합니다.

## CRM 통합

새 고객이 가입할 때 고객 데이터를 CRM에 동기화합니다:

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

## 분석 통합

고객 수명 주기 전반에 걸쳐 주요 비즈니스 이벤트를 추적합니다:

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

## 다음 단계

- [Custom Gateway Development](./custom-gateway) — 자신만의 결제 게이트웨이를 구축하세요
- [Webhook Handling](./webhooks) — 맞춤형 웹훅 엔드포인트를 만드세요
