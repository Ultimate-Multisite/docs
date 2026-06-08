---
title: Pengembangan Gateway Kustom
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Pengembangan Gateway Kustom

Anda dapat membuat gateway pembayaran kustom dengan memperluas kelas `Base_Gateway`.

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

## Metode Utama

| Method | Tujuan |
|--------|---------|
| `process_single_payment()` | Menangani pembayaran satu kali |
| `process_signup()` | Mengatur langganan berulang |
| `process_refund()` | Menangani permintaan pengembalian dana (refund) |
| `get_payment_methods()` | Mengembalikan metode pembayaran yang tersimpan untuk pelanggan |

## Tips

- Selalu kembalikan `WP_Error` saat gagal agar Ultimate Multisite dapat menangani tampilan pesan kesalahan.
- Atur `$this->supports` untuk mendeklarasikan jenis pembayaran apa saja yang ditangani oleh gateway Anda (`one-time`, `recurring`).
- Gunakan `wu_log_add()` untuk pencatatan (logging) yang spesifik untuk gateway.
