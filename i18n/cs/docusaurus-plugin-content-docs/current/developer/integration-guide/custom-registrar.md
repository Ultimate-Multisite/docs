---
title: Vytváření vlastní integrace s registrarovým systémem
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Vytváření vlastní integrace pro registrátory {#building-a-custom-registrar-integration}

Addon Domain Seller používá vzor **Integration Registry**. Každý registrátor je třída PHP, která implementuje `Domain_Selling_Capability` a registruje se pomocí akčního hooku `wu_domain_seller_register_capabilities`.

Tento průvodce ukazuje, jak připojit vlastní registrátor.

## Interface {#the-interface}

Vaše třída musí implementovat `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` a dědit se z `WP_Ultimo\Integrations\Base_Capability_Module`.

Požadované metody:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Požadované metody pro identitu (z Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // vždy 'domain-selling'
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

    // --- Základní požadované metody (z Domain_Selling_Capability) ---

    /** Získá všechny dostupné TLD a velkoobchodní ceny. */
    public function sync_tlds(): array { ... }

    /** Zkontroluje dostupnost $domain_name napříč $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Získá velkoobchodní cenu pro TLD na N let. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Registruje doménu. V případě úspěchu vrátí ['success' => true, 'expiry_date' => '...']. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Obnoví doménu na N let. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Získá stav registrace, datum vypršení a nameservery. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Testuje API údaje a konektivitu. */
    public function test_connection(): array { ... }
}
```

### Volitelné metody {#optional-methods}

Implementujte je, abyste odemkli další funkce. Addon detekuje podporu pomocí `method_exists()`:

| Metoda | Odemyká |
|---|---|
| `supports_whois_privacy(): bool` | Možnost WHOIS soukromí v nastavení produktu |
| `enable_whois_privacy(string $domain_name): array` | Automatické zapnutí soukromí při registraci |
| `get_dns_records(string $domain_name): array` | Tabulka DNS záznamů pro zákazníka |
| `add_dns_record(string $domain_name, array $record_data): array` | Zákazník může přidat DNS záznamy |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Zákazník může upravit DNS záznamy |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Zákazník může smazat DNS záznamy |
| `update_nameservers(string $domain_name, array $nameservers): array` | Správa nameserverů |
| `get_epp_code(string $domain_name): array` | Přenos domény (odchozí) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Přenos domény (příchozí) |

### Konvence návratní hodnoty {#return-value-convention}

Všechny metody vrací pole, které má minimálně klíč `success`:

```php
// Úspěch
return ['success' => true, 'data' => [...]];

// Selhání
return ['success' => false, 'message' => 'Textový popis chyby'];
```

---

## Registrace vaší kapacity {#registering-your-capability}

Zaregistrujte svou třídu pomocí akčního hooku `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

První argument pro `add_capability()` je **provider ID** — malá písmena slug používaná k identifikaci vašeho registrátora v nastavení, konfiguraci produktu a v logovacích kanálech. Použijte něco unikátního (např. slug vaší společnosti).

---

## Přidání polí pro údaje (credentials) do průvodce {#adding-credential-fields-to-the-wizard}

Pokud chcete, aby administrátoři zadávali údaje přes průvodce nastavení, zaregistrujte svou integraci:

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

Údaje jsou uloženy jako network options pomocí ID polí jako klíčů. Získáte je ve své třídě kapacity pomocí `wu_get_setting('my_registrar_api_key')`.

---

## Hooks pro akce po registraci {#hooks-for-post-registration-actions}

Použijte tyto akce k spuštění webhooků, provisioningu, oznámení nebo aktualizací CRM:

```php
// Po úspěšné registraci domény
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: surová odezva registrátora
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Po selhání registraci
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Po úspěšné obnově
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Aktualizujte svůj platební systém, odešlete výpis atd.
}, 10, 3);

// Po selhání obnovy
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Oznámení, logika opakování atd.
}, 10, 3);

// Po dokončení transferu domény
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain je objekt WP_Ultimo\Models\Domain
}, 10, 2);

// Po ověření SES DKIM (pokud je aktivní integrace SES)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain je objekt WP_Ultimo\Models\Domain
});
```

---

## Logování {#logging}

Zapište do svého logovacího kanálu specifického pro poskytovatele pomocí `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logy se zobrazí pod **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
