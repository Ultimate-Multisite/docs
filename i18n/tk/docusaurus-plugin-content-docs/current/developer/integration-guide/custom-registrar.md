---
title: Ýörite Registrar integrasiýasyny gurmak
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Custom Registrar integrasiýasyny gurmak

Domain Seller addon **Integration Registry** nusgasyny ulanýar. Her registrar `Domain_Selling_Capability` amala aşyrýan we `wu_domain_seller_register_capabilities` action hook arkaly özüni hasaba alýan PHP klassydyr.

Bu gollanma custom registrar-y nädip birikdirmelidigini görkezýär.

## Interfeýs {#the-interface}

Siziň klassyňyz `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` amala aşyrmaly we `WP_Ultimo\Integrations\Base_Capability_Module` giňeltmeli.

Talap edilýän usullar:

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

### Meýletin usullar {#optional-methods}

Goşmaça aýratynlyklary açmak üçin bulary amala aşyryň. Addon goldawy `method_exists()` arkaly anyklaýar:

| Method | Açýar |
|---|---|
| `supports_whois_privacy(): bool` | Produkt sazlamalarynda WHOIS gizlinlik opsiýasy |
| `enable_whois_privacy(string $domain_name): array` | Hasaba alnanda gizlinligi awtomatik işjeňleşdirýär |
| `get_dns_records(string $domain_name): array` | Müşderiniň DNS görmek taby |
| `add_dns_record(string $domain_name, array $record_data): array` | Müşderi DNS ýazgylaryny goşup bilýär |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Müşderi DNS ýazgylaryny redaktirläp bilýär |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Müşderi DNS ýazgylaryny pozup bilýär |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver dolandyryşy |
| `get_epp_code(string $domain_name): array` | Domen transferi (çykýan) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domen transferi (girýän) |

### Gaýtaryş bahasy düzgünleşmesi {#return-value-convention}

Ähli usullar azyndan `success` açary bolan array gaýtarýar:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## Capability-y hasaba almak {#registering-your-capability}

Klassyňyzy `wu_domain_seller_register_capabilities` action arkaly hasaba alyň:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` üçin birinji argument **provider ID** — sazlamalarda, produkt konfigurasiýasynda we log kanallarynda registrar-yňyzy tanamak üçin ulanylýan kiçi harply slug-dyr. Üýtgeşik bir zat ulanyň (meselem, kompaniýaňyzyň slug-y).

---

## Wizard-a credential meýdanlaryny goşmak {#adding-credential-fields-to-the-wizard}

Adminlere setup wizard arkaly credential girizmäge mümkinçilik bermek üçin integrasiýaňyzy hasaba alyň:

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

Credential-ler field ID-lerini açar hökmünde ulanyp network option görnüşinde saklanýar. Olary capability klassyňyzda `wu_get_setting('my_registrar_api_key')` bilen alyň.

---

## Hasaba alyşdan soňky hereketler üçin hook-lar {#hooks-for-post-registration-actions}

Webhook-lary, üpjünçiligi, habarnamalary ýa-da CRM täzelenmelerini işletmek üçin şu action-lary ulanyň:

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

## Žurnallaşdyrma {#logging}

Provideriňize mahsus žurnal kanalyna `wu_log_add()` ulanyp ýazyň:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Žurnallar **Tor administratory › Ultimate Multisite › Žurnallar › domain-seller-my-registrar** astynda görünýär.
