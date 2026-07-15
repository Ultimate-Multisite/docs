---
title: सानुकूल रजिस्ट्रार एकत्रीकरण विकसित करणे
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# कस्टम रजिस्ट्रार इंटिग्रेशन कसे तयार करावे

Domain Seller addon मध्ये **Integration Registry** नावाचा पॅटर्न वापरला जातो. प्रत्येक रजिस्ट्रार (registrar) ही एक PHP class असते जी `Domain_Selling_Capability` ला implement करते आणि `wu_domain_seller_register_capabilities` action hook द्वारे स्वतःची नोंदणी करते.

या गाइडमध्ये आपण एक कस्टम रजिस्ट्रार कसे जोडायचे हे पाहू.

## इंटरफेस (The interface) {#the-interface}

तुमच्या क्लासला `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` implement करणे आवश्यक आहे आणि `WP_Ultimo\Integrations\Base_Capability_Module` ला extend करणे आवश्यक आहे.

आवश्यक मेथड्स (Required methods):

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- आवश्यक identity मेथड्स (Base_Capability_Module मधून) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // नेहमी 'domain-selling'
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

    // --- मुख्य आवश्यक मेथड्स (Domain_Selling_Capability मधून) ---

    /** सर्व उपलब्ध TLDs आणि wholesale किंमत सिंक करा. */
    public function sync_tlds(): array { ... }

    /** $domain_name ची $tlds मध्ये उपलब्धता तपासा. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N वर्षांसाठी TLD ची wholesale किंमत मिळवा. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** डोमेन नोंदणी करा. यशस्वी झाल्यास ['success' => true, 'expiry_date' => '...'] परत करा. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** N वर्षांसाठी डोमेन नूतनीकरण करा. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** नोंदणी स्थिती, expiry date, nameservers मिळवा. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API credentials आणि कनेक्टिव्हिटी तपासा. */
    public function test_connection(): array { ... }
}
```

### पर्यायी मेथड्स (Optional methods) {#optional-methods}

अतिरिक्त फीचर्स अनलॉक करण्यासाठी या मेथड्स implement करा. addon `method_exists()` द्वारे सपोर्ट तपासतो:

| Method | काय अनलॉक होते |
|---|---|
| `supports_whois_privacy(): bool` | प्रोडक्ट सेटिंग्जमध्ये WHOIS privacy पर्याय |
| `enable_whois_privacy(string $domain_name): array` | नोंदणीच्या वेळी आपोआप privacy सक्षम करणे |
| `get_dns_records(string $domain_name): array` | ग्राहक DNS view टॅब |
| `add_dns_record(string $domain_name, array $record_data): array` | ग्राहक DNS records जोडू शकतो |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ग्राहक DNS records एडिट करू शकतो |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ग्राहक DNS records डिलीट करू शकतो |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver व्यवस्थापन |
| `get_epp_code(string $domain_name): array` | डोमेन ट्रान्सफर (बाहेर जाणारे) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | डोमेन ट्रान्सफर (आत येणारे) |

### रिटर्न व्हॅल्यू कन्व्हेन्शन (Return value convention) {#return-value-convention}

सर्व मेथड्स किमान `success` की (key) असलेला array परत करतात:

```php
// यश (Success)
return ['success' => true, 'data' => [...]];

// अपयश (Failure)
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## तुमची capability नोंदणी करणे (Registering your capability) {#registering-your-capability}

तुमच्या क्लासची नोंदणी करण्यासाठी `wu_domain_seller_register_capabilities` action चा वापर करा:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` चा पहिला argument म्हणजे **provider ID** — हा एक lowercase slug असतो जो सेटिंग्ज, प्रोडक्ट कॉन्फिगरेशन आणि log channels मध्ये तुमच्या रजिस्ट्रारला ओळखण्यासाठी वापरला जातो. काहीतरी युनिक (unique) वापरा (उदा. तुमच्या कंपनीचा slug).

---

## विझार्डमध्ये credential फील्ड जोडणे (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

ॲडमिनला सेटअप विझार्डमधून credentials एंटर करण्याची परवानगी देण्यासाठी, तुमची इंटिग्रेशन नोंदणी करा:

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

Credentials हे field IDs ला keys म्हणून वापरून network options मध्ये साठवले जातात. ते तुमच्या capability क्लासमध्ये `wu_get_setting('my_registrar_api_key')` वापरून मिळवा.

---

## पोस्ट-नोंदणी क्रियाकलापांसाठी हुक्स (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

वेबहुक्स (webhooks), प्रोव्हिजनिंग (provisioning), सूचना (notifications), किंवा CRM अपडेट ट्रिगर करण्यासाठी या actions चा वापर करा:

```php
// यशस्वी डोमेन नोंदणीनंतर (After successful domain registration)
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// नोंदणी अयशस्वी झाल्यावर (After registration failure)
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// यशस्वी नूतनीकरणानंतर (After successful renewal)
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // तुमचे बिलिंग सिस्टीम अपडेट करा, पावती पाठवा, इत्यादी.
}, 10, 3);

// नूतनीकरण अयशस्वी झाल्यावर (After renewal failure)
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // अलर्ट, retry logic, इत्यादी.
}, 10, 3);

// डोमेन ट्रान्सफर पूर्ण झाल्यावर (After domain transfer completes)
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain हे एक WP_Ultimo\Models\Domain object आहे
}, 10, 2);

// SES DKIM verification नंतर (जर SES integration सक्रिय असेल तर)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain हे एक WP_Ultimo\Models\Domain object आहे
});
```

---

## लॉगिंग (Logging) {#logging}

`wu_log_add()` वापरून तुमच्या provider-specific log channel मध्ये लिहा:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Logs **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** येथे दिसतील.
