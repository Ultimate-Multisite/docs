---
title: தனிப்பயன் நுழைவாயில் மேம்பாடு
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# தனிப்பயன் கேட்வே உருவாக்குதல்

`Base_Gateway` என்ற கிளாஸை நீட்டிப்பதன் மூலம் நீங்கள் தனிப்பயன் Payment Gateways-ஐ உருவாக்க முடியும்.

## கேட்வே கிளாஸ்

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

## கேட்வே-ஐப் பதிவு செய்தல்

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## முக்கிய முறைகள்

| Method | நோக்கம் |
|--------|---------|
| `process_single_payment()` | ஒரு முறை கட்டணங்களைக் கையாளுதல் |
| `process_signup()` | மீண்டும் மீண்டும் வரும் சந்தாக்களை அமைத்தல் |
| `process_refund()` | பணத்தைத் திரும்பப் பெறும் கோரிக்கைகளைக் கையாளுதல் |
| `get_payment_methods()` | ஒரு வாடிக்கையாளருக்கான சேமிக்கப்பட்ட Payment முறைகளைத் திரும்புதல் |

## குறிப்புகள்

- தோல்வியடையும்போது எப்போதும் `WP_Error`-ஐத் திருப்பியளிக்கவும். அப்போதுதான் Ultimate Multisite பிழை காட்சியை (error display) கையாள முடியும்.
- உங்கள் கேட்வே எந்தெந்த Payment வகைகளை கையாள்கிறது என்பதை அறிவிக்க, `$this->supports`-ஐ அமைக்கவும் (`one-time`, `recurring`).
- கேட்வே-க்குரிய லாகிங்கிற்காக `wu_log_add()` பயன்படுத்தவும்.
