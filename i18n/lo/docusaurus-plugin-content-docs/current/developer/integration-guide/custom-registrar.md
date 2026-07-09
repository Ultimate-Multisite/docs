---
title: ການສ້າງການຜະສານລວມຜູ້ຈົດທະບຽນແບບກຳນົດເອງ
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ການສ້າງການເຊື່ອມຕໍ່ Registrar ແບບກຳນົດເອງ

Domain Seller addon ໃຊ້ຮູບແບບ **Integration Registry**. Registrar ແຕ່ລະຕົວແມ່ນ PHP class ທີ່ implements `Domain_Selling_Capability` ແລະລົງທະບຽນຕົນເອງຜ່ານ `wu_domain_seller_register_capabilities` action hook.

ຄູ່ມືນີ້ສະແດງວິທີເຊື່ອມຕໍ່ registrar ແບບກຳນົດເອງ.

## Interface

Class ຂອງທ່ານຕ້ອງ implement `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ແລະ extend `WP_Ultimo\Integrations\Base_Capability_Module`.

Methods ທີ່ຈຳເປັນ:

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

### Methods ທາງເລືອກ

Implement ສິ່ງເຫຼົ່ານີ້ເພື່ອເປີດໃຊ້ຟີເຈີເພີ່ມເຕີມ. addon ກວດພົບການຮອງຮັບຜ່ານ `method_exists()`:

| Method | ປົດລັອກ |
|---|---|
| `supports_whois_privacy(): bool` | ຕົວເລືອກຄວາມເປັນສ່ວນຕົວ WHOIS ໃນການຕັ້ງຄ່າສິນຄ້າ |
| `enable_whois_privacy(string $domain_name): array` | ເປີດໃຊ້ຄວາມເປັນສ່ວນຕົວອັດຕະໂນມັດໃນຂະນະລົງທະບຽນ |
| `get_dns_records(string $domain_name): array` | ແຖບມຸມມອງ DNS ຂອງລູກຄ້າ |
| `add_dns_record(string $domain_name, array $record_data): array` | ລູກຄ້າສາມາດເພີ່ມ DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ລູກຄ້າສາມາດແກ້ໄຂ DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ລູກຄ້າສາມາດລຶບ DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | ການຈັດການ Nameserver |
| `get_epp_code(string $domain_name): array` | ການໂອນໂດເມນ (ອອກ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ການໂອນໂດເມນ (ເຂົ້າ) |

### ຂໍ້ຕົກລົງຄ່າທີ່ສົ່ງກັບ

Methods ທັງໝົດສົ່ງກັບ array ທີ່ຢ່າງໜ້ອຍມີ key `success`:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## ການລົງທະບຽນ capability ຂອງທ່ານ

ລົງທະບຽນ class ຂອງທ່ານໂດຍໃຊ້ `wu_domain_seller_register_capabilities` action:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

Argument ທຳອິດຂອງ `add_capability()` ແມ່ນ **provider ID** — slug ໂຕພິມນ້ອຍທີ່ໃຊ້ເພື່ອລະບຸ registrar ຂອງທ່ານໃນການຕັ້ງຄ່າ, ການກຳນົດຄ່າສິນຄ້າ, ແລະຊ່ອງບັນທຶກ log. ໃຊ້ສິ່ງທີ່ບໍ່ຊ້ຳກັນ (ເຊັ່ນ slug ຂອງບໍລິສັດທ່ານ).

---

## ການເພີ່ມຊ່ອງຂໍ້ມູນ credential ໃສ່ wizard

ເພື່ອໃຫ້ admins ປ້ອນ credentials ຜ່ານ setup wizard, ໃຫ້ລົງທະບຽນ integration ຂອງທ່ານ:

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

Credentials ຖືກເກັບເປັນ network options ໂດຍໃຊ້ field IDs ເປັນ keys. ດຶງມັນໃນ capability class ຂອງທ່ານດ້ວຍ `wu_get_setting('my_registrar_api_key')`.

---

## Hooks ສຳລັບການກະທຳຫຼັງການລົງທະບຽນ

ໃຊ້ actions ເຫຼົ່ານີ້ເພື່ອ trigger webhooks, provisioning, notifications, ຫຼື CRM updates:

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

## ການບັນທຶກລັອກ

ຂຽນໄປຍັງຊ່ອງທາງລັອກສະເພາະຜູ້ໃຫ້ບໍລິການຂອງທ່ານໂດຍໃຊ້ `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

ລັອກຈະປາກົດຢູ່ພາຍໃຕ້ **ຜູ້ຄວບຄຸມເຄືອຂ່າຍ › Ultimate Multisite › ລັອກ › domain-seller-my-registrar**.
