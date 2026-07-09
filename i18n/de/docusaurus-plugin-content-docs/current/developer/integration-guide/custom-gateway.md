---
title: Entwicklung eines individuellen Gateways
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Entwicklung eines benutzerdefinierten Gateways

Du kannst benutzerdefinierte Zahlungs-Gateways erstellen, indem du die Klasse `Base_Gateway` erweiterst.

## Gateway-Klasse

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

## Das Gateway registrieren

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Wichtige Methoden

| Methode | Zweck |
|--------|---------|
| `process_single_payment()` | Einmalzahlungen verarbeiten |
| `process_signup()` | Wiederkehrende Abonnements einrichten |
| `process_refund()` | Rückerstattungsanfragen verarbeiten |
| `get_payment_methods()` | Gespeicherte Zahlungsmethoden für einen Kunden zurückgeben |

## Verlängerungs-Zugangsdaten für wiederkehrende Mitgliedschaften

Ultimate Multisite v2.13.0 ermöglicht Gateway-Integrationen zu melden, ob eine wiederkehrende Mitgliedschaft über wiederverwendbare Verlängerungs-Zugangsdaten verfügt, bevor `auto_renew` gespeichert wird. Hänge dich in `wu_membership_has_renewal_credential` ein und gib zurück:

- `true`, wenn die Mitgliedschaft über ein Gateway-Abonnement, eine Abrechnungsvereinbarung, ein Vault-Token oder eine gleichwertige wiederverwendbare Zahlungsmethode verfügt.
- `false`, wenn das Gateway weiß, dass die wiederkehrenden Zugangsdaten fehlen oder nicht verwendbar sind.
- `null`, um sich abzumelden und das Standardverhalten unverändert beizubehalten.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Wenn ein Gateway `false` zurückgibt, speichert Ultimate Multisite die Mitgliedschaft mit deaktivierter automatischer Verlängerung und legt eine Markierung für fehlende Zugangsdaten ab. Verwende `wu_membership_renewal_credential_missing`, um Administratoren zu benachrichtigen, einen erneuten Autorisierungsablauf zu starten oder Support-Notizen hinzuzufügen:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Entferne die Markierung für fehlende Zugangsdaten als Teil des erfolgreichen erneuten Autorisierungsablaufs deines Gateways, nachdem neue wiederverwendbare Zugangsdaten gespeichert wurden.

## Tipps

- Gib bei Fehlern immer `WP_Error` zurück, damit Ultimate Multisite die Fehleranzeige handhaben kann
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Verwende `wu_log_add()` für Gateway-spezifisches Logging

## Fähigkeiten von AI-Connector-Anbietern

Benutzerdefinierte Integrationen, die AI-Connector-gestützte Vorgänge aufrufen, sollten sich am unterstützten OAuth-Anbieterset orientieren, das mit AI Provider for Anthropic Max v1.3.0 eingeführt wurde:

| Anbieter | Hinweise zu Fähigkeiten |
|---|---|
| **Anthropic Max** | Unterstützt den bestehenden Workflow für den OAuth-Account-Pool. Bewahre Anthropic-Tool-Use-Payloads bei, einschließlich leerer Tool-Arrays und Round-Trip-Thinking-Signaturen, wenn Connector-Anfragen weitergeleitet werden. |
| **OpenAI ChatGPT/Codex** | Unterstützt den OAuth-Pool-Workflow und das vollständige Tool-Support-Verhalten für Connector-unterstützte Vorgänge. Reiche Tool-Definitionen und Tool-Call-Ergebnisse durch, ohne Codex-spezifische Tool-Metadaten zu entfernen. |
| **Google AI Pro** | Unterstützt den OAuth-Pool-Workflow und SDK-gestützte Anbieterintegration. Aktualisiere Anbieter-Accounts nach Abschluss von OAuth, bevor Anfragen weitergeleitet werden. |

Cursor Pro-Integration und Einrichtungswege wurden entfernt. Registriere Cursor Pro nicht als auswählbaren Anbieter und zeige in benutzerdefinierten Connector-UIs keine Cursor-spezifischen OAuth-Anweisungen an.

Für Sandbox- oder Headless-Umgebungen solltest du den manuellen OAuth-Fallback-Pfad bereitstellen, damit Administratoren die zurückgegebenen Autorisierungsdaten einfügen und die Account-Verbindung abschließen können, ohne auf eine automatische Browser-Weiterleitung angewiesen zu sein.
