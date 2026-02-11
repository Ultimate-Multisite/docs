---
title: Développement de passerelle personnalisée
sidebar_position: 2
_i18n_hash: 4a17140bc09fa0345ff532d31ffeaffa
---
# Développement de passerelle personnalisée

Vous pouvez créer des passerelles de paiement personnalisées en étendant la classe `Base_Gateway`.

## Classe de passerelle

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

## Enregistrer la passerelle

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Méthodes clés

| Méthode | Objectif |
|--------|---------|
| `process_single_payment()` | Gérer les paiements ponctuels |
| `process_signup()` | Configurer les abonnements récurrents |
| `process_refund()` | Gérer les demandes de remboursement |
| `get_payment_methods()` | Retourner les méthodes de paiement enregistrées pour un client |

## Conseils

- Toujours retourner `WP_Error` en cas d'échec afin qu'Ultimate Multisite puisse gérer l'affichage des erreurs
- Définir `$this->supports` pour déclarer quels types de paiement votre passerelle gère (`one-time`, `recurring`)
- Utiliser `wu_log_add()` pour la journalisation spécifique à la passerelle
