---
title: ಕಸ್ಟಮ್ ರಿಜಿಸ್ಟ್ರಾರ್ ಏಕೀಕರಣವನ್ನು ನಿರ್ಮಿಸುವುದು
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# ಕಸ್ಟಮ್ ರಿಜಿಸ್ಟ್ರಾರ್ ಏಕೀಕರಣವನ್ನು ನಿರ್ಮಿಸುವುದು

ಡೊಮೇನ್ ಸೆಲ್ಲರ್ ಅಡ್-ಆನ್ (Domain Seller addon) ಒಂದು **Integration Registry** ಮಾದರಿಯನ್ನು ಬಳಸುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ರಿಜಿಸ್ಟ್ರಾರ್ (registrar) ಎನ್ನುವುದು `Domain_Selling_Capability` ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುವ (implements) ಮತ್ತು `wu_domain_seller_register_capabilities` ಆಕ್ಷನ್ ಹುಕ್ (action hook) ಮೂಲಕ ತನ್ನನ್ನು ತಾನು ನೋಂದಾಯಿಸಿಕೊಳ್ಳುವ (registers) PHP ಕ್ಲಾಸ್ ಆಗಿದೆ.

ಕಸ್ಟಮ್ ರಿಜಿಸ್ಟ್ರಾರ್ ಅನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸುವುದು (wire in) ಎಂಬುದನ್ನು ಈ ಮಾರ್ಗದರ್ಶಿ ತೋರಿಸುತ್ತದೆ.

## ಇಂಟರ್‌ಫೇಸ್ (The interface)

ನಿಮ್ಮ ಕ್ಲಾಸ್ ಅನ್ನು `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ಅನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸುವಂತೆ (implement) ಮತ್ತು `WP_Ultimo\Integrations\Base_Capability_Module` ಅನ್ನು ವಿಸ್ತರಿಸುವಂತೆ (extend) ಇರಬೇಕು.

ಕಡ್ಡಾಯ ವಿಧಾನಗಳು (Required methods):

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- ಕಡ್ಡಾಯ ಗುರುತಿನ ವಿಧಾನಗಳು (Base_Capability_Module ನಿಂದ) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // ಯಾವಾಗಲೂ 'domain-selling'
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

    // --- ಮುಖ್ಯ ಕಡ್ಡಾಯ ವಿಧಾನಗಳು (Domain_Selling_Capability ನಿಂದ) ---

    /** ಲಭ್ಯವಿರುವ ಎಲ್ಲಾ TLDಗಳು ಮತ್ತು ಬೃಹತ್ ಬೆಲೆಗಳನ್ನು (wholesale pricing) ಪಡೆಯಿರಿ. */
    public function sync_tlds(): array { ... }

    /** $domain_name ನ $tlds ನಲ್ಲಿ ಲಭ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N ವರ್ಷಗಳ TLD ಗಾಗಿ ಬೃಹತ್ ಬೆಲೆಯನ್ನು ಪಡೆಯಿರಿ. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** ಡೊಮೇನ್ ಅನ್ನು ನೋಂದಾಯಿಸಿ. ಯಶಸ್ವಿಯಾದರೆ ['success' => true, 'expiry_date' => '...'] ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** ಡೊಮೇನ್ ಅನ್ನು N ವರ್ಷಗಳವರೆಗೆ ನವೀಕರಿಸಿ. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** ನೋಂದಣಿ ಸ್ಥಿತಿ, expiry ದಿನಾಂಕ, nameservers ಪಡೆಯಿರಿ. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API credentials ಮತ್ತು ಸಂಪರ್ಕವನ್ನು ಪರೀಕ್ಷಿಸಿ. */
    public function test_connection(): array { ... }
}
```

### ಐಚ್ಛಿಕ ವಿಧಾನಗಳು (Optional methods)

ಹೆಚ್ಚುವರಿ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಇವುಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಿ. ಅಡ್-ಆನ್ `method_exists()` ಮೂಲಕ ಬೆಂಬಲವನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ:

| ವಿಧಾನ (Method) | ಅನ್‌ಲಾಕ್ ಮಾಡುತ್ತದೆ (Unlocks) |
|---|---|
| `supports_whois_privacy(): bool` | ಉತ್ಪನ್ನ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ WHOIS ಗೌಪ್ಯತಾ ಆಯ್ಕೆ |
| `enable_whois_privacy(string $domain_name): array` | ನೋಂದಣಿಯ ಸಮಯದಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗೌಪ್ಯತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ |
| `get_dns_records(string $domain_name): array` | ಗ್ರಾಹಕರ DNS ವೀ (Customer DNS view) ಟ್ಯಾಬ್ |
| `add_dns_record(string $domain_name, array $record_data): array` | ಗ್ರಾಹಕರು DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಸೇರಿಸಬಹುದು |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ಗ್ರಾಹಕರು DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಸಂಪಾದಿಸಬಹುದು |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ಗ್ರಾಹಕರು DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಅಳಿಸಬಹುದು |
| `update_nameservers(string $domain_name, array $nameservers): array` | nameserver ನಿರ್ವಹಣೆ |
| `get_epp_code(string $domain_name): array` | ಡೊಮೇನ್ ವರ್ಗಾವಣೆ (ಹೊರಗೆ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ಡೊಮೇನ್ ವರ್ಗಾವಣೆ (ಒಳಗೆ) |

### ಮರಳಿ ನೀಡುವ ಮೌಲ್ಯದ ನಿಯಮ (Return value convention)

ಎಲ್ಲಾ ವಿಧಾನಗಳು ಕನಿಷ್ಠ ಪಕ್ಷ `success` ಕೀ (key) ಹೊಂದಿರುವ ಒಂದು ಅರೇ (array) ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತವೆ:

```php
// ಯಶಸ್ಸು (Success)
return ['success' => true, 'data' => [...]];

// ವಿಫಲತೆ (Failure)
return ['success' => false, 'message' => 'ಮಾನವ-ಓದಲು ಸಾಧ್ಯವಾದದಷ್ಟು ಕಷ್ಟಕರವಾದ ದೋಷ ಸಂದೇಶ'];
```

---

## ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯವನ್ನು ನೋಂದಾಯಿಸುವುದು (Registering your capability)

ನಿಮ್ಮ ಕ್ಲಾಸ್ ಅನ್ನು `wu_domain_seller_register_capabilities` ಆಕ್ಷನ್ ಬಳಸಿ ನೋಂದಾಯಿಸಿ:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ಗೆ ಮೊದಲ ಆರ್ಗ್ಯುಮೆಂಟ್ (argument) ಎಂದರೆ **ಪೂರೈಕೆದಾರ ID** (provider ID) — ಇದು ಸೆಟ್ಟಿಂಗ್‌ಗಳು, ಉತ್ಪನ್ನ ಕಾನ್ಫಿಗರೇಶನ್ ಮತ್ತು ಲಾಗ್ ಚಾನೆಲ್‌ಗಳಲ್ಲಿ ನಿಮ್ಮ ರಿಜಿಸ್ಟ್ರಾರ್ ಅನ್ನು ಗುರುತಿಸಲು ಬಳಸುವ ಸಣ್ಣ ಅಕ್ಷರಗಳ ಸ್ಲಗ್ (lowercase slug). ಅನನ್ಯವಾದದ್ದನ್ನು ಬಳಸಿ (ಉದಾಹರಣೆಗೆ, ನಿಮ್ಮ ಕಂಪನಿಯ ಸ್ಲಗ್).

---

## ವಿಜಾರ್ಡ್‌ಗೆ credential ಕ್ಷೇತ್ರಗಳನ್ನು ಸೇರಿಸುವುದು (Adding credential fields to the wizard)

ಆಡಳಿತಗಾರರು (admins) ಸೆಟಪ್ ವಿಜಾರ್ಡ್ ಮೂಲಕ credentials ನಮೂದಿಸಲು ಅನುಮತಿಸಲು, ನಿಮ್ಮ ಏಕೀಕರಣವನ್ನು (integration) ನೋಂದಾಯಿಸಿ:

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

Credentials ಗಳನ್ನು ಫೀಲ್ಡ್ ID ಗಳನ್ನು ಕೀಗಳಾಗಿ ಬಳಸಿಕೊಂಡು ನೆಟ್‌ವರ್ಕ್ ಆಪ್ಷನ್‌ಗಳಾಗಿ (network options) ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ. ಅವುಗಳನ್ನು ನಿಮ್ಮ ಸಾಮರ್ಥ್ಯ ಕ್ಲಾಸ್‌ನಲ್ಲಿ `wu_get_setting('my_registrar_api_key')` ಬಳಸಿ ಪಡೆಯಿರಿ.

---

## ನೋಂದಣಿ ನಂತರದ ಕ್ರಿಯೆಗಳಿಗಾಗಿ ಹುಕ್‌ಗಳು (Hooks for post-registration actions)

ವೆಬ್‌ಹುಕ್‌ಗಳನ್ನು (webhooks), ಪ್ರೊವಿಷನಿಂಗ್ (provisioning), ಅಧಿಸೂಚನೆಗಳು (notifications) ಅಥವಾ CRM ಅಪ್‌ಡೇಟ್‌ಗಳನ್ನು décligering ಮಾಡಲು ಈ ಆಕ್ಷನ್‌ಗಳನ್ನು ಬಳಸಿ:

```php
// ಯಶಸ್ವಿ ಡೊಮೇನ್ ನೋಂದಣಿಯ ನಂತರ
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// ನೋಂದಣಿ ವಿಫಲವಾದ ನಂತರ
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// ಯಶಸ್ವಿ ನವೀಕರಣದ ನಂತರ
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // ನಿಮ್ಮ ಬಿಲ್ಲಿಂಗ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಅಪ್‌ಡೇಟ್ ಮಾಡಿ, ರಸೀದಿ ಕಳುಹಿಸಿ, ಇತ್ಯಾದಿ.
}, 10, 3);

// ನವೀಕರಣ ವಿಫಲವಾದ ನಂತರ
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // ಎಚ್ಚರಿಕೆ ನೀಡಿ, ಮರುಪ್ರಯತ್ನದ ತರ್ಕ (retry logic), ಇತ್ಯಾದಿ.
}, 10, 3);

// ಡೊಮೇನ್ ವರ್ಗಾವಣೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain ಎಂಬುದು ಒಂದು WP_Ultimo\Models\Domain object
}, 10, 2);

// SES DKIM verification ನಂತರ (SES integration ಸಕ್ರಿಯವಾಗಿದ್ದರೆ)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain ಎಂಬುದು ಒಂದು WP_Ultimo\Models\Domain object
});
```

---

## ಲಾಗಿಂಗ್ (Logging)

`wu_log_add()` ಬಳಸಿ ನಿಮ್ಮ ಪೂರೈಕೆದಾರ-ನಿರ್ದಿಷ್ಟ ಲಾಗ್ ಚಾನೆಲ್‌ಗೆ ಬರೆಯಿರಿ:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

ಲಾಗಿಗಳು **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** ಅಡಿಯಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.
