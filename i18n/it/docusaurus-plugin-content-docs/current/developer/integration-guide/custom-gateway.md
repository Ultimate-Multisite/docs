---
title: Sviluppo di gateway personalizzati
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Sviluppo di gateway personalizzati {#custom-gateway-development}

Puoi creare gateway di pagamento personalizzati estendendo la classe `Base_Gateway`.

## Classe Gateway {#gateway-class}

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

## Registrare il Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metodi chiave {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | Gestire pagamenti una tantum |
| `process_signup()` | Configurare abbonamenti ricorrenti |
| `process_refund()` | Gestire richieste di rimborso |
| `get_payment_methods()` | Restituire i metodi di pagamento salvati per un cliente |

## Credenziali di rinnovo per iscrizioni ricorrenti {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 consente alle integrazioni gateway di indicare se un'iscrizione ricorrente dispone di una credenziale di rinnovo riutilizzabile prima che `auto_renew` venga salvato. Aggancia `wu_membership_has_renewal_credential` e restituisci:

- `true` quando l'iscrizione ha un abbonamento gateway, un accordo di fatturazione, un token vault o un metodo di pagamento riutilizzabile equivalente.
- `false` quando il gateway sa che la credenziale ricorrente è mancante o inutilizzabile.
- `null` per non intervenire e mantenere invariato il comportamento predefinito.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Quando un gateway restituisce `false`, Ultimate Multisite salva l'iscrizione con il rinnovo automatico disabilitato e memorizza un indicatore di credenziale mancante. Usa `wu_membership_renewal_credential_missing` per avvisare gli amministratori, avviare un flusso di riautorizzazione o aggiungere note di supporto:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Cancella l'indicatore di credenziale mancante come parte del flusso di riautorizzazione riuscito del tuo gateway dopo che una nuova credenziale riutilizzabile è stata memorizzata.

## Suggerimenti {#tips}

- Restituisci sempre `WP_Error` in caso di errore, così Ultimate Multisite può gestire la visualizzazione degli errori
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Usa `wu_log_add()` per la registrazione specifica del gateway

## Funzionalità dei provider del connettore AI {#ai-connector-provider-capabilities}

Le integrazioni personalizzate che chiamano operazioni basate su connettori AI devono allinearsi con l'insieme di provider OAuth supportati introdotto con AI Provider for Anthropic Max v1.3.0:

| Provider | Note sulle funzionalità |
|---|---|
| **Anthropic Max** | Supporta il workflow esistente del pool di Account OAuth. Preserva i payload di tool-use di Anthropic, inclusi array di strumenti vuoti e firme di ragionamento round-trip, quando effettui il proxy delle richieste del connettore. |
| **OpenAI ChatGPT/Codex** | Supporta il workflow del pool OAuth e il comportamento completo di supporto agli strumenti per le operazioni supportate dal connettore. Trasmetti le definizioni degli strumenti e i risultati delle chiamate agli strumenti senza rimuovere i metadati degli strumenti specifici di Codex. |
| **Google AI Pro** | Supporta il workflow del pool OAuth e l'integrazione del provider basata su SDK. Aggiorna gli account del provider dopo il completamento di OAuth prima di instradare le richieste. |

L'integrazione e i percorsi di configurazione di Cursor Pro sono stati rimossi. Non registrare Cursor Pro come provider selezionabile né presentare istruzioni OAuth specifiche di Cursor nelle UI dei connettori personalizzati.

Per ambienti sandboxed o headless, esponi il percorso di fallback OAuth manuale in modo che gli amministratori possano incollare i dati di autorizzazione restituiti e completare la connessione dell'account senza fare affidamento su un reindirizzamento automatico del browser.
