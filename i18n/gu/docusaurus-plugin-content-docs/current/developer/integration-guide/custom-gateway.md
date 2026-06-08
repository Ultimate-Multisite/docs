---
title: કસ્ટમ ગેટવે ડેવલપમેન્ટ
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# કસ્ટમ ગેટવે ડેવલપમેન્ટ

તમે `Base_Gateway` ક્લાસને એક્સટેન્ડ કરીને કસ્ટમ પેમેન્ટ ગેટવે બનાવી શકો છો.

## ગેટવે ક્લાસ

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

## ગેટવે રજીસ્ટર કરવો

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## મુખ્ય મેથડ્સ

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | એક વખતની ચૂકવણીઓ (one-time payments) નું સંચાલન કરવું |
| `process_signup()` | પુનરાવર્તિત સબ્સ્ક્રિપ્શન્સ (recurring subscriptions) સેટ કરવી |
| `process_refund()` | રિફંડની વિનંતીઓ (refund requests) નું સંચાલન કરવું |
| `get_payment_methods()` | ગ્રાહક માટે સેવ કરેલી પેમેન્ટ પદ્ધતિઓ પાછી આપવી |

## ટિપ્સ

- Failure પર હંમેશા `WP_Error` પાછો આપો જેથી Ultimate Multisite એરર ડિસ્પ્લે (error display) નું સંચાલન કરી શકે.
- તમારું ગેટવે કયા પ્રકારની પેમેન્ટ્સ હેન્ડલ કરે છે તે જાહેર કરવા માટે `$this->supports` સેટ કરો (`one-time`, `recurring`).
- ગેટવે-વિશિષ્ટ લોગિંગ (logging) માટે `wu_log_add()` નો ઉપયોગ કરો.
