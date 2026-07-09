---
title: Bygga en anpassad registrar-integration
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Bygga en anpassad registrar-integration {#building-a-custom-registrar-integration}

Domain Seller-addonet använder ett mönster som kallas **Integration Registry**. Varje registrar är en PHP-klass som implementerar `Domain_Selling_Capability` och registrerar sig via action-hooken `wu_domain_seller_register_capabilities`.

Den här guiden visar hur du kopplar in en anpassad registrar.

## Gränssnittet {#the-interface}

Din klass måste implementera `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` och ärva från `WP_Ultimo\Integrations\Base_Capability_Module`.

Kravkoder:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Nödvändiga identitetsmetoder (från Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // alltid 'domain-selling'
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

    // --- Kärnmetoder (från Domain_Selling_Capability) ---

    /** Hämta alla tillgängliga TLD:er och engrosprissättning. */
    public function sync_tlds(): array { ... }

    /** Kontrollera tillgängligheten av $domain_name över $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Hämta engrospris för en TLD för N år. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registrera ett domännamn. Returnerar ['success' => true, 'expiry_date' => '...'] vid framgång. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Förnya ett domännamn i N år. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Hämta registreringsstatus, utgångsdatum, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testa API-uppgifter och anslutningsmöjligheter. */
    public function test_connection(): array { ... }
}
```

### Valfria metoder {#optional-methods}

Implementera dessa för att låsa upp ytterligare funktioner. Addonet känner av stödet via `method_exists()`:

| Metod | Låser upp |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-integritetsalternativ i produktinställningar |
| `enable_whois_privacy(string $domain_name): array` | Aktiverar automatiskt integritet vid registrering |
| `get_dns_records(string $domain_name): array` | Kundens DNS-vyflik |
| `add_dns_record(string $domain_name, array $record_data): array` | Kunden kan lägga till DNS-poster |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Kunden kan redigera DNS-poster |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Kunden kan ta bort DNS-poster |
| `update_nameservers(string $domain_name, array $nameservers): array` | Hantering av nameservers |
| `get_epp_code(string $domain_name): array` | Domänöverföring (utgående) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domänöverföring (inkommande) |

### Konvention för returvärde {#return-value-convention}

Alla metoder returnerar en array som åtminstone innehåller en `success`-nyckel:

```php
// Framgång
return ['success' => true, 'data' => [...]];

// Misslyckande
return ['success' => false, 'message' => 'Lättläst felmeddelande'];
```

---

## Registrera din kapacitet {#registering-your-capability}

Registrera din klass med action-hooken `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Det första argumentet till `add_capability()` är **provider ID** — en liten slug som används för att identifiera din registrar i inställningar, produktkonfiguration och loggkanaler. Använd något unikt (t.ex. din företags-slug).

---

## Lägga till fält för uppgifter i wizarden {#adding-credential-fields-to-the-wizard}

För att låta administratörer ange uppgifter via setup-wizarden, registrera din integration:

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

Uppgifter lagras som network options med fält-ID:n som nycklar. Hämta dem i din kapacitetsklass med `wu_get_setting('my_registrar_api_key')`.

---

## Hooks för åtgärder efter registrering {#hooks-for-post-registration-actions}

Använd dessa actions för att utlösa webhooks, provisionering, aviseringar eller CRM-uppdateringar:

```php
// Efter framgångsrik domänregistrering
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: rå registrar-svar
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Efter registreringsmisslyckande
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Efter framgångsrik förnyelse
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Uppdatera ditt faktureringssystem, skicka ett kvitto, etc.
}, 10, 3);

// Efter förnyelsemisslyckande
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Varna, retry-logik, etc.
}, 10, 3);

// Efter domänöverföring
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain är ett WP_Ultimo\Models\Domain-objekt
}, 10, 2);

// Efter SES DKIM-verifiering (om SES-integration är aktiv)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain är ett WP_Ultimo\Models\Domain-objekt
});
```

---

## Loggning {#logging}

Skriv till din provider-specifika loggkanal med `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Loggar visas under **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
