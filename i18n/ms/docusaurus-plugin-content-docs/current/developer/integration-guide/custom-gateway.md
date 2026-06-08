---
title: Pembangunan Gateway Tersuai
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Pengembangan Gateway Tersuai

Anda boleh mencipta gateway pembayaran tersuai dengan memperluaskan (extending) kelas `Base_Gateway`.

## Kelas Gateway

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

## Mendaftarkan Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Kaedah Utama

| Kaedah | Tujuan |
|--------|---------|
| `process_single_payment()` | Mengurus pembayaran sekali gus |
| `process_signup()` | Menetapkan langganan berulang |
| `process_refund()` | Mengurus permintaan bayaran balik |
| `get_payment_methods()` | Mengembalikan kaedah pembayaran yang disimpan untuk pelanggan |

## Tips

- Sentiasa kembalikan `WP_Error` jika berlaku kegagalan supaya Ultimate Multisite boleh mengurus paparan ralat.
- Tetapkan `$this->supports` untuk menyatakan jenis pembayaran yang diuruskan oleh gateway anda (`one-time`, `recurring`).
- Gunakan `wu_log_add()` untuk log khusus gateway.
