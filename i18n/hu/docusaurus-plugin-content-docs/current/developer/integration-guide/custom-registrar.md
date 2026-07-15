---
title: Egy Saját Regisztrátor Integrációépítése
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Saját Regisztrátor Integrációépítés

A Domain Seller addon egy **Integration Registry** (Integrációs Regisztrátor) mintát használja. Minden regisztrátor egy PHP osztály, amely implementálja a `Domain_Selling_Capability`-t, és a `wu_domain_seller_register_capabilities` action hook segítségével regisztrálja magát.

Ez az útmutató mutatja be, hogyan lehet hozzáadni egy saját regisztrátort.

## Az interfész {#the-interface}

Az osztályának implementálnia kell a `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`-t, és örökíteni kell a `WP_Ultimo\Integrations\Base_Capability_Module`-tól.

Kötelező metódusok:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Kötelező azonosító metódusok (Base_Capability_Module-tól) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // mindig 'domain-selling'
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

    // --- Központi kötelező metódusok (Domain_Selling_Capability-tól) ---

    /** Hívja meg az összes elérhető TLD-t és a nagy mennyiségű árazást. */
    public function sync_tlds(): array { ... }

    /** Ellenőrzi a $domain_name elérhetőségét az összes $tlds között. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Kapja meg a nagy mennyiségű árat egy TLD-ért N évre. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Regisztrál egy domain-t. Sikeres esetén visszaszolgáltatja: ['success' => true, 'expiry_date' => '...']. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Forosítja meg egy domain-t N évre. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Kapja meg a domain információit, az érvényesítési dátumot és a nameserver-eket. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Teszteli az API hitelesítő adatai és a kapcsolat. */
    public function test_connection(): array { ... }
}
```

### Opcionális metódusok {#optional-methods}

Implementálja ezeket a metódusokat, hogy további funkciókat szabadíts fel. Az addon a `method_exists()` segítségével érzékeli az támogatást:

| Metódus | Megnyitja |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS adatvédelmi opciót a termék beállításain |
| `enable_whois_privacy(string $domain_name): array` | Automatikusan aktiválja az adatvédelmet a regisztrációkor |
| `get_dns_records(string $domain_name): array` | Ügyfél DNS nézet fülét |
| `add_dns_record(string $domain_name, array $record_data): array` | Az ügyfél hozzáadhat DNS rekordokat |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Az ügyfél szerkeszelheti a DNS rekordokat |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Az ügyfél törölheti a DNS rekordokat |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver kezelés |
| `get_epp_code(string $domain_name): array` | Domain átadás (kilépő) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain átadás (beérkező) |

### Visszaadási érték konvenció {#return-value-convention}

Az összes metódus egy olyan tömböt ad vissza, amely legalább egy `success` kulcsot tartalmaz:

```php
// Sikeres
return ['success' => true, 'data' => [...]];

// Sikertelen
return ['success' => false, 'message' => 'Olvasandó hibaüzenet'];
```

---

## A funkció regisztrálása {#registering-your-capability}

Regisztrálja az osztályát a `wu_domain_seller_register_capabilities` action segítségével:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Az `add_capability()` első argumentuma a **provider ID** (kihívó azonosító) – egy kisbetűs slug, amelyet a beállításokban, a termék konfigurációjában és a logokban használunk a regisztrátor azonosítására. Használjon valamit egyedi (pl. a cég slug-ját).

---

## Hitelesítő mezők hozzáadása a wizardhoz {#adding-credential-fields-to-the-wizard}

Ha adminoknak szeretnénk hitelesítő adatok megadására a beállítási wizardban, regisztrálja az integrációját:

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

A hitelesítő adatok a network optionsként kerülnek tárolásra, a mező ID-jét használva kulcsként. Elérése a capability osztályában a `wu_get_setting('my_registrar_api_key')` segítségével történik.

---

## Hooks a regisztráció utáni műveletekhez {#hooks-for-post-registration-actions}

Használja ezeket az action-okat, hogy triggereljen webhook-okat, provisioning-okat, értesítéseket vagy CRM frissítéseket:

```php
// Sikeres domain regisztráció után
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Regisztráció sikertelen esetén
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Sikeres forosítás után
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Frissítse a számlázási rendszert, küldjen el egy szelvényt stb.
}, 10, 3);

// Forosítás sikertelen esetén
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Értesítés, újrapróbázási logika stb.
}, 10, 3);

// Domain átadás után
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain egy WP_Ultimo\Models\Domain objektum
}, 10, 2);

// SES DKIM ellenőrzés után (ha aktív az SES integráció)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain egy WP_Ultimo\Models\Domain objektum
});
```

---

## Logozás {#logging}

Írjon a szolgáltató-specifikus log kanalba a `wu_log_add()` segítségével:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

A logok a **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** alatt érhetők el.
