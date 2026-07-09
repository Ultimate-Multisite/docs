---
title: 커스텀 게이트웨이 개발
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# 사용자 지정 Gateway 개발

`Base_Gateway` 클래스를 확장하여 사용자 지정 결제 gateway를 만들 수 있습니다.

## Gateway 클래스

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## Gateway 등록

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 주요 메서드

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | 일회성 결제 처리 |
| `process_signup()` | 반복 구독 설정 |
| `process_refund()` | 환불 요청 처리 |
| `get_payment_methods()` | 고객의 저장된 결제 수단 반환 |

## 반복 멤버십을 위한 갱신 자격 증명

Ultimate Multisite v2.13.0에서는 gateway 통합이 `auto_renew`가 저장되기 전에 반복 멤버십에 재사용 가능한 갱신 자격 증명이 있는지 보고할 수 있습니다. `wu_membership_has_renewal_credential`를 hook하고 다음을 반환하세요.

- 멤버십에 gateway 구독, 청구 계약, vault 토큰 또는 이에 상응하는 재사용 가능한 결제 수단이 있는 경우 `true`.
- gateway가 반복 자격 증명이 없거나 사용할 수 없음을 아는 경우 `false`.
- 참여하지 않고 기본 동작을 변경하지 않으려면 `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway가 `false`를 반환하면 Ultimate Multisite는 자동 갱신이 비활성화된 상태로 멤버십을 저장하고 누락된 자격 증명 표시를 저장합니다. `wu_membership_renewal_credential_missing`를 사용하여 관리자에게 알리거나, 재승인 흐름을 시작하거나, 지원 메모를 추가하세요.

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

새 재사용 가능 자격 증명이 저장된 후 gateway의 성공적인 재승인 흐름의 일부로 누락된 자격 증명 표시를 지우세요.

## 팁

- 실패 시 항상 `WP_Error`를 반환하여 Ultimate Multisite가 오류 표시를 처리할 수 있도록 하세요
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway별 로깅에는 `wu_log_add()`를 사용하세요

## AI 커넥터 provider 기능

AI 커넥터 기반 작업을 호출하는 사용자 지정 통합은 AI Provider for Anthropic Max v1.3.0에서 도입된 지원 OAuth provider 세트에 맞춰야 합니다.

| Provider | 기능 참고 사항 |
|---|---|
| **Anthropic Max** | 기존 OAuth Account 풀 워크플로를 지원합니다. 커넥터 요청을 프록시할 때 빈 도구 배열과 왕복 thinking signatures를 포함하여 Anthropic 도구 사용 payload를 보존하세요. |
| **OpenAI ChatGPT/Codex** | 커넥터 지원 작업을 위한 OAuth 풀 워크플로와 전체 도구 지원 동작을 지원합니다. Codex별 도구 metadata를 제거하지 말고 도구 정의와 도구 호출 결과를 그대로 전달하세요. |
| **Google AI Pro** | OAuth 풀 워크플로와 SDK 기반 provider 통합을 지원합니다. 요청을 라우팅하기 전에 OAuth 완료 후 provider Account를 새로 고치세요. |

Cursor Pro 통합 및 설정 경로는 제거되었습니다. Cursor Pro를 선택 가능한 provider로 등록하거나 사용자 지정 커넥터 UI에서 Cursor별 OAuth 지침을 표시하지 마세요.

샌드박스 또는 헤드리스 환경의 경우 관리자가 반환된 authorization 데이터를 붙여넣고 자동 브라우저 리디렉션에 의존하지 않고 Account 연결을 완료할 수 있도록 수동 OAuth 대체 경로를 노출하세요.
