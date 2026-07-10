---
title: የብጁ የሪጅስትራ ውህደት መገንባት
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# የራጅስትራ ውህደት (Registrar Integration) መገንባት {#building-a-custom-registrar-integration}

የDomain Seller addon በ**Integration Registry** (የውህደት መመዝገቢያ) ስርዓት ላይ የተመሰረተ ነው። እያንዳንዱ ራጅስትራ (registrar) የ`Domain_Selling_Capability`ን የሚተገብር የPHP ክፍል (class) ሲሆን፣ በ`wu_domain_seller_register_capabilities` action hook አማካኝነት ራሱን ይመዘግባል።

ይህ መመሪያ የራጅስትራን (registrar) እንዴት በራሱ መንገድ (custom) ማስገባት እንደሚቻል ያሳያል።

## የኢንተርፌስ (The interface) {#the-interface}

ክፍልዎ (class) የ`WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`ን መተግበር እና `WP_Ultimo\Integrations\Base_Capability_Module`ን ማስፋት (extend) አለበት።

የሚፈለጉ ዘዴዎች (Required methods):

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- የሚያስፈልጉ ማንነት ዘዴዎች (Base_Capability_Module ላይ ያሉ) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // ሁልጊዜ 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Domainን በMy Registrar አማካኝነት መመዝገብ ይቻላል።', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- ዋና የሚያስፈልጉ ዘዴዎች (Domain_Selling_Capability ላይ ያሉ) ---

    /** ሁሉንም የሚገኙ TLDs እና የጅምላ ዋጋዎችን ያመጣል። */
    public function sync_tlds(): array { ... }

    /** የ$domain_nameን በ$tlds ውስጥ ያለውን ተገኝነት ይፈትናል። */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** ለN ዓመታት የTLD የጅምላ ዋጋ ያገኛል። */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** የዶሜይን ይመዘግባል። ስኬታማ ከሆነ ['success' => true, 'expiry_date' => '...'] ይመልሳል። */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** ዶሜይን ለN ዓመታት እድሳት ያደርጋል። */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** የዶሜይን መረጃ፣ የማብቂያ ቀን እና nameservers ያገኛል። */
    public function get_domain_info(string $domain_name): array { ... }

    /** የAPI መለያዎችን እና ግንኙነትን ይፈትናል። */
    public function test_connection(): array { ... }
}
```

### አማራጭ ዘዴዎች (Optional methods) {#optional-methods}

ተጨማሪ ባህሪያትን ለመክፈት እነዚህን ይተግብሩ። addon ድጋፉን በ`method_exists()` ይገነዘባል፡

| ዘዴ (Method) | የሚከፍተው (Unlocks) |
|---|---|
| `supports_whois_privacy(): bool` | በምርት ቅንብሮች ውስጥ የWHOIS ግላዊነት አማራጭ |
| `enable_whois_privacy(string $domain_name): array` | በምዝገባ ጊዜ በራስ-ሰር ግላዊነትን ማብራት |
| `get_dns_records(string $domain_name): array` | የደንበኛ DNS እይታ ትብሌ (tab) |
| `add_dns_record(string $domain_name, array $record_data): array` | ደንበኛው DNS recordዎችን የመጨመር አቅም |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ደንበኛው DNS recordዎችን የማርትዕ አቅም |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ደንበኛው DNS recordዎችን የማጥፋት አቅም |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver አስተዳደር |
| `get_epp_code(string $domain_name): array` | የዶሜይን ዝውውር (ወደ ውጭ) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | የዶሜይን ዝውውር (ወደ መግባት) |

### የውጤት እሴት ስምምነት (Return value convention) {#return-value-convention}

ሁሉም ዘዴዎች ቢያንስ `success` ቁልል የያዘ አርሬይ ይመልሳሉ፡

```php
// ስኬት
return ['success' => true, 'data' => [...]];

// ውድቀት
return ['success' => false, 'message' => 'በሰው ሊነበብ የሚችል ስህተት'];
```

---

## የችሎታዎን ምዝገባ (Registering your capability) {#registering-your-capability}

ክፍልዎን (class) በ`wu_domain_seller_register_capabilities` action በመጠቀም ይመዝግቡ፡

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

በ`add_capability()` ውስጥ ያለው የመጀመሪያው ክርክር (argument) **የአቅራቢ መለያ (provider ID)** ነው — ይህ በቅንብሮች፣ በምርት ውቅር (product configuration) እና በሎግ ሰርጦች ውስጥ የራጅስትራዎን ለመለየት የሚያገለግል ትንሽ ፊደል (slug) ነው። ልዩ የሆነ ነገር ይጠቀሙ (ለምሳሌ፣ የኩባንያዎ slug)።

---

## ለዊዛርድ የቅረንቲያል መስኮች መጨመር (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

አድሚንዎች በቅንብረጽ (setup wizard) ውስጥ መለያዎችን እንዲያስገቡ ከፈለጉ፣ ውህደቱን (integration) ይመዝግቡ፡

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

መለያዎች (Credentials) እንደ field IDs ቁልል በመጠቀም በኔትወርክ አማራጮች (network options) ውስጥ ይቀመጣሉ። በcapability classዎ ውስጥ በ`wu_get_setting('my_registrar_api_key')` አማካኝነት ያግኙዋቸዋል።

---

## ለድህረ-ምዝገባ ድርጊቶች Hooks (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

ዌብሆኮችን (webhooks)፣ አቅርቦትን (provisioning)፣ ማሳወቂያዎችን (notifications) ወይም CRM ዝመናዎችን ለማስነሳት እነዚህን actions ይጠቀሙ፡

```php
// ከስኬታማ የዶሜይን ምዝገባ በኋላ
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// ከምዝገባ ውድቀት በኋላ
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("የዶሜይን ምዝገባ አልተሳካም: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// ከስኬታማ እድሳት በኋላ
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // የሂሳብዎን ስርዓት ያዘምኑ፣ ደረሰኝ ይላኩ ወዘተ።
}, 10, 3);

// ከእድሳት ውድቀት በኋላ
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // ማስጠንቀቂያ፣ እንደገና የመሞከር አመክንዮ ወዘተ።
}, 10, 3);

// የዶሜይን ዝውውር ከተጠናቀቀ በኋላ
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain የWP_Ultimo\Models\Domain object ነው
}, 10, 2);

// ከSES DKIM ማረጋገጫ በኋላ (የSES ውህደት ከተሰራ)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain የWP_Ultimo\Models\Domain object ነው
});
```

---

## ሎግ ማድረግ (Logging) {#logging}

በ`wu_log_add()` በመጠቀም ለአቅራቢዎ የተለየ የሎግ ሰርጥ (log channel) ላይ ይጻፉ፡

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} በተሳካ ሁኔታ ተመዝግቧል", 'info');
wu_log_add('domain-seller-my-registrar', "ምዝገባ አልተሳካም: {$error}", 'error');
```

ሎጎች በ**Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** ስር ይታያሉ።
