---
title: စိတ်ကြိုက် မှတ်ပုံတင်သူ ပေါင်းစပ်မှုတစ်ခု တည်ဆောက်ခြင်း
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# စိတ်ကြယ်မှုအလိုက် မှတ်ပုံတင်သူ (Registrar) ပေါင်းစပ်မှု တည်ဆောက်ခြင်း {#building-a-custom-registrar-integration}

Domain Seller addon သည် **Integration Registry** ပုံစံကို အသုံးပြုထားပါသည်။ မှတ်ပုံတင်သူ (registrar) တစ်ဦးချင်းစီသည် `Domain_Selling_Capability` ကို အကောင်အထည်ဖော်သည့် PHP class တစ်ခုဖြစ်ပြီး `wu_domain_seller_register_capabilities` action hook မှတစ်ဆင့် မိမိကိုယ်ကို မှတ်ပုံတင်ပါသည်။

ဤလမ်းညွှန်ချက်သည် စိတ်ကြယ်မှုအလိုက် မှတ်ပုံတင်သူ (custom registrar) တစ်ဦးကို မည်သို့ ချိတ်ဆက်ရမည်ကို ပြသထားပါသည်။

## Interface (အင်တာဖေ့စ်) {#the-interface}

သင့် class သည် `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ကို အကောင်အထည်ဖော်ရမည်ဖြစ်ပြီး `WP_Ultimo\Integrations\Base_Capability_Module` ကို ဆင့်ကဲရမည်။

လိုအပ်သော methods များမှာ-

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- လိုအပ်သော အထောက်အထား methods များ (Base_Capability_Module မှ) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // အမြဲတမ်း 'domain-selling' ဖြစ်ရမည်
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar မှတစ်ဆင့် domain မှတ်ပုံတင်ခြင်းကို လုပ်ဆောင်နိုင်မည်။', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- အဓိက လိုအပ်သော methods များ (Domain_Selling_Capability မှ) ---

    /** ရရှိနိုင်သော TLD အားလုံးနှင့် လက်ကားစျေးနှုန်းများကို ဆင်မြန်းယူပါ။ */
    public function sync_tlds(): array { ... }

    /** $domain_name ၏ $tlds အနှံ့အပြားရှိ ရရှိနိုင်မှုကို စစ်ဆေးပါ။ */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** TLD တစ်ခုအတွက် နှစ်ပေါင်း N အတွက် လက်ကားစျေးနှုန်းကို ရယူပါ။ */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** domain တစ်ခုကို မှတ်ပုံတင်ပါ။ အောင်မြင်ပါက ['success' => true, 'expiry_date' => '...'] ကို ပြန်ပေးသည်။ */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** domain တစ်ခုကို နှစ်ပေါင်း N အတွက် သက်တမ်းတိုးပါ။ */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** မှတ်ပုံတင်မှု အခြေအနေ၊ သက်တမ်းကုန်ဆုံးရက်၊ nameservers များကို ရယူပါ။ */
    public function get_domain_info(string $domain_name): array { ... }

    /** API အထောက်အထားများနှင့် ချိတ်ဆက်မှုအား စမ်းသပ်ပါ။ */
    public function test_connection(): array { ... }
}
```

### Optional methods များ {#optional-methods}

အပိုဆောင်း feature များကို ဖွင့်လှစ်ရန် ဤ methods များကို အကောင်အထည်ဖော်ပါ။ addon သည် `method_exists()` မှတစ်ဆင့် ပံ့ပိုးမှုရှိ၊ မရှိ သိရှိပါသည်။

| Method | ဖွင့်ပေးသည့်အရာ |
|---|---|
| `supports_whois_privacy(): bool` | Product settings တွင် WHOIS privacy ရွေးချယ်မှု |
| `enable_whois_privacy(string $domain_name): array` | မှတ်ပုံတင်ချိန်တွင် အလိုအလျောက် privacy ဖွင့်ပေးခြင်း |
| `get_dns_records(string $domain_name): array` | Customer DNS view tab |
| `add_dns_record(string $domain_name, array $record_data): array` | Customer မှ DNS records များ ထည့်သွင်းနိုင်ခြင်း |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Customer မှ DNS records များကို တည်းဖြတ်နိုင်ခြင်း |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Customer မှ DNS records များကို ဖျက်နိုင်ခြင်း |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver စီမံခန့်ခွဲမှု |
| `get_epp_code(string $domain_name): array` | Domain လွှဲပြောင်းခြင်း (ထွက်ခွာခြင်း) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain လွှဲပြောင်းခြင်း (ဝင်ရောက်ခြင်း) |

### Return value စံနှုန်း {#return-value-convention}

methods အားလုံးသည် အနည်းဆုံး `success` key ပါဝင်သည့် array တစ်ခုကို ပြန်ပေးရမည်-

```php
// အောင်မြင်မှု
return ['success' => true, 'data' => [...]];

// ကျရှုံးမှု
return ['success' => false, 'message' => 'လူသားဖတ်ရလွယ်သော အမှား'];
```

---

## Capability ကို မှတ်ပုံတင်ခြင်း {#registering-your-capability}

သင့် class ကို `wu_domain_seller_register_capabilities` action ဖြင့် မှတ်ပုံတင်ပါ။

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` ၏ ပထမဆုံး argument သည် **provider ID** ဖြစ်သည် — ၎င်းသည် settings များ၊ product configuration နှင့် log channels များတွင် သင့် registrar ကို ခွဲခြားသတ်မှတ်ရန် အသုံးပြုသည့် lowercase slug တစ်ခုဖြစ်သည်။ ထူးခြားသည့်အရာတစ်ခုကို အသုံးပြုပါ (ဥပမာ- သင့်ကုမ္ပဏီ၏ slug)။

---

## Wizard တွင် credential field များ ထည့်ခြင်း {#adding-credential-fields-to-the-wizard}

Admin များအား setup wizard မှတစ်ဆင့် credential များ ထည့်သွင်းနိုင်စေရန်၊ သင့် integration ကို မှတ်ပုံတင်ပါ။

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

Credentials များကို field ID များကို key အဖြစ် အသုံးပြု၍ network options အနေဖြင့် သိမ်းဆည်းထားပါသည်။ ၎င်းတို့ကို သင့် capability class တွင် `wu_get_setting('my_registrar_api_key')` ဖြင့် ပြန်ရယူနိုင်ပါသည်။

---

## Post-registration လုပ်ဆောင်မှုများအတွက် Hooks များ {#hooks-for-post-registration-actions}

webhooks များ၊ provisioning များ၊ notification များ သို့မဟုတ် CRM အပ်ဒိတ်များ ဖြစ်ပေါ်စေရန် ဤ actions များကို အသုံးပြုပါ။

```php
// domain အောင်မြင်စွာ မှတ်ပုံတင်ပြီးနောက်
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// မှတ်ပုံတင်မှု ကျရှုံးပြီးနောက်
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// သက်တမ်းတိုးခြင်း အောင်မြင်ပြီးနောက်
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // သင့် billing system ကို update လုပ်ပါ၊ receipt ပို့ပါ စသည်ဖြင့်
}, 10, 3);

// သက်တမ်းတိုးခြင်း ကျရှုံးပြီးနောက်
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Alert ပေးပါ၊ retry logic စသည်ဖြင့်
}, 10, 3);

// domain လွှဲပြောင်းမှု ပြီးဆုံးပြီးနောက်
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain သည် WP_Ultimo\Models\Domain object တစ်ခုဖြစ်သည်။
}, 10, 2);

// SES DKIM စစ်ဆေးမှု ပြီးဆုံးပြီးနောက် (SES integration အသက်ဝင်ပါက)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain သည် WP_Ultimo\Models\Domain object တစ်ခုဖြစ်သည်။
});
```

---

## Logging (မှတ်တမ်းတင်ခြင်း) {#logging}

`wu_log_add()` ကို အသုံးပြု၍ သင့် provider-specific log channel တွင် ရေးသားပါ။

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

Log များသည် **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** အောက်တွင် ပေါ်လာမည်ဖြစ်သည်။
