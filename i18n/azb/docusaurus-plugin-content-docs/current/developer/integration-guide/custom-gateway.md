---
title: Kustom Gateway Dev
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Özel Ödeme Ağ Geçidi Geliştirme

`Base_Gateway` sınıfını genişleterek özel ödeme ağ geçitleri oluşturabilirsiniz.

## Ağ Geçidi Sınıfı

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

## Ağ Geçidini Kaydetme

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Temel Metotlar

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Tek seferlik ödemeleri yönetir |
| `process_signup()` | Tekrarlayan abonelikleri kurar |
| `process_refund()` | Para iadesi taleplerini yönetir |
| `get_payment_methods()` | Bir müşteri için kaydedilmiş ödeme yöntemlerini döndürür |

## İpuçları

- Ultimate Multisite'ın hata göstermesini sağlayabilmek için başarısız olduğunda her zaman `WP_Error` döndürün.
- Ağ geçidinizin hangi ödeme türlerini desteklediğini belirtmek için `$this->supports` değerini ayarlayın (`one-time`, `recurring`).
- Ağ geçidine özel günlük kaydı için `wu_log_add()` kullanın.
