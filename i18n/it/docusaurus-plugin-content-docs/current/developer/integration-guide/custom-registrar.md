---
title: Costruire un'integrazione di Registrar personalizzata
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Creare un'integrazione di Registrar personalizzata

Il plugin Domain Seller utilizza un pattern chiamato **Integration Registry**. Ogni registrar è una classe PHP che implementa `Domain_Selling_Capability` e si registra tramite l'action hook `wu_domain_seller_register_capabilities`.

Questa guida mostra come collegare un registrar personalizzato.

## L'interfaccia

La tua classe deve implementare `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ed estendere `WP_Ultimo\Integrations\Base_Capability_Module`.

Metodi richiesti:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Metodi di identità richiesti (da Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // sempre 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Abilita la registrazione di domini tramite My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Metodi principali richiesti (da Domain_Selling_Capability) ---

    /** Recupera tutti i TLD disponibili e i prezzi all'ingrosso. */
    public function sync_tlds(): array { ... }

    /** Controlla la disponibilità di $domain_name su $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Ottiene il prezzo all'ingrosso per un TLD per N anni. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registra un dominio. Restituisce ['success' => true, 'expiry_date' => '...'] in caso di successo. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Rinnova un dominio per N anni. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Ottiene lo stato di registrazione, la data di scadenza e i nameserver. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testa le credenziali API e la connettività. */
    public function test_connection(): array { ... }
}
```

### Metodi opzionali

Implementa questi metodi per sbloccare funzionalità aggiuntive. Il plugin rileva il supporto tramite `method_exists()`:

| Metodo | Sblocca |
|---|---|
| `supports_whois_privacy(): bool` | Opzione di privacy WHOIS nelle impostazioni del prodotto |
| `enable_whois_privacy(string $domain_name): array` | Abilita automaticamente la privacy alla registrazione |
| `get_dns_records(string $domain_name): array` | Scheda DNS per il cliente |
| `add_dns_record(string $domain_name, array $record_data): array` | Il cliente può aggiungere record DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Il cliente può modificare i record DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Il cliente può eliminare i record DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gestione dei nameserver |
| `get_epp_code(string $domain_name): array` | Trasferimento di dominio (in uscita) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Trasferimento di dominio (in entrata) |

### Convenzione del valore di ritorno

Tutti i metodi restituiscono un array che contiene almeno la chiave `success`:

```php
// Successo
return ['success' => true, 'data' => [...]];

// Fallimento
return ['success' => false, 'message' => 'Errore leggibile dall'uomo'];
```

---

## Registrare la tua capability

Registra la tua classe utilizzando l'action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Il primo argomento di `add_capability()` è l'**ID del provider** — uno slug in minuscolo utilizzato per identificare il tuo registrar nelle impostazioni, nella configurazione del prodotto e nei canali di log. Usa qualcosa di unico (ad esempio, lo slug della tua azienda).

---

## Aggiungere campi credenziali al wizard

Per consentire agli amministratori di inserire le credenziali tramite il wizard di configurazione, registra la tua integrazione:

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

Le credenziali vengono memorizzate come opzioni di rete utilizzando gli ID dei campi come chiavi. Recuperale nella tua classe capability con `wu_get_setting('my_registrar_api_key')`.

---

## Hook per azioni post-registrazione

Usa questi actions per attivare webhook, provisioning, notifiche o aggiornamenti CRM:

```php
// Dopo la registrazione riuscita del dominio
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: risposta grezza del registrar
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Dopo il fallimento della registrazione
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Registrazione dominio fallita: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Dopo il rinnovo riuscito
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Aggiorna il tuo sistema di fatturazione, invia una ricevuta, ecc.
}, 10, 3);

// Dopo il fallimento del rinnovo
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Avvisa, logica di riprova, ecc.
}, 10, 3);

// Dopo il completamento del trasferimento di dominio
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain è un oggetto WP_Ultimo\Models\Domain
}, 10, 2);

// Dopo la verifica SES DKIM (se l'integrazione SES è attiva)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain è un oggetto WP_Ultimo\Models\Domain
});
```

---

## Logging

Scrivi nel tuo canale di log specifico per il provider usando `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registrato {$domain_name} con successo", 'info');
wu_log_add('domain-seller-my-registrar', "Registrazione fallita: {$error}", 'error');
```

I log appaiono sotto **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
