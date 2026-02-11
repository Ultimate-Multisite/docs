---
title: 맞춤형 게이트웨이 개발
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# 맞춤형 게이트웨이 개발

## 게이트웨이 클래스

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

## 게이트웨이 등록

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 핵심 메서드

| 메서드 | 목적 |
|--------|---------|
| `process_single_payment()` | 일회성 결제 처리 |
| `process_signup()` | 정기 구독 설정 |
| `process_refund()` | 환불 요청 처리 |
| `get_payment_methods()` | 고객의 저장된 결제 수단 반환 |

## 팁

- 실패 시 항상 `WP_Error`를 반환하여 Ultimate Multisite가 오류 표시를 처리하도록 합니다
- `$this->supports`를 설정하여 게이트웨이가 처리하는 결제 유형(`one-time`, `recurring`)을 선언합니다
- `wu_log_add()`를 사용하여 게이트웨이 전용 로깅을 수행합니다
