---
title: Erstellung einer benutzerdefinierten Registrar-Integration
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Ein benutzerdefiniertes Registrar-Integration erstellen {#building-a-custom-registrar-integration}

Das Domain Seller Addon verwendet ein Muster namens **Integration Registry**. Jeder Registrar ist eine PHP-Klasse, die `Domain_Selling_Capability` implementiert und sich über den Action Hook `wu_domain_seller_register_capabilities` registriert.

In diesem Leitfaden erfahren Sie, wie Sie einen benutzerdefinierten Registrar einbinden.

## Die Schnittstelle {#the-interface}

Ihre Klasse muss `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implementieren und `WP_Ultimo\Integrations\Base_Capability_Module` erweitern.

Erforderliche Methoden:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Erforderliche Identitätsmethoden (von Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // immer 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Domain-Registrierung über My Registrar aktivieren.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Kern-erforderliche Methoden (von Domain_Selling_Capability) ---

    /** Alle verfügbaren TLDs und Großhandelspreise abrufen. */
    public function sync_tlds(): array { ... }

    /** Verfügbarkeit von $domain_name über $tlds prüfen. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Großhandelspreis für ein TLD für N Jahre abrufen. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Ein Domain registrieren. Gibt bei Erfolg ['success' => true, 'expiry_date' => '...'] zurück. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Ein Domain für N Jahre verlängern. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Registrierungsstatus, Ablaufdatum, Nameserver abrufen. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API-Anmeldeinformationen und Konnektivität testen. */
    public function test_connection(): array { ... }
}
```

### Optionale Methoden {#optional-methods}

Implementieren Sie diese, um zusätzliche Funktionen freizuschalten. Das Addon erkennt die Unterstützung über `method_exists()`:

| Methode | Schaltet frei |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-Datenschutzoption in den Produkteinstellungen |
| `enable_whois_privacy(string $domain_name): array` | Automatische Aktivierung des Datenschutzes bei der Registrierung |
| `get_dns_records(string $domain_name): array` | Kunden-DNS-Ansicht-Tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Kunde kann DNS-Einträge hinzufügen |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kunde kann DNS-Einträge bearbeiten |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kunde kann DNS-Einträge löschen |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver-Verwaltung |
| `get_epp_code(string $domain_name): array` | Domain-Übertragung (ausgehend) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain-Übertragung (eingehend) |

### Konvention für den Rückgabewert {#return-value-convention}

Alle Methoden geben ein Array zurück, das mindestens einen Schlüssel namens `success` enthält:

```php
// Erfolg
return ['success' => true, 'data' => [...]];

// Fehler
return ['success' => false, 'message' => 'Lesbarer Fehlertext'];
```

---

## Registrierung Ihrer Funktionalität {#registering-your-capability}

Registrieren Sie Ihre Klasse mit dem Action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Das erste Argument von `add_capability()` ist die **Provider ID** – ein Kleinbuchstaben-Slug, der verwendet wird, um Ihren Registrar in den Einstellungen, der Produktkonfiguration und den Protokollkanälen zu identifizieren. Verwenden Sie etwas Einzigartiges (z. B. den Slug Ihres Unternehmens).

---

## Hinzufügen von Anmeldeinformationen zum Wizard {#adding-credential-fields-to-the-wizard}

Um Administratoren zu ermöglichen, Anmeldeinformationen über den Setup-Assistenten einzugeben, registrieren Sie Ihre Integration:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Anmeldeinformationen werden als Netzwerkoptionen unter Verwendung der Feld-IDs als Schlüssel gespeichert. Sie können sie in Ihrer Capability-Klasse mit `wu_get_setting('my_registrar_api_key')` abrufen.

---

## Hooks für Post-Registrierungsaktionen {#hooks-for-post-registration-actions}

Verwenden Sie diese Actions, um Webhooks, Bereitstellungen, Benachrichtigungen oder CRM-Updates auszulösen:

```php
// Nach erfolgreicher Domain-Registrierung
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: rohe Registrar-Antwort
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Bei Registrierungsfehlern
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain-Registrierung fehlgeschlagen: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Nach erfolgreicher Verlängerung
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Aktualisieren Sie Ihr Abrechnungssystem, senden Sie einen Beleg usw.
}, 10, 3);

// Bei Verlängerungsfehlern
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alarmieren, Retry-Logik usw.
}, 10, 3);

// Nach Abschluss einer Domain-Übertragung
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ist ein WP_Ultimo\Models\Domain-Objekt
}, 10, 2);

// Nach SES DKIM-Verifizierung (falls die SES-Integration aktiv ist)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ist ein WP_Ultimo\Models\Domain-Objekt
});
```

---

## Protokollierung (Logging) {#logging}

Schreiben Sie in Ihren provider-spezifischen Protokollkanal mit `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Erfolgreich registriert {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "Registrierung fehlgeschlagen: {$error}", 'error');
```

Die Protokolle erscheinen unter **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
