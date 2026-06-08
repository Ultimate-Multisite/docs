---
title: การสร้างระบบเชื่อมต่อกับ Registrar แบบกำหนดเอง
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# การสร้างระบบเชื่อมต่อ Registrar แบบกำหนดเอง

Addon Domain Seller ใช้รูปแบบที่เรียกว่า **Integration Registry** (ทะเบียนระบบเชื่อมต่อ) โดย Registrar แต่ละตัวจะเป็นคลาส PHP ที่ต้อง implement `Domain_Selling_Capability` และลงทะเบียนตัวเองผ่าน action hook ที่ชื่อว่า `wu_domain_seller_register_capabilities`

คู่มือนี้จะแสดงวิธีการเชื่อมต่อ Registrar แบบกำหนดเองของคุณ

## Interface (ส่วนติดต่อ)

คลาสของคุณจะต้อง implement `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` และ extend `WP_Ultimo\Integrations\Base_Capability_Module`

เมธอดที่จำเป็น:

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

### Optional methods (เมธอดทางเลือก)

คุณสามารถ implement เมธอดเหล่านี้เพื่อปลดล็อกฟีเจอร์เพิ่มเติม Addon จะตรวจจับการรองรับผ่าน `method_exists()`:

| Method | Unlocks (ปลดล็อก) |
|---|---|
| `supports_whois_privacy(): bool` | ตัวเลือก WHOIS privacy ในการตั้งค่าสินค้า |
| `enable_whois_privacy(string $domain_name): array` | เปิดใช้งานความเป็นส่วนตัวโดยอัตโนมัติเมื่อลงทะเบียน |
| `get_dns_records(string $domain_name): array` | แท็บดู DNS ของลูกค้า |
| `add_dns_record(string $domain_name, array $record_data): array` | ลูกค้าสามารถเพิ่ม DNS records ได้ |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | ลูกค้าสามารถแก้ไข DNS records ได้ |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | ลูกค้าสามารถลบ DNS records ได้ |
| `update_nameservers(string $domain_name, array $nameservers): array` | การจัดการ Nameserver |
| `get_epp_code(string $domain_name): array` | การโอนย้ายโดเมน (ขาออก) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | การโอนย้ายโดเมน (ขาเข้า) |

### Return value convention (รูปแบบค่าที่ส่งกลับ)

เมธอดทั้งหมดจะต้องส่งคืนค่าเป็น array ที่มีคีย์ `success` อย่างน้อย:

```php
// Success (สำเร็จ)
return ['success' => true, 'data' => [...]];

// Failure (ล้มเหลว)
return ['success' => false, 'message' => 'ข้อความแสดงข้อผิดพลาดที่มนุษย์อ่านได้'];
```

---

## การลงทะเบียน Capability ของคุณ

ให้ลงทะเบียนคลาสของคุณโดยใช้ action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

อาร์กิวเมนต์ตัวแรกของ `add_capability()` คือ **provider ID** ซึ่งเป็น slug ตัวพิมพ์เล็กที่ใช้ระบุ Registrar ของคุณในการตั้งค่า, การกำหนดค่าสินค้า, และช่องบันทึก (log channels) ควรใช้ชื่อที่ไม่ซ้ำใคร (เช่น slug ของบริษัทคุณ)

---

## การเพิ่มช่องข้อมูล Credential ใน Wizard

หากต้องการให้ผู้ดูแลระบบกรอกข้อมูล Credential ผ่าน setup wizard ให้ลงทะเบียน integration ของคุณ:

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

Credential จะถูกจัดเก็บเป็น network options โดยใช้ field IDs เป็นคีย์ คุณสามารถดึงค่าเหล่านี้ในคลาส capability ของคุณได้ด้วย `wu_get_setting('my_registrar_api_key')`

---

## Hooks สำหรับการดำเนินการหลังการลงทะเบียน

ใช้ action เหล่านี้เพื่อเรียกใช้ webhooks, การ Provisioning, การแจ้งเตือน, หรือการอัปเดต CRM:

```php
// หลังจากลงทะเบียนโดเมนสำเร็จ
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// หลังจากลงทะเบียนล้มเหลว
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// หลังจากต่ออายุสำเร็จ
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // อัปเดตระบบการเรียกเก็บเงินของคุณ, ส่งใบเสร็จ, ฯลฯ
}, 10, 3);

// หลังจากต่ออายุล้มเหลว
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // แจ้งเตือน, ตรรกะการลองใหม่, ฯลฯ
}, 10, 3);

// หลังจากโอนย้ายโดเมนเสร็จสมบูรณ์
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain คือ object ของ WP_Ultimo\Models\Domain
}, 10, 2);

// หลังจากตรวจสอบ SES DKIM (หากมีการเปิดใช้งาน SES integration)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain คือ object ของ WP_Ultimo\Models\Domain
});
```

---

## Logging (การบันทึกข้อมูล)

ให้เขียนข้อมูลลงในช่องบันทึกเฉพาะของ provider ของคุณโดยใช้ `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

บันทึกข้อมูลจะปรากฏภายใต้ **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**
