---
title: தனிப்பயன் பதிவாளர் ஒருங்கிணைப்பை உருவாக்குதல்
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# தனிப்பயன் பதிவாளர் ஒருங்கிணைப்பை உருவாக்குதல் {#building-a-custom-registrar-integration}

Domain Seller addon ஆனது ஒரு **Integration Registry** முறையைப் பயன்படுத்துகிறது. ஒவ்வொரு பதிவாளரும் (registrar) `Domain_Selling_Capability` என்ற PHP class-ஐ செயல்படுத்தி, `wu_domain_seller_register_capabilities` என்ற action hook மூலம் தன்னை பதிவுசெய்துகொள்கிறது.

ஒரு தனிப்பயன் பதிவாளரை எப்படி இணைப்பது என்று இந்தக் கையேடு காட்டுகிறது.

## இடைமுகம் (The interface) {#the-interface}

உங்கள் class ஆனது `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` என்பதை செயல்படுத்தி, `WP_Ultimo\Integrations\Base_Capability_Module` என்பதை extend செய்ய வேண்டும்.

தேவையான methods:

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

### விருப்பமான methods (Optional methods) {#optional-methods}

கூடுதல் அம்சங்களை திறக்க இவற்றைச் செயல்படுத்தவும். addon ஆனது `method_exists()` மூலம் ஆதரவை கண்டறிகிறது:

| Method | Unlocks |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS privacy option in product settings |
| `enable_whois_privacy(string $domain_name): array` | Auto-enables privacy at registration |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer can add DNS records |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer can edit DNS records |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer can delete DNS records |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver management |
| `get_epp_code(string $domain_name): array` | Domain transfer (outgoing) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transfer (incoming) |

### திரும்பும் மதிப்பு மரபு (Return value convention) {#return-value-convention}

அனைத்து methods-களும் குறைந்தபட்சம் ஒரு `success` key உடன் கூடிய array-ஐ திரும்ப அளிக்கும்:

```php
// வெற்றி (Success)
return ['success' => true, 'data' => [...]];

// தோல்வி (Failure)
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## உங்கள் capability-ஐப் பதிவு செய்தல் (Registering your capability) {#registering-your-capability}

உங்கள் class-ஐ `wu_domain_seller_register_capabilities` என்ற action மூலம் பதிவு செய்யுங்கள்:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-க்கான முதல் argument தான் **provider ID** — இது ஒரு lowercase slug. இது உங்கள் பதிவாளரை settings, product configuration மற்றும் log channels ஆகியவற்றில் அடையாளம் காணப் பயன்படுகிறது. தனித்துவமான ஒன்றைப் பயன்படுத்துங்கள் (உதாரணமாக, உங்கள் நிறுவனத்தின் slug).

---

## wizard-ல் credential fields சேர்ப்பது (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

நிர்வாகிகள் (admins) setup wizard மூலம் credentials-ஐ உள்ளிட அனுமதிக்க, உங்கள் integration-ஐப் பதிவு செய்யுங்கள்:

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

Credentials-கள் field IDs-ஐ keys ஆகப் பயன்படுத்தி network options ஆக சேமிக்கப்படும். அவற்றை உங்கள் capability class-ல் `wu_get_setting('my_registrar_api_key')` மூலம் பெறலாம்.

---

## post-registration actions க்கான Hooks {#hooks-for-post-registration-actions}

webhooks, provisioning, notifications அல்லது CRM updates ஆகியவற்றைத் தூண்ட இந்த actions-களைப் பயன்படுத்தவும்:

```php
// வெற்றிகரமான domain registration முடிந்த பிறகு
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// registration தோல்வியடைந்த பிறகு
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// வெற்றிகரமான renewal முடிந்த பிறகு
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // உங்கள் billing system-ஐ update செய்யவும், ரசீது அனுப்பவும், etc.
}, 10, 3);

// renewal தோல்வியடைந்த பிறகு
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert, retry logic, etc.
}, 10, 3);

// domain transfer முடிந்த பிறகு
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain என்பது ஒரு WP_Ultimo\Models\Domain object
}, 10, 2);

// SES DKIM verification முடிந்த பிறகு (if SES integration is active)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain என்பது ஒரு WP_Ultimo\Models\Domain object
});
```

---

## Logging {#logging}

`wu_log_add()` ஐப் பயன்படுத்தி உங்கள் provider-specific log channel-ல் எழுதவும்:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs ஆனது **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** என்ற இடத்தில் தோன்றும்.
