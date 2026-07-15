---
title: მორგებული რეგისტრატორის ინტეგრაციის შექმნა
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# მორგებული რეგისტრატორის ინტეგრაციის შექმნა

Domain Seller addon იყენებს **Integration Registry** შაბლონს. თითოეული რეგისტრატორი არის PHP კლასი, რომელიც ახორციელებს `Domain_Selling_Capability`-ს და საკუთარ თავს არეგისტრირებს `wu_domain_seller_register_capabilities` action hook-ის მეშვეობით.

ეს სახელმძღვანელო აჩვენებს, როგორ ჩართოთ მორგებული რეგისტრატორი.

## ინტერფეისი {#the-interface}

თქვენმა კლასმა უნდა განახორციელოს `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` და გააფართოოს `WP_Ultimo\Integrations\Base_Capability_Module`.

სავალდებულო მეთოდები:

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

### არასავალდებულო მეთოდები {#optional-methods}

განახორციელეთ ესენი დამატებითი ფუნქციების გასახსნელად. addon მხარდაჭერას ამოიცნობს `method_exists()`-ის მეშვეობით:

| მეთოდი | ხსნის |
|---|---|
| `supports_whois_privacy(): bool` | WHOIS კონფიდენციალურობის ვარიანტი პროდუქტის პარამეტრებში |
| `enable_whois_privacy(string $domain_name): array` | რეგისტრაციისას ავტომატურად რთავს კონფიდენციალურობას |
| `get_dns_records(string $domain_name): array` | მომხმარებლის DNS ხედის ჩანართი |
| `add_dns_record(string $domain_name, array $record_data): array` | მომხმარებელს შეუძლია DNS ჩანაწერების დამატება |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | მომხმარებელს შეუძლია DNS ჩანაწერების რედაქტირება |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | მომხმარებელს შეუძლია DNS ჩანაწერების წაშლა |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver-ის მართვა |
| `get_epp_code(string $domain_name): array` | დომენის გადატანა (გამავალი) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | დომენის გადატანა (შემომავალი) |

### დაბრუნებული მნიშვნელობის კონვენცია {#return-value-convention}

ყველა მეთოდი აბრუნებს მასივს, რომელსაც მინიმუმ აქვს `success` გასაღები:

```php
// Success
return ['success' => true, 'data' => [...]];

// Failure
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## თქვენი შესაძლებლობის რეგისტრაცია {#registering-your-capability}

დაარეგისტრირეთ თქვენი კლასი `wu_domain_seller_register_capabilities` action-ის გამოყენებით:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`-ის პირველი არგუმენტი არის **provider ID** — პატარა ასოებით დაწერილი slug, რომელიც გამოიყენება თქვენი რეგისტრატორის იდენტიფიცირებისთვის პარამეტრებში, პროდუქტის კონფიგურაციასა და ლოგების არხებში. გამოიყენეთ რაიმე უნიკალური (მაგ., თქვენი კომპანიის slug).

---

## ავტორიზაციის მონაცემების ველების დამატება ოსტატში {#adding-credential-fields-to-the-wizard}

იმისთვის, რომ ადმინისტრატორებმა ავტორიზაციის მონაცემები setup wizard-ის მეშვეობით შეიყვანონ, დაარეგისტრირეთ თქვენი ინტეგრაცია:

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

ავტორიზაციის მონაცემები ინახება ქსელის პარამეტრებად, გასაღებებად ველის ID-ების გამოყენებით. მიიღეთ ისინი თქვენს შესაძლებლობის კლასში `wu_get_setting('my_registrar_api_key')`-ით.

---

## Hooks რეგისტრაციის შემდგომი მოქმედებებისთვის {#hooks-for-post-registration-actions}

გამოიყენეთ ეს actions ვებჰუკების, provisioning-ის, შეტყობინებების ან CRM განახლებების გასაშვებად:

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

## ჟურნალირება {#logging}

ჩაწერეთ თქვენი პროვაიდერისთვის სპეციფიკურ ჟურნალის არხში `wu_log_add()`-ის გამოყენებით:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

ჟურნალები გამოჩნდება **ქსელის ადმინისტრირება › Ultimate Multisite › ჟურნალები › domain-seller-my-registrar**-ში.
