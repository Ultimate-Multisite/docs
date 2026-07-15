---
title: Að smíða sérsniðna registrar-samþættingu
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Að byggja sérsniðna samþættingu við skráningaraðila

Domain Seller-viðbótin notar **Integration Registry**-mynstur. Hver skráningaraðili er PHP-klasi sem útfærir `Domain_Selling_Capability` og skráir sig í gegnum `wu_domain_seller_register_capabilities` action hook.

Þessi leiðarvísir sýnir hvernig á að tengja inn sérsniðinn skráningaraðila.

## Viðmótið {#the-interface}

Klasinn þinn verður að útfæra `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` og erfa frá `WP_Ultimo\Integrations\Base_Capability_Module`.

Nauðsynlegar aðferðir:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Required identity methods (from Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // always 'domain-selling'
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

    // --- Core required methods (from Domain_Selling_Capability) ---

    /** Pull all available TLDs and wholesale pricing. */
    public function sync_tlds(): array { ... }

    /** Check availability of $domain_name across $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Get wholesale price for a TLD for N years. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Register a domain. Returns ['success' => true, 'expiry_date' => '...'] on success. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renew a domain for N years. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Get registration status, expiry date, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API credentials and connectivity. */
    public function test_connection(): array { ... }
}
```

### Valfrjálsar aðferðir {#optional-methods}

Útfærðu þessar til að opna fyrir viðbótareiginleika. Viðbótin greinir stuðning með `method_exists()`:

| Aðferð | Opnar fyrir |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS-persónuverndarvalkost í vörustillingum |
| `enable_whois_privacy(string $domain_name): array` | Virkjar persónuvernd sjálfkrafa við skráningu |
| `get_dns_records(string $domain_name): array` | DNS-yfirlitsflipi viðskiptavinar |
| `add_dns_record(string $domain_name, array $record_data): array` | Viðskiptavinur getur bætt við DNS-færslum |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Viðskiptavinur getur breytt DNS-færslum |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Viðskiptavinur getur eytt DNS-færslum |
| `update_nameservers(string $domain_name, array $nameservers): array` | Umsjón með nameservers |
| `get_epp_code(string $domain_name): array` | Lénsflutningur (á útleið) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Lénsflutningur (á innleið) |

### Venja fyrir skilagildi {#return-value-convention}

Allar aðferðir skila fylki með að lágmarki `success`-lykli:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Að skrá capability-ið þitt {#registering-your-capability}

Skráðu klasann þinn með `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Fyrsta viðfangið í `add_capability()` er **provider ID** — slug með lágstöfum sem er notað til að auðkenna skráningaraðilann þinn í stillingum, vörustillingum og log-rásum. Notaðu eitthvað einstakt (t.d. slug fyrirtækisins þíns).

---

## Að bæta auðkenningarreitum við leiðsagnarálfinn {#adding-credential-fields-to-the-wizard}

Til að leyfa stjórnendum að slá inn auðkenni í gegnum uppsetningarálfinn skaltu skrá samþættinguna þína:

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

Auðkenni eru vistuð sem netvalkostir með reitaauðkennin sem lykla. Sæktu þau í capability-klasanum þínum með `wu_get_setting('my_registrar_api_key')`.

---

## Hooks fyrir aðgerðir eftir skráningu {#hooks-for-post-registration-actions}

Notaðu þessar aðgerðir til að ræsa webhooks, provisioning, tilkynningar eða CRM-uppfærslur:

```php
// After successful domain registration
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// After registration failure
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// After successful renewal
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Update your billing system, send a receipt, etc.
}, 10, 3);

// After renewal failure
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// After domain transfer completes
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain is a WP_Ultimo\Models\Domain object
}, 10, 2);

// After SES DKIM verification (if SES integration is active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain is a WP_Ultimo\Models\Domain object
});
```

---

## Atvikaskráning {#logging}

Skrifaðu í skráningarrásina sem er sértæk fyrir þjónustuveituna þína með `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Atvikaskrár birtast undir **Netstjórn › Ultimate Multisite › Atvikaskrár › domain-seller-my-registrar**.
