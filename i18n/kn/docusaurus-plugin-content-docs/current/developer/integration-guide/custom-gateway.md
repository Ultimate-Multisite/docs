---
title: ಕಸ್ಟಮ್ ಗೇಟ್‌ವೇ ಅಭಿವೃದ್ಧಿ
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# ಕಸ್ಟಮ್ ಗೇಟ್‌ವೇ ಅಭಿವೃದ್ಧಿ

ನೀವು `Base_Gateway` ಕ್ಲಾಸ್ ಅನ್ನು ವಿಸ್ತರಿಸುವ ಮೂಲಕ ಕಸ್ಟಮ್ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ರಚಿಸಬಹುದು.

## ಗೇಟ್‌ವೇ ಕ್ಲಾಸ್ (Gateway Class)

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

## ಗೇಟ್‌ವೇ ಅನ್ನು ನೋಂದಾಯಿಸುವುದು (Register the Gateway)

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ಪ್ರಮುಖ ವಿಧಾನಗಳು (Key Methods)

| Method | ಉದ್ದೇಶ (Purpose) |
|--------|---------|
| `process_single_payment()` | ಏಕಕಾಲಿಕ ಪಾವತಿಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು (Handle one-time payments) |
| `process_signup()` | ಪುನರಾವರ್ತಿತ ಚಂದಾದಾರಿಕೆಗಳನ್ನು (recurring subscriptions) ಹೊಂದಿಸುವುದು |
| `process_refund()` | ವಾಪಸ್ ಹಣದ ವಿನಂತಿಯನ್ನು (refund requests) ನಿರ್ವಹಿಸುವುದು |
| `get_payment_methods()` | ಗ್ರಾಹಕರಿಗಾಗಿ ಉಳಿಸಿದ ಪಾವತಿ ವಿಧಾನಗಳನ್ನು (saved payment methods) ಮರಳಿ ನೀಡುವುದು |

## ಸಲಹೆಗಳು (Tips)

- ವಿಫಲವಾದರೆ ಯಾವಾಗಲೂ `WP_Error` ಅನ್ನು ಮರಳಿ ನೀಡಿ, ಇದರಿಂದ Ultimate Multisite ಗೆ ಎರೆರ್ror ಪ್ರದರ್ಶನವನ್ನು (error display) ನಿರ್ವಹಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
- ನಿಮ್ಮ ಗೇಟ್‌ವೇ ಯಾವ ರೀತಿಯ ಪಾವತಿಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ ಎಂದು ಘೋಷಿಸಲು `$this->supports` ಅನ್ನು ಹೊಂದಿಸಿ (`one-time`, `recurring`).
- ಗೇಟ್‌ವೇಗೆ ನಿರ್ದಿಷ್ಟವಾದ ಲಾಗಿಂಗ್‌ಗಾಗಿ `wu_log_add()` ಅನ್ನು ಬಳಸಿ.
