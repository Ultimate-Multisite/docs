---
title: カスタムゲートウェイ開発
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# カスタムゲートウェイ開発

`Base_Gateway` クラスを拡張することで、カスタム決済ゲートウェイを作成できます。

## ゲートウェイクラス

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

## ゲートウェイの登録

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 主なメソッド

| Method | 目的 |
|--------|------|
| `process_single_payment()` | ワンタイム決済を処理します |
| `process_signup()` | 定期購読を設定します |
| `process_refund()` | 返金リクエストを処理します |
| `get_payment_methods()` | 顧客の保存済み決済方法を返します |

## ヒント

- 失敗時は必ず `WP_Error` を返し、Ultimate Multisite がエラー表示を処理できるようにしてください
- `$this->supports` を設定して、ゲートウェイが対応する決済タイプ（`one-time`、`recurring`）を宣言してください
- `wu_log_add()` を使用してゲートウェイ固有のログを記録してください
