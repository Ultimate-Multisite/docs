---
title: 통합 가이드
sidebar_position: 1
_i18n_hash: 411dce333e4af28fdf4c677df18e5a06
---
# 통합 가이드

이 가이드는 외부 서비스 연결, 사용자 지정 결제 게이트웨이 구축, 웹훅 처리 등 Ultimate Multisite와의 일반적인 통합 패턴을 다룹니다.

격리된 테넌트 인프라의 경우, 주권형 테넌트 부트스트랩, 마이그레이션 검증, SSO, 해체 지침은 [멀티테넌시 통합](./multi-tenancy)을 참조하세요.

## CRM 통합

새 고객이 가입할 때 고객 데이터를 CRM에 동기화하세요:

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

고객 생애주기 전반의 주요 비즈니스 이벤트를 추적하세요:

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

- [사용자 지정 게이트웨이 개발](./custom-gateway) — 자체 결제 게이트웨이를 구축하세요
- [웹훅 처리](./webhooks) — 사용자 지정 웹훅 엔드포인트를 만드세요
- [멀티테넌시 통합](./multi-tenancy) — 주권형 테넌트 생애주기 흐름과 통합하세요
