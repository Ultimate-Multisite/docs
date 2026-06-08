---
title: Tworzenie niestandardowej integracji rejestratora
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Tworzenie niestandardowej integracji rejestratora

Addon Domain Seller wykorzystuje wzorzec **Rejestru Integracji** (Integration Registry). Każdy rejestrator to klasa PHP, która implementuje `Domain_Selling_Capability` i rejestruje się za pomocą hooka akcji `wu_domain_seller_register_capabilities`.

Ten poradnik pokazuje, jak podłączyć niestandardowego rejestratora.

## Interfejs

Twoja klasa musi implementować `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` i dziedziczyć po `WP_Ultimo\Integrations\Base_Capability_Module`.

Wymagane metody:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Wymagane metody identyfikacyjne (z Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // zawsze 'domain-selling'
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

    // --- Podstawowe wymagane metody (z Domain_Selling_Capability) ---

    /** Pobiera wszystkie dostępne TLD i ceny hurtowe. */
    public function sync_tlds(): array { ... }

    /** Sprawdza dostępność $domain_name w różnych $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Pobiera cenę hurtową dla TLD na N lat. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Rejestruje domenę. W przypadku sukcesu zwraca ['success' => true, 'expiry_date' => '...']. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Odnawia domenę na N lat. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Pobiera status rejestracji, datę wygaśnięcia, nameserwery. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testuje poświadczenia API i łączność. */
    public function test_connection(): array { ... }
}
```

### Opcjonalne metody

Zaimplementuj je, aby odblokować dodatkowe funkcje. Addon wykrywa wsparcie za pomocą `method_exists()`:

| Metoda | Odblokowuje |
|---|---|
| `supports_whois_privacy(): bool` | Opcja prywatności WHOIS w ustawieniach produktu |
| `enable_whois_privacy(string $domain_name): array` | Automatyczne włączenie prywatności podczas rejestracji |
| `get_dns_records(string $domain_name): array` | Zakładkę widoku DNS dla klienta |
| `add_dns_record(string $domain_name, array $record_data): array` | Klient może dodawać rekordy DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klient może edytować rekordy DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klient może usuwać rekordy DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | Zarządzanie nameserverami |
| `get_epp_code(string $domain_name): array` | Transfer domeny (wyjściowy) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfer domeny (przychodzący) |

### Konwencja wartości zwracanej

Wszystkie metody zwracają tablicę, która ma co najmniej klucz `success`:

```php
// Sukces
return ['success' => true, 'data' => [...]];

// Błąd
return ['success' => false, 'message' => 'Błąd w języku naturalnym'];
```

---

## Rejestrowanie funkcjonalności

Zarejestruj swoją klasę za pomocą akcji `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Pierwszy argument w `add_capability()` to **ID dostawcy** (provider ID) — mały, pisany przez myślniki ciąg znaków (slug), używany do identyfikacji Twojego rejestratora w ustawieniach, konfiguracji produktu i kanałach logowania. Użyj czegoś unikalnego (np. slug Twojej firmy).

---

## Dodawanie pól poświadczeń do asystenta

Aby umożliwić administratorom wprowadzenie poświadczeń za pomocą asystenta konfiguracji, zarejestruj swoją integrację:

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

Poświadczenia są przechowywane jako opcje sieciowe, używając ID pól jako kluczy. Odczytaj je w swojej klasie funkcjonalności za pomocą `wu_get_setting('my_registrar_api_key')`.

---

## Hooki dla akcji po rejestracji

Użyj tych akcji do wyzwalania webhooków, uruchamiania usług (provisioning), powiadomień lub aktualizacji CRM:

```php
// Po pomyślnej rejestracji domeny
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: surowa odpowiedź rejestratora
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Po niepowodzeniu rejestracji
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Po pomyślnym odnowieniu
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Zaktualizuj swój system rozliczeniowy, wyślij potwierdzenie itp.
}, 10, 3);

// Po niepowodzeniu odnowienia
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, logika ponawiania itp.
}, 10, 3);

// Po zakończeniu transferu domeny
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain to obiekt WP_Ultimo\Models\Domain
}, 10, 2);

// Po weryfikacji SES DKIM (jeśli aktywna jest integracja SES)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain to obiekt WP_Ultimo\Models\Domain
});
```

---

## Logowanie

Zapisuj do dedykowanego kanału logów dostawcy za pomocą `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logi pojawią się w **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
