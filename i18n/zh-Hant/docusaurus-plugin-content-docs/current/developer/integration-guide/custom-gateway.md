---
title: 自訂閘道開發
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# 自訂支付閘道開發

您可以透過擴充 `Base_Gateway` 類別來建立自訂的支付閘道。

## 閘道類別

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

## 註冊閘道

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 主要方法

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | 處理一次性付款 |
| `process_signup()` | 設定定期訂閱 |
| `process_refund()` | 處理退款請求 |
| `get_payment_methods()` | 返回客戶儲存的付款方式 |

## 提示

- 失敗時務必回傳 `WP_Error`，這樣 Ultimate Multisite 才能處理錯誤顯示。
- 設定 `$this->supports` 來宣告您的閘道支援哪些付款類型（例如：`one-time`、`recurring`）。
- 使用 `wu_log_add()` 進行閘道特定的日誌記錄。
