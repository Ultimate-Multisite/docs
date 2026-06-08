---
title: കസ്റ്റം ഗേറ്റ്‌വേ ഡെവലപ്‌മെന്റ്
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# കസ്റ്റം ഗേറ്റ്‌വേ ഡെവലപ്‌മെന്റ്

`Base_Gateway` ക്ലാസ് എക്സ്റ്റൻഡ് ചെയ്ത് നിങ്ങൾക്ക് കസ്റ്റം പേയ്‌മെന്റ് ഗേറ്റ്‌വേകൾ ഉണ്ടാക്കാൻ കഴിയും.

## ഗേറ്റ്‌വേ ക്ലാസ്

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

## ഗേറ്റ്‌വേ രജിസ്റ്റർ ചെയ്യുക

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## പ്രധാന മെത്തേഡുകൾ

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | ഒറ്റത്തവണ പേയ്‌മെന്റുകൾ കൈകാര്യം ചെയ്യുക |
| `process_signup()` | ആവർത്തന സബ്‌സ്‌ക്രിപ്‌ഷനുകൾ സജ്ജമാക്കുക |
| `process_refund()` | റീഫണ്ട് അഭ്യർത്ഥനകൾ കൈകാര്യം ചെയ്യുക |
| `get_payment_methods()` | ഒരു ഉപഭോക്താവിനുള്ളിൽ സേവ് ചെയ്ത പേയ്‌മെന്റ് രീതികൾ തിരികെ നൽകുക |

## ടിപ്പുകൾ

- പരാജയപ്പെടുമ്പോൾ എപ്പോഴും `WP_Error` റിട്ടേൺ ചെയ്യുക. എങ്കിൽ മാത്രമേ Ultimate Multisiteക്ക് എറർ ഡിസ്‌പ്ലേ ചെയ്യാൻ കഴിയൂ.
- നിങ്ങളുടെ ഗേറ്റ്‌വേ ഏത് തരം പേയ്‌മെന്റുകൾ കൈകാര്യം ചെയ്യുന്നു എന്ന് പ്രഖ്യാപിക്കാൻ `$this->supports` സജ്ജമാക്കുക (`one-time`, `recurring`).
- ഗേറ്റ്‌വേയുമായി ബന്ധപ്പെട്ട ലോഗിംഗിനായി `wu_log_add()` ഉപയോഗിക്കുക.
