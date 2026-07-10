---
title: Comhtháthú Saincheaptha Cláraitheora a Thógáil
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Comhtháthú Cláraitheora Saincheaptha a Thógáil {#building-a-custom-registrar-integration}

Úsáideann an breiseán Domain Seller patrún **Integration Registry**. Is rang PHP é gach cláraitheoir a chuireann `Domain_Selling_Capability` i bhfeidhm agus a chláraíonn é féin tríd an action hook `wu_domain_seller_register_capabilities`.

Taispeánann an treoir seo conas cláraitheoir saincheaptha a nascadh isteach.

## An comhéadan {#the-interface}

Ní mór do do rang `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` a chur i bhfeidhm agus `WP_Ultimo\Integrations\Base_Capability_Module` a leathnú.

Modhanna riachtanacha:

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

### Modhanna roghnacha {#optional-methods}

Cuir iad seo i bhfeidhm chun gnéithe breise a dhíghlasáil. Aimsíonn an breiseán tacaíocht trí `method_exists()`:

| Modh | Díghlasálann |
|---|---|
| `supports_whois_privacy(): bool` | Rogha príobháideachais WHOIS i socruithe táirge |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### Coinbhinsiún luacha fillte {#return-value-convention}

Filleann gach modh eagar le heochair `success` ar a laghad:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Do chumas a chlárú {#registering-your-capability}

Cláraigh do rang ag úsáid an action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Is é an chéad argóint le `add_capability()` an **ID soláthraí** — slug i litreacha beaga a úsáidtear chun do chláraitheoir a shainaithint i socruithe, i gcumraíocht táirge, agus i gcainéil logála. Úsáid rud uathúil (m.sh., slug do chuideachta).

---

## Réimsí dintiúr a chur leis an draoi {#adding-credential-fields-to-the-wizard}

Chun ligean do riarthóirí dintiúir a iontráil tríd an draoi socraithe, cláraigh do chomhtháthú:

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

Stóráiltear dintiúir mar roghanna líonra ag úsáid IDanna na réimsí mar eochracha. Aisghabh iad i do rang cumais le `wu_get_setting('my_registrar_api_key')`.

---

## Hooks le haghaidh gníomhartha iar-chláraithe {#hooks-for-post-registration-actions}

Úsáid na gníomhartha seo chun webhooks, soláthar, fógraí, nó nuashonruithe CRM a spreagadh:

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

## Logáil {#logging}

Scríobh chuig do chainéal logála atá sonrach don soláthraí ag úsáid `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Taispeántar logaí faoi **Riarachán Líonra › Ultimate Multisite › Logaí › domain-seller-my-registrar**.
