---
title: एक कस्टम रजिस्ट्रार इंटीग्रेशन बनाना
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# कस्टम रजिस्ट्रार इंटीग्रेशन बनाना {#building-a-custom-registrar-integration}

Domain Seller addon एक **Integration Registry** पैटर्न का उपयोग करता है। प्रत्येक रजिस्ट्रार एक PHP क्लास होता है जो `Domain_Selling_Capability` को लागू करता है और `wu_domain_seller_register_capabilities` action hook के माध्यम से खुद को रजिस्टर करता है।

यह गाइड बताती है कि आप एक कस्टम रजिस्ट्रार को कैसे जोड़ सकते हैं।

## इंटरफ़ेस {#the-interface}

आपकी क्लास को `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` को लागू करना चाहिए और `WP_Ultimo\Integrations\Base_Capability_Module` को एक्सटेंड करना चाहिए।

आवश्यक मेथड्स:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- आवश्यक पहचान मेथड्स (Base_Capability_Module से) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // हमेशा 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar के माध्यम से डोमेन रजिस्ट्रेशन सक्षम करें।', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- मुख्य आवश्यक मेथड्स (Domain_Selling_Capability से) ---

    /** सभी उपलब्ध TLDs और थोक मूल्य निर्धारण (wholesale pricing) प्राप्त करें। */
    public function sync_tlds(): array { ... }

    /** $domain_name की उपलब्धता $tlds में जांचें। */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** N वर्षों के लिए TLD का थोक मूल्य प्राप्त करें। */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** एक डोमेन रजिस्टर करें। सफलता पर ['success' => true, 'expiry_date' => '...'] लौटाता है। */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** N वर्षों के लिए डोमेन रिन्यू करें। */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** रजिस्ट्रेशन स्टेटस, एक्सपायरी डेट, नेमसर्वर प्राप्त करें। */
    public function get_domain_info(string $domain_name): array { ... }

    /** API क्रेडेंशियल्स और कनेक्टिविटी का परीक्षण करें। */
    public function test_connection(): array { ... }
}
```

### वैकल्पिक मेथड्स {#optional-methods}

अतिरिक्त फीचर्स को अनलॉक करने के लिए इन्हें लागू करें। addon `method_exists()` के माध्यम से सपोर्ट का पता लगाता है:

| Method | अनलॉक करता है |
|---|---|
| `supports_whois_privacy(): bool` | प्रोडक्ट सेटिंग्स में WHOIS प्राइवेसी विकल्प |
| `enable_whois_privacy(string $domain_name): array` | रजिस्ट्रेशन पर ऑटोमैटिकली प्राइवेसी सक्षम करना |
| `get_dns_records(string $domain_name): array` | कस्टमर DNS व्यू टैब |
| `add_dns_record(string $domain_name, array $record_data): array` | कस्टमर DNS रिकॉर्ड जोड़ सकता है |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | कस्टमर DNS रिकॉर्ड एडिट कर सकता है |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | कस्टमर DNS रिकॉर्ड डिलीट कर सकता है |
| `update_nameservers(string $domain_name, array $nameservers): array` | नेमसर्वर मैनेजमेंट |
| `get_epp_code(string $domain_name): array` | डोमेन ट्रांसफर (बाहर) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | डोमेन ट्रांसफर (अंदर) |

### रिटर्न वैल्यू कन्वेंशन {#return-value-convention}

सभी मेथड्स एक array लौटाते हैं जिसमें कम से कम एक `success` key होता है:

```php
// सफलता
return ['success' => true, 'data' => [...]];

// विफलता
return ['success' => false, 'message' => 'मानव-पठनीय त्रुटि'];
```

---

## अपनी कैपेबिलिटी रजिस्टर करना {#registering-your-capability}

अपनी क्लास को `wu_domain_seller_register_capabilities` action का उपयोग करके रजिस्टर करें:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` का पहला argument **provider ID** होता है — यह एक लोअरकेस स्लग होता है जिसका उपयोग सेटिंग्स, प्रोडक्ट कॉन्फ़िगरेशन और लॉग चैनलों में आपके रजिस्ट्रार की पहचान करने के लिए किया जाता है। कुछ अद्वितीय (unique) उपयोग करें (उदाहरण के लिए, आपकी कंपनी का स्लग)।

---

## विज़ार्ड में क्रेडेंशियल फ़ील्ड जोड़ना {#adding-credential-fields-to-the-wizard}

एडमिन को सेटअप विज़ार्ड के माध्यम से क्रेडेंशियल दर्ज करने देने के लिए, अपने इंटीग्रेशन को रजिस्टर करें:

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

क्रेडेंशियल्स को field IDs का उपयोग करके keys के रूप में नेटवर्क ऑप्शंस (network options) के रूप में स्टोर किया जाता है। इन्हें अपनी कैपेबिलिटी क्लास में `wu_get_setting('my_registrar_api_key')` का उपयोग करके प्राप्त करें।

---

## पोस्ट-रजिस्ट्रेशन एक्शन के लिए हुक्स {#hooks-for-post-registration-actions}

वेबहुक्स (webhooks), प्रोविजनिंग, नोटिफिकेशन, या CRM अपडेट को ट्रिगर करने के लिए इन actions का उपयोग करें:

```php
// सफल डोमेन रजिस्ट्रेशन के बाद
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// रजिस्ट्रेशन विफलता के बाद
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// सफल रिन्यूअल के बाद
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // अपने बिलिंग सिस्टम को अपडेट करें, रसीद भेजें, आदि।
}, 10, 3);

// रिन्यूअल विफलता के बाद
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // अलर्ट, रीट्राय लॉजिक, आदि।
}, 10, 3);

// डोमेन ट्रांसफर पूरा होने के बाद
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain एक WP_Ultimo\Models\Domain object है
}, 10, 2);

// SES DKIM वेरिफिकेशन के बाद (यदि SES इंटीग्रेशन सक्रिय है)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain एक WP_Ultimo\Models\Domain object है
});
```

---

## लॉगिंग {#logging}

`wu_log_add()` का उपयोग करके अपने प्रोवाइडर-विशिष्ट लॉग चैनल में लिखें:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

लॉग **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** के तहत दिखाई देंगे।
