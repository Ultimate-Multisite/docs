---
title: A’ togail amalachadh clàraiche gnàthaichte
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# A’ togail amalachadh Registrar gnàthaichte {#building-a-custom-registrar-integration}

Tha tuilleadan Domain Seller a’ cleachdadh pàtran **Integration Registry**. ’S e clas PHP a th’ anns gach registrar a chuireas `Domain_Selling_Capability` an gnìomh agus a chlàraicheas e fhèin tron action hook `wu_domain_seller_register_capabilities`.

Tha an stiùireadh seo a’ sealltainn mar a cheanglas tu registrar gnàthaichte ris.

## An eadar-aghaidh {#the-interface}

Feumaidh do chlas `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` a chur an gnìomh agus `WP_Ultimo\Integrations\Base_Capability_Module` a leudachadh.

Dòighean riatanach:

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

### Dòighean roghainneil {#optional-methods}

Cuir iad seo an gnìomh gus feartan a bharrachd fhuasgladh. Lorgaidh an tuilleadan taic tro `method_exists()`:

| Dòigh | Na dh’fhuasglas e |
|---|---|
| `supports_whois_privacy(): bool` | Roghainn prìobhaideachd WHOIS ann an roghainnean toraidh |
| `enable_whois_privacy(string $domain_name): array` | Cuiridh e prìobhaideachd an comas gu fèin-obrachail aig àm clàraidh |
| `get_dns_records(string $domain_name): array` | Taba seallaidh DNS don neach-ceannach |
| `add_dns_record(string $domain_name, array $record_data): array` | Faodaidh an neach-ceannach clàran DNS a chur ris |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Faodaidh an neach-ceannach clàran DNS a dheasachadh |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Faodaidh an neach-ceannach clàran DNS a sguabadh às |
| `update_nameservers(string $domain_name, array $nameservers): array` | Stiùireadh nameserver |
| `get_epp_code(string $domain_name): array` | Tar-chur àrainn (a-mach) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Tar-chur àrainn (a-steach) |

### Gnàth-riaghailt luach tilleadh {#return-value-convention}

Tillidh a h-uile dòigh array le iuchair `success` co-dhiù:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## A’ clàradh do chomas {#registering-your-capability}

Clàraich do chlas leis an action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

’S e a’ chiad argamaid gu `add_capability()` an **ID solaraiche** — slug ann an litrichean beaga a thathar a’ cleachdadh gus do registrar aithneachadh ann an roghainnean, rèiteachadh toraidh, agus seanalan loga. Cleachd rudeigin gun samhail (m.e., slug do chompanaidh).

---

## A’ cur raointean teisteanais ris an draoidh {#adding-credential-fields-to-the-wizard}

Gus leigeil le rianairean teisteanasan a chur a-steach tron draoidh rèiteachaidh, clàraich an t-amalachadh agad:

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

Tha teisteanasan air an stòradh mar roghainnean lìonraidh a’ cleachdadh IDan nan raointean mar iuchraichean. Faigh air ais iad sa chlas comais agad le `wu_get_setting('my_registrar_api_key')`.

---

## Hooks airson gnìomhan às dèidh clàraidh {#hooks-for-post-registration-actions}

Cleachd na gnìomhan seo gus webhooks, solarachadh, brathan, no ùrachaidhean CRM a bhrosnachadh:

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

## Logadh {#logging}

Sgrìobh dhan t-sianal loga sònraichte don t-solaraiche agad a’ cleachdadh `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Nochdaidh logaichean fo **Rianaire Lìonra › Ultimate Multisite › Logaichean › domain-seller-my-registrar**.
