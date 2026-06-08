---
title: የተበጀ መገናኛ ልማት
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# የራሱ የሆነ የክፍያ መግቢያ (Custom Gateway) ልማት

የክፍያ መግቢያዎችን (payment gateways) በ`Base_Gateway` ክፍልን በማስፋት (extending) የራሳቸውን መፍጠር ይችላሉ።

## የክፍያ መግቢያ ክፍል (Gateway Class)

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

## የክፍያ መግቢያን መመዝገብ (Register the Gateway)

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ቁልፍ ተግባራት (Key Methods)

| Method | ዓላማ (Purpose) |
|--------|---------|
| `process_single_payment()` | ለአንድ ጊዜ የሚደረጉ ክፍያዎችን ይቆጣጠራል |
| `process_signup()` | ተደጋጋሚ የደንበኝነት ምዝገባዎችን ያዘጋጃል |
| `process_refund()` | የገንዘብ ተመላሽ ጥያቄዎችን ይቆጣጠራል |
| `get_payment_methods()` | ለደንበኛው የተከማቹ የክፍያ መንገዶችን ይመልሳል |

## ጠቃሚ ምክሮች (Tips)

- Ultimate Multisite ስህተቶችን እንዲያሳይ ሁልጊዜ `WP_Error` መመለስ አለብዎት።
- የትኞቹ የክፍያ አይነቶች መግቢያዎ እንደሚይዙ ለማሳየት `$this->supports` ን ያዘጋጁ (`one-time`, `recurring`)።
- ለተለየ መግቢያ (gateway) የሚሆኑ መረጃዎችን ለመመዝገብ `wu_log_add()` ን ይጠቀሙ።
