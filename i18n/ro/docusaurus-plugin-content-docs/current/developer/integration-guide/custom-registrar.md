---
title: Construirea unei Integrari de Registrar Personalizate
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Crearea unei Integrari Custom de Registrare de Domenii {#building-a-custom-registrar-integration}

Addon-ul Domain Seller folosește un model numit **Integration Registry**. Fiecare registrar este o clasă PHP care implementează `Domain_Selling_Capability` și se înregistrează prin hook-ul de acțiune `wu_domain_seller_register_capabilities`.

Acest ghid vă arată cum să conectați un registrar custom.

## Interfața {#the-interface}

Clasa dumneavoastră trebuie să implementeze `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` și să extindă `WP_Ultimo\Integrations\Base_Capability_Module`.

Metodele necesare:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Metodele de identitate necesare (din Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // întotdeauna 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Metodele de bază necesare (din Domain_Selling_Capability) ---

    /** Extrage toate TLD-urile disponibile și prețurile în vrac. */
    public function sync_tlds(): array { ... }

    /** Verifică disponibilitatea domeniului $domain_name pe TLD-urile $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Obține prețul în vrac pentru un TLD pentru N de ani. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Înregistrează un domeniu. Returnează ['success' => true, 'expiry_date' => '...'] în cazul succesului. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renovează un domeniu pentru N de ani. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Obține statusul înregistrării, data de expirare, nameserverele. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testează credențialele API și conectivitatea. */
    public function test_connection(): array { ... }
}
```

### Metode opționale {#optional-methods}

Implementați aceste metode pentru a debloca funcționalități suplimentare. Addon-ul detectează suportul prin `method_exists()`:

| Metodă | Deblochează |
|---|---|
| `supports_whois_privacy(): bool` | Opțiunea de confidențialitate WHOIS în setările produsului |
| `enable_whois_privacy(string $domain_name): array` | Activarea automată a confidențialității la înregistrare |
| `get_dns_records(string $domain_name): array` | Tab-ul de vizualizare DNS pentru client |
| `add_dns_record(string $domain_name, array $record_data): array` | Clientul poate adăuga înregistrări DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Clientul poate edita înregistrările DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Clientul poate șterge înregistrările DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Gestionarea nameserverelor |
| `get_epp_code(string $domain_name): array` | Transferul domeniului (de ieșire) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transferul domeniului (de intrare) |

### Convenția valorii de returnare {#return-value-convention}

Toate metodele returnează un array care conține, minimum, o cheie `success`:

```php
// Succes
return ['success' => true, 'data' => [...]];

// Eșec
return ['success' => false, 'message' => 'Eroare citibilă pentru om'];
```

---

## Înregistrarea capacității dumneavoastră {#registering-your-capability}

Înregistrați clasa folosind acțiunea `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argumentul primul pentru `add_capability()` este **provider ID** — un slug minuscul folosit pentru a identifica registrarul în setări, configurarea produsului și canalele de log. Folosiți ceva unic (de exemplu, slug-ul companiei dumneavoastră).

---

## Adăugarea câmpurilor de credențiale în wizard {#adding-credential-fields-to-the-wizard}

Pentru a permite administratorilor să introducă credențialele prin wizard-ul de configurare, înregistrați integrarea:

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

Credențialele sunt stocate ca opțiuni de rețea, folosind ID-urile câmpurilor ca chei. Ele pot fi recuperate în clasa dumneavoastră de capacitate cu `wu_get_setting('my_registrar_api_key')`.

---

## Hooks pentru acțiuni post-înregistrare {#hooks-for-post-registration-actions}

Folosiți aceste acțiuni pentru a declanșa webhooks, provisionare, notificări sau actualizări CRM:

```php
// După înregistrarea domeniului cu succes
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: răspunsul brut de la registrar
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// După eșecul înregistrării
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Eșec înregistrare domeniu: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// După renovarea cu succes
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Actualizați sistemul de facturare, trimiteți un chitanță, etc.
}, 10, 3);

// După eșecul renovării
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alertă, logică de reîncercare, etc.
}, 10, 3);

// După finalizarea transferului domeniului
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain este un obiect WP_Ultimo\Models\Domain
}, 10, 2);

// După verificarea SES DKIM (dacă integrarea SES este activă)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain este un obiect WP_Ultimo\Models\Domain
});
```

---

## Logarea (Jurnalizarea) {#logging}

Scrieți în canalul de log specific provider-ului folosind `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Înregistrat cu succes {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "Eșec înregistrare: {$error}", 'error');
```

Logurile apar sub **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
