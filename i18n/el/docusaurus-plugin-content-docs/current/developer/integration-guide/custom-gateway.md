---
title: Ανάπτυξη Προσαρμοσμένου Πύλη
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Ανάπτυξη Προσαρμοσμένων Πύλη Πληρωμής

Μπορείτε να δημιουργήσετε προσαρμοσμένες πύλες πληρωμής κληρονομώντας (extending) την κλάση `Base_Gateway`.

## Κλάση Πύλης Πληρωμής

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

## Καταχώριση της Πύλης Πληρωμής

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Βασικές Μέθοδοι

| Μέθοδος | Σκοπός |
|--------|---------|
| `process_single_payment()` | Εκτέλεση εφάπαξ πληρωμών |
| `process_signup()` | Δημιουργία επαναληπτικών συνδρομών |
| `process_refund()` | Εκτέλεση αιτήσεων επιστροφής χρημάτων |
| `get_payment_methods()` | Επιστροφή αποθηκευμένων μεθόδων πληρωμής για έναν πελάτη |

## Συμβουλές

- Επιστρέφετε πάντα `WP_Error` σε περίπτωση αποτυχίας, ώστε το Ultimate Multisite να μπορεί να διαχειριστεί την εμφάνιση των σφαλμάτων.
- Ρυθμίστε το `$this->supports` για να δηλώσετε ποιοι τύποι πληρωμών υποστηρίζει η πύλη σας (`one-time`, `recurring`).
- Χρησιμοποιήστε το `wu_log_add()` για καταγραφή (logging) που αφορά συγκεκριμένα την πύλη.
