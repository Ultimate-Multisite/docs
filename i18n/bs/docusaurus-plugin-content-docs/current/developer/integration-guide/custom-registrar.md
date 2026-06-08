---
title: Izgradnja prilagođene integracije registra
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Izgradnja prilagoovane integracije registra

Addon za prodaju domena koristi obrazac **Integrations Registry** (Registrar integracija). Svaki registrar je PHP klasa koja implementira `Domain_Selling_Capability` i registruje se putem akcionog hooka `wu_domain_seller_register_capabilities`.

Ovaj vodič pokazuje kako da uključite prilagođenog registra.

## Interfejs

Vaša klasa mora implementirati `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` i proširiti (extend) `WP_Ultimo\Integrations\Base_Capability_Module`.

Potrebne metode:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Potrebne metode za identifikaciju (iz Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // uvijek 'domain-selling'
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

    // --- Osnovne potrebne metode (iz Domain_Selling_Capability) ---

    /** Dohvati sve dostupne TLD-ove i veleprodajne cijene. */
    public function sync_tlds(): array { ... }

    /** Provjeri dostupnost $domain_name kroz $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Dohvati veleprodajnu cijenu za TLD za N godina. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registruje domen. Vraća ['success' => true, 'expiry_date' => '...'] u slučaju uspjeha. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Obnavlja domen na N godina. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Dohvati status registracije, datum isteka, nameservere. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testira API vjerodajnice i konektivnost. */
    public function test_connection(): array { ... }
}
```

### Opcionalne metode

Implementirajte ih kako biste otključali dodatne funkcije. Addon detektuje podršku putem `method_exists()`:

| Metoda | Otključava |
|---|---|
| `supports_whois_privacy(): bool` | Opciju WHOIS privatnosti u postavkama proizvoda |
| `enable_whois_privacy(string $domain_name): array` | Automatski omogućava privatnost pri registraciji |
| `get_dns_records(string $domain_name): array` | Karticu za DNS pregled klijenta |
| `add_dns_record(string $domain_name, array $record_data): array` | Klijent može dodati DNS zapise |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Klijent može uređivati DNS zapise |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Klijent može brisati DNS zapise |
| `update_nameservers(string $domain_name, array $nameservers): array` | Upravljanje nameserverima |
| `get_epp_code(string $domain_name): array` | Transfer domena (izlazni) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Transfer domena (ulazni) |

### Konvencija povratne vrijednosti

Sve metode vraćaju niz koji ima barem ključ `success`:

```php
// Uspjeh
return ['success' => true, 'data' => [...]];

// Neuspjeh
return ['success' => false, 'message' => 'Lako čitljiv greška'];
```

---

## Registracija vaše sposobnosti (Capability)

Registrujte svoju klasu koristeći akciju `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Prvi argument za `add_capability()` je **provider ID** — mala slova (slug) koja se koristi za identifikaciju vašeg registra u postavkama, konfiguraciji proizvoda i kanalima logova. Koristite nešto jedinstveno (npr. slug vaše kompanije).

---

## Dodavanje polja vjerodajnica u wizard

Da biste omogućili administratorima unos vjerodajnica putem setup wizard-a, registrujte svoju integraciju:

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

Vjerodajnice se pohranjuju kao network opcije koristeći ID polja kao ključeve. Dohvatite ih u svojoj klasi sposobnosti pomoću `wu_get_setting('my_registrar_api_key')`.

---

## Hookovi za akcije nakon registracije

Koristite ove akcije za pokretanje webhookova, provizora (provisioning), obavještenja ili ažuriranja CRM-a:

```php
// Nakon uspješne registracije domena
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: sirovi odgovor registra
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Nakon neuspjeha registracije
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Nakon uspješnog obnavljanja
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Ažurirajte svoj billing sistem, pošaljite račun, itd.
}, 10, 3);

// Nakon neuspjeha obnavljanja
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Obavijest, logika ponovnog pokušaja, itd.
}, 10, 3);

// Nakon završetka transfera domena
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain je objekat WP_Ultimo\Models\Domain
}, 10, 2);

// Nakon verifikacije SES DKIM (ako je aktivna SES integracija)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain je objekat WP_Ultimo\Models\Domain
});
```

---

## Logovanje

Pišite u svoj provider-specifični kanal logova koristeći `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logovi se pojavljuju pod **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
