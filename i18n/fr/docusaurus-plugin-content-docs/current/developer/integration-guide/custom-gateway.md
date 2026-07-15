---
title: Développement de passerelle personnalisée
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Développement de passerelle personnalisée

Vous pouvez créer des passerelles de paiement personnalisées en étendant la classe `Base_Gateway`.

## Classe de passerelle {#gateway-class}

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

## Enregistrer la passerelle {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Méthodes clés {#key-methods}

| Méthode | Objectif |
|--------|---------|
| `process_single_payment()` | Gérer les paiements ponctuels |
| `process_signup()` | Configurer les abonnements récurrents |
| `process_refund()` | Gérer les demandes de remboursement |
| `get_payment_methods()` | Renvoyer les méthodes de paiement enregistrées pour un client |

## Identifiants de renouvellement pour les memberships récurrents {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 permet aux intégrations de passerelle d’indiquer si un membership récurrent dispose d’un identifiant de renouvellement réutilisable avant que `auto_renew` ne soit persisté. Accrochez `wu_membership_has_renewal_credential` et renvoyez :

- `true` lorsque le membership dispose d’un abonnement de passerelle, d’un accord de facturation, d’un token de coffre-fort ou d’une méthode de paiement réutilisable équivalente.
- `false` lorsque la passerelle sait que l’identifiant récurrent est manquant ou inutilisable.
- `null` pour vous désinscrire et conserver le comportement par défaut inchangé.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Lorsqu’une passerelle renvoie `false`, Ultimate Multisite enregistre le membership avec le renouvellement automatique désactivé et stocke un marqueur d’identifiant manquant. Utilisez `wu_membership_renewal_credential_missing` pour notifier les administrateurs, lancer un flux de réautorisation ou ajouter des notes de support :

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Effacez le marqueur d’identifiant manquant dans le cadre du flux de réautorisation réussi de votre passerelle après l’enregistrement d’un nouvel identifiant réutilisable.

## Conseils {#tips}

- Renvoyez toujours `WP_Error` en cas d’échec afin qu’Ultimate Multisite puisse gérer l’affichage des erreurs
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Utilisez `wu_log_add()` pour la journalisation spécifique à la passerelle

## Capacités des fournisseurs de connecteurs AI {#ai-connector-provider-capabilities}

Les intégrations personnalisées qui appellent des opérations adossées à un connecteur AI doivent s’aligner sur l’ensemble de fournisseurs OAuth pris en charge introduit avec AI Provider for Anthropic Max v1.3.0 :

| Fournisseur | Notes sur les capacités |
|---|---|
| **Anthropic Max** | Prend en charge le workflow existant de pool de comptes OAuth. Préservez les payloads d’utilisation d’outils Anthropic, y compris les tableaux d’outils vides et les signatures de raisonnement aller-retour, lors du proxying des requêtes de connecteur. |
| **OpenAI ChatGPT/Codex** | Prend en charge le workflow de pool OAuth et le comportement complet de prise en charge des outils pour les opérations prises en charge par le connecteur. Transmettez les définitions d’outils et les résultats d’appels d’outils sans supprimer les métadonnées d’outils propres à Codex. |
| **Google AI Pro** | Prend en charge le workflow de pool OAuth et l’intégration de fournisseur adossée au SDK. Actualisez les comptes fournisseur après la fin d’OAuth avant d’acheminer les requêtes. |

L’intégration Cursor Pro et les parcours de configuration ont été supprimés. N’enregistrez pas Cursor Pro comme fournisseur sélectionnable et ne présentez pas d’instructions OAuth propres à Cursor dans les interfaces utilisateur de connecteur personnalisées.

Pour les environnements sandboxés ou headless, exposez le chemin de repli OAuth manuel afin que les administrateurs puissent coller les données d’autorisation renvoyées et finaliser la connexion du compte sans dépendre d’une redirection automatique du navigateur.
