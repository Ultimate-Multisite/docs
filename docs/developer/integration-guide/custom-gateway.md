---
title: Custom Gateway Development
sidebar_position: 2
---

# Custom Gateway Development

You can create custom payment gateways by extending the `Base_Gateway` class.

## Gateway Class

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

## Register the Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Key Methods

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Handle one-time payments |
| `process_signup()` | Set up recurring subscriptions |
| `process_refund()` | Handle refund requests |
| `get_payment_methods()` | Return saved payment methods for a customer |

## Tips

- Always return `WP_Error` on failure so Ultimate Multisite can handle error display
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Use `wu_log_add()` for gateway-specific logging

## AI connector provider capabilities

Custom integrations that call AI connector-backed operations should align with the supported OAuth provider set introduced with AI Provider for Anthropic Max v1.3.0:

| Provider | Capability notes |
|---|---|
| **Anthropic Max** | Supports the existing OAuth account pool workflow. Preserve Anthropic tool-use payloads, including empty tool arrays and round-trip thinking signatures, when proxying connector requests. |
| **OpenAI ChatGPT/Codex** | Supports the OAuth pool workflow and full tool-support behavior for connector-supported operations. Pass tool definitions and tool-call results through without stripping Codex-specific tool metadata. |
| **Google AI Pro** | Supports the OAuth pool workflow and SDK-backed provider integration. Refresh provider accounts after OAuth completion before routing requests. |

Cursor Pro integration and setup pathways have been removed. Do not register Cursor Pro as a selectable provider or present Cursor-specific OAuth instructions in custom connector UIs.

For sandboxed or headless environments, expose the manual OAuth fallback path so administrators can paste the returned authorization data and complete account connection without relying on an automatic browser redirect.
